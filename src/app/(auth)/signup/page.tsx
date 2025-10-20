import React from "react";
import Link from "next/link";
import SignUpForm from "@/components/[auth]/SignUpForm";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-8 sm:max-w-90">
      <div className="flex flex-col gap-1">
        <h2 className="text-display-xs md:text-display-sm -neutral-50 font-semibold text-neutral-900">
          Sign up
        </h2>
        <p className="text-md -neutral-400 text-neutral-600">
          Start your 30-day free trial.
        </p>
      </div>
      <SignUpForm />
      <div className="flex items-center justify-center gap-1">
        <p className="-neutral-400 text-sm text-neutral-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-brand-700 -neutral-300 font-semibold decoration-current underline-offset-1 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
