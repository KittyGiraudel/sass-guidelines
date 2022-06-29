
## Værktøjer

Dét der er rart ved en så populær CSS preprocessor som Sass er, at den kommer med et helt økosystem af frameworks, plugins, biblioteker og værktøjer. Efter 8 års eksistens er vi ved at komme tættere og tættere på et punkt hvor [alt der kan skrives i Sass er blevet skrevet i Sass](https://kittygiraudel.com/2014/10/27/rethinking-atwoods-law/).

Mit råd er dog, at sænke antallet af dependencies til det absolut nødvendige. At håndtere dependencies er en form for helvede du ikke ønsker at være en del af. Plus, der er begrænset til intet behov for eksterne dependencies når det kommer til Sass.

### Compass

[Compass](http://compass-style.org/) er det primære Sass framework derude. Udviklet af [Chris Eppstein](https://twitter.com/chriseppstein), en af hoved-designerne bag Sass, og jeg ser det ikke tabe popularitet dramatisk det næste stykke tid, hvis du spørger mig.

Når det er sagt, så bruger jeg ikke Compass mere. Hovedårsagen er, at det gør Sass meget langsommere. Ruby Sass er ret langsomt i sig selv, så at tilføje mere Ruby og mere Sass ovenpå hjælper ikke rigtigt.

Sagen er, at vi bruger meget lidt fra hele frameworket. Compass er enormt. Mixins til kryds-browser kompatibilitet er bare toppen af isbjerget. Matematik-funktioner, billede-hjælpere, spriting... Der er så meget der kan klares med dette fantastiske stykke software.

Desværre er det hele sukker, og der er ikke nogen overvældende funktioner inde i pakken. En undtagelse kan gøres med sprite-byggeren, som er *virkelig god*, men [Grunticon](https://github.com/filamentgroup/grunticon) og [Grumpicon](http://grumpicon.com/) klarer også jobbet, og har fordelen af at kunne tages ind og ud af build-processen.

Under alle omstændigheder, så afviser jeg ikke brugen af Compass selvom jeg heller ikke vil anbefale det, især siden det ikke er kompatibel med LibSass (selv hvis der skulle blive gjort indsats i den retning). Hvis du føler dig mere tilpas ved at bruge det, fair nok, men jeg tror ikke du får meget ud af det når alt kommer til alt.

<div class="note">
  <p>Ruby Sass er p.t. ved at gennemgå nogle ekstraordinære optimering, som er specifikt målrettet mod logik-tunge styles med mange funktioner og mixins. De skulle forbedre effektiviteten dramatisk til et punkt hvor Compass og andre frameworks muligvis ikke længere vil sløve Sass.</p>
</div>

**Videre læsning:**

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](https://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Why I don't use Compass anymore](https://www.sitepoint.com/dont-use-compass-anymore/)
* [Is Compass to Sass with jQuery is to JavaScript?](https://www.sitepoint.com/compass-sass-jquery-javascript/)

### Gitter-systemer

At undlade at anvende et gitter-system er ikke længere en mulighed, nu hvor Responsivt Web Design er overalt. For at få designs til at se konsistente og solide ud på tværs af alle skærmstørrelser, anvender vi en eller anden form for gitter til at layoute elementer. For at undgå at skulle kode dette gitter igen og igen, så har nogle geniale folk gjort deres genbrugelige.

Lad mig gøre det helt klart: Jeg er ikke den store fan af gitter-systemer. Selvfølgelig ser jeg et potentiale, men mest ser jeg dem som at skyde gråspurve med kanoner, og anvendes for det meste til at tegne røde kolonner på en hvid baggrund i nørdede designeres præsentationer. Hvornår tænkte du sidst *gudskelov-at-jeg-har-det-her-værktøj-til-at-bygge-2-5-3-1-π-gitre*? Aldrig, det er rigtigt. Fordi i de fleste tilfælde, så ønsker du bare det almindelige 12-kolonne gitter-system og ikke noget fancy.

Hvis du anvender et CSS framework til dit projekt, såsom [Bootstrap](https://getbootstrap.com/) eller [Foundation](https://get.foundation/), så er der stor sandsynlighed for at det allerede inkluderer et gitter-system, som jeg i det tilfælde vil anbefale at du bruger så du undgår at skulle håndtere endnu en dependency.

Hvis du ikke er tilknyttet til et specifikt gitter-system, så vil det nok glæde dig at vide at der findes to top-kvalitets gitter-motorer baseret på Sass derude: [Susy](https://www.oddbird.net/susy/) og [Singularity](https://github.com/at-import/Singularity). Begge gør meget mere end du nogensinde vil få brug for, så du kan vælge den af dem du foretrækker og være sikker på at alle dine særtilfælde &mdash;selv de mest specielle af slagsen&mdash; vil være dækket. Hvis du spørger mig, så har Susy en anelse bedre community, men det er min holdning.

Alternativt kan du gå over til noget mere nede på jorden, såsom [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). Når alt kommer til alt, vil dit valg ikke have den store indvirkning på din kodestil, så det er faktisk mest op til dig.

**Videre læsning:**

* [Susy](https://www.oddbird.net/susy/)
* [Build Web Layouts Easily with Susy](https://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](https://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](https://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap’s Grid System vs Susy: a Comparison](https://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](https://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](https://www.sitepoint.com/creative-grid-system-sass-calc/)

### SCSS-lint

Kode-linting er meget vigtigt. Ved at følge retningslinjer fra en styleguide, vil mængden af kodekvalitetsfejl normalt blive reduceret, men ingen er perfekt, og der er altid ting der kan forbedres. Derfor kan man sige, at dét linte kode er lige så vigtigt som at kommentere den.

[SCSS-lint](https://github.com/causes/scss-lint) er et værktøj, der hjælper dig med at holde dine SCSS filer rene og læsbare. Det er fuldt tilpasseligt og nemt at integrere med dine egne værktøjer.

Heldigvis er anbefalinger for SCSS-lint meget lig de der beskrives i dette dokument. For at konfigurere SCSS-lint i forhold til Sass Guidelines, så anbefaler jeg følgende setup:

{% include snippets/tools/01/index.html %}

<div class="note">
  <p>Hvis du vil koble SCSS lint ind i din Grunt build proces, så bliver du nok glad for at vide at der er et Grunt plugin til netop dét kaldet <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Dertil, så hvis du er på jagt efter et smart program der virker både med SCSS-lint og lignende, så arbejder folkene hos <a href="https://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) på <a href="https://houndci.com/">Hound</a>.</p>
</div>

**Videre læsning:**

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](https://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](https://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](https://davidtheclark.com/scss-lint-styleguide/)
