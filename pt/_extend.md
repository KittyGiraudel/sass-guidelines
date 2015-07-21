
# Extend

A diretiva `@extend` tem de ser uma das características que tornou Sass tão popular há uns anos atrás. Como lembrete, ela permite dizer ao Sass para estilizar um elemento A, tal como se ele fosse abrangido pelo seletor B. Escusado será dizer que isto pode ser um valioso aliado quando se escreve CSS modular.

No entanto sinto-me na necessidade de vos avisar que esta característica, por muito inteligente que seja, é um conceito traiçoeiro, especialmente quando usado indevidamente. O problema é que quando se extende um seletor, há pouca ou nenhuma forma de responder as seguintes perguntas sem terem um conhecimento profundo de toda a base de código.

* onde é que o seletor vai ser colocado?
* é provavel que eu cause efeitos secundários?
* quando grande é o CSS gerado por simples extend?

Por tudo o que sei, o resultado pode variar entre fazer nada e causar efeitos secundários desastrosos. Por causa disso, o meu primeiro conselho é de evitar a diretiva `@extend` por completo. Pode soar bruto, mas no fim do dia pode salvar-vos de alguns problemas e dores de cabeça.

Posto desta forma, conhecem o ditado:

> Nunca digas nunca.<br>
> &mdash; Aparentemente, [não foi a Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Há cenários onde extender seletores pode valer a pena e até ajudar. No entanto, estejam sempre conscientes destas regras para evitar problemas:

* Usem o extend apenas dentro do módulo, não através de módulos diferentes.
* Usem o extend em placeholders exclusivamente e não em seletores reais.
* Tenham a certeza que o placeholder que estão a extender se encontra presente o mínimo possivel pela folhas de estilo.

Se vão usar o extend, deixem-me também lembrar que ele não funciona bem com blocos `@media`. Tal como devem saber, o Sass é incapaz de extender um seletor exterior a partir de dentro de uma media query. Quando se experimenta, o compilador simplesmente rebenta, avisando-vos de que não consegue fazer tal coisa. Não é bom. Especialmente porque media queries são maioritariamente o que fazemos agora.

{% include snippets/extend/01/index.html %}

> Não devem usar o @extend num seletor exterior a partir de dentro de um bloco @media. <br>
> Só devem usar o @extend em seletors a partir de dentro da mesma diretiva.

<div class="note">
  <p>É ocasionalmente dito que <code>@extend</code> ajuda a reduzir o tamanho do ficheiro, uma vez que combina seletores em vez de duplicar propiedades. Isto é verdade, no entanto a diferença é negligenciável assim que o <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a> faça a sua compressão.</p>
  <p>Dito isso, se não puderem usar Gzip (ou algo equivalente) então mudar a abordagem para usar o <code>@extend</code> pode não ser assim tão mau, desde que saibam o que estão a fazer.</p>
</div>

Para resumir, eu **desaconselho o uso da diretiva `@extend`**, com exceção de algumas circunstâncias específicas, mas não iria tão longe como proibir o seu uso.

###### Leitura Adicional

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
