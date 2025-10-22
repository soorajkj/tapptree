"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { type Handle } from "@/types/handle";

interface HandleControlProps {
  handle: Handle;
}

export default function HandleControl({ handle }: HandleControlProps) {
  const { listeners, setActivatorNodeRef, attributes } = useSortable({
    id: handle.id,
  });

  return (
    <div
      ref={setActivatorNodeRef}
      {...listeners}
      {...attributes}
      className="overflow-hidden rounded-md border border-neutral-200 bg-white p-3 shadow-2xs"
    >
      <p className="text-neutral-950">{handle.platform.name}</p>
    </div>
  );
}
