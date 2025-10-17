import type { PropsWithChildren } from "react";
import React from "react";
import Footer from "@/components/[www]/Footer";
import Header from "@/components/[www]/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
