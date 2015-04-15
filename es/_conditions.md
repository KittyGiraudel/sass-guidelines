
# Sentencias Condicionales

Probablemente ya sabes que Sass proporciona instrucciones condicionales a través de las directivas `@if` y `@else`. A menos que tengas algún elemento con una lógica demasiado compleja en tu código, no hay necesidad de tener sentencias condicionales en tus hojas de estilo normales. En realidad, se usan principalmente en las librerías y los *frameworks*.

De todas formas, si algún día te encuentras con la necesidad de utilizarlas, por favor, respeta las siguientes pautas:

* No uses paréntesis a no ser que sea necesario;
* Deja siempre una línea en blanco antes de un `@if`;
* Deja siempre un salto de línea después de una llave de apertura (`{`);
* La sentencia `@else` debe ir en la misma línea que la llave de cierre anterior (`}`).
* Deja siempre una línea en blanco después de la última llave de cierre (`}`) a menos que la siguiente línea tenga otra llave de cierre (`}`).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
@if $support-legacy {
  // ...
} @else {
  // ...
}

// No
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
// Si
@if $support-legacy
  // ...
@else
  // ...

// No
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

Cuando se evalúa un valor booleano falso, utiliza siempre la palabra clave `not` en lugar de evaluar con `falso` o `null`

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
@if not index($list, $item) {
  // ...
}

// No
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
@if not index($list, $item)
  // ...

// No
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

Pon siempre la parte de la variable en la parte izquierda de la sentencia y el (in)esperado resultado en la derecha. Las sentencias condicionales invertidas son con frecuencia, más dificiles de leer, especialmente para desarrolladores inexpertos.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
@if $value == 42 {
  // ...
}

// No
@if 42 == $value {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
@if $value == 42
  // ...

// No
@if 42 == $value
  // ...
{% endhighlight %}
  </div>
</div>

Cuando se utilizan sentencias condicionales dentro de una función para devolver un resultado diferente basado en alguna condición, siempre debes de asegurarte que la función tiene una declaracón `@return` fuera de cualquier bloque condicional.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// No
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
// Si
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// No
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>
