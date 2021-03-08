
## Variables

Les variables sont l’essence de tout langage de programmation. Elles nous permettent de réutiliser des valeurs sans avoir à les recopier sans cesse. Plus important encore, elles facilitent les mises à jour. Plus besoin de chercher et remplacer, ni de rechercher manuellement.

Cependant, CSS n’est rien d’autre qu’un grand panier contenant tous nos oeufs. Contrairement à de nombreux langages, CSS ne connaît pas vraiment la notion de *portée lexicale* (*scope*). Il nous faut donc être attentifs lorsque nous ajoutons de nouvelles variables, si nous voulons éviter les conflits.

Mon conseil serait de ne créer de variables que lorsque cela fait vraiment sens. Ne créez pas de nouvelles variables juste pour le plaisir, ça n’améliorera en rien votre code. Une nouvelle variable ne devrait être créée que lorsque les critères suivants sont réunis&nbsp;:

* La valeur est répétée au moins deux fois&nbsp;;
* il y a des chances que la valeur soit mise à jour au moins une fois&nbsp;;
* toutes les occurrences de la valeur sont liées à la variable (c’est-à-dire pas par coïncidence).

Rien ne sert de déclarer une variable qui ne sera jamais mise à jour ou qui n’est utilisée qu’à un seul endroit.

### Scoping

Le scoping des variables dans Sass a évolué avec les années. Jusqu’à récemment, les déclarations de variables à l’intérieur d’un jeu de règles et autres portées étaient locales par défaut. Cependant, lorsqu’il y avait déjà une variable globale portant le même nom, la déclaration locale modifiait la variable globale. Depuis la version 3.4, Sass traite correctement le concept de portée et crée une nouvelle variable locale.

La documentation parle de *global variable shadowing*. Lorsqu’on déclare à un niveau local (sélecteur, fonction, mixin…) une variable qui existe déjà au niveau global, on dit que la variable locale *masque* la variable globale. Autrement dit, elle prend le pas sur la variable globale au niveau local.

Le petit code qui suit explique le concept de *variable shadowing*&nbsp;:

{% include snippets/variables/01/index.html %}

### Le flag `!default`

Quand on construit une bibliothèque, un framework, un système de grilles ou n’importe quelle structure Sass destinée à être distribuée et utilisée par des développeurs externes, toutes les variables de configuration doivent être définies avec le flag `!default` ce qui permet qu’elles soient écrasées.

{% include snippets/variables/02/index.html %}

De cette manière, un développeur peut définir sa propre variable `$baseline` *avant* d’importer votre bibliothèque sans risquer de voir sa valeur redéfinie.

{% include snippets/variables/03/index.html %}

### Le flag `!global`

Le flag `!global` ne doit être utilisé que lorsque l’on veut qu’une variable locale prenne le pas sur une variable globale. Lorsqu’on définit une variable à la racine, le flag `!global` doit être omis.

{% include snippets/variables/04/index.html %}

### Variables multiples ou maps

L’utilisation de maps plutôt que de variables multiples et distinctes présente un certain nombre d’avantages. Le principal réside dans la possibilité d’utiliser des boucles sur une map, ce qui n’est pas possible avec des variables distinctes.

Un autre avantage de l’utilisation de maps est la possibilité de créer des fonctions *getter* pour fournir une API plus facile d’usage. Par exemple, considérons le code Sass suivant&nbsp;:

{% include snippets/variables/05/index.html %}
