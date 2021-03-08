
## Arquitetura

Criar a arquitetura de um projeto de CSS é uma das coisas mais difíceis que se pode fazer durante a vida de um projeto. Manter essa arquitetura constante e significativa é ainda mais difícil.

Felizmente, um dos benefícios principais de usar um pré-processador de CSS é ter a habilidade de dividir a nossa base de código em vários ficheiros sem ter impacto na performance (como a diretiva de CSS `@import` fazia). Graças à sobrecarga da diretiva `@import` no Sass, é perfeitamente seguro (e até recomendado) usar os ficheiros necessários na fase de desenvolvimento, todos estes compilados numa única folha de estilo quando o projeto for para produção.

Em cima disso, não posso salientar o suficiente a necessidade de pastas, mesmo em pequenos projetos. Em casa, não deixas todas as folhas de papel na mesma caixa. Tens uma para os papéis da casa, uma para documentos do banco, uma para contas e assim em diante. Não há razão para fazeres de maneira diferente quando estás a estruturar um projeto de CSS. Separa o teu código em pastas com nomes compreensíveis para depois ser fácil encontrar qualquer código quando mais tarde tiveres que voltar ao projeto.

Há muitas [arquiteturas populares](https://www.sitepoint.com/look-different-sass-architectures/) para projectos de CSS: [OOCSS](https://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), arquitetura usada no [Bootstrap](https://getbootstrap.com/), arquitetura usada no [Foundation](https://get.foundation/)... Todas têm os seus méritos, prós e contras.

Eu uso uma abordagem que acaba por ser muito parecida com [SMACSS](http://smacss.com/) de [Jonathan Snook](https://snook.ca/), e que se foca em manter as coisas simples e óbvias.

<div class="note">
  <p>Eu aprendi que a arquitetura é muito especifica para o projeto. Estejam à vontade para ignorarem ou adaptarem a solução proposta para lidarem com um sistema que se adapta melhor às vossas necessidades.</p>
</div>

### Componentes

Há uma grande diferença entre fazer algo *funcionar* e fazer algo *bom*. Mais uma vez, CSS é uma linguagem muito desorganizada <sup>[carece de fontes]</sup>. Quanto menos CSS tiverem, melhor. Nós não queremos lidar com megabytes de CSS. Para manter as nossas folhas de estilo pequenas e efecientes&mdash;e isto não será nenhuma surpresa para ti&mdash; é normalmente uma boa ideia pensar numa interface como uma coleção de componentes.

Componentes podem ser qualquer coisa desde que:

* façam uma e apenas uma coisa;
* sejam reutilizáveis e usados por todo o projeto;
* sejam independentes.

Por exemplo um formulário de pesquisa deve ser tratado como um componente. Deverá ser reutilizável, em diferentes posições, páginas e em situações diversas. Não deve depender da sua posição na DOM (rodapé, barra lateral, conteúdo principal…).

A maior parte de qualquer interface pode ser pensada como pequenos componentes e eu recomendo que fique com este paradigma. Isto vai não só diminuir a quantidade de CSS necessário para um projeto completo, mas também acaba por ser muito mais fácil do que manter uma desorganização onde está tudo junto.

### Estrutura de componentes

Idealmente, componentes devem existir em seus próprios partials Sass (dentro da pasta `components/`, como descrito no [padrão 7-1](#o-padro-7-1)), por exemplo `components/_button.scss`. Os estilos descritos em cada arquivo de componente devem se preocupar com:

* O estilo do próprio componente;
* O estilo dos variantes, modificadores e/ou estados do componente;
* Os estilos dos descendentes (elementos filhos) do componente, se necessário.

Se você quer que seus componentes sejam capazes de serem tematizados externamente (por exemplo: à partir um tema dentro da pasta `themes/`), limite as declaração à apenas estilos estruturais, como dimensões (largura/altura), padding, margin, alignment e etc. Exclua estilos como cores, sombras, fontes, background e etc.

Um partial pode incluir variáveis, placeholder, mixins e funções específicas para componentes. No entanto, mantenha em mente que você deve evitar ficar referenciando (importando) arquivos de componentes de outros arquivos de componentes, já que isso pode fazer o gráfico de dependencia do seu projeto uma bagunça e incapaz de se manter.

Aqui tem um exemplo de um componente partial de botão:

{% include snippets/architecture/06/index.html %}

<div class="note">
  <p>Agradeço ao <a href="https://twitter.com/davidkpiano">David Khourshid</a> por sua ajuda e expertise, nesta seção.</p>
</div>

### O padrão 7-1

Vamos então voltar à arquitetura, ok? Eu normalmente uso o que chamo *O padrão 7-1*: 7 pastas, 1 ficheiro. Basicamente, tudo o que tens são ficheiros parciais colocados em 7 pastas diferentes, e um único ficheiro na raiz do projeto (normalmente chamado `main.scss`) que importa todos os ficheiros parciais para serem compilados numa única folha de estilo de CSS.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `abstracts/`
* `vendors/`

E claro:

* `main.scss`

<div class="note">
  <p>Se você está querendo usar o padrão 7-1, existe um <a href="https://github.com/KittyGiraudel/sass-boilerplate">boilerplate</a> pronto, no Github. Ele deve ter tudo que você precisa para começar essa arquitetura.</p>
</div>

{% include images/wallpaper.html %}

Idealmente, teríamos algo como:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Os ficheiros seguem as mesma convenções de nome descritas acima: são delimitados com um hífen.</p>
</div>

#### Pasta Base

A pasta `base/` contém o que nós podemos chamar de código padrão para o projeto. Aqui podemos encontrar um ficheiro de reset, algumas regras tipográficas e provavelmente uma folha de estilo (gosto de chamar `_base.scss`), que define alguns estilos padrão para elementos de HTML mais usados.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

<div class="note">
  <p>Se seu projeto usa <em>muitas</em> animações CSS, você deve considerar adicionar um arquivo <code>\_animations.scss</code> nele, contendo as definições dos <code>@keyframes</code> de todas suas animações. No entanto, se você só usa de vez em quando, coloque-as junto dos seletores que usam elas.</p>
</div>

#### Pasta Layout

A pasta `layout/` contêm tudo que é necessário para criar o layout do site ou aplicação. Esta pasta contêm as folhas de estilo para as partes principais do site (cabeçalho, rodapé, navegação, barra lateral…), a grelha ou mesmo o CSS de todos os formulários.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>A pasta <code>layout/</code> também pode ser chamada <code>partials/</code>, sendo isto uma questão de preferência.</p>
</div>

#### Pasta Components

Para componentes mais pequenos, há a pasta `components/`. Enquanto a pasta `layout/`é *macro* (definindo a estrutura global), a pasta `components/` é mais focada em módulos. Contêm todo o tipo de módulos específicos como um slider, um carregador e tudo que seja desse tipo.
Há normalmente imensos ficheiros na pasta `components/` tendo em conta que todo o site/aplicação deverá ser constituído por pequenos módulos.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>A pasta <code>components/</code> também se poderá chamar <code>modules/</code>, sendo isto uma questão de preferência.</p>
</div>

#### Pasta Pages

Se tiveres estilos específicos a páginas, o melhor será colocá-las na pasta `pages/`, num ficheiro com o nome da página. Por exemplo, não deixa de ser comum ter estilos muito específicos para a página inicial que criam a necessidade de ter um `_home.scss` na pasta `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Dependendo do processo de desenvolvimento estes ficheiros podem ser chamados individualmente para evitar que eles se juntem com outros quando todas as folhas de estilo se juntam. Na realidade é uma questão de preferência.</p>
</div>

#### Pasta Themes

Em grandes sites ou aplicações, é comum existirem vários temas. Há certamente diversas maneira de lidar com temas mas eu pessoalmente gosto de colocar tudo numa pasta com o nome `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Isto é algo muito específico a cada projeto e em muitos deles podem nem existir a necessidade.</p>
</div>

#### Pasta Abstracts

A pasta de `/abstracts` guarda todas as ferramentas e auxiliares de SASS usados por todo o projeto. Todas as funções globais, mixins e placeholders devem ser colocados nesta pasta.

A regra desta pasta é que não deve produzir uma única linha de CSS se for compilada sozinha. Tudo o que está aqui deverá ser nada mais que auxiliares.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss`

Quando trabalhamos em um projeto muito grande e com muitos utilitários abstratos, pode ser interessante agrupá-los por assunto invés de tipo, por exemplo: tipografia (`_tipografia.scss`), tema (`tema.scss`), etc. Cada arquivo contendo os auxiliares relacionados ao assunto: variáveis, funções, mixins e placeholders. Fazendo de tal maneira, o código fica mais fácil de ser lido e mantido, especialmente quando os arquivos estão ficando muito grandes.

<div class="note">
  <p>A pasta <code>abstracts/</code> também pode ser chamada de <code>utilities/</code> ou <code>helpers/</code>, sendo uma questão de preferência.</p>
</div>

#### Pasta Vendors

E por fim, a maioria dos projetos irão ter uma pasta `vendors/` que vai conter todo o CSS usado por biblioteca e _frameworks_ externas - Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, e por ai. Por todos estes componentes na mesma pasta é uma boa maneira de dizer "Hey, este código não é meu, não o escrevi, não é a minha responsabilidade".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Se tiveres que substituir uma secção de alguma destas extensões, eu recomendo criar um oitava pasta chamada `vendors-extensions/` na qual estarão ficheiros com os mesmos nomes dos quais estás a substituir.

Por exemplo, `vendors-extensions/_boostrap.scss` é um ficheiro que contém todas as regras de CSS que tiveste que declarar de novo por cima do CSS padrão do Bootstrap. Isto é para evitar editar os ficheiros originais das extensões, o que normalmente não é uma boa ideia.

#### Ficheiro Principal

O ficheiro principal (normalmente chamado `main.scss`) deverá ser o único ficheiro de SASS que não começa com um underscore. Este ficheiro não deve conter nada mais que `@import` e comentários.

Os ficheiros devem ser importados de acordo com a pasta onde estão, uma depois da outra na seguinte ordem:

1. `abstracts/`
1. `vendors/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

De maneira a preservar a legibilidade, o ficheiro principal deverá seguir as seguintes diretrizes:

* um ficheiro por `@import`;
* um `@import`por linha;
* não colocar linha de espaço entre importações da mesma pasta;
* uma linha de espaço depois da última importação de uma pasta;
* extensões e underscores antes do nome devem ser omitidos.

{% include snippets/architecture/02/index.html %}

Existe outra maneira de importar parciais que também considero válida. O lado positivo dela é que torna o ficheiro mais legível. Por outro lado, faz qualquer mudança a esse ficheiro mais difícil. De qualquer maneira eu vou deixar isto ao vosso critério pois a diferença não é muita. Ao importar desta maneira o ficheiro principal deve seguir as seguintes diretrizes:

* um `@import` por pasta;
* linha de espaço entre cada `@import`;
* cada ficheiro fica na sua linha;
* uma linha de espaço depois da ultima importação numa pasta;
* extensões e underscores antes do nome devem ser omitidos.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>De maneira a não ter que importar cada ficheiro manualmente, existe uma extensão para o Sass chamada <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, que torna possivel usar padrões globais no <code>@import</code> como <code>@import "components/\*"</code>.</p>
  <p>Tendo isto dito, eu não recomendo o uso desta extensão porque ela importa os ficheiros por ordem alfabética e normalmente não é isto que queremos, principalmente quando lidamos com uma linguagem que se baseia na ordem.</p>
</div>

### Sobre globbing

Em programação de computadores, os padrões glob especificam conjuntos de arquivos usando caracteres coringas, como `*.scss`. De modo geral, globbing significa combinar um conjunto de arquivos baseados numa expressão, invés de uma lista de arquivos. Quando aplicado ao Sass, isso significa importar partials no [arquivo principal](#ficheiro-principal) com o glob pattern, invés de importar cada um deles. Portanto, isso nos levaria a ter um arquivo parecido com esse:

{% include snippets/architecture/05/index.html %}

Sass não suporta globbing, porque isso pode ser uma feature perigosa, já que o CSS é conhecido por funcionar de acordo com a ordem de arquivos e declarações. Quando importando arquivos dinamicamente (que é feito em ordem alfabética, normalmente), não teríamos controle da ordem, o que pode levar a um debug muito difícil.

Dado isso, em uma arquitetura estritamente baseada em componentes e com esforço extra para não usar estilo de um partial em outro, a ordem de importação não importaria de fato, o que permitiria importar arquivos usando globbing. Portanto, isso faria ser mais fácil adicionar ou remover partials, já que não seria necessário atualizar o arquivo principal com tanta cautela.

Quando usando Ruby Sass, podemos usar uma gem chamada [sass-globbing](https://github.com/chriseppstein/sass-globbing) que ativa exatamente esse comportamento. Já se estamos executando node-sass, vamos depender do Node.js ou qualquer ferramenta de build usada para compilação (Gulp, Grunt e etc.).

### Ficheiro Vergonhoso

Existe um conceito interessante que foi tornado popular por [Harry Roberts](https://csswizardry.com), [Dave Rupert](https://daverupert.com) e [Chris Coyier](https://css-tricks.com) que consiste em colocar todas as declarações, hacks e coisas das quais não estamos propriamente orgulhosos num [ficheiro vergonhoso](https://csswizardry.com/2013/04/shame-css-full-net-interview/). Este ficheiro dramaticamente chamado `_shame.css`, seria importado depois de todos os outros mesmo no fim da folha de estilo.

{% include snippets/architecture/04/index.html %}
