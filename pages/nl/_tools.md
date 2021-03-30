
## Tools

Wat leuk is aan een CSS-preprocessor zo populair als Sass is dat het wordt geleverd met een geheel ecosysteem van frameworks, plug-ins, bibliotheken en tools. Na 8 jaar bestaan zijn we dichter en dichter bij het punt waar [alles in Sass kan worden geschreven in Sass](https://kittygiraudel.com/2014/10/27/rethinking-atwoods-law/).

Mijn advies zou echter zijn om het aantal dependencies tot het strikte minimum te verlagen. Het beheren van dependencies is een soort hel waar u niet deel van wilt maken. Bovendien is er weinig tot geen behoefte aan externe dependencies als het gaat om SASS.

### Compass

[Compass](http://compass-style.org/) is de hoofd [Sass Framework](https://www.sitepoint.com/compass-or-bourbon-sass-frameworks/). Ontwikkeld door [Chris Eppstein](https://twitter.com/chriseppstein), een van de twee kernontwerpers van Sass, ik zie het niet drastisch verliezen in populariteit voor een tijdje, als u mijn mening wilt.

Toch, [ik gebruik Compass niet meer](https://www.sitepoint.com/dont-use-compass-anymore/), de belangrijkste reden is dat het veel vertraagt. Ruby Sass is vrij langzaam op zich, dus het toevoegen van meer Ruby en meer Sass erbovenop helpt niet echt.

Het ding is, we gebruiken heel weinig van het hele framework. Compass is enorm. Cross-Browser compatibiliteit Mixins is slechts het topje van de ijsberg. Wiskundige functies, beeldhelpers, spriting... Er is zoveel dat kan worden gedaan met dit geweldige stukje software.

Helaas is dit allemaal suiker en is er geen moordende functie. Een uitzondering kan worden gemaakt van de sprite builder die *echt geweldig* is, maar [grunticon](https://github.com/filamentgroup/grunticon) en [Grumpicon](http://grumpicon.com/) doen het werk ook, en hebben het voordeel van plugbaar in het bouwproces.

Hoe dan ook, ik verbied niet het gebruik van Compass, hoewel ik het ook niet zou aanraden, vooral omdat het niet LibSass-compatibel is (zelfs als inspanningen in die richting zijn gemaakt). Als u het fijner vindt om het te gebruiken, fair enough, maar ik denk niet dat u er veel van krijgt aan het einde van de dag.

<div class="note">
  <p>Ruby Sass gaat momenteel onder enkele uitstekende optimalisaties die specifiek zijn gericht op logica-zware stijlen met veel functies en mixins. Ze moeten de prestaties drastisch verbeteren tot het punt waar Compass en andere frameworks Sass misschien niet meer vertragen.</p>
</div>

### Rastersystemen

Het gebruik van een rastersysteem is geen optie nu dat Responsive Web Design overal is. Om ontwerpen te maken die consistent en solide in alle maten lijken, gebruiken we een soort raster om de elementen op te leggen. Om het coderen van dit rastersysteem elke keer te vermijden, maakten enkele briljante mensen hun systeem herbruikbaar.

Laat me dit recht zetten: ik ben geen grote fan van rastersystemen. Natuurlijk zie ik het potentieel, maar ik denk dat de meesten van hen volledig overdreven zijn en meestal worden gebruikt om rode kolommen op een witte achtergrond in de sprekerdecks van nerdy ontwerpers te tekenen. Wanneer was de laatste keer dat u dacht *God-zij-dank-ik-heb-deze-tool-om-deze-2-5-3.1-π-grid-te-bouwen*? Dat klopt, nooit. Want in de meeste gevallen wilt u gewoon het gebruikelijke normale rooster van 12 kolommen, niets bijzonders.

Als u een CSS-framework gebruikt voor uw project zoals [Bootstrap](https://getbootstrap.com/) of [Foundation](https://get.foundation/), is de kans groot dat het al een rastersysteem bevat in welk geval Ik zou aanraden om het te gebruiken om te voorkomen dat ik met nog een andere dependency zou moeten dealen.

Als u niet gebonden bent aan een specifiek rastersysteem, zult u blij zijn te weten dat er twee eersteklas door Sass aangedreven rastermotoren zijn: [Susy](https://www.oddbird.net/susy/) en [Singularity ](https://github.com/at-import/Singularity). Beide doen veel meer dan u ooit nodig zult hebben, dus u kunt degene kiezen die u verkiest tussen deze twee en er zeker van zijn dat al uw edge cases&mdash;zelfs de handigste&mdash;worden gedekt. Als u het mij vraagt, heeft Susy een iets betere gemeenschap, maar dat is mijn mening.

Of u kunt naar iets meer casual gaan, zoals [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). Al met al heeft de keuze niet veel invloed op uw coderingsstijl, dus dit is op dit moment vrijwel aan u.

### SCSS-lint

Code linting is erg belangrijk. Gewoonlijk helpt het volgen van de richtlijnen van een stijlgids om het aantal fouten in de codekwaliteit te verminderen, maar niemand is perfect en er zijn altijd dingen die verbeterd kunnen worden. U zou dus kunnen zeggen dat code linting net zo belangrijk is als commentaar geven.

[SCSS-lint](https://github.com/causes/scss-lint) is een hulpmiddel om uw SCSS-bestanden schoon en leesbaar te houden. Het is volledig aanpasbaar en gemakkelijk te integreren met uw eigen tools.

Gelukkig lijken de SCSS-lint-aanbevelingen sterk op de aanbevelingen die in dit document worden beschreven. Om SCSS-lint te configureren volgens de Sass-richtlijnen, kan ik de volgende configuratie aanbevelen:

{% include snippets/tools/01/index.html %}

Als u niet overtuigd bent van de noodzaak om SCSS-lint te gebruiken, raad ik u aan deze geweldige artikelen te lezen: [Clean Up your Sass with SCSS-lint](https://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/), [Improving Sass code quality on theguardian.com](https://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom) en [An Auto-Enforceable SCSS Styleguide](https://davidtheclark.com/scss-lint-styleguide/).

<div class="note">
  <p>Als u SCSS-lint in uw Grunt-buildproces wilt aansluiten, zult u blij zijn te weten dat er een Grunt-plug-in voor is genaamd <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>En als u op zoek bent naar een handige applicatie die werkt met SCSS-lint en dergelijke, kunnen de mensen van <a href="https://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) werken aan <a href="https://houndci.com/">Hound</a>.</p>
</div>
