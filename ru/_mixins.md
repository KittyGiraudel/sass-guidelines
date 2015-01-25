
# Примеси

Примеси одна из самых важных частьей из всего языка Sass. Они являются ключом к повторному использованю и DRY компонентам. Позволяют авторам определить стили, которые будут повторно использоваться по всей таблице стилей без надобности к использованию таких несемантических классов как `.float-left`.

Они могут содержать полный набор CSS правил и в значительной степени всё, что разрешено в любом месте документа Sass. Они могут принимать аргументы, как функции. Излишне говорить, что их возможности безграничны. 

Но я чувствую, что я должен вас предупредить, о злоупотребление силой примесей. Опять же, ключевое слово здесь это *простота*. Это очень заманчиво строить чрезвычайно мощные примеси с огромным количеством логики. Это называется техническим усложением и большинство разработчиков страдает от этого. Не усложняйте код, и, прежде всего сохраняйте его простым. Если примесь становится больше, чем 20 строк или около того, то она должна быть разбита на более мелкие части или полностью пересмотрена.






## Основы

Как было сказано примеси чрезвычайно полезны, и вы должны их использовать. Правило гласит, что если вам случится встреить набор CSS свойств, которые всегда появляются вместе по причине (т.е. не случайно), то вы можете поместить их в примесь. [Micro-clearfix хак от Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) заслуживает быть помещенным в примесь (без аргументов), например.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper to clear inner floats
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
/// Helper to clear inner floats
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

Еще один обоснованный пример примеси будет примесь для определения размера элемепнта, одновременно определяющий и `ширину` и `высоту`. Код станет не только легче набирать, но и легче читать.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Помощник для определения размера
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
/// Помощник для определения размера
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)






## Список аргументов

Когда имеешь дело с неизвестным количеством аргументов в примеси, то всегда используйте `arglist`, а не список. Думайте о `arglist`, как о 8 скрытом недокументированным типе данных Sass, неявность которого позволяет использовать произвольное количество аргументов в примеси или функции, подписи которых содержат `...`.

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

Теперь, когда вы деалете примесь, которая принимает несколько аргументов (3 или более), подумаейте дважды прежде чем создавать один список или может будет легче передавать их по одному.

Sass очень умный в работе с примесями и объявлениями функций, так передавая список или карту в качестве списка аргументов для функции/примеси, это анализируется как ряд аргументов.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin dummy($a, $b, $c) {
  // ...
}

// Yep
@include dummy(true, 42, 'kittens');

// Yep but nope
$params: true, 42, 'kittens';
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3));

// Yep
$params: true, 42, 'kittens';
@include dummy($params...);

// Yep
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

// Yep
+dummy(true, 42, 'kittens')

// Yep but nope
$params: true, 42, 'kittens'
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3))

// Yep
$params: true, 42, 'kittens'
+dummy($params...)

// Yep
$params: ( 'c': 'kittens', 'a': true, 'b': 42, )
+dummy($params...)
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)






## Примеси и вендорные префиксы

Написание пользовательских примесей для обработки префиксов для неподдерживаемых или частично поддерживаемых свойств CSS может быть очень заманчивым. Но мы бы не хотели это делать. Сперва, если вы можете использовать [Autoprefixer](https://github.com/postcss/autoprefixer), используйте Autoprefixer. Это сделает Sass код вашего проекта всегда соотвествующим последним обновлениям и сделает работу лучше, чем ваши код для подстановки префиксов.

К сожалению, Autoprefixer не всегда вариант. Если вы используете [Bourbon](http://bourbon.io/) или [Compass](http://compass-style.org/), вы уже наверника знаете, что они поставляют коллекцию примесей для обработки вендорных префиксов. используйте их.

Если вы не можете использовать Autoprefixer, Bourbon и Compass, то тогда вы должны использовать вашу собственную примесь для подстановки префиска CSS свойствам. Но, пожалуйста, не делайте на свойство по примеси, вручную выводя каждый вендор. 

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Nope
@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  transform: $value;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Nope
=transform($value)
  -webkit-transform: $value
  -moz-transform: $value
  transform: $value
{% endhighlight %}
  </div>
</div>

Do it the clever way.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Примесь, которая выводит вендорные префиксы
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - CSS свойство без префикса
/// @param {*} $value - Сыррое значение CSS свойства
/// @param {List} $prefixes - Список префиксов для вывода
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
/// римесь, которая выводит вендорные префиксы
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - CSS свойство без префикса
/// @param {*} $value - Сыррое значение CSS свойства
/// @param {List} $prefixes - Список префиксов для вывода
=prefix($property, $value, $prefixes: ())
  @each $prefix in $prefixes
    -#{$prefix}-#{$property}: $value

  #{$property}: $value
{% endhighlight %}
  </div>
</div>

Использование этой примеси будет очень простым:

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

Пожалуйста, помните о том, что это слабое применение. Например, это не поможет справиться со сложными полифилами, такими как те, которые нужны для Flexbox. Поэтому использование Autoprefixer будет куда лучшим вариантом.



### Дальнейшее чтение

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)
