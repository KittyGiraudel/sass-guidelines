
# Extend

La direttiva `@extend` è una funzione spesso mal interpretata. Giusto per ricordarlo, con questa direttiva possiamo dire a Sass di stilare un elemento `A` esattamente come se corrispondesse ad un selettore `B`. Inutile dire che rappresenta un ottimo alleato quando c’è da scrivere del CSS modulare.

Tuttavia il vero scopo di `@extend` è quello di mantenere le relazioni (i vincoli) tra set di regole all’interno di selettori estesi. Cosa vuol dire tutto ciò esattamente?

- I selettori hanno *vincoli* (`.bar` in `.foo > .bar` deve avere un padre `.foo`)
- Questi vincoli sono *trasportati* al selettore estendente (`.baz { @extend .bar; }` produrrà `.foo > .bar, .foo > .baz`);
- Le dichiarazioni del selettore esteso saranno condivise con il selettore estendente.

Detto questo, è chiaro che estendere selettori con vincoli blandi possa portare a risultati non voluti. Se `.baz .qux` estende `.foo .bar`, il risultato sarà `.foo .baz .qux` e `.baz .foo .qux` ed entrambi `.foo` e `.baz` sono _ancestor selector_ generici. Potrebbero essere padri, nonni, ecc...

Bisogna sempre cercare di definire le relazioni per mezzo dei [placeholder](http://www.sitepoint.com/sass-reference/placeholders/) e non attraverso i selettori reali. Questo vi darà la libertà di usare (e cambiare) qualsiasi convenzione dei nomi abbiate per i vostri selettori e, visto che le relazioni sono definite solo una volta e dentro i _placeholder_, sarete in grado di evitare selettori inintenzionali.

Per ereditare gli stili, usate `@extend` solo se la `.class` o il `%placeholder` che estende  _è dello stesso tipo_ del selettore esteso. Per esempio: un `.error` è un tipo di `.warning`, quindi `.error` può fare `@extend .warning`.

{% include snippets/extend/01/index.html %}

Ci sono condizioni dove estendere un selettore può essere d’aiuto e può valerne la pena. C’è da tenere in mente queste regole, così da evitare qualche guaio:

* Estendi un `%placeholder` non un selettore reale, quando possibile.
* Se estendi una classe, estendi un selettore di classe solo con un altro selettore di classe, non farlo _mai_ con un [selettore complesso](http://www.w3.org/TR/selectors4/#syntax).
* Estendi direttamente un `%placeholder` il meno possibile.
* Evitate di estendere selettori discendenti generici (`.foo .bar`) selettori adiacenti generici (es: `.foo ~ .bar`). Questo è solitamente quello che provoca l’esplosione di un selettore.

<div class="note">
  <p>Spesso si dice che <code>@extend</code> aiuta a tenere piccola la grandezza dei file css, in quanto combina diversi selettori piuttosto che duplicare le proprietà. Questo è vero, ma la differenza è davvero minima quando si attiva la compressione <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a>.</p>
  <p>Detto questo, se non si può usare Gzip (o qualsiasi equivalente) allora passare ad un approccio che usa <code>@extend</code> può non essere così male, soprattutto se il peso dei vostri fogli di stile è un vostro collo di bottiglia alle performance.</p>
</div>

### Extend e media query

Dovreste estendere i selettori solo all’interno della stessa _mediaquery_ (la direttiva `@media`). Pensate alla _mediaquery_ come ad un altro vincolo.

{% include snippets/extend/02/index.html %}

Ci sono diverse opinioni riguardo i benefici e i problemi di `@extend` al punto che molti sviluppatori, incluso me, raccomandano di non usarlo affatto. Potete leggere di più sull’argomento in questi articoli:

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

Per riassumere: consiglio di usare `@extend` solo per mantenere le relazioni tra selettori. Se due selettori hanno funzionalità simili, è il caso perfetto per usare `@extend`. Se invece condividono delle regole non correlate tra loro, un `@mixin` potrebbe fare al caso vostro.

<div class="note">
  <p>Un grazie a <a href="https://twitter.com/davidkpiano">David Khourshid</a> per il suo aiuto ed esperienza in questa parte.</p>
</div>
