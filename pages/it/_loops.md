
## Iteratori

Dato che Sass mette a disposizione strutture di dati complesse come [liste](#liste) e [mappe](#mappe), non c’è da sorprendersi che ci siano strumenti per iterare all’interno di queste entità.

La presenza di iteratori implica però la presenza di una logica moderatamente complessa, che probabilmente non appartiene a Sass. Prima di usare un iteratore, bisogna essere sicuri che questo abbia un senso, e che risolva effettivamente un problema.

### Each

L’iteratore `@each` è il più usato dei tre tipi di iteratori messi a disposizione da Sass. Offre una API chiara per iterare all’interno di una lista o una mappa.

{% include snippets/loops/01/index.html %}

Quando si itera all’interno di una mappa, si usano sempre `$key` e `$value` come variabili, in modo da rinforzare la coerenza della codebase.

{% include snippets/loops/02/index.html %}

C’è poi bisogno di rispettare queste linee guida per mantenere la leggibilità:

* Sempre una riga vuota prima di  `@each`;
* Sempre una riga vuota dopo la chiusura della parentesi graffa (`}`) a meno che la linea seguente non sia un’altra chiusura di parentesi graffa (`}`).

### For

L’iteratore `@for` può essere utile quando viene combinato con la pseudo-classe CSS `:nth-*`. Tranne per questo scenario, è preferibile usare un iteratore `@each` se c’è da iterare all’interno di qualcosa.

{% include snippets/loops/03/index.html %}

`$i` andrebbe sempre usato come nome per la variabile di iterazione, in modo da rafforzare la convenzione e, a meno che non ci sia un valido motivo, meglio non usare la parola-chiave `to`: sempre meglio `through`. Molti sviluppatori non sanno che Sass offre questa variante e quindi usarla può portare a generare confusione.

Anche in questo caso è meglio assicurarsi di rispettare una serie di linee guida per preservare la leggibilità:

* Sempre una riga vuota prima di `@for`;
* Sempre una riga vuota dopo la chiusura della parentesi graffa (`}`) a meno che la linea seguente non sia un’altra chiusura di parentesi graffa (`}`).

### While

L’iteratore `@while` non ha nessun caso d’uso in un vero progetto Sass, specialmente per il fatto che non c’è nessun modo per fermare l’iteratore dall’interno. **Non usatelo**.
