import type { PropsWithChildren } from "react";
import React from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <section className="grid min-h-screen grid-cols-1 bg-white lg:grid-cols-2 dark:bg-gray-950">
      <div className="relative flex justify-center px-4 py-12 md:items-center md:px-8">
        <div className="flex w-full flex-col gap-8 sm:max-w-90">{children}</div>
      </div>
      <div className="relative hidden flex-col items-start justify-end overflow-hidden lg:flex"></div>
    </section>
  );
}
