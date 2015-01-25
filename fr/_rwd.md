
# Responsive Web Design et breakpoints

Je ne pense pas qu'il soit nécessaire de présenter le Design Responsif qui est maintenant omniprésent. Cependant vous vous demandez peut-être *pourquoi diable parler de RWD dans un guide de style Sass?* En fait, Sass peut nous faciliter la vie avec les breakpoints, voici ce qu'on peut faire.




## Nommer les breakpoints

Je pense qu'on peut affirmer sans crainte que les media queries ne devraient jamais être liées à tel ou tel terminal. Par exemple, cibler spécifiquement les iPads ou les téléphones Blackberry est une très mauvaise idée. Les media queries doivent s'occuper d'amplitudes de tailles d'écran, jusqu'à ce que le design ne fonctionne plus comme souhaité et que la media query suivante prenne la relève.
 
Pour ces mêmes raisons, les breakpoints ne doivent pas être nommés en fonction d'un nom de terminal mais plutôt de quelque chose de plus général, d'autant que certains téléphones sont maintenant plus grands que certaines tablettes, certaines tablettes plus grandes que certains écrans d'ordinateurs, etc.



<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
$breakpoints: (
  'medium': (min-width: 800px),
  'large': (min-width: 1000px),
  'huge': (min-width: 1200px),
);

// Non
$breakpoints: (
  'tablet': (min-width: 800px),
  'computer': (min-width: 1000px),
  'tv': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
$breakpoints: ("medium": (min-width: 800px), "large": (min-width: 1000px), "huge": (min-width: 1200px))

// Non
$breakpoints: ("tablet": (min-width: 800px), "computer": (min-width: 1000px), "tv": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

Ici, il est clair que toute convention de nommage clairement déconnectée de toute référence à un device particulier fera l'affaire, du moment qu'elle donne à comprendre l'ordre de grandeur.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$breakpoints: (
  'graine': (min-width: 800px),
  'pousse': (min-width: 1000px),
  'plante': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$breakpoints: ("graine": (min-width: 800px), "pousse": (min-width: 1000px), "plante": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>




### Lecture complémentaire

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)






## Gestion des breakpoints

Une fois vos breakpoints nommés comme vous le souhaitez, il vous faut un moyen de les utiliser dans les media queries. Il y a de nombreuses façons d'y parvenir, mais je dois dire que je suis un fan des fonctions *getter* pour lire les maps de breakpoints. C'est un système à la fois simple et efficace.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Responsive manager.
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
/// Responsive manager.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
=respond-to($breakpoint)
  @if map-has-key($breakpoints, $breakpoint)
    @media #{inspect(map-get($breakpoints, $breakpoint))}
      @content

  @else
    @error 'No value found for `#{$breakpoint}`. '
         + 'Please make sure it is defined in `$breakpoints` map.'
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Évidemment, c'est un gestionnaire de breakpoint assez simpliste, qui ne suffira pas lorsque vous devrez gérer des breakpoints personnalisés ou multi-critères.</p>
  <p>Si vous avez besoin d'un gestionnaire de breakpoints plus permissif, et si vous ne voulez pas réinventer la roue, je vous recommande <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> ou <a href="https://github.com/eduardoboucas/include-media">include-media</a> qui ont fait leurs preuves.</p>
</div>



### Lectures complémentaires

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)






## Utilisation des Media Queries

Il y a peu, un débat faisait rage sur la question de savoir où placer les media queries dans le code&nbsp;: à l'intérieur des sélecteurs (comme le permet Sass) ou ailleurs de façon strictement dissociée&nbsp;? Je dois dire que je suis un fervent défenseur du système *media-queries-dans-les-sélecteurs* car il s'accorde bien avec l'idée de *composants*.



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

Ce qui conduit au résultat suivant en CSS&nbsp;:

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

On vous dira que cette convention a pour effet la duplication de media queries en CSS, et c'est absolument vrai, même si des [tests ont été réalisés](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) qui montrent que cela n'a pas d'importance une fois que Gzip (ou équivalent) a fait son oeuvre&nbsp;:



> … nous avons étudié les implications en termes de performance de la combinaison ou de la dissociation des media queries et nous sommes arrivés à la conclusion que la différence est, au pire, minimale, au mieux inexistante.  
> &mdash; [Sam Richards](https://twitter.com/snugug), au sujet de [Breakpoint](http://breakpoint-sass.com/)

Maintenant, si vous êtes vraiment soucieux d'éviter toute duplication, vous pouvez utiliser un outil pour merger les media queries, comme [cette gem](https://github.com/aaronjensen/sass-media_query_combiner), cependant je dois vous avertir de possibles effets collatéraux liés au déplacement de code —&nbsp;n'oubliez pas que l'ordre des sources est important en CSS.



### Lectures complémentaires

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
