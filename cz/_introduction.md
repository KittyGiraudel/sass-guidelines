
# Úvod

## Proč mít příručku

Příručka není jenom bezvýznamný dokument na bezduché přečtení, nebo představení ideálního stavu pro váš kód. Je to klíčový dokument projektu, který popisuje, jak a proč psát kód. Pro malé projekty se může zdát spíše jako zbytečnost, ale opravdu dost pomáhá udržovat codebase čistou a jednoduše upravitelnou.

Netřeba ani říkat, že čím více vývojářů je zapojeno v projektu, tím více je manuál pro psaní kódu dost potřebný. Stejně tak čím větší je projekt, tím více je manuál potřeba.

Důležitost dobře uvádní [Harry Roberts](http://csswizardry.com) v jeho [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Příručka pro psaní kódu (poznámka, nikoli ve vizuálním stylu) je hodnotným nástrojem pro týmy, které:</p>
  <ul>
    <li>budovat a udržovat produkty pro přimeřenou dobu;</li>
    <li>mít vývojáře různých schopností a specializací;</li>
    <li>mít několik vývojářů pracujících na produktu v jakýkoli daný čas;</li>
    <li>přijímat pravidelně nové zaměstnance;</li>
    <li>mít několik codebases, do kterých vývojáři mohou zasahovat sem a tam.</li>
  </ul>
</blockquote>

## Podmínky odpovědnosti

Zaprvé: **toto není CSS příručka**. Tento dokument nebude probírat jmenné konvence pro CSS třídy, modulárních vzorů a otázku problematiky ID v CSS. Tato příručka se zabývá pouze otázkami spojenými se Sass.

Tato příručka je také mojí vlastní a proto je **velmi tvrdohlavá**. Berte to jako sbírku metodik a rad, které jsem vykoumal v průběhu let. Díky tomu vás mohu také nasměřovat na užitečnou hrstku zdrojů, takže se určitě dívejte na *další četbu*.

Samozřejmě to není jediná možnost jak dělat věci a hodně může záležet na vašem projektu. Klidně si vyberte a upravte si vše podle vašich potřeb. Jak říkáme, *záleží na vkusu* 

## Klíčové principy

Nazávěr toho všeho, pokud tu je jediná věc, kterou bych vám rád předal z celé této příručky, je to to, že **Sass by měl zůstat jednoduchý jak jen to je možné**.

Díky mým pošetilým experimentům jako [bitový operátor](https://github.com/HugoGiraudel/SassyBitwise), [iterátory a generátory](https://github.com/HugoGiraudel/SassyIteratorsGenerators) a [JSON parser](https://github.com/HugoGiraudel/SassyJSON) v Sasu, jsme si všichni vědomi, co se dá dělat s takovýmto preprocesorem.

Zatímco je CSS jednoduchý jazyk, Sass, kterým se má psát CSS, by neměl být o nic moc složitější než obyčejné CSS.

Meanwhile, CSS is a simple language. Sass, being intended to write CSS, should not get much more complex than regular CSS. Hlavní roli zde hraje [princip KISS](https://cs.wikipedia.org/wiki/KISS) (Keep It Simple Stupid), který může mít v některých případech dokonce přednost před [principem DRY](https://cs.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself).

Někdy se je lepší trochu opakovat tak, aby se kód dobře upravoval, spíše než vybudovat těžký, nemotorný a zbytečně složitý systém, který se nebude dát udržovat, kvůli jeho komplexnosti.

Stejně tak, a znovu budu citovat [Harryho Robertse](https://csswizardry.com), **pragmatismus přebíjí dokonalost**. V nějakém momentu se pravděpodobně načapete, když budete dělat něco co se příčí pravidlům. Pokud to dává smysl a pokud to zní dobře, dělejte to. Kodex je jen prostředkem, nikoli cílem.

###### Další četba

* [princip KISS](https://cs.wikipedia.org/wiki/KISS)
* [princip DRY](https://cs.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)
