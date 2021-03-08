
## Bucles

Puesto que Sass proporciona estructuras de datos complejas como por ejemplo [listas](#listas) y [mapas](#mapas), no es de extrañar que también proporcione una forma para que los autores puedan iterar sobre dichas entidades.

Sin embargo, la presencia de bucles generalmente implica una lógica moderadamente compleja que propablemente no pertenece a Sass. Antes de utilizar un bucle, asegúrate de que tiene sentido y que de hecho resuelve un problema.

### Each

El bucle `@each` es definitivamente el más utilizado de los tres tipos de bucle que proporciona Sass. Sass ofrece una API limpia para iterar sobre una lista o mapa.

{% include snippets/loops/01/index.html %}

Cuando se itera sobre un mapa utiliza siempre `$key` y `$value` como nombres de variables para mantener una coherencia.

{% include snippets/loops/02/index.html %}

También asegúrate de respetar estas pautas para preservar la legibilidad:

* Deja siempre una línea en blanco antes del `@each`;
* Deja siempre una línea en blanco después de la llave de cierre (`}`) a no ser que la siguiente línea sea otra llave de cierre (`}`).

### For

El bucle `@for` puede ser útil cuando se combina con las pseudo-clases CSS `:nth-*`. A excepción de estos escenarios, es preferible usar un bucle `@each` si *tienes que* iterar sobre algo.

{% include snippets/loops/03/index.html %}

Utiliza siempre `$i` como nombre de variable para mantener la convención habitual, a menos que tengas una muy buena razón para no hacerlo, no uses la palabra clave `to`, es mejor usar siempre `through`. Muchos desarrolladores no saben que Sass ofrece esta variación; usarla podría llevar a confusión.

También asegúrate de respetar estas directrices para preservar la legibilidad:

* Deja siempre una línea en blanco antes del `@for`;
* Deja siempre una línea en blanco después de la llave de cierre (`}`) a no ser que la siguiente línea sea otra llave de cierre (`}`).

### While

El ciclo `@while` no tiene ningún caso de uso en ningún proyecto real de Sass, puesto que no hay ninguna manera de romper un bucle desde el interior. **No lo utilices**.

