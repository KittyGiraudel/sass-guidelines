
## Architektura

Układanie struktury projektu wykorzystującego CSS jest prawdopodobnie jednym z najtrudniejszych zadań, jakie można napotkać w czasie zajmowania się takim projektem. Utrzymanie architektury spójnej i mającej znaczenie jest nawet trudniejsze.

Na szczęście, jedną z kluczowych zalet używania preprocesora CSS jest możliwość podziału bazy kodu na wiele plików bez spadku wydajności (czego skutkiem jest wykorzystywanie klasycznego `@import` w CSSie). Dzięki gruntownym zmianom w dyrektywie `@import`, jakie wniósł Sass, jej wykorzystywanie do dzielenia kodu na wiele plików w fazie programowania jest obecnie absolutnie bezpieczne (a nawet zalecane). Rezultatem jest bowiem pojedynczy plik CSS, który użyty zostanie w fazie produkcji.

Niezbędnym, nawet dla małych projektów, jest także podział na foldery. Analogicznie, nie wkładamy przecież wszystkich dokumentów papierowych na jeden stos, w jedno miejsce. Używa się do tego segregatorów, teczek; jednej na dokumenty dotyczące domu, jednej na papiery z banku, rachunki, itd. Nie ma absolutnie żadnego powodu by robić to inaczej w stosunku do projektu w CSSie. Podział kodu na odpowiednio nazwane foldery pozwoli nam na łatwiejsze dotarcie do potrzebnej nam części kodu wtedy, gdy do niego będziemy wracali.

Dostępnych jest obecnie wiele metod kategoryzacji kodu dla projektów w CSSie: [OOCSS](http://oocss.org/), [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), podobne do tego w [Bootstrapie](https://getbootstrap.com/), czy w [Foundation](https://get.foundation/). Wszystkie z nich mają swoje cechy, zalety i wady.

Ja osobiście korzystam z podejścia, które zdaje się być zbliżone do tego ujętego w [SMACSS](http://smacss.com/), stworzonego przez [Jonathana Snooka](https://snook.ca/). Opiera się ono przede wszystkim na prostocie.

<div class="note">
  <p>Wybór architektury jest, co do zasady, uzależniony od charakteru projektu. Dostosuj swoje podejście do tego w zależności od Twoich potrzeb.</p>
</div>

**Dalsze informacje:**

* [A Look at Different Sass Architectures](https://www.sitepoint.com/look-different-sass-architectures/)
* [An Introduction to OOCSS](https://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

### Komponenty

Istnieje olbrzymia różnica pomiędzy czymś, co *działa*, a tym co *działa dobrze*. Jak już to zostało wielokrotnie powiedziane, CSS jest dosyć nieuporządkowanym językiem <sup>[potrzebne źródło]</sup>. Im mniej mamy CSSu, tym lepiej. Nie chcemy przecież zajmować się megabajtami kodu pisanego w CSSie. Warto więc pomyśleć o interfejsie jako o kolekcji komponentów, dzięki czemu nasze arkusze stylów będą nie tylko bardziej przejrzyste, lecz także bardziej wydajne.

Komponenty mogą reprezentować wszystko, o tyle o ile:

* spełniają one tylko jedno zadanie,
* mogą być wielokrotne użyte, w wielu miejscach w projekcie,
* są niezależne.

Na przykład, formularz wyszukiwania powinien być traktowany jako komponent. Powinien on być przeznaczony do wielokrotnego użytku, w różnych miejscach, na różnych stronach i w różnych sytuacjach. Jego funkcjonalność i wygląd nie powinny zależeć od jego miejsca w DOMie (czy to będzie nagłówek, panel boczny, stopka…).

Zdecydowana większość elementów interfejsu może być traktowana jako małe elementy i jestem wielkim zwolennikiem tego poglądu. Pomaga on nie tylko zmniejszyć ilość CSSu potrzebnego dla całego projektu, ale także ułatwia utrzymanie całości kodu w porządku.

### Wzór 7-1

Wróćmy na chwilę do kwestii architektury. W swoich projektach korzystam zazwyczaj z czegoś, co nazywam *wzorem 7-1*: 7 folderów, 1 plik. W dużym skrócie, opiera się to na skategoryzowaniu wszystkich plików cząstkowych (partials) w 7 różnych folderów i na jednym pliku, który znajduje się w folderze głównym (zazwyczaj nazywam ten plik `main.scss`) i importuje wszystkie te części składowe do jednego arkusza stylów.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

I oczywiście:

* `main.scss`

<div class="note">
  <p>Chcąc wykorzystać wzór 7-1 w praktyce, dostępny jest gotowy <a href="https://github.com/KittyGiraudel/sass-boilerplate">boilerplate</a> na GitHubie. Powinien on zawierać wszystko, co będzie potrzebne do rozpoczęcia nowego projektu.</p>
</div>

{% include images/wallpaper.html %}

Co do zasady, możemy tu mówić o czymś takim:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Pliki są nazywane według tej samej konwencji, o której była mowa wyżej: do rozdzielania używany jest myślnik.</p>
</div>

#### Folder base

W folderze `base/` znajduje się wszystko to, co możemy nazwać "gotowcem" dla naszego projektu. Możemy tam umieścić plik odpowiadający za reset podstawowych reguł CSSa, reguły dotyczące typografii i plik definiujący podstawowe style dla powszechnie używanych elementów HTMLa (który ja zazwyczaj nazywam `_base.scss`).

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

<div class="note">
  <p>Jeśli Twój projekt wykorzystuje <em>dużo</em> animacji w CSSie, rozważ dodanie tu pliku <code>_animations.scss</code> zawierającego definicje <code>@keyframes</code> dla wszystkich Twoich animacji. Jeśli natomiast tych animacji nie ma zbyt wiele, pozostaw te definicje przy selektorach, które z nich korzystają.</p>
</div>

#### Folder layout

Folder `layout/` zawiera wszystko, co odpowiada za rozmieszczenie elementów na stronie czy w aplikacji. Folder ten składać się może z arkuszy stylów przeznaczonych dla głównych partii strony (nagłówek, stopka, nawigacja, pasek boczny…), grid systemu czy nawet reguł CSS dla wszystkich formularzy.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>Folder <code>layout/</code> może być także nazwany folderem <code>partials/</code>, w zależności od upodobania.</p>
</div>

#### Folder components

Dla mniejszych komponentów stworzony został folder `components/`. Podczas gdy `layout/` odpowiada style o charakterze *makro* (definiujące globalną strukturę), `components` kładzie nacisk na widżety. Zawiera on wszystkiego rodzaju moduły, takie jak przyciski, karuzele, rozwijane menu, itd. Z reguły w folderze `components/` znajduje się wiele plików, dlatego że cała strona/aplikacja powinna się składać właśnie z takich drobnych modułów.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>Folder <code>components/</code> może być także nazwany folderem <code>modules/</code>, w zależności od upodobania.</p>
</div>

#### Folder pages

Style związane z konkretnymi podstronami lepiej umieszczać w folderze `pages/`, w pliku o nazwie określającej konkretną podstronę. Dla przykładu, popularnym jest rozwiązanie skupiania szczegółowych reguł, mających zastosowanie jedynie dla strony głównej w pliku `_home.scss` w folderze `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>W zależności od procesu pracy nad projektem, pliki te mogą być odseparowane celem uniknięcia scalania ich z innymi do jednego arkusza stylów.</p>
</div>

#### Folder themes

W przypadku większych stron i aplikacji, często spotyka się osobne motywy. Jest wiele sposobów radzenia sobie z nimi, jednak ja osobiście preferuję przechowywać je wszystkie w folderze `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Zależy to w wysokim stopniu od charakteru danego projektu, dlatego też niewykluczone jest, że dla wielu celów taki folder nie będzie w ogóle przydatny.</p>
</div>

#### Folder utils

Folder `utils/` zbiera wszystkie narzędzia i funkcje pomocnicze Sassa, używane w ramach projektu. Każda globalna zmienna, funkcja, mixin czy placeholder powinny się w nim znajdować.

Podstawową zasadą dla tego folderu jest to, by żaden ze znajdujących się w nim pliku nie powodował ani jednej dodatkowej linii do wynikowego, skompilowanego arkusza CSS. Jest to bowiem nic innego, niż zbiór tzw. pomocników.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss`

Pracując nad dużym projektem wykorzystującym wiele narzędzi, ciekawym rozwiązaniem zdaje się być grupowanie ich według przeznaczenia, a nie typu, na przykład typografia (`_typography.scss`), style (`_theming.scss`), itp. Każdy z tych plików powinien wówczas zawierać wszystkie powiązane narzędzia pomocnicze: zmienne, funkcje, mixiny i placeholdery. Ułatwi to bowiem czytanie i zarządzanie później tym kodem, zwłaszcza gdy pliki stają się co raz większe.

<div class="note">
  <p>Folder <code>utils/</code> może być także nazwany folderem <code>utilities/</code> lub <code>helpers/</code>, w zależności od upodobania.</p>
</div>

#### Folder vendors

Wreszcie, wiele projektów skorzysta także z obecności folderu `vendors/`, który to zawierać może wszystkie pliki CSS z różnych zewnętrznych bibliotek i frameworków, takich jak Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered i innych. Umieszczanie ich wszystkich w ramach tego samego folderu jest sposobem na zasygnalizowanie, że "nie ja to napisałem, pochodzi to z zewnątrz i nie należy to do mojej odpowiedzialności".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

W przypadku gdy wymagane jest nadpisanie jakiejkolwiek z sekcji danego pliku zewnętrznego, zalecam utworzenie ósmego folderu nazwanego `vendors-extensions/`, w którym pliki zawierające reguły nadpisujące powinny nazywać się tak jak te pliki, które są nimi nadpisywane.

Na przykład, `vendors-extensions/_bootstrap.scss` będzie plikiem zawierającym wszystkie reguły CSS, których przeznaczeniem jest zmodyfikowanie niektórych ze standardowych dla Bootstrapa reguł. Służy to uniknięciu edytowania oryginalnych plików zewnętrznych, co samo w sobie nie należy do najlepszych pomysłów.

#### Główny plik

Główny plik (zazwyczaj nazywany jako `main.scss`) powinien być jedynym plikiem Sassa z całej bazy kodu, którego nazwa nie rozpoczyna się od podkreślnika. Plik ten nie powinien zawierać nic poza deklaracjami `@import` i komentarzami.

Pliki powinne być importowane z uwzględnieniem folderów, w których się znajdują, jeden po drugim w następującej kolejności:

1. `utils/`
2. `vendors/`
3. `base/`
4. `layout/`
5. `components/`
6. `pages/`
7. `themes/`

Celem zapewnienia lepszej przejrzystości, plik główny powinien respektować poniższe zasady:

* jeden plik dla każdej deklaracji `@import`,
* jeden `@import` na linię,
* bez nowej linii pomiędzy importami z tego samego folderu,
* bez nowej linii po ostatnim imporcie z danego folderu,
* rozszerzenie pliku i poprzedzający w nazwie podkreślnik powinny być pominięte.

{% include snippets/architecture/02/index.html %}

Istnieje także inne podejście do importowania plików cząstkowych (partials), które wydaje mi się równie poprawne. W tym przypadku z jednej strony plik główny zdaje się być bardziej czytelny, z drugiej zaś jego aktualizowanie może być nieco bardziej utrudnione. Zgodnie z tą metodą, plik główny powinien respektować poniższe założenia:

* jeden `@import` na folder,
* importowane pliki pod `@import`,
* każdy plik na swojej linii,
* pusta linia po ostatnim imporcie dla danego folderu,
* rozszerzenie pliku i poprzedzający w nazwie podkreślnik powinny być pominięte.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>Aby nie importować pojedynczo każdego z plików, powstało rozszerzenie do Ruby Sass zwane <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, które umożliwia wykorzystywanie tzw. glob patterns w <code>@import</code> Sassa, takich jak <code>@import "components/*"</code>.</p>
  <p>Niemniej jednak nie zalecam korzystania z tego rozwiązania, bowiem importuje ono pliki według porządku alfabetycznego, co nie zawsze jest oczekiwanym rezultatem. Zwłaszcza w przypadkach, gdy mamy do czynienia z językiem wrażliwym na kolejność plików, jakim niewątpliwie jest CSS.</p>
</div>

### Plik wstydu

Pojawił się ostatnio interesujący pomysł, którego twórcami uznać można [Harry’ego Robertsa](https://csswizardry.com), [Dave'a Ruperta](https://daverupert.com) and [Chrisa Coyiera](https://css-tricks.com). Zakłada on mianowicie umieszczenie wszelkich deklaracji CSSa, haków i rzeczy, z których nie jesteśmy do końca dumni, w tzw. *pliku wstydu*. Ten plik, przewrotnie nazwany `_shame.css`, importowany jest po wszelkich innych plikach, na samym końcu arkusza stylów.

{% include snippets/architecture/04/index.html %}

**Dalsze informacje:**

* [shame.css - full .net interview](https://csswizardry.com/2013/04/shame-css-full-net-interview/)
