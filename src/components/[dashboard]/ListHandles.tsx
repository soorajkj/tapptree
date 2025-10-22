import React, { Fragment } from "react";
import { type Handle } from "@/types/handle";
import Button from "@/components/core/button";
import { Dialog } from "@/components/core/dialog";
import SortableList from "@/components/[dashboard]/SortableList";
import SortableItem from "@/components/[dashboard]/SortableItem";
import HandleControl from "@/components/[dashboard]/HandleControl";

interface ListHandlesProps {
  handles: Handle[];
  onReorder: (handles: Handle[]) => void;
  onAdd: () => void;
}

export default function ListHandles({
  handles,
  onAdd,
  onReorder,
}: ListHandlesProps) {
  return (
    <Fragment>
      <Dialog.DialogHeader>
        <Dialog.DialogTitle>Manage Handles</Dialog.DialogTitle>
      </Dialog.DialogHeader>
      <SortableList
        items={handles}
        onDragEventEnd={(handles: Handle[]) => onReorder(handles)}
        renderItem={(handle: Handle) => (
          <SortableItem uid={handle.id} key={handle.id}>
            <HandleControl handle={handle} />
          </SortableItem>
        )}
      />
      <Dialog.DialogFooter>
        <Button width="full" onClick={onAdd}>
          Add new Handle
        </Button>
      </Dialog.DialogFooter>
    </Fragment>
  );
}
