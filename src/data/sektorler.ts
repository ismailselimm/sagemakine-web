/**
 * Sektör sayfası içerikleri — /sektorler/[slug]/
 * Kaynak: docs/brief.md (araştırma sentezi). Rakamlar genel bilinen
 * sektör verileridir; kesin taahhüt içeren ifadelerden kaçınıldı.
 */

export interface SektorDefect {
  icon: string;
  label: string;
  desc: string;
}

export interface Sektor {
  slug: string;
  title: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  image: string;
  imageAlt: string;
  extraImage?: string;
  extraImageAlt?: string;
  facts: { stat: string; label: string }[];
  factsIntro: string;
  defects: SektorDefect[];
  cozum: {
    intro: string;
    adimlar: { baslik: string; text: string; href: string; linkLabel: string }[];
  };
  servisNotu: string;
  waTopic: string;
}

export const SEKTORLER: Sektor[] = [
  {
    slug: 'kuru-meyve',
    title: 'Kuru Meyve',
    navTitle: 'Kuru Meyve',
    metaTitle: 'Kuru Üzüm, İncir ve Kayısı Ayıklama Makineleri | SAGE Makine',
    metaDescription:
      "Manisa üzümünde çöp-sap ve taş, incirde aflatoksin şüpheli tane, kayısıda çekirdek kırığı: kuru meyve için renk ayırma ve X-Ray çözümleri, Ege'de yerinde servis.",
    eyebrow: 'Sektör · Kuru Meyve',
    heroTitle: 'Kuru Meyve İşleyicileri İçin Ayıklama Çözümleri',
    heroLead:
      'Dünyanın sofrasına giden Manisa üzümünde tek bir çöp, sap veya taş markanıza mal olmasın. Üzüm, incir ve kayısıda renk ayırma + X-Ray kombinasyonuyla ihracat kalitesini güvence altına alın.',
    image: 'sector-kuru-uzum',
    imageAlt: 'Avuç içinde altın sarısı çekirdeksiz kuru üzüm',
    extraImage: 'food-incir',
    extraImageAlt: 'Kesilmiş kuru incir',
    factsIntro:
      'Merkezimiz Manisa — yani Türkiye kuru meyve ihracatının kalbi. Ürününüzün hasadını, kurutmasını ve alıcısının beklentisini yakından tanıyoruz.',
    facts: [
      { stat: '%90+', label: 'Türkiye çekirdeksiz kuru üzümünün Manisa ve çevresinden çıkan payı' },
      { stat: '~2/3', label: 'Ege Bölgesi’nin Türkiye kuru meyve ihracatındaki yaklaşık payı' },
      { stat: '1 parti', label: 'AB sınırında reddedilen tek bir konteynerin maliyeti; iade, imha ve müşteri kaybı' },
    ],
    defects: [
      { icon: 'sap', label: 'Çöp ve sap (üzüm)', desc: 'Kurutma sergisinden gelen bitkisel kalıntılar — alıcı şartnamelerinin bir numaralı maddesi.' },
      { icon: 'tas', label: 'Taş ve toprak', desc: 'Üzümle aynı boy ve ağırlıktaki sergi taşları eleklerden geçer; X-Ray yoğunluk farkını görür.' },
      { icon: 'kuf', label: 'Ekşimiş / küflü tane', desc: 'Renk ve yüzey dokusu farkıyla optik olarak ayrılır.' },
      { icon: 'renk', label: 'Aflatoksin şüpheli koyu tane (incir)', desc: 'Anormal koyu ve mat taneler renk ayırmayla hattan çıkarılır.' },
      { icon: 'kabuk', label: 'Çekirdek ve çekirdek kırığı (kayısı)', desc: 'X-Ray, etin içinde kalmış çekirdek parçasını dahi tespit eder.' },
      { icon: 'cam', label: 'Cam, metal, plastik', desc: 'Proses hattından karışabilecek yabancı maddeler son kontrolde yakalanır.' },
    ],
    cozum: {
      intro:
        'Kuru meyvede doğru kurulum genellikle iki aşamalıdır: hat girişinde dökme X-Ray ile yüksek yoğunluklu yabancı maddeleri, işleme sonrası bant tipi renk ayırma ile renk ve doku kusurlarını ayıklarsınız.',
      adimlar: [
        {
          baslik: 'Bant Tipi Renk Ayırma',
          text: 'Yapışkan ve hassas kuru meyve taneleri bant üzerinde tek katman halinde taranır; çöp-sap ve renk kusurları hava jetiyle ayrılır.',
          href: '/renk-ayirma-makinesi/bant-tipi/',
          linkLabel: 'Bant tipi makineleri inceleyin',
        },
        {
          baslik: 'Dökme Ürün X-Ray',
          text: 'Taş, cam ve metal, ürünün renginden bağımsız olarak yoğunluk görüntüsüyle tespit edilir; yalnızca kusurlu bölge ıskartaya ayrılır.',
          href: '/x-ray-gida-kontrol-makinesi/dokme-urun/',
          linkLabel: 'Dökme X-Ray çözümünü inceleyin',
        },
      ],
    },
    servisNotu:
      'Manisa merkezimizden Salihli, Alaşehir, Sarıgöl ve tüm Ege üretim havzasına aynı gün yerinde servis verebiliyoruz. Hasat sezonunda duruş yaşatmamak önceliğimizdir.',
    waTopic: 'Kuru meyve ayıklama makineleri',
  },
  {
    slug: 'kuruyemis',
    title: 'Kuruyemiş',
    navTitle: 'Kuruyemiş',
    metaTitle: 'Fındık, Badem, Ceviz Renk Ayırma ve X-Ray Makineleri | SAGE Makine',
    metaDescription:
      'İç fındıkta kabuk parçası, cevizde zar, bademde taş: kuruyemiş işleyicileri için renk ayırma ve X-Ray ayıklama çözümleri. Numune testi imkânı.',
    eyebrow: 'Sektör · Kuruyemiş',
    heroTitle: 'Kuruyemiş İşleyicileri İçin Ayıklama Çözümleri',
    heroLead:
      'Çikolata sanayiine giden iç fındıkta kabuk parçası toleransı sıfırdır. Fındık, badem ve cevizde renk ayırma + X-Ray ile hem kabuğu hem taşı hem de küflü içi hattan çıkarın.',
    image: 'sector-kuruyemis-findik',
    imageAlt: 'Dökülen iç fındık taneleri',
    extraImage: 'sorting-oncesi-sonrasi',
    extraImageAlt: 'Ayıklama öncesi karışık ürün ve ayıklama sonrası temiz iç fındık tepsileri',
    factsIntro:
      'Türkiye dünya fındık üretiminin yaklaşık üçte ikisini karşılar — ve dünyanın en titiz alıcılarına satar. Çikolata ve şekerleme sanayiin şartnameleri, ayıklama hattınızın kalitesi kadar iyidir.',
    facts: [
      { stat: '~2/3', label: 'Türkiye’nin dünya fındık üretimindeki yaklaşık payı' },
      { stat: '0', label: 'Çikolata sanayiinin iç fındıkta kabuk parçası toleransı' },
      { stat: '2 teknoloji', label: 'Kabuğu optik, taşı ve camı X-Ray görür — tam güvence ikisiyle sağlanır' },
    ],
    defects: [
      { icon: 'kabuk', label: 'Kabuk parçası', desc: 'İç fındıkla aynı renkte olabilen kabuk, kızılötesi (NIR) kamerayla; yoğun parçalar X-Ray ile ayrılır.' },
      { icon: 'kuf', label: 'Küflü / bozuk iç', desc: 'Renk ve yüzey farkıyla optik ayıklama hattında ıskartaya gider.' },
      { icon: 'tas', label: 'Taş ve sert yabancı madde', desc: 'Bahçeden gelen taş ve toprak, X-Ray yoğunluk görüntüsünde parlar.' },
      { icon: 'sap', label: 'Zar ve bitkisel kalıntı (ceviz)', desc: 'Ceviz içindeki zar ve dal parçaları şekil + renk analiziyle ayrılır.' },
      { icon: 'renk', label: 'Renk kusurlu tane', desc: 'Yanık, lekeli veya soluk taneler alıcı standardına göre sınıflandırılır.' },
      { icon: 'metal', label: 'Metal', desc: 'Kırma ve eleme ekipmanından kopabilecek metal parçalar son kontrolde yakalanır.' },
    ],
    cozum: {
      intro:
        'Kuruyemişte en güvenli kurulum çift katmanlıdır: kırma sonrası bant/oluk tipi renk ayırma ile kabuk ve renk kusurları, paketleme öncesi X-Ray ile taş-cam-metal kontrolü.',
      adimlar: [
        {
          baslik: 'Renk Ayırma (NIR destekli)',
          text: 'Kızılötesi kameralar, iç ile aynı renkteki kabuğu dahi kimyasal yansıma farkından tanır.',
          href: '/renk-ayirma-makinesi/',
          linkLabel: 'Renk ayırma makinelerini inceleyin',
        },
        {
          baslik: 'Paketleme Öncesi X-Ray',
          text: 'Son kritik kontrol noktası: BRC/IFS denetimlerinde aranan otomatik kayıt ve izlenebilirlikle.',
          href: '/x-ray-gida-kontrol-makinesi/',
          linkLabel: 'X-Ray sistemlerini inceleyin',
        },
      ],
    },
    servisNotu:
      'Karadeniz fındık havzası ve İç Anadolu kuruyemiş işleyicilerine kurulum, eğitim ve yedek parça desteğini Manisa merkezimizden koordine ediyoruz.',
    waTopic: 'Kuruyemiş ayıklama makineleri',
  },
  {
    slug: 'antep-fistigi',
    title: 'Antep Fıstığı',
    navTitle: 'Antep Fıstığı',
    metaTitle: 'Antep Fıstığı Ayıklama Makinesi – Renk Ayırma ve X-Ray | SAGE Makine',
    metaDescription:
      'Antep fıstığında aflatoksin riski, boş-dolu ayrımı ve kabuk parçası için renk ayırma + X-Ray kombinasyonu. Gaziantep ve Şanlıurfa bölgesine servis.',
    eyebrow: 'Sektör · Antep Fıstığı',
    heroTitle: 'Antep Fıstığı İşleyicileri İçin Ayıklama Çözümleri',
    heroLead:
      'Aflatoksin ve boş tane, Antep fıstığı ihracatının iki büyük riskidir — ikisini de makine görür. Boş-dolu ayrımından kabuk parçasına, ihracat partinizi güvenceye alın.',
    image: 'sector-antep-fistigi',
    imageAlt: 'Kabuğu açılmış yeşil iç Antep fıstıkları',
    factsIntro:
      'Gaziantep ve Şanlıurfa hattındaki işleyiciler için fıstık, hem gurur hem risk demektir: en değerli ihraç ürünlerimizden biri, aynı zamanda AB sınır kontrollerinin en sıkı izlediği ürünlerden.',
    facts: [
      { stat: 'İlk 3', label: 'Türkiye’nin dünya Antep fıstığı üretimindeki yeri' },
      { stat: '#1 neden', label: 'Fıstık ihracat retlerinde aflatoksin — en sık görülen gerekçe' },
      { stat: 'Boş/Dolu', label: 'X-Ray, kabuğu kırmadan iç doluluğunu görüntüler' },
    ],
    defects: [
      { icon: 'renk', label: 'Aflatoksin şüpheli tane', desc: 'Anormal renk ve leke gösteren taneler optik olarak hattan çıkarılır; riskli parti küçülür.' },
      { icon: 'kabuk', label: 'Kabuk parçası', desc: 'İç fıstığa karışan kabuk kırıkları NIR kamera ve X-Ray ile ayrılır.' },
      { icon: 'dogruluk', label: 'Boş ve yarı dolu tane', desc: 'X-Ray yoğunluk görüntüsü, kabuğu kırmadan boş taneyi tespit eder.' },
      { icon: 'tas', label: 'Taş ve toprak', desc: 'Harmandan gelen mineral yabancı maddeler yoğunluk farkıyla yakalanır.' },
      { icon: 'kuf', label: 'Küflü / bozuk iç', desc: 'Renk ve doku analiziyle ıskartaya ayrılır.' },
      { icon: 'sap', label: 'Sap ve bitkisel kalıntı', desc: 'Şekil ayıklama, fıstıkla aynı renkteki sapları geometrisinden tanır.' },
    ],
    cozum: {
      intro:
        'Fıstıkta önerdiğimiz akış: kabuklu üründe X-Ray ile boş-dolu ve taş ayrımı, iç fıstıkta NIR destekli renk ayırma ile kabuk ve aflatoksin şüpheli tane kontrolü.',
      adimlar: [
        {
          baslik: 'X-Ray Boş-Dolu ve Taş Ayrımı',
          text: 'Kabuğu kırmadan içi görüntüler: boş tane, taş ve yoğun yabancı maddeler tek geçişte ayrılır.',
          href: '/x-ray-gida-kontrol-makinesi/dokme-urun/',
          linkLabel: 'Dökme X-Ray çözümünü inceleyin',
        },
        {
          baslik: 'NIR Destekli Renk Ayırma',
          text: 'İç fıstıkta kabuk kırığı, küf ve renk kusurları yüksek çözünürlüklü kameralarla ayıklanır.',
          href: '/renk-ayirma-makinesi/',
          linkLabel: 'Renk ayırma makinelerini inceleyin',
        },
      ],
    },
    servisNotu:
      'Gaziantep, Şanlıurfa ve Siirt bölgesindeki tesislere kurulum ve servis planlamasını sezon takvimine göre yapıyor, yedek parçayı önceden konumlandırıyoruz.',
    waTopic: 'Antep fıstığı ayıklama makineleri',
  },
  {
    slug: 'bakliyat',
    title: 'Bakliyat',
    navTitle: 'Bakliyat',
    metaTitle: 'Bakliyat Renk Ayırma Makinesi – Mercimek, Nohut, Fasulye | SAGE Makine',
    metaDescription:
      'Elek ve gravite masasının kaçırdığı taşı renk ayırma ve X-Ray görür. Bakliyat işleme tesisleri için yüksek kapasiteli oluk tipi makineler.',
    eyebrow: 'Sektör · Bakliyat',
    heroTitle: 'Bakliyat İşleyicileri İçin Ayıklama Çözümleri',
    heroLead:
      'Mercimekle aynı boyuttaki taşı elek göremez — renk ayırma makinesi ve X-Ray görür. Mercimek, nohut ve fasulyede yüksek kapasiteli, düşük fireli ayıklama.',
    image: 'sector-bakliyat-mercimek',
    imageAlt: 'Kırmızı mercimek yığını içinde gizlenmiş tek bir gri taş',
    factsIntro:
      'Türkiye, kırmızı mercimekte dünyanın önemli işleme ve re-eksport merkezlerinden biridir. Yüksek tonajda çalışan tesislerde ayıklama hattının hızı, tesisin kapasitesini belirler.',
    facts: [
      { stat: 't/saat', label: 'Bakliyatta kapasite esastır — oluk tipi makineler yüksek tonaj için tasarlanır' },
      { stat: 'Aynı boy', label: 'Eleğin geçirdiği, gravitenin şaşırdığı taşı kamera ve X-Ray tanır' },
      { stat: '2. geçiş', label: 'Iskartanın yeniden ayıklanmasıyla sağlam ürün kaybı minimuma iner' },
    ],
    defects: [
      { icon: 'tas', label: 'Taş ve toprak topağı', desc: 'Ürünle aynı boy ve ağırlıkta olabilir; renk ve yoğunluk farkıyla ayrılır.' },
      { icon: 'renk', label: 'Renk kusurlu tane', desc: 'Kararmış, lekeli veya olgunlaşmamış taneler alıcı standardına göre ayıklanır.' },
      { icon: 'kuf', label: 'Böcek yeniği tane', desc: 'Yüzey deseni ve şekil analiziyle tespit edilir.' },
      { icon: 'sap', label: 'Sap, kabuk ve bitkisel kalıntı', desc: 'Hasattan gelen hafif kalıntılar optik olarak ayrılır.' },
      { icon: 'cam', label: 'Cam ve seramik', desc: 'X-Ray, renk ayırmanın göremediği şeffaf camı yoğunluğundan yakalar.' },
      { icon: 'metal', label: 'Metal', desc: 'Eleme ve taşıma ekipmanından kopan parçalar son kontrolde tutulur.' },
    ],
    cozum: {
      intro:
        'Bakliyatta standart kurulum: yüksek kapasiteli oluk tipi renk ayırma (gerekirse çift geçişli) + paketleme öncesi X-Ray son kontrol.',
      adimlar: [
        {
          baslik: 'Oluk Tipi Renk Ayırma',
          text: 'Akışkan taneler oluklardan ince bir perde halinde akar; saniyede binlerce tane taranır, kusurlular hava jetiyle ayrılır.',
          href: '/renk-ayirma-makinesi/oluk-tipi/',
          linkLabel: 'Oluk tipi makineleri inceleyin',
        },
        {
          baslik: 'X-Ray Son Kontrol',
          text: 'Cam, taş ve metal için paketleme öncesi güvenlik ağı — denetimlere hazır otomatik kayıtla.',
          href: '/x-ray-gida-kontrol-makinesi/',
          linkLabel: 'X-Ray sistemlerini inceleyin',
        },
      ],
    },
    servisNotu:
      'Mersin, Gaziantep ve Karaman hattındaki bakliyat tesislerine kurulum ve servis veriyoruz; sezon öncesi bakım planlamasıyla hattınızı hazır tutuyoruz.',
    waTopic: 'Bakliyat renk ayırma makineleri',
  },
  {
    slug: 'dondurulmus-gida-iqf',
    title: 'Dondurulmuş Gıda (IQF)',
    navTitle: 'Dondurulmuş Gıda (IQF)',
    metaTitle: 'IQF Dondurulmuş Meyve-Sebze Optik Ayıklama | SAGE Makine',
    metaDescription:
      'IQF hatlarında sap, çekirdek, plastik ve cam için bant tipi optik ayıklama ve yıkanabilir X-Ray sistemleri. Paketleme öncesi son savunma hattınız.',
    eyebrow: 'Sektör · Dondurulmuş Gıda',
    heroTitle: 'IQF ve Dondurulmuş Gıda İçin Ayıklama Çözümleri',
    heroLead:
      'Donmuş üründe son savunma hattı: paketlemeden önce optik ayıklama ve X-Ray. Vişne çekirdeğinden plastik parçasına, müşterinizin sofrasına yalnızca meyve gitsin.',
    image: 'sector-iqf',
    imageAlt: 'Buz kristalleriyle kaplı IQF şoklanmış vişne ve meyveler',
    factsIntro:
      'Türkiye’nin dondurulmuş meyve-sebze ihracatı hızla büyüyor; vişne, kiraz ve kırmızı meyvelerde Avrupa’nın önemli tedarikçilerindeniz. Donmuş hatta hız ve hijyen birlikte çalışmak zorundadır.',
    facts: [
      { stat: '-18°C', label: 'Soğuk ortamda kesintisiz çalışacak şekilde konfigüre edilen sistemler' },
      { stat: 'IP69K', label: 'Yıkanabilir tasarım — hijyen rejiminize uyumlu gövde seçenekleri' },
      { stat: 'Son KKN', label: 'Paketleme öncesi X-Ray, HACCP planınızın kritik kontrol noktası olur' },
    ],
    defects: [
      { icon: 'kabuk', label: 'Çekirdek ve çekirdek kırığı', desc: 'Vişne-kirazda çekirdek, X-Ray yoğunluk görüntüsüyle donmuş meyvenin içinde dahi görülür.' },
      { icon: 'sap', label: 'Sap ve yaprak', desc: 'Bant üzerinde tek katman taranan üründe bitkisel kalıntılar optik ayrılır.' },
      { icon: 'cam', label: 'Cam ve sert plastik', desc: 'Şeffaf yabancı maddeleri renk değil, yoğunluk yakalar.' },
      { icon: 'renk', label: 'Renk kusurlu / ezik meyve', desc: 'Donuk yüzeyde bile renk sapması kameralarla tespit edilir.' },
      { icon: 'metal', label: 'Metal', desc: 'Hat ekipmanından kopabilecek parçalar son kontrolde tutulur.' },
      { icon: 'tas', label: 'Taş', desc: 'Bahçeden gelen mineral kalıntılar X-Ray ile ayrılır.' },
    ],
    cozum: {
      intro:
        'IQF hattında önerimiz: şoklama sonrası bant tipi optik ayıklama + paketleme öncesi yıkanabilir X-Ray kontrolü.',
      adimlar: [
        {
          baslik: 'Bant Tipi Optik Ayıklama',
          text: 'Donmuş ürün bant üzerinde tek katman yayılır; sap, yaprak ve renk kusurları hava jetiyle ayrılır.',
          href: '/renk-ayirma-makinesi/bant-tipi/',
          linkLabel: 'Bant tipi makineleri inceleyin',
        },
        {
          baslik: 'Paketli / Dökme X-Ray',
          text: 'Çekirdek, cam ve metal için son güvenlik ağı — soğuk ve ıslak ortama uygun gövdeyle.',
          href: '/x-ray-gida-kontrol-makinesi/',
          linkLabel: 'X-Ray sistemlerini inceleyin',
        },
      ],
    },
    servisNotu:
      'Ege ve Marmara’daki dondurulmuş gıda tesislerine hızlı yerinde servis; sezonluk yoğunlukta öncelikli müdahale planı sunuyoruz.',
    waTopic: 'IQF optik ayıklama makineleri',
  },
  {
    slug: 'patates-cips',
    title: 'Patates ve Cips',
    navTitle: 'Patates ve Cips',
    metaTitle: 'Patates ve Cips Optik Ayıklama Makineleri | SAGE Makine',
    metaDescription:
      'Parmak patateste yanık uç ve tarla taşı, cipste lekeli dilim: kızartma hattı öncesi ve sonrası optik ayıklama ve X-Ray çözümleri.',
    eyebrow: 'Sektör · Patates Ürünleri',
    heroTitle: 'Patates ve Cips Hatları İçin Ayıklama Çözümleri',
    heroLead:
      'Yanık parmak ve tarladan gelen taş, kızartma hattına girmeden ayrılır. Parmak patates ve cips üretiminde hem hammadde hem son ürün kontrolü tek çözüm ortağıyla.',
    image: 'sector-patates',
    imageAlt: 'Paslanmaz konveyör bandında altın sarısı parmak patatesler',
    factsIntro:
      'Türkiye’de hızla büyüyen dondurulmuş patates yatırımları, yüksek hatlarda hız ve tutarlılık ister. Kızartma öncesi kaçan bir taş, fritözünüze; kaçan bir yeşil parmak, markanıza zarar verir.',
    facts: [
      { stat: '2 nokta', label: 'Kritik kontrol: kızartma öncesi hammadde + paketleme öncesi son ürün' },
      { stat: 'Şekil+Renk', label: 'Yanık uç, yeşillenme ve kabuk kalıntısı aynı geçişte ayıklanır' },
      { stat: 'Tarla taşı', label: 'Patatesle aynı renkteki taşı yoğunluğundan X-Ray tanır' },
    ],
    defects: [
      { icon: 'renk', label: 'Yanık uç ve koyu leke', desc: 'Kızartma sonrası dilim ve parmaklarda renk sapmaları optik ayrılır.' },
      { icon: 'kuf', label: 'Yeşillenme ve çürük', desc: 'Hammadde girişinde renk ve yüzey analiziyle tespit edilir.' },
      { icon: 'kabuk', label: 'Kabuk kalıntısı', desc: 'Soyma sonrası kalan kabuk parçaları NIR ile tanınır.' },
      { icon: 'tas', label: 'Tarla taşı', desc: 'Patatesle birlikte gelen taşlar kızartma hattına girmeden X-Ray ile ayrılır.' },
      { icon: 'cam', label: 'Cam ve plastik', desc: 'Proses hattına karışan yabancı maddeler son kontrolde yakalanır.' },
      { icon: 'metal', label: 'Metal', desc: 'Kesici ekipmandan kopabilecek parçalar paketleme öncesi tutulur.' },
    ],
    cozum: {
      intro:
        'Patates hattında önerimiz: hammadde girişinde X-Ray taş ayrımı, kesim-kızartma sonrası bant tipi optik ayıklama, paketleme öncesi son X-Ray kontrolü.',
      adimlar: [
        {
          baslik: 'Bant Tipi Optik Ayıklama',
          text: 'Parmak ve dilimler bant üzerinde taranır; yanık, yeşil ve kabuklu parçalar hava jetiyle ayrılır.',
          href: '/renk-ayirma-makinesi/bant-tipi/',
          linkLabel: 'Bant tipi makineleri inceleyin',
        },
        {
          baslik: 'X-Ray Kontrol',
          text: 'Tarla taşından metale, yoğun yabancı maddeler hem hammaddede hem son üründe tespit edilir.',
          href: '/x-ray-gida-kontrol-makinesi/',
          linkLabel: 'X-Ray sistemlerini inceleyin',
        },
      ],
    },
    servisNotu:
      'Afyon, Konya ve İç Anadolu patates havzasındaki tesislere kurulum ve servis planlaması yapıyor, kampanya dönemlerinde öncelikli destek veriyoruz.',
    waTopic: 'Patates ve cips ayıklama makineleri',
  },
];

export const getSektor = (slug: string) => SEKTORLER.find((s) => s.slug === slug);
