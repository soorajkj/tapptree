import React, { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
