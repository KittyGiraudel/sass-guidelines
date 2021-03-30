
## Mixins

Mixins zijn een van de meest gebruikte functies van de hele Sass-taal. Ze zijn de sleutel tot herbruikbaarheid en DRY componenten. En niet voor niets: met mixins kunnen auteurs stijlen definiëren die in het hele stylesheet kunnen worden hergebruikt zonder toevlucht te hoeven nemen tot niet-semantische klassen zoals `.float-left`.

Ze kunnen volledige CSS-regels bevatten en vrijwel alles wat overal in een Sass-document is toegestaan. Ze kunnen zelfs argumenten aannemen, net als functies. De mogelijkheden zijn uiteraard eindeloos.

Maar ik denk dat ik u moet waarschuwen voor misbruik van de kracht van mixins. Nogmaals, het sleutelwoord hier is *eenvoud*. Het is misschien verleidelijk om extreem krachtige mixins te bouwen met enorme hoeveelheden logica. Het wordt over-engineering genoemd en de meeste ontwikkelaars hebben er last van. Denk niet te lang na over uw code en houd het vooral simpel. Als een mixin langer wordt dan 20 regels of zo, dan moet deze in kleinere stukken worden opgesplitst of volledig worden herzien.

### Basics

Dat gezegd hebbende, mixins zijn buitengewoon handig en u zou er wat moeten gebruiken. De vuistregel is dat als u toevallig een groep CSS-eigenschappen ziet die altijd samen verschijnen om een reden (dat wil zeggen geen toeval), u ze in plaats daarvan in een mixin kunt plaatsen. De [micro-clearfix hack van Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) verdient het bijvoorbeeld om in een (argumentloze) mixin te worden gestopt.

{% include snippets/mixins/01/index.html %}

Een ander geldig voorbeeld is een mixin om een element op maat te maken, waarbij zowel `width` als `height` tegelijkertijd worden gedefinieerd. Het zou niet alleen de code lichter maken om te typen, maar ook gemakkelijker te lezen.

{% include snippets/mixins/02/index.html %}

Kijk voor meer complexe voorbeelden van mixins naar [deze om CSS-driehoeken te genereren](https://www.sitepoint.com/sass-mixin-css-triangles/), [deze om lange schaduwen te creëren](https://www.sitepoint.com/ultimate-long-shadow-sass-mixin/) of [deze om CSS-verlopen voor oude browsers te maken](https://www.sitepoint.com/building-linear-gradient-mixin-sass/).

### Argumentloze mixins

Soms worden mixins alleen gebruikt om te voorkomen dat dezelfde groep declaraties steeds opnieuw wordt herhaald, maar hebben ze geen parameter nodig of hebben ze zinnige standaardwaarden zodat we niet per se argumenten hoeven door te geven.

In dergelijke gevallen kunnen we de haakjes veilig weglaten wanneer we ze noemen. Het `@include` sleutelwoord (of `+` teken in inspringende syntaxis) fungeert al als een indicator dat de lijn een mixin-aanroep is; er zijn hier geen extra haakjes nodig.

{% include snippets/mixins/08/index.html %}

### Argumentenlijst

Gebruik bij het omgaan met een onbekend aantal argumenten in een mixin altijd een `arglist` in plaats van een lijst. Beschouw `arglist` als het 8e verborgen ongedocumenteerde gegevenstype van Sass dat impliciet wordt gebruikt bij het doorgeven van een willekeurig aantal argumenten aan een mixin of een functie waarvan de handtekening `...` bevat.

{% include snippets/mixins/03/index.html %}

Als u nu een mixin maakt die een handvol argumenten accepteert (begrijp er 3 of meer), denk dan twee keer na voordat u ze samenvoegt als een lijst of een map, denkend dat het gemakkelijker zal zijn dan ze allemaal een voor een door te geven.

Sass is eigenlijk best slim met mixins en functieverklaringen, zo erg zelfs dat u een lijst of een map als een `arglist` aan een functie/mixin kunt doorgeven, zodat het wordt geparseerd als een reeks argumenten.

{% include snippets/mixins/04/index.html %}

Voor meer informatie over of het het beste is om meerdere argumenten, een lijst of een argumentenlijst te gebruiken, [SitePoint heeft een mooi stuk over het onderwerp](https://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/).

### Mixins en vendorvoorvoegsels

Het kan verleidelijk zijn om aangepaste mixins te definiëren om prefixen van vendors af te handelen voor niet-ondersteunde of gedeeltelijk ondersteunde CSS-eigenschappen. Maar we willen dit niet doen. Ten eerste, als u [Autoprefixer](https://github.com/postcss/autoprefixer) kunt gebruiken, gebruik dan Autoprefixer. Het verwijdert Sass-code uit uw project, is altijd up-to-date en zal noodzakelijkerwijs veel beter werk leveren dan u bij toevoegen van voorvoegsel.

Helaas is Autoprefixer niet altijd een optie. Als u ofwel [Bourbon](https://bourbon.io/) of [Compass](http://compass-style.org/) gebruikt, weet u misschien al dat ze allebei een verzameling mixins bieden die voorvoegsels van vendors verwerken voor jou. Gebruik die.

Als u Autoprefixer niet kunt gebruiken en noch Bourbon noch Compass kunt gebruiken, dan en alleen dan, kunt u uw eigen mixin hebben om CSS-eigenschappen voor te voegen. Maar. Bouw alstublieft geen mixin per eigenschap, maar druk elke vendor handmatig af.

{% include snippets/mixins/05/index.html %}

Doe het op een slimme manier.

{% include snippets/mixins/06/index.html %}

Dan zou het gebruik van deze mixin heel eenvoudig moeten zijn:

{% include snippets/mixins/07/index.html %}

Houd er alstublieft rekening mee dat dit een slechte oplossing is. Het kan bijvoorbeeld niet omgaan met complexe polyfills zoals die nodig zijn voor Flexbox. In die zin zou het gebruik van Autoprefixer een veel betere optie zijn.
