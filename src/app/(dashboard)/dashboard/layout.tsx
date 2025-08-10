import React from "react";
import Header from "@/components/[dashboard]/Header";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-6">
        <div className="w-full flex-1">
          <main className="mx-auto w-full max-w-lg py-12">{children}</main>
        </div>
        <div className="w-full max-w-sm py-6"></div>
      </div>
    </div>
  );
}
