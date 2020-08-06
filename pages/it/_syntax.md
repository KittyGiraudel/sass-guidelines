
# Sintassi e formattazione

Se me lo chiedeste, la prima cosa che una guida di stile dovrebbe fare è descrivere il modo in cui vogliamo che il nostro codice sia scritto.

Quando diversi sviluppatori sono coinvolti nello scrivere CSS sullo stesso progetto, è solo questione di tempo prima che uno di loro cominci a scrivere alla sua maniera. Delle linee guida sul codice, che spingono alla coerenza, non servono solo a prevenire ciò, ma aiutano anche quando c'è da leggere e aggiornare il codice.

Ispirandoci senza vergogna a [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting) vogliamo:

* indentare con due (2) spazi, non utilizzando tab;
* avere righe di 80 caratteri, se possibile;
* scrivere le regole css su più righe;
* usare in modo ragionato le righe bianche.

{% include snippets/syntax/01/index.html %}

## Stringhe

Che ci crediate o no, le stringhe giocano un ruolo fondamentale in CSS così come in Sass. Molti valori CSS possono essere sia lunghezze che identificatori, perciò è molto importante rispettare le linee guida quando si ha a che fare con le stringhe in Sass.

### Codifica

Per evitare possibili guai con la codifica dei caratteri, è altamente cosigliato forzare l'enconding [UTF-8](http://en.wikipedia.org/wiki/UTF-8) nel [foglio di stile principale](#il-file-main) usando la direttiva `@charset`. Fate attenzione che sia il primo elemento del foglio di stile e che non ci siano caratteri a precederlo.

{% include snippets/syntax/02/index.html %}

### Apici

CSS non ha bisogni di apici per le stringhe, nemmeno per quelle che contengono spazi. Prendete la dichiarazione font-family: non importa se si usano gli apici per i nomi dei font oppure no.

Per questo motivo, Sass non *richiederebbe* di usare gli apici per le stringe. Meglio ancora (e per fortuna!) una stringa con gli apici è uguale a una senza (`'abc'` è uguale ad `abc`).

Detto questo però, i linguaggi che non richiedono gli apici per le stringhe sono una minoranza, quindi in Sass **le stringhe dovrebbero sempre essere comunque messe dentro singoli apici** (`'`). È preferibile usare gli apici singoli rispetto ai doppi perchè più facili da digitare in una tastiera *qwerty*. Ci sono inoltre diverse ragioni per questa scelta, oltre alla coerenza con altri linguaggi, incluso il cugino JavaScript:

* i nomi dei colori sono considerati colori solo quando non hanno gli apici, il che può portare diversi problemi;
* molti degli strumenti di evidenziazione della sintassi non funzionano su stringhe senza apici;
* aiuta la leggibilità;
* non c'è nessuna ragione per non aggiungere gli apici alle stringhe.

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>Per le specifiche CSS, la direttiva <code>@charset</code> deve essere dichiarata con doppi apici per <a href="http://www.w3.org/TR/css3-syntax/#charset-rule">poter essere valida</a>. Naturalmente, Sass si prende cura di compilare il CSS in maniera corretta. Si può tranquillamente usare il singolo apice, anche per <code>@charset</code>.</p>
</div>

### Stringhe come valori CSS

Valori specifici CSS come `initial` o `sans-serif` (alias: identificatori CSS) non hanno bisogno di apici. Dichiarazioni come `font-family: 'sans-serif'` non verranno applicate, in quanto CSS si aspetta un identificatore e non una stringa tra apici. Per questo motivo, meglio non usare gli apici in questi casi.

{% include snippets/syntax/04/index.html %}

Possiamo fare quindi una distinzione tra le stringhe che vogliamo usare come valori CSS (vedi l'esempio qui sopra) e stringhe che si riferiscono a dati Sass, come le _chiavi_ di una _mappa_.

Non usiamo gli apici nel primo caso, ma usiamo gli apici singoli nel secondo.

### Stringhe che contengono apici / apostrofi

Se una stringa contiene uno o più apici singoli o apostrofi, si può considerare di utilizzare per la stringa il doppio apice (`"`), in modo da evitare di spezzare la stringa.

{% include snippets/syntax/05/index.html %}

### URL

Le URL dovrebbero sempre essere tra apici, per le stesse ragioni:

{% include snippets/syntax/06/index.html %}

## Numeri

In Sass, i numeri sono un tipo di dato che include cifre senza unità, lunghezze, durate, frequenze, angoli e così via. Abbiamo così la possibilità di fare calcoli usando queste misure.

### Zero

I numeri dovrebbero avere lo zero prima di un valore decimale inferiore a uno. Non scrivete mai zero alla fine del valore.

{% include snippets/syntax/07/index.html %}

<div class="note">
  <p>Usando Sublime Text o altri editor, si può usare la funzione cerca / rimpiazza con espressioni regolari. È facile allora aggiungere uno zero ai numeri con la virgola. Semplicemente, basta rimpiazzare il codice  <code>\s+\.(\d+)</code> con <code>\ 0.$1</code>. Non dimenticate anche lo spazio prima dello <code>0</code></p>
</div>

### Unità di misura

Quando si ha a che fare con le lunghezze, un valore `0` non dovrebbe mai avere l'unità di misura.

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>Attenzione: questa pratica è limitata solo alle lunghezze. Uno zero senza unità di misura per proprietà come <code>transition-delay</code> non è ammesso. In teoria non sarebbe valido e verrebbe scartato. Non tutti i browser però si comportano così. In pratica: omettete le unità di misura solo per le lunghezze.</p>
</div>

L'errore più comune che si può immaginare riguardo i numeri e Sass è pensare che le unità di misura siano solo stringhe che si possono aggiungere ai numeri. Se delle volte è vero, non è così che le unità di misura funzionano in Sass. Le unità di misura dovrebbero essere immaginate come simboli algebrici. Ad esempio, moltiplicare 5 pollici per 5 pollici ci dà 25 pollici quadrati. La stessa logica va applicata a Sass.

Per aggiungere l'unità di misura ad un numero, basta moltiplicare il numero per *1 unità*.

{% include snippets/syntax/09/index.html %}

Funziona anche aggiungere *0 di quella unità di misura*, ma consiglierei il metodo precedente, dato che aggiungere *0 unità* può creare confusione. Quando invece proviamo a convertire un numero in un altra unità di misura compatibile, aggiungere lo zero non serve a nulla. Per saperne di più potete leggere [questo articolo](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/).

{% include snippets/syntax/10/index.html %}

Dipende quindi da cosa si sta cercando di ottenere. C'è da ricordare che aggiungere l'unità come una stringa non è una buona maniera di procedere.

Per rimuovere l'unità di misura di un valore, basta dividere di *una unità del suo genere*.

{% include snippets/syntax/11/index.html %}

Aggiungere un'unità di misura come stringa ad un numero genera una stringa, impendendo qualsiasi altra operazione sul valore. Anche fare uno `str-slice` (ovvero tagliare una parte della stringa), prendendo solo la parte numerica, genererà comunque una nuova stringa. Non è certo quel che vogliamo. [Usiamo lunghezze, non stringhe](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/).

### Calcoli

**I calcoli numerici dovrebbero essere sempre contenuti all'interno di parentesi tonde**. Non solo così aumenterete di molto la leggibilità, ma eviterete alcuni casi limite, forzando Sass a valutare il contenuto delle parentesi prima di procedere con altri calcoli.

{% include snippets/syntax/12/index.html %}

### Numeri magici

Il "Numero magico" è un [termine da vecchia scuola della programmazione ](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) utilizzato per descrivere *costanti numeriche senza nome*. In pratica si tratta di un numero casuale che semplicemente *funziona* anche senza nessuna logica dietro.

Non ci sarebbe bisogno di dirlo ma: **i numeri magici sono una piaga e dovrebbero essere evitati a qualsiasi costo**. Quando non riuscite a capire perchè un numero funziona, aggiungete almeno un bel commento esaustivo, che spiega per bene come siete arrivati ad utilizzare questo numero e come mai pensate che funzioni. Ammettere che non sapete precisamente come funziona è comunque un aiuto per il prossimo sviluppatore che metterà mano al vostro codice.

{% include snippets/syntax/13/index.html %}

Su questo argomento c'è questo [magnifico articolo](http://css-tricks.com/magic-numbers-in-css/) sui numeri magici in CSS e vi consiglio di leggerlo.

## Colori

I colori occupano un importante posto nel mondo CSS. Ovviamente Sass è un nostro grande alleato quando si tratta di manipolare i colori, per lo più fornendoci una serie di [potenti funzioni](http://sass-lang.com/documentation/Sass/Script/Functions.html).

Sass è così utile quando si tratta di manipolare colori, che sono spuntati ovunque su internet articoli su questo argomento. Posso raccomandarvene alcuni da leggere:

* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)

### Formati di colore

Per creare colori nel modo più semplice possibile, il mio consiglo è quello di seguire questo ordine di preferenze per il formato colore:

1. [Notazione HSL](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [Notazione RGB](http://en.wikipedia.org/wiki/RGB_color_model);
1. Notazione Esadecimale (minuscolo e in versione abbreviata).

Le parole chiave CSS non dovrebbero essere utilizzate, tranne che per prototipazione fatta al volo. Inoltre sono parole in inglese e alcune di loro non descrivono perfettamente il colore che rappresentano, soprattutto per chi non è madrelingua. Oltre a questo, le parole chiave CSS non sono perfettamente semantiche; per esempio `grey` (grigio), è più scuro di `darkgrey` (grigio scuro), inoltre si può generare confusione tra `grey` (grigio in inglese) e `gray` (grigio in americano), introducendo inconsistenza nell'uso di questo colore.

La rappresentazione HSL del colore non solo è la più facile da comprendere per il cervello umano <sup>[citazione necessaria]</sup>, ma rende anche più facile sistemare i colori, manipolando separatamente la tonalità, la saturazione e la luminosità.

RGB ha il beneficio di mostrare chiaramente se il colore è più rosso, verde o blu. Per questo motivo delle volte risulta migliore dell'HSL, specialmente quando si tratta di descrivere colori primari puri. Tuttavia non rende molto semplice creare un colore mescolando le tre parti.

Infine, poniamo l'esadecimale, praticamente indecifrabile per la mente umana. Utilizzatelo solo come ultima risorsa, se proprio dovete.

{% include snippets/syntax/14/index.html %}

Quando usate la notazione HSL o RGB, aggiungete sempre un singolo spazio dopo la virgola (`,`) e non inserite nessuno spazio tra le parentesi tonde e il contenuto (`(`, `)`).

{% include snippets/syntax/15/index.html %}

### Colori e variabili

Quando usate un colore più di una volta, abbinatelo ad una variabile con un nome che serva a rappresentare il colore.

{% include snippets/syntax/16/index.html %}

Ora potete usare questa variabile ovunque vogliate. Se il vostro utilizzo è fortemente legato ad un tema mi sento di sconsigliare l'uso di questa variabile così com'è. Associatela ad un'altra variabile che descriva come questo colore dovrebbe essere usato.

{% include snippets/syntax/17/index.html %}

Fare così vi eviterà di dover cambiare domani il tema con qualcosa del genere: `$rosa-sass: blue`. [Questo articolo](http://davidwalsh.name/sass-color-variables-dont-suck) fa un ottimo lavoro nello spiegare perché è importante pensare bene al nome da dare alle vostre variabili di colore.

### Schiarire e scurire i colori

Entrambe le funzioni [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) (schiarisci) e [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) (scurisci) manipolano la luminosità di un colore nello spazio HSL, aggiungendo o sottraendo luminosità allo spazio colore. In pratica non sono altro che alias che si riferiscono al parametro `$lightness` (luminosità) della funzione
[`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) (regola colore).

In pratica, queste funzioni non danno spesso il risultato sperato. D'altra parte la funzione [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) è un ottimo modo per schiarire o scurire un colore, mischiandolo con il `white` (bianco) o `black` (nero).

Il beneficio di usare `mix` al posto di una delle due funzioni di cui sopra è che `mix` è più graduale e vi consente di andare verso il nero (o il bianco) diminuendo la proporzione del colore, mentre `darken` e `lighten` hanno la tendenza a rendere il risultato direttamente nero o bianco molto velocemente.

{% include images/color-functions.html %}

Se non vi và di scrivere la funzione `mix` tutte le volte, potete creare due funzioni pronte all'uso: `tint` and `shade` (già incluse in [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) che fanno in pratica la stessa cosa:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>La funzione <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> (gamma colore) è stata creata per scalare le proprietà in modo più fluido, prendendo in conto quanto già il colore di partenza sia chiaro o scuro. Questo può darci risultati buoni come quelli di <code>mix</code>, ma con un nome di funzione più chiaro. Tuttavia il fattore di scala del colore non è esattamente lo stesso.</p>
</div>

## Liste

Le liste sono l'equivalente Sass degli array. Una lista, a differenza di una [mappa](#mappe), è una struttura piatta creata per contenere valori di ogni tipo (incluse altre liste, creando così liste annidate).

Le liste dovrebbero rispettare le seguenti linee guida:

* possono essere scritte in una o più righe a seconda dei casi;
* vanno obbligatoriamente su più linee nel caso siano troppo lunghe per stare in una riga di 80 caratteri;
* a meno che non siano usati per CSS, hanno sempre una virgola come separatore;
* sono sempre incluse in parentesi tonde;
* una virgola di chiusura solo se su più righe.

{% include snippets/syntax/19/index.html %}

Quando si aggiunge un nuovo elemento ad una lista, bisogna sempre utilizzare la API fornita. Non provate ad aggiungere nuovi elementi manualmente.

{% include snippets/syntax/20/index.html %}

In [questo articolo](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/), mostro un sacco di consigli e trucchi per gestire e manipolare correttamente le liste in Sass.

## Mappe

Gli autori di fogli di stile possono definire con Sass delle mappe — il termine Sass per definire array associativi, hash o addirittura oggetti JavaScript. Una mappa è una struttura dati associativa composta da chiavi e valori. Entrambe le chiavi e i valori di una mappa possono essere di differenti tipi di dato, incluso il tipo mappa. Tuttavia sconsiglio di utilizzare tipi di dato complessi come chiavi di una mappa, anche solo per amore della sanità mentale.

Le mappe dovrebbero essere così scritte:

* uno spazio dopo i due punti (`:`);
* parentesi di apertura (`(`) sulla stessa riga dei due punti (`:`);
* **chiavi all'interno di apici** nel caso siano stringhe (il che rappresenta il 99% dei casi);
* ogni coppia chiave/valore su una nuova riga;
* una virgola (`,`) alla fine di ogni coppia chiave/valore;
* **una virgola di chiusura** (`,`) inserita dopo l'ultimo elemento, in modo da rendere più facile l'aggiunta, la rimozione o il riordino di elementi;
* la parentesi di chiusura (`)`) deve andare su una nuova riga;
* nessuno spazio o nuova riga tra la parentesi di chiusura (`)`) e il punto e virgola (`;`).

Esempio:

{% include snippets/syntax/21/index.html %}

Questa funzionalità è stata a lungo desiderata e gli articoli a riguardo sono molti. Eccone qui tre di cui raccomando la lettura: [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/), [Extra Map functions in Sass](http://www.sitepoint.com/extra-map-functions-sass/), [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/).

## Set di regole CSS

A questo punto non ci rimane che ripassare qualcosa che tutti sappiamo, ovvero come andrebbe scritto un set di regole CSS (almeno secondo la maggior parte delle linee guida, inclusa [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset)):

* selettori correlati sulla stessa riga; non correlati su una nuova riga;
* la graffa di apertura (`{`) deve essere separata dall'ultimo selettora da uno spazio;
* ogni dichiarazione deve avere una propria riga;
* uno spazio dopo i due punti (`:`);
* un punto e virgola di chiusura (`;`) alla fine di tutte le dichiarazioni;
* la graffa di chiusura (`}`) deve avere una proria riga;
* una nuova riga dopo la graffa di chiusura `}`.

Esempio:

{% include snippets/syntax/24/index.html %}

In aggiunta a queste linee guida correlate al CSS, facciamo attenzione ai seguenti punti:

* le variabili locali devono essere dichiarate prima di ogni dichiarazione e devono essere separate dalle dichiarazioni da una nuova riga vuota;
* i mixin senza alcun `@content` devono essere inseriti prima delle dichiarazioni;
* selettori annidati vanno sempre preceduti da una riga vuota;
* mixin con un `@content` vanno dopo i selettori annidati;
* nessuna nuova riga prima della graffa di chiusura (`}`).

Esempio:

{% include snippets/syntax/25/index.html %}

## Ordine delle dichiarazioni

Non credo ci siano molti altri argomenti oltre a come ordinare dichiarazioni CSS, che abbiano opinioni così divergenti. Ci sono due fazioni principali:

* ordine alfabetico;
* ordine di dichiarazioni in base al tipo di dichiarazione (position, display, colori, font, eccetera…).

Ci sono pro e contro per entrambi i modi. Da una parte, l'ordine alfabetico è (almeno per chi usa l'alfabeto latino) universale, quindi non ci possono essere discussioni su come ordinare una proprietà rispetto ad un'altra. Tuttavia è davvero strano per me vedere proprietà come `bottom` e `top` non una affianco all'altra. Perchè le animazioni devono essere prima delle proprietà di posizionamento? Ci sono un sacco di stranezze nell'ordinare alfabeticamente.

{% include snippets/syntax/26/index.html %}

D'altro canto, ordinare le proprietà per tipo ha perfettamente senso. Tutte le dichiarazioni correlate ai font sono riunite, `top` e `bottom` sono vicine tra loro a leggere un set di regole sembra come leggere un riassunto. Ma a meno che non vi affidiate a qualche convenzione come: [Idiomatic CSS](https://github.com/necolas/idiomatic-css), ci sarà fin troppo spazio per l'interpretazione sul come fare le cose. Dove va a finire `white-space`: font o display? A quale gruppo appartiene precisamente `overflow`? In che modo le proprietà di un gruppo devono essere ordinate (alfabeticamente, sarebbe ironico)?

{% include snippets/syntax/27/index.html %}

C'è un altro interessante metodo riguardo l'ordine delle proprietà CSS: [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), anche questo abbastanza popolare. In pratica, Concentric CSS si basa sul box-model per definire un ordine: si parte dall'esterno e ci si muove all'interno.

{% include snippets/syntax/28/index.html %}

Io posso dirvi che non riesco a decidermi. Un [sondaggio recente su CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) si è concluso con il 45% degli sviluppatori che ordina le proprie dichiarazione secondo il tipo, il 14% in modo alfabetico. Ma c'è anche un 39% che le ordina in maniera randomica, me incluso.

{% include images/order-poll.html %}

Proprio per questo, non voglio imporre una scelta in queste linee guida. Scegliete quella che preferite, purchè la manteniate in modo consistente nei vostri fogli di stile (quindi il metodo *random* non vale).

<div class="note">
  <p>Uno <a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">studio recente</a> mostra che usare <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (che utilizza  <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">l'ordine per tipo</a>) migliora la compressione Gzip del 2.7%, rispetto al miglioramento dell' 1.3% dell'ordine alfabetico.</p>
</div>

## Selettori annidati

Una particolare funzionalità, che Sass fornisce e di cui molti sviuppatori stanno abusando, è quella dei *selettori annidati*. Annidare i selettori offre agli autori di fogli di stile un modo per generare lunghi selettori annidando selettori più corti uno dentro l'altro.

### Regola generale

Per esempio, il seguente codice Sass:

{% include snippets/syntax/29/index.html %}

… genererà questo CSS:

{% include snippets/syntax/30/index.html %}

Allo stesso modo, a partire da Sass 3.3 è possibile utilizzare il riferimento al selettore corrente (`&`) per generare selettori avanzati. Ad esempio:

{% include snippets/syntax/31/index.html %}

… genererà:

{% include snippets/syntax/32/index.html %}

Questo approccio è molto utilizzato con la [convenzione BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) per generare  selettori `.blocco__elemento` e `.block--modificatore` basati sul selettore originale (`.blocco` in questo caso).

<div class="note">
  <p>Questa nota potrebbe essere aneddotica, ma segnalo comunque che generare un nuovo selettore partendo dal riferimento al selettore corrente (<code>&</code>) rende questi selettori non ricercabili nella codebase, in quanto non esistono come entità singole.</p>
</div>

Il problema con i selettori annidati è che rendono definitivamente il codice molto più difficile da leggere. Chi legge deve mentalmente calcolare il selettore risultante a seconda dei livelli di indentazione; non è quindi sempre ovvio quale sarà il CSS generato.

Questo diventa sempre più vero man mano che i selettori diventano più lunghi e i riferimenti al selettore corrente (`&`) diventano più frequenti. Ad un certo punto, il rischo di perdere traccia e di non capire più cosa sta accadendo diventa sempre più grande, tanto che annidare non vale più la pena.

Per prevenire queste situazione, abbiamo discusso a lungo qualche anno fa riguardo [la regola Inception](http://thesassway.com/beginner/the-inception-rule). Il suggerimento è semplice, ovvero evitare di andare oltre 3 livelli di profondità, come riferimento al film Inception di Christopher Nolan. Io sarei più drastico e raccomando di  **evitare i selettori annidati il più possibile**.

Per quanto ci siano alcune eccezioni a questa regola, come vedremo nella prossima sezione, questa opinione pare essere molto popolare. Potete leggere a riguardo qualcosa su questi articoli:
[Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/) e [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css).

### Eccezioni

Per iniziare: è consentito ed anche raccomandato annidare pseudo-classi e pseudo-elementi al selettore iniziale.

{% include snippets/syntax/33/index.html %}

Utilizzare selettori annidati per le pseudo-classi e gli pseudo-elementi non solo ha senso (perchè riguardano da vicino il selettore correlato), ma aiuta anche ad avere tutto quel che riguarda un componente nello stesso punto.

Inoltre, quando si utilizza uno stato di classe agnostico, come `is-active`, è totalmente corretto annidarlo sotto il selettore del componente per tenere le cose compatte.

{% include snippets/syntax/34/index.html %}

Infine, quando si stila un elemento perchè contenuto da un altro specifico elemento, è corretto utilizzare l'annidamento per tenere tutto ciò che riguarda un componente nello stesso spazio.

{% include snippets/syntax/35/index.html %}

Come per tutto, le specifiche sono sì rilevanti, ma è la consistenza la chiave.
Se vi sentite pienamente fiduciosi di un selettore annidato, allora utilizzatelo. Solo siate sicuri che tutto il team sia d'accordo con voi.
