
## Komentarze

CSS jest dosyć specyficznym językiem, pełnym haków i dziwactw. Z tego też powodu, pisany w nim kod powinien być należycie komentowany, zwłaszcza jeśli zachodzi przypuszczenie, że ktoś będzie czytał i aktualizował ten kod w przyszłości. Warto zapobiec sytuacji, w której czytelnik znajdzie się w sytuacji typu *ja-tego-nie-pisałem-o-matko-dlaczego*.

Choć CSS może się zdawać prosty, istnieje wiele sytuacji w których warto używać komentarzy. Mogą one objaśniać takie rzeczy, jak:

* strukturę i/lub rolę danego pliku,
* cel, dla którego stworzony został dany zestaw reguł,
* ideę przyświecającą magicznej liczbie,
* powód dla określonej deklaracji,
* ustalony porządek deklaracji,
* tok myślenia użyty do stworzenia określonych rzeczy.

Prawdopodobnie pominąłem tu wiele innych ważnych sytuacji. Pisanie komentarzy nie zajmuje jednak tak dużo czasu, jakby to się mogło wydawać, dlatego też warto to robić w trakcie pisania kodu. Powrót do niego później, by dodać jakiś komentarz jest nie tylko pomysłem nierealistycznym, ale jest to także dosyć męczące.

### Pisanie komentarzy

Najlepiej jest, gdy *każdy* zestaw reguł jest poprzedzony komentarzem, napisanym w stylu komentarzy z języka C, który objaśnia znaczenie danego bloku kodu. Komentarz ten także może dotyczyć konkretnych reguł. Dla przykładu:

{% include snippets/comments/01/index.html %}

W zasadzie wszystko, co na pierwszy rzut oka może nie być do końca jasne, powinno być komentowane. Nie istnieje coś takiego, jak zbyt duża dokumentacja. Pamiętajmy o tym i śmiało piszmy komentarze!

Komentując rzeczy ściśle związane z Sassem należy używać jednoliniowych komentarzy, zamiast bloków w stylu języka C. Dzięki temu takie komentarze nie zostaną dodane do wyjściowego, skompilowanego pliku CSS, nawet w trybie "expanded".

{% include snippets/comments/02/index.html %}

**Dalsze informacje:**

* [CSS Guidelines’ Commenting section](https://cssguidelin.es/#commenting)

### Dokumentowanie

Każda zmienna, funkcja, mixin czy placeholder, które mają zostać wielokrotnie użyte w całej bazie kodu, powinne być udokumentowane jako elementy globalnego API z użyciem [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Trzy ukośniki (<code>/</code>) są wymagane.</p>
</div>

SassDoc spełnia dwie zasadnicze funkcje:

* wymusza ustandaryzowane komentarze z użyciem systemu opartego o przypisy, dla wszystkich elementów publicznego lub prywatnego API;
* pozwala na generowanie w HTMLu dokumentacji danego API z użyciem jednego z wielu mechanizmów. (program CLI, Grunt, Gulp, Broccoli, Node…)

{% include images/sassdoc.html %}

Przykład mixinu szczegółowo udokumentowanego z użyciem SassDoc:

{% include snippets/comments/04/index.html %}

**Dalsze informacje:**

* [SassDoc: a Documentation Tool for Sass](https://www.sitepoint.com/sassdoc-documentation-tool-sass/)
