import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { classNames } from "@/utils/classNames";

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputStyle> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <div
      role="presentation"
      className="focus-within:ring-brand-500 has-aria-invalid:ring-error-300 dark:has-aria-invalid:ring-error-500 aria-invalid:focus-within:ring-error-500 dark:aria-invalid:focus-within:border-error-400 relative flex w-full flex-row place-content-center place-items-center rounded-lg bg-white shadow-xs ring-1 ring-gray-300 transition-shadow duration-100 ease-linear ring-inset focus-within:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:ring-gray-300 aria-invalid:focus-within:ring-2 dark:bg-gray-950 dark:ring-gray-700 dark:disabled:bg-gray-800 dark:disabled:ring-gray-700"
    >
      <input
        data-slot="input"
        className={classNames(inputStyle({ className }))}
        {...props}
      />
    </div>
  );
}

const inputStyle = tv({
  base: [
    "text-md dark:text-gray-050 w-full bg-transparent px-3.5 py-2.5 text-gray-900 ring-0 outline-hidden placeholder:text-gray-500",
  ],
});
