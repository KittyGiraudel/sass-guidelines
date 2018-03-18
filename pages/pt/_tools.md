
# Ferramentas

O que um pré-processador de CSS tão popular como Sass tem de bom é que vem com todo um ecossistema de _frameworks_, _plugins_, bibliotecas e ferramentas. Após 8 anos de existência, estamos cada vez mais perto do ponto onde [tudo o que pode ser escrito em Sass foi escrito em Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

No entanto, o meu conselho seria para reduzir o número de dependências ao estritamente necessário. Gerir dependências é uma espécie de inferno do qual não querem fazer parte. Além disso, há pouca ou nenhuma necessidade de dependências externas no que toca a Sass.

## Compass

[Compass](http://compass-style.org/) é a [_framework_](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/) principal de Sass por aí. Desenvolvida por [Chris Eppstein](https://twitter.com/chriseppstein), um dos designers principais do Sass, não a vejo a perder popularidade drasticamente durante uns tempos, se querem a minha opinião.

Mesmo assim, [já não uso Compass](http://www.sitepoint.com/dont-use-compass-anymore/), a razão principal sendo que abranda muito processamento de Sass. Sass em Ruby é bastante lento por si só, então adicionar mais Ruby e Sass por cima não ajuda de verdade.

De verdade, usamos muito pouco de toda a _framework_. Compass é enorme. _Mixins_ de compatibilidade inter-browser é apenas a ponta do icebergue. Funções matemáticas, auxiliares de images, _spriting_… Há muito que pode ser feito com esta grande peça de software.

Infelizmente, isto tudo é apenas agradável, mas não essencial. Uma exceção poderia ser feita do construtor de _sprites_, que é *realmente bom*, mas [Grunticon](https://github.com/filamentgroup/grunticon) e [Grumpicon](http://grumpicon.com/) dão para a despesa, e têm o benefício de poderem ser integrados no _building process_.

De qualquer forma, eu não proíbo o uso de Compass embora também não o recomende, especialmente visto que não é compatível com LibSass (mesmo que esforços tenham sido desenvolvidos nessa direção). Se se sentem melhor em usá-la, é justo, mas não acho que tirarão muito dela no final do dia.

<div class="note">
  <p>Sass em Ruby está de momento a sofrer otimizações notáveis que são especificamente orientadas a estilos altamente baseados em lógica, com muitas funções e _mixins_. Estas mudanças deverão melhorar dramaticamente o seu desempenho, até ao ponto onde Compass e outras _frameworks_ já não abrandarão Sass.</p>
</div>

## Sistemas de grelhas

Não usar um sistema de grelhas não é opção, agora que _Responsive Web Design_ é omnipresente. Para manter designs consistentes e sólidos em todos os tamanhos, usamos um tipo de grelha para dispor os elementos. Para evitar ter que programar estas grelhas uma e outra vez, algumas mentes brilhantes tornaram estas reutilizáveis.

Deixem-me ser direto: não sou grande fã de sistemas de grelhas. Claro que vejo o potencial, mas penso que a maior parte deles são completamente exagerados e são maioritariamente usados para desenhar colunas vermelhas num fundo branco em apresentações totós de designers. Quando foi a última vez que que pensaram *graças-a-Deus-que-tenho-esta-ferramenta-para-construir-esta-grelha-de-2-5-3.1-π*? Exatamente, nunca. Porque na maior parte dos casos, apenas querem a grelha comum de 12 colunas, nada de especial.

Se estão a usar uma _framework_ de CSS para o vosso projecto como [Bootstrap](http://getbootstrap.com/) ou [Foundation](http://foundation.zurb.com/), é provável que já incluam um sistema de grelhas que eu recomendo que usem de forma a evitar ter que lidar com mais uma dependência.

Se não estiverem presos a um sistema de grelhas específico, gostarão de saber que há dois sistemas de grelhas topo de gama: [Susy](http://susy.oddbird.net/) e [Singularity](https://github.com/at-import/Singularity). Ambos fazem muito mais do que alguma vez irão precisar, por isso podem escolher o que preferirem de entre os dois e terão a certeza que todos os vossos casos extremos&mdash;mesmo os mais rebuscados&mdash;estarão cobertos. Se me perguntarem, Susy possui uma comunidade ligeiramente melhor, mas é apenas a minha opinião.

Ou podem preferir algo mais casual, como [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). No final de contas, a escolha não terá muito impacto no vosso guia de estilo, por isso fica ao vosso critério.

## SCSS-lint

Analisar código é muito importante. Normalmente, seguir as diretrizes de um guia de estilo ajuda a reduzir a quantidade de erros de qualidade de código, mas ninguém é perfeito e há sempre algo a melhorar. Por isso pode-se dizer que fazer _linting_ a código é tão importante quanto documentá-lo.

[SCSS-lint](https://github.com/causes/scss-lint) é uma ferramenta importante para vos ajudar a manter os vossos ficheiros SCSS limpos e legíveis. É completamente personalizável e fácil de integrar com as vossas ferramentas.

Felizmente, as recomendações de SCSS-lint são bastante parecidas com as descritas neste documento. De forma a configurar SCSS-lint de acordo com as Sass Guidelines, recomendo a seguinte configuração:

{% include snippets/tools/01/index.html %}

Se você não está convencido da necessidade de uso do SCSS-lint, recomendo ler estes ótimos artigos: [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/), [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom) e [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/).

<div class="note">
  <p>Se pretendem ligar o SCSS-lint no _build process_ de Grunt, gostarão de saber que há um _plugin_ de Grunt para tal chamado <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Além disso, se estão à procura de uma aplicação boa que funcione com SCSS-lint e afins, o pessoal da <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat…) estão a trabalhar na <a href="https://houndci.com/">Hound</a>.</p>
</div>