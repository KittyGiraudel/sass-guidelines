
# Avvisi ed errori

Se c’è una cosa che viene troppo spesso trascurata dagli sviluppatori di Sass, è la capacità di segnalare dinamicamente avvisi ed errori. Sass, infatti, ha tre direttive custom per stampare gli errori nel sistema di output standard (CLI, compiling app…):

* `@debug`;
* `@warn`;
* `@error`.

Mettiamo da parte `@debug`, che è qui chiaramente per fare debug di SassScript (che non ci interessa a questo punto). Ci rimangono `@warn` e `@error` i quali sono praticamente identici tranne per il fatto che uno interrompe il compilatore, mentre l’altro no. Vi lascio indovinare quale.

In un progetto Sass c’è quindi parecchio bisogno di avvisi ed errori. In pratica, qualsiasi mixin o funzione che si aspetta uno specifico tipo o argomento può generare un errore se qualcosa è andato storto, o mostrare un avviso quando non ha le idee chiare e sta provando ad indovinare.

## Avvisi

Prendete ad esempio questa funzione di [Sass-MQ](https://github.com/sass-mq/sass-mq), che prova a convertire un valore in `px` in `em`. Ad esempio:

{% include snippets/errors/01/index.html %}

Se il valore è senza unità di misura, la fuzione parte dal presupposto che sia espresso in pixel. Un’ipotesi di questo tipo potrebbe essere rischiosa, perciò l’utente dovrebbe essere avvisato che il software ha fatto qualcosa il cui risultato potrebbe essere inaspettato.

## Errori

Gli errori, diversamente dagli avvisi, fanno in modo che il compiler vada avanti nel suo lavoro. Praticamente fermano la compilazione e mostrano un messaggio nell’output e nello stack trace, utile per il debug. Per questo motivo, gli errori dovrebbero essere chiamati quando non c’è altra maniera per il programmatore di tenere il programma in funzione. Quando possibile, meglio provare un workaround sul problema e mostrare un avviso.

Ad esempio, diciamo che si vuol costruire una fuzione _getter_ per accedere ai valori di una _map_ specifica. Si può chiamare un errore se la chiave richiesta non esiste nella _map_.

{% include snippets/errors/02/index.html %}

Per avere più informazioni su come usare `@error` in maniera efficiente, [questa introduzione alla gestione degli errori](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996) potrebbe aiutarvi.
