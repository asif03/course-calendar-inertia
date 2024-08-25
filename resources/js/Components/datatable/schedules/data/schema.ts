import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const scheduleSchema = z.object({
    id: z.bigint(),
    progName: z.string(),
    title: z.string(),
    dateFrom: z.date(),
    dateTo: z.date(),
    trainingNature: z.string(),
    participantLimit: z.number(),
    status: z.string(),
});

export type ProgramSchedule = z.infer<typeof scheduleSchema>;
