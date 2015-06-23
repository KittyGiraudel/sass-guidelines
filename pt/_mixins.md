
# Mixins

Os Mixins são uma das funcionalidades mais usadas em todo o Sass. São a chave para reutilização de código e componentes DRY (DRY significa, em Inglês, Don't Repeat Yourself. Em português podemos traduzir para "Não te repitas"). Os Mixins têm esta caraterística por uma boa razão: eles permitem que o programador defina estilos que podem ser reutilizados em todas os ficheiros de estilos, sem precisarem de utilizar classes não semânticas como `.float-left`.

Os Mixins podem conter regras de CSS e praticamente tudo o que é permitido num documento Sass.
Podem por exemplo, ter argumentos da mesma forma que uma função. As funcionalidades que um Mixin permite são imensas.

No entanto é necessário termos cuidado para não abusarmos das potencialidades de um Mixin. A palavra-chave neste aspecto é *simplicidade*.
Pode ser tentator escrever mixins extremamente capazes com imensa quantidade de lógica. A isto chama-se excesso de engenharia e é algo de que a maioria dos programadores sofre. Não pensem demasiado sobre o vosso código e acima de tudo mantenham-no simples. Se um mixin tiver mais do que 20 linhas, então devem dividi-lo ou revê-lo.



## Básicos
Tendo em conta o que foi dito acima, os Mixins são extremamente úteis e devem usar algums. Regra geral, se têm um grupo de propriedades de CSS que aparecem juntas por alguma razão e não por coincidência, devem pô-las num mixin.
Por exemplo, o código abaixo, o [micro-clearfix hack de Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) merece ser colocado num mixin:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Ajudante para limpar floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Ajudante para limpar floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix
  &::after
    content: ''
    display: table
    clear: both
{% endhighlight %}
  </div>
</div>

Outro exemplo de código que deveria estar num Mixin é definir o tamanho de um elemento, definindo tanto a `largura` como a `altura` ao mesmo tempo. Isto não só vai fazer como o vosso código seja mais fácil de escrever como mais fácil de ler.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Ajudante para dar tamanho a um elemento
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Ajudante para dar tamanho a um elemento
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Leitura Adicional

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)






## List da argumentos

Quando estão a lidar com um mixin que tem um número desconhecido de argumentos, o Sass suporta "argumentos variáveis". "Argumentos variáveis" são os argumentos que estão no fim de um mixin ou de uma declaração de função e são transformados numa lista, à qual vamos chamar `arglist`. Isto é impliciatemnete usado quando ao passar um número de argumentos para um mixin ou uma função cuja assinatura de uma função contem `...`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin shadows($shadows...) {
  // type-of($shadows) == 'arglist'
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=shadows($shadows...)
  // type-of($shadows) == 'arglist'
  // ...
{% endhighlight %}
  </div>
</div>

Quando estiverem a contruir um mixin que aceita três ou mais argumentos, deves pensar duas vezes antes de os passar como uma lista ou uma mapa só porque é mais fácil do que os passar uma a um.
O Sass é bastante inteligente relativamente aos mixins e a declaração de funções. Tanto que podes passar uma lista ou um mapa de argumentos como uma arglist para um mixin ou uma função e estes vão ser lidos como uma série de argumentos.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin exemplo($a, $b, $c) {
  // ...
}

// Sim
@include exemplo(true, 42, 'gatinhos');

// Sim mas não
$parametros: true, 42, 'gatinhos';
$valor: exemplo(nth($parametros, 1), nth($parametros, 2), nth($parametros, 3));

// Sim
$parametros: true, 42, 'gatinhos';
@include dummy($parametros...);

// Sim
$parametros: (
  'c': 'gatinhos',
  'a': true,
  'b': 42
);
@include exemplo($parametros...);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=exemplo($a, $b, $c)
  // ...

// Sim
+exemplo(true, 42, 'gatinhos')

// Sim mas não
$parametros: true, 42, 'gatinhos'
$valor: exemplo(nth($parametros, 1), nth($parametros, 2), nth($parametros, 3))

// Sim
$parametros: true, 42, 'gatinhos'
+exemplo($parametros...)

// Sim
$parametros: ( 'c': 'gatinhos', 'a': true, 'b': 42, )
+exemplo(parametros...)
{% endhighlight %}
  </div>
</div>



### Leitura adicional

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)






## Mixins e prefixos de fabricantes

Pode ser tentador definir mixins personalizados para prefixos de fabricantes que são propriedades de CSS não suportadas ou fracamente suportadas. Mas nós não queremos fazer isso. Primeiro, se puderem usar o [Autoprefixer](https://github.com/postcss/autoprefixer), usam-no. O Autoprefixer vai remover código Sass do teu projecto, vai estar sempre actualizado e vai muito provavelmente fazer um melhor trabalho do que a colocar prefixos.

Infelizmente, usar o Autoprefixer nem sempre é uma opção. Se usam [Bourbon](http://bourbon.io/) ou [Compass](http://compass-style.org/), provavelmente já sabem que tanto um como outro oferecem uma collecção de mixins que tratam dos prefixos de fabricantes por ti. Usa esses.

Se não podem usar Autoprefixer nem Bourbon ou Compass, então, apenas nesta situação, podem criar o vosso próprio mixin para colocar prefixos em propriedades de CSS. Mas, por favor, não criem um mixin por propriedade.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Não
@mixin transform($valor) {
  -webkit-transform: $valor;
  -moz-transform: $valor;
  transform: $valor;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Não
=transform($valor)
  -webkit-transform: $valor
  -moz-transform: $valor
  transform: $valor
{% endhighlight %}
  </div>
</div>

Façam isso de uma forma inteligente.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Ajudante para expor prefixos de fabricantes
/// @access public
/// @author HugoGiraudel
/// @param {String} $propriedade - Propriedade de CSS sem prefixo
/// @param {*} $valor - valor de CSS crú
/// @param {List} $prefixos - Lista de prefixos a serem expostos
@mixin prefixo($propriedade, $valor, $prefixos: ()) {
  @each $prefixo in $prefixos {
    -#{$prefixo}-#{$propriedade}: $valor;
  }

  #{$propriedade}: $valor;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Ajudante para expor prefixos de fabricantes
/// @access public
/// @author HugoGiraudel
/// @param {String} $propriedade - Propriedade de CSS sem prefixo
/// @param {*} $valor - valor de CSS crú
/// @param {List} $prefixos - Lista de prefixos a serem expostos
=prefixo($propriedade, $valor, $prefixos: ()) {
  @each $prefixo in $prefixos {
    -#{$prefixo}-#{$propriedade}: $valor;
  }

  #{$propriedade}: $valor;
{% endhighlight %}
  </div>
</div>

Usar este mixin deve ser bastante simples:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  @include prefixo(transform, rotate(90deg), webkit ms);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  +prefixo(transform, rotate(90deg), webkit ms)
{% endhighlight %}
  </div>
</div>

Por favor não se esquecam que isto não é uma solução feliz. Por exemplo, esta solução não consegue lidar com polyfills complexos como os que são necessários para o Flexbox. Neste sentido, usar o Autoprefixer é uma solução muito melhor.



### Leitura Adicional

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)
