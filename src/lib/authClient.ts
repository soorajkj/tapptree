import { createAuthClient } from "better-auth/client";
import { usernameClient, adminClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL!,
  plugins: [usernameClient(), adminClient()],
});
