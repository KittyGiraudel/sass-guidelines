
# Mixiny

Mixiny są jedną z tych funkcjonalności Sassa, z których się najczęściej korzysta. Są one kluczowe dla ponownego wykorzystywania komponentów i dla zgodności z zasadą DRY. I słusznie: mixiny pozwalają twórcom na definiowanie stylów które mogą być wykorzystywane wszędzie w arkuszu stylu bez potrzeby korzystania z niesemantycznych klas, takich jak `.float-left`.

Mogą one zawierać pełne reguły CSS i zasadniczo wszystko, co wszędzie indziej w dokumencie Sassa jest dozwolone, może być użyte. Mogą one nawet przyjmować argumenty, zupełnie jak funkcje. Nie trzeba więc dodawać, że ich możliwości są niemal nieograniczone.

Czuję jednak potrzebę by ostrzec Cię przed nadużywaniem mocy mixinów. Należy mieć bowiem ciągle na uwadze pojęcie *prostoty*. Może to się wydawać kuszące, by budować potężne, rozbudowane mixiny. Jest to jedna gruba przesada i, niestety, wielu deweloperów cierpi na tą chorobę. Nie staraj się by Twój kod robił wszystko na raz. Jeśli dany mixin rozwinie się na więcej niż 20 linii, rozważ wydzielenie z niego części albo po prostu zastanów się nad nim i przepisz go jeszcze raz.

## Podstawy

Mając to na uwadze, mixiny są niezwykle przydatne i, bez wątpienia, powinieneś ich używać. Główną zasadą jest w tym przypadku to, że gdy dostrzegasz grupę własności CSS które zawsze występują razem z jakiegoś powodu (nie z przypadku), możesz je umieścić w mixinie. [Micro-clearfix hack od Nicolasa Gallaghera](http://nicolasgallagher.com/micro-clearfix-hack/), na przykład, zasługuje na umieszczenie go w (bezargumentowym) mixinie.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper do oczyszczania floatów
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
/// Helper do oczyszczania floatów
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
/// Helper do określania rozmiarów elementu
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
/// Helper do określania rozmiarów elementu
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

Definiowanie własnych mixinów do radzenia sobie z vendor prefixami dla niewspieranych lub częściowo wspieranych własności CSS może być kuszące. My jednak tego nie chcemy. Przede wszystkim, jeśli możesz użyć [Autoprefixera](https://github.com/postcss/autoprefixer), zrób to. Został on napisany do tego celu i zrobi to bez wątpienia lepiej.

Niestety, zdarzają się przypadki w których z Autoprefixera skorzystać nie możemy. Jeśli natomiast używasz [Bourbona](http://bourbon.io/) albo [Compassu](http://compass-style.org/), zapewne wiesz że oba rozwiązania zapewniają możliwość poradzenia sobie z vendor prefixami za Ciebie.

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
