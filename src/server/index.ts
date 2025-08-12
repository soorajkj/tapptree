import { logger } from "hono/logger";
import { hono } from "@/lib/hono";
import debug from "@/server/routes/debug";
import profile from "@/server/routes/profile";
import handles from "@/server/routes/handles";
import platforms from "./routes/platforms";
import auth from "./routes/auth";

const app = hono
  .createApp()
  .use(logger())
  .basePath("/api")
  .route("/auth", auth)
  .route("/profile", profile)
  .route("/me/platforms", platforms)
  .route("/me/handles", handles)
  .route("/debug", debug);

export type HonoAppType = typeof app;
export default app;
