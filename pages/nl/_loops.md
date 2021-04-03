
## Lussen

Omdat Sass complexe datastructuren biedt, zoals [lijsten](#lijsten) en [maps](#maps), is het geen verrassing dat het ook een manier biedt voor auteurs om deze entiteiten te herhalen.

De aanwezigheid van lussen impliceert echter meestal matig complexe logica die waarschijnlijk niet tot Sass behoort. Voordat u een lus gebruikt, moet u ervoor zorgen dat deze logisch is en dat deze daadwerkelijk een probleem oplost.

### Each

De `@each`-lus is absoluut de meest gebruikte van de drie lussen die door Sass worden aangeboden. Het biedt een schone API om een lijst of een map te herhalen.

{% include snippets/loops/01/index.html %}

Gebruik bij iteratie op een map altijd `$key` en `$value` als variabelenamen om consistentie af te dwingen.

{% include snippets/loops/02/index.html %}

Zorg er ook voor dat u deze richtlijnen respecteert om de leesbaarheid te behouden:

* Altijd een lege nieuwe regel voor `@each`;
* Altijd een lege nieuwe regel na het sluitaccolade (`}`) tenzij de volgende regel een sluitaccolade is (`}`).

### For

De `@for`-lus kan handig zijn in combinatie met CSS’ `:nth-*` pseudo-klassen. Behalve voor deze scenario's, geeft u de voorkeur aan een `@each`-lus als u over iets *moet* herhalen.

{% include snippets/loops/03/index.html %}

Gebruik altijd `$i` als een variabelenaam om vast te houden aan de gebruikelijke conventie en tenzij u een echt goede reden hebt, gebruik nooit het `to` trefwoord: gebruik altijd `through`. Veel ontwikkelaars weten niet eens dat Sass deze variant aanbiedt; het gebruik ervan kan tot verwarring leiden.

Zorg er ook voor dat u deze richtlijnen respecteert om de leesbaarheid te behouden:

* Altijd een lege nieuwe regel voor `@for`;
* Altijd een lege nieuwe regel na het sluitaccolade (`}`) tenzij de volgende regel een sluitaccolade is (`}`).

### While

De `@while`-lus heeft absoluut geen use-case in een echt Sass-project, vooral omdat er geen manier is om een lus van binnenuit te doorbreken. **Gebruik het niet**.
