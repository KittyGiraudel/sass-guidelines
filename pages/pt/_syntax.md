
# Formatação e sintaxe

Se me perguntarem a mim, diria que a primeira coisa que um guia de estilo deve ser capaz de nos dizer é descrição do aspecto visual que queremos para o nosso código.

Quando vários programadores estão responsáveis por escrever CSS simultaneamente nos mesmos projectos, é apenas uma questão de tempo até que um deles comece a escrever as coisas à sua maneira. Guias de estilo que promovam consistência não só previnem isto, mas ajudam também à leitura e manutenção do código.

Sucintamente, queremos que (desavergonhadamente inspirado nas [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* dois (2) espaços de indentação, em vez de tabs;
* idealmente, linhas de no máximo 80 caráteres
* regras de CSS multi-linha devidamente escritas
* uso significativo de espaço em branco

{% include snippets/syntax/01/index.html %}

## Strings

Acreditem ou não, strings desempenham um papel muito importante tanto em ecosistemas CSS e Sass. A maior parte dos valores de CSS são medidas ou identificadores, por isso é bastante crucial seguir algumas regras.

### Codificação

Para evitar algum eventual problema com codificação de carateres, é recomendado forçar o modo [UTF-8](https://pt.wikipedia.org/wiki/UTF-8) na principal [folhas de estilo](#ficheiro-principal), utilizando a directiva `@charset`. Certifiquem-se que é o primeiro elemento da folhas de estilo e que não existe mais nenhum caráter antes deste.

{% include snippets/syntax/02/index.html %}

### Aspas

CSS não necessita que strings apareçam entre aspas, nem mesmo as que contêm espaços. Peguemos no exemplo de font-family: não importa se utilizamos aspas no início e no fim.

Graças a isto, Sass *também* não necessita que as strings sejam entre aspas. Melhor ainda (e *felizmente*), uma string entre aspas é estritamente equivalente à sua irmã gémea sem aspas (por ex., `'abc'` é estritamente igual a `abc`).

Dito isto, linguagens que não necessitam de aspas à volta de strings são uma minoria e, desta forma, **strings devem sempre ser escritas com aspas curvas simples (também chamadas plicas)** em Sass (as aspas simples `'` são mais fáceis de escrever do que as duplas `"` em teclados *qwerty*). Para além de consistência com outras linguagens, incluindo JavaScript, existem outros motivos para esta escolha:

* nomes de cores são tratados como cores quando não possuem aspas, o que pode levar a conflitos;
* a maior parte dos _highlighters_ de sintaxe dão problemas com strings sem aspas;
* ajuda em geral à leitura;
* não existe uma razão válida para não as usar;

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>De acordo com as especificações CSS, a diretiva <code>@charset</code> deve ser declarada em aspas duplas para <a href="http://www.w3.org/TR/css3-syntax/#charset-rule">ser considerada válida</a>. Contudo, o Sass já faz isso quando está compilando CSS, então, a forma como você declarou não tem impacto, no resultado final. Portanto, podes usar aspas simples, mesmo para a <code>@charset</code>.</p>
</div>

### Strings como valores CSS

Valores específicos de CSS (identificadores), tais como `initial` ou `sans-serif` não necessitam de aspas. É verdade que a declaração `font-family: sans-serif` vai falhar silenciosamente porque o CSS está à espera de encontrar um indentificador, não uma string envolta em aspas. Deste modo, não utilizamos aspas nestes valores.

{% include snippets/syntax/04/index.html %}

Desta forma, podemos fazer uma distinção entre strings que pretendemos utilizar como valores de CSS (identificadores) como no exemplo anterior, e strings quando nos referimos aos tipos de dados em Sass, como por exemplo índices de mapas.

Não utilizamos aspas no primeiro, mas no segundo exemplo utilizamos aspas simples.

### Strings com aspas

Se uma string contém uma ou várias aspas, vale a pena considerar envolver a string com aspas duplas (`"`), de modo a evitar fazer o `escaping` de carateres dentro da string.

{% include snippets/syntax/05/index.html %}

### URLs

URLs devem ser envolvidos em aspas:

{% include snippets/syntax/06/index.html %}

## Números

Em Sass, um número representa um tipo de dados que inclui tudo desde números sem unidades a medidas, a frequências, ângulos, e outros. Isto permite que cálculos sejam efetuados nestas medidas.

### Zeros

Números devem mostrar zeros à esquerda da vírgula em valores abaixo de um (1). Nunca se deve mostrar zeros no final.

{% include snippets/syntax/07/index.html %}

<div class="note">
  <p>No Sublime Text e outros editores que permitem busca e substituição de expressões regulares, é muito fácil adicionar um zero à esquerda a quase todos (se não todos) números quebrados. Simplesmente, substitua <code>\s+\.(\d+)</code> por <code> 0.$1</code>. Além disso, não esqueça o espaço antes do <code>0</code>.</p>
</div>

### Unidades

Quando estamos a lidar com medidas, um valor `0` nunca deve ter unidade.

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>Tome cuidado, pois, esta prática é limitada a cumprimentos, apenas. Ter um zero sem unidade de medida para uma propriedade de tempo (como <code>transition-delay</code>) não é permitido. Teoricamente, se um zero sem unidade de medida é especificado para uma duração, a declaração é considerada invalida e será descartada. Contudo, nem todos os navegadores são tão rigorosos, apesar de alguns serem. Resumindo a história: somente omita unidades de cumprimento.</p>
</div>

O erro mais comum que me consigo lembrar no que diz respeito a números em Sass é pensar que as unidades representam `strings` que podem ser adicionadas livremente a um número. Enquanto isto pode parecer correto, não é como as unidades funcionam. Pensem em unidades como símbolos algébricos. Por exemplo, no mundo real, multiplicar 5 centímetros por 5 centímetros resulta em 25 centímetros quadrados. A mesma lógica aplica-se em Sass.

Para adicionar uma unidade a um número, devemos multiplicar este número por *1 unidade*.

{% include snippets/syntax/09/index.html %}

Reparem que adicionar *0 dessa mesma unidade* também funciona, mas recomendo o primeiro método, uma vez que adicionar *0 unidades* é algo confuso. Na verdade, quando tentamos converter um número para outra unidade comparável, adicionar 0 não irá funcionar. Leia mais sobre isso, [neste artigo](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/).

{% include snippets/syntax/10/index.html %}

No final de contas, depende tudo do que estivermos a tentar obter. Lembrem-se apenas que adicionar o número-unidade como string não é uma boa prática.

Para remover a unidade de um valor, temos que dividi-lo por *uma unidade do seu tipo*.

{% include snippets/syntax/11/index.html %}

Adicionar uma unidade como string a um número resulta numa string, prevenindo qualquer operação adicional no seu valor. Cortar a parte numérica de um número com uma unidade também resulta numa string, o que não é o desejado. [Use cumprimentos, não strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/).

### Cálculos

**Cálculos numéricos de maior prioridade devem sempre estar presentes entre parênteses**. Isto não só melhora significativamente a sua leitura, como evita que aconteçam alguns casos extremos como forçar Sass a avaliar e computar o conteúdo entre parênteses.

{% include snippets/syntax/12/index.html %}

### Números mágicos

"Números mágicos" (*magic numbers*) dizem respeito a um [termo antigo](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) computacional para *constante numérica não definida*. Basicamente, é um número aleatório que simplesmente parece *funcionar por magia* num caso específico e que não tem qualquer lógica por detrás dele.

Escusado será dizer que **números mágicos são uma praga e devem ser evitados a todo o custo**. Quando não conseguirem encontrar uma explicação para um determinado número funcionar, escrevam pelo menos um comentário que explique como chegaram a ele e porque é que acham que ele funciona. Admitir que não sabemos porque algo funciona é sempre mais útil do que deixar o programador seguinte tentar adivinhar o que se passa, sem qualquer pista.

{% include snippets/syntax/13/index.html %}

Sobre o tema, CSS-Tricks tem um [artigo maravilhoso](http://css-tricks.com/magic-numbers-in-css/) sobre números mágicos em CSS que eu te encorajo a ler.

## Cores

Cores ocupam um lugar muito importante em CSS. Naturalmente, Sass acaba por se tornar um aliado poderoso no que toca à manipulação de cores, especialmente porque providencia um punhado de [funções úteis para tal](http://sass-lang.com/documentation/Sass/Script/Functions.html).

Sass é tão bom na hora de manipular cores que artigos tem florescidos por toda parte da internet, exatamente sobre este tema. Por isso, posso recomendar algumas leituras:

* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)

### Formatos de cores

De maneira a tornar cores em Sass o mais simples possível, o meu conselho é que respeitem a seguinte ordem de preferência para formatação de cores:

1. [Anotação HSL](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [Anotação RGB](http://en.wikipedia.org/wiki/RGB_color_model);
1. Anotação hexadecimal (minúscula e encurtada).

Keywords de cores CSS não devem ser usadas, a não ser para uma rápida prototipagem. De fato, elas são palavras reais, mas algumas fazem um trabalho péssimo em descrever a cor que representam, especialmente para falantes não nativos. Desse modo, keywords não são perfeitamente semânticas. Por exemplo: `grey` é, na verdade, mais escura que `darkgrey`. Além disso, a confusão entre `grey` e `gray`, pode levar a usos inconsistentes desta cor.

A representação HSL não é somente a mais fácil para o cérebro humano compreender<sup>[citation needed]</sup>, ela também facilita que autores das folhas de estilos troquem a cor ajustando matiz (hue), saturação e luminosidade (lightness), individualmente.

RGB tem a vantagem de mostrar de cara se uma cor é mais vermelha, verde ou azul. Portanto, isso pode ser melhor que HSL em algumas situações, especialmente quando é necessário um vermelho, verde ou azul puro. Contudo, isso não facilita a criação de uma cor à partir das três partes.

Finalmente, a notação hexadecimal é próxima do indecifrável para a mente humana. Use isso como um último recurso, se você precisar.

{% include snippets/syntax/14/index.html %}

Quando usarem a anotação HSL ou RGB, adicionem sempre um espaço simples depois da vírgula (`,`) e removam os espaços entre os parênteses (`(`, `)`) e o conteúdo.

{% include snippets/syntax/15/index.html %}

### Cores e variáveis

No caso de utilizarmos uma cor mais que uma vez, será provavelmente útil guardá-la numa variável cujo nome diga algo sobre essa cor.

{% include snippets/syntax/16/index.html %}

Assim podemos usar esta variável onde for necessário. No entanto, se o seu uso estiver demasiado preso a um tema, eu não recomendaria utilizar a variável desta forma. Em vez disso, devemos guardá-la numa variável cujo nome explique como deve ser utilizada.

{% include snippets/syntax/17/index.html %}

Assim previne-se que a mudança de um tema leve a algo como `$sass-pink: blue`. [Este artigo](http://davidwalsh.name/sass-color-variables-dont-suck) faz um bom trabalho ao explicar por que o pensamento de suas variáveis ​​de cores é importante.

### Clarear e Escurecer cores

Tanto o clarear [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) como o escurecer [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) representam funções que permitem manipular a luz de uma cor no espaço HSL adicionando ou subtraindo ao valor do espaço HSL. Basicamente, representam atalhos para o parâmetro `$lightness` do método de ajuste de cor [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

É importante referir que estas funções muitas vezes não geram os resultados que se esperaria. Por outro lado, a função de mistura [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) é uma boa forma de escurecer ou clarear uma cor misturando-a com branco ou preto.

A vantagem de usar a `mix` em vez das primeiras funções mencionadas é que esta fará com que a cor tenda progressivamente para preto (ou branco) à medida que subtraímos a proporção da cor, enquanto que `darken` e `lighten` irão rapidamente esgotar a cor para os extremos de branco ou preto.

{% include images/color-functions.html %}

Se não quiserem escrever a função `mix` todas as vezes, podem criar duas funções fáceis-de-usar `tint` e `shade` (que já fazem parte de [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) que fazem essencialmente o mesmo:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>A função <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> permite efetuar um escalamento das propriedades mais fluído tendo em conta o quão alto ou baixo o seu valor já é. Deverá oferecer resultados que são tão agradáveis como o `mix` mas com uma convenção mais clara. O fator de escala não é exactamente o mesmo, no entanto.</p>
</div>

## Listas

Listas são o equivalente de arrays. Uma lista é uma estrutura de dados *"flat"* (ao contrário de [mapas](#mapas)) usada para guardar valores de qualquer tipo (incluindo listas, dando origem a listas aninhadas).

As listas devem respeitar as seguintes orientações:

* sejam uma linha ou várias;
* necessariamente em várias linhas se forem demasiado longas para caber numa linha de 80 carateres;
* a não ser para fins de CSS, sempre separadas por vírgula;
* sempre envolvidas em parêntesis;
* finalizadas com um ponto final em multi-linha.

{% include snippets/syntax/19/index.html %}

Ao adicionar novos itens a uma lista, usar sempre a API fornecida. Nunca tentar adicionar novos itens manualmente.

{% include snippets/syntax/20/index.html %}

[Neste artigo](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/), eu vou a fundo de vários truques e dicas para lidar e manipular listas corretamente, no Sass.

## Mapas

Com Sass, autores de folhas de estilo podem definir mapas - o termo do Sass para arrays associativos, mapas de hash ou mesmo objectos em JavaScript. Um mapa é uma estrutura de dados que associa chaves a valores. Tanto chaves quanto valores podem ser de qualquer tipo de dados, incluindo mapas, embora eu não o recomende usar tipos de dados complexos como chaves, para que matenhamos a sanidade.

Mapas devem ser escritos da seguinte forma:

* espaços depois dos dois pontos (`:`);
* parêntesis de abertura (`(`) na mesma linha dos dois pontos (`:`);
* **chaves com aspas** se forem strings (o que representa 99% dos casos);
* cada par chave/valor na sua própria linha;
* vírgula (`,`) após cada par chave/valor;
* **vírgula final** (`,`) no último item, para que seja mais fácil adicionar, remover ou reordenar items;
* parêntesis de fecho (`)`) na sua própria linha;
* não colocar um espaço um um caractér de nova linha entre o parêntesis de fecho (`)`) e o ponto e vírgula (`;`).

Ilustração:

{% include snippets/syntax/21/index.html %}

Textos sobre mapas Sass são muitos, dado o quão esperada essa feature foi esperada. Aqui vai três, dos quais eu recomendo: [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/), [Extra Map functions in Sass](http://www.sitepoint.com/extra-map-functions-sass/), [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/).

## Conjunto de regras para CSS

A esta altura, isto é essencialmente uma revisão do que toda a gente sabe, mas é assim que um conjunto de regras para CSS deve ser escrito (pelo menos, de acordo com a maioria dos guias de orientação, incluindo [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset)):

* seletores relacionados na mesma linha; seletores sem relação numa nova linha;
* chaveta de abertura (`{`) separada do último seletor por um espaço único;
* cada declaração na sua própria linha;
* um espaço a seguir aos dois pontos (`:`);
* um ponto e vírgula terminal (`;`) no final de cada declaração;
* chaveta de fecho (`}`) na sua própria linha;
* uma linha em branco após a chaveta de fecho (`}`).

Ilustração:

{% include snippets/syntax/24/index.html %}

Acrescentando às regras relacionadas com CSS, queremos prestar atenção a:

* variáveis locais declaradas antes de qualquer outra declaração, separadas de declarações seguintes por uma linha em branco;
* chamadas de mixins sem `@content` feitas antes de qualquer declaração;
* seletores aninhados sempre precedidos por uma linha em branco;
* chamadas de mixins com `@content` feitas depois de qualquer seletor aninhado;
* não adicionar uma linha em branco depois da chaveta de fecho (`}`).

Ilustração:

{% include snippets/syntax/25/index.html %}

## Ordenar as declarações

Não me ocorrem muitos tópicos em que as opiniões sejam tão divididas como são em relação a ordenar declarações em CSS. Na verdade, existem duas facções:

* manter a ordem alfabética;
* ordenar declarações por tipo (position, display, cores, tipo de letra, outros).

Existem prós e contras em ambas as abordagens. Por um lado, a ordem alfabética é universal (pelo menos em todos os idiomas que usam o alfabeto latino), portanto não existe dúvida quanto a colocar uma propriedade antes de outra. No entanto, parece-me bastante estranho ver propriedades como `bottom` e `top` separadas uma da outra. Por que motivo apareceriam animações antes do tipo `display`? Há imensas peculiaridades na ordenação alfabética.

{% include snippets/syntax/26/index.html %}

Por outro lado, ordenar propriedades por tipo faz todo o sentido. Todas as declarações relacionadas com tipos de letra estão próximas, `top` e `bottom` estão juntas e ler um conjunto de regras quase se assemelha a ler uma pequena história. Mas a não ser que te mantenhas fiel a algumas convenções, como [Idiomatic CSS](https://github.com/necolas/idiomatic-css), há imenso espaço para interpretação própria nesta forma de fazer as coisas. Onde ficaria `white-space`: `font` ou `display`? Onde é que `overflow` pertence exactamente? Qual é a ordem das declarações dentro de um grupo (poderia ser ordem alfabética; ah, a ironia)?

{% include snippets/syntax/27/index.html %}

Há ainda outro tipo de ordenação interessante chamado [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), que parece ser também bastante popular. Basicamente, o Concentric CSS baseia-se no box-model para definir uma ordem: começa no exterior, move-se para o interior.

{% include snippets/syntax/28/index.html %}

Devo dizer que pessoalmente não me consigo decidir. Uma [recente sondagem no CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) apurou que mais de 45% dos programadores ordenam as suas declarações por tipo, contra 14% que o fazem alfabeticamente. Há ainda 39% que o fazem de uma forma totalmente aleatória, incluindo eu próprio.

{% include images/order-poll.html %}

Por esse motivo, não vou impor uma escolha neste guia de estilos. Escolham aquele que preferirem, desde que sejam consistentes ao longo das vossas folhas de estilo (isto é, não escolham a opção *aleatória*).

<div class="note">
  <p>Um <a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">estudo recente</a> mostra que usar <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (que por sua vez usa <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">ordenação por tipo</a>) para ordenar declarações em CSS acaba por diminuir o tamanho média dos ficheiros comprimidos com Gzip em cerca de 2.7%, comparando com 1.3% quando ordenados alfabeticamente.</p>
</div>

## Seletores aninhados

Uma das características do Sass que está a ser extremamente mal usada por muitos programadores são os *seletores aninhados*. Alinhar seletores oferece aos autores de folhas de estilo uma forma de computar seletores longos, aninhando seletores mais pequenos dentro de outros.

### Regra geral

Por exemplo, o seguinte código aninhado em Sass:

{% include snippets/syntax/29/index.html %}

… vai gerar este CSS:

{% include snippets/syntax/30/index.html %}

Do mesmo modo, desde o Sass 3.3 que é possível usar uma referência ao seletor atual (`&`) para gerar seletores avançados. Por exemplo:

{% include snippets/syntax/31/index.html %}

… vai gerar este CSS:

{% include snippets/syntax/32/index.html %}

Este método é geralmente usado em conjunto com [a nomenclatura BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) para gerar os seletores `.block__element` e `.block--modifier` baseados no seletor original (neste caso, `.block`).

<div class="note">
  <p>Embora pareça anedótico, gerar novos seletores a partir da referência ao seletor atual (<code>&</code>) torna os seletores impossíveis de procurar no código, já que não existem per se.</p>
</div>

O problema com aninhar seletores é que, em última instância, torna o código mais difícil de ler. O leitor tem de mentalmente computador o seletor resultante a partir dos níveis de indentação; nem sempre é óbvio o que é que o CSS resultante acabará por ser.

Este argumento torna-se ainda mais verdadeiro à medida que os seletores se tornam mais longos e as referências ao seletor atual (`&`) mais frequentes. A dada altura, o risco de perder o fio à meada e deixar de perceber o que se passa e onde é tão alto que deixa de valer a pena.

Para evitar tais situações, nós falamos muito sobre a [Inception rule](http://thesassway.com/beginner/the-inception-rule) alguns anos atrás, aconselhando contra aninhamento de mais de três leveis a fundo, usando como referência o filme "Inception" de Christopher Nolan. Além do mais, eu seria mais dramático e recomendaria **evitar aninhamento de seletores, o máximo possível**.

Enquanto há, obviamente, algumas exceções para esta regra (como nós vamos ver na próxima seção), esta opinião parece ser a mais popular. Você pode ler sobre isso mais em detelhes no [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/) e [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css).

### Exceções

Para começar, é permitido e até aconselhado aninhar pseudo-classes e pseudo-elementos no seletor inicial.

{% include snippets/syntax/33/index.html %}

Aninhar seletores em pseudo-classes e pseudo-elementos não só faz sentido (porque lida com seletores intimamente ligados), mas também ajuda a manter tudo relacionado com um determinado componente num único sítio.

Além disso, quando se usam classes de estado independentes de um componente, como `.is-active`, é perfeitamente aceitável aninhá-las sob o selctor do componente, de modo a manter tudo limpo.

{% include snippets/syntax/34/index.html %}

Por fim, quando se estiliza um elemento só porque ele está dentro de outro elemento específico, é também aceitável aninhá-lo, de modo a manter tudo sobre um determinado componente no mesmo sítio.

{% include snippets/syntax/35/index.html %}

Como tudo, as especificidades são de certa forma irrelevantes, o importante é a consistência. Se te sentes perfeitamente confiante com seletores aninhados, então usa seletores aninhados. Certifica-te apenas que toda a tua equipa está confortável com isso.