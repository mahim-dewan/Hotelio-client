// middleware.js

import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  const pathname = request.nextUrl.pathname;

  // no token
  if (!token) {
    return NextResponse.redirect(new URL("/?login=true", request.url));
  }

  try {
    const decoded = jwtDecode(token);

    // admin route protection
    if (
      pathname.startsWith("/dashboard") &&
      decoded.role !== ("admin" || "MODERATOR")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/mybookings/:path*", "/dashboard/:path*"],
};
