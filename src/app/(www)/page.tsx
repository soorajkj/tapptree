import React, { Fragment } from "react";
import Hero from "@/components/[www]/Hero";
import Blogs from "@/components/[www]/Blogs";
import Features from "@/components/[www]/Features";
import LogoCloud from "@/components/[www]/LogoCloud";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <LogoCloud />
      <Features />
      <Blogs />
    </Fragment>
  );
}
