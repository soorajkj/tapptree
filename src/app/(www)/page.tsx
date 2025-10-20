import React, { Fragment } from "react";
import Hero from "@/components/[www]/Hero";
import Features from "@/components/[www]/Features";
import LogoCloud from "@/components/[www]/LogoCloud";
import Testimonials from "@/components/[www]/Testimonials";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <LogoCloud />
      <Features />
      <Testimonials />
    </Fragment>
  );
}
