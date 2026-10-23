import { Router, type IRouter } from "express";
import { desc } from "drizzle-orm";
import { db, contactSubmissionsTable } from "@workspace/db";
import {
  CreateContactSubmissionBody,
  ListContactSubmissionsResponse,
  ListContactSubmissionsResponseItem,
} from "@workspace/api-zod";
import { adminAuth } from "../../middlewares/admin-auth";

const router: IRouter = Router();

router.post("/contact-submissions", async (req, res): Promise<void> => {
  const parsed = CreateContactSubmissionBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact submission");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [submission] = await db
    .insert(contactSubmissionsTable)
    .values(parsed.data)
    .returning();

  res.status(201).json(ListContactSubmissionsResponseItem.parse(submission));
});

router.get("/contact-submissions", adminAuth, async (_req, res): Promise<void> => {
  const submissions = await db
    .select()
    .from(contactSubmissionsTable)
    .orderBy(desc(contactSubmissionsTable.createdAt));

  res.json(ListContactSubmissionsResponse.parse(submissions));
});

export default router;
