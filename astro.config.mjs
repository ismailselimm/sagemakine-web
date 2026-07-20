// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sagemakine.com',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  build: {
    // Tüm CSS HTML'e gömülür: render-blocking istek kalmaz (statik site için en hızlısı)
    inlineStylesheets: 'always',
  },
});
