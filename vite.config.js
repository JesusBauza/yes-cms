import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import svg from '@poppanator/sveltekit-svg';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
    plugins: [
        sveltekit(),
        WindiCSS({
            config: './windi.config.js',
        }),
        svg(),
        imagetools()
    ],
    server: {
        hmr: {
            clientPort: process.env.GITPOD_WORKSPACE_URL ? 443 : 3000,
            host: process.env.GITPOD_WORKSPACE_URL
                ? process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-')
                : 'localhost',
        },
    },
});
