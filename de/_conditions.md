
# Conditional Statements

Möglicherweise hast du bereits davon gehört, dass Sass Conditional Statements via `@if` und `@else` bereitstellt. Conditional Statements sollten eigentlich keinen Gebrauch in deinen Stylesheets finden, außer du hast ein Grund für komplexe Logik in deinem Code. Sie existieren hauptsächlich nur für Libraries und Frameworks.

Falls du Conditional Statemens doch einmal brauchst, beachte folgende Guidelines:

* Keine Klammern solange sie nicht erforderlich sind;
* Immer eine leere Zeile vor `@if`;
* Immer einen Zeilenumbruch nach der öffnenden Klammer (`{`);
* `@else` Statements auf dieselbe Zeile wie die vorherige, schließende Klammer (`}`);
* Immer eine leere Zeile nach den schließenden Klammern (`}`), außer wenn die nächste Zeile ebenfalls eine schließende Klammer (`}`) ist.

{% include snippet.html path="conditions/01" file="index" %}

Wenn du einen fälschlichen Werten testen willst, nutze lieber das `not` Keyword anstatt `false` oder `null`;

{% include snippet.html path="conditions/02" file="index" %}

Die Variable kommt immer auf die linke Seite eines Statements, und das (un)erwartete Ergebnis auf die rechte. Umgekehrte Conditional Statements sind oft schwieriger zu lesen, gerade von unerfahrenen Entwicklern.

{% include snippet.html path="conditions/03" file="index" %}

Wenn du Conditional Statements innerhalb einer Funktion verwendest, um unterschiedliche Ergebnisse basierend auf einer Bedingung wiederzugeben, stell sicher das die Funktion immer ein `@return` Statement außerhalb des Conditional-Blocks besitzt.

{% include snippet.html path="conditions/04" file="index" %}
