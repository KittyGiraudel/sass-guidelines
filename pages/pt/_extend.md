
## Extend

A diretiva `@extend` é uma ferramenta poderosa que é, frequentemente, má entendida. No geral, ela permite dizer ao Sass para estilizar um seletor A, tal como se ele fosse abrangido pelo seletor B. Escusado será dizer que isto pode ser um valioso aliado quando se escreve CSS modular.

No entanto, a verdadeiro propósito do `@extend` é manter relações (restrições) dentro de seletores estendidos entre blocos de regras. O que exatamente isso significa?

- Seletores possuem *restrições* (por exemplo `.bar` in `.foo > .bar` deve ter um ancestral `.foo`);
- Essas restrições são *carregadas* para o seletor sendo estendido (por exemplo `.baz { @extend .bar; }` vai compilar `.foo > .bar, .foo > .baz`);
- As declarações do seletor extensor vão ser compartilhadas com o seletor sendo estendido;

Dado isso, é certo ver como os seletores sendo estendidos com fracas restrições podem levar a uma explosão de seletor. Se `.baz .qux` estende `.foo .bar`, o resultado pode ser `.foo .baz .qux` ou `.baz .foo .qux`, já que `.foo` e `.baz` são ancestrais mais genéricos (eles podem ser pais, avós e etc).

Sempre tente definir relações via placeholders, não classes. Isso vai lhe dar a liberdade para usar (e alterar) qualquer convenção de nomeclatura que você usa em seus seletores e, já que relações são definidas apenas uma vez dentro do placeholder, é menos provavel que você irá compilar seletores indesejados.

{% include snippets/extend/01/index.html %}

Existem muitos cenários onde seletores sendo extendidos são úteis e valem a pena. Portanto, sempre mantenha em mente essas regras para que você possa usar `@extend` com cuidado:

* Use, exclusivamente, `@extend` em `%placeholders`, não em seletores.
* Estenda um `%placeholder` diretamente, a menor quantidade de vezes possível.
* Evite estender seletores ancestrais genéricos (como `.foo .bar`) ou seletores irmãos genéricos (como `.foo ~ .bar`). Isso é o que causa explosão de seletores.

<div class="note">
  <p>Frequentemente, é falado que o <code>@extend</code> ajuda com o tamanho tamanho do arquivo, já que ele combina seletores invés de duplicar propriedades. Isso verdade, mas a diferença é insignificante quando o <a href="https://en.wikipedia.org/wiki/Gzip">Gzip</a> faz sua compressão.</p>
  <p>Dessa maneira, se você não pode usar Gzip (ou algo parecido), então, usar a abordagem <code>@extend</code> pode ser bom, especialmente, se o peso da folha de estilos é o gargalo na performance.</p>
</div>

#### Extend e media queries

Você deve estender apenas seletores com o mesmo escopo da media (`@media`). Pense na media query como uma outra restrição.

{% include snippets/extend/02/index.html %}

As opiniões parecem ser extremamente divididas a respeito das vantagens e problemas do `@extend`, ao ponto que muitos desenvolvedores (incluindo eu) tem discutido contra o uso disso, como você pode ver nos seguintes artigos:

* [What Nobody Told you About Sass Extend](https://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](https://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

Dado isso e resumindo, eu gostaria de aconselhar o uso de `@extend` apenas para manter relações entre seletores, se dois seletores são característicamente similares porque, então, teremos uma situação perfeita para uso do `@extend`. No entanto, se eles são irrelacionados mas compartilham algumas regras, um `@mixin` pode ser melhor. Para saber mais, sobre como escolher entre esses dois, leia este [artigo](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/).

<div class="note">
  <p>Agradeço o <a href="https://twitter.com/davidkpiano">David Khourshid</a> por sua ajuda e expertise, nesta seção.</p>
</div>
