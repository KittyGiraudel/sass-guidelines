
## Responsive Webdesign und Breakpoints

Ich denke nicht das wir groß über Responsive Webdesign sprechen müssen, wo es mittlerweile überall zu finden ist. Dennoch fragst du dich bestimmt, *warum gibt es eine RWD Sektion in einem Sass Styleguide*? Eigentlich gibt es ein paar Dinge die getan werden können um die Benutzung von Breakpoints einfach zu machen, deshalb dachte ich es wäre garkeine schlechte Idee sie hier aufzulisten.

### Breakpoints benennen

Ich denke ich kann mit Sicherheit sagen dass Media Queries nicht auf ein bestimmtes Endgerät ausgerichtet sein sollten. Zum Beispiel ist es definitiv eine schlechte Idee, zu versuchen speziell iPads oder Blackberry Smartphones zu erreichen. Media Queries sollten sich um Bildschirmgrößen kümmern, solange ein neuer Media Query oder Designbreak übernimmt.

Aus demselben Grund sollten Breakpoints nicht nach einem Endgerät, sondern allgemeiner benannt werden. Gerade da einige Smartphones mittlerweile größer als ein Tablet sind, manche Tablets größer als ein kleiner Desktopmonitor, und so weiter...

{% include snippets/rwd/01/index.html %}

An diesem Punkt wird [jede Namenskonvention](https://css-tricks.com/naming-media-queries/), die klar macht dass ein Design nicht auf einen bestimmten Gerätetyp zugeschnitten ist, den Zweck erfüllen. Solange sie die Größenordnung erraten lässt.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>Das vorige Beispiel verwendet verschachtelte Maps um Breakpoints zu definieren, wie auch immer, das hängt ganz davon ab was für eine Art von Breakpointmanager du verwendest. Du könntest für eine bessere Flexibilität genauso gut Strings (z.B. <code>'(min-width: 800px)'</code>) anstatt Maps verwenden.</p>
</div>

### Breakpoint-Manager

Sobald du deine Breakpoints so benannt hast wie du möchtest, musst du einen Weg finden sie in deinen Media Queries anzuwenden. Es gibt eine Menge Wege, doch ich muss sagen das ich ein großer Fan von Breakpoint-Maps mit einer Getter-Funktion bin. Es ist einfach und effizient.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Das ist natürlich ein ziemlich einfacher Breakpoint-Manager. Falls du einen etwas toleranteren brauchst, kann ich dir nur empfehlen das Rad nicht neu zu erfinden und dir <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> oder <a href="https://github.com/eduardoboucas/include-media">include-media</a> anzuschauen.</p>
  <p>Falls du mehr über Media-Queries in Sass erfahren möchtest, haben <a href="https://www.sitepoint.com/managing-responsive-breakpoints-sass/">SitePoint</a> und <a href="https://css-tricks.com/approaches-media-queries-sass/">CSS-Tricks</a> gute Artikel dazu.</p>
</div>

### Media Queries verwenden

Noch garnicht lange her, gab es eine ziemlich hitzige Diskussion darüber wo man Media Queries deklarieren soll: gehören sie innerhalb eines Selektors (wie Sass es möglich macht) oder strikt getrennt? Ich muss sagen dass ich ein leidenschaftlicher Verfechter des *Media-Queries-in-Selektor* Systems bin, da ich denke dass es gut mit der Idee von *Komponenten* einher geht.

{% include snippets/rwd/04/index.html %}

Führt zu folgenden CSS:

{% include snippets/rwd/05/index.html %}

Du hast vielleicht schon gehört dass diese Konvention duplizierte Media Queries im CSS generiert. Das ist auf jedenfall richtig. Dennoch, es wurde getestet und das Ergebnis ist dass es keinen Unterschied macht sobald Gzip (oder ähnliches) seine Arbeit leistet:

> … wir haben den Test gemacht ob es Konsequenzen bei der Performance gibt, wenn Media Queries kombiniert oder zerstreut werden und sind zu dem Ergebnis gekommen dass der Unterschied, wenn auch hässlich, im schlimmsten Fall nur minimal und im besten Fall nicht existent ist.<br>
> &mdash; Sam Richards, bezüglich Breakpoint

Falls du also wirklich besorgt um duplizierte Media Queries bist, kannst du immer noch [ein Tool](https://github.com/aaronjensen/sass-media_query_combiner) zum zusammenfügen verwenden. Dennoch hab ich das Gefühl, ich muss dich vor möglichen Nebeneffekten wie verschobenes CSS warnen. Denn auch die Reihenfolge in CSS ist wichtig.
