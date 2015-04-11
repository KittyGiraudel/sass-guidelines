
# Variables

Les variables sont l’essence de tout langage de programmation. Elles nous permettent de réutiliser des valeurs sans avoir à les recopier sans cesse. Plus important encore, elles facilitent les mises à jour. Plus besoin de chercher et remplacer, ni de rechercher manuellement.

Cependant, CSS n’est rien d’autre qu’un grand panier contenant tous nos oeufs. Contrairement à de nombreux langages, CSS ne connaît pas vraiment la notion de *portée lexicale* (*scope*). Il nous faut donc être attentifs lorsque nous ajoutons de nouvelles variables, si nous voulons éviter les conflits.

Mon conseil serait de ne créer de variables que lorsque cela fait vraiment sens. Ne créez pas de nouvelles variables juste pour le plaisir, ça n’améliorera en rien votre code. Une nouvelle variable ne devrait être créée que lorsque les critères suivants sont réunis&nbsp;:


* La valeur est répétée au moins deux fois&nbsp;;
* il y a des chances que la valeur soit mise à jour au moins une fois&nbsp;;
* toutes les occurrences de la valeur sont liées à la variable (c’est-à-dire pas par coïncidence).

Rien ne sert de déclarer une variable qui ne sera jamais mise à jour ou qui n’est utilisée qu’à un seul endroit.






## Scoping

Le scoping des variables dans Sass a évolué avec les années. Jusqu’à récemment, les déclarations de variables à l’intérieur d’un jeu de règles et autres portées étaient locales par défaut. Cependant, lorsqu’il y avait déjà une variable globale portant le même nom, la déclaration locale modifiait la variable globale. Depuis la version 3.4, Sass traite correctement le concept de portée et crée une nouvelle variable locale.

La documentation parle de *global variable shadowing*. Lorsqu’on déclare à un niveau local (sélecteur, fonction, mixin,...) une variable qui existe déjà au niveau global, on dit que la variable locale *masque* la variable globale. Autrement dit, elle prend le pas sur la variable globale au niveau local.

Le petit code qui suit explique le concept de *variable shadowing*&nbsp;:


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Initialise une variable globale au niveau racine.
$variable: 'initial value';

// Crée un mixin qui prend le pas sur cette variable globale.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Crée une variable locale qui "masque" la variable globale.
  $variable: 'local value';

  // On inclut le mixin: il prend le pas sur la variable globale.
  @include global-variable-overriding;

  // Impression de la valeur de la variable.
  // C'est la variable **locale**, car elle masque la variable globale.
  content: $variable;
}

// Impression de la variable dans un autre sélecteur qui ne masque pas.
// C'est la variable **globale**, comme on s'y attendait.
.other-local-scope::before {
  content: $variable;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Initialise une variable globale au niveau racine.
$variable: 'initial value'

// Crée un mixin qui prend le pas sur cette variable globale.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
 // Crée une variable locale qui "masque" la variable globale.
  $variable: 'local value'

  // On inclut le mixin: il prend le pas sur la variable globale.
  +global-variable-overriding

  // Impression de la valeur de la variable.
  // C'est la variable **locale**, car elle masque la variable globale.
  content: $variable

// Impression de la variable dans un autre sélecteur qui ne masque pas.
// C'est la variable **globale**, comme on s'y attendait.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>






## Le flag `!default`

Quand on construit une bibliothèque, un framework, un système de grilles ou n’importe quelle structure Sass destinée à être distribuée et utilisée par des développeurs externes, toutes les variables de configuration doivent être définies avec le flag `!default` ce qui permet qu’elles soient écrasées.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$baseline: 1em !default;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$baseline: 1em !default
{% endhighlight %}
  </div>
</div>

De cette manière, un développeur peut définir sa propre variable `$baseline` *avant* d’importer votre bibliothèque sans risquer de voir sa valeur redéfinie.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// La variable du développeur
$baseline: 2em;

// la déclaration de `$baseline` dans votre bibliothèque
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// La variable du développeur
$baseline: 2em

// la déclaration de `$baseline` dans votre bibliothèque
@import your-library

// $baseline == 2em
{% endhighlight %}
  </div>
</div>






## Le flag `!global`

Le flag `!global` ne doit être utilisé que lorsque l’on veut qu’une variable locale prenne le pas sur une variable globale. Lorsqu’on définit une variable à la racine, le flag `!global` doit être omis.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
$baseline: 2em;

// Non
$baseline: 2em !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
$baseline: 2em

// Non
$baseline: 2em !global
{% endhighlight %}
  </div>
</div>






## Variables multiples ou maps

L’utilisation de maps plutôt que de variables multiples et distinctes présente un certain nombre d’avantages. Le principal réside dans la possibilité d’utiliser des boucles sur une map, ce qui n’est pas possible avec des variables distinctes.

Un autre avantage de l’utilisation de maps est la possibilité de créer des fonctions *getter* pour fournir une API plus facile d’usage. Par exemple, considérons le code Sass suivant&nbsp;:


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
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
