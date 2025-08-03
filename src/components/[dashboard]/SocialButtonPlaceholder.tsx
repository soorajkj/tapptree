import React, { ComponentProps } from "react";
import { Icon } from "../core/icon";
import MediaIcon, { MediaIconType } from "../MediaIcon";
import { InferResponseType } from "hono";
import { rpc } from "@/lib/rpc";

interface SocialButtonPlaceholderProps extends ComponentProps<"button"> {
  item: InferResponseType<typeof rpc.api.me.platforms.$get>[number];
}

export default function SocialButtonPlaceholder({
  item,
  ...props
}: SocialButtonPlaceholderProps) {
  return (
    <button
      className="relative flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-neutral-800 opacity-50 hover:scale-105"
      {...props}
    >
      <span className="absolute top-0 -right-1 flex size-5 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
        <Icon icon="Plus" className="size-3" />
      </span>
      <div className="flex size-full items-center justify-center overflow-hidden text-white">
        <span className="flex shrink-0 items-center justify-center rounded-sm">
          <MediaIcon icon={item.icon as MediaIconType} />
        </span>
      </div>
    </button>
  );
}
