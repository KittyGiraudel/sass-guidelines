
## Namenskonventionen

In dieser Sektion werden wir uns nicht den besten CSS Namenskonventionen für Wartbarkeit und Skalierbarkeit widmen; das gehört nicht zum Umfang eines Sass Styleguide und sollte generell dir überlassen sein. Ich würde die Konventionen von [CSS Guidelines](https://cssguidelin.es/#naming-conventions) empfehlen.

Es gibt ein paar Dinge die in Sass benannt werden können, und es ist wichtig diese auch gut zu benennen damit deine gesamte Codebasis konsistent und einfach zu lesen ist:

* Variablen;
* Funktionen;
* Mixins.

Sass' Platzhalter habe ich absichtlich ausgelassen, da sie als reguläre CSS Selektoren gesehen werden können und deshalb derselben Namenskonvention für Klassen folgen.

Bezüglich Variablen, Funktionen und Mixins werden wir uns an etwas sehr *CSS-mäßigen* richten: Kleinbuchstaben, getrennt durch Bindestrich und vor allem bedeutsam.

{% include snippets/naming/01/index.html %}

### Konstanten

Falls du ein Framework- oder Library-Entwickler sein solltest, magst du wahrscheinlich schon Erfahrung mit Variablen gemacht haben, die unter keinen Umständen aktualisiert werden dürfen: Konstanten. Unglücklicherweise (oder zum Glück?) bietet Sass keinen Weg um solche Instanzen zu defineren, deshalb müssen wir auf eine strikte Namenskonvention zurückfallen um klar zu machen was wir meinen.

Wie in vielen Sprachen, schlage ich vor Variablen komplett in Großbuchstaben und Snake Case zu schreiben, wenn sie Konstanten sein sollen. Es ist nicht nur eine sehr alte Konvention, sondern stellt auch einen guten Kontrast zu in Kleinbuchstaben und mit Bindestrich getrennten Variablen.

{% include snippets/naming/02/index.html %}

Wenn du wirklich mit der Idee von Konstanten in Sass herumspielen möchtest, solltest du [diesen Artikel](https://www.sitepoint.com/dealing-constants-sass/) lesen.

### Namespace

Falls du deinen Sass Code in Form einer Library, Framework, Gridsystem oder was auch immer verbreiten möchtest, solltest du überlegen all deine Variablen, Funktionen, Mixins und Platzhalter mit einem Namespace zu versehen damit sie nicht mit jemand anderem Code in Konflikt geraten.

Zum Beispiel, wenn du an einem *Sassy Unicorn* Projekt arbeitest, welches veröffentlicht werden soll, könntest du den Namespace `su-` benutzen. Er ist spezifisch genug um nicht mit anderen Namespaces in Konflikt zu geraten, und kurz genug um dir auf die Dauer beim schreiben nicht auf die Nerven zu gehen.

{% include snippets/naming/03/index.html %}

[Kaelig](https://kaelig.fr) hat [einen sehr aufschlussreichen Artikel über globale CSS Namespaces](https://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace) geschrieben, falls dich das Thema interessiert.

<div class="note">
  <p>Beachte das automatisches Namespacing ein Designziel für die zukünftige Umgestaltung von <code>@import</code> in Sass 4.0 ist. Je näher wir vor der Verwirklichung stehen, desto weniger von nutzen ist es manuell Namespaces zu vergeben; eventuell werden Libraries deren Namespace manuell gepflegt wurde, sogar schwieriger zu benutzen sein.</p>
</div>
