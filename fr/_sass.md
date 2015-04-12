
# À propos de Sass

Voici comment [Sass](http://sass-lang.com) est décrit dans la [documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)&nbsp;:

> Sass est une extension de CSS qui ajoute puissance et élégance au langage de base.

L’objectif ultime de Sass est de combler les lacunes de CSS. Nous le savons, CSS n’est pas le meilleur langage du monde <sup>[citation needed]</sup>. Même s’il est très simple d’apprentissage, il peut rapidement devenir confus, en particulier dans les projets à grande échelle.

Sass intervient ici comme un méta-langage, pour améliorer la syntaxe CSS afin d’offir des fonctionnalités supplémentaires et des outils pratiques. Dans le même temps, Sass entend rester proche du langage CSS.

Il ne s’agit pas de transformer CSS en langage de programmation. L’intention de Sass est simplement d’intervenir là où CSS montre ses limites. C’est pour cela qu’il est si simple de se lancer dans Sass&nbsp;: il ne fait qu’ajouter quelques fonctionnalités à CSS.

Ceci étant, il y a bien des manières d’utiliser ces fonctionnalités. Certaines sont bonnes, d’autres mauvaises, comme toujours. Les recommendations qui suivent ont pour objectif de vous donner une approche documentée et cohérente de l’écriture de code Sass.

### Lectures complémentaires

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)






## Ruby Sass ou LibSass

[Le premier commit de Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) remonte à la fin 2006, il y a plus de 8 ans. Inutile de dire qu’il a fait un long chemin depuis. À l’origine le projet a été développé en Ruby, mais d’autres variantes sont apparues ici et là. Celle qui a rencontré le plus de succès, [LibSass](https://github.com/sass/libsass) (écrite en C) est désormais proche de la compatibilité totale avec la version Ruby originale.

En 2014, [les équipes de Ruby Sass et de LibSass ont décidé d’attendre que les deux versions soient synchronisées avant de continuer à avancer](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Depuis lors, LibSass publie activement de nouvelles versions pour être toujours au niveau de son grand frère. Les quelques petites incohérences qui demeurent sont listées par mes soins dans le projet [Sass-Compatibility](http://sass-compatibility.github.io). Si vous avez connaissance d’une incompatibilité entre les deux versions qui ne serait pas listée, n’hésitez pas à ouvrir un ticket.

Pour revenir au choix de votre compilateur, en fait tout dépend de votre projet. Si vous travaillez sur un projet Ruby on Rails, il est préférable d’utiliser Ruby Sass qui convient parfaitement dans ce cas. Il faut également garder à l’esprit que Ruby Sass sera toujours l’implémentation de référence et sera toujours en avance par rapport à LibSass.

Pour des projets non-Ruby, LibSass est probablement une meilleure idée. Si vous utilisez NodeJS par exemple, [node-sass](https://github.com/sass/node-sass) est tout indiqué.



### Lectures complémentaires

* [LibSass](https://github.com/sass/libsass)
* [Getting to know LibSass](http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)






## Sass ou SCSS

Il règne encore une certaine confusion autour du nom *Sass*, et pour une bonne raison&nbsp;: Sass désigne à la fois le préprocesseur et sa propre syntaxe. Pas très commode, n’est-ce pas&nbsp;?

En fait, Sass désignait à l’origine une syntaxe dont la caractéristique était d’être basée sur l’indentation. Rapidement, les développeurs de Sass ont décidé de rapprocher Sass et CSS en proposant une syntaxe compatible avec CSS, appelée SCSS (pour *Sassy CSS* qu’on peut traduire par *CSS à la Sass* ou *CSS classieux*). Sa devise&nbsp;: si c’est valide en CSS, c’est du SCSS valide.

Depuis lors, Sass (le préprocesseur) propose deux syntaxes différentes&nbsp;: Sass (pas tout en majuscules, [s’il vous plaît](http://sassnotsass.com)), qu’on appelle aussi *la syntaxe indentée*, et SCSS. Vous pouvez utiliser celle que vous voulez, les deux sont strictement équivalentes en termes de fonctionnalités. C’est donc une question d’esthétique personnelle.

La syntaxe de Sass repose sur l’indentation pour se débarrasser des accolades, des points-virgules et autres symboles de ponctuation, ce qui produit une syntaxe allégée et raccourcie. De son côté, SCSS est plus facile à apprendre puisqu’il repose sur la syntaxe CSS à laquelle il ne fait qu’ajouter quelques fonctionnalités.

Personnellement, je préfère SCSS parce qu’il est plus proche de CSS et plus accessible aux développeurs. C’est pourquoi SCSS est la syntaxe par défaut tout au long de ce document. Si vous préférez la syntaxe Sass indentée, vous pouvez choisir cette option dans le <span data-toggle="aside" class="link-like" role="button" aria-expanded>panneau des options</span>.


### Lecture complémentaire

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)






## Autres préprocesseurs

Sass est un préprocesseur parmi d’autres. Son concurrent le plus sérieux est [LESS](http://lesscss.org/), un préprocesseur basé sur NodeJS qui est devenu assez populaire grâce à [Bootstrap](http://getbootstrap.com/) qui l’utilise. Il y a également [Stylus](http://learnboost.github.io/stylus/) —&nbsp;qui est une sorte de version nerdy de LESS&nbsp;— avec laquelle vous pouvez faire à peu près tout ce que vous voulez car il transforme CSS en un quasi langage de programmation.

*Pourquoi choisir Sass plutôt que LESS ou un autre préprocesseur ?* Cette question peut toujours se poser aujourd’hui. Il n’y a pas si longtemps, l’argumentation aurait porté sur l’avantage de Sass dans les projets basés sur Ruby. Aujourd’hui que LibSass est synchronisé avec Ruby Sass, ce sont les performances de Sass qu’on pourrait mettre en avant.

Ce que j’aime avec Sass c’est son approche conservatrice de CSS. La conception de Sass est basée sur quelques principes forts&nbsp;: pour l’essentiel, elle découle de la conviction de ses concepteurs que (a) l’ajout de nouvelles fonctionnalités a un coût lié à leur complexité qui doit être justifié par leur utilité réelle et (b) on doit pouvoir comprendre facilement ce que fait un bloc de styles en regardant ce seul bloc. De plus, Sass est beaucoup plus attentif aux détails que les autres préprocesseurs. De ce que je peux constater, ses concepteurs sont extrêmement soucieux de supporter tous les cas d’usage de CSS même les plus *borderlines*, et d’assurer la cohérence globale.

En d’autres termes, Sass n’est pas un préprocesseur destiné à faire plaisir à des nerdy comme moi en ajoutant des fonctionnalités extraordinaires à un langage dont l’intention n’a jamais été de supporter des structures logiques. C’est un logiciel créé pour résoudre de vrais problèmes, qui aide les développeurs en ajoutant des fonctionnalités utiles à CSS lorsque celui-ci se révèle insatisfaisant.

À côté des préprocesseurs, nous devons aussi mentionner les postprocesseurs dont on a beaucoup parlé dernièrement, principalement grâce à [PostCSS](https://github.com/postcss/postcss) et à [cssnext](https://cssnext.github.io/). Les postprocesseurs sont assez proches des préprocesseurs, à ceci près qu’ils ne font qu’ajouter la syntaxe future de CSS.

On peut voir les postprocesseurs comme un polyfill pour les fonctionnalités CSS non supportées. Par exemple, on peut écrire des variables de la manière dont elles sont décrites dans les [spécifications CSS](http://dev.w3.org/csswg/css-variables/), puis compiler les feuilles de style avec un postprocesseur qui ne fera que remplacer chaque occurrence de la variable par sa valeur, tout comme le ferait Sass.

L’idée intéressante derrière les postprocesseurs est qu’une fois la compatibilité acquise (p.ex. une fois que les navigateurs supporteront les variables CSS), le postprocesseur ne les compile plus et laisse le navigateur prendre le relais.

Même s’il peut être intéressant de travailler dès aujourd’hui avec la syntaxe de demain, je préfère pour ma part utiliser Sass pour des tâches plus courantes. Cependant, il est des cas où je pense que les postprocesseurs sont plus adaptés que Sass et les autres —&nbsp;par exemple pour les préfixes CSS&nbsp;— mais nous reviendrons là-dessus tout à l’heure.



### Lectures complémentaires

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)

