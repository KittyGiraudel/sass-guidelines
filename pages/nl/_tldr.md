
## Too Long; Didn’t read

Deze richtlijnen zijn vrij lang en soms is het goed om ze in een kortere versie op te sommen. Hieronder vindt u deze samenvatting.

### Basisprincipes

* Bij het hebben van een stijlgids draait alles om **consistentie**. Als u het niet eens bent met sommige regels uit de Sass-richtlijnen, is dat redelijk, zolang u maar consistent bent.
* Sass moet zo eenvoudig mogelijk worden gehouden. Bouw geen complexe systemen, tenzij dit absoluut noodzakelijk is.
* Houd er rekening mee dat *KISS* (Keep It Simple, Stupid) soms beter is dan *DRY* (Don't Repeat Yourself).

### Syntaxis en Opmaak

* Een inspringing bestaat uit twee (2) spaties, geen tabs.
* Regels moeten zoveel mogelijk korter zijn dan 80 tekens. Voelt u zich vrij om ze indien nodig op te splitsen in verschillende regels.
* CSS moet correct worden geschreven, mogelijk volgens de [CSS Guidelines](https://cssguidelin.es) van Harry Roberts.
* Witruimte is gratis, gebruik het om items, regels en verklaringen te scheiden. Aarzel niet om lege regels achter te laten, het doet nooit pijn.

#### tekenreeksen

* Het wordt ten zeerste aanbevolen om de `@charset`-richtlijn bovenaan het stylesheet te verklaren.
* Tenzij toegepast als CSS-ID's, moeten tekenreeksen tussen enkele aanhalingstekens worden geplaatst. URL's moeten ook worden geciteerd.

#### Getallen

* Sass maakt geen onderscheid tussen getallen, gehele getallen en floats, dus achterliggende nullen (0) moeten worden weggelaten. Voorloopnullen (0) helpen echter de leesbaarheid en moeten worden toegevoegd.
* Een lengte van nul (0) mag geen eenheid hebben.
* Het manipuleren van eenheden moet worden gezien als rekenkundige bewerkingen, niet als tekenreeksbewerkingen.
* Om de leesbaarheid te verbeteren, moeten berekeningen op het hoogste niveau tussen haakjes worden geplaatst. Ook kunnen complexe wiskundige bewerkingen worden opgesplitst in kleinere delen.
* Magische getallen hebben een dramatische invloed op de onderhoudbaarheid van de code en moeten te allen tijde worden vermeden. Leg bij twijfel uitgebreid de twijfelachtige waarde uit.

#### Kleuren

* Kleuren moeten indien mogelijk worden uitgedrukt in HSL, dan RGB en dan hexadecimaal (in kleine letters en verkorte vorm). Kleurzoekwoorden moeten worden vermeden.
* Geef de voorkeur aan `mix(..)` in plaats van `darken(..)` en `lighten(..)` bij het lichter of donkerder maken van een kleur.

#### Lijsten

* Tenzij ze worden gebruikt als een directe toewijzing aan door spaties gescheiden CSS-waarden, moeten lijsten worden gescheiden met komma's.
* Het omhullen van haakjes moet ook worden overwogen om de leesbaarheid te verbeteren.
* Inline lijsten mogen geen komma hebben, meerregelige lijsten zouden deze moeten hebben.

#### Maps

* Maps die meer dan één paar bevatten, worden op meerdere regels geschreven.
* Om de onderhoudbaarheid te bevorderen, moet het laatste paar van een map een komma hebben.
* Mapsleutels die toevallig tekenreeksen zijn, moeten als elke andere tekenreeks worden aangehaald.

#### Verklaringsortering

* Het systeem dat wordt gebruikt voor het sorteren van verklaringen (alfabetisch, op type, etc.) doet er niet toe, zolang het maar consistent is.

#### Selector nesten

* Vermijd het nesten van selectors wanneer dit niet nodig is (wat de meeste gevallen vertegenwoordigt).
* Gebruik selector nesten voor pseudo-klassen en pseudo-elementen.
* Mediaquery's kunnen ook in hun relevante selector worden genest.

### Naamgevingsconventies

* Het is het beste om vast te houden aan CSS-naamgevingsconventies die (behalve een paar fouten) in kleine letters en met koppeltekens worden gescheiden.

### Commentaar geven

* CSS is een lastige taal; aarzel niet om zeer uitgebreide opmerkingen te schrijven over dingen die er niet uitzien (of zijn).
* Gebruik SassDoc-opmerkingen voor variabelen, functies, mixins en tijdelijke aanduidingen die een openbare API opzetten.

### Variabelen

* Gebruik de `!default` flag voor elk variabel deel van een openbare API dat veilig kan worden gewijzigd.
* Gebruik de `!global` flag niet op rootniveau, aangezien dit in de toekomst een schending van de Sass-syntaxis kan vormen.

### Extend

* Blijf bij het verlengen van tijdelijke aanduidingen, niet bij bestaande CSS-selectors.
* Verleng een tijdelijke aanduiding zo vaak mogelijk om bijwerkingen te voorkomen.
