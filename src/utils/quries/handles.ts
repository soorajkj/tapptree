import { rpc } from "@/lib/rpc";
import {
  mutationOptions,
  queryOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { type InferRequestType, type InferResponseType } from "hono";

export const getHandlesOptions = (
  options?: Omit<
    UseQueryOptions<
      InferResponseType<typeof rpc.api.me.handles.$get>,
      Error,
      InferResponseType<typeof rpc.api.me.handles.$get>
    >,
    "queryKey" | "queryFn"
  >
) => {
  return queryOptions({
    ...options,
    queryKey: ["HANDLES"],
    queryFn: async () => {
      const res = await rpc.api.me.handles.$get();
      return await res.json();
    },
  });
};

export const createHandlesOptions = () => {
  return mutationOptions<
    InferResponseType<typeof rpc.api.me.handles.$post>,
    Error,
    InferRequestType<typeof rpc.api.me.handles.$post>["json"]
  >({
    mutationFn: async (json) => {
      const resp = await rpc.api.me.handles.$post({ json });
      if (!resp.ok) throw new Error("Failed to fetch post!");
      return await resp.json();
    },
  });
};
