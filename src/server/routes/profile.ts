import { hono } from "@/lib/hono";
import { zValidator } from "@hono/zod-validator";
import z from "zod/v3";

const profile = hono
  .createApp()
  .get(
    "/:username",
    zValidator("param", z.object({ username: z.string() })),
    async (c) => {
      const { username } = c.req.valid("param");
      const db = c.get("db");
      const user = await db.user.findFirst({
        where: { username },
        select: {
          id: true,
          username: true,
          name: true,
          profile: {
            select: {
              displayName: true,
              bio: true,
              contactEmail: true,
              phone: true,
              address: true,
              website: true,
            },
          },
          handles: {
            where: { archive: false },
            orderBy: { order: "asc" },
            select: {
              id: true,
              url: true,
              platform: {
                select: {
                  name: true,
                  baseUrl: true,
                  icon: true,
                },
              },
            },
          },
        },
      });
      return c.json(user, 200);
    }
  );

export default profile;
