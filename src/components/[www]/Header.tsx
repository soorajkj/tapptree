"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/authClient";
import { Container } from "@/components/core/container";
import Button from "@/components/core/button";
import { Icon } from "@/components/core/icon";
import Navigations from "@/components/[www]/Navigations";

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
                <svg
                  viewBox="0 0 24 24"
                  width={36}
                  height={36}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM9.5 8.75C7.70507 8.75 6.25 10.2051 6.25 12C6.25 13.7949 7.70507 15.25 9.5 15.25C11.2949 15.25 12.75 13.7949 12.75 12C12.75 11.5858 13.0858 11.25 13.5 11.25C13.9142 11.25 14.25 11.5858 14.25 12C14.25 14.6234 12.1234 16.75 9.5 16.75C6.87665 16.75 4.75 14.6234 4.75 12C4.75 9.37665 6.87665 7.25 9.5 7.25C9.91421 7.25 10.25 7.58579 10.25 8C10.25 8.41421 9.91421 8.75 9.5 8.75ZM17.75 12C17.75 13.7949 16.2949 15.25 14.5 15.25C14.0858 15.25 13.75 15.5858 13.75 16C13.75 16.4142 14.0858 16.75 14.5 16.75C17.1234 16.75 19.25 14.6234 19.25 12C19.25 9.37665 17.1234 7.25 14.5 7.25C11.8766 7.25 9.75 9.37665 9.75 12C9.75 12.4142 10.0858 12.75 10.5 12.75C10.9142 12.75 11.25 12.4142 11.25 12C11.25 10.2051 12.7051 8.75 14.5 8.75C16.2949 8.75 17.75 10.2051 17.75 12Z"
                      fill="#FF6900"
                    />{" "}
                  </g>
                </svg>
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
