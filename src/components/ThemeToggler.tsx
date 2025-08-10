"use client";

import React from "react";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { themes, setTheme } = useTheme();

  return (
    <div className="fixed right-6 bottom-6 flex items-center gap-1">
      {themes.map((theme) => (
        <div key={theme} onClick={() => setTheme(theme)}>
          {theme}
        </div>
      ))}
    </div>
  );
}
