
## Składnia i formatowanie

Pierwszą rzeczą, jaką powinien się zająć przewodnik po stylu jest niewątpliwie to, w jaki sposób nasz kod ma wyglądać.

Kiedy CSSem w tym samym projekcie zajmuje się kilku deweloperów, zazwyczaj jest to tylko kwestią czasu kiedy ktoś zacznie pisać rzeczy po swojemu. Przewodniki po stylu kodu, które promują spójność nie tylko temu zapobiegają, lecz także pomagają w czytaniu i aktualizowaniu kodu.

W dużym skrócie, chcemy (bezwstydnie zainspirowane przez [CSS Guidelines](https://cssguidelin.es/#syntax-and-formatting)):

* indentacji składających się z (2) spacji, bez tabulatorów,
* najlepiej 80 znaków w linii,
* prawidłowo napisanych wieloliniowych reguł CSSa,
* sensownego użycia tzw. znaków niedrukowalnych (whitespaces).

{% include snippets/syntax/01/index.html %}

W tej sekcji nie zajmiemy się jeszcze zagadnieniem organizacji plików. Poruszone to zostanie w [dalszym miejscu](#architektura).

### Ciągi znaków

Choć może się to wydawać nie do końca oczywistym, łańcuchy (ciągi znaków) odgrywają kluczową rolę w ekosystemach CSS i Sass. Większość wartości w CSSie jest przedstawiana jako liczby albo jako łańcuchy (zazwyczaj bez znaków cudzysłowów), dlatego też niezbędnym jest trzymanie się pewnych zasad podczas pracy z łańcuchami w Sassie.

#### Encoding

Aby uniknąć potencjalnych problemów z kodowaniem znaków (character encoding), zalecanym jest by stosować system [UTF-8](https://pl.wikipedia.org/wiki/UTF-8) w [głównym arkuszu](#gwny-plik) z użyciem dyrektywy `@charset`. Należy się również upewnić, by był to pierwszy element w arkuszu i żeby nic wcześniej się przed nim nie znajdowało.

{% include snippets/syntax/02/index.html %}

#### Cudzysłowia

CSS nie wymaga by łańcuchy (ciągi) znaków były umieszczane między cudzysłowami, nawet te zawierające spacje. Weźmy nazwy font-family dla przykładu: dla parsera CSS nie ma znaczenia, czy otoczymy je cudzysłowami, czy też nie.

Z tego powodu Sass *także* nie wymaga, by ciągi znajdowały się między cudzysłowami. Co ciekawe (i na całe szczęście), ciąg umieszczony między takimi znakami jest dokładnie równy ciągowi bez cudzysłowów (`'abc'` jest ściśle równy `abc`).

Języki programowania, które nie wymagają by łańcuchy znaków były umieszczane między cudzysłowami, należą jednak do rzadkości i z tego też powodu **ciągi powinny być zawsze otoczone znakami pojedynczych cudzysłowów** w Sassie (pojedyncze z tego względu, że na standardowej klawiaturze QWERTY łatwiej jest ich użyć, niż podwójnych). Oprócz spójności z innymi językami, łącznie z kuzynem CSS - JavaScriptem, jest także szereg innych dla tego powodów:

* nazwy kolorów traktowane są jako faktyczne kolory, gdy są pozbawione cudzysłowów, co może prowadzić do poważnych problemów,
* większość rozwiązań do podświetlania składni (syntax highlighters) może mieć problem z ciągami pozbawionymi cudzysłowów,
* poprawia to ogólną czytelność,
* nie ma absolutnie żadnego słusznego powodu, by nie umieszczać ciągów pomiędzy cudzysłowami.

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>Zgodnie ze specyfikacją CSS, dyrektywa <code>@charset</code> powinna być deklarowana w podwójnych cudzysłowach <a href="https://www.w3.org/TR/css3-syntax/#charset-rule">aby być uznana za właściwą</a>. Co ciekawe, Sass na etapie kompilacji do CSSa zajmuje się także i tą regułą. Można tym samym spokojnie korzystać ze znaków pojedynczego cudzysłowa, nawet dla <code>@charset</code>.</p>
</div>

#### Ciągi jako wartości w CSSie

Niektóre z wartości CSS, takie jak `initial` czy `sans-serif` wymagają, by nie znajdowały się pomiędzy cudzysłowami. Deklaracja `font-family: 'sans-serif'` zostanie pominięta, bowiem CSS oczekuje identyfikatora, a nie ciągu w cudzysłowach. Z tego też powodu unikamy umieszczania tych wartości w cudzysłowach.

{% include snippets/syntax/04/index.html %}

Możemy dzięki temu zauważyć różnicę pomiędzy ciągami przeznaczonymi do użycia jako wartości CSS (identyfikatory), jak te w poprzednim przykładzie, oraz ciągami wykorzystywanymi przy typach danych w Sassie, jak na przykład klucze map.

Tych pierwszych nie umieszczamy w cudzysłowach, te drugie natomiast pomiędzy znakami pojedzynczych cudzysłowów (`'`).

#### Ciągi zawierające cudzysłowy

Jeżeli ciąg zawiera jeden lub więcej cudzysłowów, można rozważyć umieszczenie całego ciągu wewnątrz znaków podwójnych cudzysłowów (`"`). Zaoszczędzi nam to korzystanie ze zbyt wielu tzw. znaków ucieczki.

{% include snippets/syntax/05/index.html %}

#### Adresy URL

Adresy URL także powinny być otaczane cudzysłowami, z tych samych powodów:

{% include snippets/syntax/06/index.html %}

**Dalsze informacje:**

* [All You Ever Need to Know About Sass Interpolation](https://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/KittyGiraudel/SassyStrings)

### Liczby

W Sassie, liczby są typem danych w którego skład wchodzą zarówno liczby niemianowane (bez jednostek), określenia dla długości, frekwencji, kątów i tak dalej. Pozwala to na przeprowadzanie na tych wartościach obliczeń.

#### Zera

Liczby powinny zawierać zero przed znakiem dziesiętnym, jeżeli ich wartość wynosi mniej niż jeden. Nigdy nie dodawajmy zer końcowych.

{% include snippets/syntax/07/index.html %}

<div class="note">
  <p>W Sublime Text i innych edytorach, które wykorzystują wyrażenia regularne (regular expressions) dla wyszukiwania i zastępowania, bardzo łatwo dodaje się poprzedzające zera do (każdych, jeśli nie wszystkich) liczb zmiennoprzecinkowych. Wystarczy bowiem zamienić <code>\s+\.(\d+)</code> na <code>\ 0.$1</code>. Nie zapomnij jednak o spacji przed <code>0</code>.</p>
</div>

#### Jednostki

Zajmując się długościami, wartość `0` nigdy nie powinna mieć jednostki.

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>Uwaga, praktyka ta powinna być ograniczona jedynie do długości. Pominięcie jednostki w przypadku takiej własności jak <code>transition-delay</code> jest niedozwolone. W teorii, pozbawione jednostki zero przypisane jako wartość czasu trwania animacji czy przejścia jest nieprawidłowe i będzie zignorowane. Nie wszystkie przeglądarki są jednak tak surowe. Pamiętajmy jednak, by omijać jednostki tylko i wyłącznie dla wartości reprezentujących długości.</p>
</div>

Najczęściej powtarzającym się błędem jaki przychodzi mi do głowy na myśl o liczbach w Sassie jest przekonanie, że jednostki są po prostu ciągami znaków, które można swobodnie i bezpiecznie dodawać do liczby. O ile może się wydawać, że tak jest, w rzeczywistości jednostki wcale tak nie funkcjonują. Należy myśleć o jednostkach jako matematycznych symbolach. Dla przykładu, mnożąc 5 cali przez 5 cali uzyskamy wynik 25 cali kwadratowych. Ta sama logika tyczy się Sassa.

By dodać jednostkę do liczby, należy pomnożyć tą liczbę przez *1 jednostkę*.

{% include snippets/syntax/09/index.html %}

Pamiętaj, że dodając *0 tej jednostki* też zadziała, lecz ja bym rekomendował używanie wyżej wspomnianej metody. Dodawanie *0 jednostki* może być trochę mylące. I tak, próbując przekonwertować liczbę do innej, kompatybilnej jednostki, dodawanie 0 nie zadziała.

{% include snippets/syntax/10/index.html %}

Ostatecznie zależy to w dużej mierze od tego, co staramy się osiągnąć. Należy mieć jednak na uwadze to, że dodawanie jednostki jako ciągu znaków nie jest dobrym rozwiązaniem.

By usunąć jednostkę z określonej wartości, dzielmy ją przez *jedną jednostkę jej typu*.

{% include snippets/syntax/11/index.html %}

Dodając jednostkę jako ciąg do liczby uzyskujemy ciąg, wykluczając jakiekolwiek dodatkowe operacje na tej wartości. Wycinając sam numer z liczby zawierającej określenie jednostki również skutkować będzie otrzymaniem ciągu. A przecież nie o to nam chodzi.

#### Obliczenia

**Obliczenia najwyższego poziomu powinny być zawsze otoczone nawiasami**. Ten wymóg nie tylko drastycznie poprawia czytelność kodu, zapobiega on także niektórym rzadkim sytuacjom wymuszając na Sassie określenie wartości tego, co zawarte jest w tym nawiasie.

{% include snippets/syntax/12/index.html %}

#### Liczby magiczne

Liczby magiczne są elementem [programowania starego typu](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) i określają *nienazwaną wartość liczbową*. Innymi słowy, są to losowe liczby które *po prostu działają*™, nie mając żadnego logicznego wyjaśnienia.

Rzecz jasna, **liczby magiczne są plagą i powinny być unikane za wszelką cenę**. Jeśli nie można sobie poradzić ze znalezieniem rozsądnego wytłumaczenia dlaczego dana liczba jest po prostu odpowiednia, pamiętajmy się o dodaniu wyczerpującego komentarza wyjaśniającego dlaczego na taką liczbę się zdecydowaliśmy i dlaczego się ona tutaj sprawdza. Przyznanie się do tego, że czegoś do końca nie wiemy jest zawsze lepsze dla innego dewelopera, niż pozostawianie im takiej łamigłówki do rozwiązania.

{% include snippets/syntax/13/index.html %}

**Dalsze informacje:**

* [Use Lengths, Not Strings](https://kittygiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](https://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](https://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)

### Barwy

Barwy stanowią istotny element języka, jakim jest CSS. Jak moglibyśmy się już do tego przyzwyczaić, Sass jest cennym pomocnikiem także w kwestii manipulacji barwami, głównie za zasługą jego [funkcji](https://sass-lang.com/documentation/Sass/Script/Functions.html).

#### Formaty barw

Aby uczynić zagadnienie dotyczące barw najprostszym jak się tylko da, zalecałbym uszanować następujący porządek preferencji, jeśli chodzi o formaty barw:

1. [HSL](https://pl.wikipedia.org/wiki/HSL);
2. [RGB](https://pl.wikipedia.org/wiki/RGB);
3. Określenia szesnastkowe (małymi literami i skrócone).

Słowa kluczowe reprezentujące barwy nie powinny być używane, za wyjątkiem szybkiego prototypowania projektu. Są one słowami z języka angielskiego i często, zwłaszcza dla osób dla których język angielski nie jest językiem ojczystym, nie najlepiej opisują kolor, jaki reprezentują. Ponadto, słowa kluczowe nie są w pełni semantyczne, np. `grey` jest faktycznie ciemniejszy od `darkgrey`, a mylenie `grey` i `gray` może prowadzić do niekonsekwentnego używania tego koloru.

Format HSL jest nie tylko najłatwiejszym do pojęcia dla ludziego mózgu<sup>[potrzebne źródło]</sup>, ale także czyni prostym dla osób tworzących arkusze stylów modyfikowanie barw poprzez regulowanie osobno odcienia, nasycenia i jasności.

RGB posiada zaś tą zaletę, że patrząc na dane wartości w łatwy sposób możemy określić, czy dany kolor ma barwę bardziej zbliżoną do niebieskiego, zielonego czy czerwonego, jednak nie czyni on prostym faktyczne budowanie barwy z tych trzech części.

Na koniec, określenia szesnastkowe są dla ludzkiego umysłu niemal nie do rozszyfrowania. Używaj ich jedynie w ostateczności.

{% include snippets/syntax/14/index.html %}

Używając systemu HSL czy RGB, zawsze dodawaj pojedynczą spację po przecinku (`,`), lecz bez spacji pomiędzy nawiasami (`(`, `)`) i ich zawartością.

{% include snippets/syntax/15/index.html %}

#### Barwy i zmienne

Używając danej barwy więcej niż jeden raz, warto ją umieścić w zmiennej o nazwie, która w sposób konkretny reprezentuje dany kolor.

{% include snippets/syntax/16/index.html %}

W tym momencie można używać tej zmiennej kiedykolwiek zachodzi taka potrzeba. Pamiętajmy jednak, że jeśli jej użycie jest silnie powiązane z określonym motywem, zalecałbym nie używać tej zmiennej "tak po prostu". Zamiast tego, warto by ją przypisać do jakiejś innej zmiennej o nazwie objaśniającej jak powinna być właściwie użyta.

{% include snippets/syntax/17/index.html %}

Robiąc to w ten sposób zapobiega się sytuacji, w której zmiana motywu doprowadzi do czegoś jak `$sass-pink: blue`.

#### Rozjaśnianie i przyciemnianie barw

Funkcje służące zarówno [`rozjaśnianiu`](https://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method), jak i [`przyciemnianiu`](https://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) barw manipulują jasnością koloru w przestrzeni barwy HSL poprzez dodawanie lub, odpowiednio, odejmowanie od tejże jasności. Zasadniczo są one jedynie nazwą zastępczą (aliasem) dla parametru `$lightness` funkcji [`adjust-color`](https://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

Rzecz w tym, że te funkcje często nie prowadzą do takich rezultatów, jakich od nich oczekujemy. Z drugiej jednak strony, funkcja [`mix`](https://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) jest ciekawym rozwiązaniem dla rozjaśniania lub przyciemniania barw. Robi to poprzez mieszanie koloru z barwą `white` (białą), lub `black` (czarną).

Korzyścią z używania funkcji `mix`, zamiast jednej z tych poprzednio wspomnianych, jest niewątpliwie fakt, że zapewnia ona progresywne przejście do czerni (lub bieli) w trakcie zmniejszania proporcji głównego koloru, w czasie gdy funkcje `darken` i `lighten` w sposób o wiele bardziej nagły wytracają nasz kolor.

{% include images/color-functions.html %}

Aby nie używać pełnej funkcji `mix` za każdym razem, można stworzyć dwie, proste w użyciu, funkcje `tint` i `shade` (będące, co ciekawe, częścią [Compassa](http://compass-style.org/reference/compass/helpers/colors/#shade)), które dadzą ten sam efekt:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>Funkcja <a href="https://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> zaprojektowana została w celu skalowania właściwości bardziej płynnie, biorąc pod uwagę ich pierwotny wysoki, bądź niski, poziom. Co do zasady powinna przynosić efekt zbliżony do tego z funkcji <code>mix</code>, lecz sposób jej użycia może być nieco czytelniejszy. Czynnik odpowiadający za skalowanie nie jest jednak identyczny.</p>
</div>

**Dalsze informacje:**

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](https://kittygiraudel.com/2014/01/30/programmatically-go-from-one-color-to-another-with-sass/)
* [Sass Color Variables That Don’t Suck](https://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](https://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](https://www.sitepoint.com/dealing-color-schemes-sass/)

### Listy

Listy są w Sassie odpowiednikiem tablic (arrays). Lista jest typem płaskiej struktury danych (w przeciwieństwie do [map](#mapy)), która stworzona została w celu przechowywania wartości różnego typu (włączając w to listy, tworząc tym samym zagnieżdżone listy).

Listy powinny być tworzone według następujących zasad:

* pisane w jednej lub w wielu liniach
* koniecznie w wielu liniach jeśli lista jest zbyt długa, by zmieścić się w 80 znakowej linii
* przecinek powinien być zawsze używany jako separator, chyba że lista wykorzystywana jest wprost dla celów CSSa,
* lista powinna być umieszczana wewnątrz nawiasów,
* końcowy przecinek tylko i wyłącznie w przypadku list zajmujących wiele linii.

{% include snippets/syntax/19/index.html %}

Dodając nowy składnik do listy, należy zawsze korzystać z dostępnego już API. Nie próbujmy dodawać niczego ręcznie.

{% include snippets/syntax/20/index.html %}

**Dalsze informacje:**

* [Understanding Sass lists](https://kittygiraudel.com/2013/07/15/understanding-sass-lists/)
* [SassyLists](https://at-import.github.io/SassyLists/)

### Mapy

Od wersji 3.3 Sassa, autorzy arkuszy stylów mogą korzystać z map, które są niczym innym jak tablicami asocjacyjnymi (skojarzeniowymi, słownikami), haszami czy nawet obiektami JavaScriptowymi. Mapa jest takim typem danych, który powiązuje klucze (mogące być dowolnym typem danych, łącznie z mapami, choć nie jest to zalecane) z określonymi wartościami.

Mapy powinny być tworzone w następujący sposób:

* spacja po dwukropku (`:`),
* nawias otwierający (`(`) powinien się znajdować na tej samej linii co dwukropek (`:`),
* **klucze umieszczone między cudzysłowami** jeśli są łańcuchami (co stanowi 99% przypadków),
* każda para klucz–wartość na osobnej linii,
* przecienk (`,`) na końcu każdej pary klucz–wartość,
* **końcowy przecinek** (`,`) przy ostatnim elemencie, dzięki czemu łatwiej nam będzie dodawać, usuwać czy zmieniać kolejność składników mapy,
* nawias zamykający (`)`) na osobnej linii,
* bez spacji czy nowej linii między zamykającym nawiasem (`)`) a średnikiem (`;`).

Przykład:

{% include snippets/syntax/21/index.html %}

**Dalsze informacje:**

* [Using Sass Maps](https://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](https://www.sitepoint.com/debugging-sass-maps/)
* [Extra Map functions in Sass](https://www.sitepoint.com/extra-map-functions-sass/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](https://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](https://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)

### Reguły dotyczące CSSa

W tym miejscu, mimo że zapewne każdy je zna, warto jednak powtórzyć sobie podstawowe zasady dot. pisania zestawów reguł w CSSie (a przynajmniej te, które są przyjęte m.in. przez [CSS Guidelines](https://cssguidelin.es/#anatomy-of-a-ruleset)):

* powiązane selektory umieszczamy na tej samej linii; niezwiązane ze sobą zaczynamy od nowej,
* nawias otwierający (`{`) oddzielony od ostatniego selektora pojedynczą spacją,
* każda deklaracja na swojej osobnej linii,
* spacja po przecinku (`:`),
* końcowy średnik (`;`) na końcu każdej deklaracji,
* zamykający nawias (`}`) na osobnej linii,
* nowa linia po zamykającym nawiasie (`}`).

Przykład:

{% include snippets/syntax/24/index.html %}

Dodając do powyższych reguł związanych z samym CSSem warto też zwrócić uwagę, by:

* lokalne zmienne zostały nie tylko zadeklarowane przed innymi deklaracjami, ale także rozdzielone przed nimi pojedynczą, pustą linią,
* wywołania mixinów bez `@content` (dodatkowych deklaracji) znajdowały się przed innymi deklaracjami,
* zagnieżdżone selektory zawsze zaczynały się od nowej linii,
* mixiny z `@content` (deklaracjami) pojawiały się po wszelkich zagnieżdżonych selektorach,
* nie było pustej linii po zamykającym nawiasie (`}`).

Przykład:

{% include snippets/syntax/25/index.html %}

**Dalsze informacje:**

* [Anatomy of a Ruleset](https://cssguidelin.es/#anatomy-of-a-ruleset)

### Sortowanie deklaracji

Nie przychodzi mi do głowy obecnie zagadnienie, co do którego zdania są tak bardzo podzielone, jak jest to w przypadku sortowania deklaracji w CSSie. W szczególności należy tu mówić o dwóch poglądach:

* porządek alfabetyczny,
* porządkowanie deklaracji ze względu na ich typ (pozycja, `display`, kolory, czcionki i inne…).

Obie metody mają swoje zalety i wady. Z jednej strony, sortowanie alfabetyczne jest uniwersalne (przynajmniej dla języków opartych o alfabet łaciński), więc przynajmniej nie sprawia ono większego problemu. Moim jednak zdaniem, nieumieszczanie własności takich jak `bottom` i `top` obok siebie jest pomysłem conajmniej dziwnym. Dlaczego też deklaracje dot. animacji miały by się znajdować przed własnością `display`? Jak można się domyśleć, w sortowaniu alfabetycznym nie trudno się doszukać szeregu takich nieścisłości.

{% include snippets/syntax/26/index.html %}

Z drugiej zaś strony, porządkowanie własności według typu zdaje się mieć sens. Każda deklaracja związana z czcionkami jest obok siebie, `top` i `bottom` są znowu razem, a czytanie takiego zestawu reguł zdaje się być przyjemnością. Jednak o ile nie wymagane jest trzymanie się reguł określonych konwencji, takich jak [Idiomatic CSS](https://github.com/necolas/idiomatic-css), niektóre kwestie pozostają problematyczne. Gdzie, na przykład, umieścić własność `white-space`? W grupie fontów, czy obok `display`? Co zrobić z `overflow`? Wreszcie, jaka jest kolejność wewnątrz danej grupy tematycznej (czyżby alfabetyczna, o ironio)?

{% include snippets/syntax/27/index.html %}

Istnieje również inny interesujący pogląd na porządkowanie reguł zwany [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), który zdaje się zyskiwać na popularności. W dużym skrócie, Concentric CSS opiera się na założeniu modelu pudełkowego (box-model) i w ten też sposób definiuje porządek deklaracji: od wewnątrz (pudełka) do zewnątrz.

{% include snippets/syntax/28/index.html %}

Szczerze mówiąc sam jeszcze nie podjąłem ostatecznej decyzji. [Niedawno opublikowana sonda na CSS-Tricks](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) pokazała, że 45% deweloperów sortuje swoje deklaracje według typów, 14% zaś alfabetycznie. Co ciekawe, 39% programistów robi to kompletnie losowo – i ja do tych osób również się zaliczam.

{% include images/order-poll.html %}

Z tego też powodu nie mam zamiaru odgórnie narzucać określonego sposobu sortowania deklaracji w tym przewodniku. Wybór pozostawiam czytelnikowi, tylko by być w swym wyborze konsekwentnym.

<div class="note">
  <p><a href="https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">Ostatnie badania</a> pokazują, że używanie <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (które z kolei korzysta z <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">sortowania wg. typu</a>) do porządkowania deklaracji w CSSie prowadzi do zmniejszania średniej wagi pliku kompresowanego przez Gzip o ok. 2.7%, podczas gdy sortowanie alfabetyczne przynosi rezultat w postaci 1.3%.</p>
</div>

**Dalsze informacje:**

* [On Declaration Sorting](https://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)

### Zagnieżdżanie selektorów

Jedną z cech Sassa, która jest szczególnie nadużywana przez wielu deweloperów, jest niewątpliwie *zagnieżdżanie selektorów*. Rozwiązanie to pozwala autorom arkuszy stylów na używanie z długich, wieloczłonowych selektorów rozbijając je na krótsze i zagnieżdżanie ich.

#### Generalna zasada

Na przykład, poniższe zagnieżdżenie w Sassie:

{% include snippets/syntax/29/index.html %}

… wygeneruje taki kod CSS:

{% include snippets/syntax/30/index.html %}

Oprócz tego, od momentu wydania Sassa w wersji 3.3 możliwe jest odwoływanie się do obecnego selektora poprzez (`&`), celem wygenerowania bardziej złożonego selektora. Dla przykładu:

{% include snippets/syntax/31/index.html %}

… wygeneruje taki kod CSS:

{% include snippets/syntax/32/index.html %}

Metoda ta jest często używana w połączeniu z [konwencją nazewnictwa BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), by generować selektory `.block__element` i `.block--modifier` bazujące na ich oryginalnym selektorze (a więc `.block` w tym przypadku).

<div class="note">
  <p>Podczas gdy może mieć to małe znaczenie, generowanie nowych selektorów w oparciu o odwołanie (<code>&</code>) do obecnego selektora sprawia, że wyszukiwanie w kodzie tych nowych selektorów staje się nie możliwe, gdyż one faktycznie (ich pełna nazwa) nie istnieją.</p>
</div>

Problem zagnieżdżania selektorów leży głównie w tym, iż zmniejszają one czytelność kodu. Trzeba bowiem za każdym razem w myślach określać nazwę selektora, uzależniając ją wszak od poziomu zagnieżdżenia. Nie zawsze jest tym samym do końca wiadomo, jaki będzie rezultat w postaci skompilowanego kodu CSS.

To stwierdzenie staje się tym bardziej prawdziwe, im dłuże stają się selektory i częstsze odwołania (`&`) do obecnego selektora. Na pewnym etapie ryzyko pogubienia się w kodzie staje się przez to zbyt duże.

Aby zapobiec tego typu sytuacjom, **unikamy zagnieżdżania selektorów jeśli to jest możliwe**. Niemniej jednak są pewne wyjątki od tej zasady.

#### Wyjątki

Przede wszystkim, dozwolone jest – a nawet rekomendowane – zagnieżdżanie pseudo-klas i pseudo-elementów wewnątrz selektorów.

{% include snippets/syntax/33/index.html %}

Użycie zagnieżdżania selektorów dla pseudo-klas i pseudo-elementów nie tylko ma sens (wszak dotyczy ono blisko powiązanych ze sobą selektorów), ale także pomaga w utrzymaniu całości komponentu w jednym miejscu.

Ponadto, uzasadnionym jest także umieszczanie niezależnych klas, takich jak `.is-active`, w ramach selektora danego komponentu.

{% include snippets/syntax/34/index.html %}

Wreszcie, rozsądnym jest również zagnieżdżanie reguł dotyczących elementu znajdującego się wewnątrz innego elementu, tak aby deklaracje dotyczące całego komponentu znajdowały się w jednym miejscu.

{% include snippets/syntax/35/index.html %}

Pracując z niedoświadczonymi deweloperami, takie selektory jak `.no-opacity &` mogą wydawać się trochę dziwne. By zapobiec wszelkim nieścisłościom, warto zbudować krótki mixin, który przetworzy taką składnię w wyraźne API.

{% include snippets/syntax/36/index.html %}

Pozwoli nam to zmodyfikować poprzedni przykład, który teraz będzie wyglądał tak:

{% include snippets/syntax/37/index.html %}

Jak we wszystkich sytuacjach, kluczem jest zawsze spójność. Jeśli czujesz się pewien zagnieżdżania selektorów, korzystaj z tego. Pamiętaj jednak by cały zespół, z którym pracujesz, się temu nie sprzeciwiał.

**Dalsze informacje:**

* [Beware of Selector Nesting](https://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](https://thesassway.herokuapp.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](https://thesassway.herokuapp.com/intermediate/avoid-nested-selectors-for-more-modular-css)
