import React, { Fragment } from "react";
import { type Handle } from "@/types/handle";
import Button from "@/components/core/button";
import { Dialog } from "@/components/core/dialog";
import SortableList from "@/components/[dashboard]/SortableList";
import SortableItem from "@/components/[dashboard]/SortableItem";
import HandleControl from "@/components/[dashboard]/HandleControl";
import { Icon } from "@/components/core/icon";

interface ListHandlesProps {
  handles: Handle[];
  onReorder: (handles: Handle[]) => void;
  onAdd: () => void;
  onEdit: (handle: Handle) => void;
}

export default function ListHandles({
  handles,
  onAdd,
  onReorder,
  onEdit,
}: ListHandlesProps) {
  return (
    <Fragment>
      <Dialog.DialogHeader>
        <div className="size-8"></div>
        <Dialog.DialogTitle>Show visitors where to find you</Dialog.DialogTitle>
        <Dialog.DialogClose>
          <Icon icon="X" />
        </Dialog.DialogClose>
      </Dialog.DialogHeader>
      <div className="flex w-full flex-col gap-2">
        <p>
          Add your media handles, email and more as linked icons on your
          Tapptree.
        </p>
        <SortableList
          items={handles}
          onDragEventEnd={(handles: Handle[]) => onReorder(handles)}
          renderItem={(handle: Handle) => (
            <SortableItem uid={handle.id} key={handle.id}>
              <HandleControl handle={handle} onEdit={onEdit} />
            </SortableItem>
          )}
        />
      </div>
      <Dialog.DialogFooter>
        <Button width="full" onClick={onAdd}>
          Add new Handle
        </Button>
      </Dialog.DialogFooter>
    </Fragment>
  );
}
