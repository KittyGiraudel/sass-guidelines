
## Extend

La directive `@extend` est une fonctionnalité puissante qui est bien souvent mal comprise. En règle générale, elle permet d’indiquer à Sass qu’il doit styler un sélecteur A comme s’il correspondait à un élément B. Il va sans dire que c’est un allié de poids lorsqu’on écrit un CSS modulaire.

Cependant, le vrai rôle de `@extend` est d’indiquer et de maintenir des relations (contraintes) au sein des sélecteurs étendus entre plusieurs règles. Concrètement, qu’est-ce que cela signifie ?

* Les sélecteurs ont des contraintes (p.ex. `.bar` dans `.foo > .bar` doit avoir un parent `.foo`) ;
* Ces contraintes sont passées au sélecteur qui étend (p.ex. `.baz { @extend .bar; }` va produire `.foo > .bar, .foo > .baz`) ;
* Les déclarations du sélecteur étendu sont partagées avec le sélecteur qui étend.

Sachant cela, il est assez évident de voir comment le fait d’étendre des sélecteurs avec des contraintes trop souples peut engendrer une explosion du nombre de sélecteurs. Si `.baz .qux` étend `.foo .bar`, le sélecteur résultant peut être `.foo .baz .qux` ou `.baz .foo .qux`, dans la mesure où `.foo` et `.baz` sont des parents génériques. Ils peuvent être des parents, des grands-parents, etc.

Essayez toujours de définir des relations via les placeholders, plutôt que des classes. Ça permet d’utiliser n’importe quelle convention de nommage, et d’en changer sans problème. De plus, vu que les relations sont définies une fois seulement par les placeholders, il est bien plus rare de générer des sélecteurs non désirés.

{% include snippets/extend/01/index.html %}

Il y a de nombreux scénarios où étendre des sélecteurs peut être pratique et utile. Gardez toujours en tête ces règles afin de pouvoir utiliser `@extend` sans crainte :

* N’étendez que des `%placeholders`, pas de vrais sélecteurs.
* Étendez un même `%placeholder` aussi peu de fois que possible.
* Évitez les sélecteurs parents génériques (p.ex. `.foo .bar`) ou les voisins génériques (p.ex. `.foo ~ .bar`). C’est précisément ce qui créé des problèmes de sélecteurs.

<div class="note">
  <p>Il est souvent dit que <code>@extend</code> aide à réduire la taille des feuilles de styles dans la mesure où il combine les sélecteurs plutôt que de dupliquer les déclarations. C’est vrai, cependant la différence devient négligeable quand <a href="https://en.wikipedia.org/wiki/Gzip">Gzip</a> a effectué la compression.</p>
  <p>Ceci étant dit, si vous ne pouvez pas utiliser Gzip (ou équivalent), basculer sur une approche utilisant <code>@extend</code> peut être envisageable, surtout si la taille de la feuille de styles constitue un problème de performance.</p>
</div>

### Extend et les media queries

Vous ne devez étendre que des sélecteurs faisant partie du même cadre de média (directive `@media`). Considérez les media queries comme une autre contrainte.

{% include snippets/extend/02/index.html %}

Les opinions semblent très divisées vis-à-vis des avantages et inconvénients de `@extend`, et de nombreux développeurs (moi y compris) préconisent de ne pas l’utiliser, comme vous pouvez le lire dans ces articles :

* [What Nobody Told you About Sass Extend](https://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](https://www.sitepoint.com/avoid-sass-extend/)
* [Don’t Over Extend Yourself](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

Ceci étant dit et pour résumer, il est recommandé d’utiliser `@extend` exclusivement pour maintenir des relations entre les sélecteurs. Si deux sélecteurs ont des caractéristiques similaires, il y a là un cas d’utilisation typique pour `@extend`. S’ils n’ont rien à voir mais partagent quelques déclarations, un `@mixin` est probablement plus approprié. Davantage d’information sur leurs différences dans [cet article](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/).

<div class="note">
  <p>Merci à <a href="https://twitter.com/davidkpiano">David Khourshid</a> pour son aide et son expertise dans cette section.</p>
</div>
