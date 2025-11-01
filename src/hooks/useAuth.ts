import { useQuery } from "@tanstack/react-query";
import { serverSession } from "@/utils/session";

const fetchAuth = async () => {
  return await serverSession();
};

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: fetchAuth,
    staleTime: Infinity,
  });
};
