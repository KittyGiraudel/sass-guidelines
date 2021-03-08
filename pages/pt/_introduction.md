
## Introdução

### Porque um guia de estilo

Um guia de estilo não é só um documento agradável à leitura que pretende descrever um estado perfeito para o nosso código. Um guia de estilo é um documento importante no ciclo de vida de um projeto, descrevendo como e porquê o código deve ser escrito. Para pequenos projetos pode parecer excessivo, mas ajuda imenso à manutenção e escalabilidade do código-fonte.

Invariavelmente, quantos mais programadores estiverem envolvidos num projeto, mais regras serão necessárias. Da mesma forma, quanto maior o projeto, mais necessário se torna um guia de estilo.

[Harry Roberts](https://csswizardry.com) refere muito bem nas [CSS Guidelines](https://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Um guia de estilo de código (e não um visual) é uma ferramenta de grande valor para equipas que:</p>
  <ul>
    <li>criem e mantenham produtos durante uma quantidade de tempo considerável;</li>
    <li>possuam programadores com habilidades e especialidades variadas;</li>
    <li>possuam vários programadores a trabalhar num produto num dado momento;</li>
    <li>recebam novos membros regularmente;</li>
    <li>possuam várias bases de código que os programadores alternem;</li>
  </ul>
</blockquote>

### Termos de Responsabilidades

Em primeiro lugar: **isto não é um guia de estilo de CSS**. Este documento não pretende discutir convenções de nomes para classes em CSS, padrões de módulos ou a questão de utilizar IDs no mundo de CSS. Estas guias dizem apenas respeito a conteúdo específico de Sass.

Para além disso, este guia de estilo é da minha autoria e consequentemente **muito parcial**. Podem pensar nele como uma coleção de metodologias e conselhos que eu tenho vindo a polir ao longo dos anos. Isto dá-me também a oportunidade de referenciar um punhado de recursos valiosos, por isso certifiquem-se que espreitam a secção de *leitura adicional*.

Obviamente, esta não será a única maneira de fazer as coisas e poderá ou não adequar-se ao vosso projeto. Sintam-se livres de o adaptar às vossas necessidades.

### Princípios chave

No final do dia, se há algum conceito que eu gostava que toda a gente retirasse, seria que **[Sass deve ser mantido o mais simples possível](https://www.sitepoint.com/keep-sass-simple/)**.

Graças às minhas experiências, tais como [operadores  binários](https://github.com/KittyGiraudel/SassyBitwise), [iteradores e geradores](https://github.com/KittyGiraudel/SassyIteratorsGenerators) e [um interpretador de JSON](https://github.com/KittyGiraudel/SassyJSON) em Sass, temos todos uma boa ideia das capacidades deste pré-processador.

Apesar de tudo, CSS é uma linguagem simples. Sass, com o propósito de escrever CSS, não deverá tornar-se muito mais complexa que CSS normal. O [princípio KISS](https://en.wikipedia.org/wiki/KISS_principle) (*Keep It Simple Stupid*) é chave, aqui, e deverá manter a precedência sobre o [princípio DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (*Don't Repeat Yourself*) na maior parte das situações.

Por vezes é preferível repetirmo-nos um pouco para manter o código em boas condições de manutenção, em vez de construir um sistema desnecessariamente complicado, convulso e impossível de manter devido à sua complexidade.

Permitam-me ainda citar novamente o [Harry Roberts](https://csswizardry.com), **pragmatismo vence sobre a perfeição**. A determinada altura, vão provavelmente dar por vocês a ir contra as regras aqui descritas. Se fizer sentido, se parecer a atitude correta, simplesmente façam-no. Código é o meio, e nunca o fim.

### Estendendo a diretriz

Uma grande parte deste guia de estilo é, basicamente, opinião. Mas, tenho lido e escrito Sass por muitos anos, até chegar a este ponto onde tenho muitos princípios para escrever uma folha de estilos limpa. No entanto, entendo que, ainda assim, isso pode não agradar todo mundo e é perfeitamente normal.

Contudo, acredito que diretrizes são feitas para serem expandidas. Expandindo a Sass Guidelines poderia ser tão simples quanto ter um documento dizendo que o código está seguindo instruções desta diretriz, exceto por algumas coisas. E em cada caso, regras específicas seriam explicadas abaixo.

Um exemplo de uma extensão de guia de estilos pode ser achada no [SassDoc repository](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md):

> [Esta](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md) é uma extensão para [Node Styleguide](https://github.com/felixge/node-style-guide) feita por Felix Geisendörfer. Qualquer coisa deste documento substitui o que poderia ser dito no Node Styleguide.
