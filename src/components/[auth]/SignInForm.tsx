"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/utils/zod/auth";
import { Form } from "../core/form";
import { Input } from "../core/input";
import { Button } from "../core/button";
import type z from "zod/v3";
import { authClient } from "@/lib/authClient";

type SignInSchema = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (fields: SignInSchema) => {
    await authClient.signIn.email({ ...fields, callbackURL: "/dashboard" });
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
        <Button>Login</Button>
      </form>
    </Form.FormRoot>
  );
}
