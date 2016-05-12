
# Too Long; Didn’t read - Troppo lungo, non lo leggo

Queste linee guida sono abbastanza lunghe e a volte è meglio avere un riassunto con una versione più corta. Di seguito trovate questo riassunto.

## Principi chiave

* Avere una linea guida sullo stile è tutto basato sull'essere **consistenti**. Se non siete d'accordo con alcune delle regole di queste linee guida è ok. L'importante è che siate comunque consistenti. [↩](#why-a-styleguide)
* Sass deve essere tenuto comunque il più semplice possibile. Evitate sistemi troppo complessi a meno che non sia assolutamente necessario. [↩](#key-principles)
* Tenete sempre in mente che il concetto *KISS* (Keep It Simple, Stupid - Tienilo semplice, stupido) è meglio del concetto *DRY* (Don’t Repeat Yourself - Non ripetere te stesso). [↩](#key-principles)

## Syntassi e formattazione

* Una indentazione è fatta con due (2) spazi, nessun tab. [↩](#syntax--formatting)
* Le linee di testo dovrebbero essere più corte di 80 caratteri. Sentitevi liberi di dividere una linea in più linee, quando necessario. [↩](#syntax--formatting)
* Il CSS dovrebbe essere scritto correttamente, seguite le [Linee guida CSS](http://cssguidelin.es) di Harry Roberts, se potete. [↩](#syntax--formatting)
* Gli spazi sono gratis, usateli per separare elementi, regole e dichiarazione. Non esistate a lasciare linee vuote, non fa' mai male. [↩](#syntax--formatting)

### Stringhe

* Dichiarare un `@charset` all'inizio di un foglio di stile è fortemente consigliato. [↩](#encoding)
* A meno che non siano applicate a identificatori CSS, le stringhe dovrebbero essere racchiuse in apici singoli. Anche gli URL dovrebbero essere contenuti tra apici. [↩](#strings-as-css-values)

### Numeri

* Sass non fa distinzione tra i numeri, gli interi e i numeri con la virgola. Quindi gli zero (0) non significativi dopo la virgola possono essere omessi. Invece gli zero (0) prima della virgola andrebbero aggiunti per aumentare la leggibilità. [↩](#zeros)
* Un valore zero (0) non andrebbe scritto con l'unità di misura. [↩](#units)
* Le unità di misura andrebbero manipolate solo attraverso operazioni matematiche, non attraverso manipolazioni di stringhe. [↩](#units)
* È consigliabile inserire tra parentesi tonde le operazioni matematiche, eer migliorarne la leggibilità. Inoltre, operazioni matematiche complesse dobrebbero essere divise in pezzi più piccoli. [↩](#calculations)
* I 'numeri magici' riducono drasticamente la manutenibilità del codice e per questo dovrebbero essere evitati a tutti i costi. Se avete dei dubbi, commentate spiegando estensivamente il perchè di quel valore. [↩](#magic-numbers)

### Colori

* I colori andrebbero espressi in HSL quando possibile, altrimenti in RGB e come ultima scelta in esadecimale (in minuscolo e nella versione abbreviata). Parole chiave riguardanti i colori andrebbero evitate. [↩](#color-formats)
* Alle funzioni `darken(..)` e `lighten(..)` preferite `mix(..)`, quando dovete schiarire o scurire un colore. [↩](#lightening-and-darkening-colors)

### Liste

* A meno che non siano usate per mappare valori CSS separati da spazi, le liste andrebbero sempre separate con la virgola. [↩](#lists)
* L'utilizzo di parentesi tonde per aumentare la leggibilità è una buona prassi. [↩](#lists)
* Le liste in linea non dovrebbero avere la virgola di chiusura, quelle su più righe invece sì. [↩](#lists)

### Mappe

* Le mappe che contengono più di una singola coppia chiave, valore vanno scritte su più righe. [↩](#maps)
* Per aiutare la manutenibilità, l'ultima coppia di una mappa dovrebbe avere una virgola alla fine. [↩](#maps)
* Se le chiavi di una mappa sono delle stringhe, andrebbero comunque tra parentesi come qualsiasi altra stringa. [↩](#maps)

### Ordine delle dichiarazioni

* Il sistema usato per ordinare le dichiarazioni (alfabetico, per tipo, ecc...) non è rilevante. L'importante è che sia consistente. [↩](#declaration-sorting)

### Annidamento dei selettori

* Evitate l'annidamento dei selettori se non è necessario (ovvero la maggiorparte delle volte). [↩](#selector-nesting)
* Utilizzate selettori annidati per pseudo-classi e pseudo-elementi. [↩](#selector-nesting)
* Le media query possono essere tranquillamente innestate all'interno del selettore di appartenenza. [↩](#selector-nesting)

## Convenzione sulla nomenclatura

* È meglio scegliere una convenzione di nomenclatura che sia (con le dovute eccezioni) minuscola e separata da trattini. [↩](#naming-conventions)

## Commenti

* CSS è un linguaggio spesso ingannevole. Non esitate mai a scrivere commenti dettagliati su cose che possono sembrare (o essere) equivoche. [↩](#commenting)
* Per variabili, funzioni, mixin e placeholder stabilite una API publica e usate il sistema di commenti di SassDoc. [↩](#documentation)

## Variabili

* Usate il flag `!default` per qualsiasi variabile delle vostre API pubbliche che possa essere cambiata senza problemi. [↩](#default-flag)
* Non usate il flag `!global` a meno che non siate all'interno di un selettore, mixin, funzione ecc... Sarà considerata una violazione della sintassi Sass in futuro. [↩](#global-flag)

## Extend

* Estendete placeholder, non selettori CSS. [↩](#extend)
* Estendete un pleceholder lo stretto numero necessario di volte, onde evitare effetti non desiderati. [↩](#extend)
