
## Einleitung

### Warum ein Styleguide

Ein Styleguide ist nicht nur einfach ein schönes Dokument um darzustellen wie dein Code idealerweise aussehen sollte, sondern er ist essenziell für das Projekt, um zu beschreiben weshalb und wie Code geschrieben werden sollte. Zwar sieht es in kleinen Projekten etwas nach Overkill aus, zahlt sich am Ende aber in Sachen Skalierbarkeit, Wartbarkeit und einer sauberen Codebasis aus.

Deshalb gilt, je mehr Entwickler an einem Projekt arbeiten, desto wichtiger sind Guidelines. Und je größer das Projekt, desto notwendiger ist ein Styleguide.

[Harry Roberts](https://csswizardry.com) hat es in seinen [CSS Guidelines](https://cssguidelin.es/#the-importance-of-a-styleguide) bereits gut erklärt:

<blockquote>
  <p>Ein Code Styleguide (kein visueller) ist ein wertvolles Werkzeug für Teams die:</p>
  <ul>
    <li>ein Produkt über eine gewisse Zeit lang bauen und warten;</li>
    <li>Entwickler mit unterschiedlichen Fähigkeiten und Spezialisierungen haben;</li>
    <li>eine gewisse Anzahl von unterschiedlichen Entwicklern auf einem Produkt arbeiten haben;</li>
    <li>regelmäßig neue Mitarbeiter onboarden;</li>
    <li>mehrere Codebasen haben, indem Entwickler hin und herspringen;</li>
  </ul>
</blockquote>

### Disclaimer

Zu aller erst: **das ist kein CSS Styleguide**. Hier werden keine Namenskonventionen für CSS Klassen, Modulare Patterns oder die Frage der ID's im CSS diskutiert. Diese Guidelines fokussieren sich lediglich auf Sass spezifischen Inhalt.

Dazu ist dieser Styleguide mein eigener und von daher **stark meinungsbasiert**. Es ist eher eine Auswahl von Methodologien und Ratschlägen die ich über die Jahre verfeinert und weitergegeben habe. Es gibt mir ebenfalls die Möglichkeit auf interessante und aufschlussreiche Quellen zu verlinken. Also nicht die *weiteren Informationen* verpassen.

Natürlich ist das hier nicht der einzige Weg das Thema anzugehen und es mag auch garnicht auf dein Projekt passen. Deshalb fühl dich frei einfach die Inhalte die dir am besten passen zu übernehmen.

### Grundprinzipien

Am Ende des Tages, möchte ich lediglich dass du eine Sache für dich mitnimmst: dass [**Sass so einfach wie möglich gehalten werden sollte**](https://www.sitepoint.com/keep-sass-simple/).

Dank meiner dummen Experimente wie [Binäre Operatoren](https://github.com/KittyGiraudel/SassyBitwise), [Iteratoren und Generatoren](https://github.com/KittyGiraudel/SassyIteratorsGenerators) sowie [einem JSON Parser](https://github.com/KittyGiraudel/SassyJSON) in Sass, können wir gut sehen was Sass als Präprozessor alles drauf hat.

CSS ist eine einfache Sprache. Da Sass beabsichtigt CSS zu schreiben, sollte es niemals komplexer als normales CSS werden. Das [KISS Prinzip](https://de.wikipedia.org/wiki/KISS-Prinzip) (Keep it simple, stupid) ist in diesem Fall der Schlüssel, und hat unter gewissen Umständen sogar vorrang über [DRY](https://de.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself) (Don't repeat yourself).

Manchmal ist es besser sich etwas im Code zu wiederholen um es wartbar zu halten, anstatt ein schwerfälliges und unnötig kompliziertes System zu haben welches komplett unwartbar ist.

Um noch einmal [Harry Roberts](https://csswizardry.com) zu zitieren, **Pragmatimus geht vor Perfektion**. Ab einem gewissen Punkt wirst du dich wahrscheinlich selbst dabei erwischen wie du diese Regeln ignorierst. Wenn es Sinn macht und sich richtig anfühlt, dann tu es. Code ist ein Mittel zum Zweck, kein Ende.

### Erweiterung dieser Guidelines

Ein großer Teil dieses Styleguide ist stark meinungsbasiert. Ich lese und schreibe Sass nun seit einigen Jahren, bis zu dem Punkt wo ich eine Menge Prinzipien übers Schreiben von sauberen Stylesheets habe. Ich verstehe natürlich, dass es wohlmöglich einigen nicht zufrieden stellt weder passen wird. Und das ist absolut normal.

Dennoch glaube Ich dass dieser Styleguide dazu gemacht ist erweitert zu werden. Sass-Guidelines zu erweitern kann so einfach sein wie ein Dokument zu haben, indem erklärt wird das der folgende Code diesen Guidelines bis auf wenige Ausnahmen (in diesem Fall würden diese dann einfach unterhalb aufgeführt werden) folgt.

Ein Beispiel einer Erweiterung der Styleguide kann in dem [SassDoc Repository](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md) gefunden werden:

> Dies ist einer Erweiterung zu den [Node Styleguides](https://github.com/felixge/node-style-guide) von Felix Geisendörfer. Alles aus diesem Dokument überschreibt was in den Node Styleguides definiert sein könnte.
