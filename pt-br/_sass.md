
# Sobre o Sass

É assim como o [Sass](http://sass-lang.com) se descreve em sua [documentação](http://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass é uma extensão de CSS que adiciona poder e elegância para a linguagem básica.

O objetivo mais importante do Sass é arrumar as falhas do CSS, que como todos sabemos, não é a melhor linguagem do mundo <sup>[citação necessária]</sup>. Mesmo sendo muito simples de se aprender, pode rapidamente tornar-se bagunçada, especialmente em grandes projetos.

É aqui onde o Sass entra, como uma meta-linguagem, para melhorar a sintaxe do CSS a fim de prover recursos extras e ferramentas úteis. Enquanto isso, Sass quer se manter conversativo em relação a linguagem CSS.

O objetivo não é tornar o CSS uma linguagem cheia de recursos de linguagem de programação; Sass quer apenas ajuda onde o CSS falha. Por conta disso, começar com Sass não é mais difícil que aprender CSS: ele [o Sass] simplesmente adiciona alguns recursos extras com base no CSS.

Tendo dito isso, há muitas outras formas de usar esses recursos. Algumas boas, algumas ruins, algumas fora do comum. Essas orientações são destinadas a te dar uma abordagem consistente e documentada de como escrever código em Sass.

###### Outras leituras

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## Ruby Sass ou LibSass

[O primeiro commit do Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) data do final de 2006, mais de 8 anos atrás. Desnecessário dizer que percorreu uma grande jornada até então. Inicialmente desenvolvido em Ruby, diversos adaptações surgiram. A mais famosa delas, [LibSass](https://github.com/sass/libsass) (escrito em C) está próximo de tornar-se totalmente compatível com a versão original em Ruby.

Em 2014, [as equipes do Ruby Sass e do LibSass decidiram esperar para quem ambas as versões estivessem sincronizadas antes de prosseguirem](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Desde então, o LibSass vem lançando versões ativamente para ter os mesmos recursos que seu irmão mais velho. As últimas inconsistências restantes estão reunidas e listadas por mim sob o projeto [Sass-Compatibility](http://sass-compatibility.github.io). Se você está ciente de alguma incompatibilidade entre as duas versões e que não está listada, por favor, seja gentil o suficiente para abrir uma *issue*.

Voltando a escolha do seu compilador. Na verdade, tudo depende do seu projeto. Se é um projeto em Ruby on Rails, é melhor que você use o Ruby Sass, que é perfeitamente adequado para um caso como esses. Aliás, esteja ciente que o Ruby Sass sempre será a referência de implementação e que sempre irá guiar o LibSass em recursos.

Em projetos que não foram feitos em Ruby e que precisam de uma integração no *workflow*, o LibSass é provavelmente uma melhor ideia, visto que é em sua maioria dedicado a ser envolto. Então se você quiser usar, digamos que o Node.js, o [node-sass](https://github.com/sass/node-sass) é a escolha.

###### Outras leituras

* [LibSass](https://github.com/sass/libsass)
* [Getting to know LibSass](http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)

## Sass ou SCSS

Há muita confusão com relação a semântica do nome *Sass*, e por uma boa razão: Sass significa tanto o pré-processador quando sua própria sintaxe. Não é muito conveniente, né?

Veja, o Sass inicialmente descrevia uma sintaxe da qual a definição característica era sua sensibilidade de indentação. Logo, os mantenedores do Sass decidiram fechar a brecha existente entre o Sass e o CSS fornecendo uma sintaxe amigável ao CSS chamada de *SCSS* vindo de *Sassy CSS* (CSS Audacioso, em tradução livre). O lema é: Se é CSS válido, é válido SCSS.

Desde então, Sass (o pré-processador) tem fornecido duas sintaxes diferentes: Sass (não escrita toda em maiúscula, [por favor](http://sassnotsass.com)), também conhecido como *a sintaxe indentada*, e SCSS. Qual usar é você quem decide, visto que ambas são estritamente equivalente em recursos. É apenas uma questão de estética nesse ponto.

A sintaxe de Sass sensível a espaços em branco baseia-se na indentação para se livrar de chaves, pontos e vírgulas e outros sinais de pontuação, levando a uma sintaxe mais curta e estreita. Entretanto, o SCSS é mais fácil de se aprender, tendo em vista que é sua maioria alguns poucos bits extra com base no CSS.

Eu, pessoalmente, prefiro o SCSS ao Sass por se aproximar do CSS e ser mais amigável a maioria dos desenvolvedores. Por conta disso, o SCSS é a sintaxe padrão por essas orientações. Você pode mudar para a sintaxe indentada do Sass no <button data-toggle="aside" class="link-like" role="button" type="button">painel de opções</button>.

###### Outras leituras

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)

## Outros pré-processadores

Sass é um pré-processador no meio de outros. Seu mais sério competidor tem que ser o [LESS](http://lesscss.org/), um pré-processador CSS que tem ficado bem popular graças ao *framework* de CSS [Bootstrap](http://getbootstrap.com/) usá-lo. Também tem o [Stylus](http://learnboost.github.io/stylus/) - que é tipo a versão nerdzinha e sem limites do LESS - o qual você pode fazer quase tudo que quiser, levando em consideração que quase transforma o CSS em uma linguagem de programação.

*Por que escolher o Sass ao invés do LESS ou outro pré-processador?* é ainda uma questão válida atualmente. Não faz muito tempo que costumávamos recomendar o Sass para projetos baseados em Ruby, por ser feito em Ruby e cair bem com o Ruby on Rails. Agora que o LibSass alcançou (em sua maior parte) com o Sass original, esse não é mais um conselho relevante.

O que eu gosto do Sass é a abordagem conservativa com o CSS. O design do Sass é baseado em fortes princípios: grande parte da abordagem de design vem naturalmente a partir das crenças da equipe central que a) adicionando recursos extras tem um custo de complexidade que precisa ser justificado por utilidade e, b) deve ser fácil de explicar sobre o que um dado bloco de estilos está fazendo apenas olhando aquele bloco em si. Além disso, o Sass tem uma atenção muito mais acentuada a detalhes que outros pré-processadores. Até onde posso dizer, o designers responsáveis pelo núcleo do Sass se preocupam profundamente sobre suportarem cada *corner-case* de compatibilidade do CSS e tendo certeza que todo comportamento geral é consistente.

<div class="note">
  <p>Corner-case são casos específicos que tendem a ocorrer em situações específicas. O melhor exemplo disso é o uso de prefixos para suporte de propriedades específicas do CSS em browsers ou sistemas operacionais específicos.</p>
</div>

Em outras palavras, o Sass não é um pré-processador disposto a agradar programadores aspirantes a nerd como eu, adicionando recursos extraordinários com base numa linguagem que nem se destina a uso de casos de lógica. É um software direcionado a solução de problemas reais; ajudando a fornecer funcionalidades úteis ao CSS onde ele tende a falhar.

Pré-processador de lado, deveríamos mencionar pós-processadores, que tem recebido uma exposição significativa nos últimos meses, graças ao [PostCSS](https://github.com/postcss/postcss) e o [cssnext](https://cssnext.github.io/), principalmente. Pós-processadores são muito equivalentes aos pré-processadores, exceto por eles não fornecerem nada além da sintaxe CSS que está por vir.

Você pode pensar em pós-processadores como um *polyfill* para recursos sem suporte do CSS. Por exemplo, você pode escrever variáveis como descritas nas [especificações do CSS](http://dev.w3.org/csswg/css-variables/), daí compilar suas folhas de estilo com um pós-processador apenas para descobrir que cada ocorrência de variável é substituída por seu próprio valor, como Sass faria.

A ideia por trás dos pós-processadores é que uma vez que os browsers suportem novos recursos (como variáveis de CSS), o pós-processador não irá compilá-las mais e deixará com que os browsers cuidem disso.

Mesmo sendo uma nobre ideia o fornecimento da sintaxe do futuro no presente, eu tenho que dizer que ainda prefiro usar o Sass para a maioria das tarefas. Porém, há algumas ocasiões que acredito que pós-processadores sejam mais adequados que o Sass e outros do gênero - prefixação de CSS, por exemplo -, mas voltaremos a falar disso.

###### Outras leituras

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)
