import React, { Fragment } from "react";
import Features from "@/components/[www]/Features";
import Hero from "@/components/[www]/Hero";
import Partners from "@/components/[www]/Partners";
import Faqs from "@/components/[www]/Faqs";
import Stats from "@/components/[www]/Stats";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <Partners />
      <Stats />
      <Features />
      <Faqs />
    </Fragment>
  );
}
