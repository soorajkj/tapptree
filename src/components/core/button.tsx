import type { ComponentProps } from "react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { classNames } from "@/utils/classNames";

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

export function Button({
  children,
  asChild = false,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={classNames(buttonStyles({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
}

const buttonStyles = tv({
  base: "group relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 dark:focus-visible:outline-blue-400 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-600 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  variants: {
    variant: {
      primary:
        "bg-neutral-800 text-white/85 before:pointer-events-none before:absolute before:inset-0 before:border before:border-white/15 before:mask-b-from-0% hover:bg-neutral-700 disabled:shadow-xs dark:bg-neutral-600 dark:hover:bg-neutral-500",
      secondary:
        "bg-white text-neutral-950 before:pointer-events-none before:absolute before:inset-0 before:border before:border-white/15 before:mask-b-from-0% hover:bg-neutral-100 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10",
      transparent:
        "bg-transparent text-neutral-950 hover:bg-black/5 dark:text-neutral-100 dark:hover:bg-black/10",
      danger: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-800",
    },
    size: {
      sm: "gap-1 rounded-lg px-3 py-2 text-sm font-semibold before:rounded-lg",
      md: "h-10 gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold before:rounded-lg",
      lg: "gap-1.5 rounded-lg px-4 py-2.5 text-base font-semibold before:rounded-lg",
    },
  },
});
