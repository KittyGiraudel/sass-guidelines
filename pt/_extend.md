
# Extend

A directiva `@extend` (*estender*) deverá ser uma das características que fizeram Sass tão popular há poucos anos atrás. Se se recordam, torna possível dizer a Sass para estilizar um elemento A exactamente como se também pertencesse ao selector B. Escusado será dizer que isto poderá ser um aliado valioso ao escrever CSS modular.

No entanto, sinto que devo avisar-vos contra esta característica. Por mais inteligente que seja. `@extend` é ainda um conceito complicado que poderá fazer mais mal do que bem, especialmente quando mal utilizado. O problem é, ao estender um selector, não há grande forma de responder a estas questões sem possuir um conhecimento profundo de toda a base de código:

* onde irá ser anexado o meu selector actual?
* será provável eu causar efeitos secundários indesejáveis?
* quão grande é o CSS gerado por este único `@extend`?

Tudo quanto se sabe, o resultado pode ir desde fazer nada até causar efeitos secundários desastrosos. Por causa disto, o meu primeiro conselho seria para evitar a directiva `@extend` completamente. Poderá soar radical, mas no final do dia pode poupar-vos dores de cabeça e sarilhos.

Dito isto, conhecem o ditado:

> Nunca digas nunca.<br>
> &mdash; Aparentemente, [não dito pela Beyoncé](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Há cenários onde estender selectores poderá ser útil e de valor. No entanto, tenham sempre em mente estas regras para não se meterem am apuros:

* Usem `@extend` dentro de um módulo, não entre módulos.
* Usem `@extend` exclusivamente em *placeholders*, não em selectores reais.
* Certifiquem-se que o *placeholder* que estendem está presente o mínimo possível na folha de estilos.

Se vão utilizar `@extend`, deixem também relembrar-vos que não combina bem com blocos `@media`. Como poderão saber, Sass é incapaz de estender um selector externo a partir de dentro de uma *media query*. Ao fazer isso, o compilador simplesmente rebenta, dizendo que não é possível fazer tal coisa. Nada bom. Especialmente visto que *media queries* é praticamente tudo o que sabemos.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // Isto não funciona. Pior: rebenta.
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
    // Isto não funciona. Pior: rebenta.
    @extend .foo
{% endhighlight %}
  </div>
</div>

> Não podem usar @extend para estender um selector externo a partir de dentro de @media.
> Deverão usar @extend apens para estender selectores dentro da mesma directiva.

<div class="note">
  <p>É frequente ouvir-se que <code>@extend</code> ajuda a reduzir o tamanho dos ficheiros visto que combina selectores ao invés de duplicar propriedades. Isso é verdade, mas a diferença é insignificante após compressão <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a>.</p>
  <p>Dito isto, se não podem usar Gzip (ou algo equivalente), então mudar para uma abordagem que inclua <code>@extend</code> poderá não ser assim tão má, enquanto souberem o que estão a fazer.</p>
</div>

Resumindo, eu aconselharia **contra o uso da directiva `@extend`**, excepto sob algumas circunstâncias específicas, mas não iria tão longe a ponto de proibi-lo.



### Leitura adicional

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
