
# Syntaxe & formatage

À mon avis, la première chose que devrait proposer un guide de style est de décrire la façon dont notre code doit être écrit, du point vue de son aspect.

Lorsque plusieurs développeurs sont impliqués dans l’écriture de CSS sur un même projet, il ne faut pas longtemps avant que l’un d’entre eux commence à faire les choses à sa façon. Les directives servent à éviter cette perte de cohérence, mais aussi à aider chacun à lire et à mettre à jour le code.

Globalement, voici ce que nous voulons (inspiré sans honte des [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting))&nbsp;:

* Une indentation à deux (2) espaces, pas de tabulation ;
* Pas plus de 80 caractères par ligne ;
* Du CSS écrit sur plusieurs lignes ;
* Une utilisation efficace des lignes vides.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// Non
.foo {
    display: block; overflow: hidden;

    padding: 0 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Quant à Sass, sa syntaxe indentée impose ces standards de codification
// Il n’y a donc pas de "mauvaise" manière de procéder
.foo
  display: block
  overflow: hidden
  padding: 0 1em
{% endhighlight %}
  </div>
</div>

Nous n’aborderons pas la question de l’organisation des fichiers dans cette section. C’est l’objet d’une [autre section](#architecture).






## Chaînes de caractères

Ça peut paraître incroyable, mais les chaînes de caractères jouent un grand rôle dans les écosystèmes CSS et Sass. La plupart des valeurs CSS sont soit des longueurs soit des chaînes de caractères (habituellement sans guillemets), il est donc crucial de se tenir à des règles lorsqu’on utilise ces chaînes dans Sass.

### Encodage

Afin d’éviter tout problème potentiel lié à l’encodage des caractères, il est recommandé de forcer l’encodage [UTF-8](http://fr.wikipedia.org/wiki/UTF-8) dans le [fichier principal](#fichier-principal) en utilisant la directive `@charset`. Assurez-vous que ce soit le premier élément de la feuille de style et qu’il n’y ait aucun caractère de quelque nature en amont.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@charset 'utf-8';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@charset 'utf-8'
{% endhighlight %}
  </div>
</div>

### Guillemets

En CSS, les chaînes de caractères n’ont pas à être entourées de guillemets, pas même celles qui contiennent des espaces. Prenez les noms de `font-family` par exemple&nbsp;: peu importe qu’elles soient ou non entre guillemets.

C’est pourquoi dans Sass les chaînes de caractères n’ont pas non plus à être entourées de guillemets. Mieux, (et heureusement) une chaîne de caractères entre guillemets est strictement équivalente à sa jumelle sans guillemets (p.ex. `'abc'` est strictement égale à `abc`).

Ceci étant, les langages qui ne requièrent pas d’envelopper les chaînes de caractères entre guillemets sont une infime minorité, c’est la raison pour laquelle **les chaînes de caractères devraient toujours être entourées de guillemets simples** (`'`) dans Sass (pourquoi des guillemets simples&nbsp;? parce qu’ils sont plus faciles à taper sur un clavier *qwerty*). À part la cohérence avec d’autres langages, dont JavaScript le cousin de CSS, il y a plusieurs raisons à ce choix&nbsp;:

* les noms de couleurs sont traités comme des couleurs lorsqu’ils ne sont pas entre guillemets, ce qui peut conduire à de sérieux problèmes&nbsp;;
* la plupart des colorations syntaxiques fonctionnent mieux avec les guillemets&nbsp;;
* la lisibilité est améliorée&nbsp;;
* il n’y a pas de raison valable de ne pas utiliser de guillemets.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
$direction: 'left';

// Non
$direction: left;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$direction: 'left'

// Nope
$direction: left
{% endhighlight %}
  </div>
</div>

### Chaînes comme valeurs CSS

Certaines valeurs spécifiques de CSS, telles que `initial` ou `sans-serif` ne doivent pas être entourées de guillemets. Si vous déclarez `font-family: 'sans-serif'` CSS ignorera votre déclaration car il attend un identifiant et non une chaîne de caractères. C’est pourquoi on ne met jamais de guillemets autour de ces valeurs.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$font-type: sans-serif;

// Non
$font-type: 'sans-serif';

// Moyen mais yep
$font-type: unquote('sans-serif');
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
$font-type: sans-serif

// Non
$font-type: 'sans-serif'

// Moyen mais yep
$font-type: unquote('sans-serif')
{% endhighlight %}
  </div>
</div>

Il convient de faire une distinction entre les chaînes de caractères qui sont des valeurs CSS (il s'agit d’identifiants CSS) comme dans l’exemple qui précède, et les chaînes de caractères correspondant à des types de données Sass (par exemple les clés des maps).

On ne met pas de guillemets pour les premières, mais il en faut pour ces dernières.

### Chaînes contenant des guillemets

Si une chaîne de caractères contient un ou plusieurs guillemets simples, on peut éviter l’utilisation d’échappements répétés en enveloppant la chaîne à l’intérieur de guillemets doubles (`"`) .

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Okay
@warn 'You can\'t do that.';

// Okay
@warn "You can't do that.";
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Okay
@warn 'You can\'t do that.'

// Okay
@warn "You can't do that."
{% endhighlight %}
  </div>
</div>

### URLs

Les URL doivent être écrites entre guillemets pour les mêmes raisons que ci-dessus&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
.foo {
  background-image: url('/images/kittens.jpg');
}

// Non
.foo {
  background-image: url(/images/kittens.jpg);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
.foo
  background-image: url('/images/kittens.jpg')

// Non
.foo
  background-image: url(/images/kittens.jpg)
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

* [All You Ever Need to Know About Sass Interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/HugoGiraudel/SassyStrings)






## Nombres

Dans Sass, un nombre est une donnée qui peut avoir une unité ou pas et qui décrit une longueur, une durée, une fréquence, un angle, etc. Cela permet d’effectuer des calculs sur les mesures.



### Zéros

Une valeur décimale inférieure à `1` doit être précédée d’un zéro. N’écrivez pas de zéros finaux après le point.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
.foo {
  padding: 2em;
  opacity: 0.5;
}

// Non
.foo {
  padding: 2.0em;
  opacity: .5;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
.foo
  padding: 2em
  opacity: 0.5

// Non
.foo
  padding: 2.0em
  opacity: .5
{% endhighlight %}
  </div>
</div>



### Unités

S’agissant de longueurs, une valeur égale à `0` ne doit pas être suivie de son unité.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
$length: 0;

// Non
$length: 0em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
$length: 0

// Non
$length: 0em
{% endhighlight %}
  </div>
</div>

L’erreur la plus courante en ce qui concerne les nombres dans Sass est de penser que les unités sont de simples chaînes de caractères qu’on peut accoler à un nombre sans problème. Même si cela semble vrai, ce n’est pas ainsi que les unités fonctionnent. On peut voir les unités comme des symboles algébriques. Par exemple, dans le monde réel, si on multiplie 5 mètres par 5 mètres, on obtient 25 mètres carrés. La même logique s’applique à Sass.

Pour ajouter une unité à un nombre, vous devez multiplier ce nombre par *1 unité*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42;

// Oui
$length: $value * 1px;

// Non
$length: $value + px;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42

// Oui
$length: $value * 1px

// Non
$length: $value + px
{% endhighlight %}
  </div>
</div>

Remarquez qu’en ajoutant *0 membre de cette unité* on obtient le même résultat, mais je recommande la méthode indiquée ci-dessus car l’ajout de *0 unité* peut créer une certaine confusion. En effet, si vous essayez de convertir un nombre dans une autre unité compatible, ajouter `0` ne fonctionnera pas&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42 + 0px;
// -> 42px

$value: 1in + 0px;
// -> 1in

$value: 0px + 1in;
// -> 96px
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42 + 0px
// -> 42px

$value: 1in + 0px
// -> 1in

$value: 0px + 1in
// -> 96px
{% endhighlight %}
  </div>
</div>

En fin de compte, tout dépend de ce que vous cherchez à obtenir. Rappelez-vous simplement qu’ajouter l’unité sous forme de chaîne de caractères n’est pas la bonne méthode.

Pour supprimer l’unité d’une valeur, il suffit de la *diviser par une fois son unité*.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$length: 42px;

// Oui
$value: $length / 1px;

// Non
$value: str-slice($length + unquote(''), 1, 2);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$length: 42px

// Oui
$value: $length / 1px

// Non
$value: str-slice($length + unquote(''), 1, 2)
{% endhighlight %}
  </div>
</div>

Si vous ajoutez une unité sous forme de chaîne de caractères à un nombre, le résultat est une chaîne de caractères, ce qui vous empêche d’effectuer toute opération sur la valeur. De même avec l’opération `slice` si vous découpez la partie numérique d’un nombre —&nbsp;ce qui n’est sans doute pas le résultat souhaité.



### Calculs

**Les calculs numériques de premier niveau devraient toujours être entre parenthèses**. Non seulement la lisibilité s’en trouve considérablement améliorée, mais les éventuels cas *borderline* sont résolus en forçant Sass à évaluer le contenu entre parenthèses.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
.foo {
  width: (100% / 3);
}

// Non
.foo {
  width: 100% / 3;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
.foo
  width: (100% / 3)

// Non
.foo
  width: 100% / 3
{% endhighlight %}
  </div>
</div>



### Nombres magiques

L’expression "nombre magique" est un [vieux terme de programmation](http://fr.wikipedia.org/wiki/Nombre_magique_(programmation)#Constantes_num.C3.A9riques_non-nomm.C3.A9es) qui désigne *une constante numérique non nommée*.  Quelque chose comme un nombre aléatoire *qui fonctionne* sans que l’on sache dire exactement pourquoi.

Est-il utile de préciser que **les nombres magiques sont une plaie et doivent être évités à tout prix** ? Si vous ne pouvez pas expliquer logiquement la raison pour laquelle un nombre fonctionne, ajoutez un commentaire détaillant la façon dont vous êtes arrivé à ce nombre et pourquoi vous pensez qu’il est approprié. Il vaut mieux expliquer pourquoi vous ne comprenez pas comment quelque chose fonctionne que de laisser au développeur qui vous suivra le soin de comprendre les raisons de votre choix.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * 1. Nombre magique. C’est la plus petite valeur que j’ai trouvée pour
 * aligner le haut de `.foo` avec son parent. Idéalement, à corriger.
 */
.foo {
  top: 0.327em; /* 1 */
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * 1. Nombre magique. C’est la plus petite valeur que j’ai trouvée pour aligner le haut de
 * `.foo` avec son parent. Idéalement, à corriger.
 */
.foo
  top: 0.327em /* 1 */
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

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


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
.foo {
  color: red;
}

// Non
.foo {
  color: #FF0000;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
.foo
  color: red

// Non
.foo
  color: #FF0000
{% endhighlight %}
  </div>
</div>

Si vous utilisez la notation HSL ou RGB, ajoutez toujours un espace après la virgule, mais n’ajoutez pas d’espace entre les parenthèses et le contenu.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
.foo {
  color: rgba(0, 0, 0, 0.1);
  background: hsl(300, 100%, 100%);
}

// Non
.foo {
  color: rgba(0,0,0,0.1);
  background: hsl( 300, 100%, 100% );
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
.foo
  color: rgba(0, 0, 0, 0.1)
  background: hsl(300, 100%, 100%)

// Non
.foo
  color: rgba(0,0,0,0.1)
  background: hsl( 300, 100%, 100% )
{% endhighlight %}
  </div>
</div>



### Couleurs et variables

Si vous utilisez une couleur plusieurs fois, enregistrez-la dans une variable portant un nom représentatif de la couleur.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$sass-pink: #c69;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$sass-pink: #c69
{% endhighlight %}
  </div>
</div>

Vous pouvez maintenant utiliser cette variable où vous voulez. Cependant, si son usage est lié à un thème, je vous conseille de ne pas utiliser la variable directement mais plutôt de l’enregistrer elle-même dans une autre variable dont le nom explique la fonction.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$main-theme-color: $sass-pink;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$main-theme-color: $sass-pink
{% endhighlight %}
  </div>
</div>

De cette façon vous éviterez qu’une modification de votre thème ne conduise à quelque chose comme `$sass-pink: blue`.



### Éclaircir et obscurcir les couleurs

Les fonctions [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) et [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) manipulent la luminosité d’une couleur dans l’espace HSL en augmentant ou en diminuant sa valeur. En fait, elles ne sont rien d’autre que des alias du paramètre `$lightness` de la fonction [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

Toutefois, il arrive souvent que ces fonctions ne produisent pas le résultat escompté. La fonction [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) est une autre façon d’éclaircir une couleur en la mélangeant à du blanc ou à du noir.

L’avantage d’utiliser `mix` plutôt que les deux fonctions précédemment citées est qu’elle permet d’aller très progressivement vers le noir (ou vers le blanc) à mesure que l’on diminue la proportion de la couleur initiale, alors que `darken` et `lighten` font passer très rapidement la couleur au noir ou au blanc&nbsp;:


<figure role="group">
  <img alt="Illustration de la différence entre lighten/darken et la fonction mix de Sass"
     sizes="100vw"
     srcset="/assets/images/lighten-darken-mix_small.png  540w,
             /assets/images/lighten-darken-mix_medium.png 900w,
             /assets/images/lighten-darken-mix_large.png 1200w,
             /assets/images/lighten-darken-mix_huge.png  1590w" />
  <figcaption>Illustration de la différence entre <code>lighten</code>/<code>darken</code> et <code>mix</code> par <a href="http://codepen.io/KatieK2/pen/tejhz/" target="_blank">KatieK</a></figcaption>
</figure>

Si vous ne voulez pas écrire la fonction `mix` à chaque fois, vous pouvez créer deux fonctions faciles à utiliser, `tint` et `shade` (qui sont incluses dans [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) pour obtenir la même chose&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Éclaircir légèrement une couleur
/// @access public
/// @param {Color} $color - couleur à nuancer (tint)
/// @param {Number} $percentage - % de`$color` dans la couleur retournée
/// @return {Color}
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

/// Obscurcir légèrement une couleur
/// @access public
/// @param {Color} $color - couleur à ombrer (shade)
/// @param {Number} $percentage - % de`$color` dans la couleur retournée
/// @return {Color}
@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Éclaircir légèrement une couleur
/// @access public
/// @param {Color} $color - couleur à nuancer (tint)
/// @param {Number} $percentage - % de`$color` dans la couleur retournée
/// @return {Color}
@function tint($color, $percentage)
  @return mix($color, white, $percentage)

/// Obscurcir légèrement une couleur
/// @access public
/// @param {Color} $color - couleur à ombrer (shade)
/// @param {Number} $percentage - % de`$color` dans la couleur retournée
/// @return {Color}
@function shade($color, $percentage)
  @return mix($color, black, $percentage)
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>La fonction <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> échelonne les propriétés de manière plus fluide en prenant en compte leur degré de luminosité actuelle. Elle donne des résultats aussi beaux que <code>mix</code> mais avec des conventions d’utilisation plus claires. Le facteur d’échelonnage n’est cependant pas le même.</p>
</div>



### Lectures complémentaires

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

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Non
$font-stack: (
  'Helvetica',
  'Arial',
  sans-serif,
);

// Non
$font-stack: 'Helvetica' 'Arial' sans-serif;

// Non
$font-stack: 'Helvetica', 'Arial', sans-serif;

// Non
$font-stack: ('Helvetica', 'Arial', sans-serif,);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
$font-stack: ('Helvetica', 'Arial', sans-serif)

// Non (affichage non supporté)
$font-stack: (
  'Helvetica',
  'Arial',
  sans-serif,
)
// Non
$font-stack: 'Helvetica' 'Arial' sans-serif

// Non
$font-stack: 'Helvetica', 'Arial', sans-serif

// Non
$font-stack: ('Helvetica', 'Arial', sans-serif,)
{% endhighlight %}
  </div>
</div>

Lorsque vous ajoutez de nouveaux items à une liste, utilisez toujours l’API fournie. N’essayez pas de les ajouter manuellement.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$shadows: (0 42px 13.37px hotpink);

// Oui
$shadows: append($shadows, $shadow, comma);

// Non
$shadows: $shadows, $shadow;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$shadows: (0 42px 13.37px hotpink)

// Oui
$shadows: append($shadows, $shadow, comma)

// Non
$shadows: $shadows, $shadow
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

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

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
);

// Non
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
$breakpoints: ('small': 767px, 'medium': 992px, 'large': 1200px,)

// Non
$breakpoints: ( 'small': 767px, 'medium': 992px, 'large': 1200px )

// Non
$breakpoints: (small: 767px, medium: 992px, large: 1200px,)

// Non (n'est pas supporté)
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
)
{% endhighlight %}
  </div>
</div>



### Déboguer une map Sass

Si vous êtes perdu, ou si vous vous demandez quelles opérations magiques se déroulent dans une map Sass, pas d’inquiétude, il existe des moyens de s’y retrouver.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin debug-map($map) {
  @at-root {
    @debug-map {
      __toString__: inspect($map);
      __length__: length($map);
      __depth__: if(function-exists('map-depth'), map-depth($map), null);
      __keys__: map-keys($map);
      __properties__ {
        @each $key, $value in $map {
          #{'(' + type-of($value) + ') ' + $key}: inspect($value);
        }
      }
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=debug-map($map)
  @at-root
    @debug-map
      __toString__: inspect($map)
      __length__: length($map)
      __depth__: if(function-exists('map-depth'), map-depth($map), null)
      __keys__: map-keys($map)
      __properties__
        @each $key, $value in $map
          #{'(' + type-of($value) + ') ' + $key}: inspect($value)
{% endhighlight %}
  </div>
</div>

Si vous voulez connaître la profondeur de la map, ajoutez également la fonction suivante. Le mixin l’affichera automatiquement.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Calculer la profondeur maximale d’une map
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map) {
  $level: 1;

  @each $key, $value in $map {
    @if type-of($value) == 'map' {
      $level: max(map-depth($value) + 1, $level);
    }
  }

  @return $level;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Calculer la profondeur maximale d’une map
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map)
  $level: 1

  @each $key, $value in $map
    @if type-of($value) == 'map'
      $level: max(map-depth($value) + 1, $level)

  @return $level;
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

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
* l’accolade ouvrante (`{`) sur la ligne du dernier sélecteur&nbsp;;
* un espace avant l’accolade ouvrante (`{`)&nbsp;;
* notre première déclaration sur une nouvelle ligne après l’accolade ouvrante (`{`)&nbsp;;
* chaque déclaration sur une même ligne&nbsp;;
* un espace après les deux-points (`:`)&nbsp;;
* l’accolade fermante (`}`) sur sa propre ligne&nbsp;;
* une nouvelle ligne après l’accolade fermante.



Illustration:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// Non
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
    margin: 0 auto }
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
.foo, .foo-bar,
.baz
  display: block
  overflow: hidden
  margin: 0 auto

// Non
.foo,
.foo-bar, .baz
    display: block
    overflow: hidden
    margin: 0 auto
{% endhighlight %}
  </div>
</div>

En plus de ces recommandations liées à CSS, nous devons être attentifs aux points suivants&nbsp;:

* les variables locales doivent être déclarées avant toute autre déclaration, puis séparées des autres par une ligne&nbsp;;
* les inclusions de mixins sans `@content` doivent venir avant toute déclaration&nbsp;;
* les sélecteurs imbriqués doivent toujours apparaître sur une nouvelle ligne&nbsp;;
* les inclusions de mixins avec `@content` doivent apparaître après les sélecteurs imbriqués&nbsp;;
* pas de saut de ligne avant une accolade fermante (`}`).

Illustration:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo, .foo-bar,
.baz {
  $length: 42em;

  @include ellipsis;
  @include size($length);
  display: block;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  @include respond-to('small') {
    overflow: visible;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo, .foo-bar,
.baz
  $length: 42em

  +ellipsis
  +size($length)
  display: block
  overflow: hidden
  margin: 0 auto

  &:hover
    color: red

  +respond-to('small')
    overflow: visible
{% endhighlight %}
  </div>
</div>



### Lecture complémentaire

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)






## Ordre des déclarations

Je ne connais aucun autre sujet où les opinions sont aussi partagées qu’en ce qui concerne l’ordre des déclarations CSS. Concrètement, deux opinions s’opposent&nbsp;:

* s’en tenir à l’ordre alphabétique&nbsp;;
* classer les déclarations par type (position, display, color, font, autres...).

Il y a du pour et du contre dans chacune. D’un côté, l’ordre alphabétique est universel (du moins pour les langues utilisant l’alphabet latin), donc il n’y a pas de dispute possible quant à la position d’un sélecteur par rapport à un autre. Cependant, il me paraît bizarre de ne pas avoir des propriétés telles que `bottom` et `top` l’une derrière l’autre. Pourquoi les animations devraient-elles apparaître avant le type de display&nbsp;? L’ordre alphabétique crée de nombreuses bizarreries.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  background: black;
  bottom: 0;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  height: 100px;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 100px;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  background: black
  bottom: 0
  color: white
  font-weight: bold
  font-size: 1.5em
  height: 100px
  overflow: hidden
  position: absolute
  right: 0
  width: 100px
{% endhighlight %}
  </div>
</div>

D’un autre côté, ordonner par propriété semble parfaitement logique. Les déclarations de `font` sont regroupées, `top` et `bottom` sont réunis et la lecture d’une règle CSS ressemble à une petite histoire. Mais à moins de s’en tenir à des conventions comme  [Idiomatic CSS](https://github.com/necolas/idiomatic-css), cette façon de faire laisse encore beaucoup de place à l’interprétation. Où situer `white-space`&nbsp;? font ou display&nbsp;? Où situer `overflow`&nbsp;? Et quel ordre donner aux propriétés à l’intérieur d’un groupe&nbsp;? (alphabétique&nbsp;?... ô ironie...).


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  height: 100px;
  width: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  height: 100px
  width: 100px
  overflow: hidden
  position: absolute
  bottom: 0
  right: 0
  background: black
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

Il existe encore un autre modèle d’ordonnancement des types, [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), qui semble assez populaire lui aussi. Concentric CSS s’appuie sur le modèle de boîte pour définir l’ordre&nbsp;: il part de l’extérieur pour aller vers l’intérieur.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: black;
  overflow: hidden;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  width: 100px
  height: 100px
  position: absolute
  right: 0
  bottom: 0
  background: black
  overflow: hidden
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

Je dois dire que je n’arrive pas à me décider moi-même. Un [récent sondage de CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) a montré que plus de 45% des développeurs ordonnent leurs déclarations par type, contre 14% par ordre alphabétique. 39% le font au hasard, et j’en fais partie.

<figure role="group">
  <img src="/assets/images/css-order-chart.png" alt="Tableau montrant comment les développeurs ordonnent leurs déclarations CSS" />
  <figcaption>Tableau montrant comment les développeurs ordonnent leurs déclarations CSS</figcaption>
</figure>

C’est la raison pour laquelle je ne recommande pas de choix particulier dans ce guide de style. Choisisssez celui que vous préférez, du moment qu’il reste cohérent tout au long de vos feuilles de style (en d'autres termes&nbsp;: pas l'option <em>au hasard</em>).

<div class="note">
  <p>Une <a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">étude récente</a> montre que l’utilisation de <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (qui s’appuie sur <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">un ordre par type</a>) pour organiser les déclarations CSS permet de réduire la taille moyenne des fichiers gzippés de 2,7% contre 1,3% lorsqu’ils sont ordonnés alphabétiquement.</p>
</div>



### Lectures complémentaires

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

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  .bar
    &:hover
      color: red
{% endhighlight %}
  </div>
</div>

... génèrera ce CSS&nbsp;:

<div>
{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}
</div>

En suivant la même idée, il est possible depuis Sass 3.3 d’utiliser la référence au sélecteur courant (`&`) pour générer des sélecteurs avancés, par exemple&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  &-bar {
    color: red;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  &-bar
    color: red
{% endhighlight %}
  </div>
</div>

... génèrera ce CSS&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo-bar {
  color: red;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo-bar
  color: red
{% endhighlight %}
  </div>
</div>

Cette méthode est souvent utilisée avec [les conventions de nommage BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) pour générer des sélecteurs `.block__element` et `.block--modifier` à partir du sélecteur d’origine (`.block` dans ce cas).

<div class="note">
  <p>Même si cela peut sembler anecdotique, la génération de nouveaux sélecteurs à l’aide de la référence au sélecteur courant (<code>&</code>) rend impossible la recherche de ces sélecteurs dans le code puisqu’ils n’existent pas en soi.</p>
</div>

Le problème avec l’imbrication des sélecteurs est qu’elle rend le code plus difficile à lire. On doit reconstituer mentalement le sélecteur qui en résulte à partir des niveaux d’indentation. Il n’est pas toujours évident de se représenter ce que donnera le CSS final.

C’est d’autant plus vrai à mesure que les sélecteurs s’allongent et que les références au sélecteur courant (`&`) se multiplient. À un certain point, le risque de confusion devient tellement élevé que l’imbrication n’en vaut pas la peine.

Pour éviter de telles situations, nous **évitons l’imbrication des sélecteurs autant que possible**. Il y a cependant quelques exceptions à cette règle.

### Exceptions

Pour commencer, il est permis —&nbsp;et même recommandé&nbsp;— d’imbriquer les pseudo-classes et les pseudo-éléments à l’intérieur du sélecteur initial.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: 'pseudo-element';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  &:hover
    color: green

  &::before
    content: 'pseudo-element'
{% endhighlight %}
  </div>
</div>

Non seulement l’imbrication des pseudo-classes et pseudo-éléments est parfaitement justifiée (parce qu’il s’agit de sélecteurs étroitement liés) mais aussi elle permet de conserver tout ce qui concerne un même composant au même endroit.

De plus, lorsqu’on utilise des classes décrivant un état indépendant du composant telles que `.is-active`, il est tout à fait justifié de les imbriquer dans le sélecteur du composant de façon à avoir un code bien ordonné.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  &.is-active {
    font-weight: bold;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  &.is-active
    font-weight: bold
{% endhighlight %}
  </div>
</div>

*Last but not least*, lorsqu’on applique un style à un élément parce qu’il se trouve être contenu dans un autre élément spécifique, il est également logique de l’imbriquer afin que tout ce qui concerne cet élément soit réuni au même endroit.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  .no-opacity & {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  .no-opacity &
    display: none
{% endhighlight %}
  </div>
</div>

Quand on travaille avec des développeurs peu expérimentés, un sélecteur comme `.no-opacity &` peut paraître étrange. Pour éviter toute confusion, vous pouvez créer un petit mixin qui transforme cette syntaxe bizarre en une API explicite.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper mixin to provide simple API to selector nesting
/// @param {String} $selector - Selector
@mixin when-inside($selector) {
  #{$selector} & {
    @content;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Helper mixin qui fournit une API simple pour l’imbrication de sélecteurs
/// @param {String} $selector - Selector
=when-inside($selector) {
  #{$selector} &
    @content
}
{% endhighlight %}
  </div>
</div>

Nous pouvons réécrire notre exemple précédent ainsi&nbsp;:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  @include when-inside('.no-opacity') {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  +when-inside('.no-opacity')
    display: none
{% endhighlight %}
  </div>
</div>

Comme pour toute chose, ce qui compte ce ne sont pas les détails mais la cohérence globale. Si vous vous sentez en confiance avec l’imbrication des sélecteurs, utilisez-la. Assurez-vous que toute l’équipe soit d’accord avec cette façon de faire.






### Lectures complémentaires

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)

