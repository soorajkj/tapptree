import { hc } from "hono/client";
import { type HonoAppType } from "@/server/index";

export const rpc = hc<HonoAppType>(process.env.NEXT_PUBLIC_API_URL!, {
  init: { credentials: "include" },
});
