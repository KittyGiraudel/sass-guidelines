
## Architecture

La conception de l’architecture d’un projet CSS est probablement l’une des étapes les plus complexes dans la vie d’un projet. Conserver la cohérence de l’architecture et son sens est encore plus difficile.

Heureusement, l’un des principaux bénéfices de l’utilisation de préprocesseurs est la possibilité d’éclater le code en plusieurs fichiers sans impacter la performance (contrairement à la directive CSS `@import`). Grâce à la surcharge de la directive `@import` dans Sass, on peut de manière sûre (et recommandée) utiliser autant de fichiers que nécessaire dans le développement, qui seront tous compilés en une feuille de style unique pour la production.

On n’insistera jamais assez sur la nécessité d’utiliser des dossiers, même sur des projets de dimension modeste. À la maison, vous ne rangez pas tous vos papiers dans la même boîte. Vous utilisez des dossiers&nbsp;: un pour les papiers de la maison, un pour la banque, un pour les factures, etc. Il en va de même lorsqu’on structure un projet CSS. Éclatez votre code en plusieurs dossiers qui font sens, de façon à retrouver ce que vous cherchez quand vous devez revenir sur le code.

Il existe [plusieurs architectures populaires](https://www.sitepoint.com/look-different-sass-architectures/) pour les projets CSS&nbsp;: [OOCSS](https://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), ou inspirées de [Bootstrap](https://getbootstrap.com/) ou de [Foundation](https://get.foundation/)… Elles ont toutes leurs mérites et chacune a du pour et du contre.

Personnellement j’utilise une approche assez similaire à [SMACSS](http://smacss.com/) de [Jonathan Snook](https://snook.ca/), dont l’objectif est de conserver une architecture simple et évidente.

<div class="note">
  <p>L’expérience m’a appris que l’architecture était la plupart du temps très spécifique au projet. Sentez-vous libre de rejeter complètement ou d’adapter la solution proposée —&nbsp;votre système doit répondre à vos besoins spécifiques.</p>
</div>

### Composants

Il y a une différence essentielle entre un projet *qui marche* et un *bon* projet. Encore une fois, CSS est un langage confus <sup>[citation requise]</sup>. Moins nous avons de CSS et mieux nous nous portons. Nous ne voulons pas avoir à gérer des mégaoctets de code CSS. Pour conserver des feuilles de styles concises et efficaces —&nbsp;ce ne sera pas une surprise pour vous&nbsp;— il est généralement utile de voir l’interface comme un ensemble de composants.

Les composants peuvent être ce qu’on veut, du moment que&nbsp;:

* ils font une chose, et une seule chose ;
* ils sont réutilisables et réutilisés à travers le projet&nbsp;;
* ils sont indépendants.

Par exemple, un formulaire de recherche devrait être traité comme un composant. Il devrait être réutilisable, à différents endroits, sur différentes pages, dans des situations variées. Il ne devrait pas dépendre de sa position dans le DOM (footer, sidebar, main content…).

La plupart des éléments constituant une interface peuvent être pensés comme des composants et je recommande de se tenir à ce paradigme. Non seulement cela réduira le CSS nécessaire à un projet, mais encore ce sera bien plus facile à maintenir qu’un code chaotique et confus.

### Anatomie d’un Composant

Idéalement, les composants devraient exister dans leur propre fichier (dans le dossier `components/`, comme décrit dans la section dédiée [au pattern 7-1](#le-pattern-7-1)), par exemple `components/_button.scss`). Les styles décrits dans chaque composant devraient uniquement traiter :

* du composant lui-même ;
* des variantes du composant ainsi que de ses états ;
* des descendants du composant (enfants) si nécessaire.

Si vous souhaitez rendre vos composants personnalisables de façon externe (via un thème provenant du dossier `themes/` par exemple), limitez les déclarations aux styles structurels comme les dimensions (`width`, `height`), marges (`padding`, `margin`), alignements, etc. Évitez les styles graphiques comme les couleurs, ombres, fonds, règles de typographie, etc.

Un fichier de composant peut inclure des variables, placeholders et mêmes mixins et fonctions du moment que ceux-ci sont spécifiques au dit composant. Gardez à l’esprit cependant qu’il faut éviter de référencer (`@import`-er) un composant depuis un autre composant car cela peut rendre le projet extrêmement chaotique.

Voilà un exemple de composant bouton :

{% include snippets/architecture/06/index.html %}

<div class="note">
  <p>Merci à <a href="https://twitter.com/davidkpiano">David Khourshid</a> pour son aide et son expertise dans cette section.</p>
</div>

### Le pattern 7-1

Revenons à l’architecture. J’utilise habituellement ce que j’appelle le *pattern 7-1*&nbsp;: 7&nbsp;dossiers, 1&nbsp;fichier. Tous vos partiels regroupés dans 7&nbsp;dossiers différents et un fichier simple à la racine (généralement appelé `main.scss`) qui les importe tous pour les compiler dans une feuille de style CSS.

* `abstracts/`
* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `vendors/`

Et bien sûr&nbsp;:

* `main.scss`

<div class="note">
  <p>Si vous souhaitez utiliser le pattern 7-1, il y a déjà un <a href="https://github.com/KittyGiraudel/sass-boilerplate">boilerplate</a> sur GitHub. Il contient tout ce dont vous avez besoin pour démarrer avec cette architecture.</p>
</div>

{% include images/wallpaper.html %}

Idéalement, nous pouvons proposer quelque chose comme ceci&nbsp;:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Les fichiers suivent les conventions de nommage décrites précédemment&nbsp;: minuscules et utilisation du trait d’union.</p>
</div>

#### Dossier base

Le dossier `base/` contient ce que nous pourrions appeler le code standard (*boilerplate*) du projet. On pourrait y trouver par exemple le fichier de reset, quelques règles typographiques, et probablement une feuille de style définissant quelques styles standard pour les éléments HTML les plus employés (que j’ai l’habitude d’appeler `_base.scss`).

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

<div class="note">
  <p>Si votre projet utilise <em>beaucoup</em> d’animations CSS, vous pouvez envisager d’ajouter un fichier <code>_animations.scss</code> contenant les définitions de <code>@keyframes</code> pour toutes vos animations. Si vous n’utilisez les animations que de façon sporadique, laissez leur déclaration près des sélecteurs qui les emploient.</p>
</div>
 
#### Dossier layout

Le dossier `layout/` contient tout ce qui concerne la mise en page du site ou de l’application. Ce dossier pourrait intégrer des feuilles de style pour les principales parties du site (header, footer, navigation, sidebar…), pour le système de grille ou même les styles CSS pour tous les formulaires.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>Le dossier <code>layout/</code> pourrait aussi être appelé <code>partiels/</code>, selon ce que vous préférez.</p>
</div>

#### Dossier composants

Pour les plus petits composants, il y a le dossier `components/`. Alors que `layout/` est *macro* (c’est-à-dire qu’il définit l’*armature* globale), `components/` est plus centré sur les widgets.  Il contient toutes sortes de modules spécifiques tels qu’un slider, un loader, un widget et toutes ces sortes de choses. Il y a en général de nombreux fichiers dans `components/` car l’application tout entière devrait être essentiellement constituée de petits modules.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>Le dossier <code>components/</code> pourrait également être appelé <code>modules/</code>, selon ce que vous préférez.</p>
</div>

#### Dossier Pages

Si vous avez des styles spécifiques à certaines pages, il est préférable de les inclure à l’intérieur d’un dossier `pages/` dans un fichier portant le nom de la page. Par exemple, il n’est pas rare d’avoir des styles très spécifiques pour la page d’accueil, d’où la nécessité d’un fichier `_home.scss` dans `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Selon votre processus de déploiement, ces fichiers peuvent être appelés individuellement pour éviter de les mélanger aux autres dans la feuille de style finale. Cela dépend vraiment de vous.</p>
</div>

#### Dossier Thèmes

Dans des sites ou applications de grande envergure, il n’est pas rare d’avoir plusieurs thèmes. Il y a certainement bien des façons de traiter les thèmes, mais personnellement j’aime les regrouper dans un dossier `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>On est ici dans des considérations très spécifiques aux projets, et il est probable que ce dossier n’existera pas dans bien des cas.</p>
</div>

#### Dossier d’Abstractions

Le dossier `abstracts/` regroupe les outils et helpers Sass utilisés à travers le projet. Toutes les variables globales, les fonctions, les mixins et les placeholders devraient se retrouver dans ce dossier.

La règle générale concernant ce dossier est qu’il ne devrait pas retourner une seule ligne de CSS s’il était compilé seul. Ce ne sont ici que des helpers Sass.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss`

<div class="note">
  <p>Le dossier <code>abstracts/</code> pourrait également être appelé <code>utilities/</code> ou <code>helpers/</code>, au choix.</p>
</div>

#### Dossier vendors

Et *last but not least*, la plupart des projets comportent un dossier `vendors/` qui regroupe tous les fichiers CSS provenant de bibliothèques et frameworks externes —&nbsp;Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, etc. Le fait de les mettre ainsi de côté dans un dossier séparé est une bonne façon d’indiquer qu’ils ne sont pas de vous et ne relèvent pas de votre responsabilité.

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Si vous devez remplacer une section d’un fichier *vendor*, je recommande de créer un 8<sup>e</sup> dossier nommé `vendors-extensions/` dans lequel vous aurez des fichiers nommés en fonction du *vendor* qu’ils remplacent.

Par exemple, `vendors-extensions/_boostrap.scss` serait un fichier contenant toutes les règles CSS qui re-déclarent le CSS par défaut de Bootstrap. Vous éviterez ainsi de modifier les fichiers *vendors* eux-mêmes, ce qui n’est pas conseillé.

#### Fichier principal

Le fichier principal (généralement appelé `main.scss`) devrait être le seul fichier de toute la base à ne pas commencer par un underscore (`_`). Ce fichier ne devrait rien contenir d’autre que les `@import` et des commentaires.

Les fichiers doivent être importés en fonction du dossier dans lequel ils sont rangés, l’un après l’autre dans l’ordre suivant&nbsp;:

1. `abstracts/`
1. `vendors/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Afin d’assurer une bonne lisibilité, le fichier principal devrait respecter ces recommandations&nbsp;:

* un fichier par `@import`&nbsp;;
* un `@import` par ligne&nbsp;;
* pas de saut de ligne entre 2 imports provenant du même dossier&nbsp;;
* un saut de ligne après le dernier import d’un dossier&nbsp;;
* les extensions fichiers et les underscores initiaux doivent être omis.

{% include snippets/architecture/02/index.html %}

Il existe une autre façon d’importer les partiels, que je considère également valable. D’un côté, elle rend le fichier plus lisible. D’un autre côté, elle rend la mise à jour moins aisée. En tout cas, c’est à vous de décider, ce n’est pas très important. Dans cette façon de faire, le fichier principal doit respecter ces recommandations&nbsp;:

* un `@import` par dossier ;
* retour à la ligne après `@import` ;
* chaque fichier sur sa propre ligne ;
* un saut de ligne après le dernier import d’un dossier ;
* les extensions fichiers et les underscores initiaux doivent être omis.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>Pour éviter d’avoir à importer chaque fichier manuellement, il y a une extension de Sass Ruby appelée <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, qui permet d’utiliser les patterns glob dans Sass <code>@import</code> tels que <code>@import "components/*"</code>.</p>
  <p>Ceci dit, je ne la recommande pas car elle importe les fichiers par ordre alphabétique ce qui n’est pas souhaitable en général, surtout s’agissant d’un langage dans lequel l’ordre des sources est essentiel.</p>
</div>

### À propos du “globbing”

En informatique, les “glob patterns” spécifient des collections de noms de fichiers contenant des caractères dits “joker”, tels que `*.scss`. De manière générale, globbing signifie déterminer un ensemble de fichiers à partir d’une expression plutôt que via une liste de noms de fichier. Quand il s’agit de Sass, cela signifie importer des fichiers individuels dans le [fichier principal](#fichier-principal) avec un pattern plutôt qu’en les listant un par un. Cela donnerait un fichier principal comme celui-ci :

{% include snippets/architecture/05/index.html %}

Sass ne supporte pas le globbing par défaut car cela peut s’avérer dangereux dans la mesure où l’ordre de la source est important en CSS. En important les fichiers de manière dynamique (généralement par ordre alphabétique), on ne peut s’assurer de l’ordre de la source, ce qui peut engendrer des bugs difficiles à analyser.

Ceci étant dit, dans une architecture strictement basée sur les composants où un soin tout particulier est apporté à l’encapsulation des styles, l’ordre ne devrait pas vraiment importer, ce qui rend le globbing possible. Cela permettrait de faciliter l’ajout et le retrait des fichiers sans avoir à maintenir le fichier principal à la main.

Avec Ruby Sass, il existe une Gem Ruby appelée [sass-globbing](https://github.com/chriseppstein/sass-globbing) qui autorise ce comportement. Avec node-sass, on peut s’appuyer sur Node.js ou l’outil gérant la compilation des feuilles de styles (Gulp, Grunt, etc.).

### Fichier de la honte

Il existe un concept intéressant, popularisé par [Harry Roberts](https://csswizardry.com), [Dave Rupert](https://daverupert.com) et [Chris Coyier](https://css-tricks.com) qui consiste à ranger toutes les déclarations CSS, les hacks et tout ce dont on n’est pas vraiment fier dans un [fichier de la honte](https://csswizardry.com/2013/04/shame-css-full-net-interview/). Ce fichier, pathétiquement dénommé `_shame.scss`, est importé après tous les autres fichiers, à la toute fin de la feuille de style.

{% include snippets/architecture/04/index.html %}
