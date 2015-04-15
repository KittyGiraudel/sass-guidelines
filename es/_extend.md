
# Extend

La directiva `@extend` tiene que ser una de las características que hicieron tan popular a Sass hace un par de años. A modo de recordatorio, `@extend` hace que sea posible decirle a Sass que añada estilo a un elemento A, exactamente como si el selector coincidiese con el selector B. No hace falta decir, que esto puede ser un valioso aliado al escribir CSS modular.

Sin embargo, me siento en la obligación de advertirte acerca de esta característica. Tan inteligente como suena, `@extend` todavía es un concepto complicado que podría hacer más mal que bien, especialmene cuando se usa mal. El tema es que, cuando se extiende un selector, no tienes una manera de responder a algunas cuestiones sin tener un conocimiento en profundidad de todo el código:

* ¿Dónde se va anexar el selector acutal?
* ¿Es posible que cause efectos secundarios?
* ¿Qué tamaño tendrá el CSS generado por un solo `@extend`?

Para que lo sepas, el resultado puede variar en un rango de no hacer nada, a causar efectos secundarios desastrosos. Debido a esto, mi primer consejo es que evites la directiva *extend* por completo. Puede sonar muy fuerte, pero al final, puede salvarte de algunos dolores de cabeza.

Dicho esto, ya sabes el dicho:

> Nunca digas nunca.<br>
> &mdash; Aparentemente, [no Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Hay escenarios donde los selectores *extend* pueden ser de gran ayuda e incluso, merecen la pena. Sin embargo, ten siempre presente las siguientes reglas para que no te metas en problemas:

* Utiliza *extend* dentro de un módulo, no en varios.
* Utiliza *extend* exclusivamente en *placeholders* no en el selector actual.
* Asegurate que el *placeholder* que extiendes está presente lo menos posible en las hojas de estilo.

Si vas a utilizar *extend*, déjame recordarte que no se lleva muy bien con los bloques `@media`. Como ya sabrás, Sass es incapaz de extender un selector exterior desde el interior de una *media query*. Al hacerlo el compilador se bloquea, diciéndote que no puedes hacer esto. No está bien. Especialmente porque las *media queries* son lo más usado últimamente.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // Esto no funciona. Peor: se bloquea
    @extend .foo;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  content: 'foo'

@media print
  .bar
    // Esto no funciona. Peor: se bloquea
    @extend .foo
{% endhighlight %}
  </div>
</div>

> No puedes usar @extend en un selector externo dentro de un @media.<br>
> Solo puedes usar @extend en un selector dentro de una misma directiva.

<div class="note">
  <p>Frecuentemente se dice que <code>@extend</code> ayuda con el tamaño del archivo, ya que combina selectores en lugar de propiedades duplicadas. Esto es verdad, sin embargo la diferencia es insignificante ya que <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a> hará esta compresión.</p>
  <p>Dicho esto, si no puedes usar Gzip (o algo equivalente) entonces cambiar a un enfoque <code>@extend</code> puede que no sea tan malo, siempre y cuando sepas lo que estás haciendo.</p>
</div>

Para resumir, te **aconsejo no usar la directiva `@extend`**, salvo en circunstancias muy específicas, pero no iría tan lejos como para prohibirlo.



### Más información

* [Lo que nadie te dijo acerca de Sass Extend -En inglés](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [¿Por qué deberías evistar Extend?](http://www.sitepoint.com/avoid-sass-extend/)
* [No te *sobre-extiendas*](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [¿Cuándo usar Extend; Cuándo usar un Mixin? -En inglés](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
