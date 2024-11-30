import { z } from "zod";

export default function <T extends z.ZodTypeAny, K extends keyof z.infer<T>>(
    schema: T,
    key: K,
) {
    return z
        .array(schema)
        .refine(
            (items) =>
                items.length === new Set(items.map((item) => item[key])).size,
            { message: `error: duplicate ${String(key)} found` },
        );
}
