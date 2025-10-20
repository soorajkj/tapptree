"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { classNames } from "@/utils/classNames";

export function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={classNames(
        "text-neutral-950border-white/10 text-neutral-950bg-neutral-800 text-neutral-950ring-neutral-700 text-neutral-950hover:bg-white/10 text-neutral-950focus-visible:border-blue-400 text-neutral-950focus-visible:outline-blue-400 text-neutral-950disabled:bg-neutral-900 text-neutral-950data-[state=checked]:bg-blue-400 text-neutral-950data-[state=checked]:hover:bg-blue-300 flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-sm border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 focus-visible:border-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=checked]:hover:bg-blue-600",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-white transition-none"
      >
        <CheckIcon strokeWidth={3} className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
