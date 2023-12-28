import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig(() => {
    return {
        plugins: [sveltekit()],
        server: {
            port: 5137,
            strictPort: false,
        },
    };
});
