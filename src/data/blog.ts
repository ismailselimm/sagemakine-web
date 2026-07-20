/**
 * Blog yazıları — TEK kaynak: liste sayfası, ana sayfa vitrini, BlogLayout
 * (kategori/başlık/süre/kapak) buradan beslenir. Yazı gövdesi + SEO
 * title/description src/pages/blog/<slug>.astro içindedir.
 */
import type { ImageMetadata } from 'astro';

import coverAflatoksin from '../assets/blog/cover-aflatoksin.png';
import coverFiyatlar from '../assets/blog/cover-fiyatlar.png';
import coverTasima from '../assets/blog/cover-tasima-orani.png';
import coverCopSap from '../assets/blog/cover-cop-sap.png';
import coverBrcIfs from '../assets/blog/cover-brc-ifs.png';
import coverXrayMetal from '../assets/blog/cover-xray-metal.png';
import coverSortex from '../assets/blog/cover-sortex.png';
import coverIkinciEl from '../assets/blog/cover-ikinci-el.png';

export interface BlogYazi {
  slug: string;
  kategori: string;
  baslik: string;
  ozet: string;
  dk: number;
  cover: ImageMetadata;
  coverAlt: string;
}

export const YAZILAR: BlogYazi[] = [
  {
    slug: 'aflatoksin-nedir-nasil-onlenir',
    kategori: 'Gıda Güvenliği',
    baslik: 'Aflatoksin Nedir? Kuru Meyve ve Fıstıkta Risk Nasıl Azaltılır',
    ozet: 'İhracat retlerinin başlıca nedenlerinden aflatoksin: riskin kaynağı, ayıklamanın rolü ve pratik kontrol listesi.',
    dk: 7,
    cover: coverAflatoksin,
    coverAlt: 'UV ışık altında incelenen kuru incirler',
  },
  {
    slug: 'renk-ayirma-makinesi-fiyatlari',
    kategori: 'Satın Alma Rehberi',
    baslik: 'Renk Ayırma Makinesi Fiyatları 2026: Neye Göre Değişir?',
    ozet: 'Fiyatı belirleyen 6 faktör, toplam sahip olma maliyeti ve doğru teklif isteme rehberi.',
    dk: 6,
    cover: coverFiyatlar,
    coverAlt: 'Çelik masa üzerinde makine teklif dosyası ve hesap makinesi',
  },
  {
    slug: 'tasima-orani-carryover-nedir',
    kategori: 'Teknoloji',
    baslik: 'Taşıma Oranı (Carryover) Nedir? Gizli Fireyi Hesaplayın',
    ozet: 'Iskartaya kaçan sağlam ürün kârınızı sessizce yer: taşıma oranını ölçmenin ve azaltmanın yolları.',
    dk: 6,
    cover: coverTasima,
    coverAlt: 'Terazide sağlam ürün ve ıskarta tepsileri',
  },
  {
    slug: 'kuru-uzumde-cop-sap-sorunu',
    kategori: 'Sektör Rehberi',
    baslik: 'Kuru Üzümde Çöp-Sap Sorunu ve Modern Ayıklama Çözümü',
    ozet: 'Manisa üzümünün en inatçı kusuru: elek neden yetmez, bant tipi renk ayırma nasıl çözer?',
    dk: 5,
    cover: coverCopSap,
    coverAlt: 'Konveyör bandında sap parçalarıyla karışık kuru üzüm',
  },
  {
    slug: 'brc-ifs-denetimine-hazirlik',
    kategori: 'İhracat & Denetim',
    baslik: 'BRC ve IFS Denetimine Hazırlık: Yabancı Madde Kontrol Planı',
    ozet: 'Denetçinin yabancı madde başlığında baktıkları ve ayıklama hattınızı denetime hazır tutmanın yolu.',
    dk: 5,
    cover: coverBrcIfs,
    coverAlt: 'Gıda tesisinde denetim kontrol listesi',
  },
  {
    slug: 'x-ray-mi-metal-dedektor-mu',
    kategori: 'Teknoloji',
    baslik: 'X-Ray mı Metal Dedektör mü? Gıdada Yabancı Madde Tespiti',
    ozet: 'İki teknolojinin dürüst karşılaştırması: hangisi neyi görür, ne zaman hangisi yeter?',
    dk: 6,
    cover: coverXrayMetal,
    coverAlt: 'Metal dedektör ve X-Ray kontrol tüneli yan yana',
  },
  {
    slug: 'sortex-makinasi-nedir',
    kategori: 'Terimler',
    baslik: 'Sortex Makinası Nedir? Color Sorter ile Farkı Var mı?',
    ozet: 'Jenerikleşen bir marka adının ardındaki gerçek: renk ayırma makinesi nedir, markadan önce neye bakılır?',
    dk: 4,
    cover: coverSortex,
    coverAlt: 'Optik ayıklama makinesinin alüminyum olukları',
  },
  {
    slug: 'ikinci-el-renk-ayirma-makinesi',
    kategori: 'Satın Alma Rehberi',
    baslik: '2. El Renk Ayırma Makinesi Almadan Önce Bilmeniz Gerekenler',
    ozet: 'Düşük ilk yatırımın görünmeyen riskleri: ejektör ömrü, kamera eskimesi, yedek parça ve servis gerçeği.',
    dk: 6,
    cover: coverIkinciEl,
    coverAlt: 'Yıpranmış eski makine kontrol paneli',
  },
];

/** Ana sayfa vitrini: ilk 3 yazı (sıralama = YAZILAR sırası) */
export const ONE_CIKAN_YAZILAR = YAZILAR.slice(0, 3);
