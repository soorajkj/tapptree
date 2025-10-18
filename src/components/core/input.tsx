import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { classNames } from "@/utils/classNames";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputStyle> {}

export function Input({ size = "md", className, ...props }: InputProps) {
  return (
    <div
      role="presentation"
      className="text-neutral-950border-white/10 text-neutral-950bg-white/5 -neutral-100 text-neutral-950disabled:bg-neutral-800 text-neutral-950has-focus-visible:border-blue-400 text-neutral-950has-aria-invalid:border-red-400 text-neutral-950has-aria-invalid:ring-red-600/25 relative flex w-full flex-row place-content-center place-items-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-950 transition duration-100 placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:bg-neutral-100 has-focus-visible:border-blue-600 has-focus-visible:ring-2 has-focus-visible:ring-blue-600/25 has-aria-invalid:border-red-600 has-aria-invalid:ring-2 has-aria-invalid:ring-red-600/15"
    >
      <input
        data-slot="input"
        className={classNames(inputStyle({ size, className }))}
        {...props}
      />
    </div>
  );
}

const inputStyle = tv({
  base: [
    "text-md -neutral-50 w-full bg-transparent px-3.5 py-2.5 text-neutral-900 outline-hidden placeholder:text-neutral-500",
  ],
  variants: {
    size: {
      sm: "h-8 px-2 py-1 text-sm",
      md: "h-10 px-2 py-1.5 text-sm",
    },
  },
});
