
## Ostrzeżenia i błędy

Jeśli miałbym wybrać jedną z funkcji Sassa, która jest najczęściej pomijana przez deweloperów, jest to niewątpliwie możliwość dynamicznego wysyłania ostrzeżeń i błędów. Co może być dla niektórych niespodzianką, Sass zawiera trzy własne dyrektywy do wydruku treści w przeznaczonych do tego systemach (CLI, aplikacja do kompilowania,…):

* `@debug`;
* `@warn`;
* `@error`.

Odłóżmy `@debug` na bok, bowiem stworzony on został z myślą o debugowaniu SassScriptu, który obecnie nie jest w naszym kręgu zainteresowania. Pozostały nam więc `@warn` i `@error`, które są zauważalnie podobne, z jednym tylko wyjątkiem - jedna z nich zatrzymuje kompilator, druga zaś nie. Mam nadzieję, że już w tym momencie staje się to oczywistym, która jak działa.

Warto także zaznaczyć, że w typowym projekcie Sassa, ostrzeżenia i błędy mogą być zjawiskiem dosyć częstym. Każdy mixin czy funkcja wymagająca określonego argumentu może zgłosić błąd jeśli coś źle pójdzie, albo przynajmniej wyświetlić ostrzeżenie.

**Dalsze informacje:**

* [An Introduction To Error Handling](https://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](https://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/KittyGiraudel/SassyLogger)

### Ostrzeżenia

Weźmy za przykład tą funkcję z projektu [Sass-MQ](https://github.com/sass-mq/sass-mq), która konwertuje wartości z `px` do `em`:

{% include snippets/errors/01/index.html %}

Jeśli podana wartość okaże się nie mieć jednostki, funkcja z góry zakłada, że chodzi tu o piksele. W tym miejscu, takie założenie może być ryzykowne i z tego też powodu użytkownik powinien być ostrzeżony, że oprogramowanie zrobiło coś, co może być uznane za nieoczekiwane.

### Błędy

Błędy, w odróżnieniu do ostrzeżeń, zatrzymują kompilator i zapobiegają jego dalszemu działaniu. W dużym skrócie, zatrzymują proces kompilacji i wyświetlają wiadomość w strumieniu wyjścia (output), a także w stack trace, co pomaga w debugowaniu. Z tego też powodu błędu powinny być wysyłane w sytuacji, gdy nie ma innej możliwości by program mógł działać dalej. Kiedy to jest tylko możliwe, należy próbować obejść ten problem i wyświetlać zamiast tego ostrzeżenie.

Dla przykładu, powiedzmy że budowana jest funkcja wydobywająca wartość z danej mapy. Można wówczas wysyłać błąd za każdym razem, gdy żądany klucz nie istnieje.

{% include snippets/errors/02/index.html %}
