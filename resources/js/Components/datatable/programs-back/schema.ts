import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const programSchema = z.object({
    id: z.bigint(),
    dept_id: z.bigint(),
    prog_name: z.string(),
    prog_fee:z.number(),
    reg_open_date: z.string().date(),
    notice_link:z.string(),
    course_status:enum(),
    status: z.string(),
    label: z.string(),
    priority: z.string(),
});

export type Program = z.infer<typeof programSchema>;
