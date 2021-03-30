
## Naamgevingsconventies

In deze sectie zullen we niet ingaan op de beste CSS-naamgevingsconventies voor onderhoudbaarheid en schaal; dat is niet alleen aan jou, het valt ook buiten het bereik van een Sass-stijlgids. Ik raad degenen aan die worden aanbevolen door [CSS Guidelines](https://cssguidelin.es/#naming-conventions).

Er zijn een paar dingen die u in Sass kunt noemen, en het is belangrijk om ze goed te noemen, zodat de hele codebasis er zowel consistent als gemakkelijk te lezen uitziet:

* variabelen;
* functies;
* mixins.

Tijdelijke aanduidingen voor Sass zijn opzettelijk weggelaten uit deze lijst, omdat ze kunnen worden beschouwd als gewone CSS-selectors, en dus hetzelfde naamgevingspatroon volgen als klassen.

Wat betreft variabelen, functies en mixins, houden we vast aan iets heel *CSS-ig*: **door kleine letters gescheiden koppeltekens**, en vooral zinvol.

{% include snippets/naming/01/index.html %}

### Constanten

Als u toevallig een framework-ontwikkelaar of bibliotheek-schrijver bent, kan het zijn dat u te maken heeft met variabelen die onder geen enkele omstandigheid moeten worden bijgewerkt: constanten. Helaas (of gelukkig?), Biedt Sass geen enkele manier om dergelijke entiteiten te definiëren, dus we moeten ons houden aan strikte naamgevingsconventies om ons punt duidelijk te maken.

Zoals voor veel talen, raad ik variabelen met hoofdletters aan als ze constanten zijn. Dit is niet alleen een heel oude conventie, maar het staat ook goed in contrast met de gebruikelijke variabelen met een koppelteken in kleine letters.

{% include snippets/naming/02/index.html %}

Als u echt wilt spelen met de ideeën van constanten in Sass, zou u [dit toegewijde artikel](https://www.sitepoint.com/dealing-constants-sass/) kunnen lezen.

### Namespace

Als u van plan bent uw Sass-code te verspreiden, in het geval van een bibliotheek, een framework, een rastersysteem of wat dan ook, kunt u overwegen om al uw variabelen, functies, mixins en tijdelijke aanduidingen een naam te geven, zodat deze niet conflicteert met de code van iemand anders.

Als u bijvoorbeeld aan een *Sassy Unicorn*-project werkt dat bedoeld is om te worden gedistribueerd, zou u kunnen overwegen om `su-` als namespace te gebruiken. Het is specifiek genoeg om botsingen met namen te voorkomen en kort genoeg om niet lastig te schrijven.

{% include snippets/naming/03/index.html %}

[Kaelig](https://kaelig.fr) heeft [een zeer verhelderend artikel over de wereldwijde CSS-namespace](https://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace), voor het geval dit onderwerp u interesseert.

<div class="note">
  <p>Merk op dat automatische namespace zeker een ontwerpdoel is voor de aanstaande <code>@import</code>-vernieuwing van Sass 4.0. Naarmate dat dichterbij komt, zal het steeds minder nuttig worden om handmatige namespace toe te passen; uiteindelijk kunnen libraries met handmatige namespace in feite moeilijker te gebruiken zijn.</p>
</div>
