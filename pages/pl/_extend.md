
## Extendy

Dyrektywa `@extend` należy do potężnych funkcjonalności Sassa, lecz jest ona często źle rozumiana. Co do zasady, dyrektywa ta pozwala na przekazanie Sassowi, żeby zaaplikował określone style selektorowi A tak, jakby pasował on także do selektora B. Nie ulega wątpliwości, że może to być pomocne przy pisaniu modułowego CSSa.

Niemniej jednak, prawdziwym przeznaczeniem dyrektywy `@extend` jest utrzymywanie powiązania (ograniczeń) pomiędzy regułami, w ramach rozwijanych selektorów. Co to konkretnie oznacza?

- Selektory mają *ograniczenia* (np. `.bar` w `.foo > .bar` musi mieć rodzica `.foo`);
- Ograniczenia te są *przenoszone* do rozwiniętego selektora (np. rezultatem `.baz { @extend .bar; }` będzie `.foo > .bar, .foo > .baz`);
- Deklaracje rozwiniętego selektora będą dzielone z rozwijającym selektorem.

Biorąc powyższe pod uwagę można zauważyć, że rozwijanie selektorów luźnymi ograniczeniami może powodować znaczne zwiększenie rozmiarów takich selektorów. Jeśli `.baz .qux` rozwija `.foo .bar`, to selektorem wynikowym może być `.foo .baz .qux` lub `.baz .foo .qux`, jako że zarówno `.foo` i `.baz` są ogólnymi wstępnymi. Mogą być zatem rodzicami, dziadkami, itd.

Zawsze staraj się definiować powiązania za pomocą placeholderów, a nie faktycznych selektorów. Przyniesie to większą swobodę używania (i zmieniania) konwencji nazwowych dla Twoich selektorów, a jako że związki są definiowane tylko raz wewnątrz placeholderów, ryzyko utworzenia niepożądanego selektora jest znacznie niższe.

Dla dziedziczenia stylów używaj `@extend` wyłącznie wtedy, gdy rozwijający selektor `.class` czy `%placeholder` jest _tego rodzaju_, co rozwijany selektor. Na przykład, `.error` jest podobny do `.warning`, więc `.error` może wykorzystywać `@extend .warning`.

{% include snippets/extend/01/index.html %}

Istnieje wiele sytuacji, w których rozwijanie selektorów może być pomocne i warte uwagi. Należy mieć jednak w pamięci poniższe zasady:

* Korzystanie z extendów przede wszystkim na `%placeholderach`, nie na faktycznych selektorach.
* Rozwijanie klas za pomocą innych klas, _nigdy_ [selektorem złożonym](https://www.w3.org/TR/selectors4/#syntax).
* Bezpośrednie rozwijanie `%placeholderów` tak rzadko, jak to jest tylko możliwe.
* Unikanie rozwijania selektora ogólnego zstępnego (np. `.foo .bar`), czy ogólnego rodzeństwa (np. `.foo ~ .bar`). To właśnie powoduje znaczne zwiększenie rozmiarów selektora.

<div class="note">
  <p>Często się mówi, że <code>@extend</code> pomaga w zmniejszaniu rozmiaru pliku, z racji tego że łączy selektory zamiast duplikować własności. To prawda, jednak różnica po zastosowaniu kompresji <a href="https://en.wikipedia.org/wiki/Gzip">Gzip</a> jest nieistotna.</p>
  <p>Jeśli jednak w danej sytuacji niemożliwe jest użycie kompresji Gzip (lub jej ekwiwalentu), korzystanie z dyrektywy <code>@extend</code> może być dobrym rozwiązaniem, zwłaszcza gdy rozmiar arkusza stylów jest problemem dla wydajności naszego projektu.</p>
</div>

### Extendy a media queries

Selektory należy rozwijać jedynie w ramach tego samego scope'u media (dyrektywy `@media`). Traktujmy tym samym media query jako kolejne ograniczenie dla extendów.

{% include snippets/extend/02/index.html %}

Podsumowując, zalecam wykorzystywanie dyrektywy `@extend` jedynie dla utrzymywania powiązań pomiędzy selektorami. Jeśli dwa selektory są w sposób charakterystyczny podobne do siebie, jest to idealny przykład dla wykorzystania `@extend`. Jeśli nie są one ze sobą szczególnie powiązane lecz jedynie dzielą pewne reguły, `@mixin` może być lepszym rozwiązaniem.

<div class="note">
  <p>Dzięki dla <a href="https://twitter.com/davidkpiano">Davida Khourshid</a> za jego pomoc w przygotowywaniu tej sekcji.</p>
</div>

**Dalsze informacje:**

* [What Nobody Told you About Sass Extend](https://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](https://www.sitepoint.com/avoid-sass-extend/)
* [Don’t Over Extend Yourself](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
* [Extending in Sass Without Mess](https://www.smashingmagazine.com/2015/05/04/extending-in-sass-without-mess/)
