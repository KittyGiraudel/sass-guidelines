
# Instruções condicionais

Provavelmente já sabem que Sass fornece instruções condicionais através das diretivas `@if` e `@else`. A menos que possuam alguma lógica média ou altamente complexa no vosso código, não há necessidade para instruções condicionais nas vossas folhas de estilo do dia a dia. De verdade, estas instruções existem maioritariamente para bibliotecas e _frameworks_.

De qualquer forma, se alguma vez necessitarem delas, por favor respeitem as seguintes diretrizes:

* Não usar parêntesis exceto quando necessário;
* Colocar sempre uma linha em branco antes de um `@if`;
* Colocar sempre uma linha em branco após abrir chavetas (`{`);
* Colocar a instrução `@else` na mesma linha que o fecho das chavetas anteriores (`}`);
* Colocar sempre uma linha em branco após fechar as últimas chavetas (`}`), a menos que a linha seguinte seja uma chaveta de fecho (`}`).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
@if $support-legacy {
  // ...
} @else {
  // ...
}

// Não
@if ($support-legacy == true) {
  // ...
}
@else {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
@if $support-legacy
  // ...
@else
  // ...

// Não
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

Quando se testa um valor falso, usem sempre a palavra-chave `not` ao invés de testar contra `false` ou `null`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
@if not index($list, $item) {
  // ...
}

// Não
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
@if not index($list, $item)
  // ...

// Não
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

Quando se usa instruções condicionais dentro de uma função para devolver um resultado diferente baseado nalguma condição, certifiquem-se que a função ainda possui uma instrução `@return` fora de qualquer bloco condicional.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// Não
@function dummy($condition) {
  @if $condition {
    @return true;
  } @else {
    @return false;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// Não
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>
