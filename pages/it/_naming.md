
## Convenzione sui nomi

In questa parte non andremo a parlare di qual è il miglior modo per creare nomi nel CSS in modo da assicurare manutenibilità e scalabilità. Non solo sta a te scegliere, ma è anche fuori dalla portata di queste linee guida Sass. Io suggerisco le convenzioni raccomandate da [CSS Guidelines](https://cssguidelin.es/#naming-conventions).

Ci sono alcune cose a cui si possono dare nomi in Sass, ed è importante scegliere bene, in modo che l’intera codebase sia coerente e facile da leggere:

* variabili;
* funzioni;
* *mixin*;

I placeholder di Sass sono stati omessi deliberatamente da questa lista, dato che possono esser considerati come dei normali selettori CSS, che seguono dunque la stessa convenzione dei nomi delle classi.

Riguardo variabili, funzioni e *Mixin*, rimaniamo con qualcosa di molto *CSS*: **minuscolo separato da trattino** e accertiamoci che abbiano un senso.

{% include snippets/naming/01/index.html %}

### Costanti

Se ti capita di essere uno sviluppatore di *framework*, o di scrivere una libreria, può capitare di trovarsi di fronte a variabili che non sono intese come qualcosa da poter aggiornare in ogni circostanza: sono delle costanti. Sfortunatamente (o fortunatamente?) Sass non offre nessuna maniera per definire queste entità. Dobbiamo così far leva su una stretta convenzione per i nomi in modo da raggiungere il nostro obiettivo.

Come per molti linguaggi, suggerisco di nominare le variabili costanti completamente in maiuscolo e divise da trattino basso nel caso formato da più parole. Non solo questa è una convenzione piuttosto vecchia, ma rende anche evidente la differenza con le variabili minuscole-trattino.

{% include snippets/naming/02/index.html %}

Se volete davvero giocare con l'idea di costanti in Sass, dovreste leggere [questo articolo sull'argomento](https://www.sitepoint.com/dealing-constants-sass/).

### Namespace

Se si vuol distribuire il proprio codice Sass, ad esempio in una libreria, un framework, una griglia o qualsiasi altra cosa, si può considerare di applicare un namespace alle proprie variabili, funzioni, *mixin* e *placeholder*, in modo da evitare conflitti con altro codice.

Ad esempio, se si lavora su un progetto *Sassy Unicorn* che sarà adottato da sviluppatori di tutto il mondo, si può considerare di usare `su-` come namespace. Questo è abbastanza specifico per prevenire qualsiasi collisione con altri nomi, e abbastanza corto da non essere una palla da scrivere ogni volta.

{% include snippets/naming/03/index.html %}

<div class="note">
  <p>Notare che il namespace automatico è un obiettivo del progetto della prossima ristrutturazione di <code>@import</code> prevista per Sass 4.0. Quando sarà disponibile, diventerà sempre meno utile inserire un namespace a mano; librerie che contengono namespace manuali saranno addirittura più difficili da usare.</p>
</div>
