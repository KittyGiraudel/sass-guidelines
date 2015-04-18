
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

{% include snippets/errors/01.html %}

Si el valor no tiene unidades, la función asume que el valor estará expresado en píxeles. En este punto, hacer este tipo de hipótesis puede ser arriesgado, por lo que el usuario debe recibir una advertencia de que el software ha hecho algo que podría considerarse inesperado.

## Errores

Los errores, a diferencia de las advertencias, impiden al compilador ir más allá. Básicamente, paran la compilación y muestran un mensaje en la consola de salida, así como el rastro de seguimiento del error, lo que suele ser muy útil para la depuración. Debido a esto, los errores aparecerán cuando no hay manera de que el programa continúe funcionando. Cuando sea posible, trata de evitar el problema y mostrar una advertencia en su lugar.

Como ejemplo, digamos que construyes una función *getter* para acceder a los valores de un mapa específico. Se podría producir un error si la clave solicitada no existe en el mapa.

{% include snippets/errors/02.html %}
