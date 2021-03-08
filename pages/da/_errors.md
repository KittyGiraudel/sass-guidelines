
## Advarsler og Fejl

Hvis der er en funktionalitet, der ofte bliver overset af Sass udviklere, så er det evnen til dynamisk at outputte advarsler og fejl. Rent faktisk, så har Sass tre særlige direktiver til udprintning af indhold i gængse output-systemer (CLI, kompileringsapps…):

* `@debug`;
* `@warn`;
* `@error`.

Lad os se bort fra `@debug`, da den åbenlyst er tænkt til debugging af SassScript, hvilket ikke er vores pointe her. Tilbage står vi med `@warn` og `@error`, der er bemærkelsesværdigt identiske bortset fra at den ene stopper compileren, mens den anden ikke gør. Jeg lader dig gætte hvilken der gør hvad.

Der er masser af plads i et Sass projekt til advarsler og fejl. Basalt set forventer enhver mixin eller funktion, at en specifik type eller argument kunne give en fejl hvis noget går galt, eller vise en advarsel når man udfører en antagelse.

**Videre læsning:**

* [An Introduction To Error Handling](https://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](https://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/KittyGiraudel/SassyLogger)

### Advarsler

Tag, for eksempel, denne funktion fra [Sass-MQ](https://github.com/sass-mq/sass-mq), der forsøger at konvertere en `px` til `em`:

{% include snippets/errors/01/index.html %}

Hvis værdien viser sig at være enhedsløs, så vil funktionen antage at værdien er ment som at skulle være udtrykt i pixels. Herved kan en antagelse være risikabel for brugeren og bør blive advaret om, at softwaren gjorde noget der kunne opfattes som uventet.

### Fejl

Fejl, modsat advarsler, forhindrer compileren i at fortsætte. De stopper basalt set kompilering og viser en besked i både output-strømmen og i stack-tracen, hvilket er brugbart til debugging. På grund af dette, bør fejl gives når der ikke er nogen anden måde for programmet at fortsætte. Hvis muligt bør du prøve at arbejde rundt om problemet og vise en advarsel i stedet.

For eksempel, lad os sige at du er ved at bygge en getter funktion, der tilgår værdier fra et specifikt map. Du kunne give en fejl, hvis den anmodede nøgle ikke eksisterer i map'et.

{% include snippets/errors/02/index.html %}
