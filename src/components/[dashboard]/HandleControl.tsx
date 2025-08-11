"use client";

import { useState } from "react";
import { type SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { type THandleWithPlatform } from "@/types/handle";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";
import { Icon } from "../core/icon";
import { Switch } from "../core/switch";
import { Button } from "../core/button";
import { useSortable } from "@dnd-kit/sortable";

interface HandleControlProps {
  handle: THandleWithPlatform;
}

export default function HandleControl({ handle }: HandleControlProps) {
  const { listeners, setActivatorNodeRef, attributes } = useSortable({
    id: handle.id,
  });

  return (
    <div className="border-carbon-800 flex min-h-14 w-full gap-2 border p-4">
      <button ref={setActivatorNodeRef} {...listeners} {...attributes}>
        D
      </button>
      <div className="flex flex-1 gap-2">
        <div className="flex size-7 items-center justify-center"></div>
        <div className="flex items-center">
          <p className="font-medium text-white">{handle.platform.name}</p>
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
