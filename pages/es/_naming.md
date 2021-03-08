
## Convenciones De Nomenclatura

En esta sección, no trataremos sobre cuáles son las mejores convenciones de nomenclatura en CSS para mejorar el mantenimiento y la escalabilidad; esto no solo depende de tí, sino que también está fuera del alcance de una guía de estilo. Sugiero las recomendaciones que aparecen en [la guía de estilo de CSS - En inglés](https://cssguidelin.es/#naming-conventions).

Hay algunas cosas a las que se les puede asignar un nombre en Sass, y es importante que tengan un nombre adecuado, así todo tu código será coherente y fácil de leer:

* variables;
* funciones;
* mixins.

Los *placeholders* han sido omitidos deliberadamente de esta lista ya que pueden ser considerados como selectores regulares CSS y por lo tanto, se sigue el mismo patrón de nomenclatura que se utiliza con las clases.

En cuanto a las variables, las funciones y los *mixins*, utilizaremos algo muy *CSSable*: **minúsculas-delimitadas-con-guiones** y especialmente, nombres que tengan un significado claro.

{% include snippets/naming/01/index.html %}

### Constantes

Si resultas ser un desarrollador de *frameworks* o de librerías, puede que te encuentres con variables que no van a ser actualizadas bajo ninguna circunstancia: las constantes. Desafortunadamente (o ¿afortunadamente?), Sass no proporciona ninguna forma para definir este tipo de entidades, por lo que tenemos que ser muy estrictos con las nomenclaturas para mantener nuestro objetivo.

Como con muchos lenguajes, sugiero que se utilice la opción todo-mayúsculas cuando se trata de constantes. No solo es una convención muy antigua, sino que también contrasta bien con las típicas variables minúsculas separadas con guión.

{% include snippets/naming/02/index.html %}

Si realmente quieres jugar con la idea de las constantes en Sass, deberías leer [este dedicado artículo](https://www.sitepoint.com/dealing-constants-sass/).

### Espacio De Nombres

Si tienes la intención de distribuir tu código Sass, como por ejemplo, en el caso de una librería, un *framework*, un sistema de retícula o lo que sea, es posible que quieras considerar crear un espacio de nombres (*namespace*) para tus variables, funciones, *mixins* y *placeholders* para que no entren en conflicto con el código de ninguna otra persona.

Por ejemplo, si trabajas en un proyecto llamado *Sassy Unicorn* que está pensado para ser distribuido, podrías considerar utilizar `su-` como espacio de nombres (*namespace*). Es lo suficientemente específico para evitar cualquier colisión de nombres y lo suficientemente corto como para no ser un martirio a la hora de escribirlo.

{% include snippets/naming/03/index.html %}

[Kaelig](https://kaelig.fr) tiene un [artículo muy revelador acerca del espacio de nombres global de CSS -En inglés](https://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace), en caso de que este tema te interese.

<div class="note">
  <p>Ten en cuenta que los espacios de nombres automáticos son sin duda un objetivo de diseño para <code>@import</code> en la nueva versión de Sass 4.0. Cuanto más se aproxima la solución, se volverá cada vez menos útil hacerlo de manera manual; eventualmente, las librerías nombradas manualmente pueden ser más difíciles de utilizar.</p>
</div>
