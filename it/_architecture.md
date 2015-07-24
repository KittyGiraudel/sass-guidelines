
# Architettura

Decidere la giusta architettura per un progetto CSS è probabilmente una delle cose più difficili. Mantenere questa architettura coerente e facile da capire è ancora più complicato.

Fortunatamente, uno dei benefici principali dell'usare un preprocessore CSS è quello di avere la capacità di dividere la codebase in diversi file, senza impattare sulla performance (usando la direttiva `@import`). Grazie a alla capacità della direttiva `@import` di Sass, usare molti file durante lo sviluppo, ma anche raccomandato. Questi poi saranno compilati in un unico file quando si preparerà il codice per l'ambiente di produzione.

Detto questo, non mi stancherò mai di sottolineare quanto sia importante dividere questi file in cartelle, anche per progetti piccoli. A casa non mettiamo tutti i nostri fogli di carta in una scatola. Li dividiamo in cartelle: una per i documenti della casa, una per la banca, una per le bollette e così via. Non c'è ragione per non far così anche quando si struttura un progetto CSS. Dividere la codebase dentro cartelle separate, ognuna con il proprio ruolo, ci aiuterà a trovare le cose quando torneremo sul codice in un secondo momento.

Ci sono un sacco di modi per organizzare i file di un progetto CSS: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), simil-[Bootstrap](http://getbootstrap.com/),simil-[Foundation](http://foundation.zurb.com/)... Tutti loro hanno i propri meriti, i vantaggi e gli svantaggi.

Io uso un approccio che sembra piuttosto simile a [SMACSS](https://smacss.com/) di [Jonathan Snook], che mantiene le cose semplici e facili da capire.

<div class="note">
  <p>Ho imparato che l'architettura il più delle volte è differente da progetto a progetto. Sentitevi liberi di adattare o modificare completamente la soluzione proposta, in modo da poter ottenere un sistema che fa al caso vostro.</p>
</div>

###### Per saperne di più

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)

## Componenti

C'è una differenza sostanziale tra il *farlo funzionare* e il farlo funzionare *bene*. Anche qui, CSS si rivela un bel casino <sup>[necessaria citazione]</sup>. Meno CSS abbiamo, meglio è. Non vogliamo aver a che fare con megabyte di codice CSS. Per mantenere i fogli di stile piccoli ed efficienti&mdash;è non c'è da sorprendersi&mdash;è una buona idea pensare all'interfaccia come ad un'insieme di componenti.

Qualsiasi cosa può essere un componente, purchè:

* faccia una e una sola cosa;
* sia risabile e riusata all'interno del progetto;
* sia indipendente.

Ad esempio, una form di ricerca potrebbe essere considerata come un componente. Potrebbe essere riusabile, in diverse posizioni, in diverse pagine, in diverse situazioni. Non dovrebbe dipendere dalla sua posizione nel DOM footer, sidebar, contenuto principale...).

La maggioranza delle interfacce può essere pensata come un'insieme di piccoli componenti. Io suggerisco di tener sempre presente questo paradigma. Questo non solo ridurrà la quantità di CSS di cui il progetto avrà bisogno, ma anche ci porterà ad avere un codice più semplice da manutenere rispetto a un caos dove tutto è mischiato.

## Il pattern 7-1 

Torniamo all'architettura, che ne dite? Io di solito utilizzo ciò che chiamo il *pattern 7-1*: 7 cartelle, 1 file. In pratica, si hanno tutti i file parziali dentro sette cartelle differenti, e un singolo file al livello root (di solito chiamato `main.scss`) che importa il resto dei file. Questo viene compilato in un singolo foglio CSS.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

E naturalmente:

* `main.scss`

{% include images/wallpaper.html %}

Idealmente, avremo qualcosa simile a questo:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>I file seguono la stessa convenzione sui nomi descritta prima: sono separati dal trattino.</p>
</div>

### La cartella Base

La cartella `base/` folder contiene ciò che potremmo chiamare il codice boilerplate per il progetto. Qui troveremo il file di reset, qualche regola tipografica, e probabilmente un foglio di stile (che di solito chiamo `_base.scss`), il quale definisce alcuni stili standard per elementi HTML comunemente usati.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

### La cartella Layout

La cartella `layout/` contiene tutto ciò che si occupa di creare i layout del sito o dell'applicazione. Questa cartella può raccogliere i fogli di stile per le parti principali del sito (header, footer, navigazione, sidebar...), la griglia (grid), o anche le regole CSS per tutte le form.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  La cartella <code>layout/</code> può anche esser chiamata <code>partials/</code>; dipende da ciò che preferite.
</div>

### La cartella Components

Per i piccoli componenti, c'è la cartella `components/`. Mentre `layout/` è *macro* (definisce il *wireframe* globale), `components/` è più focalizzato sui widget. Contiene tutti i moduli specifici come uno slider, un loader, un widget, e via dicendo. Di solito ci sono molti file in `components/`, dato che l'intera applicazione andrebbe composta come l'insieme di tanti piccoli moduli

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>La cartella <code>components/</code> può essere anche chiamata <code>modules/</code>; dipende da ciò che preferite.</p>
</div>

### La cartella Pages

Se si hanno stili specifici per una pagina, è meglio raccoglierli in un file con lo stesso nome in una cartella `pages/`. Non è così strano avere stili particolari per la home page, che avranno bisogno di un `_home.scss` nella cartella `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>A seconda del processo di deploy, questi file possono essere richiamati indipendentemente nella pagina, piuttosto che essere raccolti col resto del foglio di stile in un unico file. Vedete voi.</p>
</div>

### Cartella Themes

In grossi siti o applicazioni, non è strano avere bisogno di differenti temi. Ci sono molti diversi modi per lavorare bene coi temi. Personalmente mi piace averli tutti in una cartella `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Il bisogno di questa cartella dipende dal progetto. In molti progetti potrebbe non essercene la necessità.</p>
</div>

### La cartella Utils

La cartella `utils/` raccoglie tutti gli strumenti e gli helper usati nel progetto. Tutte le variabili globali, le funzioni, i mixin e i placeholder dovrebbero essere messi qui dentro.

La regola vuole che questa cartella non produca una singola linea di CSS quando compilata. Qui ci sono solo Sass helper.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (spesso chiamata `_helpers.scss`)

<div class="note">
  <p>La cartella <code>utils/</code> può anche essere chiamanta <code>helpers</code>, <code>sass-helpers</code> or <code>sass-utils</code>, depending on what you prefer</p>
  <p>The <code>utils/</code> folder might also be called <code>helpers/</code>, <code>sass-helpers/</code> or <code>sass-utils/</code>, dipende da ciò che si preferisce.</p>
</div>

### La cartella Vendors

Ultima ma non ultima, la cartella `vendors/` presente in molti progetti contiene tutti i file CSS che provengono da librerie e framework esterni – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, e così via. Mettere tutto nella stessa cartella è un buon modo per dire "Ehi, questa non è roba mia, non è il mio codice, non è mia responsabilità".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Se c'è da sovrascrivere una parte di qualche file Vendor, consiglio di avere un'ottava cartella, chiamata `vendors-extensions/` nella quale avere i file chiamati esattamente nella stessa maniera dei file Vendor che andranno a sovrascrivere.

Ad esempio, `vendors-extensions/_bootstrap.scss` è un file che contiene tutto il CSS che ri-dichiara alcune dei default di Bootstrap. Evitate di modificare direttamente i file Vendor: non è una buona idea.

### Il file Main

Il file principale (Main, spesso chiamato `main.scss`) dovrebbe essere l'unico file Sass nell'intera codebase a non iniziare per trattino basso (underscore). Questo file non contiene nient'altro che `@import` e commenti.

I file dovrebbero essere importati secondo la cartella dove risiedono, una dopo l'altra in quest'ordine:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Per preservare la leggibilità, il file Main deve rispettare queste linee guida:

* ogni `@import` è riferito ad un singolo file;
* Un `@import` per riga;
* nessuna riga vuota tra due import dallo stessa cartella;
* una riga vuoto dopo l'ultimo import di una cartella;
* omettere estensione dei file e l'underscore iniziale.

{% include snippets/architecture/02/index.html %}

C'è un altro modo per importare i file parziali che ritengo valido. Da un lato, rede il file più leggibile. Dall'altro, rende l'aggiornamento leggermente più complicato. Ad ogni modo, vi lascerei decidere qual è il meglio; non ha molta importanza. Secondo questo metodo, il file Main dovrebbe rispettare queste linee guida:

* un `@import` per ciascuna cartella;
* un a capo dopo ogni `@import`;
* ogni file in una riga;
* una riga vuota dopo l'ultimo import di una cartella;
* omettere estensione dei file e l'underscore iniziale.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>Per non dover importare manualmente ogni file, c'è un estensione di Ruby Sass chiamanta <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, che rende possibile utilizzare il pattern "glob" con gli <code>@import</code> di Sass; ad esempio <code>@import "components/*"</code></p>.
  <p>Detto ciò, non lo raccomanderei. Questa estensione importa i file in ordine alfabetico, che di solito non è l'ideale, specialmente quando abbiamo a che fare con un linguaggio basato sull'ordine delle fonti.</p>
</div>

## Il file Shame

C'è un'idea interessante, diffusa da [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) e [Chris Coyier](http://css-tricks.com) che consiste nel mettere tutto il CSS, gli hack e tutte le cose di cui non andremmo fieri in un *file vergogna (Shame)*. Questo file, platealmente chiamato `_shame.scss`, verrebbe importato dopo tutti i file, alla fine del foglio di stile.

{% include snippets/architecture/04/index.html %}

###### Per saperne di più

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
