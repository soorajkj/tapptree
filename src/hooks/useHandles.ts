import { useQuery } from "@tanstack/react-query";
import { rpc } from "@/lib/rpc";

export const useHandles = () => {
  return useQuery({
    queryKey: ["handles"],
    queryFn: async () => {
      const res = await rpc.api.me.handles.$get();
      if (!res.ok) throw new Error("Failed to fetch social links");
      return await res.json();
    },
  });
};
