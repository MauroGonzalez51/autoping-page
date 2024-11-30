<script setup lang="ts">
    import { z } from "zod";

    const userSchema = z.object({
        id: z.number(),
        name: z.string(),
    });

    const users = createUniqueArray<z.infer<typeof userSchema>>(
        uniqueArraySchema(userSchema, "id"),
        [
            {
                id: 1,
                name: "name 1",
            },
            {
                id: 2,
                name: "name 2",
            },
        ],
    );
</script>

<template>
    <div>{{ users }}</div>
</template>
