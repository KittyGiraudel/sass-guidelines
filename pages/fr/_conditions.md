
## Structures conditionnelles

Vous savez probablement déjà que Sass fournit des structures conditionnelles via les directives `@if` et `@else`. Vous n’avez sans doute pas besoin de structures conditionnelles dans vos feuilles de style habituelles, en fait elles existent essentiellement pour les bibliothèques et les frameworks.

Si toutefois vous en avez un jour besoin, voici les recommandations à suivre&nbsp;:

* Pas de parenthèses sauf si elles sont nécessaires&nbsp;;
* Toujours un saut de ligne avant `@if`&nbsp;;
* Toujours un renvoi à la ligne après l’accolade ouvrante (`{`)&nbsp;;
* `@else` sur la même ligne que l’accolade fermante qui précède (`}`)&nbsp;;
* Toujours un saut de ligne après l’accolade fermante finale (`}`) sauf si la ligne suivante est aussi une accolade fermante (`}`).

{% include snippets/conditions/01/index.html %}

Lorsqu’on teste si une valeur est fausse, on utilise toujours le mot-clé `not` plutôt que de tester sur `false` ou `null`.

{% include snippets/conditions/02/index.html %}

Veillez à toujours mettre la partie variable à gauche de la déclaration et le résultat (in)attendu à droite. Les structures conditionnelles inversées sont souvent plus difficiles à lire, surtout pour les développeurs inexpérimentés.

{% include snippets/conditions/03/index.html %}

Lorsqu’on utilise des structures conditionnelles à l’intérieur d’une fonction, toujours s’assurer que la fonction a une déclaration `@return` en dehors de tout bloc conditionnel.

{% include snippets/conditions/04/index.html %}
