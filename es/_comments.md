
# Comentarios

CSS es un lenguajes complicado, lleno de *hacks* y rarezas. Debido a esto, debería de tener muchos muchos comentarios, especialmente si tú o alguien más tiene la intención de leer y actualizar el código dentro de 6 meses o 1 año. No dejes que ni tú, ni nadie se encuentre en la situación de: *yo-no-escribí-esto-oh-dios-mio-por-qué*.

Tan simple como pueda ser CSS, aún queda sitio para muchos comentarios. Estos podrían explicar:

* la estructura y/o la función de un archivo;
* el objetivo de un conjunto de reglas;
* la idea detrás de un número mágico;
* la razón detrás de una determinada declaración CSS;
* el orden de las declaraciones CSS;
* el proceso de pensamiento detrás de una manera de hacer las cosas.

Y probablemente haya olvidado muchas otras diversas razones para realizar comentarios. Comentar lleva muy poco tiempo cuando se realiza al mismo tiempo que escribes el código, así que hazlo en el momento correcto. Volver atrás y comentar un trozo de código antiguo, no solo es completamente irreal, sino que también es extremadamente molesto.

## Escribiendo Comentarios

Idealmente, *cualquier* conjunto de reglas CSS debería ir precedida por un comentario estilo-C explicando el objetivo del bloque CSS. Estos comentarios también deben dar una explicación numerada respecto a partes específicas del conjunto de reglas. Por ejemplo:

{% include snippet.html path="comments/01" %}

Básicamente, todo lo que no es evidente a primera vista debería de comentarse. No existe tal cosa como demasiada documentación. Recuerda que no se puede *comentar demasiado*, así que inspírate y escribe  comentarios para todo lo que merezca la pena.

Cuando se comenta una sección específica de Sass, utiliza los comentarios de línea de Sass en lugar de los bloques estilo-C. Esto convierte a los comentarios en invisibles a la salida e incluso en modo expandido mientras se desarrolla.

{% include snippet.html path="comments/02" %}

###### Más información

* [CSS Guidelines Sección de comentarios -En inglés](http://cssguidelin.es/#commenting)

## Documentación

Cada variable, función, *mixin* y *placeholder* que tiene como objetivo ser reutilizado en todo el código, debería estar documentado como parte de la API global usando [SassDoc](http://sassdoc.com).

{% include snippet.html path="comments/03" %}

<div class="note">
  <p>Se requieren tres barras diagonales (<code>/</code>).</p>
</div>

SassDoc tiene dos funciones principales:

* forzar el uso de comentarios estandarizados basados en un sistema de anotación para todo lo que es parte de una API pública o privada;
* ser capaz de generar una versión HTML de la documentación de la API utilizando cualquiera de los *endpoints* de SassDoc (CLI tool, Grunt, Gulp, Broccoli, Node…).

{% include images/sassdoc.html %}

Este es un ejemplo de un *mixin* ampliamente documentado con SassDoc:

{% include snippet.html path="comments/04" %}

###### Más información

* [SassDoc -En inglés](http://sassdoc.com)
* [SassDoc: una herramienta de documentación para Sass -En inglés](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
