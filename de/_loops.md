
# Loops

Da Sass komplexe Datenstrukturen wie [Listen](#listen) und [Maps](#maps) anbietet, ist es keine Überraschung das es Autoren ebenfalls die Möglichkeit gibt über diese zu iterieren.

Allerdings mögen Loops sonst eher komplexe Logik andeuten welche wahrscheinlich nicht zu Sass gehört. Bevor du einen Loop benutzt, vergewissere dich dass es Sinn macht und auch ein Problem löst.

## Each

Der `@each`-Loop ist definitiv der meist genutzte aller von Sass zur Verfügung gestellten Loops. Es bietet eine saubere API um über eine Liste oder Map zu iterieren.

{% include snippet.html path="loops/01" file="index" %}

Wenn du über eine Map iterierst, benutze immer `$key` und `$value` als Variablennamen um konsistent zu bleiben.

{% include snippet.html path="loops/02" file="index" %}

Halte dich außerdem für eine bessere Lesbarkeit an folgende Richtlinien:

* Immer eine neue Zeile vor `@each`;
* Immer eine neue Zeile nach den schließenden Klammern (`}`), außer die nächste Zeile ist ebenfalls eine schließende Klammer (`}`).

## For

Der `@for`-Loop ist in Kombination mit der CSS Pseudoklasse `:nth-*` hilfreich. Außer in diesem Fall, solltest du eher einen `@each`-Loop verwenden wenn du über etwas iterieren *musst*.

{% include snippet.html path="loops/03" file="index" %}

Als Variablennamen solltest du immer `$i` verwenden. Dadurch hälst du dich an bekannte Konventionen und solange du keinen wirklichen guten Grund hast, nutze immer das `through`-Keyword anstatt dem `to`-Keyword. Viele Entwickler wissen nicht einmal das Sass diese Variationen anbietet, deshalb kann es zu Verwirrungen kommen.

Halte dich außerdem für eine bessere Lesbarkeit an folgende Richtlinien:

* Immer eine neue Zeile vor `@for`;
* Immer eine neue Zeile nach den schließenden Klammern (`}`), außer die nächste Zeile ist ebenfalls eine schließende Klammer (`}`).

## While

Der `@while`-Loop hat absolut keinen Anwendungsfall in einem richtigem Sass Projekt, besonders da es keinen Weg gibt den Loop von Innen zu unterbrechen. **Auf keinen Fall verwenden**.
