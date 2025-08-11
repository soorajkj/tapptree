"use client";

import React from "react";
import SortableList from "./SortableList";
import { type THandleWithPlatform } from "@/types/handle";
import { useHandles } from "@/hooks/useHandles";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";
import SortableItem from "./SortableItem";
import HandleControl from "./HandleControl";
import HandlesSkeleton from "./HandlesSkeleton";
import HandlesEmpty from "./HandlesEmpty";

export default function Handles() {
  const handlesQuery = useHandles();
  const { reorderHandleMutation } = useHandlesMutations();

  if (handlesQuery.isPending) return <HandlesSkeleton />;
  if (handlesQuery.isError) return "Something went wrong";
  if (!handlesQuery.data.length) return <HandlesEmpty />;

  const handleReorder = (handles: THandleWithPlatform[]) => {
    const platformIds = handles.map((handle) => handle.platformId);
    reorderHandleMutation.mutate({ platformIds });
  };

  return (
    <SortableList
      variant="list"
      items={handlesQuery.data}
      onDragEventEnd={handleReorder}
      renderItem={(handle: THandleWithPlatform) => (
        <SortableItem uid={handle.id} key={handle.id}>
          <HandleControl handle={handle} />
        </SortableItem>
      )}
    />
  );
}
