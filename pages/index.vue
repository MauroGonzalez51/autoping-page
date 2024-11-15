<script setup lang="ts">
    import { capitalize } from "vue";

    interface ColorModeOption {
        label: string;
        action: () => unknown;
    }

    const colorMode = useColorMode();

    const colorModeOptions: ColorModeOption[] = [
        {
            label: "light",
            action: () => (colorMode.preference = "light"),
        },
        {
            label: "dark",
            action: () => (colorMode.preference = "dark"),
        },
    ];
</script>

<template>
    <div class="flex gap-2 p-2">
        <Button
            v-for="{ label, action } in colorModeOptions"
            :key="label"
            @click="action"
        >
            {{ capitalize(label) }}
        </Button>
    </div>
</template>
