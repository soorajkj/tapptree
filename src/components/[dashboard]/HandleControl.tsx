"use client";

import { useState } from "react";
import { type THandleWithPlatform } from "@/types/handle";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";
import { Icon } from "../core/icon";
import { Switch } from "../core/switch";
import { IconButton } from "../core/icon-button";
import { useSortable } from "@dnd-kit/sortable";
import { GripVerticalIcon } from "lucide-react";
import Instagram from "public/icons/tiktok.svg";

interface HandleControlProps {
  handle: THandleWithPlatform;
}

export default function HandleControl({ handle }: HandleControlProps) {
  const { listeners, setActivatorNodeRef, attributes } = useSortable({
    id: handle.id,
  });

  return (
    <div className="flex min-h-16 items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-800">
      <button
        ref={setActivatorNodeRef}
        {...listeners}
        {...attributes}
        className="inline-flex size-6 h-full min-w-8 shrink-0 cursor-grab items-center justify-center text-neutral-500 dark:text-neutral-400 [&_svg]:size-4"
      >
        <GripVerticalIcon />
      </button>
      <div className="flex flex-1 justify-between pr-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex size-6 shrink-0 items-center justify-center">
            <Instagram />
          </span>
          <div className="flex w-full flex-col">
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              {handle.platform.name}
            </p>
            <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              {handle.url}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <ArchiveSwitch id={handle.id} archive={handle.archive} />
          <IconButton variant="transparent" size="md">
            <Icon icon="Pencil" />
          </IconButton>
          <Delete id={handle.id} />
        </div>
      </div>
    </div>
  );
}

function ArchiveSwitch({
  id,
  archive: defaultArchive,
}: Pick<THandleWithPlatform, "id" | "archive">) {
  const [archive, setArchive] = useState(!defaultArchive);
  const { archiveHandleMutation } = useHandlesMutations();

  const handleCheckChange = () => {
    setArchive((pre) => !pre);
    archiveHandleMutation.mutate({
      id,
      json: { archive },
    });
  };

  return <Switch checked={archive} onCheckedChange={handleCheckChange} />;
}

function Delete({ id }: Pick<THandleWithPlatform, "id">) {
  const { deleteHandleMutation } = useHandlesMutations();

  return (
    <IconButton
      variant="transparent"
      size="md"
      onClick={() => {
        deleteHandleMutation.mutate({ id });
      }}
    >
      <Icon icon="Trash" className="size-4" />
    </IconButton>
  );
}
