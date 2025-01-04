import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import deno from '@deno/vite-plugin';
import path from 'node:path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins: [react(), deno()],
    resolve: {
        alias: {
            // Aliases for cleaner imports
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        postcss: {
            plugins: [
                // Add PostCSS plugins here
                tailwindcss(),
                autoprefixer(),
            ],
        },
    },
    server: {
        // Useful for local development
        port: 3000,
        open: false,
    },
});
