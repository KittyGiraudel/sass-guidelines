
# Responsivt Web Design og breakpoints

Jeg tror ikke at vi stadig behøver at introducere Responsivt Web Design, nu hvor det er overalt. Dog spørger du muligvis dig selv *hvorfor er der en sektion omkring RWD i en Sass styleguide?* Rent faktisk er der en del ting som kan gøres for at gøre arbejdet med breakpoints nemmere, så jeg tænkte at det ikke ville være en dårlig idé at liste dem her.

## Navngivelse af breakpoints

Jeg tænker at det er sikkert at sige, at media queries ikke bør være forbundet til specifikke enheder. For eksempel, så er det klart en dårlig idé at forsøge at ramme iPads og Blackberry telefoner alene. Media queries bør tage sig af en række af skærmstørrelser indtil designen bryder sammen, hvorefter den næste media query tager over.

Af de samme grunde, så bør breakpoints ikke blive navngivet efter enheder men efter noge tmere generelt. Især fordi at nogle telefoner nu er større end tablets, nogle tablets større en nogle små skærmcomputere, og så videre...

{% include snippets/rwd/01/index.html %}

Hertil, vil enhver navngivningskonvention der gør det krystalklart at et design ikke er tæt forbundet til en specifik enhedstype gør arbejdet godt, så længe det giver en slags fornemmelse for størrelsesorden.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>De forrige eksempler anvender indlejrede maps til at definere breakpoints, men dette afhænger faktisk af hvilken slags breakpoint-manager du anvender. Du kunne gå efter strenge fremfor indre maps for mere fleksibilitet (e.g. <code>'(min-width: 800px)'</code>).</p>
</div>

###### Videre læsning

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)

## Breakpoint manager

Når du har navngivet dine breakpoints som du ønsker, så har du brug for en måde til rent faktisk at bruge dem i egentlige media queries. Der findes rigeligt med måder, at gøre dette på, men jeg må sige at jeg er en stor fan af et breakpoint map læst af en getter-funktion. Dette system er både enkelt og effektivt.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Det er åbenlyst, at dette er en rimelig simpel breakpoint manager. Hvis du har behov for en mere eftergivende en, så anebfaler jeg at du ikke genopfinder hjulet og bruger noget som er bevist effektivt såsom <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> eller <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>

###### Videre læsning

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)

## Brug af Media Queries

For ikke så længe siden var der en ret ophedet debat omkring hvor media queries bør blive skrevet: hører de til indeni selektorer (som Sass tillader det), eller skal de være helt afkoblet fra dem? Jeg bliver nødt til at sige at jeg er en stærk forsvarer af *media-queries-indeni-selektorer*-systemet, da jeg tænker det spiller godt sammen med idéen om komponenter.

{% include snippets/rwd/04/index.html %}

Hvilket leder til det følgende CSS output:

{% include snippets/rwd/05/index.html %}

Du har muligvis hørt at denne konvention resulterer i duplikerede media queries i CSS-outputtet. Det er helt klart sandt. Dog, så er [der blevet foretaget tests](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) og det sidste ord i denne snak er, at det ikke betyder noget så snart Gzip (eller lignende) har gjort sit arbejde:

> … we undersøgte hvorvidt der var performance-påvirkninger ved kombinering vs spredning af Media Queries og kom til den konklusion, at forskellen, selvom den er grim, er minimal når den er værst, og grundlæggende ikke-eksisterende når den er bedst.<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), vedrørende [Breakpoint](http://breakpoint-sass.com/)

Så, hvis du virkelig er bekymret om duplikerede media queries, så kan du stadig bruge et værktøj til at forene dem, såsom [denne gem](https://github.com/aaronjensen/sass-media_query_combiner), dog føler jeg at jeg bliver nødt til at advare dig om de mulige bivirkninger af at flytte CSS kode rundt. Du bør vide, at kildekodens rækkefølge er vigtig.

###### Videre læsning

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
