import { z } from "zod/v3";

export const signUpSchema = z.object({
  name: z.string().trim().nonempty("Name is required"),
  email: z
    .string()
    .email({ message: "Please provide a valid email" })
    .trim()
    .toLowerCase(),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(/^[a-zA-Z0-9._]+$/, {
      message:
        "Usernames may only contain letters, numbers, underscores, and periods",
    })
    .regex(/^(?!\.)(.*?)(?<!\.)$/, {
      message: "Username cannot start or end with a period",
    }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be no more than 32 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])/,
      "Password must include at least one uppercase, at least one lowercase, at least one number, and a special character"
    ),
});

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .nonempty("Email is required")
    .toLowerCase(),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .nonempty("Password can't be empty"),
  rememberMe: z.boolean().default(true).optional(),
});
