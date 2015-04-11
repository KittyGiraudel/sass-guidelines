
# Konwencje nazw

W tej sekcji nie zajmiemy się konwencjami na nazywanie elementów składni CSSa, które to mają za zadanie pomóc w łatwości utrzymania i skalowania kodu; nie tylko decyzja w tej kwestii należy do Ciebie, ale nie jest to też coś, co należy do zakresu merytorycznego tego przewodnika. Zalecam tym samym zapoznanie się z [CSS Guidelines](http://cssguidelin.es/#naming-conventions).

Jest jednak w Sassie kilka rzeczy posługujących się nazwami i ważne jest, by nazywać je w sposób, dzięki któremu Twój kod będzie spójny i czytelny:

* zmienne;
* funkcje;
* mixiny.

Selektory zastępcze w Sassie zostały celowo tutaj ominięte bowiem traktować je należy jak zwykłe selektory CSSa, dotyczą ich więc zasady związane z nazewnictwem klas.

W odniesieniu natomiast do zmiennych, funkcji i mixinów, utrzymujemy konwencję znaną z *CSSa*: **małe litery, myślniki jako separatory**, a przede wszystkim – nazwy muszą nieść ze sobą znaczenie.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) {
  // ...
}

@function opposite-direction($direction) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$vertical-rhythm-baseline: 1.5rem

=size($width, $height: $width)
  // ...

@function opposite-direction($direction)
  // ...
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [CSS Guidelines’ Naming Conventions](http://cssguidelin.es/#naming-conventions)






## Stałe

Jeśli jesteś deweloperem pracującym z frameworkami czy też zajmujesz się określonymi bibliotekami, prawdopodobnie często w pracy wykorzystujesz zmienne, których z zasady nie należy zmieniać, niezależnie od sytuacji – a więc ze stałymi. Niestety (albo stety?), Sass nie zapewnia takiej funkcjonalności, dlatego też musimy się ograniczyć do korzystania określonego nazewnictwa, by wywołać taki efekt.

Jak w przypadku wielu innych języków programowania, zalecam korzystanie z nazw opartych o wielkie litery, rozdzielane znakami podkreślenia, aby oznaczyć stałe. Nie tylko jest to już przyjętą konwencją, ale także wyraźnie kontrastuje ze zmiennymi pisanymi małymi literami, rozdzielanymi myślnikami.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$CSS_POSITIONS: top, right, bottom, left, center;

// Źle
$css-positions: top, right, bottom, left, center;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$CSS_POSITIONS: top, right, bottom, left, center

// Źle
$css-positions: top, right, bottom, left, center
{% endhighlight %}
  </div>
</div>



### Dalsze informacje

* [Dealing With Constants in Sass](http://www.sitepoint.com/dealing-constants-sass/)






## Przestrzenie nazw

Jeśli zamierzasz rozpowszechniać swój kod pisany w Sassie, na przykład jako bibliotekę, framework, grid system czy cokolwiek innego, powinieneś rozważyć ograniczenie przestrzeni wszystkich swoich zmiennych, funkcji, mixinów i selektorów zastępczych. Ograniczy to wówczas możliwość wystąpienia konfliktu z kodem innego pochodzenia.

Na przykład, jeżeli pracujesz nad projektem *Sassowski Jednorożec*, który z założenia ma być wykorzystywany przez deweloperów na całym świecie (kto by nie chciał z czegoś tak nazwanego korzystać?), zastanów się czy nie było by dobrze używać prefiksu `sj-` dla wszelkich nazw. Wydaje się, że będzie to na tyle specyficzne, że zapobiegnie wszelkim kolizjom nazwowym a jednocześnie też na tyle krótkie, że nie będzie sprawiało problemów przy pisaniu kodu.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$sj-configuration: ( ... );

@function sj-rainbow($unicorn) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$sj-configuration: ( ... )

@function sj-rainbow($unicorn)
  // ...
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Warto zaznaczyć, że automatyczne ograniczanie przestrzeni nazw jest jednym ze składników nadchodzących zmian w funkcji <code>@import</code> w wersji 4.0 Sassa. Jak już odpowiednie zmiany wejdą w życie, ręczne ograniczanie przestrzeni stanie się coraz to mniej użyteczne, a w końcu stanie się nawet problematyczne.</p>
</div>



### Dalsze informacje

* [Please Respect the Global CSS Namespace](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
