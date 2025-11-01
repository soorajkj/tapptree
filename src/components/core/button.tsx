"use client";

import * as React from "react";
import * as SlotPrimitive from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { twmx } from "twmx";

export type ButtonVarinat = VariantProps<typeof buttonVariants>;
export interface ButtonProps
  extends React.ComponentProps<"button">,
    ButtonVarinat {
  asChild?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  width = "auto",
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={twmx(buttonVariants({ variant, size, width, className }))}
      {...props}
    />
  );
}

export const buttonVariants = tv({
  base: [
    "relative isolate inline-flex cursor-pointer items-center justify-center gap-x-2 rounded-md border border-transparent px-3.5 py-2.5 text-base/6 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 sm:px-3 sm:py-1.5 sm:text-sm/6 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  variants: {
    variant: {
      primary:
        "bg-orange-500 text-white before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-orange-500 before:shadow-sm after:absolute after:inset-0 after:-z-10 after:rounded-md after:inset-shadow-2xs after:inset-shadow-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:pointer-events-none disabled:opacity-50 disabled:before:shadow-none disabled:after:shadow-none",
      secondary:
        "border-neutral-200 bg-white text-neutral-950 before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-white before:shadow-sm after:absolute after:inset-0 after:-z-10 after:rounded-md after:inset-shadow-2xs after:inset-shadow-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:pointer-events-none disabled:opacity-50 disabled:before:shadow-none disabled:after:shadow-none",
      destruct:
        "bg-red-600 text-white before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-red-600 before:shadow-sm after:absolute after:inset-0 after:-z-10 after:rounded-md after:inset-shadow-2xs after:inset-shadow-white/15 hover:bg-red-700 hover:after:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-red-700 active:after:bg-white/10 disabled:before:shadow-none disabled:after:shadow-none dark:border-white/5 dark:bg-red-600 dark:before:hidden dark:after:-inset-px dark:after:rounded-md dark:hover:after:bg-white/5 dark:active:after:bg-white/5",
    },
    width: {
      full: "w-full",
      auto: "w-auto",
    },
    size: {
      sm: "h-8",
      md: "h-9",
      lg: "h-10",
    },
  },
});
