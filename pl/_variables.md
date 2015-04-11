
# Zmienne

Zmienne należą do istoty każdego języka programowania. Pozwalają nam na wielokrotne użycie określonych wartości bez potrzeby ich kopiowania. Przede wszystkim jednak, umożliwiają nam one aktualizowanie tych wartości w bardzo łatwy sposób.

Można jednak powiedzieć, że CSS jest niczym innym jak jednym wielkim kotłem pełnym wielu różności. W przeciwieństwie do innych języków, CSS nie zna koncepcji zasięgu widoczności (scope). Możliwość powstania konfliktu nazw musimy mieć więc stale na uwadze, jeśli dodajemy nowe zmienne.

Moja rada jest następujące: twórzmy zmienne tylko wtedy, kiedy ich istnienie ma sens. Nie róbmy tego pochopnie bo to nam w niczym nie pomoże. Nowa zmienna powinna być tworzona kiedy spełnione są następujące warunki:

* określona wartość powtarza się conajmniej dwa razy,
* określona wartość będzie w przyszłości aktualizowana, co najmniej raz,
* wszystkie wystąpienia danej wartości są powiązane ze zmienną (nie przez przypadek).

Zasadniczo nie ma powodu aby deklarować zmienną która nigdy nie będzie aktualizowana albo taką, która będzie użyta tylko w jednym miejscu.






## Zasięg (scope)

Zasięg widoczności (scope) zmiennych w Sassie zmienił się w trakcie jego historii. Do niedawna, zmienne deklarowane w ramach zestawów reguł, czy też innych zakresów, standardowo traktowane były jako zmienne lokalne. Co ciekawe jednak, w przypadku gdy istniała już globalna zmienna o tej samej nazwie, mogła ona zostać nadpisana przez tą przypisaną lokalnie. Od czasu wersji 3.4, Sass już właściwie radzi sobie z koncepcją zasięgów i zamiast tego tworzy teraz nową, lokalną zmienną.

Dokumentacja traktuje także o *przysłanianiu globalnych zmiennych (variable shadowing)*. Deklarując zmienną o lokalnym zasięgu, która z kolei już istnieje w zasięgu globalnym, ta lokalna *przysłania* tą globalną. Mówiąc wprost, nadpisuje ją na potrzeby lokalnego zasięgu (scope’u).

Poniższy przykład tłumaczy koncepcję *przysłaniania zmiennych*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Zainicjuj globalną zmienną na poziomie głównym.
$variable: 'initial value';

// Utwórz mixin, który nadpisuje globalną zmienną.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Utwórz lokalną zmienną, która przysłania tą globalną.
  $variable: 'local value';

  // Użyj mixinu: zastąpi on globalną zmienną.
  @include global-variable-overriding;

  // Wydrukuj wartość zmiennej.
  // Będzie to ta **lokalna**, jako że przysłoniła tą globalną.
  content: $variable;
}

// Wydrukuj zmienną w innym selektorze, który jej nie przysłoni.
// Będzie to ta **globalna**, jak oczekiwano.
.other-local-scope::before {
  content: $variable;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Zainicjuj globalną zmienną na poziomie głównym.
$variable: 'initial value'

// Utwórz mixin, który nadpisuje globalną zmienną.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
  // Utwórz lokalną zmienną, która przysłania tą globalną.
  $variable: 'local value'

  // Użyj mixinu: zastąpi on globalną zmienną.
  +global-variable-overriding

  // Wydrukuj wartość zmiennej.
  // Będzie to ta **lokalna**, jako że przysłoniła tą globalną.
  content: $variable

// Wydrukuj zmienną w innym selektorze, który jej nie przysłoni.
// Będzie to ta **globalna**, jak oczekiwano.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>






## Flaga `!default`

Budując bibliotekę, framework, system gridów albo jakikolwiek inny kod Sassa, który ma być rozpowszechniany i używany przez innych deweloperów, wszystkie zmienne konfigurujące powinny być zadeklarowane z flagą `!default`, dzięki czemu będą one mogły być później nadpisane.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$baseline: 1em !default;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$baseline: 1em !default
{% endhighlight %}
  </div>
</div>

Dzięki temu deweloper może zdefiniować własną zmienną `$baseline` *przed* importowaniem Twojej biblioteki bez obawy o to, że jego zmienna ulegnie zmianie.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Zmienna dewelopera
$baseline: 2em;

// `$baseline` deklarowana przez Twoją bibliotekę
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Zmienna dewelopera
$baseline: 2em

// `$baseline` deklarowana przez Twoją bibliotekę
@import your-library

// $baseline == 2em
{% endhighlight %}
  </div>
</div>






## Flaga `!global`

Flaga `!global` powinna być użyta jedynie wtedy, gdy zmienna z lokalnego zasięgu ma nadpisać zmienną globalną. Deklarując zmienną na głównym poziomie, flaga `!global` powinna zostać pominięta.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$baseline: 2em;

// Źle
$baseline: 2em !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$baseline: 2em

// Źle
$baseline: 2em !global
{% endhighlight %}
  </div>
</div>






## Wiele zmiennych lub map

Używanie map zamiast wielu odrębnych zmiennych ma swoje zalety. Pozwala to przede wszystkim na korzystanie z pętli, co nie jest możliwe w przypadku zmiennych.

Kolejnym plusem tworzenia map jest możliwość konstruowania małych funkcji wydobywających, dających nam przyjazne w obsłudze API. Na przykład, rozważ następujący kod:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mapa z-indeksów, zbiera wszystkie warstwy Z aplikacji
/// @access private
/// @type Map
/// @prop {String} key - Nazwa warstwy
/// @prop {Number} value - Wartość Z przypisana do klucza
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Wydobądź wartość z-index z nazwy warstwy
/// @access public
/// @param {String} $layer - Nazwa warstwy
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mapa z-indeksów, zbiera wszystkie warstwy Z aplikacji
/// @access private
/// @type Map
/// @prop {String} key - Nazwa warstwy
/// @prop {Number} value - Wartość Z przypisana do klucza
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Wydobądź wartość z-index z nazwy warstwy
/// @access public
/// @param {String} $layer - Nazwa warstwy
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
