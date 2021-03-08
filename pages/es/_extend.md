
## Extend

La directiva `@extend` es una característica muy potente que a menudo es malentendida. En general, hace posible decirle a Sass que use el estilo del selector A como si también correspondiera con el selector B. No hace falta decir, que puede ser un valioso aliado al escribir CSS modular.

Si embargo, el verdadero propósito de `@extend` es mantener las relaciones (restricciones) dentro de los selectores extendidos entre conjuntos de reglas. ¿Qué significa esto exactamente?

- Los selectores tienen *restricciones* (por ejemplo, `.bar` en `.foo > .bar` debe tener un padre `.foo`).
- Estas restricciones se *transfieren* al selector que se extiende (por ejemplo, `.baz { @extend .bar; }` producirá `.foo > .bar, .foo > .baz`);
- Las declaraciones del selector extendido serán compartidas con el selector que se está extendiendo.

Se puede ver con claridad que al extender selectores con restricciones indulgentes puede conducir a una explosión del selector. Si `.baz .qux` extiende` .foo .bar`, el selector resultante puede ser `.foo .baz .qux` o` .baz .foo .qux`, ya que tanto `.foo` como` .baz` son antepasados ​​generales. Pueden ser padres, abuelos, etc.

Intenta definir las relaciones vía placeholders y no con selectores directos. Esto te dará la libertad de usar (y cambiar) cualquier convención de nomenclatura que tengas para tus selectores, y ya que las relaciones solo se definen una vez dentro de los *placeholders*, es mucho menos probable tener selectores no desados.

Para heredar estilos, usa sólo `@extend` si el selector que se extiende `.class` o `%placeholder` _es un tipo del_ selector extendido. Por ejemplo, un `.error` es un tipo de `.warning`, por lo que `.error` puede `@extend .warning`.

{% include snippets/extend/01/index.html %}

Hay muchos escenarios donde extender selectores pueden ser de gran ayuda e incluso, merece la pena. Sin embargo, ten en cuenta las siguientes reglas para `@extend`-er correctamente.

* Usa *extend* principalmente en `%placeholders`, no en selectores.
* Cuando extiendas clases, extiende una clase con otra, _nunca_ con un [selector complejo](https://www.w3.org/TR/selectors4/#syntax).
* Intenta no extender directamente los `%placeholder`, hazlo tan pocas veces como sea posible.
* Evita extender los ancestros generales ​​(por ejemplo, `.foo .bar`) o los selectores generales adyacentes (por ejemplo` .foo ~ .bar`). Esto es lo que provoca la explosión del selector.

<div class="note">
  <p>A menudo se dice que <code>@extend</code> ayuda a disminuir el tamaño del archivo, ya que combina los selectores en lugar de duplicar las propiedades. Eso es cierto, sin embargo la diferencia es insignificante una vez que <a href="https://en.wikipedia.org/wiki/Gzip">Gzip</a> ha comprimido el archivo.</p>
  <p>Dicho esto, si no puedes usar Gzip (o cualquier equivalente), cambiar a un enfoque <code>@extend</code> puede resultar valioso, especialmente si el peso de tu hoja de estilo es el cuello de botella en el rendimiento de tu proyecto.</p>
</div>

### Extend y media queries

Sólo debes extender los selectores dentro del mismo ámbito (directiva `@media`). Piensa en una media query como en otra restricción.

{% include snippets/extend/02/index.html %}

Las opiniones parecen estar extremadamente divididas con respecto a los beneficios y los problemas de `@extend` hasta el punto en el que muchos desarrolladores, incluido yo mismo, han estado abogando en contra de él, como se puede leer en los siguientes artículos:

* [Lo que nadie te dijo acerca de Sass Extend - En inglés](https://www.sitepoint.com/sass-extend-nobody-told-you/)
* [¿Por qué debes evitar usar Extend? -En inglés](https://www.sitepoint.com/avoid-sass-extend/)
* [No te "sobre extiendas" -En inglés](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

Dicho esto, y para resumir, te aconsejaría usar `@extend` solo para mantener la relación con los selectores. Si dos selectores son característicamente similares, es el caso de uso perfecto para `@extend`. Si no tienen ninguna relación, pero comparten algunas reglas, un `@mixin` puede ser la mejor opción. Para saber más sobre cómo elegir entre los dos, éste [reportaje](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/) te puede ayudar.

<div class="note">
  <p>Gracias a <a href="https://twitter.com/davidkpiano">David Khourshid</a> por su ayuda y experiencia en esta sección.</p>
</div>
