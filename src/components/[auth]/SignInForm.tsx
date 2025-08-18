"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/utils/zod/auth";
import { Checkbox } from "@/components/core/checkbox";
import { Form } from "@/components/core/form";
import { Input } from "@/components/core/input";
import { Button } from "@/components/core/button";
import type z from "zod/v3";
import { authClient } from "@/lib/authClient";
import Link from "next/link";

type SignInSchema = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
    defaultValues: { email: "", password: "", rememberMe: true },
  });

  const onSubmit = async (fields: SignInSchema) => {
    await authClient.signIn.email({
      ...fields,
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          const message = ctx.error.message || "Something went wrong";
          toast.error(message);
        },
        onSuccess: () => {
          router.push("/dashboard");
          form.reset();
        },
      },
    });
  };

  return (
    <Form.FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-1 gap-4"
      >
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Email</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="Enter your email" {...field} />
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
                  placeholder="••••••••"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <div className="flex items-center justify-between gap-2">
          <Form.FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <Form.FormItem className="grid-flow-col-dense items-center">
                <Form.FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Form.FormControl>
                <Form.FormLabel>Remember me</Form.FormLabel>
              </Form.FormItem>
            )}
          />
          <div className="flex items-center">
            <Link
              href={"/"}
              className="text-brand-700 text-sm font-semibold dark:text-gray-300"
            >
              Forgot password
            </Link>
          </div>
        </div>
        <Button varinat="primary" disabled={isPending}>
          Sign in
        </Button>
      </form>
    </Form.FormRoot>
  );
}
