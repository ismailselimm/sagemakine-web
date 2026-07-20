# CODEX GÖREVİ — Bağımsız UI/UX Denetimi (READ-ONLY + tek rapor dosyası)

Sen kıdemli bir UI/UX denetçisisin. sagemakine.com'un production build'i http://localhost:4322 adresinde çalışıyor (Astro preview). Görevin: TÜM sayfaları masaüstü ve mobil görünümde ekran görüntüsüyle incele, bulgularını `docs/qa/codex-report.md` dosyasına yaz. BAŞKA HİÇBİR DOSYAYA DOKUNMA; kod değiştirme, sadece raporla.

## Ekran görüntüsü yöntemi (aynen kullan)
```
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1440,8000 --screenshot=/tmp/codexqa/<isim>-d.png "http://localhost:4322<path>"
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=500,12000 --screenshot=/tmp/codexqa/<isim>-m.png "http://localhost:4322<path>"
```
Önce `mkdir -p /tmp/codexqa`. Her görüntüyü `view_image` ile AÇ ve gerçekten incele.
⚠️ ÖNEMLİ: 500px'ten DAR pencere KULLANMA — bu Mac'te Chrome headless pencereyi ~500'e sabitliyor, daha darı sahte "metin kesilmesi" artefaktı üretir.

## Bilinen/beklenen artefaktlar (BUNLARI RAPORLAMA)
- Çok uzun pencerede içerik ile footer arasında dev boşluk (body min-height:100dvh — gerçek tarayıcıda yok)
- İletişim sayfasında haritanın gri görünmesi (headless Google Maps yüklemez)
- Ana sayfa hero altındaki bant animasyonundaki tanelerin rastgele konumları
- Mobil hamburger menünün AÇILMAMASI — biliniyor, şu an düzeltiliyor

## Sayfalar
/ , /renk-ayirma-makinesi/ , /renk-ayirma-makinesi/oluk-tipi/ , /renk-ayirma-makinesi/bant-tipi/ , /x-ray-gida-kontrol-makinesi/ , /x-ray-gida-kontrol-makinesi/dokme-urun/ , /x-ray-gida-kontrol-makinesi/paketli-urun/ , /sektorler/kuru-meyve/ , /sektorler/kuruyemis/ , /sektorler/antep-fistigi/ , /sektorler/bakliyat/ , /sektorler/dondurulmus-gida-iqf/ , /sektorler/patates-cips/ , /servis-yedek-parca/ , /hakkimizda/ , /iletisim/ , /blog/ , /blog/renk-ayirma-makinesi-fiyatlari/ , /blog/sortex-makinasi-nedir/ , /blog/x-ray-mi-metal-dedektor-mu/ , /blog/ikinci-el-renk-ayirma-makinesi/ , /kvkk/ , /404

## Nelere bak (öncelik sırasıyla)
1. Metin taşması/kesilmesi, üst üste binen elemanlar, hizasız bloklar (ör. ortalanmış bölümde sola kaymış paragraf)
2. Mobilde: dokunma hedefi küçüklüğü, kenar boşluğu sorunları, satır uzunluğu, buton sığmaması
3. Görsel eksik/bozuk (gri kutu, orantısız crop)
4. Tipografi hiyerarşisi tutarsızlığı, spacing ritmi bozuklukları
5. UX önerileri: CTA görünürlüğü, gezinme akışı, güven öğeleri

## Rapor formatı (docs/qa/codex-report.md)
```
# Codex UI Raporu
## KRİTİK (kullanıcı görür görmez rahatsız olur)
- [sayfa] [viewport] açıklama (mümkünse hangi bölüm/başlık)
## ORTA
...
## KÜÇÜK / ÖNERİ
...
## GENEL UX NOTLARI
...
```
Somut ol; "daha modern olsun" gibi muğlak laf yazma. Bitirince raporun İLK 20 satırını stdout'a da yaz.
