import React from "react";

export default function HandleSkeleton() {
  return (
    <button className="border-carbon-800 bg-carbon-800/30 flex min-h-16 shrink-0 animate-pulse cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed px-4 py-2">
      <div className="flex overflow-hidden">
        <span className="bg-carbon-800 size-8 shrink-0 rounded-xl"></span>
      </div>
      <div className="flex flex-1 flex-col items-start gap-1 *:leading-none">
        <span className="bg-carbon-800 h-4 w-16 rounded-md text-white"></span>
        <p className="bg-carbon-800 h-4 w-24 rounded-md text-white"></p>
      </div>
    </button>
  );
}
