import { type NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export default async function middleware(req: NextRequest, _res: NextResponse) {
  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // getSessionCookie function only checks for the existence of a session cookie; it does not validate it.
  // Anyone can manually create a cookie to bypass it.
  // We recommend handling auth checks in each page/route
  const sessionCookie = getSessionCookie(req);
  if (!sessionCookie) return NextResponse.redirect(new URL("/signin", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
