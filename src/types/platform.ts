import { type InferResponseType } from "hono";
import { type rpc } from "@/lib/rpc";

export type Platform = InferResponseType<
  typeof rpc.api.me.platforms.$get
>[number];
