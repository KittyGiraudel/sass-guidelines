
## Istruzioni condizionali

Probabilmente già sapete che Sass offre istruzioni condizionali attraverso le direttive `@if` e `@else`. Finchè il codice non ha una logica così complessa, non c’è bisogno di istruzioni condizionali nei fogli di stile che si scrivono ogni giorno. Ad esser precisi, le istruzioni condizionali esistono principalmente per le librerie e i framework.

Comunque, se ti trovi nella situazione di averne bisogno, per favore rispetta queste linee guida:

* Nessuna parentesi finchè non sono necessarie;
* Metti sempre una riga vuota prima di `@if`;
* Vai sempre a capo dopo l’apertura delle parentesi graffe (`{`);
* Metti `@else` nella stessa linea della chiusura della parentesi graffa (`}`);
* Metti sempre una riga vuota dopo l’ultima chiusura di parentesi graffa (`}`) a meno che la riga seguente non contenga solo una chiusura parentesi graffa  (`}`).

{% include snippets/conditions/01/index.html %}

Quando si controlla se un valore è falso, usa sempre la parola chiave `not` piuttosto che vedere se corrisponde a `false` o `null`.

{% include snippets/conditions/02/index.html %}

Metti sempre la parte variabile a sinistra dell’istruzione e il risultato (in)aspettato a destra. Le istruzioni condizionali ribaltate spesso sono più difficili da leggere, specialmente per gli sviluppatori di primo pelo.

{% include snippets/conditions/03/index.html %}

Quando si usano le istruzioni condizionali dentro una funzione per ottenere un risultato differente, controlla sempre che la funzione abbia un’istruzione `@return` fuori da ogni blocco condizionale.

{% include snippets/conditions/04/index.html %}
