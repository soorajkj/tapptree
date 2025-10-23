"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { type Handle } from "@/types/handle";
import { Icon } from "@/components/core/icon";

interface HandleControlProps {
  handle: Handle;
  onEdit: (handle: Handle) => void;
}

export default function HandleControl({ handle, onEdit }: HandleControlProps) {
  const { listeners, setActivatorNodeRef, attributes } = useSortable({
    id: handle.id,
  });

  return (
    <div ref={setActivatorNodeRef} className="relative">
      <div className="flex w-full items-center gap-px">
        <button
          {...listeners}
          {...attributes}
          className="inline-flex size-6 cursor-pointer items-center justify-center hover:text-neutral-800 [&_svg]:size-4"
        >
          <Icon icon="GripVertical" />
        </button>
        <div className="flex w-full rounded-xl bg-neutral-50 p-3 hover:bg-neutral-100">
          <div className="flex flex-1 items-center gap-2">
            <div className="flex size-8 items-center justify-center">
              <div className="size-full rounded-md bg-neutral-200"></div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="font-semibold text-neutral-950">
                {handle.platform.name}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              className="inline-flex size-6 cursor-pointer items-center justify-center [&_svg]:size-4"
              onClick={() => onEdit(handle)}
            >
              <Icon icon="Pencil" className="text-neutral-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
