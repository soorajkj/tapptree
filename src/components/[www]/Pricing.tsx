import React, { ComponentProps } from "react";
import { Container } from "@/components/core/container";
import { Icon } from "@/components/core/icon";
import { plans } from "@/utils/pricing";
import { tv, VariantProps } from "tailwind-variants";
import { classNames } from "@/utils/classNames";
import { Button } from "../core/button";

export default function Pricing() {
  return (
    <section className="@container relative py-16 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-archivo text-3xl font-semibold text-balance md:text-4xl lg:text-5xl lg:tracking-tight">
            Plans Built for Every Creator
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance">
            Whether you’re just starting out or growing your brand, our flexible
            plans give you the tools you need to shine online.
          </p>
        </div>
        <div className="relative mt-12 flex w-full flex-col gap-6">
          <div className="mx-auto w-full border @max-4xl:max-w-sm">
            <div className="grid @4xl:grid-cols-3">
              {plans.map((plan, i) => (
                <Plan key={i} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface PlanProps
  extends ComponentProps<"div">,
    VariantProps<typeof planStyles> {
  plan: (typeof plans)[number];
}

function Plan({ className, plan }: PlanProps) {
  return (
    <div
      className={classNames(
        planStyles({ recommended: plan.recommended, className })
      )}
    >
      <div className="self-end">
        <div className="text-lg font-medium tracking-tight">{plan.title}</div>
        <div className="text-muted-foreground mt-1 text-sm text-balance">
          {plan.description}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-3xl font-semibold">
          <span className="inline-block">{plan.price}</span>
        </div>
        <div className="text-muted-foreground text-sm">Per month</div>
      </div>
      <Button variant={!plan.recommended ? "outline" : "default"}>
        {plan.label}
      </Button>
      <ul className="flex flex-col gap-3 text-sm">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className="[&_svg]:text-muted-foreground flex items-center gap-2 [&_svg]:size-3 [&_svg]:shrink-0"
          >
            <Icon icon="Check" strokeWidth={3.5} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const planStyles = tv({
  base: ["row-span-4 grid grid-rows-subgrid gap-8 p-8"],
  variants: {
    recommended: {
      true: "ring-foreground/10 bg-card my-2 rounded-lg shadow-md ring",
      false: "",
    },
  },
});
