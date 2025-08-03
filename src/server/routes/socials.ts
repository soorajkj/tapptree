import { hono } from "@/lib/hono";
import { authMiddleware } from "../middlewares/auth";
import { zValidator } from "@hono/zod-validator";
import { createSocialLinkSchema } from "@/utils/validators/socials";

const socials = hono
  .createApp()
  .get("/", authMiddleware, async (c) => {
    const payload = c.get("jwtPayload");
    const db = c.get("db");

    const links = await db.socialLink.findMany({
      where: { userId: payload.id, archive: false },
      include: {
        platform: true,
      },
      orderBy: {
        order: "asc",
      },
    });

    return c.json(links, 200);
  })
  .post(
    "/",
    authMiddleware,
    zValidator("json", createSocialLinkSchema),
    async (c) => {
      const payload = c.get("jwtPayload");
      const db = c.get("db");
      const { platformId, url } = c.req.valid("json");

      const platform = await db.socialPlatform.findUnique({
        where: { id: platformId },
      });

      if (!platform) {
        return c.json({ error: "Platform not found" }, 400);
      }

      const existing = await db.socialLink.findUnique({
        where: {
          platformId_userId: {
            platformId,
            userId: payload.id,
          },
        },
      });

      if (existing) {
        return c.json({ error: "Social link already exists" }, 409);
      }

      const link = await db.socialLink.create({
        data: {
          userId: payload.id,
          platformId,
          url,
        },
        include: {
          platform: true,
        },
      });

      return c.json(link, 201);
    }
  );

export default socials;
