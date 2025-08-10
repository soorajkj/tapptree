import { rpc } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: async () => {
      const res = await rpc.api.me.platforms.$get();
      if (!res.ok) throw new Error("Failed to fetch platforms!");
      return await res.json();
    },
  });
