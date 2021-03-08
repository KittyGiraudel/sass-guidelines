
## Über Sass

In Ihrer [Dokumentation](https://sass-lang.com/documentation/file.SASS_REFERENCE.html) beschreibt sich [Sass](https://sass-lang.com) als:

> […] eine Erweiterung von CSS, welche Leistung und Eleganz zur ursprünglichen Sprache hinzufügt.

Das ultimative Ziel von Sass ist es, die Fehler von CSS zu beheben. Denn wir wissen ja alle, dass CSS wirklich nicht die beste Sprache der Welt ist <sup>[Zitat benötigt]</sup>. Sie ist zwar sehr einfach zu lernen, kann aber, gerade in großen Projekten, sehr schnell unübersichtlich werden.

Hier kommt Sass als Meta-Sprache hinzu, um die Syntax von CSS zu verbessern und nützliche Features sowie Extras hinzuzufügen. Trotz dessen möchte Sass aber konservativ gegenüber CSS bleiben.

Es geht nämlich nicht darum CSS in eine Programmiersprache voller Features umzuändern. Sass möchte lediglich da helfen wo CSS versagt. Deshalb ist Sass zu erlernen auch nicht schwieriger als CSS; es fügt einfach nur ein paar extra Features oben drauf.

Von daher gibt es gleichzeitig viele verschiedene Möglichkeiten diese Features einzusetzen. Manche sind gut, manche schlecht und andere wiederum unüblich. Die Absicht dieser Guidelines ist es einen konsistenten und dokumentierten Ansatz zu bieten um Sass zu schreiben.

### Ruby Sass oder LibSass

[Sass' erster Commit](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) war Ende 2006, mittlerweile fast 10 Jahre zurück. Unnötig zu erwähnen das es seither einen langen Weg gegangen ist. Ursprünglich in Ruby entwickelt, wurde es bereits mehrmals in andere Sprachen übertragen; die erfolgreichste davon ist [LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114) (geschrieben in C/C++), welches nun nah dran ist vollständig Kompatibel mit der originalen Ruby version zu sein.

2014 haben sich die Teams von [Ruby Sass und LibSass dazu entschieden, zu warten, bis beide auf demselben Stand sind bevor es mit der Entwicklung weitergeht](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Seither veröffentlicht LibSass regelmäßig neue Release Versionen. Die noch ausstehenden Features sind von mir unter durch das [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/) Projekt gesammelt und aufgelistet. Falls dir noch Ungleichheiten auffallen, die ich nicht aufgelistet habe, sei doch so nett und teil es mir mit.

Zurück zum Compiler. Eigentlich hängt es komplett von deinem Projekt ab. Wenn es ein Ruby on Rails Projekt ist, solltest du besser Ruby Sass benutzen da es genau darauf ausgerichtet ist. Ruby Sass wird außerdem immer die Referenzimplementation sein und LibSass in Sachen Features leiten. Und falls du danach schaust von Ruby Sass zu LibSass zu wechseln, ist [dieser Artikel](https://www.sitepoint.com/switching-ruby-sass-libsass/) etwas für dich.

In Nicht-Ruby Projekten welche einen speziellen Workflow brauchen, ist LibSass die bessere Wahl. Wenn du also, sagen wir Node.js, benutzen möchtest dann wäre [node-sass](https://github.com/sass/node-sass) deine Wahl.

### Sass oder SCSS

Es gibt eine relativ große Verwirrung über die Semantik des Wortes *Sass*. Aus gutem Grund: Sass steht für den Präprozessor selbst und die eigene Syntax. Nicht wirklich praktisch, oder?

Ursprünglich beschrieb Sass die Syntax, dessen Charakteristika in der Bedeutung von Einrückung lag. Doch relativ schnell haben sich die Entwickler von Sass dazu entschieden, die Lücke zwischen Sass und CSS zu schließen indem sie die CSS freundliche Syntax *SCSS* (für *Sassy CSS*) eingeführt haben. Das Motto: wenn es valides CSS ist, ist es valides SCSS.

Seitdem bietet Sass (der Präprozessor) [zwei verschiedene Syntaxen](https://www.sitepoint.com/whats-difference-sass-scss/) an: Sass ([nicht in Großbuchstaben](http://sassnotsass.com)), auch bekannt unter der *vorgesehenen Syntax*, und SCSS. Welche du benutzt, ist komplett dir überlassen. Beide haben dieselben Features und es ist wirklich nur eine Frage der Ästhetik.

Sass' Leerzeichenempfindliche Syntax beruht auf Einrückung um geschweifte Klammern, Semikolons und andere Zeichensetzung entfernen zu können. Das führt zu einer schlankeren und kürzeren Syntax. Währenddessen ist SCSS einfacher zu erlernen, da es überwiegend nur Kleinigkeiten zu CSS hinzufügt.

Ich selber ziehe SCSS gegenüber Sass vor, weil es näher an CSS liegt und freundlicher für die meisten Entwickler ist. Von daher wird SCSS auch der Standard in den gesamten Guidelines sein. Du kannst jedoch zur Sass Syntax in den <button type="button" data-a11y-dialog-show="options-panel" class="link-like">Optionen</button> wechseln.

### Andere Präprozessoren

Sass ist nur ein Präprozessor unter vielen. Sein größter Mitstreiter ist [Less](http://lesscss.org/), ein auf Node.js basierender Präprozessor welcher durch das CSS Framework [Bootstrap](https://getbootstrap.com/) (bis zur Version 4) bekannt wurde. Es gibt außerdem noch  Stylus, ein sehr toleranter und flexibler Präprozessor welcher jedoch etwas schwieriger zu benutzen ist mit einer kleineren Community.

*Warum sollte ich Sass, irgendeinem anderen Präprozessor vorziehen?* ist auch heute immernoch eine gute Frage. Es ist noch garnicht solange her, dass wir Sass für Ruby basierte Projekte empfohlen haben weil es in Ruby entwickelt wurde und sich gut mit Ruby on Rails gemacht hat. Jetzt wo LibSass nahezu aufgeholt hat, ist das kein relevanter Ratschlag mehr.

Was ich an Sass mag ist sein konservativer Ansatz zu CSS. Das Design von Sass ist stark auf folgende Prinzipien aufgebaut: die meisten Entscheidungen folgen dem Glauben des Kernteams dass a) extra Features hinzufügen sich auf die Komplexität auswirkt und von daher durch den Nutzen gerechtfertigt sein muss, und b) es einfach und logisch sein sollte über einen Block von Styles zu schauen. Außerdem hat Sass eine viel schärfere Aufmerksamkeit fürs Detail als andere Präprozessoren. So weit ich sagen kann, kümmern sich die Hauptentwickler wirklich darum jeden Sonderfall im CSS zu unterstützen und sicherzustellen das jedes generelle Verhalten konsistent ist. In anderen Worten, Sass ist Software die wirkliche Probleme lösen, und helfen möchte nützliche Funktionalität anzubieten da wo CSS versagt.

Präprozessoren mal zur Seite gestellt, sollten wir auch über Postprozessortools wie [PostCSS](https://github.com/postcss/postcss) und [cssnext](https://cssnext.github.io/) sprechen, welche eine große Aufmerksamkeit in den letzten Monaten erhalten haben.

PostCSS wird gewöhnlicher- und inkorrekterweise als "Postprozessor" angesehen. Die Annahme, zusammen mit dem unglücklichen Namen, ist, dass PostCSS über CSS parsed welches bereits von einem Präprozessor bearbeitet wurde. Das kann zwar so funktionieren, ist aber nicht die Anforderung. Von daher ist PostCSS eigentlich ein "Prozessor".

Dadurch kannst du "tokens" aus deinem Stylesheet (wie Selektoren, Eigenschaften und Werte) mit JavaScript verarbeiten, um Operationen jeglicher Art auszuführen, welche dann wieder zu CSS kompilieren. [Autoprefixer](https://github.com/postcss/autoprefixer), die beliebte Prefixing-Bibliothek, ist zum Beispiel mit PostCSS gebaut. Es parst jede Regel um zu sehen ob Vendor-Prefixe benötigt werden, indem es das Browser-Support-Tool [CanIUse](https://caniuse.com) referenziert. Es entfernt oder fügt dann dementsprechend die Vendor-Prefixe hinzu.

Das ist unglaublich mächtig und großartig um Libraries, die mit irgendeinen Präprozessor (genauso wie Vanilla-CSS) zusammen arbeiten, zu bauen. Jedoch ist PostCSS nicht einfach zu benutzen. Du musst ein bisschen JavaScript können um überhaupt irgendwas damit zu bauen, und dazu kann die API noch verwirrend sein. Während Sass lediglich Features bereitstellt die nützlich sind um CSS zu schreiben, besitzt PostCSS direkten Zugriff auf den CSS AST (*abstract syntax tree*, oder abstrakter *Syntaxbaum*) und JavaScript.

Um es um kurz zu halten, Sass ist einigermaßen einfach und wird die meisten deiner Probleme lösen. Auf der anderen Seiten kann PostCSS schwierig sein (falls du nicht all zu gut in JavaScript bist), sich aber als extrem mächtig herausstellen. Es gibt keinen Grund weshalb du beides nicht nutzen solltest oder könntest. Tatsächlich bietet PostCSS sogar einen offiziellen SCSS-Parser genau dafür an.

<div class="note">
  <p>Danke an <a href="https://github.com/corysimmons">Cory Simmons</a> für seine Erfahrung und Hilfe zu dieser Sektion.</p>
</div>
