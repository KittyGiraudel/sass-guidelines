
## Tools

Was an einem so bekannten CSS Präprozessor wie Sass gut ist, dass es mit einem gesamten Ökosystem an Frameworks, Plugins, Libraries und Tools daher kommt. Nach 8 Jahren Existenz, kommen wir dem Punkt immer näher wo [alles was in Sass geschrieben werden kann, auch in Sass geschrieben werden sollte](https://kittygiraudel.com/2014/10/27/rethinking-atwoods-law/).

Deshalb ist mein Ratschlag die Anzahl von Dependencies auf ein Minium zu halten. Dependencies zu verwalten ist eine Art von Hölle wo du kein Teil von sein willst. Dazu gibt es, wenn es um Sass geht, kaum bis garkeinen Nutzen von externen Dependencies.

### Compass

[Compass](http://compass-style.org/) ist das [Hauptframework für Sass](https://www.sitepoint.com/compass-or-bourbon-sass-frameworks/) da draußen. Entwickelt von [Chris Eppstein](https://twitter.com/chriseppstein), einer der Hauptentwickler von Sass, glaube ich nicht dass es in nächster Zeit dramatisch an Popularität verlieren wird.

Dennoch [benutze ich Compass nicht mehr](https://www.sitepoint.com/dont-use-compass-anymore/), denn der Hauptgrund ist, dass es Sass ziemlich verlangsamt. Ruby Sass selber ist schon langsam, von daher macht noch mehr Ruby und Sass es nicht besser.

Das Ding ist, dass wir wirklich wenig von dem gesamten Framework verwenden. Compass ist groß. Cross-Browser Kompabilitäts-Mixins sind nur die Spitze des Eisbergs. Mathematische Funktionen, Image-Helfer, Spriting, … da gibt es soviel was mit dem großartigen Stück Software erledigt werden kann.

Unglücklicherweise ist das alles nur Zucker und es gibt kein wirkliches Killer-Feature. Eine Ausnahme könnte der Sprite-Builder sein, welcher *wirklich gut* ist, aber [Grunticon](https://github.com/filamentgroup/grunticon) oder [Grumpicon](http://grumpicon.com/) erledigen den Job genauso gut und haben den Vorteil in dem Build-Prozess integriert werden zu können.

Wie auch immer, ich verbiete natürlich nicht Compass zu verwenden auch wenn ich es, gerade seitdem es nicht mit LibSass kompatibel (es gab sogar Bemühungen in die Richtung) sein wird, nicht empfehlen kann. Wenn du dich damit wohler fühlst, ist dass verständlich, aber ich denke nicht dass du am Ende des Tages viel davon haben wirst.

<div class="note">
  <p>Ruby Sass wird aktuell hervorragenden Optimierungen unterzogen, welche speziell auf logikschwere Styles mit vielen Funktionen und Mixins abziehlen. Diese sollten die Performance bis zu dem Punkt dramatisch verbessern, wo Compass und andere Frameworks Sass eventuell nicht mehr verlangsamen.</p>
</div>

### Gridsysteme

Kein Gridsystem zu benutzen ist keine Option mehr, gerade jetzt wo Responsive Webdesign überall ist. Um ein Design konsistent und stabil über alle Größen hinweg aussehen zu lassen, benutzen wir eine Art Grid um Elemente auszurichten. Um so ein Grid nicht immer und immer wieder zu erfinden, haben ein paar brilliante Leute Ihre wiederverwendbar gemacht.

Lass mich vorher klarstellen: ich bin kein großer Fan von Gridsystemen. Natürlich sehe ich das Potential, aber ich denke die meisten sind komplett Overkill und hauptsächlich dazu benutzt rote Spalten auf weißem Hintergrund für nerdige Designer Speaker-Decks zu zeichnen. Wann war das letzte mal wo du dachtest *Gott-sei-dank-dass-ich-dieses-Tool-zum-2-5-3.1-π-Grid-bauen-habe*? Genau, noch nie. Denn in den meisten Fällen wollen wir nur ein gewöhnliches 12-Spalten Grid, nichts ausgefallenes.

Falls du ein CSS Framework wie [Bootstrap](https://getbootstrap.com/) oder [Foundation](https://get.foundation/) für dein Projekt benutzt, sind die Chancen groß das es bereits ein eigenes Gridsystem beinhaltet. In diesem Fall schlage ich vor auch dieses zu benutzen, anstatt noch eine weitere Dependency dazu zu holen.

Wenn du an ein bestimmtes Gridsystem gebunden bist, wirst du dich freuen zu hören dass es zwei erstklassige Sass betriebene Grid-Maschinen gibt: [Susy](https://www.oddbird.net/susy/) und [Singularity](https://github.com/at-import/Singularity). Beide machen mehr als du jemals brauchst. Deshalb kannst du dir einfach das heraussuchen was du bevorzugst, und sicher sein das alle Anwendungsfälle&mdash;selbst die raffinierten&mdash; abgedeckt sind. Wenn du mich fragst, hat Susy eine leicht bessere Community, aber das ist lediglich meine Meinung.

Oder du schaust dir eine lässigere Variante wie [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) an. Alles in allem, die Wahl wird keine große Auswirkung auf deinen Codingstyle haben, deshalb liegt es absolut bei dir.

### SCSS-lint

Code zu linten ist wirklich wichtig. Generell hilft es die Guidelines eines Styleguides zu folgen, um dabei die Menge an Qualitätsfehlern im Code zu reduzieren. Aber niemand ist perfekt und es gibt immer etwas zu verbessern. Deshalb kann man sagen das linting genauso wichtig wie kommentieren ist.

[SCSS-lint](https://github.com/causes/scss-lint) ist ein Tool um dir zu helfen deine SCSS-Dateien sauber und lesbar zu halten. Es ist komplett flexibel und einfach mit deinen eigenen Tools zu kombinieren.

Glücklicherweise sind die SCSS-Lint Empfehlungen sehr ähnlich zu denen die hier in dem Dokument beschrieben wurden. Um SCSS-Lint korrekt mit den Sass Guidelines einzustellen, empfehle ich dir folgendes Setup:

{% include snippets/tools/01/index.html %}

Falls du nicht überzeigt von der Notwendigkeit SCSS-Lint zu benutzen bist, kann ich diese großartigen Artikel empfehlen: [Clean Up your Sass with SCSS-lint](https://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/), [Improving Sass code quality on theguardian.com](https://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom) und [An Auto-Enforceable SCSS Styleguide](https://davidtheclark.com/scss-lint-styleguide/).

<div class="note">
  <p>Falls du SCSS-Lint in deinen Grunt Prozess einbauen möchtest, freut es dich bestimmt zu wissen das es dafür bereits ein Grunt-Plugin namens <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a> gibt.</p>
  <p>Falls du außerdem auf der Jagd nach einer schicken Anwendung bist, welche mit SCSS-Lint oder ähnlichen läuft, die Leute von <a href="https://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat…) arbeiten an <a href="https://houndci.com/">Hound</a>.</p>
</div>
