import cloudflare from '@sveltejs/adapter-cloudflare'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: cloudflare()
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
