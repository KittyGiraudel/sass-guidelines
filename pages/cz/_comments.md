
## Komentování

CSS je ošemetný jazyk plný hacků a podivností. Díky tomu by měl být hodně komentován, zvláště pokud vy nebo někdo jiný zamýšlíte číst a upravovat kód za 6 měsíců nebo rok. Nenechte se, nebo někoho jiného, dostat do pozice *Já-jsem-tohle-pane-bože-nenapsal*.

I přesto, že se CSS může zdát jednoduché, je mnoho situací, kdy může komentář hodně vysvětlit. Mohou vysvětlit takové věci jako:

* struktura a/nebo smysl souboru;
* cíl pravidla;
* smysl za magickým číslem;
* důvod pro CSS deklaraci;
* pořádek CSS deklarací;
* myšlenkový proces za způsobem dělání věcí.

A pravděpodobně jsem ještě zapomněl mnoho dalších důvodů. Komentování zabere málo času, když se dělá plynule při psaní kódu, takže jej dělejte ve správný čas. Vracet se zpátky okomentovat kus kódu není nejen zcela nereálné, ale je to zároveň příšerně otravné.

### Psaní komentářů

Nejlepší je, když *každé* CSS pravidlo předchází předchází komentář ve stylu jazyka C, který vysvětluje smysl CSS bloku. Tento komentář může také obsahuje očíslované vysvětlení pro specifické části pravidel. Například:

{% include snippets/comments/01/index.html %}

V podstatě všechno co není zřejmé na první pohled, by mělo být okomentováno. Není tu nic takového jako přiliš mnoho dokumentace. Pamatujte, že nemůžete *komentovat zas tak mnoho*, takže nažhavte klávesy a pište komentáře pro všechno, co za to stojí.

Pokud komentujete Sass specifickou sekci, použijte Sass řádkové komentáře namísto blokových komentářů ve stylu jazyka C. To zapříčiní, že se komentář nezobrazí ve výstupu, dokonce i v expanded módu během vývoje.

{% include snippets/comments/02/index.html %}

**Další četba:**

* [CSS Guidelines’ Commenting section](https://cssguidelin.es/#commenting)

### Dokumentace

Každá proměnná, funkce, mixin a placeholder, která je zamýšlena býti znovupoužitelná v codebase by měla být dokumentována jako část globálního API využívající [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Jsou vyžadovány tři lomítka (<code>/</code>).</p>
</div>

SassDoc má dvě hlavní role:

* vynutit standardizované komentáře využívající systému založeném na anotacích pro všechno, co je součástí veřejného nebo privátního API;
* být schopný generovat HTML verze API dokumentace za použití některého ze SassDoc koncového bodu (CLI tool, Grunt, Gulp, Broccoli, Node…).

{% include images/sassdoc.html %}

Zde je příklad rozsáhle dokumentovaného mixinu se SassDoc:

{% include snippets/comments/04/index.html %}

**Další četba:**

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](https://www.sitepoint.com/sassdoc-documentation-tool-sass/)
