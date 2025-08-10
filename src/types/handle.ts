import { type rpc } from "@/lib/rpc";
import type { InferResponseType } from "hono";

export type THandleWithPlatform = InferResponseType<
  typeof rpc.api.me.handles.$get
>[number];
