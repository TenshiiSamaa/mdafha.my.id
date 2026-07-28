import { NextResponse } from "next/server";

// NextAuth middleware is temporarily disabled for frontend UI development.
// Original configuration:
// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";
// export default NextAuth(authConfig).auth;
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\..*$).*)"],
// };

export default function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
