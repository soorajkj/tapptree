"use client";

import React, { Fragment } from "react";
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
    queryKey: ["username"],
    queryFn: async () => {
      const res = await rpc.api.profile[":username"].$get({
        param: { username },
      });
      if (!res.ok) throw new Error();
      return await res.json();
    },
    retry: false,
  });

  if (isPending) return "Loading";

  if (isError || !data.user) return notFound();

  return (
    <Fragment>
      <PermaLink user={data.user} />
      <SocialsList />
      <ShareTools />
      <OtherLinks />
      <Footer />
    </Fragment>
  );
}
