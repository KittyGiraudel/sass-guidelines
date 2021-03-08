
## Responzivní Web Design a breakpointy

Nemyslím si, že je Responzivní Web Design stále nutné představovat, když je to nyní snad všude. Každopádně se můžete ptát *proč je sekce o RWD v Sass manuálu?* Ve skutečnosti existuje pár věcí, které mohou být udělány tak, aby se s breakpointy pracovalo jednodušeji, takže myslím, že by nebyl špatný nápad je tady uvést.

### Naming breakpoints

Myslím si, že mohu bez problému říci, že media queries by neměla být vázána na specifické zařízení. Například pokoušet se mířit přímo na iPady nebo Blackberry telefony je určitě špatný nápad. Media queries by se měla starat o různé velikosti obrazovky, dokud se design nerozboří a nenastoupí další media query.

Ze stejného důvodu by breakpointy neměly být pojmenovány podle zařízení ale podle něčeho obecnějšího. Hlavně proto, že některé telefony jsou nyní větší než tablety, některé tablety větší než malé počítače atd.

{% include snippets/rwd/01/index.html %}

V tomto bodě naprosto stačí, pokud použijeme jakoukoli jmennou konvenci, která dává smysl a není spjata s konkrétními zařízeními.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>Předešlý příklad používá vnořené mapy pro definování breakpointů, každopádně opravdu záleží jen na vás, jaký druh správy použijete. Můžete se rozhodnout pro textové řetězce, spíše než-li pro vnitřní mapy, kvůli větší pružnosti (tedy <code>'(min-width: 800px)'</code>).</p>
</div>

**Další četba:**

* [Naming Media Queries](https://css-tricks.com/naming-media-queries/)

### Správce breakpointů

Jakmile pojmenujete své breakpointy tak, jak chcete, budete potřebovat najít způsob, jak je používat v media queries. Je mnoho způsobů jak tak učinit, ale musím říci, že nejvíce fandím breakpointové mapě, kterou čtu pomocí getter funkce. Tento způsob je zároveň jednoduchý a efektivní.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Je zřejmé, že je to poměrně zjednodušující řešení pro správu breakpointů. Pokud potřebujete něco tolerantnějšího, doporučuji vám, abyste znovu nevynalézali kolo a použili něco co bylo ověřeno jako efektivní, právě jako <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> nebo <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>

**Další četba:**

* [Managing Responsive Breakpoints in Sass](https://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](https://css-tricks.com/approaches-media-queries-sass/)

### Použití Media Queries

Ne tak dávno probíhala poměrně vzrušující debata o tom, kde by se měla media queries psát: patří do selektorů (jak to umožňuje Sass) nebo by se měly psát striktně mimo ně? Musím uznat, že jsem vášnivým zastáncem systému *media-queries-v-selektorech* a myslím si, že to funguje skvěle s ideou *komponent*.

{% include snippets/rwd/04/index.html %}

Což vede k následujícímu CSS výstupu:

{% include snippets/rwd/05/index.html %}

Mohli jste slyšet, že tato konvence vede k duplikování media queries v CSS výstupu. A je to rozhodně pravda. I když byl udělán test a finální verdikt je, že na tom nezáleží jakmile Gzip (nebo něco podobného) dokončí svou věc:

> … probírali jsme, zda existují problémy s výkonem v porovnání kombinování vs rozházení Media Queries a dospěli jsme k závěru, že v nejhorším případě sice ano, ale v nejlepším případě v podstatě vůbec ne. <br>
> &mdash; [Sam Richards](https://twitter.com/snugug), ohledně [Breakpoint](http://breakpoint-sass.com/)

Pokud máte obavu ohledně duplicitních media queries, pořád můžete použít nástroj, který je spojí k sobě, jako například [tento gem](https://github.com/aaronjensen/sass-media_query_combiner), každopádně vás musím varovat, že pokud přesunete CSS někam jinam, může to mít negativní účinky. Nikdy nevíte, jestli je pořadí důležité.

**Další četba:**

* [Inline or Combined Media queries? Fight!](https://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
