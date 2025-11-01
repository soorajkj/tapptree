"use client";

import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { type z } from "zod/v3";
import { type Handle } from "@/types/handle";
import { type Platform } from "@/types/platform";
import type {
  createHandleWithoutPlatformIdSchema,
  updateHandleSchema,
} from "@/utils/zod/handles";
import { useHandles } from "@/hooks/useHandles";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";
import { usePlatforms } from "@/hooks/usePlatforms";
import { Dialog } from "@/components/core/dialog";
import Button from "@/components/core/button";
import ListHandles from "@/components/[dashboard]/ListHandles";
import ChoosePlatform from "@/components/[dashboard]/ChoosePlatform";
import CreateHandle from "@/components/[dashboard]/CreateHandle";
import UpdateHandle from "@/components/[dashboard]/UpdateHandle";

type Stage = "list" | "choose" | "create" | "update";

type CreateHandlePayload = z.infer<typeof createHandleWithoutPlatformIdSchema>;
type UpdateHandleSchema = z.infer<typeof updateHandleSchema>;

export default function ManageHandles() {
  const [stage, setStage] = useState<Stage>("list");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedHandle, setSelectedHandle] = useState<Handle | null>(null);
  const [, setRerenderKey] = useState<number | null>(null);

  const queryClient = useQueryClient();
  const platformsQuery = usePlatforms();
  const handlesQuery = useHandles();
  const {
    reorderHandleMutation,
    createHandleMutation,
    updateHandleMutation,
    deleteHandleMutation,
  } = useHandlesMutations();

  const addedPlatformIds = new Set(
    handlesQuery.data?.map((handle) => handle.platformId) ?? []
  );
  const remainingPlatforms = platformsQuery.data?.filter(
    (p) => !addedPlatformIds.has(p.id)
  );

  const handleReorder = (handles: Handle[]) => {
    queryClient.setQueryData(["handles"], handles);
    reorderHandleMutation.mutate({
      platformIds: handles.map((h) => h.platformId),
    });
    setRerenderKey(Math.random());
  };

  const handlePlatformSelect = (platform: Platform) => {
    setSelectedPlatform(platform);
    setStage("create");
  };

  const submitHandleCreate = (payload: CreateHandlePayload) => {
    if (!selectedPlatform) return;
    createHandleMutation.mutate({
      platformId: selectedPlatform.id,
      url: payload.url,
    });
    setStage("list");
  };

  const startHandleEdit = (handle: Handle) => {
    setSelectedHandle(handle);
    setStage("update");
  };

  const submitHandleUpdate = (data: UpdateHandleSchema) => {
    if (!selectedHandle) return;
    updateHandleMutation.mutate({
      id: selectedHandle.id,
      json: data,
    });
    setStage("list");
  };

  const deleteHandle = (handle: Handle) => {
    deleteHandleMutation.mutate({
      id: handle.id,
    });
  };

  const renderStage = () => {
    const stages: Record<Stage, React.ReactNode> = {
      list: (
        <ListHandles
          handles={handlesQuery.data || []}
          onReorder={handleReorder}
          onAdd={() => setStage("choose")}
          onEdit={startHandleEdit}
        />
      ),
      choose: (
        <ChoosePlatform
          platforms={remainingPlatforms || []}
          onSelect={handlePlatformSelect}
          onBack={() => setStage("list")}
        />
      ),
      create: (
        <CreateHandle
          selectedPlatform={selectedPlatform!}
          onCreate={submitHandleCreate}
          onBack={() => setStage("choose")}
        />
      ),
      update: (
        <UpdateHandle
          selectedHandle={selectedHandle!}
          onUpdate={submitHandleUpdate}
          onDelete={deleteHandle}
          onBack={() => setStage("list")}
        />
      ),
    };
    return stages[stage];
  };

  return (
    <Dialog.DialogRoot onOpenChange={() => setStage("list")}>
      <Dialog.DialogTrigger asChild>
        <Button width="full">Manage Handles</Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className="max-w-md" aria-describedby={undefined}>
        {renderStage()}
      </Dialog.DialogContent>
    </Dialog.DialogRoot>
  );
}
