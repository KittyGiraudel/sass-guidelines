
## Extend

Die `@extend` Regel ist ein mächtiges Feature welches häufig missverstanden wird. Generell ermöglicht es Sass zu sagen, dass ein Element A exakt gleich wie Selektor B gestyled werden soll. Deshalb kann es ein wertvoller Verbündeter bei modularem CSS sein.

Dennoch, der wahre Grund von `@extend` ist es die Beziehung (Beschränkungen) innerhalb erweiterter Selektoren zwischen Regelwerken zu pflegen. Was genau bedeutet das?

* Selektoren haben *Beschränkungen* (z.B. `.bar ` in `.foo > .bar` muss ein Elternteil `.foo` haben);
* Diese Beschränkungen werden zum erweiterten Selektor *übertragen* (z.B. `.bar { @extend .bar; }` wird `.foo > .bar, .foo > .baz` erzeugen);
* Die Deklarationen des erweiterten Selektors werden mit dem erweiternden Selektor geteilt.

Dem vorausgesetzt ist es ziemlich einfach zu sehen, wie erweiternde Selektoren mit nachsichtigen Beschränkungen zu Selektorexplosion führen können. Wenn `.baz .qux` `.foo .bar` erweitert, kann der erzeugte Selektor `.foo .baz .qux` oder `.baz .foo .qux` sein, da `.foo` und `.baz` allgemeine Vorfahren dessen sind.

Versuch immer solche Beziehungen durch Selektorenplatzhalter zu definieren, und nicht durch richtige Selektoren. Dadurch bekommst du die Freiheit jede Namenskonvention die du für deine Selektoren hast zu verwenden (und ändern). Da Beziehungen auch nur einmal innerhalb des Platzhalters definiert werden, ist die Möglichkeit ungewollte Selektoren zu erzeugen außerdem sehr gering.

Um Styles zu vererben, benutze `@exend` nur wenn der erweiternde `.class` oder `%placeholder` Selektor _ähnlich_ zu dem zu erweiterndem Selektor ist. Zum Beispiel `.error` ist ähnlich zu `.warning`, also kann `.error` `@extend .warning`.

{% include snippets/extend/01/index.html %}

Es gibt viele Szenarien wo Selektoren zu erweitern hilfreich und wertvoll ist. Trotzdem behalte immer folgende Regeln im Kopf, damit du behutsam `@extend` benutzen kannst:

* Benutze `@extend` hauptsächlich innerhalb `%placeholders`, nicht bei wirklichen Selektoren.
* Wenn du eine Klasse erweiterst, dann erweitere nur eine Klasse mit einer anderen, niemals [komplexe Selektoren](https://www.w3.org/TR/selectors4/#syntax).
* Erweiter einen `%placeholder` so wenig wie möglich.
* Vermeide es allgemeine Vorfahren eines Selektors (z.B. `.foo .bar`) oder allgemeine Geschwister eines Selektor (z.B. `.foo ~ .bar`) zu erweitern. Genau das erzeugt eine Explosion von Selektoren.

<div class="note">
  <p>Es wird oft gesagt dass <code>@extend</code> bei der Dateigröße mithilft, da es Selektoren kombiniert anstatt Werte zu duplizieren. Das ist zwar korrekt, dennoch ist der Unterschied geringfügig sobald <a href="https://de.wikipedia.org/wiki/Gzip">Gzip</a> seine arbeit getan hat.</p>
  <p>Wenn du von daher nicht auf Gzip (oder etwas ähnliches) zurückgreifen kannst, mag zu <code>@extend</code> zu wechseln wertvoll sein. Besonders wenn die Größe deines Stylesheets ein Performanceproblem ist.</p>
</div>

### Extend und Media Queries

Du solltest Selektoren nur innerhalb desselben Media Scopes (`@media` Regel) erweitern. Stell dir ein Media Query als weitere Beschränkung vor.

{% include snippets/extend/02/index.html %}

Meinungen scheinen über die Vor- und Nachteile von `@extend` scheinen extrem weit auseinander zu gehen. Bis zu dem Punkt wo viele Entwickler, mich eingeschlossen, dagegen werben es zu verwenden. Mehr dazu kannst du in folgenden Artikeln lesen:

* [What Nobody Told you About Sass Extend](https://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](https://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

Um abzuschließen, rate Ich, `@extend` nur zu benutzen um die Beziehung innerhalb von Selektoren zu pflegen. Wenn zwei Selektoren charakteristisch gleich sind, ist es der perfekte Anwendungsfall für `@extend`. Wenn sie jedoch ohne Beziehung zueinander stehen, aber gleiche Regeln teilen dann passt ein `@mixin` besser. Mehr dazu wie man sich zwischen diesen beiden entscheidet findest du in dieser [Ausarbeitung](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/).

<div class="note">
  <p>Danke an <a href="https://twitter.com/davidkpiano">David Khourshid</a> für die Hilfe und Expertise in diesem Bereich.</p>
</div>
