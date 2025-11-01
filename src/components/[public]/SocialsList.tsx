import React from "react";

export default function SocialsList() {
  return (
    <div className="scrollbar-none flex w-full items-center gap-4 overflow-y-auto">
      {[...Array(8)].map((_, i) => (
        <button
          key={i}
          className="size-16 shrink-0 cursor-pointer rounded-full border-2 border-neutral-800 p-1"
        >
          <div className="flex size-full items-center justify-center overflow-hidden rounded-full">
            <div className="size-full dark:bg-neutral-900/60"></div>
          </div>
        </button>
      ))}
    </div>
  );
}
