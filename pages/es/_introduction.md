
## Introducción

### Por Qué Una Guía De Estilo

Una guía de estilo no es sólo un documento agradable de leer mientras te imaginas tu código perfecto. Se trata de un documento clave en la vida de un proyecto, describe cómo y por qué debe escribirse el código. Puede parecer una exageración para pequeños proyectos, pero es de gran ayuda para mantener el código limpio, escalable y fácil de mantener.

Sobra decir, que cuantos más desarrolladores participen en el proyecto, más necesarias son las guías de estilo. En la misma línea, cuanto más grande es el proyecto, la guía de estilo se convierte en una necesidad.

[Harry Roberts](https://csswizardry.com) Lo explica muy bien en su [CSS Guidelines](https://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Una guía de estilo (nota, no es una guía de estilo visual) es una valiosa herramienta para los equipos que:</p>
  <ul>
    <li>construyen y mantienen productos durante un tiempo razonablemente largo;</li>
    <li>tienen desarrolladores con diferentes habilidades y especialidades;</li>
    <li>tienen un número variable de desarrolladores que trabajan en el proyecto en un momento determinado;</li>
    <li>hay una constante contratación de personal nuevo;</li>
    <li>tienen una serie de código base en el que los desarrolladores entran y salen constantemente.</li>
  </ul>
</blockquote>

### Renuncia De Responsabilidad

Primero lo primero: **esta no es una guía de CSS**. Este documento no tratará sobre convenciones de nomenclatura para clases CSS, ni sobre los patrones modulares de CSS, ni mucho menos, sobre la cuestión de los IDs en el mundo CSS. Esta guía solo busca estudiar el contenido relacionado específicamente con Sass.

Además, esta guía está elaborada por mi y por tanto es **subjetiva y personal**. Piensa en ella como una colección de metodologías y consejos que he reunido y pulido durante los últimos años. También me da la oportunidad de recoger un puñado de recursos interesantes, así que asegurate de echarle un vistazo a las *lecturas adicionales*.

Obviamente, esta no es la única forma de hacer las cosas, y puede que encaje o no en tu proyecto. Siéntete libre de elegir lo que te interese y de adaptarlo a tus necesidades. Como decimos, *tu experiencia puede variar*.

### Principios Clave

Al final del día, si hay una cosa que me gustaría que aprendieses de toda esta guía, es que **[Sass debe mantenerse tan simple como sea posible](https://www.sitepoint.com/keep-sass-simple/)**.

Gracias a mis tontos experimentos, como por ejemplo: [Operadores bit a bit](https://github.com/KittyGiraudel/SassyBitwise), [iteradores y generadores](https://github.com/KittyGiraudel/SassyIteratorsGenerators) y [analizador JSON](https://github.com/KittyGiraudel/SassyJSON) en Sass, podemos ser conscientes de lo que se puede hacer con este preprocesador.

Mientras CSS es un lenguaje sencillo. Sass, destinado a escribir CSS, no debería ser mucho más complejo que el CSS normal. El [principio KISS](https://es.wikipedia.org/wiki/Principio_KISS) (Keep It Simple Stupid) es la clave aquí, e incluso puede tener prioridad respecto al [principio DRY](https://es.wikipedia.org/wiki/No_te_repitas) (Don’t Repeat Yourself) en algunas circunstancias.

Algunas veces es mejor repetirse un poco para que el proyecto sea fácil de mantener, antes que construir un sistema demasiado pesado, inabarcable e innecesariamente complicado que genere un código imposible de mantener debido a su complejidad.

También, si me permites que cite a [Harry Roberts](https://csswizardry.com) una vez más, **el pragmatismo prevalece sobre la perfección**. En algún momento, es probable que te des cuenta que estás yendo en contra de las reglas descritas aquí. Si tiene sentido, si crees que está bien, hazlo. El código solo es un medio, no un fin.



### Ampliación de la guía

Una gran parte de esta guía es claramente subjetiva. Llevo leyendo y escribiendo Sass bastantes años, hasta el punto en el que tengo muchos principios en lo que se refiere a escribir una hoja de estilo limpia. Entiendo que esto no pueda complacer o encajar con todo el mundo, lo cual es perfectamente normal.

Aunque, creo que las guías se hacen para ser constantemente extendidas. Extender las directrices de Sass podría ser tan simple como tener un documento que indica que el código está siguiendo estas guías de estilo a excepción de algunas normas; en cuyo caso, se deberían especificar estas normas a continuación.

Un ejemplo de extensión de una guía de estilo puede encontrarse en el [repositorio de SassDoc](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md):

> Esta es una extensión de la [guía de estilo de Node](https://github.com/felixge/node-style-guide) de Felix Geisendörfer. Cualquier cosa de este documento anula lo que podría decirse en la Guía de Estilo de Node.

