
# Адаптивный веб-дизайн и точки остановки

Я не думаю, что надо рассказывать, что такое адаптивный веб-дизайн, так как он сейчас везде. Тем не менее, вы можете задаться вопросом: *почему раздел об адаптивном веб-дизайне находится в руководсте по Sass?* На самом деле есть немного вещей, чтобы сделать работу с точками остановки легче, поэтому я подумал, что это неплохая идея – перечислить их здесь.

## Именование точек остановки

Я думаю, что медиа-запросы не должны быть привязаны к специальным устройствам. Например, определённо плохая идея – специально нацеливаться на iPad или устройства на Blackberry. Медиа-запросы должны обслуживать диапазон размеров экрана, пока нет перехода к следующему медиа-запросу.

По этим же причинам наименование точек остановки не должно соотвествовать устройствам, а иметь более общие названия. Тем более, что некоторые телефоны теперь больше, чем планшеты, а некоторые планшеты больше экранов маленьких компьютеров, и тому подобное…

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$breakpoints: (
  'medium': (min-width: 800px),
  'large': (min-width: 1000px),
  'huge': (min-width: 1200px),
);

// Nope
$breakpoints: (
  'tablet': (min-width: 800px),
  'computer': (min-width: 1000px),
  'tv': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$breakpoints: ('medium': (min-width: 800px), 'large': (min-width: 1000px), 'huge': (min-width: 1200px))

// Nope
$breakpoints: ('tablet': (min-width: 800px), 'computer': (min-width: 1000px), 'tv': (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

Таким образом любое соглашение по наименованию точек остановки, которое даёт кристально чистое понимание, что дизайн не привязан к особым устройствам, будет работать до тех пор, пока даёт ощущение масштаба.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$breakpoints: (
  'seed': (min-width: 800px),
  'sprout': (min-width: 1000px),
  'plant': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$breakpoints: ('seed': (min-width: 800px), 'sprout': (min-width: 1000px), 'plant': (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

### Дальнейшее чтение

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)

## Управление точками остановки

После того, как вы объявили ваши точки остановки, вам нужен способ, чтобы использовать их в медиа-запросах. Есть много способов сделать это, но я должен сказать, что я большой поклонник получения точек остановки из карт через функцию получения. Эта система является одновременно простой и эффективной.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Управление отзывчивостью.
/// @access public
/// @param {String} $breakpoint - точка остановки
/// @requires $breakpoints
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media #{inspect(map-get($breakpoints, $breakpoint))} {
      @content;
    }
  } @else {
    @error 'Не указано значение для `#{$breakpoint}`. '
         + 'Пожалуйста, убедитесь, что точка остановки объявлена в карте `$breakpoints`.';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Управление отзывчивостью.
/// @access public
/// @param {String} $breakpoint - точка остановки
/// @requires $breakpoints
=respond-to($breakpoint)
  @if map-has-key($breakpoints, $breakpoint)
    @media #{inspect(map-get($breakpoints, $breakpoint))}
      @content

  @else
    @error 'Не указано значение для `#{$breakpoint}`. '
         + 'Пожалуйста, убедитесь, что точка остановки объявлена в карте `$breakpoints`.'
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Очевидно, что это довольно упрощенный менеджер точек остановки, который не будет работать, когда надо обрабатывать произвольные или множественные точки остановки.</p>
  <p>Если вам нужно управление отзывчивостью с расширенными настройками, могу порекоммендовать вам не изобретать колесо, а воспользоваться отличными <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> или <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>

### Дальнейшее чтение

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)

## Использование медиа-запросов

Не так давно были довольно жаркие дебаты о том, где именно должны быть описаны медиа-запросы: должны ли они быть в селекторах (как это позволяет Sass) или строго отделены от них? Я должен сказать, что я искренний защитник системы *медиа-запросов-внутри-системы*, я думаю, что это хорошо сочетается с идеей *компонентов*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  @include respond-to('medium') {
    color: blue;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  +respond-to('medium')
    color: blue
{% endhighlight %}
  </div>
</div>

Это создаст следующий CSS:

<div>
{% highlight css %}
.foo {
  color: red;
}

@media (min-width: 800px) {
  .foo {
    color: blue;
  }
}
{% endhighlight %}
</div>

Вы могли слышать, что это правило приводит к дублированию медиа-запросов в получаемом CSS. Это, безусловно, верно. Хотя, [были сделаны тесты](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries), которые говорят о том, что это не имеет значения, как только Gzip (или что-то подобное) делает свое дело:

> … мы выяснили, были ли влияния на производительность комбинированных и рассеяных медиа-запросов, и пришли к выводу, что различие является минимальным в худшем случае, а по существу и не существует.<br>
> &mdash; [Сэм Ричардс](https://twitter.com/snugug) относительно [Breakpoint](http://breakpoint-sass.com/)

Теперь, если вы действительно обеспокоены дублированнем медиа-запросов, вы всё ещё можете использовать инструмент, чтобы объединить их, например, [этот gem](https://github.com/aaronjensen/sass-media_query_combiner), однако я должен вас предупредить о возможных побочных эффектах перемещения CSS-кода. Вы остаетёсь без представления о порядке кода, что является важным.

### Дальнейшее чтение

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
