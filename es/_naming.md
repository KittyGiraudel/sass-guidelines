
# Convenciones De Nomenclatura

En esta sección, no vamos a debatir cuáles son las mejores convenciones de nomenclatura en CSS para mejorar el mantenimiento y la escalabilidad; esto no solo depente de tí, sino que también está fuera del alcance de una guía de estilo. Sugiero los que están recomendados por [CSS Guidelines](http://cssguidelin.es/#naming-conventions).

Hay algunas cosas a las que se les puede asignar un nombre en Sass, y es importante que tengan un nombre adecuado, así todo tu código será coherente y fácil de leer:

* variables;
* funciones;
* mixins.

Los *placeholders* han sido omitidos deliberadamente de esta lista ya que pueden ser considerados como selectores regulares CSS y por lo tanto, se sigue el mismo patrón de nomenclatura que se utiliza con las clases.

En cuanto a las variables, las funciones y los *mixins*, utilizaremos algo muy *CSSable*: **minúsculas-delimitadas-con-guiones** y especialmente, nombres que tengan un significado claro.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) {
  // ...
}

@function opposite-direction($direction) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$vertical-rhythm-baseline: 1.5rem

=size($width, $height: $width)
  // ...

@function opposite-direction($direction)
  // ...
{% endhighlight %}
  </div>
</div>



### Más información

* [CSS Guidelines Convención de nomenclatura -En inglés](http://cssguidelin.es/#naming-conventions)






## Constantes

Si quieres ser un desarrollador de *frameworks* o de librerías, puede que te encuentres con variables que no van a ser actualizadas bajo ninguna circunstancia: las constantes. Desafortunadamente (o ¿afortunadamente?), Sass no proporciona ninguna manera de definir este tipo de entidades, por lo que tenemos que ser muy estrictos con las convenciones de nomenclatura para mantener nuestro objetivo claro.

Como con muchos lenguajes, sugiero que se utilice la opción todo-mayúsculas cuando se trata de constantes. No solo es una convención muy antigua, sino que también contrasta con las variables minúsculas separadas con guión.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
$CSS_POSITIONS: (top, right, bottom, left, center);

// No
$css-positions: (top, right, bottom, left, center);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
$CSS_POSITIONS: (top, right, bottom, left, center)

// No
$css-positions: (top, right, bottom, left, center)
{% endhighlight %}
  </div>
</div>



### Más información

* [Trabajando con constantes en Sass -En inglés](http://www.sitepoint.com/dealing-constants-sass/)






## Espacio De Nombres

Si tienes la intención de distribuir tu código Sass, como por ejemplo, en el caso de una librería, un *framework*, un sistema de retícula o lo que sea, es posible que quieras considerar crear un espacio de nombres para tus variables, funciones, *mixins* y *placeholders* para que no entren en conflicto con el código de ninguna otra persona.

Por ejemplo, si trabajas en un proyecto llamado *Sassy Unicorn* que será utilizado por los desarrolladores de todo el mundo (quién no lo haría, ¿eh?), podrías considerar utilizar `su-` como nombre de espacio. Es lo suficientemente específico para evitar colisiones de nombres y lo suficientemente corto como para no ser un lío a la hora de escribirlo.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$su-configuration: ( ... );

@function su-rainbow($unicorn) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$su-configuration: ( ... )

@function su-rainbow($unicorn)
  // ...
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Ten en cuenta que los espacios de nombres automáticos son sin duda un objetivo de diseño para <code>@import</code> en la nueva versión de Sass 4.0. Cuanto más se aproxima la solución, se volverá cada vez menos útil hacerlo de manera manual; eventualmente, las librerías nombradas manualmente pueden ser más difíciles de utilizar.</p>
</div>

### Más información

* [Por favor, respeta los espacios de nombres globales de CSS -En inglés](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
