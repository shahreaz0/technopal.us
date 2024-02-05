import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/signin", "/signup", "/blog", "/otp-verfication"],
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }

    if (
      auth.userId &&
      auth.sessionClaims.metadata?.role !== "admin" &&
      req.nextUrl.pathname === "/payment"
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (auth.userId && ["/signup", "/signin"].includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  },
});

// export const config = {
//   matcher: ["/dashboard", "/payment", "/payment/success", "/signup"],
// };

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
