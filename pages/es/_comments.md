
## Comentarios

CSS es un lenguajes complicado, lleno de *hacks* y rarezas. Debido a esto, debería de tener muchos comentarios, especialmente si tú o alguien más tiene la intención de leer y actualizar el código dentro de 6 meses o 1 año. No dejes que ni tú, ni nadie se encuentre en la situación de: *yo-no-escribí-esto-oh-dios-mio-por-qué*.

Tan simple como pueda resultar CSS, aún se pueden escribir muchos comentarios. Estos podrían explicar:

* la estructura y/o la función de un archivo;
* el objetivo de un conjunto de reglas;
* la idea detrás de un número mágico;
* la razón detrás de una determinada declaración CSS;
* el orden de las declaraciones CSS;
* el proceso de pensamiento detrás de una manera de hacer las cosas.

Y probablemente haya olvidado muchas otras razones para realizar comentarios. Comentar lleva muy poco tiempo cuando se realiza a la vez que escribes el código, así que hazlo en el momento correcto. Volver atrás y comentar un trozo de código antiguo, no solo es completamente irreal, sino que también es extremadamente molesto.

### Escribiendo Comentarios

Idealmente, *cualquier* conjunto de reglas CSS debería ir precedida por un comentario estilo-C explicando el objetivo del bloque CSS. Este comentario también debe dar una explicación numerada respecto a partes específicas del conjunto de reglas. Por ejemplo:

{% include snippets/comments/01/index.html %}

Básicamente, todo lo que no es evidente a primera vista debería de comentarse. No existe tal cosa como demasiada documentación. Recuerda que no se puede *comentar demasiado*, así que ponte manos a la obra y escribe  comentarios para todo lo que merezca la pena.

Cuando se comenta una sección específica de Sass, utiliza los comentarios de línea de Sass en lugar de los bloques estilo-C. Esto hace que el comentario sea invisible en la salida, incluso en modo expandido durante el desarrollo.

{% include snippets/comments/02/index.html %}

Ten en cuenta que esta forma de comentar el código, es compatible con la guía de CSS en su sección de [comentarios](https://cssguidelin.es/#commenting).

### Documentación

Cada variable, función, *mixin* y *placeholder* que tiene como objetivo ser reutilizado en todo el código, debería estar documentado como parte de la API global usando [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Se requieren tres barras diagonales (<code>/</code>).</p>
</div>

SassDoc tiene dos funciones principales:

* forzar el uso de comentarios estandarizados basados en un sistema de anotación para todo lo que es parte de una API pública o privada;
* ser capaz de generar una versión HTML de la documentación de la API utilizando cualquiera de los *endpoints* de SassDoc (CLI tool, Grunt, Gulp, Broccoli, Node…).

{% include images/sassdoc.html %}

Este es un ejemplo de un *mixin* ampliamente documentado con SassDoc:

{% include snippets/comments/04/index.html %}
