import React from "react";
import MediaIcon, { MediaIconType } from "../MediaIcon";
import { InferResponseType } from "hono";
import { rpc } from "@/lib/rpc";

interface SocialButtonProps {
  item: InferResponseType<typeof rpc.api.me.socials.$get>[number];
}

export default function SocialButton({ item }: SocialButtonProps) {
  return (
    <button className="flex size-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full hover:scale-105">
      <div className="flex size-full items-center justify-center overflow-hidden text-white">
        <span className="flex shrink-0 items-center justify-center rounded-sm">
          <MediaIcon icon={item.platform?.icon as MediaIconType} />
        </span>
      </div>
    </button>
  );
}
