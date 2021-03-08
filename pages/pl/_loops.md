
## Pętle

Ponieważ Sass daje możliwość korzystania z kompleksowych struktur danych, takich jak [listy](#listy) i [mapy](#mapy), nie jest niespodzianką że Sass zapewnia także dostęp do iteracji wewnątrz nich.

Obecność pętli zakłada zazwyczaj stosunkowo skomplikowane rozwiązania, które w arkuszach Sassa znaleźć się raczej nie powinny. Zanim zostanie podjęta decyzja o użyciu pętli należy się zastanowić, czy aby na pewno rozwiąże ona jakiś problem.

### Each

Pętla `@each` jest zdecydowanie najczęściej używaną z trzech form pętli dostarczanych przez Sassa. Zapewnia ona czyste API do iteracji wewnątrz listy czy mapy.

{% include snippets/loops/01/index.html %}

Iterując wewnątrz mapy, należy używać `$key` i `$value` jako nazw zmiennych celem wymuszenia spójności.

{% include snippets/loops/02/index.html %}

Należy się także upewnić, aby respektować poniższe zasady dla lepszej czytelności kodu:

* Pustą linia przed `@each`,
* Pustą linia po nawiasie zamykającym (`}`), chyba że następna linia zawiera taki właśnie nawias.

### For

Pętle `@for` mogą wydawać się użyteczne w połączeniu z pseudo-klasą `:nth-*` w CSSie. Z wyjątkiem tych sytuacji, zaleca się preferowanie pętli `@each` jeśli naprawdę *trzeba* iterować wewnątrz czegoś.

{% include snippets/loops/03/index.html %}

Używajmy `$i` jako nazwy zmiennej by trzymać się ustalonej konwencji i, chyba że jest ku temu jakiś naprawdę ważny powód, nigdy nie używajmy słowa `to`. Należy zawsze korzystać z `through`. Wielu deweloperów nawet nie zdaje sobie sprawy z tego, że Sass daje taką możliwość.

Pamiętajmy także o następujących zasadach:

* Nowa linia przed `@each`,
* Pusta linia po nawiasie zamykającym (`}`), chyba że następna linia zawiera taki właśnie nawias.

### While

Pętle `@while` nie mają absolutnie żadnego uzasadnienia, by z nich korzystać w projektach Sassa. Zwłaszcza skoro nie ma możliwości przerwania pętli z jej środka. **Nie polecam**.
