
## Mixiny

Mixiny jsou jednou z nejvíce používaných funkcí celého Sassu. Jsou klíčem pro znovupoužitelnost a DRY komponenty. A to z dobrých důvodů: mixiny dovolují autorům definovat styly, které mohou být použity napříč styly bez potřeby využívat nesémantické třídy jako `.float-left`.

Mohou obsahovat všechny CSS pravidla a v podstatě cokoliv, co je dovoleno používat kdekoli jinde v Sassu. Dokonce mohou přijímat argumenty, přesně jako funkce. Netřeba říkat, že možností je nekonečno.

Ale mám pocit, že vás musím varovat před zneužitím moci mixinů. Opět platí, že klíčové slovo je *jednoduchost*. Mohli byste se zlákat vytvořit extrémně mocné mixiny s velkým množstvím logiky. Tomu se říká přeinženýrování a trpí tím většina vývojářů. Nepřeceňujte svůj kód a držte jej především jednoduchý. Pokud skončíte s mixinem, který má více než 20 řádků, nebo tak nějak, pak by měl být rozdělen na menší části nebo zcela přepracován.

### Základy

Jak již bylo řečeno, mixiny jsou extrémně užitečné a měli byste nějaké používat. Pokud je nějaká skupina vlastností, které se z nějakého důvodu zobrazují spolu (a není to tedy náhoda), můžete si je dát do mixinu. Například [micro-clearfix hack od Nicolase Gallaghera](http://nicolasgallagher.com/micro-clearfix-hack/) si zaslouží být vložen do mixinu.

{% include snippets/mixins/01/index.html %}

Dalším příkladem může být mixin pro nastavení velikosti elementu, který bude definovat `with` a `height` ve stejném okamžiku. Nejenom, že by bylo psát kód jednodušší, ale také by se lépe četl.

{% include snippets/mixins/02/index.html %}

**Další četba:**

* [Sass Mixins to Kickstart your Project](https://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](https://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](https://www.sitepoint.com/building-linear-gradient-mixin-sass/)

### Seznam argumentů

Pokud se máte v mixinu utkat s neznámým počtem argumentů, vždy použijte spíše `arglist` než-li seznam. O `arglist` můžete přemýšlet jako o 8. skrytém nezdokumentovaném data typu ze Sassu, který se implicitně používá při průchodu libovolného počtu argumentů mixinu nebo funkce, kde se využívá `...`.

{% include snippets/mixins/03/index.html %}

Nyní, při vytváření mixinu, který akceptuje několik argumentů (tím myslím 3 a více), přemýšlejte dvakrát před jejich spojením do seznamu nebo mapy, jelikož si myslíte, že je bude jednodušší zpracovat, než s jeden po druhém.

Sass je vlastně pěkně chytrý, co se deklarace mixinů a funkcí týče. Tak moc, že vlastně můžete předat seznam nebo mapu jako arglist funckci/mixinu, a ten si to naparsuje jako sérii argumentů.

{% include snippets/mixins/04/index.html %}

**Další četba:**

* [Sass Multiple Arguments, Lists or Arglist](https://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

### Mixiny a vendor prefixy

Mohlo by být lákavé, udělat si vlastní mixin, který vám bude přidávat vendor prefixy pro nepodporovatelné, nebo částečně podporované, CSS vlastnosti. Ale to není to, co chceme. Za prvé, pokud můžete použít [Autoprefixer](https://github.com/postcss/autoprefixer), použijte Autoprefixer. Díky němu nebudete muset v Sassu psát přebyteční kód a ten bude vždy aktuální a vždy udělá lepší práci, než-li vaše prefixující věci.

Bohužel vždy není možné Autoprefixer použít. Pokud používáte [Bourbon](https://bourbon.io/) nebo [Compass](http://compass-style.org/), asi již pravděpodobně víte, že oba mají kolekci mixinů, které se o vendor prefixy starají. Použijte je.

Pokud nemůžete použít Autoprefixer ani Bourbon nebo Compass, pak a jen tehdy můžete použít svůj vlastní mixin, který se s prefixováním CSS vlastností popere. Ale, prosím vás, nedělejte pro každou vlastnost svůj vlastní mixin, který ručně vypíše každý vendor.

{% include snippets/mixins/05/index.html %}

Udělejte to chytře.

{% include snippets/mixins/06/index.html %}

Použití takového mixinu pak bude velmi jednoduché:

{% include snippets/mixins/07/index.html %}

Prosím, vemte na vědomí, že je to velmi špatné řešení. Například se to nemůže vypořádat se složitými polyfily, jako ty, co jsou potřeba pro Flexbox. V tomto případně by bylo použití Autoprefixeru daleko lepší řešení.

**Další četba:**

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](https://www.sitepoint.com/building-linear-gradient-mixin-sass/)
