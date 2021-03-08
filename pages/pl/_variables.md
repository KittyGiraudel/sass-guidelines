
## Zmienne

Zmienne należą do istoty każdego języka programowania. Pozwalają nam na wielokrotne użycie określonych wartości bez potrzeby ich kopiowania. Przede wszystkim jednak, umożliwiają nam one aktualizowanie tych wartości w bardzo łatwy sposób.

Można jednak powiedzieć, że CSS jest niczym innym jak jednym wielkim kotłem pełnym wielu różności. W przeciwieństwie do innych języków, CSS nie zna koncepcji zasięgu widoczności (scope). Możliwość powstania konfliktu nazw musimy mieć więc stale na uwadze, jeśli dodajemy nowe zmienne.

Moja rada jest następujące: twórzmy zmienne tylko wtedy, kiedy ich istnienie ma sens. Nie róbmy tego pochopnie bo to nam w niczym nie pomoże. Nowa zmienna powinna być tworzona kiedy spełnione są następujące warunki:

* określona wartość powtarza się conajmniej dwa razy,
* określona wartość będzie w przyszłości aktualizowana, co najmniej raz,
* wszystkie wystąpienia danej wartości są powiązane ze zmienną (nie przez przypadek).

Zasadniczo nie ma powodu aby deklarować zmienną która nigdy nie będzie aktualizowana albo taką, która będzie użyta tylko w jednym miejscu.

### Zasięg (scope)

Zasięg widoczności (scope) zmiennych w Sassie zmienił się w trakcie jego historii. Do niedawna, zmienne deklarowane w ramach zestawów reguł, czy też innych zakresów, standardowo traktowane były jako zmienne lokalne. Co ciekawe jednak, w przypadku gdy istniała już globalna zmienna o tej samej nazwie, mogła ona zostać nadpisana przez tą przypisaną lokalnie. Od czasu wersji 3.4, Sass już właściwie radzi sobie z koncepcją zasięgów i zamiast tego tworzy teraz nową, lokalną zmienną.

Dokumentacja traktuje także o *przysłanianiu zmiennych (variable shadowing)*. Deklarując zmienną o lokalnym zasięgu, która z kolei już istnieje w zasięgu globalnym, ta lokalna *przysłania* tą globalną. Mówiąc wprost, nadpisuje ją na potrzeby lokalnego zasięgu (scope’u).

Poniższy przykład tłumaczy koncepcję *przysłaniania zmiennych*.

{% include snippets/variables/01/index.html %}

### Flaga `!default`

Budując bibliotekę, framework, system gridów albo jakikolwiek inny kod Sassa, który ma być rozpowszechniany i używany przez innych deweloperów, wszystkie zmienne konfigurujące powinny być deklarowane z flagą `!default`, dzięki czemu będą one mogły być później nadpisane.

{% include snippets/variables/02/index.html %}

Dzięki temu deweloper może zdefiniować własną zmienną `$baseline` *przed* importowaniem danej biblioteki bez obawy o to, że jego zmienna ulegnie zmianie.

{% include snippets/variables/03/index.html %}

### Flaga `!global`

Flaga `!global` powinna być użyta jedynie wtedy, gdy zmienna z lokalnego zasięgu ma nadpisać zmienną globalną. Deklarując zmienną na głównym poziomie, flaga `!global` powinna zostać pominięta.

{% include snippets/variables/04/index.html %}

### Wiele zmiennych lub map

Używanie map zamiast wielu odrębnych zmiennych ma swoje zalety. Pozwala to przede wszystkim na korzystanie z pętli, co nie jest możliwe w przypadku zmiennych.

Kolejnym plusem tworzenia map jest możliwość konstruowania małych funkcji wydobywających, dających nam przyjazne w obsłudze API. Na przykład, rozważmy następujący kod:

{% include snippets/variables/05/index.html %}
