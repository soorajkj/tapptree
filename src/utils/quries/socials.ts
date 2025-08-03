import { rpc } from "@/lib/rpc";
import {
  mutationOptions,
  queryOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

export const getSocialLinksOptions = () => {
  return queryOptions({
    queryKey: ["SOCIALS"],
    queryFn: async () => {
      const res = await rpc.api.me.socials.$get();
      return await res.json();
    },
  });
};

export const createSocialLinksOptions = () => {
  const queryClient = useQueryClient();

  return mutationOptions<
    InferResponseType<typeof rpc.api.me.socials.$post>,
    Error,
    InferRequestType<typeof rpc.api.me.socials.$post>["json"]
  >({
    mutationFn: async (json) => {
      const resp = await rpc.api.me.socials.$post({ json });
      if (!resp.ok) throw new Error("Failed to fetch post!");
      return await resp.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["SOCIALS"] }),
  });
};
