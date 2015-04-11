
# Introduction





## Pourquoi un guide de style

Un guide de style n’est pas simplement un document agréable à lire, qui décrit l’état idéal de votre code. C’est un document-clé dans la vie d’un projet, qui décrit la façon dont un code devrait être écrit et pourquoi. C’est peut-être beaucoup pour un projet modeste, mais c’est une aide inappréciable pour créer un code propre, extensible et maintenable.

Il va sans dire que plus il y a de développeurs impliqués dans un projet, plus les guides de style sont nécessaires. Et plus l’échelle du projet est développée, plus un guide de style est obligatoire.

[Harry Roberts](http://csswizardry.com) le dit très bien dans ses [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Adopter des lignes de conduite en matière de code (on ne parle pas là d’un guide de style visuel donc) est primordial pour les équipes qui&nbsp;:</p>
  <ul>
    <li>conçoivent et maintiennent des produits sur une durée raisonnable ;</li>
    <li>sont constituées de développeurs de multiples horizons et aux capacités variées ;</li>
    <li>sont constituées de plusieurs développeurs travaillant sur un même projet à un moment donné ;</li>
    <li>accueillent régulièrement de nouveaux collaborateurs ;</li>
    <li>ont des bases de codes sur lesquelles des développeurs différents travaillent en alternance.</li>
  </ul>
</blockquote>






## Avertissement

Commençons par le commencement&nbsp;: **ceci n’est pas un guide de style CSS**. Ce document ne parlera pas des conventions de nommage des classes CSS, des patterns modulaires ou de la questions des IDs dans le monde CSS. Ces recommandations ne traitent que de contenus spécifiques à Sass.

Par ailleurs, ce guide de style est personnel et par conséquent **très engagé**. Vous pouvez le voir comme un ensemble de méthodologies et de conseils que j’ai polis et donnés pendant des années. Il me donne aussi l’opportunité de faire des liens vers un bon nombre de ressources instructives, n’hésitez pas à vous reporter aux *lectures complémentaires*.

Bien sûr, ce n’est pas la seule façon de faire, et cela correspondra ou pas à votre projet. Vous pouvez choisir ce qui vous intéresse et l’adapter à vos propres besoins. Comme on dit, *ça dépend*.






## Principes fondamentaux

Au bout du compte, s’il est une chose que je souhaite que vous reteniez de ce guide c’est que **Sass devrait toujours rester aussi simple que possible**.

Mes petites expériences stupides avec Sass, comme [les opérateurs *bitwise*](https://github.com/HugoGiraudel/SassyBitwise), [les itérateurs et générateurs](https://github.com/HugoGiraudel/SassyIteratorsGenerators) ou encore [un parser JSON](https://github.com/HugoGiraudel/SassyJSON) ont montré tout ce qu’on peut faire avec ce préprocesseur.

Cependant, CSS est un langage simple. L’intention de Sass est d’écrire du CSS, par conséquent il ne devrait pas être plus compliqué que le bon vieux CSS. Le [principe KISS](http://fr.wikipedia.org/wiki/Principe_KISS) (Keep It Simple Stupid) est essentiel ici et il devrait même prendre le pas sur le [principe DRY](http://fr.wikipedia.org/wiki/Ne_vous_r%C3%A9p%C3%A9tez_pas) (Don’t Repeat Yourself) dans certaines circonstances.

Parfois, il vaut mieux se répéter un peu pour conserver un code maintenable plutôt que construire un système lourd et inutilement compliqué qui devient difficile à maintenir en raison de sa complexité.

Encore une citation de [Harry Roberts](https://csswizardry.com)&nbsp;: **le pragmatisme doit prendre le pas sur la perfection**.  Il est possible qu’à certains moments vous soyez amené à aller contre les règles énoncées ici. Si ça fait sens, si ça vous paraît juste, faites-le. Le code est un moyen, pas une fin en soi.



### Lectures complémentaires

* [Principe KISS](http://fr.wikipedia.org/wiki/Principe_KISS)
* [Principe DRY](http://fr.wikipedia.org/wiki/Ne_vous_r%C3%A9p%C3%A9tez_pas)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)

