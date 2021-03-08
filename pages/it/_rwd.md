
## Responsive Web Design e i breakpoint

Non penso che ci sia bisogno di introdurre il _Responsive Web Design_ ora che lo si trova dappertutto. Ma potreste comunque domandarvi *perché c’è una sezione sul RWD in questa guida di stile?* In realtà ci sono un po’ di cose che rendono più facile lavorare con i _breakpoint_, così ho pensato che non sarebbe stata una cattiva idea elencarle qui.

### Dare un nome ai breakpoint

Penso che sia giusto dire che le _media query_ non debbano essere legate a specifici dispositivi. Per esempio, è decisamente una brutta idea cercare di individuare specificatamente gli iPad o i telefoni Blackberry. Le _media query_ dovrebbero occuparsi delle diverse dimensioni dello schermo. Una _media query_ si applica fino a che il design non si rompe e subentra la _media query_ successiva.

Per le stesse ragioni, i _breakpoint_ non dovrebbero avere i nomi di device, ma di qualcosa di più generico. Soprattutto da quando ci sono telefoni più grandi di alcuni tablet, tablet più grandi di alcuni computer con lo schermo minuscolo, ecc...

{% include snippets/rwd/01/index.html %}

A questo punto, [qualsiasi convenzione di nomenclatura](https://css-tricks.com/naming-media-queries/) che renda chiaro e cristallino che un design non è mutualmente legato ad uno specifico dispositivo farà al caso nostro, l’importante è che parli di grandezze.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>L’esempio precedente usa mappe innestate per definire i <em>breakpoint</em>, tuttavia dipende molto dal gestore di <em>breakpoint</em> che utilizzate. Potreste optare per stringhe intere invece che mappe interne per una flessibilità maggiore (es_: <code>’(min-width: 800px)’</code>).</p>
</div>

### Gestire i Breakpoint

Una volta che avrete dato il nome che preferite ai vostri _breakpoint_, avrete bisogno di utilizzarli all’interno di _mediaquery_ reali. Ci sono molti modi per farlo e devo ammettere che sono un grande fan delle mappe di breakpoint lette da una funzione _getter_. Questo sistema è sia semplice che efficiente.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Ovviamente questo è un modo fin troppo semplice di gestire i <em>breakpoint</em>. Se avete bisogno di un metodo più permissivo, vi raccomando di non reinventare la ruota ed utilizzare qualcosa di testato ed efficace come: <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> o <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
  <p>Se state cercando degli approfondimenti su come approcciare le Media Query in Sass, sia <a href="https://www.sitepoint.com/managing-responsive-breakpoints-sass/">SitePoint</a> (sinceramente vostro) che <a href="https://css-tricks.com/approaches-media-queries-sass/">CSS-Tricks</a>hanno dei begli articoli sull'argomento.</p>
</div>

### Utilizzo delle Mediaquery

Non molto tempo fa, c’era un dibattito molto caldo riguardo dove le _mediaquery_ dovessero essere scritte: devono essere incluse nei selettori (Sass permette di farlo) o totalmente a parte? Devo ammettere di essere un sostenitore delle *mediaquery-dentro-i-selettori*, visto che penso si sposino molto bene con l’idea dei *componenti*.

{% include snippets/rwd/04/index.html %}

Che ci porta al seguente codice CSS:

{% include snippets/rwd/05/index.html %}

Potreste aver sentito che questa convenzione porta all’avere _mediaquery_ duplicate nel CSS generato. Totalmente vero. Tuttavia sono stati fatti dei test e il risultato finale è che non importa una volta che Gzip (o qualcosa di simile) fa il suo lavoro:

> … abbiamo discusso molto sulle implicazioni delle prestazioni delle _mediaquery_ combinate contro quelle sparpagliate e siamo giunti alla conclusione che le differenze, seppur brutte, sono minime nel caso peggiore e non esistenti nel migliore dei casi.<br>
> &mdash; Sam Richards riguardo Breakpoint

Ora, se siete veramente preoccupati delle _mediaquery_ duplicate, potete usare un tool per combinale insieme, qualcosa tipo [questa gemma](https://github.com/aaronjensen/sass-media_query_combiner), però mi sento di avvisarvi dei possibili effetti collaterali dovuti allo spostare il CSS qua e là. Sapete bene quanto è importante l’ordine del codice CSS.
