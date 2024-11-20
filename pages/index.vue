<script setup lang="ts">
    import { capitalize } from "vue";

    interface ColorModeOption {
        label: string;
        action: () => unknown;
    }

    useHead({
        title: "Home",
    });

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
    <div>
        <div class="w-full relative">
            <NuxtImg
                src="/banner.jpg"
                class="w-full max-h-[550px] object-cover bg-no-repeat bg-center"
            />

            <div
                class="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-slate-50 gap-2"
            >
                <div class="font-bold text-2xl">Autoping Serviteca</div>
                <div
                    class="font-extrabold text-6xl text-center break-words"
                >
                    Servicio Automotriz
                </div>
                <div>
                    <Button>Reserva tu cita</Button>
                </div>
            </div>
        </div>

        <div class="flex gap-2 p-2">
            <Button
                v-for="{ label, action } in colorModeOptions"
                :key="label"
                @click="action"
            >
                {{ capitalize(label) }}
            </Button>
        </div>
    </div>
</template>
