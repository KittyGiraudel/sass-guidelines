
## Arquitectura

Establecer la arquitectura CSS es probablemente una de las cosas más difíciles que tendrás que hacer en la vida de un proyecto. Mantener esa arquitectura consistente y significativa es aún más difícil.

Afortunadamente, uno de los principales beneficios de utilizar un preprocesador CSS es tener la capacidad de dividir el código en varios archivos sin afectar al rendimiento (como haría la directiva `@import` en CSS). Gracias a la directiva `@import` de Sass, es perfectamente seguro (y de hecho recomendable) usar tantos archivos como sean necesarios en el desarrollo, compilándolo todo en una sola hoja de estilo cuando vaya a producción.

Además, también quiero hacer hincapié en la necesidad de utilizar carpetas, incluso para los proyectos a pequeña escala. En casa, no guardas todos tus documentos en el mismo cajón sin más. Utilizas carpetas; una para la casa/apartamento, otra para el banco, otra para las facturas y así sucesivamente. No hay razón para hacer lo contrario cuando se estructura un proyecto CSS. Divide el código en carpetas significativas para que sea sencillo encontrar las cosas más tarde cuando tengas que volver al código de nuevo.

Hay una gran cantidad de [arquitecturas populares - En inglés](https://www.sitepoint.com/look-different-sass-architectures/) para los proyectos CSS: [OOCSS](http://oocss.org/), [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](https://getbootstrap.com/), [Foundation](https://get.foundation/) o similare. Todas ellas tienen sus méritos, pros y contras.

Yo utilizo un método que resulta ser bastante similar a [SMACSS](http://smacss.com/) de [Jonathan Snook](https://snook.ca/), que se centra en mantener las cosas simples y evidentes.

<div class="note">
  <p>He aprendido que la arquitectura es, en la mayoría de los casos muy específica para cada proyecto. Siéntete libre de descartar o de adaptar la solución propuesta hasta que encuentres un sistema que se adapte a tus necesidades.</p>
</div>

### Componentes

Hay una gran diferencia entre hacer que algo *funcione* y hacerlo *bien*. De nuevo, CSS es un lenguaje bastante desordenado <sup>[cita requerida]</sup>. Cuánto menos CSS tengamos, mejor. No queremos tener que trabajar con megabytes de código CSS. Para mantener las hojas de estilo cortas y eficientes &mdash;y esto no será ninguna sorpresa para tí&mdash; es una buena idea pensar en una interfaz como en una colección de componentes.

Los componentes pueden ser cualquier cosa, siempre y cuando:

* haga una cosa y sólo una cosa;
* sea reutilizable y se reutilice a lo largo del proyecto;
* sea independiente.

Por ejemplo, un formulario de búsqueda debería ser tratado como un componente. Debería ser reutilizable, en diferentes lugares, en diferentes páginas y en varias situaciones. No debe depender de su posición en el DOM (pie de página, barra lateral, contenido principal…).

La mayor parte de cualquier interfaz puede concebirse en forma de pequeños componentes y te recomiendo encarecidamente que lo hagas. Esto no solo reducirá la cantidad de CSS necesario para todo el proyecto, sino que también resultará más fácil de mantener que un desorden caótico donde todo está hecho un lío.

### Estructura de un componente

Idealmente, los componentes deberían existir dentro de su propia partición Sass (en la carpeta `components/`, como se describe en el patrón [7-1](#el-patron-7-1)), por ejemplo `components/_button.scss`. Los estilos descritos en cada archivo de componentes sólo deben estar relacionados con:

* el propio estilo del componente en sí;
* el estilo de las variantes, modificadores, y/o estados del componente;
* el estilo de los descendientes del componente (por ejemplo, los hijos), si es necesario.

Si quieres que tus componentes puedan ser personalizados externamente (por ejemplo, desde un tema de la carpeta `themes/`), limita las declaraciones a estilos estructurales, como dimensiones (width/height), padding, margins, alignment, entre otros. Evita los estilos del tipo color, sombra, tipografía, fondo, etc.

Un componente puede incluir variables específicas de componentes, *placeholders* e incluso *mixins* y funciones. Ten en cuenta, sin embargo, que debes evitar referenciar (es decir, `@import`-ar) archivos de componentes de otros archivos de componentes, ya que esto puede hacer que la dependencia dentro de tu proyecto sea un completo lío.

Este es un ejemplo del componente de un botón:

{% include snippets/architecture/06/index.html %}

<div class="note">
  <p>Gracias a <a href="https://twitter.com/davidkpiano">David Khourshid</a> por su ayuda y experiencia en esta sección.</p>
</div>

### El Patron 7-1

Volvamos a la arquitectura, ¿de acuerdo? Normalmente suelo trabajar con lo que yo llamo el *patrón 7-1*: 7 carpetas, 1 archivo. Basicamente, tienes todas las partes almacenadas en 7 carpetas diferentes, y un único archivo en el directorio raíz (normalmente llamado `main.scss`) y que importa todas estas partes para luego compilarlas en una hoja de estilo CSS.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `abstracts/`
* `vendors/`

Y por supuesto:

* `main.scss`

<div class="note">
  <p>Si quieres usar el patrón 7-1, aquí hay una <a href="https://github.com/KittyGiraudel/sass-boilerplate">plantilla reutilizable</a> en GitHub. Debería contener todo lo que necesitas para empezar con esta arquitectura.</p>
</div>

{% include images/wallpaper.html %}

Idealmente, podemos llegar a algo como esto:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Los archivos siguen las mismas convenciones de nomenclatura descritas anteriormente: están delimitadas por guiones.</p>
</div>

#### Carpeta Base

La carpeta `base/` contiene lo que podríamos llamar la plantilla del proyecto. Allí, puedes encontrar el archivo *reset* para reiniciar los estilos CSS, algunas reglas tipográficas y probablemente un archivo CSS que define algunos estilos estándares  para los elementos HTML más comunes (y que me gusta llamar `_base.scss`).

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

<div class="note">
  <p>Si tu proyecto usa <em>muchas</em> animaciones CSS, podrías pensar en añadir un archivo <code>\_animations.scss</code> conteniendo las deficiones de <code>@keyframes</code> de todas tus animaciones. Si solo las usas esporádicamente, déjalas convivir con los selectores que las usan.</p>
</div>

#### Carpeta Layout

La carpeta `layout/` contiene todo lo que tiene que ver con la distribución del sitio o la aplicación. Esta carpeta puede contener hojas de estilo para las partes principales del sitio (header, footer, navigation, sidebar…), el sistema de retícula o incluso el estilo CSS para los formularios.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>La carpeta <code>layout/</code> también se puede llamar <code>partials/</code>, todo depende de lo que tu prefieras.</p>
</div>

#### Carpeta Componentes

Para componentes más pequeños, existe la carpeta `components/`. Mientras `layout/` tiene una visión *macro* (definiendo la estructura global), `components/` está mucho más centrado en los *widgets*. Contiene todo tipo de módulos específicos como por ejemplo, un *slider*, un *loader*, un *widget*, y básicamente todo lo que esté en esa misma línea. Por lo general hay un montón de archivos en `components/` ya que todo el sitio o la aplicación debería estar compuesto en su mayoría, de pequeños módulos.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>La carpeta <code>components/</code> también se puede llamar <code>modules/</code>, todo depende de lo que tu prefieras.</p>
</div>

#### Carpeta Páginas

Si tienes estilos específicos para cada página, es mejor ponerlos en una carpeta `pages/`, dentro de un archivo con el nombre de la página. Por ejemplo, es común tener muchos estilos específicos para la página principal, por lo que existe la necesidad de tener un archivo `_home.scss` en la carpeta `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Dependiendo de tu proceso de implementación, estos archivos podrían llamarse de manera independiente para evitar que sean fusionados con otros en la hoja de estilos resultante. Todo depende de ti.</p>
</div>

#### Carpeta Temas

En sitios y aplicaciones grandes, no es raro tener diferentes temas. Es cierto que hay diferentes maneras de tratar con los temas, pero personalmente, me gusta tenerlos todos en la carpeta `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Esto es muy específico del proyecto y es probable que sea inexistente en muchos de ellos.</p>
</div>

#### Carpeta Abstracts

La carpeta `abstracts/` reúne todas las herramientas y *helpers* de Sass utilizados en todo el proyecto. Cada variable global, función, *mixin* y *placeholder* debería estar en esta carpeta.

La regla de oro para esta carpeta es que no debe generar ni una sola línea de CSS cuando se compila por si sola. Solo hay *helpers* de Sass. 

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` 

Cuando se trabaja en un proyecto muy grande, con muchas utilidades abstractas, podría ser interesante agruparlas por tema en vez de por tipo, por ejemplo tipografía (`_typography.scss`), temas (` _theming.scss`), etc. Cada archivo contiene todos los *helpers* relacionados: variables, funciones, *mixins* y *placeholders*. Hacerlo provoca que que el código sea más fácil de navegar y mantener, especialmente cuando los archivos son muy largos.

<div class="note">
  <p>La carpeta <code>abstracts/</code> también se puede llamar <code>utilities/</code> o <code>helpers/</code>, dependiendo de tus preferencias.</p>
</div>

#### Carpeta Vendors

Y por último, pero no menos importante, la mayoría de los proyectos tienen una carpeta `vendors/` que contiene todos los archivos CSS procedentes de librerías externas y *frameworks* – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, etc. Poner estos archivos en una misma carpeta, es una buena forma de decir "¡Hey! esto no lo he escrito yo, no es mi código y no es mi responsabilidad".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Si tienes que sobrescribir una sección de cualquier *vendor*, te recomiendo que tengas una octava carpeta llamada `vendors-extensions/` en la que puedes poner estos archivos usando el mismo nombre que le ha dado el desarrollador.

Por ejemplo, `vendors-extensions/_bootstrap.scss` es un archivo que contiene todas las reglas CSS que se volverán a declarar con respecto al CSS por defecto de Bootstrap. Esto se hace para evitar editar directamente los archivos del proveedor, lo que es en general una mala idea.

#### Archivo Principal

El archivo principal (normalmente llamado `main.scss`) debería ser el único archivo Sass de todo el código que no empieza con guión bajo. Este archivo no debería contener nada más que `@import` y comentarios.

Los archivos deben de importarse según la carpeta que los contiene, una después de la otra en el siguiente orden:

1. `abstracts/`
1. `vendors/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Con el fin de mantener la legibilidad, el archivo principal debe respetar las siguientes pautas:

* un archivo para cada `@import`;
* un `@import` por línea;
* no dejar una línea en blanco entre dos archivos que pertenecen a la misma carpeta;
* dejar una línea en blanco después del último archivo de una carpeta;
* las extensiones de archivo y los guiones principales se omiten.

{% include snippets/architecture/02/index.html %}

Hay otra forma de importar las partes de un proyecto que también que me parece válida. La parte positiva, es que hace que el fichero sea más legible. Pero por otro lado, actualizar el contenido puede ser un poco más doloroso. De todas formas, te dejaré decidir qué es lo mejor, en realidad no importa demasiado. Para hacer las cosas de esta manera, el archivo principal debe respetar las siguientes pautas:

* un `@import` por carpeta;
* un salto de línea después de cada `@import`;
* cada archivo debe ir en su propia línea;
* dejar una línea en blanco después del último archivo de una carpeta;
* las extensiones de archivo y los guiones principales se omiten.

{% include snippets/architecture/03/index.html %}

### Acerca de globbing

En programación, los patrones glob especifican un conjunto de nombres de fichero con caracteres comodín, como `*.scss`. En general, *globbing* busca hacer coincidir un conjunto de archivos basado en una expresión, en lugar de en una lista de nombres de archivo. Cuando esto se aplica a Sass, significa importar *partials* en el [archivo main](#archivo-principal) con un patrón glob en lugar de enumerarlos individualmente. Esto hará que el archivo principal tenga este aspecto:

{% include snippets/architecture/05/index.html %}

Sass no soporta el uso de patrones *glob* porque puede ser una característica peligrosa ya que sabes que en CSS es importante el orden. Al importar los archivos de manera dinámica (que suele ser en orden alfabético), no se controla el orden de los ficheros, lo que puede provocar efectos secundarios muy difíciles de depurar.

Dicho esto, en una estricta arquitectura basada en componentes, en la que se tiene especial cuidado de no filtrar ningún estilo de un *partial* a otro, el orden no debería ser importante, lo que permitiría el uso del patrón *glob* de importación. Esto significaría que es más fácil agregar o quitar *partials*, puesto que actualizar el archivo *main* no sería necesario.

Cuando se usa Ruby Sass, hay una gema de Ruby llamada [sass-globbing](https://github.com/chriseppstein/sass-globbing) que permite tener este mismo comportamiento. Si se utiliza node-sass, se puede confiar en Node.js o en cualquier herramienta que se use para realizar la compilación (Gulp, Grunt, etc.).


### El Archivo De La Verguenza

Hay un concepto interesante que ha popularizado [Harry Roberts](https://csswizardry.com), [Dave Rupert](https://daverupert.com) y [Chris Coyier](https://css-tricks.com) y que consiste en poner todas las declaraciones CSS, *hacks* y cosas de las que no nos sentimos muy orgullosos en un [archivo de la verguenza](https://csswizardry.com/2013/04/shame-css-full-net-interview/). Este archivo, titulado dramáticamente `_shame.scss`, se importará después de los demás archivos, al final de la hoja de estilo.

{% include snippets/architecture/04/index.html %}

