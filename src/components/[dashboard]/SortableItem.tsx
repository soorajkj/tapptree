"use client";

import type { CSSProperties, PropsWithChildren } from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type SortableItemProps = PropsWithChildren<{
  id: UniqueIdentifier;
}>;

export default function SortableItem(props: SortableItemProps) {
  const { id, children } = props;

  const { setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  } as CSSProperties;

  return (
    <li ref={setNodeRef} style={style}>
      {children}
    </li>
  );
}
