"use client";

import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { type z } from "zod/v3";
import { type Handle } from "@/types/handle";
import { type Platform } from "@/types/platform";
import { type createHandleWithoutPlatformIdSchema } from "@/utils/zod/handles";
import { useHandles } from "@/hooks/useHandles";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";
import { usePlatforms } from "@/hooks/usePlatforms";
import { Dialog } from "@/components/core/dialog";
import Button from "@/components/core/button";
import ListHandles from "@/components/[dashboard]/ListHandles";
import ChoosePlatform from "@/components/[dashboard]/ChoosePlatform";
import CreateHandle from "@/components/[dashboard]/CreateHandle";

type Stage = "list" | "choose" | "create" | "update";

type CreateHandlePayload = z.infer<typeof createHandleWithoutPlatformIdSchema>;

export default function ManageHandles() {
  const [stage, setStage] = useState<Stage>("list");
  const [sltdPlatform, setSltdPlatform] = useState<Platform | null>(null);
  // const [sltdHandle, setSltddHandle] = useState<Handle | null>(null);
  // Force SortableList to re-render using a random key to avoid inconsistent drag behavior (DnD-kit quirk)
  const [_random, setRandom] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const platformsQuery = usePlatforms();
  const handlesQuery = useHandles();
  const { reorderHandleMutation, createHandleMutation } = useHandlesMutations();

  const addedPlatformIds = new Set(
    handlesQuery.data?.map((handle) => handle.platformId) ?? []
  );

  const remainingPlatforms = platformsQuery.data?.filter(
    (p) => !addedPlatformIds.has(p.id)
  );

  const handleReorder = (handles: Handle[]) => {
    queryClient.setQueryData(["handles"], handles);
    const platformIds = handles.map((h) => h.platformId);
    setRandom(Math.random());
    reorderHandleMutation.mutate({ platformIds });
  };

  const handleCreateHandle = async (handle: CreateHandlePayload) => {
    if (!sltdPlatform) return;
    createHandleMutation.mutate({
      platformId: sltdPlatform.id,
      url: handle.url,
    });
    setStage("list");
  };

  function renderStage() {
    const stages: Record<Stage, React.ReactNode> = {
      list: (
        <ListHandles
          handles={handlesQuery.data || []}
          onReorder={handleReorder}
          onAdd={() => setStage("choose")}
        />
      ),
      choose: (
        <ChoosePlatform
          platforms={remainingPlatforms || []}
          onSelect={(platform) => {
            setSltdPlatform(platform);
            setStage("create");
          }}
          onBack={() => setStage("list")}
        />
      ),
      create: (
        <CreateHandle
          selectedPlatform={sltdPlatform!}
          createHandle={handleCreateHandle}
          onBack={() => setStage("choose")}
        />
      ),
      update: <div></div>,
    };
    return stages[stage];
  }

  return (
    <Dialog.DialogRoot>
      <Dialog.DialogTrigger asChild>
        <Button>Manage Handles</Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className="max-w-md" aria-describedby={undefined}>
        {renderStage()}
      </Dialog.DialogContent>
    </Dialog.DialogRoot>
  );
}
