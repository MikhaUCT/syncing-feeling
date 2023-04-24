import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? "" : "/syncing-feeling",
			// This allows me to have a base route of /furniture-store
			relative: false,
		},
		prerender: {
			handleMissingId: "ignore",
		}
	}
};

export default config;
