
# Indledning

## Hvorfor en styleguide

En styleguide er ikke bare en hyggelæsning, der maler et ideelt billede af din kode. Det er et vigtigt dokument i et projekts liv, der beskriver hvordan og hvorfor kode bør blive skrevet. Det kan se overdrevet ud til små projekter, men det hjælper meget med at holde kodebasen ren, skalérbar og let at vedligeholde.

Det er unnødvendigt at sige, at jo flere udviklere der er involveret i et projekt desto flere kode-guidelines er nødvendige. I samme dur, så jo større et projekt desto mere et krav er en styleguide.

[Harry Roberts](http://csswizardry.com) forklarer dette meget godt i [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>En programmeringsstyleguide (bemærk, ikke en visuel styleguide) er et værdifuldt værktøj for teams som:</p>

  <ul>
    <li>bygger og vedligeholder produkter over en rimelig mængde tid;</li>
    <li>har udviklere med forskellige evner og specialiseringer;</li>
    <li>har et antal af forskellige udviklere, der arbejder på et produkt på ethvert givent tidspunkt;</li>
    <li>oplærer nye ansatte regelmæssigt;</li>
    <li>har et antal af kodebaser, som udviklere skal dykke ned i og op ad.</li>
  </ul>
</blockquote>

## Disclaimer

Først og fremmest: **dette er ikke en CSS styleguide**. Dette dokument vil ikke diskutere konventioner for navngivning af CSS-klasser, modulære mønstre og spørgsmålet om ID'er i CSS-verdenen. Disse guidelines fokuserer kun på hvordan man arbejder med Sass-specifikt indhold.

Dertil, så er denne styleguide min egen og derfor **meget farvet**. Tænk på denne som en samling af metodologier og råd, som jeg har poleret og givet over årene. Det har også givet mig muligheden for at linke til en håndful indsigtsfulde resourcer, så vær sikker på at tjekke *Videre læsninger* ud.

Det er åbenlyst, at dette selvfølgelig ikke er den eneste måde at gøre tingene på, og det vil eller vil ikke passe dit projekt. Vær velkommen til at udvælge hvad du kan bruge, og tilpasse det til dine behov. ** 

Obviously, this is certainly not the only way of doing things, and it may or may not suit your project. Feel free to pick from it and adapt it to your needs. *Your mileage may vary*, som vi siger.

## Nøgleprincipper

Når alt kommer til alt, så hvis der er noget jeg gerne vil have at du tager med dig fra hele denne styleguide er, at **Sass bør holdes så enkelt som det kan blive**.

Takket være mine fjollede eksperimenter, såsom [bitwise operatører](https://github.com/HugoGiraudel/SassyBitwise), [iteratorer og generatorer](https://github.com/HugoGiraudel/SassyIteratorsGenerators) og [en JSON parser](https://github.com/HugoGiraudel/SassyJSON) i Sass, så er vi alle meget klar over hvad man kan gøre med denne preprocessor.

I mellemtiden, så er CSS et simpelt sprog. Sass, tiltænkt til at skrive CSS, bør ikke blive meget mere kompleks end almindeligt CSS. [KISS princippet](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid) er nøglen her, og kan endda være vigtigere end [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself) i nogle tilfælde.

Sommetider er det bedre at gentage sig selv en smule for at holde koden vedligeholdelsesvenlig fremfor at bygge et meget tungt, uhåndterbart og unnødvendigt kompliceret system, der er fuldstændig umulig at vedligeholde fordi det er alt for komplekst.

Dertil, så lad mig citere [Harry Roberts](https://csswizardry.com) endnu engang, **pragmatisme trumfer perfektion**. På et tidspunkt, så vil du højest sandsynlig finde dig selv i en situation hvor du går imod reglerne, som de står beskrevet her. Hvis det giver mening, så hvis det føles rigtigt, så gør det. Kode er kun måden, ikke målet.

###### Videre læsning

* [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
* [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)