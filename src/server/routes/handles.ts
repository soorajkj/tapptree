import { hono } from "@/lib/hono";
import { authMiddleware } from "../middlewares/auth";
import { zValidator } from "@hono/zod-validator";
import {
  archiveHandleSchema,
  createHandleSchema,
  reorderHandlesSchema,
  updateHandleSchema,
} from "@/utils/zod/handles";
import z from "zod/v3";
import { filterUndefined } from "@/utils/filterUndefined";

const handles = hono
  .createApp()
  .get("/", authMiddleware, async (c) => {
    const user = c.get("user");
    const db = c.get("db");

    const links = await db.handle.findMany({
      where: { userId: user?.id },
      include: { platform: true },
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    return c.json(links, 200);
  })
  .post(
    "/",
    authMiddleware,
    zValidator("json", createHandleSchema),
    async (c) => {
      const user = c.get("user");
      const db = c.get("db");
      const { platformId, url } = c.req.valid("json");

      const platform = await db.platform.findUnique({
        where: { id: platformId },
      });

      if (!platform) {
        return c.json({ error: "Platform not found" }, 400);
      }

      if (!user) return;

      const existing = await db.handle.findUnique({
        where: {
          platformId_userId: {
            platformId,
            userId: user?.id,
          },
        },
      });

      if (existing) {
        return c.json({ error: "Social link already exists" }, 409);
      }

      const lastHandle = await db.handle.findFirst({
        where: { userId: user?.id },
        orderBy: { order: "desc" },
        select: { order: true },
      });

      const link = await db.handle.create({
        data: {
          userId: user.id,
          platformId,
          url,
          order: lastHandle ? lastHandle.order + 1 : 0,
        },
        include: {
          platform: true,
        },
      });

      return c.json(link, 201);
    }
  )
  .patch(
    "/reorder",
    authMiddleware,
    zValidator("json", reorderHandlesSchema),
    async (c) => {
      const { platformIds } = c.req.valid("json");
      const user = c.get("user");
      const db = c.get("db");

      if (!user) return;

      await db.$transaction(
        platformIds.map((platformId, index) =>
          db.handle.update({
            where: {
              platformId_userId: {
                platformId,
                userId: user?.id,
              },
            },
            data: { order: index },
          })
        )
      );

      const updatedHandles = await db.handle.findMany({
        where: { userId: user.id },
        include: { platform: true },
        orderBy: { order: "asc" },
      });

      return c.json(updatedHandles);
    }
  )
  .patch(
    "/:id/archive",
    authMiddleware,
    zValidator("param", z.object({ id: z.string() })),
    zValidator("json", archiveHandleSchema),
    async (c) => {
      const { id } = c.req.valid("param");
      const { archive } = c.req.valid("json");
      const user = c.get("user");

      const db = c.get("db");

      await db.handle.updateMany({
        where: { id, userId: user?.id },
        data: { archive },
      });

      return c.json("Archive status updated");
    }
  )
  .patch(
    "/:id",
    authMiddleware,
    zValidator("param", z.object({ id: z.string() })),
    zValidator("json", updateHandleSchema),
    async (c) => {
      const { url } = c.req.valid("json");
      const { id } = c.req.valid("param");
      const user = c.get("user");

      const db = c.get("db");
      const filteredUpdateData = filterUndefined({ url });
      await db.handle.updateMany({
        where: {
          id,
          userId: user?.id,
        },
        data: filteredUpdateData,
      });

      return c.json("Done");
    }
  )
  .delete(
    "/:id",
    authMiddleware,
    zValidator("param", z.object({ id: z.string() })),
    async (c) => {
      const { id } = c.req.valid("param");
      const db = c.get("db");
      const user = c.get("user");

      // 1. Find the handle being deleted
      const handle = await db.handle.findUnique({
        where: { id },
        select: { order: true },
      });

      if (!handle) {
        return c.json({ error: "Handle not found" }, 404);
      }

      // 2. Delete it
      await db.handle.delete({
        where: { id },
      });

      // 3. Find and shift all handles with order > deleted one
      await db.handle.updateMany({
        where: {
          userId: user?.id,
          order: { gt: handle.order },
        },
        data: {
          order: {
            decrement: 1,
          },
        },
      });

      return c.json("Deleted & Reordered");
    }
  );

export default handles;
