import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const programSchema = z.object({
    id: z.bigint(),
    department: z.string(),
    title: z.string(),
    fee: z.number(),
    notice: z.string(),
    courseStatus: z.string(),
    attachment: z.string(),
    status: z.string(),
});

export type Program = z.infer<typeof programSchema>;
