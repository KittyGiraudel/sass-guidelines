
# Соглашения по именованию

В этом разделе мы не будем иметь дело с лучшими соглашениями по именованию в CSS для сопровождения и масштабирования; не только потому, что это остаётся за вами, а также потому, что они из области Sass Styleguide. Я предлагаю те, что рекомендованы в [CSS Guidelines](http://cssguidelin.es/#naming-conventions).

Есть несколько вещей, которым вы можете дать имена в Sass, и очень важно, чтобы названия были хорошими, чтобы весь код выглядел последовательным и легко читался:

* переменные;
* функции;
* примеси.

Sass placeholder (`%placeholder`) намеренно исключены из этого списка, так как они могут быть рассмотрены как обычные селекторы CSS и использовать теже принципы именования, что и классы.

Что же касается переменных, функций и примесей, то мы будем придерживаться чего-то очень *CSS-ного*: **нижние подчеркивания и дефисы**, и, прежде всего – смысл.

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

### Дальнейшее чтение

* [CSS Guidelines’ Naming Conventions](http://cssguidelin.es/#naming-conventions)

## Константы

Если вы – разработчик фреймворка или библиотеки, вам бы пришлось иметь дело с переменными, которые не предназначены для обновления при любых обстоятельствах: константами. К сожалению (или к счастью?), Sass не даёт какой-либо способ определения таких переменных, поэтому мы должны придерживаться строгих соглашений об именовании.

Как и для многих языков, я предлагаю делать константы переменными в верхнем регистре. Это не только очень старое соглашение, но это также хорошо контрастирует с обычными строчными переменными.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$CSS_POSITIONS: top, right, bottom, left, center;

// Nope
$css-positions: top, right, bottom, left, center;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$CSS_POSITIONS: top, right, bottom, left, center

// Nope
$css-positions: top, right, bottom, left, center
{% endhighlight %}
  </div>
</div>

### Дальнейшее чтение

* [Dealing With Constants in Sass](http://www.sitepoint.com/dealing-constants-sass/)

## Пространство имён

Если вы собираетесь распространять ваш код Sass, например, как библиотеку, фреймворк, сетку или что угодно, вы, возможно, захотите рассмотреть пространства имён всех своих переменных, функциях, примесях и placeholder’ах, так чтобы они не соперничали с чьим-либо кодом.

Например, если вы работаете над проектом *Sassy Unicorn*, который предназначен для использования разработчиками по всему миру (кто бы не хотел, не так ли?), вы можете рассмотреть возможность использования `su-` как пространство имен. Это достаточно верно, чтобы предотвратить любые споры в именах, и достаточно коротко, чтобы не быть болью при написании кода.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$su-configuration: ( ... );

@function su-rainbow($unicorn) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$su-configuration: ( ... )

@function su-rainbow($unicorn)
  // ...
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Обратите внимание, что автоматическое создание пространств имён, безусловно, цель для предстоящего проекта <code>@import</code> из Sass 4.0. Так как это становится всё ближе и ближе, то использование библиотек с пространством имён, написанным вручную, может стать сложнее в использовании.</p>
</div>

### Дальнейшее чтение

* [Please Respect the Global CSS Namespace](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
