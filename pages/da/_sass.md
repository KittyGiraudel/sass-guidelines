
## Om Sass

Sådan beskriver [Sass](https://sass-lang.com) sig selv i dets [dokumentation](https://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass er en forlængelse af CSS, der tilføjer kraft og elegance til det basale sprog.

Sass' ultimative mål er at fikse CSS' skønhedsfejl. CSS, som vi alle kender det, er ikke det bedste sprog i verden <sup>[citation mangler]</sup>. På trods af at det er simpelt at lære, så kan det hurtigt blive ret rodet, især i store projekter.

Det er her hvor Sass kommer ind, som et metasprog, til at forbedre CSS' syntaks på en måde der tilføjer ekstra funktionaliteter og brugbare værktøjer. Samtidig, så ønsker Sass at være konservativ når det kommer til CSS-sproget.

Pointen er ikke at transformere CSS til et fuldt udstyret programmeringssprog; Sass ønsker kun at hjælpe dér hvor CSS fejler. På grund af det, så er det at komme i gang med Sass ikke sværere end at lære CSS: det tilføjer blot et par ekstra funktionaliteter ovenpå det.

Når det er sagt, så er der mange måde at bruge disse funktionaliteter på. Nogle gode, nogle dårlige, nogle underlige. Disse retningslinjer er tiltænkt at give dig en konsistent og dokumenteret tilgang til at skrive Sass kode.

**Videre læsning:**

* [Sass](https://sass-lang.com)
* [Sass documentation](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

### Ruby Sass eller LibSass

[Sass’s første commit](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) går helt tilbage til sen-2006, over 8 år siden. Det er derfor overflødigt at sige, at det er kommet ret langt siden da. Originalt udviklet i Ruby, så poppede variationer op her og der. Den mest succesfulde, [LibSass](https://github.com/sass/libsass) (skrevet i C/C++), er nu tæt på at være fuldt kompatibel med den originale Ruby-version.

I 2014 [besluttede holdene bag Ruby Sass og LibSass at vente på at begge versioner kunne synkronisere, før de bevægede sig videre fremad](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Siden da har LibSass været meget aktiv i at udgive versioner, der har funktionalitets-paritet med dets storebror. De sidste tilbageblivende inkonsistenser har jeg samlet og listet under projektet [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/). Hvis du er blevet opmærksom på en inkompatibilitet mellem de to versioner, så vær rar at åbne et issue.

For at vende tilbage til valget om din compiler. Det hele afhænger rent faktisk af dit projekt. Hvis dit projekt er et Ruby on Rails projekt, så bør du bruge Ruby Sass, der er perfekt velegnet til en sådan situation. Vær også opmærksom på at Ruby Sass altid vil være implementationsreferencen, og vil derfor altid være foran LibSass når det kommer til funktionaliteter.

Ved ikke-Ruby projekter, der har behov for en workflow integration, så er LibSass højest sandsynlig en bedre idé, da den for det meste er dedikeret til at blive indpakket. Så hvis du ønsker at bruge f.eks. Node.js, så er [node-sass](https://github.com/sass/node-sass) det klare valg.

**Videre læsning:**

* [LibSass](https://github.com/sass/libsass)
* [Getting to know LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/)
* [Switching from Ruby Sass to LibSass](https://www.sitepoint.com/switching-ruby-sass-libsass/)

### Sass eller SCSS

Der er eksisterer megen forvirring omkring semantikken ved navnet *Sass*, og af god grund: Sass betyder både preprocessoren og dens egen syntaks. Ikke særlig hensigtsmæssigt, vel?

Ser du, Sass blev originalt beskrevet som en syntaks hvoraf de definerende karaktertræk var dets sensitivitet overfor indentering. Inden længe besluttede holdet bag Sass at lukke hullet mellem Sass og CSS ved at tilbyde en CSS-venlig syntaks kaldet *SCSS*, som står for *Sassy CSS*. Dets motto er: hvis det er valid CSS, så er det valid SCSS.

Siden da har Sass (preprocessoren) tilbudt to forskellige syntakser: Sass (uden store bogstaver, [tak](http://sassnotsass.com)), også kendt som *den indenterede syntaks*, og SCSS. Hvilken en du bruger er faktisk helt op til dig, da de er fuldstændigt ens funktionalitetsmæssigt. Her er det kun et spørgsmål om æstetik.

Sass' whitespace-sensitive syntaks afhænger af indentering for at fjerne klammer, semi-kolonner og andre tegnsætningssymboler, hvilket leder til en slankere og kortere syntaks. Samtidig, så er SCSS nemmere at lære da det egentlig bare er CSS med lidt ekstra ovenpå.

Jeg selv foretrækker SCSS frem for Sass, fordi det er tættere på CSS og rarere for de fleste udviklere. På grund af det, så er SCSS standard-syntaksen for disse retningslinjer. Du kan skifte til indenteret Sass syntaks via <button type="button" data-a11y-dialog-show="options-panel" class="link-like">indstillingspanelet</button>.

**Videre læsning:**

* [What’s the difference between Sass and SCSS](https://www.sitepoint.com/whats-difference-sass-scss/)

### Andre preprocessorer

Sass er en preprocessor blandt mange andre. Dens mest seriøse konkurrent må være [LESS](http://lesscss.org/), en Node.js-baseret preprocessor, der er blevet ret populært fordi det kendte CSS framework [Bootstrap](https://getbootstrap.com/) anvender det. Der findes også [Stylus](https://stylus-lang.com/) - som er den nørdede, ubegrænsede version af LESS - hvor du kan gøre praktisk taget lige hvad du vil, da den nærmest transformerer CSS om til et programmeringssprog.

*Hvorfor vælge Sass frem for LESS eller en anden preprocessor?*, er et godt spørgsmål selv i dag. For ikke så længe siden anbefalede vi Sass til Ruby-baserede projekter, fordi det først var skrevet i Ruby og fungerede godt med Ruby on Rails. Nu hvor LibSass (næsten) er på samme niveau som det originale Sass, så er anbefalingen ikke længere relevant.

Hvad jeg godt kan lide ved Sass er dets konservative tilgang til CSS. Sass' design er baseret på stærke principper: meget af designtilgangen kommer naturligt fra hovedteamets overbevisninger om, at a) tilføjelse af ekstra funktionaliteter har en kompleksitetsudgift, som skal retfærdiggøres på baggrund af brugbarhed, og b) at det skal være nemt at argumentere for hvad en given blok af styles laver ud fra at se på blokken alene. Dertil, så har Sass et meget skarpere øje for detaljer end de andre preprocessorer. Så vidt jeg ved bekymrer hovedteamet sig meget om at støtte hver eneste edge-case af CSS-kompatibilitet, og sikrer sig at hver enkelt generel adfærd er konsistent.

Med andre ord, så er Sass ikke en preprocessor der er målrettet mod at please nørdede wannabe-programmører som mig, ved at tilføje særlige funktionaliteter ovenpå et sprog der ikke er tiltænkt at skulle understøtte nogen logiske brugssituationer. Det er et stykke software målrettet mod at løse aktuelle problemer; at hjælpe med at tilføje brugbar funktionalitet til CSS, dér hvor CSS kommer til kort.

Lad os lægge preprocessorerne til side, da vi også bør nævne postprocessorer, der har modtaget nævneværdig eksponering de sidste par måneder, hovedsageligt på grund af [PostCSS](https://github.com/postcss/postcss) og [cssnext](https://cssnext.github.io/). Postprocessorer er rimeligt meget det samme som preprocessorer bortset fra at de ikke tilføjer andet end den kommende CSS syntax.

Du kan tænke på postprocessorer som en slags polyfill for ikke-understøttede CSS funktionaliteter. For eksempel, så ville du skrive variabler som de beskrives i [CSS specifications](https://drafts.csswg.org/css-variables/), dernæst kompilere dine stylesheets med en postprocessor for derefter at opleve at hver variabel bliver erstattet med dets værdi, ligesom Sass ville gøre.

Idéen bag postprocessorer er, at når browsere støtter nye funktionaliteter (f.eks. CSS variabler), så vil postprocessoren ikke kompilere dem længere og lade browserne tage over.

Selvom det at give os morgendagens syntaks i dag er en nobel idé, så bliver jeg nødt til at sige at jeg stadig foretrækker at anvende Sass til de fleste opgaver. Dog er der situationer, hvor jeg tror at postprocessorer er mere velegnet end Sass og lignende - CSS præ-fiksing for eksempel - men dette vender vi tilbage til.

**Videre læsning:**

* [LESS](http://lesscss.org/)
* [Stylus](https://stylus-lang.com/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)
