"use client";

import { Fragment, type ComponentProps, type ReactNode } from "react";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

type SortableItemBase = { id: UniqueIdentifier };

interface SortableListProps<T extends SortableItemBase>
  extends VariantProps<typeof sortableListStyles>,
    Omit<ComponentProps<"ul">, "onChange"> {
  items: T[];
  onChange(items: T[]): void;
  renderItem(item: T): ReactNode;
}

export default function SortableList<T extends SortableItemBase>({
  items,
  onChange,
  renderItem,
  variant = "list",
  className,
}: SortableListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    console.log(event);
    const { active, over } = event;
    if (over && active.id !== over?.id) {
      const from = items.findIndex(({ id }) => id === active.id);
      const to = items.findIndex(({ id }) => id === over.id);
      onChange(arrayMove(items, from, to));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToParentElement]}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <ul
          className={sortableListStyles({ variant, className })}
          role="application"
        >
          {items.map((item) => (
            <Fragment key={item.id}>{renderItem(item)}</Fragment>
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

const sortableListStyles = tv({
  base: ["grid w-full"],
  variants: { variant: { grid: "grid-cols-2", list: "grid-cols-1" } },
});
