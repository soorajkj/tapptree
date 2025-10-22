"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod/v3";
import { createHandleWithoutPlatformIdSchema } from "@/utils/zod/handles";
import { Form } from "@/components/core/form";
import { Input } from "@/components/core/input";
import Button from "@/components/core/button";

type CreateHandlePayload = z.infer<typeof createHandleWithoutPlatformIdSchema>;

interface CreateHandleFormProps {
  onSave: (handle: CreateHandlePayload) => void;
}

export default function CreateHandleForm({ onSave }: CreateHandleFormProps) {
  const form = useForm({
    resolver: zodResolver(createHandleWithoutPlatformIdSchema),
    mode: "onSubmit",
    defaultValues: { url: "" },
  });

  const onSubmit = async (data: CreateHandlePayload) => {
    onSave(data);
    form.reset();
  };

  return (
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
        <Button className="w-full">Save</Button>
      </form>
    </Form.FormRoot>
  );
}
