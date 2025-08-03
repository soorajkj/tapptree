import { rpc } from "@/lib/rpc";
import { queryOptions } from "@tanstack/react-query";

export const getAllPlatforms = () => {
  return queryOptions({
    queryKey: ["PLATFORMS"],
    queryFn: async () => {
      const res = await rpc.api.me.platforms.$get();
      return await res.json();
    },
  });
};
