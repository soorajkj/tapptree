"use client";

import { useState } from "react";
import { type THandleWithPlatform } from "@/types/handle";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";
import { Icon } from "../core/icon";
import { Switch } from "../core/switch";
import { Button } from "../core/button";
import { useSortable } from "@dnd-kit/sortable";
import { ChevronsUpDown } from "lucide-react";
import Thread from "public/icons/threads.svg";

interface HandleControlProps {
  handle: THandleWithPlatform;
}

export default function HandleControl({ handle }: HandleControlProps) {
  const { listeners, setActivatorNodeRef, attributes } = useSortable({
    id: handle.id,
  });

  return (
    <div className="flex w-full items-center rounded-xl bg-white dark:border-neutral-800/65 dark:bg-neutral-900">
      <button
        ref={setActivatorNodeRef}
        {...listeners}
        {...attributes}
        className="inline-flex size-6 min-w-8 shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-400 [&_svg]:size-4"
      >
        <ChevronsUpDown />
      </button>
      <div className="flex flex-1 justify-between p-4 pl-4">
        <div className="flex items-center gap-2">
          <span className="size-7 shrink-0 text-neutral-900 dark:text-neutral-50">
            <Thread />
          </span>
          <div className="flex w-full flex-col">
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              {handle.platform.name}
            </p>
            <p className="text-xs font-medium">{handle.url}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button className="size-7 bg-transparent p-0 text-neutral-600">
            <Icon icon="Pencil" />
          </Button>
          <ArchiveSwitch id={handle.id} archive={handle.archive} />
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
    <button
      onClick={() => {
        deleteHandleMutation.mutate({ id });
      }}
    >
      <Icon icon="Trash" className="size-4" />
    </button>
  );
}
