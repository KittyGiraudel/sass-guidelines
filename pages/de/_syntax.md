
## Syntax & Formatierung

Wenn du mich fragst, sollte dass erste sein was ein Styleguide definiert, die Art und Weise wie der Code aussehen soll.

Wenn mehrere Entwickler in einem Projekt CSS schreiben, ist es nur eine Frage der Zeit bis einer anfängt etwas so zu machen wie er es für gut hält. Konsistente Code Guidelines verhindern dies nicht nur, sondern helfen auch wenn es darum geht den Code zu lesen und zu aktualisieren.

Grob gesehen wollen wir (schamlos inspiriert bei [CSS Guidelines](https://cssguidelin.es/#syntax-and-formatting)):

* zwei (2) Spaces einrücken, keine Tabs;
* idealerweise 80-Buchstaben lange Zeilen;
* ordentlich geschriebene, mehrzeilige CSS Regeln;
* sinnvoller Gebrauch von Leerzeichen.

{% include snippets/syntax/01/index.html %}

### Strings

Ob du es glaubst oder nicht, Strings spielen eine große Rolle in CSS und Sass. Die meisten Werte in CSS sind entweder Zahlen oder Identifikatoren. Deshalb ist es wichtig sich an gewisse Guidelines zu halten, wenn Strings in Sass verwendet werden.

#### Encoding

Um potentielle Probleme in der Zeichenkodierung zu vermeiden, empfehle ich [UTF-8](https://de.wikipedia.org/wiki/UTF-8) durch die `@charset` Regel im [Main Stylesheet](#main-datei) zu erzwingen. Versicher dich, dass es die allererste Regel in deinem Stylesheet ist, und nichts davor kommt.

{% include snippets/syntax/02/index.html %}

#### Anführungszeichen

CSS setzt nicht voraus dass Strings in Anführungszeichen zu setzen sind, nichtmal jene die Leerzeichen beinhalten. Zum Beispiel font-family: für den CSS Parser ist es vollkommen egal ob du die Namen in Anführunsgzeichen setzt oder nicht.

Deshalb ist es in Sass *ebenfalls* nicht nötig. Noch besser (und *zum Glück*, wie du zugeben musst), ein String in Anführungszeichen ist exakt identisch gegenüber einem String ohne (z.B. `'abc'` ist exakt gleich zu `abc`).

Im übrigen sind Sprachen die es nicht erfordern Strings in Anführungszeichen zu setzen eine Minderheit, deshalb **sollten Strings in Sass immer in einfachen Anführungszeichen (`'`) gesetzt werden** (sie sind einfacher zu tippen als die normalen auf einer *QWERTY* Tastatur). Neben der Einheitlichkeit zu anderen Sprachen, einschließlich CSS' Cousin JavaScript, gibt es mehrere Gründe dafür:

* Farbnamen werden wie Farben interpretiert wenn sie in Anführungszeichen gesetzt sind, was zu ernsthaften Problemen führen kann;
* die meisten Syntax-Highlighter bekommen Probleme mit Strings die nicht in Anführungszeichen stehen;
* es unterstützt die generelle Lesbarkeit;
* es gibt keinen wirklichen Grund es nicht zu tun.

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>Laut CSS Spezifikation, muss die <code>@charset</code> Regel mit doppelten Anführungszeichen deklariert werden um <a href="https://www.w3.org/TR/css3-syntax/#charset-rule">valide</a> zu sein. Wie auch immer, Sass kümmert sich bereits darum wenn es CSS kompiliert, deswegen wird es kaum eine Auswirkung auf das Endergebnis haben. Deshalb kannst du ohne Probleme bei einfachen Anführungszeichen bleiben, selbst bei <code>@charset</code>.</p>
</div>

#### Strings als CSS Werte

Bestimmte CSS Werte (Identifikatoren) wie `initial` oder `sans-serif` müssen nicht in Anführungszeichen stehen. Tatsächlich wird CSS unbemerkt versagen, wenn `font-family: 'sans-serif'` benutzt wird, da es einen Identifier erwartet und keinen String. Deshalb setzen wir diese Werte nicht in Anführungszeichen.

{% include snippets/syntax/04/index.html %}

Deshalb können wir zwischen Strings die wie im vorigen Beispiel als CSS Werte (CSS Identifier) vorgesehen sind, und Strings die sich in Sass auf Datentypen wie beispielsweise Map Keys beziehen, unterscheiden.

Wir setzen ersteres nicht in Anführungszeichen, aber letzteres in einfache.

#### Strings die Anführungszeichen beinhalten

Wenn ein String mehrere einfache Anführungszeichen beinhaltet, mag man drüber nachdenken diese in doppelte (`"`) zu setzen, um zu vermeiden Zeichen escapen zu müssen.

{% include snippets/syntax/05/index.html %}

#### URLs

URLs sollten aus denselben Gründen wie oben in Anführungszeichen gesetzt werden:

{% include snippets/syntax/06/index.html %}

### Zahlen

In Sass sind Zahlen ein Datentyp der alles von einheitlosen Zahlen über Längen, Dauer, Frequenzen, Winkel und so weiter, beinhalten kann. Das erlaubt es dementsprechende Berechnung zu machen.

#### Nullen

Zahlen sollten immer eine Null vor dezimalen Werten, die weniger als eins sind, anzeigen. Eine Null niemals hinten anhängen.

{% include snippets/syntax/07/index.html %}

<div class="note">
  <p>In Sublime Text und anderen Editoren welche suchen und ersetzen mittels regulären Ausdrücken unterstützen, ist es ziemlich einfach eine Null zu einer Gleitkommazahl (wenn nicht zu allen) hinzuzufügen. Ersetze <code>\s+\.(\d+)</code> einfach mit <code>\ 0.$1</code>. Vergiss nicht das Leerzeichen vor der <code>0</code>.</p>
</div>

#### Einheiten

Wenn es um Längen geht, sollte eine `0` niemals eine weitere Einheit besitzen.

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>Diese Praktik sollte nur bei Längen angewandt werden. Eine einheitenlose Null für Zeiteneinheiten wie <code>transition-delay</code> ist nicht erlaubt. Falls eine einheitenlose Null für eine Zeitdauer spezifiziert ist, sollte die Deklaration theoretischerweise als invalide erachtet und verworfen werden. Nicht alle Browser sind so strikt, aber manche. Langer Rede kurzer Sinn: Einheiten nur bei Längen weglassen.</p>
</div>

Der häufigste Fehler den ich mir bei Zahlen in Sass vorstellen kann, ist der Gedanke dass Einheiten einfach nur ein String sind, die man sicher zu jeder Zahl hinzufügen kann. Das klingt zwar richtig, ist aber nicht wie Einheiten funktionieren. Stell dir eine Einheit als ein algebraisches Symbol vor. Zum Beispiel in der echten Welt, ist 5 Zoll multipliziert mit 5 Zoll gleich 25 Quadratzoll. Nach derselben Logik geht Sass.

Um eine Einheit zu einer Zahl hinzuzufügen, musst du diese Zahl mit *einer Einheit* multiplizieren.

{% include snippets/syntax/09/index.html %}

Einen *0 Wert der Einheit* hinzuzufügen funktioniert ebenfalls, aber ich empfehle eher die obrige Methode da es sonst etwas verwirrend ist. Wenn du versuchst eine Zahl in eine andere kompatible Einheit zu konvertieren, wird 0 hinzuzufügen nicht klappen. Mehr dazu [in diesem Artikel](https://css-tricks.com/snippets/sass/correctly-adding-unit-number/).

{% include snippets/syntax/10/index.html %}

Am Ende kommt es wirklich darauf an was du erreichen möchtest. Versuch dich einfach daran zu erinnern, das eine Einheit als String hinzuzufügen kein guter Weg ist fortzufahren.

Um die Einheit von einem Wert zu entfernen, musst du es um *eine Einheit seiner Art* teilen.

{% include snippets/syntax/11/index.html %}

Eine Einheit als String zu einer Zahl hinzuzufügen, macht sie zu einem String. Dadurch sind alle weiteren Operationen mit dem Wert nicht mehr möglich. Den numerischen Teil einer Einheit zu trennen, führt ebenfalls zu einem String. Das ist nicht was du willst. [Benutze Längen, keine Strings](https://kittygiraudel.com/2013/09/03/use-lengths-not-strings/).

#### Berechnungen

**Numerische Berechnungen auf höchser Ebene sollten immer in Klammern stehen**. Es erhöht nicht nur enorm die Lesbarkeit, sondern umgeht auch Edge Cases indem Sass gezwungen wird den Inhalt von Klammern zu erst zu berechnen.

{% include snippets/syntax/12/index.html %}

#### Magische Zahlen

"Magische Zahlen" sind in der [Old School Programmierung](https://de.wikipedia.org/wiki/Magische_Zahl_(Informatik)#Magische_Zahlen_in_Code) ein Term dafür, *Werte direkt im Quellcode zu benutzen*. Grundsätzlich erklärt, ist es eine zufällige Zahl die *einfach funktioniert*™ ohne an irgendeine logische Begründung gebunden zu sein.

**Magische Zahlen sind schlechter Programmierstil und sollten unter allen Umständen vermieden werden**. Falls du mal keine gute Erklärung finden kannst, weshalb eine Zahl funktioniert, dann füg ein ausführlichen Kommentar hinzu der erklärt wie du dahin gekommen bist und weshalb du denkst dass es funktioniert. Zuzugeben dass du nicht weißt weshalb etwas funktioniert, ist manchmal hilfreicher für den nächsten Entwickler als wenn er komplett von Anfang herausfinden muss was passiert.

{% include snippets/syntax/13/index.html %}

Zu dem Thema hat CSS-Tricks einen [hervoragenden Artikel](https://css-tricks.com/magic-numbers-in-css/) über magische Zahlen in CSS den ich dir nur empfehlen kann.

### Farben

Farben nehmen einen wichtigen Platz in der CSS Sprache ein. Normalerweise ist Sass ein wertvoller Verbündeter wenn es darum geht Farben zu manipulieren. Meistens dadurch [mächtige Funktionen](https://sass-lang.com/documentation/Sass/Script/Functions.html) bereit zu stellen.

Sass ist so nützlich Farben zu manipulieren dass das Internet voller Artikel über das Thema aufblüht. Lass mich ein paar Artikel empfehlen:

* [How to Programmatically Go From One Color to Another](https://kittygiraudel.com/2014/01/30/programmatically-go-from-one-color-to-another-with-sass/)
* [Using Sass to Build Color Palettes](https://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](https://www.sitepoint.com/dealing-color-schemes-sass/)

#### Farbformate

Um Farben so einfach wie sie sind zu lassen, ist mein Ratschlag folgende Reihenfolge bei Farbformaten zu respektieren:

1. [HSL-Farbraum](https://de.wikipedia.org/wiki/HSV-Farbraum);
1. [RGB-Farbraum](https://de.wikipedia.org/wiki/RGB-Farbraum);
1. Hexadezimale Darstellung (Kleinbuchstaben und gekürzt).

CSS Farbkeywords sollten nur für schnelles Prototyping verwendet werden. Es sind zwar englische Wörter, jedoch haben manche eine wirklich schlechte Beschreibung der Farbe die sie repräsentieren, was vor allem für nicht englischsprachige ein Problem sein kann. Darüber hinaus sind Keywords nicht perfekt semantisch; zum Beispiel ist `grey` in Wirklichkeit dunkler als `darkgrey` und die Verwirrung zwischen `grey` und `gray` kann zu inkonsistenter Verwendung der Farbe führen.

Der HSL-Farbraum ist nicht nur am einfachsten für das menschliche Gehirn zu verstehen<sup>[Zitat benötigt]</sup>, sondern er macht es außerdem ziemlich leicht für Stylesheet-Autoren Farben durchs anpassen des Farbton, der Sättigung und Helligkeit zu optimieren.

RGB hingegen hat immernoch den Vorteil direkt zu zeigen ob eine Farbe mehr in Richtung Blau, Grün oder Rot geht. Es ist jedoch nicht einfach eine Farbe aus den drei Komponenten zu erstellen.

Zuletzt, Hexadezimale Darstellung ist schwer lesbar für das menschliche Gedächtnis.

{% include snippets/syntax/14/index.html %}

Wenn der HSL oder RGB-Farbaum verwendet wird, füge immer ein Leerzeichen nach dem Komma (`,`) hinzu, und keines zwischen Klammern und Inhalt (`(`, `)`).

{% include snippets/syntax/15/index.html %}

#### Farben und Variablen

Wenn du eine Farbe mehr als einmal verwendest, speicher sie in einer sinnvoll benannten Variable.

{% include snippets/syntax/16/index.html %}

Nun kannst du die Variable überall verwenden wo du willst. Wenn du aber stark an ein Theme gebunden bist, würde ich gegen diese Nutzung von Variablen argumentieren. Stattdessen, speicher die Variable in einer weiteren wo der Name erklärt wie sie eingesetzt werden soll.

{% include snippets/syntax/17/index.html %}

Dadurch verhinderst du auch bei einem Themewechsel etwas wie `$sass-pink: blue` machen zu müssen. [Dieser Artikel](https://davidwalsh.name/sass-color-variables-dont-suck) erledigt einen guten Job darin zu erklären weshalb es wichtig ist deine Farbvariablen durchzudenken.

#### Farben aufhellen und verdunkeln

Beide [`lighten`](https://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) und [`darken`](https://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) Funktionen manipulieren die Helligkeit einer Farbe im HSL-Farbraum durch hinzufügen oder entfernen von Helligkeit. Grundsätzlich sind sie nicht als Pseudonyme für den `$lightness` Parameter der [`adjust-color`](https://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) Funktion.

Das Ding ist, dass solche Funktionen oft nicht das erwartete Ergebnis liefern. Auf der anderen Seite ist die [`mix`](https://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) Funktion ein netter Weg um eine Farbe durchs mischen mit `white` oder `black` aufzuhellen oder zu verdunkeln.

Der Vorteil von `mix` ist weder die oben genannten Funktionen, sondern dass es stufenweise ins Schwarz (oder Weiß) geht, je nachdem wie du das Verhältnis der Farbe verringerst. Wobei `darken` und `lighten` relativ schnell die Farbe ins Schwarz oder Weiß ausbleichen.

{% include images/color-functions.html %}

Wenn du nicht jedesmal die `mix` Funktion schreiben möchtest, kannst du dir auch zwei einfach zu verwendene Funktionen namens `tint` und `shade` (welche ebenfalls zu [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade) dazu gehören) schreiben, um genau dasselbe zu erreichen:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>Die <a href="https://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> Funktion ist entworfen worden, um Werte flüssiger zu skalieren indem sie berücksichtigt wie hell oder dunkel sie bereits sind. Sie sollte Ergebnisse liefern, die genauso gut wie <code>mix</code> sind, aber mit einer eindeutigeren Aufrufkonvention. Der Skalierfaktor ist dennoch nicht derselbe.</p>
</div>

### Listen

Listen sind Sass' äquivalent zu Arrays. Eine Liste ist eine flache Datenstruktur (anders als [Maps](#maps)), vorgesehen um Werte jeden Typs (einschließlich Listen, was zu verschachtelten Listen führt) zu speichern.

Listen sollten folgende Guidelines beachten:

* entweder einzeilig oder mehrzeilig;
* auf jedenfall mehrzeilig wenn sie mehr als 80 Zeichen beinhalten;
* es sei denn sie sind für CSS Zwecke verwendet, immer mit einem Komma getrennt;
* immer in Klammern;
* ein abschließendes Komma wenn mehrzeilig, keines wenn einzeilig.

{% include snippets/syntax/19/index.html %}

Wenn neue Inhalte zu einer Liste hinzugefügt werden sollen, dann verwende immer die vorgesehene API. Füg sie nicht manuell hinzu.

{% include snippets/syntax/20/index.html %}

**Weitere Informationen:**

+In [diesem Artikel](https://kittygiraudel.com/2013/07/15/understanding-sass-lists/) gehe ich durch eine Menge Tipps und Tricks wie man Listen in Sass korrekt benutzt und manipuliert.

### Maps

Mit Sass können Stylesheet Autoren sogenannte Maps definieren — der Sass Term für assoziative Arrays, Hashes oder sogar JavaScript Objects. Eine Map ist eine Datenstruktur welche Keys mit Werten vereinigt. Keys und Werte können von jedem Typ, einschließlich Maps, sein. Ich empfehle aber nicht solch komplexe Datentypen als Map-Keys zu verwenden, nur weil es möglich ist.

Maps sollten folgendermaßen geschrieben werden:

* Leerzeichen nach Doppelpunkt (`:`);
* öffnende Klammer (`(`) auf derselben Zeile wie der Doppelpunkt (`:`);
* **Keys in Anführungszeichen** wenn sie Strings sind (was zu 99% der Fall ist);
* jedes Key/Value Paar auf eine neue Zeile;
* Komma (`,`) ans Ende von jedem Key/Value;
* **abschließendes Komma** (`,`) ans letzte Element um das hinzufügen, entfernen oder neuordnen einfacher zu machen;
* schließende Klammer (`)`) auf eine neue Zeile;
* kein Leerzeichen oder neue Zeile zwischen schließender Klammer (`)`) und Semikolon (`;`)

Illustration:

{% include snippets/syntax/21/index.html %}

Artikel über Sass Maps zeigen wie lang ersehnt dieses Feature war. Ich kann diese 3 Artikel empfehlen: [Using Sass Maps](https://www.sitepoint.com/using-sass-maps/), [Extra Map functions in Sass](https://www.sitepoint.com/extra-map-functions-sass/), [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/).

### CSS Regelwerk

An diesem Punkt, ist es hauptsächlich nur noch ein Überarbeiten von dem was jeder schon weiß, aber hier haben wir wie CSS Regelwerke geschrieben werden sollten (zumindest, nach den meisten Guidelines, einschließlich [CSS Guidelines](https://cssguidelin.es/#anatomy-of-a-Regelwerk)):

* verwandte Selektoren auf dieselbe Zeile; zusammenhanglose auf eine neue;
* die öffnende Klammer (`{`) mit einem Leerzeichen zum letzten Selektor;
* jede Deklaration auf eine neue Zeile;
* ein Leerzeichen nach dem Doppelpunkt (`:`);
* ein abschließendes Semikolon (`;`) ans Ende aller Deklarationen;
* die schließende Klammer (`}`) auf eine neue Zeile;
* eine neue Zeile nach der schließenden Klammer (`}`).

Illustration:

{% include snippets/syntax/24/index.html %}

Zusätzlich zu den CSS bezogenen Guidelines, richtet sich unsere Aufmerksamkeit auf:

* lokale Variablen sollen vor allen anderen Deklarationen zugewiesen und durch eine neue Zeile getrennt werden;
* Mixin Aufrufe die kein `@content` besitzen, kommen vor alle Deklarationen;
* verschachtelte Selektoren immer in eine neue Zeile;
* Mixin-Aufrufe mit `@content` kommen nach jedem verschachtelten Selektor;
* keine neue Zeile nach der schließenden Klammer (`}`).

Illustration:

{% include snippets/syntax/25/index.html %}

### Anordnung der Deklarationen

Ich kann mir kein Thema vorstellen, wo die Meinungen am weitesten außeinander gehen als bei der Anordnung von Deklarationen in CSS. Konkret gibt es zwei Fraktionen:

* sich an eine alphabetische Reihenfolge halten;
* Deklarationen nach Typ (position, display, colors, font, sonstiges...) sortieren.

Es gibt bei beidem Vor- und Nachteile. Auf der einen Seite ist die alphabetische Reihenfolge universal (zumindest für Sprachen mit dem lateinischen Alphabet), also gibt es auch keine Diskussion darüber wie Werte sortiert werden sollen. Dennoch kommt es mir ziemlich komisch vor, Werte wie `bottom` und `top` nicht direkt beieinander zu sehen. Warum sollen Animationen vor dem Display-Typ erscheinen? Es gibt eine Menge Ungereimtheiten mit der alphabetischen Reihefolge.

{% include snippets/syntax/26/index.html %}

Auf der anderen Seite macht die Sortierung nach Typ perfekt Sinn. Jede font bezogene Deklaration ist gesammelt, `top` und `bottom` sind beisammen und ein Regelwerk zu lesen fühlt sich einfach an wie eine Kurzgeschichte. Aber solange du dich an Konventionen wie [Idiomatic CSS](https://github.com/necolas/idiomatic-css) hälst, gibt es eine Menge Spielraum für Interpretationen wie man etwas machen soll. Wo gehört `white-space` hin: font oder display? Wozu gehört `overflow` nun wirklich? Was ist die Reihenfolge innerhalb einer Gruppe (es könnte alphabetisch sein, welch Ironie)?

{% include snippets/syntax/27/index.html %}

Es gibt noch einen weiteren Ansatz bei der Sortierung nach Typ, genannt [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), welcher ebenfalls ziemlich bekannt zu sein scheint. Grundsätzlich richtet sich Concentric CSS an das box-model um die Reihenfolge zu definieren: von außen nach innen.

{% include snippets/syntax/28/index.html %}

Ich kann mich selber nicht entscheiden. Eine [kürzliche Umfrage auf CSS-Tricks](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) kam zum Schluss dass über 45% der Entwickler ihre Deklarationen nach Typ sortieren, wobei nur 14% die alphabetische Reihenfolge verwenden. Gleichzeitig sortieren 39% vollkommen zufällig, mich selbst eingeschlossen.

{% include images/order-poll.html %}

Deshalb werde ich auch keines davon hier im Styleguide definieren. Nimm das was dir am besten gefällt, solange du konsistent durch alle Stylesheets bleibst (z.B. nicht die *Random*-Option).

<div class="note">
  <p>Eine <a href="https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">kürzliche Studie</a> zeigt, dass die Verwendung von <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (welches <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">Typsortierung</a> verwendet) für CSS Deklarationen die durchschnittliche Dateigröße unter Gzip-Kompression um 2.7% verkürzt. Im Vergleich nur 1.3% wenn alphabetisch sortiert.</p>
</div>

### Verschachtelung von Selektoren

Ein bestimmtes Feature von Sass, welches von vielen Entwickler übermäßig missbraucht wird, ist die *Verschachtelung von Selektoren*. Sie bietet einen Weg für Stylesheet Autoren, lange Selektoren, durchs ineinander verschachteln von kurzen Selektoren, zu erzeugen.

#### Generelle Regel

Zum Beispiel, folgende Sass Verschachtelung:

{% include snippets/syntax/29/index.html %}

... wird dieses CSS generieren:

{% include snippets/syntax/30/index.html %}

Bei den gleichen Zeilen, ist es seit Sass 3.3 möglich die Selektorreferenz (`&`) zu verwenden um erweiterte Selektoren zu erzeugen. Zum Beispiel:

{% include snippets/syntax/31/index.html %}

... wird dieses CSS generieren:

{% include snippets/syntax/32/index.html %}

Diese Methode wird oft bei der [BEM Namenskonvention](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) verwendet, um `.block__element` und `.block--modifier` Selektoren basierend auf dem originalen Selektor zu erzeugen (in diesem Fall `.block`).

<div class="note">
  <p>Es mag vielleicht anekdotisch sein, neue Selektoren durch die aktuelle Selektorreferenz (<code>&</code>) zu erzeugen, macht sie aber dadurch nicht suchbar innerhalb der Codebasis da sie per se nicht existieren.</p>
</div>

Das Problem mit dem Verschachteln von Selektoren ist, dass es den Code unheimlich schwer lesbar macht. Man muss den entsprechenden Selektor erst gedanklich erzeugen; es ist nicht immer offensichtlich wie das CSS am Ende aussehen wird.

Die Aussage gewinnt an Relevanz, sobald Selektoren immer länger werden und die Verwendung von (`&`) häufiger. Ab einem gewissen Punkt, ist das Risiko nicht mehr zu verstehen was passiert zu hoch und es nicht wert.

Um dem ganzen also Vorzubeugen, haben wir ein paar Jahre zurück viel über [die Inception-Regel](https://thesassway.herokuapp.com/beginner/the-inception-rule) gesprochen. Es wird nicht empfohlen mehr als 3 Ebenen tief zu verschachteln, als Referenz zu dem Film Inception von Christopher Nolan. Ich würde drastischer sein und es **vermeiden so viel wie möglich Selektoren zu verschachteln**.

Es gibt selbsverständlich ein paar Ausnahmen zu dieser Regel wie wir in der nächsten Sektion sehen werden. Diese Meinung scheint ziemlich beliebt zu sein. Du kannst mehr darüber in [Beware of Selector Nesting](https://www.sitepoint.com/beware-selector-nesting-sass/) und [Avoid nested selectors for more modular CSS](https://thesassway.herokuapp.com/intermediate/avoid-nested-selectors-for-more-modular-css) lesen.

#### Ausnahmen

Für Anfänger ist es erlaubt und sogar empfohlen Pseudoklassen und Pseudoelemente innerhalb des Selektors zu verschachteln.

{% include snippets/syntax/33/index.html %}

Pseudoklassen sowie Pseudoelemente zu verschachteln macht nicht nur Sinn (da es mit nah verwandten Selektoren zu tun hat), es hilft auch alles einer Komponente an einem Platz zu halten.

Es ist ebenfalls absolut in Ordnung, Komponentenbezogene Statusklassen wie `.is-active` innerhalb des Selektors der Komponenten anzuordnen, einfach um es ordentlich zu halten.

{% include snippets/syntax/34/index.html %}

Zu guter Letzt, wenn ein Element gestaltet werden muss weil es innerhalb eines weiteren Elements angeordnet ist, ist es ebenso in Ordnung diese zu verschachteln um alles was diese Komponente betrifft am selben Platz zu haben.

{% include snippets/syntax/35/index.html %}

Wie mit allem, ist dieser spezifische Fall irgendwie irrelevant, denn wichtig ist Konsistenz. Wenn du dich also absolut okay mit Verschachtelung von Selektoren fühlst, dann mach es so. Versicher dich nur das auch dein ganzes Team damit einverstanden ist.
