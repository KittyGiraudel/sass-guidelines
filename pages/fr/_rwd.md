
## Responsive Web Design et points de rupture

Je ne pense pas qu’il soit nécessaire de présenter le Responsive Web Design qui est maintenant omniprésent. Cependant vous vous demandez peut-être *pourquoi diable parler de RWD dans un guide de style Sass&nbsp;?* En fait, Sass peut nous faciliter la vie avec les points de rupture, voici ce qu’on peut faire.

### Nommer les points de rupture

Je pense qu’on peut affirmer sans crainte que les *media queries* ne devraient jamais être liées à tel ou tel terminal. Par exemple, cibler spécifiquement les iPads ou les téléphones Blackberry est une très mauvaise idée. Les media queries doivent s’occuper d’amplitudes de tailles d’écran, jusqu’à ce que le design ne fonctionne plus comme souhaité et que la media query suivante prenne la relève.

Pour ces mêmes raisons, les points de rupture ne doivent pas être nommés en fonction d’un nom de terminal mais plutôt de quelque chose de plus général, d’autant que certains téléphones sont maintenant plus grands que certaines tablettes, certaines tablettes plus grandes que certains écrans d’ordinateurs, etc.

{% include snippets/rwd/01/index.html %}

Ici, il est clair que toute convention de nommage clairement déconnectée de toute référence à un device particulier fera l’affaire, du moment qu’elle donne à comprendre l’ordre de grandeur.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>L’exemple qui précède utilise des maps imbriquées pour définir les points de rupture, mais tout dépend de la façon dont vous gérez vos points de rupture. On pourrait tout aussi bien choisir des chaînes de caractères plutôt que des maps internes, pour plus de flexibilité (p.ex. <code>'(min-width: 800px)'</code>).</p>
</div>

### Gestion des points de rupture

Une fois vos points de rupture nommés comme vous le souhaitez, il vous faut un moyen de les utiliser dans les media queries. Il y a de nombreuses façons d’y parvenir, mais je dois dire que je suis un fan des fonctions *getter* pour lire les maps de points. C’est un système à la fois simple et efficace.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Évidemment, c’est un gestionnaire de points de rupture assez simpliste, si vous avez besoin d’un gestionnaire plus permissif, et si vous ne voulez pas réinventer la roue, je vous recommande <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> ou <a href="https://github.com/eduardoboucas/include-media">include-media</a> qui ont fait leurs preuves.</p>
  <p>Si vous souhaitez en savoir davantage sur les façons d’aborder les Media Queries en Sass, <a href="https://www.sitepoint.com/managing-responsive-breakpoints-sass/">SitePoint</a> (via votre serviteur) et <a href="https://css-tricks.com/approaches-media-queries-sass/">CSS-Tricks</a> proposent de très beaux articles.</p>
</div>

### Utilisation des Media Queries

Il y a peu, un débat faisait rage sur la question de savoir où placer les media queries dans le code&nbsp;: à l’intérieur des sélecteurs (comme le permet Sass) ou ailleurs de façon strictement dissociée&nbsp;? Je dois dire que je suis un fervent défenseur du système *media-queries-dans-les-sélecteurs* car il s’accorde bien avec l’idée de *composants*.

{% include snippets/rwd/04/index.html %}

Ce qui conduit au résultat suivant en CSS&nbsp;:

{% include snippets/rwd/05/index.html %}

On vous dira que cette convention a pour effet la duplication de media queries en CSS, et c’est absolument vrai, même si des tests ont été réalisés qui montrent que cela n’a pas d’importance une fois que Gzip (ou équivalent) a fait son oeuvre&nbsp;:

> … nous avons étudié les implications en termes de performance de la combinaison ou de la dissociation des media queries et nous sommes arrivés à la conclusion que la différence est, au pire, minimale, au mieux inexistante.
> &mdash; Sam Richards, au sujet de Breakpoint

Maintenant, si vous êtes vraiment soucieux d’éviter toute duplication, vous pouvez utiliser un outil pour merger les media queries, comme [cette Gem](https://github.com/aaronjensen/sass-media_query_combiner), cependant je dois vous avertir de possibles effets collatéraux liés au déplacement de code —&nbsp;n’oubliez pas que l’ordre des sources est important en CSS.
