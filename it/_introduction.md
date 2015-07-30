
# Introduzione

## Perché una guida di stile

Una guida di stile non è solamente un bel documento da leggere, che racconta come dovrebbe essere il vostro codice. È un documento importantissimo per la vita di un progetto, che descrive come e perchè il codice dovrebbe esser scritto. Può sembrare una cosa eccessiva per un piccolo progetto, ma aiuta parecchio a mantenere la codebase pulita, scalabile e facile da manutenere.

È ovvio aggiungere che più sono gli sviluppatori in un progetto, più c'è bisogno di linee guida per il codice. Per lo stesso motivo, più è grande un progetto, più sono necessarie delle linee guida.


[Harry Roberts](http://csswizardry.com) lo spiega molto bene nelle [linee guida CSS](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Una guida di stile per il codice (attenzione, non una guida di stile visivo) è uno strumento prezioso per i team che:</p>
  <ul>
    <li>costruiscono e manutengono prodotto per un periodo di tempo ragionevole;</li>
    <li>hanno sviluppatori con differenti abilità e specialità;</li>
    <li>hanno un numero di sviluppatori diversi che lavorano su un prodotto in diversi momenti;</li>
    <li>accolgono spesso nuovi membri</li>
    <li>hanno parecchie codebase in cui gli sviluppatori entrano ed escono.</li>
  </ul>
</blockquote>

## Disclaimer

Prima di tutto: **questa non è una guida di stile CSS**. Questo documento non andrà a descrivere convenzioni per i nomi delle classi CSS, pattern modulari o la questione degli ID nel CSS. Queste linee guida hanno solo a che fare con contenuti relativi a Sass. 

Aggiungo poi che queste linee guida sono le mei, per cui è tutto un **secondo me**. Pensate a questo lavoro come ad una raccolta di metodologie e consigli che ho raffinato e selezionato nel corso degli anni. Mi dà anche l'opportunità di segnalare dei link verso contenuti utili; date uno sguardo anche alle sezioni *approfondimenti*.

Naturalmente, certamente questa non è l'unica maniera per fare le cose, e può o non può essere adatta al vostro progetto. Sentitevi liberi di partire da qui e adattare le cose ai vostri bisogni. Come si dice, *le cose potrebbero cambiare*.

## Principi chiave

Alla fin fine, se c'è una cosa che mi piacerebbe arrivasse da tutte queste linee guida, è che **Sass dovrebbe essere scritto più semplice possibile*.
Grazie ai miei esperimenti scemi come [bitwise operators](https://github.com/HugoGiraudel/SassyBitwise), [iterators and generators](https://github.com/HugoGiraudel/SassyIteratorsGenerators) e [a JSON parser](https://github.com/HugoGiraudel/SassyJSON) con Sass, siamo tutti ben consapevoli di ciò che si può fare con questo preprocessore. 

D'altro canto, CSS è un linguaggio semplice. Sass, essendo inteso come strumento per scrivere CSS, non dovrebbe essere più complesso che del normale CSS. Il [principio KISS ](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid) è la cosa più importante qui, e può anche prender la precedenza sul [principio DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself), in alcune circostanze.

Certe volte è meglio ripetere un po' di codice per mantenere il tutto più semplice da manutenere, piuttosto che costruire sistemi pesanti, ingombranti e inutilmente complicati che sono un incubo da manutenere perchè troppo complessi.

Fatemi ancora citare [Harry Roberts](https://csswizardry.com): **il pragmatismo vince sulla perfezione**. Ad un certo punto, probabilmente vi troverete ad andare contro le regole descritte qui. Se ciò ha un senso, se le cose filano, fatelo. Il codice è solo un mezzo, non il fine.

###### Approfondimenti

* [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
* [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)
