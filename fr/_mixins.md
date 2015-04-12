
# Mixins

Les mixins sont l’une des fonctionnalités les plus utilisées de Sass. Elles sont essentielles pour la réutilisabilité et pour les composants DRY. Il y a de bonnes raisons à cela&nbsp;: les mixins permettent aux auteurs de définir des styles qui peuvent être réutilisés dans l’ensemble de la feuille de styles sans avoir à recourir à des classes non sémantiques comme `.float-left`.

Ils contiennent des règles CSS complètes et tout ce qui est permis n’importe où dans un document Sass. Ils acceptent même des arguments, comme les fonctions. Il va sans dire que les possibilités sont infinies.

Mais je dois vous mettre en garde contre l’abus de mixins. Là encore, le plus important est la *simplicité*. Il peut être tentant de construire des mixins extrêmement puissants faisant appel massivement à la logique. Cela ressemble à de l’ingénierie excessive et de nombreux développeurs souffrent de cette affection. Ne réfléchissez pas trop et surtout concentrez-vous sur la simplicité. Si un mixin dépasse 20 lignes de code, alors soit il doit être éclaté en parties plus réduites, soit il doit être repensé.






## Les bases

Ceci étant dit, les mixins sont extrêmement utiles et vous devriez faire usage de quelques-uns. La règle générale est que si vous repérez un groupe de propriétés CSS qui apparaissent toujours ensemble pour une bonne raison (c’est-à-dire pas par pure coïncidence), vous pouvez les regrouper dans un mixin. Le [micro-clearfix hack de Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) par exemple mérite d’être déclaré dans un mixin (sans argument).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper to clear inner floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Helper to clear inner floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix
  &::after
    content: ''
    display: table
    clear: both
{% endhighlight %}
  </div>
</div>

Un autre exemple valable serait un mixin permettant de dimensionner un élément, qui définirait à la fois sa largeur et sa hauteur, en même temps. Non seulement il simplifie la saisie du code mais il en facilite également la lecture.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper to size an element
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Helper to size an element
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)






## Listes d'Arguments

Lorsque vous avez affaire à un nombre inconnu d’arguments dans un mixin, utilisez toujours une `arglist` plutôt qu’une liste. On peut voir `arglist` comme le 8<sup>e</sup> type de données de Sass, caché et non documenté, qui est implicitement utilisé lorsqu’on passe un nombre arbitraire d’arguments dans un mixin ou une fonction dont la signature contient `...`.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin shadows($shadows...) {
  // type-of($shadows) == 'arglist'
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=shadows($shadows...)
  // type-of($shadows) == 'arglist'
  // ...
{% endhighlight %}
  </div>
</div>

Quand vous construisez un mixin qui accepte quelques arguments (disons 3 ou plus), pensez à deux fois avant de les merger sous forme de liste ou de map en croyant que ce sera plus facile que de les passer un par un.

Sass gère très intelligemment les mixins et les déclarations de fonction, vous pouvez passer une liste ou une map comme une `arglist` dans une fonction ou un mixin de façon à ce qu'ils soient traités comme une série d’arguments.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin dummy($a, $b, $c) {
  // ...
}

// Oui
@include dummy(true, 42, 'kittens');

// Oui mais Non
$params: (true, 42, 'kittens');
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3));

// Oui
$params: (true, 42, 'kittens');
@include dummy($params...);

// Oui
$params: (
  'c': 'kittens',
  'a': true,
  'b': 42,
);
@include dummy($params...);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=dummy($a, $b, $c)
  // ...

// Oui
+dummy(true, 42, 'kittens')

// Oui mais Non
$params: (true, 42, 'kittens')
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3))

// Oui
$params: (true, 42, 'kittens')
+dummy($params...)

// Oui
$params: ( 'c': 'kittens', 'a': true, 'b': 42,)
+dummy($params...)
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)






## Mixins et préfixes constructeurs

Il pourrait être tentant de définir des mixins personnalisés pour traiter les préfixes constructeurs utilisés pour les propriétés CSS partiellement ou non supportées. Mais nous n’allons pas faire cela. D’abord, si vous pouvez utiliser [Autoprefixer](https://github.com/postcss/autoprefixer), faites-le. Il allègera votre code Sass, il sera toujours à jour et fera un bien meilleur boulot que vous pour préfixer ce qui doit l’être.

Malheureusement, Autoprefixer n’est pas toujours une option envisageable. Si vous utilisez [Bourbon](http://bourbon.io/) ou [Compass](http://compass-style.org/), vous savez sans doute déjà qu’ils proposent tous les deux une collection de mixins qui traitent les préfixes constructeurs pour vous. Utilisez-les.

Si vous ne pouvez utiliser ni Autoprefixer, ni Bourbon, ni Compass, alors —&nbsp;et seulement alors&nbsp;— vous pouvez créer votre propre mixin pour préfixer les propriétés CSS. Attention, ne construisez pas un mixin par propriété en écrivant manuellement chaque préfixe constructeur.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Non
@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  transform: $value;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Non
=transform($value)
  -webkit-transform: $value
  -moz-transform: $value
  transform: $value
{% endhighlight %}
  </div>
</div>

Faites-le plus intelligemment.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mixin helper to output vendor prefixes
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - Unprefixed CSS property
/// @param {*} $value - Raw CSS value
/// @param {List} $prefixes - List of prefixes to output
@mixin prefix($property, $value, $prefixes: ()) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }

  #{$property}: $value;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mixin helper to output vendor prefixes
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - Unprefixed CSS property
/// @param {*} $value - Raw CSS value
/// @param {List} $prefixes - List of prefixes to output
=prefix($property, $value, $prefixes: ())
  @each $prefix in $prefixes
    -#{$prefix}-#{$property}: $value

  #{$property}: $value
{% endhighlight %}
  </div>
</div>

L’utilisation de ce mixin devrait être assez simple&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  @include prefix(transform, rotate(90deg), ('webkit', 'ms');
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  +prefix(transform, rotate(90deg), ('webkit', 'ms')
{% endhighlight %}
  </div>
</div>

Gardez à l’esprit que c’est une solution assez pauvre. Par exemple, elle ne peut pas traiter les polyfills complexes tels que ceux requis pour Flexbox. En ce sens, Autoprefixer est une bien meilleure solution.




### Lectures complémentaires

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)
