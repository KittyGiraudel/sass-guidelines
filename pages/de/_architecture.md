
## Architektur

Die Architektur eines CSS Projekts gehört wohl zu den schwierigsten Themen innerhalb eines Projekts. Sie dann noch konsistent und logisch zu halten, ist gleich viel schwieriger.

Zum Glück ist einer der Hauptvorteile eines CSS Präprozessor der, eine Codebasis über mehrere Dateien aufzuteilen ohne dabei die Performance zu beeinflussen (so wie die CSS Regel `@import` es tun würde). Dank der Erweiterung von `@import` in Sass, ist es sicher (und empfohlen) während der Entwicklung soviele Dateien wie nötig zu nutzen und sie dann in der Produktion zu einem Stylesheet zu kompilieren.

Darüber hinaus kann ich nicht oft genug erwähnen, wie wichtig es selbst in kleinen Projekten ist, Ordner zu verwenden. Zu Hause wirfst du schließlich auch nicht jedes Blatt Papier in eine große Kiste. Du ordnest sie; einen Ordner für die Wohnung, einen anderen für die Bank, in den nächsten kommen Rechnungen, und so weiter. Deshalb gibt es auch keinen Grund es mit der Struktur deines CSS anders zu machen. Teile es in verschiedene Ordner auf, sodass du dich später, wenn du zurück in das Projekt kommst, leicht zurecht findest.

Es gibt [viele beliebte Architekturen](https://www.sitepoint.com/look-different-sass-architectures/) für CSS Projekte: [OOCSS](https://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) sowie ein [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) ähnliches… alle mit ihren Vor- und Nachteilen.

Ich selber nutze einen Ansatz ähnlich wie [SMACSS](http://smacss.com/) von [Jonathan Snook](https://snook.ca/), welcher sich darauf fokusiert etwas einfach und offensichtlich zu halten.

<div class="note">
  <p>Ich habe gelernt das Architektur meistens sehr Projektspezifisch ist. Deshalb tu dir keinen Zwang an mir komplett zu widersprechen oder nur die Lösungen zu übernehmen welche du brauchst.</p>
</div>

### Komponenten

Es gibt einen großen Unterschied zwischen etwas *fertig* stellen, und etwas *gut* machen. CSS ist eine wirklich unsaubere Sprache <sup>[Zitat nötig]</sup> und je weniger, desto besser. Schließlich wollen wir keine Megabytes von CSS, sondern kurze und effiziente Stylesheets. Von daher&mdash;das wird kaum überraschen&mdash;, ist es generell eine gute Idee sich ein Interface als eine Sammlung von Komponenten vorzustellen.

Komponenten können alles sein, solange sie:

* sich um genau eine Aufgabe kümmern;
* wiederverwendbar und innerhalb des Projekt verwendet werden;
* unabhängig sind.

Ein Suchfeld zum Beispiel sollte wie eine Komponente behandelt werden. Wiederverwendbar an verschiedenen Positionen, unterschiedlichen Seiten in mehreren Situation. Dazu noch unabhängig vom DOM (footer, sidebar, main content, …).

Die meisten Interfaces können als Set aus kleinen Komponenten gesehen werden. Ich kann nur empfehlen sich an so ein Paradigma zu halten, denn das wird nicht nur CSS ersparen sondern auch die Wartbarkeit gegenüber einem chaotischen Durcheinander einfacher machen.

### Komponentenstruktur

Idealerweise sollten Komponenten in einem eigenen Sass Partial (innerhalb des `components/` Ordner, wie beschrieben in dem [7-1 Muster](#das-7-1-muster)) wie `components/_button.scss` existieren. Die Styles innerhalb einer Komponente sollten sich lediglich um folgendes kümmern:

* die Styles der Komponente selbst;
* die Styles der Varianten, Modifizierungen und/oder Zustände der Komponente;
* falls notwendig, die Styles der Kind-Elemente der Komponente.

Wenn deine Komponente von extern thematisch angepasst werden sollen (z.B. in einem Theme innerhalb des `themes/` Ordner), grenz die Deklarationen auf struktuerelle Styles wie Dimensionen (width/height), Innen- und Außenabstände oder Ausrichtungen ein. Lasse Farben, Schatten, Fontregeln oder Hintergrundregeln aus.

Ein Komponenten-Partial kann komponentenspezifische Variablen, Platzhalter und sogar Mixins und Funktionen enthalten. Vergiss aber nicht, dass Dateien aus anderen Komponenten zu referenzieren (z.B. `@import`-en) vermieden werden sollte. Das kann deine Projektabhängigkeiten in ein unwartbares Chaos verwandeln.

Hier ist ein Beispiel eines Button-Komponenten Partial:

{% include snippets/architecture/06/index.html %}

<div class="note">
  <p>Danke an <a href="https://twitter.com/davidkpiano">David Khourshid</a> für seine Hilfe und Expertise in dieser Sektion.</p>
</div>

### Das 7-1 Muster

Zurück zur Architektur, oder? Ich arbeite normalerweise mit einem Muster was ich *7-1* nenne: 7 Ordner, 1 Datei. Grundsätzlich hast du all deine partials in 7 verschiedenen Ordnern verteilt, und eine Datei auf dem Root-Level (normalerweise `main.scss`) importiert und kompiliert alles zu einem Stylesheet.

* `abstracts/`
* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `vendors/`

Und natürlich:

* `main.scss`

<div class="note">
  <p>Wenn du das 7-1 Muster verwenden möchtest, gibt es bereits ein <a href="https://github.com/KittyGiraudel/sass-boilerplate">Boilerplate</a> auf GitHub. Es sollte alles nötige beinhalten um mit der Architektur zu starten.</p>
</div>

{% include images/wallpaper.html %}

Idealerweise haben wir am Ende etwas wie:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Die Dateien sollten einer mit Bindestrich getrennten Namenskonvention folgen.</p>
</div>

#### Base Ordner

Der `base/` Ordner beinhaltet etwas wie das Boilerplate des Projekts. Da wird eine Reset-Datei drin sein, ein paar Regeln für die Typografie und wahrscheinlich auch ein Stylesheet für allgemeinere HTML Elemente (welches ich `_base.scss` nenne):

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

<div class="note">
  <p>Falls dein Projekt <em>eine Menge</em> CSS Animationen verwendet, kannst du dir überlegen eine <code>\_animations.scss</code> mit allen <code>@keyframes</code> Definitionen von deiner Animationen hinzuzufügen. Falls du sie aber nur sporadisch benutzt, würde ich sie bei den jeweiligen Selektoren behalten.</p>
</div>

#### Layout Ordner

Im `layout/` Ordner ist alles was für die Seite oder Applikation als Design definiert wird. Hier können Stylesheets für die Hauptbereiche der Seite (header, footer, navigation, sidebar, …), das Gridsystem oder Formulare drin sein.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>Der <code>layout/</code> Ordner kann auch <code>partials/</code> genannt werden, je nachdem was du vorziehst.</p>
</div>

#### Components Ordner

Für kleinere Komponenten gibt es den `components/` Ordner. Während der `layout/` Ordner eher klein bleibt (hier wird das globale Wireframe definiert), beinhaltet `components/` eher Widgets oder Module wie Slider, Loader und ähnliches. Durch den Ansatz eine Seite oder Applikation überwiegend aus kleinen Modulen zu entwickeln, sind hier tendenziell mehr Dateien vorhanden.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>Der <code>components/</code> Ordner könnte auch, je nachdem was du vorziehst, <code>modules/</code> genannt werden.</p>
</div>

#### Pages Ordner

Falls du seitenspezifische Stylesheets hast, solltest du sie lieber in einen `pages/` Ordner (benannt nach dem Namen der Seite) packen. Es ist nicht unüblich seitenspezifische Regeln für die Startseite zu haben, deshalb auch eine `_home.scss` in `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Je nachdem wie dein Deployment Prozess ist, können die Dateien auch für sich geladen werden, um Konflikte mit den anderen Stylesheets zu vermeiden. Auch hier ist es dir überlassen.</p>
</div>

#### Themes Ordner

Es ist garnicht mal unüblich auf großen Seiten oder Applikationen verschiedene Themes zu verwenden. Jeder mag das Thema anders angehen, doch ich persönlich mag es alle in einem `themes/` Ordner zu verwalten.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Mein Ansatz ist sehr projektspezifisch und kann woanders wohl auch garnicht so vorkommen.</p>
</div>

#### Abstracts Ordner

Der `abstracts/` Ordner umfasst alle Sass Tools und Helper die über das Projekt verteilt zum Einsatz kommen. Sei es globale Variablen, Funktionen, Mixins oder Platzhalter.

Die Grundregel hier ist, dass am Ende keine einzige Zeile CSS kompiliert werden soll, und die Dateien somit leer bleiben. Es sind reine Sass Helper.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss`

Bei einem sehr großen Projekt mit vielen abstrakten Utilities mag es interessant sein diese eher nach Typ oder Thema, wie zum Beispiel Typographie (`_typography.scss`), Theming (`_theming.scss`) etc., zu gruppieren. Jede Datei enthält alle zugehörigen Helper: Variablen, Funktionen, Mixins und Platzhalter. Das macht deinen Code einfacher zum durchsuchen und warten, besonders wenn die Dateien sehr groß werden.

<div class="note">
  <p>Je nach dem was du bevorzugst, kann der <code>abstracts/</code> Ordner auch <code>utilities/</code> oder <code>helpers</code> genannt werden.</p>
</div>

#### Vendors Ordner

Und zu guter Letzt, der `vendors/` Ordner. Die meisten Projekte besitzen einen solchen oder ähnlichen Ordner indem alles CSS von externen Libraries und Frameworks wie z.B. Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered und so weiter, gelistet sind. All diese in einem Ordner zu sammeln ist ein guter Weg zu sagen "Hey, das ist nicht von mir, nicht mein Code, nicht meine Verantwortung".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Falls du irgendwann mal einen Bereich daraus überschreiben musst, rate ich einen achten Ordner namens `vendors-extensions` anzulegen. Dort kannst du die Dateien exakt danach benennen was sie überschreiben.

Zum Beispiel, `vendors-extensions/_bootstrap.scss` beinhaltet alle Regeln die einige von Bootstraps Default CSS überschreiben. Dadurch vermeide ich die Vendor-Dateien selbst zu bearbeiten, was generell keine gute Idee ist.

#### Main Datei

Die Main Datei (üblicherweise `main.scss` genannt) sollte die einzige Sass-Datei aus der Codebasis sein, welche nicht mit einem Unterstrich beginnt. Außer `@import` und Kommentaren steht dort nichts weiter drin.

Die Dateien sollten danach importiert werden, in welchem Ordner sie sich befinden. Eins nach dem anderen, nach folgender Reihenfolge:

1. `abstracts/`
1. `vendors/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Um die Lesbarkeit einzuhalten, solltest du außerdem diese Richtlinien beachten:

* eine Datei pro `@import`;
* ein `@import` pro Zeile;
* keine neue Zeile zwischen imports vom selben Ordner;
* eine neue Zeile nach dem letzten import aus einem Ordner;
* Dateiendungen und Unterstriche am Anfang weglassen.

{% include snippets/architecture/02/index.html %}

Es gibt noch einen weiteren Weg um die Datei zu strukturieren, welchen ich ebenfalls als richtig sehe. Auf der anderen Seite macht es das aktualisieren zwar schwieriger, aber da kannst du selbst entscheiden, welche Struktur dir am besten gefällt. Hier sollten diese Richtlinien beachtet werden:

* ein `@import` pro Ordner;
* ein Zeilenumbruch nach `@import`;
* jede Datei in einer Zeile;
* eine neue Zeile nach dem letzten import aus einem Ordner;
* Dateiendungen und Unterstriche am Anfang weglassen.

{% include snippets/architecture/03/index.html %}

### Über Globbing

In der Computerprogrammierung spezifizieren sogenannte Glob-Muster ein Set von Dateinamen, wie z.B. `*.scss`, mit Wildcard-Zeichen. Allgemein gesagt bedeutet es, dass Globbing ein Set nach einem Ausdruck anstatt einer Liste von Dateinnamen umfasst. Wenn das ganze auf Sass angewandt wird, bedeutet es dass Partials nach einem Glob-Muster in die [Main Datei](#main-datei) importiert und nicht individuell aufgelistet werden. Das führt zu folgender Main Datei:

{% include snippets/architecture/05/index.html %}

Sass untersützt Datei Globbing nicht von Haus aus, da es aufgrund der Befehlsabhängigkeit in CSS ein gefährliches Feature sein kann. Wenn Dateien dynamisch importiert werden (in der Regel in alphabetisch), ist die Reihenfolge der importierten Dateien nicht mehr kontrollierbar und kann zu schwer zu entfernbaren Nebeneffekten führen.

In einer strikten, komponentenbasierten Architektur mit extra Rücksicht keine Styles von Partial zu Partial entweichen zu lassen, sollte die Reihenfolge nicht mehr wirklich wichtig sein, und erlauben das Glob-Muster zum importieren zu verwenden. Das macht es einfacher Partials hinzuzufügen oder zu entfernen ohne jedesmal sorgfältig die Main Datei aktualisieren zu müssen.

<div class="note">
  <p>Um nicht jede Datei manuell zu importieren, gibt es die Erweiterung für Ruby Sass namens [sass-globbing](https://github.com/chriseppstein/sass-globbing) welche es ermöglicht das Glob-Muster in Sass zu <code>@import</code>-en wie z.B. <code>@import "components/\*"</code>.</p>
   <p>Ich würde es allerdings nicht empfehlen, da es nach alphabetischer Ordnung importiert was in der Regel nicht gewollt ist, besonders wenn man es mit einer Sprache zu tun hat die Abhängig von der Quellreihenfolge ist.</p>
</div>

### Shame-Datei

Es gibt ein interessantes Konzept von [Harry Roberts](https://csswizardry.com), [Dave Rupert](https://daverupert.com) und [Chris Coyier](https://css-tricks.com), wo alle Deklarationen, Hacks und Dinge auf die wir nicht stolz sind, in einer [*Shame-Datei*](https://csswizardry.com/2013/04/shame-css-full-net-interview/) zusammengefasst sind. Die dramatisch benannte `_shame.scss` sollte nach jeder anderen Datei und ganz am Ende deines Stylesheets  importiert werden.

{% include snippets/architecture/04/index.html %}
