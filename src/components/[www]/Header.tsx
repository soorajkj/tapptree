"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/authClient";
import { Container } from "@/components/core/container";
import Button from "@/components/core/button";
import { Icon } from "@/components/core/icon";
import Navigations from "@/components/[www]/Navigations";
import Logo from "public/images/tapptree.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = authClient.useSession();

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => {
      const state = !prev;
      document.documentElement.style.overflow = state ? "hidden" : "auto";
      return state;
    });
  };

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-neutral-200 bg-neutral-50">
      <Container>
        <div className="flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="flex h-full min-h-16 w-full items-center gap-4">
            <div className="flex flex-1 items-center justify-start">
              <Link href="/" className="flex items-center gap-0.5 outline-none">
                <Logo width={40} height={40} />
                <span className="text-xl font-semibold tracking-tight text-neutral-950">
                  Tapptree
                </span>
              </Link>
            </div>
            <ul className="hidden flex-1 items-center justify-center gap-3 lg:flex">
              <li className="relative">
                <Link
                  href="/"
                  className="inline-flex h-8 px-4 py-1 text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
                >
                  Product
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-4 py-1 text-sm leading-none font-medium text-neutral-600 transition hover:text-neutral-950"
                >
                  Pricing
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-4 py-1 text-sm leading-none font-medium text-neutral-600 transition hover:text-neutral-950"
                >
                  Company
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-4 py-1 text-sm leading-none font-medium text-neutral-600 transition hover:text-neutral-950"
                >
                  Solutions
                </Link>
              </li>
            </ul>
            <div className="hidden flex-1 justify-end lg:flex">
              <div className="flex items-center gap-2">
                {!data?.session ? (
                  <Fragment>
                    <Button variant="secondary" size="sm" asChild={true}>
                      <Link href={"/signin"}>Login</Link>
                    </Button>
                    <Button variant="primary" size="sm" asChild={true}>
                      <Link href={"/signup"}>Get started</Link>
                    </Button>
                  </Fragment>
                ) : (
                  <Button variant="primary" size="sm" asChild={true}>
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </Button>
                )}
              </div>
            </div>
            <button
              className="flex size-7 cursor-pointer items-center justify-center text-neutral-950 outline-none lg:hidden [&_svg]:size-6"
              onClick={handleMenuOpen}
            >
              {!isMenuOpen ? <Icon icon="Menu" /> : <Icon icon="X" />}
            </button>
          </div>
          {isMenuOpen && <Navigations />}
        </div>
      </Container>
    </header>
  );
}
