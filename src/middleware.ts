import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { COOKIE_KEY } from "@/lib/constants";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get(COOKIE_KEY);

  // Prevent unwanted users from accessing the application
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - login (login page)
     * - api (API routes)
     * - images (public images, favicon.ico, etc)
     */
    "/((?!login|api|images|_next/static|_next/image|favicon.ico).*)",
  ],
};
