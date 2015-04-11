
# Commentaires

CSS est un langage délicat, plein de hacks et de bizarreries. C’est pourquoi il doit être accompagné de commentaires abondants, surtout si vous, ou quelqu’un d’autre, prévoyez de relire et de mettre à jour le code dans 6 mois ou 1 an. Ne vous mettez pas dans la situation de dire, ou laisser dire *oh p... c’est pas moi qui ai écrit ça, mais pourquoi, pourquoi&nbsp;!?*.

Quelle que soit la simplicité de CSS, les commentaires sont toujours utiles. Vous pourriez expliquer par exemple&nbsp;:

* la structure et/ou le rôle d’un fichier&nbsp;;
* l’objectif d’un jeu de règles&nbsp;;
* l’idée cachée derrière un nombre magique&nbsp;;
* les raisons d’une déclaration CSS particulière&nbsp;;
* l’ordre des déclarations CSS&nbsp;;
* l’idée qui a abouti à une certaine façon de faire.

Je pourrais certainement citer encore bien d’autres raisons. Les commentaires prennent très peu de temps lorsqu’on les écrit dans la continuité du code, par conséquent veillez à les écrire au bon moment. Revenir sur un bout de code pour le commenter est non seulement irréaliste mais également très ennuyeux.





## Écrire des commentaires

Idéalement, tout jeu de règles CSS devrait être précédé d’un commentaire (de style C, c’est à dire `/* ... */`) expliquant l’objectif de ce bloc CSS. Ce commentaire peut contenir des explications numérotées pour expliquer certains aspects spécifiques du jeu de règles. Par exemple&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Helper class pour tronquer et ajouter une ellipse à une chaîne
 * de caractères trop longue pour tenir sur une ligne
 * 1. Empêche le retour automatique à la ligne,
 * force l’affichage sur une seule ligne.
 * 2. Ajoute une ellipse à la fin de la ligne si dépassement.
 */
.ellipsis {
  white-space: nowrap; /* 1 */
  text-overflow: ellipsis; /* 2 */
  overflow: hidden;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Helper class pour tronquer et ajouter une ellipse à une chaîne
 * de caractères trop longue pour tenir sur une ligne
 * 1. Empêcher le retour automatique à la ligne,
 * force l’affichage sur une seule ligne.
 * 2. Ajoute une ellipse à la fin de la ligne si dépassement.
 */
.ellipsis
  white-space: nowrap /* 1 */
  text-overflow: ellipsis /* 2 */
  overflow: hidden
{% endhighlight %}
  </div>
</div>

De manière générale, tout ce qui n’est pas évident à première vue devrait être commenté. La documentation n’est *jamais* superflue. Rappelez-vous qu’on ne commente jamais trop, n’hésitez pas à écrire des commentaires sur tout ce qui le mérite.

Lorsque vous commentez une section Sass, utilisez les commentaires en ligne Sass (c’est à dire `//`) à la place des blocs de commentaires de style C. Les commentaires seront invisibles dans le CSS résultant de la compilation, même en mode étendu pendant le développement.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Ajoute le module courant à la liste des modules importés.
// flag `!global` requis pour mettre à jour la variable globale.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Ajoute le module courant à la liste des modules importés.
// flag `!global` requis pour mettre à jour la variable globale.
$imported-modules: append($imported-modules, $module) !global
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

* [CSS Guidelines’ Commenting section](http://cssguidelin.es/#commenting)






## Documentation

Chaque variable, fonction, mixin et placeholder destiné à être réutilisé dans le code devrait être documenté en tant que partie de l’API globale à l’aide de [SassDoc](http://sassdoc.com).

SassDoc propose deux syntaxes différentes pour les commentaires, le style C ou en ligne. Par exemple, les deux extraits de code suivants sont des commentaires valables pour SassDoc&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Ligne de base du rythme vertical utilisé sur l’ensemble du code.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Ligne de base du rythme vertical utilisé sur l’ensemble du code.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Ligne de base du rythme vertical utilisé sur l’ensemble du code.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Ligne de base du rythme vertical utilisé sur l’ensemble du code.
/// @type Length
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Trois barres obliques (<code>/</code>) sont requises.</p>
</div>

Il n’y a pas d’avantage particulier à utiliser l’une ou l’autre méthode, choisissez celle avec laquelle vous vous sentez le plus à l’aise.

SassDoc a deux rôles principaux&nbsp;:

* imposer une standardisation des commentaires utilisant un système basé sur les annotations, pour tout ce qui fait partie d’une API publique ou privée&nbsp;;
* permettre de générer une version HTML de la documentation API en utilisant n’importe quel endpoint SassDoc (CLI tool, Grunt, Gulp, Broccoli, Node...).

<figure role="group">
<img alt="Documentation générée par SassDoc"
     sizes="100vw"
     srcset="/assets/images/sassdoc-preview_small.png  540w,
             /assets/images/sassdoc-preview_medium.png 900w,
             /assets/images/sassdoc-preview_large.png 1200w,
             /assets/images/sassdoc-preview_huge.png  1590w" />
<figcaption>Documentation générée par SassDoc</figcaption>
</figure>

Voici un exemple de mixin extensivement documenté avec SassDoc&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mixin servant à définir `width` et `height` simultanément.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - Largeur `width` de l’élément
/// @param {Length} $height ($width) - Hauteur `height` de l’élément
///
/// @example scss - Utilisation
///   .foo {
///     @include size(10em);
///   }
///
///   .bar {
///     @include size(100%, 10em);
///   }
///
/// @example css - CSS après compilation
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mixin servant à définir `width` et `height` simultanément.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - Largeur `width` de l’élément
/// @param {Length} $height ($width) - Hauteur `height` de l’élément
///
/// @example scss - Utilisation
///   .foo
///     +size(10em)
///
///   .bar
///     +size(100%, 10em)
///
/// @example css - CSS après compilation
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
* [New Features and New Look for SassDoc](http://webdesign.tutsplus.com/articles/new-features-and-a-new-look-for-sassdoc--cms-21914)
