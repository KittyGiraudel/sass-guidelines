
# I Mixin

I _Mixin_ sono una delle caratterstiche più usate dell'intero linguaggio Sass. Sono la chiave per ottenere componenti riusabili e fedeli al DRY. Per una buona ragione: i mixin danno l'opportunità all'autore di definire stili che possono essere riusati all'interno del foglio di stile senza aver bisogno di classi non-semantiche come `.float-left`.

Possono contenere una serie di regole CSS e grosso modo tutto ciò che è lecito dovunque in un documento Sass. Possono anche accettare argomenti, proprio come funzioni. Inutile dire che le possibilità sono infinite.

Devo però avvisare contro l'abuso del potere dei Mixin. Una volta ancora, la chiave qui è *semplicità*. Si potrebbe esser tentati di costruire un mixin estremamente potente con un sacco di logica dentro. Saremmo di fronte ad un caso di sovra-ingegnerizzazione, una malattia di cui molti sviluppatori soffrono. Se un Mixin finisce per avere più di venti righe di codice, allora dovrebbe essere diviso in pezzetti più piccoli, o completamente rivisto. 

## Le basi

Detto questo, i Mixin sono estremamente utili e se ne dovrebbero usare qualcuno. La regola di base è che se ci si accorge di avere un gruppo di proprietà CSS che compaiono sempre insieme per una ragione (non per coincidenza), si dovrebbero mettere dentro un mixin. Ad esempio, il [micro-clearfix hack di Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) merita di esser messo (senza argomenti) in un mixin.

{% include snippets/mixins/01/index.html %}

Un altro esempio valido potrebbe essere un Mixin per impostare la grandezza di un elemento, definendo `width` e `height` nello stesso tempo. Non solo renderà il codice più leggero, ma anche più facile da leggere.

{% include snippets/mixins/02/index.html %}

###### `width` and `height`

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)

## Lista di argomenti

Quando c'è da aver a che fare con un numero sconosciuto di argomenti in un Mixin, meglio usare un `arglist` piuttosto che una Lista. Pensate ad `arglist` come l'ottavo tipo di dati in Sass, nascosto e non documentato, che è implicitamente usato quando passiamo un numero arbitrario di argomenti ad un Mixin o ad una funzione la cui firma contiene `...`.

{% include snippets/mixins/03/index.html %}

Ora, quando si costruisce un Mixin che accetta una manciata di argomenti (diciamo 3 o più), pensiamoci due volte prima di unirli in una lista o in una mappa: potrebbe essere più semplice passarli uno per uno.

Sass è piuttosto intelligente con la dichiarazione di Mixin e funzioni, così tanto che si può passare una lista o una mappa coe una _arglist_ ad una funzione/mixin in modo che sia interpretata come una serie di argomenti.

{% include snippets/mixins/04/index.html %}

###### Approfondimenti

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

## I mixin e i prefissi vendor

Si potrebbe essere tentati di definire un mixin personalizzato per avere i prefissi vendor da applicare a proprietà CSS non ancora supportate o supportate solo parzialmente. Non si vorrà certo far questo. Prima di tutto, se si può usare [Autoprefixer](https://github.com/postcss/autoprefixer), che si usi Autoprefixer. Così facendo rimuoverete codice Sass dal vostro progetto, che sarà sempre aggiornato e che sarà compilato in una maniera più efficiente di quanto si può fare a mano.

Sfortunatamente, avere Autoprefixer non è sempre una cosa possibile. Usando [Bourbon](http://bourbon.io/) o [Compass](http://compass-style.org/) si scopre che entrambi mettono a disposizione una collezione di Mixin per applicare i prefissi vendor. Usate questi.

Se non si può usare Autoprefixer, e nemmeno Bourbon o Compass, allora, e solo allora, si può creare un mixin per applicare i prefissi alle proprietà CSS. Ma per favore, non create un mixin per ogni proprietà, che stampa manualmente ogni prefisso.

{% include snippets/mixins/05/index.html %}

Fatelo nella maniera intelligente.

{% include snippets/mixins/06/index.html %}

Usare questo Mixin ora è facilissimo:

{% include snippets/mixins/07/index.html %}

Tenete a mente che questa è una soluzione povera. Per esempio, non può interagire con polyfill complessi come quelli richiesti per Flexbox. In questo senso, Autoprefixer rimane l'opzione ideale.

###### Approfondimenti

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)
