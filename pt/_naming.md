
# Convenções de nomenclatura

Nesta secção, não iremos lidar com as melhores convenções de nomenclatura para manutenção e escalabilidade; não só isso apenas vos diz respeito, como também está fora do âmbito de um guia de estilos de Sass. Eu sugiro os recomendados por [CSS Guidelines](http://cssguidelin.es/#naming-conventions).

Existem algumas coisas às quais podem dar nome em Sass, e é importante nomeá-las correctamente para que toda a base de código pareça consistente e fácil de ler:

* variáveis;
* funções;
* *mixins*.

*Placeholders* de Sass são deliberadamente omitidos desta lista visto que podem ser considerados selectores normais de CSS, seguindo assim o mesmo padrão de nomenclatura como classes.

Em relação às variáveis, funções e *mixins*, mantemos algo bastante semelhante a CSS: **minúsculas delimitadas por hífens**, e acima de tudo significativos.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) {
  // ...
}

@function opposite-direction($direction) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$vertical-rhythm-baseline: 1.5rem

=size($width, $height: $width)
  // ...

@function opposite-direction($direction)
  // ...
{% endhighlight %}
  </div>
</div>



### Leitura adicional

* [CSS Guidelines' Naming Conventions](http://cssguidelin.es/#naming-conventions)






## Constantes

Se por acaso são programadores de *frameworks* ou bibliotecas, poderão encontrar-se a lidar com variáveis que não é suposto serem alteradas em qualquer circunstância: constantes. Infelizmente (ou felizmente?), Sass não fornece nenhuma forma de definir tais entidades, por isso temos que ficar pelas rigorosas convenções de nomenclatura de forma a nos darmos a entender.

Tal como para várias linguagens, eu sugiro variáveis em maiúsculas e delimitadas por subtraços (_) quando são constantes. Não só é uma convenção muito antiga, mas também contrasta bem com as habituais variáveis em minúsculas e separadas por hífens.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
$CSS_POSITIONS: top, right, bottom, left, center;

// Não
$css-positions: top, right, bottom, left, center;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Sim
$CSS_POSITIONS: top, right, bottom, left, center

// Não
$css-positions: top, right, bottom, left, center
{% endhighlight %}
  </div>
</div>



### Leitura adicional

* [Dealing With Constants in Sass](http://www.sitepoint.com/dealing-constants-sass/)






## Namespace

Se tencionam distribuir o vosso código Sass, no caso de uma biblioteca, uma *framework*, um sistema de grelhas ou o que seja, talvez queiram considerar colocar todas as vossas variáveis, funções, *mixins* e *placeholders* no seu próprio *namespace*, para que não entrem em conflito com o código de ninguém.

Por exemplo, se trabalharem num projecto chamado *Sassy Unicorn* que se destina a ser usado por programadores de todo o mundo (quem não o faria, não é?), poderiam considerar usar `su-` como *namespace*. É específico o suficiente para prevenir colisões de nomes e curto o suficiente para não ser maçador a escrever.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$su-configuration: ( ... );

@function su-rainbow($unicorn) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$su-configuration: ( ... )

@function su-rainbow($unicorn)
  // ...
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>De notar que *namespacing* automático é definitivamente um objectivo de design para a próxima reformulação do <code>@import</code> de Sass 4.0. À medida que tal se aproxima da sua concretização, será cada vez menos útil fazer *namespacing* manual; eventualmente, bibliotecas manualmente *namespaced* poderão realmente ser mais difíceis de usar.</p>
</div>

### Leitura adicional

* [Please Respect the Global CSS Namespace](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
