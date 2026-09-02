/**
 * Paylaşılan UI sözlüğü — komponentlerin dile göre okuduğu kısa metinler.
 * Sayfa içerikleri burada DEĞİL (onlar sayfa/veri dosyalarında); burada yalnızca
 * komponentlerin içine gömülü arayüz dizgeleri yaşar.
 */
import type { Locale } from './routes';
import { KATALOG_YIL } from '../data/site';

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

    /* Footer */
    colMakineler: 'MAKİNELER',
    colSektorler: 'SEKTÖRLER',
    colKurumsal: 'KURUMSAL',
    rights: 'Tüm hakları saklıdır.',
    footerLoc: 'Yunusemre / Manisa · Türkiye geneli satış, kurulum ve servis',
    waBtn: "WhatsApp'tan Yazın",
    imzaText: 'tarafından geliştirilmiştir',
    imzaAria: 'Forpus Yazılım tarafından geliştirildi',

    /* WhatsApp FAB */
    waFabAria: 'WhatsApp üzerinden bize yazın',

    /* CtaBand varsayılanları */
    ctaTitle: 'Ürününüz İçin Doğru Makineyi Birlikte Seçelim',
    ctaText:
      'Ürününüzü ve hattınızı anlatın; size uygun konfigürasyonu birlikte netleştirelim. Teklif için bir telefon uzaktayız.',
    ctaWa: "WhatsApp'tan Teklif Alın",
    ctaMailPrefix: 'veya e-posta:',
    ctaTopic: 'Makineleriniz',

    /* Katalog bandı */
    katEyebrow: 'Ürün Kataloğu',
    katBaslik: 'Üç Makine, Tek Dosya',
    katLead: `DMAX, IDS ve VALOR 5'in teknik verileri, ölçüleri ve kapasiteleri ${KATALOG_YIL} ürün kataloğumuzda. Hattınızı planlarken yanınızda olsun.`,
    katIndir: 'Kataloğu İndir',
    katAc: 'Tarayıcıda açın',
    katSayfa: 'sayfa',
    katKapakAlt: `SAGE Makine ${KATALOG_YIL} ürün kataloğunun kapağı`,
    katKompaktBaslik: `Bu model ${KATALOG_YIL} kataloğunda`,
    katKompaktText: 'Teknik çizimler, ölçüler ve kapasite tabloları PDF kataloğumuzda.',

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
    subSpecEyebrow: 'Teknik Özellikler',
    subSpecBaslik: 'Model Karşılaştırması',
    subCtaText:
      'Ürününüzü ve hattınızı konuşalım; kapasite, taşıma oranı ve yerleşimi birlikte netleştirelim.',

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
    sekCtaTitle: 'Ürününüzü Konuşalım',
    sekCtaText:
      'Ürününüzü, kusur profilinizi ve hedefinizi anlatın; hattınıza uygun kurulumu birlikte netleştirelim.',
    sekHeroCta: 'Önerilen Çözüm',
    sekSektorLink: 'Sektörler',

    /* Model sayfası */
    modelVideoBtn: 'Videoyu İzleyin',
    modelNedir: 'Ne Yapar?',
    modelPromoEyebrow: 'Tanıtım',
    modelDemoEyebrow: 'Canlı Ayıklama',
    modelVideoBaslik: "İş Başında",
    modelSpecEyebrow: 'Teknik Özellikler',
    modelSpecBaslik: 'Teknik Veriler',
    modelCtaTitle: 'Bu Model Sizin İçin mi?',
    modelCtaText: 'Ürününüzü ve kapasitenizi anlatın; bu modelin hattınıza uygunluğunu birlikte netleştirelim.',

    /* Diyagram etiketleri */
    dg: {
      besleme: 'Besleme Hunisi',
      besleyici: 'Titreşimli Besleyici',
      oluk: 'Oluk (Şüt)',
      kamera: 'Yüksek Çözünürlüklü RGB Kamera',
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
        'X-ışını, üründen geçerken yoğunluk farklarını görüntüler: taş, cam ve metal — ambalajın içinde dahi — milisaniyeler içinde tespit edilir ve reddetme sistemi kusurlu ürünü hat dışına alır.',
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

    colMakineler: 'MACHINES',
    colSektorler: 'INDUSTRIES',
    colKurumsal: 'COMPANY',
    rights: 'All rights reserved.',
    footerLoc: 'Yunusemre / Manisa · Sales, installation and service across Turkey',
    waBtn: 'Chat on WhatsApp',
    imzaText: 'Developed by',
    imzaAria: 'Developed by Forpus Yazılım',

    waFabAria: 'Chat with us on WhatsApp',

    ctaTitle: "Let's Choose the Right Machine for Your Product",
    ctaText:
      "Tell us about your product and your line; we'll pin down the right configuration together. A quotation is one call away.",
    ctaWa: 'Get a Quote on WhatsApp',
    ctaMailPrefix: 'or email:',
    ctaTopic: 'your machines',

    katEyebrow: 'Product Catalog',
    katBaslik: 'Three Machines, One File',
    katLead: `Technical data, dimensions and capacities for DMAX, IDS and VALOR 5 are in our ${KATALOG_YIL} product catalog. Keep it beside you while you plan your line.`,
    katIndir: 'Download the Catalog',
    katAc: 'Open in browser',
    katSayfa: 'pages',
    katKapakAlt: `Cover of the SAGE Makine ${KATALOG_YIL} product catalog`,
    katKompaktBaslik: `This model is in the ${KATALOG_YIL} catalog`,
    katKompaktText: 'Technical drawings, dimensions and capacity tables are in our PDF catalog.',

    blogCrumb: 'Blog',
    minRead: 'min read',
    dateLocale: 'en-US',

    subHangi: 'Which Products Is It For?',
    subSaha: 'Where This Type Excels',
    subAvantaj: 'Advantages',
    subNeden: 'Why This Type?',
    subIlgili: 'Related Industries',
    subSpecEyebrow: 'Technical Specs',
    subSpecBaslik: 'Model Comparison',
    subCtaText:
      "Let's talk through your product and your line; we'll pin down capacity, carryover, and layout together.",

    sekTaniyoruz: 'We Know Your Industry',
    sekKusurEyebrow: 'Defects to Remove',
    sekKusurH2: 'What We Take Out of Your Line',
    sekKurulumEyebrow: 'Recommended Setup',
    sekKurulumH2: 'How We Solve It on Your Line',
    sekBolge: "We're in Your Region",
    sekServisLink: 'Our service and spare-parts approach',
    sekDiger: 'Other Industries',
    sekDigerAria: 'Other industries',
    sekCtaTitle: "Let's Talk About Your Product",
    sekCtaText:
      "Tell us about your product, your defect profile, and your goal; we'll pin down the right setup for your line together.",
    sekHeroCta: 'Recommended Solution',
    sekSektorLink: 'Industries',

    /* Model sayfası */
    modelVideoBtn: 'Watch the Video',
    modelNedir: 'What It Does',
    modelPromoEyebrow: 'Overview',
    modelDemoEyebrow: 'Live Sorting',
    modelVideoBaslik: 'at Work',
    modelSpecEyebrow: 'Technical Specs',
    modelSpecBaslik: 'Technical Data',
    modelCtaTitle: 'Is This the Right Model for You?',
    modelCtaText: "Tell us about your product and capacity; let's pin down whether this model fits your line together.",

    dg: {
      besleme: 'Feed Hopper',
      besleyici: 'Vibratory Feeder',
      oluk: 'Chute',
      kamera: 'High-Resolution RGB Camera',
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
        'As X-rays pass through the product they image density differences: stone, glass and metal — even inside packaging — are detected in milliseconds and the reject system removes the defective product from the line.',
    },
  },
} as const;

export type UiDict = (typeof UI)['tr'];

export const t = (locale: Locale | undefined): UiDict =>
  UI[(locale === 'en' ? 'en' : 'tr') as 'tr'];
