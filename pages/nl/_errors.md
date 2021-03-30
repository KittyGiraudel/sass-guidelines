
## Waarschuwingen en fouten

Als er een functie is die vaak over het hoofd wordt gezien door Sass-ontwikkelaars, is het de mogelijkheid om dynamisch waarschuwingen en fouten uit te voeren. Sass wordt inderdaad geleverd met drie aangepaste richtlijnen om inhoud af te drukken in het standaard uitvoersysteem (CLI, compileer-app ...):

* `@debug`;
* `@warn`;
* `@error`.

Laten we `@debug` opzij zetten, aangezien het duidelijk bedoeld is om SassScript te debuggen, wat hier niet ons punt is. We blijven dan achter met `@warn` en `@error` die merkbaar identiek zijn, behalve dat de ene de compiler stopt en de andere niet. Ik laat u raden wat wat doet.

Nu is er in een Sass-project veel ruimte voor waarschuwingen en fouten. In principe kan elke mixin of functie die een specifiek type of argument verwacht, een fout genereren als er iets misgaat, of een waarschuwing weergeven bij het doen van een aanname.

### Waarschuwingen

Neem deze functie van [Sass-MQ](https://github.com/sass-mq/sass-mq) die een `px`-waarde naar `em` probeert te converteren, bijvoorbeeld:

{% include snippets/errors/01/index.html %}

Als de waarde een eenheidloos is, gaat de functie ervan uit dat de waarde bedoeld is om in pixels te worden uitgedrukt. Op dit punt kan een aanname riskant zijn, dus de gebruiker moet worden gewaarschuwd dat de software iets heeft gedaan dat als onverwacht kan worden beschouwd.

### Fouten

Fouten, in tegenstelling tot waarschuwingen, voorkomen dat de compiler verder gaat. In feite stoppen ze de compilatie en geven ze een bericht weer in de uitvoerstroom, evenals de stacktracering, wat handig is voor foutopsporing. Daarom zouden er fouten moeten worden gegenereerd als het programma niet kan blijven draaien. Probeer indien mogelijk het probleem te omzeilen en in plaats daarvan een waarschuwing weer te geven.

Stel dat u een *getter*-functie bouwt om toegang te krijgen tot waarden van een specifieke kaart. U zou een fout kunnen genereren als de gevraagde sleutel niet op de kaart voorkomt.

{% include snippets/errors/02/index.html %}

Voor meer informatie over hoe u `@error` efficiënt kunt gebruiken, zou [deze inleiding over foutafhandeling](https://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996) u moeten helpen.
