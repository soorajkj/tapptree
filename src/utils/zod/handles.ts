import { z } from "zod/v3";

export const createHandleSchema = z.object({
  platformId: z.string().min(1),
  url: z.string().min(1, "URL is rquired"),
});

export const reorderHandlesSchema = z.object({
  platformIds: z.string().array().min(1),
});

export const updateHandleSchema = z.object({
  url: z.string().min(1, "URL is required").optional(),
});

export const archiveHandleSchema = z.object({
  archive: z.boolean(),
});
