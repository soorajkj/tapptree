import React, { use } from "react";
import PublicPage from "@/components/[public]/PublicPage";

interface PageProps {
  params: Promise<{ username: string }>;
}

export default async function Page({ params }: PageProps) {
  const { username } = await params;

  return (
    <div className="flex min-h-screen flex-col items-stretch gap-8 px-4 py-12 md:px-0">
      <PublicPage username={username} />
    </div>
  );
}
