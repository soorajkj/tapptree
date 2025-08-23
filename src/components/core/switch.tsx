"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { classNames } from "@/utils/classNames";

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={classNames(
        "peer inline-flex h-5 w-8 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 hover:data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-neutral-200 hover:data-[state=unchecked]:bg-neutral-300 dark:focus-visible:outline-blue-400 dark:data-[state=checked]:bg-blue-400 dark:hover:data-[state=checked]:bg-blue-300 dark:data-[state=unchecked]:bg-neutral-700 dark:hover:data-[state=unchecked]:bg-neutral-600",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={classNames(
          "pointer-events-none block size-4 rounded-full bg-white transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}
