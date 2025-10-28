import React, { type PropsWithChildren } from "react";
import Sidebar from "@/components/[dashboard]/Sidebar";
import Header from "@/components/[dashboard]/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-dvh w-full flex-col bg-neutral-200">
      <div className="flex size-full flex-1 p-2">
        <div className="flex flex-1 gap-2">
          <Sidebar />
          <div className="flex-1 rounded-lg border border-neutral-200 bg-white">
            <Header />
            <main className="mx-auto w-full max-w-md">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
