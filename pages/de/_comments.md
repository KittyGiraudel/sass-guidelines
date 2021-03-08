
## Kommentieren

CSS ist eine knifflige Sprache, voller Hacks und Seltsamkeiten. Deshalb sollte es viel kommentiert werden, besonders wenn du oder jemand anders die Absicht hat deinen Code nach 6 Monaten oder 1 Jahr nochmal zu lesen oder updaten. Lass dich oder jemand anderen niemals in die Position *Ich-hab-das-nicht-geschrieben-Oh-mein-Gott-warum* kommen.

So einfach CSS sein kann, es ist immer Raum für Kommentare. Diese könnten unter anderem erklären:

* die Struktur und/oder Rolle einer Datei;
* das Ziel eines Regelwerk;
* die Idee hinter einer magischen Zahl;
* der Grund für eine CSS Deklaration;
* die Reihenfolge von CSS Deklarationen;
* der Gedankenprozess dahinter wie etwas erreicht wurde.

Und wahrscheinlich habe ich noch eine Menge weiterer Gründe vergessen warum man kommentieren sollte. Kommentieren verbraucht nur sehr wenig Zeit wenn es sofort im Anschluss getan wird, deshalb tu es zur richtigen Zeit. Im nachhinein zurück in deinen Code zu gehen um Kommentare hinzuzufügen ist nicht nur absolut unrealistisch, sondern auch extrem nervig.

### Kommentare schreiben

Idealerweise, ist *jedes* CSS Regelwerk durch einen im C-Stil vorangestellten Kommentar, welcher erklärt was der jeweilige CSS Block soll, versehen. Der Kommentar beinhaltet ebenfalls eine nummerierte Liste an Erklärung zu bestimmten Teilen des Regelwerk. Zum Beispiel:

{% include snippets/comments/01/index.html %}

Grundsätzlich alles was auf dem ersten Blick nicht offensichtlich ist sollte kommentiert werden. Es gibt nicht zu viel Dokumentation. Vergiss nicht, dass es auch nicht so etwas wie *zuviele Kommentare* gibt. Also leg los und schreib Kommentare für alles was sich lohnt.

Wenn du einen Sass spezifischen Bereich kommentierst, benutze Sass Inline-Kommentare anstatt des C-Stil Block. Das macht die Kommentare unsichtbar im Output und selbst im erweiterten Modus bei der Entwicklung.

{% include snippets/comments/02/index.html %}

Beachte dass dieser Weg ebenfalls von den CSS Guidelines in der [Kommentier-Sektion](https://cssguidelin.es/#commenting) unterstützt ist.

### Dokumentation

Jede Variable, Funktion, Mixin und Platzhalter welches nicht vorgesehen ist innerhalb der Codebasis wiederverwendet zu werden, sollte via [SassDoc](http://sassdoc.com) als Teil der globalen API dokumentiert werden.

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Drei Schrägstriche (<code>/</code>) erforderlich.</p>
</div>

SassDoc hat zwei Hauptaufgaben:

* standarditisierte Kommentare in einem Kommentarbasiertem System, für alles was Teil der öffentlichen oder privaten API ist, zu erzwingen;
* es möglich zu machen eine HTML Version der API Dokumentation durch eines der SassDoc Endpunkte (CLI tool, Grunt, Gulp, Broccoli, Node...) zu generieren.

{% include images/sassdoc.html %}

Beispiel eines umfangreich dokumentiertem Mixin über SassDoc:

{% include snippets/comments/04/index.html %}

**Weitere Informationen:**

* [SassDoc: a Documentation Tool for Sass](https://www.sitepoint.com/sassdoc-documentation-tool-sass/)
