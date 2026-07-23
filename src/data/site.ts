/**
 * SAGE Makine — tek doğruluk kaynağı (site geneli sabitler).
 * İletişim bilgisi / nav değişikliği SADECE burada yapılır.
 */

export const SITE = {
  name: 'SAGE Makine',
  // Ünvan logodaki yazımla birebir (kullanıcı teyidi: 2026-07-20).
  /* Ticaret unvanı — 2026-07-23: "Sage Makine" alınamadığı için yeni tescil (Adem) */
  legalName: 'SAGE Endüstriyel Makine Servis Limited Şirketi',
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

/** Header mega-menü "Makineler" grupları — Footer makine listesi de buradan türer */
export const MAKINE_GRUPLARI = [
  {
    label: 'Modeller',
    items: [
      { label: 'DMAX 1200', href: '/makineler/dmax/', desc: 'RGB renk + şekil · bant tipi' },
      { label: 'IDS', href: '/makineler/ids/', desc: 'Hassas kuruyemiş ayırıcı' },
      { label: 'VALOR 5', href: '/makineler/valor-5/', desc: 'X-Ray fındık ayırıcı' },
    ],
  },
  {
    label: 'Teknoloji',
    items: [
      { label: 'Renk Ayırma Makineleri', href: '/renk-ayirma-makinesi/', desc: 'Kameralı optik ayıklama' },
      { label: 'X-Ray Gıda Kontrol', href: '/x-ray-gida-kontrol-makinesi/', desc: 'Taş, cam, metal tespiti' },
      { label: 'Dökme Ürün X-Ray', href: '/x-ray-gida-kontrol-makinesi/dokme-urun/', desc: 'Hat içi ayıklama' },
      { label: 'Paketli Ürün X-Ray', href: '/x-ray-gida-kontrol-makinesi/paketli-urun/', desc: 'Hat sonu paket kontrolü' },
    ],
  },
] as const;

/** Header düz linkleri (sırasıyla) */
export const DUZ_LINKLER = [
  { label: 'Servis & Yedek Parça', href: '/servis-yedek-parca/' },
  { label: 'Hakkımızda', href: '/hakkimizda/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'İletişim', href: '/iletisim/' },
] as const;

/** Footer "Kurumsal" kolonu */
export const KURUMSAL_LINKS = [
  { label: 'Hakkımızda', href: '/hakkimizda/' },
  { label: 'Servis & Yedek Parça', href: '/servis-yedek-parca/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'İletişim', href: '/iletisim/' },
  { label: 'KVKK Aydınlatma Metni', href: '/kvkk/' },
] as const;

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
