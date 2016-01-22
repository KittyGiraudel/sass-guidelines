
# Introdução

## Porquê de um guia de estilo

Um guia de estilo não é apenas um documento prazeroso de se ler, retratando um estado ideal para seu código. É um documento chave na vida de um projeto, descrevendo como e porquê o código deve ser escrito. Pode parecer exagero para projetos pequenos, mas ajuda muito a manter a base de código limpa, escalável e de fácil manutenção.

Desnecessário dizer que quanto mais desenvolvedores envolvidos em um projeto, mais orientações de código serão necessárias. Seguindo a mesma linha, quanto maior o projeto, mais guias de estilo é um dever.

[Harry Roberts](http://csswizardry.com) afirma muito bem em [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Um guia de estilo de código (nota, não um guia de estilo visual) é uma ferramenta valiosa para times que:</p>
  <ul>
    <li>criam e mantêm produtos por uma quantia considerável de tempo;</li>
    <li>tem desenvolvedores de diferentes habilidades e especialidades;</li>
    <li>tem um número de desenvolvedores diferentes trabalhando em um produto a qualquer momento;</li>
    <li>pessoas novas na equipe com frequência;</li>
    <li>tem um número de bases de código que desenvolvedores entram e saem.</li>
  </ul>
</blockquote>

## Retratação

Primeiro de tudo: **esse não é um guia de estilo de CSS**. Esse documento não irá discutir convenções de nomenclatura para classes de CSS, padrões modulares e a questão de IDs no mundo do CSS. Esses guias de estilo se direcionam apenas a como lidar com conteúdo específico de Sass.

Além disso, esse guia de estilo é meu e portanto é **muito dogmático**. Pense como se essa fosse uma coleção de metodologias e conselhos que eu tenho polido e dado com o passar dos anos. Isso também me dá a oportunidade de linkar para um bocado de recursos aprofundados, então faça questão de checar as *Outras leituras*.

## Princípios chave

Ao final do dia, se tem algo que eu gostaria que você conseguisse de todo esse guia de estilo, é que **Sass deve ser mantido o mais simples possível**.

Graças aos meus experimentos bobos como [operadores bit a bit](https://github.com/HugoGiraudel/SassyBitwise), [geradores e iteradores](https://github.com/HugoGiraudel/SassyIteratorsGenerators) e [um JSON parser](https://github.com/HugoGiraudel/SassyJSON) em Sass, todos estamos bem cientes do que alguém pode fazer com esse pré-processador.

Entretanto, CSS é uma linguagem simples. Sass, na intenção de escrever CSS, não deve ser muito mais complexo que um CSS comum. O [princípio KISS](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid, traduzindo, Mantenha estupidamente simples) é a chave e pode até ter precedência sobre o [princípio DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself, traduzindo, Não se repita) em algumas circunstâncias.

As vezes é melhor se repetir um pouco para manter o código manutenível, do que construir um sistema super pesado, difícil de se manter o controle, desnecessariamente complicado que é completamente não manutenível devido a sua excessiva complexidade.

Aproveitando, e citando [Harry Roberts](https://csswizardry.com) novamente, **pragmatismo triunfa sobre a perfeição**. Em algum momento, você se verá indo contra regras descritas aqui. Se fizer sentido, se sentir que é correto, faça. O código é apenas um meio, não um fim.

###### Outras leituras

* [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
* [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)
