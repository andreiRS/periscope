import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://periscope.surdu.de',
  vite: {
    plugins: [tailwindcss()],
  },
});
