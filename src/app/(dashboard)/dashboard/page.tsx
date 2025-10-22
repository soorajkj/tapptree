import React from "react";
import { serverSession } from "@/utils/session";
import { redirect } from "next/navigation";
import ManageHandles from "@/components/[dashboard]/ManageHandles";

export default async function Page() {
  const session = await serverSession();

  if (!session) redirect("/signin");

  return (
    <div className="flex flex-col gap-4 py-12">
      <ManageHandles />
    </div>
  );
}
