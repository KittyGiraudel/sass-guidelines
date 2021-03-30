
## Architectuur

Het ontwerpen van een CSS-project is waarschijnlijk een van de moeilijkste dingen die u in het leven van een project zult moeten doen. De architectuur consistent en zinvol houden is nog moeilijker.

Gelukkig is een van de belangrijkste voordelen van het gebruik van een CSS-preprocessor de mogelijkheid om de codebase over verschillende bestanden te splitsen zonder de prestaties te beïnvloeden (zoals de `@import` CSS-richtlijn zou doen). Dankzij de overbelasting van de `@import`-richtlijn door Sass is het volkomen veilig (en eigenlijk aanbevolen) om zoveel bestanden te gebruiken als nodig is bij de ontwikkeling, allemaal gecompileerd in een enkele stylesheet wanneer ze in productie gaan.

Bovendien kan ik de behoefte aan mappen niet genoeg benadrukken, zelfs niet bij kleinschalige projecten. Thuis laat u niet elk vel papier in dezelfde doos vallen. U gebruikt mappen; een voor het huis/appartement, een voor de bank, een voor rekeningen, enzovoort. Er is geen reden om anders te doen bij het structureren van een CSS-project. Splits de codebase in zinvolle gescheiden mappen, zodat u later gemakkelijk dingen kunt terugvinden wanneer u terug moet naar de code.

Er zijn [veel populaire architecturen](https://www.sitepoint.com/look-different-sass-architectures/) voor CSS-projecten zoals: [OOCSS](https://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](https://getbootstrap.com/), [Foundation](https://get.foundation/)… Ze hebben allemaal hun verdiensten, voor- en nadelen.

Zelf gebruik ik een benadering die vrij veel lijkt op [SMACSS](http://smacss.com/) van [Jonathan Snook](https://snook.ca/), die zich richt op het eenvoudig houden en voor de hand liggend.

<div class="note">
  <p>Ik heb geleerd dat architectuur meestal heel specifiek is voor het project. Voelt u vrij om de voorgestelde oplossing helemaal weg te gooien of aan te passen zodat u te maken krijgt met een systeem dat bij u past.</p>
</div>

### Componenten

Er is een groot verschil tussen het laten *werken* en het *goed* maken. Nogmaals, CSS is nogal een rommelige taal <sup>[citation needed]</sup>. Hoe minder CSS we hebben, hoe beter. We willen niet omgaan met megabytes aan CSS-code. Om stylesheets kort en efficiënt te houden&mdash;en dit zal u niet verbazen&mdash;is het meestal een goed idee om een interface te zien als een verzameling componenten.

Componenten kunnen van alles zijn, zolang ze:

* maar één ding en slechts één ding doen;
* herbruikbaar zijn en hergebruikt in het hele project;
* onafhankelijk zijn.

Een zoekformulier moet bijvoorbeeld als een onderdeel worden behandeld. Het moet herbruikbaar zijn, op verschillende posities, op verschillende pagina's, in verschillende situaties. Het mag niet afhangen van zijn positie in de DOM (voettekst, zijbalk, hoofdinhoud…).

De meeste van elke interface kunnen worden gezien als kleine componenten en ik raad u ten zeerste aan om bij dit paradigma te blijven. Dit verkort niet alleen de hoeveelheid CSS die nodig is voor het hele project, maar is ook veel gemakkelijker te onderhouden dan een chaotische puinhoop waarin alles in de war is.

### Componentstructuur

Idealiter zouden componenten in hun eigen Sass-deel moeten bestaan (in de `components/` map, zoals beschreven in het [7-1 patroon](#het-7-1-patroon)), zoals `components/_button.scss`. De stijlen die in elk componentbestand worden beschreven, zouden alleen betrekking moeten hebben op:

* de stijl van de component zelf;
* de stijl van de varianten, modificatoren en/of staten van de component;
* de stijlen van de afstammelingen van het onderdeel (d.w.z. kinderen), indien nodig.

Als u wilt dat uw componenten extern een thema kunnen hebben (bijv. Vanuit een thema in de map `themes/`), beperk de verklaringen dan tot alleen structurele stijlen, zoals afmetingen (`width/height`), opvulling, marges, uitlijning, enz. Sluit stijlen uit zoals kleuren, schaduwen, lettertypevoorschriften, achtergrondregels, enz.

Een partiële component kan componentspecifieke variabelen, tijdelijke aanduidingen en zelfs mixins en functies bevatten. Houd er echter rekening mee dat u moet vermijden om te verwijzen naar componentbestanden (d.w.z. `@import`-en) van andere componentbestanden, aangezien dit de afhankelijkheidsgrafiek van uw project een onhoudbare, verwarde puinhoop kan maken.

Hier is een voorbeeld van een gedeeltelijke knopcomponent:

{% include snippets/architecture/06/index.html %}

<div class="note">
  <p>Met dank aan <a href="https://twitter.com/davidkpiano">David Khourshid</a> voor zijn hulp en expertise op dit gebied.</p>
</div>

### Het 7-1 patroon

Terug naar architectuur, zullen we? Ik ga meestal met wat ik het *7-1 patroon* noem: 7 mappen, 1 bestand. Kortom, u hebt al uw delen in 7 verschillende mappen gestopt, en een enkel bestand op het root-niveau (meestal genaamd `main.scss`) dat ze allemaal importeert om te worden gecompileerd in een CSS-stylesheet.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `abstracts/`
* `vendors/`

En uiteraard:

* `main.scss`

<div class="note">
  <p>Als u het 7-1 patroon wilt gebruiken, is er een <a href="https://github.com/KittyGiraudel/sass-boilerplate">boilerplate</a> klaar op GitHub. Het moet alles bevatten wat u nodig hebt om met deze architectuur aan de slag te gaan.</p>
</div>

{% include images/wallpaper.html %}

Idealiter kunnen we zoiets bedenken:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Bestanden volgen dezelfde naamgevingsconventies als hierboven beschreven: ze zijn gescheiden door koppeltekens.</p>
</div>

#### Base map

De `base/` map bevat wat we de standaardcode (_boilerplate_) voor het project zouden kunnen noemen. Daarin vindt u misschien het reset-bestand, enkele typografische regels en waarschijnlijk een stylesheet die enkele standaardstijlen definieert voor veelgebruikte HTML-elementen (die ik graag `_base.scss` noem).

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

<div class="note">
  <p>Als uw project <em>veel</em> CSS-animaties gebruikt, kunt u overwegen om een <code>\ _animations.scss</code>-bestand daarin toe te voegen met de <code>@keyframes</code>-definities van al uw animaties. Als u ze maar sporadisch gebruikt, laat ze dan leven langs de selectors die ze gebruiken.</p>
</div>

#### Layout map

De `layout/` map bevat alles dat een rol speelt bij het opmaken van de site of applicatie. Deze map kan stylesheets hebben voor de belangrijkste onderdelen van de site (koptekst, voettekst, navigatie, zijbalk…), het rastersysteem of zelfs CSS-stijlen voor alle formulieren.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>De <code>layout/</code> map kan ook <code>partials/</code> worden genoemd, afhankelijk van wat u verkiest.</p>
</div>

#### Components map

Voor kleinere componenten is er de map `components/`. Terwijl `layout/` *macro* is (waarmee het globale draadframe wordt gedefinieerd), is `components/` meer gericht op widgets. Het bevat allerlei specifieke modules zoals een slider, een lader, een widget en eigenlijk alles in die richting. Er zijn gewoonlijk veel bestanden in `components/` aangezien de hele site/applicatie voornamelijk uit kleine modules zou moeten bestaan.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>De <code>components/</code> map kan ook <code>modules/</code> worden genoemd, afhankelijk van wat u verkiest.</p>
</div>

#### Pages map

Als u paginaspecifieke stijlen heeft, is het beter om deze in een `pages/` map te plaatsen, in een bestand met de naam van de pagina. Het is bijvoorbeeld niet ongebruikelijk om zeer specifieke stijlen voor de startpagina te hebben, vandaar de behoefte aan een `_home.scss`-bestand in `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Afhankelijk van uw implementatieproces kunnen deze bestanden afzonderlijk worden aangeroepen om te voorkomen dat ze worden samengevoegd met de anderen in het resulterende stylesheet. Het hangt van u af.</p>
</div>

#### Themes map

Op grote sites en applicaties is het niet ongebruikelijk om verschillende thema's te hebben. Er zijn zeker verschillende manieren om met thema's om te gaan, maar persoonlijk vind ik het prettig om ze allemaal in een `themes/` map te hebben.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Dit is zeer projectspecifiek en zal bij veel projecten waarschijnlijk niet voorkomen.</p>
</div>

#### Abstracts map

De `abstracts/` map verzamelt alle Sass-tools en helpers die in het hele project worden gebruikt. Elke globale variabele, functie, mixin en tijdelijke aanduiding moet hier worden ingevoerd.

De vuistregel voor deze map is dat deze geen enkele regel CSS mag uitvoeren wanneer deze op zichzelf wordt gecompileerd. Dit zijn niets anders dan Sass-helpers.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss`

Als u aan een heel groot project werkt met veel abstracte hulpprogramma's, kan het interessant zijn om ze te groeperen op onderwerp in plaats van op type, bijvoorbeeld typografie (`_typography.scss`), thema (`_theming.scss`), enz. Elk bestand bevat alle gerelateerde helpers: variabelen, functies, mixins en tijdelijke aanduidingen. Hierdoor kan de code gemakkelijker doorbladeren en onderhouden worden, vooral wanneer bestanden erg lang worden.

<div class="note">
  <p>De <code>abstracts/</code> map kan ook <code>utilities/</code> of <code>helpers/</code> worden genoemd, afhankelijk van wat u verkiest.</p>
</div>

#### Vendors map

En _last but not least_ hebben de meeste projecten een `vendors/` map met alle CSS-bestanden van externe bibliotheken en frameworks - Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, enzovoort. Die opzij zetten in dezelfde map is een goede manier om te zeggen "Hé, dit is niet van mij, niet mijn code, niet mijn verantwoordelijkheid".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Als u een sectie van een vendor moet overschrijven, raad ik u aan om een 8e map te hebben met de naam `vendors-extensions/` waarin u mogelijk bestanden hebt die precies zijn vernoemd naar de leveranciers die ze overschrijven.

Bijvoorbeeld: `vendors-extensions/_bootstrap.scss` is een bestand met alle CSS-regels bedoeld om een deel van de standaard CSS van Bootstrap opnieuw te declareren. Dit is om te voorkomen dat de vendorbestanden zelf moeten worden bewerkt, wat over het algemeen geen goed idee is.

#### Hoofdbestand

Het hoofdbestand (meestal gelabeld met `main.scss`) zou het enige Sass-bestand van de hele codebase moeten zijn dat niet begint met een onderstrepingsteken. Dit bestand mag niets anders bevatten dan `@import` en commentaar.

Bestanden moeten worden geïmporteerd volgens de map waarin ze zich bevinden, de een na de ander in de volgende volgorde:

1. `abstracts/`
1. `vendors/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Om de leesbaarheid te behouden, moet het hoofdbestand deze richtlijnen respecteren:

* één bestand per `@import`;
* één `@import` per regel;
* geen nieuwe regel tussen twee importen uit dezelfde map;
* een nieuwe regel na de laatste import uit een map;
* bestandsextensies en leidende onderstrepingstekens zijn weggelaten.

{% include snippets/architecture/02/index.html %}

Er is een andere manier om gedeeltelijke gegevens te importeren die ik ook geldig acht. Aan de andere kant maakt het het bestand beter leesbaar. Aan de andere kant maakt het het bijwerken ervan iets pijnlijker. Hoe dan ook, ik laat u beslissen wat het beste is, het maakt niet veel uit. Voor deze manier van doen, moet het hoofdbestand deze richtlijnen respecteren:

* één `@import` per map;
* een regeleinde na `@import`;
* elk bestand op zijn eigen regel;
* een nieuwe regel na de laatste import uit een map;
* bestandsextensies en leidende onderstrepingstekens zijn weggelaten.

{% include snippets/architecture/03/index.html %}

### Over "globbing"

Bij computerprogrammering specificeren "glob"-patronen sets bestandsnamen met jokertekens, zoals '*.scss'. "Globbing" betekent in het algemeen het matchen van een set bestanden op basis van een uitdrukking in plaats van een lijst met bestandsnamen. Wanneer toegepast op Sass, betekent dit het importeren van delen in het [hoofdbestand](#hoofdbestand) met een "glob"-patroon in plaats van ze afzonderlijk op te sommen. Dit zou leiden tot een hoofdbestand dat er als volgt uitziet:

{% include snippets/architecture/05/index.html %}

Sass ondersteunt out-of-the-box bestands"globbing" niet, omdat het een gevaarlijke functie kan zijn, aangezien bekend is dat CSS orderafhankelijk is. Bij het dynamisch importeren van bestanden (wat meestal in alfabetische volgorde verloopt), heeft men geen controle meer over de volgorde van de bron, wat kan leiden tot moeilijk te debuggen neveneffecten.

Dat gezegd hebbende, in een strikt op componenten gebaseerde architectuur met extra zorg om geen enkele stijl van de ene naar de andere partitie te lekken, zou de volgorde er niet echt toe doen, wat globale import mogelijk zou maken. Dit zou het gemakkelijker maken om gedeelten toe te voegen of te verwijderen, aangezien het zorgvuldig bijwerken van het hoofdbestand niet langer nodig is.

Als u Ruby Sass gebruikt, is er een Ruby-edelsteen genaamd [sass-"globbing"](https://github.com/chriseppstein/sass-globbing) die precies dat gedrag mogelijk maakt. Als u op node-sass draait, kunt u vertrouwen op Node.js, of op welke bouwtool ze ook gebruiken om de compilatie af te handelen (Gulp, Grunt, etc.).

### Schaamtebestand

Er is een interessant concept dat populair is gemaakt door [Harry Roberts](https://csswizardry.com), [Dave Rupert](https://daverupert.com) en [Chris Coyier](https://css-tricks.com) die bestaat uit het plaatsen van alle CSS-verklaringen, hacks en dingen waar we niet trots op zijn in een [schaamtebestand](https://csswizardry.com/2013/04/shame-css-full-net-interview/). Dit bestand, dramatisch getiteld `_shame.scss`, zou na elk ander bestand worden geïmporteerd, helemaal aan het einde van het stylesheet.

{% include snippets/architecture/04/index.html %}
