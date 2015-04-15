
# Introducción





## ¿Por Qué Una Guía De Estilo?

Una guía de estilo no es sólo un documento agradable de leer mientras te imaginas tu código perfecto. Se trata de un documento clave en la vida de un proyecto que describe cómo y por qué se debe escribir el código. Puede parecer una exageración para pequeños proyectos, pero ayuda mucho a mantener el código limpio, escalable y fácil de mantener.

Sobra decir, que cuantos más desarrolladores participen en el proyecto, más necesarias son las guías de estilo.

[Harry Roberts](http://csswizardry.com) Lo explica muy bien en su [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Una guía de estilo para desarrollar código (nota: no es una guía de estilo visual) es una valiosa herramienta para los equipos que:</p>
  <ul>
    <li>construyen y mantienen productos durante un tiempo razonablemente largo;</li>
    <li>tienen desarrolladores con diferentes habilidades y especialidades;</li>
    <li>tienen un número variable de desarrolladores que trabajan en el proyecto en un momento determinado;</li>
    <li>hay una constante contratación de personal nuevo;</li>
    <li>tienen una serie de código base en el que los desarrolladores entran y salen constantemente.</li>
  </ul>
</blockquote>






## Renuncia De Responsabilidad

Primero lo primero: **esta no es una guía de estilo de CSS**. Este documento no tratará sobre las convenciones de nomenclatura para las clases CSS, ni sobre los patrones modulares de CSS, ni mucho menos, sobre la cuestión de los IDs en el mundo CSS. Esta guía solo busca estudiar el contenido relacionado específicamente con Sass.

Además, esta guía de estilo está elaborada por mi mismo y por tanto **es subjetiva y personal**. Piensa en ella como una colección de metodologías y consejos que he reunido y pulido durante los últimos años. También me da la oportunidad de recoger un puñado de recursos interesantes, así que asegurate de echarle un vistazo a los links con más información.

Obviamente, esta no es la única manera de hacer las cosas, y puede que encaje o no en tu proyecto. Siéntete libre de elegir lo que te interese y de adaptarlo a tus necesidades. *Tu experiencia puede variar*.






## Principios Clave

Al final del día, si hay una cosa que me gustaría que aprendieses de toda esta guía de estilo, es que **Sass debe mantenerse tan simple como sea posible**.

Gracias a mis tontos experimentos, como por ejemplo: [operadores a nivel de bits](https://github.com/HugoGiraudel/SassyBitwise), [iteradores y generadores](https://github.com/HugoGiraudel/SassyIteratorsGenerators) y [analizador JSON](https://github.com/HugoGiraudel/SassyJSON) en Sass, podemos ser conscientes de lo que se puede hacer con este preprocesador.

Mientras CSS es un lenguaje sencillo. Sass busca escribirse igual que CSS y por tanto, no debería ser mucho más complicado de aprender que el propio CSS en sí. El [principio KISS](http://es.wikipedia.org/wiki/Principio_KISS) (Keep It Simple Stupid) es la clave aquí, e incluso puede tener prioridad respecto al [principio DRY](http://es.wikipedia.org/wiki/No_te_repitas) (Don’t Repeat Yourself) en algunas circunstancias.

Algunas veces es mejor repetirse un poco para que el proyecto sea fácil de mantener, antes que construir un sistema demasiado pesado, inabarcable e innecesariamente complicado que genere un código imposible de mantener porque es demasiado complejo.

También, si me permites que cite a [Harry Roberts](https://csswizardry.com) una vez más, **el pragmatismo prevalece sobre la perfección**. En algún momento, es probable que te des cuenta que estás yendo en contra de las reglas descritas aquí. Si tiene sentido, si crees que está bien, hazlo. El código solo es un medio, no un fin.



### Más información

* [El principio KISS](http://es.wikipedia.org/wiki/Principio_KISS)
* [El principio DRY](http://es.wikipedia.org/wiki/No_te_repitas)
* [Mantén Sass simple -En inglés](http://www.sitepoint.com/keep-sass-simple/)
