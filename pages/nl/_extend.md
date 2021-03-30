
## Extend

De `@extend`-instructie is een krachtige functie die vaak verkeerd wordt begrepen. In het algemeen maakt het het mogelijk om Sass te vertellen een selector A te stylen alsof deze ook overeenkomt met selector B. Onnodig te zeggen dat dit een waardevolle bondgenoot kan zijn bij het schrijven van modulaire CSS.

Het echte doel van `@extension` is echter om de relaties (beperkingen) binnen uitgebreide selectors tussen regelsets te behouden. Wat houdt dit precies in?

- Selectors hebben *beperkingen* (bijv. `.Bar` in `.foo > .bar` moet een ouder `.foo` hebben);
- Deze beperkingen worden *overgedragen* naar de uitbreidende selector (bijv. `.Baz { @extend .bar; }` zal `.foo > .bar, .foo > .baz` produceren);
- De verklaringen van de uitgebreide selector worden gedeeld met de uitbreidende selector.

Gegeven dat, het eenvoudig is om te zien hoe het uitbreiden van selectors met milde beperkingen kan leiden tot een explosie van selectors. Als `.baz .qux` de extensie `.foo .bar` uitbreidt, kan de resulterende selector `.foo .baz .qux` of `.baz .foo .qux` zijn, aangezien zowel `.foo` als `.baz` algemene voorouders. Dit kunnen ouders, grootouders enz. Zijn.

Probeer relaties altijd te definiëren via tijdelijke aanduidingen voor selectors, niet met daadwerkelijke selectors. Dit geeft u de vrijheid om elke naamgevingsconventie die u hebt voor uw selectors te gebruiken (en te wijzigen), en aangezien relaties maar één keer worden gedefinieerd binnen de tijdelijke aanduidingen, is de kans veel kleiner dat u onbedoelde selectors produceert.

Gebruik voor het erven van stijlen alleen `@extend` als de uitbreidende `.class` of `%placeholder` selector _een soort_ van de uitgebreide selector is. Een `.error` is bijvoorbeeld een soort `.warning`, dus `.error` kan `@extend .warning`.

{% include snippets/extend/01/index.html %}

Er zijn veel scenario's waarin uitbreidende selectors nuttig en de moeite waard zijn. Houd altijd rekening met deze regels, zodat u met zorg kunt `@extend`:

* Gebruik primair extend voor `%placeholders`, niet voor daadwerkelijke selectors.
* Bij het uitbreiden van klassen, breid dan alleen een klasse uit met een andere klasse, _nooit_ een [complexe selector](https://www.w3.org/TR/selectors4/#syntax).
* Extend een `%placeholder` zo min mogelijk direct.
* Vermijd uitbreiding van algemene selectors voor voorouders (bijv. `.Foo .bar`) of algemene selectors voor broers en zussen (bijv. `.Foo ~ .bar`). Dit is wat de selector-explosie veroorzaakt.

<div class="note">
  <p>Er wordt vaak gezegd dat <code>@extend</code> helpt bij de bestandsgrootte omdat het selectors combineert in plaats van eigenschappen te dupliceren. Dat is waar, maar het verschil is te verwaarlozen zodra <a href="https://nl.wikipedia.org/wiki/Gzip">Gzip</a> de compressie heeft uitgevoerd.</p>
  <p>Dat gezegd hebbende, als u Gzip (of een equivalent daarvan) niet kunt gebruiken, kan het waardevol zijn om over te schakelen naar een <code>@extend</code>-benadering, vooral als het stylesheet-gewicht het knelpunt is voor uw prestaties.</p>
</div>

### Extend and mediaquery's

U moet alleen selectors uitbreiden binnen hetzelfde mediabereik (`@media`-instructie). Beschouw een mediaquery als een andere beperking.

{% include snippets/extend/02/index.html %}

De meningen lijken extreem verdeeld te zijn over de voordelen en problemen van `@extend` tot het punt waarop veel ontwikkelaars, waaronder ikzelf, er tegen hebben gepleit, zoals u kunt lezen in de volgende artikelen:

* [Wat niemand u heeft verteld over Sass Extend](https://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Waarom u verlenging moet vermijden](https://www.sitepoint.com/avoid-sass-extend/)
* [Breid jezelf niet te veel uit](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

Dat gezegd hebbende, en kort samengevat, zou ik adviseren om `@extend` alleen te gebruiken voor het onderhouden van relaties binnen selectors. Als twee selectors karakteristiek vergelijkbaar zijn, is dat de perfecte use-case voor `@extend`. Als ze niets met elkaar te maken hebben, maar enkele regels delen, kan een `@mixin` beter bij u passen. Meer over hoe u tussen de twee kunt kiezen in dit [artikel](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/).

<div class="note">
  <p>Met dank aan <a href="https://twitter.com/davidkpiano">David Khourshid</a> voor zijn hulp en expertise op dit gebied.</p>
</div>
