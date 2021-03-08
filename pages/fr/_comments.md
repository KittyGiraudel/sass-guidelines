
## Commentaires

CSS est un langage délicat, plein de hacks et de bizarreries. C’est pourquoi il doit être accompagné de commentaires abondants, surtout si vous, ou quelqu’un d’autre, prévoyez de relire et de mettre à jour le code dans 6 mois ou 1 an. Ne vous mettez pas dans la situation de dire, ou laisser dire *oh p… c’est pas moi qui ai écrit ça, mais pourquoi, pourquoi&nbsp;!?*.

Quelle que soit la simplicité de CSS, les commentaires sont toujours utiles. Vous pourriez expliquer par exemple&nbsp;:

* la structure et/ou le rôle d’un fichier&nbsp;;
* l’objectif d’un jeu de règles&nbsp;;
* l’idée cachée derrière un nombre magique&nbsp;;
* les raisons d’une déclaration CSS particulière&nbsp;;
* l’ordre des déclarations CSS&nbsp;;
* l’idée qui a abouti à une certaine façon de faire.

Je pourrais certainement citer encore bien d’autres raisons. Les commentaires prennent très peu de temps lorsqu’on les écrit dans la continuité du code, par conséquent veillez à les écrire au bon moment. Revenir sur un bout de code pour le commenter est non seulement irréaliste mais également très ennuyeux.

### Écrire des commentaires

Idéalement, tout jeu de règles CSS devrait être précédé d’un commentaire (de style C, c’est-à-dire `/* … */`) expliquant l’objectif de ce bloc CSS. Ce commentaire peut contenir des explications numérotées pour expliquer certains aspects spécifiques du jeu de règles. Par exemple&nbsp;:

{% include snippets/comments/01/index.html %}

De manière générale, tout ce qui n’est pas évident à première vue devrait être commenté. La documentation n’est *jamais* superflue. Rappelez-vous qu’on ne commente jamais trop, n’hésitez pas à écrire des commentaires sur tout ce qui le mérite.

Lorsque vous commentez une section Sass, utilisez les commentaires en ligne Sass (c’est-à-dire `//`) à la place des blocs de commentaires de style C. Les commentaires seront invisibles dans le CSS résultant de la compilation, même en mode étendu pendant le développement.

{% include snippets/comments/02/index.html %}

Cette façon de faire est également encouragée dans CSS Guidelines dans la section [Commenting](https://cssguidelin.es/#commenting).

### Documentation

Chaque variable, fonction, mixin et placeholder destiné à être réutilisé dans le code devrait être documenté en tant que partie de l’API globale à l’aide de [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Trois barres obliques (<code>/</code>) sont requises.</p>
</div>

Il n’y a pas d’avantage particulier à utiliser l’une ou l’autre méthode, choisissez celle avec laquelle vous vous sentez le plus à l’aise.

SassDoc a deux rôles principaux&nbsp;:

* imposer une standardisation des commentaires utilisant un système basé sur les annotations, pour tout ce qui fait partie d’une API publique ou privée&nbsp;;
* permettre de générer une version HTML de la documentation API en utilisant n’importe quel endpoint SassDoc (CLI tool, Grunt, Gulp, Broccoli, Node…).

{% include images/sassdoc.html %}

Voici un exemple de mixin extensivement documenté avec SassDoc&nbsp;:

{% include snippets/comments/04/index.html %}
