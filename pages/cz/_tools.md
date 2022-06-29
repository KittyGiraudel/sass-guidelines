
## Nástroje

Co je opravdu hezké na CSS preprocesoru tak populárním jako Sass je to, že přichází s celým ekosystémem frameworků, pluginů, knihoven a nástrojů. Po 8 letech existence se dostáváme blíže a blíže k bodu, kde [všechno co může být napsané v Sassu, je napsané v Sassu](https://kittygiraudel.com/2014/10/27/rethinking-atwoods-law/).

Každopádně mojí radou je udržet počet závislostí na opravdové minimum. Spravování závislostí je tak trochu peklo, kterého nechcete být součástí. A navíc ani žádné externí závislosti nepotřebujete.

### Compass

[Compass](http://compass-style.org/) je hlavní Sass framework široko daleko. Vyvíjen [Chrisem Eppsteinem](https://twitter.com/chriseppstein), jedním ze dvou hlavních designérů Sassu, a pokud chcete znát můj názor, nemyslím si, že by měl v nejbližší době dramaticky ztratit popularitu.

Já osobně Compass už nepoužívám a hlavním důvodem je právě to, že zpomaluje Sass, a to dost. Ruby Sass je docela pomalé samo o sobě a přidáním více Ruby a více Sassu tomu opravdu moc nepomáhá.

Věc se má tak, že používáme jen velmi málo z celého frameworku. Compass je obrovský. A mixiny na podporu různých prohlížečů jsou jen špičkou ledovce. Matematické funkce, helpery pro obrázky, sprity… Je toho tak moc, co se s tímto skvělým kusem softwaru dá udělat.

Bohužel, všechno je to jen cukříček a není tam žádná zabijácká funkce. Vyjímkou by mohla být udělena pro sprite builder, který je *opravdu skvělý*, ale [Grunticon](https://github.com/filamentgroup/grunticon) a [Grumpicon](http://grumpicon.com/) dělají stejnou práci a mají výhodu, že mohou být připojeny v procesu sestavení.

Každopádně, používat Compass vám nezakazuji, i když bych jej ani nedoporučil, zvláště jelikož není kompatibilní s LibSass (i když v tomto směru bylo vyvinuto značné úsilí). Pokud máte pocit, že byste jej raději použili, proč ne, ale nemyslím si, že toho v konečném důsledku hodně získáte.

<div class="note">
  <p>Ruby Sass v současné době prochází několika optimalizacemi, které jsou specificky zamířené na těžkou logiku s mnoha funkcemi a mixinami. Mělo by to dramaticky zlepšit výkon k takovému stavu, že by použití Compassu a dalších frameworků nemuselo Sass zpomalovat.</p>
</div>

**Další četba:**

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](https://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Why I don't use Compass anymore](https://www.sitepoint.com/dont-use-compass-anymore/)
* [Is Compass to Sass with jQuery is to JavaScript?](https://www.sitepoint.com/compass-sass-jquery-javascript/)

### Grid systém

Nepoužívat grid systém v dnešní době, kdy je všude Responzivní Web Design, prostě není možnost. Chcete-li, aby návrhy vypadaly konzistentně a pevně ve všech velikostech, použijte nějaký grid pro rozložení elementů. Abyste se vyhnuli nutnosti kódovat tento grid tak, aby fungoval, znovu a znovu dokola, a někteří chytráci dokonce udělali ty své znovupoužitelné.

Nechte mě to ujasnit: nejsem velký fanoušek grid systémů. Samozřejmě vidím jejich potenciál, ale myslím si, že většina z nich jsou totální přestřely a jsou spíše používány na kreslení červených sloupců na bílé pozadí hloupých prezentací designérů. Kdy naposledy jste si říkali *děkuji-Bohu,-že-mám-tento-nástroj-pro-budování-2-5-3.1-π-gridu*? No právě, nikdy, protože ve většině případů jste chtěli jen normální 12-sloupcový grid, prostě nic úchvatného.

Pokud ve svém projektu používáte CSS framework jako [Bootstrap](https://getbootstrap.com/) nebo [Foundation](https://get.foundation/), pak jsou šance, že již obsahují grid systém opravdu vysoké. V tomto případě bych vám doporučil, abyste jej využili, abyste se zbavili další závislosti.

Pokud nejste vázáni na konkrétní grid systém, budete rádi, že tu jsou dva prvotřídní Sass grid enginy: [Susy](https://www.oddbird.net/susy/) a [Singularity](https://github.com/at-import/Singularity). Oba dělají trochu více, než budete kdy potřebovat, takže si můžete vybrat ten, který preferujete více a buďte si jisti, že všechny vaše krajní případy &mdash; dokonce i ty nejzáludnější &mdash; budou pokryty. Pokud se ptáte mě, Susy má o něco lepší komunitu, ale to je jen můj názor.

Nebo můžete jít do něčeho trochu více formálního, jako [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). Ať už si vyberete jak si vyberete, volba nebude mít na váš styl kódování téměř žádný dopad, takže je to jen na vás.

**Další četba:**

* [Susy](https://www.oddbird.net/susy/)
* [Build Web Layouts Easily with Susy](https://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](https://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](https://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap’s Grid System vs Susy: a Comparison](https://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](https://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](https://www.sitepoint.com/creative-grid-system-sass-calc/)

### SCSS-lint

Lintování kódu je velmi důležité. Obvykle dodržování pravidel z příručky pomáhá redukovat množství kódu, které snižuje kvalitu, ale nikdo není dokonalí a vždy jsou věci, které se dají vylepšit. Dá se říci, že lintování kódu je stejně tak důležité, jako komentování.

[SCSS-lint](https://github.com/causes/scss-lint) je nástroj, který vám pomáhá udržovat SCSS soubory čisté a čitelné. Je plně přizpůsobitelný a jednoduchý na začlenění do vlastních nástrojů.

SCSS-lint doporučení jsou naštěstí velmi podobné k těm, které jsou popsány v tomto dokumentu. Chcete-li konfigurovat SCSS-link podle Sass Guidelines, doporučuji vám toto nastavení:

{% include snippets/tools/01/index.html %}

<div class="note">
  <p>Pokud chcete SCSS lint začlenit do vašeho Grunt build procesu, budete rádi vědět, že pro to existuje Grunt plugin, který se nazývá <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Stejně tak pokud hledáte elegantní aplikace, které pracují s SCSS-lintem a tak podobně, lidé z <a href="https://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat…) pracují na <a href="https://houndci.com/">Hound</a>.</p>
</div>

**Další četba:**

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](https://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](https://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](https://davidtheclark.com/scss-lint-styleguide/)
