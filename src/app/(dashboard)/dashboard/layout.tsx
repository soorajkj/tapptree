import React, { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full min-h-svh w-full">
      <main className="mx-auto w-full max-w-md">{children}</main>
    </div>
  );
}
