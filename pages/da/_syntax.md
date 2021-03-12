
## Syntaks & formatering

Hvis du spørger mig, så er noget af det allerførste en styleguide bør gøre, er at beskrive måden hvordan vi vil have vores kode til at se ud.

Når flere udviklere er involveret i at skrive CSS på de(t) samme projekt(er), så er det kun et spørgsmål om tid før en af dem begynder at gøre tingene på deres egen måde. Retningslinjer for kode, der fremmer konsistens, er ikke blot med til at undgå dette, men hjælper også når det kommer til at læse og opdatere koden.

Groft sagt, så ønsker vi (skamløst inspireret af [CSS Guidelines](https://cssguidelin.es/#syntax-and-formatting)):

* indentering á to (2) mellemrum, ingen tabs;
* 80-karakterer brede linjer, ideelt set;
* ordentligt skrevede, multi-linje CSS-regler;
* meningsfuld brug af whitespace.

{% include snippets/syntax/01/index.html %}

Vi vil ikke tackle spørgsmålet omkring filorganisering i denne sektion. Det er formålet for [en anden sektion](#arkitektur).

### Strenge

Tro det eller ej, så spiller strenge en ret stor rolle i økosystemerne for både CSS og Sass. De fleste CSS-værdier er enten længder eller strenge (ofte uciterede), så det er faktisk ret vigtigt at holde sig til nogle retningslinjer når man arbejder med strenge i Sass.

#### Encoding

For at undgå potentielle problemer med karakter-encoding, så anbefales det kraftigt at tvinge [UTF-8](https://en.wikipedia.org/wiki/UTF-8) encoding i [hoved-stylesheetet](#main-filen) ved at anvende `@charset` direktivet. Vær sikker på at det er det allerførste element i stylesheetet, og at der ikke er nogen form for karakterer før det.

{% include snippets/syntax/02/index.html %}

#### Citationstegn

CSS kræver ikke at strenge bliver citerede, ikke engang dem der indeholder mellemrum. Tag font-family navne som eksempel: for CSS parseren gør det ingen forskel hvorvidt du pakker dem ind i citationstegn.

På grund af det, så kræver Sass *heller ikke* at strenge citeres. Endnu bedre er (og *heldigvis*, vil du nok indrømme), at en citeret streng er fuldstændig den samme som dens uciterede tvilling (f. eks. er `'abc'` fuldstændig det samme som `abc`).

Med det sagt, så er sprog der ikke kræver at strenge bliver citeret klart en minoritet, og derfor **bør strenge altid indpakkes i enkelte citationstegn** (`'`) i Sass (enkelte citationstegn er nemmere at taste end dobbelte på *qwerty* tastaturer). Foruden konsistens med andre sprog, inklusiv CSS' kusine JavaScript, er der flere grunde bag dette valg:

* farvenavne behandles på samme måde som uciterede farver, hvilket kan lede til alvorlige problemer;
* de fleste syntax highlighters får sure opstød af uciterede strenge;
* det hjælper med generel læsbarhed;
* der er ingen god grund til ikke at citere strenge.

{% include snippets/syntax/03/index.html %}

#### Strenge som CSS værdier

Specifikke CSS værdier, såsom `initial` eller `sans-serif` kræver ikke at blive citeret. Det er klart, at `font-family: 'sans-serif'` vil fejle i stilhed fordi CSS forventer en identifier og ikke en citeret streng. På grund af dette, så citerer vi ikke disse værdier.

{% include snippets/syntax/04/index.html %}

Dermed kan vi lave en distinktion mellem strenge der har til hensigt at blive brugt som CSS værdier (CSS identifiers), som i det forrige eksempel, og strenge der holder sig til Sass' datatype, som for eksempel map-nøgler.

Vi citerer ikke den førstnævnte, men vi indpakker den sidstnævnte i enkelte citationstegn.

#### Strenge der indeholder citationstegn

Hvis en streng indeholder en eller flere citationstegn, så kan man overveje at indpakke strengen i dobbelte citationstegn (`"`) i stedet, for at undgå at escape for mange karakterer inden i strengen.

{% include snippets/syntax/05/index.html %}

#### URL'er

URL'er bør også blive citeret af de samme grunde som ovenfor:

{% include snippets/syntax/06/index.html %}

**Videre læsning:**

* [All You Ever Need to Know About Sass Interpolation](https://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/KittyGiraudel/SassyStrings)

### Tal

I Sass er tal en datatype der inkluderer alt lige fra enhedsløse numre til længder, varigheder, frekvenser, vinkler og så videre. Dette tillader udførelse af udregninger på sådanne målinger.

#### Nuller

Tal bør vise foranstillede nuller før en decimalværdi, der er mindre end et. Vis aldrig efterstillede nuller.

{% include snippets/syntax/07/index.html %}

#### Enheder

Når du arbejder med længder, så bør en værdi af `0` aldrig have en enhed.

{% include snippets/syntax/08/index.html %}

Den mest typiske fejl jeg kan komme i tanke om, i relation til tal i Sass, er at tænke på enheder som kun værende strenge der trygt kan tilføjes til et tal. Selvom det lyder sandt, så er det absolut ikke sådan enheder virker. Tænk på enheder som algebraiske symboler. For eksempel, som i den virkelig verden, hvis du ganger 5 tommer med 5 tommer så får du 25 kvadrattommer. Den samme logik gælder ved Sass.

For at tilføje en enhed til et tal, så er du nødt til at gange dette tal med *1 enhed*.

{% include snippets/syntax/09/index.html %}

Bemærk at tilføjelse af *0 medlem af samme enhed* også virker, men jeg vil hellere anbefale den førnævnte metode, siden *0 enhed* kan være en anelse forvirrende. Det er klart, at når man forsøger at konvertere et tal til en anden kompatibel enhed, så vil tilføjelse af 0 ikke være nok.

{% include snippets/syntax/10/index.html %}

Når alt kommer til alt, så afhænger det af hvad du forsøger at opnå. Bare hold det i tankerne, at tilføjelse af en enhed til en streng ikke altid er en god fremgangsmåde.

For at fjerne en værdis enhed, så er du nødt til at dividere den med *en enhed af dets slags*.

{% include snippets/syntax/11/index.html %}

Tilføjelse af en enhed som en streng til et tal resulterer i en streng, hvilket forhindrer enhver yderligere operation på værdien. At opdele den numeriske del af et tal med en enhed resulterer også i en streng. Dette er ikke hvad du ønsker.

#### Kalkulationer

**Numeriske kalkulationer på top-niveau bør altid indpakkes i paranteser**. Ikke alene forbedrer dette krav læsbarheden dramatisk, det forhindrer også særtilfælde ved at tvinge Sass til at evaluere indholdet af paranteserne.

{% include snippets/syntax/12/index.html %}

#### Magiske tal

"Magiske tal" er et [old school programmeringsterm](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) for *unavngivne numeriske konstanter*. Basalt set, så er det et tilfældigt tal der *bare virker*™, dog uden at være forbundet til nogen logisk forklaring.

Selvfølgelig er **magiske tal en plage og bør undgås for enhver pris**. Når du ikke kan finde en fornuftig forklaring for hvorfor et tal virker, så tilføj en uddybende kommentar der forklarer hvordan du er nået hertil, og hvorfor du tror det virker. At indrømme at du ikke ved hvorfor noget virker er stadig mere hjælpsomt for den næste udvikler, end at få dem til regne ud hvad det er der sker fra bunden af.

{% include snippets/syntax/13/index.html %}

**Videre læsning:**

* [Use Lengths, Not Strings](https://kittygiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](https://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](https://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)

### Farver

Farver har en vigtig plads i CSS-sproget. Sass bliver derfor naturligt en værdifuld allieret når det kommer til manipulation af farver, mest fordi det giver os en håndfuld [kraftfulde funktioner](https://sass-lang.com/documentation/Sass/Script/Functions.html).

#### Farveformater

For at holde farver så simple som muligt, så vil mit råd være at respektere den følgende rækkefølge for farveformater:

1. [CSS farve-nøgleord](https://www.w3.org/TR/css3-color/#svg-color);
1. [HSL notation](https://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB notation](https://en.wikipedia.org/wiki/RGB_color_model);
1. Hexadecimal notation. Små bogstaver og forkortet, hvis muligt, er at foretrække.

Som udgangspunkt, så taler nøgleord ofte for sig selv. HSL-repræsentationen er ikke kun den nemmeste for den menneskelige hjerne at forstå <sup>[citation mangler]</sup>, den er også nemmere for forfattere af stylesheets når det kommer til at fintune farven ved at justere nuance, mætning og lyshed hver for sig. RGB har stadig en fordel ved med det samme at vise om farven er mere en blå, en grøn eller en rød, men den gør det ikke nemmere at bygge en farve ud af de tre dele. Til sidst, så er hexidecimaler tættest på at være uforståeligt for det menneskelige sind.

{% include snippets/syntax/14/index.html %}

Når man anvender HSL eller RGB, så tilføj altid et enkelt mellemrum efter et komma (`,`) og ingen mellemrum mellem paranteser (`(`, `)`) og indhold.

{% include snippets/syntax/15/index.html %}

#### Farver og variabler

Når en farve anvendes mere end én gang, så gem den i en variabel med et meningsfuldt navn, der repræsenterer farven.

{% include snippets/syntax/16/index.html %}

Du står dig nu frit for at anvende denne variabel hvorend du vil. Dog, hvis din brug er tæt koblet til et tema, så vil jeg fraråde at anvende variablen som den er. Gem den i stedet i en anden variabel med et navn der forklarer hvordan den bør bruges.

{% include snippets/syntax/17/index.html %}

Ved at gøre det på denne måde, forhindrer du at tema-ændringer fører til ting som `$sass-pink: blue`.

#### Lysning og mørkning af farver

Både [`lighten`](https://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) og [`darken`](https://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) er funktioner til manipulation af lysstyrken af en farve i HSL-rum ved at tilføje eller fratrække lysstyrken i HSL-rummet. Basalt set er de intet andet end aliaser for `$lightness` parametret af [`adjust-color`](https://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) funktionen.

Sagen er den, at disse funktioner ofte ikke giver det forventede resultat. På den anden side, så er [`mix`](https://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) funktionen en god måde at lysne eller mørkne en farve på, ved at mikse den med enten `white` eller `black`.

Fordelen ved at anvende `mix` i stedet for at en af de to førnævnte funktioner er, at det den vil progressivt gå mod sort (eller hvid) efterhånden som du reducerer farvens proportion, hvoraf `darken` og `lighten` hurtigt vil kaste en farve helt mod sort eller hvid.

{% include images/color-functions.html %}

Hvis du ikke ønsker at skrive `mix` funktionen hver gang, så kan du skabe to letanvendelige funktioner kaldet `tint` og `shade` (der også er en del af [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)), til at udføre den samme ting:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p><a href="https://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> funktionen er designet til at skalere egenskaber mere flydende ved at tage hvor høje og lave de allerede er med i betragtning. Den bør give resultater der er ligeså gode som <code>mix'</code> men med en klarere konvention for kald. Skaleringsfaktoren er dog ikke helt den samme.</p>
</div>

**Videre læsning:**

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](https://kittygiraudel.com/2014/01/30/programmatically-go-from-one-color-to-another-with-sass/)
* [Sass Color Variables That Don’t Suck](https://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](https://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](https://www.sitepoint.com/dealing-color-schemes-sass/)

### Lister

Lister er Sass' svar på arrays. En liste er en flad datastruktur (modsat [maps](#maps)), der har til hensigt at gemme værdier af enhver type (inklusiv lister, hvilket leder til indlejrede lister).

Lister bør respektere de følgende retningslinjer:

* enten indlejrede eller i flere linjer;
* nødvendigvis i flere linjer, hvis for lang til at passe ind i linje på 80-karakterer;
* medmindre brugt som den er til CSS formål, skal det altid være komma-separeret;
* altid indpakked i paranteser;
* efterstillede kommaer hvis flere linjer, ikke hvis indlejret.

{% include snippets/syntax/19/index.html %}

Når du tilføjer nye artikler til en liste, så brug altid den medfølgende API. Forsøg ikke at tilføje nye artikler manuelt.

{% include snippets/syntax/20/index.html %}

**Videre læsning:**

* [Understanding Sass lists](https://kittygiraudel.com/2013/07/15/understanding-sass-lists/)
* [SassyLists](https://at-import.github.io/SassyLists/)

### Maps

Siden Sass 3.3 kan stylesheet forfattere definere maps &mdash; Sass-termet for et associativ array, hashes eller endda JavaScript objekter. Et map er en datastruktur til forbinde nøgler (der kan være af enhver datatype, inklusiv maps, selvom jeg ikke anbefaler det) til værdier af enhver type.

Maps bør altid blive skrevet som følgende:

* mellemrum efter kolon (`:`);
* åbnende klamme (`(`) på samme linje som kolonet (`:`);
* **citerede nøgler**, hvis de er strenge (hvilket repræsenterer 99% af situationerne);
* hver nøgle/værdi par er på dets egen, nye linje;
* **efterstillet komma** (`,`) på den sidste artikel gør det lettere at tilføje, fjerne eller omarrangere artikler;
* afsluttende klamme (`)`) på hver sin, nye linje;
* intet mellemrum eller ny linje mellem en afsluttende klamme (`)`) og semikolon (`;`).

Illustration:

{% include snippets/syntax/21/index.html %}

#### Debugging af et Sass map

Hvis du nogensinde har følt dig fortabt, og tænkt hvilken skør magi der foregår i et Sass map, så fortvivl ikke, der stadig er en måde at blive reddet på.

{% include snippets/syntax/22/index.html %}

Hvis du er interesseret i at vide dybden af map'et, så tilføj følgende funktion. Mixin'en vil vise det automatisk.

{% include snippets/syntax/23/index.html %}

**Videre læsning:**

* [Using Sass Maps](https://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](https://www.sitepoint.com/debugging-sass-maps/)
* [Extra Map functions in Sass](https://www.sitepoint.com/extra-map-functions-sass/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](https://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](https://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)

### CSS Regelsæt

På dette tidspunkt, hvilket mest er en opsummering af hvad alle ved, men her er måden hvordan et CSS regelsæt bør blive skrevet (i det mindste ifølge de fleste retningslinjer, inklusiv [CSS Guidelines](https://cssguidelin.es/#anatomy-of-a-ruleset)):

* relaterede selektorer på samme linje; urelaterede selektorer på nye linjer;
* den åbnende klamme (`{`) har afstand fra den sidste selektor med et enkelt mellemrum;
* hver deklaration på dets egen, nye linje;
* et mellemrum efter kolonet (`:`);
* et efterstillet semikolon (`;`) ved enden af alle deklarationer;
* den afsluttende klamme (`}`) på sin egen, nye linje;
* en ny linje efter den afsluttende klamme `}`.

Illustration:

{% include snippets/syntax/24/index.html %}


Ifølge disse CSS-relaterede retningslinjer, så ønsker vi at være opmærksomme på:

* at lokale variabler bliver deklareret før alle andre deklarationer, for derefter at have afstand til deklarationer via en ny linje;
* at mixin-kald uden nogen `@content` kommer efter enhver deklaration;
* at indlejrede selektorer altid kommer efter en ny linje;
* at mixin-kald med `@content` kommer efter enhver indlejret selektor;
* at der ikke er nogen ny linje før en afsluttende klamme (`}`).

Illustration:

{% include snippets/syntax/25/index.html %}

**Videre læsning:**

* [Anatomy of a Ruleset](https://cssguidelin.es/#anatomy-of-a-ruleset)

### Sortering af Deklarationer

Jeg kan ikke komme på mange emner, hvor meninger er så splittede som de er når det kommer til sortering af deklarationer i CSS. Helt konkret, så er to fraktioner på spil her:

* at holde sig til den alfabetiske rækkefølge;
* at arrangere deklarationerne efter type (position, display, farver, skrifttype, diverse…).

Der er fordele og ulemper ved begge tilgange. På den ene side, så er alfabetisk sortering universelt (i det mindste for sprog, der anvender det latinske alfabet), så der er ikke noget argument om at sortere en egenskab efter en anden. Dog finder jeg det ekstremt mærkeligt ikke at se værdier som `bottom` og `top` lige ved siden af hinanden. Hvorfor skulle animationer komme før display-typen? Der er mange særheder ved en alfabetisk arrangering.

{% include snippets/syntax/26/index.html %}

På den anden side, giver arrangering af egenskaber efter type perfekt mening. Enhver skrifttype-relateret deklaration bliver samlet, `top` og `bottom` er genforenet, og at læse et regelsæt føles lidt ligesom at læse en kort historie. Men medmindre du holder til konventioner såsom [Idiomatic CSS](https://github.com/necolas/idiomatic-css), så opstår der en masse plads til fortolkning ved denne måde. Hvor bør `white-space` være: font eller display? Hvor hører `overflow` til helt præcist? Hvad er rækkefølgen for egenskaber i en gruppe (det kunne være alfabetisk, ironisk nok)?

{% include snippets/syntax/27/index.html %}

Der findes også en helt anden, interessant underart af type-sortering kaldet [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), der virker til også at være ret populær. Grundlæggende, så læner Concentric CSS sig op ad box-modellen for at definere en rækkefølge: den starter udefra og bevæger sig indad.

{% include snippets/syntax/28/index.html %}

For at tale for mig selv, så kan jeg ikke beslutte mig. En nylig afstemning på [recent poll on CSS-Tricks](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) konkluderede, at over 45% af udviklerne arrangerer deres deklarationer efter type imod 14%, der gør det alfabetisk. Dertil, så går 39% fuldstændig tilfældig til værks, inklusiv mig selv.

{% include images/order-poll.html %}

På grund af det, så vil jeg ikke pålægge dig et valg i denne styleguide. Vælg den tilgang du foretrækker, så længe du er konsistent gennem dine stylesheets (ikke den *tilfældige* tilgang, for eksempel).

<div class="note">
  <p>Et <a href="https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">nyligt studie</a> viser at ved at anvende <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (der anvender <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">type-arrangering</a> til sortering af CSS deklarationer, så afkortes gennemsnitsfilen under Gzip kompression med 2.7%, sammenligned med 1.3% når der sorteres alfabetisk.</p>
</div>

**Videre læsning:**

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](https://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

### Indlejring af selektorer

En særlig funktionalitet som Sass giver, der bliver misbrugt alt for meget af mange udviklere er *indlejring af selektorer*. Indlejring af selektorer giver stylesheet forfattere en måde at beregne lange selektorer ved at indlejre kortere selektorer inde i hinanden.

#### Generel regel

For eksempel, så vil den følgende Sass indlejring:

{% include snippets/syntax/29/index.html %}

… generere denne CSS:

{% include snippets/syntax/30/index.html %}

På samme måde er det siden Sass 3.3 muligt at anvende den nuværende selektor-reference (`&`) til at generere avancerede selektorer. For eksempel:

{% include snippets/syntax/31/index.html %}

… vil generere denne CSS:

{% include snippets/syntax/32/index.html %}

Denne metode anvendes ofte sammen med [navnekonventionerne for BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) ti at generere `.block__element` og `.block--modifier` selektorer, baseret på den oprindelige selektor (f. eks. `.block` i dette tilfælde).

<div class="note">
  <p>Selvom det måske er anekdotisk, så når nye selektorer genereres fra den nuværende selektor-reference (<code>&</code>), så gør dét disse selektorer usøgbare i kodebasen, da egentlig ikke længere eksisterer.</p>
</div>

Problemet med indlejring af selektorer er at det i sidste ende gør koden sværere at læse. Man skal mentalt beregne den endelige selektor ud fra indenteringsniveauer; det er derfor ikke altid særlig åbenlyst hvad CSS'en vil ende ud som.

Dette udsagn bliver mere sandt efterhånden som selektorer og referencer til den nuværende selektor (`&`) bliver hyppigere. På dette tidspunkt bliver risikoen for at miste overblikket, og at være ude af stand til at forstå hvad der sker, så høj at det ikke er dét værd.

For at undgå en sådan situation, så **undgår vi indlejring af selektorer så meget som muligt**. Dog er der åbenlyst nogle få undtagelser til denne regel.

#### Undtagelser

Til at starte med, så er det tilladt og endda anbefalet at indlejre pseudo-klasser og pseudo-elementer inden i den indledende selektor.

{% include snippets/syntax/33/index.html %}

At anvende selektor-indlejring til pseudo-klasser og pseudo-elementer giver ikke alene mening (fordi det håndterer tæt relaterede selektorer), det hjælper også med at holde alt omkring et komponent på det samme sted.

Dertil, så når komponent-agnostiske tilstandsklasser såsom `.is-active` anvendes, så er det helt i orden at indlejre det under komponentets selektor for at holde tingene pæne.

{% include snippets/syntax/34/index.html %}

Sidst, men ikke mindst, så når et element styles fordi det eksisterer inden i et andet specifikt element, så er det også fint at bruge indlejring til at holde alt omkring komponentet på det samme sted.

{% include snippets/syntax/35/index.html %}

Når der arbejdes med uerfarne udviklere, så kan en selektor såsom `.no-opacity &` virke en anelse underlig. For at undgå enhver forvirring, så kan du bygge en meget kortfattet mixin, der transformerer denne underlige syntaks om til en eksplicit API.

{% include snippets/syntax/36/index.html %}

Ved at genskrive vores tidligere eksempel, så vil det se ud som dette:

{% include snippets/syntax/37/index.html %}

Som med alting, så er det specifikke rimelig irrelevant, da det er konsistens der er det vigtige. Hvis du føler dig fuldstændig sikker på selektor-indlejring, så brug selektor-indlejring. Bare sikr dig, at hele dit team er med på det.

**Videre læsning:**

* [Beware of Selector Nesting](https://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](https://thesassway.herokuapp.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](https://thesassway.herokuapp.com/intermediate/avoid-nested-selectors-for-more-modular-css)
