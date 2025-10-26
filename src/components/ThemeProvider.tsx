"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

function forcedTheme(pathname: string) {
  return ["/", "/about"].includes(pathname) ? "light" : undefined;
}

export default function ThemeProvider({ ...props }: ThemeProviderProps) {
  const pathname = usePathname();

  return <NextThemeProvider forcedTheme={forcedTheme(pathname)} {...props} />;
}
