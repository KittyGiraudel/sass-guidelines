
## À propos de Sass

Voici comment [Sass](https://sass-lang.com) est décrit dans la [documentation](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)&nbsp;:

> Sass est une extension de CSS qui ajoute puissance et élégance au langage de base.

L’objectif ultime de Sass est de combler les lacunes de CSS. Nous le savons, CSS n’est pas le meilleur langage du monde <sup>[citation needed]</sup>. Même s’il est très simple d’apprentissage, il peut rapidement devenir confus, en particulier dans les projets à grande échelle.

Sass intervient ici comme un méta-langage, pour améliorer la syntaxe CSS afin d’offrir des fonctionnalités supplémentaires et des outils pratiques. Dans le même temps, Sass entend rester proche du langage CSS.

Il ne s’agit pas de transformer CSS en langage de programmation. L’intention de Sass est simplement d’intervenir là où CSS montre ses limites. C’est pour cela qu’il est si simple de se lancer dans Sass&nbsp;: il ne fait qu’ajouter quelques fonctionnalités à CSS.

Ceci étant, il y a bien des manières d’utiliser ces fonctionnalités. Certaines sont bonnes, d’autres mauvaises, comme toujours. Les recommandations qui suivent ont pour objectif de vous donner une approche documentée et cohérente de l’écriture de code Sass.

### Ruby Sass ou LibSass

[Le premier commit de Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) remonte à la fin 2006, il y a près de 10 ans. Inutile de dire qu’il a fait un long chemin depuis. À l’origine le projet a été développé en Ruby, mais d’autres variantes sont apparues ici et là. Celle qui a rencontré le plus de succès, [LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114) (écrite en C/C++) est désormais proche de la compatibilité totale avec la version Ruby originale.

En 2014, [les équipes de Ruby Sass et de LibSass ont décidé d’attendre que les deux versions soient synchronisées avant de continuer à avancer](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Depuis lors, LibSass publie activement de nouvelles versions pour être toujours au niveau de son grand frère. Les quelques petites incohérences qui demeurent sont listées par mes soins dans le projet [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/). Si vous avez connaissance d’une incompatibilité entre les deux versions qui ne serait pas listée, n’hésitez pas à ouvrir un ticket.

Pour revenir au choix de votre compilateur, en fait tout dépend de votre projet. Si vous travaillez sur un projet Ruby on Rails, il est préférable d’utiliser Ruby Sass qui convient parfaitement dans ce cas. Il faut également garder à l’esprit que Ruby Sass sera toujours l’implémentation de référence et sera toujours en avance par rapport à LibSass. Si vous souhaitez [basculer de Ruby Sass à LibSass](https://www.sitepoint.com/switching-ruby-sass-libsass/), cet article est pour vous.

Pour des projets non-Ruby, LibSass est probablement une meilleure idée. Si vous utilisez Node.js par exemple, [node-sass](https://github.com/sass/node-sass) est tout indiqué.

### Sass ou SCSS

Il règne encore une certaine confusion autour du nom *Sass*, et pour une bonne raison&nbsp;: Sass désigne à la fois le préprocesseur et sa propre syntaxe. Pas très commode, n’est-ce pas&nbsp;?

En fait, Sass désignait à l’origine une syntaxe dont la caractéristique était d’être basée sur l’indentation. Rapidement, les développeurs de Sass ont décidé de rapprocher Sass et CSS en proposant une syntaxe compatible avec CSS, appelée SCSS (pour *Sassy CSS* qu’on peut traduire par *CSS à la Sass* ou *CSS classieux*). Sa devise&nbsp;: si c’est valide en CSS, c’est du SCSS valide.

Depuis lors, Sass (le préprocesseur) propose [deux syntaxes](https://www.sitepoint.com/whats-difference-sass-scss/) différentes&nbsp;: Sass (pas tout en majuscules, [s’il vous plaît](http://sassnotsass.com)), qu’on appelle aussi *la syntaxe indentée*, et SCSS. Vous pouvez utiliser celle que vous voulez, les deux sont strictement équivalentes en termes de fonctionnalités. C’est donc une question d’esthétique personnelle.

La syntaxe de Sass repose sur l’indentation pour se débarrasser des accolades, des points-virgules et autres symboles de ponctuation, ce qui produit une syntaxe allégée et raccourcie. De son côté, SCSS est plus facile à apprendre puisqu’il repose sur la syntaxe CSS à laquelle il ne fait qu’ajouter quelques fonctionnalités.

Personnellement, je préfère SCSS parce qu’il est plus proche de CSS et plus accessible aux développeurs. C’est pourquoi SCSS est la syntaxe par défaut tout au long de ce document. Si vous préférez la syntaxe Sass indentée, vous pouvez choisir cette option dans le <button type="button" data-a11y-dialog-show="options-panel" class="link-like">panneau des options</button>.

### Autres préprocesseurs

Sass est un préprocesseur parmi d’autres. Son concurrent le plus sérieux est [Less](http://lesscss.org/), un préprocesseur basé sur Node.js qui est devenu assez populaire grâce à [Bootstrap](https://getbootstrap.com/) qui l’utilise (jusqu’à la version 4). Il y a également [Stylus](https://stylus-lang.com/), un préprocesseur très permissif et flexible toutefois plus complexe à utiliser et à la communauté plus petite.

*Pourquoi choisir Sass plutôt qu’un autre préprocesseur ?* Cette question peut toujours se poser aujourd’hui. Il n’y a pas si longtemps, l’argumentation aurait porté sur l’avantage de Sass dans les projets basés sur Ruby. Aujourd’hui que LibSass est synchronisé avec Ruby Sass, ce sont les performances de Sass qu’on pourrait mettre en avant.

Ce que j’aime avec Sass c’est son approche conservatrice de CSS. La conception de Sass est basée sur quelques principes forts&nbsp;: pour l’essentiel, elle découle de la conviction de ses concepteurs que (a) l’ajout de nouvelles fonctionnalités a un coût lié à leur complexité qui doit être justifié par leur utilité réelle et (b) on doit pouvoir comprendre facilement ce que fait un bloc de styles en regardant ce seul bloc. De plus, Sass est beaucoup plus attentif aux détails que les autres préprocesseurs. De ce que je peux constater, ses concepteurs sont extrêmement soucieux de supporter tous les cas d’usage de CSS même les plus *borderlines*, et d’assurer la cohérence globale. En d’autres termes, Sass est un logiciel créé pour résoudre de vrais problèmes, qui aide les développeurs en ajoutant des fonctionnalités utiles à CSS lorsque celui-ci se révèle insatisfaisant.

À côté des préprocesseurs, nous devons aussi mentionner d’autres outils dont on a beaucoup parlé dernièrement tels que [PostCSS](https://github.com/postcss/postcss) et [cssnext](https://cssnext.github.io/).

PostCSS est souvent (et de manière incorrecte) baptisé “postprocesseur”. Cette supposition, au-delà du nom trompeur, vient de l’idée que PostCSS analyserait du code CSS déjà processé par un préprocesseur. Bien que cela puisse fonctionner ainsi, ce n’est pas un pré-requis, si bien que PostCSS est désormais rangé simplement dans la catégorie “processeur“.

On parle souvent de “postprocesseurs” dans la mesure où ils compilent de la syntaxe propriétaire ou non-standardisée en CSS actuel. Ceci étant dit, ils sont assez proches des préprocesseurs, à ceci près qu’ils ne font qu’ajouter la syntaxe future de CSS.

PostCSS permet d’accéder aux “tokens” des feuilles de styles (comme les sélecteurs, propriétés, valeurs), pour les manipuler en JavaScript et compiler le tout en CSS à nouveau. Par exemple, la librairie [Autoprefixer](https://github.com/postcss/autoprefixer) qui ajoute les préfixes constructeurs est bâtie sur PostCSS. Elle analyse toutes les règles pour voir si des préfixes sont nécessaires en faisant des requêtes auprès de l’outil de support [CanIUse](https://caniuse.com), puis ajoute les préfixes requis ou les supprime lorsqu’ils ne le sont plus (en fonction des options choisies).

C’est très puissant pour créer des outils qui fonctionnent avec n’importe quel préprocesseur (ou même vanilla CSS), mais PostCSS n’est pas spécialement facile à utiliser (pour l’instant). Il faut avoir quelques connaissances en JavaScript pour s’en servir et son API est parfois déroutante. Si Sass prodigue un ensemble de fonctionnalités qui facilitent l’écriture de CSS, PostCSS confère un accès direct à l’AST CSS (*Abstract Syntax Tree*) et JavaScript.

Pour résumer, Sass est assez simple à prendre en main et aide à résoudre la majorité des problèmes de maintenance de feuilles de styles de qualité. De son côté, PostCSS est plus difficile à appréhender (surtout sans connaissances en JavaScript) mais s’avère être extrêmement puissant. Rien ne vous empêche d’utiliser les deux. En fait, PostCSS offre même un *parser* officiel juste pour ça.

<div class="note">
  <p>Merci à <a href="https://twitter.com/corysimmons">Cory Simmons</a> pour son aide et son expertise dans cette section.</p>
</div>
