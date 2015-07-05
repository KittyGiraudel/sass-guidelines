
# Responsive Web Design and breakpoints

Eu não acho que ainda tenhamos de apresentar Design Web Responsivo agora que está em todo o lado. No entanto voçês podem-se perguntar *porque há uma secção de RWD num guia de estilos?* Na realidade existem algumas coisas que podem ser feitas para facilitar o trabalho com breakpoints, como tal achei que podia não ser má ideia lista-las aqui.




## Definir breakpoints

Acho que é seguro dizer que as media queries não devem estar agarradas a dispositivos específicos. Por exemplo, seria definitivamente uma má ideia ter especificamente iPhones ou Blackberrys como publico-alvo. As media queries devem afectar um conjunto de tamanhos de ecrã, pelo menos até o design partir e a próxima media query entra em acção.

Pelos mesmos motivos, breakpoints não devem ter nomes de dispositivos, mas sim algo mais geral. Especialmente agora, porque alguns telemóveis são maiores que tablets, e algumas tablets são maiores que pequenos ecrãs de computadores, e por aí além...

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Sim
$breakpoints: (
  'medio': (min-width: 800px),
  'grande': (min-width: 1000px),
  'enorme': (min-width: 1200px),
);

// Não
$breakpoints: (
  'tablet': (min-width: 800px),
  'computer': (min-width: 1000px),
  'tv': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$breakpoints: ("medium": (min-width: 800px), "large": (min-width: 1000px), "huge": (min-width: 1200px))

// Não
$breakpoints: ("tablet": (min-width: 800px), "computer": (min-width: 1000px), "tv": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

Por esta altura, qualquer convenção serve, desde que ajude a clarificar que o design não está intimamente agarrado a um tipo de dispositivo especifíco e que dê uma ideia da escala de magnitudes.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$breakpoints: (
  'semente': (min-width: 800px),
  'rebento': (min-width: 1000px),
  'planta': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$breakpoints: ("semente": (min-width: 800px), "rebento": (min-width: 1000px), "planta": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>




### Leitura Adicional

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)






## Gestor de Breakpoints

Assim que definam os breakpoints da maneira que quiserem, voçês precisam de arranjar uma maneira de os usar realmente em media queries. Há imensas maneiras de o fazer, mas confesso que sou grande fã do mapa de breakpoints acedido por uma função de leitura. Este sistema é simples e eficiente.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Gestor Responsivo.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media #{inspect(map-get($breakpoints, $breakpoint))} {
      @content;
    }
  }

  @else {
    @error 'No value found for `#{$breakpoint}`. '
         + 'Please make sure it is defined in `$breakpoints` map.';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Gestor Responsivo.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
=respond-to($breakpoint)
  @if map-has-key($breakpoints, $breakpoint)
    @media #{inspect(map-get($breakpoints, $breakpoint))}
      @content

  @else
    @error 'Nenhum valor encontrado para `#{$breakpoint}`. '
         + 'Por favor assegure que está definido no mapa `$breakpoints`.'
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Obviamente, este é um gestor de breakpoints bastante simplista que não irá funcionar quando for preciso lidar com breakpoints customizados ou que necessitem de multiplas verificações. </p>
  <p>Se precisa de um gestor de breakpoints um bocado mais permissivo, permita-me recomendar que não reinvente a roda e que use algo que já provou ser eficaz, tal como <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> ou <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>



### Leitura Adicional

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)






## Media Queries Usage

Não há muito tempo atrás, houve um debate acesso sobre onde é que as media queries deveriam ser escritas: deveriam ser escritas dentro dos selectores (tal como Sass o permite), ou deveriam ser separadas?
Tenho a dizer que sou um defensor renhido do sistema *media-queries-dentro-de-selectores*, um vez que acho que encaixa bem com a ideia de *componentes*

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  @include respond-to('medium') {
    color: blue;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  +respond-to('medium')
    color: blue
{% endhighlight %}
  </div>
</div>

Que gera o seguinte resultado em CSS:

{% highlight css %}
.foo {
  color: red;
}

@media (min-width: 800px) {
  .foo {
    color: blue;
  }
}
{% endhighlight %}

Podem ter ouvido que esta convenção resulta na duplicação das media queries no resultado de CSS. Isto é definitivamente verdade. No entanto, [foram feitos testes](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) e o resultado final é que não interessa assim que Gzip (ou algo equivalente) fizer o seu trabalho:

> … we hashed out whether there were performance implications of combining vs scattering Media Queries and came to the conclusion that the difference, while ugly, is minimal at worst, essentially non-existent at best.<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), regarding [Breakpoint](http://breakpoint-sass.com/)

Agora, se realmente tiverem preocupados com a duplicação das media queries, podem usar uma ferramenta para as juntar, tal como [esta gema](https://github.com/aaronjensen/sass-media_query_combiner) no entanto, sinto que vos devo avisar na possibilidade de efeitos secundários de alteram a ordem do código. Um vez que já sabem que a ordem do código-fonte é importante.



### Leitura Adicional

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
