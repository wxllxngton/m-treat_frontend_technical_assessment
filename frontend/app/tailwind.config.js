import type { Config } from 'tailwindcss';
import flowbite from 'flowbite/plugin';

const config: Config = {
    darkMode: 'class', // Keep dark mode configuration
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
        './index.html',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)', // Keep your custom variables
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [flowbite], // Use the Flowbite plugin
};

export default config;
