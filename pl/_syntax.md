
# Składnia i formatowanie

Pierwszą rzeczą, jaką powinien się zająć przewodnik po stylu jest niewątpliwie to, w jaki sposób nasz kod ma wyglądać.

Kiedy CSSem w tym samym projekcie zajmuje się kilku deweloperów, zazwyczaj jest to tylko kwestią czasu kiedy któryś z nich zacznie pisać rzeczy po swojemu. Przewodniki po stylu kodu, które promują spójność nie tylko temu zapobiegają, lecz także pomagają w czytaniu i aktualizowaniu kodu.

W dużym skrócie, chcemy (bezwstydnie zainspirowane przez [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* indentacje składające się z (2) spacji, bez tabulatorów,
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
// Oparta na indentacjach składnia Sass wymusza określone standardy kodu
// więc kwestię nawiasów kwadratowych mamy z głowy
.foo
  display: block
  overflow: hidden
  padding: 0 1em
{% endhighlight %}
  </div>
</div>

W tej sekcji nie zajmiemy się jeszcze zagadnieniem organizacji plików. Poruszone to zostanie w [dalszym miejscu](#architektura).






## Ciągi znaków

CSS nie wymaga by łańcuchy (ciągi) znaków były umieszczane między cudzysłowami, nawet te zawierające spacje. Weźmy nazwy font-family dla przykładu: dla parsera CSS nie ma znaczenia, czy otoczymy je cudzysłowami, czy też nie.

Z tego powodu Sass *także* nie wymaga, by ciągi znajdowały się między cudzysłowami. Co ciekawe (i na całe szczęście), ciąg umieszczony między takimi znakami jest dokładnie równy ciągowi bez cudzysłowów (`'abc'` jest ściśle równy `abc`).

Języki programowania, które nie wymagają by łańcuchy znaków były umieszczane między cudzysłowami, należą jednak do rzadkości i z tego też powodu **ciągi powinny być zawsze otoczone znakami pojedynczych cudzysłowów** w Sassie (pojedyncze z tego względu, że na standardowej klawiaturze QWERTY łatwiej jest ich użyć, niż podwójnych). Oprócz spójności z innymi językami, łącznie z kuzynem CSS - JavaScriptem, jest także szereg innych dla tego powodów:

* nazwy kolorów traktowane są jako faktyczne kolory, gdy są pozbawione cudzysłowów, co może prowadzić do poważnych problemów,
* większość rozwiązań do podświetlania składni (syntax highlighters) może mieć problem z ciągami pozbawionymi cudzysłowów,
* poprawia to ogólną czytelność,
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
  <p>W powyższym przykładzie, <code>sans-serif</code> nie zostało umieszczone pomiędzy cudzysłowami ponieważ jest to specyficzna dla CSSa reguła i nie powinna ona się znajdować między takimi znakami.</p>
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

Liczby powinny zawierać zero przed znakiem dziesiętnym, jeżeli ich wartość wynosi mniej niż jeden. Nigdy nie dodawaj zer końcowych.

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

Dodając jednostkę jako ciąg do liczby uzyskasz ciąg, wykluczając jakiekolwiek dodatkowe operacje na tej wartości. Wycinając sam numer z liczby zawierającej określenie jednostki również skutkować będzie otrzymaniem ciągu. A przecież tego nie chcesz.



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
 * która pozwala mi na wyrównanie góry `.foo` z jego parentem.
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
 * która pozwala mi na wyrównanie góry `.foo` z jego parentem.
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




### Rozjaśnianie i przyciemnianie barw



Funkcje służące zarówno [`rozjaśnianiu`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method), jak i [`przyciemnianiu`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) barw manipulują jasnością koloru w przestrzeni barwy HSL poprzez dodawanie lub, odpowiednio, odejmowanie od tejże jasności. Zasadniczo są one jedynie nazwą zastępczą (aliasem) dla parametru `$lightness` funkcji [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

Rzecz w tym, że te funkcje często nie prowadzą do takich rezultatów, jakich od nich oczekujemy. Z drugiej jednak strony, funkcja [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) jest ciekawym rozwiązaniem dla rozjaśniania lub przyciemniania barw. Robi to poprzez mieszanie koloru z barwą `white` (białą), lub `black` (czarną).

Korzyścią z używania funkcji `mix`, zamiast jednej z tych poprzednio wspomnianych, jest niewątpliwie fakt, że zapewnia ona progresywne przejście do czerni (lub bieli) w trakcie zmniejszania proporcji głównego koloru, w czasie gdy funkcje `darken` i `lighten` w sposób o wiele bardziej nagły wytracają nasz kolor.

<figure role="group">
  <img alt="Illustration of the difference between lighten/darken and mix Sass functions"
     sizes="100vw"
     srcset="/assets/images/lighten-darken-mix_small.png  540w,
             /assets/images/lighten-darken-mix_medium.png 900w,
             /assets/images/lighten-darken-mix_large.png 1200w,
             /assets/images/lighten-darken-mix_huge.png  1590w" />
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
  @return mix(white, $color, $percentage);
}

/// Stopniowo przyciemniaj kolor
/// @access public
/// @param {Color} $color - kolor do przyciemnienia
/// @param {Number} $percentage - procent pierwotnego `$color` w zwróconej wartości
/// @return {Color}
@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
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
* [Sass Color Variables That Don’t Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)






## Listy

Listy są w Sassie odpowiednikiem tablic (arrays). Lista jest typem płaskiej struktury danych (w przeciwieństwie do [map](#mapy)), która stworzona została w celu przechowywania wartości różnego typu (włączając w to listy, tworząc tym samym zagnieżdżone listy).

Listy powinny być tworzone według następujących zasad:

* zawsze umieszczaj je na jednej linii, chyba że zajmują więcej niż 80 znaków,
* zawsze używaj przecinka jako separatora, chyba że cel, do jakiego ma być ona użyta, tego nie zakłada,
* nigdy nie umieszczaj jej między nawiasami, chyba że jest pusta albo zagnieżdżona wewnątrz innej listy,
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

* spacja po dwukropku (`:`),
* nawias otwierający (`(`) powinien się znajdować na tej samej linii co dwukropek (`:`),
* **klucze umieszczone między cudzysłowami** jeśli są łańcuchami (co stanowi 99% przypadków),
* każda para klucz–wartość na osobnej linii,
* przecienk (`,`) na końcu każdej pary klucz–wartość,
* **końcowy przecinek** (`,`) przy ostatnim elemencie, dzięki czemu łatwiej nam będzie dodawać, usuwać czy zmieniać kolejność składników mapy,
* nawias zamykający (`)`) na osobnej linii,
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

* powiązane selektory umieszczamy na tej samej linii; niezwiązane ze sobą zaczynamy od nowej,
* nawias otwierający (`{`) oddzielony od ostatniego selektora pojedynczą spacją,
* każda deklaracja na swojej osobnej linii,
* spacja po przecinku (`:`),
* końcowy średnik (`;`) na końcu każdej deklaracji,
* zamykający nawias (`}`) na osobnej linii,
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

* lokalne zmienne zostały nie tylko zadeklarowane przed innymi deklaracjami, ale także rozdzielone przed nimi pojedynczą, pustą linią,
* wywołania mixinów bez `@content` (dodatkowych deklaracji) znajdowały się przed innymi deklaracjami,
* zagnieżdżone selektory zawsze zaczynały się od nowej linii,
* mixiny z `@content` (deklaracjami) pojawiały się po wszelkich zagnieżdżonych selektorach,
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

Nie przychodzi mi do głowy obecnie zagadnienie, co do którego zdania są tak bardzo podzielone, jak jest to w przypadku sortowania deklaracji w CSSie. W szczególności należy tu mówić o dwóch poglądach:

* porządek alfabetyczny,
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

Z drugiej zaś strony, porządkowanie własności według typu zdaje się mieć sens. Każda deklaracja związana z czcionkami jest obok siebie, `top` i `bottom` są znowu razem, a czytanie takiego zestawu reguł zdaje się być przyjemnością. Jednak o ile nie trzymasz się reguł określonych konwencji, takich jak [Idiomatic CSS](https://github.com/necolas/idiomatic-css), niektóre kwestie pozostają problematyczne. Gdzie, na przykład, umieścić własność `white-space`? W grupie czcionek, czy obok `display`? Co zrobić z `overflow`? Wreszcie, jaka jest kolejność wewnątrz danej grupy tematycznej (czyżby alfabetyczna, o ironio)?

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

Szczerze mówiąc sam jeszcze nie podjąłem ostatecznej decyzji. [Niedawno opublikowana sonda na CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) pokazała, że 45% deweloperów sortuje swoje deklaracje według typów, 14% zaś alfabetycznie. Co ciekawe, 39% programistów robi to kompletnie losowo – i ja do tych osób również się zaliczam.

<figure role="group">
  <img src="/assets/images/css-order-chart.png" alt="Chart showing how developers order their CSS declarations" />
  <figcaption>Wykres pokazujący jak deweloperzy porządkują swoje deklaracje w CSSie.</figcaption>
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

Jedną z cech Sassa, która jest szczególnie nadużywana przez wielu deweloperów, jest niewątpliwie *zagnieżdżanie selektorów*. Rozwiązanie to pozwala autorom arkuszy stylów na używanie z długich, wieloczłonowych selektorów rozbijając je na krótsze i zagnieżdżanie ich.

### Generalna zasada

Na przykład, poniższe zagnieżdżenie w Sassie:

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

<div>
{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}
</div>

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

Przede wszystkim, dozwolone jest – a nawet rekomendowane – zagnieżdżanie pseudo-klas i pseudo-elementów wewnątrz selektorów.

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
