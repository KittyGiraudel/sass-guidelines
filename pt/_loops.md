
# Ciclos

Visto Sass providenciar estruturas de dados complexas, tal como _[lists](#lists)_ e _[maps](#maps)_, não é surpresa fornecer também formas de iterar sobre essas entidades.

No entanto, a presença de ciclos normalmente implica lógica moderadamente complexa que provavelmente não pertence a Sass. Antes de usar um ciclo, certifiquem-se que tal faz sentido e que realmente resolve um problema.






## Each

O ciclo `@each` é definitivamente o mais usado dos três ciclos que Sass oferece. Apresenta uma API simples para iterar uma _list_ ou _map_.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $theme in $themes {
  .section-#{$theme} {
    background-color: map-get($colors, $theme);
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

Ao iterar um _map_, usem sempre `$key` e `$value` como nomes de variáveis para manter a consistência.

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

Também façam questão de respeitar as seguintes diretrizes para preservar a legibilidade:

* Colocar sempre uma linha em branco antes do `@each`;
* Colocar sempre uma linha em branco antes da chaveta de fecho (`}`) a menos que a próxima linha seja uma chaveta de fecho (`}`).






## For

O ciclo `@for` poderá ser útil quando combinado com as pseudo-classes `:nth-*` de CSS. À exceção destes cenários, é preferível um ciclo `@each` se *têm* de iterar sobre algo.

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

Usem sempre `$i` como nome de variável para manter a convenção comum e a menos que tenham boa razão para tal, nunca usem a palavra-chave `to`: usem sempre `through`. Muitos programadores não sabem que Sass oferece esta variação; usá-la poderá levar a confusão.

Também não se esqueçam de respeitar as seguintes diretrizes para preservar a legibilidade:

* Colocar sempre uma linha em branco antes do `@each`;
* Colocar sempre uma linha em branco antes da chaveta de fecho (`}`) a menos que a próxima linha seja uma chaveta de fecho (`}`).






## While

O ciclo `@while` não possui absolutamente nenhum uso real num projeto de Sass, especialmente porque não é possível quebrar o ciclo por dentro. **Não usar**.
