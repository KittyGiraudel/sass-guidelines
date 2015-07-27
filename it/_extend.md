
# Extend

La direttiva `@extend` è stata una delle caratteristiche che ha reso Sass molto popolare un paio d'anni fa. Giusto per ricordarlo, con questa direttiva possiamo dire a Sass di stilare un elemento A esattamente come se corrispondesse ad un selettore B. Inutile dire che rappresenta un ottimo alleato quando c'è da scrivere del CSS modulare.

Naturalmente mi sento di avvertirvi contro i pericoli di questa funzione. Intelligente com'è, `@extend` è un concetto complicato che può fare più male che bene, specialmente quando è usato male. Il fatto è che, quando si estende un selettore, c'è poco o nulla da fare per avere un'idea chiara di come rispondere a queste domande senza avere una conoscenza super estesa della codebase:

* in che punto verrà aggiunto il mio selettore?
* sto per causare effetti collaterali dannosi?
* quant'è grande il CSS generato da questo singola estensione?

Il risultato può oscillare dal "non succede niente" ad un disastroso effetto collaterale. Perciò il mio primo consiglio è di evitare interamente la direttiva `@extend`. Può sembrare troppo radicale, ma alla fine vi salverete da mal di testa e guai.

Detto ciò, conoscete il detto:


> Mai dire mai.<br>
> &mdash; ovviamente, [non è Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Ci sono condizioni dove estenere un selettore può essere d'aiuto e può valerne la pena. C'è da tenere in mente queste regole, così da evitare qualche guaio:

* Usa l'`@extend` dentro lo stesso modulo, non da un modulo ad un altro.
* Usa l'`@extend` solamente attraverso i _placeholders_, non veri selettori.
* Fa' in modo che il _placeholders_ che si va ad estendere sia presente il meno possibile nel foglio di stile.

Se andrete ad usare l'`@extend`, lasciatemi aggiungere che non va molto d'accordo con i blocchi `@media`. Come saprete, Sass non è capace di estendere un selettore esterno dall'interno di una media query. Quando si fa così, il compilatore semplicemente si rompe, e vi dice che non può fare questa roba. Brutta roba, specialmente fino a quando le media query sono tutto ciò che sappiamo.

If you are going to use extend, let me also remind you that it does not play well with `@media` blocks. As you may know, Sass is unable to extend an outer selector from within a media query. When doing so, the compiler simply crashes, telling you that you cannot do such a thing. Not great. Especially since media queries are almost all we do know.

{% include snippets/extend/01/index.html %}

> Non si può estendere un selettore esterno da dentro un blocco @media.<br>
> Non si possono estendere i selettori dentro la stessa direttiva.

<div class="note">
  <p>Spesso si dice che <code>@extend</code> aiuta a tenere la grandezza dei  piccola, in quanto combina diversi selettori piuttosto che duplicare le proprietà. Questo è vero, ma la differenza è davvero minima quando si attiva la compressione <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a>.</p>
  <p>Detto questo, se non si può usare Gzip (o qualsiasi equivalente) allora passare ad un approccio che usa <code>@extend</code> può non essere così male, finchè si ha ben chiaro ciò che si sta facendo.</p>
</div>

Per riassumenre, io **consiglio di non usare la direttiva `@extend`**, a meno che non ci siano specifiche circostanze, ma non mi spingo fino a vietarlo.

###### FPer saperne di più

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
