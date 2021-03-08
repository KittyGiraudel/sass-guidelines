
## Too long; Didn’t read

Przewodnik ten jest dosyć długi i czasami dobrze jest mieć dostęp do pewnego rodzaju podsumowania. Poniżej znajduje się właśnie takie podsumowanie.

### Kluczowe zasady

* Korzystanie z przewodnika stylu ma na celu przede wszystkim wymuszenie konsekwentności. Można się nie zgadzać z niektórymi wytycznymi Sass Guidelines, aby tylko być w tym konsekwentnym. 
* Kod w Sassie powinien być pisany tak prosto, jak to jest tylko możliwe. W miarę możliwości, należy unikać budowania nadmiernie skomplikowanych systemów. 
* Należy pamiętać, że czasem zasada *KISS* (Keep It Simple, Stupid) jest lepsza niż *DRY* (Don’t Repeat Yourself). 

### Składnia i formatowanie

* Indentacja powinna się składać z dwóch (2) spacji, bez tabulatora. 
* Linie powinny być, jak to jest tylko możliwe, szerokie na 80 znaków. Można je dowolnie dzielić na wiele linii, w razie potrzeby. 
* CSS powinien być pisany, w miarę możliwości, zgodnie z regułami [CSS Guidelines](https://cssguidelin.es) autorstwa Harry'ego Robertsa. 
* Znaki niedrukowalne (whitespaces) powinny być używane do rozdzielania pojedynczych elementów, reguł i deklaracji. Nie obawiaj się zostawić pustej linii, to nic nie kosztuje. 

#### Ciągi

* Deklarowanie dyrektywy `@charset` na górze arkusza stylów jest wysoce zalecane. 
* Z wyjątkiem użycia ich jako identyfikatorów w CSSie, ciągi powinny być umieszczane pomiędzy znakami pojedynczych cudzysłowów. URLe również powinny być w cudzysłowach. 

#### Liczby

* Sass nie rozróżnia liczb całkowitych, czy zmiennoprzecinkowych i z tego też powodu zera końcowe powinny być pomijane. Z drugiej jednak strony, poprzedzające zera poprawiają czytelność kodu i powinny być dodawane. 
* Długość zerowa nie powinna mieć jednostki. 
* Manipulacja jednostkami powinna być rozumiana jako działanie arytmetyczne, nie operacja na ciągach znaków. 
* Aby poprawić czytelność kodu, powinno się umieszczać obliczenia najwyższego poziomu w nawiasach. Ponadto, kompleksowe działania matematyczne mogą być dzelone na mniejsze części. 
* Liczby magiczne drastycznie pogarszają czytelność kodu i powinno się ich unikać. W razie wątpliwości, należy dokładnie wytłumaczyć (w komentarzu) daną wartość. 

#### Barwy

* Barwy powinny być wyrażane w formacie HSL jeśli jest to tylko możliwe, potem RGB, a w ostateczności jako określenie szesnastkowe (małymi literami i skrócone). Należy unikać słów kluczowych reprezentujących barwy. 
* Użycie `mix(..)` zamiast `darken(..)` i `lighten(..)` powinno być preferowane w przypadkach, gdy potrzebne jest przyciemnienie i rozjaśnienie barwy. 

#### Listy

* Za wyjątkiem używania ich do bezpośredniego mapowania wartości CSSa rozdzielonych spacją, listy powinny być rozdzielane przecinkami. 
* Umieszczanie list wewnątrz nawiasów poprawia czytelność kodu. 
* Końcowy przecinek powinien być stosowany tylko i wyłącznie w przypadku list zajmujących wiele linii. 

#### Mapy

* Mapy składające się z więcej niż z jednej pary powinny być pisane na wielu liniach. 
* Celem poprawy łatwości utrzymania kodu, ostatnia para powinna być zakończona przecinkiem. 
* Klucze map, które są ciągami, powinny być umieszczane w cudzysłowach, tak jak każdy inny ciąg. 

#### Sortowanie deklaracji

* System użyty przy sortowaniu deklaracji (według porządku alfabetycznego, według typu, itd.) nie ma większego znaczenia. Powinien on być jednak stosowany konsekwentnie. 

#### Zagnieżdżanie selektorów

* Należy unikać zagnieżdżania selektorów jeśli nie jest to konieczne (a więc w większości przypadków). 
* Z zagnieżdżania selektorów warto korzystać przy pseudo-klasach i pseudo-elementach. 
* Media queries mogą również być zagnieżdżane wewnątrz selektorów, których dotyczą. 

### Konwencje nazw

* Zaleca się korzystanie z ogólnej konwencji nazw CSSa, która (z kilkoma wyjątkami) zakłada pisanie małą literą i rozdzielanie słów myślnikami. 

### Komentarze

* CSS jest specyficznym językiem. Nie powinno się więc unikać pisania szczegółowych komentarzy dotyczących rzeczy, które zdają się być (albo są) niezrozumiałe. 
* Dla zmiennych, funkcji, mixinów i placeholderów tworzących publiczne API, zaleca się korzystać z generatora dokumentacji SassDoc. 

### Zmienne

* Nie należy używać flagi `!default` dla jakiejkolwiek zmiennej będącej elementem publicznego API, która może być bezpiecznie zmieniona. 
* Nie należy używać flagi `!global` na głównym poziomie, jako że może ona być w przyszłości przyczyną niezgodności ze składnią Sassa. 

### Extendy

* Należy rozwijać placeholdery, nie zaś selektory CSSa. 
* Należy rozwijać ten sam placeholder tak rzadko, jak jest to tylko możliwe, celem uniknięcia nieoczekiwanych efektów ubocznych. 
