"use client";

import React, { Fragment } from "react";
import { type Platform } from "@/types/platform";
import Button from "@/components/core/button";
import { Dialog } from "@/components/core/dialog";
import CreateHandleForm from "@/components/[dashboard]/CreateHandleForm";
import { type createHandleWithoutPlatformIdSchema } from "@/utils/zod/handles";
import { type z } from "zod/v3";

type CreateHandlePayload = z.infer<typeof createHandleWithoutPlatformIdSchema>;

interface CreateHandleProps {
  onBack: () => void;
  selectedPlatform: Platform;
  createHandle: (handle: CreateHandlePayload) => void;
}

export default function CreateHandle({
  onBack,
  selectedPlatform,
  createHandle,
}: CreateHandleProps) {
  return (
    <Fragment>
      <Dialog.DialogHeader>
        <Dialog.DialogTitle>Create {selectedPlatform.name}</Dialog.DialogTitle>
      </Dialog.DialogHeader>
      <CreateHandleForm onSave={createHandle} />
      <Dialog.DialogFooter>
        <Button variant="secondary" width="full" onClick={onBack}>
          Back to Platforms
        </Button>
      </Dialog.DialogFooter>
    </Fragment>
  );
}
