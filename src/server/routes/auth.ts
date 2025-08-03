import { deleteCookie, setCookie } from "hono/cookie";
import { sign } from "hono/jwt";
import { zValidator } from "@hono/zod-validator";
import bcrypt from "bcryptjs";
import { hono } from "@/lib/hono";
import { signInSchema, signUpSchema } from "@/utils/validators/auth";
import { JWTPayload } from "@/server/types/bindings";

const auth = hono
  .createApp()
  .post("/signup", zValidator("json", signUpSchema), async (c) => {
    const { email, password, name, username } = c.req.valid("json");
    const db = c.get("db");

    const u = await db.user.findFirst({ where: { email } });
    if (u) return c.json({ error: "Email is use" }, 409);

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const user = await db.user.create({
      data: { name, email, password: hash, username },
      omit: { password: true },
    });

    return c.json({ data: user }, 201);
  })
  .post("/signin", zValidator("json", signInSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    const db = c.get("db");

    const user = await db.user.findFirst({ where: { email } });
    if (!user) return c.json({ error: "Invalid credentials" }, 401);
    const hash = await bcrypt.compare(password, user.password);
    if (!hash) return c.json({ error: "Incorrect password" }, 401);

    const now = Math.floor(Date.now() / 1000);
    const maxAge = 60 * 60 * 24 * 7;
    const iat = now;
    const nbf = now;
    const exp = now + maxAge;
    const payload: JWTPayload = { id: user.id, iat, nbf, exp };

    const token = await sign(payload, "1234567890");

    setCookie(c, "__auth", token, {
      maxAge,
      sameSite: "Lax",
      httpOnly: true,
      secure: false,
    });

    return c.json("Succeess", 200);
  })
  .post("/signout", async (c) => {
    deleteCookie(c, "__auth");

    return c.json("Logout success");
  });

export default auth;
