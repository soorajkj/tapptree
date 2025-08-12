"use client";

import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignOut() {
  const router = useRouter();

  const handleClick = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return <button onClick={handleClick}>Signout</button>;
}
