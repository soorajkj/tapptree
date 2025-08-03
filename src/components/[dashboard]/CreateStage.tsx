"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rpc } from "@/lib/rpc";
import { InferResponseType } from "hono";
import { Fragment } from "react";
import { Icon } from "../core/icon";
import { Dialog } from "../core/dialog";
import { Button } from "../core/button";
import { Input } from "../core/input";
import { Form } from "../core/form";
import { createSocialLinkSchemaWihtoutPlatformId } from "@/utils/validators/socials";
import z from "zod/v3";

type Platform = InferResponseType<typeof rpc.api.me.platforms.$get>[number];

type CreateSocialLinkSchemaWihtoutPlatformId = z.infer<
  typeof createSocialLinkSchemaWihtoutPlatformId
>;

export default function CreateStage({
  back,
  selectedPlatform,
  onSave,
}: {
  back: () => void;
  selectedPlatform: Platform | null;
  onSave: (platform: string, url: string) => Promise<void>;
}) {
  const form = useForm({
    resolver: zodResolver(createSocialLinkSchemaWihtoutPlatformId),
    mode: "onSubmit",
    defaultValues: { url: "" },
  });

  const onSubmit = async (data: CreateSocialLinkSchemaWihtoutPlatformId) => {
    if (!selectedPlatform) return;
    await onSave(selectedPlatform.id, data.url);
    form.reset();
  };

  if (!selectedPlatform) return null;

  return (
    <Fragment>
      <Dialog.DialogHeader>
        <div className="flex items-center justify-between">
          <button
            onClick={back}
            className="flex items-center justify-center rounded-lg p-2 hover:bg-neutral-800/30"
          >
            <Icon icon="ArrowLeft" className="size-5" />
          </button>
          <Dialog.DialogTitle>Add {selectedPlatform.name}</Dialog.DialogTitle>
          <Dialog.DialogClose className="flex items-center justify-center rounded-lg p-2 hover:bg-neutral-800/30">
            <Icon icon="X" className="size-5" />
          </Dialog.DialogClose>
        </div>
      </Dialog.DialogHeader>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-white">
          Add your {selectedPlatform.name} profile
        </h3>
        <p className="text-sm text-neutral-400">
          Enter the URL to your {selectedPlatform.name} profile
        </p>
      </div>
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
                  <Input
                    placeholder={`https://${selectedPlatform.name.toLowerCase()}.com/yourusername`}
                    {...field}
                  />
                </Form.FormControl>
                <Form.FormMessage />
              </Form.FormItem>
            )}
          />
          <Button className="w-full">Save</Button>
        </form>
      </Form.FormRoot>
    </Fragment>
  );
}
