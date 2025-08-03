import { createFactory } from "hono/factory";
import type { AppBindings } from "@/server/types/bindings";
import prisma from "@/lib/prisma";

export const hono = createFactory<AppBindings>({
  defaultAppOptions: { strict: false },
  initApp(app) {
    app.use(async (c, next) => {
      c.set("db", prisma);
      await next();
    });
  },
});
