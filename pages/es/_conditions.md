
## Sentencias Condicionales

Probablemente ya sabes que Sass proporciona instrucciones condicionales a través de las directivas `@if` y `@else`. A menos que tengas algún elemento con una lógica demasiado compleja en tu código, no hay necesidad de tener sentencias condicionales en tus hojas de estilo del día a día. En realidad, se usan principalmente para librerías y *frameworks*.

De todas formas, si algún día te encuentras con la necesidad de utilizarlas, por favor, respeta las siguientes pautas:

* No uses paréntesis a no ser que sea necesario;
* Deja siempre una línea en blanco antes del `@if`;
* Deja siempre un salto de línea después de una llave de apertura (`{`);
* La sentencia `@else` debe ir en la misma línea que la llave de cierre anterior (`}`).
* Deja siempre una línea en blanco después de la última llave de cierre (`}`) a menos que la siguiente línea sea otra llave de cierre (`}`).

{% include snippets/conditions/01/index.html %}

Cuando se evalúa un valor booleano falso, utiliza siempre la palabra clave `not` en lugar de evaluar contra `falso` o `null`

{% include snippets/conditions/02/index.html %}

Pon siempre la parte de la variable en la parte izquierda de la sentencia y el (in)esperado resultado en la derecha. Las sentencias condicionales invertidas son con frecuencia, más difíciles de leer, especialmente para desarrolladores inexpertos.

{% include snippets/conditions/03/index.html %}

Cuando se utilizan sentencias condicionales dentro de una función para devolver un resultado diferente basado en alguna condición, siempre debes de asegurarte que la función tiene una declaracón `@return` fuera de cualquier bloque condicional.

{% include snippets/conditions/04/index.html %}

