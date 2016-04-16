
# A proposito di Sass

Questo è come [Sass](http://sass-lang.com) descrive se stesso e la propria[documentazione](http://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass è un’estensione di CSS che aggiunge potenzialità ed eleganza al linguaggio base.

L’obiettivo finale di Sass è di sistemare i difetti di CSS. CSS, come molti sappiamo, non è il miglior linguaggio di programmazione nel mondo <sup>[citazione necessaria]</sup>. Molto semplice da imparare, può diventare presto un casino, specialmente nei progetti grandi.

Ed è qui che arriva Sass, che, come meta linguaggio, migliora la sintassi di CSS in modo da fornire funzionalità in più e strumenti di supporto extra. Inoltre Sass vuole rimanere conservativo riguardo la sintassi CSS.

Il punto non è rendere CSS un linguaggio di programmazione pieno di funzionalità: Sass vuole solo aiutare dove CSS fallisce. Proprio per questo, iniziare con Sass non è più difficile che imparare CSS: vengono semplicemente aggiunte un [paio di funzionalità](http://sitepoint.com/sass-reference/) in più.

Detto questo, per usare queste funzionalità, ci sono molti modi. Alcuni buoni, altri cattivi, altri inusuali. Queste linee guida intendono fornire un’approccio consistente e documentato per scrivere codice in Sass.

## Ruby Sass o LibSass

[La prima commit di Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) è del lontano 2006, più di otto anni fa. Inutile dire che è passato molto tempo. Inizialmente è stato sviluppato in Ruby e sono apparsi qua e là vari _porting_. Quello che ha avuto più
successo è [LibSass](http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114) (scritto in C), che è quasi pronto ad essere pienamente compatibile con la versione originale scritta in Ruby.

Nel 2014, [i team di Ruby Sass e LibSass hanno deciso di aspettare che entrambe le versioni fossero sincronizzate prima di andare avanti](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Da allora LibSass ha rilasciato attivamente molte versioni ed ha oramai le stesse funzioni del suo fratello maggiore. Le ultime inconsistenze sono raccolte ed elencate da me sul progetto [Sass-Compatibility](http://sass-compatibility.github.io). Se siete a conoscenza di un’incompatibilità non elencata tra le due versioni, per piacere siate così gentili da aprire un _issue_.

Torniamo indietro alla scelta del vostro compilatore. Attualmente, tutto dipende dal progetto su cui siete. Se il vostro progetto è in Ruby on Rails, meglio usare Ruby Sass, perfetto in questo caso. Altrimenti, sappiate che Ruby Sass è comunque il riferimento per l’implementazione e sarà sempre il primo a ricevere nuove funzionalità, rispetto a Libsass. And if you are looking to switch from Ruby Sass to LibSass, [this article](http://www.sitepoint.com/switching-ruby-sass-libsass/) is for you.

Su progetti che non utilizzano Ruby e che necessitano di una integrazione del flusso di lavoro, LibSass è probabilmente un’idea migliore, visto che è pensato maggiormente per essere incluso in _workflow_ differenti. Quindi se volete usarlo con Node.js, ad esempio, potete farlo subito grazie a [node-sass](https://github.com/sass/node-sass).

## Sass o SCSS

C’è sempre molta confusione sulla semantica del nome *Sass*, e per una buoan ragione: il nome Sass si riferisce sia al preprocessore che alla propria sintassi. Non proprio comodo eh?

Vedete, inizialmente Sass descriveva una sintassi la cui peculiarità era quella di tener conto dell’indentazione. Molto presto i manutentori di Sass decisero di ridurre il divario tra Sass e CSS fornendo una sintassi più simile al CSS. Questa sintassi chiamata *SCSS* per *Sassy CSS* ha il motto: se è valido in CSS, è valido in SCSS.

Da allora Sass (il preprocessor) ha provvisto [due sintassi differenti](http://www.sitepoint.com/whats-difference-sass-scss/): Sass (non in maiuscolo, [per piacere](http://sassnotsass.com)), anche conosciuta come *la sintassi indentata*, e SCSS. Quale delle due usare sta totalmente a voi, visto che entrambe sono uguali in quanto a funzionalità. È solo una questione di estetica a questo punto.

La sintassi indentata si basa sull’indentazione e sugli spazi bianchi per eliminare graffe, punti e virglola e gli altri segni di interpunzione, portando ad una sintassi più snella e breve. Tuttavia, SCSS è più facile da imparare, visto che è per lo più simile al CSS, con giusto qualche pizzico in più.

<p>Personalmente preferisco SCSS a Sass perchè è più vicino al CSS ed è più facile da comprendere per la maggiorparte degli sviluppatori. Proprio per questo, SCSS è la sintassi standard di queste linee guida. Potete passare alla sintassi Sass tramite il <button type="button" data-modal-show="options-panel" class="link-like">pannello delle opzioni</button>.</p>

## Altri preprocessor

Sass è un _preprocessor_ come un altro. Il suo maggior concorrente è [LESS](http://lesscss.org/) un _preprocessor_ basato su Node.js, che ha avuto molta popolarità grazie al famoso _framework_ CSS [Bootstrap](http://getbootstrap.com/) che lo utilizza. C’è anche [Stylus](http://learnboost.github.io/stylus/) - che è sommicapi la versione più nerd e con meno limiti di LESS. Con Stylus si può fare davvero qualsiasi cosa si voglia, visto che in pratica trasforma CSS in un linguaggio di programmazione vero e proprio.

*Perchè scegliere Sass su LESS o un altro _preprocessor_?* è ancora un’ottima domanda. Non molto tempo fa eravamo soliti raccomandare Sass per progetti basati su Ruby, visto che era sviluppato in Ruby e si comportava egregiamente con _Ruby on Rails_. Ora che Libsass è praticamente identico (o quasi) alla libreria originale, tutto ciò non è più una raccomandazione rilevante.

Quello che mi piace di Sass è il suo approccio conservativo al CSS. Il design di Sass è basato su forti principi. L’approccio allo sviluppo di Sass è una conseguenza alle opinioni del suo team di sviluppo, ovvero: a) visto che aggiungere funzionalità extra ha un costo, questo costo deve essere giustificato da una reale utilità e b) deve essere facile comprendere cosa fa un blocco di stile osservando quel blocco di codice da solo.
Inoltre, Sass ha una maggiore attenzione al dettaglio rispetto ad altri _preprocessor_. Da quel che posso dirvi, i designer principali di Sass si preoccupano parecchio di supportare qualsiasi tipo di compatibilità CSS e si rendono certi che ogni comportamento generale sia consistente.

In altre parole, Sass non è un _preprocessor_ volto ad accontentare qualche programmatore, nerd improvvisato, a cui piacerebbe aggiungere funzionalità straordinarie ad un linguaggio che non ha nessuna intenzione di supportare logica. È un software volto a risolvere problemi reali; aiuta a fornire funzionalità a CSS dove CSS è inferiore.

_Preprocessor_ a parte, dovremmo parlare anche di strumenti di _porst-processing_, che hanno ricevuto molte attenzioni ultimamente, soprattutto grazie a [PostCSS](https://github.com/postcss/postcss) e [cssnext](https://cssnext.github.io/). Questi strumenti, a cui ci si riferisce spesso come “_postprocessor_” servono a includere oggi funzionalità che CSS avrà un domani. Sono comunque molto simili ai _preprocessor_ ad eccezion fatta che oltre alla sintassi futura del CSS, non forniscono nient’altro.

Potete pensare ai _postprocessor_ come _polyfill_ per funzionalità ancora non supportate da CSS. Ad esempio: potete scrivere variabili esattamente come scritto nelle [speifiche CSS](http://dev.w3.org/csswg/css-variables/), quindi compilare i vostri fogli di stile con un _postprocessor_, trovare ogni variabile e sostituirla con il valore relativo, esattamente come farebbe Sass.

L’idea dietro i _postprocessor_ è che una volta che i browser supporteranno le nuove funzionalità (ad esempio le variabili CSS), i _postprocessor_ non le compileranno più, lasciando al browser la gestione delle stesse.

Provvedere oggi la sintassi di domani è sicuramente un’idea nobile, ma devo dire che preferisco usare Sass per molte delle mie attività. Tuttavia, ci sono alcune occasioni dove credo che i _postprocessor_ siano molto più adatti di Sass e similari. Un esempio concreto sono i prefissi CSS, ma ne parleremo successivamente.
