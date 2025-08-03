import React from "react";
import type { LucideProps } from "lucide-react";
import { icons } from "lucide-react";

export type IconType = keyof typeof icons;

export interface IconProps extends LucideProps {
  icon: IconType;
}

export function Icon({ icon, ...props }: IconProps) {
  const Comp = icons[icon];

  return <Comp {...props} />;
}
