import type { PropsWithChildren } from "react";
import React from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto flex h-screen w-full max-w-lg flex-col items-center justify-center">
      {children}
    </div>
  );
}
