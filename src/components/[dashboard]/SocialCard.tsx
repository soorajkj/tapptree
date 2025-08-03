"use client";

import { rpc } from "@/lib/rpc";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { InferResponseType } from "hono";
import { Icon } from "../core/icon";
import MediaIcon, { MediaIconType } from "../MediaIcon";
import { Switch } from "../core/switch";

type BaseSocialCardProps = { id: UniqueIdentifier };

type Link = InferResponseType<typeof rpc.api.me.socials.$get>[number];

interface SocialCardProps extends BaseSocialCardProps {
  item: Link;
}

export default function SocialCard({ id, item }: SocialCardProps) {
  const { listeners, setActivatorNodeRef } = useSortable({
    id,
  });

  return (
    <div className="group flex h-full min-h-14 w-full items-center gap-2 overflow-hidden">
      <button
        ref={setActivatorNodeRef}
        {...listeners}
        className="h-full cursor-grab"
      >
        <Icon icon="GripVertical" className="size-4" />
      </button>
      <div className="flex h-full w-full cursor-pointer items-center gap-2 rounded-lg p-4 group-hover:bg-neutral-800/30">
        <span className="size-6 shrink-0 text-white">
          <MediaIcon icon={item.platform.icon as MediaIconType} />
        </span>
        <div className="flex h-full w-full items-center gap-2">
          <p className="flex-1 font-medium text-white">{item.platform.name}</p>
          <div className="relative flex w-auto items-center gap-4">
            <button className="inline-flex size-6 cursor-pointer items-center justify-center">
              <Icon icon="Pencil" className="size-4" />
            </button>
            <Switch checked={!item.archive} />
          </div>
        </div>
      </div>
    </div>
  );
}
