"use client";

import { Fragment, useCallback } from "react";
import { Dialog } from "../core/dialog";
import { Icon } from "../core/icon";
import { Button } from "../core/button";
import SortableList from "./SortableList";
import SortableItem from "./SortableItem";
import HandleControl from "./HandleControl";
import type { THandleWithPlatform } from "@/types/handle";

export default function ListStage({
  handles,
  onAdd,
  handleReorder,
  onEditHandle,
  onToggleArchive,
}: {
  handles: THandleWithPlatform[];
  onAdd: () => void;
  handleReorder: (data: { platformIds: string[] }) => void;
  onEditHandle: (handle: THandleWithPlatform) => void;
  onToggleArchive: (handle: THandleWithPlatform) => void;
}) {
  const renderSortableItem = useCallback(
    (handle: THandleWithPlatform) => (
      <SortableItem id={handle.id} key={handle.id}>
        <HandleControl
          handle={handle}
          onEdit={onEditHandle}
          onToggleArchive={onToggleArchive}
        />
      </SortableItem>
    ),
    [onEditHandle, onToggleArchive]
  );

  return (
    <Fragment>
      <Dialog.DialogHeader>
        <div className="flex items-center justify-between">
          <Dialog.DialogTitle>Social icons</Dialog.DialogTitle>
          <Dialog.DialogClose className="hover:bg-carbon-800/30 flex items-center justify-center rounded-lg p-2">
            <Icon icon="X" className="size-5" />
          </Dialog.DialogClose>
        </div>
      </Dialog.DialogHeader>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-white">Show visitors where to find you</h3>
        <p>
          Add your social profiles, email and more as linked icons on your
          Linktree.
        </p>
      </div>
      <div className="flex h-full max-h-80 flex-col gap-4 overflow-y-auto">
        {/* <SortableList
          items={handles}
          onDragEventEnd={(reorderedHandles) => {
            const platformIds = reorderedHandles.map(
              (handle) => handle.platformId
            );
            handleReorder({ platformIds });
          }}
          renderItem={renderSortableItem}
        ></SortableList> */}
      </div>
      <Dialog.DialogFooter>
        <Button onClick={onAdd} className="w-full">
          Add new button
        </Button>
      </Dialog.DialogFooter>
    </Fragment>
  );
}
