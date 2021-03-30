
## Voorwaardelijke instructies

U weet waarschijnlijk al dat Sass voorwaardelijke instructies geeft via de `@if` en `@else` richtlijnen. Tenzij u een middelmatige tot complexe logica in uw code hebt, zijn er geen voorwaardelijke instructies nodig in uw dagelijkse stylesheets. Eigenlijk bestaan ze vooral voor bibliotheken en frameworks.

Hoe dan ook, als u ooit merkt dat u ze nodig heeft, respecteer dan de volgende richtlijnen:

* Geen haakjes tenzij ze nodig zijn;
* Altijd een lege nieuwe regel voor `@if`;
* Altijd een lijnonderbreking na de openingsaccolade (`{`);
* `@else`-instructies op dezelfde regel als de vorige sluitaccolade (`}`).
* Altijd een lege nieuwe regel na het laatste sluitaccolade (`}`) tenzij de volgende regel een sluitaccolade is (`}`).

{% include snippets/conditions/01/index.html %}

Gebruik bij het testen op een valse waarde altijd het `not`-sleutelwoord in plaats van te testen op `false` of `null`.

{% include snippets/conditions/02/index.html %}

Zet altijd het variabele deel aan de linkerkant van de instructie, en het (on)verwachte resultaat aan de rechterkant. Omgekeerde voorwaardelijke instructies zijn vaak moeilijker te lezen, vooral voor onervaren ontwikkelaars.

{% include snippets/conditions/03/index.html %}

Als u voorwaardelijke instructies binnen een functie gebruikt om een ander resultaat te retourneren op basis van een bepaalde voorwaarde, zorg er dan altijd voor dat de functie nog steeds een `@return`-instructie heeft buiten een voorwaardelijk blok.

{% include snippets/conditions/04/index.html %}
