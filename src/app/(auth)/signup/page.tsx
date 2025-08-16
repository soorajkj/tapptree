import React, { Fragment } from "react";
import Link from "next/link";
import SignUpForm from "@/components/[auth]/SignUpForm";

export default function Page() {
  return (
    <Fragment>
      <div className="mb-6 flex flex-col items-center justify-center gap-1">
        <h3 className="text-2xl font-medium text-neutral-950">Sign up</h3>
        <p className="text-sm">Register your account to get started.</p>
      </div>
      <SignUpForm />
      <div className="mt-4 flex items-center justify-center gap-1">
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="text-violet-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </Fragment>
  );
}
