import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	site: 'https://leafy-boba-e484ed.netlify.app',
	integrations: [react(), solidJs()],
});
