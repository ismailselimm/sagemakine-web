/**
 * Sektör görselleri — veri dosyaları görsel adını (string) taşır,
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
import sortingOnceSonra from '../assets/photos/sorting-oncesi-sonrasi.png';

export const SECTOR_IMAGES: Record<string, ImageMetadata> = {
  'sector-kuru-uzum': sectorKuruUzum,
  'sector-kuruyemis-findik': sectorFindik,
  'sector-antep-fistigi': sectorFistik,
  'sector-bakliyat-mercimek': sectorMercimek,
  'sector-iqf': sectorIqf,
  'sector-patates': sectorPatates,
  'food-incir': foodIncir,
  'sorting-oncesi-sonrasi': sortingOnceSonra,
};
