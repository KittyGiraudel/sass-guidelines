
## Too Long; Didn't read

Diese Guidelines sind ziemlich lang, und manchmal ist es gut sie zusammengefasst in einer kürzeren Version zu haben. Weiter unten ist diese Zusammenfassung.

### Grundprinzipien

* Einen Styleguide zu haben bedeutet **Konsistenz**. Falls du mit gewissen Regeln von Sass Guidelines nicht übereinstimmst, ist das kein Problem solange du konsistent damit bleibst.
* Sass sollte so einfach wie möglich gehalten werden. Vermeide es unnötig komplexe Systeme zu bauen, solange es nicht absolut notwendig ist.
* Vergiss nicht das *KISS* (Keep It Simple, Stupid) manchmal besser ist als *DRY* (Don't Repeat Yourself).

### Syntax & Formatierung

* Eine Einrückung wird mit zwei (2) Spaces gemacht, keine Tabs.
* Zeilen sollten, so weit wie möglich, kürzer als 80 Zeichen sein. Du kannst sie auch in mehrere Zeilen aufteilen wenn notwendig.
* CSS sollte ordentlich geschrieben sein, möglichst den [CSS Guidelines](https://cssguidelin.es) von Harry Roberts folgend.
* Leerzeichen sind umsonst, benutze sie um Einheiten, Regeln und Deklarationen zu trennen. Zögere nicht leere Zeilen zu verwenden, es kann nie schaden.

### Strings

* Die `@charset` Regel zu Anfang eines Stylesheets zu deklarieren wird empfohlen.
* Solange nicht als CSS-Bezeichner verwendet, sollten Strings immer in einfachen Anführungszeichen geschrieben werden. URLs sollten auch in Anführungszeichen gesetzt werden.

### Zahlen

* Sass unterscheidet nicht zwischen Nummern, Integer oder Gleitkommazahlen, deshalb sollten angehängte Nullen (0) weggelassen werden. Wie auch immer, führende Nullen (0) helfen der Lesbarkeit und sollten hinzugefügt werden.
* Eine Länge von Null (0) sollte keine Einheit haben.
* Einheitenmanipulation sollte als arithmetische Operation durchdacht werden, nicht als String Operation.
* Um die Lesbarkeit zu verbessern, sollten Top-Level Berechnungen in Klammern geschrieben werden. Komplexe, mathematische Berechnungen sollten eventuell in kleinere Teile aufgeteilt werden.
* Magische Zahlen sind schlechter Programmierstil und sollten unter allen Umständen vermieden werden. Falls Zweifel bestehen, füge einen ausführlichen Kommentar zu deinem Wert hinzu.

### Farben

* Farben sollten wenn möglich in HSL, danach RGB und danach Hexadezimal (in Kleinbuchstaben und gekürzt) ausgedrückt werden. Farbkeywords sollten vermieden werden.
* Ziehe `mix(..)` `darken(..)` und `lighten(..)` vor, wenn eine Farbe verdunkelt oder erhellt werden soll.

### Listen

* Listen sollten mit Komma getrennt werden, solange sie nicht als direktes Mapping zu mit leerzeichen getrennten CSS-Werten verwendet.
* Klammern sollten auch als Verbesserung der Lesbarkeit gesehen werden.
* Einzeilige Listen sollten kein angehängtes Komma haben, mehrzeilige Listen schon.

### Maps

* Maps mit mehr als einem Wert sollten auf mehreren Zeilen aufgeteilt werden.
* Um der Wartbarkeit zu helfen, sollte das letzte Paar einer Map ein angehängtes Komma haben.
* Map Keys die Strings sind, sollten wie jeder andere Strings angeführt werden.

### Anordnung der Deklaration

* Die Art Deklarationen anzuordnen (alphabetisch, nach Typ, etc.) ist prinzipiell egal solange es konsistent bleibt.

### Verschachtelung von Selektoren

* Vermeide Selektorverschachtelung wenn es nicht gebraucht wird (was meistens der Fall ist).
* Benutze Selektorverschachtelung für Pseudo-Klassen und Pseudo-Elemente.
* Media Queries können ebenfalls im jeweiligen Selektor verschachtelt werden.

### Namenskonventionen

* Es ist am besten sich an eine CSS-Namenskonvention zu halten, die komplett in Kleinbuchstaben geschrieben und mit Bindestrich getrennt sind.

### Kommentieren

* CSS ist eine knifflige Sprache; deshalb halte dich nicht zurück sehr ausführliche Kommentare über Dinge die Zweifelhaft aussehen (oder sind) zu schreiben.
* Für Variablen, Funktionen, Mixins und Platzhalter führe eine globale API ein. Verwende SassDoc Kommentare.

### Variablen

* Verwende den `!default` Flag für Variablen die Teil einer öffentlichen API sind un sicher geändert werden können.
* Verwende nicht den `!global` Flag auf Root-Level da es in Zukunft möglicherweise ein Verstoß gegen die Sass Syntax sein könnte.

### Erweitern

* Bleib dabei Platzhalter zu erweitern, keine bereits existierenden CSS-Selektoren.
* Erweiter einen Platzhalter so wenig wie möglich um Seiteneffekte zu vermeiden.
