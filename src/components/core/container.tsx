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
  base: [
    "mx-auto w-full px-6 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl",
  ],
});
