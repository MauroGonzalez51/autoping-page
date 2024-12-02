<script setup lang="ts">
    import { z } from "zod";
    import { toTypedSchema } from "@vee-validate/zod";
    import { useForm } from "vee-validate";
    import { cn } from "@/lib/utils";

    definePageMeta({
        layout: false,
    });

    const LoginSchema = z.object({
        username: z
            .string()
            .min(1, { message: "El nombre de usuario es requerido" }),
        password: z.string().min(1, { message: "La contraseña es requerida" }),
    });

    const validationSchema = toTypedSchema(LoginSchema);

    const { errors, handleSubmit } = useForm({
        validationSchema,
        initialValues: Object.fromEntries(
            Object.keys(LoginSchema.shape).map((key) => [key, ""]),
        ),
    });

    const formFields: FormField<z.infer<typeof LoginSchema>>[] = [
        {
            name: "username",
            label: "Username",
            type: "text",
            autocomplete: "username",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            autocomplete: "current-password",
            description: "Lorem Ipsum dolor sit amet",
        },
    ];

    const onSubmit = handleSubmit((values) => {
        const { username, password } = values;

        console.log({ username, password });
    });
</script>

<template>
    <div class="h-screen w-screen flex items-center justify-center">
        <Card class="w-4/5 md:w-2/3 lg:w-1/2 max-w-3xl">
            <CardHeader>
                <CardTitle>Iniciar sesion</CardTitle>
            </CardHeader>
            <CardContent>
                <form class="space-y-6" @submit.prevent="onSubmit">
                    <FormField
                        v-for="field in formFields"
                        v-slot="{ componentField }"
                        :key="field.name"
                        :name="field.name"
                    >
                        <FormItem>
                            <FormLabel
                                :class="
                                    cn({
                                        'dark:text-foreground':
                                            errors[field.name],
                                    })
                                "
                            >
                                {{ field.label }}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    :type="field.type"
                                    v-bind="componentField"
                                    :autocomplete="field.autocomplete"
                                    :class="
                                        cn('dark:bg-gray-700', {
                                            'border-rose-500 dark:border-orange-400 border-2':
                                                errors[field.name],
                                        })
                                    "
                                />
                            </FormControl>
                            <template v-if="field.description">
                                <FormDescription>
                                    {{ field.description }}
                                </FormDescription>
                            </template>
                            <Motion
                                :initial="{ opacity: 0, x: 0 }"
                                :enter="{
                                    opacity: 1,
                                    x: [0, -10, 10, -10, 10, 0],
                                    transition: {
                                        duration: 500,
                                        type: 'keyframes',
                                    },
                                }"
                            >
                                <FormMessage class="dark:text-orange-400" />
                            </Motion>
                        </FormItem>
                    </FormField>

                    <div class="space-x-2">
                        <Button type="submit"> Submit </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
</template>
