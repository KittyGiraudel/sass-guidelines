
## Syntaxe & formátování

Pokud byste se mě zeptali, co je první věc, kterou by každá příručka měla obsahovat, bylo by to jak má kód vypadat.

Když se několik vývojářů zapojí do psaní CSS ve stejném projektu, je jen otázkou času, než si jeden z nich začne dělat věci po svém. Manuály pro kód, které podporují konzistenci nejen že tomuto zabraňují, ale také pomáhají pokud jde o čtení a aktualizaci kódu.

Tady je zhruba to, co chceme (beze studu inspirováno [CSS Guidelines](https://cssguidelin.es/#syntax-and-formatting)):

* dvě (2) mezery odsazení, žádné tabulátory;
* ideálně, 80 znaků na řádek;
* správně psané víceřádkové CSS pravidla;
* smysluplné použití mezer.

{% include snippets/syntax/01/index.html %}

V této části nebudeme řešit organizaci souboru. Je to předmětem [jiné sekce](#architektura).

### Textové řetězce

Věřte nebo ne, řetězce hrají docela důležitou roli jak v CSS, tak i Sass ekosystémech. Většina CSS hodnod jsou buď délky nebo řetězce (většinou bez uvozovek), takže je docela zásadní držet se nějakého manuálu, pro vypořádávání se s řetězci v Sass.

#### Kódování

Aby se zabránilo možným problémům s kódováním znaků, je vysoce doporučeno nastavit kódování [UTF-8](https://en.wikipedia.org/wiki/UTF-8) v [hlavním souboru se styly](#hlavn-soubor) použitím `@charset` direktivy. Ujistěte se, že je kódování nastaveno hned na prvním místě ve stylech a není před ním žádný znak.

{% include snippets/syntax/02/index.html %}

#### Uvozovky

CSS nevyžaduje, aby byly řetězce obaleny uvozovkami, a to ani pokud obsahují mezery. Vezměte si například font-family názvy: CSS parseru nezáleží, jestli je zabalíte do uvozovek.

A právě proto *ani* Sass nevyžaduje, aby byly řetězce zabaleny uvozovkami. A ještě lépe (a *naštěstí*, což určitě poznáte), řetězec s uvozovkami je striktně rovnocený k dvojčeti bez uvozovek (tedy například `'abc'` je striktně rovnocenný s `abc`).

Jak již bylo řečeno, jazyky, které nevyžadují, aby byly řetězce obaleny uvozovkami jsou jasnou menšinou a proto **by měly být řetězce v Sassu vždy zabaleny v jednoduchých uvozovkách** (`'`) (jednoduché uvozovky bývají snadnější na napsaní než-li dvojité na *qwerty* klávesnicích). Kromě souladu s ostatními jazyky, včetně CSS bratrance JavaScriptu, je několik důvodů pro tuto volbu:

* jména barev jsou považovány za barvy, pokud jsou bez uvozovek, což může vést k vážným problémům;
* většina zvýrazňovačů syntaxe bude řetězce bez uvozovek považovat za chybu;
* napomáhá obecné čitelnosti;
* není žádný důvod proč řetězce neobalovat uvozovkami.

{% include snippets/syntax/03/index.html %}

#### Textové řetězce jako CSS hodnoty

Specifické CSS hodnoty jako `initial` nebo `sans-serif` vyžadují, aby nebyly v uvozovkách. Deklarace jako `font-family: 'sans-serif'` tiše selže, protože CSS očekává identifikátor, ne řetězec s uvozovkami. Z toho důvodu nepoužíváme uvozovky na tyto hodnoty.

{% include snippets/syntax/04/index.html %}

Proto můžeme rozlišovat mezi řetězci, které mají být použiti jako CSS hodnoty (CSS identifikátory) jako v předchozím případě a řetězci, které se drží Sass datového typu, jako například klíče mapy.

Nepoužíváme uvozovky v prvním případně, ale v druhém případě využíváme jednoduchých uvozovek.

#### Textové řetězce obsahující uvozovky

Pokud řetězec obsahuje jednu nebo více jednoduchých uvozovek, může se řetězec namísto toho zabalit dvojitými uvozovkami (`"`), aby se zabránilo úniku znaků z řetězce.

{% include snippets/syntax/05/index.html %}

#### URL

URL by měly být také zabaleny v uvozovkách ze stejných důvodů jako je výše:

{% include snippets/syntax/06/index.html %}

**Další četba:**

* [All You Ever Need to Know About Sass Interpolation](https://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/KittyGiraudel/SassyStrings)

### Čísla

V Sassu je číslo datový typ, včetně všeho od bezjednotkových čísel po délky, trvání, frekvence, úhly a tak dále. To umožňuje spustit výpočty na těchto opatřeních.

#### Nuly

Čísla by měla zobrazovat nulu před tečkou pro hodnoty menší než jedna. Nikdy nezobrazujte koncové nuly.

{% include snippets/syntax/07/index.html %}

#### Jednotky

Pokud se zaměříme na jednotky, `0` by nikdy neměla mít definovanou jednotku.

{% include snippets/syntax/08/index.html %}

Nejčastější chybou, která mě napadne v souvislosti s čísly v Sassu, je ta, že jednotky jsou jen nějaké textové řetězce, které mohou být bezpečně dosazeny k číslu. I když to je pravda, určitě to není jak jednotky fungují. Představte si jednotky jako algebraické symboly. Například v reálném světě, násobení 5 centimetrů 5 centimetry vám dá 25 centimetrů čtverečních. Stejná logika platí i pro Sass.

Pro přidání jednotky k číslu musíte číslo vynásobit *1 jednotkou*.

{% include snippets/syntax/09/index.html %}

Všimněte si, že *0 členů té jednotky* také funguje, ale já bych vám raději doporučoval zmíněnou metodu, jelikož přidáním *0 jednotky* může být tak trochu matoucí. Avšak pokud se budete snažit převést číslo do jiné kompatibilní jednotky, přidání 0 na to nebude stačit.

{% include snippets/syntax/10/index.html %}

Nakonec to všechny závisí na tom, čeho se snažíte dosáhnout. Jenom mějte na paměti, že přidáním jednotky v řetězci není dobrou cestou jak to dělat.

Pro odstranění jednotky z hodnoty ji musíte vydělit *jednou jednotkou svého druhu*.

{% include snippets/syntax/11/index.html %}

Připojením jednotky v řetězci k číslu vznikne řetězec, který zamezí jakýmkoli dalším operacím na hodnotě. Krajení numerické části čísla jednotkou také vyústí v řetězec. A to není to, co chcete.

#### Výpočty

**Numerické výpočty na nejvyšší úrovni by měly být vždy zabaleny v závorkách**. Nejen, že tento požadavek výrazně zlěpší čitelnost, ale také zabrání některým krajním případům tím, že nutí Sass vyhodnotit obsah závorek.

{% include snippets/syntax/12/index.html %}

#### Magická čísla

"Magická čísla" je [old school programovací](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) termín pro *nepojmenované matematické konstanty*. V podstatě to je jen náhodné číslo, které *prostě funguje*™ a zatím není vázáno na žádné logické vysvětlení.

Netřeba snad ani dodávat, že **magická čísla jsou mor a mělo by se jim vyhýbat za jakoukoli cenu**. Pokud nemůžete najít rozumné vysvětlení, proč číslo funguje, přidejte rozsáhlý komentář vysvětlující jak jste se tam dostali a proč si myslíte, že to funguje. Přiznáním se, že nevíte proč něco funguje je stále více užitečné pro dalšího vývojáře, než aby sám musel přijít na to co se děje on nuly.

{% include snippets/syntax/13/index.html %}

**Další četba:**

* [Use Lengths, Not Strings](https://kittygiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](https://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](https://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)

### Barvy

Barvy zaujímají v CSS jazyce důležité místo. Jako obvykle, Sass je nakonec cenným spojencem když přijde na řadu manipulace s barvami, především proto, jelikož obsahuje [mocné funkce](https://sass-lang.com/documentation/Sass/Script/Functions.html).

#### Formáty barev

Aby byly barvy tak jednoduché, jak jen mohou být, moje rada je respektovat následující pořadí formátů barev:

1. [CSS klíčová slova pro barvy](https://www.w3.org/TR/css3-color/#svg-color);
1. [HSL notace](https://cs.wikipedia.org/wiki/HSV);
1. [RGB notace](https://cs.wikipedia.org/wiki/RGB);
1. Hexadecimální notace. Přednostně malá písmena a zkrácené kde je jen možné.

Pro začátek, klíčová slova často mluví sami za sebe. HSL reprezentace je nejen ta nejjednodušší pro lidský mozek na pochopení <sup>[citation needed]</sup>, ale také ulehčuje autorům stylu vyladit barvu úpravou odstínu, sytosti a světlosti individuálně. RGB má stále tu výhodu, že hned vidíte, jestli má barva více modré, zelené, nebo červené, ale to neznamená, že je vytvoření barvy ze tří částí jednoduché. Poslední, hexadecimální, je pro lidskou mysl skoro nečitelný.

{% include snippets/syntax/14/index.html %}

Při používání HSL nebo RGB notace vždy přidejte jednu mezeru po čárce (`,`), ale nepřidávejte žádnou mezeru mezi závorkami (`(`, `)`) a obsahem.

{% include snippets/syntax/15/index.html %}

#### Barvy a proměnné

Pokud barvu používáte více než jednou, uložte jí do proměnné se smysluplným názvem reprezentující barvu.

{% include snippets/syntax/16/index.html %}

Odteď budete moci používat tuto proměnnou kdekoliv chcete. Pokud je však vaše proměnná velmi svázaná s tématem, radil bych, abyste ji nepoužívali tak, jak je. Namísto toho ji uložte v jiné proměnné se jménem vysvětlující, jak by se měla používat.

{% include snippets/syntax/17/index.html %}

Tímto zabráníte problémům vyplývajících ze změny tématu jako `$sass-pink: blue`.

#### Zesvětlení a ztmavení barev

Obě, [`lighten`](https://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) a [`darken`](https://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) funkce manipulují ze světlostí barvy v HSL formátu přidáním nebo odebráním světlosti. V podstatě nejsou ničím jiným než jen alias pro `$lightness` parametr [`adjust-color`](https://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) funkce.

Věc se má tak, že tyto funkce často neprovádí očekávaný výsledek. Na druhou stranu [`mix`](https://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) funkce je pěkná cesta, jak zesvětlit nebo ztmavit barvu namícháním s `white` nebo `black`.

Výhoda ve využívání `mix` spíše než jednu z těch dvou funkcí shora je, že postupně půjde do černé (nebo bílé), jak budete snižovat poměr barvy, zatímco `darken` a `lighten` rychle sfouknou barvu do černé nebo bílé.

{% include images/color-functions.html %}

Pokud nechcete pokaždé psát `mix` funkci, můžete vytvořit dvě jednoduché funkce `tint` a `shade` (které jsou také částí [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) aby dělaly tu stejnou věc:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>Funkce <a href="https://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> je navržena tak, že škáluje vlastnosti více plynule tím, že vezme v úvahu, jak vysoké nebo nízké již jsou. To by mělo poskytnou výsledky, které jsou hezké jako <code>mix</code>, ale s jasnější konvencí pro volání. Měřítko přesně totéž.</p>
</div>

**Další četba:**

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](https://kittygiraudel.com/2014/01/30/programmatically-go-from-one-color-to-another-with-sass/)
* [Sass Color Variables That Don’t Suck](https://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](https://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](https://www.sitepoint.com/dealing-color-schemes-sass/)

### Seznamy

Seznamy jsou Sass verzí polí. Seznam má strukturu jednorozměrného pole (na rozdíl od [mapy](#mapy)), které jsou navrženy tak, aby mohly obsahovat hodnoty jakéhokoli typu (včetně listů, což vede k vnořeným seznamům).

Seznamy by měly být tvořeny podle následujícího manuálu:

* buď je jednořádkový nebo víceřádkový;
* pokud je příliš dlouhý, aby se vešel na 80 znaků, musí být víceřádkový;
* pokud není používaný pro účely CSS, vždy se položky rozdělují čárkami;
* vždy musí být zabalený v závorkách;
* koncová čárka se přidává pokud je víceřádkový, pokud je jednořádkový, tak ne.

{% include snippets/syntax/19/index.html %}

Pokud přidáváte nové položky do seznamu, vždy používejte dodávané API. Nepokoušejte se přidávat položky manuálně.

{% include snippets/syntax/20/index.html %}

**Další četba:**

* [Understanding Sass lists](https://kittygiraudel.com/2013/07/15/understanding-sass-lists/)
* [SassyLists](https://at-import.github.io/SassyLists/)

### Mapy

Již od Sassu 3.3 mohou autoři definovat mapy &mdash; což je Sass termín pro asociativní pole, hashe, nebo dokonce JavaScript objekty. Mapa je datová struktura, která mapuje klíče (což mohou být jakékoli datové typy, včetně map, což bych ale nedoporučoval) k hodnotám jakéhokoli datového typu.

Mapy by se měly psát tak, jako je popsáno níže:

* mezera za dvojtečkou (`:`);
* otevírací závorka (`(`) na stejném řádku jako dvojtečka (`:`);
* pokud je klíč textový řetězec, pak by měl být **v uvozovkách** (což je 99% případů);
* každý pár klíč/hodnota na svém vlastním řádku;
* čárka (`,`) na konci každého páru klíč/hodnota;
* **koncová čárka** (`,`) by měla být i na konci poslední položky, pro snadnější přidávání, odstraňování, nebo změnu pořadí položek;
* uzavírací závorka (`)`) na novém řádku;
* žádná mezera nebo nový řádek mezi uzavírací závorkou (`)`) a středníkem (`;`).

Ilustrace:

{% include snippets/syntax/21/index.html %}

#### Debugování Sass map

Pokud se někdy ocitnete ztraceni, nebo budete přemýšlet, co za šílenou magii se právě v Sass mapě děje, pak se nebojte, protože je tu stále možnost záchrany.

{% include snippets/syntax/22/index.html %}

Pokud jste zvědavi, do jaké hloubky vaše mapa sahá, přidejte následující funkci. Mixin ji zobrazí automaticky.

{% include snippets/syntax/23/index.html %}

**Další četba:**

* [Using Sass Maps](https://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](https://www.sitepoint.com/debugging-sass-maps/)
* [Extra Map functions in Sass](https://www.sitepoint.com/extra-map-functions-sass/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](https://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)

### CSS pravidla

V tuto chvíli zde uvedu, co většina asi ví, jak by měly být CSS pravidla psány (nebo alespoň jak je nejvíce uvedeno v manuálech, včetně [CSS Guidelines](https://cssguidelin.es/#anatomy-of-a-ruleset)):

* související selektory na stejném řádku; nesouvisející na nových řádcích;
* otevírací závorka (`{`) oddělena jednou mezerou od posledního selektoru;
* každá deklarace na svém vlastním řádku;
* mezera za středníkem (`:`);
* uzavírací středník (`;`) na konci každé deklarace;
* uzavírací závorka (`}`) na svém vlastním novém řádku;
* nový řádek po uzavírací závorce `}`.

Ilustrace:

{% include snippets/syntax/24/index.html %}

Přidáním těchto pokynů k CSS budeme dávat pozor na toto:

* deklarovat lokální proměnné před jakoukoli deklarací, potom oddělit of deklarace novým řádkem;
* volání mixinů bez `@content` před jakoukoli deklarací;
* vnořené selektory vždy po novém řádku;
* volání mixinů s `@content` po vnořených selektorech;
* žádný řádek před zavírací závorkou (`}`).

Ilustrace:

{% include snippets/syntax/25/index.html %}

**Další četba:**

* [Anatomy of a Ruleset](https://cssguidelin.es/#anatomy-of-a-ruleset)

### Řazení deklarace

Nenapadá mě snad žádné jiné téma, kde jsou názory tak rozdělené jako právě v řazení CSS deklarací. Konkrétně se dělí na dvě frakce:

* držet se abecedního pořadí;
* řadit deklarace dle typu (pozice, zobrazení, barvy, písmo, a další…).

V obou případech najdete výhody i nevýhody. Na jednu stranu je abecení pořadí univerzální (alespoň pro jazyky, které používají latinku), takže nemůže nastat situace, kdy se budete muset rozhodnout, jestli toto bude před tím, nebo ne. Každopádně vidět `bottom` a `top` od sebe je tak trochu divné. Proč by měly animace být před typem zobrazení? S abecedním pořadí existuje dost zvláštností.

{% include snippets/syntax/26/index.html %}

Na druhou stranu, řazení vlastností podle typu dává perfektní smysl. Každá deklarace okolo písma je u sebe, `top` a `bottom` jsou znovu u sebe a číst pravidla je jako číst krátký příběh. Ale dokud nezačnete používat nějaké konvence jako [Idiomatic CSS](https://github.com/necolas/idiomatic-css), je tu spoustu možností jak danou věc udělat. Kde by se měla řadit `white-space`? Do písma, nebo zobrazení? Kam přesně patří `overflow`? Jaké je pořadí vlastností v dané skupině (mělo by to být abecedně, jaká to ironie)?

{% include snippets/syntax/27/index.html %}

Je tu také další zajímavý způsob řazení nazývaný [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), což vypadá, že je také populární. Concentric CSS pro určení pořadí v podstatě spoléhá na box-model.

{% include snippets/syntax/28/index.html %}

Musím říci, že se sám nemohu rozhodnout. [Nedávný průzkum na CSS-Tricks](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) zjistil, že přes 45% vývojářů řadí své deklarace podle typu a oproti tomu 14% abecedně. Ale je tu také 39%, kteří vše řadí náhodně, včetně mě.

{% include images/order-poll.html %}

Právě proto nebudu do příručky dávat doporučení na výběr. Vyberte si tu, kterou preferujete vy, jen buďte ve všech stylech konzistentní (tedy žádná *náhodná* možnost).

<div class="note">
  <p><a href="https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">Nedávná studie</a> ukazuje, že používání <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (což používá <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">řazení podle typu</a>) pro řazení CSS deklarací končí s zkrácením průměrné velikosti pod Gzip kompresí o 2,7%, v porovnání 1,3% když je řazení podle abecedy.</p>
</div>

**Další četba:**

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](https://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

### Noření selektorů

Jedna konkrétní funkce Sass, která je až příliš zneužívána spoustou vývojářů je **noření selektorů**. Noření selektorů nabízí způsob, jak se autoři stylů mohou vypořádat s dlouhými selektory vnořováním menších v dalších.

#### Obecné pravidlo

Například následující vnořování v Sass:

{% include snippets/syntax/29/index.html %}

… vygeneruje toto CSS:

{% include snippets/syntax/30/index.html %}

Ve stejném duchu, od Sass 3.3, je možné použít referenci na aktuální selektor (`&`) ke generování rozšířených selektorů. Například:

{% include snippets/syntax/31/index.html %}

… vygeneruje toto CSS:

{% include snippets/syntax/32/index.html %}

Tento způsob se často používá spolu s [BEM jmennou konvencí](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) pro generování `.block__element` a `.block--modifier` selektorů založených na originálním selektoru (tedy v tomto případě `.block`).

<div class="note">
  <p>Ačkoliv je to možná neoficiální, generování nových selektorů z reference aktuálního selektoru (<code>&</code>) dělá tyto selektory nedosažitelné v codebase, protože samy o sobě neexistují.</p>
</div>

Problém s vnořenými selektory je ten, že je v konečném důsledku dělá hůře čitelné. Každý si pak musí v hlavně domyslet výsledný selektor z úrovně odsazení, což není vždy až tak jasné, jak se může zdát.

Toto tvrzení se stává skutečnější čím dál tím více, čím je aktuální selektor (`&`) četnější. Od nějakého bodu je také čím dál tím větší riziko, že nikdo nepochopí, co se děje, že to za to ani nestojí.

Abyste se takovýmto situacím vyhnuli, **vyhýbejte se vnořeným selektorům jak jen to jde**. Každopádně pro toto pravidlo je samozřejmě pár výjimek.

#### Výjimky

Pro začátek, je dovoleno a dokonce doporučeno nořit pseudo třídy a pseudo elementy do původního selektoru.

{% include snippets/syntax/33/index.html %}

Používání noření pro pseudo třídy a pseudo selektory nejenom že dává smysl (protože se vypořádává s úzce souvisejícími selektory), ale také pomáhá udržet všechno o komponentě na jednom místě.

Také když používáte třídy, které určují pravdivost, jako například `.is-active`, je naprosto v pořádku vnořit ji do selektoru komponenty, abyste zachovali věci v pořádku.

{% include snippets/syntax/34/index.html %}

V neposlední řadě, když stylujete element protože musí být obsažen v nějakém specifickém elementu, je často fajn použít noření k udržení všeho o komponentě na stejném místě.

{% include snippets/syntax/35/index.html %}

Když pracujete s nezkušenými vývojáři, selektor jako `.no-opacity &` může vypadat tak trochu divně. Abyste zabránili jakýmkoli rozpakům, můžete udělat velmi krátký mixin, který přemění tuto divnou syntaxi na výslovné API.

{% include snippets/syntax/36/index.html %}

Přepsáním předešlého příkladu by to vypadalo asi takto:

{% include snippets/syntax/37/index.html %}

Jako asi se vším, specifika jsou poněkud nedůležitá, důležitá je konzistence. Pokud noření plně důvěřujete, klidně noření používejte. Jenom se ujistěte, že to nikomu z vašeho týmu nevadí.

**Další četba:**

* [Beware of Selector Nesting](https://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](https://thesassway.herokuapp.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](https://thesassway.herokuapp.com/intermediate/avoid-nested-selectors-for-more-modular-css)
