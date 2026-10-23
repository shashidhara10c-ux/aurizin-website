import { createHash, timingSafeEqual } from "node:crypto";
import type { Request, Response, NextFunction } from "express";

function sha256(value: string): Buffer {
  return createHash("sha256").update(value).digest();
}

/**
 * Protects admin-only routes with a shared password supplied via the
 * `Authorization: Bearer <password>` header, compared against the
 * `ADMIN_PASSWORD` secret using a timing-safe comparison.
 */
export function adminAuth(req: Request, res: Response, next: NextFunction): void {
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    req.log.error("ADMIN_PASSWORD is not configured");
    res.status(500).json({ error: "Admin access is not configured" });
    return;
  }

  const header = req.get("authorization") ?? "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  const provided = match?.[1];

  if (!provided || !timingSafeEqual(sha256(provided), sha256(expected))) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  next();
}
