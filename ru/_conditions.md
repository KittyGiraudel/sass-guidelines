
# Условные операторы

Вы уже, наверное, знаете, что Sass предоставляет условные операторы, такие как `@if` и `@else`.  

Тем не менее, если вам когда-нибудь понадобится использовать их, пожалуйста, следуйте следующим рекоммендациям:

* Никаких скобок, покуда они не обязательны;
* Всегда пустая строка перед `@if`;
* Всегда разрыв строки после открывающей фигурной скобки (`{`);
* `@else` на одной строке с предыдущей закрывающей скобкой (`}`);
* Всегда новая пустая строка после последней закрывающей скобки (`}`), если на следующей строке не стоит закрывающая скобка (`}`).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if $support-legacy {
  // ...
} @else {
  // ...
}

// Nope
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
// Yep
@if $support-legacy
  // ...
@else
  // ...

// Nope
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

При тестировании на отрицающее значение, всегда используйте ключевое слово `not`, а не проверки на `false` или `null`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if not index($list, $item) {
  // ...
}

// Nope
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if not index($list, $item)
  // ...

// Nope
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

При использовании условных операторов внутри функции для возврата другого результата, основанного на некоторых условиях, убедитесь, что `@return` находится вне условных операторов.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// Nope
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
// Yep
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// Nope
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>
