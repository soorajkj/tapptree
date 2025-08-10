import React from "react";
import MediaIcon, { type MediaIconType } from "../MediaIcon";
import type { THandleWithPlatform } from "@/types/handle";

interface HandleProps {
  handle: THandleWithPlatform;
}

export default function Handle({ handle }: HandleProps) {
  return (
    <button className="bg-carbon-800/30 flex min-h-16 w-full shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent px-4 py-2">
      <div className="flex overflow-hidden">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-sm text-white">
          <MediaIcon icon={handle.platform?.icon as MediaIconType} />
        </span>
      </div>
      <div className="flex flex-1 flex-col items-start gap-1 *:leading-none">
        <p className="text-white">{handle.platform.name}</p>
      </div>
    </button>
  );
}
