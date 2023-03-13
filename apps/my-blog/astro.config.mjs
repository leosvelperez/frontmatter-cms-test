import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  outDir: '../../dist/apps/my-blog',
  integrations: [sitemap()],
});
