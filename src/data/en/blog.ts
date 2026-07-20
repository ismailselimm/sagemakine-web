/**
 * EN blog meta verisi — /en/blog/* sayfaları buradan beslenir.
 * TR karşılığı: src/data/blog.ts (kapak görselleri ortak).
 */
import type { BlogYazi } from '../blog';
import coverAflatoksin from '../../assets/blog/cover-aflatoksin.png';
import coverFiyatlar from '../../assets/blog/cover-fiyatlar.png';
import coverTasima from '../../assets/blog/cover-tasima-orani.png';
import coverCopSap from '../../assets/blog/cover-cop-sap.png';
import coverBrcIfs from '../../assets/blog/cover-brc-ifs.png';
import coverXrayMetal from '../../assets/blog/cover-xray-metal.png';
import coverSortex from '../../assets/blog/cover-sortex.png';
import coverIkinciEl from '../../assets/blog/cover-ikinci-el.png';

export const YAZILAR_EN: BlogYazi[] = [
  {
    slug: "what-is-aflatoxin",
    kategori: "Food Safety",
    baslik: "What Is Aflatoxin? Reducing the Risk in Dried Fruit and Pistachios",
    ozet: "Aflatoxin is a leading cause of export rejections: where the risk comes from, the role of sorting, and a practical control checklist.",
    dk: 7,
    cover: coverAflatoksin,
    coverAlt: "Dried figs being inspected under UV light",
  },
  {
    slug: "color-sorter-prices",
    kategori: "Buying Guide",
    baslik: "Color Sorter Prices in 2026: What Drives the Cost?",
    ozet: "The 6 factors that determine the price, total cost of ownership, and a guide to requesting a quotation the right way.",
    dk: 6,
    cover: coverFiyatlar,
    coverAlt: "Machine quotation file and calculator on a steel table",
  },
  {
    slug: "what-is-carryover",
    kategori: "Technology",
    baslik: "What Is Carryover? Calculating Your Hidden Product Loss",
    ozet: "Good product lost to the reject stream quietly eats into your profit: how to measure carryover and how to reduce it.",
    dk: 6,
    cover: coverTasima,
    coverAlt: "Trays of good product and rejects on a scale",
  },
  {
    slug: "stems-in-sultana-raisins",
    kategori: "Industry Guide",
    baslik: "Stems and Stalks in Sultana Raisins — and the Modern Sorting Solution",
    ozet: "The most stubborn defect in Manisa raisins: why screening isn't enough, and how belt-type color sorting solves it.",
    dk: 5,
    cover: coverCopSap,
    coverAlt: "Sultana raisins mixed with stem fragments on a conveyor belt",
  },
  {
    slug: "brc-ifs-audit-preparation",
    kategori: "Export & Audits",
    baslik: "Preparing for BRC and IFS Audits: A Foreign Material Control Plan",
    ozet: "What auditors look for under the foreign-material heading, and how to keep your sorting line audit-ready.",
    dk: 5,
    cover: coverBrcIfs,
    coverAlt: "Audit checklist in a food facility",
  },
  {
    slug: "x-ray-vs-metal-detector",
    kategori: "Technology",
    baslik: "X-Ray or Metal Detector? Foreign Material Detection in Food",
    ozet: "An honest comparison of the two technologies: what each one can see, and when each one is enough.",
    dk: 6,
    cover: coverXrayMetal,
    coverAlt: "A metal detector and an X-ray inspection tunnel side by side",
  },
  {
    slug: "what-is-a-sortex-machine",
    kategori: "Terminology",
    baslik: "What Is a Sortex Machine? Is It Different from a Color Sorter?",
    ozet: "The truth behind a brand name turned generic: what a color sorter is, and what to look at before the brand.",
    dk: 4,
    cover: coverSortex,
    coverAlt: "Aluminum chutes of an optical sorting machine",
  },
  {
    slug: "used-color-sorter-guide",
    kategori: "Buying Guide",
    baslik: "What to Know Before Buying a Used Color Sorter",
    ozet: "The hidden risks behind a low upfront investment: ejector life, camera aging, spare parts, and the reality of service.",
    dk: 6,
    cover: coverIkinciEl,
    coverAlt: "Worn control panel of an old machine",
  },
];

export const ONE_CIKAN_YAZILAR_EN = YAZILAR_EN.slice(0, 3);
