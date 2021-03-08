
## Avertissements et erreurs

S’il est une fonctionnalité de Sass souvent délaissée par les développeurs, c’est sa capacité à retourner dynamiquement des messages d’avertissement et d’erreur. Sass vient en effet avec trois directives permettant d’imprimer un contenu dans le système de sortie standard (CLI, compiling app…)&nbsp;:

* `@debug`;
* `@warn`;
* `@error`.

Mettons `@debug` de côté puisqu’il est clairement prévu pour déboguer SassScript, ce qui n’est pas notre objet ici. Il nous reste `@warn` et `@error` qui sont semblables sauf sur un point&nbsp;: l’un stoppe le compilateur, l’autre non —&nbsp;je suppose que vous savez lequel fait quoi.

Il y a bien des possibilités d’avertissements et d’erreurs dans Sass, n’importe quel mixin ou fonction qui attend un argument ou un type spécifique pourrait envoyer une erreur si quelque chose n’allait pas ou afficher un avertissement lorsque vous faites une hypothèse.

### Avertissements

Prenez par exemple cette fonction de [Sass-MQ](https://github.com/sass-mq/sass-mq) qui essaie de convertir une valeur de `px` à `em`&nbsp;:

{% include snippets/errors/01/index.html %}

Si la valeur entrée se trouve être sans unité, la fonction suppose qu’elle est exprimée en pixels. Il est toutefois risqué de le faire sans avertir l’auteur que le logiciel a fait quelque chose qui pourrait être inattendu.

### Erreurs

Contrairement aux avertissements, les erreurs empêchent le compilateur d’aller plus loin. Elles stoppent la compilation et affichent un message pratique pour le débogage. C’est la raison pour laquelle les erreurs ne devraient être envoyées que lorsqu’il est impossible au programme d’aller plus loin. Si possible, essayez de contourner le problème et d’afficher un avertissement à la place.

Par exemple, admettons que vous construisez une fonction *getter* pour accéder à des valeurs à partir d’une map spécifique. Vous pourriez envoyer une erreur si la clé requise n’existe pas dans la map.

{% include snippets/errors/02/index.html %}

Pour plus d’information sur une utilisation efficace de `@error`, cette [introduction à la gestion des erreurs](https://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996) devrait vous aider.
