
# Instrukcje warunkowe (conditionals)

Jak już prawdopodobnie wiesz, Sass zapewnia wsparcie dla instrukcji warunkowych poprzez dyrektywy `@if` i `@else`. O ile nie masz średnio lub bardzo skomplikowanych rozwiązań w swoim kodzie, nie ma potrzeby dla instrukcji warunkowych w Twoich arkuszach. W zasadzie to one głównie istnieją dla potrzeb bibliotek i frameworków.

W każdym razie, jeśli kiedykolwiek będziesz potrzebował z nich skorzystać, zrób to w zgodności z poniższymi zasadami:

* Bez nawiasów, chyba że są potrzebne,
* Jedna pusta linia przed `@if`,
* Kod po nawiasie otwierającym (`{`) na następnej linii,
* `@else` na tej samej linii, co nawias zamykający (`}`),
* Nowa pusta linia po ostatnim nawiasie zamykającym (`}`), chyba że następna linia zaczyna się od takiego nawiasu (`}`).

{% include snippets/conditions/01/index.html %}

Testując czy podana wartość jest fałszywa, zawsze używaj słowa `not` zamiast testowania wobec `false` czy `null`.

{% include snippets/conditions/02/index.html %}

Zawsze umieszczaj nazwę zmiennej po lewej stronie wyrażenia, a (nie)oczekiwany rezultat po prawej. Odwrócone instrukcje warunkowe są mniej zrozumiałe, szczególnie dla niedoświadczonych programistów.

{% include snippets/conditions/03/index.html %}

Używając instrukcji warunkowych w ramach funkcji by zwracały one różne rezultaty, w zależności od jakiegoś warunku, zawsze upewnij się by funkcja miała instrukcję `@return` poza jakimkolwiek blokiem warunkowym.

{% include snippets/conditions/04/index.html %}
