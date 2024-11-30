import type { z } from "zod";

export default function <U, T extends z.ZodTypeAny = z.ZodTypeAny>(
    schema: T,
    data: U[],
) {
    return schema.parse(data);
}
