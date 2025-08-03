import { NextResponse, NextRequest } from "next/server";

export default function middleware(req: NextRequest, res: NextResponse) {
  return NextResponse.next();
}
