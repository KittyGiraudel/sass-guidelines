---
layout: default
language: pl
---

# O autorze

Nazywam się [Hugo Giraudel](http://hugogiraudel.com). Jestem front-end developerem z Francji, który zamierza przeprowadzić się do Berlina. Piszę w Sassie już od ponad dwóch lat i jestem autorem wielu projektów związanych z Sassem, takich jak [SassDoc](http://sassdoc.com) i [Sass-Compatibility](http://sass-compatibility.github.io).

Napisałem także kilka bibliotek w Sassie:
[SassyJSON](https://github.com/HugoGiraudel/SassyJSON), [SassyLists](http://sassylists.com), [SassySort](https://github.com/HugoGiraudel/SassySort), [SassyCast](https://github.com/HugoGiraudel/SassyCast), [SassyMatrix](https://github.com/HugoGiraudel/SassyMatrix), [SassyBitwise](https://github.com/HugoGiraudel/SassyBitwise), [SassyIteratorsGenerators](https://github.com/HugoGiraudel/SassyIteratorsGenerators), [SassyLogger](https://github.com/HugoGiraudel/SassyLogger), [SassyStrings](https://github.com/HugoGiraudel/SassyStrings) i [SassyGradients](https://github.com/HugoGiraudel/SassyGradients).

<div class="button-wrapper">
  <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="button">
    {% include icons/twitter.html %}
    Napisz do mnie na Twitterze
  </a>
</div>











# Pomoc w tworzeniu

Sass Guidelines jest darmowym projektem, którym zajmuję się w swoim wolnym czasie. Wymaga on ode mnie dużo poświęcenia by stale go aktualizować, dokładnie dokumentować i podnosić jego wartość merytoryczną. Będzie mi bardzo miło, jeśli Ci się spodoba!

Jeśli chcesz uczestniczyć w jego współtworzeniu, możesz tweetnąć o nim albo w dowolny inny sposób komuś o nim powiedzieć. Gdybyś zauważył jakiś błąd, choćby literówkę – byłoby świetnie, gdybyś mógł otworzyć issue czy zrobić pull-request na [repozytorium projektu na Githubie](https://github.com/HugoGiraudel/sass-guidelines)!

I ostatnia rzecz, choć nie mniej ważna: jeśli spodoba Ci się ten przewodnik, albo jeśli uznasz go za przydatnego dla Twojego zespołu, proszę byś rozważył jego wsparcie!

<div class="button-wrapper">
  <a href="https://gum.co/sass-guidelines" target="_blank" class="button">
    {% include icons/dollar.html %} 
    Wesprzyj Sass Guidelines
  </a>
  {% capture tweet %}{{ site.title }}, {{ site.description }} by @{{ site.twitter_username }} –{% endcapture %}
  <a href="https://twitter.com/share?text={{ tweet | cgi_escape }}&url={{ site.url }}" target="_blank" class="button">
    {% include icons/twitter.html %}
    Tweetnij o Sass Guidelines
  </a>
</div>











# Spis treści

* [O autorze](#o-autorze)
* [Pomoc w tworzeniu](#pomoc-w-tworzeniu)
* [O Sass-ie](#o-sassie)
  * [Ruby Sass czy LibSass](#ruby-sass-czy-libsass)
  * [Sass czy SCSS](#sass-czy-scss)
  * [Inne preprocesory](#inne-preprocesory)
* [Wprowadzenie](#wprowadzenie)
  * [Czemu służy ten przewodnik](#czemu-suy-ten-przewodnik)
  * [Zastrzeżenie](#zastrzeenie)
  * [Kluczowe reguły](#kluczowe-reguy)
* [Składnia i formatowanie](#skadnia-i-formatowanie)
  * [Ciągi znaków](#cigi-znakw)
  * [Liczby](#liczby)
    * [Zera](#zera)
    * [Jednostki](#jednostki)
    * [Obliczenia](#obliczenia)
    * [Liczby magiczne](#liczby-magiczne)
  * [Barwy](#barwy)
    * [Formaty barw](#formaty-barw)
    * [Barwy i zmienne](#barwy-i-zmienne)
    * [Rozjaśnianie i przyciemnianie barw](#rozjanianie-i-przyciemnianie-barw)
  * [Listy](#listy)
  * [Mapy](#mapy)
    * [Debugowanie map Sassa](#debugowanie-map-sassa)
  * [Reguły dotyczące CSSa](#reguy-dotyczce-cssa)
  * [Sortowanie deklaracji](#sortowanie-deklaracji)
  * [Zagnieżdżanie selektorów](#zagniedanie-selektorw)
    * [Generalna zasada](#generalna-zasada)
    * [Wyjątki](#wyjtki)
* [Konwencje nazw](#konwencje-nazw)
  * [Stałe](#stae)
  * [Przestrzenie nazw](#przestrzenie-nazw)
* [Komentarze](#komentarze)
  * [Pisanie komentarzy](#pisanie-komentarzy)
  * [Dokumentowanie](#dokumentowanie)
* [Architektura](#architektura)
  * [Komponenty](#komponenty)
  * [Wzór 7-1](#wzr-7-1)
    * [Folder base](#folder-base)
    * [Folder components](#folder-components)
    * [Folder layout](#folder-layout)
    * [Folder pages](#folder-pages)
    * [Folder themes](#folder-themes)
    * [Folder utils](#folder-utils)
    * [Folder vendors](#folder-vendors)
    * [Główny plik](#gwny-plik)
  * [Plik wstydu](#plik-wstydu)
* [Responsive Web Design i breakpointy](#responsive-web-design-i-breakpointy)
  * [Nazywanie breakpointów](#nazywanie-breakpointw)
  * [Menadżer breakpointów](#menader-breakpointw)
  * [Używanie media queries](#uywanie-media-queries)
* [Zmienne](#zmienne)
  * [Zasięg](#zasig)
  * [Flaga !default](#flaga-default)
  * [Flaga !global](#flaga-global)
  * [Wiele zmiennych lub map](#wiele-zmiennych-lub-map)
* [Rozwinięcia](#rozwinicia)
* [Mixiny](#mixiny)
  * [Podstawy](#podstawy)
  * [Listy argumentów](#listy-argumentw)
  * [Mixiny a vendor prefixy](#mixiny-a-vendor-prefixy)
* [Instrukcje warunkowe](#instrukcje-warunkowe)
* [Pętle](#ptle)
  * [Each](#each)
  * [For](#for)
  * [While](#while)
* [Ostrzeżenia i błędy](#ostrzeenia-i-bdy)
  * [Ostrzeżenia](#ostrzeenia)
  * [Błędy](#bdy)
* [Narzędzia](#narzdzia)
  * [Compass](#compass)
  * [Systemy gridów](#systemy-gridw)
  * [SCSS-lint](#scss-lint)
* [Za długie; nie czytałem](#za-dugie-nie-czytaem)






# O Sassie

Zdaniem twórców [Sassa](http://sass-lang.com), zawartym w jego [dokumentacji](http://sass-lang.com/documentation/file.SASS_REFERENCE.html), Sass jest:

> ... rozszerzeniem dla CSSa, które dodaje mu mocy i elegancji.

Głównym zadaniem Sassa jest wyeliminowanie wad CSSa. Jak wszyscy wiemy, CSS nie jest najlepszym językiem świata <sup>[potrzebne źródło]</sup>.

W tym miejscu pojawia się Sass, jako tzw. meta-język, by poprawić składnię CSSa. Zapewnia on ponadto szereg dodatkowych cech i użytecznych narzędzi. Jednocześnie, Sass pozostaje dość konserwatywnym uzupełnieniem klasycznego CSSa.

Jego celem nie jest przekształcenie CSSa w pełnoprawny język programowania z prawdziwego zdarzenia. Sass jedynie pomaga tam, gdzie CSS zawodzi. Z tego też powodu, rozpoczynanie przygody z Sassem nie jest wcale trudniejsze od nauki CSSa: jest to bowiem jedynie zestaw dodatków rozwijających podstawową funkcjonalność.

Tym samym, istnieje wiele sposobów na korzystanie z tych dodatkowych rozwiązań. Niektóre są poprawne, niektóre mniej, a niektóre też są nadzwyczajne. Ten przewodnik ma na celu przedstawienie spójnego i dobrze udokumentowanego podejścia do pisania kodu w Sassie.

### Dalsze informacje

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)






## Ruby Sass czy LibSass

[Pierwszy commit Sassa](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) pochodzi z końca 2006 roku, a więc było to ponad 8 lat temu. Nie trzeba więc dodawać, że Sass przebył dość długą drogę. Choć początkowo rozwijany w Ruby, od tego czasu pojawił się szereg różnych portów. Ten najbardziej kompletny, [LibSass](https://github.com/sass/libsass) (napisany w C), jest bliski do pełnej kompatybilności z oryginalną wersją, napisaną w Ruby.

W 2014 roku, [zespoły pracujące nad Ruby Sass i LibSass postanowiły poczekać aby obie wersje się zrównały pod względem kompletności, zanim zaczną pracować nad nowymi udoskonaleniami](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Od tego czasu, LibSass aktywnie wydaje nowe wersje swojego projektu i dąży do wyrównania ze swoim starszym bratem. Ostatnie pozostałe nieścisłości zostały zebrane i skategoryzowane przeze mnie w projekcie [Sass-Compatibility](http://sass-compatibility.github.io). Jeśli znasz jakieś inne nieścisłości pomiędzy tymi obiema wersjami kompilatorów Sassa, które nie zostały tam podane – proszę o utworzenie nowego issue.

Wracając do doboru kompilatora. Tak naprawdę, to wszystko zależy od Twojego projektu. Jeśli oparty jest on o Ruby on Rails, oczywiście lepiej korzystać z Ruby Sass, który będzie idealnie z nim współgrał. Ponadto, Ruby Sass będzie zawsze tą pierwszorzędną implementacją i zawsze będzie o krok przed LibSassem, jeśli chodzi o dodatkową funkcjonalność.

W przypadku zaś projektów nieopartych o Ruby, a które wymagają integracji z określonym porządkiem pracy, LibSass będzie prawdopodobnie lepszym rozwiązaniem. Jest on bowiem stworzony pod kątem wykorzystania go przez różne wrappery. Jeśli chcesz go użyć, powiedzmy z NodeJS, [node-sass](https://github.com/sass/node-sass) będzie dla Ciebie idealny.



### Dalsze informacje

* [LibSass](https://github.com/sass/libsass)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)






## Sass czy SCSS

Panuje powszechnie dosyć spore zamieszanie, jeśli chodzi o znaczenie nazwy *Sass* i nie jest to bez powodu. Sass bowiem jest zarówno określeniem dla preprocesora, jak i swojej składni. Może to się wydawać nie do końca jasne, prawda?

Prawda jest taka, że Sass początkowo był określeniem dla składni, której cechą charakterystyczną była wrażliwość na wcięcia. Wkrótce potem, deweloperzy zarządzający Sassem postanowili zacieśnić różnicę między Sassem a CSSem udostępniając przyjazną CSSowi składnię zwaną *SCSS*, czyli *Sassy CSS*. Głównym założeniem temu przyświecającym było to, że jeśli coś jest zgodne z CSSem, jest też zgodne z SCSSem. 

Od tego czasu, Sass (preprocesor) obsługuje dwie różne składnie: Sass (tylko nie wielkimi literami, [proszę](http://sassnotsass.com)), znany także jako *wcięta składnia*, i SCSS. Wybór między nimi należy tak na prawdę tylko do Ciebie, bowiem obie są zgodne ze sobą jeśli chodzi o funkcjonalność. Różnica dotyczy tylko i wyłącznie kwestii estetycznych. 

Wrażliwa na tzw. znaki niedrukowalne składnia opiera się na indentacji zmiast nawiasach klamrowych, średników czy innych znaków interpunkcyjnych, prowadząc do czystszej i krótszej składni. SCSS tymczasem jest łatwiejszy do nauki, bowiem składa się on tylko z niewielu, drobnych dodatków do samego CSSa.

Ja osobiście preferuję SCSS nad Sassem z powodu większej kompatybilności z CSSem i łatwości przyswojenia dla większości deweloperów. Z tego też powodu, w poniższym przewodniku posługiwać się będę raczej SCSSem niż Sassem.



### Dalsze informacje

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)






## Inne preprocesory

Sass jest jednym z wielu dostępnych preprocesorów. Jego głównym konkurentem zdaje się być [LESS](http://lesscss.org/), który jest oparty o NodeJS i który to zyskał popularność dzięki znanemu frameworkowi CSS, [Bootstrapowi](http://getbootstrap.com/). Znany jest także [Stylus](http://learnboost.github.io/stylus/) - zdający się być niczym nieskrępowaną wersją LESSa - z użyciem którego możesz zrobić w zasadzie wszystko, bowiem przekształca on właściwie CSS w pełnoprawny język programowania.

*Dlaczego wybrać Sass zamiast LESS czy innego preprocesora?* jest wciąż aktualnym dziś pytaniem. Nie tak dawno temu rekomendowaliśmy Sass dla projektów bazujących dla Ruby właśnie dlatego, że był on pierwszym preprocesorem stworzonym w Ruby i dobrze współgrał z Ruby on Rails. Teraz, gdy LibSass nadgonił (w zasadzie) z oryginalnym Sassem, ten argument nie jest do końca właściwym.

Tym, co lubię w Sassie, jest jego konserwatywne podejście do CSSa. Design Sassa jest oparty na silnych podstawach: większość z rozwiązań składających się na Sass wynika z założenia twórców, że a) implementowanie dodatkowych funkcjonalności, z uwagi na ich kompleksowość, powinno być uzasadnione faktyczną ich użytecznością i b), że nie powinny one stwarzać trudności przy ocenie tego, co dany blok stylów robi. Ponadto, Sass zdaje się mieć znacznie lepsze podejście do detali od innych preprocesorów. Główni deweloperzy Sassa przykładają szczególną wagę do wspierania każdego możliwego wariantu dotyczącego pracy z CSSem i do tego, by wszystko było ze sobą wspójne.

Innymi słowy, Sass nie jest tym preprocesorem, który zadowoli takich programistów jak ja poprzez dodawanie nadzwyczajnych funkcjonalności ponad to, co jest zawarte w języku, który od początku nie był do tego stworzony. Jest to oprogramowanie służące do rozwiązywania faktycznych problemów, pomagające w dostarczeniu użytecznych funkcjonalności do CSSa tam, gdzie mu ich brakuje.

Pomijając na chwilę kwestię preprocesorów, powinniśmy tutaj poruszyć też kwestię postprocesorów, które ostatnimi czasy stały się niesamowicie popularne. Stało się to głównie dzięki projektom takim jak [PostCSS](https://github.com/postcss/postcss) i [cssnext](https://cssnext.github.io/). Postprocesory są zasadniczo tym samym co preprocesory, oprócz tego że nie zapewniają one niczego ponad funkcjonalność, która ma się pojawić w nadchodzących wydaniach składni CSS.

Możesz myśleć o postprocesorach jako polyfillach dla niewspieranych funkcjonalności CSSa. Dla przykłądu, dają Ci one możliwość pisania zmiennych w sposób, o jakim mówi [specyfikacja CSS](http://dev.w3.org/csswg/css-variables/). Takie arkusze stylów kompiluje się potem za pomocą postprocesora, w rezultacie czego wszystkie zmienne zastępowane są faktycznymi wartościami, zupełnie jak w przypadku Sassa.

Postprocesorom przyświeca idea dostarczania nowych, projektowanych dopiero funkcjonalności CSSa (takich jak zmienne) tym przeglądarkom, które tego obecnie nie wspierają. Gdy zaś rozwiązania te zaczną być powszechnie obsługiwane, postprocesor przestanie działać na rzecz przeglądarki.

Podczas gdy umożliwianie korzystania ze przyszłej składni jest czymś, co zasługuje na pochwałę, nadal preferuję korzystać z Sassa. Są jednak rzeczy, do których postprocesor zdaje się być bardziej odpowiednim narzędziem niż Sass - prefixowanie CSSa dla przykładu - jednak do tego jeszcze tutaj wrócimy.



### Dalsze informacje

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)











# Wprowadzenie





## Czemu służy ten przewodnik

Przewodnik stylu nie stanowi tylko przyjemności do czytania, prezentującej idealny stan Twojego kodu. Jest to przede wszystkim kluczowy dokument w życiu danego projektu, opisujący jak i dlaczego powinniśmy pisać określony kod. Może się wydawać, że jest to przesada dla małych projektów, pomaga on jednak w utrzymywaniu kodu czystego, skalowalnego w zależności od rozmiaru projektu i łatwego w utrzymaniu.

Nie wymaga to zatem podkreślenia, że im więcej deweloperów jest zaangażowanych do danego projektu, tym bardziej niezbędny zdaje się być taki przewodnik. I analogicznie - im większy jest projekt, tym istotniejszym jest przewodnik.

[Harry Roberts](http://csswizardry.com) określił to bardzo dobrze w [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Przewodnik stylu kodu (zaznaczam, nie chodzi tu o przewodnik po wizualnym stylu) jest cennym narzędziem dla zespołów, które:</p>
  <ul>
    <li>budują i utrzymują produkty przez określony okresu czasu;</li>
    <li>składają się z deweloperów o różnych umiejętnościach i specjalizacjach;</li>
    <li>mają liczbę różnych deweloperów pracujących nad danym produktem jednocześnie;</li>
    <li>regularnie wprowadzają nowych pracowników;</li>
    <li>posiadają określoną liczbę baz kodu, z których deweloperzy na bieżąco korzystają.</li>
  </ul>
</blockquote>





## Zastrzeżenie

Przede wszystkim: **to nie jest przewodnik po stylu dla CSSa**. Ten dokument nie będzie dotyczył konwencji nazewnictwa dla klas w CSSie, wzorów modularnych czy kwestii selektorów ID. Przewodnik ten zajmie się tylko i wyłącznie sprawami związanymi z Sassem.

Ponadto, został on napisany przeze mnie i przez to jest on **bardzo subiektywny**. Traktuj go jako zbiór metodologii i porad, które wykorzystywałem i którymi się dzieliłem przez lata. Pozwala mi on jednocześnie na podlinkowanie wszelakiej maści pożytecznych źródeł, dlatego też sprawdzaj *dalsze informacje* dla każdej z sekcji.

Nie ulega wątpliwości natomiast, że poradnik ten nie jest jedynym źródłem informacji i nie ma on wyłączności na prawdę. Co więcej - może się okazać, że wcale nie będzie odpowiadał Twoim projektom. Korzystaj jednak z niego śmiało i adaptuj go do własnych potrzeb. Jak zawsze, *to może działać inaczej w Twoim przypadku (your mileage may vary)*.






## Kluczowe reguły

Koniec końców, jeżeli miałbym określić jedyną rzecz jaką chciałbym, byś wyniósł z czytania tego przewodnika, to jest nią to, że **Sass powinien być pisany tak prosto, jak to jest tylko możliwe**.

Dzięki moim zabawnym eksperymentom, takim jak [operator bitowy](https://github.com/HugoGiraudel/SassyBitwise), [iteratory i generatory](https://github.com/HugoGiraudel/SassyIteratorsGenerators) czy [parser JSON](https://github.com/HugoGiraudel/SassyJSON) napisanym w Sassie, możemy się przekonać jak dużo jest możliwe dzięki Sassowi.

Nie zapominajmy jednak, że CSS jest prostym językiem. Sass, którego celem jest pisanie CSSa, nie powinien dokładać do niego zbyt wysokiego stopnia skomplikowania. [Zasada KISS](http://pl.wikipedia.org/wiki/KISS_(reguła)) (Keep It Simple Stupid) jest tu kluczowa i można nawet stwierdzić, że przysłania ona [zasadę DRY](http://pl.wikipedia.org/wiki/DRY) (Don't Repeat Yourself) w niektórych przypadkach.

Czasami warto się trochę powtórzyć i dzięki temu sprawić, że nasz kod stanie się łatwiejszy do utrzymania. Jest to zdecydowanie lepsze rozwiązanie niż ciężki, niekontrolowalny i niepotrzebnie skomplikowany kod, którego utrzymanie w dłuższej perspektywie jest wręcz niemożliwe.

Poza tym, pozwólcie że zacytuję raz jeszcze [Harry'ego Robertsa](https://csswizardry.com) - **pragmatyzm wygrywa z perfekcjonizmem**. Na jakimś etapie zapewne stwierdzisz, że to co robisz nie jest do końca zgodne z zasadami opisanymi w tym przewodniku. Jeżeli ma to sens, jeżeli wydaje Ci się to prawidłowe - rób to po swojemu. Nie zapominajmy wszak, że kod jest jedynie środkiem, nie celem.



### Dalsze informacje

* [Zasada KISS](http://pl.wikipedia.org/wiki/KISS_(reguła))
* [Zasada DRY](http://pl.wikipedia.org/wiki/DRY)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)











# Składnia i formatowanie

Pierwszą rzeczą, jaką powinien się zająć przewodnik po stylu jest niewątpliwie to, w jaki sposób nasz kod ma wyglądać.

Kiedy CSSem w tym samym projekcie zajmuje się kilku deweloperów, zazwyczaj jest to tylko kwestią czasu kiedy któryś z nich zacznie pisać rzeczy po swojemu. Przewodniki po stylu kodu, które promują spójność nie tylko temu zapobiegają, lecz także pomagają w czytaniu i aktualizowaniu kodu.

W dużym skrócie, chcemy (bezwstydnie zainspirowane przez [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* wcięcia składające się z (2) spacji, bez tabulatorów,
* najlepiej 80 znaków w linii,
* prawidłowo napisanych wieloliniowych reguł CSSa,
* sensownego użycia tzw. znaków niedrukowalnych (whitespace). 

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// Źle
.foo {
    display: block; overflow: hidden;

    padding: 0 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oparta na wcięciach składnia Sass wymusza określone standardy kodu
// więc kwestię nawiasów kwadratowych mamy z głowy
.foo
  display: block
  overflow: hidden
  padding: 0 1em
{% endhighlight %}
  </div>
</div>

W tej sekcji nie zajmiemy się jeszcze zagadnieniem organizacji plików. Poruszone to zostanie w [dalszym miejscu](#architektura)






## Ciągi znaków

CSS nie wymaga by łańcuchy (ciągi) znaków były umieszczane między cudzysłowami, nawet te zawierające spacje. Weźmy nazwy font-family dla przykładu: dla parsera CSS nie ma znaczenia, czy otoczymy je cudzysłowami, czy też nie.

Z tego powodu Sass *także* nie wymaga, by ciągi znajdowały się między cudzysłowami. Co ciekawe (i na całe szczęście), ciąg umieszczony między takimi znakami jest dokładnie równy ciągowi bez cudzysłowów (`'abc'` jest ściśle równy `abc`).

Języki programowania, które nie wymagają by łańcuchy znaków były umieszczane między cudzysłowami, należą jednak do żadkości i z tego też powodu **ciągi powinny być zawsze otoczone znakami pojedynczych cudzysłowów** w Sassie (pojedyncze z tego względu, że na standardowej klawiaturze QWERTY łatwiej jest ich użyć, niż podwójnych). Oprócz spójności z innymi językami, łącznie z kuzynem CSS - JavaScriptem, jest także szereg innych dla tego powodów:

* nazwy kolorów traktowane są jako faktyczne kolory, gdy są pozbawione cudzysłowów, co może prowadzić do poważnych problemów;
* większość rozwiązań do podświetlania składni (syntax highlighters) może mieć problem z ciągami pozbawionymi cudzysłowów;
* poprawia to ogólną czytelność;
* nie ma absolutnie żadnego słusznego powodu, by nie umieszczać ciągów pomiędzy cudzysłowami.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif;

// Źle
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif;

// Źle
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif

// Źle
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif

// Źle
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>W poprzednim przykładzie, <code>sans-serif</code> nie zostało umieszczone pomiędzy cudzysłowami ponieważ jest to specyficzna dla CSSa reguła i nie powinna ona się znajdować między takimi znakami.</p>
</div>

Adresy URL także powinny być otaczane cudzysłowami, z tych samych powodów:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
.foo {
  background-image: url('/images/kittens.jpg');
}

// Źle
.foo {
  background-image: url(/images/kittens.jpg);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
.foo
  background-image: url('/images/kittens.jpg')

// Źle
.foo
  background-image: url(/images/kittens.jpg)
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [All You Ever Need to Know About Sass Interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/HugoGiraudel/SassyStrings)






## Liczby

W Sassie, liczby są typem danych w którego skład wchodzą zarówno liczby niemianowane (bez jednostek), określenia dla długości, frekwencji, kątów i tak dalej. Pozwala to na przeprowadzanie na tych wartościach obliczeń.



### Zera

Liczby powinny zawierać zero przed znakiem dziesiętnym, jeżeli ich liczba wynosi mniej niż jeden. Nigdy nie dodawaj zer końcowych.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
.foo {
  padding: 2em;
  opacity: 0.5;
}

// Źle
.foo {
  padding: 2.0em;
  opacity: .5;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
.foo
  padding: 2em
  opacity: 0.5

// Źle
.foo
  padding: 2.0em
  opacity: .5
{% endhighlight %}
  </div>
</div>



### Jednostki

Zajmując się długościami, wartość `0` nigdy nie powinna mieć jednostki.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$length: 0;

// Źle
$length: 0em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$length: 0

// Źle
$length: 0em
{% endhighlight %}
  </div>
</div>

Najczęściej powtarzającym się błędem jaki przychodzi mi do głowy na myśl o liczbach w Sassie jest przekonanie, że jednostki są po prostu ciągami znaków, które można swobodnie i bezpiecznie dodawać do liczby. O ile może się wydawać, że tak jest, w rzeczywistości jednostki wcale tak nie funkcjonują. Pomyśl o jednostkach jako matematycznych symbolach. Dla przykładu, mnożąc 5 cali przez 5 cali uzyskasz wynik 25 cali kwadratowych. Ta sama logika tyczy się Sassa.

By dodać jednostkę do liczby, musisz pomnożyć tą liczbę przez *1 jednostkę*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42;

// Dobrze
$length: $value * 1px;

// Źle
$length: $value + px;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42

// Dobrze
$length: $value * 1px

// Źle
$length: $value + px
{% endhighlight %}
  </div>
</div>

Pamiętaj, że dodając *0 tej jednostki* też zadziała, lecz ja bym rekomendował używanie wyżej wspomnianej metody. Dodawanie *0 jednostki* może być trochę mylące. I tak, próbując przekonwertować liczbę do innej, kompatybilnej jednostki, dodawanie 0 nie zadziała.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42 + 0px;
// -> 42px

$value: 1in + 0px;
// -> 1in

$value: 0px + 1in;
// -> 96px
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42 + 0px
// -> 42px

$value: 1in + 0px
// -> 1in

$value: 0px + 1in
// -> 96px
{% endhighlight %}
  </div>
</div>

Ostatecznie zależy to w dużej mierze od tego, co starasz się osiągnąć. Miej na uwadze to, że dodawanie jednostki jako ciągu znaków nie jest dobrym rozwiązaniem.

By usunąć jednostkę z określonej wartości, podziel ją przez *jedną jednostkę jej typu*.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$length: 42px;

// Dobrze
$value: $length / 1px;

// Źle
$value: str-slice($length + unquote(''), 1, 2);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$length: 42px

// Dobrze
$value: $length / 1px

// Źle
$value: str-slice($length + unquote(''), 1, 2)
{% endhighlight %}
  </div>
</div>

Dodając jednostkę jako ciąg do liczby uzyskasz ciąg, wykluczając jakiekolwiek dodatkowe operacje na tej wartości. Wycinając sam numer z liczby zawierającej też określenie jednostki również skutkować będzie otrzymaniem łańcuchem. A przecież tego nie chcesz.



### Obliczenia

**Obliczenia najwyższego poziomu powinny być zawsze otoczone nawiasami**.
Ten wymóg nie tylko drastycznie poprawia czytelność kodu, zapobiega on także niektórym rzadkim sytuacjom wymuszając na Sassie określenie wartości tego, co zawarte jest w tym nawiasie.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
.foo {
  width: (100% / 3);
}

// Źle
.foo {
  width: 100% / 3;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
.foo
  width: (100% / 3)

// Źle
.foo
  width: 100% / 3
{% endhighlight %}
  </div>
</div>



### Liczby magiczne

Liczby magiczne są elementem [programowania starego typu](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) i określają *nienazwaną wartość liczbową*. Innymi słowy, są to losowe liczby które *po prostu działają*™, nie mając żadnego logicznego wyjaśnienia.

Rzecz jasna, **liczby magiczne są plagą i powinny być unikane za wszelką cenę**. Jeśli nie możesz sobie poradzić ze znalezieniem rozsądnego wytłumaczenia dlaczego dana liczba jest po prostu odpowiednia, postaraj się o dodanie wyczerpującego komentarza wyjaśniającego dlaczego na taką liczbę się zdecydowałeś i dlaczego, Twoim zdaniem, się ona tutaj sprawdza. Przyznanie się do tego, że czegoś do końca nie wiemy jest zawsze lepsze dla innego dewelopera, niż pozostawianie im takiej łamigłówki do rozwiązania.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * 1. Magiczna liczba. Wartość ta jest najniższą jaką znalazłem, 
 * która pozwala mi na wyrównanie góry `.foo` z jego rodzicem. 
 * Najlepiej by jednak było, gdybyśmy to porządnie zrobili.
 */
.foo {
  top: 0.327em; /* 1 */
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * 1. Magiczna liczba. Wartość ta jest najniższą jaką znalazłem, 
 * która pozwala mi na wyrównanie góry `.foo` z jego rodzicem. 
 * Najlepiej by jednak było, gdybyśmy to porządnie zrobili.
 */
.foo
  top: 0.327em /* 1 */
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](http://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)






## Barwy

Barwy stanowią istotny element języka, jakim jest CSS. Jak moglibyśmy się już do tego przyzwyczaić, Sass jest cennym pomocnikiem także w kwestii manipulacji barwami, głównie za zasługą jego [funkcji](http://sass-lang.com/documentation/Sass/Script/Functions.html).



### Formaty barw

Aby uczynić zagadnienie dotyczące barw najprostszym jak się tylko da, zalecałbym uszanować następujący porządek preferencji, jeśli chodzi o formaty barw:

1. [Słowa kluczowe odpowiadające barwom w CSSie](http://www.w3.org/TR/css3-color/#svg-color);
2. [HSL i HSV](http://pl.wikipedia.org/wiki/HSL);
3. [RGB](http://pl.wikipedia.org/wiki/RGB);
4. Określenia szestnastkowe. Najlepiej małymi literami i skrócone, gdy jest to możliwe.

Zaczynając od początku, słowa kluczowe najczęściej mówią same za siebie. Format HSL jest nie tylko najłatwiejszym do pojęcia dla ludziego mózgu<sup>[potrzebne źródło]</sup>, ale także czyni prostym dla osób tworzących arkusze stylów modyfikowanie barw poprzez regulowanie osobno odcienia, nasycenia i jasności. RGB posiada zaś tą zaletę, że patrząc na dane wartości w łatwy sposób możemy określić, czy dany kolor ma barwę bardziej zbliżoną do niebieskiego, zielonego czy czerwonego, jednak nie czyni on prostym faktyczne budowanie barwy z tych trzech części. Na koniec, określenia szesnastkowe są dla ludzkiego umysłu niemal nie do rozszyfrowania.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
.foo {
  color: red;
}

// Źle
.foo {
  color: #FF0000;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
.foo
  color: red

// Źle
.foo
  color: #FF0000
{% endhighlight %}
  </div>
</div>

Używając systemu HSL czy RGB, zawsze dodawaj pojedynczą spację po przecinku (`,`), lecz bez spacji pomiędzy nawiasami (`(`, `)`) i ich zawartością.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
.foo {
  color: rgba(0, 0, 0, 0.1);
  background: hsl(300, 100%, 100%);
}

// Źle
.foo {
  color: rgba(0,0,0,0.1);
  background: hsl( 300, 100%, 100% );
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
.foo
  color: rgba(0, 0, 0, 0.1)
  background: hsl(300, 100%, 100%)

// Źle
.foo
  color: rgba(0,0,0,0.1)
  background: hsl( 300, 100%, 100% )
{% endhighlight %}
  </div>
</div>



### Barwy i zmienne

Jeżeli używasz danej barwy więcej niż jeden raz, umieść ją w zmiennej o nazwie, która w sposób konkretny reprezentuje dany kolor.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$sass-pink: #c69;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$sass-pink: #c69
{% endhighlight %}
  </div>
</div>

W tym momencie możesz używać tej zmiennej kiedykolwiek chcesz. Pamiętaj jednak, że jeśli jej użycie jest silnie powiązane z określonym motywem, zalecałbym nie używać tej zmiennej "tak po prostu". Zamiast tego, przypisz ją do jakiejś innej zmiennej o nazwie objaśniającej jak powinna być właściwie użyta.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$main-theme-color: $sass-pink;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$main-theme-color: $sass-pink
{% endhighlight %}
  </div>
</div>

Robiąc to w ten sposób zapobiegasz sytuacji, w której zmiana motywu doprowadzi do czegoś jak `$sass-pink: blue`.

{% include donate.html %}



### Rozjaśnianie i przyciemnianie barw



Funkcje służące zarówno [`rozjaśnianiu`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method), jak i [`przyciemnianiu`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) barw manipulują jasnością koloru w przestrzeni barwy HSL poprzez dodawanie lub, odpowiednio, odejmowanie do tejże jasności. Zasadniczo są one jedynie nazwą zastępczą (aliasem) dla parametru `$lightness` funkcji [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

Rzecz w tym, że te funkcje często nie prowadzą to takich rezultatów, jakich od nich oczekujemy. Z drugiej jednak strony, funkcja [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) jest ciekawym rozwiązaniem dla rozjaśniania lub przyciemniania barw. Robi to poprzez mieszanie koloru z barwą `white` (białą), lub `black` (czarną).

Korzyścią z używania funkcji `mix`, zamiast jednej z tych poprzednio wspomnianych, jest niewątpliwie fakt, że zapewnia ona progresywne przejście do czerni (lub bieli) w trakcie zmniejszania proporcji głównego koloru, w czasie gdy funkcje `darken` i `lighten` w sposób o wiele bardziej nagły wytracają nasz kolor.

<figure role="group">
  <img src="/assets/images/lighten-darken-mix.png" alt="Illustration of the difference between lighten/darken and mix Sass functions" />
  <figcaption>Ilustracja pokazująca różnicę pomiędzy funkcjami <code>lighten</code>/<code>darken</code> i <code>mix</code>, stworzona przez <a href="http://codepen.io/KatieK2/pen/tejhz/" target="_blank">KatieK</a></figcaption>
</figure>



Jeśli nie chcesz używać pełnej funkcji `mix` za każdym razem, możesz stworzyć dwie, proste w użyciu, funkcje `tint` i `shade` (będące, co ciekawe, częścią [Compassa](http://compass-style.org/reference/compass/helpers/colors/#shade)), które dadzą ten sam efekt:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Stopniowo rozjaśniaj kolor
/// @access public
/// @param {Color} $color - kolor do rozjaśnienia
/// @param {Number} $percentage - procent pierwotnego `$color` w zwróconej wartości
/// @return {Color}
@function tint($color, $percentage) {
  @return mix($color, white, $percentage);
}

/// Stopniowo przyciemniaj kolor
/// @access public
/// @param {Color} $color - kolor do przyciemnienia
/// @param {Number} $percentage - procent pierwotnego `$color` w zwróconej wartości
/// @return {Color}
@function shade($color, $percentage) {
  @return mix($color, black, $percentage);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Stopniowo rozjaśniaj kolor
/// @access public
/// @param {Color} $color - kolor do rozjaśnienia
/// @param {Number} $percentage - procent pierwotnego `$color` w zwróconej wartości
/// @return {Color}
@function tint($color, $percentage)
  @return mix($color, white, $percentage)

/// Stopniowo przyciemniaj kolor
/// @access public
/// @param {Color} $color - kolor do przyciemnienia
/// @param {Number} $percentage - procent pierwotnego `$color` w zwróconej wartości
/// @return {Color}
@function shade($color, $percentage)
  @return mix($color, black, $percentage)
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Funkcja <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> zaprojektowana została w celu skalowania właściwości bardziej płynnie, biorąc pod uwagę ich pierwotny wysoki, bądź niski, poziom. Co do zasady powinna przynosić efekt zbliżony do tego z funkcji <code>mix</code>, lecz sposób jej użycia może być nieco czytelniejszy. Czynnik odpowiadający za skalowanie nie jest jednak identyczny.</p>
</div>




### Dalsze informacje

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don't Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)






## Listy

Listy są w Sassie odpowiednikiem tablic (arrays). Lista jest typem płaskiej struktury danych (w przeciwieństwie do [map](#mapy)), która stworzona została w celu przechowywania wartości różnego typu (włączając w to listy, tworząc tym samym zagnieżdżone listy).

Listy powinny być tworzone według następujących zasad:

* zawsze umieszczaj je na jednej linii, chyba że zajmują więcej niż 80 znaków;
* zawsze używaj przecinka jako separatora, chyba że cel, do jakiego ma być ona użyta, tego nie zakłada;
* nigdy nie umieszczaj jej między nawiasami, chyba że jest pusta albo zagnieżdżona wewnątrz innej listy;
* nigdy nie dodawaj końcowego przecinka.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$font-stack: 'Helvetica', 'Arial', sans-serif;

// Źle
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif;

// Źle
$font-stack: 'Helvetica' 'Arial' sans-serif;

// Źle
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Źle
$font-stack: ('Helvetica', 'Arial', sans-serif,);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$font-stack: 'Helvetica', 'Arial', sans-serif

// Źle (nie jest to wspierane)
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif

// Źle
$font-stack: 'Helvetica' 'Arial' sans-serif

// Źle
$font-stack: ('Helvetica', 'Arial', sans-serif)

// Źle
$font-stack: ('Helvetica', 'Arial', sans-serif,)
{% endhighlight %}
  </div>
</div>

Dodając nowy składnik do listy, zawsze korzystaj z dostępnego już API. Nie próbuj dodawać niczego ręcznie.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$shadows: 0 42px 13.37px hotpink;

// Dobrze
$shadows: append($shadows, $shadow, comma);

// Źle
$shadows: $shadows, $shadow;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$shadows: 0 42px 13.37px hotpink

// Dobrze
$shadows: append($shadows, $shadow, comma)

// Źle
$shadows: $shadows, $shadow
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [SassyLists](http://sassylists.com)






## Mapy

Od wersji 3.3 Sassa, autorzy arkuszy stylów mogą korzystać z map, które są niczym innym jak tablicami asocjacyjnymi (skojarzeniowymi, słownikami), haszami czy nawet obiektami JavaScriptowymi. Mapa jest takim typem danych, który powiązuje klucze (mogące być dowolnym typem danych, łącznie z mapami, choć nie jest to zalecane) z określonymi wartościami.

Mapy powinny być tworzone w następujący sposób:

* spacja po dwukropku (`:`);
* nawias otwierający (`(`) powinien się znajdować na tej samej linii co dwukropek (`:`);
* **klucze umieszczone między cudzysłowami** jeśli są łańcuchami (co stanowi 99% przypadków);
* każda para klucz–wartość na osobnej linii;
* przecienk (`,`) na końcu każdej pary klucz–wartość;
* **końcowy przecinek** (`,`) przy ostatnim elemencie, dzięki czemu łatwiej nam będzie dodawać, usuwać czy zmieniać kolejność składników mapy;
* nawias zamykający (`)`) na osobnej linii;
* bez spacji czy nowej linii między zamykającym nawiasem (`)`) a średnikiem (`;`).

Przykład:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
);

// Źle
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$breakpoints: ('small': 767px, 'medium': 992px, 'large': 1200px,)

// Źle
$breakpoints: ( 'small': 767px, 'medium': 992px, 'large': 1200px )

// Źle
$breakpoints: (small: 767px, medium: 992px, large: 1200px,)

// Źle (nie jest to wspierane)
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
)
{% endhighlight %}
  </div>
</div>



### Debugowanie map Sassa

Nie martw się, jeśli napisana przez Ciebie mapa okaże się działać w sposób nie do końca dla Ciebie zrozumiały. Jest bowiem możliwość ich debugowania.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin debug-map($map) {
  @at-root {
    @debug-map {
      __toString__: inspect($map);
      __length__: length($map);
      __depth__: if(function-exists('map-depth'), map-depth($map), null);
      __keys__: map-keys($map);
      __properties__ {
        @each $key, $value in $map {
          #{'(' + type-of($value) + ') ' + $key}: inspect($value);
        }
      }
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=debug-map($map)
  @at-root
    @debug-map
      __toString__: inspect($map)
      __length__: length($map)
      __depth__: if(function-exists('map-depth'), map-depth($map), null)
      __keys__: map-keys($map)
      __properties__
        @each $key, $value in $map
          #{'(' + type-of($value) + ') ' + $key}: inspect($value)
{% endhighlight %}
  </div>
</div>

Jeśli jesteś zainteresowany głębokością danej mapy, dodaj również poniższą funkcję. Wyżej opisany mixin automatycznie z niej skorzysta.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Oblicz maksymalną głębokość mapy
/// @param {Map} $map
/// @return {Number} maksymalna głębokość `$map`
@function map-depth($map) {
  $level: 1;

  @each $key, $value in $map {
    @if type-of($value) == 'map' {
      $level: max(map-depth($value) + 1, $level);
    }
  }

  @return $level;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Oblicz maksymalną głębokość mapy
/// @param {Map} $map
/// @return {Number} maksymalna głębokość `$map`
@function map-depth($map)
  $level: 1

  @each $key, $value in $map
    @if type-of($value) == 'map'
      $level: max(map-depth($value) + 1, $level)

  @return $level;
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](http://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)






## Reguły dotyczące CSSa

W tym miejscu, mimo że zapewne każdy je zna, warto jednak powtórzyć sobie podstawowe zasady dot. pisania zestawów reguł w CSSie (a przynajmniej te, które są przyjęte m.in. przez [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset)):

* powiązane selektory umieszczamy na tej samej linii; niezwiązane ze sobą zaczynamy od nowej;
* nawias otwierający (`{`) oddzielony od ostatniego selektora pojedynczą spacją;
* każda deklaracja na swojej osobnej linii;
* spacja po przecinku (`:`);
* końcowy średnik (`;`) na końcu każdej deklaracji;
* zamykający nawias (`}`) na osobnej linii;
* nowa linia po zamykającym nawiasie (`}`).

Przykład:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// Źle
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
    margin: 0 auto }
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
.foo, .foo-bar,
.baz
  display: block
  overflow: hidden
  margin: 0 auto

// Źle
.foo,
.foo-bar, .baz
    display: block
    overflow: hidden
    margin: 0 auto
{% endhighlight %}
  </div>
</div>

Dodając do powyższych reguł związanych z samym CSSem warto też zwrócić uwagę, by:

* lokalne zmienne zostały nie tylko zadeklarowane przed innymi deklaracjami, ale także rozdzielone przed nimi pojedynczą, pustą linią;
* wywołania mixinów bez `@content` (dodatkowych deklaracji) znajdowały się przed innymi deklaracjami;
* zagnieżdżone selektory zawsze zaczynały się od nowej linii;
* mixiny z `@content` (deklaracjami) pojawiały się po wszelkich zagnieżdżonych selektorach;
* nie było pustej linii po zamykającym nawiasie (`}`).

Przykład:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo, .foo-bar,
.baz {
  $length: 42em;

  @include ellipsis;
  @include size($length);
  display: block;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  @include respond-to('small') {
    overflow: visible;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo, .foo-bar,
.baz
  $length: 42em

  +ellipsis
  +size($length)
  display: block
  overflow: hidden
  margin: 0 auto

  &:hover
    color: red

  +respond-to('small')
    overflow: visible
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)






## Sortowanie deklaracji

Nie przychodzi mi do głowy obecnie zagadnienie, co do którego zdania są tak bardzo podzielone, jak jest to w przypadku sortowania deklaracji w CSSie. W szczególności, należy tu mówić o dwóch poglądach:

* porządek alfabetyczny;
* porządkowanie deklaracji ze względu na ich typ (pozycja, `display`, kolory, czcionki i inne...).

Obie metody mają swoje zalety i wady. Z jednej strony, sortowanie alfabetyczne jest uniwersalne (przynajmniej dla języków opartych o alfabet łaciński), więc przynajmniej nie sprawia ono większego problemu. Moim jednak zdaniem, nieumieszczanie własności takich jak `bottom` i `top` obok siebie jest pomysłem conajmniej dziwnym. Dlaczego też deklaracje dot. animacji miały by się znajdować przed własnością `display`? Jak można się domyśleć, w sortowaniu alfabetycznym nie trudno się doszukać szeregu takich nieścisłości.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  background: black;
  bottom: 0;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  height: 100px;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 100px;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  background: black
  bottom: 0
  color: white
  font-weight: bold
  font-size: 1.5em
  height: 100px
  overflow: hidden
  position: absolute
  right: 0
  width: 100px
{% endhighlight %}
  </div>
</div>

Z drugiej zaś strony, porządkowanie własności według typu zdaje się mieć sens. Każda deklaracja związana z czcionkami jest obok siebie, `top` i `bottom` są znowu razem, a czytanie takiego zestawu reguł zdaje się być przyjemnością. Jednak o ile nie trzymasz się reguł określonych konwencji, takich jak [Idiomatic CSS](https://github.com/necolas/idiomatic-css), niektóre kwestie pozostają problematyczne. Jak, na przykład, umieścić własność `white-space`? W grupie czcionek, czy obok `display`? Co zrobić z `overflow`? Wreszcie, jaka jest kolejność wewnątrz danej grupy tematycznej (czyżby alfabetyczna, o ironio)?

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  height: 100px;
  width: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  height: 100px
  width: 100px
  overflow: hidden
  position: absolute
  bottom: 0
  right: 0
  background: black
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

Istnieje również inny interesujący pogląd na porządkowanie reguł zwany [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), który zdaje się zyskiwać na popularności. W dużym skrócie, Concentric CSS opiera się na założeniu modelu pudełkowego (box-model) i w ten też sposób definiuje porządek deklaracji: od wewnątrz (pudełka) do zewnątrz.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: black;
  overflow: hidden;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  width: 100px
  height: 100px
  position: absolute
  right: 0
  bottom: 0
  background: black
  overflow: hidden
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

Szczerze mówiąc sam jeszcze nie podjąłem ostatecznej decyzji. [Niedawno opublikowana sonda na CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) pokazała, że ponad 45% deweloperów sortuje swoje deklaracje według typów, 14% zaś alfabetycznie. Co ciekawe, 39% programistów robi to kompletnie losowo – i ja do tych osób również się zaliczam.

<figure role="group">
  <img src="/assets/images/css_order_chart.png" alt="Chart showing how developers order their CSS declarations" />
  <figcaption>Wykres pokazujący jak deweloperzy porządkują swoje deklaracje w CSSie</figcaption>
</figure> 

Z tego też powodu nie mam zamiaru odgórnie narzucać określonego sposobu sortowania deklaracji w tym przewodniku. Wybór pozostawiam Tobie, bądź tylko w swym wyborze konsekwentny.

<div class="note">
  <p><a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">Ostatnie badania</a> pokazują, że używanie <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (które z kolei korzysta z <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">sortowania wg. typu</a>) do porządkowania deklaracji w CSSie prowadzi do zmniejszania średniej wagi pliku kompresowanego przez Gzip o ok. 2.7%, podczas gdy sortowanie alfabetyczne przynosi rezultat w postaci 1.3%.</p>
</div>




### Dalsze informacje

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)






## Zagnieżdżanie selektorów

Jedną z cech Sassa, która jest szczególnie nadużywana przez wielu deweloperów, jest niewątpliwie *zagnieżdżanie selektorów*. Rozwiązanie to pozwala autorom arkuszy stylów na używanie z długich, wieloczłonowych selektorów rozbijając je na krótsze i zagnieżdżając je.

### Generalna zasada

Na przykład, poniższe zagnieżdżanie w Sassie:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  .bar
    &:hover
      color: red
{% endhighlight %}
  </div>
</div>

... wygeneruje taki kod CSS:

{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}

Oprócz tego, od momentu wydania Sassa w wersji 3.3 możliwe jest odwoływanie się do obecnego selektora poprzez (`&`), celem wygenerowania bardziej złożonego selektora. Dla przykładu:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  &-bar {
    color: red;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  &-bar
    color: red
{% endhighlight %}
  </div>
</div>

... wygeneruje taki kod CSS:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo-bar {
  color: red;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo-bar
  color: red
{% endhighlight %}
  </div>
</div>

Metoda ta jest często używana w połączeniu z [konwencją nazewnictwa BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), by generować selektory `.block__element` i `.block--modifier` bazujące na ich oryginalnym selektorze (a więc `.block` w tym przypadku).

<div class="note">
  <p>Podczas gdy może mieć to małe znaczenie, generowanie nowych selektorów w oparciu o odwołanie (<code>&</code>) do obecnego selektora sprawia, że wyszukiwanie w kodzie tych nowych selektorów staje się nie możliwe, gdyż one faktycznie (ich pełna nazwa) nie istnieją.</p>
</div>



Problem zagnieżdżania selektorów leży głównie w tym, iż zmniejszają one czytelność kodu. Trzeba bowiem za każdym razem w myślach określać nazwę selektora, uzależniając ją wszak od poziomu zagnieżdżenia. Nie zawsze jest tym samym do końca wiadomo, jaki będzie rezultat w postaci skompilowanego kodu CSS.

To stwierdzenie staje się tym bardziej prawdziwe, im dłuże stają się selektory i częstsze odwołania (`&`) do obecnego selektora. Na pewnym etapie ryzyko pogubienia się w kodzie staje się przez to zbyt duże.

Aby zapobiec temu typu sytuacjom, **unikamy zagnieżdżania selektorów jeśli to jest możliwe**. Niemniej jednak są pewne wyjątki dla tej zasady.

### Wyjątki

Przede wszystkim, dozwolone jest – a nawet rekomendowane – zagnieżdżanie pseudo-klas i pseudo-elementów wewnątrz wstępnych selektorów.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: 'pseudo-element';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  &:hover
    color: green

  &::before
    content: 'pseudo-element'
{% endhighlight %}
  </div>
</div>

Użycie zagnieżdżania selektorów dla pseudo-klas i pseudo-elementów nie tylko ma sens (wszak dotyczy ono blisko powiązanych ze sobą selektorów), ale także pomaga w utrzymaniu całości komponentu w jednym miejscu.

Ponadto, uzasadnionym jest także umieszczanie niezależnych klas, takich jak `.is-active`, w ramach selektora danego komponentu. 

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  &.is-active {
    font-weight: bold;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  &.is-active
    font-weight: bold
{% endhighlight %}
  </div>
</div>

Wreszcie, rozsądnym jest również zagnieżdżanie reguł dotyczących elementu znajdującego się wewnątrz innego elementu, tak aby deklaracje dotyczące całego komponentu znajdowały się w jednym miejscu.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  .no-opacity & {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  .no-opacity &
    display: none
{% endhighlight %}
  </div>
</div>

Pracując z niedoświadczonymi deweloperami, takie selektory jak `.no-opacity &` mogą wydawać się trochę dziwne. By zapobiec wszelkim nieścisłościom, warto zbudować krótki mixin, który przetworzy taką składnię w wyraźne API.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Pomocniczy mixin zapewniający proste API dla zagnieżdżania selektorów
/// @param {String} $selector - Selektor
@mixin when-inside($selector) {
  #{$selector} & {
    @content;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Pomocniczy mixin zapewniający proste API dla zagnieżdżania selektorów
/// @param {String} $selector - Selektor
=when-inside($selector) {
  #{$selector} &
    @content
}
{% endhighlight %}
  </div>
</div>

Pozwoli nam to zmodyfikować poprzedni przykład, który teraz będzie wyglądał tak:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  @include when-inside('.no-opacity') {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  +when-inside('.no-opacity')
    display: none
{% endhighlight %}
  </div>
</div>

Jak we wszystkich sytuacjach, kluczem jest zawsze spójność. Jeśli czujesz się pewien zagnieżdżania selektorów, korzystaj z tego. Pamiętaj jednak by cały zespół, z którym pracujesz, się temu nie sprzeciwiał.






### Dalsze informacje

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)











# Konwencje nazw

W tej sekcji nie zajmiemy się konwencjami na nazywanie elementów składni CSSa, które to mają za zadanie pomóc w łatwości utrzymania i skalowania kodu; nie tylko decyzja w tej kwestii należy do Ciebie, ale nie jest to też coś, co należy do zakresu merytorycznego przewodnika po stylu w Sassie. Zalecam tym samym zapoznanie się z [CSS Guidelines](http://cssguidelin.es/#naming-conventions).

Jest jednak w Sassie kilka rzeczy posługujących się nazwami i ważne jest, by nazywać je w sposób, dzięki któremu Twój kod będzie spójny i czytelny:

* zmienne;
* funkcje;
* mixiny.

Selektory zastępcze w Sassie zostały celowo tutaj ominięte bowiem traktować je należy jak zwykłe selektory CSSa, dotyczą ich więc zasady związane z nazewnictwem klas.

W odniesieniu natomiast do zmiennych, funkcji i mixinów, utrzymujemy konwencję znaną z *CSSa*: **małe litery, myślniki jako separatory**, a przede wszystkim – nazwy muszą nieść ze sobą znaczenie.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) {
  // ...
}

@function opposite-direction($direction) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$vertical-rhythm-baseline: 1.5rem

=size($width, $height: $width)
  // ...

@function opposite-direction($direction)
  // ...
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [CSS Guidelines' Naming Conventions](http://cssguidelin.es/#naming-conventions)






## Stałe

Jeśli jesteś deweloperem pracującym z frameworkami czy też zajmujesz się określonymi bibliotekami, prawdopodobnie często w pracy wykorzystujesz zmienne, których z zasady nie należy zmieniać, niezależnie od sytuacji – a więc ze stałymi. Niestety (albo stety?), Sass nie zapewnia takiej funkcjonalności, dlatego też musimy się ograniczyć do korzystania określonego nazewnictwa, by wywołać taki efekt.

Jak w przypadku wielu innych języków programowania, zalecam korzystanie z nazw opartych o wielkie litery, rozdzielane znakami podkreślenia, celem oznaczenia stałych. Nie tylko jest to już przyjętą konwencją, ale także wyraźnie kontrastuje ze zmiennymi pisanymi małymi literami, rozdzielanymi myślnikami.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$CSS_POSITIONS: top, right, bottom, left, center;

// Źle
$css-positions: top, right, bottom, left, center;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$CSS_POSITIONS: top, right, bottom, left, center

// Źle
$css-positions: top, right, bottom, left, center
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [Dealing With Constants in Sass](http://www.sitepoint.com/dealing-constants-sass/)






## Przestrzenie nazw

Jeśli zamierzasz rozpowszechniać swój kod pisany w Sassie, na przykład jako bibliotekę, framework, grid system czy cokolwiek innego, powinieneś rozważyć ograniczenie przestrzeni wszystkich swoich zmiennych, funkcji, mixinów i selektorów zastępczych. Ograniczy to wówczas możliwość wystąpienia konfliktu z kodem innego pochodzenia.

Na przykład, jeżeli pracujesz nad projektem *Sassowski Jednorożec*, który z założenia ma być wykorzystywany przez deweloperów na całym świecie (kto by nie chciał z czegoś tak nazwanego korzystać?), zastanów się czy nie było by dobrze używać prefiksu `sj-` dla wszelkich nazw. Wydaje się, że będzie to na tyle specyficzne, że zapobiegnie wszelkim kolizjom nazwowym a jednocześnie też na tyle krótkie, że nie będzie sprawiało problemów przy pisaniu kodu.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$sj-configuration: ( ... );

@function sj-rainbow($unicorn) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$sj-configuration: ( ... )

@function sj-rainbow($unicorn)
  // ...
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Warto zaznaczyć, że automatyczne ograniczanie przestrzeni nazw jest jednym ze składników nadchodzących zmian w funkcji <code>@import</code> w wersji 4.0 Sassa. Jak już odpowiednie zmiany wejdą w życie, ręczne ograniczanie przestrzeni stanie się coraz to mniej użyteczne, a w końcu stanie się nawet problematyczne.</p>
</div>



### Dalsze informacje

* [Please Respect the Global CSS Namespace](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)











# Komentarze

CSS jest dosyć specyficznym językiem, pełnym haków i dziwactw. Z tego też powodu, pisany w nim kod powinien być należycie komentowany, zwłaszcza jeśli Ty, lub ktoś inny, ma zamiar czytać i aktualizować ten kod po upływie jakiegoś dłuższego okresu czasu. Warto zapobiec sytuacji, w której Ty albo ktoś inny znajdzie się w sytuacji typu *Ja-tego-nie-pisałem-o-matko*.

Choć CSS może się zdawać prosty, istnieje wiele sytuacji w których warto używać komentarzy. Mogą one objaśniać takie rzeczy, jak:

* strukturę i/lub rolę danego pliku;
* cel, dla którego stworzony został dany zestaw reguł;
* idea przyświecająca magicznej liczbie;
* powód dla określonej deklaracji;
* ustalony porządek deklaracji;
* tok myślenia użyty do stworzenia określonych rzeczy.

Prawdopodobnie pominąłem tu wiele innych ważnych sytuacji. Pisanie komentarzy nie zajmuje jednak tak dużo czasu, jakby to się mogło wydawać, dlatego też warto to robić w trakcie pisania kodu. Powrót do niego później, by dodać jakiś komentarz jest nie tylko pomysłem nierealistycznym, ale jest to także dosyć męczące.






## Pisanie komentarzy

Najlepiej jest, gdy *każdy* zestaw reguł jest poprzedzony komentarzem, napisanym w stylu komentarzy z języka C, który objaśnia znaczenie danego bloku kodu. Komentarz ten także może dotyczyć konkretnych reguł. Dla przykładu:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Klasa pomocnicza, która obetnie zbyt długą linię i doda na koniec wielokropek.
 * 1. Zapobiega przed zawijaniem tekstu, ograniczając go do pojedynczej linii.
 * 2. Dodaje wielokropek na końcu linii.
 */
.ellipsis {
  white-space: nowrap; /* 1 */
  text-overflow: ellipsis; /* 2 */
  overflow: hidden;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Klasa pomocnicza, która obetnie zbyt długą linię i doda na koniec wielokropek.
 * 1. Zapobiega przed zawijaniem tekstu, ograniczając go do pojedynczej linii.
 * 2. Dodaje wielokropek na końcu linii.
 */
.ellipsis
  white-space: nowrap /* 1 */
  text-overflow: ellipsis /* 2 */
  overflow: hidden
{% endhighlight %}
  </div>
</div>

W zasadzie wszystko, co na pierwszy rzut oka może nie być do końca jasne, powinno być komentowane. Nie istnieje coś takiego, jak zbyt duża dokumentacja. Pamiętaj więc o tym, śmiało pisz komentarze!

Komentując rzeczy ściśle związane z Sassem używaj jednoliniowych komentarzy, zamiast bloków w stylu języka C. Dzięki temu takie komentarze nie zostaną dodane do wyjściowego, skompilowanego pliku CSS, nawet w trybie "expanded".

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dodaj moduł do listy modułów importowanych.
// Flaga `!global` jest niezbędna dla aktualizowania globalnej zmiennej.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dodaj moduł do listy modułów importowanych.
// Flaga `!global` jest niezbędna dla aktualizowania globalnej zmiennej.
$imported-modules: append($imported-modules, $module) !global
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [CSS Guidelines' Commenting section](http://cssguidelin.es/#commenting)

{% include donate.html %}






## Dokumentowanie

Każda zmienna, funkcja, mixin czy selektor zastępczy, które mają zostać wielokrotnie użyte w całej bazie kodu, powinne być udokumentowane jako elementy globalnego API z użyciem [SassDoc](http://sassdoc.com).

SassDoc zapewnia dwie różne składnie dla komentarzy: albo w stylu języka C, albo jednoliniowe. Oba z poniższych przykładów są poprawnymi komentarzami dla SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Użyta w całej bazie kodu rozłożenie linii pisma w płaszczyźnie wertykalnej.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Użyta w całej bazie kodu rozłożenie linii pisma w płaszczyźnie wertykalnej.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Użyta w całej bazie kodu rozłożenie linii pisma w płaszczyźnie wertykalnej.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Użyta w całej bazie kodu rozłożenie linii pisma w płaszczyźnie wertykalnej.
/// @type Length
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Trzy ukośniki (<code>/</code>) są wymagane.</p>
</div>

Nie ma szczególnej przewagi jednej składni nad drugą, dlatego wybierz tą, która Ci najbardziej odpowiada.

SassDoc spełnia dwie zasadnicze funkcje:

* wymusza ustandaryzowane komentarze z użyciem systemu opartego o przypisy, dla wszystkich elementów publicznego lub prywatnego API;
* pozwala na generowanie w HTMLu dokumentacji danego API z użyciem jednego z wielu mechanizmów. (program w terminalu, Grunt, Gulp, Broccoli, Node...)

<figure role="group">
<img alt="Documentation generated by SassDoc" src="/assets/images/sassdoc-preview.png" />
<figcaption>Dokumentacja wygenerowana przez SassDoc</figcaption>
</figure>

Przykład mixinu szczegółowo udokumentowanego z użyciem SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mixin pomagający zdefiniować jednocześnie `width` i `height`.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - `width` elementu
/// @param {Length} $height ($width) - `height` elementu
///
/// @example scss - Przykład użycia
/// .foo {
///   @include size(10em);
/// }
///
/// .bar {
///   @include size(100%, 10em);
/// }
///
/// @example css - Rezultat w CSSie
/// .foo {
///   width: 10em;
///   height: 10em;
/// }
///
/// .bar {
///   width: 100%;
///   height: 10em;
/// }
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mixin pomagający zdefiniować jednocześnie `width` i `height`.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - `width` elementu
/// @param {Length} $height ($width) - `height` elementu
///
/// @example scss - Przykład użycia
/// .foo
///   +size(10em)
///
/// .bar
///   +size(100%, 10em)
///
/// @example css - Rezultat w CSSie
/// .foo {
///   width: 10em;
///   height: 10em;
/// }
///
/// .bar {
///   width: 100%;
///   height: 10em;
/// }
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
* [New Features and New Look for SassDoc](http://webdesign.tutsplus.com/articles/new-features-and-a-new-look-for-sassdoc--cms-21914)











# Architektura

Układanie struktury projektu wykorzystującego CSS jest prawdopodobnie jednym z najtrudniejszych zadań, jakie napotkasz w czasie zajmowania się tym projektem. Utrzymanie architektury spójnej i mającej znaczenie jest nawet trudniejsze.

Na szczęście, jedną z kluczowych zalet używania preprocesora CSS jest możliwość podziału bazy kodu na wiele plików bez spadku wydajności (czego skutkiem jest wykorzystywanie klasycznego `@import` w CSSie). Dzięki gruntownym zmianom w dyrektywie `@import`, jakie wniósł Sass, jej wykorzystywanie do dzielenia kodu na wiele plików w fazie programowania jest obecnie absolutnie bezpieczne (a nawet zalecane). Rezultatem jest bowiem pojedynczy plik CSS, który użyty zostanie w fazie produkcji.

Niezbędnym, nawet dla małych projektów, jest także podział na foldery. Analogicznie, nie wkładamy przecież wszystkich dokumentów papierowych na jeden stos, w jedno miejsce. Używa się do tego segregatorów, teczek; jednej na dokumenty dotyczące domu, jednej na papiery z banku, rachunki, itd. Nie ma absolutnie żadnego powodu by robić to inaczej w stosunku do projektu w CSSie. Podział kodu na odpowiednio nazwane foldery pozwoli nam na łatwiejsze dotarcie do potrzebnej nam części kodu wtedy, gdy do niego będziemy wracali.

Dostępnych jest obecnie wiele metod kategoryzacji kodu dla projektów w CSSie: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), podobne do tego w [Bootstrapie](http://getbootstrap.com/), czy w [Foundation](http://foundation.zurb.com/). Wszystkie z nich mają swoje cechy, zalety i wady.

Ja osobiście korzystam z podejścia, które zdaje się być zbliżone do tego ujętego w [SMACSS](https://smacss.com/), stworzonego przez [Jonathana Snooka](http://snook.ca/). Opiera się ono przede wszystkim na prostocie.

<div class="note">
  <p>Wybór architektury jest, co do zasady, uzależniony od charakteru projektu. Dostosuj swoje podejście do tego w zależności od Twoich potrzeb.</p>
</div>





### Dalsze informacje

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [FR] [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)






## Komponenty

Istnieje olbrzymia różnica pomiędzy czymś, co *działa*, a tym co *działa dobrze*. Jak już to zostało wielokrotnie powiedziane, CSS jest dosyć nieuporządkowanym językiem <sup>[potrzebne źródło]</sup>. Im mniej mamy CSSu, tym lepiej. Nie chcemy przecież zajmować się megabajtami kodu pisanego w CSSie. Warto więc pomyśleć o interfejsie jako o kolekcji komponentów, dzięki czemu nasze arkusze stylów będą nie tylko bardziej przejrzyste, lecz także bardziej wydajne.

Komponenty mogą reprezentować wszystko, o tyle o ile:

* spełniają one tylko jedno zadanie;
* mogą być wielokrotne użyte, w wielu miejscach w projekcie;
* są niezależne.


Na przykład, formularz wyszukiwania powinien być traktowany jako komponent. Powinien on być przeznaczony do wielokrotnego użytku, w róznych miejscach, na różnych stronach i w róznych sytuacjach. Jego funkcjonalność i wygląd nie powinny zależeć od jego miejsca w DOMie (czy to będzie nagłówek, panel boczny, stopka...).

Zdecydowana większość elementów interfejsu może być traktowana jako małe elementy i jestem wielkim zwolennikiem tego poglądu. Pomoże Ci on nie tylko zmniejszyć ilość CSSu potrzebnego dla Twojego całego projektu, ale także ułatwi Ci utrzymanie całości kodu w porządku.






## Wzór 7-1

Wróćmy na chwilę do kwestii architektury. W swoich projektach korzystam zazwyczaj z czegoś, co nazywam *wzorem 7-1*: 7 folderów, 1 plik. W dużym skrócie, opiera się on na skategoryzowaniu wszystkich plików cząstkowych (partials) w 7 różnych folderów i na jednym pliku, który znajduje się w folderze głównym (zazwyczaj nazywam ten plik `main.scss`) i importuje wszystkie te części składowe do jednego arkusza stylów.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

I oczywiście:

* `main.scss`

<figure role="group">
  <img src="/assets/images/sass-wallpaper.jpg" alt="One file to rule them all, One file to find Them, One file to bring them all, And in the Sass way merge them." />
  <figcaption>Tapeta stworzona przez <a href="https://twitter.com/julien_he">Julien He</a></figcaption>
</figure>

Co do zasady, możemy tu mówić o czymś takim:

<div class="highlight"><pre><code>
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Reguły dot. typografii
|   ...                  # Itd…
|
|– components/
|   |– _buttons.scss     # Przyciski
|   |– _carousel.scss    # Karuzela
|   |– _cover.scss       # Okładka
|   |– _dropdown.scss    # Rozwijane menu
|   ...                  # Itd…
|
|– layout/
|   |– _navigation.scss  # Nawigacja
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Nagłówek
|   |– _footer.scss      # Stopka
|   |– _sidebar.scss     # Pasek boczny
|   |– _forms.scss       # Formularze
|   ...                  # Itd…
|
|– pages/
|   |– _home.scss        # Style dla strony głównej
|   |– _contact.scss     # Style dla konkretnej podstrony
|   ...                  # Itd…
|
|– themes/
|   |– _theme.scss       # Główny motyw
|   |– _admin.scss       # Główny dla panelu administratora
|   ...                  # Itd…
|
|– utils/
|   |– _variables.scss   # Zmienne Sassa
|   |– _functions.scss   # Funkcje Sassa
|   |– _mixins.scss      # Mixiny Sassa
|   |– _helpers.scss     # Pomocnicze klasy i selektory
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Itd…
|
|
`– main.scss             # Główny plik Sassa
</code></pre></div>

<div class="note">
  <p>Pliki są nazywane według tej samej konwencji, o której była mowa wyżej: do rozdzielania używany jest myślnik.</p>
</div>



### Folder base

W folderze `base/` znajduje się wszystko to, co możemy nazwać "gotowcem" dla naszego projektu. Możemy tam umieścić plik odpowiadający za reset podstawowych reguł CSSa, reguły dotyczące typografii i plik (który ja zazwyczaj nazywam `_base.scss`) definiujący podstawowe style dla powszechnie używanych elementów HTMLa.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`




### Folder layout

Folder `layout/` zawiera wszystko, co odpowiada za rozmieszczenie elementów na stronie czy w aplikacji. Folder ten składać się może z arkuszy stylów przeznaczonych dla głównych partii strony (nagłówek, stopka, nawigacja, pasek boczny...), grid systemu czy nawet reguł CSS dla wszystkich formularzy.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>Folder <code>layout/</code> może być także nazwany folderem <code>partials/</code>, w zależności od Twojego upodobania.</p>
</div>





### Folder components

Dla mniejszych komponentów stworzony został folder `components/`. Podczas gdy `layout/` odpowiada style o charakterze *makro* (definiujące globalną strukturę), `components` kładzie nacisk na widżety. Zawiera on wszystkiego rodzaju moduły, takie jak przyciski, karuzele, rozwijane menu, itd. Z reguły w folderze `components/` znajduje się wiele plików, dlatego że cała strona/aplikacja powinna się składać właśnie z takich drobnych modułów.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>Folder <code>components/</code> może być także nazwany folderem <code>modules/</code>, w zależności od Twojego upodobania.</p>
</div>





### Folder pages

Jeśli masz jakieś style związane z konkretnymi podstronami, lepiej jest umieszczać je w folderze `pages/`, w pliku o nazwie określającej konkretną podstronę. Dla przykładu, popularnym jest rozwiązanie skupiania szczegółowych reguł, mających zastosowanie jedynie dla strony głównej w pliku `_home.scss` w folderze `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>W zależności od Twojego procesu pracy nad projektem, pliki te mogą odseparowane celem uniknięcia scalania ich z innymi do jednego arkusza stylów. Zależy to tylko i wyłącznie od Ciebie.</p>
</div>



### Folder themes

W przypadku większych stron i aplikacji, często spotyka się osobne motywy. Jest wiele sposobów radzenia sobie z nimi, jednak ja osobiście preferuję przechowywać je wszystkie w folderze `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Zależy to w wysokim stopniu od charakteru danego projektu, dlatego też niewykluczone jest, że dla wielu celów taki folder nie będzie w ogóle przydatny.</p>
</div>



### Folder utils

Folder `utils/` zbiera wszystkie narzędzia i funkcje pomocnicze Sassa, używane w ramach projektu. Każda globalna zmienna, funkcja, mixin czy selektor zastępczy powinny się w nim znajdować.

Podstawową zasadą dla tego folderu jest to, by żaden ze znajdujących się w nim pliku nie powodował ani jednej dodatkowej linii do wynikowego, skompilowanego arkusza CSS. Jest to bowiem nic innego, niż zbiór tzw. pomocników.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequently named `_helpers.scss`)

<div class="note">
  <p>Folder <code>utils/</code> może być także nazwany folderem <code>helpers/</code>, <code>sass-helpers/</code> lub <code>sass-utils/</code>, w zależności od Twojego upodobania.</p>
</div>



### Folder vendors

Wreszcie, wiele projektów skorzysta także z obecności folderu `vendors/`, który to zawierać może wszystkie pliki CSS z różnych zewnętrznych bibliotek i frameworków, takich jak Normalize, Bootstrap, jQueryUI,FancyCarouselSliderjQueryPowered i innych. Umieszczanie ich wszystkich w ramach tego samego folderu jest sposobem na zasygnalizowanie, że "nie ja to napisałem, pochodzi to z zewnątrz i nie należy to do mojej odpowiedzialności".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Jeśli zmuszony jesteś do nadpisania jakiejkolwiek z sekcji danego pliku zewnętrznego, zalecam utworzenie ósmego folderu nazwanego `vendors-extensions/`, w którym pliki zawierające reguły nadpisujące powinny nazywać się tak jak te pliki, które są tym samym nadpisywane.

Na przykład, `vendors-extensions/_bootstrap.scss` będzie plikiem zawierającym wszystkie reguły CSS, których przeznaczeniem jest zmodyfikowanie niektórych ze standardowych dla Bootstrapa reguł. Służy to uniknięciu edytowania oryginalnych plików zewnętrznych, co samo w sobie nie należy do najlepszych pomysłów.



### Główny plik

Główny plik (zazwyczaj nazywany jako `main.scss`) powinien być jedynym plikiem Sassa z całej bazy kodu, którego nazwa nie rozpoczyna się od podkreslnika. Plik ten nie powinien zawierać nic poza deklaracjami `@import` i komentarzami.

Pliki powinne być importowane z uwzględnieniem folderów, w których się znajdują, jeden po drugim w następującej kolejności:

1. `vendors/`
2. `utils/`
3. `base/`
4. `layout/`
5. `components/`
6. `pages/`
7. `themes/`

Celem zapewnienia lepszej przejrzystości, plik główny powinien respektować poniższe zasady:

* jeden plik dla każdej deklaracji `@import`;
* jeden `@import` na linię;
* bez nowej linii pomiędzy importami z tego samego folderu;
* rozszerzenie pliku i poprzedzający w nazwie podkreślnik powinny być pominięte.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'utils/variables';
@import 'utils/functions';
@import 'utils/mixins';
@import 'utils/placeholders';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import vendors/bootstrap
@import vendors/jquery-ui

@import utils/variables
@import utils/functions
@import utils/mixins
@import utils/placeholders

@import base/reset
@import base/typography

@import layout/navigation
@import layout/grid
@import layout/header
@import layout/footer
@import layout/sidebar
@import layout/forms

@import components/buttons
@import components/carousel
@import components/cover
@import components/dropdown

@import pages/home
@import pages/contact

@import themes/theme
@import themes/admin
{% endhighlight %}
  </div>
</div>

Istnieje także inne podejście do importowania plików cząstkowych, które wydaje mi się równie poprawne. Z jednej strony, plik główny zdaje się być bardziej czytelny, z drugiej zaś jego aktualizowanie może być nieco bardziej utrudnione. W każdym jednak razie, decyzję pozostawiam Tobie. Zgodnie z tą metodą, plik główny powinien respektować poniższe założenia:

* jeden `@import` na folder;
* importowane pliki pod `@import`;
* każdy plik na swojej linii;
* pusta linia po ostatnim imporcie dla danego folderu;
* rozszerzenie pliku i poprzedzający w nazwie podkreślnik powinny być pominięte.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import
  'vendors/bootstrap',
  'vendors/jquery-ui';

@import
  'utils/variables',
  'utils/functions',
  'utils/mixins',
  'utils/placeholders';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/contact';

@import
  'themes/theme',
  'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import
  vendors/bootstrap,
  vendors/jquery-ui

@import
  utils/variables,
  utils/functions,
  utils/mixins,
  utils/placeholders

@import
  base/reset,
  base/typography

@import
  layout/navigation,
  layout/grid,
  layout/header,
  layout/footer,
  layout/sidebar,
  layout/forms

@import
  components/buttons,
  components/carousel,
  components/cover,
  components/dropdown

@import
  pages/home,
  pages/contact

@import
  themes/theme,
  themes/admin
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Aby nie importować pojedynczo każdego z plików, powstało rozszerzenie do Ruby Sass zwane <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, które umożliwia wykorzystywanie tzw. glob patterns w <code>@import</code> Sassa, takich jak <code>@import "components/*"</code>.</p>
  <p>Niemniej jednak nie zalecam korzystania z tego rozwiązania, bowiem importuje ono pliki według porządku alfabetycznego, co jest prawdopodobnie nie tym, czego oczekujesz. Zwłaszcza w przypadkach, gdy mamy do czynienia z językiem wrażliwym na kolejność plików, z jakim niewątpliwie mamy tutaj do czynienia.</p>
</div>






## Plik wstydu

Pojawił się ostatnio interesujący pomysł, którego twórcami uznać można [Harry'ego Robertsa](http://csswizardry.com), [Dave'a Ruperta](http://daverupert.com) and [Chrisa Coyiera](http://css-tricks.com). Zakłada on mianowicie umieszczenie wszelkich deklaracji CSSa, haków i rzeczy, z których nie jesteśmy do końca dumni, do tzw. *pliku wstydu*. Ten plik, przewrotnie nazwany `_shame.css`, importowany jest po wszelkich innych plikach, na samym końcu arkusza stylów.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Fix dla szczegółowości nawigacji.
 *
 * Ktoś raczył użyć ID w kodzie nagłowka (`#header a {}`), który przysłania
 * selektory nawigacji (`.site-nav a {}`). Użyj !Important by go napidać
 * do czasu gdy ktoś naprawi to paskudztwo w nagłówku.
 */
.site-nav a {
    color: #BADA55 !important;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Fix dla szczegółowości nawigacji.
 *
 * Ktoś raczył użyć ID w kodzie nagłowka (`#header a {}`), który przysłania
 * selektory nawigacji (`.site-nav a {}`). Użyj !Important by go napidać
 * do czasu gdy ktoś naprawi to paskudztwo w nagłówku.
 */
.site-nav a
    color: #BADA55 !important
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)











# Responsive Web Design i breakpointy

Nie wydaje mi się, by zagadnienie Responsive Web Design wymagało wprowadzenia. Zwłaszcza teraz, gdy jest ono obecne dosłownie wszędzie. Mógłbyś jednak zapytać *dlaczego przewodnik dla stylu Sassa zawiera sekcję poświęconą RWD?* Tak na prawdę to jest kilka rzeczy, które można zrobić aby pracowało się z breakpointami przyjemniej, dlatego też postanowiłem poruszyć ten temat tutaj.






## Nazywanie breakpointów

Wydaje mi się, że można spokojnie powiedzieć, że media queries nie powinny być podporządkowane konkretnym urządzeniom. Dla przykładu, celowanie w iPady czy telefony Blackberry jest niewątpliwie złym pomysłem. Media queries powinny zajmować się pewnym zakresem rozmiarów ekranów, do czasu kiedy design ulega załamaniu i następna media query zaczyna obowiązywać. 

Z tych samych powodów, breakpointy nie powinny być nazywane w nawiązaniu do konkretnych urządzeń, lecz bardziej ogólnie. Zwłaszcza teraz, gdy telefony stają się większe niż niektóre tablety, niektóre zaś tablety większe niż komputery o małych ekranach, i tak dalej...

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$breakpoints: (
  'medium': (min-width: 800px),
  'large': (min-width: 1000px),
  'huge': (min-width: 1200px),
);

// Źle
$breakpoints: (
  'tablet': (min-width: 800px),
  'computer': (min-width: 1000px),
  'tv': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$breakpoints: ("medium": (min-width: 800px), "large": (min-width: 1000px), "huge": (min-width: 1200px))

// Źle
$breakpoints: ("tablet": (min-width: 800px), "computer": (min-width: 1000px), "tv": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

Każda konwencja nazwowa, jaką w tym miejscu przyjmiemy, będzie dobra o ile tylko będzie przejrzysta i da w wystarczającym stopniu do zrozumienia, że nie jest ona związana konkretnymi urządzeniami.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$breakpoints: (
  'seed': (min-width: 800px),
  'sprout': (min-width: 1000px),
  'plant': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$breakpoints: ("seed": (min-width: 800px), "sprout": (min-width: 1000px), "plant": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>




### Dalsze informacje

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)






## Menadżer breakpointów

W momencie gdy Twoje breakpointy są już nazwane, potrzebujesz sposobu by ich użyć w faktycznych media queries. Jest wiele możliwości by to zrobić, jednak muszę przyznać że jestem wielkim fanem funkcji wydobywających breakpointy z map.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Menadżer responsywności.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media #{inspect(map-get($breakpoints, $breakpoint))} {
      @content;
    }
  }

  @else {
    @error 'Nie znaleziono wartości dla `#{$breakpoint}`. '
         + 'Proszę się upewnić, że jest ona zdefiniowana w mapie `$breakpoints`.';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Menadżer responsywności.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
=respond-to($breakpoint)
  @if map-has-key($breakpoints, $breakpoint)
    @media #{inspect(map-get($breakpoints, $breakpoint))}
      @content

  @else
    @error 'Nie znaleziono wartości dla `#{$breakpoint}`. '
         + 'Proszę się upewnić, że jest ona zdefiniowana w mapie `$breakpoints`.'
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Oczywiście, jest to dosyć uproszczone podejście do zarządzania breakpointami, które nie spełni oczekiwań w przypadku konstrukcji bardziej złożonych.</p>
  <p>Jeśli potrzebujesz rozwiązania bardziej rozbudowanego, zalecam nie odkrywać Ameryki na nowo, sprawdź natomiast coś, co jest już sprawdzone, na przykład <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> czy <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>





### Dalsze informacje

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)






## Używanie media queries

Nie tak dawno temu, w społeczności pojawiła się dosyć burzliwa dyskusja na temat tego gdzie powinno się deklarować media queries: czy powinny one się znajdować w ramach bloków selektorów (na co Sass pozwala), czy raczej winny one być odseparowane. Muszę przyznać, że jestem zwolennikiem poglądu by *media queries znajdowały się w ramach selektorów*, bowiem współgra on z ideą *komponentów*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  @include respond-to('medium') {
    color: blue;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  +respond-to('medium')
    color: blue
{% endhighlight %}
  </div>
</div>

Co prowadzi do następującego CSSu:

{% highlight css %}
.foo {
  color: red;
}

@media (min-width: 800px) {
  .foo {
    color: blue;
  }
}
{% endhighlight %}

Możesz usłyszeć opinie, że taka konwencja prowadzi do duplikowania media queries w wynikowym CSSie. Jest to niewątpliwie prawdą. Należy jednak zaznaczyć, że [przeprowadzono w tej kwestii testy](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries), które wykazały że nie ma to żadnego znaczenia, w momencie gdy Gzip (lub inna metoda kompresji) została użyta na serwerze:

> … rozstrzygając zagadnienie łączenia bądź rozbijania Media Queries w wielu miejscach i konsekwencji, jakie oba rozwiązania niosą dla kwestii wydajności, doszliśmy do wniosku, że różnica jest conajmniej minimalna, w zasadzie nieistniejąca.<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), odnośnie [Breakpoint](http://breakpoint-sass.com/)

Jeśli jednak masz obawy co do duplikowania media queries, istnieją takie narzędzia do ich scalania, jak [ten gem](https://github.com/aaronjensen/sass-media_query_combiner). Muszę Cię jednak ostrzec przed możliwymi skutkami ubocznymi przenoszenia z miejsca na miejsce kodu CSS. Należy wszak pamiętać, że w tym wypadku kolejność źródłowa ma kluczowe znaczenie.



### Dalsze informacje

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)











# Zmienne

Zmienne należą do istoty każdego języka programowania. Pozwalają nam na wielokrotne użycie określonych wartości bez potrzeby ich kopiowania. Przede wszystkim jednak, umożliwiają nam one aktualizowanie tych wartości w bardzo łatwy sposób.

Można jednak powiedzieć, że CSS jest niczym innym jak jednym wielkim kotłem pełnym wielu różności. W przeciwieństwie do innych języków, CSS nie zna koncepcji zasięgu widoczności. Możliwość powstania konfliktu nazw musimy mieć więc stale na uwadze, jeśli dodajemy nowe zmienne.

Moja rada jest następujące: twórzmy zmienne tylko wtedy, kiedy ich istnienie ma sens. Nie róbmy tego pochopnie bo to nam w niczym nie pomoże. Nowa zmienna powinna być tworzona kiedy spełnione są następujące warunki:

* określona wartość powtarza się conajmniej dwa razy;
* określona wartość będzie w przyszłości aktualizowana, co najmniej raz;
* wszystkie wystąpienia danej wartości są powiązane ze zmienną (nie przez przypadek).

Zasadniczo nie ma powodu, aby deklarować zmienną która nigdy nie będzie aktualizowana albo taką, która będzie użyta tylko w jednym miejscu.






## Zasięg

Zasięg widoczności zmiennych w Sassie zmienił się w trakcie jego historii. Do niedawna, zmienne deklarowane w ramach zestawów reguł, czy też innych zakresów, standardowo traktowane były jako zmienne lokalne. Co ciekawe jednak, w przypadku gdy istniała już globalna zmienna o tej samej nazwie, mogła ona zostać nadpisana przez tą przypisaną lokalnie. Od czasu wersji 3.4, Sass już właściwie radzi sobie z koncepcją zasięgów i zamiast tego tworzy teraz nową, lokalną zmienną.

Dokumentacja traktuje także o *przysłanianiu globalnych zmiennych (variable shadowing)*. Deklarując zmienną o lokalnym zasięgu, która z kolei już istnieje w zasięgu globalnym, ta lokalna *przysłania* tą globalną. Mówiąc wprost, nadpisuje ją na potrzeby lokalnego zasięgu.

Poniższy przykład tłumaczy koncepcję *przysłaniania zmiennych*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Zainicjuj globalną zmienną na poziomie głównym.
// W tym przypadku, użycie flagi `!global` jest opcjonalne.
$variable: 'initial value' !global;

// Utwórz mixin, który nadpisuje globalną zmienną.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Utwórz lokalną zmienną, która przysłania tą globalną.
  $variable: 'local value';

  // Użyj mixinu: zastąpi on globalną zmienną.
  @include global-variable-overriding;

  // Wydrukuj wartość zmiennej.
  // Będzie to ta **lokalna**, jako że przysłoniła tą globalną.
  content: $variable;
}

// Wydrukuj zmienną w innym selektorze, który jej nie przysłoni.
// Będzie to ta **globalna**, jak oczekiwano.
.other-local-scope::before {
  content: $variable;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Zainicjuj globalną zmienną na poziomie głównym.
// W tym przypadku, użycie flagi `!global` jest opcjonalne.
$variable: 'initial value' !global

// Utwórz mixin, który nadpisuje globalną zmienną.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
  // Utwórz lokalną zmienną, która przysłania tą globalną.
  $variable: 'local value'

  // Użyj mixinu: zastąpi on globalną zmienną.
  +global-variable-overriding

  // Wydrukuj wartość zmiennej.
  // Będzie to ta **lokalna**, jako że przysłoniła tą globalną.
  content: $variable

// Wydrukuj zmienną w innym selektorze, który jej nie przysłoni.
// Będzie to ta **globalna**, jak oczekiwano.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>

{% include donate.html %}






## Flaga `!default`

Budując bibliotekę, framework, system gridów albo jakikolwiek inny kod Sassa, który ma być rozpowszechniany i używany przez innych deweloperów, wszystkie zmienne konfigurujące powinny być zadeklarowane ze zmienną `!default`, dzięki czemu będą one mogły być nadpisane.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$baseline: 1em !default;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$baseline: 1em !default
{% endhighlight %}
  </div>
</div>

Dzięki temu, deweloper może zdefiniować własną zmienną `$baseline` *przed* importowaniem Twojej biblioteki bez obawy o to, że jego zmienna ulegnie zmianie.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Zmienna dewelopera
$baseline: 2em;

// `$baseline` deklarowana przez Twoją bibliotekę
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Zmienna dewelopera
$baseline: 2em

// `$baseline` deklarowana przez Twoją bibliotekę
@import your-library

// $baseline == 2em
{% endhighlight %}
  </div>
</div>






## Flaga `!global`

Flaga `!global` powinna być użyta jedynie wtedy, gdy zmienna z lokalnego zasięgu ma nadpisać zmienną globalną. Deklarując zmienną na głównym poziomie, flaga `!global` powinna zostać pominięta.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$baseline: 2em;

// Źle
$baseline: 2em !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$baseline: 2em

// Źle
$baseline: 2em !global
{% endhighlight %}
  </div>
</div>






## Wiele zmiennych lub map

Używanie map zamiast wielu odrębnych zmiennych ma swoje zalety. Pozwala to przede wszystkim na korzystanie z pętli, co nie jest możliwe w przypadku zmiennych.

Kolejnym plusem tworzenia map jest możliwość konstruowania małych funkcji wydobywających, dających nam przyjazne w obsłudze API. Na przykład, rozważ następujący kod:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mapa z-indeksów, zbiera wszystkie warstwy Z aplikacji
/// @access private
/// @type Map
/// @prop {String} key - Nazwa warstwy
/// @prop {Number} value - Wartość Z przypisana do klucza
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Wydobądź wartość z-index z nazwy warstwy
/// @access public
/// @param {String} $layer - Nazwa warstwy
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mapa z-indeksów, zbiera wszystkie warstwy Z aplikacji
/// @access private
/// @type Map
/// @prop {String} key - Nazwa warstwy
/// @prop {Number} value - Wartość Z przypisana do klucza
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Wydobądź wartość z-index z nazwy warstwy
/// @access public
/// @param {String} $layer - Nazwa warstwy
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>











# Rozwinięcia

Dyrektywa `@extend` jest jedną z tych funkcjonalności Sassa, która sprawiła że Sass stał się tak popularny. Warto w tym miejscu przypomnieć, że dyrektywa ta pozwala na przekazanie Sassowi, żeby potraktował element A tak, jakby pasował także do selektora B. Nie ulega wątpliwości, że może to być pomocne przy pisaniu modułowego CSSa.

Niemniej jednak muszę Cię przestrzec przed tą dyrektywą. Nie ujmując jej zdolności, `@extend` jest wciąż koncepcją która może sprawić więcej szkód, niż korzyści, zwłaszcza jeśli zostanie niewłaściwie użyta. Chodzi mianowicie o to, że rozwijając dany selektor, nie masz możliwości odpowiedzieć na poniższe pytania bez szczegółowej wiedzy na temat całej bazy kodu:

* gdzie zostanie dodany mój obecny selektor?
* czy może to spowodować jakieś niepożądane efekty?
* jak obszerny będzie kod CSS, wygenerowany z tego pojedynczego rozwinięcia?

Rezultat tego może być albo znikomy, albo katastrofalny w skutkach. Z tego też powodu, moją pierwszą radą będzie unikanie dyrektywy `@extend`. Może to zabrzmieć brutalnie, ale koniec końców może Ci to zaoszczędzić wiele problemów.

Mimo to, jest takie powiedzenie jak:

> Nigdy nie mów nigdy.<br>
> &mdash; Jak się nagle okazuje, [to wcale nie była Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Są bowiem sytuacje w których rozwijanie selektorów może być pomocne i warte uwagi. Miej jednak w pamięci poniższe zasady, by nie wpakować się w tarapaty:

* Korzystaj z rozwinięć w ramach tego samego modułu.
* Korzystaj z rozwinięć tylko na selektorach zastępczych.
* Upewnij się, by selektor zastępczy który rozwijasz jest użyty w arkuszu tak rzadko, jak to jest możliwe.

Jeśli zamierzasz korzystać z tej dyrektywy, musisz także wiedzieć, że nie współpracuje on dobrze z blokami `@media`. Jak zapewne wiesz, Sass nie potrafi rozwijać zewnętrznych selektorów z wnętrza media query. Kompilator w takich przypadkach po prostu się wysypuje, mówiąc Ci jednocześnie, że tak się nie robi. Nie jest to zbyt przyjemne.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // To nie działa. Co więcej - kompilator się wysypie.
    @extend .foo;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  content: 'foo'

@media print
  .bar
    // To nie działa. Co więcej - kompilator się wysypie.
    @extend .foo
{% endhighlight %}
  </div>
</div>

> Nie można używać @extend na zewnętrznym selektorze, z wnętrza @media.<br>
> Można tylko to robić w ramach tej samej dyrektywy.

<div class="note">
  <p>Często się mówi, że <code>@extend</code> pomaga w zmniejszaniu rozmiaru pliku, z racji tego że łączy selektory zamiast duplikować własności. To prawda, jednak różnica po zastosowaniu kompresji <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a> jest nieistotna.</p>
  <p>Jeśli jednak nie możesz użyć kompresji Gzip (lub jej ekwiwalentu), korzystanie z dyrektywy <code>@extend</code> może nie być wcale takie złe, o ile wiesz co robisz.</p>
</div>

Podsumowując, **przestrzegam przed korzystaniem z dyrektywy `@extend`**, chyba że istnieją do tego specyficzne przesłanki. Nie twierdzę jednak, że `@extend` powinien być absolutnie zakazany.



### Dalsze informacje

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)











# Mixiny

Mixiny są jedną z tych funkcjonalności Sassa, z których się najczęściej korzysta. Są one kluczowe dla ponownego wykorzystywania komponentów i dla zgodności z zasadą DRY. I słusznie: mixiny pozwalają twórcom na definiowanie stylów które mogą być wykorzystywane wszędzie w arkuszu stylu bez potrzeby korzystania z niesemantycznych klas, takich jak `.float-left`.

Mogą one zawierać pełne reguły CSS i zasadniczo wszystko, co wszędzie indziej w dokumencie Sassa jest dozwolone, może być użyte. Mogą one nawet przyjmować argumenty, zupełnie jak funkcje. Nie trzeba więc dodawać, że możliwości są niemal nieograniczone.

Czuję jednak potrzebę by ostrzec Cię przed nadużywaniem mocy mixinów. Należy mieć bowiem ciągle na uwadze pojęcie *prostoty*. Może to się wydawać kuszące, by budować potężne, rozbudowane mixiny. Jest to jedna gruba przesada i, niestety, wielu deweloperów cierpi na tą chorobę. Nie staraj się by Twój kod robił wszystko na raz. Jeśli dany mixin rozwinie się na więcej niż 20 linii, rozważ wydzielenie z niego części albo po prostu zastanów się nad nim i przepisz go jeszcze raz.






## Podstawy

Mając to na uwadze, mixiny są niezwykle przydatne i, bez wątpienia, powinieneś ich używać. Główną zasadą jest w tym przypadku to, że gdy dostrzegasz grupę własności CSS które zawsze występują razem z jakiegoś powodu (nie z przypadku), możesz je umieścić w mixinie. [Micro-clearfix hack od Nicolasa Gallaghera](http://nicolasgallagher.com/micro-clearfix-hack/), na przykład, zasługuje na umieszczenie go w (bezargumentowym) mixinie.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Pomocnik do oczyszczenia floatów
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Pomocnik do oczyszczenia floatów
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix
  &::after
    content: ''
    display: table
    clear: both
{% endhighlight %}
  </div>
</div>

Innym słusznym przykładem może być mixin do określenia rozmiarów elementu, definiujący zarówno `width` i `height`. Nie tylko sprawi on, że kod będzie łatwiejszy do pisania, ale i przyjemniejszy do czytania.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Pomocnik do określenia rozmiarów elementu
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Pomocnik do określenia rozmiarów elementu
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)






## Listy argumentów

Mając do czynienia z nieokreśloną liczbą argumentów w mixinie, zawsze używaj `arglist`, zamiast listy. Pomyśl o `arglist` jako o ósmym typie danych w Sassie, który podawany jest jako dowolna liczba argumentów dla mixinu albo funkcji, której sygnatura zawiera `...`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin shadows($shadows...) {
  // type-of($shadows) == 'arglist'
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=shadows($shadows...)
  // type-of($shadows) == 'arglist'
  // ...
{% endhighlight %}
  </div>
</div>

Budując mixin, który akceptuje wiele argumentów (3 lub więcej), pomyśl dwa razy zanim wprost podasz je jako listę albo mapę myśląc, że tak będzie łatwiej.

Sass jest dosyć sprytny jeśli chodzi o deklaracje mixinów i funkcji, do tego stopnia że pozwala on na podawanie listy lub mapy jako `arglist` do funkcji/mixinu, które tym samym zostają przeanalizowane jako argumenty.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin dummy($a, $b, $c) {
  // ...
}

// Dobrze
@include dummy(true, 42, 'kittens');

// Dobrze ale źle
$params: true, 42, 'kittens';
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3));

// Dobrze
$params: true, 42, 'kittens';
@include dummy($params...);

// Dobrze
$params: (
  'c': 'kittens',
  'a': true,
  'b': 42
);
@include dummy($params...);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=dummy($a, $b, $c)
  // ...

// Dobrze
+dummy(true, 42, 'kittens')

// Dobrze ale źle
$params: true, 42, 'kittens'
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3))

// Dobrze
$params: true, 42, 'kittens'
+dummy($params...)

// Dobrze
$params: ( 'c': 'kittens', 'a': true, 'b': 42, )
+dummy($params...)
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)






## Mixiny a vendor prefixy

Definiowanie własnych mixinów do radzenia sobie z vendor prefixami dla niewspieranych lub częściowo wspieranych własności CSS może być kuszące. My jednak tego nie chcemy. Przede wszystkim, jeśli możesz użyć [Autoprefixera](https://github.com/postcss/autoprefixer), rób to. Został on napisany do tego celu i zrobi to bez wątpienia lepiej. 

Niestety, są przypadki w których z Autoprefixera skorzystać nie możemy. Jeśli natomiast używasz [Bourbona](http://bourbon.io/) albo [Compassu](http://compass-style.org/), zapewne wiesz że oba rozwiązania zapewniają możliwość poradzenia sobie z vendor prefixami za Ciebie.

Jeśli jednak nie możesz skorzystać ani z Autoprefixera, ani z Bourbona czy Compassu, wtedy i tylko wtedy, możesz tworzyć własne mixiny dla prefixowania własności CSSa. Ale proszę, nie twórz pojedynczych mixinów dla każdej z własności.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Źle
@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  transform: $value;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Źle
=transform($value)
  -webkit-transform: $value
  -moz-transform: $value
  transform: $value
{% endhighlight %}
  </div>
</div>

Zrób to mądrzej.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mixin do produkowania vendor prefixów
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - Własność CSS bez prefixu
/// @param {*} $value - Wartość
/// @param {List} $prefixes - Lista prefixów
@mixin prefix($property, $value, $prefixes: ()) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }

  #{$property}: $value;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mixin do produkowania vendor prefixów
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - Własność CSS bez prefixu
/// @param {*} $value - Wartość
/// @param {List} $prefixes - Lista prefixów
=prefix($property, $value, $prefixes: ())
  @each $prefix in $prefixes
    -#{$prefix}-#{$property}: $value

  #{$property}: $value
{% endhighlight %}
  </div>
</div>

Użycie takiego mixinu powinno być dosyć jasne:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  @include prefix(transform, rotate(90deg), webkit ms);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  +prefix(transform, rotate(90deg), webkit ms)
{% endhighlight %}
  </div>
</div>

Proszę mieć jednak na uwadze, że jest to dosyć kiepskie rozwiązanie. Na przykład, nie rozwiąże to problemu bardziej skomplikowanych składni, takich jak te wymagane dla Flexboxa. W tych przypadkach, użycie Autoprefixera było by o wiele lepszą opcją.



### Dalsze informacje

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)











# Instrukcje warunkowe

Jak już prawdopodobnie wiesz, Sass zapewnie wsparcie dla instrukcji warunkowych poprzez dyrektywy `@if` i `@else`. O ile nie masz średnio lub bardzo skomplikowanych rozwiązań w swoim kodzie, nie ma potrzeby dla instrukcji warunkowych w Twoich arkuszach. W zasadzie to one głównie istnieją dla potrzeb bibliotek i frameworków.

W każdym razie, jeśli kiedykolwiek będziesz potrzebował z nich skorzystać, zrób to w zgodności z poniższymi zasadami:

* Bez nawiasów, chyba że są potrzebne;
* Jedna pusta linia przed `@if`;
* Kod po nawiasie otwierającym (`{`) na następnej linii;
* `@else` na tej samej linii, co nawias zamykający (`}`);
* Nowa pusta linia po ostatnim nawiasie zamykającym (`}`), chyba że następna linia zaczyna się od takiego nawiasu (`}`).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
@if $support-legacy {
  // ...
} @else {
  // ...
}

// Źle
@if ($support-legacy == true) {
  // ...
}
@else {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
@if $support-legacy
  // ...
@else
  // ...

// Źle
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

Testując czy podana wartość jest fałszywa, zawsze używaj słowa `not` zamiast testowania wobec `false` czy `null`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
@if not index($list, $item) {
  // ...
}

// Źle
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
@if not index($list, $item)
  // ...

// Źle
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

Używając instrukcji warunkowych w ramach funkcji by zwracały one różne rezultaty, w zależności od jakiegoś warunku, zawsze upewnij się by funkcja miała instrukcję `@return` poza jakimkolwiek warunkowym blokiem.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// Źle
@function dummy($condition) {
  @if $condition {
    @return true;
  } @else {
    @return false;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// Źle
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>











# Pętle

Ponieważ Sass daje możliwość korzystania z kompleksowych struktur danych, takich jak [listy](#listy) and [mapy](#mapy), nie jest niespodzianką że Sass zapewnia także dostęp do iteracji wewnątrz tych struktur.

Obecność pętli zakłada zazwyczaj stosunkowo skomplikowane rozwiązania, które w arkuszach Sassa znaleźć się raczej nie powinny. Zanim użyjesz pętli zastanów się, czy aby na pewno rozwiąże ona jakiś problem.






## Each

Pętla `@each` jest zdecydowanie najczęściej używaną z trzech form pętli dostarczanych przez Sassa. Zapewnia ona czyste API do iteracji wewnątrz listy czy mapy.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $theme in $themes {
  .section-#{$theme} {
    background-color: map-get($colors, $theme);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $theme in $themes
  .section-#{$theme}
    background-color: map-get($colors, $theme)
{% endhighlight %}
  </div>
</div>

Iterując wewnątrz mapy, zawsze używaj `$key` i `$value` jako nazw zmiennych by wymusić spójność.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $key, $value in $map
  .section-#{$key}
    background-color: $value
{% endhighlight %}
  </div>
</div>

Upewnij się także, by respektować poniższe zasady dla lepszej czytelności kodu:

* Zostawiaj pustą linię przed `@each`;
* Zostawiaj pustą linię po nawiasie zamykającym (`}`), chyba że następna linia zawiera taki właśnie nawias.






## For

Pętle `@for` mogą wydawać się użyteczne w połączeniu z pseudo-klasą `:nth-*` w CSSie. Za wyjątkiem tych sytuacji, zaleca się byś preferował pętle `@each` jeśli na prawdę *musisz* iterować wewnątrz czegoś.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@for $i from 1 through 10
  .foo:nth-of-type(#{$i})
    border-color: hsl($i * 36, 50%, 50%)
{% endhighlight %}
  </div>
</div>

Zawsze używaj `$i` jako nazwy zmiennej by trzymać się ustalonej konwencji i, chyba że masz ku temu jakiś na prawdę ważny powód, nigdy nie używaj słowa `to`. Korzystaj zawsze z `through`. Wielu deweloperów nawet nie zdaje sobie sprawy z tego, że Sass daje taką możliwość.

Pamiętaj także o następujących zasadach:

* Zawsze umieszczaj nową linię przed `@each`;
* Zostawiaj pustą linię po nawiasie zamykającym (`}`), chyba że następna linia zawiera taki właśnie nawias.






## While

Pętle `@while` nie mają absolutnie żadnego uzasadnienia, by z nich korzystać w projektach Sassa. Zwłaszcza skoro nie ma możliwości przerwania pętli z jej środka. **Nie używaj**.











# Ostrzeżenia i błędy

Jeśli miałbym wybrać jedną z funkcji Sassa, która jest najczęściej pomijana przez deweloperów, jest to niewątpliwie możliwość do dynamicznego wysyłania ostrzeżeń i błędów. Co może być dla niektórych niespodzianką, Sass zawiera trzy własne dyrektywy do wydruku treści w przeznaczonych do tego systemach (CLI, aplikacja do kompilowania,...):

* `@debug`;
* `@warn`;
* `@error`.

Odłóżmy `@debug` na bok, bowiem stworzony on został z myślą o debugowaniu SassScriptu, który obecnie nie jest w naszym kręgu zainteresowania. Pozostały nam więc `@warn` i `@error`, które są zauważalnie podobne, z jednym tylko wyjątkiem - jedna z nich zatrzymuje kompilator, druga zaś nie. Mam nadzieję, że się już domyślasz, która jak działa.

Warto także zaznaczyć, że w typowym projekcie Sassa, ostrzeżenia i błędy mogą być zjawiskiem dosyć częstym. Każdy mixin czy funkcja wymagająca określonego argumentu może zgłosić błąd jeśli coś źle pójdzie, albo przynajmniej wyświetlić ostrzeżenie.



### Dalsze informacje

* [An Introduction To Error Handling](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/HugoGiraudel/SassyLogger)






## Ostrzeżenia

Weźmy za przykład tą funkcję z projektu [Sass-MQ](https://github.com/sass-mq/sass-mq), która konwertuje wartości z `px` do `em`:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size) {
  @if unitless($px) {
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.';
    @return mq-px2em($px + 0px);
  } @else if unit($px) == em {
    @return $px;
  }

  @return ($px / $base-font-size) * 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size)
  @if unitless($px)
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.'
    @return mq-px2em($px + 0px)
  @else if unit($px) == em
    @return $px

  @return ($px / $base-font-size) * 1em
{% endhighlight %}
  </div>
</div>

Jeśli podana wartość okaże się nie mieć jednostki, funkcja z góry zakłada, że chodzi tu o piksele. W tym miejscu, takie założenie może być ryzykowne i z tego też powodu użytkownik powinien być ostrzeżony, że oprogramowanie zrobiło coś, co może być uznane za nieoczekiwane.






## Błędy

Błędy, w odróżnieniu do ostrzeżeń, zatrzymują kompilator i zapobiegają jego dalszemu działaniu. W dużym skrócie, zatrzymują proces kompilacji i wyświetlają wiadomość w strumieniu wyjścia, a także w tzw. śladzie stosu (stack trace), co pomaga w debugowaniu. Z tego też powodu błędu powinny być wysyłane w sytuacji, gdy nie ma innej możliwości by program mógł działać dalej. Kiedy to jest tylko możliwe, spróbuj obejść ten problem i wyświetlać zamiast tego ostrzeżenie.

Dla przykładu, powiedzmy że budujesz funkcję wydobywającą wartość z danej mapy. Mógłbyś wysyłać błąd za każdym razem, gdy żądany klucz nie istnieje.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mapa z-indeksów, zbiera wszystkie warstwy Z aplikacji
/// @access private
/// @type Map
/// @prop {String} key - Nazwa warstwy
/// @prop {Number} value - Wartość Z przypisana do klucza
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Wydobądź wartość z-index z nazwy warstwy
/// @access public
/// @param {String} $layer - Nazwa warstwy
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @if not map-has-key($z-indexes, $layer) {
    @error 'Brak warstwy `#{$layer}` w $z-indexes. '
         + 'Warstwa powinna być jedną z #{map-keys($z-indexes)}.';
  }

  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mapa z-indeksów, zbiera wszystkie warstwy Z aplikacji
/// @access private
/// @type Map
/// @prop {String} key - Nazwa warstwy
/// @prop {Number} value - Wartość Z przypisana do klucza
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Wydobądź wartość z-index z nazwy warstwy
/// @access public
/// @param {String} $layer - Nazwa warstwy
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @if not map-has-key($z-indexes, $layer)
    @error 'Brak warstwy `#{$layer}` w $z-indexes. '
         + 'Warstwa powinna być jedną z #{map-keys($z-indexes)}.'

  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>











# Narzędzia

Jedną z niewątpliwych zalet preprecessora CSS tak popularnego jak Sass jest to, że dostępny jest cały ekosystem frameworków, pluginów, bibliotek i narzędzi. Po 8 latach od powstania, zbliżamy się do momentu w którym [wszystko co może być napisane w Sassie, zostało napisane w Sassie](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

Mimo to, moim zdaniem należy ograniczyć liczbę zależności do ścisłego minimum. Zarządzanie zależnościami jest swoistym piekłem, którego częścią zdecydowanie nie chcesz być. Poza tym, potrzeba korzystania z zewnętrznych zależności, w odniesieniu do Sassa, jest mała, jeśli nie znikoma.




## Compass

[Compass](http://compass-style.org/) jest jednym z frameworków dostępnych dla Sassa. Zaprojektowany przez [Chrisa Eppsteina](https://twitter.com/chriseppstein), jednego z dwóch głównych twórców Sassa. Jest on obecnie dosyć popularny i nie widzę powodu, dla którego miało by się to w najbliższym czasie zmienić. 

Osobiście nie korzystam już z Compassa. Głównym tego powodem jest fakt, że powoduje on znaczne jego spowolnienie. Ruby Sass jest powolne samo w sobie, więc dodawanie więcej Ruby i Sassa ponad to wcale nie pomaga.

Rzecz w tym, że tak na prawdę używa się bardzo małego procenta całej funkcjonalności tego frameworka. Compass jest olbrzymi. Mixiny dla zapewnienia kompatybilności pomiędzy przeglądarkami to tylko wierzchołek góry lodowej. Funkcje matematyczne, funkcje pomagające z obrazkami, spriting... Compass dodaje bardzo dużo funkcjonalności.

Niestety, można powiedzieć że to są tylko słodycze, a na prawdę brak jest jakiejś *zabójczej* funkcjonalności. Wyjątkiem może być funkcja budowania sprite'ów, która jest *na prawdę świetna*, lecz [Grunticon](https://github.com/filamentgroup/grunticon) i [Grumpicon](http://grumpicon.com/) robią to równie dobrze i mają ponadto tą zaletę, że można je dołączyć do zautomatyzowanego procesu budowania (jeśli z takiego korzystamy).

W każdym bądź razie, w żadnym wypadku nie zabraniam używania Compassu, chociaż też go nie polecam, zwłaszcza że nie jest on kompatybilny z LibSass (nawet jeśli pewne zamiary zostały w tym kierunku poczynione). Jeśli jest Ci on pomocny, w porządku, ale nie wydaje mi się żeby jego zalety przewyższały jego wady.

<div class="note">
  <p>Ruby Sass jest obecnie gruntownie optymalizowany i prace te są ukierunkowane w szczególności na rozbudowane style, z wieloma funkcjami i mixinami. Wydajność i szybkość kompilacji powinna zostać znacznie poprawiona, dzięki czemu Compass i inne frameworki nie będą tak bardzo spowalniać Sassa.</p>
</div>




### Dalsze informacje

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## Systemy gridów

Pomijanie kwestii systemów gridów jest w dobie Responsive Web Designu obecnie niemożliwe. Sprawienie, by design wyglądał spójnie i poprawnie na urządzeniach o różnych rozmiarach, stosujemy różnego rodzaju systemy "kratek", zwanych gridami, by odpowiednio rozłożyć wszystkie elementy. Z kolei aby uniknąć potrzeby ręcznego pisania takiego systemu za każdym razem od nowa, niektórzy wspaniali ludzie postanowili udostępnić ich rozwiązania i sprawili, że są one dostęne do wielokrotnego użytku.

Powiedzmy sobie jednak szczerze: nie jestem wielkim fanem systemów gridów. Oczywiście, dostrzegam ich potencjał, jednak zdecydowana większość z nich jest zdecydowanie zbyt skomplikowana i rozbudowana, a tak na prawdę używa się ich do rysowania czerwonych kolumn na białych tłach w trakcie prezentacji designerów. Kiedy ostatnio zdażyło Ci się pomyśleć, *jak bardzo jestem wdzięczny, że wreszcie mogę zbudować grid dla kolumn 2-5-3.1-π*? Właśnie, nigdy. Z tego też powodu w większości przypadków wystarczy Ci proste rozwiązanie oparte o system 12 kolumn, nic nadzwyczajnego.

Jeśli korzystasz z frameworków, takich jak [Bootstrap](http://getbootstrap.com/) czy [Foundation](http://foundation.zurb.com/), taki system gridów jest najprawdopodobniej już dołączony i to z tego rozwiązania polecam Ci korzystać, zamiast dołączać do projektu jakąś kolejną zależność.

Jeśli nie jesteś przywiązany do określonego systemu, zapewne ucieszysz się na wiadomość, że obecnie dostępne są na prawdę dobre, oparte o Sassie, systemy gridów: [Susy](http://susy.oddbird.net/) i [Singularity](http://singularity.gs/). Oba zapewniają funkcjonalność znacznie wykraczającą poza Twoje potrzeby, więc wybierając jeden z nich możesz mieć pewność, że spełni on swoje zadanie we wszelkich możliwych&mdash;nawet tych najbardziej egzotycznych&mdash;sytuacjach. Moim zdaniem Susy ma trochę lepszą społeczność wokół siebie, ale to tylko moje zdanie.

Możesz też spróbować czegoś bardziej przyziemnego, choćby [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). W każdym bądź razie, wybór nie będzie miał olbrzymiego wpływu na styl Twojego kodu, więc swoboda decyzji należy tylko i wyłącznie do Ciebie.



### Dalsze informacje

* [Singularity](http://singularity.gs/)
* [Singularity: Grids Without Limits](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity Grid System](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy](http://susy.oddbird.net/)
* [Build Web Layouts Easily with Susy](http://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](http://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](http://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap's Grid System vs Susy: a Comparison](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](http://www.sitepoint.com/creative-grid-system-sass-calc/)






## SCSS-lint

Prześwietlanie (linting) kodu jest zagadnieniem o bardzo dużej wadze. Zazwyczaj podążanie za sprawdzonymi wytycznymi, m.in. określonymi w tym przewodniku, redukuje ilość pomyłek w kodzie ale jednocześnie nie zapominajmy, że każdemu zdarzają się błędy i zawsze będzie coś do poprawki. Można śmiało powiedzieć, że linting kodu jest równie ważny co odpowiednie komentowanie go.

[SCSS-lint](https://github.com/causes/scss-lint) jest narzędziem, które pomoże Ci w utrzymaniu Twoich plików SCSS w czystości i zapewni ich czytelność. Jest ono w pełni konfigurowalne i jednocześnie bardzo proste w integracji z Twoimi innymi narzędziami.

Na całe szczęście, rekomendacje SCSS-linta są w wysokim stopniu zbliżone do tych opisanych w tym przewodniku. Aby skonfigurować SCSS-lint w pełnej zgodności z Sass Guidelines, zalecam następujące jego ustawienia:

{% highlight yaml %}
# For SCSS-Lint v0.32.0

linters:

  BangFormat:
    enabled: true
    space_before_bang: true
    space_after_bang: false

  BorderZero:
    enabled: true

  ColorKeyword:
    enabled: false

  Comment:
    enabled: false

  DebugStatement:
    enabled: true

  DeclarationOrder:
    enabled: true

  DuplicateProperty:
    enabled: false

  ElsePlacement:
    enabled: true
    style: same_line

  EmptyLineBetweenBlocks:
    enabled: true
    ignore_single_line_blocks: false

  EmptyRule:
    enabled: true

  FinalNewline:
    enabled: true
    present: true

  HexLength:
    enabled: true
    style: short

  HexNotation:
    enabled: true
    style: lowercase

  HexValidation:
    enabled: true

  IdSelector:
    enabled: true

  ImportPath:
    enabled: true
    leading_underscore: false
    filename_extension: false

  Indentation:
    enabled: true
    character: space
    width: 2

  LeadingZero:
    enabled: true
    style: include_zero

  MergeableSelector:
    enabled: false
    force_nesting: false

  NameFormat:
    enabled: true
    convention: hyphenated_lowercase
    allow_leading_underscore: true

  NestingDepth:
    enabled: true
    max_depth: 3

  PlaceholderInExtend:
    enabled: true

  PropertySortOrder:
    enabled: false
    ignore_unspecified: false

  PropertySpelling:
    enabled: true
    extra_properties: []

  QualifyingElement:
    enabled: true
    allow_element_with_attribute: false
    allow_element_with_class: false
    allow_element_with_id: false

  SelectorDepth:
    enabled: true
    max_depth: 3

  SelectorFormat:
    enabled: true
    convention: hyphenated_lowercase
    class_convention: '^(?:u|is|has)\-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:\-[a-z][a-zA-Z0-9]*)?(?:\-\-[a-z][a-zA-Z0-9]*)?$'

  Shorthand:
    enabled: true

  SingleLinePerProperty:
    enabled: true
    allow_single_line_rule_sets: false

  SingleLinePerSelector:
    enabled: true

  SpaceAfterComma:
    enabled: true

  SpaceAfterPropertyColon:
    enabled: true
    style: one_space

  SpaceAfterPropertyName:
    enabled: true

  SpaceBeforeBrace:
    enabled: true
    style: space
    allow_single_line_padding: true

  SpaceBetweenParens:
    enabled: true
    spaces: 0

  StringQuotes:
    enabled: true
    style: single_quotes

  TrailingSemicolon:
    enabled: true

  TrailingZero:
    enabled: true

  UnnecessaryMantissa:
    enabled: true

  UnnecessaryParentReference:
    enabled: true

  UrlFormat:
    enabled: false

  UrlQuotes:
    enabled: true

  VendorPrefixes:
    enabled: true
    identifier_list: base
    include: []
    exclude: []

  ZeroUnit:
    enabled: true
{% endhighlight %}

<div class="note">
  <p>Jeśli chcesz dołączyć SCSS-lint do Twojego obecnego procesu budowania w Gruncie, śpieszę z dobrą wiadomością - dostępny jest plugin do Grunta o nazwie <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Poza tym, jeśli jesteś w trakcie poszukiwania jakiegoś fajnego rozwiązania, które współpracuje z SCSS-lint i jemu podobnymi, chłopaki z <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) pracują obecnie nad <a href="https://houndci.com/">Hound</a>.</p>
</div>




### Dalsze informacje

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)









# Za długie; nie czytałem

Podsumowując, chcemy:

* Wcięć składających się z dwóch (2) spacji, bez tabulatora;
* Linii szerokich na 80 znaków;
* Prawidłowo napisanego wieloliniowego CSSu;
* Sensownego użytku ze znaków niedrukowalnych (whitespaces);
* Ciągów i URLi umieszczanych w cudzysłowach (pojedynczych);
* Braku końcowych 0, obowiązkowych poprzedzających zerach;
* Obliczeń zawartych w nawiasach;
* Braku magicznych numerów;
* Barw wyrażanych słownie > HSL > RGB > w systemie szestkowym;
* List rozdzielanych przecinkami;
* Braku następczych przecinków w listach (jako że są listy są wstawiane);
* Następczych przecinków w mapach;
* Braku zagnieżdżania selektorów, z wyjątkiem pseudo-klas i pseudo-elementów;
* Nazw rozgraniczanych myślnikami;
* Rozbudowanych komentarzy;
* Komentarzy opartych o API SassDoc;
* Ograniczonego użytku `@extend`;
* Prostszych mixinów;
* Tak mało pętli jak to tylko możliwe, braku `@while`;
* Ograniczenia liczby zależności;
* Sensownego używania ostrzeżeń i błędów;

{% include donate.html %}
