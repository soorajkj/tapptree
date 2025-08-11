"use client";

import type { ComponentProps, CSSProperties } from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps extends ComponentProps<"li"> {
  uid: UniqueIdentifier;
}

export default function SortableItem({ children, uid }: SortableItemProps) {
  const { setNodeRef, transform } = useSortable({
    id: uid,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  } as CSSProperties;

  return (
    <li ref={setNodeRef} style={style}>
      {children}
    </li>
  );
}
