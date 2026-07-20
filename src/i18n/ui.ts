/**
 * Paylaşılan UI sözlüğü — komponentlerin dile göre okuduğu kısa metinler.
 * Sayfa içerikleri burada DEĞİL (onlar sayfa/veri dosyalarında); burada yalnızca
 * komponentlerin içine gömülü arayüz dizgeleri yaşar.
 */
import type { Locale } from './routes';

const UI = {
  tr: {
    skipLink: 'İçeriğe atla',
    breadcrumbHome: 'Ana Sayfa',
    breadcrumbAria: 'Sayfa yolu',

    /* Header */
    navAria: 'Ana menü',
    brandAria: 'SAGE Makine — Ana sayfa',
    navMakineler: 'Makineler',
    navSektorler: 'Sektörler',
    quoteBtn: 'Teklif Alın',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    langAria: 'Dil seçimi',
    mobilePhoneBtn: '+90 532 343 61 95',
    mobileWaBtn: "WhatsApp'tan Yazın",

    /* Footer */
    colMakineler: 'MAKİNELER',
    colSektorler: 'SEKTÖRLER',
    colKurumsal: 'KURUMSAL',
    rights: 'Tüm hakları saklıdır.',
    footerLoc: 'Yunusemre / Manisa · Türkiye geneli satış, kurulum ve servis',
    footerWa: "WhatsApp'tan Yazın",
    imzaText: 'tarafından geliştirilmiştir',
    imzaAria: 'Forpus Yazılım tarafından geliştirildi',

    /* WhatsApp FAB */
    waFabAria: 'WhatsApp üzerinden bize yazın',
    waFabLabel: 'WhatsApp',

    /* CtaBand varsayılanları */
    ctaTitle: 'Ürününüz İçin Doğru Makineyi Birlikte Seçelim',
    ctaText:
      'Numune ürününüzü test edelim, hattınıza uygun kapasiteyi birlikte belirleyelim. Teklif için bir telefon uzaktayız.',
    ctaWa: "WhatsApp'tan Teklif Alın",
    ctaMailPrefix: 'veya e-posta:',
    ctaTopic: 'Makineleriniz',

    /* Blog */
    blogCrumb: 'Blog',
    minRead: 'dk okuma',
    dateLocale: 'tr-TR',

    /* SubUrunPage */
    subHangi: 'Hangi Ürünler İçin?',
    subSaha: 'Bu Tipin Sahası',
    subAvantaj: 'Avantajlar',
    subNeden: 'Neden Bu Tip?',
    subIlgili: 'İlgili Sektörler',
    subCtaText:
      'Numune ürününüzü test edelim; kapasite, taşıma oranı ve yerleşimi birlikte netleştirelim.',

    /* Sektör sayfası şablonu */
    sekTaniyoruz: 'Sektörünüzü Tanıyoruz',
    sekKusurEyebrow: 'Ayıklanması Gereken Kusurlar',
    sekKusurH2: 'Hattınızdan Neleri Çıkarıyoruz?',
    sekKurulumEyebrow: 'Önerilen Kurulum',
    sekKurulumH2: 'Hattınızda Nasıl Çözüyoruz?',
    sekBolge: 'Bölgenizdeyiz',
    sekServisLink: 'Servis ve yedek parça yaklaşımımız',
    sekDiger: 'Diğer Sektörler',
    sekDigerAria: 'Diğer sektörler',
    sekCtaTitle: 'Ürününüzle Test Edelim',
    sekCtaText:
      'Numune ürününüzü gönderin; ayıklama sonucunu birlikte değerlendirelim, hattınıza uygun kapasiteyi netleştirelim.',
    sekHeroCta: 'Önerilen Çözüm',
    sekSektorLink: 'Sektörler',

    /* Diyagram etiketleri */
    dg: {
      besleme: 'Besleme Hunisi',
      besleyici: 'Titreşimli Besleyici',
      oluk: 'Oluk (Şüt)',
      kamera: 'CCD + NIR Kamera',
      led: 'LED Aydınlatma',
      ejektor: 'Hava Ejektörü',
      saglamUrun: 'Sağlam Ürün',
      iskarta: 'Iskarta',
      csAria:
        'Renk ayırma makinesi çalışma prensibi şeması: besleme hunisinden gelen ürün oluktan akarken kameralarla taranır, kusurlu taneler hava ejektörüyle ıskarta haznesine ayrılır',
      csCaption:
        'Ürün, oluktan ince bir perde halinde akarken her tane milisaniyeler içinde taranır; kusurlu tane serbest düşüş sırasında hassas bir hava darbesiyle ıskarta haznesine yönlendirilir.',
      jenerator: 'X-Işını Jeneratörü',
      konveyor: 'Konveyör Bant',
      dedektor: 'Dedektör Hattı',
      goruntu: 'Görüntü İşleme',
      reddetme: 'Reddetme Sistemi',
      reddetmeAlt: 'itici kol / hava jeti',
      saglam: 'Sağlam',
      xrAria:
        'X-Ray gıda kontrol sistemi şeması: konveyörden geçen ürün X-ışını jeneratörü ile taranır, dedektör görüntüsü işlenir ve yabancı madde içeren ürün reddetme sistemiyle ıskartaya ayrılır',
      xrCaption:
        'X-ışını, üründen geçerken yoğunluk farklarını görüntüler: taş, cam, metal ve kemik — ambalajın içinde dahi — milisaniyeler içinde tespit edilir ve reddetme sistemi kusurlu ürünü hat dışına alır.',
    },
  },

  en: {
    skipLink: 'Skip to content',
    breadcrumbHome: 'Home',
    breadcrumbAria: 'Breadcrumb',

    navAria: 'Main menu',
    brandAria: 'SAGE Makine — Home',
    navMakineler: 'Machines',
    navSektorler: 'Industries',
    quoteBtn: 'Get a Quote',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    langAria: 'Language selection',
    mobilePhoneBtn: '+90 532 343 61 95',
    mobileWaBtn: 'Chat on WhatsApp',

    colMakineler: 'MACHINES',
    colSektorler: 'INDUSTRIES',
    colKurumsal: 'COMPANY',
    rights: 'All rights reserved.',
    footerLoc: 'Yunusemre / Manisa · Sales, installation and service across Turkey',
    footerWa: 'Chat on WhatsApp',
    imzaText: 'Developed by',
    imzaAria: 'Developed by Forpus Yazılım',

    waFabAria: 'Chat with us on WhatsApp',
    waFabLabel: 'WhatsApp',

    ctaTitle: "Let's Choose the Right Machine for Your Product",
    ctaText:
      "Send us a sample, we'll run it on a real machine and determine the right capacity for your line together. A quotation is one call away.",
    ctaWa: 'Get a Quote on WhatsApp',
    ctaMailPrefix: 'or email:',
    ctaTopic: 'your machines',

    blogCrumb: 'Blog',
    minRead: 'min read',
    dateLocale: 'en-US',

    subHangi: 'Which Products Is It For?',
    subSaha: 'Where This Type Excels',
    subAvantaj: 'Advantages',
    subNeden: 'Why This Type?',
    subIlgili: 'Related Industries',
    subCtaText:
      "Let's test your sample; we'll pin down capacity, carryover, and layout together.",

    sekTaniyoruz: 'We Know Your Industry',
    sekKusurEyebrow: 'Defects to Remove',
    sekKusurH2: 'What We Take Out of Your Line',
    sekKurulumEyebrow: 'Recommended Setup',
    sekKurulumH2: 'How We Solve It on Your Line',
    sekBolge: "We're in Your Region",
    sekServisLink: 'Our service and spare-parts approach',
    sekDiger: 'Other Industries',
    sekDigerAria: 'Other industries',
    sekCtaTitle: "Let's Test It with Your Product",
    sekCtaText:
      "Send us a sample; we'll review the sorting result together and pin down the right capacity for your line.",
    sekHeroCta: 'Recommended Solution',
    sekSektorLink: 'Industries',

    dg: {
      besleme: 'Feed Hopper',
      besleyici: 'Vibratory Feeder',
      oluk: 'Chute',
      kamera: 'CCD + NIR Camera',
      led: 'LED Lighting',
      ejektor: 'Air Ejector',
      saglamUrun: 'Accepted Product',
      iskarta: 'Reject',
      csAria:
        'Color sorter working principle: product flows from the feed hopper down the chute, cameras scan each kernel and air ejectors divert defective ones into the reject bin',
      csCaption:
        'As product flows down the chute in a thin curtain, every kernel is scanned in milliseconds; defective kernels are diverted into the reject bin by a precise burst of air during free fall.',
      jenerator: 'X-Ray Generator',
      konveyor: 'Conveyor Belt',
      dedektor: 'Detector Array',
      goruntu: 'Image Processing',
      reddetme: 'Reject System',
      reddetmeAlt: 'pusher arm / air jet',
      saglam: 'Accept',
      xrAria:
        'X-ray food inspection diagram: product passes under the X-ray generator on a conveyor, the detector image is processed and any product containing foreign material is diverted by the reject system',
      xrCaption:
        'As X-rays pass through the product they image density differences: stone, glass, metal and bone — even inside packaging — are detected in milliseconds and the reject system removes the defective product from the line.',
    },
  },
} as const;

export type UiDict = (typeof UI)['tr'];

export const t = (locale: Locale | undefined): UiDict =>
  UI[(locale === 'en' ? 'en' : 'tr') as 'tr'];
