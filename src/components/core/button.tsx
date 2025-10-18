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
  variant = "default",
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
  base: "focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-black/20",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
      outline:
        "bg-background ring-foreground/10 hover:bg-muted/50 text-neutral-950ring-foreground/15 text-neutral-950hover:bg-muted/50 border border-transparent shadow-sm ring-1 shadow-black/15 duration-200",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      md: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
});
