/**
 * Paylaşılan görsel haritaları — veri/sayfa dosyaları görsel adını (string) taşır,
 * ImageMetadata karşılıkları TEK buradan gelir (TR + EN sayfalar ortak).
 */
import type { ImageMetadata } from 'astro';
import sectorKuruUzum from '../assets/photos/sector-kuru-uzum.png';
import sectorFindik from '../assets/photos/sector-kuruyemis-findik.png';
import sectorFistik from '../assets/photos/sector-antep-fistigi.png';
import sectorMercimek from '../assets/photos/sector-bakliyat-mercimek.png';
import sectorIqf from '../assets/photos/sector-iqf.png';
import sectorPatates from '../assets/photos/sector-patates.png';
import foodIncir from '../assets/photos/food-incir.png';

import valor5 from '../assets/photos/machine-valor-5.jpg';
import valorMini from '../assets/photos/machine-valor-mini.png';
import dmax from '../assets/photos/machine-dmax-bant.png';
import havaBlogu from '../assets/photos/tech-hava-blogu.png';
import heroBanner from '../assets/photos/hero-dmax-banner.png';
import lineIds from '../assets/photos/line-ids-analysis.jpg';
import linePanorama from '../assets/photos/line-anahtar-teslim-panorama.jpg';

export const SECTOR_IMAGES: Record<string, ImageMetadata> = {
  'sector-kuru-uzum': sectorKuruUzum,
  'sector-kuruyemis-findik': sectorFindik,
  'sector-antep-fistigi': sectorFistik,
  'sector-bakliyat-mercimek': sectorMercimek,
  'sector-iqf': sectorIqf,
  'sector-patates': sectorPatates,
  'food-incir': foodIncir,
};

/** Gerçek makine ve hat fotoğrafları — birden çok sayfada paylaşılır */
export const MACHINE_IMAGES = {
  valor5,
  valorMini,
  dmax,
  havaBlogu,
  heroBanner,
  lineIds,
  linePanorama,
} satisfies Record<string, ImageMetadata>;
