
## Konwencje nazw

W tej sekcji nie zajmiemy się konwencjami na nazywanie elementów składni CSSa, które to mają za zadanie pomóc w łatwości utrzymania i skalowania kodu; nie tylko decyzja w tej kwestii należy do autora kodu, ale nie jest to też coś, co należy do zakresu merytorycznego tego przewodnika. Zalecam tym samym zapoznanie się z [CSS Guidelines](https://cssguidelin.es/#naming-conventions).

Jest jednak w Sassie kilka rzeczy posługujących się nazwami i ważne jest, by nazywać je w sposób, dzięki któremu kod będzie spójny i czytelny:

* zmienne;
* funkcje;
* mixiny.

Placeholdery w Sassie zostały celowo tutaj ominięte bowiem traktować je należy jak zwykłe selektory CSSa, dotyczą ich więc zasady związane z nazewnictwem klas.

W odniesieniu natomiast do zmiennych, funkcji i mixinów, utrzymujemy konwencję znaną z *CSSa*: **małe litery, myślniki jako separatory**, a przede wszystkim – nazwy muszą nieść ze sobą znaczenie.

{% include snippets/naming/01/index.html %}

**Dalsze informacje:**

* [CSS Guidelines’ Naming Conventions](https://cssguidelin.es/#naming-conventions)

### Stałe

Każdy deweloperem pracujący z frameworkami, czy też zajmujący się określonymi bibliotekami, często w pracy wykorzystuje zmienne, których z zasady nie należy zmieniać, niezależnie od sytuacji – a więc ze stałymi. Niestety (albo stety?), Sass nie zapewnia takiej funkcjonalności, dlatego też musimy się ograniczyć do korzystania określonego nazewnictwa, by wywołać taki efekt.

Jak w przypadku wielu innych języków programowania, zalecam korzystanie z nazw opartych o wielkie litery, rozdzielane znakami podkreślenia, aby oznaczyć stałe. Nie tylko jest to już przyjętą konwencją, ale także wyraźnie kontrastuje ze zmiennymi pisanymi małymi literami, rozdzielanymi myślnikami.

{% include snippets/naming/02/index.html %}

**Dalsze informacje:**

* [Dealing With Constants in Sass](https://www.sitepoint.com/dealing-constants-sass/)

### Przestrzenie nazw

Jeśli zamierzamy rozpowszechniać swój kod pisany w Sassie, na przykład jako bibliotekę, framework, grid system czy cokolwiek innego, powinienno się rozważyć ograniczenie przestrzeni wszystkich swoich zmiennych, funkcji, mixinów i placeholderów. Ograniczy to wówczas możliwość wystąpienia konfliktu z kodem innego pochodzenia.

Na przykład, pracując nad projektem *Sassowski Jednorożec*, który z założenia ma być wykorzystywany przez deweloperów na całym świecie (kto by nie chciał z czegoś tak nazwanego korzystać?), warto się zastanowić się czy nie było by dobrze używać prefiksu `sj-` dla wszelkich nazw. Wydaje się, że będzie to na tyle specyficzne, że zapobiegnie wszelkim kolizjom nazwowym a jednocześnie też na tyle krótkie, że nie będzie sprawiało problemów przy pisaniu kodu.

{% include snippets/naming/03/index.html %}

<div class="note">
  <p>Warto zaznaczyć, że automatyczne ograniczanie przestrzeni nazw jest jednym ze składników nadchodzących zmian w funkcji <code>@import</code> w wersji 4.0 Sassa. Jak już odpowiednie zmiany wejdą w życie, ręczne ograniczanie przestrzeni stanie się coraz to mniej użyteczne, a w końcu stanie się nawet problematyczne.</p>
</div>

**Dalsze informacje:**

* [Please Respect the Global CSS Namespace](https://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
