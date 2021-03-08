
## Kommentering

CSS er et udfordrende sprog, fyldt med hacks og mærkværdigheder. På grund af det, så bør det blive kraftigt kommenteret, især hvis du eller andre har til hensigt at læse eller opdatere koden 6 måneder, eller 1 år, fra nu. Lad ikke dig selv eller andre komme i en situation af *Jeg-har-ikke-skrevet-det-her-åh-gud-hvorfor*.

Så simpelt som CSS kan blive, så er der stadig masser af plads til kommentarer. Disse kunne forklare:

* strukturen af/eller rollen af en fil;
* målet med et regelsæt;
* idéen bag et magisk tal;
* begrundelsen for en CSS deklaration;
* rækkefølgen af CSS deklarationer;
* tankeprocessen bag måde at gøre ting på;

Og jeg glemte sikkert en masse andre grunde. Kommentering tager meget lidt tid når det gøres samtidig med koden, så gør det på det rigtige tidspunkt. At vende tilbage til et stykke kode for at kommentere det er ikke blot urealistisk, men også ekstremt irriterende.

### At skrive kommentarer

Ideelt set, så bør *alle* CSS regelsæt foranstilles med en C-stil kommentar, der forklarer grunden bag CSS-blokken. Denne kommentar indeholder nummererede forklaringer, der vedrører specifikke dele af regelsættet. For eksempel:

{% include snippets/comments/01/index.html %}

Alt, der basalt set ikke er åbenlyst ved første øjekast, bør blive kommenteret. Der er ikke noget der hedder for meget dokumentation. Husk, at du kan ikke *kommentere for meget*, så kom i gang og skriv kommentarer til alt der gør sig fortjent til det.

Når du kommenterer en Sass-specifik sektion, så anvend indlejrede Sass-kommentarer i stedet for en C-stil blok. Dette gør kommentaren usynlig for outputtet, selv ved udvidet tilstand under udvikling.

{% include snippets/comments/02/index.html %}

**Videre læsning:**

* [CSS Guidelines’ Commenting section](https://cssguidelin.es/#commenting)

### Dokumentation

Hver variabel, funktion, mixin og placeholder, der har til hensigt at blive genbrugt igennem hele kodebasen, bør dokumenteres som en del af den globale API ved at anvende [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Tre skråstreger (<code>/</code>) påkrævet.</p>
</div>

SassDoc har to overordnede roller:

* at tvinge standardiserede kommentarer ved anvendelse af et annotations-baseret system til alt der er en del af en offentlig eller privat API;
* at være i stand til at generere en HTML version af API-dokumentationen ved hjælp af SassDoc endpoints (CLI værktøjer, Grunt, Gulp, Broccoli, Node…)

{% include images/sassdoc.html %}

Her er et eksempel af en mixin, der er omfattende dokumenteret med SassDoc:

{% include snippets/comments/04/index.html %}

**Videre læsning:**

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](https://www.sitepoint.com/sassdoc-documentation-tool-sass/)
