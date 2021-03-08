
## Varování a chyby

Pokud bych měl vybrat jednu funkci, která je často Sass vývojáři přehlížena, je to nepochybně možnost dynamického výstupu chyb a varování. Sass obsahuje tři vlastní direktivy pro výpis obsahu ve standardním výstupu systému (CLI, kompilování applikace…), což může být pro někoho překvapením.

* `@debug`;
* `@warn`;
* `@error`.

Pojďme dát `@debug` stranou, protože je jasně určená pro ladění SassScriptu, což nás teď nezajímá. Zbyly nám tedy `@warn` a `@error`, které jsou shodné až na to, že jedna zastavuje kompilátor, zatímco druhá ne. Schválně hádejte, která je která.

V Sass projektu je nespočet využití pro varování a chyby. V podstatě každý mixin nebo funkce očekávající specifický typ argumentu může vyhazovat chyby, pokud se něco pokazí, nebo zobrazit varování, pokud je pro chybu předpoklad.

**Další četba:**

* [An Introduction To Error Handling](https://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](https://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/KittyGiraudel/SassyLogger)

### Varování

Vezměte si tuto funkci z [Sass-MQ](https://github.com/sass-mq/sass-mq), která se pokouší převést `px` hodnotu na `em` hodnotu, například:

{% include snippets/errors/01/index.html %}

Pokud je hodnota bezjednotková, funkce předpokládá, že je hodnota vyjádřena pixely. Na tomto místě může být předpoklad riskantní, a proto by měl být uživatel varován, že software provedl něco, co by mohlo být považováno za neočekávané.

### Chyby

Chyby, oproti varováním, zabraňují kompilátoru běžet dále. V podstatě zastaví kompilaci a zobrazí zprávu ve výstupním proudu, stejně jako trasování zásobníku, což je užitečné pro debugování. Kvůli tomu by chyby měly vyhodit výjimku, pokud není žádná možnost jak program udržet v chodu. Pokud je to možné, snažte se s problémem pracovat a namísto toho zobrazit varování.

Například pojďme říci, že vytváříte getter funkci pro přístup k hodnotám ze specifické mapy. Můžete vyhodit error, pokud v mapě není požadovaný klíč.

{% include snippets/errors/02/index.html %}
