
## Warnungen und Fehler

Wenn es ein Feature gibt welches von Entwicklern oft übersehen wird, dann ist es die Fähigkeit dynamisch Warnungen und Fehler auszugeben. Tatsächlich kommt Sass mit drei eigenen Funktionen um Inhalt in dem Standardausgabesystem (CLI, kompilierte App, …) darzustellen.

* `@debug`;
* `@warn`;
* `@error`.

Lasst uns `@debug` mal zur Seite stellen, da es dazu vorgesehen ist SassScript zu debuggen, was nicht unser Punkt ist. Bleiben uns noch `@warn` und `@error`, welche prinzipiell identisch sind außer dass eines davon den Compiler stoppt und das andere nicht. Ich überlasse es dir zu schätzen, welches davon was tut.

Es gibt eine Menge Spielraum für Warnungen und Fehler in einem Sass Projekt. Grundsätzlich kann jedes Mixin oder Funktion, welche einen bestimmten Typ von Parameter akzeptiert, einen Fehler anzeigen sobald etwas schief geht oder eine Warnung wenn eine Vermutung angestellt wird.

### Warnungen

Nimm diese Funktion von [Sass-MQ](https://github.com/sass-mq/sass-mq), welche versucht einen `px`-Wert in `em` umzuwandeln, als Beispiel:

{% include snippets/errors/01/index.html %}

Wenn der Wert ohne Einheit ist, geht die Funktion davon aus das es als Pixel behandelt werden soll. An dieser Stelle ist eine Vermutung eventuell zu riskant, deshalb sollte der Entwickler davor gewarnt werden dass die Software etwas unerwartes ausgeben könnte.

### Fehler

Fehler, im Gegenteil zu Warnungen, hindern den Compiler dabei weiter zu machen. Grundsätzlich halten sie die Verarbeitung an und zeigen in der Ausgabe die Nachricht sowie den Stacktrace an, welcher gut fürs debuggen ist. Deshalb sollten Fehler immer nur dann angezeigt werden, wenn es für das Programm keinen Weg mehr gibt weiterzumachen. Wenn möglich, versuch um das Problem herum zu arbeiten und stattdessen eine Warnung anzuzeigen.

Lass uns als Beispiel annehmen dass du eine Getter-Funktion hast um Werte aus einer bestimmten Map zu erreichen. Du könntest einen Fehler anzeigen wenn der angeforderte Key in der Map nicht existiert.

{% include snippets/errors/02/index.html %}

Für weitere Informationen wie `@error` effizient zu verwenden ist, sollte [diese Einführung über Error-Handling](https://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996) weiterhelfen.
