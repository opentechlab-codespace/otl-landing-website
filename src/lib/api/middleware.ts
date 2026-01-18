import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "@/lib/security/csrf";
import { checkRateLimit } from "@/lib/security/rateLimit";

type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export function withApiMiddleware(handler: ApiHandler): ApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Rate limiting
      const ip = req.headers["x-forwarded-for"] as string || "127.0.0.1";
      const rateLimit = await checkRateLimit(ip);
      
      if (!rateLimit.success) {
        return res.status(429).json({ 
          error: "Too many requests",
          retryAfter: rateLimit.retryAfter 
        });
      }

      // CSRF protection for mutations
      if (["POST", "PUT", "DELETE"].includes(req.method || "")) {
        const token = req.headers["x-csrf-token"] as string;
        
        if (!token || !(await verifyToken(token))) {
          return res.status(403).json({ error: "Invalid CSRF token" });
        }
      }

      // Handle the request
      await handler(req, res);
    } catch (error) {
      console.error("API Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
}