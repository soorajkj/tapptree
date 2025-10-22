import type { InferResponseType } from "hono";
import { type rpc } from "@/lib/rpc";

export type Handle = InferResponseType<typeof rpc.api.me.handles.$get>[number];
