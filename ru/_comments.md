
# Комментирование

CSS является сложным языком, полным хаков и курьезов. Из-за этого, он должен быть прокомментирован, особенно, если вы или кто-то еще собирается читать и обновлять код 6 месяцев или 1 год спустя. Не ставьте себя или кого-нибудь другого в положении *Я не писал этого, о боже, почему*.

Есть еще много возможностей для комментариев в CSS. Это могут быть объяснениями:

* Структура и/или роль файла
* цель набора правил;
* объяснение использования магического числа;
* причина объявления CSS;
* порядок объявления в CSS;
* мыслительный процесс.

И я, наверное, забыл много других различных причин. Комментирование занимает очень мало времени, когда делается вместе с написанием кода, так что делайте это в нужное время. Возвращаясь на кусок кода, чтобы комментировать его не только совершенно нереально, но и крайне раздражительно.






## Написание комментариев

В идеале, *любой* набор CSS правил должен предшествовать комментарию в C-стиле, объясняя цель CSS блока. Этот комментарий также принимает пронумерованные объяснения по поводу конкретных частей набора правил. Например:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Вспомогательный класс для усечения и добавления многоточия в слишком длинную строку
 * на одной линии.
 * 1. Предотвращает сворачивание контента, оставляет его на одной линии.
 * 2. Добавляет многоточие на конце линии.
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
 * Вспомогательный класс для усечения и добавления многоточия в слишком длинную строку
 * на одной линии.
 * 1. Предотвращает сворачивание контента, оставляет его на одной линии.
 * 2. Добавляет многоточие на конце линии.
 */
.ellipsis
  white-space: nowrap /* 1 */
  text-overflow: ellipsis /* 2 */
  overflow: hidden
{% endhighlight %}
  </div>
</div>

В основном все, что не является очевидным, на первый взгляд, должны быть прокомментировано. Нет такого понятия, как слишком много документации. Помните, что вы не можете *комментировать слишком много*, так что пишите комментарии ко всему, что стоит их.

Комментируя Sass раздел, используйте Sass встроенные комментарии вместо блока в C-стиле. Это делает комментарий невидимым на выходе, даже в расширенном режиме в процессе разработки.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Добавить текущий модуль в список импортируемых модулей.
// `!global` важный флаг для глобального обновления переменной.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Добавить текущий модуль в список импортируемых модулей.
// `!global` важный флаг для глобального обновления переменной.
$imported-modules: append($imported-modules, $module) !global
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [CSS Guidelines' Commenting section](http://cssguidelin.es/#commenting)






## Документирование

Каждая переменная, функция, миксин и плейсхолдер, который предназначен для повторного использования во всем коде должен быть задокументирован как часть глобального API с использованием [SassDoc](http://sassdoc.com).

SassDoc обеспечивает два различных синтаксиса для комментариев: или C-стиль или инлайн. Например, оба из следующих фрагментов являются допустимыми комментариями SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Вертикальный ритм, использующийся во всем коде.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Вертикальный ритм, использующийся во всем коде.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Вертикальный ритм, использующийся во всем коде.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Вертикальный ритм, использующийся во всем коде.
/// @type Length
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Необходим тройной слэш (<code>/</code>).</p>
</div>

Нет никакой выгоды в использовании одного над другим, так что выбирайте тот, который в котром чувствуете себя наиболее уверенно.

SassDoc имеет две основные фунцкии:

* обходит стандартные комментарии, используя систему аннотации на основе всего, что является частью публичного или частного API;
* возможность генерировать HTML версию документации API с помощью любого инструмента генерирования SassDoc (CLI tool, Grunt, Gulp, Broccoli, Node...).

<figure role="group">
<img alt="Документация сгенерированная SassDoc" src="/assets/images/sassdoc-preview.png" />
<figcaption>Документация сгенерированная SassDoc</figcaption>
</figure>

Вот пример миксина обширно документированого с SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Миксин позволяет определять `width` и `height` одновременно.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - Element's `width`
/// @param {Length} $height ($width) - Element's `height`
///
/// @example scss - Usage
/// .foo {
///   @include size(10em);
/// }
///
/// .bar {
///   @include size(100%, 10em);
/// }
///
/// @example css - CSS output
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
/// Миксин позволяет определять `width` и `height` одновременно.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - Element's `width`
/// @param {Length} $height ($width) - Element's `height`
///
/// @example scss - Usage
/// .foo
///   +size(10em)
///
/// .bar
///   +size(100%, 10em)
///
/// @example css - CSS output
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



### Дальнейшее чтение

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
* [New Features and New Look for SassDoc](http://webdesign.tutsplus.com/articles/new-features-and-a-new-look-for-sassdoc--cms-21914)
