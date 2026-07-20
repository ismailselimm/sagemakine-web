/**
 * SAGE Makine — tek doğruluk kaynağı (site geneli sabitler).
 * İletişim bilgisi / nav değişikliği SADECE burada yapılır.
 */

export const SITE = {
  name: 'SAGE Makine',
  // Ünvan logodaki yazımla birebir (kullanıcı teyidi: 2026-07-20).
  legalName: 'SAGE Makine Servis Temsilcilik ve Limited Şirketi',
  tagline: 'Smart · Automation · Global · Engineering',
  domain: 'https://sagemakine.com',
  description:
    'Kuru meyve, kuruyemiş ve bakliyat işleyicileri için renk ayırma (color sorter) ve X-Ray gıda kontrol makineleri. Manisa merkezli satış, kurulum ve teknik servis.',
} as const;

export const CONTACT = {
  phoneDisplay: '+90 532 343 61 95',
  phoneHref: 'tel:+905323436195',
  whatsapp: 'https://wa.me/905323436195',
  whatsappQuote: (konu: string) =>
    `https://wa.me/905323436195?text=${encodeURIComponent(
      `Merhaba, sagemakine.com üzerinden yazıyorum. ${konu} hakkında bilgi ve teklif almak istiyorum.`,
    )}`,
  emailInfo: 'info@sagemakine.com',
  emailAdem: 'adem@sagemakine.com',
  address: {
    street: 'Güzelyurt Mahallesi, 5748 Sokak No:32, İç Kapı No:6',
    district: 'Yunusemre',
    city: 'Manisa',
    full: 'Güzelyurt Mah. 5748 Sk. No:32 İç Kapı No:6, Yunusemre / Manisa',
  },
  mapsEmbed:
    'https://www.google.com/maps?q=G%C3%BCzelyurt+Mahallesi+5748+Sokak+No:32+Yunusemre+Manisa&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=G%C3%BCzelyurt+Mahallesi+5748+Sokak+No:32+Yunusemre+Manisa',
  hours: 'Pzt–Cmt 08:30 – 18:30',
} as const;

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

export const NAV: NavLink[] = [
  {
    label: 'Makineler',
    href: '/renk-ayirma-makinesi/',
    children: [
      {
        label: 'Renk Ayırma Makineleri',
        href: '/renk-ayirma-makinesi/',
        desc: 'Color sorter — kamera tabanlı optik ayıklama',
      },
      {
        label: 'Oluk Tipi Renk Ayırma',
        href: '/renk-ayirma-makinesi/oluk-tipi/',
        desc: 'Bakliyat, hububat ve çekirdek için',
      },
      {
        label: 'Bant Tipi Renk Ayırma',
        href: '/renk-ayirma-makinesi/bant-tipi/',
        desc: 'Kuru meyve, IQF ve patates için',
      },
      {
        label: 'X-Ray Gıda Kontrol Sistemleri',
        href: '/x-ray-gida-kontrol-makinesi/',
        desc: 'Taş, cam, metal — ürünün içinde dahi',
      },
      {
        label: 'Dökme Ürün X-Ray',
        href: '/x-ray-gida-kontrol-makinesi/dokme-urun/',
        desc: 'Hat içi yabancı madde ayıklama',
      },
      {
        label: 'Paketli Ürün X-Ray',
        href: '/x-ray-gida-kontrol-makinesi/paketli-urun/',
        desc: 'Hat sonu son kontrol noktası',
      },
    ],
  },
  {
    label: 'Sektörler',
    href: '/sektorler/kuru-meyve/',
    children: [
      { label: 'Kuru Meyve', href: '/sektorler/kuru-meyve/', desc: 'Üzüm, incir, kayısı' },
      { label: 'Kuruyemiş', href: '/sektorler/kuruyemis/', desc: 'Fındık, badem, ceviz' },
      { label: 'Antep Fıstığı', href: '/sektorler/antep-fistigi/', desc: 'Boş-dolu, kabuk, aflatoksin' },
      { label: 'Bakliyat', href: '/sektorler/bakliyat/', desc: 'Mercimek, nohut, fasulye' },
      { label: 'Dondurulmuş Gıda (IQF)', href: '/sektorler/dondurulmus-gida-iqf/', desc: 'Şoklanmış meyve-sebze' },
      { label: 'Patates ve Cips', href: '/sektorler/patates-cips/', desc: 'Parmak patates, cips hatları' },
    ],
  },
  { label: 'Servis & Yedek Parça', href: '/servis-yedek-parca/' },
  { label: 'Hakkımızda', href: '/hakkimizda/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'İletişim', href: '/iletisim/' },
];

/** Ana sayfa + footer'da kullanılan sektör kartları */
export const SECTORS = [
  {
    slug: 'kuru-meyve',
    title: 'Kuru Meyve',
    sub: 'Üzüm · İncir · Kayısı',
    hook: 'Manisa üzümünde tek bir çöp-sap markanıza mal olmasın.',
    image: 'sector-kuru-uzum',
  },
  {
    slug: 'kuruyemis',
    title: 'Kuruyemiş',
    sub: 'Fındık · Badem · Ceviz',
    hook: 'İç fındıkta kabuk parçası toleransı sıfırdır.',
    image: 'sector-kuruyemis-findik',
  },
  {
    slug: 'antep-fistigi',
    title: 'Antep Fıstığı',
    sub: 'Boş-dolu ayrımı · Kabuk',
    hook: 'Aflatoksin ve boş tane — iki büyük riski de makine görür.',
    image: 'sector-antep-fistigi',
  },
  {
    slug: 'bakliyat',
    title: 'Bakliyat',
    sub: 'Mercimek · Nohut · Fasulye',
    hook: 'Mercimekle aynı boydaki taşı elek göremez; kamera görür.',
    image: 'sector-bakliyat-mercimek',
  },
  {
    slug: 'dondurulmus-gida-iqf',
    title: 'Dondurulmuş Gıda (IQF)',
    sub: 'Şoklanmış meyve · Sebze',
    hook: 'Paketlemeden önceki son savunma hattı.',
    image: 'sector-iqf',
  },
  {
    slug: 'patates-cips',
    title: 'Patates ve Cips',
    sub: 'Parmak patates · Cips',
    hook: 'Yanık parmak ve tarla taşı, kızartma hattına girmeden ayrılır.',
    image: 'sector-patates',
  },
] as const;
