
# Komentarze

CSS jest dosyć specyficznym językiem, pełnym haków i dziwactw. Z tego też powodu, pisany w nim kod powinien być należycie komentowany, zwłaszcza jeśli Ty, lub ktoś inny, ma zamiar czytać i aktualizować ten kod po upływie jakiegoś dłuższego okresu czasu. Warto zapobiec sytuacji, w której Ty albo ktoś inny znajdzie się w sytuacji typu *ja-tego-nie-pisałem-o-matko*.

Choć CSS może się zdawać prosty, istnieje wiele sytuacji w których warto używać komentarzy. Mogą one objaśniać takie rzeczy, jak:

* strukturę i/lub rolę danego pliku,
* cel, dla którego stworzony został dany zestaw reguł,
* ideę przyświecającą magicznej liczbie,
* powód dla określonej deklaracji,
* ustalony porządek deklaracji,
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

* [CSS Guidelines’ Commenting section](http://cssguidelin.es/#commenting)






## Dokumentowanie

Każda zmienna, funkcja, mixin czy selektor zastępczy, które mają zostać wielokrotnie użyte w całej bazie kodu, powinne być udokumentowane jako elementy globalnego API z użyciem [SassDoc](http://sassdoc.com).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Użyte w całej bazie kodu rozłożenie linii pisma w płaszczyźnie wertykalnej.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Użyte w całej bazie kodu rozłożenie linii pisma w płaszczyźnie wertykalnej.
/// @type Length
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Trzy ukośniki (<code>/</code>) są wymagane.</p>
</div>

SassDoc spełnia dwie zasadnicze funkcje:

* wymusza ustandaryzowane komentarze z użyciem systemu opartego o przypisy, dla wszystkich elementów publicznego lub prywatnego API;
* pozwala na generowanie w HTMLu dokumentacji danego API z użyciem jednego z wielu mechanizmów. (program CLI, Grunt, Gulp, Broccoli, Node...)

<figure role="group">
<img alt="Dokumentacja wygenerowana przez SassDoc"
     sizes="100vw"
     srcset="/assets/images/sassdoc-preview_small.png  540w,
             /assets/images/sassdoc-preview_medium.png 900w,
             /assets/images/sassdoc-preview_large.png 1200w,
             /assets/images/sassdoc-preview_huge.png  1590w" />
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
///   .foo {
///     @include size(10em);
///   }
///
///   .bar {
///     @include size(100%, 10em);
///   }
///
/// @example css - Rezultat w CSSie
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }
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
///   .foo
///     +size(10em)
///
///   .bar
///     +size(100%, 10em)
///
/// @example css - Rezultat w CSSie
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
