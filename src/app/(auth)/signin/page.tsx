import React from "react";
import Link from "next/link";
import SignInForm from "@/components/[auth]/SignInForm";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-8 sm:max-w-90">
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-2xl font-semibold text-neutral-950">
          Welcome back
        </h2>
        <p className="text-neutral-600">
          Welcome back! Please enter your details.
        </p>
      </div>
      <SignInForm />
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-orange-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
