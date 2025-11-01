import React from "react";
import PublicPage from "@/components/[public]/PublicPage";

interface PageProps {
  params: Promise<{ username: string }>;
}

export default async function Page({ params }: PageProps) {
  const { username } = await params;

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-stretch gap-8">
      <PublicPage username={username} />
    </div>
  );
}
