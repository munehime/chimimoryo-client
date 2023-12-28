import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: "class",
    theme: {
        aspectRatio: {
            auto: "auto",
            square: "1 / 1",
            video: "16 / 9",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13",
            14: "14",
            15: "15",
            16: "16",
        },
        extend: {
            borderWidth: {
                1: "1px",
                3: "3px",
                5: "5px",
                6: "6px",
                7: "7px",
                9: "9px",
                10: "10px",
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
            },
            height: {
                4.5: "1.125rem",
            },
            width: {
                4.5: "1.125rem",
            },
            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
                "10xl": "104rem",
                "11xl": "112rem",
                "12xl": "120rem",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".writing-horizontal-tb": {
                    "-webkit-writing-mode": "horizontal-tb",
                    "-moz-writing-mode": "horizontal-tb",
                    writingMode: "horizontal-tb",
                },
                ".writing-vertical-rl": {
                    "-webkit-writing-mode": "vertical-rl",
                    "-moz-writing-mode": "vertical-rl",
                    writingMode: "vertical-rl",
                },
                ".writing-vertical-lr": {
                    "-webkit-writing-mode": "vertical-lr",
                    "-moz-writing-mode": "vertical-lr",
                    writingMode: "vertical-lr",
                },
            });
        }),
    ],
};
