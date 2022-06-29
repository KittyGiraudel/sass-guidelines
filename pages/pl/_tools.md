
## Narzędzia

Jedną z niewątpliwych zalet preprecessora CSS tak popularnego jak Sass jest to, że dostępny jest cały ekosystem frameworków, pluginów, bibliotek i narzędzi. Po 8 latach od powstania, zbliżamy się do momentu w którym [wszystko co może być napisane w Sassie, zostało napisane w Sassie](https://kittygiraudel.com/2014/10/27/rethinking-atwoods-law/).

Mimo to, moim zdaniem należy ograniczyć liczbę zależności do ścisłego minimum. Zarządzanie zależnościami jest swoistym piekłem, w którym na pewno nikt nie chciałby się znaleźć. Poza tym, potrzeba korzystania z zewnętrznych zależności, w odniesieniu do Sassa, jest mała, jeśli nie znikoma.

### Compass

[Compass](http://compass-style.org/) jest jednym z frameworków dostępnych dla Sassa. Zaprojektowany został przez [Chrisa Eppsteina](https://twitter.com/chriseppstein), jednego z dwóch głównych twórców Sassa. Jest on obecnie dosyć popularny i nie widzę powodu, dla którego miało by się to w najbliższym czasie zmienić.

Osobiście nie korzystam już z Compassa. Głównym tego powodem jest fakt, że powoduje on znaczne jego spowolnienie. Ruby Sass jest powolne samo w sobie, więc dodawanie więcej Ruby i Sassa ponad to wcale nie pomaga.

Rzecz w tym, że tak naprawdę używa się bardzo małego procenta całej funkcjonalności tego frameworka. Compass jest olbrzymi. Mixiny dla zapewnienia kompatybilności pomiędzy przeglądarkami to tylko wierzchołek góry lodowej. Funkcje matematyczne, funkcje pomagające z obrazkami, spriting… Compass dodaje bardzo dużo funkcjonalności.

Niestety, można powiedzieć że to są tylko słodycze, a naprawdę brak jest jakiejś *zabójczej* funkcjonalności. Wyjątkiem może być funkcja budowania sprite’ów, która jest *naprawdę świetna*, lecz [Grunticon](https://github.com/filamentgroup/grunticon) i [Grumpicon](http://grumpicon.com/) robią to równie dobrze i mają ponadto tą zaletę, że można je dołączyć do zautomatyzowanego procesu budowania (jeśli z takiego korzystamy).

W każdym bądź razie, w żadnym wypadku nie zabraniam używania Compassu, chociaż też go nie polecam, zwłaszcza że nie jest on kompatybilny z LibSass (nawet jeśli pewne zamiary zostały w tym kierunku poczynione). Jeśli okazuje się on być w danej sytuacji pomocny, w porządku, ale nie wydaje mi się żeby jego zalety przewyższały jego wady.

<div class="note">
  <p>Ruby Sass jest obecnie gruntownie optymalizowany i prace te są ukierunkowane w szczególności na rozbudowane style, z wieloma funkcjami i mixinami. Wydajność i szybkość kompilacji powinna zostać znacznie poprawiona, dzięki czemu Compass i inne frameworki nie będą tak bardzo spowalniać Sassa.</p>
</div>

**Dalsze informacje:**

* [Sass Frameworks: Compass or Bourbon](https://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Why I don't use Compass anymore](https://www.sitepoint.com/dont-use-compass-anymore/)
* [Is Compass to Sass with jQuery is to JavaScript?](https://www.sitepoint.com/compass-sass-jquery-javascript/)

### Systemy gridów

Pomijanie kwestii systemów gridów jest w dobie Responsive Web Designu obecnie niemożliwe. Aby sprawić, by design wyglądał spójnie i poprawnie na urządzeniach o różnych rozmiarach, stosujemy różnego rodzaju systemy "kratek", zwanych gridami, odpowiednio rozkładające wszystkie elementy. Z kolei aby uniknąć potrzeby ręcznego pisania takiego systemu za każdym razem od nowa, niektórzy wspaniali ludzie postanowili udostępnić ich rozwiązania i sprawili, że są one dostęne do wielokrotnego użytku.

Powiedzmy sobie jednak szczerze: nie jestem wielkim fanem systemów gridów. Oczywiście, dostrzegam ich potencjał, jednak zdecydowana większość z nich jest zbyt skomplikowana i rozbudowana, a tak naprawdę używa się ich do rysowania czerwonych kolumn na białych tłach w trakcie prezentacji designerów. Czy ktoś ostatnio pomyślał – *wreszcie mogę zbudować grid dla kolumn 2-5-3.1-π*? Właśnie, nikt. Z tego też powodu w większości przypadków wystarczy proste rozwiązanie oparte o system 12 kolumn, nic nadzwyczajnego.

Korzystając z frameworków, takich jak [Bootstrap](https://getbootstrap.com/) czy [Foundation](https://get.foundation/), taki system gridów jest najprawdopodobniej już dołączony i to z tego rozwiązania polecam korzystać, zamiast dołączać do projektu jakąś kolejną zależność.

Jeśli nie jesteśmy przywiązani do określonego frameworku, mam dobrą wiadomość – dostępne są obecnie naprawdę dobre, oparte na Sassie, systemy gridów: [Susy](https://www.oddbird.net/susy/) i [Singularity](https://github.com/at-import/Singularity). Oba zapewniają funkcjonalność znacznie wykraczającą poza popularne potrzeby, więc wybierając jeden z nich można mieć pewność, że spełni on swoje zadanie we wszelkich możliwych, nawet tych najbardziej egzotycznych, sytuacjach. Moim zdaniem Susy ma trochę lepszą społeczność wokół siebie, ale to tylko moje zdanie.

Można też spróbować czegoś bardziej przyziemnego, choćby [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). W każdym bądź razie, wybór nie będzie miał olbrzymiego wpływu na styl kodu, więc swoboda decyzji należy tylko i wyłącznie do autora kodu.

**Dalsze informacje:**

* [Build Web Layouts Easily with Susy](https://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](https://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](https://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap’s Grid System vs Susy: a Comparison](https://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](https://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](https://www.sitepoint.com/creative-grid-system-sass-calc/)

### SCSS-lint

Prześwietlanie (linting) kodu jest zagadnieniem o bardzo dużej wadze. Zazwyczaj podążanie za sprawdzonymi wytycznymi, m.in. określonymi w tym przewodniku, redukuje ilość pomyłek w kodzie. Nie zapominajmy jednocześnie, że każdemu zdarzają się błędy i zawsze będzie coś do poprawki. Można więc śmiało stwierdzić, że linting kodu jest równie ważny co odpowiednie komentowanie go.

[SCSS-lint](https://github.com/causes/scss-lint) jest narzędziem, które pomaga w utrzymaniu plików SCSS w czystości i zapewnia ich czytelność. Jest ono w pełni konfigurowalne i jednocześnie bardzo proste w integracji z innymi narzędziami.

Na całe szczęście, rekomendacje SCSS-linta są w wysokim stopniu zbliżone do tych opisanych w tym przewodniku. Aby skonfigurować SCSS-lint w pełnej zgodności z Sass Guidelines, zalecam następujące jego ustawienia:

{% include snippets/tools/01/index.html %}

<div class="note">
  <p>Chcąc dołączyć SCSS-lint do obecnego procesu budowania w Gruncie, dostępny jest plugin do Grunta o nazwie <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Poza tym, chłopaki z <a href="https://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat…) pracują obecnie nad <a href="https://houndci.com/">Hound</a>, który współpracuje z SCSS-lint i jemu podobnymi</p>
</div>

**Dalsze informacje:**

* [Clean Up your Sass with SCSS-lint](https://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](https://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](https://davidtheclark.com/scss-lint-styleguide/)
