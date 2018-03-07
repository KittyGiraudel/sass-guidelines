
# Web Design Responsivo (RWD) e breakpoints

Não creio que tenhamos ainda de apresentar o que é Web Design Responsivo, agora que está em todo o lado. No entanto podem-se perguntar *porque há uma secção de RWD num guia de estilo?* Na realidade existem algumas coisas que podem ser feitas para facilitar o trabalho com breakpoints, como tal achei que podia não ser má ideia listá-las aqui.

## Definir breakpoints

Acho que é seguro dizer que as *media queries* não devem estar agarradas a dispositivos específicos. Por exemplo, seria definitivamente uma má ideia ter especificamente iPhones ou Blackberries como público-alvo. As *media queries* devem afetar um conjunto de tamanhos de ecrã, pelo menos até o design partir e a próxima *media query* entrar em acção.

Pelos mesmos motivos, breakpoints não devem ter nomes de dispositivos, mas sim algo mais geral. Especialmente agora, porque alguns telemóveis são maiores que tablets e algumas tablets são maiores que pequenos ecrãs de computadores, e por aí além…

{% include snippets/rwd/01/index.html %}

Por esta altura, qualquer [convenção de nomeclatura](http://css-tricks.com/naming-media-queries/) serve, desde que ajude a clarificar que o design não está intimamente agarrado a um tipo de dispositivo especifíco e que dê uma ideia da escala de magnitudes.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>Os exemplos anteriores utilizam mapas aninhados para definir breakpoints; no entanto isto depende bastante no tipo de gestor de breakpoints que seja utilizado. Podem optar por strings em vez de usar mapas, para maior flexibilidade (e.g. <code>'(min-width: 800px)'</code>).</p>
</div>

## Gestor de Breakpoints

Assim que definam os breakpoints da maneira que quiserem, é necessário arranjar uma maneira de os usar realmente em *media queries*. Há imensas maneiras de o fazer, mas confesso que sou grande fã do mapa de breakpoints acedido por uma função de leitura. Este sistema é simples e eficiente.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Obviamente, este é um gestor de breakpoints bastante simplista. Se precisarem de algo mais permissivo,recomendo que não reinventem a roda e utilizem algo que já provou ser eficaz, tal como <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> ou <a href="https://github.com/eduardoboucas/include-media">include-media</a>..</p>
  <p>Se você está procurando ler mais sobre como abordar media queries no Sass, ambos <a href="http://www.sitepoint.com/managing-responsive-breakpoints-sass/">SitePoint</a> e <a href="http://css-tricks.com/approaches-media-queries-sass/">CSS-Tricks</a> possuem bons artigos sobre.</p>
</div>

## Media Queries

Não há muito tempo atrás, houve um debate aceso sobre onde é que as *media queries* deveriam ser escritas: deveriam ser escritas dentro dos selectores (tal como Sass o permite), ou deveriam ser separadas?
Tenho a dizer que sou um defensor renhido do sistema *media-queries-dentro-de-selectores*, um vez que acho que encaixa bem com a ideia de *componentes*.

{% include snippets/rwd/04/index.html %}

Que gera o seguinte resultado em CSS:

{% include snippets/rwd/05/index.html %}

Podem ter ouvido que esta convenção resulta na duplicação das *media queries* no resultado de CSS. Isto é definitivamente verdade. No entanto, [foram feitos testes](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) e o resultado final é que não interessa assim que Gzip (ou algo equivalente) fizer o seu trabalho:

> … we hashed out whether there were performance implications of combining vs scattering Media Queries and came to the conclusion that the difference, while ugly, is minimal at worst, essentially non-existent at best.<br>
> &mdash; [Sam Richards, regarding Breakpoint](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries).

Agora, se realmente tiverem preocupados com a duplicação das *media queries*, podem usar uma ferramenta para as juntar, tal como [esta gema](https://github.com/aaronjensen/sass-media_query_combiner) no entanto, sinto que vos devo avisar na possibilidade de efeitos secundários de alteram a ordem do código, uma vez que já sabem que a ordem do código-fonte é importante.