// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';


export default defineConfig({
  site: 'https://peppos.dev',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), sitemap()],
  adapter: cloudflare()
});