
## Acerca De Sass

Así se describe [Sass](https://sass-lang.com) en su [documentación](https://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass es una extensión de CSS que añade potencia y elegancia al lenguaje básico.

El objetivo principal de Sass es el de corregir los defectos de CSS. Como todos sabemos, CSS no es el mejor lenguaje del mundo <sup>[cita requerida]</sup> y aunque es sencillo de aprender, puede convertirse en un auténtico desorden, especialmente en proyectos grandes.

Es aquí donde Sass cobra sentido, ya que actúa como un meta-lenguaje para mejorar la sintaxis de CSS con el fin de proporcionar características extra y herramientas útiles. Entretanto, Sass quiere ser conservador con respecto al lenguaje CSS.

La idea no es convertir CSS en un lenguaje de programación totalmente funcional; Sass solo quiere mejorar aspectos donde CSS falla. Por ello, empezar con Sass no es más difícil que aprender CSS: Sass simplemente agrega un par de características adicionales.

Dicho esto, hay muchas formas de utilizar estas funciones. Algunas buenas, algunas malas y otras, poco comunes. Esta guía tiene como finalidad darte un enfoque coherente y documentado para escribir Sass.

### Ruby Sass o LibSass

El primer [commit de Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) se remonta a finales de 2006, hace más de 10 años. Obviamente se ha recorrido un largo camino desde entonces. A la primera versión desarrollado en Ruby, le sucedieron distintas variaciones; la más popular, [LibSass](https://github.com/sass/libsass) (Escrita en C/C++) está ahora muy cerca de ser totalmente compatible con la versión original en Ruby.

En 2014, [los equipos de Ruby Sass y LibSass decidieron esperar a que ambas versiones se sicronozaran antes de seguir adelante](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Desde entonces, LibSass ha continuado publicando nuevas versiones para igualar sus características con las de su hermano mayor. Así que he reunido y listado las últimas inconsistencias entre ambas, en el proyecto [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/). Si conoces otras incompatibilidades entre estas dos versiones y no aparecen listadas, por favor, házmelo saber abriendo un *issue*.

Volviendo a la tarea de elegir un compilador; en realidad, dependerá de tu proyecto. Si es un proyecto basado en ruby on Rails, es mejor utilizar Ruby Sass que es perfectamente adecuado para este caso. Además, ten en cuenta que Ruby Sass siempre será la implementación de referencia y por tanto liderará las funciones de LibSass. Pero si lo que estás buscando es [cambiar de Ruby Sass a LibSass](https://www.sitepoint.com/switching-ruby-sass-libsass/), este artículo es para tí.

Para proyectos que no están en Ruby que necesitan una integración de flujo de trabajo, LibSass es probablemente una mejor idea, ya que está dedicado principalmente a ser envuelto por cada lenguaje. Así que si quieres utilizar, por ejemplo, Node.js,  [node-sass](https://github.com/sass/node-sass) sería tu solución.

### Sass o SCSS

Hay una gran confusión con respecto a la semántica del nombre *Sass*, y por una buena razón: Sass nombra tanto al preprocesador como a su propia sintaxis. No muy adecuado ¿verdad?

Verás, inicialmente Sass describe una sintaxis en la que su característica principal era la de ser sensible a las tabulaciones. Rápidamente, quienes mantienen Sass decidieron cerrar la brecha entre Sass y CSS, proporcionando una sintaxis amigable con CSS  llamada *SCSS* también conocida como *Sassy CSS*. Su lema es: si es CSS válido, es SCSS válido.

Desde entonces, Sass (el preprocesador) ha estado proporcionando  [dos sintaxis diferentes](https://www.sitepoint.com/whats-difference-sass-scss/): Sass (no todas en mayúsculas, [por favor](http://sassnotsass.com)), también conocida como *sintaxis con tabulación*, y SCSS. La elección de cuál usar, depende mucho de tus preferencias, ya que ambas tienen características totalmente equivalentes. Llegados a este punto, es simplemente una cuestión de estética.

La sintaxis sensible a los espacios en blanco de Sass se basa en las tabulaciones para eliminar las llaves, los punto y coma y otros signos de puntuación, dando como resultado una sintaxis más corta y ligera. Mientras tanto, SCSS es más fácil de aprender, ya que en conjunto, se trata de añadir unos cuantos elementos adicionales a CSS.

Personalmente, prefiero SCSS a Sass ya que es mucho más parecido a CSS y más amigable para la mayoría de desarrolladores. Debido a esto, la usaré como sintaxis por defecto a lo largo de esta guía. Puedes cambiar a la sintaxis con tabulaciones de Sass pulsando en el <button type="button" data-a11y-dialog-show="options-panel" class="link-like">panel de opciones</button>.

### Otros Preprocesadores

Sass es un preprocesador entre otros tantos. Su competidor más serio tiene que ser [LESS](http://lesscss.org/), un preprocesador basado en Node.js que se ha hecho muy popular gracias a que el famoso *framework* CSS [Bootstrap](https://getbootstrap.com/) lo utilizaba hasta la versión 4. También está [Stylus](https://stylus-lang.com/), un preprocesador muy permisivo y flexible que si embargo es un poco más complicado de aprender y tiene una comunidad más pequeña.

*¿Por qué preferir Sass a cualquier otro preprocesador?* Esta sigue siendo una pregunta válida hoy en día. No hace mucho tiempo, soliamos recomendar el uso de Sass para los proyectos basados en Ruby, puesto que se desarrolló inicialmente en Ruby y por tanto funcionaba bien con Ruby on Rails. Ahora que LibSass se ha puesto al día (en su mayoría) con el Sass original, ya no es un consejo demasiado relevante.

Lo que me gusta de Sass es su enfoque conservador respecto a CSS. El diseño de Sass se basa en fuertes principios: gran parte del enfoque del diseño resultaba natural a los equipos desarrolladores principales, quienes creían que: a) añadir características adicionales tiene un coste de complejidad que debe ser justificado por su utilidad y b) debe ser fácil comprender lo que un bloque determinado de estilos está haciendo con solo observar dicho bloque. Por otra parte, Sass se centra con mucho más cuidado en los detalles que otros preprocesadores. Por mi parte, puedo decir que los desarrolladores principales se preocupan profundamente por mantener todos los pequeños detalles y casos de compatibilidad con CSS, asegurándose que cada comportamiento general sea consistente. En otras palabras, Sass es un software orientado a solucionar problemas reales; ayudando a proporcionar funcionalidades útiles para CSS, justo donde CSS se queda corto.

Preprocesadores aparte, también debemos mencionar herramientas como [PostCSS](https://github.com/postcss/postcss) y [cssnext](https://cssnext.github.io/) que han recibido una exposición significativas en los últimos meses.

PostCSS es comunmente (e incorrectamente) referido como un “post-procesador”. La suposición, combinada con el desafortunado nombre, es que PostCSS analiza sobre CSS lo que ya ha sido procesado por un preprocesador. Si bien puede funcionar de esta manera, no es un requisito para PostCSS, lo que lo convierte en realidad en sólo un “procesador”.

Te permite acceder a “tokens” de tus hojas de estilo (como selectores, propiedades y valores), los procesa con JavaScript para realizar operaciones de cualquier tipo y compila los resultados a CSS. Por ejemplo, la popular librería de prefijos [Autoprefixer](https://github.com/postcss/autoprefixer) está creada con PostCss. Analiza todas las reglas para comprobar si estas necesitan algún prefijo específico de proveedor (*vendor prefixes*) haciendo referencia a la herramienta de soporte de navegadores [CanIUse](https://caniuse.com) y, a continuación, elimina o añade los prefijos necesarios.

Esto es increíblemente potente y genial para la construcción de librerías que funcionan con cualquier preprocesador (así como vanilla CSS), pero PostCSS no es particularmente fácil de usar todavía. Tienes que saber un poco de JavaScript para construir cualquier cosa con él, y su API puede ser confusa algunas veces. Mientras que Sass sólo proporciona un conjunto de características que son útiles para escribir CSS, PostCSS proporciona acceso directo al AST de CSS (*árbol de sintaxis abstracto*) y a JavaScript.

En resumen, Sass algo fácil y resolverá la mayoría de tus problemas. Por otra parte, PostCSS puede ser un poco complicado (si no se te da bien JavaScript), pero resulta ser increíblemente potente. No hay ninguna razón por la que no puedas usar ambos. De echo, PostCSS ofrece un analizador oficial de SCSS solo para esto.

<div class="note">
  <p>Gracias a <a href="https://github.com/corysimmons">Cory Simmons</a> por su ayuda experta en esta sección.</p>
</div>
