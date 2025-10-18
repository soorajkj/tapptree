import React from "react";
import Link from "next/link";
import SignInForm from "@/components/[auth]/SignInForm";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-8 sm:max-w-90">
      <div className="flex flex-col gap-1">
        <h2 className="text-display-xs md:text-display-sm -neutral-50 font-semibold text-neutral-900">
          Welcome back
        </h2>
        <p className="text-md -neutral-400 text-neutral-600">
          Welcome back! Please enter your details.
        </p>
      </div>
      <SignInForm />
      <div className="flex items-center justify-center gap-1">
        <p className="-neutral-400 text-sm text-neutral-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-brand-700 -neutral-300 font-semibold decoration-current underline-offset-1 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
