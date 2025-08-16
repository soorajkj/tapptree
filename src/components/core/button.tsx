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
  varinat = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={classNames(buttonStyles({ varinat, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
}

const buttonStyles = tv({
  base: [
    "group relative inline-flex h-max cursor-pointer items-center justify-center whitespace-nowrap transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  variants: {
    varinat: {
      primary:
        "bg-brand-600 hover:bg-brand-700 disabled:bg-disabled text-white shadow-2xs ring-1 ring-transparent ring-inset before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0% disabled:shadow-xs",
      secondary:
        "hover:bg-gray-050 bg-white text-gray-700 shadow-2xs ring-1 ring-gray-300 ring-inset hover:text-gray-800 disabled:shadow-xs",
      tertiary: "hover:bg-gray-050 text-gray-600 hover:text-gray-700",
      link: "justify-normal rounded text-gray-600 underline decoration-transparent underline-offset-2 hover:text-gray-700 hover:decoration-current",
      destructive:
        "bg-error-600 outline-error-500 text-white shadow-xs ring-1 ring-transparent ring-inset",
    },
    size: {
      sm: "gap-1 rounded-lg px-3 py-2 text-sm font-semibold before:rounded-lg",
      md: "gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold before:rounded-lg",
      lg: "gap-1.5 rounded-lg px-4 py-2.5 text-base font-semibold before:rounded-lg",
    },
  },
});
