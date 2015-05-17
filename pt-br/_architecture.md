
# Arquitetura

Arquitetar um projeto CSS é provavelmente uma das coisas mais dificultosas que você terá de fazer na vida de um projeto. Manter a arquitetura consistente e significante é ainda mais difícil.

Felizmente, um dos maiores benefícios de usar um pré-processador CSS é ter a capacidade de dividir a base de código por vários arquivos sem impactar a performance (como a diretiva `@import` faria). Graças a sobrecarga da diretiva `@import` do Sass, é perfeitamente seguro (e até mesmo recomendado) se usar quantos arquivos forem necessários em desenvolvimento, tudo compilado em uma única folha de estilo quando forem para produção.

Com base nisso, eu não poderia enfatizar o suficiente a necessidade de pastas, até mesmo em projetos de baixa escala. Em casa, você não larga todas as folhas de papel numa mesma caixa. Você usa pastas; uma para a casa/apartamento, uma para o banco, uma para as contas, e por aí vai. Não há motivos para se fazer o contrário quando estiver estruturando um projeto CSS. Divida a base de código em pastas significativas separadas, ficando fácil de achar as coisas mais na frente quando tiver que voltar ao código.

Há muitas arquiteturas populares para projetos em CSS: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), molde [Bootstrap](http://getbootstrap.com/), molde [Foundation](http://foundation.zurb.com/)... Todas terão seus méritos, prós e contras.

Eu, particularmente, uso uma abordagem que tende a ser parecida com o [SMACSS](https://smacss.com/) de [Jonathan Snook](http://snook.ca/), que foca em manter as coisas simples e óbvias.

<div class="note">
  <p>Eu aprendi que arquitetura é, na maioria das vezes, muito específica para o projeto. Sinta-se livre para descartar completamente ou adaptar a solução proposta para que você lide com um sistema que supra suas necessidades.</p>
</div>

###### Outras leituras

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)

## Componentes

Há uma grande diferença entre fazer isso *funcionar*, e fazer isso *bem*. Novamente, CSS é uma linguagem bem bagunçada <sup>[citação necessária]</sup>. Quantos menos CSS tivermos, melhor. Não queremos lidar com megabytes de código CSS. Para manter folhas de estilo curtas e eficientes&mdash;e isso não será nenhuma surpresa para você&mdash;é normalmente uma boa ideia pensar numa interface como uma coleção de componentes.

Componentes podem ser qualquer coisas, desde que:

* façam uma coisa e uma coisa apenas;
* sejam reutilizáveis e reusados pelo projeto;
* sejam independentes.

Por exemplo, um formulário de pesquisa deve ser tratado como um componente. Deve ser reusável, em diferentes posições, em diferentes páginas, em várias situações. Não deve depender na sua posição no DOM (rodapé, barra lateral, conteúdo principal...).

A maioria das interfaces podem ser pensadas como pequenos componentes e eu recomendo fortemente que você se prenda a esse paradigma. Isso não irá apenas diminuir a quantidade de CSS necessário para um projeto inteiro, como também tende a ser muito mais fácil de dar manutenção que uma bagunça caótica onde tudo está atracado.

## O padrão 7-1

Voltando a arquitetura, podemos? Eu normalmente uso o que eu chamo de *padrão 7-1*: 7 pastas, 1 arquivo. Basicamente, você tem todas as suas partials alocadas em 7 pastas diferentes, e um único arquivo no nível mais alto (normalmente chamado de `main.scss`), que chama tudo a ser compilado em uma folha de estilo CSS.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

E claro:

* `main.scss`

{% include images/wallpaper.html %}

O ideal é chegarmos a algo como isso:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Arquivos seguem a mesma convenção de nomenclatura descrita acima: são delimitados por hifens.</p>
</div>

### Pasta Base

A pasta `base/` guarda o que podemos chamar de "*boilerplate* code" para o projeto. Lá você poderá achar o arquivo de *reset*, algumas regras tipográficas, e provavelmente uma folha de estilo (que costumo chamar de `_base.scss`), definindo alguns padrões de estilo para elementos do HTML comumente utilizados.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

### Pasta Layout

A pasta `layout/` contém tudo aquilo que participa no *layout* do site ou aplicação. Essa pasta pode ter folhas de estilo para as partes principais do site [header (cabeçalho), footer (rodapé), navegação, barra lateral...], o sistema de grid e até mesmo os estilos CSS para todos os formulários.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>A pasta <code>layout/</code> também pode ser chamada de <code>partials/</code>.</p>
</div>

### Pasta Components

Para componentes menores, há a pasta `components/`. Enquanto `layout/` é *macro* (definindo o *wireframe* global), `components/` é mais focada em *widgets*. Nela contém todo tipo de módulos específicos como um *slider*, um *loader*, um *widget*, e basicamente tudo seguindo essa linha. Comumente, há muitos arquivos em `components/`, visto que todo site/aplicação deve ser composta em sua maior parte de pequenos módulos.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>A pasta <code>components/</code> também pode ser chamada <code>modules/</code>, dependendo do que preferir.</p>
</div>

### Pasta Pages

Se você tem estilos específicos de páginas, é melhor coloca-los numa pasta `pages/`, em um arquivo com o nome da página. Por exemplo, não é fora do comum ter estilos muito específicos para a página inicial, daí a necessidade de um arquivo `_home.scss` em `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Dependendo do seu processo de deploy, esses arquivos podem ser chamados por conta própria pra evitar que sejam misturados com os outros na folha de estilo gerada. Isso realmente vai de você.</p>
</div>

### Pasta Themes

Em grandes sites e aplicações, é comum ter diferentes temas. Há certas maneiras diferentes de lidas com temas, mas eu, pessoalmente, gosto de ter todos os temas em uma pasta `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Isso é muito específico de projeto e é provável que não venha a existir em muitos projetos.</p>
</div>

### Pasta Utils

A pasta `utils/` reune todas as ferramentas e auxiliadores Sass utilizados durante o projeto. Toda variável global, função, *mixin* e *placeholder* devem ser postos lá.

A regra de ouro pra essa pasta é que não gere nenhuma linha de CSS quando compilada por si só. Esses arquivos não são nada além de auxiliadores Sass. 

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequentemente nomeado de `_helpers.scss`)

<div class="note">
  <p>A pasta <code>utils/</code> também pode ser chamada de <code>helpers/</code>, <code>sass-helpers/</code> ou <code>sass-utils/</code>, dependendo do que preferir.</p>
</div>

### Pasta Vendors

E por último, mas não menos importante, a maioria dos projetos terão uma pasta de `vendors/` contendo todos arquivos CSS de bibliotecas e *frameworks* externos - Normalize, Bootstrap, jQueryUI, CarouselSliderFantásticoFeitoEmjQuery, e por aí em diante. Colocando esses arquivos de lado numa mesma pasta é uma boa forma de dizer "Hey, isso não é meu, não é meu código, não é minha responsabilidade".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Se você tem que sobrescrever uma seção de qualquer fornecedor *(vendor)*, eu recomendo que você tenha uma oitava pasta chamada `vendors-extensions/` na qual você terá arquivos nomeados exatamente com o mesmo nome dos *vendors* a serem sobrescritos.

Por exemplo, `vendors-extensions/_bootstrap.scss` é um arquivo contendo todas as regras CSS com a intenção de redeclarar alguns CSSs padrões do Bootstrap. Isso é feito para evitar edição direta em arquivos de terceiros *(vendor files)*, o que geralmente não é uma boa ideia.

### Arquivo principal

O arquivo principal (normalmente rotulado de `main.scss`) deve ser o único arquivo Sass de toda a base código a não começar com um *underline*. Esse arquivo não nada além de `@import` e comentários.

Arquivos devem ser importante de acordo com a pasta que eles estão, um após o outro seguindo a seguinte ordem:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Com o objetivo de preservar a legibilidade, o arquivo principal deve respeitar essas orientações:

* um arquivo por `@import`;
* um `@import` por linha;
* sem quebra de linha entre dois *imports* de uma mesma pasta;
* uma quebra de linha após o último *import* de uma pasta;
* extensões de arquivo e *underlines* de início omitidos.

{% include snippets/architecture/02/index.html %}

Há uma outra forma de importar *partials* que eu considero válida também. Vendo pelo lado bom, faz com que os arquivo fique mais legível. Entretanto, faz com que atualizações sejam um pouquinho mais dolorosas. Enfim, eu deixaria que você decida o que é melhor, não importa muito. Para essa forma, o arquivo principal deve respeitar essas orientações:

* um arquivo por `@import`;
* uma quebra de linha após o `@import`;
* cada arquivo na sua própria linha;
* uma quebra de linha após o último *import* de uma pasta;
* extensões de arquivo e *underlines* de início omitidos.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>A fim de não ter que importar cada arquivo manualmente, há uma extensão para o Ruby Sass chamada de <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, tornando possível o uso de glob patterns no <code>@import</code> do Sass como em <code>@import "components/*"</code>.</p>
  <p>Tendo dito isso, eu não recomendaria isso por importar os arquivos por ordem alfabética, o que normalmente não é algo que eu queira, especialmente quando lidando com uma linguagem que preza pela ordem de chamada.</p>
</div>

## Arquivo da vergonha

Há um conceito interessante de [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) e [Chris Coyier](http://css-tricks.com), que acabou tornando-se popular, consistindo em colocar todas as declarações CSS, *hacks* e outras coisas das quais não temos orgulho num *arquivo da vergonha*. Esse arquivo, dramaticamente intitulado `shame.scss` (*shame* => *vergonha*), deve ser chamado após todo e qualquer arquivo, bem no final da folha de estilo.

{% include snippets/architecture/04/index.html %}

###### Outras leituras

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
