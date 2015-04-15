
# Comentarios

CSS es un lenguajes complicado, lleno de *hacks* y rarezas. Debido a esto, debería de tener muchos muchos comentarios, especialmente si tú o alguien más tiene la intención de leer y actualizar el código dentro de 6 meses o 1 año. No dejes que ni tú, ni nadie se encuentre en la situación de: *yo-no-escribí-esto-oh-dios-mio-por-qué*.

Tan simple como pueda ser CSS, aún queda sitio para muchos comentarios. Estos podrían explicar:

* la estructura y/o la función de un archivo;
* el objetivo de un conjunto de reglas;
* la idea detrás de un número mágico;
* la razón detrás de una determinada declaración CSS;
* el orden de las declaraciones CSS;
* el proceso de pensamiento detrás de una manera de hacer las cosas.

Y probablemente haya olvidado muchas otras diversas razones para realizar comentarios. Comentar lleva muy poco tiempo cuando se realiza al mismo tiempo que escribes el código, así que házlo en el momento correcto. Volver atrás y comentar un trozo de código antiguo, no solo es completamente irreal, sino que también es extremadamente molesto.






## Escribiendo Comentarios

Idealmente, *cualquier* conjunto de reglas CSS debería ir precedida por un comentario estilo-C explicando el objetivo del bloque CSS. Estos comentarios también deben dar una explicación numerada respecto a partes específicas del conjunto de reglas. Por ejemplo:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Clase que corta y añade puntos suspensivos para que una cadena demasiado larga quepa
 * en una sola línea
 * 1. Forzar a que el contenido quepa en una sola línea
 * 2. Añadir puntos supensivos al final de la línea.
 */
.ellipsis {
  white-space: nowrap; /* 1 */
  text-overflow: ellipsis; /* 2 */
  overflow: hidden;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Clase que corta y añada puntos suspensivos para que una cadena demasiado larga quepa
 * en una sola línea
 * 1. Forzar a que el contenido quepa en una sola línea
 * 2. Añadir puntos supensivos al final de la línea.
 */
.ellipsis
  white-space: nowrap /* 1 */
  text-overflow: ellipsis /* 2 */
  overflow: hidden
{% endhighlight %}
  </div>
</div>

Básicamente, todo lo que no es evidente a primera vista debería de comentarse. No existe tal cosa como demasiada documentación. Recuerda que no se puede *comentar demasiado*, así que inspírate y escribe  comentarios para todo lo que merezca la pena.

Cuando se comenta una sección específica de Sass, utiliza los comentarios de línea de Sass en lugar de los bloques estilo-C. Esto convierte a los comentarios en invisibles a la salida e incluso en modo expandido mientras se desarrolla.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Añadir el módulo actual a la lista de módulos importados.
// se requiere un indicador `!global` para que pueda actualizar la variable global.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight scss %}
// Añadir el módulo actual a la lista de módulos importados.
// se requiere un indicador `!global` para que pueda actualizar la variable global.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}
  </div>
</div>



### Más información

* [CSS Guidelines Sección de comentarios -En inglés](http://cssguidelin.es/#commenting)






## Documentación

Cada variable, función, *mixin* y *placeholder* que tiene como objetivo ser reutilizado en todo el código, debería estar documentado como parte de la API global usando [SassDoc](http://sassdoc.com).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Ritmo vertical de la línea base que se utiliza en todo el código.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Ritmo vertical de la línea base que se utiliza en todo el código.
/// @type Length
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Se requieren tres barras diagonales (<code>/</code>).</p>
</div>

SassDoc tiene dos funciones principales:

* forzar el uso de comentarios estandarizados basados en un sistema de anotación para todo lo que es parte de una API pública o privada;
* ser capaz de generar una versión HTML de la documentación de la API utilizando cualquiera de los *endpoints* de SassDoc (CLI tool, Grunt, Gulp, Broccoli, Node...).

<figure role="group">
<img alt="Documentación generada por SassDoc"
     sizes="100vw"
     srcset="/assets/images/sassdoc-preview_small.png  540w,
             /assets/images/sassdoc-preview_medium.png 900w,
             /assets/images/sassdoc-preview_large.png 1200w,
             /assets/images/sassdoc-preview_huge.png  1590w" />
<figcaption>Documentación generada por SassDoc</figcaption>
</figure>

Este es un ejemplo de un *mixin* ampliamente documentado con SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mixin que ayuda a definir tanto `width` como `height` simultáneamente.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - `width` del elemento
/// @param {Length} $height ($width) - `height` del elemento
///
/// @example scss - Usage
///   .foo {
///     @include size(10em);
///   }
///
///   .bar {
///     @include size(100%, 10em);
///   }
///
/// @example css - CSS output
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mixin que ayuda a definir tanto `width` como `height` simultáneamente.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - `width` del elemento
/// @param {Length} $height ($width) - `height` del elemento
///
/// @example scss - Usage
///   .foo
///     +size(10em)
///
///   .bar
///     +size(100%, 10em)
///
/// @example css - CSS output
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Más información

* [SassDoc -En inglés](http://sassdoc.com)
* [SassDoc: una herramienta de documentación para Sass -En inglés](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
