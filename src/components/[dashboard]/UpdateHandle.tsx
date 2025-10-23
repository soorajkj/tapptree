"use client";

import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod/v3";
import { updateHandleSchema } from "@/utils/zod/handles";
import Button from "@/components/core/button";
import { Dialog } from "@/components/core/dialog";
import { Form } from "@/components/core/form";
import { Input } from "@/components/core/input";
import { type Handle } from "@/types/handle";
import { Icon } from "../core/icon";

interface UpdateHandleProps {
  onBack: () => void;
  onUpdate: (data: UpdateHandleSchema) => void;
  onDelete: (handle: Handle) => void;
  selectedHandle: Handle;
}

type UpdateHandleSchema = z.infer<typeof updateHandleSchema>;

export default function UpdateHandle({
  selectedHandle,
  onUpdate,
  onDelete,
  onBack,
}: UpdateHandleProps) {
  const form = useForm({
    resolver: zodResolver(updateHandleSchema),
    mode: "onChange",
    defaultValues: { url: selectedHandle.url },
  });

  const { formState } = form;

  const onSubmit = async (data: UpdateHandleSchema) => {
    onUpdate(data);
    form.reset();
  };

  return (
    <Fragment>
      <Dialog.DialogHeader>
        <button
          className="flex size-8 cursor-pointer items-center justify-center [&_svg]:size-5"
          onClick={onBack}
        >
          <Icon icon="ChevronLeft"></Icon>
        </button>
        <Dialog.DialogTitle>
          Edit {selectedHandle.platform.name}
        </Dialog.DialogTitle>
        <Dialog.DialogClose>
          <Icon icon="X" />
        </Dialog.DialogClose>
      </Dialog.DialogHeader>
      <Form.FormRoot {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Form.FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <Form.FormItem>
                <Form.FormLabel>URL</Form.FormLabel>
                <Form.FormControl>
                  <Input {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </Form.FormItem>
            )}
          />
          <div className="flex flex-col gap-1">
            <Button className="w-full" disabled={!formState.isValid}>
              Save and Update
            </Button>
            <Button
              variant="secondary"
              width="full"
              onClick={() => onDelete(selectedHandle)}
            >
              <Icon icon="Trash2" />
              Remove Handle
            </Button>
          </div>
        </form>
      </Form.FormRoot>
    </Fragment>
  );
}
