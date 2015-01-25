
# Outils

Le truc sympa avec un préprocesseur CSS aussi populaire que Sass  est qu'il est accompagné de tout un écosystème de frameworks, plugins, bibliothèques et outils. Après 8 ans d'existence, nous sommes proches du point où [tout ce qui peut être écrit en Sass a été écrit en Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

Mon conseil toutefois est de restreindre le nombre de dépendances au strict minimum. La gestion des dépendances est un enfer que vous pouvez vous épargner. De plus, il n'y a pas besoin de beaucoup de dépendances avec un langage comme Sass.






## Compass

[Compass](http://compass-style.org/) est le principal framework Sass aujourd'hui. Développé par [Chris Eppstein](https://twitter.com/chriseppstein), l'un des deux concepteurs de Sass, il est encore là pour un bout de temps.

À titre personnel, je ne l'utilise plus car il ralentit considérablement Sass. Ruby Sass en lui-même est déjà assez lent, et l'ajout de Ruby et de Sass supplémentaires n'arrange pas les choses. 

En fait, nous n'utilisons qu'une petite partie du framework. Compass est énorme. Les mixins de compatibilité navigateurs ne sont que la partie visible de l'iceberg. Fonctions mathématiques, helpers pour les images, sprites... il y a tant de choses possibles avec ce formidable logiciel.

Malheureusement, il s'agit pour l'essentiel de *sucre syntactique* mais pas de fonctionnalités exceptionnelles. Une exception serait la fonctionnalité de construction de sprites, mais [Grunticon](https://github.com/filamentgroup/grunticon) et [Grumpicon](http://grumpicon.com/) font le même travail aussi bien, avec l'avantage d'être pluggables dans le process de construction.

Rien n'interdit d'utiliser Compass, je ne le recommande pas toutefois, d'autant qu'il n'est pas compatible avec LibSass (bien que des efforts aient été faits dans cette direction).


<div class="note">
  <p>Ruby Sass est actuellement en cours d'optimisation. Sont visés en particulier les styles faisant appel à des doses massives de logique, de fonctions et de mixins. Les performances de Compass et des autres frameworks devraient s'en trouver grandement améliorées et ne devraient plus ralentir Sass.</p>
</div>



### Lectures complémentaires

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## Systèmes de grilles

Se passer d'un système de grilles n'est pas vraiment une option, maintenant que le Responsive Web Design est partout. Pour donner cohérence et solidité à votre design quelle que soit la taille de l'écran, nous utilisons une grille pour mettre en page les éléments, et quelques brillants esprits ont conçu des grilles réutilisables pour nous éviter d'avoir à coder encore et encore.

Soyons clairs pour commencer&nbsp;: je ne suis pas un grand fan des systèmes de grilles. J'en perçois le potentiel, mais je pense que ce sont souvent des marteaux pour tuer une mouche et qu'ils servent pour l'essentiel à dessiner des colonnes rouges sur fond blanc projetées en diapos dans les conférences de designers nerdy. Quand avez-vous pensé pour la dernière fois *Oh mon dieu, heureusement que j'ai cet outil pour construire ma grille 2-5-3.1-π*&nbsp;? C'est vrai, jamais. Parce que dans la plupart des cas, vous voulez simplement utiliser la bonne vieille grille à 12 colonnes.

Si vous utilisez un framework CSS pour votre projet, comme [Bootstrap](http://getbootstrap.com/) ou [Foundation](http://foundation.zurb.com/), il y a des chances qu'ils comprennent déjà un système de grilles, auquel cas je vous recommande de l'utiliser pour éviter d'avoir à gérer une dépendance supplémentaire.

Dans le cas contraire, vous serez content de savoir qu'il existe deux gestionnaires de grilles de premier ordre, basé sur Sass&nbsp;: [Susy](http://susy.oddbird.net/) et [Singularity](http://singularity.gs/). Tous deux font bien plus que ce dont vous aurez jamais besoin, vous pouvez choisir celui que vous préférez et être sûrs qu'ils répondront à vos besoins même les plus complexes. À mon avis, Susy a une communauté plus importante, mais c'est juste mon opinion.

Vous pouvez également choisir quelque chose de plus simple comme [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). Au bout du compte, votre choix n'aura pas beaucoup d'impact sur votre style de code, donc c'est vraiment selon vos goûts et besoins.




### Lectures complémentaires

* [Singularity](http://singularity.gs/)
* [Singularity: Grids Without Limits](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity Grid System](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy](http://susy.oddbird.net/)
* [Build Web Layouts Easily with Susy](http://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](http://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](http://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap's Grid System vs Susy: a Comparison](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](http://www.sitepoint.com/creative-grid-system-sass-calc/)






## SCSS-lint

Il est important de faire l'analyse statique (*lint*) de votre code. Si vous suivez les recommandations d'un guide de style, vous réduirez grandement le nombre d'erreurs mais nul n'est parfait et on peut toujours s'améliorer. On peut donc dire que faire l'analyse statique du code est aussi important que le commenter. 


[SCSS-lint](https://github.com/causes/scss-lint) est un outil qui vous aide à conserver des fichiers SCSS propres et lisibles. Il est entièrement personnalisable et facile à intégrer à vos outils de développement.

Par chance, les recommandations de SCSS-lint sont très similaires à celles de ce document. Si vous voulez configurer SCSS-lint selon les recommandations décrites ici, je vous propose la configuration suivante (SCSS-Lint v0.32.0)&nbsp;:

{% highlight yaml %}

linters:

  BangFormat:
    enabled: true
    space_before_bang: true
    space_after_bang: false

  BorderZero:
    enabled: true

  ColorKeyword:
    enabled: false

  Comment:
    enabled: false

  DebugStatement:
    enabled: true

  DeclarationOrder:
    enabled: true

  DuplicateProperty:
    enabled: false

  ElsePlacement:
    enabled: true
    style: same_line

  EmptyLineBetweenBlocks:
    enabled: true
    ignore_single_line_blocks: false

  EmptyRule:
    enabled: true

  FinalNewline:
    enabled: true
    present: true

  HexLength:
    enabled: true
    style: short

  HexNotation:
    enabled: true
    style: lowercase

  HexValidation:
    enabled: true

  IdSelector:
    enabled: true

  ImportPath:
    enabled: true
    leading_underscore: false
    filename_extension: false

  Indentation:
    enabled: true
    character: space
    width: 2

  LeadingZero:
    enabled: true
    style: include_zero

  MergeableSelector:
    enabled: false
    force_nesting: false

  NameFormat:
    enabled: true
    convention: hyphenated_lowercase
    allow_leading_underscore: true

  NestingDepth:
    enabled: true
    max_depth: 3

  PlaceholderInExtend:
    enabled: true

  PropertySortOrder:
    enabled: false
    ignore_unspecified: false

  PropertySpelling:
    enabled: true
    extra_properties: []

  QualifyingElement:
    enabled: true
    allow_element_with_attribute: false
    allow_element_with_class: false
    allow_element_with_id: false

  SelectorDepth:
    enabled: true
    max_depth: 3

  SelectorFormat:
    enabled: true
    convention: hyphenated_lowercase
    class_convention: '^(?:u|is|has)\-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:\-[a-z][a-zA-Z0-9]*)?(?:\-\-[a-z][a-zA-Z0-9]*)?$'

  Shorthand:
    enabled: true

  SingleLinePerProperty:
    enabled: true
    allow_single_line_rule_sets: false

  SingleLinePerSelector:
    enabled: true

  SpaceAfterComma:
    enabled: true

  SpaceAfterPropertyColon:
    enabled: true
    style: one_space

  SpaceAfterPropertyName:
    enabled: true

  SpaceBeforeBrace:
    enabled: true
    style: space
    allow_single_line_padding: true

  SpaceBetweenParens:
    enabled: true
    spaces: 0

  StringQuotes:
    enabled: true
    style: single_quotes

  TrailingSemicolon:
    enabled: true

  TrailingZero:
    enabled: true

  UnnecessaryMantissa:
    enabled: true

  UnnecessaryParentReference:
    enabled: true

  UrlFormat:
    enabled: false

  UrlQuotes:
    enabled: true

  VendorPrefixes:
    enabled: true
    identifier_list: base
    include: []
    exclude: []

  ZeroUnit:
    enabled: true
{% endhighlight %}

<div class="note">
  <p>Au cas où vous voudriez intégrer SCSS lint à votre process de développement Grunt, il existe un plugin appelé <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>De plus, si vous cherchez une application soignée qui fonctionne avec SCSS-lint et autres, les ingénieurs de <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) travaillent à <a href="https://houndci.com/">Hound</a>.</p>
</div>



### Lectures complémentaires

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)

