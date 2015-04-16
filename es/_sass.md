
# Acerca De Sass

Así se describe [Sass](http://sass-lang.com) en su [documentación](http://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass (acrónimo de Syntactically Awesome StyleSheets) es una extensión de CSS que añade características muy potentes y elegantes a este lenguaje de estilos.

El objetivo principal de Sass es el de corregir los defectos de CSS. Como todos sabemos, CSS no es el mejor lenguage del mundo <sup>[cita requerida]</sup> y aunque es sencillo de aprender, puede generar rápidamente un conjunto de código muy desordenado, especialmente en proyectos grandes.

Es aquí donde Sass tiene sentido, ya que actúa como un meta-lenguaje para mejorar la sintaxis de CSS con el fin de proporcionar características extra y herramientas útiles. Por su parte, Sass quiere mostrarse conservador en lo que respecta al lenguaje CSS.

La idea no es convertir a CSS en un lenguaje de programación totalmente funcional; Sass solo quiere mejorar los puntos donde CSS falla. Por tanto, empezar con Sass no es más dificil que aprender CSS: Sass simplemente agrega un par de características adicionales.

Dicho esto, hay muchas formas de utilizar estas funciones. Algunas buenas, algunas malas y otras que son poco comunes. Esta giuía tiene como finalidad darte un enfoque coherente y documentado para escribir código Sass.


### Más infomación

* [Sass - En inglés](http://sass-lang.com)
* [Documentación de Sass - En inglés](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)






## Ruby Sass o LibSass

El [primer commit de Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) se remonta a hace más de 8 años, a finales de 2006. Sobra decir que se ha recorrido un largo camino desde entonces. Desarrollado inicialmente en Ruby, le sucedieron distintas variaciones; la más popular, [LibSass](https://github.com/sass/libsass) (Escrita en C) y que está cerca de ser totalmente compatible con la versión original escrita en Ruby.

En 2014, [los equipos de Ruby Sass y LibSass decidieron esperar para sincronizar ambas versiones antes de seguir adelante](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Desde entonces, LibSass ha continuado publicando nuevas versiones para igualar sus características con las de su hermano mayor. Las últimas inconsistencias entre ambas versiones han sido reunidas y listadas por mi mismo en el proyecto [Sass-Compatibility](http://sass-compatibility.github.io). Si conoces otras incompatibilidades entre estas dos versiones y no aparecen aquí listadas, por favor, hazlo saber abriendo un ticket.

Volviendo al tema, la tarea de elegir un compilador, en realidad, dependerá de tu proyecto. Si está basado en ruby on Rails, es mejor utilizar Ruby Sass, que es perfectamente adecuado para este caso. Además, ten en cuenta que Ruby Sass siempre será la implementación de referencia y siempre llevará las características de LibSass.

En los proyectos que no están en Ruby, pero que necesitan una integración en tu flujo de trabajo, LibSass es probablemente una mejor idea, ya que se dedica a poner dicho código en un contenedor específico para cada lenguaje. Así que si quieres utlizar, por ejemplo, NodeJS,  [node-sass](https://github.com/sass/node-sass) sería tu solución.



### Más información

* [LibSass - En inglés](https://github.com/sass/libsass)
* [Conociendo LibSass -En inglés](http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Compatibiladad Sass - En inglés](http://sass-compatibility.github.io)
* [Cambiar de Ruby Sass a LibSass - En inglés](http://www.sitepoint.com/switching-ruby-sass-libsass/)





## Sass o SCSS

Hay una gran confusión con respecto a la semántica del nombre *Sass*, y por una buena razón: Sass nombra tanto al preprocesador como a su propia sintaxis. No muy adecuado ¿verdad? 

Verás, inicialmente Sass describía una sintaxis en la que su caractarística principal era la de ser sensible a espacios en blanco y tabulaciones. Rápidamente, quienes mantienen Sass dicidieron cerrar la brecha entre Sass y CSS, proporcionando una sintaxis CSS amigable llamada *SCSS* también conocida como *Sassy CSS*. Su lema es: si es CSS válido, es SCSS válido.

Desde entonces, Sass (el preprocesador) ha estado proporcionando dos sintaxis diferentes: Sass (no todas en mayúsculas, [por favor](http://sassnotsass.com)), también conocida como *sintaxis con sangría*, y SCSS. La elección entre cuál usar, depende mucho de tus preferencias, ya que ambas tienen características totalmente equivalentes. Llegados a este punto, es simplemente una cuestión de estética.

La sintaxis sensible a los espacios en blanco de Sass se basa en las tabulaciones para eliminar las llaves, los punto y coma y otros signos de puntuación, dando como resultado una sintaxis más corta y ligera. Mientras tanto, SCSS es más fácil de aprender, ya que en conjunto, se trata de añadir unos cuantos elementos adicionales a CSS.

Personalmente, prefiero SCSS a Sass ya que es mucho parecido a CSS y más amigable para la mayoría de desarrolladores. Debido a esto, usaré SCSS como sintaxis por defecto a lo largo de esta guía. Puedes ver la sintaxis con sangría de Sass pulsando en el <span data-toggle="aside" class="link-like" role="button" aria-expanded>panel de opciones</span>.



### Más información

* [¿Cuál es la diferencia entre Sass y SCSS? - En inglés](http://www.sitepoint.com/whats-difference-sass-scss/)






## Otros Preprocesadores

Sass es un preprocesador como cualquier otro. Su competidor más serio tiene que ser [LESS](http://lesscss.org/), un preprocesador basado en NodeJS que se ha hecho muy popular gracias a que el famoso *framework* CSS [Bootstrap](http://getbootstrap.com/) lo utiliza. También está [Stylus](http://learnboost.github.io/stylus/) - El cual es una especie de versión nerd y sin restricciones de LESS - en el que se puede hacer casi todo lo que quieras, es como si convirtiese a CSS en un lenguaje de programación.

*¿Por qué preferir Sass antes que LESS o cualquier otro preprocesador?* Esta sigue siendo una pregunta válida hoy en día. No hace mucho tiempo, se solía recomendar el uso de Sass para los proyectos basados en Ruby, puesto que originalmente se desarrolló teniendo como base Ruby y funcionaba bien con Ruby on Rails. Ahora que LibSass se ha puesto al día (en su mayoría) con el Sass original, ya no es un consejo demasiado acertado.

Lo que me gusta de Sass es su enfoque conservardor con CSS. El diseño de Sass se basa en fuertes principios: gran parte del enfoque del diseño viene como algo natural a los equipos desarrolladores principales, quienes creían que: a) añadir características adicionales tiene un coste de complejidad que debe ser justificado por su utilidad y b) que debe ser fácil comprender lo que un bloque determinado de estilos está haciendo con solo observar dicho bloque. Por otra parte, Sass se centra con mucho más cuidado en los detalles, a diferencia de otros preprocesadores. Por mi parte, puedo decir que los desarrolladores principales se preocupan profundamente por mantener todos los pequeños detalles y casos de compatibilidad de CSS, asegurandose que cada comportamiento general sea consistente.

En otras palabras, Sass no es un preprocesador enfocado a complacer empollones que quieren-ser-programadores como yo, añadiendo características extraordinarias sobre un lenguaje que no está destinado a soportar ninguna lógica en sus casos de uso. Es un software orientado a la solución de problemas reales; ayudando a proporcionar funcionalidades útiles para CSS, justo donde CSS se queda corto.

Preprocesadores aparte, es necesario mencionar también a los post-procesadores, los cuales han recibido mucha atención en los últimos meses, gracias especialmente a [PostCSS](https://github.com/postcss/postcss) y [cssnext](https://cssnext.github.io/). Los post-procesadores son más o menos el equivalente a los preprocesadores, excepto porque estos no proporcionan ninguna otra cosa que no sea la inminente sintaxis CSS. 

Piensa en un post-procesador como un *polyfill* para características no soportadas por CSS. Por ejemplo, podrías escribir variables tal y como se describen en las [especificaciones de CSS](http://dev.w3.org/csswg/css-variables/), y luego, compilar tus hojas de estilo con un post-procesador solo para darte cuenta que cada vez que aparece la variable, ésta es reemplazada con su valor, tal y como haría Sass.

La idea detrás de los post-procesadores es que una vez los navegadores soportan nuevas características (por ejemplo, variables CSS), el post-procesador, no las volverá a compilar y dejará que los navegadores se encarguen de ellas.

Aunque proporcionar la sintaxis del mañana parezca una idea noble, tengo que decir, que aún así prefiero usar Sass para la mayoría de las tareas. Sin embargo, hay algunas ocasiones en las que creo que los post-procesadores son más adecuados que Sass y similares - por ejemplo, con los prefijos CSS - pero ya volveremos a ello más adelante.




### Más información

* [LESS - En inglés](http://lesscss.org/)
* [Stylus - En inglés](http://learnboost.github.io/stylus/)
* [cssnext - En inglés](https://cssnext.github.io/)
* [PostCSS - En inglés](https://github.com/postcss/postcss)
