import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { classNames } from "@/utils/classNames";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputStyle> {}

export function Input({ size = "md", className, ...props }: InputProps) {
  return (
    <input
      data-slot="input"
      className={classNames(inputStyle({ size, className }))}
      {...props}
    />
  );
}

const inputStyle = tv({
  base: [
    "inline-flex w-full truncate border border-neutral-800 bg-transparent text-neutral-900 outline-hidden placeholder:text-neutral-500 dark:text-white",
  ],
  variants: {
    size: {
      sm: "h-8 px-2 py-1 text-sm",
      md: "h-10 px-2 py-1.5 text-sm",
    },
  },
});
