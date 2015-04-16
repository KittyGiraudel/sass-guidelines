
# Advertencias Y Errores

Hay una característica que muchas veces es pasada por alto por los desarrolladores Sass, y es la capacidad de generar advertencias e informes de errores de manera dinámica. De hecho, Sass viene con tres directivas personalizadas para imprimir contenido en el sistema de salida estándar (CLI, compiling app...):

* `@debug`;
* `@warn`;
* `@error`.

Dejemos `@debug` al lado, ya que claramente está pensado para depurar SassScript, que no es nuestro propósito aquí. Entonces nos quedamos con `@warn` y `@error` los cuales son notablemente idénticos, salvo porque uno se detiene en el compilador, mientras que el otro no. Voy a dejar que adivines cuál hace qué.

Ahora, hay un montón de sitio en un proyecto Sass para las advertencias y los errores. Básicamente, cualquier mixin o función que espera un tipo o un argumento específico podría lanzar un error si algo saliese mal o mostrar una advertencia cuando se hace una suposición.



### Más información

* [Introdución al manejo de errores -En inglés](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Construcciones de un Logger Mixin -En inglés](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger -En inglés](https://github.com/HugoGiraudel/SassyLogger)






## Advertencias

Toma como ejemplo esta función de [Sass-MQ](https://github.com/sass-mq/sass-mq) que intenta convertir un valor en `px` a `em`:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size) {
  @if unitless($px) {
    @warn 'Suponiendo que #{$px} está en píxeles, tratando de convertirlo en píxeles';
    @return mq-px2em($px + 0px);
  } @else if unit($px) == em {
    @return $px;
  }

  @return ($px / $base-font-size) * 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size)
  @if unitless($px)
    @warn 'Suponiendo que #{$px} está en píxeles, tratando de convertirlo en píxeles';
    @return mq-px2em($px + 0px)
  @else if unit($px) == em
    @return $px

  @return ($px / $base-font-size) * 1em
{% endhighlight %}
  </div>
</div>

Si el valor no tiene unidades, la función asume que el valor estará expresado en píxeles. En este punto, hacer este tipo de hipótesis puede ser arriesgado, por lo que el usuario debe recibir una advertencia de que el software ha hecho algo que podría considerarse inesperado.






## Errores

Los errores, a diferencia de las advertencias, impiden al compilador ir más allá. Básicamente, paran la compilación y muestran un mensaje en la consola de salida, así como el rastro de seguimiento del error, lo que suele ser muy útil para la depuración. Debido a esto, los errores aparecerán cuando no hay manera de que el programa continúe funcionando. Cuando sea posible, trata de evitar el problema y mostrar una advertencia en su lugar.

Como ejemplo, digamos que construyes una función *getter* para acceder a los valores de un mapa específico. Se podría producir un error si la clave solicitada no existe en el mapa.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// mapa de Z-index, reuniendo todas las capas Z de la aplicación
/// @access private
/// @type Map
/// @prop {String} key - nombre de la capa
/// @prop {Number} value - valor Z asignado a la clave
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Obtener el valor z-index de una capa 
/// @access public
/// @param {String} $layer - nombre de la capa
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @if not map-has-key($z-indexes, $layer) {
    @error 'No existe una capa llamada `#{$layer}` en $z-indexes. '
         + 'La capa debe estar en uno de los #{map-keys($z-indexes)}.';
  }

  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Nombre de la capa
/// @prop {Number} value - valor Z asignado a la clave
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Obtener el valor z-index de una capa 
/// @access public
/// @param {String} $layer - Nombre de la capa
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @if not map-has-key($z-indexes, $layer)
    @error 'o existe una capa llamada `#{$layer}` en $z-indexes. '
         + 'La capa debe estar en uno de los #{map-keys($z-indexes)}.'

  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
