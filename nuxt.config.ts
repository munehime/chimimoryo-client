export default defineNuxtConfig({
    app: {
        head: {
            title: "Chimimoryo",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { key: "og:title", name: "og:title", content: "Chimimoryo" },
                { key: "og:type", name: "og:type", content: "website" },
                { key: "og:site_name", name: "og:site_name", content: "Chimimoryo" },
                { key: "theme-color", name: "theme-color", content: "#ffffff" },
            ],
        },
    },
    css: ["@/assets/styles/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            "postcss-nested": {},
        },
    },
    typescript: {
        shim: false,
    },
});
