
# Комментирование

CSS является сложным языком, полным хаков и курьёзов. Из-за этого он должен быть прокомментирован, особенно, если вы или кто-то ещё собирается читать и обновлять код через 6 месяцев или 1 год спустя. Не ставьте себя или кого-нибудь другого в положение *я-не-писал-этого-о-боже-почему*.

Есть ещё много возможностей для комментариев в CSS. Они могут объяснять:

* структуру и/или роль файла
* цель набора правил;
* объяснение использования волшебного числа;
* причину объявления CSS;
* порядок объявления в CSS;
* ход мысли.

И я, наверное, забыл много других различных причин. Комментирование занимает очень мало времени, когда делается вместе с написанием кода, так что делайте это в нужное время. Возвращаясь на кусок кода, чтобы комментировать его, не только совершенно невозможно, но и крайне раздражительно.

## Написание комментариев

В идеале, *любой* набор CSS правил должен предшествовать комментарию в стиле Си, объясняя цель блока CSS. Этот комментарий также принимает пронумерованные объяснения по поводу конкретных частей набора правил. Например:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Вспомогательный класс для усечения и добавления многоточия в слишком длинную строку
 * на одной строке.
 * 1. Предотвращает сворачивание содержимого, оставляет его на одной строке.
 * 2. Добавляет многоточие на конце строки.
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
 * на одной строке.
 * 1. Предотвращает сворачивание содержимого, оставляет его на одной строке.
 * 2. Добавляет многоточие на конце строки.
 */
.ellipsis
  white-space: nowrap /* 1 */
  text-overflow: ellipsis /* 2 */
  overflow: hidden
{% endhighlight %}
  </div>
</div>

В основном, всё, что не является очевидным на первый взгляд, должно быть прокомментировано. Нет такого понятия, как слишком много документации. Помните, что вы не можете *комментировать слишком много*, так что пишите комментарии ко всему, что стоит того.

Комментируя раздел Sass, используйте встроенные комментарии Sass вместо блока в стиле Си. Это делает комментарий невидимым на выходе, даже в расширенном режиме в процессе разработки.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Добавить текущий модуль в список импортируемых модулей.
// `!global` – важный флаг для глобального обновления переменной.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Добавить текущий модуль в список импортируемых модулей.
// `!global` – важный флаг для глобального обновления переменной.
$imported-modules: append($imported-modules, $module) !global
{% endhighlight %}
  </div>
</div>

### Дальнейшее чтение

* [CSS Guidelines’ Commenting section](http://cssguidelin.es/#commenting)

## Документирование

Каждая переменная, функция, примесь и placeholder, который предназначен для повторного использования во всём коде, должен быть задокументирован как часть глобального API с использованием [SassDoc](http://sassdoc.com).

SassDoc обеспечивает два различных синтаксиса для комментариев: стиль Си и строчный. Например, оба из следующих фрагментов являются допустимыми комментариями SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Вертикальный ритм, использующийся во всём коде.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Вертикальный ритм, использующийся во всём коде.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Вертикальный ритм, использующийся во всём коде.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Вертикальный ритм, использующийся во всём коде.
/// @type Length
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Необходимо три косых (<code>/</code>).</p>
</div>

SassDoc выполняет две основные роли:

* обходит стандартные комментарии, используя систему аннотации на основе всего, что является частью открытого или закрытого API;
* возможность создавать HTML-версию документации API с помощью любого инструмента генерирования SassDoc (CLI tool, Grunt, Gulp, Broccoli, Node…).

<figure role="group">
<img alt="Документация, сгенерированная в SassDoc"
     sizes="100vw"
     srcset="/assets/images/sassdoc-preview_small.png  540w,
             /assets/images/sassdoc-preview_medium.png 900w,
             /assets/images/sassdoc-preview_large.png 1200w,
             /assets/images/sassdoc-preview_huge.png  1590w" />
<figcaption>Документация, сгенерированная в SassDoc</figcaption>
</figure>

Вот пример примеси, обширно документированной в SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Примесь позволяет определять `width` и `height` одновременно.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - `width` элемента
/// @param {Length} $height ($width) - `height` элемента
///
/// @example scss - Использование
/// .foo {
///   @include size(10em);
/// }
///
/// .bar {
///   @include size(100%, 10em);
/// }
///
/// @example css - Вывод CSS
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
/// Примесь позволяет определять `width` и `height` одновременно.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - `width` элемента
/// @param {Length} $height ($width) - `height` элемента
///
/// @example scss - Использование
/// .foo
///   +size(10em)
///
/// .bar
///   +size(100%, 10em)
///
/// @example css - Вывод CSS
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
