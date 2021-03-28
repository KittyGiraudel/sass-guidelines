
## Over Sass

Dit is hoe [Sass](https://sass-lang.com) zichzelf beschrijft in de [documentatie](https://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass is een uitbreiding van CSS die kracht en elegantie toevoegt aan de basistaal.

Het uiteindelijke doel van Sass is om de fouten van CSS op te lossen. CSS is, zoals we allemaal weten, niet de beste taal ter wereld <sup>[citation needed]</sup>. Hoewel het heel eenvoudig te leren is, kan het snel behoorlijk rommelig worden, vooral bij grote projecten.

Dit is waar Sass binnenkomt, als een meta-taal, om de syntaxis van CSS te verbeteren om extra functies en handige tools te bieden. Ondertussen wil Sass conservatief zijn met betrekking tot de CSS-taal.

Het punt is niet om CSS om te zetten in een volledig functionele programmeertaal; Sass wil alleen helpen waar CSS faalt. Hierdoor is aan de slag gaan met Sass niet moeilijker dan het leren van CSS: het voegt er simpelweg een paar extra features aan toe.

Dat gezegd hebbende, er zijn veel manieren om deze features te gebruiken. Sommige goed, sommige slecht, sommige ongebruikelijk. Deze richtlijnen zijn bedoeld om u een consistente en gedocumenteerde benadering te geven voor het schrijven van Sass-code.

### Ruby Sass of LibSass

[De eerste commit van Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) gaat terug tot eind 2006, meer dan 10 jaar geleden. Onnodig te zeggen dat het sindsdien een lange weg heeft afgelegd. Aanvankelijk ontwikkeld in Ruby, doken hier en daar verschillende varianten op. De meest succesvolle, [LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114) (geschreven in C/C++) is nu bijna volledig compatibel met de originele Ruby-versie.

In 2014 besloten [Ruby Sass- en LibSass-teams te wachten tot beide versies gesynchroniseerd waren voordat ze verder gingen](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Sindsdien heeft LibSass actief versies uitgebracht om een functie-pariteit te hebben met zijn oudere broer/zus. De laatst overgebleven inconsistenties zijn door mijzelf verzameld en vermeld onder het [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/) project. Als u zich bewust bent van een incompatibiliteit tussen de twee versies die niet wordt vermeld, wees dan zo vriendelijk om een issue te openen.

Terugkomend op het kiezen van uw compiler. Eigenlijk hangt het allemaal af van uw project. Als het een Ruby on Rails-project is, kunt u beter Ruby Sass gebruiken, wat perfect geschikt is voor zo'n geval. Houd er ook rekening mee dat Ruby Sass altijd de referentie-implementatie zal zijn en altijd LibSass zal leiden in functies. En als u wilt [overstappen van Ruby Sass naar LibSass](https://www.sitepoint.com/switching-ruby-sass-libsass/), dan is dit artikel iets voor jou.

Voor niet-Ruby-projecten die een workflow-integratie nodig hebben, is LibSass waarschijnlijk een beter idee, omdat het meestal is bedoeld om te worden ingepakt. Dus als u Node.js wilt gebruiken, is [node-sass](https://github.com/sass/node-sass) allemaal gekozen.

### Sass of SCSS

Er is nogal wat verwarring over de semantiek van de naam *Sass*, en terecht: Sass betekent zowel de preprocessor als zijn eigen syntaxis. Niet erg handig, toch?

Eigenlijk beschreef Sass aanvankelijk een syntaxis waarvan het bepalende kenmerk de inspringingsgevoeligheid was. Al snel besloten Sass-beheerders om de kloof tussen Sass en CSS te dichten door een CSS-vriendelijke syntaxis aan te bieden genaamd *SCSS* voor *Sassy CSS*. Het motto is: als het geldige CSS is, is het geldige SCSS.

Sindsdien levert Sass (de preprocessor) [twee verschillende syntaxis](https://www.sitepoint.com/whats-difference-sass-scss/): Sass (niet alleen in hoofdletters, [alstublieft](http://sassnotsass.com)), ook bekend als *de ingesprongen syntaxis*, en SCSS. Welke u moet gebruiken, is vrijwel aan jou, aangezien beide strikt gelijkwaardig zijn in functies. Op dit moment is het alleen een kwestie van esthetiek.

De witruimte-gevoelige syntaxis van Sass is afhankelijk van inspringen om accolades, puntkomma's en andere leestekens te verwijderen, wat leidt tot een slankere en kortere syntaxis. Ondertussen is SCSS gemakkelijker te leren omdat het meestal een paar kleine extra functionaliteiten zijn bovenop CSS.

Zelf geef ik de voorkeur aan SCSS boven Sass omdat het dichter bij CSS ligt en vriendelijker voor de meeste ontwikkelaars is. Daarom is SCSS de standaardsyntaxis in deze richtlijnen. U kunt overschakelen naar de ingesprongen syntaxis van Sass in het <button type="button" data-a11y-dialog-show="options-panel" class="link-like">zijpaneel</button>.

### Andere preprocessors

Sass is onder meer preprocessor. De meest serieuze concurrent is [Less](http://lesscss.org/), een op Node.js gebaseerde preprocessor die behoorlijk populair is geworden dankzij het beroemde CSS-framework [Bootstrap](https://getbootstrap.com/) die het gebruikt(tot versie 4). Er is ook [Stylus](https://stylus-lang.com/), een zeer tolerante en flexibele preprocessor die echter iets moeilijker te gebruiken is en met een kleinere gemeenschap.

*Waarom kiezen voor Sass in plaats van een andere preprocessor?* is vandaag de dag nog steeds een geldige vraag. Nog niet zo lang geleden raadden we Sass aan voor op Ruby gebaseerde projecten, omdat het voor het eerst in Ruby was gemaakt en goed speelde met Ruby on Rails. Nu LibSass (grotendeels) de originele Sass heeft ingehaald, is dit niet langer relevant advies.

Wat ik leuk vind aan Sass, is de conservatieve benadering van CSS. Het ontwerp van Sass is gebaseerd op sterke principes: een groot deel van de ontwerpbenadering komt van nature voort uit de overtuigingen van de kernteam dat a) het toevoegen van extra functies een complexiteitskost heeft die moet worden gerechtvaardigd door het nut en, b) dat het gemakkelijk moet zijn om te redeneren over wat een bepaald blok stijlen doet door alleen naar dat blok te kijken. Sass heeft ook een veel scherpere aandacht voor detail dan andere preprocessors. Voor zover ik kan nagaan, hechten de kernontwerpers er veel belang aan om elk hoekgeval van CSS-compatibiliteit te ondersteunen en ervoor te zorgen dat elk algemeen gedrag consistent is. Met andere woorden, Sass is software gericht op het oplossen van actuele problemen; helpen om nuttige functionaliteit te bieden aan CSS waar CSS tekortschiet.

Afgezien van de preprocessors, moeten we ook tools noemen zoals [PostCSS](https://github.com/postcss/postcss) en [cssnext](https://cssnext.github.io/) die in de afgelopen maanden veel aandacht hebben gekregen .

PostCSS wordt gewoonlijk (en ten onrechte) een "postprocessor" genoemd. De veronderstelling, gecombineerd met de ongelukkige naam, is dat PostCSS parseert over CSS dat al is verwerkt door een preprocessor. Hoewel het op deze manier kan werken, is het geen vereiste, dus PostCSS is eigenlijk gewoon een "processor".

Het geeft u toegang tot "tokens" van uw stylesheets (zoals selectors, eigenschappen en waarden), om deze te verwerken met JavaScript om een of andere bewerking uit te voeren en de resultaten te compileren naar CSS. De populaire prefixbibliotheek [Autoprefixer](https://github.com/postcss/autoprefixer) is bijvoorbeeld gebouwd met PostCSS. Het parseert elke regel om te zien of vendorvoorvoegsels nodig zijn door te verwijzen naar de browserondersteuningstool [CanIUse](https://caniuse.com) en verwijdert en voegt vervolgens vendorvoorvoegsels toe die nodig zijn.

Dit is ongelooflijk krachtig en geweldig voor het bouwen van bibliotheken die met elke preprocessor werken (evenals vanille CSS), maar PostCSS is nog niet bijzonder gemakkelijk te gebruiken. U moet een beetje JavaScript kennen om er iets mee te bouwen, en de API kan soms verwarrend zijn. Hoewel Sass slechts een reeks functies biedt die handig zijn om CSS te schrijven, biedt PostCSS directe toegang tot de CSS AST (*abstract syntax tree*) en JavaScript.

Kortom, Sass is enigszins eenvoudig en lost de meeste van uw problemen op. Aan de andere kant kan PostCSS moeilijk in de hand te houden zijn (als u niet goed bent met JavaScript), maar het blijkt ongelooflijk krachtig te zijn. Er is geen reden waarom u beide niet kunt en zou moeten gebruiken. In feite biedt PostCSS een officiële SCSS-parser voor precies dit ding.

<div class="note">
  <p>Met dank aan <a href="https://github.com/corysimmons">Cory Simmons</a> voor zijn hulp en expertise op dit gebied.</p>
</div>
