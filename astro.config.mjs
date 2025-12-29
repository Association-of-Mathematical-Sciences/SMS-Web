// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from "remark-math";
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://stevens-ams.com',
	prefetch: {
		prefetchAll: true,
	},
	markdown: {
		syntaxHighlight: "prism",
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
    },
	vite: {
		plugins: [tailwindcss()],
		css: {
			transformer: 'lightningcss',
		},
	},

	integrations: [(await import('@playform/compress')).default()],
});
