
## Mixins

Mixins gehören zu den meist genutzten Features in der gesamten Sass-Sprache. Sie sind aus gutem Grund der Schlüssel zur Wiederverwendbarkeit und DRY-Komponenten: Mixins erlauben es dem Autor durch sein gesamtes Stylesheet hinweg Styles wiederzuverwenden, ohne auf nicht-semantische Klassen wie `.float-left` zurückzufallen.

Sie können komplette CSS-Regeln beinhalten, und so gut wie alles was sonst noch in einem Sass-Dokument erlaubt ist. Sogar Parameter, genauso wie Funktionen, sind möglich. Die Möglichkeiten hierbei sind unendlich.

Dennoch habe ich das Gefühl, vor dem Missbrauch von Mixins warnen zu müssen. Denn erneut ist das Schlüsselwort hierbei *Einfachheit*. Es mag verlockend sein, extrem mächtige Mixins mit massiver Logik zu bauen. Man nennt es Over-Engineering, und die meisten Entwickler leiden darunter. Überdenke nicht zu viel und halt es vor allem einfach. Wenn ein Mixin länger als 20 Zeilen wird, solltest du es lieber in kleinere Teile aufteilen oder komplett überdenken.

### Grundlagen

Davon abgesehen sind Mixins extrem hilfreich und du solltest ein paar verwenden. Die Faustformel hierbei ist, wenn dir auffällt das eine bestimmte Gruppe von CSS Werten immer zusammen auftritt (also nicht zufällig), dann kannst du ein Mixin draus machen. Der [Mikro-Clearfix Hack von Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) zum Beispiel, verdient es (ohne Argumente) in einem Mixin zu sein.

{% include snippets/mixins/01/index.html %}

Ein weiteres Beispiel ist ein Mixin welches die Maße `width` und `height` für ein Element gleichzeitig definiert. Es macht den Code nicht nur schlanker zum schreiben, sondern auch einfacher zu lesen.

{% include snippets/mixins/02/index.html %}

Für weitere komplexe Beispiele von Mixing, werf einen Blick auf [dieses Mixin um CSS Dreiecke zu generieren]((https://www.sitepoint.com/sass-mixin-css-triangles/), [dieses Mixin für lange Schatten](https://www.sitepoint.com/ultimate-long-shadow-sass-mixin/) oder um [CSS Verläufe für alte Browser zu polyfillen](https://www.sitepoint.com/building-linear-gradient-mixin-sass/).

### Parameterlose Mixins

Manchmal werden Mixins nur dazu benutzt, um zu verhindern dass man eine Gruppe von Deklarationen immer und immer wieder wiederholt. Dennoch brauchen sie keine Parameter oder haben sensible Standardwerte welche nicht notwendigerweise einen Parameter benötigen.

In solchen Fällen können wir beim Aufruf ohne Probleme die Klammern weglassen. Das `@include` Keyword (oder `+` Zeichen in der Intended-Syntax) verhält sich bereits als ein Indikator dafür dass die Zeile ein Mixinaufruf ist; es werden keine extra Klammern benötigt.

{% include snippets/mixins/08/index.html %}

### Parameterliste

Wenn du es mit einer unbekannten Anzahl von Parametern in einem Mixin zu tun hast, solltest du lieber `arglist` anstatt einer Liste verwenden. Stell dir `arglist` als den 8. versteckten und undokumentierten Datentyp mit der `...` Signatur in Sass vor, welcher unbedingt genutzt werden sollte, sobald du eine willkürliche Anzahl von Parametern in deinem Mixin oder Funktion hast.

{% include snippets/mixins/03/index.html %}

Wenn du also ein Mixin erstellst welches eine handvoll Parameter (3 oder mehr)  akzeptiert, überlege dir zweimal bevor du sie als Liste oder Map zusammenfügst weil du denkst es wäre einfacher als jeden Parameter nacheinander.

Sass ist sogar ziemlich Clever bei Mixin- und Funktionsdeklarationen. So sehr dass du selbst eine Liste oder Map als `arglist` in ein Mixin oder eine Funktion übergeben kannst, welche dann als Serie von Parametern aufgefasst wird.

{% include snippets/mixins/04/index.html %}

Für weitere Informationen ob es besser ist mehrere Argumente, eine Liste oder eine Arguementenliste zu werdenen, [hat SitePoint einen netten Artikel zu dem Thema](https://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/).

### Mixins und Vendor-Prefixe

Es mag verlockend sein, eigene Mixins zu schreiben die sich drum kümmern nicht oder nur teilweise unterstützte CSS Werte mit Vendor-Prefixen zu versehen. Doch genau das wollen wir nicht. Erstens, wenn du [Autoprefixer](https://github.com/postcss/autoprefixer) verwenden kannst, tu es. Es wird Sass-Code von deinem Projekt entfernen, immer up-to-date sein und eine wesentlich bessere Arbeit als du, beim hinzufügen von Prefixen, leisten.

Unglücklicherweise ist Autoprefixer nicht für jeden eine Option. Wenn du entweder [Bourbon](https://bourbon.io/) oder [Compass](http://compass-style.org/) benutzt, weißt du vielleicht schon das beide eine gute Auswahl von Mixins bereitstellen um dir die Arbeit mit Vendor-Prefixen abzunehmen. Nutz diese.

Falls du weder Autoprefixer, Bourbon noch Compass benutzen kannst, dann, aber auch nur dann, kannst du deine eigenen Mixins schreiben um CSS Werte mit Prefixe zu versehen. Aber. Erstell dir keine Mixins die jede Eigenschaft einzeln ausgeben.

{% include snippets/mixins/05/index.html %}

Mach es auf eine clevere Art und Weise.

{% include snippets/mixins/06/index.html %}

Das Mixin zu verwenden sollte ziemlich unkompliziert sein:

{% include snippets/mixins/07/index.html %}

Bitte merk dir dass das eine wirklich schlechte Umsetzung ist. Zum Beispiel kann es nicht mit komplexen Polyfills, wie für Flexbox nötig, umgehen. In dem Fall ist Autoprefixer die bessere Wahl.
