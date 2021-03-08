
## Mixins

Les mixins sont l’une des fonctionnalités les plus utilisées de Sass. Elles sont essentielles pour la réutilisabilité et pour les composants DRY. Il y a de bonnes raisons à cela&nbsp;: les mixins permettent aux auteurs de définir des styles qui peuvent être réutilisés dans l’ensemble de la feuille de styles sans avoir à recourir à des classes non sémantiques comme `.float-left`.

Ils contiennent des règles CSS complètes et tout ce qui est permis n’importe où dans un document Sass. Ils acceptent même des arguments, comme les fonctions. Il va sans dire que les possibilités sont infinies.

Mais je dois vous mettre en garde contre l’abus de mixins. Là encore, le plus important est la *simplicité*. Il peut être tentant de construire des mixins extrêmement puissants faisant appel massivement à la logique. Cela ressemble à de l’ingénierie excessive et de nombreux développeurs souffrent de cette affection. Ne réfléchissez pas trop et surtout concentrez-vous sur la simplicité. Si un mixin dépasse 20 lignes de code, alors soit il doit être éclaté en parties plus réduites, soit il doit être repensé.

### Les bases

Ceci étant dit, les mixins sont extrêmement utiles et vous devriez faire usage de quelques-uns. La règle générale est que si vous repérez un groupe de propriétés CSS qui apparaissent toujours ensemble pour une bonne raison (c’est-à-dire pas par pure coïncidence), vous pouvez les regrouper dans un mixin. Le [micro-clearfix hack de Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) par exemple mérite d’être déclaré dans un mixin (sans argument).

{% include snippets/mixins/01/index.html %}

Un autre exemple valable serait un mixin permettant de dimensionner un élément, qui définirait à la fois sa largeur et sa hauteur, en même temps. Non seulement il simplifie la saisie du code mais il en facilite également la lecture.

{% include snippets/mixins/02/index.html %}

Pour des exemples plus avancés de mixins, jetez un oeil à [celui-ci pour générer des triangles en CSS](https://www.sitepoint.com/sass-mixin-css-triangles/), [celui-ci pour créer de longues ombres](https://www.sitepoint.com/ultimate-long-shadow-sass-mixin/) ou encore [celui-ci pour gérer les anciennes syntaxes de dégradés](https://www.sitepoint.com/building-linear-gradient-mixin-sass/).

### Argument-less mixins

Parfois les mixins sont utilisés simplement pour éviter de répéter le même groupe de déclarations encore et encore, et par conséquent ne nécessitent pas de paramètres, ou se trouvent avoir des valeurs par défaut suffisamment éloquentes qu’il ne soit pas nécessaire de leur passer d’arguments.

Dans ces cas de figure, on peut tout à fait omettre les parenthèses lorsqu’on appelle un mixin. Le mot-clé `@include` (ou signe `+` dans le cas de la syntaxe indentée) fait déjà office d’indicateur qu’il s’agit d’une inclusion de mixin ; les parenthèses sont obsolètes.

{% include snippets/mixins/08/index.html %}

### Listes d'Arguments

Lorsque vous avez affaire à un nombre inconnu d’arguments dans un mixin, utilisez toujours une `arglist` plutôt qu’une liste. On peut voir `arglist` comme le 8<sup>e</sup> type de données de Sass, caché et non documenté, qui est implicitement utilisé lorsqu’on passe un nombre arbitraire d’arguments dans un mixin ou une fonction dont la signature contient `...`.

{% include snippets/mixins/03/index.html %}

Quand vous construisez un mixin qui accepte quelques arguments (disons 3 ou plus), pensez à deux fois avant de les merger sous forme de liste ou de map en croyant que ce sera plus facile que de les passer un par un.

Sass gère très intelligemment les mixins et les déclarations de fonction, vous pouvez passer une liste ou une map comme une `arglist` dans une fonction ou un mixin de façon à ce qu'ils soient traités comme une série d’arguments.

{% include snippets/mixins/04/index.html %}

Pour plus d’information sur les différences entre des arguments multiples, une liste, et une liste d’arguments pour un mixin, [SitePoint a un très bel article](https://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/).

### Mixins et préfixes constructeurs

Il pourrait être tentant de définir des mixins personnalisés pour traiter les préfixes constructeurs utilisés pour les propriétés CSS partiellement ou non supportées. Mais nous n’allons pas faire cela. D’abord, si vous pouvez utiliser [Autoprefixer](https://github.com/postcss/autoprefixer), faites-le. Il allégera votre code Sass, il sera toujours à jour et fera un bien meilleur boulot que vous pour préfixer ce qui doit l’être.

Malheureusement, Autoprefixer n’est pas toujours une option envisageable. Si vous utilisez [Bourbon](https://bourbon.io/) ou [Compass](http://compass-style.org/), vous savez sans doute déjà qu’ils proposent tous les deux une collection de mixins qui traitent les préfixes constructeurs pour vous. Utilisez-les.

Si vous ne pouvez utiliser ni Autoprefixer, ni Bourbon, ni Compass, alors —&nbsp;et seulement alors&nbsp;— vous pouvez créer votre propre mixin pour préfixer les propriétés CSS. Attention, ne construisez pas un mixin par propriété en écrivant manuellement chaque préfixe constructeur.

{% include snippets/mixins/05/index.html %}

Faites-le plus intelligemment.

{% include snippets/mixins/06/index.html %}

L’utilisation de ce mixin devrait être assez simple&nbsp;:

{% include snippets/mixins/07/index.html %}

Gardez à l’esprit que c’est une solution assez pauvre. Par exemple, elle ne peut pas traiter les polyfills complexes tels que ceux requis pour Flexbox. En ce sens, Autoprefixer est une bien meilleure solution.
