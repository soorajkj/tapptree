import type { PropsWithChildren } from "react";
import Footer from "@/components/[auth]/Footer";
import Header from "@/components/[auth]/Header";
import Testimonial from "@/components/[auth]/Testimonial";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <section className="grid min-h-svh grid-cols-1 bg-white lg:grid-cols-2 dark:bg-gray-950">
      <div className="relative flex flex-col items-center justify-between gap-4 px-4 py-8 md:items-center md:px-8">
        <Header />
        <div className="flex w-full flex-col gap-8 sm:max-w-90">{children}</div>
        <Footer />
      </div>
      <div className="bg-gray-050 relative hidden flex-col items-center justify-center overflow-hidden lg:flex dark:bg-gray-900">
        <Testimonial />
      </div>
    </section>
  );
}
