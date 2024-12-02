export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: [
        "@nuxt/eslint",
        ["@nuxtjs/color-mode", { classSuffix: "" }],
        ["@nuxtjs/tailwindcss", { editorSupport: true }],
        "@vueuse/motion/nuxt",
        ["@nuxtjs/supabase", { redirect: false }],
        [
            "shadcn-nuxt",
            {
                prefix: "",
                componentDir: "./components/ui",
            },
        ],
        "@nuxt/image",
        "@vueuse/nuxt",
        "@nuxt/icon",
        "nuxt-typed-router",
        [
            "@vee-validate/nuxt",
            {
                autoImports: false,
            },
        ],
    ],
});
