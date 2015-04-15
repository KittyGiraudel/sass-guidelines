
# Arquitectura

Establecer la arquitectura del CSS es probablemente una de las cosas más difíciles que tendrás que hacer en la vida de un proyecto. Mantener esa arquitectura coherente y significativa es aún más difícil.

Afortunadamente, uno de los principales beneficios de utilizar un preprocesador CSS es tener la capacidad de dividir el código en varios archivos sin afectar al rendimiento (como haría la directiva `@import` en CSS). Gracias a la directiva `@import` de Sass, es perfectamente seguro (y de hecho recomendable) usar tantos archivos como sean necesarios en el desarrollo, compilandolo todo en una sola hoja de estilo cuando vaya a producción.

Además, también quiero hacer mucho hincapié en la necesidad de utilizar carpetas, incluso para los proyectos más pequeños. En casa, no dejas caer todos los documentos en la misma caja. Utilizas carpetas; una para la casa/apartamento, otra para el banco, otra para las facturas y así sucesivamente. No hay razón para hacer lo contrario cuando se estructura un proyecto CSS. Divide el código en carpetas significativas para que sea sencillo encontrar las cosas más tarde, cuando se tenga que volver al código de nuevo.

Hay una gran cantidad de arquitecturas populares para los proyectos CSS: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), similares a [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/). Todas ellas tienen sus méritos, pros y contras.

Yo mismo, utilizo un método que resulta ser bastante similar a [SMACSS](https://smacss.com/) de [Jonathan Snook](http://snook.ca/), que se centra en mantener las cosas simples y evidentes.

<div class="note">
  <p>He aprendido que la arquitectura es, en la mayoría de los casos muy específica para cada proyecto. Siéntete libre de descartar o de adaptar la solución propuesta para que encuentres un sistema que se adapte a tus necesidades.</p>
</div>



### Más información

* [Arquitectura para un proyecto Sass -En inglés](http://www.sitepoint.com/architecture-sass-project/)
* [Una mirada a las diferentes arquitecturas Sass -En inglés](http://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS -En inglés](https://smacss.com/)
* [Una introducción a OOCSS -En inglés](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Diseño Web Atómico -En inglés](http://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, una arquitectura compuesta -En francés](http://slides.com/hugogiraudel/sass-une-architecture-composee)






## Componentes

Hay una gran diferencia entre hacer que algo *funcione* y hacerlo *bien*. De nuevo, CSS es un lenguaje bastante desordenado <sup>[cita requerida]</sup>. Cuánto menos CSS tengamos, mejor. No queremos tratar con megabytes de código CSS. Para mantener las hojas de estilo cortas y eficientes &mdash;y esto no será ninguna sorpresa para ti&mdash; por lo general es una buena idea pensar en una interfaz como en una colección de componentes.

Los componentes pueden ser cualquier cosa, siempre y cuando:

* haga una cosa y solo una cosa;
* sea reutilizable y se reutilice a lo largo del proyecto;
* sea independiente.

Por ejemplo, un formulario de búsqueda debería ser tratado como un componente. Debería ser reutilizable, en diferentes lugares, en diferentes páginas y en varias situaciones. No debe depender de su posición en el DOM (pie de página, barra lateral, contenido principal...).

La mayor parte de cualquier interfaz puede concebirse en forma de pequeños componentes y recomiendo encarecidamente que lo hagas. Esto no solo reducirá la cantidad de CSS necesario para todo el proyecto, sino que también se convierte en un código mucho más fácil de mantener que un desorden caótico donde todo está hecho un lío.






## El Patron 7-1

Volvamos a la arquitectura, ¿de acuerdo? Normalmente trabajo con lo que yo llamo el *patrón 7-1*: 7 carpetas, 1 archivo. Basicamente, tienes todas las partes almacenadas en 7 carpetas diferentes, y un único archivo en el directorio raíz (usualmente llamado `main.scss`) que importa todas estas partes para ser compiladas en una hoja de estilo CSS.

* `base/`
* `componentes/`
* `layout/`
* `páginas/`
* `temas/`
* `utilidades/`
* `proveedores/`

Y por supuesto:

* `main.scss`

<figure role="group">
  <img alt="Un archivo para gobernarlos a todos, un archivo para encontrarlos, un archivo para reunirlos, y Sass para fusionarlos."
     sizes="100vw"
     srcset="/assets/images/sass-wallpaper_small.jpg  540w,
             /assets/images/sass-wallpaper_medium.jpg 900w,
             /assets/images/sass-wallpaper_large.jpg 1200w,
             /assets/images/sass-wallpaper_huge.jpg  1590w" />
  <figcaption>Fondo de pantalla realizado por <a href="https://twitter.com/julien_he">Julien He</a></figcaption>
</figure>

Idealmente, podemos llegar a algo como esto:

<div class="highlight"><pre><code>
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Reglas tipográficas
|   ...                  # Etc…
|
|– componentes/
|   |– _buttons.scss     # Botones
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cubierta
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/
|   |– _navigation.scss  # Navegación
|   |– _grid.scss        # Sistema de retícula
|   |– _header.scss      # Encabezamiento
|   |– _footer.scss      # Pie de página
|   |– _sidebar.scss     # Barra lateral
|   |– _forms.scss       # Formularios
|   ...                  # Etc…
|
|– paginas/
|   |– _home.scss        # Estilos específicos para la página de inicio
|   |– _contact.scss     # Estilos específicos para la página de contacto
|   ...                  # Etc…
|
|– temas/
|   |– _theme.scss       # Tema por defecto
|   |– _admin.scss       # Tema del administrador
|   ...                  # Etc…
|
|– utilidades/
|   |– _variables.scss   # Variables Sass
|   |– _functions.scss   # Funciones Sass
|   |– _mixins.scss      # Mixins Sass
|   |– _helpers.scss     # Clases & placeholders
|
|– proveedores/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– main.scss             # Archivo principal de Sass
</code></pre></div>

<div class="note">
  <p>Los archivos siguen las mismas convenciones de nomenclatura descritas anteriormente: están delimitadas por guiones.</p>
</div>



### Carpeta Base

La carpeta `base/` contiene lo que podríamos llamar el código estándar para el proyecto. Allí, puedes encontrar el archivo *reset* para reiniciar los estilos CSS, algunas reglas tipográficas y probablemente una hoja de estilo (a la que suelo llamar `_base.scss`) y que define algunos estilos estándar para los elementos HTML que son utilizados habitualmente.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`



### Carpeta Layout

La carpeta `layout/` contiene todo lo que tiene que ver con la disposición del sitio o la aplicación. Esta carpeta puede contener hojas de estilo para las partes principales del sitio (header, footer, navigation, sidebar...), el sistema de retícula o incluso el estilo CSS para los formularios.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>La carpeta <code>layout/</code> también se puede llamar <code>partials/</code>, todo depende de lo que tu prefieras.</p>
</div>



### Carpeta Componentes

Para componentes más pequeños, existe la carpeta `componentes/`. Mientras `layout/` tiene una visión *macro* (definiendo la estructura global), `componentes/` está mucho más centrado en los *widgets*. Contiene todo tipo de módulos específicos como un *slider*, un *loader*, un *widget*, y básicamente todo lo que esté en esa misma línea. Por lo general hay un montón de archivos en `components/` ya que todo el sitio o la aplicación debería estar compuesto en su mayoría, de pequeños módulos.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>La carpeta <code>components/</code> también se puede llamar <code>modules/</code>, todo depende de lo que tu prefieras.</p>
</div>



### Carpeta Páginas

Si tienes estilos específicos para cada página, es mejor ponerlos en una carpeta `paginas/`, dentro de un archivo que lleva el nombre de la página en sí. Por ejemplo, es muy común tener muchos estílos específicos para la página principal, por lo que hay la necesidad de tener un archivo `_home.scss` en la carpeta `paginas/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Dependiendo de tu proceso de implementación, estos archivos podrían llamarse de manera independiente para evitar que sean fusionados con otros en la hoja de estilos resultante. Todo depende de ti.</p>
</div>



### Carpeta Temas

En grandes proyectos para grandes sitios o aplicaciones, es muy usual tener diferentes temas. Es cierto que hay diferentes maneras de tratar con los temas, pero personalmente, me gusta tenerlos todos en una carpeta `temas/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Los temas son muy específicos para cada proyecto y es probable que no exista en muchos proyectos.</p>
</div>



### Carpeta Utilidades

La carpeta `utilidades/` reúne todas las herramientas y *helpers* de Sass que se utilizan a lo largo del proyecto. Cada variable global, función, *mixin* y *placeholders* debería estar en esta carpeta.

La regla de oro para esta carpeta es que no debe generar una sola línea de CSS cuando se compila por si sola. Solo hay *helpers* Sass.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (habitualmente llamada `_helpers.scss`)

<div class="note">
  <p>La carpeta <code>utilidades/</code> también se puede llamar <code>helpers/</code>, <code>sass-helpers/</code> o <code>sass-utils/</code>, depende de lo que tu prefieras.</p>
</div>



### Carpeta Proveedores

Y por último, pero no menos importante, la mayoría de los proyectos tienen una carpeta `proveedores/` que contiene todos los archivos CSS procedentes de librerías externas y *frameworks* – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, etc. Poner estos archivos en una misma carpeta, es una buena forma de decir "¡Hey! esto no lo he escrito yo, no es mi código y no es mi responsabilidad".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Si tienes que reemplazar una sección de algún proveedor (*vendor*), te recomiendo que tengas una octava carpeta llamada `vendors-extensions/` en la que puedes poner los archivos que se sobreescribirán nombrados exactamente de la misma manera en la que lo hacen los fabricantes.

Por ejemplo, `vendors-extensions/_bootstrap.scss` es un archivo que contiene todas las reglas CSS que se volverán a declarar en el CSS por defecto de Bootstrap. Esto se hace para evitar editar directamente los archivos del proveedor, lo que es en general una mala idea.



### Archivo Principal

El archivo principal (normalmente llamado `main.scss`) debe ser el único archivo Sass de todo el código que no empieza con guión bajo. Este archivo no debería contener nada más que `@import` y comentarios.

Los archivos deben de importarse según la carpeta que los contiene, una después de la otra en el siguiente orden:

1. `proveedores/`
1. `utilidades/`
1. `base/`
1. `layout/`
1. `componentes/`
1. `paginas/`
1. `temas/`

Con el fin de mantener la legibilidad, el archivo principal debe respetar las siguientes pautas:

* un archivo para cada `@import`;
* un `@import` por línea;
* no añadir una línea en blanco entre dos archivos importados que pertenezcan a la misma carpeta;
* dejar una línea en blanco después del último archivo importado de una carpeta;
* las extensiones de archivo y los guiones principales se omiten.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import 'proveedores/bootstrap';
@import 'proveedores/jquery-ui';

@import 'utilidades/variables';
@import 'utilidades/functions';
@import 'utilidades/mixins';
@import 'utilidades/placeholders';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'componentes/buttons';
@import 'componentes/carousel';
@import 'componentes/cover';
@import 'componentes/dropdown';

@import 'paginas/home';
@import 'paginas/contact';

@import 'temas/theme';
@import 'temas/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import proveedores/bootstrap
@import proveedores/jquery-ui

@import utilidades/variables
@import utilidades/functions
@import utilidades/mixins
@import utilidades/placeholders

@import base/reset
@import base/typography

@import layout/navigation
@import layout/grid
@import layout/header
@import layout/footer
@import layout/sidebar
@import layout/forms

@import componentes/buttons
@import componentes/carousel
@import componentes/cover
@import componentes/dropdown

@import paginas/home
@import paginas/contact

@import temas/theme
@import temas/admin
{% endhighlight %}
  </div>
</div>

Hay otra forma de importar las partes de un proyecto que también que me parece válida. La parte positiva, es que hace que el archivo sea más legible. Pero por otro lado, las actualizaciones son un poco más dolorosas. De todos modos, voy a dejarte decidir qué es lo mejor, pues no importa demasiado. Para esta manera de hacer las cosas, el archivo principal debe respetar las siguientes pautas:

* un `@import` por archivo;
* un salto de línea después de cada `@import`;
* cada archivo debe ir en su propia línea;
* dejar una línea en blanco después del último archivo importado de una carpeta;
* las extensiones de archivo y los guiones principales se omiten.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import
  'proveedores/bootstrap',
  'proveedores/jquery-ui';

@import
  'utils/variables',
  'utils/functions',
  'utils/mixins',
  'utils/placeholders';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/contact';

@import
  'themes/theme',
  'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import
  proveedores/bootstrap,
  proveedores/jquery-ui

@import
  utils/variables,
  utils/functions,
  utils/mixins,
  utils/placeholders

@import
  base/reset,
  base/typography

@import
  layout/navigation,
  layout/grid,
  layout/header,
  layout/footer,
  layout/sidebar,
  layout/forms

@import
  components/buttons,
  components/carousel,
  components/cover,
  components/dropdown

@import
  pages/home,
  pages/contact

@import
  themes/theme,
  themes/admin
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Con el objetivo de no tener que importar cada archivo manualmente, hay una extensión de Ruby Sass llamada <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, con la que es posible usar patrones globales en Sass <code>@import</code> como <code>@import "components/*"</code>.</p>
  <p>Una vez dicho esto, no lo recomendaría porque importa los archivos siguiendo el orden alfabético que por lo general, no suele ser lo que tu querrías, especialmente cuando se trata de un lenguaje que depende del orden en el que está el código fuente.</p>
</div>






## El Archivo De La Verguenza

Hay un concepto interesante que ha popularizado [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) y [Chris Coyier](http://css-tricks.com) y que consiste en poner todas las declaraciones CSS, *hacks* y cosas de las que no nos sentimos muy orgullosos en un *archivo de la verguenza*. Este archivo, titulado dramáticamente `_shame.scss`, se importará después de todos los otros archivos, al final de la hoja de estilo.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Arreglo específico para la navegación
 *
 * Alguien utilizó un ID en el código del *header* (`#header a {}`) lo que sobreescribe a
 * los selectores nav (`.site-nav a {}`). Usar !important para anularlo hasta que
 * tenga tiempo de arreglarlo.
 */
.site-nav a {
    color: #BADA55 !important;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Arreglo específico para la navegación
 *
 * Alguien utilizó un ID en el código del *header* (`#header a {}`) lo que sobreescribe a
 * los selectores nav (`.site-nav a {}`). Uso !important para anularlo hasta que
 * tenga tiempo de arreglarlo.
 */
.site-nav a
    color: #BADA55 !important
{% endhighlight %}
  </div>
</div>



### Más información

* [shame.css -En inglés](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - Entrevista .net completa -En inglés](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
