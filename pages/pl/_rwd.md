
## Responsive Web Design i breakpointy

Nie wydaje mi się, by zagadnienie Responsive Web Design wymagało wprowadzenia. Zwłaszcza teraz, gdy jest ono obecne dosłownie wszędzie. Można jednak pokusić się o pytanie – *dlaczego przewodnik dla stylu Sassa zawiera sekcję poświęconą RWD?* Tak naprawdę to jest kilka rzeczy, które można zrobić aby pracowało się z breakpointami przyjemniej, dlatego też postanowiłem poruszyć ten temat tutaj.

### Nazywanie breakpointów

Wydaje mi się, że można spokojnie powiedzieć, że media queries nie powinny być podporządkowane konkretnym urządzeniom. Dla przykładu, celowanie w iPady czy telefony Blackberry jest niewątpliwie złym pomysłem. Media queries powinny zajmować się pewnym zakresem rozmiarów ekranów, do czasu kiedy design ulega załamaniu i następna media query zaczyna obowiązywać.

Z tych samych powodów, breakpointy nie powinny być nazywane w nawiązaniu do konkretnych urządzeń, lecz bardziej ogólnie. Zwłaszcza teraz, gdy telefony stają się większe niż niektóre tablety, niektóre zaś tablety większe niż komputery o małych ekranach, i tak dalej…

{% include snippets/rwd/01/index.html %}

Każda konwencja nazwowa, jaką w tym miejscu przyjmiemy, będzie dobra o ile tylko będzie przejrzysta i da w wystarczającym stopniu do zrozumienia, że nie jest ona związana konkretnymi urządzeniami.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>Poprzednie przykłady korzystają z zagnieżdżonych map do definiowania breakpointów, niemniej jednak w dużej mierze zależy to od konkretnego menadżera breakpointów, jaki jest w danej sytuacji wykorzystywany. Możesz również zdecydować się na korzystanie z ciągów znaków (strings) zamiast map dla lepszej elastyczności (np. <code>'(min-width: 800px)'</code>).</p>
</div>

**Dalsze informacje:**

* [Naming Media Queries](https://css-tricks.com/naming-media-queries/)

### Menadżer breakpointów

W momencie gdy breakpointy są już nazwane, potrzeba sposobu by ich faktycznie użyć w media queries. Jest wiele możliwości by to zrobić, jednak muszę przyznać że jestem wielkim fanem funkcji wydobywających breakpointy z map.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Oczywiście, jest to dosyć uproszczone podejście do zarządzania breakpointami. Jeśli potrzebne jest rozwiązanie bardziej rozbudowane, zalecam nie odkrywać Ameryki na nowo lecz sprawdzić to, co już istnieje, na przykład <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> czy <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>

**Dalsze informacje:**

* [Managing Responsive Breakpoints in Sass](https://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](https://css-tricks.com/approaches-media-queries-sass/)

### Używanie media queries

Nie tak dawno temu, w społeczności pojawiła się dosyć burzliwa dyskusja na temat tego gdzie powinno się deklarować media queries: czy powinny one się znajdować w ramach bloków selektorów (na co Sass pozwala), czy raczej winny one być odseparowane. Muszę przyznać, że jestem zwolennikiem poglądu by *media queries znajdowały się w ramach selektorów*, bowiem współgra on z ideą *komponentów*.

{% include snippets/rwd/04/index.html %}

Co prowadzi do następującego CSSu:

{% include snippets/rwd/05/index.html %}

Możesz usłyszeć opinie, że taka konwencja prowadzi do duplikowania media queries w wynikowym CSSie. Jest to niewątpliwie prawdą. Należy jednak zaznaczyć, że przeprowadzono w tej kwestii testy, które wykazały że nie ma to żadnego znaczenia, w momencie gdy Gzip (lub inna metoda kompresji) został użyty na serwerze:

> … rozstrzygając zagadnienie łączenia bądź rozbijania Media Queries w wielu miejscach i konsekwencji, jakie oba rozwiązania niosą dla kwestii wydajności, doszliśmy do wniosku, że różnica jest conajmniej minimalna, a w zasadzie nieistniejąca.<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), odnośnie [Breakpoint](http://breakpoint-sass.com/)

Jeśli są jednak obawy co do duplikowania media queries, istnieją takie narzędzia do ich scalania, jak [ten gem](https://github.com/aaronjensen/sass-media_query_combiner). Muszę w tym momencie jednak ostrzec przed możliwymi skutkami ubocznymi przenoszenia z miejsca na miejsce kodu CSS. Należy wszak pamiętać, że w tym wypadku kolejność źródłowa ma kluczowe znaczenie.

**Dalsze informacje:**

* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
