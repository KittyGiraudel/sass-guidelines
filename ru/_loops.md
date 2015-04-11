# Циклы

Благодаря предоставленным в Sass комплексным структурам данных, таких, как [списки](#lists) и [карты](#maps), не удивляет возможность перебора по этим объектам.

Тем не менее, наличие циклов, как правило, подразумевает умеренно сложную логику, что, вероятно, не относится к Sass. Перед использованием цикла убедитесь, что он имеет смысл, и что он на самом деле решает задачу.

## Each

Цикл `@each`, безусловно, наиболее часто используемый из трёх циклов, предусмотренных Sass. Он предоставляет чистый API для перебора списка или карты.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $theme in $themes {
  .section-#{$theme} {
    background-color: map-get($, $theme);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $theme in $themes
  .section-#{$theme}
    background-color: map-get($colors, $theme)
{% endhighlight %}
  </div>
</div>

При переборе карты всегда используйте имена переменных `$key` и `$value` ради последовательности.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $key, $value in $map
  .section-#{$key}
    background-color: $value
{% endhighlight %}
  </div>
</div>

Также соблюдайте следующие принципы, чтобы сохранить читаемость:

* Всегда пустая строка перед `@each`;
* Всегда пустая строка после закрывающей скобки (`}`), если на следующей строке не закрывающая скобка (`}`).

## For

Цикл `@for` может быть полезным, когда скомибинирован с псевдоклассом CSS `:nth-*`. Исключая сценарии, когда предпочтительнее использовать цикл `@each`, если вам надо пройтись по какому-нибудь объекту.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@for $i from 1 through 10
  .foo:nth-of-type(#{$i})
    border-color: hsl($i * 36, 50%, 50%)
{% endhighlight %}
  </div>
</div>

Всегда используйте `$i` как переменную для соблюдения соглашения, пока у вас нет веских причин изменить её, никогда не используйте ключевое слово `to`, используйте `through`. Многие разработчики даже и не знают, что Sass предоставляет такие варианты; использование разных может привести к путанице.

Также следуйте следующим принципам, чтобы сохранить читаемость:

* Всегда пустая строка перед `@each`;
* Всегда пустая строка после закрывающей скобки (`}`), если на следующей строке не закрывающая скобка (`}`).

## While

Цикл `@while` не имеет абсолютно никакого применения в реальном проекте Sass, особенно из-за того, что нет способа остановить цикл изнутри. **Не используйте его**.
