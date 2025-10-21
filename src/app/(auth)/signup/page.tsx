import React from "react";
import Link from "next/link";
import SignUpForm from "@/components/[auth]/SignUpForm";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-8 sm:max-w-90">
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-2xl font-semibold text-neutral-950">
          Create an account
        </h2>
        <p className="text-neutral-600">Join us and start using Tapptree.</p>
      </div>
      <SignUpForm />
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="font-medium text-orange-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
