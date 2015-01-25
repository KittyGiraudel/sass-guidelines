
# Extend

La directive `@extend` est certainement l'une des fonctionnalités de Sass qui ont le plus contribué à la popularité de Sass il y a quelques années. Pour mémoire, elle permet d'indiquer à Sass qu'il doit styler un élément A comme s'il correspondait à un élément B. Il va sans dire que c'est un allié de poids lorsqu'on écrit un CSS modulaire.

Cependant, je dois vous avertir des dangers de cette fonctionnalité. Aussi intelligente soit-elle, `@extend` demeure un concept délicat qui peut faire plus de mal que de bien, surtout quand elle est mal utilisée. Le problème en effet est que lorsqu'on étend un sélecteur, on n'a que peu ou pas de moyen de répondre aux questions suivantes sans une connaissance approfondie de l'ensemble du code&nbsp;:

* où mon sélecteur courant sera-t-il ajouté ?
* y a-til un risque d'effets collatéraux ?
* quelle est l'ampleur du CSS généré par cette extension ?

Et quoi qu'on sache, le résultat pourrait aller de aucun effet secondaire à de désatreux effets collatéraux. C'est pourquoi mon premier conseil serait d'éviter complètement la directive `@extend`. Ça peut sembler brutal, mais au bout du compte ça peut vous épargner quelques problèmes et maux de tête.

Ceci dit, vous connaissez le dicton&nbsp;:

> Ne jamais dire jamais.<br>
> &mdash; Apparemment, [ce n'est pas Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Il y a bien sûr des scénarios dans lesquels l'extension de sélecteurs peut s'avérer utile et valable.  Mais gardez toujours à l'esprit ces règles si vous voulez vous éviter de sérieux problèmes&nbsp;:

* utilisez extend à l'intérieur d'un module, pas sur plusieurs modules.
* utilisez extend sur des placeholders uniquement, pas sur des sélecteurs.
* assurez-vous que le placeholder que vous étendez est aussi peu présent que possible dans la feuille de styles.

Si vous utilisez extend, rappelez-vous également qu'il ne fonctionne pas bien avec les blocs `@media`. Comme vous le savez, Sass ne sait pas étendre un sélecteur extérieur depuis l'intérieur d'une media query. Si vous le faites, le compilateur *crashe* et vous annonce qu'il ne peut pas le faire. Pas terrible, d'autant que les media queries sont à peu près ce que nous connaissons le mieux.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // Ça ne marche pas. Pire : c'est un crash.
    @extend .foo;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  content: 'foo'

@media print
  .bar
    // Ça ne marche pas. Pire : c'est un crash.
    @extend .foo
{% endhighlight %}
  </div>
</div>

> Vous ne pouvez pas @extend un sélecteur extérieur depuis l'intérieur de @media.<br>
> Vous pouvez seulement @extend des sélecteurs depuis l'intérieur de la même directive.

<div class="note">
  <p>On dit souvent que <code>@extend</code> diminue la taille du fichier puisqu'il combine les sélecteurs et évite la duplication des propriétés. C'est vrai, cependant la différence est négligeable une fois que <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a> a opéré sa compression.</p>
  <p>Cela étant, si vous ne pouvez pas utiliser Gzip (ou un équivalent), passer à une approche d'<code>@extend</code> n'est pas nécessairement un problème si vous savez ce que vous faites.</p>
</div>

Pour résumer, je conseille de **ne pas utiliser la directive `@extend`**, sauf dans des circonstances particulières, mais je n'irai pas jusqu'à l'interdire.



### Lectures complémentaires

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
