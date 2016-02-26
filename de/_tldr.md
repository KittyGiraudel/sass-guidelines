
# Too Long; Didn't read

{% include chapter-buttons.html %}

Diese Guidelines sind ziemlich lang, und manchmal ist es gut sie zusammengefasst in einer kürzeren Version zu haben. Weiter unten ist diese Zusammenfassung.

## Grundprinzipien

* Einen Styleguide zu haben bedeutet **Konsistenz**. Falls du mit gewissen Regeln von Sass Guidelines nicht übereinstimmst, ist das kein Problem solange du konsistent damit bleibst. [↩](#warum-ein-styleguide)
* Sass sollte so einfach wie möglich gehalten werden. Vermeide es unnötig komploexe Systeme zu bauen, solange es nicht absolut notwendig ist. [↩](#grundprinzipien)
* Vergiss nicht dass *KISS* (Keep It Simple, Stupid) manchmal besser ist als *DRY* (Don't Repeat Yourself). [↩](#grundprinzipien)

## Syntax & Formatierung

* Eine Einrückung wird mit zwei (2) Spaces gemacht, keine Tabs. [↩](#syntax--formatierung)
* Zeilen sollten, so weit wie möglich, kürzer als 80 Zeichen sein. Du kannst sie auch in mehrere Zeilen aufteilen wenn notwendig. [↩](#syntax--formatierung)
* CSS sollte ordentlich geschrieben sein, möglichst den [CSS Guidelines](http://cssguidelin.es) von Harry Roberts folgend. [↩](#syntax--formatierung)
* Leerzeichen sind umsonst, benutze sie um Einheiten, Regeln und Deklarationen zu trennen. Zögere nicht leere Zeilen zu verwenden, es kann nie schaden. [↩](#syntax--formatierung)

## Strings

* Die `@charset` Regel zu Anfang eines Stylesheets zu deklarieren wird empfohlen. [↩](#encoding)
* Solange nicht als CSS Bezeichner verwendet, sollten Strings immer in einfachen Anführungszeichen geschrieben werden. URLs sollten auch in Anführungszeichen gesetzt werden. [↩](#strings-als-css-werte)

## Zahlen

* Sass unterscheidet nicht zwischen Nummern, Integer oder Gleitkommazahlen, deshalb sollten angehängte Nullen (0) weggelassen werden. Wie auch immer, führende Nullen (0) helfen der Lesbarkeit und sollten hinzugefügt werden. [↩](#nullen)
* Eine Länge von Null (0) sollte keine Einheit haben. [↩](#einheiten)
* Einheitenmanipulation sollte als arithmetische Operation durchdacht werden, nicht als String Operation. [↩](#einheiten)
* Um die Lesbarkeit zu verbessern, sollten Top-Level Berechnungen in Klammern geschrieben werden. Komplexe, mathematische Berechnungen sollten eventuell in kleinere Teile aufgeteilt werden. [↩](#berechnungen)
* Magische Zahlen sind schlechter Programmierstil und sollten unter allen Umständen vermieden werden. Falls Zweifel bestehen, füge einen ausführlichen Kommentar zu deinem Wert hinzu. [↩](#magische-zahlen)

## Farben

* Farben sollten wenn möglich in HSL, danach RGB und danach Hexadezimal (in Kleinbuchstaben und gekürzt) ausgedrückt werden. Farbkeywords sollten vermieden werden. [↩](#farbformate)
* Ziehe `mix(..)` `darken(..)` und `lighten(..)` vor, wenn eine Farbe verdunkelt oder erhellt werden soll. [↩](#farben-aufhellen-und-verdunkeln)

## Listen

* Listen sollten mit Komma getrennt werden, solange sie nicht als direktes Mapping zu mit leerzeichen getrennten CSS Werten verwendet. [↩](#listen)
* Klammern sollte auch als verbesserung der Lesbarkeit gesehen werden. [↩](#listen)
* Einzeilige Listen sollten kein angehängtes Komma haben, mehrzeilige Listen schon. [↩](#listen)

## Maps

* Maps mit mehr als einem Wert sollten auf mehreren Zeilen geschrieben werden. [↩](#maps)
* Um der Wartbarkeit zu helfen, sollte das letzte Paar einer Map ein angehängtes Komma haben. [↩](#maps)
* Map Keys die Strings sind, sollten wie jeder andere Strings angeführt werden. [↩](#maps)

## Anordnung der Deklaration

* Die Art Deklarationen anzuordnen (alphabetisch, nach Typ, etc.) ist prinzipiell egal solange es konsistent bleibt. [↩](#anordnung-der-deklarationen)

## Verschachtelung von Selektoren

* Vermeide Selektorverschachtelung wenn es nicht gebraucht wird (was meistens der Fall ist). [↩](#verschachtelung-von-selektoren)
* Benutze Selektorverschachtelung für Pseudo-Klassen und Pseudo-Elemente. [↩](#verschachtelung-von-selektoren)
* Media Queries können ebenfalls im jeweiligen Selektor verschachtelt werden. [↩](#verschachtelung-von-selektoren)

## Namenskonventionen

* Es ist am besten sich an eine CSS Namenskonvention zu halten die komplett Kleinbuchstaben und mit Bindestrich getrennt sind. [↩](#namenskonventionen)

## Kommentieren

* CSS ist eine knifflige Sprache; deshalb halt dich nicht zurück sehr ausführliche Kommentare über Dinge die Zweifelhaft aussehen (oder sind) zu schreiben. [↩](#kommentieren)
* Für Variablen, Funktionen, Mixins und Platzhalter führe eine globale API ein. Verwende SassDoc Kommentare. [↩](#dokumentation)

## Variablen

* Verwende den `!default` Flag für Variablen die Teil einer öffentlichen API sind un sicher geändert werden können. [↩](#default-flag)
* Verwende nicht den `!global` Flag auf Root-Level da es in Zukunft möglicherweise ein Verstoß gegen die Sass Syntax sein könnte. [↩](#global-flag)

## Erweitern

* Bleib dabei Platzhalter zu erweitern, keine bereits existierenden CSS Selektoren. [↩](#extend)
* Erweiter einen Platzhalter so wenig wie möglich um Seiteneffekte zu vermeiden. [↩](#extend)
