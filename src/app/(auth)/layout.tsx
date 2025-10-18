import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <section className="text-neutral-950bg-neutral-950 grid min-h-svh grid-cols-1 bg-white">
      <div className="relative flex flex-col items-center justify-center gap-4 px-4 py-8 md:items-center md:px-8">
        <div className="flex w-full flex-col justify-center gap-8 sm:max-w-90">
          {children}
        </div>
      </div>
    </section>
  );
}
