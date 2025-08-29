import React, { Fragment } from "react";
import Hero from "@/components/[www]/Hero";
import LogoCloud from "@/components/[www]/LogoCloud";
import Features from "@/components/[www]/Features";
import Process from "@/components/[www]/Process";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <LogoCloud />
      <Features />
      <Process />
    </Fragment>
  );
}
