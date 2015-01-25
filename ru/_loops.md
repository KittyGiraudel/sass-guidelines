# Циклы

И-за того, что Sass предоставляет комплексные структуры данных, такие как [списки](#lists) and [карты переменных](#maps), не удивительно, что он также дает почву для перебора по в этих объектах.

Тем не менее, наличие циклов, как правило, подразумевает умеренно сложную логику, что, вероятно, не относится к Sass. Перед использованием цикла, убедитесь, что он имеет смысл и что он на самом деле решает проблему.






## Each

Цикл `@each` безусловно, наиболее часто используемый из трех циклов, предусмотренных Sass. Он предоставляет чистый API для перебора списка или карты перменных.

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

При итерации по карте переменных, всегда используйте `$key` и` $value` имена переменных для  соблюдения последовательности.

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

Также проверьте, чтобы соблюдались эти принципы, чтобы сохранить читаемость:

* Всегда пустая строка перед `@each`;
* Всегда пустая строка после закрывающей скобки (`}`), до тех пор, пока новая линия не закрывающая скобка (`}`).






## For

Цикл `@for` может быть полезным, когда скомибинирован с CSS псевдоклассом `:nth-*` . Исключая сценарии, когда предпочтительнее использовать `@each` цикл, если вам надо пройтись по какому-нибудь объекту.

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

Всегда используйте `$i` как переменную для соблюдения конвенции, до тех пор пока у вас нет веских причин изменить её, никогда не используйте ключевое слово `to`, используйте  `through`. Многие разработчики даже и не знают, что Sass предоставляет такие варианты; использование может привести к путанице.

Также следуйте этим руководящим принципам, чтобы сохранить читаемость:

* Всегда пустая линия перед `@each`;
* Всегда пустая линия после закрывающей скобки (`}`), до тех пор пока следующая линия не закрывающая скобка (`}`).






## While

Цикл `@while` не имеет абсолютно никакого применения в реальном Sass проекте, особенно с тех пор, как нет способа остановить цикл изнутри. **Не используйте его**.
