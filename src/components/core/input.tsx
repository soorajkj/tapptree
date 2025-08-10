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
    "border-carbon-200 hover:bg-carbon-800/30 dark:border-carbon-800 dark:placeholder:text-carbon-500 h-10 w-full rounded-lg border bg-transparent px-3 py-2 text-base transition duration-200 ease-out outline-none read-only:cursor-not-allowed dark:text-white",
  ],
});
