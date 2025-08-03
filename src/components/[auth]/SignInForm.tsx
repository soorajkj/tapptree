"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import type { SignInSchema } from "@/utils/validators/auth";
import { signInSchema } from "@/utils/validators/auth";
import { rpc } from "@/lib/rpc";
import { Form } from "../core/form";
import { Input } from "../core/input";
import { Button } from "../core/button";

export default function SignInForm() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (json: SignInSchema) => {
      const resp = await rpc.api.auth.signin.$post({ json });
      return await resp.json();
    },
  });

  const onSubmit = async (data: SignInSchema) => {
    await mutateAsync(data);
    form.reset();
  };

  return (
    <Form.FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full max-w-sm grid-cols-1 gap-4"
      >
        <h1 className="font-archivo text-center text-2xl font-medium text-white">
          Sign in to your account
        </h1>
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Email</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="yourname@example.com" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Password</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Button disabled={isPending}>Login</Button>
      </form>
    </Form.FormRoot>
  );
}
