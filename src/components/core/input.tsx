import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { classNames } from "@/utils/classNames";

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputStyle> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      data-slot="input"
      className={classNames(inputStyle({ className }))}
      {...props}
    />
  );
}

const inputStyle = tv({
  base: [
    "h-10 w-full rounded-md border border-neutral-800 px-3 py-2 font-light text-white outline-none placeholder:text-neutral-600 read-only:cursor-not-allowed",
  ],
});
