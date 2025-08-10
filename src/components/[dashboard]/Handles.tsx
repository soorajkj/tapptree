"use client";

import React from "react";
import SortableList from "./SortableList";
import type { THandleWithPlatform } from "@/types/handle";
import SortableItem from "./SortableItem";
import HandleControl from "./HandleControl";
import { useHandles } from "@/hooks/useHandles";
import HandlesSkeleton from "./HandlesSkeleton";
import HandlesEmpty from "./HandlesEmpty";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";

export default function Handles() {
  const { data: handles = [], isPending, isError } = useHandles();
  const { reorderHandleMutation } = useHandlesMutations();

  if (isPending) return <HandlesSkeleton />;

  if (isError) return "Something went wrong";

  if (!handles.length) return <HandlesEmpty />;

  return (
    <SortableList
      variant="list"
      items={handles}
      onDragEventEnd={(reorderedHandles) => {
        const platformIds = reorderedHandles.map((handle) => handle.platformId);
        reorderHandleMutation.mutate({ platformIds });
      }}
      renderItem={(handle: THandleWithPlatform) => (
        <SortableItem id={handle.id} key={handle.id}>
          <HandleControl handle={handle} />
        </SortableItem>
      )}
    />
  );
}
