
# Formatação e sintaxe

Se me perguntarem, a primeira coisa que um guia de estilos deve ser capaz de nos dizer é descrição do aspecto visual que queremos para o nosso código.

Quando vários programadores estão responsáveis por escrever CSS simultaneamente nos mesmos projectos, é apenas uma questão de tempo até que um deles comece a escrever as coisas à sua maneira. Guias de estilo que promovam consistência não só previnem isto, mas ajudam também à leitura e manutenção do código.

Sucintamente, queremos que (desavergonhadamente inspirado nas [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* dois (2) espaços de indentação, em vez de tabs;
* idealmente, linhas de no máximo 80 caráteres
* regras de CSS multi-linha devidamente escritas
* uso significativo de espaço em branco

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// Não
.foo {
    display: block; overflow: hidden;

    padding: 0 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Uma vez que Sass força estes padrões de indentação,
// não há como errar aqui.
.foo
  display: block
  overflow: hidden
  padding: 0 1em
{% endhighlight %}
  </div>
</div>

Não vamos entrar na discussão de organização de ficheiros nesta secção, mas discutiremos este tópico na [secção de arquitetura](#arquitetura).






## Strings

CSS não necessita que strings apareçam entre aspas, nem mesmo as que contêm espaços. Peguemos no exemplo de font-family: não importa se utilizamos aspas no início e no fim.

Graças a isto, Sass *também* não necessita que as strings sejam entre aspas. Melhor ainda (e *felizmente*), uma string entre aspas é estritamente equivalente à sua irmã gémea sem aspas (por ex., `'abc'` é estritamente igual a `abc`).

Dito isto, linguagens que não necessitam de aspas à volta de strings são uma minoria e, desta forma, **strings devem sempre ser escritas com aspas curvas simples (também chamadas plicas)** em Sass (as aspas simples `'` são mais fáceis de escrever do que as duplas `"` em teclados *qwerty*). Para além de consistência com outras linguagens, incluindo Javascript, existem outros motivos para esta escolha:

* nomes de cores são tratados como cores quando não possuem aspas, o que pode levar a conflitos;
* a maior parte dos _highlighters_ de sintaxe dão problemas com strings sem aspas;
* ajuda em geral à leitura
* não existe uma razão válida para não as usar


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif;

// Não
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif;

// Não
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif

// Não
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif

// Não
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>No exemplo anterior, <code>sans-serif</code> não está sob aspas porque representa um valor concreto de CSS.</p>
</div>

URLs também devem seguir a mesma regra:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
.foo {
  background-image: url('/images/kittens.jpg');
}

// Não
.foo {
  background-image: url(/images/kittens.jpg);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
.foo
  background-image: url('/images/kittens.jpg')

// Não
.foo
  background-image: url(/images/kittens.jpg)
{% endhighlight %}
  </div>
</div>



### Leitura adicional

* [All You Ever Need to Know About Sass Interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/HugoGiraudel/SassyStrings)






## Números

Em Sass, um número representa um tipo de dados que inclui tudo desde números sem unidades a medidas, frequências, ângulos, e outros. Isto permite que cálculos sejam efetuados nestas medidas.



### Zeros

Números devem mostrar zeros à esquerda da vírgula em valores abaixo de um (1). Nunca se deve mostrar zeros no final.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
.foo {
  padding: 2em;
  opacity: 0.5;
}

// Não
.foo {
  padding: 2.0em;
  opacity: .5;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
.foo
  padding: 2em
  opacity: 0.5

// Não
.foo
  padding: 2.0em
  opacity: .5
{% endhighlight %}
  </div>
</div>



### Unidades

Quando estamos a lidar com medidas, um valor `0` nunca deve ter unidade.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
$length: 0;

// Não
$length: 0em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
$length: 0

// Não
$length: 0em
{% endhighlight %}
  </div>
</div>

O erro mais comum que me consigo lembrar no que diz respeito a números em Sass, é pensar que as unidades representam strings que podem ser adicionadas livremente a um número. Enquanto isto pode parecer verdadeiro, não é como as unidades funcionam. Pensem em unidades como símbolos algébricos. Por exemplo, no mundo real, multiplicar 5 centímetros por 5 centímetros resulta em 25 centímetros quadrados. A mesma lógica aplica-se em Sass.

Para adicionar uma unidade a um número, devemos multiplicar este número por *1 unidade*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42;

// Sim
$length: $value * 1px;

// Não
$length: $value + px;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42

// Sim
$length: $value * 1px

// Não
$length: $value + px
{% endhighlight %}
  </div>
</div>

Reparem que adicionar *0 dessa mesma unidade* também funciona, mas recomendo o primeiro método, uma vez que adicionar *0 unidades* é algo confuso. Na verdade, quando tentamos converter um número para outra unidade comparável, adicionar 0 não irá funcionar.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42 + 0px;
// -> 42px

$value: 1in + 0px;
// -> 1in

$value: 0px + 1in;
// -> 96px
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42 + 0px
// -> 42px

$value: 1in + 0px
// -> 1in

$value: 0px + 1in
// -> 96px
{% endhighlight %}
  </div>
</div>

No final de contas, depende tudo do que estivermos a tentar obter. Lembrem-se apenas que adicionar o número-unidade como string não é uma boa prática.

Para remover a unidade de um valor, temos que dividi-lo por *uma unidade do seu tipo*.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$length: 42px;

// Sim
$value: $length / 1px;

// Não
$value: str-slice($length + unquote(''), 1, 2);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$length: 42px

// Sim
$value: $length / 1px

// Não
$value: str-slice($length + unquote(''), 1, 2)
{% endhighlight %}
  </div>
</div>

Adicionar uma unidade como string a um número resulta numa string, prevenindo qualquer operação adicional no seu valor. Cortar a parte numérica de um número com uma unidade também resulta numa string, o que não é o desejado.



### Cálculos

**Cálculos numéricos de maior prioridade devem sempre estar presentes entre parênteses**. Isto não só melhora significativamente a sua leitura, como evita que aconteçam alguns casos extremos como forçar Sass a avaliar e computar o conteúdo entre parênteses.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
.foo {
  width: (100% / 3);
}

// Não
.foo {
  width: 100% / 3;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
.foo
  width: (100% / 3)

// Não
.foo
  width: 100% / 3
{% endhighlight %}
  </div>
</div>



### Números mágicos

"Números mágicos" (Magic number) diz respeito a um [antigo termo](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) computacional para *constante numérica não definida*. Basicamente, é um número aleatório que simplesmente parece *funcionar por magia* num caso específico e que não tem qualquer lógica por trás dele.

Escusado será dizer que **números mágicos são uma praga e devem ser evitados a todo o custo**. Quando não conseguirem encontrar uma explicação para um determinado número funcionar, escrevam pelo menos um comentário que explique como chegaram a ele e porque é que acham que ele funciona. Admitir que não sabemos porque algo funciona é sempre mais útil do que deixar o programador seguinte tentar adivinhar o que se passa, sem qualquer pista.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * 1. Número mágico. Este é o valor mais baixo que encontrei para alinhar o topo
 * de `.foo` com o elemento pai. Idealmente devíamos corrigir isto.
 */
.foo {
  top: 0.327em; /* 1 */
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * 1. Número mágico. Este é o valor mais baixo que encontrei para alinhar o topo
 * de `.foo` com o elemento pai. Idealmente devíamos corrigir isto.
 */
.foo
  top: 0.327em /* 1 */
{% endhighlight %}
  </div>
</div>



### Leitura adicional

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](http://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)






## Cores

Cores ocupam um lugar muito importante em CSS. Naturalmente, Sass acaba por se tornar um aliado poderoso no que toca à manipulação de cores, especialmente porque providencia um punhado de [funções poderosas](http://sass-lang.com/documentation/Sass/Script/Functions.html).



### Formatos de cores

De maneira a tornar cores em Sass o mais simples possível, o meu conselho é que respeitem a seguinte ordem de preferência para formatores de cores:

In order to make colors as simple as they can be, my advice would be to respect the following order of preference for color formats:

1. [Chaves de cores CSS](http://www.w3.org/TR/css3-color/#svg-color);
1. [Anotação HSL](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [Anotação RGB](http://en.wikipedia.org/wiki/RGB_color_model);
1. Anotação hexadecimal, preferencialmente em minúsculas.

Para começar, as chaves de cor normalmente falam por si só. A representação HSL é não só a mais fácil para o cérebro humano compreender <sup>sem citação<sup>, como também facilita aos autores das folhas de estilo a manipulação das cores, ajustando apenas os valores individuais de matiz, saturação e valor. RGB ainda tem como vantagem o facto de mostrar imediatamente se a cor tem um tom mais azulado, esverdejado ou avermelhado, mas não facilita nada a construção de uma nova com com as três partes. Por último, hexadecimal é quase indecifrável para o nosso cérebro.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
.foo {
  color: red;
}

// Não
.foo {
  color: #FF0000;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
.foo
  color: red

// Não
.foo
  color: #FF0000
{% endhighlight %}
  </div>
</div>

Quando usarem a anotação HSL ou RGB, adicionem sempre um espaço simples depois da vírgula (`,`) e removam os espaços entre os parênteses (`(`, `)`) e o conteúdo.

When using HSL or RGB notation, always add a single space after a comma (`,`) and no space between parentheses (`(`, `)`) and content.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
.foo {
  color: rgba(0, 0, 0, 0.1);
  background: hsl(300, 100%, 100%);
}

// Não
.foo {
  color: rgba(0,0,0,0.1);
  background: hsl( 300, 100%, 100% );
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
.foo
  color: rgba(0, 0, 0, 0.1)
  background: hsl(300, 100%, 100%)

// Não
.foo
  color: rgba(0,0,0,0.1)
  background: hsl( 300, 100%, 100% )
{% endhighlight %}
  </div>
</div>



### Cores e variáveis

No caso de utilizarmos uma cor mais que uma vez, será provavelmente útil guardá-la numa variável cujo nome diga algo sobre essa cor.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$sass-pink: #c69;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$sass-pink: #c69
{% endhighlight %}
  </div>
</div>

Assim podemos usar esta variável onde for necessário. No entanto, se o seu uso estiver demasiado preso a um tema, eu não recomendaria utilizar a variável desta forma. Em vez disso, devemos guardá-la numa variável cujo nome explique como deve ser utilizada.

Now you are free to use this variable wherever you want. However, if your usage is strongly tied to a theme, I would advise against using the variable as is. Instead, store it in another variable with a name explaining how it should be used.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$main-theme-color: $sass-pink;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$main-theme-color: $sass-pink
{% endhighlight %}
  </div>
</div>

Assim previne-se que a mudança de um tema leve a algo como `$sass-pink: blue`.



### Clarear e Escurecer cores

Tanto o clarear [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) como o escurecer [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) representam funções que permitem manipular a luz de uma cor no espaço HSL adicionando ou subtraindo ao valor do espaço HSL. Basicamente, representam atalhos para o parâmetro `$lightness` do método de ajuste de cor [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

É importante referir que estas funções muitas vezes não geral os resultados que se esperaria. Por outro lado, a função de mistura [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) é uma boa forma de escurecer ou clarear uma cor misturando-a com branco ou preto.

A vantagem de usar a `mix` em vez das primeiras funções mencionadas é que esta fará com que a cor tenda progressivamente para preto (ou branco) à medida que subtraímos a proporção da cor, enquanto que `darken` e `lighten` irão rapidamente esgotar a cor aos extremos de branco ou preto.

<figure role="group">
  <img src="/assets/images/lighten-darken-mix.png" alt="Illustration of the difference between lighten/darken and mix Sass functions" />
  <figcaption>Diferenças entre <code>lighten</code>/<code>darken</code> e <code>mix</code> por <a href="http://codepen.io/KatieK2/pen/tejhz/" target="_blank">KatieK</a></figcaption>
</figure>

Se não quiserem escrever a função `mix` todas as vezes, podem criar duas funções fáceis-de-usar `tint` e `shade` (que já fazem parte de [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) que fazem essencialmente o mesmo:


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Clarear ligeiramente uma cor
/// @access public
/// @param {Color} $color - cor
/// @param {Number} $percentage - percentagem da `$color` na cor devolvida
/// @return {Color}
@function tint($color, $percentage) {
  @return mix($color, white, $percentage);
}

/// Escurecer ligeiramente uma cor
/// @access public
/// @param {Color} $color - cor
/// @param {Number} $percentage - percentagem da `$color` na cor devolvida
/// @return {Color}
@function shade($color, $percentage) {
  @return mix($color, black, $percentage);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Clarear ligeiramente uma cor
/// @access public
/// @param {Color} $color - cor
/// @param {Number} $percentage - percentagem da `$color` na cor devolvida
/// @return {Color}
@function tint($color, $percentage)
  @return mix($color, white, $percentage)

/// Escurecer ligeiramente uma cor
/// @access public
/// @param {Color} $color - cor
/// @param {Number} $percentage - percentagem da `$color` na cor devolvida
/// @return {Color}
@function shade($color, $percentage)
  @return mix($color, black, $percentage)
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>A função<a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> permite efetuar um escalamento das propriedades mais fluído tendo em conta o quão alto ou baixo o seu valor já é. Deverá oferecer resultados que são tão agradáveis como o `mix` mas com uma convenção mais clara. O fator de escada não é exactamente o mesmo, no entanto.</p>
</div>



### Leitura adicional

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don't Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)






## Lists

Lists are the Sass equivalent of arrays. A list is a flat data structure (unlike [maps](#maps)) intended to store values of any type (including lists, leading to nested lists).

Lists should respect the following guidelines:

* unless it is too long to fit on an 80-character line, always display it on a single line;
* unless it is used as is for CSS purposes, always use comma as a delimiter;
* unless it is empty or nested within another list, never write the parenthesis;
* never add a trailing comma.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
$font-stack: 'Helvetica', 'Arial', sans-serif;

// Não
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif;

// Não
$font-stack: 'Helvetica' 'Arial' sans-serif;

// Não
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Não
$font-stack: ('Helvetica', 'Arial', sans-serif,);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$font-stack: 'Helvetica', 'Arial', sans-serif

// Não (since it is not supported)
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif

// Não
$font-stack: 'Helvetica' 'Arial' sans-serif

// Não
$font-stack: ('Helvetica', 'Arial', sans-serif)

// Não
$font-stack: ('Helvetica', 'Arial', sans-serif,)
{% endhighlight %}
  </div>
</div>

When adding new items to a list, always use the provided API. Do not attempt to add new items manually.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$shadows: 0 42px 13.37px hotpink;

// Yep
$shadows: append($shadows, $shadow, comma);

// Não
$shadows: $shadows, $shadow;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$shadows: 0 42px 13.37px hotpink

// Yep
$shadows: append($shadows, $shadow, comma)

// Não
$shadows: $shadows, $shadow
{% endhighlight %}
  </div>
</div>



### Further reading

* [SassyLists](http://sassylists.com)






## Maps

Since Sass 3.3, stylesheet authors can define maps &mdash; the Sass term for associative arrays, hashes or even JavaScript objects. A map is a data structure mapping keys (that can be any data type, including maps although I wouldn't recommend it) to values of any type.

Maps should be written as follows:

* space after the colon (`:`);
* opening brace (`(`) on the same line as the colon (`:`);
* **quoted keys** if they are strings (which represents 99% of the cases);
* each key/value pair on its own new line;
* comma (`,`) at the end of each key/value;
* **trailing comma** (`,`) on last item to make it easier to add, remove or reorder items;
* closing brace (`)`) on its own new line;
* no space or new line between closing brace (`)`) and semi-colon (`;`).

Illustration:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
);

// Não
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$breakpoints: ('small': 767px, 'medium': 992px, 'large': 1200px,)

// Não
$breakpoints: ( 'small': 767px, 'medium': 992px, 'large': 1200px )

// Não
$breakpoints: (small: 767px, medium: 992px, large: 1200px,)

// Não (since it is not supported)
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
)
{% endhighlight %}
  </div>
</div>



### Debugging a Sass map

If you ever find yourself lost, wondering what kind of crazy magic is happening in a Sass map, worry not because there is still a way to be saved.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin debug-map($map) {
  @at-root {
    @debug-map {
      __toString__: inspect($map);
      __length__: length($map);
      __depth__: if(function-exists('map-depth'), map-depth($map), null);
      __keys__: map-keys($map);
      __properties__ {
        @each $key, $value in $map {
          #{'(' + type-of($value) + ') ' + $key}: inspect($value);
        }
      }
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=debug-map($map)
  @at-root
    @debug-map
      __toString__: inspect($map)
      __length__: length($map)
      __depth__: if(function-exists('map-depth'), map-depth($map), null)
      __keys__: map-keys($map)
      __properties__
        @each $key, $value in $map
          #{'(' + type-of($value) + ') ' + $key}: inspect($value)
{% endhighlight %}
  </div>
</div>

If you are interested in knowing the depth of the map, add the following function. The mixin will display it automatically.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Compute the maximum depth of a map
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map) {
  $level: 1;

  @each $key, $value in $map {
    @if type-of($value) == 'map' {
      $level: max(map-depth($value) + 1, $level);
    }
  }

  @return $level;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Compute the maximum depth of a map
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map)
  $level: 1

  @each $key, $value in $map
    @if type-of($value) == 'map'
      $level: max(map-depth($value) + 1, $level)

  @return $level;
{% endhighlight %}
  </div>
</div>



### Further reading

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](http://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)






## CSS Ruleset

At this point, this is mostly revising what everybody knows, but here is how a CSS ruleset should be written (at least, according to most guidelines, including [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset)):

* related selectors on the same line; unrelated selectors on new lines;
* the opening brace (`{`) spaced from the last selector by a single space;
* each declaration on its own new line;
* a space after the colon (`:`);
* a trailing semi-colon (`;`) at the end of all declarations;
* the closing brace (`}`) on its own new line;
* a new line after the closing brace `}`.

Illustration:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// Não
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
    margin: 0 auto }
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo, .foo-bar,
.baz
  display: block
  overflow: hidden
  margin: 0 auto

// Não
.foo,
.foo-bar, .baz
    display: block
    overflow: hidden
    margin: 0 auto
{% endhighlight %}
  </div>
</div>

Adding to those CSS-related guidelines, we want to pay attention to:

* local variables being declared before any declarations, then spaced from declarations by a new line;
* mixin calls with no `@content` coming before any declaration;
* nested selectors always coming after a new line;
* mixin calls with `@content` coming after any nested selector;
* no new line before a closing brace (`}`).

Illustration:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo, .foo-bar,
.baz {
  $length: 42em;

  @include ellipsis;
  @include size($length);
  display: block;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  @include respond-to('small') {
    overflow: visible;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo, .foo-bar,
.baz
  $length: 42em

  +ellipsis
  +size($length)
  display: block
  overflow: hidden
  margin: 0 auto

  &:hover
    color: red

  +respond-to('small')
    overflow: visible
{% endhighlight %}
  </div>
</div>



### Further reading

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)






## Declaration Sorting

I cannot think of many topics where opinions are as divided as they are regarding declaration sorting in CSS. Concretely, there are two factions here:

* sticking to the alphabetical order;
* ordering declarations by type (position, display, colors, font, miscellaneous...).

There are pros and cons for both ways. On one hand, alphabetical order is universal (at least for languages using the latin alphabet) so there is no argument about sorting one property before another. However, it seems extremely weird to me to see properties such as `bottom` and `top` not right next to each other. Why would animations should appear before the display type? There are a lot of oddities with alphabetical ordering.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  background: black;
  bottom: 0;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  height: 100px;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 100px;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  background: black
  bottom: 0
  color: white
  font-weight: bold
  font-size: 1.5em
  height: 100px
  overflow: hidden
  position: absolute
  right: 0
  width: 100px
{% endhighlight %}
  </div>
</div>

On the other hand, ordering properties by type makes perfect sense. Every font-related declarations are gathered, `top` and `bottom` are reunited and reading a ruleset kind of feels like reading a short story. But unless you stick to some conventions like [Idiomatic CSS](https://github.com/necolas/idiomatic-css), there is a lot of room for interpretation in this way of doing things. Where would `white-space` go: font or display? Where does belong `overflow` exactly? What is the property order within a group (it could be alphabetically, oh the irony)?

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  height: 100px;
  width: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  height: 100px
  width: 100px
  overflow: hidden
  position: absolute
  bottom: 0
  right: 0
  background: black
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

There is also another interesting subtree of type ordering called [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), that seems to be quite popular as well. Basically, Concentric CSS relies on the box-model to define an order: starts outside, moves inward.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: black;
  overflow: hidden;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  width: 100px
  height: 100px
  position: absolute
  right: 0
  bottom: 0
  background: black
  overflow: hidden
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

I must say I cannot decide myself. A [recent poll on CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) determined that over 45% developers order their declarations by type against 14% alphabetically. Also, there are 39% that go full random, including myself.

<figure role="group">
  <img src="/assets/images/css_order_chart.png" alt="Chart showing how developers order their CSS declarations" />
  <figcaption>Chart showing how developers order their CSS declarations</figcaption>
</figure>

Because of this, I will not impose a choice in this styleguide. Pick the one you prefer, as long as you are consistent throughout your stylesheets.

<div class="note">
  <p>A <a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">recent study</a> shows that using <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (which uses <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">type ordering</a>) for sorting CSS declarations ends up shortening the average file size under Gzip compression by 2.7%, compared to 1.3% when sorting alphabetically.</p>
</div>



### Further reading

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)






## Selector Nesting

One particular feature Sass provides that is being overly misused by many developers is *selector nesting*. Selector nesting offers a way for stylesheet authors to compute long selectors by nesting shorter selectors within each others.

### General rule

For instance, the following Sass nesting:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  .bar
    &:hover
      color: red
{% endhighlight %}
  </div>
</div>

... will generate this CSS:

{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}

Along the same lines, since Sass 3.3 it is possible to use the current selector reference (`&`) to generate advanced selectors. For instance:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  &-bar {
    color: red;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  &-bar
    color: red
{% endhighlight %}
  </div>
</div>

... will generate this CSS:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo-bar {
  color: red;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo-bar
  color: red
{% endhighlight %}
  </div>
</div>

This method is often used along with [BEM naming conventions](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to generate `.block__element` and `.block--modifier` selectors based on the original selector (i.e. `.block` in this case).

<div class="note">
  <p>While it might be anecdotal, generating new selectors from the current selector reference (<code>&</code>) makes those selectors unsearchable in the codebase since they do not exist per se.</p>
</div>

The problem with selector nesting is that it ultimately makes code more difficult to read. One has to mentally compute the resulting selector out of the indentation levels; it is not always quite obvious what the CSS will end up being.

This statement becomes truer as selectors get longer and references to the current selector (`&`) more frequent. At some point, the risk of losing track and not being able to understand what's going on anymore is so high that it is not worth it.

To prevent such a situation, we **avoid selector nesting as much as possible**. However, there are obviously a few exceptions to this rule.

### Exceptions

For starters, it is allowed and even recommended to nest pseudo-classes and pseudo-elements within the initial selector.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: 'pseudo-element';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  &:hover
    color: green

  &::before
    content: 'pseudo-element'
{% endhighlight %}
  </div>
</div>

Using selector nesting for pseudo-classes and pseudo-elements not only makes sense (because it deals with closely related selectors), it also helps keep everything about a component at the same place.

Also, when using component-agnostic state classes such as `.is-active`, it is perfectly fine to nest it under the component's selector to keep things tidy.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  &.is-active {
    font-weight: bold;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  &.is-active
    font-weight: bold
{% endhighlight %}
  </div>
</div>

Last but not least, when styling an element because it happens to be contained within another specific element, it is also fine to use nesting to keep everything about the component at the same place.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  .no-opacity & {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  .no-opacity &
    display: none
{% endhighlight %}
  </div>
</div>

When working with unexperienced developers, a selector such as `.no-opacity &` might look a little weird. To prevent any confusion, you can build a very short mixin that transform this odd syntax into an explicit API.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper mixin to provide simple API to selector nesting
/// @param {String} $selector - Selector
@mixin when-inside($selector) {
  #{$selector} & {
    @content;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Helper mixin to provide simple API to selector nesting
/// @param {String} $selector - Selector
=when-inside($selector) {
  #{$selector} &
    @content
}
{% endhighlight %}
  </div>
</div>

Rewriting our previous example, it would look like this:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  @include when-inside('.no-opacity') {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  +when-inside('.no-opacity')
    display: none
{% endhighlight %}
  </div>
</div>

As with everything, the specifics are somewhat irrelevant, consistency is key. If you feel fully confident with selector nesting, then use selector nesting. Just make sure your whole team is okay with that.






### Further reading

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)



