import type { ComponentProps } from "react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { classNames } from "@/utils/classNames";

export interface IconButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof iconButtonStyles> {
  asChild?: boolean;
}

export function IconButton({
  children,
  asChild = false,
  variant = "primary",
  size = "md",
  className,
  ...props
}: IconButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="icon-button"
      className={classNames(iconButtonStyles({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
}

const iconButtonStyles = tv({
  base: "group relative inline-flex aspect-square cursor-pointer items-center justify-center rounded-md border border-transparent whitespace-nowrap transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 dark:focus-visible:outline-blue-400 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-600 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  variants: {
    variant: {
      primary:
        "border-white/15 bg-neutral-800 text-white/85 hover:bg-neutral-700 disabled:shadow-xs dark:bg-neutral-600 dark:hover:bg-neutral-500",
      transparent:
        "bg-transparent text-neutral-950 hover:bg-black/5 focus-visible:border focus-visible:border-white/15 dark:text-neutral-100 dark:hover:bg-black/10",
    },
    size: {
      xs: "h-6 w-6 p-1",
      sm: "h-7 w-7 p-1",
      md: "h-8 w-8 p-1.5",
      lg: "h-10 w-10 p-2.5",
      xl: "h-12 w-12 p-3.5",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
