
## Variabelen

Variabelen zijn de essentie van elke programmeertaal. Ze stellen ons in staat om waarden te hergebruiken zonder ze steeds opnieuw te hoeven kopiëren. Het belangrijkste is dat ze het bijwerken van een waarde heel gemakkelijk maken. Nooit meer zoeken en vervangen of handmatig crawlen.

CSS is echter niets anders dan een enorme mand met al onze eieren. In tegenstelling tot veel talen zijn er geen echte bereiken in CSS. Daarom moeten we echt opletten bij het toevoegen van variabelen met het risico getuige te zijn van conflicten.

Mijn advies zou zijn om alleen variabelen te maken als dat zinvol is. Start niet zomaar nieuwe variabelen, het zal niet helpen. Er mag alleen een nieuwe variabele worden gemaakt als aan alle volgende criteria is voldaan:

* de waarde wordt minstens twee keer herhaald;
* de waarde wordt waarschijnlijk minstens één keer bijgewerkt;
* alle gevallen van de waarde zijn gekoppeld aan de variabele (d.w.z. niet toevallig).

In feite heeft het geen zin om een variabele te declareren die nooit zal worden bijgewerkt of die alleen op één plaats wordt gebruikt.

### Scoping

Variabele scoping in Sass is in de loop der jaren veranderd. Tot vrij recent waren variabeleverklaringen binnen regelsets en andere bereiken standaard lokaal. Als er echter al een globale variabele met dezelfde naam was, zou de lokale toewijzing de globale variabele veranderen. Sinds versie 3.4 pakt Sass het concept van bereiken nu correct aan en maakt in plaats daarvan een nieuwe lokale variabele.

De documenten praten over *global variable shadowing*. Bij het declareren van een variabele die al bestaat op het globale bereik in een innerlijke bereik (selector, functie, mixin…), wordt gezegd dat de lokale variabele de globale *schaduwt*. In feite overschrijft het het alleen voor het lokale bereik.

Het volgende codefragment legt het *variable shadowing*-concept uit.

{% include snippets/variables/01/index.html %}

### `!default` flag

Bij het bouwen van een bibliotheek, een framework, een rastersysteem of een stukje Sass dat bedoeld is om te worden gedistribueerd en gebruikt door externe ontwikkelaars, moeten alle configuratievariabelen worden gedefinieerd met de `!default` flag zodat ze kunnen worden overschreven.

{% include snippets/variables/02/index.html %}

Dankzij dit kan een ontwikkelaar zijn eigen `$baseline`-variabele *definiëren voordat* uw bibliotheek wordt geïmporteerd zonder dat hun waarde opnieuw wordt gedefinieerd.

{% include snippets/variables/03/index.html %}

### `!global` flag

De `!global` flag mag alleen worden gebruikt bij het overschrijven van een globale variabele van een lokaal bereik. Bij het definiëren van een variabele op rootniveau, moet de `!global` flag worden weggelaten.

{% include snippets/variables/04/index.html %}

### Meerdere variabelen of maps

Het gebruik van maps heeft voordelen in plaats van meerdere verschillende variabelen. De belangrijkste is de mogelijkheid om over een map te lopen, wat niet mogelijk is met verschillende variabelen.

Een ander voordeel van het gebruik van een map is de mogelijkheid om een kleine *getter*-functie te maken om een vriendelijkere API te bieden. Overweeg bijvoorbeeld de volgende Sass-code:

{% include snippets/variables/05/index.html %}
