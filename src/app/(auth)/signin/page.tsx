import React from "react";
import Link from "next/link";
import SignInForm from "@/components/[auth]/SignInForm";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-8 sm:max-w-90">
      <div className="flex flex-col gap-1">
        <h2 className="text-display-xs md:text-display-sm font-semibold text-neutral-900 dark:text-neutral-50">
          Welcome back
        </h2>
        <p className="text-md text-neutral-600 dark:text-neutral-400">
          Welcome back! Please enter your details.
        </p>
      </div>
      <SignInForm />
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-brand-700 font-semibold decoration-current underline-offset-1 hover:underline dark:text-neutral-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
