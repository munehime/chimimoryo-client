import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
            },
            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
                "10xl": "104rem",
                "11xl": "112rem",
                "12xl": "120rem",
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
                "wiggle-slow": "wiggle 12s ease-in-out infinite",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-16deg)" },
                    "50%": { transform: "rotate(16deg)" },
                },
            },
        },
    },
    plugins: [],
};
