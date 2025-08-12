import { hono } from "@/lib/hono";
import { auth as better } from "@/lib/auth";

const auth = hono
  .createApp()
  .on(["POST", "GET"], "/*", (c) => better.handler(c.req.raw));

export default auth;
