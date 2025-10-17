"use client";

import { Toaster as SonnerToaster, type ToasterProps } from "sonner";
import { useTheme } from "next-themes";

export default function Toaster({ ...props }: ToasterProps) {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme as ToasterProps["theme"];

  return <SonnerToaster theme={theme} {...props} />;
}
