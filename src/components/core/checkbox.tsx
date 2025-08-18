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
        "data-[state=checked]:bg-brand-600 data-[state=checked]:ring-brand-600 disabled:bg-gray-050 flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-sm bg-white ring-1 ring-gray-300 ring-inset disabled:cursor-not-allowed dark:bg-gray-950 dark:ring-gray-700 dark:disabled:bg-gray-900",
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
