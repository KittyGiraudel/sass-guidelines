
# Условные операторы

Вы уже, наверное, знаете, что Sass предоставляет условные операторы, такие как `@if` и `@else`.  

Тем не менее, если вам когда-нибудь понадобится использовать их, пожалуйста, следуйте следующим рекоммендациям: 

* Никакх скобок, до тех пор пока они не нужны;
* Всегда пуста строка перед `@if`;
* Всегда разрыв строки после открывающей фигурной скобки (`{`);
* `@else` на одной линии с предыдущией закрывающей скобкой (`}`).
* Всегда новая пустая строка после последней закрывающей скобки (`}`), если следующая строка не закрывающая скобка (`}`).

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

При тестировании на falsy значения, всегда используйте `not` ключевое слово, а не проверки на` false` или `null`.

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

При использовании условных операторов внутри функции для того, чтобы вернуть другой результат, основанный на некоторых условиях, всегда убедитесь, что функция по-прежнему имеет `@return` в каких-либо условных блоков.

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
