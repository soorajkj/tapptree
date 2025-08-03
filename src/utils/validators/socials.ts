import { z } from "zod/v3";

export const createSocialLinkSchema = z.object({
  platformId: z.string().min(1),
  url: z.string().min(1, "URL is rquired"),
});

export const createSocialLinkSchemaWihtoutPlatformId =
  createSocialLinkSchema.omit({ platformId: true });
