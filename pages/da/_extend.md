
## Extend

`@extend` direktivet er en af de funktionaliteter der har gjort Sass så populært for et par år siden. Som en påmindelse, så er det muligt at fortælle Sass at det skal style element A præcis som hvis det også matchede selektor B. Det er derfor unnødvendigt at sige, at det kan ende med at blive en ret værdifuld allieret når der skal skrives modulært CSS.

Når der er sagt, så føler jeg, at jeg bør advare dig imod denne funktionalitet. Selvom den er smart, så er `@extend` stadig et ret udfordrende koncept, der kan gøre mere skade end gavn, især hvis anvendt forkert. Sagen er den, at når en selektor udvides, så har du lidt til ingen måde at at svare på disse spørgsmål uden at have dyb kendskab til hele kodebasen:

* hvor vil min nuværende selektor blive tilføjet?
* er der sandsynlighed for at jeg skaber uønskede bivirkninger?
* hvor stor er den genererede CSS, der skabes af denne enkelte extend?

Ud fra hvad du ved, så kunne resultatet variere fra at gøre ingenting til at forårsage katastrofale bivirkninger. Derfor er mit første råd helt at undgå `@extend`-direktivet. Det lyder måske brutalt, men når alt kommer til alt, så kan det redde dig fra et par hovedpiner og problemer.

Med det sagt, så kender du ordsproget:

> Aldrig sig aldrig.<br>
> &mdash; Tilsyneladende, [ikke Beyonce](https://github.com/KittyGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Der er scenarier, hvor at udvide selektorer kan være hjælpsomt og tiden værd. Hav dog altid disse regler for øje, så du ikke kommer i problemer:

* Brug extend inden i et modul, ikke på tværs af forskellige moduler.
* Brug extend udelukkende på placeholdere, ikke på egentlige selektorer.
* Vær sikker på at placeholderen, du udvider, er så lidt til stede som muligt i stylesheetet.

Hvis du skal til at anvende extend, så lad mig minde dig om at den ikke fungerer godt sammen med `@media` blokke. Som du muligvis ved, så er Sass ikke i stand til at udvide en ydre selektor inden i en media query. Når du gør det, så bryder compileren simpelthen ned, og fortæller dig at du ikke kan gøre sådan. Ikke så fedt. Især da media queries nu næsten er alt hvad vi laver.

{% include snippets/extend/01/index.html %}

> Du bør ikke @extend'e en ydre selektor indefra @media.<br>
> Du bør kun @extend'e selektorer inden for det samme direktiv.

<div class="note">
  <p>Ofte siges det, at <code>@extend</code> hjælper med filstørrelsen, siden den kombinerer selektorer fremfor at duplikere egenskaber. Det er sandt, dog er forskellen minimal når først <a href="https://en.wikipedia.org/wiki/Gzip">Gzip</a> er færdig med sin kompression.</p>
  <p>Når det er sagt, så hvis du ikke kan bruge Gzip (eller noget lignende), så kan det at skifte til en <code>@extend</code> tilgang muligvis ikke være så slem når du ved hvad du laver.</p>
</div>

For at opsummere, så vil jeg **anbefale imod brugen af `@extend` direktivet**, medmindre under særlige omstændigheder, men jeg vil ikke gå så langt som at forbyde det.

**Videre læsning:**

* [What Nobody Told you About Sass Extend](https://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](https://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
