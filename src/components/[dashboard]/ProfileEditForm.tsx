"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod/v3";
import Button from "@/components/core/button";
import { Form } from "@/components/core/form";
import { Input } from "@/components/core/input";
import { Textarea } from "@/components/core/textarea";

const profileSchema = z.object({
  name: z.string(),
  bio: z.string(),
  email: z.string(),
  phone: z.string(),
  gender: z.enum(["male", "female"]),
});

type ProfileSchema = z.infer<typeof profileSchema>;

export default function ProfileEditForm() {
  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      bio: "",
      email: "",
      phone: "",
      gender: "male",
    },
  });

  const onSubmit = async (_: ProfileSchema) => {};

  return (
    <Form.FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-1 gap-3"
        autoComplete="off"
      >
        <Form.FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Name</Form.FormLabel>
              <Form.FormControl>
                <Input {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Description</Form.FormLabel>
              <Form.FormControl>
                <Textarea
                  placeholder="Apple Watch Series 5 GPS brings smart features and elegant design for daily convenience."
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Email</Form.FormLabel>
              <Form.FormControl>
                <Input {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Phone</Form.FormLabel>
              <Form.FormControl>
                <Input {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Button variant="secondary">Sign in</Button>
      </form>
    </Form.FormRoot>
  );
}
