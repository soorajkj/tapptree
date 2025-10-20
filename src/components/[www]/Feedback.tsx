import React from "react";
import { Container } from "@/components/core/container";

export default function Feedback() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      <Container>
        <div className="border-x border-neutral-200 px-2 lg:px-2">
          <div className="relative border-x border-neutral-200 bg-white py-16">
            <div className="mx-auto flex max-w-2xl flex-col gap-8 py-12 lg:pt-16">
              <p className="text-xl font-medium text-neutral-950 md:text-2xl">
                Using Tapptree has been like unlocking a secret design
                superpower. It's the perfect fusion of simplicity and
                versatility, enabling us to create UIs that are as stunning as
                they are user-friendly.
              </p>
              <div className="flex items-center gap-3">
                <div className="aspect-square size-10 overflow-hidden rounded-full">
                  <img
                    src="https://avatars.githubusercontent.com/u/47919550?v=4"
                    alt="Méschac Irung"
                    loading="lazy"
                    width={460}
                    height={460}
                  />
                </div>
                <div className="space-y-px">
                  <p className="text-sm font-medium text-neutral-950">
                    Méschac Irung
                  </p>
                  <p className="text-xs text-neutral-600">
                    Founder &amp; CEO, Stripe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
