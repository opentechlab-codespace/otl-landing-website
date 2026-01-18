import { SignJWT, jwtVerify } from "jose";
import { randomBytes } from "crypto";

const secret = new TextEncoder().encode(
  process.env.CSRF_SECRET || randomBytes(32).toString("hex")
);

export async function generateToken(): Promise<string> {
  return new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}