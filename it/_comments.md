
# Commentare

CSS è un linguaggio complicato, pieno di hack e stranezze. Per questo motivo, dovrebbe essere sempre ben commentato, specialmente se tu o qualcun altro ha bisogno di leggere e aggiornare il codice tra sei mesi o un anno. Fa' in modo che non debba pensare *non-l'ho-segnato-dio-mio-perchè*.

Più il CSS è semplice, più c'è bisogno di commenti. Saranno lì per spiegare:

* la struttura o il ruolo di un file;
* l'obiettivo di un set di regole (ruleset);
* l'idea dietro un numero magico (magic number);
* il motivo di una dichiarazione (declaration) CSS;
* l'ordine di una dichiarazione CSS;
* la ragione dietro un certo modo di fare le cose.

Probabilmente sto dimenticando un mucchio di altre ragioni. Commentare è un'attività che richiede poco tempo quando la si fa mentre si scrive il codice, per cui fatelo al momento giusto. Tornare su un pezzo di codice per aggiungere commenti è davvero poco pratico, oltre che assai fastidioso.

## Scrivere i commenti

Idealmente, *ogni* set di regole CSS dovrebbe essere preceduto da un commento stile C che spiega il ruolo di quel blocco. Questo commento contiene anche spiegazioni, in una lista numerata, riguardo parti specifiche del set di regole. Ad esempio:

{% include snippets/comments/01/index.html %}

Praticamente tutto ciò che non è ovvio al primo sguardo dovrebbe essere inserito nei commenti. Non esiste la troppa documentazione. Ricorda che non puoi *commentare troppo*, perciò dacci dentro e scrivi commenti per tutto ciò per cui val la pena.

Quando commenti parti specifiche in Sass, usa commenti inline piuttosto che il blocco stile C. Questo rende il commento invisibile nell'output, anche nella maniera estesa che si usa durante lo sviluppo.

{% include snippets/comments/02/index.html %}

###### Per saperne di più

* [CSS Guidelines’ Commenting section](http://cssguidelin.es/#commenting)

## Documentation

Every variable, function, mixin and placeholder that is intended to be reused all over the codebase should be documented as part of the global API using [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Three slashes (<code>/</code>) required.</p>
</div>

SassDoc has two major roles:

* forcing standardized comments using an annotation-based system for everything that is part of a public or private API;
* being able to generate an HTML version of the API documentation by using any of the SassDoc endpoints (CLI tool, Grunt, Gulp, Broccoli, Node...).

{% include images/sassdoc.html %}

Here is an example of a mixin extensively documented with SassDoc:

{% include snippets/comments/04/index.html %}

###### Further reading

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
