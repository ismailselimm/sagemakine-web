/**
 * EN blog meta verisi — /en/blog/* sayfaları buradan beslenir.
 * Kapak görseli ve okuma süresi TR kaydından (src/data/blog.ts) türer;
 * burada yalnızca çevrilen alanlar yaşar. Slug eşlemesi: BLOG_SLUGS.
 */
import type { BlogYazi } from '../blog';
import { YAZILAR } from '../blog';
import { BLOG_SLUGS } from '../../i18n/routes';

/** EN slug → çevrilen alanlar */
const CEVIRILER: Record<string, Pick<BlogYazi, 'kategori' | 'baslik' | 'ozet' | 'coverAlt'>> = {
  'what-is-aflatoxin': {
    kategori: 'Food Safety',
    baslik: 'What Is Aflatoxin? Reducing the Risk in Dried Fruit and Pistachios',
    ozet: 'Aflatoxin is a leading cause of export rejections: where the risk comes from, the role of sorting, and a practical control checklist.',
    coverAlt: 'Dried figs being inspected under UV light',
  },
  'color-sorter-prices': {
    kategori: 'Buying Guide',
    baslik: 'Color Sorter Prices in 2026: What Drives the Cost?',
    ozet: 'The 6 factors that determine the price, total cost of ownership, and a guide to requesting a quotation the right way.',
    coverAlt: 'Machine quotation file and calculator on a steel table',
  },
  'what-is-carryover': {
    kategori: 'Technology',
    baslik: 'What Is Carryover? Calculating Your Hidden Product Loss',
    ozet: 'Good product lost to the reject stream quietly eats into your profit: how to measure carryover and how to reduce it.',
    coverAlt: 'Trays of good product and rejects on a scale',
  },
  'stems-in-sultana-raisins': {
    kategori: 'Industry Guide',
    baslik: 'Stems and Stalks in Sultana Raisins — and the Modern Sorting Solution',
    ozet: "The most stubborn defect in Manisa raisins: why screening isn't enough, and how belt-type color sorting solves it.",
    coverAlt: 'Sultana raisins mixed with stem fragments on a conveyor belt',
  },
  'brc-ifs-audit-preparation': {
    kategori: 'Export & Audits',
    baslik: 'Preparing for BRC and IFS Audits: A Foreign Material Control Plan',
    ozet: 'What auditors look for under the foreign-material heading, and how to keep your sorting line audit-ready.',
    coverAlt: 'Audit checklist in a food facility',
  },
  'x-ray-vs-metal-detector': {
    kategori: 'Technology',
    baslik: 'X-Ray or Metal Detector? Foreign Material Detection in Food',
    ozet: 'An honest comparison of the two technologies: what each one can see, and when each one is enough.',
    coverAlt: 'A metal detector and an X-ray inspection tunnel side by side',
  },
  'what-is-a-sortex-machine': {
    kategori: 'Terminology',
    baslik: 'What Is a Sortex Machine? Is It Different from a Color Sorter?',
    ozet: 'The truth behind a brand name turned generic: what a color sorter is, and what to look at before the brand.',
    coverAlt: 'Aluminum chutes of an optical sorting machine',
  },
  'used-color-sorter-guide': {
    kategori: 'Buying Guide',
    baslik: 'What to Know Before Buying a Used Color Sorter',
    ozet: 'The hidden risks behind a low upfront investment: ejector life, camera aging, spare parts, and the reality of service.',
    coverAlt: 'Worn control panel of an old machine',
  },
};

export const YAZILAR_EN: BlogYazi[] = YAZILAR.map((y) => {
  const slug = BLOG_SLUGS[y.slug];
  const ceviri = CEVIRILER[slug];
  if (!ceviri) throw new Error(`EN blog çevirisi eksik: ${y.slug} → ${slug}`);
  return { ...ceviri, slug, dk: y.dk, cover: y.cover };
});

export const ONE_CIKAN_YAZILAR_EN = YAZILAR_EN.slice(0, 3);
