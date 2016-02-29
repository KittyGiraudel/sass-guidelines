
# Sobre Sass

Esta é forma como [Sass](http://sass-lang.com) se auto-descreve na sua própria [documentação](http://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass é uma extensão de CSS que adiciona novas possibilidades e elegância à linguagem base.

O objectivo final de Sass é corrigir as falhas de CSS. CSS, como todos sabemos, não é a melhor linguagem no mundo <sup>[carece de fontes]</sup>. Enquanto é muito simples de aprender, pode rapidamente tornar-se uma confusão, especialmente em projectos grandes.

É aqui que Sass entra em cena, como meta-linguagem, para melhorar a sintaxe original de CSS de maneira a oferecer novas funcionalidades e ferramentas úteis. No entanto, Sass pretende manter-se algo conservadora no que diz respeito à linguagem de CSS.

A ideia não é tornar CSS numa linguagem de programação de alto nível; Sass pretende apenas oferecer ajuda onde CSS demonstra falhas. Graças a esta abordagem, começar a aprender Sass não é mais difícil que aprender CSS: simplesmente adiciona funcionalidades em cima da linguagem.

Dito isto, existem imensas formas de utilizar estas funcionalidades. Algumas são boas, outras más, outras pouco usuais. Este guia pretende providenciar uma forma documentada e consistente de escrever código em Sass.

###### Leitura adicional

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## Ruby Sass ou LibSass

[O primeiro _commit_ de Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) foi feito em 2006, já há mais de 8 anos. Escusado será dizer que evoluiu imenso desde então. Inicialmente desenvolvido utilizando Ruby, diversas adaptações foram surgindo. A mais bem sucedida, [LibSass](https://github.com/sass/libsass) (written in C/C++) está hoje muito perto de ser totalmente compatível com a versão original.

Em 2014, [ambas as equipas de Ruby Sass e LibSass decidiram esperar até que as versões se sincronizassem antes de continuar o desenvolvimento](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Desde então, LibSass tem ativamente vindo a lançar versões com paridade de funcionalidades com a sua irmã mais velha. As últimas inconsistências estão a ser reunidas e listadas por mim no projeto [Sass-Compatibility](http://sass-compatibility.github.io). Se estiverem a par de alguma incompatibilidade entre as duas versões que não esteja listada, por favor abram um _issue_ no repositório.

Voltando à questão de escolher o compilador. Na verdade, tudo depende do vosso projeto. Se se tratar de um projecto em Ruby on Rails, será preferível utilizar Ruby Sass, já que é perfeitamente adequado para o caso. Convém manter em mente que Ruby Sass vai sempre ser a implementação de referência e por isso estará sempre um passo à frente no que diz respeito a funcionalidades.

Em projetos que não sejam em Ruby que precisem de integração no método de trabalho, LibSass será provavelmente uma melhor opção, uma vez que esta é praticamente dedicada a adaptações externas. Por exemplo, se quiserem utilizar NodeJS, [node-sass](https://github.com/sass/node-sass), a escolha já está feita.

###### Leitura adicional

* [LibSass](https://github.com/sass/libsass)
* [Getting to know LibSass](http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)

## Sass ou SCSS

Existe alguma confusão no que diz respeito à semântica do nome *Sass*, e justificadamente: Sass significa tanto o pré-processador e a sua própria sintaxe. Não é lá muito conveniente, pois não?

Inicialmente, Sass descrevia a sintaxe cuja característica que a definia era a sua sensibilidade à indentação. Rapidamente, os escritores de Sass decidiram encurtar a distância entre Sass e CSS providenciando uma sintaxe mais próxima de CSS original chamada *SCSS* para *Sassy CSS*. O lema é: se é CSS válido, é valido SCSS também.

Desde então, Sass (enquanto pré-processador) oferece duas sintaxes diferentes: Sass (que não é escrito em maiúsculas, [por favor](http://sassnotsass.com)), também conhecido como *a sintaxe indentada*, e SCSS. Qual delas utilizar é uma questão de preferência pessoal, uma vez que ambas são equivalentes a nível de funcionalidades. Até aqui, é tudo uma questão de estética.

A sensibilidade aos espaços em Sass depende na indentação para se ver livre de chavetas, pontos e vírgula e outros símbolos de pontuação, o que leva a uma sintaxe mais curta e mais limpa. Por outro lado, SCSS é mais fácil de aprender já que consiste maioritariamente em pedaços extra que sao escritos adicionalmente ao CSS habitual.

Pessoalmente, prefiro SCSS a Sass apenas porque é mais aproximada de CSS e mais amigável para os programadores. Por isso, vou utilizar SCSS em vez de Sass ao longo deste guia de estilo. Podem sempre alterar para a sintaxe indentada de Sass no painel de <button type="button" data-modal-show="options-panel" class="link-like">opções</button>.

###### Leitura adicional

* [What's the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)

## Outros pré-processadores

Entre outras coisas, Sass é um pré-processador. O seu principal rival será [LESS](http://lesscss.org/), um pré-processador baseado em NodeJS que se tornou bastante popular graças à *framework* de CSS [Bootstrap](http://getbootstrap.com/), que faz uso deste. Existe ainda o [Stylus](http://learnboost.github.io/stylus/), que acaba por ser a versão mais *nerdy* e livre de LESS - onde é possível fazer tudo o que nós quisermos, já que praticamente converte CSS numa verdadeira linguagem de programação.

*Porquê escolher Sass em vez de LESS ou outro processador qualquer?* continua a ser uma questão válida. Não há muito tempo, era habitual recomendar Sass para projectos baseados em Ruby apenas porque foi o primeiro construído nesta mesma linguagem e andava de mãos dadas com Ruby on Rails. Agora que LibSass já está a par (maioritariamente) com o Sass original, esta recomendação não é mais relevante.

O que eu mais aprecio em Sass é a sua abordagem conservadora para com CSS. O design em Sass é fundamentado em princípios fortes: a grande parte da abordagem de design vem das crenças básicas das equipas que a) adicionar funcionalidades extra possui um custo de complexidade que precisa de ser justificado pela sua utilidade, e b) deve ser simples e intuitivo compreender o que um bloco de estilo é responsável por, olhando apenas para esse mesmo bloco individualmente. Sass possui também uma maior atenção ao detalhe relativamente a outros pré-processadores. Tanto quanto posso afirmar, os seus designers responsáveis preocupam-se bastante com todos os casos de compatibilidade com CSS e com a consistência de comportamento da linguagem.

Por outras palavras, Sass não é um pré-processador com a finalidade de agradar a programadores extremamente _nerdy_ como eu, adicionando funcionalidades em cima de uma linguagem que não foi construída para as suportar de origem. É sim, um software com o intuito de resolver problemas reais; oferecendo funcionalidades úteis a CSS onde este geralmente está em falha.

Pré-processadores à parte, devemos também mencionar pós-processadores, que têm recebido exposição significativa nos últimos meses, maioritariamente graças ao [PostCSS](https://github.com/postcss/postcss) e [cssnext](https://cssnext.github.io/). Pós-processadores são mais ou menos equivalentes aos pré-processadores, com a exceção que não oferecem nada mais do que sintaxe CSS que está ainda para chegar.

Podemos pensar em pré-processadors como um *polyfill* para funcionalidades de CSS não suportadas. Por exemplo, poderíamos escrever variáveis como estão descritas atualmente nas [especificações de CSS](http://dev.w3.org/csswg/css-variables/), compilar as folhas de estilo com um pós-processador e reparar que todas as ocorrências dessas variáveis foram substituídas pelos seus devidos valores, como Sass faria.

A ideia por detrás dos pós-processadores é oferecer este tipo de suporte silencioso para funcionalidades novas ainda não suportadas por alguns browsers (como variáveis em CSS); assim que estes o façam, o pós-processador deixa as folhas de estilo em paz.

Enquanto que oferecer a sintaxe futura é uma ideia bastante nobre, pessoalmente continuo a preferir Sass para a maioria das tarefas. No entanto, existem certas ocasiões onde acredito que os pós-processadores são mais aptos que Sass - adicionar prefixos a CSS, por exemplo - mas lá chegaremos em breve.

###### Leitura adicional

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)
