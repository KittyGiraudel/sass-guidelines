
## Responsive Web Design en Breekpunten

Ik denk niet dat we Responsive Web Design nog moeten introduceren nu het overal is. U zou u echter kunnen afvragen *waarom is er een sectie over RWD in een Sass-stijlgids?* Eigenlijk zijn er nogal wat dingen die kunnen worden gedaan om het werken met breekpunten gemakkelijker te maken, dus ik dacht dat het niet zo'n slecht idee zou zijn om ze hier te benoemen.

### Breekpunten Benoemen

Ik denk dat het veilig is om te zeggen dat mediaquery's niet aan specifieke apparaten moeten worden gekoppeld. Dit is bijvoorbeeld absoluut een slecht idee om specifiek op iPads of Blackberry-telefoons te richten. Mediaquery's moeten zorgen voor een reeks schermformaten, totdat het ontwerp breekt en de volgende mediaquery het overneemt.

Om dezelfde redenen mogen breekpunten niet naar apparaten worden genoemd, maar naar iets algemener. Vooral omdat sommige telefoons nu groter zijn dan tablets, sommige tablets groter dan sommige computers met een klein scherm, enzovoort...

{% include snippets/rwd/01/index.html %}

Op dit punt zal [elke naamgevingsconventie](https://css-tricks.com/naming-media-queries/) die glashelder maakt dat een ontwerp niet nauw verbonden is met een specifiek apparaattype het lukken, zolang het een gevoel van omvang geeft.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>In de vorige voorbeelden worden geneste maps gebruikt om breekpunten te definiëren, maar dit hangt er echt van af wat voor soort breekpunt manager u gebruikt. U zou kunnen kiezen voor tekenreeksen in plaats van innerlijke maps voor meer flexibiliteit (bijv. <code>'(min-width: 800px)'</code>).</p>
</div>

### Breekpunt manager

Nadat u uw breekpunten naar wens hebt benoemd, hebt u een manier nodig om ze in daadwerkelijke mediaquery's te gebruiken. Er zijn tal van manieren om dit te doen, maar ik moet zeggen dat ik een grote fan ben van de breekpuntmap die wordt gelezen door een getterfunctie. Dit systeem is zowel eenvoudig als efficiënt.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Dit is duidelijk een vrij simplistische breekpuntmanager. Als u een iets meer toegeeflijke versie nodig hebt, mag ik u aanraden het wiel niet opnieuw uit te vinden en iets te gebruiken dat bewezen effectief is, zoals <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> of <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
  <p>Als u meer wilt lezen over het benaderen van Mediaquery's in Sass, beide <a href="https://www.sitepoint.com/managing-responsive-breakpoints-sass/">SitePoint</a> (van mijzelf) en <a href="https://css-tricks.com/approaches-media-queries-sass/">CSS-Tricks</a> hebben hier leuke artikelen over.</p>
</div>

### Gebruik van Mediaquery's

Nog niet zo lang geleden was er nogal een verhit debat over waar mediaquery's moeten worden geschreven: horen ze binnen selectors (zoals Sass het toestaat) of strikt los van hen? Ik moet zeggen dat ik een fervent verdediger ben van het *mediaquery's-binnen-selectors*-systeem, aangezien ik denk dat het goed speelt met de ideeën van *componenten*.

{% include snippets/rwd/04/index.html %}

Dit leidt tot de volgende CSS-uitvoer:

{% include snippets/rwd/05/index.html %}

U hoort wellicht dat deze conventie resulteert in dubbele mediaquery's in de CSS-uitvoer. Dat klopt beslist. Hoewel er tests zijn gemaakt en het laatste woord is dat het er niet toe doet als Gzip (of een equivalent daarvan) zijn ding heeft gedaan:

> … we hebben nagegaan of er prestatie-implicaties waren van het combineren van mediaquery's versus verstrooiing en kwamen tot de conclusie dat het verschil, hoewel lelijk, in het slechtste geval minimaal is, op zijn best in wezen onbestaande.<br>
> &mdash; Sam Richards, over Breakpoint

Als u u echt zorgen maakt over dubbele mediaquery's, kunt u nog steeds een tool gebruiken om ze samen te voegen, zoals [dit pareltje](https://github.com/aaronjensen/sass-media_query_combiner), maar ik heb het gevoel dat ik u moet waarschuwen tegen mogelijke bijwerkingen van het verplaatsen van CSS-code. Vergeet niet dat de volgorde van de bronnen belangrijk is.
