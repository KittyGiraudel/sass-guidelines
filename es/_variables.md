
# Variables

Las variables son la esencia de cualquier lenguage de programación. Nos permiten reutilizar valores sin tener que copiarlos una y otra vez. Más importante, permiten la actualización de un valor de manera sencilla. No más buscar y reemplazar valores de manera manual.

Sin embargo CSS no es más que una cesta enorme que contiene todos nuestros elementos. A diferencia de muchos lenguages, no hay alcances (*scopes*) reales en CSS. Debido a esto, debemos prestar especial atención cuando añadimos variables a riesgo de presenciar conflictos.

Mi consejo sería que solo crearas variables cuando tenga sentido hacerlo. No inicies nuevas variables solo por el gusto de hacerlo, no va a ayudar. Una nueva variable debe crearse solo cuando se cumplen los siguientes criterios:

* el valor se repite al menos dos veces;
* es probable que el valor se actualice al menos una vez;
* todas las apariciones del valor están vinculadas a la variable (es decir, no por casualidad).

Básicamente, no hay ningún sentido en declarar una variable que nunca se actualizará o que sólo se usará en un solo lugar.






## Scoping O Alcance

La variable *scoping* (alcance) ha cambiado a lo largo de los años. Hasta hace muy poco, las declaraciones de variables dentro de los conjuntos de reglas y otros alcances eran locales por defecto. Sin embargo cuando ya había una variable global con el mismo nombre, la asignación local cambiaría dicha variable global. Desde la versión 3.4, Sass fuerza correctamente el concepto de *scope* y crea una nueva variable local.

Los documentos hablan de *ocultar o sombrear la variable global*. Cuando se declara una variable que ya existe en el alcance global dentro de un ámbito interno (selector, función, *mixin*...), se dice que la variable local esta *sombreando* a la variable global. Básicamente, la sobrescribe solo en el ámbito local.

El siguiente fragmento de código explica el concepto de *sombreado de variable*:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Inicializar una variable global a nivel raiz.
$variable: 'valor inicial';

// Crear un *mixin* que sobrescribe la variable global.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Crear una variable local que oculte la variable global.
  $variable: 'local value';

  // Incluir el *mixin*: sobrescribe la variable global.
  @include global-variable-overriding;

  // Imprimir el valor de la variable.
  // Es la variable **local** puesto que sobrescribe la global.
  content: $variable;
}

// Imprime la variable en otro selector que no la está sombreando.
// Es la variable **global**, como se esperaba.
.other-local-scope::before {
  content: $variable;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Inicializar una variable global a nivel raiz.
$variable: 'valor inicial'

// Crear un *mixin* que sobrescribe la variable global.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
  // Crear una variable local que oculte la variable global.
  $variable: 'local value'

  // Incluir el *mixin*: sobrescribe la variable global.
  +global-variable-overriding

  / Imprimir el valor de la variable.
    // Es la variable **local** puesto que sobrescribe la global.
  content: $variable

// Imprime la variable en otro selector que no la está sombreando.
// Es la variable **global**, como se esperaba.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>






## La bandera `!default`

Cuando se construye una librería, un *framework*, un sistema de retícula o cualquier bloque de Sass que está destinado a ser distribuido y usado por desarrolladores externos, todas las variables de configuración deben estar definidas con la bandera `!default` para que puedan sobrescribirse.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$baseline: 1em !default;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$baseline: 1em !default
{% endhighlight %}
  </div>
</div>

Gracias a esto, cualquier desarrollador puede definir su propia variable `$baseline` *antes* de importar tu librería sin que su valor sea redefinido.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// La variable del desarrollador
$baseline: 2em;

// Tu librería declarando la variable `$baseline`
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// La variable del desarrollador
$baseline: 2em

// Tu librería declarando la variable `$baseline`
@import your-library

// $baseline == 2em
{% endhighlight %}
  </div>
</div>






## La bandera `!global`

La bandera `!global` solo se debe utilizar cuando se sobrescribe una variable global desde un alcance local. Cuando se define una variable a nivel raiz, la bandera `!global` debe ser omitida.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Si
$baseline: 2em;

// No
$baseline: 2em !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Si
$baseline: 2em

// No
$baseline: 2em !global
{% endhighlight %}
  </div>
</div>






## Variables Múltiples O Mapas

Existen ventajas al utilizar los mapas respecto a las variables múltiples. La principal de ellas es la de poder iterar sobre un mapa, lo que no es posible con múltiples variables.

Otra ventaja de utilizar un mapa es la de tener la capacidad de crear una pequeña función *getter* para proporcionar una API más amigable. Por ejemplo, considera el siguiente código Sass:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mapa de Z-indexes, reuniendo todos las capas Z de la aplicación
/// @access private
/// @type Map
/// @prop {String} key - Nombre de la capa
/// @prop {Number} value - Valor Z asignada a la clave
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Obtener todos los z-index a partir del nombre de una capa
/// @access public
/// @param {String} $layer - Nombre de la capa
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mapa de Z-indexes, reuniendo todos las capas Z de la aplicación
/// @access private
/// @type Map
/// @prop {String} key - Nombre de la capa
/// @prop {Number} value - Valor Z asignada a la clave
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Obtener todos los z-index a partir del nombre de una capa
/// @access public
/// @param {String} $layer - Nombre de la capa
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
