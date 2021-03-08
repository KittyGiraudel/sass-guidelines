
## Konventioner for navngivelse

I denne sektion vil vi ikke behandle hvad de bedste CSS navgivningskonventioner er for vedligeholdelse og skalering; det er ikke alene op til dig, det er også uden for rammerne af en Sass styleguide. Jeg foreslår disse, anbefalet af [CSS Guidelines](https://cssguidelin.es/#naming-conventions).

Der er få ting du kan navngive i Sass, og det er vigtigt at navngive dem ordentligt så hele kodebasen både ser konsistent ud og er let at læse:

* variabler;
* funktioner;
* mixins.

Sass-placeholdere er bevidst fjernet fra denne liste, siden de kan betragtes som almindelige CSS selektorer, hvilket følger de samme mønstre for navngivning som klasser.

Når det kommer til variabler, funktioner og mixins, så holder vi os til noget meget *CSS-agtigt*: **små bogstaver og afgrænset med bindestreg**, og først og fremmest meningsfuldt.

{% include snippets/naming/01/index.html %}

**Videre læsning:**

* [CSS Guidelines’ Naming Conventions](https://cssguidelin.es/#naming-conventions)

### Konstanter

Hvis du tilfældigvis er en framework-udvikler eller biblioteksforfatter, så finder du muligvis dig selv i færd med at behandle variabler, der ikke er tiltænkt at blive opdateret under nogen omstændigheder: konstanter. Desværre (eller heldigvis?), så giver Sass ikke nogen måde at definere denne slags enheder på, så vi er nødt til at holde os til strikse navngivningskonventioner for at slå vores pointe fast.

Som ved mange sprog, så anbefaler jeg variabelnavne i store bogstaver, med underscore som mellemrum når de er konstanter. Det er ikke blot en meget gammel konvention, men det giver også en god kontrast til de sædvanlige "små bogstaver med bindestreger som mellemrum"-variabler.

{% include snippets/naming/02/index.html %}

**Videre læsning:**

* [Dealing With Constants in Sass](https://www.sitepoint.com/dealing-constants-sass/)

### Namespace

Hvis du har til hensigt at distribuere din Sass kode, i tilfældet af et bibliotek, et framework, et gittersystem eller hvadend det kunne være, så bør du muligvis overveje at namespace alle dine variabler, funktioner, mixins og placeholdere så de ikke kolliderer med nogen andens kode.

For eksempel, hvis du arbejder på et *Sassy Unicorn* projekt, der er tænkt som at blive brugt af udviklere over hele verden (hvem ville ikke det, ikk?), så kunne du overveje at bruge `su-` som et namespace. Det er specifikt nok til at forebygge enhver navnekollision og er kort nok til at ikke at være træls at skrive.

{% include snippets/naming/03/index.html %}

<div class="note">
  <p>Bemærk, at automatisk namespacing absolut er et designmål for den kommende <code>@import</code> opdatering fra Sass 4.0. Efterhånden som det kommer tættere på at være realitet, så vil det blive mindre og mindre brugbart at foretage manuel namespacing; efterhånden vil manuelt namespacede biblioteker muligvis blive sværere at bruge.</p>
</div>

**Videre læsning:**

* [Please Respect the Global CSS Namespace](https://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
