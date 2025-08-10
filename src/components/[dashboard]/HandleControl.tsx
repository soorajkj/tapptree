"use client";

import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import type { THandleWithPlatform } from "@/types/handle";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";
import { Icon } from "../core/icon";
import MediaIcon, { type MediaIconType } from "../MediaIcon";
import { Switch } from "../core/switch";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { Button } from "../core/button";

interface HandleControlProps {
  handle: THandleWithPlatform;
}

export default function HandleControl({ handle }: HandleControlProps) {
  const { listeners, setActivatorNodeRef } = useSortable({
    id: handle.id,
  });

  return (
    <div className="bg-carbon-800/30 flex min-h-16 items-center gap-2 rounded-lg px-4 py-2">
      <DragHandler
        listeners={listeners}
        setActivatorNodeRef={setActivatorNodeRef}
      />
      <div className="flex flex-1 gap-2">
        <div className="flex size-7 items-center justify-center">
          <MediaIcon icon={handle.platform.icon as MediaIconType}></MediaIcon>
        </div>
        <div className="flex items-center">
          <p className="font-medium text-white">{handle.platform.name}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button className="size-7 bg-transparent p-0 text-neutral-600">
          <Icon icon="Pencil" />
        </Button>
      </div>
    </div>
  );
}

function DragHandler({
  setActivatorNodeRef,
  listeners,
}: {
  setActivatorNodeRef: (element: HTMLElement | null) => void;
  listeners: SyntheticListenerMap | undefined;
}) {
  return (
    <div
      ref={setActivatorNodeRef}
      className="flex size-7 items-center justify-center"
      {...listeners}
    >
      <Icon icon="GripVertical" className="size-4" />
    </div>
  );
}

function ArchiveSwitch({ handle }: { handle: THandleWithPlatform }) {
  const [archive, setArchive] = useState(!handle.archive);
  const { archiveHandleMutation } = useHandlesMutations();

  return (
    <Switch
      checked={archive}
      onCheckedChange={() => {
        setArchive((pre) => !pre);
        archiveHandleMutation.mutate({
          id: handle.id,
          json: { archive },
        });
      }}
    />
  );
}

function Delete({ handle }: { handle: THandleWithPlatform }) {
  const { deleteHandleMutation } = useHandlesMutations();
  return (
    <button
      onClick={() => {
        deleteHandleMutation.mutate({ id: handle.id });
      }}
    >
      <Icon icon="Trash" className="size-4" />
    </button>
  );
}
