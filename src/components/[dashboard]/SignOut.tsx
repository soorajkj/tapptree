"use client";

import React from "react";
import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function SignOut() {
  const router = useRouter();
  const { data } = authClient.useSession();
  const queryClient = useQueryClient();

  const handleClick = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          queryClient.clear();
          router.push("/signin");
          router.refresh();
        },
      },
    });
  };

  return <button onClick={handleClick}>Signout {data?.user.name}</button>;
}
