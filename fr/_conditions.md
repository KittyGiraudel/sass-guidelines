
# Structures conditionnelles

Vous savez probablement déjà que Sass fournit des structures conditionnelles via les directives `@if` and `@else`. Vous n’avez sans doute pas besoin de structures conditionnelles dans vos feuilles de style habituelles, en fait elles existent essentiellement pour les bibliothèques et les frameworks.

Si toutefois vous en avez un jour besoin, voici les recommandations à suivre&nbsp;:


* Pas de parenthèses sauf si elles sont nécessaires&nbsp;;
* Toujours un saut de ligne avant `@if`&nbsp;;
* Toujours un renvoi à la ligne après l’accolade ouvrante (`{`)&nbsp;;
* `@else` sur la même ligne que l’accolade fermante qui précède (`}`)&nbsp;;
* Toujours un saut de ligne après l’accolade fermante finale (`}`) sauf si la ligne suivante est aussi une accolade fermante (`}`).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
@if $support-legacy {
  // ...
} @else {
  // ...
}

// Non
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
// Oui
@if $support-legacy
  // ...
@else
  // ...

// Non
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

Lorsqu’on teste si une valeur est fausse, on utilise toujours le mot-clé `not` plutôt que de tester sur `false` ou `null`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
@if not index($list, $item) {
  // ...
}

// Non
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
@if not index($list, $item)
  // ...

// Non
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

Veillez à toujours mettre la partie variable à gauche de la déclaration et le résultat (in)attendu à droite. Les structures conditionnelles inversées sont souvent plus difficiles à lire, surtout pour les développeurs inexpérimentés.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if $value == 42 {
  // ...
}

// Nope
@if 42 == $value {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if $value == 42
  // ...

// Nope
@if 42 == $value
  // ...
{% endhighlight %}
  </div>
</div>

Lorsqu’on utilise des structures conditionnelles à l’intérieur d’une fonction, toujours s’assurer que la fonction a une déclaration `@return` en dehors de tout bloc conditionnel.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// Non
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
// Oui
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// Non
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>
