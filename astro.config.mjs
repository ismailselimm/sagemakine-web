// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sagemakine.com',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  build: {
    // Paylaşılan CSS tek cache'lenebilir dosya; küçük sayfa CSS'i inline kalır
    inlineStylesheets: 'auto',
  },
});
