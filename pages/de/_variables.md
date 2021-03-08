
## Variablen

Variablen sind die Essenz jeder Programmiersprache. Sie erlauben es Werte wiederzuverwenden ohne sie jedesmal erneut kopieren zu müssen. Der wichtigste Punkt ist, dass sie es wirklich einfach machen einen Wert zu aktualisieren. Kein manuelles durchsuchen mehr.

CSS jedoch ist lediglich eine große Kiste mit all unseren Schätzen. Anders als andere Sprachen, existiert in CSS kein echter Scope. Deshalb müssen wir durch das Risiko von Konflikten, aufpassen wenn Variablen hinzugefügt werden.

Von daher ist mein Ratschlag Variablen nur dann zu erzeugen, wenn es auch wirklich Sinn macht. Erstelle keine Variablen einfach weil du kannst; es wird dich nicht weiter bringen. Eine neue Variable sollte nur bei folgenden Kriterien erzeugt werden:

* der Wert wiederholt sich mindestens zweimal;
* der Wert wird vorrausichtlich mindestens einmal aktualisiert;
* alle Ereignisse des Werts befinden sich in der Variable und auch nicht durch Zufall.

Grundsätzlich macht es keinen Sinn eine Variable zu erstellen die niemals aktualisiert oder nur ein einziges Mal verwendet wird.

### Scoping

Der Scope von Variablen in Sass hat sich über die Jahre verändert. Bis vor kurzem waren Deklarationen innerhalb des Regelwerk und andere Scopes standardmäßig lokal. Wenn es jedoch eine globale Variable mit demselben Namen gab, hat die lokale Variable die globale überschrieben. Seit Version 3.4 allerdings, greift Sass das Konzept von Scopes korrekt und erzeugt stattdessen eine neue lokale Variable.

Sass' Dokumentation spricht von *Beschattung globaler Variablen*. Wenn eine Variable im inneren Scope (Selektor, Funktion, Mixin, …) deklariert, aber schon im globalen Scope existiert, dann sagt man dass die globale Variable *beschattet* wird. Grundsätzlich überscheibt es nur den lokalen Scope.

Folgendes Code-Snippet erklärt das Konzept der *Variablenbeschattung*:

{% include snippets/variables/01/index.html %}

### `!default` flag

Wenn eine Library, ein Framework, ein Gridsystem oder irgendwas anders in Sass verbreitet, und von externen Entwicklern benutzt wird, sollten alle Konfigurationsvariablen als `!default` markiert werden, sodass sie auch überschrieben werden können.

{% include snippets/variables/02/index.html %}

Dadurch ist es einem Entwicker möglich, eigene `$baseline` Variable *vor* dem importieren deiner Library zu defineren, ohne dass sie überschrieben wird.

{% include snippets/variables/03/index.html %}

### `!global` flag

Das `!global` Flag sollte nur benutzt werden wenn eine globale Variable vom lokalen Scope überschrieben wird. Wenn eine Variable auf dem Root-Level definiert wird, sollte das `!global` Flag weggelassen werden.

{% include snippets/variables/04/index.html %}

### Mehrere Variablen oder Maps

Es gibt Vorteile Maps anstatt mehreren eindeutigen Variablen zu verwenden. Der größte ist, die Fähigkeit über eine Map zu iterieren, was mit eindeutigen Variablen nicht möglich ist.

Ein weiterer Vorteil von Maps ist die Möglichkeit eine kleine Getter-Funktion zu schreiben, um eine freundlichere API bereitzustellen. Stell dir zum Beispiel folgenden Sass-Code vor:

{% include snippets/variables/05/index.html %}
