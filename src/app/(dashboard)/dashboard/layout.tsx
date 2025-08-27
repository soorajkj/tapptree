import React, { type PropsWithChildren } from "react";
import Header from "@/components/[dashboard]/Header";
import Navigation from "@/components/[dashboard]/Navigation";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full min-h-svh w-full">
      <Navigation />
      <div className="flex w-full flex-1 flex-col">
        <Header />
        <main className="flex h-full w-full flex-1 gap-4 p-4 pt-12">
          <div className="mx-auto w-full max-w-xl">{children}</div>
          <div className="w-full max-w-96"></div>
        </main>
      </div>
    </div>
  );
}
