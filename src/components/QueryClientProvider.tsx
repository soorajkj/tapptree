"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider as TQClientProvider,
  type QueryClientProviderProps,
} from "@tanstack/react-query";

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: { queries: { staleTime: 60 * 1000 } },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) return makeQueryClient();
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
};

export default function QueryClientProvider({
  children,
}: Omit<QueryClientProviderProps, "client">) {
  const queryClient = getQueryClient();

  return <TQClientProvider client={queryClient}>{children}</TQClientProvider>;
}
