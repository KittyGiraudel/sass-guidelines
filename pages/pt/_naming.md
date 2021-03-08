
## Convenções de nomenclatura

Nesta secção, não iremos lidar com as melhores convenções de nomenclatura para manutenção e escalabilidade; não só isso apenas vos diz respeito, como também está fora do âmbito de um guia de estilo de Sass. Eu sugiro os recomendados por [CSS Guidelines](https://cssguidelin.es/#naming-conventions).

Existem algumas coisas às quais podem dar nome em Sass, e é importante nomeá-las corretamente para que toda a base de código pareça consistente e fácil de ler:

* variáveis;
* funções;
* *mixins*.

*Placeholders* de Sass são deliberadamente omitidos desta lista visto que podem ser considerados selectores normais de CSS, seguindo assim o mesmo padrão de nomenclatura como classes.

Em relação às variáveis, funções e *mixins*, mantemos algo bastante semelhante a CSS: **minúsculas delimitadas por hífens**, e acima de tudo significativos.

{% include snippets/naming/01/index.html %}

### Constantes

Se por acaso são programadores de *frameworks* ou bibliotecas, poderão encontrar-se a lidar com variáveis que não é suposto serem alteradas em qualquer circunstância: constantes. Infelizmente (ou felizmente?), Sass não fornece nenhuma forma de definir tais entidades, por isso temos que ficar pelas rigorosas convenções de nomenclatura de forma a nos darmos a entender.

Tal como para várias linguagens, eu sugiro variáveis em maiúsculas e delimitadas por subtraços (_) quando são constantes. Não só é uma convenção muito antiga, mas também contrasta bem com as habituais variáveis em minúsculas e separadas por hífens.

{% include snippets/naming/02/index.html %}

Se você realmente quer brincar com essas ideias de constantes no Sass, deverias ler [esse artigo dedicado](https://www.sitepoint.com/dealing-constants-sass/).

### Namespace

Se tencionam distribuir o vosso código Sass, no caso de uma biblioteca, uma *framework*, um sistema de grelhas ou o que seja, talvez queiram considerar colocar todas as vossas variáveis, funções, *mixins* e *placeholders* no seu próprio *namespace*, para que não entrem em conflito com o código de alguém.

Por exemplo, se trabalharem num projecto chamado *Sassy Unicorn* que se destina a ser distribuído, poderiam considerar usar `su-` como *namespace*. É específico o suficiente para prevenir colisões de nomes e curto o suficiente para não ser maçador a escrever.

{% include snippets/naming/03/index.html %}

[Kaelig](https://kaelig.fr) tem [um artigo muito perpicaz sobre namespace CSS global](https://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace), no caso deste tópico seja de interesse para você.

<div class="note">
  <p>De notar que *namespacing* automático é definitivamente um objectivo de design para a próxima reformulação do <code>@import</code> de Sass 4.0. À medida que tal se aproxima da sua concretização, será cada vez menos útil fazer *namespacing* manual; eventualmente, bibliotecas manualmente *namespaced* poderão realmente ser mais difíceis de usar.</p>
</div>
