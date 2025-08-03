import { hono } from "@/lib/hono";

const debug = hono.createApp().get("/", async (c) => {
  return c.json("Hono debug route", 200);
});

export default debug;
