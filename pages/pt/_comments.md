
# Comentários

CSS é uma linguagem traiçoeira, repleta de _hacks_ e esquisitices. Por causa disto, deverá ser altamente comentada, especialmente se vocês ou outras pessoas pretenderem ler e actualizar o código daqui a 6 meses ou 1 ano. Não deixem vocês ou qualquer outra pessoa estar na posição de *eu-não-escrevi-isto-ó-meu-deus-porquê*.

Por mais simples que CSS seja, há sempre lugar para comentários. Estes poderão ser a explicar:

* a estrutura e/ou função de um ficheiro;
* o objetivo de um conjunto de regras;
* a ideia por trás de um “número mágico”;
* a razão para uma determinada declaração de CSS;
* a ordem das declarações de CSS;
* o processo mental por trás de uma determinada maneira de fazer as coisas.

E eu provavelmente esqueci-me de um monte de outros motivos também. Comentar leva muito pouco tempo quando é feito juntamente com o código, por isso façam-no na hora certa. Voltar a um pedaço de código para comentá-lo não é só completamente irrealista, mas também extremamente irritante.

## Escrever comentários

Idealmente, *qualquer* conjunto de regras de CSS deveria ser precedido por um comentário ao estilo de C, explicando o propósito do bloco de CSS. Este comentário também incluiria explicações numeradas referentes a partes específicas conjunto de regras. Por exemplo:

{% include snippets/comments/01/index.html %}

Basicamente, tudo o que não é óbvio à primeira vista deverá ser comentado. Documentação excessiva é algo que não existe. Lembrem-se de que não conseguem *comentar em demasia*, por isso vão em frente e escrevam comentários para tudo que valer a pena.

Ao comentar uma secção específica de Sass, usem comentários *in-line* em vez de blocos ao estilo de C. Isto fará o comentário invisível no *output*, mesmo no modo expandido durante desenvolvimento.
{% include snippets/comments/02/index.html %}

###### Leitura adicional

* [CSS Guidelines' Commenting section](http://cssguidelin.es/#commenting)

## Documentação

Cada variável, função, *mixin* e *placeholder* que se destina a ser reutilizado em todo o código deverá ser documentado como parte da API global usando [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Três barras (<code>/</code>) necessárias.</p>
</div>

SassDoc tem duas funções principais:

* forçar comentários padronizados usando um sistema baseado em anotações para tudo o que faz parte de uma API pública ou privada;
* ser capaz de gerar uma versão HTML da documentação da API usando qualquer um dos *endpoints* de SassDoc (linha de comandos, Grunt, Gulp, Broccoli, Node…).

{% include images/sassdoc.html %}

Aqui está um exemplo de um _mixin_ documentado extensivamente com SassDoc:

{% include snippets/comments/04/index.html %}

###### Leitura adicional

* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
