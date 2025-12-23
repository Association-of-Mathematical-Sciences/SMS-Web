// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://Stevens-Mathematical-Club.github.io/SMS-Web',
	prefetch: {
		prefetchAll: true,
	},
	vite: {
		plugins: [tailwindcss()],
		css: {
			transformer: 'lightningcss',
		},
	},

	integrations: [(await import('@playform/compress')).default()],
});
