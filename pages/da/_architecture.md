
## Arkitektur

At konstruere et CSS projekt er højest sandsynlig noget af det sværeste du kommer til at lave i et projekts levetid. At holde arkitekturen konsistent og meningsfuld er endnu sværere.

Heldigvis er en af hovedfordelene ved at have en CSS preprocessor evnen til at kunne splitte kodebasen i flere filer, uden at det påvirker performance (som `@import` CSS-direktivet ville gøre). Takket være Sass' overload af `@import` direktivet, så er det fuldstændig sikkert (og faktisk anbefalet) at bruge så mange filer som nødvendigt i udvikling, og derefter samle alle i ét enkelt stylesheet når man går i produktion.

Oven på det, så kan jeg ikke udtrykke nødvendigheden for mapper nok, selv ved mindre projekter. Du smider ikke alle dine papirark i den samme kasse derhjemme. Du bruger mapper; en til huset/lejligheden, en til banken, en til regningerne og så videre. Der er ingen grund til ikke at strukturere et CSS projekt på samme måde. Split kodebasen i meningsfulde mapper, så det er nemt at finde tingene senere når du er nødt til at vende tilbage til koden.

Der er mange populære arkitekturer for CSS-projekter: [OOCSS](http://oocss.org/), [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](https://getbootstrap.com/)-lignende, [Foundation](https://get.foundation/)-lignende… De har alle deres meritter, fordele og ulemper.

Jeg selv bruger en tilgang der har vist sig at være meget lig [SMACSS](http://smacss.com/) fra [Jonathan Snook](https://snook.ca/), der fokuserer på at holde tingene simple og åbenlyse.

<div class="note">
  <p>Jeg har lært at arkitetur, for det meste, er meget specifik til projektet. Det står dig frit for helt at afskrive eller tilpasse løsningsforslaget, så du står med et system der dækker dine behov.</p>
</div>

**Videre læsning:**

* [Architecture for a Sass project](https://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](https://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS](http://smacss.com/)
* [An Introduction to OOCSS](https://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, une architecture composée](https://slides.com/kittygiraudel/sass-une-architecture-composee)

### Komponenter

Der er en kæmpe forskel mellem at få noget til at *virke*, og at få noget til at blive *godt*. Igen, så er CSS et ret rodet sprog <sup>[citation mangler]</sup>. Jo mindre CSS vi har, jo bedre. Vi ønsker ikke at håndtere megabytes af CSS-kode. For at holde dine stylesheets korte og effektive&mdash;og det her vil ikke komme som en overraskelse for dig&mdash;så det er tit en god idé at tænke på et interface som en samling af komponenter.

Komponenter kan være hvad som helst, så længe de:

* gør én ting, og kun én ting;
* er genbrugelige og genbrugt på tværs af projektet;
* er uafhængige.

For eksempel bør en søgeformular behandles som et komponent. Det bør være genbrugeligt ved forskellige positioner, på forskellige sider og i forskellige situationer. Den bør ikke være afhængig af dens position i DOM'en (footer, sidebar, hovedindhold…).

Størstedelen af ethvert interface kan tænkes som små komponenter, og jeg anbefaler kraftigt at du holder dig til dette paradigme. Det vil ikke kun forkorte mængden af CSS der skal bruges til hele projektet, men det gør det også meget nemmere at håndtere end et kaotisk rod, hvor alting flyder rundt.

### 7-1 Mønstret

Lad os vende tilbage til arkitektur. Jeg arbejder typisk med hvad jeg kalder *7-1 mønstret*: 7 mapper, 1 fil. Basalt set, så har du alle dine partials pakket ned i 7 forskellige mapper, og en enkelt fil på rod-niveauet (oftest kaldet `main.scss`) der importerer dem alle til at blive kompileret til ét CSS stylesheet.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

Og selvfølgelig:

* `main.scss`

{% include images/wallpaper.html %}

Ideelt set, så kan vi ende med noget som dette:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Filer følger de samme konventioner for navngivelse beskrevet ovenfor: afgrænset med en bindestreg.</p>
</div>

#### Base mappen

`base/` mappen holder på alt hvad vi kan kalde boilerplate-kode for projektet. Derinde finder du typisk reset-filen, nogle typografiske regler, og højest sandsynlig et stylesheet (som jeg er vant til at kalde `_base.scss`), der definerer nogle standard styles for de oftest anvendte HTML-elementer.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

#### Layout mappen

`layout/` mappen indeholder alt der omhandler layoutet af siden eller applikationen. Denne mappe kan have stylesheets for hoveddelene af siden (header, footer, navigation, sidebar…), gitter-systemet eller endda CSS styles for alle formularerne.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p><code>Layout/</code> mappen kan også kaldes <code>partials/</code>, afhængigt af hvad du foretrækker.</p>
</div>

#### Components mappen

Til mindre komponenter er der `components/` mappen. Mens `layout/` er *makro* (der definerer den globale wireframe), så fokuserer `components/` mere på widgets. Den indeholder alle slags specifikke moduler såsom en slider, en loader, et widget og basalt set alt derimellem. Der er ofte en masse filer i `components/`, da hele siden/applikationen stort set bør bestå hovedsageligt af bittesmå moduler.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p><code>Components/</code> mappen kan også kaldes <code>modules/</code>, afhængigt af hvad du foretrækker.</p>
</div>

#### Pages mappen

Hvis du har side-specifikke styles, så er det bedre at have dem i en `pages/` mappe, i en fil der er navngivet efter siden. For eksempel, så er det ikke unormalt at have meget specifikke styles for forsiden og derfor vil der være et behov for en `_home.scss` fil i `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Afhængigt af din implementeringsproces, så kan disse filer også blive kaldt enkeltvis, for at undgå at de bliver merged med andre i det samlede stylesheet. Det er helt op til dig.</p>
</div>

#### Themes mappen

Ved store sider og applikationer, så er det ikke unormalt at have forskellige temaer. Der er absolut forskellige måder at håndtere temaer, men personligt foretrækker jeg at have dem alle samlet i en `themes/` mappe.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Denne er meget projekt-specifik, og er ofte ikke-eksisterende i mange projekter.</p>
</div>

#### Utils mappen

`utils/` mappen samler alle de Sass værktøjer og hjælpere, der anvendes på tværs af projektet. Enhver global variabel, funktion, mixin og placeholder bør puttes herind.

Tommelfingerreglen for denne mappe er, at den ikke bør outputte en enkelt linje CSS når den kompileres for sig selv. De er intet andet end Sass hjælpere.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (oftest navngivet `_helpers.scss`)

<div class="note">
  <p><code>Utils/</code> mappen kan også kaldes <code>helpers/</code>, <code>sass-helpers/</code> eller <code>sass-utils/</code>, afhængigt af hvad du foretrækker.</p>
</div>

#### Vendors mappen

Og sidst, men ikke mindst, så vil de fleste projekter have en `vendors/` mappe der indeholder alle CSS filerne fra eksterne biblioteker og frameworks - Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, og så videre. At putte dem til side i den samme mappe er en god måde at sige “Hey, det her er ikke fra mig, ikke min kode, ikke mit ansvar”.

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Hvis du er nødt til at overskrive en sektion fra en udbyder, anbefaler jeg at du har en ottende mappe kaldet `vendors-extensions/`, hvori du kan have filer der er navngivet præcist efter de udbydere du overskriver.

For eksempel, `vendors-extensions/_bootstrap.scss` er en fil der indeholder alle de CSS regler, der har til hensigt at redeklarere noget af Bootstraps originale CSS. Det er for at undgå at redigere i selve udbyderfilerne, hvilket generelt ikke er en god idé.

#### Main filen

Main filen (oftest navngivet `main.scss`) bør være den eneste Sass fil i hele kodebasen, der ikke starter med et underscore. Denne fil bør ikke indeholde andet end `@import` og kommentarer.

Filer bør blive importeret i forhold til den mappe de lever i, én efter én, i følgende rækkefølge:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

For at bevare læsbarheden, bør main filen respektere følgende retningslinjer:

* en fil per `@import`;
* en `@import` per linje;
* ingen ny linje mellem to imports fra samme mappe;
* en ny linje efter den sidste import fra en mappe;
* filtyper og ledende underscores udeladt.

{% include snippets/architecture/02/index.html %}

Der er en anden måde at importerer partials, som jeg også anser som værende i orden. På den lyse side, så gør det filen mere læsbar. På den anden side, så gør dét det mere smertefuldt at opdatere. Under alle omstændigheder, så vil jeg lade dig om at beslutte hvad der er bedst, da det ikke betyder særlig meget. For denne måde, bør `main` filen respektere følgende guidelines:

* en `@import` per mappe;
* et linjeskift efter `@import`;
* en fil på sin egen linje;
* en ny linje efter den sidste import fra en mappe;
* filtyper og ledende underscores udeladt.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>For ikke at skulle importere hver fil manuelt, så findes der en udvidelse til Ruby Sass kaldet <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, der gør det muligt at anvende glob-mønstre i Sass <code>@import</code> som eksempelvis <code>@import "components/*"</code>.</p>
  <p>Med det sagt, så vil jeg ikke anbefale det fordi den importerer filerne i alfabetisk rækkefølge, hvilket typisk ikke er hvad du ønsker, især når du arbejder med et sprog der er afhængigt af en særlig kilde-rækkefølge.</p>
</div>

### Shame filen

Der findes et interessant koncept, der allerede er blevet gjort populært af [Harry Roberts](https://csswizardry.com), [Dave Rupert](https://daverupert.com) og [Chris Coyier](https://css-tricks.com), hvilket involverer at alle CSS-deklarationer, hacks og ting vi ikke er stolte af, bliver smidt i en *shame fil*. Denne fil, med den dramatiske titel `_shame.scss`, bliver så importeret efter alle andre filer, til sidst i stylesheetet.

{% include snippets/architecture/04/index.html %}

**Videre læsning:**

* [shame.css](https://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](https://csswizardry.com/2013/04/shame-css-full-net-interview/)
