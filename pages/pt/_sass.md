
# Sobre Sass

Esta é forma como [Sass](http://sass-lang.com) se auto-descreve na sua própria [documentação](http://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass é uma extensão de CSS que adiciona novas possibilidades e elegância à linguagem base.

O objectivo final de Sass é corrigir as falhas de CSS. CSS, como todos sabemos, não é a melhor linguagem no mundo <sup>[carece de fontes]</sup>. Enquanto é muito simples de aprender, pode rapidamente tornar-se uma confusão, especialmente em projectos grandes.

É aqui que Sass entra em cena, como meta-linguagem, para melhorar a sintaxe original de CSS de maneira a oferecer novas funcionalidades e ferramentas úteis. No entanto, Sass pretende manter-se algo conservadora no que diz respeito à linguagem de CSS.

A ideia não é tornar CSS numa linguagem de programação de alto nível; Sass pretende apenas oferecer ajuda onde CSS demonstra falhas. Graças a esta abordagem, começar a aprender Sass não é mais difícil que aprender CSS: simplesmente [adiciona funcionalidades](http://sitepoint.com/sass-reference/) em cima da linguagem.

Dito isto, existem imensas formas de utilizar estas funcionalidades. Algumas são boas, outras más, outras pouco usuais. Este guia pretende providenciar uma forma documentada e consistente de escrever código em Sass.

## Ruby Sass ou LibSass

[O primeiro _commit_ de Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) foi feito em 2006, mais de 10 anos atrás. Desnecessário dizer que evoluiu muito desde então. Inicialmente desenvolvido utilizando Ruby, diversas adaptações foram surgindo. A mais bem sucedida, [LibSass](http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114) (written in C/C++) está hoje muito perto de ser totalmente compatível com a versão original.

Em 2014, [ambas as equipas de Ruby Sass e LibSass decidiram esperar até que as versões se sincronizassem antes de continuar o desenvolvimento](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Desde então, LibSass tem ativamente vindo a lançar versões com paridade de funcionalidades com a sua irmã mais velha. As últimas inconsistências estão a ser reunidas e listadas por mim no projeto [Sass-Compatibility](http://sass-compatibility.github.io). Se estiverem a par de alguma incompatibilidade entre as duas versões que não esteja listada, por favor abram um _issue_ no repositório.

Voltando à questão de escolher o compilador. Na verdade, tudo depende do vosso projeto. Se se tratar de um projecto em Ruby on Rails, será preferível utilizar Ruby Sass, já que é perfeitamente adequado para o caso. Convém manter em mente que Ruby Sass vai sempre ser a implementação de referência e por isso estará sempre um passo à frente no que diz respeito a funcionalidades. Além disso, se você está procurando trocar do Ruby Sass por o LibSass, [este artigo](http://www.sitepoint.com/switching-ruby-sass-libsass/) é para você.

Em projetos que não sejam em Ruby que precisem de integração no método de trabalho, LibSass será provavelmente uma melhor opção, uma vez que esta é praticamente dedicada a adaptações externas. Por exemplo, se quiserem utilizar NodeJS, [node-sass](https://github.com/sass/node-sass), a escolha já está feita.

## Sass ou SCSS

Existe alguma confusão no que diz respeito à semântica do nome *Sass*, e justificadamente: Sass significa tanto o pré-processador e a sua própria sintaxe. Não é lá muito conveniente, pois não?

Inicialmente, Sass descrevia a sintaxe cuja característica que a definia era a sua sensibilidade à indentação. Rapidamente, os escritores de Sass decidiram encurtar a distância entre Sass e CSS providenciando uma sintaxe mais próxima de CSS original chamada *SCSS* para *Sassy CSS*. O lema é: se é CSS válido, é valido SCSS também.

Desde então, Sass (enquanto pré-processador) oferece [duas sintaxes diferentes](http://www.sitepoint.com/whats-difference-sass-scss/): Sass (que não é escrito em maiúsculas, [por favor](http://sassnotsass.com)), também conhecido como *a sintaxe indentada*, e SCSS. Qual delas utilizar é uma questão de preferência pessoal, uma vez que ambas são equivalentes a nível de funcionalidades. Até aqui, é tudo uma questão de estética.

A sensibilidade aos espaços em Sass depende na indentação para se ver livre de chavetas, pontos e vírgula e outros símbolos de pontuação, o que leva a uma sintaxe mais curta e mais limpa. Por outro lado, SCSS é mais fácil de aprender já que consiste maioritariamente em pedaços extra que sao escritos adicionalmente ao CSS habitual.

Pessoalmente, prefiro SCSS a Sass apenas porque é mais aproximada de CSS e mais amigável para os programadores. Por isso, SCSS será a sintaxe padrão, durante esse guia. Podem sempre alterar para a sintaxe indentada de Sass no painel de <button type="button" data-a11y-dialog-show="options-panel" class="link-like">opções</button>.

## Outros pré-processadores

Entre outras coisas, Sass é um pré-processador. O seu principal rival será [Less](http://lesscss.org/), um pré-processador baseado em NodeJS que se tornou bastante popular graças à *framework* de CSS [Bootstrap](http://getbootstrap.com/), que faz uso deste (até a versão 4). Existe ainda o [Stylus](http://learnboost.github.io/stylus/), um pré-processador muito permissivo e flexível, apesar de ser mais difícil de usar e possuir comunidade menor.

*Porquê escolher Sass em vez de outro processador qualquer?* continua a ser uma questão válida. Não há muito tempo, era habitual recomendar Sass para projectos baseados em Ruby apenas porque foi o primeiro construído nesta mesma linguagem e andava de mãos dadas com Ruby on Rails. Agora que LibSass já está a par (maioritariamente) com o Sass original, esta recomendação não é mais relevante.

O que eu mais aprecio em Sass é a sua abordagem conservadora para com CSS. O design em Sass é fundamentado em princípios fortes: a grande parte da abordagem de design vem das crenças básicas das equipas que a) adicionar funcionalidades extra possui um custo de complexidade que precisa de ser justificado pela sua utilidade, e b) deve ser simples e intuitivo compreender o que um bloco de estilo é responsável por, olhando apenas para esse mesmo bloco individualmente. Sass possui também uma maior atenção ao detalhe relativamente a outros pré-processadores. Tanto quanto posso afirmar, os seus designers responsáveis preocupam-se bastante com todos os casos de compatibilidade com CSS e com a consistência de comportamento da linguagem. Em outras palavras, Sass é um software destinado a resolver problemas de verdade, ajudando a fornecer funcionalidades úteis para o CSS, onde ele falha.

Pré-processadores à parte, devemos também mencionar ferramentas como [PostCSS](https://github.com/postcss/postcss) e [cssnext](https://cssnext.github.io/), as quais receberam uma atenção significante, nos últimos meses.

PostCSS é comumente (e incorretamente) referido como um "pós-processador". A suposição, combinada com o nome infeliz, é que PostCSS analisa CSS que já foi processado por um pré-processador. Enquanto isso pode realmente ocorrer, na verdade, não é obrigatório. Portanto, PostCSS é somente um processador.

O PostCSS permite que você acesse "tokens" da sua folha de estilos (seletores, propriedades e valores), processe isso com JavaScript (para fazer alguma operação de algum tipo) e compilar os resultados para CSS. Por exemplo, a biblioteca de prefixos [Autoprefixer](https://github.com/postcss/autoprefixer) é construída com PostCSS. Ela analisa cada regra para ver se é necessário usar *vendor prefixes*, usando como referência a ferramenta [CanIUse](http://caniuse.com).

Isso é incrivelmente poderoso e bom para construir bibliotecas que funcionam com qualquer pré-processador (como vanilla CSS), mas PostCSS não é tão fácil de usar, ainda. Você tem que saber um pouco de JavaScript para construir qualquer coisa e sua API pode ser confusa, às vezes. Enquanto Sass só fornece um conjunto de ferramentas que são úteis para escrever CSS, PostCSS provê acesso direto ao AST CSS (*ávore abstrata de sintaxe CSS*) e JavaScript.

Em resumo, Sass é meio que fácil de usar e vai resolver a maioria dos seus problemas. Por outro lado, PostCSS pode ser difícil de dominar (se você não é bom com JavaScript), mas é incrivelmente poderoso, no final das contas. Além disso, não há razão para que você não possa ou deva usar ambos. Na verdade, PostCSS oferece um SCSS parser oficial, só para isso.

<div class="note">
    <p>Agradeço ao <a href="https://github.com/corysimmons">Cory Simmons</a> por sua ajuda e expertise, nessa seção.</p>
</div>
