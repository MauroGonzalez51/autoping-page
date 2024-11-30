<script setup lang="ts">
    import type { RoutesNamesList } from "@typed-router";

    interface NavbarLink {
        to: RoutesNamesList;
        label: string;
    }

    // TODO: Update this when needed.
    const navbarLinks: NavbarLink[] = [
        {
            to: "index",
            label: "Inicio",
        },
        {
            to: "index",
            label: "Servicios",
        },
        {
            to: "index",
            label: "¿Quienes Somos?",
        },
        {
            to: "index",
            label: "Contactanos",
        },
    ];

    const isMobile = useMediaQuery("(max-width: 768px)");
</script>

<template>
    <div class="w-full">
        <div class="container py-6 flex items-center">
            <div class="w-full flex justify-between items-center">
                <div>
                    <NuxtLink to="/">
                        <NuxtImg src="/logo.png" class="w-full size-20" />
                    </NuxtLink>
                </div>

                <template v-if="isMobile">
                    <Motion
                        :initial="{ opacity: 0, y: -20 }"
                        :enter="{ opacity: 1, y: 0 }"
                        class="inline-flex items-center"
                    >
                        <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                                <Button variant="ghost" class="py-6">
                                    <Icon
                                        name="material-symbols:menu-rounded"
                                        class="size-14"
                                    />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem
                                    v-for="{ label, to } in navbarLinks"
                                    :key="label"
                                >
                                    <NuxtLink
                                        class="w-full h-full px-2"
                                        :to="{ name: to }"
                                    >
                                        {{ label }}
                                    </NuxtLink>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Motion>
                </template>

                <template v-else>
                    <div class="flex gap-6">
                        <NuxtLink
                            v-for="{ label, to } in navbarLinks"
                            :key="label"
                            :to="{ name: to }"
                            class="text-xl font-bold text-[#012044] hover:underline"
                        >
                            {{ label }}
                        </NuxtLink>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
