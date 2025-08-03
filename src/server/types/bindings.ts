import type prisma from "@/lib/prisma";
import { type JwtVariables } from "hono/jwt";
import { type JWTPayload as HonoJWTPaylod } from "hono/utils/jwt/types";

export interface JWTPayload extends HonoJWTPaylod {
  id: string;
}

type Variables = {
  db: typeof prisma;
} & JwtVariables<JWTPayload>;

export interface AppBindings {
  Bindings: {};
  Variables: Variables;
}
