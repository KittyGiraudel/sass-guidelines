
# Comentar

CSS é uma linguagem traiçoeira, repleta de _hacks_ e esquisitices. Por causa disto, deverá ser altamente comentada, especialmente se vocês ou outras pessoas pretenderem ler e actualizar o código daqui a 6 meses ou 1 ano. Não deixem vocês ou qualquer outra pessoa estar na posição de *eu-não-escrevi-isto-ó-meu-deus-porquê*.

Por mais simples que o CSS poderá ser, há sempre lugar para comentários. Estes poderão ser a explicar:

* a estrutura e/ou função de um ficheiro;
* o objectivo de um conjunto de regras;
* a ideia por trás de um “número mágico”;
* a razão para uma determinada declaração de CSS;
* a ordem das declarações de CSS;
* o processo mental por trás de uma determinada maneira de fazer as coisas.

E eu provavelmente esqueci-me de um monte de outros motivos também. Comentar leva muito pouco tempo quando é feito juntamente com o código, por isso façam-no na hora certa. Voltar a um pedaço de código para comentá-lo não é só completamente irrealista, mas também extremamente irritante.






## Escrever comentários

Idealmente, *qualquer* conjunto de regras de CSS deveria ser precedido por um comentário ao estilo de C, explicando o propósito do bloco de CSS. Este comentário também incluiria explicações numeradas referentes a partes específicas conjunto de regras. Por exemplo:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Classe auxiliar para truncar e adicionar reticências a uma
 * _string_ comprida demais para caber em apenas uma linha.
 * 1. Previne o conteúdo de transbordar para outras linhas,
 *    forçando-o a uma linha apenas.
 * 2. Adiciona reticências no final da linha.
 */
.ellipsis {
  white-space: nowrap; /* 1 */
  text-overflow: ellipsis; /* 2 */
  overflow: hidden;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Classe auxiliar para truncar e adicionar reticências a uma
 * _string_ comprida demais para caber em apenas uma linha.
 * 1. Previne o conteúdo de transbordar para outras linhas,
 *    forçando-o a uma linha apenas.
 * 2. Adiciona reticências no final da linha.
 */
.ellipsis
  white-space: nowrap /* 1 */
  text-overflow: ellipsis /* 2 */
  overflow: hidden
{% endhighlight %}
  </div>
</div>

Basicamente, tudo o que não é óbvio à primeira vista deverá ser comentado. Documentação excessiva é algo que não existe. Lembrem-se de que não conseguem *comentar em demasia*, por isso vão em frente e escrevam comentários para tudo que valer a pena.

Ao comentar uma secção específica de Sass, usem comentários *in-line* em vez de blocos ao estilo de C. Isto fará o comentário invisível no *output*, mesmo no modo expandido durante desenvolvimento.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Adiciona o módulo actual à lista de módulos importados.
// A opção `!global` é necessário para realmente actualizar a variável global.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Adiciona o módulo actual à lista de módulos importados.
// A opção `!global` é necessário para realmente actualizar a variável global.
$imported-modules: append($imported-modules, $module) !global
{% endhighlight %}
  </div>
</div>



### Leitura adicional

* [CSS Guidelines' Commenting section](http://cssguidelin.es/#commenting)






## Documentação

Cada variável, função, *mixin* e *placeholder* que se destina a ser reutilizado em todo o código deverá ser documentado como parte da API global usando [SassDoc](http://sassdoc.com).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Linha base de ritmo vertical usado em todo o código.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Linha base de ritmo vertical usado em todo o código.
/// @type Length
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Três barras (<code>/</code>) necessárias.</p>
</div>

SassDoc tem duas funções principais:

* forçar comentários padronizados usando um sistema baseado em anotações para tudo o que faz parte de uma API pública ou privada;
* ser capaz de gerar uma versão HTML da documentação da API usando qualquer um dos *endpoints* de SassDoc (linha de comandos, Grunt, Gulp, Broccoli, Node...).

<figure role="group">
<img alt="Documentação gerada por SassDoc" src="http://sassdoc.com/develop/assets/images/preview-image.png" />
<figcaption>Documentação gerada por SassDoc</figcaption>
</figure>

Aqui está um exemplo de um _mixin_ documentado extensivamente com SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mixin auxiliar definindo `largura` e `altura` simultaneamente.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - `Largura` do elemento
/// @param {Length} $height ($width) - `Altura` do elemento
///
/// @example scss - Uso
///   .foo {
///     @include size(10em);
///   }
///
///   .bar {
///     @include size(100%, 10em);
///   }
///
/// @example css - CSS resultante
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mixin auxiliar definindo `largura` e `altura` simultaneamente.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - `Largura` do elemento
/// @param {Length} $height ($width) - `Altura` do elemento
///
/// @example scss - Uso
///   .foo
///     +size(10em)
///
///   .bar
///     +size(100%, 10em)
///
/// @example css - CSS resultante
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Leitura adicional

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
