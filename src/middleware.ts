import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple rate limiter using a basic in-memory store
// In production, use a Redis store or similar
const rateLimit = {
  // Store IP addresses and their request count
  store: new Map<string, { count: number; timestamp: number }>(),

  // Maximum number of requests in the interval
  max: 50,

  // Time window in seconds
  interval: 60 * 1000, // 1 minute
};

export function middleware(request: NextRequest) {
  // Get the client IP from headers
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

  // Only rate limit API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const now = Date.now();

    // Get existing data for this IP
    const record = rateLimit.store.get(ip);

    // If no record exists or it's expired, create a new one
    if (!record || now - record.timestamp > rateLimit.interval) {
      rateLimit.store.set(ip, { count: 1, timestamp: now });
      return NextResponse.next();
    }

    // Increment the count
    record.count++;
    rateLimit.store.set(ip, record);

    // If too many requests, return 429
    if (record.count > rateLimit.max) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }
  }

  return NextResponse.next();
}

// Only run middleware on API routes
export const config = {
  matcher: "/api/:path*",
};
