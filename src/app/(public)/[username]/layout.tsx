import type { PropsWithChildren } from "react";
import React from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden">{children}</div>
  );
}
