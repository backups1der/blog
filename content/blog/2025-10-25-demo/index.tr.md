+++
title = "Sitemi kan tadıyla test etmek (eved, kimsenin alamayacağı bir Portal referansı)"
description = "Uzun açıklama vs. vs. nebilim (kafayı yiyecem, bir günümü buna mı harcadım ağğğğ), Boş yapmayı sevmiyorum ama bu kadar uzun yazmak zorundaydım. Aslında değilim, sadece bir şeyi deniyordum.Daha doğrusu açıklamaların taşıp taşmayacağını :D"
authors = ["anins1der", "Sparrow99"]
updated = 2025-02-03
[taxonomies]
categories = ["Test"]
tags = ["Test"]
[extra]
styles = ["demo/demo.css"]
scripts = ["demo/demo.js"]
banner = "banner.jpg"
accent_color = ["hsl(108 5% 18%)", "hsl(84 2% 55%)"]
archive = "Bu sayfa aslında arşivlenmedi. Burada sadece arşivlenen sayfaların nasıl göründüğünü göstermek için var."
trigger = "Bu sayfa berbat derecede kötü şakalar içerir."
disclaimer = """
- Bu sayfadaki bütün numaralar laboratuvar ortamında denenmiştir, lütfen bunları evde denemeyin.
- Uzayda astronot elbisesi olmadan nefes almayın.
- Kendinizi 4000° Kelvin’e maruz bırakmayın.
- Yapmayın.
- Menemen yiyin :)
"""
toc = true
backlinks = true

[extra.fediverse]
# Thread with multiple images per post
host = "mastodon.blaede.family"
user = "cassidy"
id = "112774854109302186"
+++

## Markdown
<strong class="title">Syntax</strong><br>
Yazılar **kalın**, *italik*, ~~üstü çizili~~ olabilir, ve ***~~hemen hemen hepsi~~*** beraber kullanılıp karıştılarak kullanılabilir.

[Başka bir sayfaya giden bir link](@/demo/page.tr.md).

Paragraflar arasında boşluk olmalıdır.

<strong class="title">Dipnotlar</strong><br>
Dipnot örneği [^1].

<strong class="title">Başlıklar</strong>
# Başlık 1
## Başlık 2
### Başlık 3
#### Başlık 4
##### Başlık 5
###### Başlık 6

Bu başlıktan sonra gelen bir paragraf[^2].

😭😂🥺🤣❤️✨🙏😍🥰😊

<strong class="title">Alıntılar</strong>
> "Orijinal içerik, eskimeden önce sadece birkaç saniyeliğine orijinaldir."
> > İnternet'in 21. kuralı, 4chan'ın /b/ panosu

<strong class="title">Listeler</strong>
- 1. eşya
- 2. eşya
  - 2.1 eşya<sup>1</sup>
  - 2.2 eşya<sub>2</sub>
- 3. eşya
- `4. eşya`

1. İlk adımı atın
2. İkinci adıma geçin.
3. Üçüncü adımla sonuçlandırın.

<strong class="title">Görev Listesi</strong>
- [ ] Süt
- [x] Yumurtalar
- [x] Un
- [ ] Kahve
- [x] Yanıcı limonlar

<strong class="title">Resim</strong>
{{ image(alt="Bolivya'dan gelmiş taze ametrin", url="./ametrine.png") }}
<figcaption>Bolivya'dan gelmiş taze ametrin</figcaption>

<strong class="title">Tablolar</strong>
| Karakter     | Dizi               | Sözler                                                |
| :----------- | :----------------- | :---------------------------------------------------- |
| Kemal Sunal  | Çarıklı Milyoner   | Zaten hıyara benziyordun; yoğurdu yedin, cacık oldun. |
| Kedi         | [Youtube videosu](https://youtu.be/bN1shALfJqg)    | OIIAIOIIIAI :3        |

<strong class="title">Kod satırları</strong>

`Kısa kod satırları` metin içinde böyle gösterilir.
```
Uzun, tek satırlık kod satırları cümle sonlarına doğru parçalanmamalı. Yeter kadar uzun olan satırlar sağa doğru uzar. Bu satır bunu gösterebilecek kadar uzun olmalı.
```

```python
highlight = true
# Çok satırlı kod bloklarında dil belirtilirse sözdizimi vurgulaması destekler.
```
Kod satırlarında satır numaraları, belirli satırların vurgulanması, ve bazı satırların gizlenmesi de desteklenir.
```scss, linenos, linenostart=10, hl_lines=3-4 8-9, hide_lines=2 7
pre mark {
  // If you want your highlights to take the full width (hehe gizlendim)
  display: block;
  color: currentcolor;
}
pre table td:nth-of-type(1) {
  // Select a colour matching your theme (haha ben de)
  color: #6b6b6b;
  font-style: italic;
}
```
<strong class="title">Uyarılar</strong>

> [!NOTE]
> İçeriği süzerken bile kullanıcıların bilmesi gereken faydalı bilgiler.

> [!TIP]
> Daha iyi veya daha kolay şeyler yapmak için faydalı tavsiyeler.

> [!IMPORTANT]
> Kullanıcıların hedeflerine ulaşmaları için bilmesi gereken önemli bilgiler.

> [!WARNING]
> Problemleri önlemek için kullanıcıların hemen dikkat etmesi gereken acil bilgiler.

> [!CAUTION]
> Belirli eylemlerin riskleri veya olumsuz sonuçları hakkında tavsiyeler.

***

## Kısa kodlar
Ametrine birkaç [kısa kod](https://www.getzola.org/documentation/content/shortcodes/) ile bazı görevleri basitleştirir. Tüm sayfalarda kullanılabilirler.

### Uyarılar
[GitHub tarzı](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) uyarılar. İstenilen uyarının metnini kısa kod içine alarak istenen görünümü elde edebilirsiniz.

> [!NOTE]
> 0.21.0'inci versiyon itibarıyla, Zola bu kısa kod olmadan yerel olarak GitHub tarzı uyarıları desteklemektedir. Aşağıdakileri `config.toml` dosyasına ekleyerek etkinleştirilebilir:
>
> ```toml
> [markdown]
> github_alerts = true
> ```

Available alert types:

- `note`: Kullanıcıların bilmesi gereken faydalı bilgiler, içeriği süzerken bile.
- `tip`: Daha iyi veya daha kolay şeyler yapmak için faydalı tavsiyeler.
- `important`: Kullanıcıların hedeflerine ulaşmaları için bilmesi gereken önemli bilgiler.
- `warning`: Problemleri önlemek için kullanıcıların hemen dikkat etmesi gereken acil bilgiler.
- `caution`: Belirli eylemlerin riskleri veya olumsuz sonuçları hakkında tavsiyeler.
- `edit`: Bir şeyin düzenlendiğini belirtir.
- `fact`: Bazı ilginç olmayan gerçekler.

```jinja2
{%/* alert(note=true) */%}
-> Alert text <-
{%/* end */%}
```

{% alert(note=true) %}
Kullanıcıların bilmesi gereken faydalı bilgiler, içeriği süzerken bile.

- Ben bir listeyim ve içinde bir [satır içi](https://example.org) linki var.
{% end %}

{% alert(tip=true) %}
Daha iyi veya daha kolay şeyler yapmak için faydalı tavsiyeler.

- Ben bir listeyim ve içinde bir [satır içi](https://example.org) linki var.
{% end %}

{% alert(important=true) %}
Kullanıcıların hedeflerine ulaşmaları için bilmesi gereken önemli bilgiler.

- Ben bir listeyim ve içinde bir [satır içi](https://example.org) linki var.
{% end %}

{% alert(warning=true) %}
Problemleri önlemek için kullanıcıların hemen dikkat etmesi gereken acil bilgiler.

- Ben bir listeyim ve içinde bir [satır içi](https://example.org) linki var.
{% end %}

{% alert(caution=true) %}
Belirli eylemlerin riskleri veya olumsuz sonuçları hakkında tavsiyeler.

- Ben bir listeyim ve içinde bir [satır içi](https://example.org) linki var.
{% end %}

{% alert(edit=true) %}
Bir şeyin düzenlendiğini belirtir.

- Ben bir listeyim ve içinde bir [satır içi](https://example.org) linki var.
{% end %}

{% alert(fact=true) %}
Bazı ilginç olmayan gerçekler.

- Ben bir listeyim ve içinde bir [satır içi](https://example.org) linki var.
{% end %}

### Resimler ve videolar

Varsayıan olarak resimler ve videolar yuvarlatılmış köşeler ve gölge gibi bazı genel stillerle gelir. Bunları ince ayar yapmak için farklı değişken kombinasyonlarına sahip kısa kodlar kullanabilirsiniz.

Kullanılabilir değişkenler:

- `url`: Bir resmin URL'si.
- `url_min`: Bir resmin sıkıştırılmış sürümüne giden URL, orijinal resim üzerine tıklanarak açılabilir.
- `alt`: Alternatif metin, ekran okuyucuları ve mobilde resme basılı tutularak okunabilir.
- `full`: Resmi tam genişlikte göstermeyi zorlar.
- `start`: Resmi paragrafın başına yerleştirir ve boyutunu küçültür.
- `end`: Resmi paragrafın sonuna yerleştirir ve boyutunu küçültür.
- `pixels`: Ölçeklendirme için en yakın komşu algoritmasını kullanır, piksel sanatı keskin tutmak için yararlıdır.
- `transparent`: Yuvarlatılmış köşeleri ve gölgeyi kaldırır, şeffaflık içeren resimler için yararlıdır.
- `drop_shadow`: Kutu gölgesi yerine düşme gölgesi kullanır, şeffaflık içeren resimler için yararlıdır.
- `no_hover`: Üzerine gelindiğinde yakınlaştırmayı kaldırır.
- `spoiler`: Üzerine gelindiğinde/basıldığında resmi bulanıklaştırır, zengin hikaye içeren oyun ekran görüntüleri için yararlıdır.
- `spoiler`ın yanında `solid`: Bulanıklığı kaldırıp resmi tamamen gizler.

```jinja2
{{/* image(url="image.png", alt="Ben bir resimim", no_hover=true) */}}
```

<figure>
{{ image(url="https://i1.theportalwiki.net/img/2/23/Ashpd_blueprint.jpg", alt="Portal silahı yapım şablonu", no_hover=true) }}
<figcaption>Alternatif yazısı olan bir resim, ve üzerine gelindiğinde yakınlaştırma yok</figcaption>
</figure>

<figure>
{{ image(url="https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg", url_min="https://upload.wikimedia.org/wikipedia/commons/3/38/JPEG_example_JPG_RIP_010.jpg", alt="The gravestone of J.P.G.", no_hover=true) }}
<figcaption>Sıkıştırılmış versiyonu gösterilen, alternatif yazısı olan bir resim; ve üzerine gelindiğinde yakınlaştırma yok</figcaption>
</figure>

<figure>
{{ image(url="https://files.catbox.moe/lk7nee.jpg", alt="Portal Gun yapım şablonu", spoiler=true) }}
<figcaption>Alternatif yazısı olan bir resim, ve üzerine gelindiğinde/basıldığında resmin bulanıklığı kalkar</figcaption>
</figure>

Bundan öte, aşağıdaki URL bağlantılarını ekleyebilirsiniz. Bu bazı durumlarda daha kullanışlı olabilir, örneğin bu tür resimler Zola kısa kodlarına karşı herhangi bir Markdown editöründe normal şekilde görüntülenir, ve bazı kişiler bu yöntemi daha kolay bulabilir.

- `#full`: Resmi tam genişlikte göstermeyi zorlar.
- `#start`: Resmi paragrafın başına yerleştirir ve boyutunu küçültür.
- `#end`: Resmi paragrafın sonuna yerleştirir ve boyutunu küçültür.
- `#pixels`: Ölçeklendirme için en yakın komşu algoritmasını kullanır, piksel sanatı keskin tutmak için yararlıdır.
- `#transparent`: Yuvarlatılmış köşeleri ve gölgeyi kaldırır, şeffaflık içeren resimler için yararlıdır.
- `#drop-shadow`: Kutu gölgesi yerine düşme gölgesi kullanır, şeffaflık içeren resimler için yararlıdır.
- `#no-hover`: Üzerine gelindiğinde yakınlaştırmayı kaldırır.
- `#spoiler`: Üzerine gelindiğinde/basıldığında resmi bulanıklaştırır, zengin hikaye içeren oyun ekran görüntüleri için yararlıdır.
- `#spoiler`ın yanında `#solid`: Bulanıklığı kaldırıp resmi tamamen gizler.

<br />
<figure>

[![Toolbx kapak resmi](https://containertoolbx.org/assets/toolbx.gif#full#pixels#transparent#drop-shadow#no-hover)](https://containertoolbx.org)
<figcaption>Alternatif yazısı olan tam genişlikte bir resim, piksel sanatı işleme, düşme gölgesi ve yuvarlatılmış köşeler ile üzerine gelindiğinde yakınlaştırma yok</figcaption>
</figure>

<br />

![1966 Ford Mustang coupe beyazı](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/1966_Ford_Mustang_coupe_white_003.jpg/320px-1966_Ford_Mustang_coupe_white_003.jpg#start)
Resmin bu yazının yanında yerleştirilmesini inceleyin, `#start` ile bunu eşde edebilirsiniz. Eğer mobilde veya tarayıcınız yeteri kadar dar ise resim üstte kalacaktır.  
<small>*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur.*</small>  


Videolarda birkaç farklılık dışında her şey olduğu gibi geçerlidir: `no_hover` ve `url_min` değişkenleri mevcut değildir (Videoların üzerine gelince yakınlaşması aşırı sinir bozucu olurdu. Zaten tam yüklenene kadar sıkıştırılmış halde gelir, aksi halde yüklenmeleri çok uzun sürerdi).

Ek olarak aşağıdaki videolara özel [nitelikler](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes) ayarlanabilir:

- `autoplay`: Videoyu otomatik olarak oynatmaya başlar.
- `controls`: Ses seviyesi kontrolü, ileri geri sarma ve duraklatma/devam ettirme gibi video kontrollerini gösterir.
- `loop`: Video sona erdikten sonra tekrar oynatır.
- `muted`: Varsayılan olarak sesi kapatır.
- `playsinline`: Videonun varsayılan olarak tam ekran oynamasını engeller (tarayıcıya bağlıdır).

```jinja2
{{/* video(url="video.webm", alt="Merhaba,benim adım \"videocan\"", controls=true) */}}
```

<figure>
{{ video(url="https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0e/Duckling_preening_%2881313%29.webm/Duckling_preening_%2881313%29.webm.720p.vp9.webm", alt="Duckling preening", controls=true) }}
<figcaption>Yavru ördek tüylerini düzeltiyor</figcaption>
</figure>

### CRT

Hiç bir şeyi basitleştirmemesine bakmayın, kod bloklarının etrafına CRT benzeri bir efekt eklemesi bile yeteri kadar havalı!

```jinja2
{%/* crt() */%}
-> İçerik <-
{%/* end */%}
```

{% crt() %}

```
 _____________________________________________
|.'',        Public_Library_Halls         ,''.|
|.'.'',                                 ,''.'.|
|.'.'.'',                             ,''.'.'.|
|.'.'.'.'',                         ,''.'.'.'.|
|.'.'.'.'.|                         |.'.'.'.'.|
|.'.'.'.'.|===;                 ;===|.'.'.'.'.|
|.'.'.'.'.|:::|',             ,'|:::|.'.'.'.'.|
|.'.'.'.'.|---|'.|, _______ ,|.'|---|.'.'.'.'.|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|,',',',',|---|',|'|???????|'|,'|---|,',',',',|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|.'.'.'.'.|---|','   /%%%\   ','|---|.'.'.'.'.|
|.'.'.'.'.|===:'    /%%%%%\    ':===|.'.'.'.'.|
|.'.'.'.'.|%%%%%%%%%%%%%%%%%%%%%%%%%|.'.'.'.'.|
|.'.'.'.','       /%%%%%%%%%\       ','.'.'.'.|
|.'.'.','        /%%%%%%%%%%%\        ','.'.'.|
|.'.','         /%%%%%%%%%%%%%\         ','.'.|
|.','          /%%%%%%%%%%%%%%%\          ','.|
|;____________/%%%%%Spicer%%%%%%\____________;|
```

{% end %}

### Emojiler yok, stickerlar var :D
Bu tema ile gelen emoji kısakodu braz sıkıntılı olduğu için ben `extra.debug.no_emojis`i açtım. Bunun yerine aynı taslağın değiştirilmiş halini kullanan `stickers`'i yazdım. Emoji kısakodunun düzeltilip yerel dosyalarda vs çalışan hali yani.
Kullanılabilir değişkenler:

- `name`: Üstüne gelindiğinde çıkan etiket ismi
- `path`: Dosya konumu
- `big`: Stickerın daha büyük halini açıp kapatır

### Ses butonu
Komik bir üzerine gelme animasyonuna sahip işe yaramaz bir ses butonu yerleştirir. Çalışması için sayfa, bölüm veya yapılandırma düzeyinde `extra.audio_button` etkinleştirilmelidir.

```jinja2
{{/* audio(name="Yuppi :D", url="party-horn.mp3") */}}
```

Herkese merhaba! Ne yapmayı severim biliyor musunuz? Doğru bildiniz, {{ audio(name="Parti", url="party-horn.mp3") }} düzenlemeyi! (Aslında sevmem, sadece ses butonunu göstermek istedim. Zaten ayarlayacak kadar para yok bende.)

### YouTube

youtube-nocookie ile Youtube videosunu gömmeyi sağlar.

Kullanılabilir değişkenler:

- `autoplay`: Videonun otomatik olarak oynatılıp oynatılmayacağı.
- `start`: Videonun hangi saniyeden başlaması gerektiği.

```jinja2
{{/* youtube(id="0Da8ZhKcNKQ") */}}
```

{{ youtube(id="0Da8ZhKcNKQ") }}

### Vimeo

youtube-nocookie ile Vimeo videosunu gömmeyi sağlar.

Kullanılabilir değişkenler:

- `autoplay`: Videonun otomatik olarak oynatılıp oynatılmayacağı.

```jinja2
{{/* vimeo(id="906050015") */}}
```

{{ vimeo(id="906050015") }}

### SitWatch
Bir SitWatch videosunu gömmeyi sağlar.

```jinja2
{{/* sitwatch(id="zIAxJy9usBk") */}}
```

{{ sitwatch(id="zIAxJy9usBk") }}

### Mastodon
Bir Mastodon gönderisini gömmeyi sağlar.

Kullanılabilir değişkenler:

- `host`: Gönderinin bulunduğu instance. Ayarlanmazsa, sayfa/bölüm ön yüzü veya `config.toml` dosyasındaki `[extra.fediverse]` bölümünde ayarlanan değere geri dönecektir.
- `user`: Gönderen. Ayarlanmazsa, sayfa/bölüm ön yüzü veya `config.toml` dosyasındaki `[extra.fediverse]` bölümünde ayarlanan değere geri dönecektir.
- `id`: Gönderinin ID'si, gönderi URL'sinin sonunda bulunur.

```jinja2
{{/* mastodon(host="vmst.io", user="daudix", id="113375516179365586") */}}
```

{{ mastodon(host="vmst.io", user="daudix", id="113375516179365586") }}

## HTML Bileşenleri

### Tanım Listesi
```html
<dl>
<dt>Birşey</dt>
<dd>Ve açıklaması</dd>
</dl>
```

<dl>
<dt>İsim</dt>
<dd>Godzilla</dd>
<dt>Doğum</dt>
<dd>1952</dd>
<dt>Doğum Yeri</dt>
<dd>Japonya</dd>
<dt>Renk</dt>
<dd>Yeşil</dd>
</dl>

### Form Bileşenleri
```html
<input type="checkbox" />
<label>İşaret kutusu</label>
```

<ul>
  <li>
    <input type="checkbox" />
    <label>&nbsp;Süt</label>
  </li>
  <li>
    <input type="checkbox" />
    <label>&nbsp;Yumurta</label>
  </li>
  <li>
    <input type="checkbox" />
    <label>&nbsp;Un</label>
  </li>
  <li>
    <input type="checkbox" checked />
    <label>&nbsp;Kahve</label>
  </li>
  <li>
    <input type="checkbox" disabled />
    <label>&nbsp;Yanıcı limonlar (nasıl yanıyorsunuz yaw)</label>
  </li>
</ul>

`switch` sınıfı ile:

```html
<input class="switch" type="checkbox" />
<label>İşaret kutusu</label>
```

<ul>
  <li>
    <input class="switch" type="checkbox" />
    <label>&nbsp;Süt</label>
  </li>
  <li>
    <input class="switch" type="checkbox" />
    <label>&nbsp;Yumurta</label>
  </li>
  <li>
    <input class="switch" type="checkbox" />
    <label>&nbsp;Un</label>
  </li>
  <li>
    <input class="switch" type="checkbox" checked />
    <label>&nbsp;Kahve</label>
  </li>
  <li>
    <input class="switch" type="checkbox" disabled />
    <label>&nbsp;Yanıcı limonlar (bomba seçeneği)</label>
  </li>
</ul>

`switch` ve `big` sınıfları ile:

```html
<input class="switch big" type="checkbox" />
<label>İşaret kutusu</label>
```

<ul>
  <li>
    <input class="switch big" type="checkbox" />
    <label>&nbsp;Süt</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" />
    <label>&nbsp;Yumurta</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" />
    <label>&nbsp;Un</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" checked />
    <label>&nbsp;Kahve</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" disabled />
    <label>&nbsp;Yanıcı limonlar <small>(AAAAAAA)</small></label>
  </li>
</ul>

`radio` sınıfı ile:

```html
<input type="radio" name="test" />
<label>Radyo</label>
```

<ul>
  <li>
    <input type="radio" name="test" />
    <label>&nbsp;Süt</label>
  </li>
  <li>
    <input type="radio" name="test" />
    <label>&nbsp;Yumurta</label>
  </li>
  <li>
    <input type="radio" name="test" />
    <label>&nbsp;Un</label>
  </li>
  <li>
    <input type="radio" name="test" checked />
    <label>&nbsp;Kahve</label>
  </li>
  <li>
    <input type="radio" name="test" disabled />
    <label>&nbsp;Yanıcı limonlar (panelcilerin attığı büyük bomba, Hasan hocam iyi bilir nasıl göründüklerini <small>SDFGFDSADFGHGFD</small>)</label>
  </li>
</ul>

`color` sınıfı ile:

```html
<label>Renk:</label>
<input type="color" value="#000000" />
```

<label for="color">Renk:</label>
<input id="color" type="color" value="#b57edc" />

<label for="color">Kapalı:</label>
<input id="color" type="color" value="#b57edc" disabled />

`range` sınıfı ile:

```html
<input type="range" max="100" value="33">
```

<input type="range" max="100" value="33" id="range">
<!-- For the demo purposes only -->
<figcaption><small id="range-value"></small></figcaption>
<!-- End -->

## Figür açıklamaları
```markdown
<figure>
  -> İçerik (figür) <-
  <figcaption>Yukarıdaki içeriğin(figürün) açıklaması</figcaption>
</figure>
```

<figure>

  ![The Office](https://i.ibb.co/MPDJRsT/ImMAXM3.png)
  <figcaption>Stanley'ın çalıştığı Ofis, sarı zemin ve bej duvarlara sahip.</figcaption>
</figure>

## Akordiyon
Github'daki `README.md` yazan arkadaşlara gelsin :D
```markdown
<details>
  <summary>Akordiyon başlığı</summary>
  -> İçerik burada <-
</details>
```

<details>
  <summary>Akordiyonun içeriğini göster</summary>

  Komik miydi? <small>Komik olmadığını biliyordum, korkunç bir kelime oyunuydu zaten.</small>
  ![Piyano Akordiyonu](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PianoAccordeon.jpg/916px-PianoAccordeon.jpg#transparent#no-hover)
</details>

## Küçük Yazı
```html
<small>Yüksek sesle düşünme, dikkat çekmeyen küçük, sevimli bir metin.</small>
```

<small>Yüksek sesle düşünme, dikkat çekmeyen küçük, sevimli bir metin.</small>

## Kısaltmalar
```html
<abbr title="American Standard Code for Information Interchange (Amerikan Standart Bilgi Değişim Kodu)">ASCII</abbr>
```

<abbr title="American Standard Code for Information Interchange (Amerikan Standart Bilgi Değişim Kodu)">ASCII</abbr> sanatını beğenirim.

## Yan Yorum
```html
<aside>
-> İçerik burada <-
</aside>
```

<aside>

Tüy ve parşömen. Yazı yazmak için kullanılırlardı.

![Quill and a parchment](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D7%A7%D7%9C%D7%A3%2C_%D7%A0%D7%95%D7%A6%D7%94_%D7%95%D7%93%D7%99%D7%95.jpg/326px-%D7%A7%D7%9C%D7%A3%2C_%D7%A0%D7%95%D7%A6%D7%94_%D7%95%D7%93%D7%99%D7%95.jpg)
</aside>

Bir kuş tüyü (tercihen büyük bir kuşun birincil kanat tüyü) kullanılarak yapılmış bir yazı aracıdır. Kuş tüyleri, dip kalem, metal uçlu kalem, dolma kalem ve nihayetinde tükenmez kalemin icadından önce mürekkeple yazmak için kullanılıyordu.  
Önceki kamış kalem (ve daha sonra batırmalı kalem) ile olduğu gibi, bir kuş tüyünün dahili bir mürekkep haznesi yoktur ve bu nedenle yazma sırasında periyodik olarak bir mürekkep kuyusuna batırılması gerekir. El kesimi kaz tüyü artık kaligrafi aracı olarak nadiren kullanılır çünkü birçok kağıt artık odun hamurundan türetilmiştir ve bir kuş tüyünü hızla aşındırır. Ancak, bazı yazıcılar için hala tercih edilen araçtır; çünkü kuş tüyeleri, çelik kalemlerden daha keskin bir vuruş ve daha fazla esneklik sağlar.

Bu bölme tıpkı `#start` veya `#end` ile kullanılan resimler gibi tarayıcınız yeteri kadar geniş değilse üstte/altta bulunur.

## Klavye Tuşu
```html
<kbd>⌘ Command</kbd>.
```

Klavye düzenini değiştirmek için <kbd>⌘ Super</kbd> + <kbd>Space</kbd> tuşlarına basın. Onlara basmadan önce <kbd>bana</kbd> da basın :D

## Mark Text
```html
<mark>İşaretlenmiş yazı</mark>
```

Bir şey diyeyim mi? Çok <mark>önemli</mark> bir şey söyleyeceğim, o kadar <mark>önemli</mark> ki kelimeleri **kalın**laştırmak bile yetmez söylediklerime.

## Yazı Silme ve Ekleme
```html
<del>Silinmiş bir şey</del> ve <ins>Eklenmiş bir şey</ins>
```

<del>Silinmiş bir şey</del> ve <ins>Eklenmiş bir şey</ins>

## İlerleme Çubuğu
```html
<progress></progress>
```
Boş bir ilerleme çubuğu <small>gerçi ilerleme de yok ama</small>.
<progress></progress>

```html
<progress value="33" max="100"></progress>
```
<progress value="33" max="100"></progress>
Yüzde 33 dolu bir ilerleme çubuğu. Sanırım. Belki aslında ilerlemenin yüzde 67'si boştur ve onu göstermeye çalışıyordur, kim bilir?

## Örnek Çıktı
```html
<samp>Örnek Çıktı</samp>
```
<samp>Örnek Çıktı</samp>

## Inline Quotation
```html
<q>Birisi bir şey söyledi</q>
```

boş yapma sesleri vs. vs.  
<q>İç içe alıntı</q>  
*hmm*.

## <del>Unarticulated Annotation</del> <ins>Alt çizgi</ins>
<u>Unarticulated Annotation</u>'ın Türkçe anlamı... neydi lan bunun Türkçesi?  
Neyse, şimdilik "<u>Alt çizgi</u>" diyeyim.

```html
<u>Gramer hataları</u>
```
<u>Vibing</u> yaparken <u>TikTok</u> <u>fam</u> ile cap-free boomerang üzerinde <u>sus</u> drip'i yeğleyin adamım. <small>(Bu cümlede gramer hataları ve kendini <i><abbr title="Havalılık, sanırım.">hawli</abbr></i> sanan bir malın sözleri olabilir.)</small>

## Başlık görünümlü yazılar
```html
<strong class="title">Başlık (kesinlikle riyal) 🤑</strong>
```

<strong class="title">Başlık (kesinlikle riyal) 🤑</strong>

## Dışa Çıkan Bağlantılar
```html
<a class="external" href="https://example.org">Dışa Çıkan Bağlantı</a>
```
<a class="external" href="https://example.org">Dışa Çıkan Bağlantı</a>
<small>bu simgeyi fark ettin mi? Evet, tahmin ettiğin gibi sitenin dışına çıkan bir bağlantı bu. Sen nasıl bu kadar zeki oluyorsun be?</small>

## Spoilerlar

```html
<span class="spoiler">Gizlenmek istenen içerik</span>
```
Siquyit geym 4 için spoilerlar: <span class="spoiler">bebek zaengin oldu ve şimdi bizden daha iyi bir hayatı var</span>  
\:O Biliyorum, çok çılgın bir şey değil mi bu?

With `solid` class:

```html
<span class="spoiler solid">Gizlenmek istenen içerik</span>
```
Siquyit geym 4 için spoilerlar: <span class="spoiler solid">bebek zaengin oldu ve şimdi bizden daha iyi bir hayatı var</span>
\:O Biliyorum, çok çılgın bir şey değil mi bu?

## Butonlar
```html
<div class="buttons">
  <a href="#top">Başa Dön</a>
  <a class="suggested external" href="https://example.org">menemen</a>
</div>
```

<div class="buttons">
  <a href="#top">Başa Dön</a>
  <a class="suggested external" href="https://example.org">menemen</a>
</div>

`centered` ve `big` sınıfları ile:

```html
<div class="buttons centered big">
  <button class="suggested">Menemen satın al…</button>
</div>
```

<div class="buttons centered big">
  <button class="suggested">Menemen satın al…</button>
</div>

Kendi başına:

```html
<button class="suggested">Menemen satın al…</button>
<a class="button external" href="https://example.org">amogusgusgus</a>
```

<button class="suggested">Menemen satın al…</button>
<a class="button external" href="https://example.org">amogusgusgus</a>

Kapatılmış:

```html
<button disabled class="suggested">Menemen satın al…</button>
<a aria-disabled="true" class="button external" href="https://example.org">amogusgusgus</a>
```

<button disabled class="suggested">Menemen satın al…</button>
<a aria-disabled="true" class="button external" href="https://example.org">amogusgusgus</a>

[^1]: Dipnotlar üzerinde ***Markdown*** kullanılabilir.