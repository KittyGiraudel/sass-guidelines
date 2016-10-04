
# Architettura

Una delle cose più difficili da fare è decidere la giusta architettura per un progetto CSS. Mantenere questa architettura coerente e facile da capire è ancora più complicato.

Fortunatamente, uno dei benefici principali dell’usare un preprocessore CSS è quello di avere la capacità di dividere la codebase in diversi file, senza impattare sulla performance (usando la direttiva `@import`). Grazie alla capacità della direttiva `@import` di Sass, usare molti file durante lo sviluppo non solo è totalmente sicuro, ma anche raccomandato. Questi file saranno poi compilati in un unico file quando il codice sarà compilato per l’ambiente di produzione.

Detto questo, non mi stancherò mai di sottolineare quanto sia importante dividere questi file in cartelle, anche per progetti piccoli. A casa non mettiamo tutti i nostri fogli di carta in una scatola. Li dividiamo in cartelle: una per i documenti della casa, una per la banca, una per le bollette e così via. Non c’è ragione per non far così anche quando si struttura un progetto CSS. Dividere la codebase dentro cartelle separate, ognuna con il proprio ruolo, ci aiuterà a trovare le cose quando torneremo sul codice in un secondo momento.

Ci sono [molti modi](http://www.sitepoint.com/look-different-sass-architectures/) per organizzare i file di un progetto CSS: [OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), simil-[Bootstrap](http://getbootstrap.com/), simil-[Foundation](http://foundation.zurb.com/)… Hanno tutti i propri meriti, i vantaggi e gli svantaggi.

Io uso un approccio che sembra piuttosto simile a [SMACSS](https://smacss.com/) di [Jonathan Snook](http://snook.ca/), che mantiene le cose semplici e facili da capire.

<div class="note">
  <p>Ho imparato che l’architettura il più delle volte è differente da progetto a progetto. Sentitevi liberi di adattare o modificare completamente la soluzione proposta, in modo da poter ottenere un sistema che fa al caso vostro.</p>
</div>

## Componenti

C’è una differenza sostanziale tra il *far funzionare qualcosa* e il farlo funzionare *bene*. Anche qui CSS si rivela un bel casino <sup>[necessaria citazione]</sup>. Meno CSS abbiamo, meglio è. Non vogliamo aver a che fare con megabyte di codice CSS. Per mantenere i fogli di stile piccoli ed efficienti &mdash;è non c’è da sorprendersi&mdash; è una buona idea pensare all’interfaccia come ad un insieme di componenti.

Qualsiasi cosa può essere un componente, purchè:

* faccia una e una sola cosa;
* sia riutilizzabile e riusata all’interno del progetto;
* sia indipendente.

Ad esempio, una form di ricerca potrebbe essere considerata come un componente. Potrebbe essere riutilizzabile in diverse posizioni, in diverse pagine, in diverse situazioni. Il componente non dovrebbe dipendere dalla sua posizione nel DOM (footer, sidebar, contenuto principale...).

La maggior prte delle interfacce può essere pensata come un insieme di piccoli componenti. Suggerisco di tener sempre presente questo paradigma. Questo non solo ridurrà la quantità di CSS di cui il progetto avrà bisogno, ma ci porterà anche ad avere un codice più semplice da manutenere rispetto a un caos dove tutto è mischiato.

## La struttura dei componenti

I componenti dovrebbero essere idealmente descritti ciascuno nel loro file .sass parziale. Dovrebbero essere poi contenuti all’interno della cartella `components/`, come descritto nel  [7-1 pattern](#il-pattern-7-1)) - ad esempio: `components/_button.scss`. Lo stile descritto in ciascuno di questi file dovrebbe solo includere:

* lo stile del componente;
* lo stile delle variazioni del componente;
* lo stile dei discendenti del componente (ad esempio, gli elementi figli), se necessario.

Se si vuol fare in modo che il proprio componente possa essere _temizzato_ (ad esempio, in un tema contenuto nella cartella `themes/`), bisogna limitarsi solo alle dichiarazioni della struttura, come ad esempio le dimensioni (width/height), il padding, i margini, l’allineamento etc. Bisogna escludere gli stili come ad esempio i colori, le ombre, le dichiarazioni del font, il background etc.

Un parziale dedicato al componente può includere variabili specifice per il comeponente, _placeholders_ e anche funzioni e _mixins_. C’è da ricordare che bisognerebbe evitare di riferirsi a file (ad esempio, usando `@import`) che provengono da altri componenti. L’alternativa è creare una serie di dipendenze che renderanno il progetto un macello inmanutenibile.

Ecco un esempio del parziale di un componente:

{% include snippets/architecture/06/index.html %}

<div class="note">
  <p>Grazie a <a href="https://twitter.com/davidkpiano">David Khourshid</a> per aver dato una mano in questa sezione.</p>
</div>

## Il pattern 7-1 

Torniamo all’architettura, che ne dite? Io di solito utilizzo ciò che chiamo il *pattern 7-1*: 7 cartelle, 1 file. In pratica si hanno tutti i file parziali dentro sette cartelle differenti e un singolo file al livello root (di solito chiamato `main.scss`) che importa il resto dei file. Questo viene compilato in un singolo foglio CSS.

* `abstracts/`
* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
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

La cartella `base/` contiene ciò che potremmo chiamare il codice boilerplate per il progetto. Qui troveremo il file di reset, qualche regola tipografica, e probabilmente un foglio di stile (che di solito chiamo `_base.scss`), il quale definisce alcuni stili standard per elementi HTML comunemente usati.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

<div class="note">
  <p>Se il progetto usa <em>molto</em> le animazioni CSS, si potrebbe pensare di aggiungere un file <code>_animations.scss</code> che contiene le definizioni dei <code>@keyframes</code> per le animazioni. Se si usano solo sporadicamente, meglio farle vivere nei selettori che le usano. </p>
</div>

### La cartella Layout

La cartella `layout/` contiene tutto ciò che si occupa di creare i layout del sito o dell’applicazione. Questa cartella può raccogliere i fogli di stile per le parti principali del sito (header, footer, navigazione, sidebar...), la griglia (grid), o anche le regole CSS per tutte le form.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  La cartella <code>layout/</code> può anche essere chiamata <code>partials/</code>; dipende da ciò che preferite.
</div>

### La cartella Components

Per i piccoli componenti, c’è la cartella `components/`. Mentre `layout/` è *macro* (definisce il *wireframe* globale), `components/` è più focalizzato sui widget. Contiene tutti i moduli specifici come uno slider, un loader, un widget, e via dicendo. Di solito ci sono molti file in `components/`, dato che l’intera applicazione andrebbe composta come l’insieme di tanti piccoli moduli

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

### La cartella Abstracts

La cartella `abstracts/` raccoglie tutti gli strumenti e gli helper usati nel progetto. Tutte le variabili globali, le funzioni, i mixin e i placeholder dovrebbero essere messi qui dentro.

La regola vuole che questa cartella non produca una singola linea di CSS quando compilata. Qui ci sono solo Sass helper.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (spesso chiamata `_helpers.scss`)

Quando si lavora in un progetto grande, con molte _utility_ astratte, sarebbe buono raggrupparle per argomento piuttosto che per tipo. Ad esempio:  tipografia (`_typography.scss`), temi (`_theming.scss`), etc. Ogni file contiene tutti gli helper come variabili, funzioni, mixin e placeholder. Facendo così si può ottenere un codice più facile da capire e mantenere, specialmente quando i file diventano parecchio lunghi.

<div class="note">
  <p>La cartella <code>abstracts/</code> può anche essere chiamanta <code>utilities</code> o <code>helpers</code>, a seconda di come si preferisce.</p>
</div>

### La cartella Vendors

Ultima ma non ultima, la cartella `vendors/` presente in molti progetti contiene tutti i file CSS che provengono da librerie e framework esterni – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, e così via. Mettere tutto nella stessa cartella è un buon modo per dire "Ehi, questa non è roba mia, non è il mio codice, non è mia responsabilità".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Se c’è da sovrascrivere una parte di qualche file Vendor, consiglio di avere un’ottava cartella, chiamata `vendors-extensions/` nella quale avere i file chiamati esattamente nella stessa maniera dei file Vendor che andranno a sovrascrivere.

Ad esempio, `vendors-extensions/_bootstrap.scss` è un file che contiene tutto il CSS che ri-dichiara alcune dei default di Bootstrap. Evitate di modificare direttamente i file Vendor: non è una buona idea.

### Il file Main

Il file principale (Main, spesso chiamato `main.scss`) dovrebbe essere l’unico file Sass nell’intera codebase a non iniziare per trattino basso (underscore). Questo file non contiene nient’altro che `@import` e commenti.

I file dovrebbero essere importati secondo la cartella dove risiedono, una dopo l’altra in quest’ordine:

1. `vendors/`
1. `abstracts/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Per preservare la leggibilità, il file Main deve rispettare queste linee guida:

* ogni `@import` è riferito ad un singolo file;
* Un `@import` per riga;
* nessuna riga vuota tra due import dallo stessa cartella;
* una riga vuoto dopo l’ultimo import di una cartella;
* omettere estensione dei file e l’underscore iniziale.

{% include snippets/architecture/02/index.html %}

C’è un altro modo per importare i file parziali che ritengo valido. Da un lato, rede il file più leggibile. Dall’altro, rende l’aggiornamento leggermente più complicato. Ad ogni modo, vi lascerei decidere qual è meglio; non ha molta importanza. Secondo questo metodo, il file Main dovrebbe rispettare queste linee guida:

* un `@import` per ciascuna cartella;
* un a capo dopo ogni `@import`;
* ogni file in una riga;
* una riga vuota dopo l’ultimo import di una cartella;
* omettere estensione dei file e l’underscore iniziale.

{% include snippets/architecture/03/index.html %}

## Riguardo al globbing
In informatica, i pattern detti _glob_ si riferiscono all'uso di asterischi (wildcard) per accedere ad un set di file, come ad esempio `*.scss`. Partendo da qui, _globbing_ significa riferirsi ad un set di file basandosi su un'espressione piuttosto che una lista di nomi di file. Quando è applicato a Sass, significa che importare i parziali dentro il [main file](#il-file-main) può essere fatto usando un pattern _globbing_ invece che aggiungendo i file uno ad uno. Il risultato è una cosa del genere:

{% include snippets/architecture/05/index.html %}

Sass non supporta il file globbing di natura, perchè può essere una caratteristica pericolosa: il CSS dopotutto è dipendente dall’ordine delle dichiarazioni. Quando si importano i file dinamicamente, non si controlla più l’ordine della sorgente, e questo può creare qualche problema quando si fa debug.

Detto ciò, in un’architettura strettamente basata sui componenti, con parecchia attenzione a non contaminare un parziale con l’altro, l’ordine non dovrebbe essere un problema. È quindi più semplice aggiungere e rimuovere i parziali nel main file.

Quando si usa Ruby Sass, c'è una gemma chiamata [sass-globbing](https://github.com/chriseppstein/sass-globbing) che abilita esattamente questa funzionalità. Se utilizzate invece node-sass, potete fare affidamento o direttamente a Node.js o a qualsiasi tool di sviluppo che state utilizzando al momento (Gulp, Grunt, etc.),

## Il file Shame

C’è un’idea interessante, diffusa da [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) e [Chris Coyier](http://css-tricks.com) che consiste nel mettere tutto il CSS, gli hack e tutte le cose di cui non andremmo fieri in un *[file della vergogna](http://csswizardry.com/2013/04/shame-css-full-net-interview/) (Shame)*. Questo file, platealmente chiamato `_shame.scss`, verrebbe importato dopo tutti i file, alla fine del foglio di stile.

{% include snippets/architecture/04/index.html %}
