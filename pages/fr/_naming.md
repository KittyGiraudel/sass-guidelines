
## Conventions de nommage

Dans cette section, nous ne traiterons pas des conventions de nommage CSS pour une meilleure maintenabilité et le passage à l’échelle ; non seulement cela dépend de chacun, mais cela sort du cadre d’un guide de style Sass. Je vous suggère de consulter les conventions recommandées par [CSS Guidelines](https://cssguidelin.es/#naming-conventions).

Il existe un certain nombre de choses que l’on peut nommer en Sass, et il est important de bien les nommer de façon à assurer la cohérence et la lisibilité de votre code&nbsp;:

* variables;
* fonctions;
* mixins.

Les placeholders Sass sont délibérément omis, car ils peuvent être considérés comme des sélecteurs CSS normaux, et suivent par conséquent les mêmes modèles de nommage que les classes.

En ce qui concerne les variables, les fonctions et les mixins, nous allons nous tenir à quelque chose de très *CSS*&nbsp;: **bas-de-casse et séparation par un tiret**, et surtout signifiant.

{% include snippets/naming/01/index.html %}

### Constantes

Si vous êtes un développeur de frameworks ou si vous écrivez des bibliothèques, vous pouvez avoir besoin de variables qui ne sont pas supposées être mises à jour, en aucune circonstance&nbsp;: en d’autres termes des constantes. Malheureusement (ou heureusement&nbsp;?), Sass ne permet pas de définir de telles entités, c’est pourquoi nous devons nous tenir à des conventions strictes si nous voulons que les choses soient claires.

Comme dans de nombreux langages, je suggère d’utiliser des variables tout en majuscules et snake-case pour indiquer qu’il s’agit de constantes. C’est non seulement une convention déjà ancienne, mais elle contraste fortement avec les variables tout en minuscules et séparées par des tirets.

{% include snippets/naming/02/index.html %}

Si vous désirez vraiment utiliser des constantes en Sass, vous devriez lire [cet article dédié à ce sujet](https://www.sitepoint.com/dealing-constants-sass/).

### Namespaces

Si vous avez l’intention de distribuer votre code Sass, sous forme de bibliothèque, de framework, de système de grille ou autre, il peut s’avérer intéressant de donner un *namespace* à vos variables, fonctions, mixins et placeholders de façon à ce qu’ils n’entrent pas en conflit avec le code d’une autre personne.

Par exemple, si vous travaillez sur un projet *Sassy Unicorn* qui est destiné à être distribué, il est important d’utiliser un namespace, tel que `su-`, suffisamment spécifique pour éviter toute collision de noms et suffisamment court pour ne pas devenir pénible à écrire.

{% include snippets/naming/03/index.html %}

[Kaelig](https://kaelig.fr) a [un super article à propos du namespace global de CSS](https://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace), si jamais le sujet vous passionne !

<div class="note">
  <p>Le namespacing automatique est un des objectifs de la redéfinition à venir d’&nbsp;<code>@import</code> à partir de Sass 4.0. Lorsque cela se concrétisera, il sera de moins en moins utile de réaliser manuellement le namespacing, et à terme les bibliothèques conçues de la sorte (avec espaces de noms manuels) pourraient devenir plus difficiles à utiliser.</p>
</div>
