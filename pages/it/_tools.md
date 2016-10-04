
# Tools

Una cosa carina di un preprocessore CSS popolare come Sass è che si porta dietro un intero ecosistema di framework, plugin, librerie e strumenti. Dopo otto anni di esistenza, siamo sempre più vicini al punto in cui [qualsiasi cosa possa essere scritta in Sass è già stata scritta in Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

Tuttavia il mio consiglio è quello di tenere al minimo indispensabile il numero di dipendenze. Gestire dipendenze è un tipo di inferno di cui non velete fare parte. In più non c’è molto bisogno di dipendenze esterne quando parliamo di Sass.

## Compass

[Compass](http://compass-style.org/) è il maggior [framework Sass](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/) là fuori. Sviluppato da [Chris Eppstein](https://twitter.com/chriseppstein), uno dei due principali designer di Sass. Se volete la mia opinione, non credo che perderà molta popolarità nel breve periodo.

[Tuttavia non uso più Compass](http://www.sitepoint.com/dont-use-compass-anymore/). Il motivo principale è che rallenta molto Sass. Ruby Sass è già lento di suo, quindi aggiungere ancora più Ruby e ancora più Sass non è di molto aiuto.

La questione è che usiamo una piccola parte dell’intero framework. Compass è enorme. La compatibilità Cross-browser è solo la cima dell’iceberg. Le funzioni matematiche, gli _helper_ per immagini, lo _spriting_... Si può fare davvero molto con questo gran software.

È tutto molto bello ma, sfortunatamente, non c’è nessuna caratteristica indispensabile. Un’eccezione potrebbe essere il generatore di _sprite_ che è *davvero grandioso*, ma [Grunticon](https://github.com/filamentgroup/grunticon) e [Grumpicon](http://grumpicon.com/) fanno la stessa cosa e hanno il beneficio di poter essere collegati facilmente al vostro processo di _build_.

Comunque, non proibisco l’uso di Compass, ma non lo raccomando nemmeno, sopratutto finché non sarà compatibile con LibSass (anche se sono stati fatti molti sforzi a riguardo). Se vi sentite meglio nell’usarlo, giustissimo, ma non penso che ne ricaverete molto alla fin fine.

<div class="note">
  <p>Ruby Sass sta subendo alcune ottimizzazioni, specificamente rivolte a stili con molta logica, funzioni e <em>mixin</em>_. Queste modifiche dovrebbero migliorare sensibilmente le prestazioni fino al punto in cui Compass ed altri <em>framework</em> potrebbero non rallentare più di tanto Sass.</p>
</div>

## Sistemi di griglie

Non usare un sistema di griglie non è più un’opzione ora che il _Responsive Web Design_ è ovunque. Per rendere il design consistente e uniforme a tutte le dimensioni, usiamo una specie di griglia per impaginare gli elementi. Per evitare di riscrivere griglie costantemente, alcune menti brillanti hanno reso riutilizzabile il loro sistema di griglie.

Mettiamo le cose in chiaro: non sono un grande fan dei sistema di griglie. Certo, ne vedo il potenziale, ma penso che molte di loro siano davvero eccessive e sono usate per lo più per disegnare colonne rosse su sfondi bianchi durante le conferenze di designer un po’ nerd. Quand’è l’ultima volta che avete pensato: *grazie-a-Dio-ho-questo-strumento-per-costruire-questo-2-5-3.1-π-grid*? Esatto, mai. Questo perché nella maggior parte dei casi, volete semplicemente una griglia a dodici colonne, nulla di strano.

Se per i vostri progetti state usando un framework CSS come [Bootstrap](http://getbootstrap.com/) o [Foundation](http://foundation.zurb.com/), avete molte chance che includa già un grid system. In questo caso vi raccomando di usare quello ed evitare di dover gestire un’altra dipendenza.

Se non siete legati ad uno specifico sistema di griglie, sarete contenti di sapere che ci sono due motori di prima qualità sviluppati in Sass: [Susy](http://susy.oddbird.net/) e [Singularity](http://singularity.gs/). Entrambi fanno molto di più di quanto avrete mai bisogno e potete scegliere quello che preferite tra i due ed essere sicuri che tutti i vostri casi &mdash;anche quelli limite&mdash; saranno gestiti. Se chiedete a me, Susy ha una comunità leggermente migliore, ma è solo la mia opinione.

Oppure si può andare verso qualcosa di un po’ più informale, tipo [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). Tutto sommato, la scelta non avrà molto impatto sul vostro modo di scrivere codice, quindi sta a voi scegliere a questo punto.

## SCSS-lint

Effettuare il _linting_ del codice è molto importante. Tipicamente seguire i suggerimenti di una guida di stile aiuta a migliorare la qualità e ridurre la quantità di errori, ma nessuno è perfetto e ci sono sempre cose da migliorare. Si potrebbe dire che fare il _linting_ del codice è importante esattamente come commentarlo.

[SCSS-lint](https://github.com/causes/scss-lint) è uno strumento che vi aiuta a mantenere i vostri file CSS puliti e leggibili. È totalmente configurabile ed è facile da integrare con i vostri strumenti.

Fortunatamente, le raccomandazioni di SCSS-lint sono molto simili a quelle descritte in questo documento. Per configurare SCSS-lint secondo queste linee guida, vi raccomando il seguente setup:

{% include snippets/tools/01/index.html %}

Se non siete ancora convinti dell'utilità di usare SCSS-lint, vi raccomando di leggere questi ottimi articoli: [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/), [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom) e [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/).

<div class="note">
  <p>Se si desidera collegare SCSS-lint al vostro processo di build di Grunt, sarete felici di sapere che esiste un plugin Grunt chiamato<a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Inoltre, se siete alla ricerca di un applicazione che funzioni in modo pulito con SCSS-lint e simili, i ragazzi di <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) stanno lavorando a <a href="https://houndci.com/">Hound</a>.</p>
</div>
