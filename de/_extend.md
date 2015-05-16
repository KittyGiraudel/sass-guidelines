
# Extend

Die `@extend` Regel muss eine der Features sein welche Sass über die Jahre so berühmt gemacht hat. Nochmal zur Erinnerung, es macht es möglich Sass zu sagen das ein Element A exakt gleich wie Selektor B gestyled werden soll. Das kann natürlich ein wertvoller Verbündeter bei modularem CSS sein.

Dennoch habe ich das Gefühl ich muss dich vor dem Feature warnen. So clever es auch ist, `@extend` ist ein kompliziertes Konzept das wohlmöglich mehr Schaden als Nutzen bringt, gerade wenn es schlecht eingesetzt wird. Das Ding ist, wenn du du einen Selektor erweiterst, hast du ohne tiefen Einblick in die Codebasis zu haben wenig bis kaum die Möglichkeit folgende Fragen zu beantworten:

* wo wird mein aktueller Selektor hinzugefügt?
* werde ich wohlmöglich ungewollte Nebeneffekte erzeugen?
* wie groß wird das generierte CSS durch diese einzige Erweiterung sein?

Soviel du auch weißt, das Ergebnis kann von keinerlei Auswirkung bis zu desaströsen Nebeneffekten variieren. Deshalb ist mein erster Ratschlag `@extend` komplett zu umgehen. Es mag hart klingen, aber am Ende des Tages kann es dir viel Kopfschmerzen und Schwierigkeiten ersparen.

Abgesehen davon, kennst du die Sprichwörter:

> Sag niemals nie.<br>
> &mdash; offensichtlich, [nicht Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Es gibt Szenarien wo Selektoren zu erweitern hilfreich und wertvoll sein mag. Trotzdem behalte folgende Regeln in Erinnerung um dich selbst vor Ärger zu schützen:

* Benutze `@extend` innerhalb eines Moduls, nicht über verschiedene hinweg.
* Benutze `@extend` exklusiv in Platzhaltern, nicht in richtigen Selektor.
* Vergewisser dich dass der Platzhalter so wenig wie möglich im Stylesheet vertreten ist.

Wenn du `@extend` verwendest, lass mich dich daran erinnern dass es nicht gut mit `@media` Blöcken zusammenspielt. Wie du vielleicht weißt, Sass kann einen Selektor nicht in einen Media Query erweitern. Wenn du es tust, schlägt der Kompiler einfach fehl und teilt dir mit dass es nicht geht. Nicht gut. Besonders seit Media Queries alles sind was wir wissen.

{% include snippets/extend/01/index.html %}

> Du solltest @extend nicht auf einen Selektor außerhalb des @media anwenden.<br>
> Du solltest @extend immer nur innerhalb derselben Anordnung verwenden.

<div class="note">
  <p>Es wird oft gesagt <code>@extend</code> würde bei der Dateigröße helfen, da es Selektoren kombiniert anstatt dupliziert. Das ist zwar richtig, der Unterschied ist jedoch geringfügig sobald durch <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a> komprimiert wurde.</p>
  <p>Deshalb, wenn du Gzip (oder etwas vergleichbares) nicht benutzen kannst, ist es garnicht mal eine so schlechte Idee <code>@extend</code> zu verwenden, solange du weißt was du tust.</p>
</div>

Um abzuschließen, I rate dazu **`@extend` nicht zu verwenden**, außer unter spezifischen Umständen, aber würde nicht soweit gehen es zu verbieten.

###### Weitere Informationen

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
