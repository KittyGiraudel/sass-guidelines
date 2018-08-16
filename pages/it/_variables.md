
# Variables

Le variabili sono l’essenza di ogni linguaggio di programmazione. Ci permettono di riutilizzare un valore senza doverlo copiare e incollare ogni volta. Ancora più importante, le variabili ci permettono di aggiornare un valore molto facilmente. Ci permettono di dire addio al cerca e sostituisci o alla sostituzione manuale.

Tuttavia CSS non è altro che un enorme cestino che contiene tutte le nostre uova. A differenza di altri linguaggi, CSS non implementa uno _scope_. Per questo motivo, dobbiamo fare attenzione ai possibili conflitti quando aggiungiamo variabili.

Il mio consiglio è di creare variabili solo quando ha senso farlo. Non inizializzate nuove variabili per il gusto di farlo, non aiuterà. Una nuova variabile dovrebbe essere creata solo quando sono validi i seguenti criteri:

* il valore è ripetuto almeno due volte;
* il valore ha la possibilità di essere aggiornato almeno una volta:
* tutte le occorrenze del valore sono legate a una variabile; (es: non per coincidenza).

In pratica, non c’è nessun motivo di dichiarare una variabile che non verrà mai aggiornata o che verrà usata solo in un posto.

## Scoping

Lo _Scoping_ in Sass è cambiato molto durante gli anni. Fino a poco tempo fa, la dichiarazione di una variabile all’interno di set di regole e altri _scope_ era considerata locale di _default_. Tuttavia quando esisteva già una variabile globale con lo stesso nome, l’assegnazione della variabile locale avrebbe sovrascritto quella globale. Dalla versione 3.4, Sass implementa il concetto di _scope_ e crea una nuova variabile locale invece di sovrascrivere quella globale.

La documentazione parla di *oscuramento della variabile globale*. In pratica quando si dichiara in uno _scope_ interno (selettori, funzioni, mixin...) una variabile che esiste già nello scope globale, la variabile locale *oscura* quella globale. Fondamentalmente la sovrascrive momentaneamente solo per lo _scope_ locale.

Il seguente frammento di codice spiega il concetto di *oscuramento di variabili* .

{% include snippets/variables/01/index.html %}

## `!default` flag

Quando si costruisce una libreria, un framework, un sistema di griglie o un qualsiasi pezzo in Sass che si vuole poi distribuire e che sarà utilizzato da altri sviluppatori, tutte le variabili di configurazione devono essere contrassegnate con il _flag_ `!default`, in modo da poter essere sovrascritte.

{% include snippets/variables/02/index.html %}

Grazie a questo, uno sviluppatore può definire la propria variabile `$baseline` *prima* di importare la propria libreria senza dover vedere il proprio valore ridefinito.

{% include snippets/variables/03/index.html %}

## `!global` flag

Il _flag_ `!global` dovrebbe essere usato solamente quando si sovrascrive una variabile globale da uno _scope_ locale. Quando si definisce una variabile fuori da un selettore, un mixin o una funzione, il flag `!global` dovrebbe essere omesso.

{% include snippets/variables/04/index.html %}

## Variabili multiple o mappe

Ci sono molti vantaggi ad usare le mappe invece che variabili distinte. Il principale è poter iterare in una mappa, cosa impossibile con variabili separate.

Un altro vantaggio di usare una mappa è la possibilità di creare una funzione _getter_ per fornire una _API_ più chiara. Per esempio, date un occhiata al seguente codice Sass:

{% include snippets/variables/05/index.html %}
