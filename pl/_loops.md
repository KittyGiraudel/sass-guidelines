
# Pętle

Ponieważ Sass daje możliwość korzystania z kompleksowych struktur danych, takich jak [listy](#listy) and [mapy](#mapy), nie jest niespodzianką że Sass zapewnia także dostęp do iteracji wewnątrz tych struktur.

Obecność pętli zakłada zazwyczaj stosunkowo skomplikowane rozwiązania, które w arkuszach Sassa znaleźć się raczej nie powinny. Zanim użyjesz pętli zastanów się, czy aby na pewno rozwiąże ona jakiś problem.






## Each

Pętla `@each` jest zdecydowanie najczęściej używaną z trzech form pętli dostarczanych przez Sassa. Zapewnia ona czyste API do iteracji wewnątrz listy czy mapy.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $theme in $themes {
  .section-#{$theme} {
    background-color: map-get($colors, $theme);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $theme in $themes
  .section-#{$theme}
    background-color: map-get($colors, $theme)
{% endhighlight %}
  </div>
</div>

Iterując wewnątrz mapy, zawsze używaj `$key` i `$value` jako nazw zmiennych by wymusić spójność.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $key, $value in $map
  .section-#{$key}
    background-color: $value
{% endhighlight %}
  </div>
</div>

Upewnij się także, by respektować poniższe zasady dla lepszej czytelności kodu:

* Zostawiaj pustą linię przed `@each`,
* Zostawiaj pustą linię po nawiasie zamykającym (`}`), chyba że następna linia zawiera taki właśnie nawias.






## For

Pętle `@for` mogą wydawać się użyteczne w połączeniu z pseudo-klasą `:nth-*` w CSSie. Z wyjątkiem tych sytuacji, zaleca się byś preferował pętle `@each` jeśli naprawdę *musisz* iterować wewnątrz czegoś.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@for $i from 1 through 10
  .foo:nth-of-type(#{$i})
    border-color: hsl($i * 36, 50%, 50%)
{% endhighlight %}
  </div>
</div>

Zawsze używaj `$i` jako nazwy zmiennej by trzymać się ustalonej konwencji i, chyba że masz ku temu jakiś naprawdę ważny powód, nigdy nie używaj słowa `to`. Korzystaj zawsze z `through`. Wielu deweloperów nawet nie zdaje sobie sprawy z tego, że Sass daje taką możliwość.

Pamiętaj także o następujących zasadach:

* Zawsze umieszczaj nową linię przed `@each`,
* Zostawiaj pustą linię po nawiasie zamykającym (`}`), chyba że następna linia zawiera taki właśnie nawias.






## While

Pętle `@while` nie mają absolutnie żadnego uzasadnienia, by z nich korzystać w projektach Sassa. Zwłaszcza skoro nie ma możliwości przerwania pętli z jej środka. **Nie używaj**.
