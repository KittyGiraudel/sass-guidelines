
# Variables

{% include chapter-buttons.html %}

Las variables son la esencia de cualquier lenguaje de programación. Nos permiten reutilizar valores sin tener que copiarlos una y otra vez. Más importante, permiten la actualización de un valor de manera sencilla. No más buscar y reemplazar valores de manera manual.

Sin embargo CSS no es más que una cesta enorme que contiene todos nuestros elementos. A diferencia de muchos lenguajes, no hay alcances (*scopes*) reales en CSS. Debido a esto, debemos prestar especial atención cuando añadimos variables a riesgo de presenciar conflictos.

Mi consejo sería que solo crearas variables cuando tenga sentido hacerlo. No inicies nuevas variables solo por el gusto de hacerlo, no va a ayudar. Una nueva variable debe crearse solo cuando se cumplen los siguientes criterios:

* el valor se repite al menos dos veces;
* es probable que el valor se actualice al menos una vez;
* todas las apariciones del valor están vinculadas a la variable (es decir, no por casualidad).

Básicamente, no hay ningún sentido en declarar una variable que nunca se actualizará o que sólo se usará en un solo lugar.

## Scoping O Alcance

La variable *scoping* (alcance) ha cambiado a lo largo de los años. Hasta hace muy poco, las declaraciones de variables dentro de los conjuntos de reglas y otros alcances eran locales por defecto. Sin embargo cuando ya había una variable global con el mismo nombre, la asignación local cambiaría dicha variable global. Desde la versión 3.4, Sass fuerza correctamente el concepto de *scope* y crea una nueva variable local.

Los documentos hablan de *ocultar o sombrear la variable global*. Cuando se declara una variable que ya existe en el alcance global dentro de un ámbito interno (selector, función, *mixin*…), se dice que la variable local esta *sombreando* a la variable global. Básicamente, la sobrescribe solo en el ámbito local.

El siguiente fragmento de código explica el concepto de *sombreado de variable*:

{% include snippets/variables/01/index.html %}

## La bandera `!default`

Cuando se construye una librería, un *framework*, un sistema de retícula o cualquier bloque de Sass que está destinado a ser distribuido y usado por desarrolladores externos, todas las variables de configuración deben estar definidas con la bandera `!default` para que puedan sobrescribirse.

{% include snippets/variables/02/index.html %}

Gracias a esto, cualquier desarrollador puede definir su propia variable `$baseline` *antes* de importar tu librería sin que su valor sea redefinido.

{% include snippets/variables/03/index.html %}

## La bandera `!global`

La bandera `!global` solo se debe utilizar cuando se sobrescribe una variable global desde un alcance local. Cuando se define una variable a nivel raiz, la bandera `!global` debe ser omitida.

{% include snippets/variables/04/index.html %}

## Variables Múltiples O Mapas

Existen ventajas al utilizar los mapas respecto a las variables múltiples. La principal de ellas es la de poder iterar sobre un mapa, lo que no es posible con múltiples variables.

Otra ventaja de utilizar un mapa es la de tener la capacidad de crear una pequeña función *getter* para proporcionar una API más amigable. Por ejemplo, considera el siguiente código Sass:

{% include snippets/variables/05/index.html %}
