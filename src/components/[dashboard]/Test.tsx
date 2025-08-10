"use client";

import React from "react";
import { Form } from "../core/form";
import { useForm } from "react-hook-form";
import z from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../core/input";

const socialLinkCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  biography: z.string(),
  email: z.string().email(),
  website: z.string().url(),
  phone: z.string(),
  city: z.string(),
});

type SocialLinkCreateSchema = z.infer<typeof socialLinkCreateSchema>;

export default function Test() {
  const form = useForm<SocialLinkCreateSchema>({
    resolver: zodResolver(socialLinkCreateSchema),
    mode: "onChange",
    defaultValues: {
      name: "Sarah Green",
      website: "sarahgreen.com",
      email: "sarahgreen@gmail.com",
      phone: "555-123-4567",
      city: "",
      biography:
        "Sarah is a fashion-focused content creator, brand ambassador and influencer based in NYC.",
    },
  });

  const onSubmit = async () => {
    form.reset();
  };

  return <div></div>;
}
