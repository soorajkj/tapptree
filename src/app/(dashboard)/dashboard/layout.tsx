import type { PropsWithChildren } from "react";
import React from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen">
      <div className="mx-auto flex w-full max-w-lg">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
