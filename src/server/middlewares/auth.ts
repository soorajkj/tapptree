import { jwt } from "hono/jwt";
import { hono } from "@/lib/hono";

export const authMiddleware = hono.createMiddleware(async (c, next) => {
  const jwtMiddleware = jwt({
    cookie: { key: "__auth" },
    secret: "1234567890",
  });

  return jwtMiddleware(c, next);
});
