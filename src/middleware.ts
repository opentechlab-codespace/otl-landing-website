import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { featureFlags } from "@/lib/config/features";
import { securityHeaders } from "@/lib/security/headers";
import { checkRateLimit } from "@/lib/security/rateLimit";

export async function middleware(request: NextRequest) {
  // Rate limiting
  const ip = request.ip || "127.0.0.1";
  const rateLimit = await checkRateLimit(ip);
  
  if (!rateLimit.success) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": rateLimit.retryAfter?.toString() || "60",
      },
    });
  }

  // Feature flags check
  const url = new URL(request.url);
  
  if (url.pathname.startsWith("/blog") && !featureFlags.enableBlog) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (url.pathname.startsWith("/community") && !featureFlags.enableCommunity) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (url.pathname.startsWith("/academy") && !featureFlags.enableAcademy) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Apply security headers
  const response = NextResponse.next();
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};