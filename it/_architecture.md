
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

### Layout folder

The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar...), the grid system or even CSS styles for all the forms.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>The <code>layout/</code> folder might also be called <code>partials/</code>, depending on what you prefer.</p>
</div>

### Components folder

For smaller components, there is the `components/` folder. While `layout/` is *macro* (defining the global wireframe), `components/` is more focused on widgets. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in `components/` since the whole site/application should be mostly composed of tiny modules.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>The <code>components/</code> folder might also be called <code>modules/</code>, depending on what you prefer.</p>
</div>

### Pages folder

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Depending on your deployment process, these files could be called on their own to avoid merging them with the others in the resulting stylesheet. It is really up to you.</p>
</div>

### Themes folder

On large sites and applications, it is not unusual to have different themes. There are certainly different ways of dealing with themes but I personally like having them all in a `themes/` folder.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>This is very project-specific and is likely to be non-existent on many projects.</p>
</div>

### Utils folder

The `utils/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequently named `_helpers.scss`)

<div class="note">
  <p>The <code>utils/</code> folder might also be called <code>helpers/</code>, <code>sass-helpers/</code> or <code>sass-utils/</code>, depending on what you prefer.</p>
</div>

### Vendors folder

And last but not least, most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

If you have to override a section of any vendor, I recommend you have an 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite.

For instance, `vendors-extensions/_bootstrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

### Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Files should be imported according to the folder they live in, one after the other in the following order:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

In order to preserve readability, the main file should respect these guidelines:

* one file per `@import`;
* one `@import` per line;
* no new line between two imports from the same folder;
* a new line after the last import from a folder;
* file extensions and leading underscores omitted.

{% include snippets/architecture/02/index.html %}

There is another way of importing partials that I deem valid as well. On the bright side, it makes the file more readable. On the other hand, it makes updating it slightly more painful. Anyway, I’ll let you decide which is best, it does not matter much. For this way of doing, the main file should respect these guidelines:

* one `@import` per folder;
* a linebreak after `@import`;
* each file on its own line;
* a new line after the last import from a folder;
* file extensions and leading underscores omitted.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>In order to not have to import each file manually, there is an extension to Ruby Sass called <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, making it possible to use glob patterns in Sass <code>@import</code> such as <code>@import "components/*"</code>.</p>
  <p>That being said, I would not recommend it because it imports files following the alphabetical order which is usually not what you want, especially when dealing with a source-order dependent language.</p>
</div>

## Shame file

There is an interesting concept that has been made popular by [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) and [Chris Coyier](http://css-tricks.com) that consists of putting all the CSS declarations, hacks and things we are not proud of in a *shame file*. This file, dramatically titled `_shame.scss`, would be imported after any other file, at the very end of the stylesheet.

{% include snippets/architecture/04/index.html %}

###### Further reading

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
