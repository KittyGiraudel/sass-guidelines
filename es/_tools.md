
# Herramientas

Lo bueno de un preprocesador CSS tan popular como Sass es que viene con un completo ecosistema de *frameworks*, *plugins*, librerías y herramientas. Después de 8 años de existencia, nos estamos acercando cada vez más a un punto donde [todo lo que puede ser escrito en Sass, ya ha sido escrito en Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

Sin embargo, mi consejo es que debes disminuir al mínimo el número de dependencias. Manejarlas es casi un infierno del que no quieres formar parte. Además, hay pocas cosas que necesiten dependencias externas cuando se habla de Sass.






## Compass

[Compass](http://compass-style.org/) es el principal *framework* de Sass. Desarrollado por [Chris Eppstein](https://twitter.com/chriseppstein), uno de los diseñadores de Sass, si quieres mi opinión, no creo que vaya a perder drásticamente su popularidad en un futuro cercano.

Aún asi, yo no uso Compass, la razón principal es que ralentiza muchísimo a Sass. Ruby Sass es bastante lento por si mismo, así que añadirle más Ruby y más Sass por encima no ayuda demasiado.

Lo que ocurre es que usamos una parte muy pequeña del *framework*. Compass es enorme. Los *mixins* de compatibilidad entre navegadores son solo la punta del iceberg. Funciones matemáticas, utilidades de imagen, *spriting*... Hay muchas cosas que puedes hacer con este gran software.

Desafortunadamente, toda esta azucar no proporciona ninguna característica impresionante. Se puede hacer una excepción con el constructor de *sprites* que es *muy bueno*. Pero por ejemplo [Grunticon](https://github.com/filamentgroup/grunticon) y [Grumpicon](http://grumpicon.com/) cumplen la misma función también y además tienen la ventaja de poderse conectar durante el proceso de construcción.

De todas formas, no prohíbo el uso de Compass aunque tampoco lo recomiendo, especialmente dado que no es compatible con LibSass (aunque se han hecho muchos esfuerzos para ir en esa dirección). Si te sientes mejor utilizándolo, lo veo justo, pero no creas que obtendrás mucho al final del día.

<div class="note">
  <p>Ruby Sass tiene algunas optimizaciones importantes pendientes y que están específicamente orientadas a los estilos de fuerte lógica con muchas funciones y *mixins*. Deberían mejorar drásticamente el rendimiento, hasta un punto donde Compass u otros *frameworks* no volverán a ralentizar a Sass nunca más.</p>
</div>



### Más información

* [Compass -En inglés](http://compass-style.org/)
* [Frameworks Sass: Compass o Bourbon -En inglés](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [¿Por qué ya no uso Compass?](http://www.sitepoint.com/dont-use-compass-anymore/)
* [¿Es Compass a Sass lo que JQuery es a JavaScript? -En inglés](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## Sistemas De Retícula

No es una opción no utilizar un sistema de retícula ahora que el *Responsive Web Design* está por todas partes. Para que los diseños parezcan consistententes y coherentes en todos los tamaños, utilizamos algo así como una retícula para disponer los elementos. Para evitar tener que escribir el código de esta retícula una y otra vez, algunas mentes brillantes desarrollaron una retícula reutilizable.

Déjame ser directo: no soy muy fan de los sistemas de retícula. Por supuesto que veo su potencial, pero creo que muchos de ellos son completamente excesivos y en su mayoría sirven para dibujar columnas rojas sobre un fondo blanco en las presentaciones de diseñadores nerds. ¿Cúando fue la última vez que pensaste *Gracias-a-Dios-tengo-esta-herramienta-para-construir-retículas-de-2-5-3.2-π*?. Eso es, nunca. Porque en la mayoría de los casos, quieres usar la típica retícula de 12 columnas. Nada estrafalario.

Si estás usando un *framework* CSS para tu proyecto, como [Bootstrap](http://getbootstrap.com/) o [Foundation](http://foundation.zurb.com/), hay muchas probabilidades de que ya incluya un sistema de retícula, en cuyo caso recomendaría que usaras estos para evitar tener que tratar con otra dependencia.

Si no trabajas con un sistema de retícula específico, estarás complacido al saber que hay dos motores de retícula de primera categoría para Sass: [Susy](http://susy.oddbird.net/) y [Singularity](http://singularity.gs/). Ambos hacen mucho más de lo que necesitas, así que selecciona el que tu prefieras y asegurate de tratar todos los casos &mdash;incluso los más extremos&mdash;y lo tendrás resuelto. Si me preguntas, Susy tiene una mejor comunidad, pero esa es mi opinión.

O puedes trabajar con algo más casual, como [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). Con todo, la elección no tendrá mucho impacto en tu estilo de programación, así que todo depende de ti llegados a este punto.


### Más información

* [Singularity - En inglés](http://singularity.gs/)
* [Singularity: Réticulas sin límites -En inglés](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity, sistema de retículas -En inglés](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy -En inglés](http://susy.oddbird.net/)
* [Constuir diseños web fácilmente con Susy -En inglés](http://css-tricks.com/build-web-layouts-easily-susy/)
* [Tutorial completo de Susy 2 -En inglés](http://www.zell-weekeat.com/susy2-tutorial/)
* [Retículas Sass: De Neat a Susy -En inglés](http://www.sitepoint.com/sass-grids-neat-susy/)
* [Sistema de retículas Bootstrap vs Susy: Comparación -En inglés](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [Cómo usar Susy: retículas Sass con super poderes -En inglés](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [Sistema de retículas creativas con Sass y calc() -En inglés](http://www.sitepoint.com/creative-grid-system-sass-calc/)






## SCSS-lint

Limpiar el código es muy importante. Normalmente, seguir las pautas de una guía de estilo reduce la cantidad de errores en el código, pero nadie es perfecto y siempre hay cosas para mejorar. Asi que se puede decir que limpiar el código es tan importante como comentarlo.


[SCSS-lint](https://github.com/causes/scss-lint) es una herramienta que te ayuda a mantener tus archivos SCSS limpios y legibles. Es completamente personalizable y fácil de integrar con tus propias herramientas.

Afortunadamente, las recomendaciones para limpiar el código con SCC-lint son muy similares a las descritas en este documento. Con el fin de configurar tu SCSS-lint según *Sass Guidelines*, te recomiendo seguir la siguiente configuración:

{% include scss-lint-configuration.html %}

<div class="note">
  <p>Si quieres conectar SCSS-lint con Grunt en tu proceso de desarrollo, estarás encantado con saber que hay un *plugin* de Grunt para eso llamado <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>También, si estás en la búsqueda de una aplicación limpia que trabaje con SCSS-lint y similares, los chicos de <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) están trabajando en <a href="https://houndci.com/">Hound</a>.</p>
</div>



### Más información

* [SCSS-lint -En inglés](https://github.com/causes/scss-lint)
* [Limpia tu Sass con SCSS-lint -En inglés](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Mejorando la calidad de tu código Sass en theguardian.com -En inglés](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint -En inglés](https://github.com/ahmednuaman/grunt-scss-lint)
* [Una guía de estilo SCSS auto-ejecutable -En inglés](http://davidtheclark.com/scss-lint-styleguide/)
