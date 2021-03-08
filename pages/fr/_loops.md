
## Boucles

Sass nous offre des structures complexes telles que les [listes](#listes) et les [maps](#maps), il n’est donc pas surprenant qu’il nous permette d’effectuer des itérations sur ces entités.

Toutefois, la présence de boucles implique généralement une logique légèrement complexe qui ne fait sans doute pas partie de la philosophie de Sass. Avant d’utiliser une boucle, assurez-vous que cela a un sens et que cela résout effectivement un problème.

### Each

La boucle `@each` est certainement la plus utilisée des trois boucles de Sass. Elle fournit une API propre pour itérer sur une liste ou une map.

{% include snippets/loops/01/index.html %}

Lorsque vous effectuez une itération sur une map, utilisez toujours les noms de variables `$key` et `$value` pour renforcer la cohérence.

{% include snippets/loops/02/index.html %}

De plus, assurez-vous de respecter ces recommandations qui aideront à préserver la lisibilité&nbsp;:

* Toujours un saut de ligne avant `@each`&nbsp;;
* Toujours un saut de ligne après l’accolade fermante  (`}`) sauf si la ligne suivante est une accolade fermante (`}`).

### For

La boucle `@for` peut être utile en lien avec les pseudo-classes CSS `:nth-*`. Mis à part ce scénario, préférez la boucle `@each` pour les itérations.

{% include snippets/loops/03/index.html %}

Utilisez toujours `$i` comme nom de variable pour respecter les conventions habituelles, à moins d’avoir une bonne raison de ne pas le faire. N’utilisez jamais le mot-clé `to`, mais toujours le mot-clé `through`. Nombreux sont les développeurs qui ne connaissent pas cette variante Sass.

De plus, assurez-vous de respecter ces recommandations qui aideront à préserver la lisibilité&nbsp;:

* Toujours un saut de ligne avant `@for`&nbsp;;
* Toujours un saut de ligne après l’accolade fermante  (`}`) sauf si la ligne suivante est une accolade fermante (`}`).

### While

La boucle `@while` n’a pas de cas d’usage dans les projets Sass réels, surtout parce qu’il n’y a aucun moyen de sortir de la boucle de l’intérieur. **Ne l’utilisez pas**.
