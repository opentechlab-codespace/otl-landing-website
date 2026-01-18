import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 10, // Number of points
  duration: 1, // Per second
});

export async function checkRateLimit(ip: string) {
  try {
    await rateLimiter.consume(ip);
    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      message: "Too many requests, please try again later.",
      retryAfter: error instanceof Error ? undefined : error.msBeforeNext / 1000
    };
  }
}