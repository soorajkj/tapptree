import React, { type ComponentProps } from "react";
import { Icon } from "../core/icon";
import MediaIcon, { type MediaIconType } from "../MediaIcon";
import type { THandleWithPlatform } from "@/types/handle";

interface HandlePlaceholderProps extends ComponentProps<"button"> {
  handle: THandleWithPlatform;
}

export default function HandlePlaceholder({
  handle,
  ...props
}: HandlePlaceholderProps) {
  return (
    <button
      className="border-carbon-800 relative flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border opacity-50 hover:scale-105"
      {...props}
    >
      <span className="border-carbon-900 bg-carbon-900 absolute top-0 -right-1 flex size-5 items-center justify-center rounded-full border">
        <Icon icon="Plus" className="size-3" />
      </span>
      <div className="flex size-full items-center justify-center overflow-hidden text-white">
        <span className="flex shrink-0 items-center justify-center rounded-sm">
          <MediaIcon icon={handle.platform.icon as MediaIconType} />
        </span>
      </div>
    </button>
  );
}
