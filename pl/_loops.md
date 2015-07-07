
# Pętle

Ponieważ Sass daje możliwość korzystania z kompleksowych struktur danych, takich jak [listy](#listy) and [mapy](#mapy), nie jest niespodzianką że Sass zapewnia także dostęp do iteracji wewnątrz tych struktur.

Obecność pętli zakłada zazwyczaj stosunkowo skomplikowane rozwiązania, które w arkuszach Sassa znaleźć się raczej nie powinny. Zanim użyjesz pętli zastanów się, czy aby na pewno rozwiąże ona jakiś problem.

## Each

Pętla `@each` jest zdecydowanie najczęściej używaną z trzech form pętli dostarczanych przez Sassa. Zapewnia ona czyste API do iteracji wewnątrz listy czy mapy.

{% include snippets/loops/01/index.html %}

Iterując wewnątrz mapy, zawsze używaj `$key` i `$value` jako nazw zmiennych by wymusić spójność.

{% include snippets/loops/02/index.html %}

Upewnij się także, by respektować poniższe zasady dla lepszej czytelności kodu:

* Zostawiaj pustą linię przed `@each`,
* Zostawiaj pustą linię po nawiasie zamykającym (`}`), chyba że następna linia zawiera taki właśnie nawias.

## For

Pętle `@for` mogą wydawać się użyteczne w połączeniu z pseudo-klasą `:nth-*` w CSSie. Z wyjątkiem tych sytuacji, zaleca się byś preferował pętle `@each` jeśli naprawdę *musisz* iterować wewnątrz czegoś.

{% include snippets/loops/03/index.html %}

Zawsze używaj `$i` jako nazwy zmiennej by trzymać się ustalonej konwencji i, chyba że masz ku temu jakiś naprawdę ważny powód, nigdy nie używaj słowa `to`. Korzystaj zawsze z `through`. Wielu deweloperów nawet nie zdaje sobie sprawy z tego, że Sass daje taką możliwość.

Pamiętaj także o następujących zasadach:

* Zawsze umieszczaj nową linię przed `@each`,
* Zostawiaj pustą linię po nawiasie zamykającym (`}`), chyba że następna linia zawiera taki właśnie nawias.

## While

Pętle `@while` nie mają absolutnie żadnego uzasadnienia, by z nich korzystać w projektach Sassa. Zwłaszcza skoro nie ma możliwości przerwania pętli z jej środka. **Nie używaj**.
