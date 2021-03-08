
## Responsive Web Design Y Puntos De Ruptura

No creo que sea necesario tener que explicar lo que es el Responsive Web Design ahora que está en todas partes. Sin embargo es posible que te preguntes *¿por qué hay una sección sobre RWD en una guía de estilo de Sass?* En realidad hay algunas cuantas cosas que se puedan hacer para facilitar el trabajo con los puntos de ruptura o *breakpoints*, así que he pensado que no estaría mal listarlas aquí.

### Nombrando Los Puntos De Ruptura

Creo que puedo decir con seguridad que las *media queries* no deberían estar vinculadas a dispositivos específicos. Por ejemplo, es una mala idea intentar trabajar con tamaños específicos para iPads o Blackberry. Las *media queries* deberían trabajar con un rango de tamaños de pantalla, justo hasta que el diseño se rompa y la siguiente *media query* haga su función.

Por las mismas razones, los puntos de ruptura no deberían llevar el nombre de los dispositivos, sino algo más general. Sobre todo porque algunos teléfonos son ahora más grandes que algunas tablets, algunas tablets más grandes que un ordenador pequeño y así sucesivamente…

{% include snippets/rwd/01/index.html %}

Llegados a este punto, cualquier [nomenclatura](https://css-tricks.com/naming-media-queries/) que deje claro que el diseño no está ligado a un dispositivo en concreto podría funcionar, siempre y cuando tenga un sentido de magnitud.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>Los ejemplos anteriores utilizan mapas anidados para definir los puntos de ruptura, sin embargo, esto depende de qué tipo de gestor de *breakpoints* utilices. Puedes optar por cadenas en lugar de mapas para una mayor flexibilidad (por ejemplo <code>'(min-width: 800px)'</code>).</p>
</div>

### Gestor De Puntos De Ruptura

Una vez que tus *breakpoints* tengan la nomenclatura deseada, necesitas una manera de utilizarlos en las *media queries* reales. Hay un montón de maneras para hacerlo, pero tengo que decir que soy un gran fan del mapa de puntos de ruptura (*breakpoint map*) leído por una función *getter*. Este sistema es tan simple como eficiente.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Obviamente, este es un gestor de puntos de ruptura bastante simplista. Si necesitas un gestor ligeramente más permisivo, te recomiendo que no reinventes la rueda y utilices algo que ya esté probado y comprobado, como por ejemplo <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> o <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
  <p>Si estás buscando más información acerca de cómo enfocar las Media Queries en Sass, tanto <a href="https://www.sitepoint.com/managing-responsive-breakpoints-sass/">SitePoint</a> (de este servidor) como <a href="https://css-tricks.com/approaches-media-queries-sass/">CSS-Tricks</a> tienen muy buenos artículos al respecto.</p>
</div>

### Uso De Media Queries

No hace mucho tiempo, hubo un debate bastante acalorado acerca de dónde deberían estar las *medias queries*: ¿deberían estar dentro de los selectores (permitido por Sass) o deberían estar completamente separados de ellos? Debo decir que soy un ferviente defensor del sistema *media queries dentro del selector*, ya que creo que funciona bastante bien con la idea de *componentes*.

{% include snippets/rwd/04/index.html %}

Resultaría el siguiente bloque CSS:

{% include snippets/rwd/05/index.html %}

Es posible que escuches que esta convención dará como resultado en CSS bloques duplicados de *media queries*. Esto es definitivamente cierto. Sin embargo, se han realizado pruebas y la conclusión es que dará igual una vez Gzip (o cualquier equivalente) haya hecho su trabajo:

> … hemos discutido a fondo si hay consecuencias en el rendimiento, en cuanto a la combinación frente a la dispersión de *Media Queries* y se llegó a la conclusión de que la diferencia, aunque fea, es en el peor de los casos mínima y esencialmente inexistente en el mejor.<br>
> &mdash; Sam Richards, en relación a los puntos de ruptura

Si realmente te preocupan las *media queries* duplicadas, puedes usar una herramienta para fusionarlas como por ejemplo [esta gema](https://github.com/aaronjensen/sass-media_query_combiner) sin embargo, siento que debo advertirte de los posibles efectos secundarios ocasionados al mover el código de lugar. Ya sabes que el orden del código es importante.
