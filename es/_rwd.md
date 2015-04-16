
# Responsive Web Design Y Puntos De Ruptura

No creo que sea necesario tener que explicar lo que es el Responsive Web Design ahora que está en todas partes. Sin embargo es posible que te preguntes *¿por qué una sección sobre RWD en una guía de estilo Sass?* En realidad hay pocas cosas que se puedan hacer para facilitar el trabajo con los puntos de ruptura, así que he pensado que no estaría mal hacer una lista con ellos.





## Nombrando Los Puntos De Ruptura

Creo que puedo decir con seguridad que las *medias queries* no deberían estar vinculadas a dispositivos específicos. Por ejemplo, es una mala idea intentar trabajar con tamaños para iPads o teléfonos Blackberry específicamente. Las *medias queries* deberían trabajar con una amplia gama de tamaños de pantalla, justo hasta que el diseño se rompa y la siguiente *media query* haga su función.

Por las mismas razones, los puntos de ruptura no deberían llevar el nombre de los dispositivos, sino algo más general. Sobre todo porque algunos teléfonos son ahora más grandes que algunas tablets, algunas tablets más grandes que un ordenador pequeño y así sucesivamente...

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
$breakpoints: (
  'medium': (min-width: 800px),
  'large': (min-width: 1000px),
  'huge': (min-width: 1200px),
);

// No
$breakpoints: (
  'tablet': (min-width: 800px),
  'computer': (min-width: 1000px),
  'tv': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
$breakpoints: ('medium': (min-width: 800px), 'large': (min-width: 1000px), 'huge': (min-width: 1200px))

// No
$breakpoints: ('tablet': (min-width: 800px), 'computer': (min-width: 1000px), 'tv': (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

Llegados a este punto, cualquier nomenclatura que deje claro que el diseño no está ligado a un dispositivo en concreto podría funcionar, siempre y cuando tenga un sentido de magnitud.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$breakpoints: (
  'seed': (min-width: 800px),
  'sprout': (min-width: 1000px),
  'plant': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$breakpoints: ('seed': (min-width: 800px), 'sprout': (min-width: 1000px), 'plant': (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Los ejemplos anteriores utilizan mapas anidados para definir los puntos de ruptura, sin embargo, esto realmente depende de qué tipo de gestor de *breakpoints* utilices. Puedes optar por cadenas en lugar de mapas para una mayor flexibilidad (por ejemplo <code>'(min-width: 800px)'</code>).</p>
</div>




### Más información

* [Nomenclaturas para Media Queries -En inglés](http://css-tricks.com/naming-media-queries/)






## Gestor De Puntos De Ruptura

Una vez que tus puntos de ruptura tengan la nomenclatura deseada, necesitas una manera de utilizarlos  en las *media queries* reales. Hay un montón de maneras para hacerlo, pero tengo que decir que soy un gran fan del mapa de puntos de ruptura (*breakpoint map*) leído por una función *getter*. Este sistema es simple y eficiente.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Gestor Responsive.
/// @access public
/// @param {String} $breakpoint - Punto de ruptura
/// @requires $breakpoints
@mixin respond-to($breakpoint) {
  $raw-query: map-get($breakpoints, $breakpoint);

  @if $raw-query {
    $query: if(type-of($raw-query) == 'string', unquote($raw-query), inspect($raw-query));

    @media #{$query} {
      @content;
    }
  } @else {
    @error 'No se ha encontrado un valor para `#{$breakpoint}`. '
         + 'Por favor, asegúrate que está definido en el mapa `$breakpoints`.';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Gestor Responsive.
/// @access public
/// @param {String} $breakpoint - Punto de ruptura
/// @requires $breakpoints
=respond-to($breakpoint)
  $raw-query: map-get($breakpoints, $breakpoint)

  @if $raw-query
    $query: if(type-of($raw-query) == 'string', unquote($raw-query), inspect($raw-query))

    @media #{$query}
      @content

  @else
    @error 'No se ha encontrado un valor para `#{$breakpoint}`. '
         + 'Por favor, asegúrate que está definido en el mapa `$breakpoints`.'
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Obviamente, este es un gestor de puntos de ruptura bastante simplista. Si necesitas un gestor de puntos de interrupción ligeramente más permisivo, te recomiendo que no reinventes la rueda y utilices algo que ya esté probado y comprobado, como por ejemplo<a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> o <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>



### Más información

* [Gestionando Responsive Breakpoints en Sass -En inglés](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Enfoques para media queries en Sass -En inglés](http://css-tricks.com/approaches-media-queries-sass/)






## Uso de Media Queries

No hace mucho tiempo, hubo un debate bastante acalorado acerca de dónde deberían estas escritas las *medias queries*: ¿deberían estar dentro de los selectores (permitido por Sass) o deberían estar completamente separados de ellos? Debo decir que soy un ferviente defensor del sistema *media queries dentro del selector*, ya que creo que juega un buen papel con la idea de *componentes*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  @include respond-to('medium') {
    color: blue;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  +respond-to('medium')
    color: blue
{% endhighlight %}
  </div>
</div>

Resultaría el siguiente bloque CSS:

<div>
{% highlight css %}
.foo {
  color: red;
}

@media (min-width: 800px) {
  .foo {
    color: blue;
  }
}
{% endhighlight %}
</div>

Es posible que escuches que este acuerdo dará como resultado en CSS, bloques duplicados de *media queries*. Esto es definitivamente cierto. Sin embargo, [se han realizado pruebas](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) y la conclusión es que no importará una vez Gzip (o cualquier equivalente) haya hecho su trabajo:

> … hemos discutido a fondo si hay consecuencias en el rendimiento entre la combinación frente a la dispersión de *Media Queries* y se llegó a la conclusión de que la diferencia, aunque fea, es en el peor de los casos mínima y esencialmente inexistente en el mejor.<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), respecto a los [Puntos de ruptura (Breakpoint)](http://breakpoint-sass.com/)

Ahora, si realmente te preocupa las *media queries* duplicadas, puedes usar una herramienta para fusionarlas como por ejemplo [esta joya](https://github.com/aaronjensen/sass-media_query_combiner) sin embargo, siento que debo advertirte de los posibles efectos secundarios ocasionados al mover el código de lugar. Sabes que el orden del código es importante.



### Más información

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Media Queries en línea o combinadas, Fight! -En inglés](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner -En inglés](https://github.com/aaronjensen/sass-media_query_combiner)
