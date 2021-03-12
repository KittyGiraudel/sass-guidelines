
## Sintaxis Y Formato

En mi opinión, la primera cosa que debe hacer una guía de estilo es describir la forma en que queremos que luzca nuestro código.

Cuando varios desarrolladores están involucrados en la escritura CSS dentro del mismo proyecto o proyectos, es sólo cuestión de tiempo antes de que uno de ellos empiece a hacer las cosas a su manera. Las guías de estilo de código que fomentan la coherencia no solo previenen esto, sino que también ayudan a la hora de leer y actualizar el código.

A grandes rasgos, lo que queremos (humildemente inspirados en [CSS Guidelines](https://cssguidelin.es/#syntax-and-formatting) es):

* dos (2) espacios en blanco, en lugar de tabulaciones;
* idealmente, líneas de 80 caracteres;
* reglas CSS multilínea correctamente escritas;
* buen uso de los espacios en blanco.

{% include snippets/syntax/01/index.html %}

### Cadenas

Lo creas o no, las cadenas (*strings*) juegan un papel importante en los ecosistemas de CSS y Sass. La mayoría de los valores CSS suelen ser longitudes o identificadores, así que es bastante crucial que cumplas ciertas pautas cuando se trabaja con cadenas en Sass.

#### Codificación

Para evitar cualquier posible problema con la codificación de caracteres, es muy recomendable forzar la codificación [UTF-8](https://es.wikipedia.org/wiki/UTF-8) en la [hoja de estilo principal](#archivo-principal) usando la directiva `@charset`. Asegúrate que es el primer elemento de la hoja de estilo y que no hay ningún otro caracter de ningún tipo antes.

{% include snippets/syntax/02/index.html %}

#### Comillas

En CSS, las cadenas (*strings*) no tienen por qué estar entre comillas, ni siquiera aquellas que contienen espacios. Toma como ejemplo, los nombres de las tipografías: no importa si las pones entre comillas o no para que el analizador sintáctico CSS las entienda.

Debido a esto, Sass *tampoco* necesita que las cadenas estén entre comillas. Incluso mejor (y con *suerte* me darás la razón) una cadena entre comillas es equivalente a su versión gemela sin comillas (por ejemplo, `'abc'` es estrictamente igual a `abc`).

Dicho esto, los lenguajes que no requieren que las cadenas estén entre comillas, son definitivamente una minoría, y es por lo que **las cadenas siempre deben ir entre comillas simples** (`'`) en Sass (las comillas simples son mucho más fáciles de escribir en los teclados *qwerty*). Además de la coherencia con otros lenguajes, entre ellos el primo de CSS, Javascript, hay otras razones para esta elección:

* los nombres de los colores son tratados directamente como colores cuando no están entre comillas, lo que provoca serios problemas;
* muchos resaltadores de sintaxis se volverían locos sin las comillas;
* ayuda a la legibilidad;
* no hay una razón válida para no entrecomillar las cadenas.

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>Según las especificaciones CSS, la directiva <code>@charset</code> debe estar declarada con comillas dobles <a href="https://www.w3.org/TR/css3-syntax/#charset-rule">para ser considerada válida</a>. Sin embargo, Sass se preocupa de esto cuando compila el CSS para que su creación no tenga ningún impacto con el resultado final. Puedes usar sin ningún problema las comillas simples, incluso para <code>@charset</code>.</p>
</div>

#### Cadenas Como Valores CSS

Los valores CSS específicos (identificadores) como `initial` o `sans-serif` no necesitan llevar comillas. De hecho, la declaración `font-family: 'sans-serif'` fallará porque CSS está esperando un identificador, no una cadena entre comillas. Por ello, no pondremos nunca estos valores con comillas.

{% include snippets/syntax/04/index.html %}

Por lo tanto, podemos hacer una distinción entre las cadenas destinadas a ser utilizadas como valores CSS (identificadores CSS) como en el ejemplo anterior, y las cadenas que son un tipo de datos Sass, por ejemplo, las claves de mapa.

No ponemos entre comillas la primera, pero si envolvemos la segunda con comillas simples.

#### Cadenas que contienen comillas

Si una cadena contiene una o varias comillas simples, se podría considerar envolver la cadena con comillas dobles (`"`), con el fin de evitar escapar demasiados caracteres dentro de la cadena.

{% include snippets/syntax/05/index.html %}

#### URLs

Las URLs deben ir entre comillas por las mismas razones que se explican anteriormente:

{% include snippets/syntax/06/index.html %}

### Números

En Sass, número es un tipo de datos que incluye de todo, desde números sin unidades a longitudes, pasando por duraciones, frecuencias y ángulos, entre otros. Esto permite que se ejecuten cálculos sobre tales medidas.

#### Ceros

Siempre se deben mostrar los ceros a la izquierda antes de un valor decimal menor que uno. Nunca mostrar los ceros finales.

{% include snippets/syntax/07/index.html %}

<div class="note">
  <p>Sublime Text y otros editores proporcionan una búsqueda que te permite reemplazar este valor usando una expresión regular, es muy fácil añadir un cero a la izquierda a (casi todos) los número flotantes. Solamente reemplaza <code>\s+\.(\d+)</code> con <code>\ 0.$1</code>. No olvides el espacio antes del <code>0</code>.</p>
</div>

#### Unidades

Cuando se trata de longitudes, el `0` nunca debe llevar el nombre de la unidad.

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>Ten cuidado, esta práctica solo debe limitarse a las longitudes. No se permite tener un cero sin unidades en propiedades como <code>transition-delay</code>. Teóricamente, si un cero sin unidades es especificado para una duración, la declaración es marcada como inválida y debería quedar descartada. No todos los navegadores son tan estrictos, pero algunos si. En resumen, solo se omiten las unidades para las longitudes</p>
</div>

El error más común que se me ocurre respecto a los números en Sass, es el de pensar que las unidades son solo una serie de cadenas que se añaden a un número. Aunque parezca verdad, esta sin duda, no es la forma en la que funcionan las unidades. Piensa en las unidades como símbolos algebráicos. Por ejemplo, en el mundo real, multiplicar 5 metros por 5 metros, da como resultado 25 metros cuadrados. La misma lógica se aplica a Sass.

Para agregar una unidad a un número, hay que multiplicar este número por *1 unidad*.

{% include snippets/syntax/09/index.html %}

Ten en cuenta que sumando un *valor de 0 de unidad* también funciona, pero prefiero recomendar el método antes mencionado, ya que sumar una *unidad 0* puede resultar confuso. De hecho, cuando se trata de convertir un número a otra unidad compatible, emplear el truco del 0, no funcionará. Puedes leer más sobre esto en [este artículo](https://css-tricks.com/snippets/sass/correctly-adding-unit-number/).

{% include snippets/syntax/10/index.html %}

Al final, siempre depende lo que estés tratando de conseguir. Solo ten en cuenta que añadir la unidad como una cadena de caracteres no es una buena manera de proceder.

Para eliminar la unidad de un valor, hay que dividirlo por *1 unidad de su mismo tipo*.

{% include snippets/syntax/11/index.html %}

Al añadir a un número una unidad en forma de cadena, el resultado es una cadena, impidiendo cualquier operación adicional con dicho valor. Separando la parte numérica de un número con una unidad también devolverá una cadena. [Usa longitudes, no cadenas](https://kittygiraudel.com/2013/09/03/use-lengths-not-strings/).

#### Cálculos

**Los cálculos numéricos de nivel superior deben ir siempre entre paréntesis** lo cual, no solo mejorará drásticamente la legibilidad, sino que también evitará algunos casos extremos al forzar a Sass a evaluar los contenidos de los paréntesis.

{% include snippets/syntax/12/index.html %}

#### Números Mágicos

Un "número mágico" es un término de programación de la [vieja escuela](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) para *las constantes numéricas sin nombre*. Básicamente, es solo un número aleatorio que *simplemente funciona* y sin embargo no está ligado con ninguna explicación lógica.

No hace falta decir que **los números mágicos son una plaga y que se deben evitar a toda costa**. Cuando no se puede encontrar una explicación razonable a por qué un número funciona, añade un comentario claro y completo explicando como has llegado hasta allí y por qué crees que funciona. Admitir que no sabes por qué algo funciona es mucho más útil para el siguiente desarrollador que dejarle tener que averiguar lo que está pasando desde el principio.

{% include snippets/syntax/13/index.html %}

Relacionado con esto, CSS-Tricks tiene un [excelente artículo](https://css-tricks.com/magic-numbers-in-css/) acerca de los números mágicos en CSS que te animo a que leas.

### Colores

Los colores ocupan un lugar importante en el lenguaje CSS. Naturalmente, Sass termina siendo un valioso aliado cuando se trata de la manipulación de colores, especialmente, al proporcionar un puñado de [funciones potentes](https://sass-lang.com/documentation/Sass/Script/Functions.html).

Sass es tan útil cuando se trata de manipular los colores, que han florecido artículos por todo Internet sobre este tema. Te recomiendo algunas lecturas:

* [¿Cómo ir programáticamente de un color a otro? - En inglés](https://kittygiraudel.com/2014/01/30/programmatically-go-from-one-color-to-another-with-sass/)
* [Usando Sass para construir paletas de color - En inglés](https://www.sitepoint.com/using-sass-build-color-palettes/)
* [Tratando con esquemas de color en Sass - En inglés](https://www.sitepoint.com/dealing-color-schemes-sass/)


#### Formatos De Color

Con el objetivo de que hacer colores sean tan simple como sea posible, mi consejo es que respetes el siguiente orden de preferencia de los formatos de color:

1. [Notación HSL](https://es.wikipedia.org/wiki/Modelo_de_color_HSV);
1. [Notación RGB](https://es.wikipedia.org/wiki/RGB);
1. Notación hexadecimal. Preferiblemente en minúsculas y en formato corto.

Las palabras clave para denominar colores en CSS no deben ser usadas, a menos que se utilicen para prototipos rápidos. De hecho, son palabras inglesas y algunas de ellas hacen un trabajo bastante malo al describir el color que representan, especialmente para hablantes no nativos. Además de eso, las palabras clave no son perfectamente semánticas; Por ejemplo `grey` es en realidad más oscuro que `darkgrey`, y la confusión entre `grey` y `gray` puede llevar a usos inconsistentes de este color.

La representación HSL no solo es la más sencilla de comprender para el cerebro humano<sup>[cita requerida]</sup>, sino que también facilita a los autores de las hojas de estilo modificar el color al ajustar el tono, la saturación y la luminosidad de forma individual.

RGB todavía tiene la ventaja de mostrar de inmediato si el color tiene más de azul, o de verde o de rojo. Por lo tanto, podría ser mejor que HSL en algunas situaciones, especialmente cuando se describe un rojo, verde o azul puro. Pero esto no significa que sea fácil construir un color con estas tres partes.

Por último, el formato hexadecimal está cerca de ser indescifrable para la mente humana. Úsalo como último recurso, si tienes que hacerlo.

{% include snippets/syntax/14/index.html %}

Al usar HSL o notación RGB, añade siempre un espacio simple después de la coma (`,`) y ningún espacio entre el paréntesis (`(`, `)`) y el contenido.

{% include snippets/syntax/15/index.html %}

#### Colores Y Variables

Cuando se utiliza un color más de una vez, guárdala en una variable con un nombre significativo que represente al color.

{% include snippets/syntax/16/index.html %}

Ahora puedes usar esta variable en cualquier lugar. Sin embargo, si su uso está fuertemente ligado a un tema, te desaconsejaría usar esta variable como tal. En su lugar, guárdala en otra variable con un nombre que explica como se debe utilizar.

{% include snippets/syntax/17/index.html %}

Al hacer esto, evitarás que algún cambio en el tema resulte en algo como `$sass-pink: blue`. [Este artículo](https://davidwalsh.name/sass-color-variables-dont-suck) hace un buen trabajo explicando por qué pensar el nombre de tus variables de color es importante.

#### Aclarando Y Oscureciendo Colores

Tanto las funciones [`lighten`](https://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) como [`darken`](https://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) manipulan la luminosidad de un color en el espacio HSL añadiendo o restando a la luminosidad de dicho espacio. Básicamente, son alias para el parámetro `$lightness` de la función [`adjust-color`](https://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method)

La cuestión es que esas funciones a menudo no proporcionan el resultado esperado. Por otro lado, la función [`mix`](https://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) es una buena manera para aclarar u oscurecer un color al mezclarlo con `blanco` or `negro`.

La ventaja de usar `mix` en lugar de una de las funciones anteriormente mencionadas, es que con `mix` irá progresivamente a negro (o blanco) a medida que se disminuye la proporción de color, mientras que `darken` y `lighten` apagará rápidamente el color hasta llegar a negro o blanco.

{% include images/color-functions.html %}

Si no quieres escribir la función `mix` cada vez que quieras usarla, puedes crear dos funciones muy sencillas de utilizar, `tint` y `shade` (que también son parte de [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) para conseguir el mismo resultado:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>La función <a href="https://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> (escala de color) está diseñada para escalar las propiedades de una forma más fluida, al tener en cuenta qué tan altas o bajas son en el momento inicial. Debe proporcionar resultados tan agradables como los de <code>mix</code> pero con una nomenclatura mucho más clara. Sin embargo, el factor de escalado no es exactamente el mismo.</p>
</div>

### Listas

Las listas son el equivalente en Sass a los arreglos (*Arrays*). Una lista es una estructura de datos plana (a diferencia de los [Mapas](#mapas)) destinada a almacenar valores de cualquier tipo (incluyendo listas, lo que conduce a las listas anidadas).

Las listas deberían respetar las siguientes pautas:

* pueden ser en una línea o multilínea
* deben usar múltiples líneas si su longitud es mayor a 80 caracteres;
* a menos que se utilice para CSS, siempre usará la coma como separador;
* siempre debe ir entre paréntesis;
* Usar coma final si hay múltiples líneas, pero no cuando es una sola.

{% include snippets/syntax/19/index.html %}

Al añadir nuevos elementos a una lista, utiliza siempre la API proporcionada. No trates de añadir nuevos elementos manualmente.

{% include snippets/syntax/20/index.html %}

En [este artículo](https://kittygiraudel.com/2013/07/15/understanding-sass-lists/), explico un montón de trucos y consejos para manejar y manipular las listas correctamente en Sass.

### Mapas

Con Sass, se pueden definir mapas - el término en Sass para los arreglos asociativos, *hashes* o incluso objetos JavaScript. Un mapa es una estructura de datos que asocia claves a valores. Tanto las claves como los valores, pueden ser de cualquier tipo de dato, incluyendo mapas, aunque yo no recomendaría usar tipos de datos tan complejos como claves de un mapa, solo por salud mental.

Los mapas deberían estar escritos de la siguiente manera:

* poner un espacio después de los dos puntos (`:`);
* la llave de apertura (`(`) debe ir en la misma línea que los dos puntos (`:`);
* poner las **claves entre comillas** si son cadenas (lo que representa el 99% de los casos);
* cada par clave/valor debe ir en su propia línea;
* poner coma (`,`) al final de cada par clave/valor;
* poner **coma final** (`,`) en el último elemento para que sea más sencillo añadir, eliminar o reordenarlos;
* la llave de cierre (`)`) debe ir en una línea nueva;
* no poner espacio o línea nueva entre la llave de cierre (`)`) y el punto y coma (`;`).

Ejemplo:

{% include snippets/syntax/21/index.html %}

Los escritos acerca de los mapas de Sass son muchos dado cuánto se anhelaba esta característica. Aquí hay 3 que recomiendo: [Usando Mapas en Sass - En inglés](https://www.sitepoint.com/using-sass-maps/), [Funciones adicionales de mapas en Sass - En inglés](https://www.sitepoint.com/extra-map-functions-sass/), [Sass real, mapas reales - En inglés](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/).

### Conjunto De Reglas CSS

Llegados a este punto, esto es básicamente una revisión de lo que todo el mundo ya sabe, pero esta es la forma en la que un conjunto de reglas CSS deben estar escritas (por lo menos según la mayoría de las guías, incluyendo la [Guía de estilo de CSS](https://cssguidelin.es/#anatomy-of-a-ruleset)):

* los selectores relacionados deben ir en la misma línea; los selectores no vinculados en líneas nuevas;
* la llave de apertura (`{`) debe separarse del selector usando un espacio;
* cada declaración debe ir en una línea nueva;
* añadir un espacio después de los dos puntos (`:`);
* poner punto y coma (`;`) al final de todas las declaraciones;
* la llave de cierre (`}`) debe ir en una línea nueva;
* añadir una línea después de la llave de cierre (`}`).

Ejemplo:

{% include snippets/syntax/24/index.html %}

Adicionalmente a esas guías CSS, queremos prestar especial atención a las siguientes pautas:

* las variables locales se declaran antes que cualquier otra y están espaciadas por un salto de línea;
* las llamadas a los *mixin* sin `@content` deben ir antes de cualquier declaración;
* los selectores anidados van siempre después de un salto de línea;
* las llamadas a los *mixin* con `@content` deben ir después de cualquier selector anidado;
* no usar un salto de línea antes de una llave de cierre (`}`).

Ejemplo:

{% include snippets/syntax/25/index.html %}

### Clasificación De Declaraciones

No se me ocurren muchos temas donde las opiniones estén tan divididas como en lo que respecta a la clasificación de las declaraciones en CSS. En concreto, hay dos bandos aquí:

* mantener un estricto orden alfabético;
* ordenar las declaraciones por tipo (posición, *display*, colores, tipografía, varios…).

Hay pros y contras para estas dos posturas. Por una parte, el orden alfabético es universal (por lo menos para los idiomas que usan el alfabeto latino) así que no hay discusión posible a la hora de poner una propiedad antes que otra. Sin embargo, me parece extremadamente raro ver que propiedades como, `bottom` y `top` no estén la una justo después de la otra. ¿Por qué las animaciones deben aparecer antes que el tipo de display? Hay muchas singularidades con respecto al orden alfabético.

{% include snippets/syntax/26/index.html %}

Por otra parte, ordenar las propiedades por tipo tiene mucho sentido. Cada declaración relacionada está reunida, `top` y `bottom` están una debajo de la otra y leer un conjunto de reglas parece como leer un cuento corto. Pero a menos que mantengas algunas convenciones como las que se exponen en [CSS idiomático](https://github.com/necolas/idiomatic-css), hay mucho espacio para la interpretación en esta forma de escribir CSS. ¿Dónde debería ir `white-space`: en tipografía o en display?, ¿Dónde pertenece `overflow` exactamente?, ¿Cuál es el orden de una propiedad dentro de un grupo? (podría ser en orden alfabético, ¡oh! ironía)

{% include snippets/syntax/27/index.html %}

También hay otra rama interesante en cuanto al orden de propiedades, llamado [CSS concéntrico](https://github.com/brandon-rhodes/Concentric-CSS), que parece ser bastante popular. Básicamente el CSS concéntrico se basa en el modelo de caja para definir un orden: se empieza fuera y se mueve hacia dentro.

{% include snippets/syntax/28/index.html %}

Debo decir que ni yo mismo puedo decidirme. Una [encuesta reciente en CSS-Tricks](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) determinó que más de un 45% de los desarrolladores ordenan sus declaraciones por tipo, frente el 14% que lo hace alfabéticamente. También hay un 39% que lo hace completamente al azar, incluido yo mismo.

{% include images/order-poll.html %}

Debido a esto, no voy a imponer una opción en concreto en esta guía de estilo. Elige la que más te guste, siempre y cuando sea coherente con el resto de tus hojas de estilo (es decir, no la opción *al azar*).

<div class="note">
  <p>Un <a href="https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">estudio reciente</a> muestra que usando <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (que <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">ordena por tipo</a>) para clasificar las declaraciones CSS termina acortando el tamaño promedio de los archivos bajo compresión Gzip en un 2.7% frente al 1.3% cuando se ordenan alfabéticamente.</p>
</div>

### Anidamiento De Selectores

Una característica particular que aporta Sass y que está siendo muy mal utilizada por muchos desarrolladores es el *anidamiento de selectores*. El anidamiento de selectores ofrece una forma para que los autores de las hojas de estilo puedan calcular selectores largos anidando selectores más cortos dentro de ellos.

#### Regla General

Por ejemplo, el siguiente anidamiento Sass:

{% include snippets/syntax/29/index.html %}

…generará el siguiente CSS:

{% include snippets/syntax/30/index.html %}

En la misma línea, desde Sass 3.3 es posible usar la referencia al selector actual (`&`) para generar selectores avanzados. Por ejemplo:

{% include snippets/syntax/31/index.html %}

…generará el siguiente CSS:

{% include snippets/syntax/32/index.html %}

Este método se utiliza a menudo junto con las [convenciones de nombrado BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) para generar los selectores `.block__element` y `.block--modifier` basados en los selectores originales (por ejemplo, `.block` en este caso).

<div class="note">
  <p>Aunque podría ser anecdótico, generar nuevos selectores a partir de la referencia del selector actual (<code>&</code>) hace que dichos selectores no se puedan buscar en la base del código ya que no existen per se.</p>
</div>

El problema con la anidación de selectores es que en última instancia hace que el código sea más difícil de leer. Se debe calcular mentalmente el selector resultante de los distintos niveles de sangría; no siempre resulta obvio conocer el código resultante en CSS.

Esta afirmación se vuelve más verdadera en cuanto los selectores se hacen más largos y las referencias al selector actual (`&`) más frecuentes. En algún punto, el riesgo de perder la pista y no poder entender lo que está pasando es tan alto que no merece la pena.

Para evitar estas situaciónes, hemos hablado mucho sobre [la regla de Origen - En inglés](https://thesassway.herokuapp.com/beginner/the-inception-rule) desde hace algunos años. Recomendaba no anidar los selectores más allá de 3 niveles de profundidad, como referencia a la película *Inception* de Christopher Nolan. Yo sería mucho más drástico y recomendaría  **evitar la anidación de selectores tanto como sea posible**. 

Sin embargo, es evidente que hay algunas excepciones a esta regla como se verá en la siguiente sección, esta opinión es bastante popular y puedes leer más sobre ella en [Ten cuidado con la anidación de selectores - En inglés](https://www.sitepoint.com/beware-selector-nesting-sass/) y [Evita la anidación de selectores para obtener un CSS más modular - En inglés](https://thesassway.herokuapp.com/intermediate/avoid-nested-selectors-for-more-modular-css).

#### Excepciones

Para los principiantes, se permite e incluso se recomienda anidar pseudo-clases y pseudo-elementos dentro del selector inicial.

{% include snippets/syntax/33/index.html %}

Usar la anidación para las pseudo-clases y los pseudo-elementos no solo tiene sentido (porque trata con selectores relacionados), sino que también ayuda a mantener todo lo relacionado con un componente en un mismo lugar.

Además, cuando se utilizan clases de estado independientes del dispositivo como `.is-active`, está perfectamente bien anidar dentro del selector del componente para mantenerlo todo ordenado.

{% include snippets/syntax/34/index.html %}

Por último, pero no menos importante, cuando se da estilo a un elemento, este pasa a estar contenido en otro elemento específico, también está bien utilizar la anidación para mantener todo lo relacionado con el componente en el mismo lugar.

{% include snippets/syntax/35/index.html %}

Como en todo, los detalles son algo irrelevante, la coherencia es la clave. Si te sientes completamente confiado con la anidaciones de selectores, entonces utilizala. Sólo asegurate de que todo tu equipo está de acuerdo con ello.
