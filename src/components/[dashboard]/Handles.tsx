"use client";

import React, { useState } from "react";
import SortableList from "./SortableList";
import { type THandleWithPlatform } from "@/types/handle";
import { useHandles } from "@/hooks/useHandles";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";
import SortableItem from "./SortableItem";
import HandleControl from "./HandleControl";
import HandlesSkeleton from "./HandlesSkeleton";
import HandlesEmpty from "./HandlesEmpty";
import { useQueryClient } from "@tanstack/react-query";

export default function Handles() {
  const queryClient = useQueryClient();
  const handlesQuery = useHandles();
  const { reorderHandleMutation } = useHandlesMutations();
  const [_randomState, setRandomState] = useState(0); // remove the flick, not recommeded

  if (handlesQuery.isPending) return <HandlesSkeleton />;
  if (handlesQuery.isError) return "Something went wrong";
  if (!handlesQuery.data.length) return <HandlesEmpty />;

  const handleReorder = (handles: THandleWithPlatform[]) => {
    const platformIds = handles.map((handle) => handle.platformId);
    queryClient.setQueryData(["handles"], handles);
    setRandomState(Math.random());
    reorderHandleMutation.mutate({ platformIds });
  };

  return (
    <SortableList
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
