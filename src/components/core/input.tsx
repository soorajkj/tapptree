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
    "aria-busy: h-10 w-full rounded-lg border border-neutral-200 bg-transparent px-3 py-2 text-sm text-neutral-950 transition duration-200 ease-out outline-none placeholder:text-neutral-400 read-only:cursor-not-allowed focus-visible:border-violet-500 focus-visible:ring-2 focus-visible:ring-violet-500/20 aria-invalid:border-red-400 aria-invalid:focus-visible:ring-red-400/20",
  ],
});
