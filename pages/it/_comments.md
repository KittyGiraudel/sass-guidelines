
# Commentare

CSS è un linguaggio complicato, pieno di hack e stranezze. Per questo motivo, dovrebbe essere sempre ben commentato, specialmente se tu o qualcun altro ha bisogno di leggere e aggiornare il codice tra sei mesi o un anno. Fa’ in modo che nessuno possa mai pensare *non-l’ho-segnato-dio-mio-perchè*.

Per quanto il CSS possa essere semplice, c’è comunque un sacco di spazio per i commenti. Saranno lì per spiegare:

* la struttura o il ruolo di un file;
* l’obiettivo di un set di regole (ruleset);
* l’idea dietro un numero magico (magic number);
* il motivo di una dichiarazione (declaration) CSS;
* l’ordine di una dichiarazione CSS;
* la ragione dietro un certo modo di fare le cose.

Probabilmente sto dimenticando un mucchio di altre ragioni. Commentare è un’attività che richiede poco tempo quando la si fa mentre si scrive il codice, per cui fatelo al momento giusto. Tornare su un pezzo di codice per aggiungere commenti è davvero poco pratico, oltre che assai fastidioso.

## Scrivere i commenti

Idealmente, *ogni* set di regole CSS dovrebbe essere preceduto da un commento stile C che spiega il ruolo di quel blocco. Questo commento contiene anche spiegazioni, in una lista numerata, riguardo parti specifiche del set di regole. Ad esempio:

{% include snippets/comments/01/index.html %}

Praticamente tutto ciò che non è ovvio al primo sguardo dovrebbe essere inserito nei commenti. Non esiste la troppa documentazione. Ricorda che non puoi *commentare troppo*, perciò dacci dentro e scrivi commenti per tutto ciò per cui vale la pena.

Quando commenti parti specifiche in Sass, usa commenti inline piuttosto che il blocco stile C. Questo rende il commento invisibile nell’output, anche nella maniera estesa che si usa durante lo sviluppo.

{% include snippets/comments/02/index.html %}

Questo approccio è consiglato anche da CSS guidelines nella sezione [Commenting](http://cssguidelin.es/#commenting).

## Documentazione

Ogni variabile, funzione, mixin e placeholder che viene riusata all’interno della codebase è da documentare come parte dell’API globale, usando [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>È necessario usare tre _slash_ (<code>/</code>).</p>
</div>

SassDoc ha due regole principali:

* ottenere commenti standard usando un sistema basato sulle annotazioni per tutto ciò che è parte di un’API pubblica o privata;
* avere la possibilità di generare una versione HTML della documentazione dell’API usando uno qualsiasi degli endpoint di SassDoc (CLI tool, Grunt, Gulp, Broccoli, Node…).

{% include images/sassdoc.html %}

Questo è un esempio di un mixin commentato con SassDoc:

{% include snippets/comments/04/index.html %}
