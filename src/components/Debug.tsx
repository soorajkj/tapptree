"use client";

import React from "react";
import { rpc } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export default function Debug() {
  const { isPending, data } = useQuery({
    queryKey: ["DEBUG"],
    queryFn: async () => {
      const res = await rpc.api.debug.$get();
      return await res.json();
    },
  });

  if (isPending) return "Loading...";

  return (
    <div>
      <h1>DEBUG</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
