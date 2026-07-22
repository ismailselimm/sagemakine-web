/**
 * EN makine modelleri — /en/machines/[model]/ sayfalarını besler.
 * TR karşılığı: src/data/models.ts (görsel/video ortak).
 */
import type { MakineModeli } from '../models';

export const MODELLER_EN: MakineModeli[] = [
  {
    slug: 'dmax',
    ad: 'DMAX 1200',
    eyebrow: 'RGB Color + Shape Sorting · Belt-Type',
    metaTitle: 'DMAX 1200 Color and Shape Sorter | SAGE Makine',
    metaDescription:
      'DMAX belt-type RGB color and shape sorter: 360° camera cabin, high-resolution scanning. For dried fruit, fresh and frozen produce, and potato products.',
    image: 'dmax',
    imageAlt: 'DMAX belt-type color and shape sorter',
    lead: 'DMAX 1200 is a belt-type sorter whose 360-degree camera cabin evaluates both color and shape together. Single-layer scanning on the belt gives high accuracy on fragile, delicate products.',
    aciklama: [
      'With a camera cabin that sees your product in full 360 degrees, DMAX 1200 evaluates every piece from every angle. It catches color and shape defects together — not just color, but form.',
      'It is an ideal solution for dried fruit; fresh and frozen fruits and vegetables; whole potatoes, french fries, tomatoes and similar products. Single-layer flow on the belt handles fragile items gently, without damage.',
    ],
    ozellikler: [
      { icon: 'kamera', baslik: '360° Camera Cabin', text: 'High-resolution cameras image the product from every angle; a defect facing up is not missed underneath.' },
      { icon: 'dogruluk', baslik: 'Color + Shape Sorting', text: 'Alongside RGB color analysis, geometry analysis recognizes stems, breakage and deformed pieces by their form.' },
      { icon: 'bant', baslik: 'Gentle Belt Handling', text: 'Single-layer flow scans fragile dried fruit and frozen product without crushing.' },
      { icon: 'kapasite', baslik: 'High-Speed Conveying', text: 'A high belt speed keeps sorting continuous without cutting tonnage.' },
    ],
    video: { src: '/videos/dmax-tanitim.mp4', poster: '/videos/dmax-poster.webp', tur: 'promo' },
    sektorler: [
      { label: 'Dried Fruit', href: '/en/industries/dried-fruit/' },
      { label: 'Frozen Food (IQF)', href: '/en/industries/frozen-food-iqf/' },
      { label: 'Potato Products', href: '/en/industries/potato-products/' },
    ],
    waTopic: 'DMAX color and shape sorter',
  },
  {
    slug: 'ids',
    ad: 'IDS',
    eyebrow: 'Precision Nut Sorter · Analysis + Reporting',
    metaTitle: 'IDS Precision Nut Sorting and Analysis Machine | SAGE Makine',
    metaDescription:
      'IDS: a high-efficiency precision sorter for shelled and in-shell nuts. 360° cameras, up to 10 sorting channels in a single pass, defect and foreign material detection, production reporting.',
    image: 'lineIds',
    imageAlt: 'IDS precision nut sorting and analysis line',
    lead: 'IDS is a high-efficiency precision sorter designed to process both shelled and in-shell nuts. It handles sizing, classification and defect detection in a single pass — and reports on your production.',
    aciklama: [
      'Equipped with 360-degree cameras, IDS offers up to 10 precision sorting channels in a single pass, covering sizing, classification, defect and foreign-material detection.',
      'It is designed to process both shelled and in-shell nuts. Beyond sorting, it also handles production tracking and reporting: good-kernel rate, defect breakdown and batch quality are shown live on screen.',
    ],
    ozellikler: [
      { icon: 'kamera', baslik: '360° Cameras', text: 'Every kernel is scanned from all surfaces; shell, kernel and surface defects are seen in one pass.' },
      { icon: 'yazilim', baslik: 'Up to 10 Channels', text: 'Sizing and classification across ten separate precision channels in a single pass.' },
      { icon: 'dogruluk', baslik: 'Defect + Foreign Material', text: 'Distinguishes mold, insect damage, shell fragments and foreign material.' },
      { icon: 'belge', baslik: 'Production Tracking & Reporting', text: 'Good-kernel rate and defect breakdown are reported; batch quality is recorded.' },
    ],
    video: { src: '/videos/ids-tanitim.mp4', poster: '/videos/ids-poster.webp', tur: 'promo' },
    sektorler: [
      { label: 'Nuts', href: '/en/industries/nuts/' },
      { label: 'Pistachio', href: '/en/industries/pistachio/' },
    ],
    waTopic: 'IDS precision nut sorter',
  },
  {
    slug: 'valor-5',
    ad: 'VALOR 5',
    eyebrow: 'X-Ray Sorter · Hazelnuts and Hard-Shell',
    metaTitle: 'VALOR 5 X-Ray Hazelnut Sorter | SAGE Makine',
    metaDescription:
      'VALOR 5 X-ray sorter: detects empty shells, insect damage and moldy kernels in in-shell and cracked hazelnuts with X-ray and AI. Also for pistachios, walnuts and almonds.',
    image: 'valor5',
    imageAlt: 'VALOR 5 X-ray hazelnut sorter',
    lead: 'The VALOR 5 X-ray sorter is widely used in hazelnut processing and separates both cracked and in-shell hazelnuts. Industry-leading X-ray sensitivity and AI learning accurately detect in-shell defects.',
    aciklama: [
      'The Valor Series X-ray sorter is widely used in hazelnut processing and can separate both cracked and in-shell hazelnuts. With advanced AI learning it accurately detects in-shell defects, significantly reducing unhealthy nuts.',
      'Beyond undeveloped kernels and empty in-shell nuts, it also effectively detects white-spotted, insect-damaged and moldy hazelnuts. With different capacity options it suits everything from small farms to large processing plants.',
      'Alongside hazelnuts, it can also be used for pistachios, walnuts, almonds and in-shell pistachios.',
    ],
    ozellikler: [
      { icon: 'xray', baslik: 'X-Ray Imaging', text: 'Sees inside without cracking the shell; separates empty and undeveloped kernels by density.' },
      { icon: 'yazilim', baslik: 'AI Learning', text: 'Industry-leading sensitivity; learns in-shell defect patterns to classify accurately.' },
      { icon: 'dogruluk', baslik: 'Wide Defect Range', text: 'Effectively detects white-spotted, insect-damaged, moldy and empty-shell kernels.' },
      { icon: 'kapasite', baslik: 'Scalable Capacity', text: 'Different capacity options from a small farm to a large plant.' },
    ],
    specs: [
      { label: 'X-Ray Output', value: '320 W' },
      { label: 'X-Ray Leakage', value: '< 0.2 µSv/h (without shielding)' },
      { label: 'Display', value: '17-inch' },
      { label: 'Air Guns', value: '96' },
      { label: 'Machine Dimensions', value: '2610 × 1100 × 2030 mm' },
      { label: 'Feeder Dimensions', value: '700 × 700 × 300 mm' },
      { label: 'Air Pressure', value: '0.6 MPa' },
      { label: 'Power Consumption', value: '5.5 kW' },
      { label: 'Power Supply', value: '220 V AC · 50 Hz' },
    ],
    specNot: 'Figures are the manufacturer data for VALOR 5; capacity is confirmed against your product and application.',
    video: { src: '/videos/valor5-demo.mp4', poster: '/videos/valor5-poster.webp', tur: 'demo', dikey: true },
    sektorler: [
      { label: 'Nuts', href: '/en/industries/nuts/' },
      { label: 'Pistachio', href: '/en/industries/pistachio/' },
    ],
    waTopic: 'VALOR 5 X-ray hazelnut sorter',
  },
];
