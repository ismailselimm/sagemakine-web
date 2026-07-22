/**
 * TR ↔ EN rota haritası — dil düğmesi, hreflang ve nav linkleri
 * TEK bu dosyadan beslenir. Yeni sayfa = buraya bir çift ekle.
 */

export type Locale = 'tr' | 'en';

/** Astro.currentLocale → Locale (komponentlerdeki tek dil tespiti bu) */
export const asLocale = (currentLocale: string | undefined): Locale =>
  currentLocale === 'en' ? 'en' : 'tr';

/** Sektör detay yolu — Header/Footer/şablonlar bu kalıbı tekrar kurmasın */
export const sectorPath = (locale: Locale, slug: string): string =>
  locale === 'en' ? `/en/industries/${slug}/` : `/sektorler/${slug}/`;

/** Sayfa çiftleri (blog yazıları hariç — onlar BLOG_SLUGS'tan türer) */
export const ROUTES: Record<string, { tr: string; en: string }> = {
  home: { tr: '/', en: '/en/' },
  dmax: { tr: '/makineler/dmax/', en: '/en/machines/dmax/' },
  ids: { tr: '/makineler/ids/', en: '/en/machines/ids/' },
  valor5: { tr: '/makineler/valor-5/', en: '/en/machines/valor-5/' },
  renk: { tr: '/renk-ayirma-makinesi/', en: '/en/color-sorter/' },
  xray: { tr: '/x-ray-gida-kontrol-makinesi/', en: '/en/x-ray-food-inspection/' },
  xrayDokme: { tr: '/x-ray-gida-kontrol-makinesi/dokme-urun/', en: '/en/x-ray-food-inspection/bulk-product/' },
  xrayPaketli: { tr: '/x-ray-gida-kontrol-makinesi/paketli-urun/', en: '/en/x-ray-food-inspection/packaged-product/' },
  sektorKuruMeyve: { tr: '/sektorler/kuru-meyve/', en: '/en/industries/dried-fruit/' },
  sektorKuruyemis: { tr: '/sektorler/kuruyemis/', en: '/en/industries/nuts/' },
  sektorFistik: { tr: '/sektorler/antep-fistigi/', en: '/en/industries/pistachio/' },
  sektorBakliyat: { tr: '/sektorler/bakliyat/', en: '/en/industries/pulses/' },
  sektorIqf: { tr: '/sektorler/dondurulmus-gida-iqf/', en: '/en/industries/frozen-food-iqf/' },
  sektorPatates: { tr: '/sektorler/patates-cips/', en: '/en/industries/potato-products/' },
  servis: { tr: '/servis-yedek-parca/', en: '/en/service-spare-parts/' },
  hakkimizda: { tr: '/hakkimizda/', en: '/en/about/' },
  blog: { tr: '/blog/', en: '/en/blog/' },
  iletisim: { tr: '/iletisim/', en: '/en/contact/' },
  kvkk: { tr: '/kvkk/', en: '/en/privacy/' },
};

/** Blog yazısı slug çiftleri: TR slug → EN slug */
export const BLOG_SLUGS: Record<string, string> = {
  'aflatoksin-nedir-nasil-onlenir': 'what-is-aflatoxin',
  'renk-ayirma-makinesi-fiyatlari': 'color-sorter-prices',
  'tasima-orani-carryover-nedir': 'what-is-carryover',
  'kuru-uzumde-cop-sap-sorunu': 'stems-in-sultana-raisins',
  'brc-ifs-denetimine-hazirlik': 'brc-ifs-audit-preparation',
  'x-ray-mi-metal-dedektor-mu': 'x-ray-vs-metal-detector',
  'sortex-makinasi-nedir': 'what-is-a-sortex-machine',
  'ikinci-el-renk-ayirma-makinesi': 'used-color-sorter-guide',
};

/* çift yönlü tam yol haritası (blog dahil) */
const TR_TO_EN = new Map<string, string>();
const EN_TO_TR = new Map<string, string>();
for (const { tr, en } of Object.values(ROUTES)) {
  TR_TO_EN.set(tr, en);
  EN_TO_TR.set(en, tr);
}
for (const [trSlug, enSlug] of Object.entries(BLOG_SLUGS)) {
  TR_TO_EN.set(`/blog/${trSlug}/`, `/en/blog/${enSlug}/`);
  EN_TO_TR.set(`/en/blog/${enSlug}/`, `/blog/${trSlug}/`);
}

const norm = (p: string) => (p.endsWith('/') ? p : `${p}/`);

const getLocale = (pathname: string): Locale =>
  norm(pathname).startsWith('/en/') ? 'en' : 'tr';

/** Mevcut sayfanın diğer dildeki karşılığı (yoksa o dilin ana sayfası) */
export function alternatePath(pathname: string): string {
  const p = norm(pathname);
  if (getLocale(p) === 'tr') return TR_TO_EN.get(p) ?? '/en/';
  return EN_TO_TR.get(p) ?? '/';
}

/** hreflang çifti: { tr, en } — karşılığı olmayan sayfada null */
export function hreflangPair(pathname: string): { tr: string; en: string } | null {
  const p = norm(pathname);
  if (getLocale(p) === 'tr') {
    const en = TR_TO_EN.get(p);
    return en ? { tr: p, en } : null;
  }
  const tr = EN_TO_TR.get(p);
  return tr ? { tr, en: p } : null;
}
