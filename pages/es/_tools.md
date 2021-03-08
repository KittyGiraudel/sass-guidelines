
## Herramientas

Lo bueno de un preprocesador CSS tan popular como Sass es que viene con un completo ecosistema de *frameworks*, *plugins*, librerías y herramientas. Después de 8 años de existencia, nos estamos acercando cada vez más a un punto donde [todo lo que se puede escribir en Sass, ya ha sido escrito en Sass](https://kittygiraudel.com/2014/10/27/rethinking-atwoods-law/).

Sin embargo, mi consejo es que debes disminuir al mínimo el número de dependencias. Manejarlas es casi un infierno del que no quieres formar parte. Además, hay pocas cosas que necesiten dependencias externas cuando se habla de Sass.

### Compass

[Compass](http://compass-style.org/) es el principal [*framework* de Sass](https://www.sitepoint.com/compass-or-bourbon-sass-frameworks/) ahí fuera. Desarrollado por [Chris Eppstein](https://twitter.com/chriseppstein), uno de los diseñadores principales de Sass, y que en mi opinión, no creo que vaya a perder drásticamente su popularidad en un futuro cercano.

Aún asi, [ya no uso Compass](https://www.sitepoint.com/dont-use-compass-anymore/), la razón principal es que ralentiza mucho Sass. Ruby Sass es bastante lento por si solo, así que añadirle más Ruby y más Sass por encima no ayuda demasiado.

El punto es que usamos una parte muy pequeña de todo el *framework*. Compass es enorme. Los *mixins* de compatibilidad entre navegadores son solo la punta del iceberg. Funciones matemáticas, utilidades para imágenes, *spriting*… Hay muchas cosas que puedes hacer con este gran software.

Infortunadamente, todo esta azúcar no proporciona ninguna característica impresionante. Se puede hacer una excepción con el constructor de *sprites* que es *muy bueno*. Pero por ejemplo, [Grunticon](https://github.com/filamentgroup/grunticon) y [Grumpicon](http://grumpicon.com/) cumplen la misma función y además tienen la ventaja de poderse conectar durante el proceso de construcción.

De todas formas, no es que prohíba el uso de Compass aunque tampoco lo recomiendo, especialmente dado que no es compatible con LibSass (aunque se han hecho muchos esfuerzos para ir en esa dirección). Si te sientes mejor utilizándolo, lo veo justo, pero no creas que obtendrás mucho al final del día.

<div class="note">
  <p>Ruby Sass tiene algunas optimizaciones importantes pendientes y que están específicamente orientadas a estilos de fuerte lógica con muchas funciones y *mixins*. Deberían mejorar drásticamente el rendimiento, hasta un punto en el que Compass u otros *frameworks* no volverán a ralentizar a Sass nunca más.</p>
</div>

### Sistemas De Retícula

No es una opción no utilizar un sistema de retícula ahora que el *Responsive Web Design* está por todas partes. Para que los diseños sean consistentes y coherentes en todos los tamaños, utilizamos algo similar a una cuadrícula para disponer los elementos. Para evitar tener que escribir el código de ésta retícula una y otra vez, algunas mentes brillantes han hecho la suya reutilizable.

Déjame ser directo: no soy muy fan de los sistemas de retícula. Por supuesto que veo su potencial, pero creo que muchos de ellos son completamente excesivos y en su mayoría sirven para dibujar columnas rojas sobre un fondo blanco en las presentaciones de algunos diseñadores listillos. ¿Cuándo fue la última vez que pensaste *Gracias-a-Dios-tengo-esta-herramienta-para-construir-retículas-de-2-5-3.2-π*?. Eso es, nunca. Porque en la mayoría de los casos, quieres usar la típica retícula de 12 columnas. Nada estrafalario.

Si estás usando un *framework* CSS para tu proyecto, como [Bootstrap](https://getbootstrap.com/) o [Foundation](https://get.foundation/), hay muchas probabilidades de que ya incluya un sistema de retícula, en cuyo caso te recomendaría que usaras estos para evitar tener otra dependencia.

Si no trabajas con un sistema de retícula específico, te sentirás complacido al saber que hay dos motores de retícula de primera categoría para Sass: [Susy](https://www.oddbird.net/susy/) y [Singularity](https://github.com/at-import/Singularity). Ambos hacen mucho más de lo que necesitas, así que puedes seleccionar el que prefieras entre estos dos y estar seguro/a de que todos los casos límite &mdash;incluso los más extremos&mdash; serán cubiertos. Si me preguntas, Susy tiene una comunidad ligeramente mejor, pero esa es mi opinión.

O puedes trabajar con algo más casual, como [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). Con todo, la elección no tendrá mucho impacto en el estilo de tu código, así que todo depende de ti llegados a este punto.

### SCSS-lint

Limpiar el código es muy importante. Normalmente, seguir las pautas de una guía de estilo reduce la cantidad de errores en el código, pero nadie es perfecto y siempre hay cosas a mejorar. Asi que se puede decir que limpiar el código es tan importante como comentarlo.

[SCSS-lint](https://github.com/causes/scss-lint) es una herramienta que te ayuda a mantener tus archivos SCSS limpios y legibles. Es completamente personalizable y fácil de integrar con tus propias herramientas.

Afortunadamente, las recomendaciones de SCSS-lint son muy similares a las descritas en este documento. Con el fin de configurar tu SCSS-lint según esta guía de Sass, te recomiendo seguir la siguiente configuración:

{% include snippets/tools/01/index.html %}

Si no estás convencido de la necesidad de usar SCSS-lint, te recomiendo que leas estos artículos: [Limpia tu Sass con SCSS-lint -En inglés](https://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/), [Mejorando la calidad del código Sass en theguardian.com -En inglés](https://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom) y [Un guía de estilo SCSS auto-ejecutable -En inglés](https://davidtheclark.com/scss-lint-styleguide/).

<div class="note">
  <p>Si quieres usar SCSS-lint en el proceso de compilado de Grunt, estarás encantado de saber que hay un *plugin* de Grunt para esto, llamado <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>También, si estás en la búsqueda de una aplicación limpia que funcione con SCSS-lint y similares, los chicos de <a href="https://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat…) están trabajando en <a href="https://houndci.com/">Hound</a>.</p>
</div>
