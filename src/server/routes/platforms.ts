import { hono } from "@/lib/hono";
import { authMiddleware } from "../middlewares/auth";

const platforms = hono.createApp().get("/", authMiddleware, async (c) => {
  const db = c.get("db");
  const platforms = await db.platform.findMany({
    where: { archive: false },
  });

  return c.json(platforms, 200);
});

export default platforms;
