
## Syntaxis en opmaak

Als u het mij vraagt, is het allereerste dat een stijlgids zou moeten doen, beschrijven hoe we willen dat onze code eruitziet.

Wanneer meerdere ontwikkelaars betrokken zijn bij het schrijven van CSS op dezelfde project(en), is het slechts een kwestie van tijd voordat een van hen de dingen op zijn eigen manier gaat doen. Coderichtlijnen die consistentie bevorderen, voorkomen dit niet alleen, maar helpen ook bij het lezen en bijwerken van de code.

We willen grofweg (schaamteloos geïnspireerd door [CSS Guidelines](https://cssguidelin.es/#syntax-and-formatting)):

* twee (2) spaties inspringen, geen tabs;
* idealiter 80 tekens brede regels;
* correct geschreven CSS-regels met meerdere regels;
* zinvol gebruik van witruimte.

{% include snippets/syntax/01/index.html %}

### Tekenreeksen

Geloof het of niet, tekenreeksen spelen een vrij grote rol in zowel CSS- als Sass-ecosystemen. De meeste CSS-waarden zijn lengtes of identifiers, dus het is eigenlijk vrij cruciaal om u aan enkele richtlijnen te houden bij het omgaan met tekenreeksen in Sass.

#### Codering

Om mogelijke problemen met tekencodering te voorkomen, wordt het ten zeerste aanbevolen om [UTF-8](https://nl.wikipedia.org/wiki/UTF-8) codering te forceren in het [hoofd stylesheet](#hoofdbestand) met behulp van de `@charset` richtlijn. Zorg ervoor dat dit het allereerste element van de stylesheet is en dat er geen karakter voor staat.

{% include snippets/syntax/02/index.html %}

#### Aanhalingstekens

CSS vereist geen aanhalingstekens, zelfs niet die spaties bevatten. Neem bijvoorbeeld namen van lettertypen: het maakt niet uit of u ze tussen aanhalingstekens plaatst voor de CSS-parser.

Daarom vereist Sass *ook* geen aanhalingstekens voor tekenreeksen. Nog beter (en *gelukkig*, u zult toegeven), een tekenreeks tussen aanhalingstekens is strikt gelijk aan zijn niet-aangehaalde tweeling (bijv. `'abc'` is strikt gelijk aan `abc`).

Dat gezegd hebbende, talen waarvoor tekenreeksen geen aanhalingstekens nodig hebben, zijn beslist een minderheid en daarom moeten **tekenreeksen altijd worden omwikkeld met enkele aanhalingstekens** (`'`) in Sass (enkele is gemakkelijker te typen dan dubbel op *qwerty* toetsenborden). Naast consistentie met andere talen, waaronder JavaScript, de neef van CSS, zijn er verschillende redenen voor deze keuze:

* kleurnamen worden als kleuren behandeld als ze niet worden vermeld, wat tot ernstige problemen kan leiden;
* de meeste syntaxisaccentueerders zullen stikken in tekenreeksen zonder aanhalingstekens;
* het bevordert de algemene leesbaarheid;
* er is geen geldige reden om geen aanhalingstekens aan tekenreeksen toe te voegen.

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>Volgens de CSS-specificaties moet de <code>@charset</code>-richtlijn tussen dubbele aanhalingstekens worden aangegeven <a href="https://www.w3.org/TR/css3-syntax/#charset-rule">om als geldig te worden beschouwd</a>. Sass zorgt hier echter voor bij het compileren naar CSS, zodat het schrijven geen invloed heeft op het eindresultaat. U kunt veilig vasthouden aan enkele aanhalingstekens, zelfs voor <code>@charset</code>.</p>
</div>

#### Tekenreeksen als CSS-waarden

Specifieke CSS-waarden (identifiers) zoals `initial` of `sans-serif` hoeven geen aanhalingstekens. Inderdaad, de verklaring `font-family: 'sans-serif'` zal stilletjes mislukken omdat CSS een identifier verwacht, geen tekenreeks tussen aanhalingstekens. Daarom citeren we die waarden niet.

{% include snippets/syntax/04/index.html %}

Daarom kunnen we een onderscheid maken tussen tekenreeksen die bedoeld zijn om te worden gebruikt als CSS-waarden (CSS-identifiers) zoals in het vorige voorbeeld, en tekenreeksen wanneer we vasthouden aan het gegevenstype Sass, bijvoorbeeld _map_sleutels.

Bij het eerste zetten we geen aanhalingstekens, maar het laatste zetten we tussen enkele aanhalingstekens.

#### Tekenreeksen met aanhalingstekens

Als een tekenreeks een of meer enkele aanhalingstekens bevat, zou men kunnen overwegen om het in plaats daarvan te omwikkelen met dubbele aanhalingstekens (`"`), om te voorkomen dat tekens binnen de tekenreeks ontsnappen.

{% include snippets/syntax/05/index.html %}

#### URL's

URL's moeten ook worden geciteerd, om dezelfde redenen als hierboven:

{% include snippets/syntax/06/index.html %}

### Getallen

In Sass is getal een gegevenstype dat alles omvat, van eenheidsloze getallen tot lengtes, looptijden, frequenties, hoeken enzovoort. Hierdoor kunnen berekeningen op dergelijke maatregelen worden uitgevoerd.

#### Nullen

Getallen moeten voorloopnullen weergeven voor een decimale waarde kleiner dan één. Geef nooit volgnullen weer.

{% include snippets/syntax/07/index.html %}

<div class="note">
  <p>In Sublime Text en andere editors die een door reguliere expressie (regex) aangedreven zoek-en-vervang bieden, is het heel gemakkelijk om een voorloopnul toe te voegen aan (de meeste, zo niet alle) zwevende getallen. Vervang eenvoudig <code>\s+\.(\d+)</code> door <code>\0.$1</code>. Vergeet niet de spatie voor de <code>0</code>.</p>
</div>

#### Eenheden

Als het om lengtes gaat, mag een `0` waarde nooit een eenheid hebben.

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>Pas op, deze praktijk moet worden beperkt tot alleen lengtes. Het hebben van een nul zonder eenheid voor een tijdeigenschap zoals <code>transition-delay</code> is niet toegestaan. Theoretisch, als een eenheidloze nul wordt gespecificeerd voor een duur, wordt de verklaring als ongeldig beschouwd en moet deze worden weggegooid. Niet alle browsers zijn zo streng, maar sommige zijn dat wel. Om een lang verhaal kort te maken: laat de eenheid alleen weg voor lengtes.</p>
</div>

De meest voorkomende fout die ik kan bedenken met betrekking tot getallen in Sass, is te denken dat eenheden slechts tekenreeksen zijn die veilig aan een getal kunnen worden toegevoegd. Hoewel dat waar klinkt, is het zeker niet hoe eenheden werken. Beschouw eenheden als algebraïsche symbolen. In de echte wereld levert het vermenigvuldigen van 5 meter met 5 meter u bijvoorbeeld 25 vierkante meter op. Dezelfde logica is van toepassing op Sass.

Om een eenheid bij een getal op te tellen, moet u dit getal vermenigvuldigen met *1 eenheid*.

{% include snippets/syntax/09/index.html %}

Merk op dat het toevoegen van *0-lid van die eenheid* ook werkt, maar ik zou liever de bovengenoemde methode aanbevelen, aangezien het toevoegen van *0-eenheid* een beetje verwarrend kan zijn. Inderdaad, als u een getal probeert om te zetten naar een andere compatibele eenheid, zal het toevoegen van 0 niet werken. Daarover meer [in dit artikel](https://css-tricks.com/snippets/sass/correctly-adding-unit-number/).

{% include snippets/syntax/10/index.html %}

Uiteindelijk hangt het er echt van af wat u probeert te bereiken. Houd er wel rekening mee dat het toevoegen van de eenheid als een tekenreeks geen goede manier is om verder te gaan.

Om de eenheid van een waarde te verwijderen, moet u deze delen door *één eenheid van zijn soort*.

{% include snippets/syntax/11/index.html %}

Het toevoegen van een eenheid als tekenreeks aan een getal resulteert in een tekenreeks, waardoor extra bewerkingen op de waarde worden voorkomen. Het doorsnijden van het numerieke deel van een getal met een eenheid resulteert ook in een tekenreeks. Dit is niet wat u wilt. [Gebruik lengtes, geen tekenreeksen](https://kittygiraudel.com/2013/09/03/use-lengths-not-strings/).

#### Berekeningen

**Numerieke berekeningen op het hoogste niveau moeten altijd tussen haakjes staan**. Deze vereiste verbetert niet alleen de leesbaarheid aanzienlijk, het voorkomt ook enkele _edge cases_ door Sass te dwingen de inhoud van de haakjes te evalueren.

{% include snippets/syntax/12/index.html %}

#### Magische getallen

"Magisch getal" is een [oude schoolprogrammering](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) term voor *naamloze numerieke constante*. Kortom, het is gewoon een willekeurig getal dat toevallig *werkt*™, maar het is niet gebonden aan een logische verklaring.

Onnodig te zeggen **magische getallen zijn een plaag en moeten koste wat het kost worden vermeden**. Als het u niet lukt om een redelijke verklaring te vinden waarom een getal werkt, voeg dan een uitgebreide opmerking toe waarin u uitlegt hoe u daar bent gekomen en waarom u denkt dat het werkt. Toegeven dat u niet weet waarom iets werkt, is nog steeds nuttiger voor de volgende ontwikkelaar dan dat hij moet uitzoeken wat er vanaf het begin aan de hand is.

{% include snippets/syntax/13/index.html %}

Over het onderwerp heeft CSS-Tricks een [geweldig artikel](https://css-tricks.com/magic-numbers-in-css/) over magische getallen in CSS die ik u aanmoedig om te lezen.

### Kleuren

Kleuren nemen een belangrijke plaats in in de CSS-taal. Natuurlijk wordt Sass een waardevolle bondgenoot als het gaat om het manipuleren van kleuren, meestal door een handvol [krachtige functies](https://sass-lang.com/documentation/Sass/Script/Functions.html).

Sass is zo handig als het gaat om het manipuleren van kleuren dat artikelen over dit onderwerp overal op internet een grote vlucht hebben genomen. Mag ik een paar teksten aanbevelen:

* [How to Programmatically Go From One Color to Another](https://kittygiraudel.com/2014/01/30/programmatically-go-from-one-color-to-another-with-sass/)
* [Using Sass to Build Color Palettes](https://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](https://www.sitepoint.com/dealing-color-schemes-sass/)

#### Kleurformaten

Om kleuren zo eenvoudig mogelijk te maken, zou mijn advies zijn om de volgende voorkeursvolgorde voor kleurformaten te respecteren:

1. [HSL-notatie](https://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB-notatie](https://nl.wikipedia.org/wiki/RGB-kleursysteem);
1. Hexadecimale notatie (kleine letters en afgekort).

CSS-kleurzoekwoorden mogen niet worden gebruikt, tenzij voor snelle prototyping. Het zijn inderdaad Engelse woorden en sommige zijn behoorlijk slecht in het beschrijven van de kleur die ze vertegenwoordigen, vooral voor niet-moedertaalsprekers. Bovendien zijn sleutelwoorden niet perfect semantisch; bijvoorbeeld `grey` is eigenlijk donkerder dan `darkgrey`, en de verwarring tussen `grey` en `gray` kan leiden tot inconsistent gebruik van deze kleur.

De HSL-weergave is niet alleen de gemakkelijkste voor het menselijk brein om te begrijpen <sup>[citation needed]</sup>, het maakt het ook voor schrijvers van stylesheets gemakkelijk om de kleur aan te passen door de tint, verzadiging en lichtheid individueel aan te passen.

RGB heeft nog steeds het voordeel dat het meteen zichtbaar is als de kleur meer blauw, groen of rood is. Daarom is het in sommige situaties misschien beter dan de HSL, vooral als het om puur rood, groen of blauw gaat. Hoewel het niet gemakkelijk is om uit de drie delen een kleur op te bouwen.

Ten slotte, hexadecimaal is bijna niet te ontcijferen voor de menselijke brein. Gebruik het alleen als laatste redmiddel als het moet.

{% include snippets/syntax/14/index.html %}

Wanneer u HSL- of RGB-notatie gebruikt, voeg dan altijd een enkele spatie toe na een komma (`,`) en geen spatie tussen haakjes (`(`, `)`) en inhoud.

{% include snippets/syntax/15/index.html %}

#### Kleuren en variabelen

Als u een kleur meer dan eens gebruikt, slaat u deze op in een variabele met een betekenisvolle naam die de kleur vertegenwoordigt.

{% include snippets/syntax/16/index.html %}

Nu bent u vrij om deze variabele te gebruiken waar u maar wilt. Als uw gebruik echter sterk gebonden is aan een thema, raad ik af om de variabele te gebruiken zoals hij is. Sla het in plaats daarvan op in een andere variabele met een naam die uitlegt hoe het moet worden gebruikt.

{% include snippets/syntax/17/index.html %}

Als u dit doet, wordt voorkomen dat het thema verandert in zoiets als `$sass-pink: blue`. [Dit artikel](https://davidwalsh.name/sass-color-variables-dont-suck) legt goed uit waarom het belangrijk is om na te denken over uw kleurvariabelen.

#### Kleuren lichter of donkerder maken

Zowel [`lighten`](https://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) als [`darken`](https://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method)-functies manipuleren de lichtheid van een kleur in de HSL-ruimte door toe te voegen aan of af te trekken van de lichtheid in de HSL-ruimte. In wezen zijn het niets anders dan aliassen voor de `$lightness`-parameter van de [`adjust-color`](https://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) functie.

Het punt is dat die functies vaak niet het verwachte resultaat opleveren. Aan de andere kant is de [`mix`](https://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) functie een leuke manier om een kleur lichter of donkerder te maken door deze te mengen met `white` of `black`.

Het voordeel van het gebruik van `mix` in plaats van een van de twee bovengenoemde functies is dat het geleidelijk naar zwart (of wit) gaat naarmate u het aandeel van de kleur verkleint, terwijl `darken` en `lighten` snel een kleur helemaal naar zwart of wit uitblaast.

{% include images/color-functions.html %}

Als u niet elke keer de `mix`-functie wilt schrijven, kunt u twee gebruiksvriendelijke functies `tint` en `shading` maken (die ook deel uitmaken van [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) om hetzelfde te doen:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>De <a href="https://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a>-functie is ontworpen om eigenschappen vloeiender te schalen door rekening te houden met hoe hoog of laag ze al zijn. Het zou resultaten moeten opleveren die net zo mooi zijn als die van <code>mix</code>, maar met een duidelijkere aanroepconventie. De schaalfactor is echter niet precies hetzelfde.</p>
</div>

### Lijsten

Lijsten zijn het Sass-equivalent van arrays. Een lijst is een platte gegevensstructuur (in tegenstelling tot [maps](#maps)) die bedoeld is om waarden van elk type op te slaan (inclusief lijsten die naar geneste lijsten leiden).

Lijsten dienen de volgende richtlijnen te respecteren:

* ofwel inline of multiregel;
* noodzakelijkerwijs op meerdere regels als deze te lang zijn om op een regel van 80 tekens te passen;
* tenzij gebruikt zoals het is voor CSS-doeleinden, altijd gescheiden door komma's;
* altijd tussen haakjes gewikkeld;
* achterliggende komma als er meerdere regels zijn, niet als ze inline zijn.

{% include snippets/syntax/19/index.html %}

Gebruik altijd de meegeleverde API om nieuwe items aan een lijst toe te voegen. Probeer niet handmatig nieuwe items toe te voegen.

{% include snippets/syntax/20/index.html %}

In [dit artikel](https://kittygiraudel.com/2013/07/15/understanding-sass-lists/), ga ik door een heleboel trucs en tips om lijsten correct te behandelen en te manipuleren in Sass.

### Maps

Met Sass kunnen stylesheet-auteurs maps definiëren - de Sass-term voor associatieve arrays, hashes of zelfs JavaScript-objecten. Een map is een gegevensstructuur die sleutels aan waarden koppelt. Zowel sleutels als waarden kunnen van elk gegevenstype zijn, inclusief maps, hoewel ik het gebruik van complexe gegevenstypen als mapsleutels niet zou aanraden, al was het maar om gezond verstand te hebben.

Maps moeten als volgt worden geschreven:

* spatie na de dubbele punt (`:`);
* accolade openen (`(`) op dezelfde regel als de dubbele punt (`:`);
* **geciteerde sleutels** als het tekenreeksen zijn (wat 99% van de gevallen vertegenwoordigt);
* elk sleutel/waarde-paar op zijn eigen nieuwe regel;
* komma (`,`) aan het einde van elke sleutel/waarde;
* **achterliggende komma** (`,`) op het laatste item om het gemakkelijker te maken om items toe te voegen, te verwijderen of opnieuw te ordenen;
* sluitende accolade (`)`) op zijn eigen nieuwe regel;
* geen spatie of nieuwe regel tussen accolade (`)`) en puntkomma (`;`).

Illustratie:

{% include snippets/syntax/21/index.html %}

Er zijn veel verhalen over Sass-maps, gezien hoe lang naar deze functie was verlangd. Hier zijn er 3 die ik aanbeveel: [Using Sass Maps](https://www.sitepoint.com/using-sass-maps/), [Extra Map functions in Sass](https://www.sitepoint.com/extra-map-functions-sass/), [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/).

### CSS-regelset

Op dit punt is dit voornamelijk het herzien van wat iedereen weet, maar hier is hoe een CSS-regelset moet worden geschreven (tenminste, volgens de meeste richtlijnen, inclusief [CSS Guidelines](https://cssguidelin.es/#anatomy-of-a-ruleset)):

* gerelateerde selectors op dezelfde lijn; niet-gerelateerde selectors op nieuwe regels;
* de openingsaccolade (`{`) met een enkele spatie tussen de laatste selector;
* elke verklaring op zijn eigen nieuwe regel;
* een spatie na de dubbele punt (`:`);
* een puntkomma (`;`) aan het einde van alle verklaringen;
* de sluitende accolade (`}`) op zijn eigen nieuwe regel;
* een nieuwe regel na de sluitaccolade `}`.

Illustratie:

{% include snippets/syntax/24/index.html %}

Naast die CSS-gerelateerde richtlijnen willen we letten op:

* lokale variabelen die worden verklaard vóór alle verklaringen, en vervolgens worden gescheiden van verklaringen door een nieuwe regel;
* mixin-aanroepen zonder `@content` die vóór een verklaring komen;
* geneste selectors komen altijd na een nieuwe regel;
* geneste selectors komen altijd na een nieuwe regel;
* geen nieuwe regel voor een sluitende accolade (`}`).

Illustratie:

{% include snippets/syntax/25/index.html %}

### Verklaringsortering

Ik kan niet veel onderwerpen bedenken waar de meningen zo verdeeld zijn als ze zijn over het sorteren van declaraties in CSS. Concreet zijn er hier twee facties:

* vasthouden aan de alfabetische volgorde;
* verklaringen ordenen op type (positie, display, kleuren, lettertype, diversen…).

Er zijn voor- en nadelen voor beide manieren. Aan de ene kant is alfabetische volgorde universeel (althans voor talen die het Latijnse alfabet gebruiken), dus er is geen argument om de ene eigenschap voor de andere te sorteren. Het lijkt me echter buitengewoon raar om eigenschappen als `bottom` en `top` niet direct naast elkaar te zien. Waarom moeten animaties vóór het weergavetype verschijnen? Er zijn veel eigenaardigheden met alfabetische volgorde.

{% include snippets/syntax/26/index.html %}

Aan de andere kant is het sorteren van eigenschappen op type volkomen logisch. Alle lettertypegerelateerde verklaringen worden verzameld, `top` en `bottom` worden herenigd en het lezen van een regelset voelt als het lezen van een kort verhaal. Maar tenzij u aan een aantal conventies houdt, zoals [Idiomatic CSS](https://github.com/necolas/idiomatic-css), is er veel ruimte voor interpretatie op deze manier van doen. Waar zou `white-space` naartoe gaan: lettertype of weergave? Waar hoort `overflow` precies thuis? Wat is de eigendomsvolgorde binnen een groep (het kan alfabetisch zijn, oh de ironie)?

{% include snippets/syntax/27/index.html %}

Er is ook een andere interessante subboom van type-ordening genaamd [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), die ook behoorlijk populair lijkt. Kortom, Concentric CSS vertrouwt op het box-model om een volgorde te definiëren: begint buiten, beweegt naar binnen.

{% include snippets/syntax/28/index.html %}

Ik moet zeggen dat ik zelf niet kan beslissen. Een [recente peiling op CSS-Tricks](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) heeft vastgesteld dat meer dan 45% van de ontwikkelaars hun verklaringen sorteert op type tegen 14% alfabetisch. Er zijn ook 39% die volledig willekeurig gaan, inclusief ikzelf.

{% include images/order-poll.html %}

Daarom zal ik in deze stijlgids geen keuze opleggen. Kies degene die u verkiest, zolang u maar consistent bent in al uw stylesheets (dus niet de *willekeurige* optie).

<div class="note">
  <p>Een <a href="https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">recent onderzoek</a> toont aan dat het gebruik van <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (die  <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">type ordering</a> gebruikt) voor het sorteren van CSS-verklaringen leidt tot een verkorting van de gemiddelde bestandsgrootte onder Gzip-compressie met 2,7%, vergeleken met 1,3% bij het alfabetisch sorteren.</p>
</div>

### Selector nesten

Een specifieke functie die Sass biedt en die door veel ontwikkelaars overdreven wordt misbruikt, is *selector nesten*. Het nesten van selectors biedt een manier voor auteurs van stylesheets om lange selectors te berekenen door kortere selectors in elkaar te nestelen.

#### Algemene regel

Bijvoorbeeld de volgende Sass-nesten:

{% include snippets/syntax/29/index.html %}

… zal deze CSS genereren:

{% include snippets/syntax/30/index.html %}

In dezelfde lijn is het sinds Sass 3.3 mogelijk om de huidige selectorreferentie (`&`) te gebruiken om geavanceerde selectors te genereren. Bijvoorbeeld:

{% include snippets/syntax/31/index.html %}

… zal deze CSS genereren:

{% include snippets/syntax/32/index.html %}

Deze methode wordt vaak gebruikt in combinatie met [BEM-naamgevingsconventies](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) om `.block__element` en `.block--modifier` selectors gebaseerd op de originele selector te genereren (dwz `.block` in dit geval).

<div class="note">
  <p>Hoewel het misschien anekdotisch is, het genereren van nieuwe selectors op basis van de huidige selectorreferentie (<code>&</code>) maakt die selectors niet doorzoekbaar in de codebase omdat ze niet per se bestaan.</p>
</div>

Het probleem met het nesten van selectors is dat het de code uiteindelijk moeilijker maakt om te lezen. Men moet mentaal de resulterende selector berekenen uit de inspringingsniveaus; het is niet altijd even duidelijk wat de CSS zal worden.

Deze verklaring wordt meer waar naarmate selectors langer worden en verwijzingen naar de huidige selector (`&`) frequenter. Op een gegeven moment is het risico om het overzicht te verliezen en niet meer te kunnen begrijpen wat er aan de hand is zo groot dat het het niet waard is.

Om dergelijke situaties te voorkomen, hebben we een paar jaar geleden veel gesproken over [de Inception-regel](https://thesassway.herokuapp.com/beginner/the-inception-rule). Het raadde af om meer dan 3 niveaus diep te nesten, als verwijzing naar de film Inception van Christopher Nolan. Ik zou drastischer zijn en aanbevelen om * selector-nesten zoveel mogelijk te vermijden**. 

Hoewel er duidelijk een paar uitzonderingen op deze regel zijn, zoals we in de volgende sectie zullen zien, lijkt deze mening behoorlijk populair te zijn. U kunt er meer in detail over lezen in [Beware of Selector Nesting](https://www.sitepoint.com/beware-selector-nesting-sass/) en [Avoid nested selectors for more modular CSS](https://thesassway.herokuapp.com/intermediate/avoid-nested-selectors-for-more-modular-css).

#### Uitzonderingen

Om te beginnen is het toegestaan en zelfs aanbevolen om pseudo-klassen en pseudo-elementen in de initiële selector te nestelen.

{% include snippets/syntax/33/index.html %}

Het gebruik van selector-nesten voor pseudo-klassen en pseudo-elementen is niet alleen logisch (omdat het zich bezighoudt met nauw verwante selectors), het helpt ook om alles over een component op dezelfde plaats te houden.

Ook bij het gebruik van component-agnostische statusklassen zoals `.is-active`, is het prima om deze onder de componentselector te nesten om de zaken netjes te houden.

{% include snippets/syntax/34/index.html %}

_Last but not least_, wanneer een element wordt gestileerd omdat het toevallig in een ander specifiek element zit, is het ook prima om nesten te gebruiken om alles over het component op dezelfde plaats te houden.

{% include snippets/syntax/35/index.html %}

Zoals met alles, zijn de details enigszins irrelevant, consistentie is de sleutel. Als u zich volledig zeker voelt bij het nesten van selectors, gebruik dan selector nesten. Zorg er gewoon voor dat uw hele team het daar goed mee eens is.
