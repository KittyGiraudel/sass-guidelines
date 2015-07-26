
# Responzivní Web Design a breakpointy

Nemyslím si, že je Responzivní Web Design stále nutné představovat, když je to nyní všude. Každopádně se můžete ptát *proč je tu sekce o RWD v Sass manuálu?* Ve skutečnosti existuje pár věcí, které mohou být udělány tak, aby se s breakpointy pracovalo jednodušeji, takže myslím, že by nebyl špatný nápad je tady uvést.

## Naming breakpoints

Myslím si, že mohu bezproblému říc, že mediq queries by neměla být vázána na specifické zařízení. Například pokoušit se mířit přímo na iPady nebo Blackberry telefony je určitě špatný nápad. Mediq queries by se měla starat o různé velikosti obrazovky, dokud se design nerozboří a nenastoupí další media query.

Ze stejného důvodu by breakpointy neměly být pojmenovány podle zařízení ale podle něčeho obecnějšího. Hlavně proto, že některé telefony jsou nyní větší než tablety, některé tablety větší než malé počítače atd.

{% include snippets/rwd/01/index.html %}

V tomto bodě naprosto stačí, pokud použijeme jakoukoli jmennou konvenci, která dává smysl a není spjata s konkrétními zařízeními.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>Předešlý příklad používá vnořené mapy pro definování breakpointů, každopádně opravdu záleží jen na vás, jaký druh správy použijete. Můžete se rozhodnout pro stringy spíše pro vnitřní mapy pro větší pružnost (tedy <code>'(min-width: 800px)'</code>).</p>
</div>

###### Další četba

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)

## Breakpoint manager

Jakmile pojmenujete své breakpointy tak jak chcete, budete potřebovat způsob, jak je používat v media queries. Je mnoho způsobů jak tak učinit, ale musím říci, že nejvíce fandím breakpointové mapě, kterou čtu pomocí getter funkce. Tento způsob je zároveň jednoduchý a efektivní.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Je zřejmé, že je poměrně zjednodušující řešení pro správu breakpointů. Pokud potřebujete něco tolerantnějšího, doporučuji vám, abyste znovu nevynalézali kolo a použili něco co bylo ověřeno jako efektivní, právě jako <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> nebo <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>

###### Další četba

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)

## Použití Media Queries

Ne tak dávno probíhala poměrně vžrušující debata o tom, kde by se měla media queries psát: patří do selektorů (jak to umožňuje Sass) nebo by se měly psát striktně mimo ně? Musím uznat, že jsem vášnivým zastáncem systému *media-queries-v-selektorech* a myslím si, že to funguje skvěle s ideou *komponent*.

{% include snippets/rwd/04/index.html %}

Což vede k následujícímu CSS výstupu:

{% include snippets/rwd/05/index.html %}

Mohli jste slyšet, že tato konvence vede k duplikování media queries v CSS výstupu. A je to rozhodně pravda. Ikdyž [byl udělán test](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) a finální verdikt je, že na tom nezáleží jakmile Gzip (nebo něco podobného) dokončí svou věc:

> … probírali jsme, zda existují problémy s výkonem v porovnání kombinování vs rozházení Media Queries a dospěli jsme k závěru, že v nejhorším případě sice ano, ale v nejlepším případě v podsatatě vůbec ne. <br> 
> &mdash; [Sam Richards](https://twitter.com/snugug), ohledně [Breakpoint](http://breakpoint-sass.com/)

Pokud máte obavu ohledně duplicitních media queries, pořád můžete použít nástroj, který je spojí k sobě, jako například [tento gem](https://github.com/aaronjensen/sass-media_query_combiner), kažopádně vás musím varovat, že pokud přesunece CSS někam jinam, může to mít negativní účinky. Nikdy nevíte, jestli je pořadí důležité.

###### Další četba

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
