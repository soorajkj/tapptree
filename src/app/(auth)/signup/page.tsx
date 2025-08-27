import React from "react";
import Link from "next/link";
import SignUpForm from "@/components/[auth]/SignUpForm";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-8 sm:max-w-90">
      <div className="flex flex-col gap-1">
        <h2 className="text-display-xs md:text-display-sm font-semibold text-neutral-900 dark:text-neutral-50">
          Sign up
        </h2>
        <p className="text-md text-neutral-600 dark:text-neutral-400">
          Start your 30-day free trial.
        </p>
      </div>
      <SignUpForm />
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-brand-700 font-semibold decoration-current underline-offset-1 hover:underline dark:text-neutral-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
