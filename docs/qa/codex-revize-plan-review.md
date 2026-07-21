# SAGE Makine revize turu — planlama incelemesi

Kaynak: `revize-notlari.md` (21.07.2026). Bu belge kod değişikliği değil, uygulama kapsamıdır. TR ve EN birlikte ele alınmalıdır.

## 1. Revize maddesi → dokunulacak dosyalar

1. **Numune testi vaatlerini kaldırma**
   - Ana sayfa süreç, SSS/FAQPage, neden kartı ve hero chip: `src/pages/index.astro:56-69,89-97,105-109,157-160,322-328`; EN: `src/pages/en/index.astro:58-71,91-99,107-111,160-163,325-331`.
   - Renk pillar seçim metni, kapasite açıklaması ve CTA: `src/pages/renk-ayirma-makinesi/index.astro:160-163,225-228,304-307`; EN: `src/pages/en/color-sorter/index.astro:161-164,226-229,306-309`.
   - İletişim konu listesi, title/description/lead: `src/pages/iletisim.astro:19-39`; EN: `src/pages/en/contact.astro:19-39`.
   - Ortak CTA metinleri (tüm `CtaBand`, alt ürün ve sektör sayfalarını etkiler): `src/i18n/ui.ts:37-40,50-57,59-71,128-130,139-145,147-158`.
   - X-Ray pillar CTA: `src/pages/x-ray-gida-kontrol-makinesi/index.astro:282-284`; EN: `src/pages/en/x-ray-food-inspection/index.astro:284-286`.
   - Hakkımızda değer kartı: `src/pages/hakkimizda.astro:20-24`; EN: `src/pages/en/about.astro:20-24`.
   - Kuruyemiş meta vaadi: `src/data/sektorler.ts:93`; EN: `src/data/en/sektorler.ts:91`.
   - Blog CTA/vaatleri: `src/pages/blog/kuru-uzumde-cop-sap-sorunu.astro:53`, `aflatoksin-nedir-nasil-onlenir.astro:52`, `sortex-makinasi-nedir.astro:52,60`, `ikinci-el-renk-ayirma-makinesi.astro:37,85`, `tasima-orani-carryover-nedir.astro:36,57,73`, `renk-ayirma-makinesi-fiyatlari.astro:32,74,88`, `x-ray-mi-metal-dedektor-mu.astro:103`, `brc-ifs-denetimine-hazirlik.astro:70`; karşılıkları `src/pages/en/blog/stems-in-sultana-raisins.astro`, `what-is-aflatoxin.astro:52`, `what-is-a-sortex-machine.astro:52,60`, `used-color-sorter-guide.astro:37,85`, `what-is-carryover.astro:36,57,73`, `color-sorter-prices.astro:32,74,88`, `x-ray-vs-metal-detector.astro:103`, `brc-ifs-audit-preparation.astro:70`.
   - `numune/sample` sözcüğünün laboratuvar numunesi anlamındaki kullanımları (`aflatoksin...:21,47`, `kuru-uzum...:15`) vaat değildir; silinmemeli.

2. **S-Serisi yerine gerçek model kartları**
   - Tablo/veri ve bölüm başlığı: `src/pages/renk-ayirma-makinesi/index.astro:65-71,221-259`; EN: `src/pages/en/color-sorter/index.astro:66-72,222-260`.
   - Görsel kaynakları repo dışında: `/Users/ismailselim/Desktop/Ismail site/valor5.jpg`, `Valor mini.png`, `DMAX.png`. Uygulamada önce `src/assets/photos/` altına anlamlı, ASCII/kebab-case adlarla alınmalı; her iki dil aynı importları kullanmalı.
   - Kart düzeni tabloya göre değişeceği için `src/styles/pillar-renk.css` responsive görünüm açısından kontrol edilmeli.

3. **CCD / kızılötesi / NIR / InGaAs → yüksek çözünürlüklü RGB**
   - Renk pillar Product JSON-LD, teknoloji kartları, SEO description, tarama adımı: `src/pages/renk-ayirma-makinesi/index.astro:18-25,31-51,74-76,111-115`; EN: `src/pages/en/color-sorter/index.astro:19-26,32-52,75-77,112-116`.
   - Ana sayfa makine kartı: `src/pages/index.astro:280-288`; EN: `src/pages/en/index.astro:283-292`.
   - Diyagram etiketi: `src/i18n/ui.ts:75-88,162-174` (bileşen tüketicisi: `src/components/diagrams/ColorSorterDiagram.astro`).
   - Sektör verileri: `src/data/sektorler.ts:110,122-123,160,168,177,308`; EN: `src/data/en/sektorler.ts:118,150-151,200,224,233,436`.
   - Notlarda atlanan blog kopyaları: `src/pages/blog/renk-ayirma-makinesi-fiyatlari.astro:8,46`, `src/pages/en/blog/color-sorter-prices.astro:8,46`, `src/pages/blog/sortex-makinasi-nedir.astro:37`, `src/pages/en/blog/what-is-a-sortex-machine.astro:37`.
   - Teknoloji gridinde NIR kartı kaldırılınca üç karta düşürmek yerine müşteri notundaki seçenek uygulanabilir: RGB Kamera / Şekil Ayıklama / Yapay Zekâ Sınıflandırma / Deep Learning. Ancak “AI” ve “Deep Learning” aynı kabiliyeti iki kez söylüyor; daha dürüst çözüm üç kart veya doğrulanmış dördüncü kabiliyet gelene kadar üç karttır.

4. **Renk pillar hero görseli**
   - Import ve kullanım: `src/pages/renk-ayirma-makinesi/index.astro:10,92-99`; EN: `src/pages/en/color-sorter/index.astro:12,93-100`.
   - Kaynak: `/Users/ismailselim/Desktop/Ismail site/Hava tabancaları.png`; alt metin TR/EN’de gerçek hava bloğunu tarif etmeli.

5. **Bant tipi hero → DMAX**
   - `src/pages/renk-ayirma-makinesi/bant-tipi.astro:3` ve `src/pages/en/color-sorter/belt-type.astro:3` (`machine-bant-sorter.png` importu).
   - Aynı eski görsel renk pillar tip kartında da kullanılıyor: `src/pages/renk-ayirma-makinesi/index.astro:13,180-197`; EN: `src/pages/en/color-sorter/index.astro:15,181-198`. DMAX burada da kullanılacak mı ürün sahibiyle netleştirilmeli; aksi halde aynı “bant tipi” için iki farklı makine görünür.

6. **Kuru meyve intro sırası: bant tipi → X-Ray**
   - `src/data/sektorler.ts:68`; EN ayna: `src/data/en/sektorler.ts:72`.
   - Aynı sayfanın kurulum kartlarının sırası/metni de birlikte kontrol edilmeli: `src/data/sektorler.ts:70-81`; EN: `src/data/en/sektorler.ts:74-91`.

7. **Kuru meyve kayısı kusur kartı**
   - `src/data/sektorler.ts:63` ve EN karşılığı `src/data/en/sektorler.ts:63` civarı: başlık “Çekirdek, kurtlu, kirli ve yabancı maddeler” / “Pits, worm-damaged or dirty fruit, and foreign material”; teknoloji açıklaması V4 gereği tamamen kaldırılmalı.

8. **Servis garanti listesindeki dört maddeyi kaldırma**
   - Liste: `src/pages/servis-yedek-parca.astro:123-128`; EN: `src/pages/en/service-spare-parts.astro:124-129`.
   - Liste kapsayıcısı boş kalmamalı; başlık/yerleşim ve `src/styles/servis.css` kontrol edilmeli. “Yazılı garanti” süreç kopyasında da geçiyor: `src/pages/index.astro:60`, EN `src/pages/en/index.astro:62`.

9. **Hakkımızda görseli ve kurucu sözü**
   - Görsel importu + figür bölümü: `src/pages/hakkimizda.astro:10,105-123`; EN: `src/pages/en/about.astro:10,106-124`.
   - Kurucu sözü: `src/pages/hakkimizda.astro:88-96`; EN sadık çeviri: `src/pages/en/about.astro:89-97`.
   - Ana sayfa türevi: `src/pages/index.astro:99-104`; EN: `src/pages/en/index.astro:101-106`.

10–11. **Fiyat blogu bölümü ve maddeler**
   - TCO bölümü: `src/pages/blog/renk-ayirma-makinesi-fiyatlari.astro:53-65`; EN: `src/pages/en/blog/color-sorter-prices.astro:53-65`.
   - Madde 3 parantezi ve madde 4 marka cümlesi: TR `:47-48`; EN `:47-48`.
   - SEO description/lead hâlâ “toplam sahip olma maliyeti” diyor: TR `:32,34`; EN `:32,34`; bölümle birlikte güncellenmeli.
   - FAQPage aynı dosyadaki `faq` dizisinden türetiliyor (`:4-27`); bu üç soru değişmiyorsa schema değişmez. FAQ metni değiştirilirse görünen gövde ve JSON-LD zaten tek kaynaktan birlikte değişir.

12. **İletişim telefon kartı**
   - `src/pages/iletisim.astro:47-53`; EN ayna `src/pages/en/contact.astro:47-53`. Sonuç yalnızca “Adem Uzan” olmalı.

13. **X-Ray denetim bölümü, 600 mm ve tespit kartları (video notları)**
   - Denetim/NDK bölümü bütünüyle: `src/pages/x-ray-gida-kontrol-makinesi/index.astro:195-228`; EN: `src/pages/en/x-ray-food-inspection/index.astro:196-229`.
   - 600 mm ile çelişen dökme ürün kartı: `src/pages/x-ray-gida-kontrol-makinesi/dokme-urun.astro:44`; EN `src/pages/en/x-ray-food-inspection/bulk-product.astro:56`.
   - X-Serisi 800/1000 mm satırları: `src/pages/x-ray-gida-kontrol-makinesi/index.astro:49-53`; EN `src/pages/en/x-ray-food-inspection/index.astro:50-54`. Müşteri yalnızca genişliği doğruladı; model adı, hassasiyet ve kapasite değerleri de teyitsizse tabloda bırakılmamalı.
   - Tespit kartları: `src/pages/x-ray-gida-kontrol-makinesi/index.astro:31-37`; EN `src/pages/en/x-ray-food-inspection/index.astro:32-38`. “Yoğun plastik” → “Metal yoğunluğu içeren plastikler”; “Kemik ve çekirdek” → “Çekirdek”.

14. **Tüm sektör kusur kartlarında alt açıklamaları kaldırma**
   - Tek render noktası: `src/components/SektorPage.astro:97-106`; `<p>{d.desc}</p>` kaldırılırsa tüm TR/EN sektör sayfaları aynı anda düzelir.
   - Veri şemasındaki `desc` alanlarını bırakmak görünmez ama eski/yanlış iddiaları depoda tutar. Tercihen `src/data/sektorler.ts` ve `src/data/en/sektorler.ts` içindeki tüm kusur `desc` alanları da kaldırılmalı; özellikle NIR/X-Ray iddiaları yukarıdaki satırlarda.

## 2. Notların atladığı tutarlılık noktaları

### Kesin kapsam

- **Kemik** yalnızca X-Ray hero kartında değil: `src/pages/index.astro:307`, EN `src/pages/en/index.astro:311`; `src/i18n/ui.ts:98-99,184-185`; X-Ray pillar Product JSON-LD/SEO/lead `src/pages/x-ray-gida-kontrol-makinesi/index.astro:25,35,58,66` ve EN `:26,36,59,67`. Paketli ürün içeriği de grep ile yeniden taranmalı. Müşteri “kemik kalksın”ı ürün kabiliyeti genelinde söylüyorsa bunların tamamı çekirdek/metal-cam-taş ekseninde revize edilmeli.
- **NDK ve denetim hizmet vaadi** ana sayfada sürüyor: `src/pages/index.astro:76-77,116-119,312-313`; EN `src/pages/en/index.astro:78-79,118-120,316-317`; serviste `src/pages/servis-yedek-parca.astro:127`, EN `:128`; X-Ray meta/SEO’da `src/pages/x-ray-gida-kontrol-makinesi/index.astro:25,58`, EN `:26,59`.
- **Paketli ürün denetim kanıtı**: `src/pages/x-ray-gida-kontrol-makinesi/paketli-urun.astro:8,13,33-34`; EN `src/pages/en/x-ray-food-inspection/packaged-product.astro:8,13,44-45`. “Bununla alakalı çalışmamız yok” beyanıyla çelişme riski yüksek.

### Kapsam teyidi gereken editoryal içerik

- `src/pages/blog/x-ray-mi-metal-dedektor-mu.astro:7,15,44-49,71,93-100` ve EN aynası `src/pages/en/blog/x-ray-vs-metal-detector.astro:7,15,44-49,71,93-100` kemik, yoğun plastik, NDK ve denetim iddiaları içeriyor. Genel teknik/mevzuat bilgisi olarak kalabilir; fakat SAGE model kabiliyeti izlenimi veriyorsa yumuşatılmalı.
- `src/pages/blog/brc-ifs-denetimine-hazirlik.astro:6-40,67-70` ve EN aynası bütünüyle BRC/IFS/KKN/denetim konulu. Blogu silmek notta istenmiyor; ancak `:70` SAGE’nin teknik dosya/form/denetim desteği verdiğini iddia ediyor ve kaldırılmalı. `src/data/blog.ts:68` ile `src/data/en/blog.ts` özetleri de yeniden okunmalı.
- Sektör verilerindeki “denetime hazır / son KKN” iddiaları: `src/data/sektorler.ts:129,227,254` ve karşılıkları `src/data/en/sektorler.ts`.

## 3. Riskler ve yan etkiler

- **FAQPage:** Ana sayfadaki SSS dizisinden görünür SSS ve JSON-LD birlikte üretiliyor. Numune ve NDK sorularını yalnızca görünümden gizlemek schema’da yanlış vaadi bırakır; `sss` dizisinden kaldır/değiştir (`src/pages/index.astro:65-97`, EN `:67-99`).
- **Ortak CTA yayılımı:** `src/i18n/ui.ts` değişikliği `CtaBand.astro`, `SubUrunPage.astro` ve `SektorPage.astro` tüketicilerinin tamamını etkiler. Yeni metin “teklif/ürün-kapasite görüşmesi” olmalı; showroom/test ima etmemeli.
- **TR/EN sadakati:** Sadece görünen TR metinlerini değiştirmek yeterli değil; JSON-LD, meta description, WhatsApp topic ve EN karşılıkları aynı turda güncellenmeli. Kurucu sözünün EN çevirisi “Chinese supplier competitors” anlamını açıkça korumalı.
- **Hreflang:** Mevcut sayfalar silinmediği için `src/i18n/routes.ts` değişmemeli. TR/EN sayfa çiftlerinden biri kaldırılırsa `Seo.astro` hreflang üretimi bozulur; bu revizyonda sayfa silmeyin.
- **Sitemap:** İçerik/kart değişikliği sitemap konfigürasyonu gerektirmez (`astro.config.mjs:15`, `src/components/Seo.astro:95`). Blog veya sayfa tamamen kaldırılırsa sitemap ve iç linkler ayrıca ele alınmalı.
- **Görsel lisansı/iz yolu:** Yeni görseller repo dışında. Kopyalama sırasında özgün dosyalar korunmalı, EXIF/çok büyük boyut kontrolü yapılmalı; `IMG_1767.JPG` 4096 px olduğundan doğrudan servis edilmemeli. Alt metinlerde doğrulanmamış model/spec iddiası yazılmamalı.
- **CSS:** 5 satırlı tabloyu 3 kartla değiştirmek ve sektör kartı açıklamalarını kaldırmak boşluk/yükseklik dengesini etkiler: `src/styles/pillar-renk.css`, `src/components/SektorPage.astro` ve ilgili responsive kurallar görsel QA ister.
- **İddia zinciri:** “600 mm” yalnız genişlik düzeltmesi değildir; X-80B/X-100B isimleri, hassasiyet ve tonajlar da kaynak belgesiz görünüyor. Doğrulanmayan her spec kaldırılmalı veya “projenize göre konfigüre edilir” seviyesine çekilmeli.

## 4. Süreç şeridi önerisi

**Önerilen 4 adım:**

1. İhtiyaç Analizi — ürün, kusur profili, hedef kalite ve kapasite.
2. Çözüm + Teklif — uygun makine tipi/modeli, kapsam ve ticari şartlar.
3. Kurulum + Eğitim — devreye alma ve operatör eğitimi.
4. Servis + Yedek Parça — satış sonrası destek.

Başlığı “Dört Adımda Doğru Çözüm”, alt metni “İhtiyaçtan devreye almaya, süreci açık adımlarla yönetiriz.” yapın. Mevcut beşli sayıyı korumak için yapay bir adım eklemeyin. “Yazılı garanti”, “Türkçe arayüz” ve stok iddiaları müşteri tarafından doğrulanmadıysa süreç metninde tekrarlanmasın. TR: `src/pages/index.astro:56-63,322-340`; EN: `src/pages/en/index.astro:58-65,325-343`; olası grid ayarı: `src/styles/home.css`.

## 5. Specsiz model kartları — dürüst içerik

Kartlarda yalnızca doğrulanmış kimlik, form faktörü ve görsel kullanılsın; kapasite, kanal/oluk sayısı, kamera adedi, hassasiyet, tüketim ve ölçü verilmesin.

| Model | Kart başlığı | Doğrulanmış kısa metin | CTA |
|---|---|---|---|
| VALOR 5 | **VALOR 5 — Oluk Tipi** | “Serbest akan taneli ürünler için oluk tipi renk ayırma modeli. Ürününüz ve hat hedefiniz için uygun konfigürasyon teklif aşamasında netleştirilir.” | “Model için teklif alın” |
| Valor Mini | **Valor Mini — Kompakt** | “Alan ihtiyacını sınırlı tutan kompakt renk ayırma modeli. Uygun ürün grubu ve hat yerleşimi proje bilgileriyle değerlendirilir.” | “Uygunluğu görüşün” |
| DMAX | **DMAX — Bant Tipi** | “Kırılgan, yapışkan veya iri ürünlerin bant üzerinde ilerlediği renk ayırma modeli. Konfigürasyon ürün ve proses ihtiyacına göre belirlenir.” | “DMAX için teklif alın” |

Ortak dipnot: **“Teknik özellikler ve performans; ürün, kusur profili ve seçilen konfigürasyona göre değişir. Doğrulanmış teknik föy için bizimle iletişime geçin.”** EN kartları serbest pazarlama çevirisi değil, aynı sınırları koruyan birebir anlamda hazırlanmalı.

## Uygulama sırası

1. Yanlış hizmet/kabiliyet vaatlerini (numune, CCD/NIR, kemik, NDK/denetim) TR+EN+JSON-LD/meta boyunca temizle.
2. Ortak veri/UI kaynaklarını ve sektör kartı renderını düzelt.
3. Görselleri içeri al; renk pillar ve bant tipi importlarını değiştir.
4. Model kartlarını specsiz, doğrulanmış metinlerle kur.
5. Fiyat blogu, hakkımızda, servis ve iletişim lokal revizelerini tamamla.
6. Build çalıştırmadan önce son statik kontrol: `rg -n -i 'numune|sample test|CCD|NIR|kızılötesi|InGaAs|infrared|kemik|bone|NDK|denetç|CCP|KKN|BRC' src` çıktısını madde madde “kaldı / editoryal olarak bilinçli bırakıldı” diye kapat.
