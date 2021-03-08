
## Too long; Didn’t read

Przewodnik ten jest dosyć długi i czasami dobrze jest mieć dostęp do pewnego rodzaju podsumowania. Poniżej znajduje się właśnie takie podsumowanie.

### Kluczowe zasady

* Korzystanie z przewodnika stylu ma na celu przede wszystkim wymuszenie konsekwentności. Można się nie zgadzać z niektórymi wytycznymi Sass Guidelines, aby tylko być w tym konsekwentnym. [↩](#czemu-suy-ten-przewodnik)
* Kod w Sassie powinien być pisany tak prosto, jak to jest tylko możliwe. W miarę możliwości, należy unikać budowania nadmiernie skomplikowanych systemów. [↩](#kluczowe-reguy)
* Należy pamiętać, że czasem zasada *KISS* (Keep It Simple, Stupid) jest lepsza niż *DRY* (Don’t Repeat Yourself). [↩](#kluczowe-reguy)

### Składnia i formatowanie

* Indentacja powinna się składać z dwóch (2) spacji, bez tabulatora. [↩](#skadnia-i-formatowanie)
* Linie powinny być, jak to jest tylko możliwe, szerokie na 80 znaków. Można je dowolnie dzielić na wiele linii, w razie potrzeby. [↩](#skadnia-i-formatowanie)
* CSS powinien być pisany, w miarę możliwości, zgodnie z regułami [CSS Guidelines](https://cssguidelin.es) autorstwa Harry'ego Robertsa. [↩](#skadnia-i-formatowanie)
* Znaki niedrukowalne (whitespaces) powinny być używane do rozdzielania pojedynczych elementów, reguł i deklaracji. Nie obawiaj się zostawić pustej linii, to nic nie kosztuje. [↩](#skadnia-i-formatowanie)

#### Ciągi

* Deklarowanie dyrektywy `@charset` na górze arkusza stylów jest wysoce zalecane. [↩](#encoding)
* Z wyjątkiem użycia ich jako identyfikatorów w CSSie, ciągi powinny być umieszczane pomiędzy znakami pojedynczych cudzysłowów. URLe również powinny być w cudzysłowach. [↩](#cigi-jako-wartoci-w-cssie)

#### Liczby

* Sass nie rozróżnia liczb całkowitych, czy zmiennoprzecinkowych i z tego też powodu zera końcowe powinny być pomijane. Z drugiej jednak strony, poprzedzające zera poprawiają czytelność kodu i powinny być dodawane. [↩](#zera)
* Długość zerowa nie powinna mieć jednostki. [↩](#jednostki)
* Manipulacja jednostkami powinna być rozumiana jako działanie arytmetyczne, nie operacja na ciągach znaków. [↩](#jednostki)
* Aby poprawić czytelność kodu, powinno się umieszczać obliczenia najwyższego poziomu w nawiasach. Ponadto, kompleksowe działania matematyczne mogą być dzelone na mniejsze części. [↩](#obliczenia)
* Liczby magiczne drastycznie pogarszają czytelność kodu i powinno się ich unikać. W razie wątpliwości, należy dokładnie wytłumaczyć (w komentarzu) daną wartość. [↩](#liczby-magiczne)

#### Barwy

* Barwy powinny być wyrażane w formacie HSL jeśli jest to tylko możliwe, potem RGB, a w ostateczności jako określenie szesnastkowe (małymi literami i skrócone). Należy unikać słów kluczowych reprezentujących barwy. [↩](#formaty-barw)
* Użycie `mix(..)` zamiast `darken(..)` i `lighten(..)` powinno być preferowane w przypadkach, gdy potrzebne jest przyciemnienie i rozjaśnienie barwy. [↩](#rozjanianie-i-przyciemnianie-barw)

#### Listy

* Za wyjątkiem używania ich do bezpośredniego mapowania wartości CSSa rozdzielonych spacją, listy powinny być rozdzielane przecinkami. [↩](#listy)
* Umieszczanie list wewnątrz nawiasów poprawia czytelność kodu. [↩](#listy)
* Końcowy przecinek powinien być stosowany tylko i wyłącznie w przypadku list zajmujących wiele linii. [↩](#listy)

#### Mapy

* Mapy składające się z więcej niż z jednej pary powinny być pisane na wielu liniach. [↩](#mapy)
* Celem poprawy łatwości utrzymania kodu, ostatnia para powinna być zakończona przecinkiem. [↩](#mapy)
* Klucze map, które są ciągami, powinny być umieszczane w cudzysłowach, tak jak każdy inny ciąg. [↩](#mapy)

#### Sortowanie deklaracji

* System użyty przy sortowaniu deklaracji (według porządku alfabetycznego, według typu, itd.) nie ma większego znaczenia. Powinien on być jednak stosowany konsekwentnie. [↩](#sortowanie-deklaracji)

#### Zagnieżdżanie selektorów

* Należy unikać zagnieżdżania selektorów jeśli nie jest to konieczne (a więc w większości przypadków). [↩](#zagniedanie-selektorw)
* Z zagnieżdżania selektorów warto korzystać przy pseudo-klasach i pseudo-elementach. [↩](#zagniedanie-selektorw)
* Media queries mogą również być zagnieżdżane wewnątrz selektorów, których dotyczą. [↩](#zagniedanie-selektorw)

### Konwencje nazw

* Zaleca się korzystanie z ogólnej konwencji nazw CSSa, która (z kilkoma wyjątkami) zakłada pisanie małą literą i rozdzielanie słów myślnikami. [↩](#konwencje-nazw)

### Komentarze

* CSS jest specyficznym językiem. Nie powinno się więc unikać pisania szczegółowych komentarzy dotyczących rzeczy, które zdają się być (albo są) niezrozumiałe. [↩](#komentarze)
* Dla zmiennych, funkcji, mixinów i placeholderów tworzących publiczne API, zaleca się korzystać z generatora dokumentacji SassDoc. [↩](#komentarze)

### Zmienne

* Nie należy używać flagi `!default` dla jakiejkolwiek zmiennej będącej elementem publicznego API, która może być bezpiecznie zmieniona. [↩](#zmienne)
* Nie należy używać flagi `!global` na głównym poziomie, jako że może ona być w przyszłości przyczyną niezgodności ze składnią Sassa. [↩](#zmienne)

### Extendy

* Należy rozwijać placeholdery, nie zaś selektory CSSa. [↩](#extendy)
* Należy rozwijać ten sam placeholder tak rzadko, jak jest to tylko możliwe, celem uniknięcia nieoczekiwanych efektów ubocznych. [↩](#extendy)
