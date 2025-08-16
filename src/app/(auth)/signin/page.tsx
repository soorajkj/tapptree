import React, { Fragment } from "react";
import Link from "next/link";
import SignInForm from "@/components/[auth]/SignInForm";

export default function Page() {
  return (
    <Fragment>
      <div className="mb-6 flex flex-col items-center justify-center gap-1">
        <h3 className="text-2xl font-medium text-neutral-950">Log in</h3>
        <p className="text-sm">Get started building your page with Taptree</p>
      </div>
      <SignInForm />
      <div className="mt-4 flex items-center justify-center gap-1">
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-violet-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </Fragment>
  );
}
