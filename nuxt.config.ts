export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: [
        "@nuxt/eslint",
        ["@nuxtjs/color-mode", { classSuffix: "" }],
        "@nuxtjs/tailwindcss",
        "@vueuse/motion/nuxt",
    ],
});