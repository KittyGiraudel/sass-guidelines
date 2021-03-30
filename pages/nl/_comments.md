
## Commentaar geven

CSS is een lastige taal, vol hacks en eigenaardigheden. Daarom moet er veel commentaar op worden gegeven, vooral als u of iemand anders van plan is de code over 6 maanden of 1 jaar te lezen en bij te werken. Laat u of iemand anders niet in de positie zijn van *ik-heb-dit-niet-geschreven-oh-mijn-god-waarom*.

Hoe eenvoudig CSS ook kan zijn, er is nog steeds veel ruimte voor commentaar. Deze zouden het volgende kunnen verklaren:

* de structuur en/of rol van een dossier;
* het doel van een regelset;
* het idee achter een magisch getal;
* de reden voor een CSS-verklaring;
* de volgorde van CSS-verklaring;
* het denkproces achter een manier om dingen te doen.

En ik ben waarschijnlijk ook veel andere verschillende redenen vergeten. Commentaar geven kost heel weinig tijd als het naadloos samen met de code wordt gedaan, dus doe het op het juiste moment. Terugkomen op een stukje code om commentaar te geven, is niet alleen volkomen onrealistisch, maar ook buitengewoon vervelend.

### Commentaar schrijven

Idealiter moet *elke* CSS-regelset worden voorafgegaan door een commentaar in C-stijl waarin het punt van het CSS-blok wordt uitgelegd. Deze commentaar bevat ook genummerde uitleg over specifieke delen van de regelset. Bijvoorbeeld:

{% include snippets/comments/01/index.html %}

In principe moet alles wat op het eerste gezicht niet duidelijk is, worden becommentarieerd. Er bestaat niet zoiets als te veel documentatie. Onthoud dat u niet *teveel commentaar kunt geven*, dus ga in vuur en vlam en schrijf commentaar voor alles wat het waard is.

Gebruik bij het reageren op een Sass-specifieke sectie Sass inline-commentaar in plaats van een blok in C-stijl. Dit maakt het commentaar onzichtbaar in de uitvoer, zelfs in uitgebreide modus tijdens de ontwikkeling.

{% include snippets/comments/02/index.html %}

Merk op dat deze manier van doen ook wordt ondersteund door CSS-richtlijnen in de sectie [Commenting](https://cssguidelin.es/#commenting).

### Documentatie

Elke variabele, functie, mixin en tijdelijke aanduiding die bedoeld is om overal in de codebase te worden hergebruikt, moet worden gedocumenteerd als onderdeel van de globale API met behulp van [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Drie schuine strepen (<code>/</code>) vereist.</p>
</div>

SassDoc heeft twee hoofdrollen:

* gestandaardiseerde commentaar afdwingen met behulp van een op annotaties gebaseerd systeem voor alles wat deel uitmaakt van een openbare of privé-API;
* een HTML-versie van de API-documentatie kunnen genereren met behulp van een van de SassDoc-eindpunten (CLI-tool, Grunt, Gulp, Broccoli, Node…).

{% include images/sassdoc.html %}

Hier is een voorbeeld van een mixin uitgebreid gedocumenteerd met SassDoc:

{% include snippets/comments/04/index.html %}

