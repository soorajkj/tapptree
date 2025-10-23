"use client";

import React, { Fragment } from "react";
import { type Platform } from "@/types/platform";
import { type z } from "zod/v3";
import { type createHandleWithoutPlatformIdSchema } from "@/utils/zod/handles";
import Button from "@/components/core/button";
import { Dialog } from "@/components/core/dialog";
import { Icon } from "@/components/core/icon";
import CreateHandleForm from "@/components/[dashboard]/CreateHandleForm";

type CreateHandlePayload = z.infer<typeof createHandleWithoutPlatformIdSchema>;

interface CreateHandleProps {
  onBack: () => void;
  selectedPlatform: Platform;
  onCreate: (handle: CreateHandlePayload) => void;
}

export default function CreateHandle({
  onBack,
  selectedPlatform,
  onCreate,
}: CreateHandleProps) {
  return (
    <Fragment>
      <Dialog.DialogHeader>
        <button
          className="flex size-8 cursor-pointer items-center justify-center [&_svg]:size-5"
          onClick={onBack}
        >
          <Icon icon="ChevronLeft"></Icon>
        </button>
        <Dialog.DialogTitle>Create {selectedPlatform.name}</Dialog.DialogTitle>
        <Dialog.DialogClose>
          <Icon icon="X" />
        </Dialog.DialogClose>
      </Dialog.DialogHeader>
      <CreateHandleForm onSave={onCreate} />
      <Dialog.DialogFooter>
        <Button variant="secondary" width="full" onClick={onBack}>
          Back to Platforms
        </Button>
      </Dialog.DialogFooter>
    </Fragment>
  );
}
