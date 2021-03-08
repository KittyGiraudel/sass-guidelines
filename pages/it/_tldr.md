
## Troppo lungo, non ho letto

Queste linee guida sono abbastanza lunghe e a volte è meglio avere accesso ad una versione più corta. Di seguito trovate quindi un riassunto.

### Principi chiave

* Il senso di avere una linea guida sullo stile è tutto basato sull'essere **consistenti**. Se non siete d'accordo con alcune delle regole di queste linee guida è ok. L'importante è che siate comunque consistenti. 
* Sass deve essere tenuto il più semplice possibile. Evitate sistemi troppo complessi a meno che non sia assolutamente necessario. 
* Tenete sempre in mente che il concetto *KISS* (Keep It Simple, Stupid - Rimani sul semplice, stupido) è spesso meglio del concetto *DRY* (Don’t Repeat Yourself - Non ripetere te stesso). 

### Sintassi e formattazione

* Un'indentazione va fatta con due (2) spazi, nessun tab. 
* Le linee di testo dovrebbero essere più corte di 80 caratteri. Sentitevi liberi di dividere una linea in più linee, quando necessario. 
* Il CSS dovrebbe essere scritto in modo corretto, seguite le [Linee guida CSS](https://cssguidelin.es) di Harry Roberts, se potete. 
* Gli spazi sono gratis, usateli per separare elementi, regole e dichiarazioni. Non esistate a lasciare linee vuote, non fa' mai male. 

#### Stringhe

* Dichiarare un `@charset` all'inizio di un foglio di stile è fortemente consigliato. 
* Le stringhe dovrebbero essere racchiuse in apici singoli, a meno che non siano applicate a identificatori CSS. Anche gli URL dovrebbero essere sempre contenuti tra apici. 

#### Numeri

* Sass non fa distinzione tra i numeri, gli interi e i numeri con la virgola. Quindi gli zero (0) non significativi dopo la virgola possono essere omessi. Invece gli zero (0) prima della virgola andrebbero aggiunti per aumentare la leggibilità. 
* Un valore a zero (0) non andrebbe scritto con l'unità di misura. 
* Le unità di misura andrebbero manipolate solo attraverso operazioni matematiche, non attraverso manipolazioni di stringhe. 
* È consigliabile inserire tra parentesi tonde le operazioni matematiche, per migliorarne la leggibilità. Inoltre le operazioni matematiche complesse dovrebbero essere divise in pezzi più piccoli. 
* I 'numeri magici' riducono drasticamente la manutenibilità del codice e per questo dovrebbero essere evitati a tutti i costi. Se avete dei dubbi, commentate spiegando estensivamente il perchè di quel valore. 

#### Colori

* I colori andrebbero espressi in HSL quando possibile, altrimenti in RGB e come ultima scelta in esadecimale (in minuscolo e nella versione abbreviata). Parole chiave riguardanti i colori andrebbero evitate. 
* Quando dovete schiarire o scurire un colore, alle funzioni `darken(..)` e `lighten(..)` preferite `mix(..)`. 

#### Liste

* Le liste andrebbero sempre separate con la virgola, a meno che non siano usate per mappare valori CSS separati da spazi. 
* L'utilizzo di parentesi tonde per aumentare la leggibilità è una buona prassi. 
* Le liste in linea non dovrebbero avere la virgola di chiusura, quelle su più righe invece sì. 

#### Mappe

* Le mappe che contengono più di una singola coppia chiave/valore vanno scritte su più righe. 
* Per aiutare la manutenibilità, l'ultima coppia di una mappa dovrebbe avere una virgola alla fine. 
* Se le chiavi di una mappa sono delle stringhe, andrebbero comunque tra parentesi come qualsiasi altra stringa. 

#### Ordine delle dichiarazioni

* Il sistema usato per ordinare le dichiarazioni (alfabetico, per tipo, ecc...) non è rilevante. L'importante è che sia consistente. 

#### Annidamento dei selettori

* Evitate l'annidamento dei selettori se non è necessario (ovvero la maggior parte delle volte). 
* Utilizzate selettori annidati per pseudo-classi e pseudo-elementi. 
* Le media query possono essere tranquillamente innestate all'interno del selettore di appartenenza. 

### Convenzione sulla nomenclatura

* È meglio scegliere una convenzione di nomenclatura che sia (con le dovute eccezioni) in minuscolo e separata da trattini. 

### Commenti

* CSS è un linguaggio ingannevole. Non esitate mai a scrivere commenti dettagliati su cose che possono sembrare (o essere) equivoche. 
* Per variabili, funzioni, mixin e placeholder stabilite una API pubblica e usate il sistema di commenti di SassDoc. 

### Variabili

* Usate il flag `!default` per qualsiasi variabile delle vostre API pubbliche che possa essere cambiata senza problemi. 
* Non usate il flag `!global` se siete a livello di root. Sarà considerata una violazione della sintassi Sass in futuro. 

### Extend

* Estendete placeholder, non selettori CSS. 
* Estendete un pleceholder lo stretto numero necessario di volte, onde evitare effetti non desiderati. 
