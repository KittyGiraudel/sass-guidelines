
## Inleiding

### Waarom een stijlgids

Een stijlgids is niet alleen een aangenaam document om te lezen, een ideale staat voor uw code voor te stellen. Het is een belangrijk document in het leven van een project, beschrijft hoe en waarom code moet worden geschreven. Het lijkt misschien op overkill voor kleine projecten, maar het helpt veel in het schoon, schaalbaar en gemakkelijk te onderhouden houden van de codebase.

Onnodig te zeggen dat hoe meer ontwikkelaars betrokken zijn bij een project, hoe meer coderichtlijnen nodig zijn. Langs dezelfde lijnen, hoe groter het project, hoe meer een stijlgids een must is.

[Harry Roberts](https://csswizardry.com) stelt het heel goed in [CSS Guidelines](https://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Een coderingsstijlgids (opmerking: geen visuele stijlgids) is een waardevol hulpmiddel voor teams die:</p>
  <ul>
    <li>producten bouwen en onderhouden voor een redelijke tijdsduur;</li>
    <li>ontwikkelaars van verschillende vaardigheden en specialiteiten hebben;</li>
    <li>een aantal verschillende ontwikkelaars hebben die op een bepaald moment aan een product werken;</li>
    <li>regelmatig nieuw personeel aan boord nemen;</li>
    <li>een aantal codebases hebben die ontwikkelaars in en uit dippen.</li>
  </ul>
</blockquote>

### Disclaimer

Allereerst: **Dit is geen CSS-stijlgids**. Dit document zal geen conventies van naamgevingsconventies voor CSS-klassen geven, modulaire patronen en de vraag van ID's in de CSS-wereld. Deze richtlijnen zijn alleen gericht op het omgaan met sass-specifieke inhoud.

Ook is deze stijlgids de mijne en daarom **zeer eigenwijs**. Zie het als een verzameling van methodologieën en advies die ik in de loop van de jaren heb gepolijst en gegeven. Het geeft me ook de mogelijkheid om te linken naar een handvol inzichtelijke bronnen, dus controleer de *verdere metingen*.

Vanzelfsprekend is dit zeker niet de enige manier om dingen te doen, en het kan al dan niet bij uw project passen. Voelt u vrij om eruit te halen en het aan te passen aan uw behoeften. Zoals we zeggen, *kunnen uw kilometers variëren*.

### Basisprincipes

Aan het einde van de dag, als er één ding is, zou ik willen dat u van deze hele stijlgids krijgt, is het dat **[SASS zo eenvoudig moet worden gehouden als het kan zijn](https://www.sitepoint.com/keep-sass-simple/)**.

Dankzij mijn domme experimenten zoals [bitwise operators](https://github.com/KittyGiraudel/SassyBitwise), [iterators and generators](https://github.com/KittyGiraudel/SassyIteratorsGenerators) en [een JSON parser](https://github.com/KittyGiraudel/SassyJSON) in Sass, zijn we allemaal goed bewust van wat men kan doen met deze preprocessor.

Ondertussen is CSS een eenvoudige taal. Sass, die bedoeld is om CSS te schrijven, mag niet veel complexer worden dan gewone CSS. Het [KISS Principe](https://nl.wikipedia.org/wiki/KISS-principe) (Keep It Simple Stupid) is hier de sleutel en kan zelfs voorrang hebben over het [DRY principe](https://nl.wikipedia.org/wiki/DRY_(programmeren)) (Don’t Repeat Yourself) in sommige omstandigheden.

Soms is het beter om een beetje te herhalen om de code onderhoudbaar te houden, in plaats van een topzware, onhandelbare, onnodig gecompliceerde systeem te bouwen dat volledig ontmoedigend is omdat het overdreven complex is.

Ook, en laat me [Harry Roberts](https://cswizardry.com) opnieuw citeren, **pragmatisme overtreft perfectie**. Op een gegeven moment zult u waarschijnlijk merken dat u tegen de hier beschreven regels gaat. Als het logisch is, als het goed voelt, doe het dan. Code is slechts een middel, geen einde.

### Verlengen van de richtlijnen

Een groot deel van deze stijlgids is sterk eigenwijs. Ik ben nu al enkele jaren Sass aan het lezen en schrijven, tot het punt waarop ik nu veel principes heb als het gaat om het schrijven van schone stylesheets. Ik begrijp dat het misschien niet bij iedereen past, en dit is volkomen normaal.

Hoewel, ik ben van mening dat richtlijnen worden gemaakt om te worden verlengd. Uitbreiden van SASS-richtlijnen kan zo eenvoudig zijn als het hebben van een document waarin staat dat de code de richtlijnen van deze stijlgids volgt, behalve een paar dingen; In welk geval zouden specifieke regels hieronder worden uitgelegd.

Een voorbeeld van stijlgids-extensie is te vinden op de [Sassdoc-repository](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md):

> Dit is een extensie van [Node StyleGuide](https://github.com/felixge/nodo-style-guide) van Felix Geisendörfer. Alles van dit document overschrijft wat erin kan worden gezegd in de Node Styleguide.
