import Link from "next/link";
import React from "react";
import SignOut from "./SignOut";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 w-full bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex h-full min-h-16 items-center">
          <Link href={"/"} className="flex items-center gap-1">
            <svg
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33238 4.4914L12.4054 1.33238L14.1891 3.15903L10.9656 6.23209H15.5V8.76791H10.9441L14.1891 11.9198L12.4054 13.7106L8 9.28367L3.59456 13.7106L1.81089 11.9269L5.05587 8.77507H0.5V6.23209H5.03438L1.81089 3.15903L3.59456 1.33238L6.66762 4.4914V0H9.33238V4.4914ZM6.66762 12.3997H9.33238V18.4169H6.66762V12.3997Z"
                fill="#43E660"
              ></path>
            </svg>
            <span className="text-xl font-medium text-white">Taptree</span>
          </Link>
          <div className="flex flex-1 items-center justify-end">
            <SignOut />
          </div>
        </div>
      </div>
    </header>
  );
}
