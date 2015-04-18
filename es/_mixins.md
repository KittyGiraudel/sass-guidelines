
# Mixins

Los *Mixins* son una de las características más utilizadas dentro de todo el lenguaje Sass. Son la clave para la reutilización y los componentes DRY. Y por una buena razón: los *mixins* permiten a los desarrolladores definir estilos que pueden volver a usarse a lo largo de la hoja de estilo sin necesidad de recurrir a las clases no semánticas, como por ejemplo `.float-left`.

Pueden contener reglas CSS completas y casi todo lo que se permite en cualquier parte de un documento Sass. Incluso pueden pasarse argumentos, al igual que en las funciones. Sobra decir que las posibilidades son infinitas.

Pero creo que debo advertirte contra el abuso del poder los *mixins*. De nuevo, la clave aquí es la *simplicidad*. Puede ser tentador contruir *mixins* extremadamente poderosos y con grandes cantidades de lógica. Se llama exceso de ingeniería y la mayoría de los desarrolladores la padecen. No pienses demasiado tu código y sobre todo busca que sea sencillo. Si un *mixin* ocupa mas o menos unas 20 líneas, debes dividirlo en partes más pequeñas o revisarlo completamente.

## Fundamentos

Dicho esto, los *mixins* son extremadamente útiles y deberías estar usando algunos. La regla de oro es que si detectas un grupo de propiedades CSS que están siempre juntas por alguna razón (es decir, no es una coincidencia), puedes crear un *mixin* en su lugar. Por ejemplo, el [hack micro-clearfix de Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) merece ser puesto en un *mixin* (sin argumentos).

{% include snippets/mixins/01.html %}

Otro ejemplo válido sería un *mixin* para para darle tamaño a un elemento, definiendo tanto  `width` como `height` al mismo tiempo. No solo significa que el código es más fácil de escribir, sino que también es más fácil de leer.

{% include snippets/mixins/02.html %}

### Más información

* [Mixins Sass para dar un impulso a tu proyecto -En inglés](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [Un mixin de Sass para triángulos CSS -En inglés](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Contruyendo un mixin para un degradado gradial -En inglés](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)

## Lista De Argumentos

Cuando se trata con un número indeterminado de argumentos en un *mixin*, utiliza siempre una `arglist` (lista de argumentos) en lugar de una lista. Piensa en `arglist` como en el octavo tipo de dato no documentado de Sass que se usa implicitamente cuando se pasa un número arbitrario de argumentos a un *mixin* o una a función que contiene `...`.

{% include snippets/mixins/03.html %}

Ahora, cuando se contruye un *mixin* que acepta un puñado de argumentos (entiéndase 3 o más), piénsalo dos veces antes de fusionarlos en una lista o mapa pensando que será más sencillo que pasarlos uno a uno.

Sass es de hecho muy inteligente con los *mixins* y las declaraciones de funciones, tanto, que puedes pasarle una lista o mapa como un *arglist* a una función o *mixin* para que sea analizada como una serie de argumentos.

{% include snippets/mixins/04.html %}

### Más información

* [Múltiples argumentos en Sass, Listas o Arglis -En inglés](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

## Mixins Y Prefijos De Proveedores

Puede ser tentador definir *mixins* personalizados para manejar prefijos de proveedores (*vendors*) en propiedades CSS que no son compatibles o totalmente soportadas. Pero no queremos esto. Primero, si puedes usar [Autoprefixer](https://github.com/postcss/autoprefixer), utiliza Autoprefixer. Eliminará código Sass de tu proyecto, siempre estará al día y hará un trabajo mejor de lo que lo puedes hacer tu al poner prefijos a las cosas.

Desafortunadamente, Autoprefixer no siempre es una opción. Si usas [Bourbon](http://bourbon.io/) o [Compass](http://compass-style.org/), seguramente sabrás que ambos proporcinan una coleción de *mixins* que manejan los prefijos de los proveedores por ti. Úsalos.

Si no puedes usar Autoprefixer, ni Bourbon, ni Compass, entonces y solo entonces, puedes tener tus propios *mixin* para añadir prefijos a las propiedades CSS. Pero. Por favor, no construyas un *mixin* por propiedad, imprimiendo manualmente cada proveedor (*vendor*).

{% include snippets/mixins/05.html %}

Hazlo de manera inteligente.

{% include snippets/mixins/06.html %}

Entonces usar este *mixin* debería ser muy sencillo:

{% include snippets/mixins/07.html %}

Por favor, ten en cuenta que es una mala solución. No puede trabajar con *polyfills* complejos como por ejemplo, los necesarios para Flexbox. En ese sentido, utilizar Autoprefixer sería una solución mucho mejor.

### Más información

* [Autoprefixer -En inglés](https://github.com/postcss/autoprefixer)
* [Contruyendo un mixin para un degradado lineal -En inglés](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)
