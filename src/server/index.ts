import { logger } from "hono/logger";
import { hono } from "@/lib/hono";
import auth from "@/server/routes/auth";
import debug from "@/server/routes/debug";
import profile from "@/server/routes/profile";
import socials from "@/server/routes/socials";
import platforms from "./routes/platforms";

const app = hono
  .createApp()
  .use(logger())
  .basePath("/api")
  .route("/auth", auth)
  .route("/profile", profile)
  .route("/me/platforms", platforms)
  .route("/me/socials", socials)
  .route("/debug", debug);

export type HonoAppType = typeof app;
export default app;
