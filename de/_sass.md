
# Über Sass

In Ihrer [Dokumentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) beschreibt sich [Sass](http://sass-lang.com) als:

> [...] eine Erweiterung von CSS, welche Leistung und Eleganz zur wesentlichen Sprache hinzufügt.

Das ultimative Ziel von Sass ist es, die Fehler von CSS zu beheben. Denn wir wissen ja alle, dass CSS wirklich nicht die beste Sprache der Welt ist <sup>[Zitat benötigt]</sup>. Sie ist zwar sehr einfach zu lernen, kann aber, gerade in großen Projekten, sehr schnell unübersichtlich werden.

Hier kommt Sass als Meta-Sprache hinzu, um die Syntax von CSS zu verbessern und nützliche Features sowie Extras hinzuzufügen. Trotz dessen möchte Sass aber konservativ gegenüber CSS bleiben.

Es geht nämlich nicht darum CSS in eine Programmiersprache voller Features umzuändern. Sass möchte lediglich da helfen wo CSS versagt. Deshalb ist Sass zu erlernen auch nicht schwieriger als CSS; es fügt einfach nur ein paar extra Features oben drauf.

Von daher gibt es gleichzeitig viele verschiedene Möglichkeiten diese Features einzusetzen. Manche sind gut, manche schlecht und andere wiederum unüblich. Die Absicht dieser Guidelines ist es einen konsistenten und dokumentierten Ansatz zu bieten, Sass zu schreiben.

###### Weitere Artikel

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## Ruby Sass oder LibSass

[Sass' erster Commit](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) war Ende 2006, mittlerweile über 8 Jahre zurück. Unnötig zu erwähnen das es seither einen langen Weg gegangen ist. Ursprünglich in Ruby entwickelt, wurde es bereits mehrmals in andere Sprachen übertragen; die erfolgreichste davon ist [LibSass](https://github.com/sass/libsass) (geschrieben in C), welches nun nah dran ist vollständig Kompatibel mit der originalen Ruby version zu sein.

2014 haben sich die Teams von [Ruby Sass und LibSass dazu entschieden, zu warten, bis beide auf demselben Stand sind bevor es mit der Entwicklung weitergeht](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Seither veröffentlicht LibSass regelmäßig neue Release Versionen. Die noch ausstehenden Features sind von mir unter durch das [Sass-Compatibility](http://sass-compatibility.github.io) Projekt gesammelt und aufgelistet. Falls dir noch Ungleichheiten auffallen, die ich nicht aufgelistet habe, sei doch so nett und teil es mir mit.

Zurück zum Compiler. Eigentlich hängt es komplett von deinem Projekt ab. Wenn es ein Ruby on Rails Projekt ist, solltest du besser Ruby Sass benutzen da es genau darauf ausgerichtet ist. Ruby Sass wird außerdem immer die Referenzimplementation sein und LibSass in Sachen Features leiten.

In Nicht-Ruby Projekten welche einen speziellen Workflow brauchen, ist LibSass die bessere Wahl. Wenn du also, sagen wir NodeJS, benutzen möchtest dann wäre [node-sass](https://github.com/sass/node-sass) deine Wahl.

###### Weitere Artikel

* [LibSass](https://github.com/sass/libsass)
* [Getting to know LibSass](http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)

## Sass oder SCSS

Es gibt eine relativ große Verwirrung über die Semantik des Wortes *Sass*. Aus gutem Grund: Sass steht für den Präprozessor selbst und die eigene Syntax. Nicht wirklich praktisch, oder?

Ursprünglich beschrieb Sass die Syntax, dessen Charakteristika in der Bedeutung von Einrückung lag. Doch relativ schnell haben sich die Entwickler von Sass dazu entschieden, die Lücke zwischen Sass und CSS zu schließen indem sie die CSS freundliche Syntax *SCSS* (für *Sassy CSS*) eingeführt haben. Das Motto: wenn es valides CSS ist, ist es valides SCSS.

Seitdem bietet Sass (der Präprozessor) zwei verschiedene Syntaxen an: Sass ([nicht in Großbuchstaben](http://sassnotsass.com)), auch bekannt unter der *vorgesehenen Syntax*, und SCSS. Welche du benutzt, ist komplett dir überlassen. Beide haben dieselben Features und es ist wirklich nur eine Frage der Ästhetik.

Sass' Leerzeichenempfindliche Syntax beruht auf Einrückung um geschweifte Klammern, Semikolons und andere Zeichensetzung entfernen zu können. Das führt zu einer schlankeren und kürzeren Syntax. Währenddessen ist SCSS einfacher zu erlernen, da es überwiegend nur Kleinigkeiten zu CSS hinzufügt.

Ich selber ziehe SCSS gegenüber Sass vor, weil es näher an CSS liegt und freundlicher für die meisten Entwickler ist. Von daher wird SCSS auch der Standard in den gesamten Guidelines sein. Du kannst jedoch zur Sass Syntax in den <span data-toggle="aside" class="link-like" role="button" aria-expanded>Optionen</span> wechseln.

###### Weitere Artikel

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)

## Andere Präprozessoren

Sass ist nur ein Präprozessor unter vielen. Sein größter Mitstreiter ist [LESS](http://lesscss.org/), ein auf NodeJS basierender Präprozessor welcher durch das CSS Framework [Bootstrap](http://getbootstrap.com/) bekannt wurde. Es gibt außerdem noch Stylus - die nerdige, uneingeschränkte Version von LESS - wo du eigentlich alles machen kannst was du möchtest, da es CSS in eine Programmiersprache verwandelt.

*Warum sollte ich Sass, LESS oder einen anderen Präprozessor vorziehen?* ist auch heute immernoch eine gute Frage. Es ist noch garnicht solange her, dass wir Sass für Ruby basierte Projekte empfohlen haben weil es in Ruby entwickelt wurde und sich gut mit Ruby on Rails gemacht hat. Jetzt wo LibSass nahezu aufgeholt hat, ist das kein relevanter Ratschlag mehr.

Was ich an Sass mag ist sein konservativer Ansatz zu CSS. Das Design von Sass ist stark auf folgende Prinzipien aufgebaut: die meisten Entscheidungen folgen dem Glauben des Kernteams dass a) extra Features hinzufügen sich auf die Komplexität auswirkt und von daher durch den Nutzen gerechtfertigt sein muss, und b) es einfach und logisch sein sollte über einen Block von Styles zu schauen. Außerdem hat Sass eine viel schärfere Aufmerksamkeit fürs Detail als andere Präprozessoren. So weit ich sagen kann, kümmern sich die Hauptentwickler wirklich darum jeden Sonderfall im CSS zu unterstützen und sicherzustellen das jedes generelle Verhalten konsistent ist.

In anderen Worten, Sass als Präprozessor ist nicht darauf aus außergewöhnliche Features die keine logischen Anwendungsfälle unterstützen einzubauen, nur um nerdige Möchtegerns wie mich zufrieden zu stellen. Es ist Software die wirkliche Probleme lösen, und helfen möchte nützliche Funktionalität anzubieten da wo CSS versagt.

Präprozessoren mal zur Seite gestellt, sollten wir auch über Postprozessoren sprechen. Sie haben in den letzten Monaten erhebliche Aufmerksamkeit, hauptsächlich durch [PostCSS](https://github.com/postcss/postcss) und [cssnext](https://cssnext.github.io/), erhalten. Postprozessoren sind ziemlich identisch zu Präprozessoren, außer das sie nichts anderes außer bevorstehender CSS Syntax anbieten.

Du kannst dir Postprozessoren als eine Art Polyfill für noch nicht unterstützte CSS Features vorstellen. Zum Beispiel würdest du Variablen wie in der offiziellen [CSS Spezifikation](http://dev.w3.org/csswg/css-variables/) schreiben, und sie dann mit einem Postprozessor genau wie in Sass kompilieren, wo alle Variablen mit ihrem angegeben Wert ausgetauscht sind.

Die Idee dahinter ist, dass sobald ein Browser diese neuen Features (z.B. CSS Variablen) unterstützt, der Postprozessor diese auch nicht mehr kompilieren muss und der Browser somit die Aufgabe übernehmen kann.

Die Syntax von morgen zu unterstützen ist zwar eine gute Idee, ich zieh dennoch Sass für die meisten Aufgaben vor. Wie auch immer, es gibt definitiv einige Fälle wo ein Postprozessor besser passt als Sass oder ähnliches. CSS Prefixe zum Beispiel - aber darauf kommen wir später zurück.

###### Weitere Artikel

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)
