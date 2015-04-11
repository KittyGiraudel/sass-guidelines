
# Avertissements et erreurs

S’il est une fonctionnalité de Sass souvent délaissée par les développeurs, c’est sa capacité à retourner dynamiquement des messages d’avertissement et d’erreur. Sass vient en effet avec trois directives permettant d’imprimer un contenu dans le système de sortie standard (CLI, compiling app...)&nbsp;:


* `@debug`;
* `@warn`;
* `@error`.

Mettons `@debug` de côté puisqu’il est clairement prévu pour déboguer SassScript, ce qui n’est pas notre objet ici. Il nous reste `@warn` et `@error` qui sont semblables sauf sur un point&nbsp;: l’un stoppe le compilateur, l’autre non —&nbsp;je suppose que vous savez lequel fait quoi.

Il y a bien des possibilités d’avertissements et d’erreurs dans Sass, n’importe quel mixin ou fonction qui attend un argument ou un type spécifique pourrait envoyer une erreur si quelque chose n’allait pas ou afficher un avertissement lorsque vous faites une hypothèse.




### Lectures complémentaires

* [An Introduction To Error Handling](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/HugoGiraudel/SassyLogger)






## Avertissements

Prenez par exemple cette fonction de [Sass-MQ](https://github.com/sass-mq/sass-mq) qui essaie de convertir une valeur de `px` à `em`&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size) {
  @if unitless($px) {
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.';
    @return mq-px2em($px + 0px);
  } @else if unit($px) == em {
    @return $px;
  }

  @return ($px / $base-font-size) * 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size)
  @if unitless($px)
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.'
    @return mq-px2em($px + 0px)
  @else if unit($px) == em
    @return $px

  @return ($px / $base-font-size) * 1em
{% endhighlight %}
  </div>
</div>

Si la valeur entrée se trouve être sans unité, la fonction suppose qu’elle est exprimée en pixels. Il est toutefois risqué de le faire sans avertir l’auteur que le logiciel a fait quelque chose qui pourrait être inattendu.






## Erreurs

Contrairement aux avertissements, les erreurs empêchent le compilateur d’aller plus loin. Elles stoppent la compilation et affichent un message pratique pour le débogage. C’est la raison pour laquelle les erreurs ne devraient être envoyées que lorsqu’il est impossible au programme d’aller plus loin. Si possible, essayez de contourner le problème et d’afficher un avertissement à la place.

Par exemple, admettons que vous construisez une fonction *getter* pour accéder à des valeurs à partir d’une map spécifique. Vous pourriez envoyer une erreur si la clé requise n’existe pas dans la map.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer’s name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer’s name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @if not map-has-key($z-indexes, $layer) {
    @error 'There is no layer named `#{$layer}` in $z-indexes. '
         + 'Layer should be one of #{map-keys($z-indexes)}.';
  }

  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer’s name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer’s name
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @if not map-has-key($z-indexes, $layer)
    @error 'There is no layer named `#{$layer}` in $z-indexes. '
         + 'Layer should be one of #{map-keys($z-indexes)}.'

  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
