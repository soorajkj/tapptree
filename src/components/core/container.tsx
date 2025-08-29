import { classNames } from "@/utils/classNames";
import * as React from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export type ContainerProps = React.ComponentProps<"div"> &
  VariantProps<typeof containerStyle>;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={classNames(containerStyle({ className }))} {...props}>
      {children}
    </div>
  );
}

const containerStyle = tv({
  base: ["mx-auto w-full max-w-6xl px-6"],
});
