"use client";

import React from "react";
import { notFound } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import PermaLink from "./Permalink";
import Footer from "./Footer";
import { rpc } from "@/lib/rpc";
import ShareTools from "./ShareTools";
import SocialsList from "./SocialsList";
import OtherLinks from "./OtherLinks";

export default function PublicPage({ username }: { username: string }) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["USERNAME", username],
    queryFn: async () => {
      const res = await rpc.api.profile[":username"].$get({
        param: { username },
      });
      if (!res.ok) throw new Error();
      return await res.json();
    },
  });

  if (isPending) return "Loading";

  if (isError || !data) return notFound();

  return (
    <div className="mx-auto flex max-w-md flex-col gap-8 py-12">
      <PermaLink user={data} />
      <SocialsList />
      <ShareTools />
      <OtherLinks />
      <Footer />
    </div>
  );
}
