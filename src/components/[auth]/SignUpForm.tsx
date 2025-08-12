"use client";

import { useForm } from "react-hook-form";
import type z from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/utils/zod/auth";
import { Form } from "@/components/core/form";
import { Input } from "@/components/core/input";
import { Button } from "@/components/core/button";
import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type SignUpSchema = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const router = useRouter();
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
    defaultValues: { email: "", password: "", name: "", username: "" },
  });

  const onSubmit = async (fields: SignUpSchema) => {
    await authClient.signUp.email(
      { ...fields },
      {
        onSuccess: () => {
          toast.success("User registration success");
          router.push("/signin");
        },
      }
    );
    form.reset();
  };

  return (
    <Form.FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full max-w-sm grid-cols-1 gap-4"
      >
        <h2 className="font-archivo text-center text-2xl font-medium text-white">
          Sign in to your account
        </h2>
        <Form.FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Name</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="Sara Jane" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Username</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="sarajane" {...field} />
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
        <Button>Get started</Button>
      </form>
    </Form.FormRoot>
  );
}
