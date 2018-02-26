
# Mixins

Os Mixins são uma das funcionalidades mais usadas em todo o Sass. São a chave para reutilização de código e componentes DRY (DRY significa, em Inglês, *Don't Repeat Yourself*. Em português podemos traduzir para "Não te repitas"). Os Mixins têm esta caraterística por uma boa razão: eles permitem que o programador defina estilos que podem ser reutilizados em todas os ficheiros de estilos, sem precisarem de utilizar classes não semânticas como `.float-left`.

Os Mixins podem conter regras de CSS e praticamente tudo o que é permitido num documento Sass.
Podem por exemplo, ter argumentos da mesma forma que uma função. As funcionalidades que um Mixin permite são imensas.

No entanto é necessário termos cuidado para não abusarmos das potencialidades de um Mixin. A palavra-chave neste aspecto é *simplicidade*.
Pode ser tentator escrever mixins extremamente capazes com imensa quantidade de lógica. A isto chama-se excesso de engenharia e é algo de que a maioria dos programadores sofre. Não pensem demasiado sobre o vosso código e acima de tudo mantenham-no simples. Se um mixin tiver mais do que 20 linhas, então devem dividi-lo ou revê-lo.

## Básicos

Tendo em conta o que foi dito acima, os Mixins são extremamente úteis e devem usar algums. Regra geral, se têm um grupo de propriedades de CSS que aparecem juntas por alguma razão e não por coincidência, devem pô-las num mixin.
Por exemplo, o código abaixo, o [micro-clearfix hack de Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) merece ser colocado num mixin:

{% include snippets/mixins/01/index.html %}

Outro exemplo de código que deveria estar num Mixin é definir o tamanho de um elemento, definindo tanto a `largura` como a `altura` ao mesmo tempo. Isto não só vai fazer como o vosso código seja mais fácil de escrever como mais fácil de ler.

{% include snippets/mixins/02/index.html %}

###### Leitura Adicional

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)

## Lista de argumentos

Quando estão a lidar com um mixin que tem um número desconhecido de argumentos, o Sass suporta "argumentos variáveis". "Argumentos variáveis" são os argumentos que estão no fim de um mixin ou de uma declaração de função e são transformados numa lista, à qual vamos chamar `arglist`. Isto é implicitamente usado quando passamos um número de argumentos para um mixin ou uma função cuja assinatura de uma função contém `...`.

{% include snippets/mixins/03/index.html %}

Quando estiverem a construir um mixin que aceita três ou mais argumentos, deves pensar duas vezes antes de os passar como uma lista ou uma mapa só porque é mais fácil do que os passar uma a um.
O Sass é bastante inteligente relativamente aos mixins e a declaração de funções. Tanto que podemos passar uma lista ou um mapa de argumentos como uma arglist para um mixin ou uma função e estes vão ser lidos como uma série de argumentos.

{% include snippets/mixins/04/index.html %}

###### Leitura adicional

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

## Mixins e prefixos de fabricantes

Pode ser tentador definir mixins personalizados para prefixos de fabricantes que são propriedades de CSS não suportadas ou fracamente suportadas. Mas nós não queremos fazer isso. Primeiro, se puderem usar o [Autoprefixer](https://github.com/postcss/autoprefixer), usem-no. O Autoprefixer vai remover código Sass do projeto, vai estar sempre atualizado e vai muito provavelmente fazer um melhor trabalho do que nós a colocar prefixos.

Infelizmente, usar o Autoprefixer nem sempre é uma opção. Se usam [Bourbon](http://bourbon.io/) ou [Compass](http://compass-style.org/), provavelmente já sabem que tanto um como outro oferecem uma coleção de mixins que tratam dos prefixos de fabricantes por nós.

Se não podem usar Autoprefixer nem Bourbon ou Compass, então, apenas nesta situação, podem criar o vosso próprio mixin para colocar prefixos em propriedades de CSS. Mas, por favor, não criem um mixin por propriedade.

{% include snippets/mixins/05/index.html %}

Façam isso de uma forma inteligente.

{% include snippets/mixins/06/index.html %}

Usar este mixin deve ser bastante simples:

{% include snippets/mixins/07/index.html %}

Por favor não se esqueçam que isto não é uma solução feliz. Por exemplo, esta solução não consegue lidar com *polyfills* complexos como os que são necessários para o Flexbox. Neste sentido, usar o Autoprefixer é uma solução muito melhor.

###### Leitura Adicional

* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)
