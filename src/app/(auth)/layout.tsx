import Link from "next/link";
import { Suspense, type PropsWithChildren } from "react";
import Logo from "public/images/tapptree.svg";
import Loading from "../loading";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <section className="flex min-h-screen items-center justify-center overflow-y-auto">
      <div className="relative flex size-full flex-col items-center justify-center gap-4 overflow-y-auto px-4 py-8 md:items-center md:px-8">
        <div className="flex size-full flex-col justify-center gap-4 sm:max-w-90">
          <Link href="/" className="flex items-center justify-center">
            <Logo width={48} height={48} />
          </Link>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </section>
  );
}
