
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

Błędy, w odróżnieniu do ostrzeżeń, zatrzymują kompilator i zapobiegają jego dalszemu działaniu. W dużym skrócie, zatrzymują proces kompilacji i wyświetlają wiadomość w strumieniu wyjścia (output), a także w tzw. śladzie stosu (stack trace), co pomaga w debugowaniu. Z tego też powodu błędu powinny być wysyłane w sytuacji, gdy nie ma innej możliwości by program mógł działać dalej. Kiedy to jest tylko możliwe, spróbuj obejść ten problem i wyświetlać zamiast tego ostrzeżenie.

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
