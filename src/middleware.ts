import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(req: NextRequest, res: NextResponse) {
  
  return NextResponse.next();
}
