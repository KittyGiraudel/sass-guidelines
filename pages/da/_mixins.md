
## Mixins

Mixins er en af de mest anvendte funktionaliteter fra hele Sass sproget. De er nøglen til genbrugelighed og DRY komponenter. Og af en god grund: mixins tillader forfattere at definere styles der kan genbruges igennem stylesheetet uden at skulle tøve til ikke-semantiske klasser såsom `.float-left`.

De kan indeholde hele CSS-regler og faktisk alt hvad der er tilladt overalt i et Sass dokument. De kan endda tage argumenter, præcis som funktioner. Det er unnødvendigt at sige, at mulighederne er uendelige.

Men jeg føler, at jeg må advare dig imod at misbruge magten ved mixins. Igen, *simplicitet* er nøgleordet her. Det kan være fristende at bygge ekstremt kraftulde mixins med massive mængder logik. Dette er at overkomplicere tingene, og de fleste udviklere lider af det. Lad være med at overtænke din kode, og hold den først og fremmest simpel. Hvis en mixin ender med at være mere end 20 linjer eller deromkring, så bør den enten blive splittet op i mindre stykker eller blive fuldstændig revideret.

### Det grundlæggende

Med det på plads, så er mixins ekstremt brugbare og du bør bruge et par stykker. Tommelfingerreglen er, at hvis det hænder for dig at du opdager en gruppe CSS egenskaber, der altid opstår som værende sammen af en grund (og ikke af tilfældighed), så kan du putte dem i en mixin i stedet. [Mikro-clearfix hacket fra Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) fortjener at blive puttet i en (argumentløs) mixin, for eksempel.

{% include snippets/mixins/01/index.html %}

Et andet validt eksempel ville være en mixin til at definere størrelsen på et element, der definerer både `width` og `height` på samme tid. Ikke alene vil det gøre koden meget lettere at skrive, men også nemmere at læse.

{% include snippets/mixins/02/index.html %}

**Videre læsning:**

* [Sass Mixins to Kickstart your Project](https://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](https://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](https://www.sitepoint.com/building-linear-gradient-mixin-sass/)

### Argumentliste

Når du står overfor et ukendt antal af argumenter i en mixin, så brug altid en `arglist` fremfor en liste. Tænk på `arglist` som den 8. skjulte, udokumenterede datatype fra Sass der anvendes implicit når et arbitrært antal af argumenter bliver videregivet til en mixin eller en funktion, hvis signatur indeholder `...`.

{% include snippets/mixins/03/index.html %}

Når du bygger en mixin, der accepterer en håndfuld argumenter (3 eller flere), så tænk to gange før du forener dem som en liste eller et map, i den tro at det vil være nemmere end at videregive dem alle en for en.

Sass er faktisk ret smart med mixins og funktions-deklarationer, så smart at du faktisk kan give den en liste eller et map som en arglist til en funktion/mixin, således at det bliver parset som en serie af argumenter.

{% include snippets/mixins/04/index.html %}

**Videre læsning:**

* [Sass Multiple Arguments, Lists or Arglist](https://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

### Mixins og vendor-præfikser

Det er fristende at definere skræddersyede mixins til at håndtere udbyder-præfikser for ikke-understøttede eller delvist understøttede CSS egenskaber. Men det ønsker vi ikke at gøre. Først og fremmest, hvis du kan bruge [Autoprefixer](https://github.com/postcss/autoprefixer), så brug Autoprefixer. Det vil fjerne Sass kode fra dit projekt, det vil altid være up-to-date og vil højest sandsynlig gøre et bedre arbejde med at præfikse ting end dig.

Desværre er Autoprefixer ikke altid en mulighed. Hvis du bruger enten [Bourbon](https://bourbon.io/) eller [Compass](http://compass-style.org/), så ved du sikkert at de begge giver dig en samling af mixins der håndterer præfikser for dig. Brug disse.

Hvis du ikke kan bruge Autoprefixer og hverken kan bruge Bourbon eller Compass, så da, og kun da, kan du have dine egne mixins til at præfikse CSS egenskaber. Men. Lad venligst være med at bygge en mixin per enhed, der manuelt udskriver hver udbyder.

{% include snippets/mixins/05/index.html %}

Gør det på den smarte måde.

{% include snippets/mixins/06/index.html %}

Derfra vil brugen af denne mixin være meget ligetil:

{% include snippets/mixins/07/index.html %}

Hav venligst for øje, at dette er en ringe løsning. For eksempel kan den ikke håndtere komplekse polyfills som dem der kræves til Flexbox. I den situation vil Autoprefixer være et langt bedre valg.

**Videre læsning:**

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](https://www.sitepoint.com/building-linear-gradient-mixin-sass/)
