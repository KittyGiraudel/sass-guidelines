
# Instrukcje warunkowe (conditionals)

Jak już prawdopodobnie wiesz, Sass zapewnie wsparcie dla instrukcji warunkowych poprzez dyrektywy `@if` i `@else`. O ile nie masz średnio lub bardzo skomplikowanych rozwiązań w swoim kodzie, nie ma potrzeby dla instrukcji warunkowych w Twoich arkuszach. W zasadzie to one głównie istnieją dla potrzeb bibliotek i frameworków.

W każdym razie, jeśli kiedykolwiek będziesz potrzebował z nich skorzystać, zrób to w zgodności z poniższymi zasadami:

* Bez nawiasów, chyba że są potrzebne,
* Jedna pusta linia przed `@if`,
* Kod po nawiasie otwierającym (`{`) na następnej linii,
* `@else` na tej samej linii, co nawias zamykający (`}`),
* Nowa pusta linia po ostatnim nawiasie zamykającym (`}`), chyba że następna linia zaczyna się od takiego nawiasu (`}`).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
@if $support-legacy {
  // ...
} @else {
  // ...
}

// Źle
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
// Dobrze
@if $support-legacy
  // ...
@else
  // ...

// Źle
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

Testując czy podana wartość jest fałszywa, zawsze używaj słowa `not` zamiast testowania wobec `false` czy `null`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
@if not index($list, $item) {
  // ...
}

// Źle
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
@if not index($list, $item)
  // ...

// Źle
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

Używając instrukcji warunkowych w ramach funkcji by zwracały one różne rezultaty, w zależności od jakiegoś warunku, zawsze upewnij się by funkcja miała instrukcję `@return` poza jakimkolwiek warunkowym blokiem.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// Źle
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
// Dobrze
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// Źle
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>
