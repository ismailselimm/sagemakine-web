/**
 * EN site verisi — nav grupları, sektör kartları (İngilizce slug'larla).
 * TR karşılığı: src/data/site.ts
 */
import { CONTACT, KATALOG } from '../site';
import type { NavGroup } from '../site';

export const SITE_EN = {
  description:
    'Color sorters and X-ray food inspection systems for dried fruit, nut and pulse processors. Sales, installation and technical service from Manisa, Turkey.',
} as const;

/** EN WhatsApp ön-mesajı — TR karşılığı: CONTACT.whatsappQuote */
export const whatsappQuoteEn = (topic: string) =>
  `${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hello, I'm writing via sagemakine.com. I'd like information and a quotation about ${topic}.`,
  )}`;

/** Dile göre doğru ön-mesaj — paylaşılan komponentler ternary kurmasın */
export const waQuote = (locale: 'tr' | 'en', topic: string) =>
  locale === 'en' ? whatsappQuoteEn(topic) : CONTACT.whatsappQuote(topic);

export const MAKINE_GRUPLARI_EN: readonly NavGroup[] = [
  {
    label: 'Models',
    items: [
      { label: 'DMAX 1200', href: '/en/machines/dmax/', desc: 'RGB color + shape · belt-type' },
      { label: 'IDS', href: '/en/machines/ids/', desc: 'Precision nut sorter' },
      { label: 'VALOR 5', href: '/en/machines/valor-5/', desc: 'X-ray hazelnut sorter' },
      {
        label: 'Product Catalog (PDF)',
        href: KATALOG.href,
        desc: `Technical pages for all three models · ${KATALOG.sayfa} pages`,
        download: KATALOG.indirAdi,
      },
    ],
  },
  {
    label: 'Technology',
    items: [
      { label: 'Color Sorters', href: '/en/color-sorter/', desc: 'Camera-based optical sorting' },
      { label: 'X-Ray Food Inspection', href: '/en/x-ray-food-inspection/', desc: 'Stone, glass, metal detection' },
      { label: 'Bulk Product X-Ray', href: '/en/x-ray-food-inspection/bulk-product/', desc: 'In-line sorting' },
      { label: 'Packaged Product X-Ray', href: '/en/x-ray-food-inspection/packaged-product/', desc: 'End-of-line inspection' },
    ],
  },
];

export const DUZ_LINKLER_EN = [
  { label: 'Service & Spare Parts', href: '/en/service-spare-parts/' },
  { label: 'About Us', href: '/en/about/' },
  { label: 'Blog', href: '/en/blog/' },
  { label: 'Contact', href: '/en/contact/' },
] as const;

export const KURUMSAL_LINKS_EN = [
  { label: 'About Us', href: '/en/about/' },
  { label: 'Service & Spare Parts', href: '/en/service-spare-parts/' },
  { label: 'Blog', href: '/en/blog/' },
  { label: 'Contact', href: '/en/contact/' },
  { label: 'Privacy Notice', href: '/en/privacy/' },
] as const;

/** Ana sayfa + nav sektör kartları (EN slug'lar /en/industries/<slug>/) */
export const SECTORS_EN = [
  {
    slug: 'dried-fruit',
    title: 'Dried Fruit',
    sub: 'Raisins · Figs · Apricots',
    hook: "In Manisa sultanas, don't let a single stem or stalk cost you your brand.",
    image: 'sector-kuru-uzum',
  },
  {
    slug: 'nuts',
    title: 'Nuts',
    sub: 'Hazelnut · Almond · Walnut',
    hook: 'Shell-fragment tolerance in hazelnut kernels is zero.',
    image: 'sector-kuruyemis-findik',
  },
  {
    slug: 'pistachio',
    title: 'Pistachio',
    sub: 'Empty/full sorting · Shell',
    hook: 'Aflatoxin and empty kernels — the machine sees both risks.',
    image: 'sector-antep-fistigi',
  },
  {
    slug: 'pulses',
    title: 'Pulses',
    sub: 'Lentils · Chickpeas · Beans',
    hook: "A sieve can't see a stone the size of a lentil; the camera can.",
    image: 'sector-bakliyat-mercimek',
  },
  {
    slug: 'frozen-food-iqf',
    title: 'Frozen Food (IQF)',
    sub: 'IQF fruit · Vegetables',
    hook: 'The last line of defense before packing.',
    image: 'sector-iqf',
  },
  {
    slug: 'potato-products',
    title: 'Potato Products',
    sub: 'French fries · Chips',
    hook: 'Burnt fries and field stones are removed before the fryer.',
    image: 'sector-patates',
  },
] as const;
