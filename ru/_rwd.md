
# Адаптивный веб-дизайн и точки остановки

Я не думаю, что надо еще раз представлять адаптивный веб-дизайн, так как он сейчас везде. Тем не менее, вы можете задаться вопросом *почему раздел об адаптивном веб-дизайне находится в руководсте по Sass?* На самом деле есть немного вещей, чтобы сделать работу с точками остановки легче, поэтому я подумал, что это неплохая идея перечислить их здесь.







## Именование точек остановки

Я думаю, что это нормально, что медиа запросы не должны быть привязаны к специальным устройствам. Например, опрделенно плохая идея специально нацеливаться на iPad или Blackberry устройства. Медиа запросы должны обслуживать диапазон размеров экрана, до тех пор пока не будет перехода к следующему медиа запросу.

По этим же причинам, наименование точек остановки не должно соотвествовать устройствам, а иметь более общие названия. Тем более, что некоторые телефоны теперь больше, чем планшеты, а некоторые планшеты больше экранов маленьких компьютеров и т.п. ...

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
$breakpoints: ("medium": (min-width: 800px), "large": (min-width: 1000px), "huge": (min-width: 1200px))

// Nope
$breakpoints: ("tablet": (min-width: 800px), "computer": (min-width: 1000px), "tv": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

С этой точки зрения, любые именования, которые делают совершенно ясным, что дизайн не привязан к типу устройства будут работать, до тех пор, пока они дают чувство масштаба.

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
$breakpoints: ("seed": (min-width: 800px), "sprout": (min-width: 1000px), "plant": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>




### Дальнейшее чтение

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)






## Менеджер точек остановки

После того, как вы объявили ваши точки остановки, вам нужен способ, чтобы использовать их в медиа запросах. Есть много способов сделать это, но я должен сказать, что я большой поклонник получения точек остановки из карт через геттер функцию. Эта система является одновременно простой и эффективной.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Responsive manager.
/// @access public
/// @param {String} $breakpoint - точка остановки
/// @requires $breakpoints
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media #{inspect(map-get($breakpoints, $breakpoint))} {
      @content;
    }
  }

  @else {
    @error 'Не указано значение для `#{$breakpoint}`. '
         + 'Пожалуйста убедитесь, что точка остановки объявлена в карте `$breakpoints`.';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Responsive manager.
/// @access public
/// @param {String} $breakpoint - точка остановки
/// @requires $breakpoints
=respond-to($breakpoint)
  @if map-has-key($breakpoints, $breakpoint)
    @media #{inspect(map-get($breakpoints, $breakpoint))}
      @content

  @else
    @error 'Не указано значение для `#{$breakpoint}`. '
         + 'Пожалуйста убедитесь, что точка остановки объявлена в карте `$breakpoints`.'
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Очевидно, что это довольно упрощенный менеджер точек остановки, который не будет работать, когда надо обрабатывать пользовательские или несколько точек.</p>
  <p>Если вам нужен менеджер с расширенными настройками, могу порекоммендовать вам не изобретать колесо, а воспользоваться эффективными имеющимися <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> или <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>



### Дальнейшее чтение

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)






## Использование медиа-запросов

Не так давно были довольно жаркие дебаты о том, где должны быть описаны медиа запросы: должны ли они быть в селекторах (как это позволяет Sass) или строго отделены от них? Я должен сказать, что я искренний защитник системы *медиа селекторов вне системы*, я думаю, что это хорошо сочетается с идеей *компонентов*.

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

Приводит к следующему CSS:

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

Вы можете услышать, что это правило приводит к дублированию медиа запросов в результируещем CSS. Это, безусловно, верно. Хотя, [были сделаны тесты](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) и последние говорят о том, что это не имеет значения, как только Gzip (или любой эквивалентный) делает свое дело:

> … мы выяснили были ли влияния на производительность комбинированных и рассеяных медиа запросов и пришли к выводу, что различие является минимальным в худшем случае, а по существу, не существует.<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), regarding [Breakpoint](http://breakpoint-sass.com/)

Теперь, если вы действительно обеспокоены дублированнем медийных запросов, вы все еще можете использовать инструмент, чтобы объединить их, например, [этот gem](https://github.com/aaronjensen/sass-media_query_combiner), однако, я должен вас предупредить о возможных побочных эффектах перемещения CSS кода. Вы остаетесь без представление о порядоке кода, что является важным.



### Дальнейшее чтение

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
