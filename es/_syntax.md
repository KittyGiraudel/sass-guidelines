
# Sintaxis Y Formato

En mi opinión, la primera cosa que debe hacer una guía de estilo es describir la forma en que queremos que luzca nuestro código.

Cuando varios desarrolladores están involucrados en la escritura CSS dentro del mismo proyecto o proyectos, es sólo cuestión de tiempo antes de que uno de ellos empiece a hacer las cosas a su manera. Las guías de estilo que fomentan la coherencia no solo previenen esto, sino que también ayudan a la hora de leer y actualizar el código.

A grandes rasgos, lo que queremos (humildemente inspirados en [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting) es):

* dos (2) espacios en blanco, en lugar de tabulaciones;
* idealmente, líneas de 80 caracteres;
* reglas CSS multilínea correctamente escritas;
* buen uso de los espacios en blanco.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// No
.foo {
    display: block; overflow: hidden;

    padding: 0 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Puesto que Sass es una sintaxis con sangría obliga a estos estándares de codificación
// No hay manera incorrecta de proceder
.foo
  display: block
  overflow: hidden
  padding: 0 1em
{% endhighlight %}
  </div>
</div>

No abordaremos la cuestión de la organización de archivos en esta sección. Este tema lo veremos en otra [sección](#arquitectura).






## Cadenas

Lo creas o no, las cadenas juegan un gran papel en los ecosistemas de CSS y Sass. La mayoría de los valores CSS suelen ser longitudes o cadenas (normalmente sin comillas), así que es bastante crucial que cumplas ciertas pautas cuando se trabaja con cadenas en Sass.

### Codificación

Para evitar cualquier posible problema con la codificación de caracteres, es muy recomendable forzar la codificación [UTF-8](http://es.wikipedia.org/wiki/UTF-8) en la [hoja de estilo principal](#hoja-de-estilo-principal) usando la directiva `@charset`. Asegúrate que es el primer elemento de la hoja de estilo y que no hay ningún otro caracter de cualquier tipo antes.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@charset 'utf-8';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@charset 'utf-8'
{% endhighlight %}
  </div>
</div>

### Comillas

En CSS, las cadenas de caracteres no tienen por qué estar entre comillas, ni siquiera aquellas que contienen espacios. Toma como ejemplo, los nombres de las tipografías: no importa si las pones entre comillas o no para que el analizador sintáctico CSS las entienda.

Debido a esto, Sass *tampoco* necesita que las cadenas estén entre comillas. Incluso mejor (y con *suerte* me darás la razón) una cadena entre comillas es equivalente a su versión gemela sin comillas (por ejemplo, `'abc'` es estrictamente igual a `abc`).

Aun así, los lenguajes que no requieren que las cadenas estén entre comillas, son definitivamente una minoría, y es por lo que **las cadenas siempre deben ir entre comillas simples** (`'`) en Sass (las comillas simples son mucho más fáciles de escribir en los teclados *qwerty*). Además de la coherencia con otros lenguajes, entre ellos el primo de CSS, Javascript, hay otras razones para esta elección:

* los nombres de los colores son tratados directamente como colores cuando no están entre comillas, lo que provoca serios problemas;
* muchos resaltadores de sintaxis se volverían locos sin las cadenas entrecomilladas;
* ayuda a la legibilidad en general;
* no hay una razón válida para no entrecomillar las cadenas.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
$direction: 'left';

// No
$direction: left;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
$direction: 'left'

// No
$direction: left
{% endhighlight %}
  </div>
</div>

### Cadenas como valores CSS

Los valores CSS específicos como `initial` o `sans-serif` no necesitan estar entre comillas. De hecho, la declaración `font-family: 'sans-serif'` fallará porque CSS está esperando un identificador, no una cadena. Debido a esto, no pondremos estos valores entre comillas.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
$font-type: sans-serif;

// No
$font-type: 'sans-serif';

// Bien, supongo
$font-type: unquote('sans-serif');
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
$font-type: sans-serif

// No
$font-type: 'sans-serif'

// Bien, supongo
$font-type: unquote('sans-serif')
{% endhighlight %}
  </div>
</div>

Por lo tanto, podemos hacer una distinción entre las cadenas destinadas a ser utilizadas como valores CSS (identificadores CSS) como en el ejemplo anterior, y las cadenas cuando se trata con tipos de datos Sass, por ejemplo, en mapas.

No ponemos entre comillas la primera, pero si envolvemos la segunda entre comillas simples.

### Cadenas que contienen comillas

Si una cadena contiene una o varias comillas simples, se podría considerar envolver la cadena con comillas dobles (`"`), con el fin de evitar escapar demasiados caracteres dentro de la cadena.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Bien
@warn 'You can\'t do that.';

// Bien
@warn "You can't do that.";
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Bien
@warn 'You can\'t do that.'

// Bien
@warn "You can't do that."
{% endhighlight %}
  </div>
</div>

### URLs

Las URLs deben ir entre comillas simples por las mismas razones que se explican anteriormente:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
.foo {
  background-image: url('/images/kittens.jpg');
}

// No
.foo {
  background-image: url(/images/kittens.jpg);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
.foo
  background-image: url('/images/kittens.jpg')

// No
.foo
  background-image: url(/images/kittens.jpg)
{% endhighlight %}
  </div>
</div>



### Más información

* [Todo lo que necesitas saber sobre la interpolación en Sass -En inglés](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings -En inglés](https://github.com/HugoGiraudel/SassyStrings)






## Números

En Sass, el número es un tipo de datos que incluye de todo, desde números sin unidades a longitudes, pasando por duraciones, frecuencias y ángulos, entre otros. Esto permite que se puedan realizar cálculos en estas medidas.



### Ceros

Siempre se deben mostrar los ceros a la izquierda antes de un valor decimal menor que uno. Nunca mostrar ceros finales.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
.foo {
  padding: 2em;
  opacity: 0.5;
}

// No
.foo {
  padding: 2.0em;
  opacity: .5;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
.foo
  padding: 2em
  opacity: 0.5

// No
.foo
  padding: 2.0em
  opacity: .5
{% endhighlight %}
  </div>
</div>



### Unidades

Cuando se trata de longitudes, el `0` nunca debe llevar el nombre de la unidad.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
$length: 0;

// No
$length: 0em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
$length: 0

// No
$length: 0em
{% endhighlight %}
  </div>
</div>

El error más común que se me ocurre respecto a los números en Sass, es pensar que las unidades son solo una serie de cadenas que se añaden de manera segura a un número. Aunque esto parezca así, esta, sin duda, no es la forma en la que funcionan las unidades. Piensa en las unidades como en símbolos algebráicos. Por ejemplo, en el mundo real, multiplicar 5 metros por 5 metros, da como resultado 25 metros cuadrados. La misma lógica se aplica a Sass.

Para agregar una unidad a un número, hay que multiplicar este número por *1 unidad*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42;

// Si
$length: $value * 1px;

// No
$length: $value + px;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42

// Si
$length: $value * 1px

// No
$length: $value + px
{% endhighlight %}
  </div>
</div>

Ten en cuenta que sumando un *valor de 0 a esa unidad* también funciona, pero prefiero recomendar el método antes mencionado, ya que sumar una *unidad 0* puede resultar confuso. De hecho, cuando se trata de convertir un número a otra unidad compatible, emplear el truco del 0, no funcionará.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42 + 0px;
// -> 42px

$value: 1in + 0px;
// -> 1in

$value: 0px + 1in;
// -> 96px
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42 + 0px
// -> 42px

$value: 1in + 0px
// -> 1in

$value: 0px + 1in
// -> 96px
{% endhighlight %}
  </div>
</div>

Al final, siempre depende lo que estés tratando de conseguir con tu código. Solo ten en cuenta que añadir la unidad como una cadena de caracteres no es una buena manera de proceder.

Para eliminar la unidad de un valor, hay que dividirlo por *una unidad de su tipo*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$length: 42px;

// Si
$value: $length / 1px;

// No
$value: str-slice($length + unquote(''), 1, 2);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$length: 42px

// Si
$value: $length / 1px

// No
$value: str-slice($length + unquote(''), 1, 2)
{% endhighlight %}
  </div>
</div>

Al añadir a un número una unidad en forma de cadena, el resultado es una cadena, impidiendo cualquier operación adicional con dicho valor. En un valor, separar la parte numérica de su unidad también devuelve una cadena. Esto no es lo que quieres.



### Cálculos

**Los cálculos numéricos de nivel superior deben ir siempre entre paréntesis** lo cual, no solo mejorará drásticamente la legibilidad, sino que también evitará algunos casos extremos, ya que fuerza a Sass a evaluar los contenidos entre paréntesis.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
.foo {
  width: (100% / 3);
}

// No
.foo {
  width: 100% / 3;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
.foo
  width: (100% / 3)

// No
.foo
  width: 100% / 3
{% endhighlight %}
  </div>
</div>



### Números Mágicos

Un "número mágico" es un término de programación de la [vieja escuela](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) para *las constantes numéricas sin nombre*. Básicamente, es solo un número aleatorio que *simplemente funciona* y sin embargo no está ligado con ninguna explicación lógica.

No hace falta decir que **los números mágicos son una plaga y que se deben evitar a toda costa**. Cuando no se puede encontrar una explicación razonable a por qué un número funciona, añade un comentario claro y completo explicando como has llegado hasta allí y por qué crees que funciona. Admitir que no sabes por qué algo funciona es mucho más útil para el siguiente desarrollador que dejarle tener que averiguar lo que está pasando desde el principio.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * 1. Número mágico. Este valor es el más bajo que pude encontrar para alinear la parte superior de
 * `.foo` con su padre. Idealmente, deberíamos arreglarlo correctamente.
 */
.foo {
  top: 0.327em; /* 1 */
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * 1. Número mágico. Este valor es el más bajo que pude encontrar para alinear la parte superior de
 * `.foo` con su padre. Idealmente, deberíamos arreglarlo correctamente.
 */
.foo
  top: 0.327em /* 1 */
{% endhighlight %}
  </div>
</div>



### Más información

* [Usa longitudes, no cadenas -En inglés](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Añadir correctamente una unidad a un número  -En inglés](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Números mágicos en CSS -En inglés](http://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math -En inglés](https://github.com/at-import/sassy-math)






## Colores

Los colores ocupan un lugar importante en el lenguaje CSS. Naturalmente, Sass termina siendo un valioso aliado cuando se trata de la manipulación de colores, sobre todo, al proporcionar un puñado de [funciones potentes](http://sass-lang.com/documentation/Sass/Script/Functions.html).



### Formatos De Color

Con el objetivo de que trabajar con los colores sea tan simple como sea posible, mi consejo es que respetes el siguiente orden de preferencia de los formatos de color:

1. [Pablabras reservadas para color en CSS -En inglés](http://www.w3.org/TR/css3-color/#svg-color);
1. [Notación HSL](http://es.wikipedia.org/wiki/Modelo_de_color_HSV);
1. [Notación RGB](http://es.wikipedia.org/wiki/RGB);
1. Notación hexadecimal. Preferiblemente en minúsculas y en formato corto cuando sea posible.

Para principiantes, las palabras reservadas a menudo hablan por si mismas. La representación HSL no solo es la más sencilla de comprender para el cerebro humano<sup>[cita requerida]</sup>, sino que también facilita a los autores de las hojas de estilo modificar el color al ajutar el tono, la saturación y la luminosidad de forma individual. RGB todavía tiene la ventaja de mostrar de inmediato si el color tiene más de azul, o de verde o de rojo, pero no signifia que sea fácil construir un color con estas tres partes. Por último, el formato hexadecimal está cerca de ser indescifrable para la mente humana.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
.foo {
  color: red;
}

// No
.foo {
  color: #FF0000;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
.foo
  color: red

// No
.foo
  color: #FF0000
{% endhighlight %}
  </div>
</div>

Al usar HSL o notación RGB, siempre se debe añadir un espacio simple después de la coma (`,`) y ningún espacio entre el paréntesis (`(`, `)`) y el contenido.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
.foo {
  color: rgba(0, 0, 0, 0.1);
  background: hsl(300, 100%, 100%);
}

// No
.foo {
  color: rgba(0,0,0,0.1);
  background: hsl( 300, 100%, 100% );
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
.foo
  color: rgba(0, 0, 0, 0.1)
  background: hsl(300, 100%, 100%)

// No
.foo
  color: rgba(0,0,0,0.1)
  background: hsl( 300, 100%, 100% )
{% endhighlight %}
  </div>
</div>



### Colores Y Variables

Cuando se utiliza un color más de una vez, se debe almacenar en una variable con un nombre significativo que respresente al color.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$sass-pink: #c69;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$sass-pink: #c69
{% endhighlight %}
  </div>
</div>

Ahora puedes usar esta variable en cualquier lugar que quieras. Sin embargo, si su uso está fuertemente ligado a un tema, te desaconsejaría usar esta variable como tal. En su lugar, guárdala en otra variable con un nombre que explica como se debe utilizar.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$main-theme-color: $sass-pink;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$main-theme-color: $sass-pink
{% endhighlight %}
  </div>
</div>

Al hacer esto, evitarás que algún cambio en el tema resulte algo como `$sass-pink: blue`



### Aclarando Y Oscureciendo Colores

Tanto las funciones [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) (aclarar) como [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) (oscurecer) manipulan la luminosidad de un color en el espacio HSL al añadir o restar luminosidad a dicho espacio. Básicamente, son alias para el parámetro `$lightness` de la función [`Ajuste de tono`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method)

La cuestión es que esas funciones a menudo no proporcionan el resultado esperado. Por otro lado, la función [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) (mezcla) es una buena manera para aclarar u oscurecer un color al mezclarlo con `blanco` or `negro`.

La ventaja de usar `mix` en lugar de una de las funciones anteriormente mencionadas, es que con `mix` irá progresivamente a negro (o blanco) a medida que se disminuye la proporción de color, mientras que `darken` y `lighten` apagará rápidamente el color hasta llegar a negro o blanco.

<figure role="group">
  <img alt="Illustration of the difference between lighten/darken and mix Sass functions"
     sizes="100vw"
     srcset="/assets/images/lighten-darken-mix_small.png  540w,
             /assets/images/lighten-darken-mix_medium.png 900w,
             /assets/images/lighten-darken-mix_large.png 1200w,
             /assets/images/lighten-darken-mix_huge.png  1590w" />
  <figcaption>Ilustración de la diferencia entre <code>lighten</code>/<code>darken</code> y <code>mix</code> por <a href="http://codepen.io/KatieK2/pen/tejhz/" target="_blank">KatieK</a></figcaption>
</figure>

Si no quieres escribir la función `mix` cada vez que quieras usarla, puedes crear dos funciones muy sencillas de utilizar, `tint` y `shade` (que también son parte de [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) para conseguir el mismo resultado:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Aclarar ligeramente un color
/// @access public
/// @param {Color} $color - color a matizar
/// @param {Number} $percentage - porcentaje del `$color` que debe ser devuelto
/// @return {Color}
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

/// Oscurecer ligeramente un color
/// @access public
/// @param {Color} $color - color a oscurecer
/// @param {Number} $percentage - porcentaje de `$color` que debe ser devuelto
/// @return {Color}
@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Aclarar ligeramente un color
/// @access public
/// @param {Color} $color - color a matizar
/// @param {Number} $percentage - porcentaje del `$color` que debe ser devuelto
/// @return {Color}
@function tint($color, $percentage)
  @return mix($color, white, $percentage)

/// Oscurecer ligeramente un color
/// @access public
/// @param {Color} $color - color a oscurecer
/// @param {Number} $percentage - porcentaje de `$color` que debe ser devuelto
/// @return {Color}
@function shade($color, $percentage)
  @return mix($color, black, $percentage)
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>La función <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> (escala de color) está diseñada para escalar las propiedades de una forma más fluida, al tener en cuenta qué tan altas o bajas son en el momento inicial. Debe proporcionar resultados tan agradables como los de <code>mix</code> pero con una nomenclatura mucho más clara. Sin embargo, el factor de escalado no es exactamente el mismo.</p>
</div>



### Más información

* [Guía visual para las funciones de color en Sass y Compass -En inglés](http://jackiebalzer.com/color)
* [Cómo ir de un color a otro programáticamente  -En inglés](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Variables de color en Sass que no apestan -En inglés](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Usando Sass para construir paletas de color -En inglés](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Tabajar con esquemas de color en Sass -En inglés](http://www.sitepoint.com/dealing-color-schemes-sass/)





## Listas

Las listas son el equivalente en Sass a los arreglos (Arrays). Una lista es una estructura de datos plana (a diferencia de los [Mapas](#mapas)) destinada a almacenar valores de cualquier tipo (incluyendo listas, lo que conduce a las listas anidadas).

Las listas deberían respetar las siguientes pautas:

* pueden estar en una línea o multilínea
* usar múltiples líneas si es demasiado larga para caber en una sola línea de 80 caracteres;
* a menos que se utilice para fines de CSS, siempre se utilizará la coma como separador;
* siempre encerrada entre paréntesis;
* arrastra la coma si hay múltiples líneas, pero no cuando es una sola.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Si
$font-stack: (
  'Helvetica',
  'Arial',
  sans-serif,
);

// No
$font-stack: 'Helvetica' 'Arial' sans-serif;

// No
$font-stack: 'Helvetica', 'Arial', sans-serif;

// No
$font-stack: ('Helvetica', 'Arial', sans-serif);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
$font-stack: ('Helvetica', 'Arial', sans-serif)

// No (no compatible)
$font-stack: (
  'Helvetica',
  'Arial',
  sans-serif,
)

// No
$font-stack: 'Helvetica' 'Arial' sans-serif

// No
$font-stack: 'Helvetica', 'Arial', sans-serif

// No
$font-stack: ('Helvetica', 'Arial', sans-serif,)
{% endhighlight %}
  </div>
</div>

Al añadir nuevos elementos a una lista, utiliza siempre la API proporcionada. No trates de añadir nuevos elementos manualmente.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$shadows: (0 42px 13.37px hotpink);

// Si
$shadows: append($shadows, $shadow, comma);

// No
$shadows: $shadows, $shadow;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$shadows: (0 42px 13.37px hotpink)

// Si
$shadows: append($shadows, $shadow, comma)

// No
$shadows: $shadows, $shadow
{% endhighlight %}
  </div>
</div>



### Más información

* [Entendiendo las listas Sass -En inglés](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/)
* [SassyLists -En inglés](http://sassylists.com)






## Mapas

Desde Sass 3.3 se pueden definir mapas en las hojas de estilo, que es el término en Sass para los arreglos asociativos, *hashes* u objetos JavaScript. Un mapa es una estructura de datos que mapea claves (pueden ser de cualquier tipo de dato, incluyendo mapas, aunque yo no lo recomendaría) a valores de cualquier tipo.

Los mapas deberían estar escritos de la siguiente manera:

* poner un espacio después de los dos puntos (`:`);
* la llave de apertura (`(`) debe ir en la misma línea que los dos puntos (`:`);
* poner las **claves entre comillas** si son cadenas de caracteres (lo que representa el 99% de los casos);
* cada par clave/valor debe ir en su propia línea;
* poner coma (`,`)al final de cada par clave/valor;
* poner **coma final** (`,`) en el último elemento para que sea más sencillo añadir, eliminar o reordenar los elementos;
* la llave de cierre (`)`) debe ir en una línea nueva;
* no poner espacio o línea nueva entre la llave de cierre (`)`) y el punto y coma (`;`).


Ejemplo:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
);

// No
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
$breakpoints: ('small': 767px, 'medium': 992px, 'large': 1200px,)

// No
$breakpoints: ( 'small': 767px, 'medium': 992px, 'large': 1200px )

// No
$breakpoints: (small: 767px, medium: 992px, large: 1200px,)

// No (ya que no es compatible)
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
)
{% endhighlight %}
  </div>
</div>



### Depurando Un Mapa Sass

Si alguna vez te encuentras perdido, preguntándote qué clase de magia loca está ocurriendo en un mapa Sass, no te preocupes, todavía puedes ser salvado.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin debug-map($map) {
  @at-root {
    @debug-map {
      __toString__: inspect($map);
      __length__: length($map);
      __depth__: if(function-exists('map-depth'), map-depth($map), null);
      __keys__: map-keys($map);
      __properties__ {
        @each $key, $value in $map {
          #{'(' + type-of($value) + ') ' + $key}: inspect($value);
        }
      }
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=debug-map($map)
  @at-root
    @debug-map
      __toString__: inspect($map)
      __length__: length($map)
      __depth__: if(function-exists('map-depth'), map-depth($map), null)
      __keys__: map-keys($map)
      __properties__
        @each $key, $value in $map
          #{'(' + type-of($value) + ') ' + $key}: inspect($value)
{% endhighlight %}
  </div>
</div>

Si tienes interés en conocer la profundidad del mapa, añade la siguiente función. El *mixin* lo mostrará automáticamente.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Calcular la profundidad máxima de un mapa
/// @param {Map} $map
/// @return {Number} máxima profundidad de `$map`
@function map-depth($map) {
  $level: 1;

  @each $key, $value in $map {
    @if type-of($value) == 'map' {
      $level: max(map-depth($value) + 1, $level);
    }
  }

  @return $level;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Calcular la profundidad máxima de un mapa
/// @param {Map} $map
/// @return {Number} máxima profundidad de `$map`
@function map-depth($map)
  $level: 1

  @each $key, $value in $map
    @if type-of($value) == 'map'
      $level: max(map-depth($value) + 1, $level)

  @return $level;
{% endhighlight %}
  </div>
</div>



### Más información

* [Usando mapas Sass -En inglés](http://www.sitepoint.com/using-sass-maps/)
* [Depurando mapas Sass -En inglés](http://www.sitepoint.com/debugging-sass-maps/)
* [Funciones adicionales de mapas en Sass -En inglés](http://www.sitepoint.com/extra-map-functions-sass/)
* [Verdadero Sass, Verdaderos mapas -En inglés](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Los mapas Sass son geniales -En inglés](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps -En inglés](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus -En inglés](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps -En inglés](https://github.com/at-import/sassy-maps)
* [Introducción a los mapas en Sass. Uso y ejemplos -En inglés](http://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)






## Conjunto De Reglas CSS

Llegados a este punto, esto es sobretodo una revisión de lo que todo el mundo ya sabe, pero esta es la forma en la que un conjuto de reglas CSS deben estar escritas (por lo menos según la mayoría de las guías, incluyendo [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset)):

* los selectores relacionados deben ir en la misma línea; los selectores no vinculados en nuevas líneas;
* la llave de apertura (`{`) deben ir separada por un espacio del selector;
* cada declaración debe ir en una línea nueva;
* añadir un espacio despúes de los dos puntos (`:`);
* poner punto y coma (`;`) al final de todas las declaraciones;
* la llave de cierre (`}`) debe ir en una línea nueva;
* añadir una línea después de la llave de cierre (`}`).

Ejemplo:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// No
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
    margin: 0 auto }
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
.foo, .foo-bar,
.baz
  display: block
  overflow: hidden
  margin: 0 auto

// No
.foo,
.foo-bar, .baz
    display: block
    overflow: hidden
    margin: 0 auto
{% endhighlight %}
  </div>
</div>

Adicionalmente a esas guía CSS, queremos prestar especial atención a las siguientes pautas:

* las variables locales se declaran antes que cualquier otra y están espaciadas por un salto de línea;
* las llamadas a *mixin* sin `@content` deben ir antes de cualquier declaración;
* los selectores anidados van siempre después de un salto de línea;
* las llamadas a *mixin* con `@content` deben ir después de cualquier selector anidado;
* no usar un salto de línea antes de una llave de cierre (`}`).

Ejemplo:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo, .foo-bar,
.baz {
  $length: 42em;

  @include ellipsis;
  @include size($length);
  display: block;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  @include respond-to('small') {
    overflow: visible;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo, .foo-bar,
.baz
  $length: 42em

  +ellipsis
  +size($length)
  display: block
  overflow: hidden
  margin: 0 auto

  &:hover
    color: red

  +respond-to('small')
    overflow: visible
{% endhighlight %}
  </div>
</div>



### Más información

* [Anatomía de un conjunto de reglas -En inglés](http://cssguidelin.es/#anatomy-of-a-ruleset)






## Clasificación De Declaraciones

No se me ocurren muchos temas donde las opiniones se dividen tanto como en lo que respecta a la clasificación de las declaraciones en CSS. En concreto, hay dos bandos aquí:

* mantener un estricto orden alfabético;
* ordenar las declaraciones por tipo (posición, *display*, colores, tipografía, varios...).

Hay pros y contras para estas dos posturas. Por una parte, el orden alfabético es universal (por lo menos para los idiomas que usan el alfabeto latino) así que no hay discusión posible a la hora de poner una propiedad antes que otra. Sin embargo, me parece extremadamente raro ver que propiedades como, `bottom` y `top` no estén la una justo después de la otra. ¿Por qué las animaciones deben aparecer antes que el tipo de display? Hay muchas rarezas con respecto al orden alfabético.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  background: black;
  bottom: 0;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  height: 100px;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 100px;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  background: black
  bottom: 0
  color: white
  font-weight: bold
  font-size: 1.5em
  height: 100px
  overflow: hidden
  position: absolute
  right: 0
  width: 100px
{% endhighlight %}
  </div>
</div>

Por otra parte, ordenar las propiedades por tipo tiene mucho sentido. cada declaración relacionada con la tipografía está reunida, `top` y `bottom` están una debajo de la otra y leer un cojunto de reglas parece como leer un cuento corto. Pero a menos que mantengas algun acuerdo como las que se exponen en [CSS idiomático](https://github.com/necolas/idiomatic-css), hay mucho espacio para la interpretación en esta forma de escribir CSS. ¿Dónde debería ir `white-space`: en tipografía o en pantalla?, ¿Dónde pertenece `overflow` exactamente?, ¿Cuál es el orden de una propiedad dentro de un grupo? (podría ser en orden alfabético, ¡oh! ironía)

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  height: 100px;
  width: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  height: 100px
  width: 100px
  overflow: hidden
  position: absolute
  bottom: 0
  right: 0
  background: black
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

También hay otra rama interesante en cuanto al orden de propiedades, llamado [CSS concéntrico](https://github.com/brandon-rhodes/Concentric-CSS), que parece ser bastante popular. Básicamente el CSS concéntrico se basa en el modelo de caja para definir un orden: se empieza fuera y se mueve hacia dentro.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: black;
  overflow: hidden;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  width: 100px
  height: 100px
  position: absolute
  right: 0
  bottom: 0
  background: black
  overflow: hidden
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

Debo decir que ni yo mismo puedo decidirme. Una [encuesta reciente en CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) determinó que más de un 45% de los desarrolladores ordenan sus declaraciones por tipo, frente el 14% que lo hace alfabéticamente. También hay un 39% que lo hace completamente al azar, incluido yo mismo.

<figure role="group">
  <img src="/assets/images/css-order-chart.png" alt="Chart showing how developers order their CSS declarations" />
  <figcaption>Gráfico que muestra cómo los desarrolladores ordenan sus declaraciones CSS</figcaption>
</figure>

Debido a esto, no voy a imponer una opción en concreto en esta guía de estilo. Elige la que más te guste, siempre y cuando sea coherente con el resto de tus hojas de estilo (es decir, no *al azar*).

<div class="note">
  <p>Un <a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">estudio reciente</a> muestra que usando <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (que <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">ordena por tipo</a>) para clasificar las declaraciones CSS termina acortando el tamaño promedio de los archivos bajo compresión Gzip en un 2.7% frente al 1.3% cuando se ordenan alfabéticamente.</p>
</div>



### Más información

* [CSS Comb -En inglés](https://github.com/csscomb/csscomb.js)
* [CSS concentrico -En inglés](https://github.com/brandon-rhodes/Concentric-CSS)
* [CSS idiomático -En inglés](https://github.com/necolas/idiomatic-css)
* [Sobre la clasificación de declaraciones -En inglés](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reducir el tamaño de los archivos con clasificación CSS -En inglés](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Resultados de la encuesta: ¿Cómo ordenas tus propiedades CSS?](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)






## Anidamiento De Selectores

Una característica particular que aporta Sass y que está siendo muy mal utilizada por muchos desarrolladores es el *anidamiento o anidación de selectores*. El anidamiento de selectores ofrece una manera para que los autores de las hojas de estilo puedan calcular selectores largos anidando selectores más cortos entre ellos.

### Regla General

Por ejemplo, el siguiente anidamiento Sass:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  .bar
    &:hover
      color: red
{% endhighlight %}
  </div>
</div>

...generará el siguiente CSS:

<div>
{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}
</div>

En la misma línea, desde Sass 3.3 es posible usar la referencia al selector actual (`&`) para generar selectores avanzados. Por ejemplo:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  &-bar {
    color: red;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  &-bar
    color: red
{% endhighlight %}
  </div>
</div>

...generará el siguiente CSS:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo-bar {
  color: red;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo-bar
  color: red
{% endhighlight %}
  </div>
</div>

Este método se utiliza a menudo junto con las [convenciones de nombre BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) para generar los selectores `.block__element` y `.block--modifier` basados en los selectores originales (por ejemplo, `.block` en este caso).

<div class="note">
  <p>Aunque podría ser anecdótico, generar nuevos selectores a partir de la referencia del selector actual (<code>&</code>) hace que dichos selectores sean indescifrables en el código base, ya que no existen per se.</p>
</div>

El problema con la anidación de selectores es que en última instancia hace que el código sea más difícil de leer. Se debe calcular mentalmente el selector resultante en los niveles de sangría; no siempre resulta obvio conocer el código resultante en el CSS.

Esta afirmación se vuelve más verdadera en cuanto los selectores se hacen más largos y las referencias al selector actual (`&`) más frecuentes. En algún momento, el riesgo de perder la pista y no poder entender lo que está pasando es tan alto que no merece la pena.

Para evitar esta situación, se **evitará la anidación de selectores tanto como sea posible**. Sin embargo, es evidente que hay algunas excepciones a esta regla.

### Excepciones

Para los principiantes, se permite e incluso se recomienda anidar pseudo-clases y pseudo-elementos dentro del selector inicial.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: 'pseudo-element';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  &:hover
    color: green

  &::before
    content: 'pseudo-element'
{% endhighlight %}
  </div>
</div>

Usar la anidación para las pseudo-clases y pseudo-elementos no solo tiene sentido (porque trata selectores estrechamente relacionados), sino que también ayuda a mantenter todo lo relacionado con un componente en un mismo lugar.

Además, cuando se utilizan clases de estado independientes del dispositivo como `.is-active`, está perfectamente bien anidar bajo el selector del componente para mantenerlo todo ordenado.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  &.is-active {
    font-weight: bold;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  &.is-active
    font-weight: bold
{% endhighlight %}
  </div>
</div>

Por último, pero no menos importante, cuando se da estilo a un elemento, este pasa a estar contenido en otro elemento específico, también está muy bien utilizar la anidación para mantener todo lo relacionado con el componente en el mismo lugar.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  .no-opacity & {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  .no-opacity &
    display: none
{% endhighlight %}
  </div>
</div>

Cuando se trabaja con desarrolladores inexpertos, un selector como `.no-opacity &` puede parecer un poco raro. Para evitar cualquier confusión, se puede construir un pequeño *mixin* que transforme esta sintaxis extraña en un API explícito.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mixin para porporcionar un API sencillo al selector anidado
/// @param {String} $selector - Selector
@mixin when-inside($selector) {
  #{$selector} & {
    @content;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mixin para porporcionar un API sencillo al selector anidado
/// @param {String} $selector - Selector
=when-inside($selector) {
  #{$selector} &
    @content
}
{% endhighlight %}
  </div>
</div>

Reescribiendo nuestro ejemplo anterior, se vería algo asi:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  @include when-inside('.no-opacity') {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  +when-inside('.no-opacity')
    display: none
{% endhighlight %}
  </div>
</div>

Como con todo, los detalles son algo irrelevante, la coherencia es la clave. Si te sientes completamente confiado con la anidaciones de selectores, entonces utilizala. Sólo asegurate de que todo tu equipo está de acuerdo con ello.






### Más información

* [Cuidado con la anidación de selectores -En inglés](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [La regla del inicio -En inglés](http://thesassway.com/beginner/the-inception-rule)
* [Evitar la anidación de selectores para un CSS más modular -En inglés](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)



