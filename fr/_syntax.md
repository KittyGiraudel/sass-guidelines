
# Syntaxe & formatage

À mon avis, la première chose que devrait proposer un guide de style est de décrire la façon dont notre code doit être écrit, du point vue de son aspect.

Lorsque plusieurs développeurs sont impliqués dans l’écriture de CSS sur un même projet, il ne faut pas longtemps avant que l’un d’entre eux commence à faire les choses à sa façon. Les directives servent à éviter cette perte de cohérence, mais aussi à aider chacun à lire et à mettre à jour le code.

Globalement, voici ce que nous voulons (inspiré sans honte des [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting))&nbsp;:

* Une indentation à deux (2) espaces, pas de tabulation ;
* Pas plus de 80 caractères par ligne ;
* Du CSS écrit sur plusieurs lignes ;
* Une utilisation efficace des lignes vides.

{% include snippets/syntax/01/index.html %}

Nous n’aborderons pas la question de l’organisation des fichiers dans cette section. C’est l’objet d’une [autre section](#architecture).

## Chaînes de caractères

Ça peut paraître incroyable, mais les chaînes de caractères jouent un grand rôle dans les écosystèmes CSS et Sass. La plupart des valeurs CSS sont soit des longueurs soit des chaînes de caractères (habituellement sans guillemets), il est donc crucial de se tenir à des règles lorsqu’on utilise ces chaînes dans Sass.

### Encodage

Afin d’éviter tout problème potentiel lié à l’encodage des caractères, il est recommandé de forcer l’encodage [UTF-8](http://fr.wikipedia.org/wiki/UTF-8) dans le [fichier principal](#fichier-principal) en utilisant la directive `@charset`. Assurez-vous que ce soit le premier élément de la feuille de style et qu’il n’y ait aucun caractère de quelque nature en amont.

{% include snippets/syntax/02/index.html %}

### Guillemets

En CSS, les chaînes de caractères n’ont pas à être entourées de guillemets, pas même celles qui contiennent des espaces. Prenez les noms de `font-family` par exemple&nbsp;: peu importe qu’elles soient ou non entre guillemets.

C’est pourquoi dans Sass les chaînes de caractères n’ont pas non plus à être entourées de guillemets. Mieux, (et heureusement) une chaîne de caractères entre guillemets est strictement équivalente à sa jumelle sans guillemets (p.ex. `'abc'` est strictement égale à `abc`).

Ceci étant, les langages qui ne requièrent pas d’envelopper les chaînes de caractères entre guillemets sont une infime minorité, c’est la raison pour laquelle **les chaînes de caractères devraient toujours être entourées de guillemets simples** (`'`) dans Sass (pourquoi des guillemets simples&nbsp;? parce qu’ils sont plus faciles à taper sur un clavier *qwerty*). À part la cohérence avec d’autres langages, dont JavaScript le cousin de CSS, il y a plusieurs raisons à ce choix&nbsp;:

* les noms de couleurs sont traités comme des couleurs lorsqu’ils ne sont pas entre guillemets, ce qui peut conduire à de sérieux problèmes&nbsp;;
* la plupart des colorations syntaxiques fonctionnent mieux avec les guillemets&nbsp;;
* la lisibilité est améliorée&nbsp;;
* il n’y a pas de raison valable de ne pas utiliser de guillemets.

{% include snippets/syntax/03/index.html %}

### Chaînes comme valeurs CSS

Certaines valeurs spécifiques de CSS, telles que `initial` ou `sans-serif` ne doivent pas être entourées de guillemets. Si vous déclarez `font-family: 'sans-serif'` CSS ignorera votre déclaration car il attend un identifiant et non une chaîne de caractères. C’est pourquoi on ne met jamais de guillemets autour de ces valeurs.

{% include snippets/syntax/04/index.html %}

Il convient de faire une distinction entre les chaînes de caractères qui sont des valeurs CSS (il s'agit d’identifiants CSS) comme dans l’exemple qui précède, et les chaînes de caractères correspondant à des types de données Sass (par exemple les clés des maps).

On ne met pas de guillemets pour les premières, mais il en faut pour ces dernières.

### Chaînes contenant des guillemets

Si une chaîne de caractères contient un ou plusieurs guillemets simples, on peut éviter l’utilisation d’échappements répétés en enveloppant la chaîne à l’intérieur de guillemets doubles (`"`) .

{% include snippets/syntax/05/index.html %}

### URLs

Les URL doivent être écrites entre guillemets pour les mêmes raisons que ci-dessus&nbsp;:

{% include snippets/syntax/06/index.html %}

###### Lectures complémentaires

* [All You Ever Need to Know About Sass Interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/HugoGiraudel/SassyStrings)

## Nombres

Dans Sass, un nombre est une donnée qui peut avoir une unité ou pas et qui décrit une longueur, une durée, une fréquence, un angle, etc. Cela permet d’effectuer des calculs sur les mesures.

### Zéros

Une valeur décimale inférieure à `1` doit être précédée d’un zéro. N’écrivez pas de zéros finaux après le point.

{% include snippets/syntax/07/index.html %}

### Unités

S’agissant de longueurs, une valeur égale à `0` ne doit pas être suivie de son unité.

{% include snippets/syntax/08/index.html %}

L’erreur la plus courante en ce qui concerne les nombres dans Sass est de penser que les unités sont de simples chaînes de caractères qu’on peut accoler à un nombre sans problème. Même si cela semble vrai, ce n’est pas ainsi que les unités fonctionnent. On peut voir les unités comme des symboles algébriques. Par exemple, dans le monde réel, si on multiplie 5 mètres par 5 mètres, on obtient 25 mètres carrés. La même logique s’applique à Sass.

Pour ajouter une unité à un nombre, vous devez multiplier ce nombre par *1 unité*.

{% include snippets/syntax/09/index.html %}

Remarquez qu’en ajoutant *0 membre de cette unité* on obtient le même résultat, mais je recommande la méthode indiquée ci-dessus car l’ajout de *0 unité* peut créer une certaine confusion. En effet, si vous essayez de convertir un nombre dans une autre unité compatible, ajouter `0` ne fonctionnera pas&nbsp;:

{% include snippets/syntax/10/index.html %}

En fin de compte, tout dépend de ce que vous cherchez à obtenir. Rappelez-vous simplement qu’ajouter l’unité sous forme de chaîne de caractères n’est pas la bonne méthode.

Pour supprimer l’unité d’une valeur, il suffit de la *diviser par une fois son unité*.

{% include snippets/syntax/11/index.html %}

Si vous ajoutez une unité sous forme de chaîne de caractères à un nombre, le résultat est une chaîne de caractères, ce qui vous empêche d’effectuer toute opération sur la valeur. De même avec l’opération `slice` si vous découpez la partie numérique d’un nombre —&nbsp;ce qui n’est sans doute pas le résultat souhaité.

### Calculs

**Les calculs numériques de premier niveau devraient toujours être entre parenthèses**. Non seulement la lisibilité s’en trouve considérablement améliorée, mais les éventuels cas *borderline* sont résolus en forçant Sass à évaluer le contenu entre parenthèses.

{% include snippets/syntax/12/index.html %}

### Nombres magiques

L’expression "nombre magique" est un [vieux terme de programmation](http://fr.wikipedia.org/wiki/Nombre_magique_(programmation)#Constantes_num.C3.A9riques_non-nomm.C3.A9es) qui désigne *une constante numérique non nommée*.  Quelque chose comme un nombre aléatoire *qui fonctionne* sans que l’on sache dire exactement pourquoi.

Est-il utile de préciser que **les nombres magiques sont une plaie et doivent être évités à tout prix** ? Si vous ne pouvez pas expliquer logiquement la raison pour laquelle un nombre fonctionne, ajoutez un commentaire détaillant la façon dont vous êtes arrivé à ce nombre et pourquoi vous pensez qu’il est approprié. Il vaut mieux expliquer pourquoi vous ne comprenez pas comment quelque chose fonctionne que de laisser au développeur qui vous suivra le soin de comprendre les raisons de votre choix.

{% include snippets/syntax/13/index.html %}

###### Lectures complémentaires

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](http://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)

## Couleurs

Les couleurs occupent une place importante dans le langage CSS. Naturellement, Sass devient un excellent allié lorsqu’il s’agit de manipuler les couleurs, essentiellement à l’aide de quelques [fonctions puissantes](http://sass-lang.com/documentation/Sass/Script/Functions.html).

### Formats de couleurs

Pour simplifier les couleurs autant que possible, mon conseil est de respecter l’ordre de préférence suivant pour les formats&nbsp;:

1. [Mots-clés de couleurs CSS](http://www.w3.org/TR/css3-color/#svg-color);
2. [Notation HSL](http://fr.wikipedia.org/wiki/Teinte_saturation_lumi%C3%A8re);
3. [Notation RGB](http://fr.wikipedia.org/wiki/Rouge_vert_bleu);
4. Notation hexadécimale. De préférence en minuscules et en version raccourcie lorsque c’est possible.

Pour commencer, les mots-clés parlent souvent par eux-mêmes. La représentation HSL quant à elle est non seulement la plus simple à comprendre<sup>[citation requise]</sup>, mais également celle qui nous permet le plus aisément d’ajuster les couleurs en modifiant la teinte (hue), la saturation et la luminosité. RGB nous aide à repérer tout de suite si la couleur tient plus du bleu, du vert ou du rouge, mais il ne nous permet pas de construire facilement une couleur à partir des trois. Enfin, la notation hexadécimale est à peu près indéchiffrable pour un cerveau humain.

{% include snippets/syntax/14/index.html %}

Si vous utilisez la notation HSL ou RGB, ajoutez toujours un espace après la virgule, mais n’ajoutez pas d’espace entre les parenthèses et le contenu.

{% include snippets/syntax/15/index.html %}

### Couleurs et variables

Si vous utilisez une couleur plusieurs fois, enregistrez-la dans une variable portant un nom représentatif de la couleur.

{% include snippets/syntax/16/index.html %}

Vous pouvez maintenant utiliser cette variable où vous voulez. Cependant, si son usage est lié à un thème, je vous conseille de ne pas utiliser la variable directement mais plutôt de l’enregistrer elle-même dans une autre variable dont le nom explique la fonction.

{% include snippets/syntax/17/index.html %}

De cette façon vous éviterez qu’une modification de votre thème ne conduise à quelque chose comme `$sass-pink: blue`.

### Éclaircir et obscurcir les couleurs

Les fonctions [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) et [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) manipulent la luminosité d’une couleur dans l’espace HSL en augmentant ou en diminuant sa valeur. En fait, elles ne sont rien d’autre que des alias du paramètre `$lightness` de la fonction [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

Toutefois, il arrive souvent que ces fonctions ne produisent pas le résultat escompté. La fonction [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) est une autre façon d’éclaircir une couleur en la mélangeant à du blanc ou à du noir.

L’avantage d’utiliser `mix` plutôt que les deux fonctions précédemment citées est qu’elle permet d’aller très progressivement vers le noir (ou vers le blanc) à mesure que l’on diminue la proportion de la couleur initiale, alors que `darken` et `lighten` font passer très rapidement la couleur au noir ou au blanc&nbsp;:

{% include images/color-functions.html %}

Si vous ne voulez pas écrire la fonction `mix` à chaque fois, vous pouvez créer deux fonctions faciles à utiliser, `tint` et `shade` (qui sont incluses dans [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) pour obtenir la même chose&nbsp;:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>La fonction <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> échelonne les propriétés de manière plus fluide en prenant en compte leur degré de luminosité actuelle. Elle donne des résultats aussi beaux que <code>mix</code> mais avec des conventions d’utilisation plus claires. Le facteur d’échelonnage n’est cependant pas le même.</p>
</div>

###### Lectures complémentaires

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don’t Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)

## Listes

Les listes sont l’équivalent des arrays (tables) dans Sass. Une liste est une structure de données plate (contrairement à [maps](#maps)) dont le but est de stocker des valeurs de tout type (y compris des listes, ce qui autorise l’imbrication de listes).

Les listes doivent respecter les recommandations suivantes&nbsp;:

* sur une ligne ou sur plusieurs lignes&nbsp;;
* impérativement sur plusieurs lignes si elles comptent plus de 80 caractères&nbsp;;
* toujours utiliser une virgule pour séparer les éléments de la liste, sauf si elle est utilisée pour un contenu CSS&nbsp;;
* toujours entre parenthèses&nbsp;;
* ajouter une virgule après le dernier élément de la liste si elle compte plusieurs lignes.

{% include snippets/syntax/19/index.html %}

Lorsque vous ajoutez de nouveaux items à une liste, utilisez toujours l’API fournie. N’essayez pas de les ajouter manuellement.

{% include snippets/syntax/20/index.html %}

###### Lectures complémentaires

* [Understanding Sass lists](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/)
* [SassyLists](http://sassylists.com)

## Maps

Depuis Sass 3.3, les auteurs de feuilles de styles peuvent définir des *maps*, qui sont l’équivalent en Sass des tableaux associatifs (ou dictionnaires ou tables d’association), des hashs ou même des objets JavaScript. Une map est une structure de données qui associe des clés (keys) —&nbsp;lesquelles peuvent être de n’importe quel type, y compris des maps, ce que toutefois je ne recommanderais pas&nbsp;— et des valeurs (values) de tout type.

Les maps doivent être écrites comme suit&nbsp;:

* un espace après les deux-points (`:`)&nbsp;;
* parenthèse ouvrante (`(`) sur la même ligne que les deux-points (`:`)&nbsp;;
* **clés entre guillemets** si ce sont des chaînes de caractères (soit 99% des cas)&nbsp;;
* chaque paire clé/valeur sur sa propre ligne&nbsp;;
* virgule (`,`) à la fin de chaque clé/valeur&nbsp;;
* **virgule finale** (`,`) après le dernier item pour faciliter l’ajout, la suppression ou la réorganisation d’items&nbsp;;
* parenthèse fermante (`)`) sur sa propre ligne&nbsp;;
* pas d’espace ni de retour à la ligne entre la parenthèse finale et le point-virgule final.

Illustration :

{% include snippets/syntax/21/index.html %}

### Déboguer une map Sass

Si vous êtes perdu, ou si vous vous demandez quelles opérations magiques se déroulent dans une map Sass, pas d’inquiétude, il existe des moyens de s’y retrouver.

{% include snippets/syntax/22/index.html %}

Si vous voulez connaître la profondeur de la map, ajoutez également la fonction suivante. Le mixin l’affichera automatiquement.

{% include snippets/syntax/23/index.html %}

###### Lectures complémentaires

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Extra Map functions in Sass](http://www.sitepoint.com/extra-map-functions-sass/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](http://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)

## Ensemble de règles CSS

Ici nous allons réviser ce que tout le monde sait, mais voici comment on devrait écrire une règle CSS (du moins selon la plupart des recommandations, dont [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset))&nbsp;:

* les sélecteurs liés sur la même ligne, sinon sur une ligne différente&nbsp;;
* l’accolade ouvrante (`{`) sur la ligne du dernier sélecteur séparé de celui-ci par un espace&nbsp;;
* chaque déclaration sur une même ligne&nbsp;;
* un espace après les deux-points (`:`)&nbsp;;
* toujours un point-virgule (`;`) à la dernière déclaration d'une règle&nbsp;;
* l’accolade fermante (`}`) sur sa propre ligne&nbsp;;
* une nouvelle ligne après l’accolade fermante.

Illustration:

{% include snippets/syntax/24/index.html %}

En plus de ces recommandations liées à CSS, nous devons être attentifs aux points suivants&nbsp;:

* les variables locales doivent être déclarées avant toute autre déclaration, puis séparées des autres par une ligne&nbsp;;
* les inclusions de mixins sans `@content` doivent venir avant toute déclaration&nbsp;;
* les sélecteurs imbriqués doivent toujours apparaître sur une nouvelle ligne&nbsp;;
* les inclusions de mixins avec `@content` doivent apparaître après les sélecteurs imbriqués&nbsp;;
* pas de saut de ligne avant une accolade fermante (`}`).

Illustration:

{% include snippets/syntax/25/index.html %}

###### Lectures complémentaires

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)

## Ordre des déclarations

Je ne connais aucun autre sujet où les opinions sont aussi partagées qu’en ce qui concerne l’ordre des déclarations CSS. Concrètement, deux opinions s’opposent&nbsp;:

* s’en tenir à l’ordre alphabétique&nbsp;;
* classer les déclarations par type (position, display, color, font, autres…).

Il y a du pour et du contre dans chacune. D’un côté, l’ordre alphabétique est universel (du moins pour les langues utilisant l’alphabet latin), donc il n’y a pas de dispute possible quant à la position d’un sélecteur par rapport à un autre. Cependant, il me paraît bizarre de ne pas avoir des propriétés telles que `bottom` et `top` l’une derrière l’autre. Pourquoi les animations devraient-elles apparaître avant le type de display&nbsp;? L’ordre alphabétique crée de nombreuses bizarreries.

{% include snippets/syntax/26/index.html %}

D’un autre côté, ordonner par propriété semble parfaitement logique. Les déclarations de `font` sont regroupées, `top` et `bottom` sont réunis et la lecture d’une règle CSS ressemble à une petite histoire. Mais à moins de s’en tenir à des conventions comme  [Idiomatic CSS](https://github.com/necolas/idiomatic-css), cette façon de faire laisse encore beaucoup de place à l’interprétation. Où situer `white-space`&nbsp;? font ou display&nbsp;? Où situer `overflow`&nbsp;? Et quel ordre donner aux propriétés à l’intérieur d’un groupe&nbsp;? (alphabétique&nbsp;?… ô ironie…).

{% include snippets/syntax/27/index.html %}

Il existe encore un autre modèle d’ordonnancement des types, [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), qui semble assez populaire lui aussi. Concentric CSS s’appuie sur le modèle de boîte pour définir l’ordre&nbsp;: il part de l’extérieur pour aller vers l’intérieur.

{% include snippets/syntax/28/index.html %}

Je dois dire que je n’arrive pas à me décider moi-même. Un [récent sondage de CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) a montré que plus de 45% des développeurs ordonnent leurs déclarations par type, contre 14% par ordre alphabétique. 39% le font au hasard, et j’en fais partie.

{% include images/order-poll.html %}

C’est la raison pour laquelle je ne recommande pas de choix particulier dans ce guide de style. Choisisssez celui que vous préférez, du moment qu’il reste cohérent tout au long de vos feuilles de style (en d'autres termes&nbsp;: pas l'option <em>au hasard</em>).

<div class="note">
  <p>Une <a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">étude récente</a> montre que l’utilisation de <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (qui s’appuie sur <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">un ordre par type</a>) pour organiser les déclarations CSS permet de réduire la taille moyenne des fichiers gzippés de 2,7% contre 1,3% lorsqu’ils sont ordonnés alphabétiquement.</p>
</div>

###### Lectures complémentaires

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

## Imbrication des sélecteurs

Parmi les fonctionnalités offertes par Sass, l’une d’entre elles est souvent mal utilisée, c’est *l’imbrication des sélecteurs*. Celle-ci permet aux auteurs de feuilles de styles de créer de longs sélecteurs en imbriquant des sélecteurs plus courts les uns dans les autres.

### Règle générale

Par exemple, l’imbrication Sass suivante&nbsp;:

{% include snippets/syntax/29/index.html %}

… génèrera ce CSS&nbsp;:

{% include snippets/syntax/30/index.html %}

En suivant la même idée, il est possible depuis Sass 3.3 d’utiliser la référence au sélecteur courant (`&`) pour générer des sélecteurs avancés, par exemple&nbsp;:

{% include snippets/syntax/31/index.html %}

… génèrera ce CSS&nbsp;:

{% include snippets/syntax/32/index.html %}

Cette méthode est souvent utilisée avec [les conventions de nommage BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) pour générer des sélecteurs `.block__element` et `.block--modifier` à partir du sélecteur d’origine (`.block` dans ce cas).

<div class="note">
  <p>Même si cela peut sembler anecdotique, la génération de nouveaux sélecteurs à l’aide de la référence au sélecteur courant (<code>&</code>) rend impossible la recherche de ces sélecteurs dans le code puisqu’ils n’existent pas en soi.</p>
</div>

Le problème avec l’imbrication des sélecteurs est qu’elle rend le code plus difficile à lire. On doit reconstituer mentalement le sélecteur qui en résulte à partir des niveaux d’indentation. Il n’est pas toujours évident de se représenter ce que donnera le CSS final.

C’est d’autant plus vrai à mesure que les sélecteurs s’allongent et que les références au sélecteur courant (`&`) se multiplient. À un certain point, le risque de confusion devient tellement élevé que l’imbrication n’en vaut pas la peine.

Pour éviter de telles situations, nous **évitons l’imbrication des sélecteurs autant que possible**. Il y a cependant quelques exceptions à cette règle.

### Exceptions

Pour commencer, il est permis —&nbsp;et même recommandé&nbsp;— d’imbriquer les pseudo-classes et les pseudo-éléments à l’intérieur du sélecteur initial.

{% include snippets/syntax/33/index.html %}

Non seulement l’imbrication des pseudo-classes et pseudo-éléments est parfaitement justifiée (parce qu’il s’agit de sélecteurs étroitement liés) mais aussi elle permet de conserver tout ce qui concerne un même composant au même endroit.

De plus, lorsqu’on utilise des classes décrivant un état indépendant du composant telles que `.is-active`, il est tout à fait justifié de les imbriquer dans le sélecteur du composant de façon à avoir un code bien ordonné.

{% include snippets/syntax/34/index.html %}

*Last but not least*, lorsqu’on applique un style à un élément parce qu’il se trouve être contenu dans un autre élément spécifique, il est également logique de l’imbriquer afin que tout ce qui concerne cet élément soit réuni au même endroit.

{% include snippets/syntax/35/index.html %}

Quand on travaille avec des développeurs peu expérimentés, un sélecteur comme `.no-opacity &` peut paraître étrange. Pour éviter toute confusion, vous pouvez créer un petit mixin qui transforme cette syntaxe bizarre en une API explicite.

{% include snippets/syntax/36/index.html %}

Nous pouvons réécrire notre exemple précédent ainsi&nbsp;:

{% include snippets/syntax/37/index.html %}

Comme pour toute chose, ce qui compte ce ne sont pas les détails mais la cohérence globale. Si vous vous sentez en confiance avec l’imbrication des sélecteurs, utilisez-la. Assurez-vous que toute l’équipe soit d’accord avec cette façon de faire.

###### Lectures complémentaires

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)
