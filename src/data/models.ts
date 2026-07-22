/**
 * Gerçek makine modelleri — /makineler/[model]/ sayfalarını besler.
 * Kaynak: Adem Uzan'ın gönderdiği model açıklamaları + VALOR 5 spec fotoğrafı
 * + tanıtım videoları. Yalnızca doğrulanmış bilgi; uydurma spec yok.
 * TR karşılığı EN: src/data/en/models.ts (görsel/video ortak).
 */

export interface ModelOzellik {
  icon: string;
  baslik: string;
  text: string;
}

export interface ModelSpec {
  label: string;
  value: string;
}

export interface ModelVideo {
  src: string;
  poster: string;
  /** demo = sessiz otomatik döngü (dikey telefon çekimi); promo = posterli, tıkla-oynat */
  tur: 'demo' | 'promo';
  dikey?: boolean;
}

export interface MakineModeli {
  slug: string;
  ad: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  /** MACHINE_IMAGES anahtarı */
  image: string;
  imageAlt: string;
  lead: string;
  aciklama: string[];
  ozellikler: ModelOzellik[];
  specs?: ModelSpec[];
  specNot?: string;
  video: ModelVideo;
  sektorler: { label: string; href: string }[];
  waTopic: string;
}

export const MODELLER: MakineModeli[] = [
  {
    slug: 'dmax',
    ad: 'DMAX',
    eyebrow: 'RGB Renk + Şekil Ayıklama · Bant Tipi',
    metaTitle: 'DMAX Renk ve Şekil Ayıklama Makinesi | SAGE Makine',
    metaDescription:
      'DMAX bant tipi RGB renk ve şekil ayıklama makinesi: 360° kamera kabini, yüksek çözünürlüklü tarama. Kuru meyve, donmuş sebze-meyve ve patates ürünleri için.',
    image: 'dmax',
    imageAlt: 'DMAX bant tipi renk ve şekil ayıklama makinesi',
    lead: 'DMAX, ürünlerinizi 360 derece gören kamera kabiniyle rengi ve şekli birlikte değerlendiren bant tipi ayıklama makinesidir. Kırılgan ve hassas ürünlerde tek katman tarama, yüksek doğruluk.',
    aciklama: [
      'DMAX, 360 derece olarak ürünlerinizi görebilen kamera kabini sayesinde her taneyi her açıdan değerlendirir. Renk ve şekil kusurlarını birlikte yakalar; sadece renge değil, biçime de bakar.',
      'Kuru meyve; taze ve donmuş sebze-meyve; bütün patates, parmak patates, domates ve benzeri ürünler için ideal çözümdür. Bant üzerinde tek katman akış, kırılgan ürünlere zarar vermeden nazik taşıma sağlar.',
    ],
    ozellikler: [
      { icon: 'kamera', baslik: '360° Kamera Kabini', text: 'Yüksek çözünürlüklü kameralar ürünü her açıdan görüntüler; üstte kalan kusur alta düşmez.' },
      { icon: 'dogruluk', baslik: 'Renk + Şekil Ayıklama', text: 'RGB renk analizinin yanında geometri analizi; sap, kırık ve deforme taneyi biçiminden tanır.' },
      { icon: 'bant', baslik: 'Nazik Bant Taşıma', text: 'Tek katman akışla kırılgan kuru meyve ve donmuş ürünler ezilmeden taranır.' },
      { icon: 'kapasite', baslik: 'Yüksek Hızlı Konveyör', text: 'Yüksek bant hızıyla tonajı düşürmeden sürekli ayıklama.' },
    ],
    video: { src: '/videos/dmax-tanitim.mp4', poster: '/videos/dmax-poster.jpg', tur: 'promo' },
    sektorler: [
      { label: 'Kuru Meyve', href: '/sektorler/kuru-meyve/' },
      { label: 'Dondurulmuş Gıda (IQF)', href: '/sektorler/dondurulmus-gida-iqf/' },
      { label: 'Patates ve Cips', href: '/sektorler/patates-cips/' },
    ],
    waTopic: 'DMAX renk ve şekil ayıklama makinesi',
  },
  {
    slug: 'ids',
    ad: 'IDS',
    eyebrow: 'Hassas Kuruyemiş Ayırıcı · Analiz + Raporlama',
    metaTitle: 'IDS Hassas Kuruyemiş Ayırma ve Analiz Makinesi | SAGE Makine',
    metaDescription:
      'IDS: içi dolu ve kabuklu kuruyemiş için yüksek verimli hassas ayırıcı. 360° kamera, tek geçişte 10 kanala kadar sınıflandırma, kusur ve yabancı madde tespiti, üretim raporlaması.',
    image: 'lineIds',
    imageAlt: 'IDS hassas kuruyemiş ayırma ve analiz hattı',
    lead: "IDS, hem içi dolu hem de kabuklu kuruyemişleri işlemek için tasarlanmış yüksek verimli bir hassas ayırıcıdır. Boyutlandırma, sınıflandırma ve kusur tespitini tek geçişte yapar; üretiminizi raporlar.",
    aciklama: [
      '360 derece kameralarla donatılmış olan IDS; boyutlandırma, sınıflandırma, kusur ve yabancı madde tespiti gibi işlemleri içeren tek geçişte 10\'a kadar hassas ayırma kanalı sunar.',
      'İçi dolu ve kabuklu kuruyemişleri işlemek için tasarlandı. Ayırmanın yanı sıra üretim takibi ve raporlama da yapar: sağlam tane oranı, kusur dağılımı ve parti kalitesi ekranda anlık görünür.',
    ],
    ozellikler: [
      { icon: 'kamera', baslik: '360° Kamera', text: 'Her taneyi her yüzeyinden tarar; kabuk, iç ve yüzey kusurları tek geçişte görülür.' },
      { icon: 'yazilim', baslik: '10 Kanala Kadar Ayırma', text: 'Tek geçişte on ayrı hassas kanalda boyutlandırma ve sınıflandırma.' },
      { icon: 'dogruluk', baslik: 'Kusur + Yabancı Madde', text: 'Küf, böcek hasarı, kabuk parçası ve yabancı maddeyi ayırt eder.' },
      { icon: 'belge', baslik: 'Üretim Takibi ve Raporlama', text: 'Sağlam tane oranı ve kusur dağılımı raporlanır; parti kalitesi kayıt altına alınır.' },
    ],
    video: { src: '/videos/ids-tanitim.mp4', poster: '/videos/ids-poster.jpg', tur: 'promo' },
    sektorler: [
      { label: 'Kuruyemiş', href: '/sektorler/kuruyemis/' },
      { label: 'Antep Fıstığı', href: '/sektorler/antep-fistigi/' },
    ],
    waTopic: 'IDS hassas kuruyemiş ayırma makinesi',
  },
  {
    slug: 'valor-5',
    ad: 'VALOR 5',
    eyebrow: 'X-Ray Ayırıcı · Fındık ve Sert Kabuklu',
    metaTitle: 'VALOR 5 X-Ray Fındık Ayırma Makinesi | SAGE Makine',
    metaDescription:
      'VALOR 5 X-ışını ayırıcı: kabuklu ve kırılmış fındıkta boş kabuk, böcek hasarı ve küflü taneyi X-ray + yapay zekâ ile tespit eder. Antep fıstığı, ceviz, badem için de.',
    image: 'valor5',
    imageAlt: 'VALOR 5 X-ışını fındık ayırma makinesi',
    lead: 'VALOR 5 X-ışını ayırıcı, fındık işleme sektöründe hem kırılmış hem de kabuklu fındıkları ayırır. Sektörün önde gelen X-ışını hassasiyeti ve yapay zekâ öğrenimiyle kabuk içi kusurları doğru tespit eder.',
    aciklama: [
      'Valor Serisi X-ışını ayırma, fındık işleme sektöründe yaygın olarak kullanılıyor ve hem kırılmış hem de kabuklu fındıkları ayırabiliyor. Gelişmiş yapay zekâ öğrenimiyle kabuklu kusurları doğru bir şekilde tespit ederek sağlıksız fındıkları önemli ölçüde azaltıyor.',
      'Gelişmemiş tane ve boş kabuklu fındıkların yanı sıra beyaz lekeli, böceklerin zarar verdiği ve küflü fındıkları da etkin biçimde tespit ediyor. Farklı kapasite seçenekleriyle küçük çiftliklerden büyük işleme tesislerine kadar her ölçekte kullanılabiliyor.',
      'Fındığın yanında Antep fıstığı, ceviz, badem ve kabuklu fıstık gibi ürünlerde de kullanılabilir.',
    ],
    ozellikler: [
      { icon: 'xray', baslik: 'X-Ray Görüntüleme', text: 'Kabuğu kırmadan içi görür; boş ve gelişmemiş taneyi yoğunluk farkından ayırır.' },
      { icon: 'yazilim', baslik: 'Yapay Zekâ Öğrenimi', text: 'Sektör lideri hassasiyet; kabuk içi kusur desenlerini öğrenerek doğru sınıflandırır.' },
      { icon: 'dogruluk', baslik: 'Geniş Kusur Yelpazesi', text: 'Beyaz lekeli, böcek hasarlı, küflü ve boş kabuklu taneyi etkin tespit eder.' },
      { icon: 'kapasite', baslik: 'Ölçeklenebilir Kapasite', text: 'Küçük çiftlikten büyük tesise farklı kapasite seçenekleri.' },
    ],
    specs: [
      { label: 'X-Ray Gücü', value: '320 W' },
      { label: 'X-Işını Kaçağı', value: '< 0,2 µSv/saat (kalkansız)' },
      { label: 'Ekran', value: '17 inç' },
      { label: 'Hava Tabancası', value: '96' },
      { label: 'Makine Ölçüsü', value: '2610 × 1100 × 2030 mm' },
      { label: 'Besleyici Ölçüsü', value: '700 × 700 × 300 mm' },
      { label: 'Hava Basıncı', value: '0,6 MPa' },
      { label: 'Güç Tüketimi', value: '5,5 kW' },
      { label: 'Besleme', value: '220 V AC · 50 Hz' },
    ],
    specNot: 'Değerler VALOR 5 için üretici verisidir; kapasite ürününüze ve uygulamanıza göre netleşir.',
    video: { src: '/videos/valor5-demo.mp4', poster: '/videos/valor5-poster.jpg', tur: 'demo', dikey: true },
    sektorler: [
      { label: 'Kuruyemiş', href: '/sektorler/kuruyemis/' },
      { label: 'Antep Fıstığı', href: '/sektorler/antep-fistigi/' },
    ],
    waTopic: 'VALOR 5 X-Ray fındık ayırma makinesi',
  },
];
