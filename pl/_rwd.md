
# Responsive Web Design i breakpointy

Nie wydaje mi się, by zagadnienie Responsive Web Design wymagało wprowadzenia. Zwłaszcza teraz, gdy jest ono obecne dosłownie wszędzie. Mógłbyś jednak zapytać *dlaczego przewodnik dla stylu Sassa zawiera sekcję poświęconą RWD?* Tak naprawdę to jest kilka rzeczy, które można zrobić aby pracowało się z breakpointami przyjemniej, dlatego też postanowiłem poruszyć ten temat tutaj.






## Nazywanie breakpointów

Wydaje mi się, że można spokojnie powiedzieć, że media queries nie powinny być podporządkowane konkretnym urządzeniom. Dla przykładu, celowanie w iPady czy telefony Blackberry jest niewątpliwie złym pomysłem. Media queries powinny zajmować się pewnym zakresem rozmiarów ekranów, do czasu kiedy design ulega załamaniu i następna media query zaczyna obowiązywać.

Z tych samych powodów, breakpointy nie powinny być nazywane w nawiązaniu do konkretnych urządzeń, lecz bardziej ogólnie. Zwłaszcza teraz, gdy telefony stają się większe niż niektóre tablety, niektóre zaś tablety większe niż komputery o małych ekranach, i tak dalej...

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Dobrze
$breakpoints: (
  'medium': (min-width: 800px),
  'large': (min-width: 1000px),
  'huge': (min-width: 1200px),
);

// Źle
$breakpoints: (
  'tablet': (min-width: 800px),
  'computer': (min-width: 1000px),
  'tv': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Dobrze
$breakpoints: ('medium': (min-width: 800px), 'large': (min-width: 1000px), 'huge': (min-width: 1200px))

// Źle
$breakpoints: ('tablet': (min-width: 800px), 'computer': (min-width: 1000px), 'tv': (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

Każda konwencja nazwowa, jaką w tym miejscu przyjmiemy, będzie dobra o ile tylko będzie przejrzysta i da w wystarczającym stopniu do zrozumienia, że nie jest ona związana konkretnymi urządzeniami.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$breakpoints: (
  'seed': (min-width: 800px),
  'sprout': (min-width: 1000px),
  'plant': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$breakpoints: ('seed': (min-width: 800px), 'sprout': (min-width: 1000px), 'plant': (min-width: 1200px))
{% endhighlight %}
  </div>
</div>




### Dalsze informacje

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)






## Menadżer breakpointów

W momencie gdy Twoje breakpointy są już nazwane, potrzebujesz sposobu by ich użyć w faktycznych media queries. Jest wiele możliwości by to zrobić, jednak muszę przyznać że jestem wielkim fanem funkcji wydobywających breakpointy z map.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Menadżer responsywności.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media #{inspect(map-get($breakpoints, $breakpoint))} {
      @content;
    }
  } @else {
    @error 'Nie znaleziono wartości dla `#{$breakpoint}`. '
         + 'Proszę się upewnić, że jest ona zdefiniowana w mapie `$breakpoints`.';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Menadżer responsywności.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
=respond-to($breakpoint)
  @if map-has-key($breakpoints, $breakpoint)
    @media #{inspect(map-get($breakpoints, $breakpoint))}
      @content

  @else
    @error 'Nie znaleziono wartości dla `#{$breakpoint}`. '
         + 'Proszę się upewnić, że jest ona zdefiniowana w mapie `$breakpoints`.'
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Oczywiście, jest to dosyć uproszczone podejście do zarządzania breakpointami, które nie spełni oczekiwań w przypadku konstrukcji bardziej złożonych.</p>
  <p>Jeśli potrzebujesz rozwiązania bardziej rozbudowanego, zalecam nie odkrywać Ameryki na nowo lecz sprawdzić to, co już istnieje, na przykład <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> czy <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>





### Dalsze informacje

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)






## Używanie media queries

Nie tak dawno temu, w społeczności pojawiła się dosyć burzliwa dyskusja na temat tego gdzie powinno się deklarować media queries: czy powinny one się znajdować w ramach bloków selektorów (na co Sass pozwala), czy raczej winny one być odseparowane. Muszę przyznać, że jestem zwolennikiem poglądu by *media queries znajdowały się w ramach selektorów*, bowiem współgra on z ideą *komponentów*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  @include respond-to('medium') {
    color: blue;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  +respond-to('medium')
    color: blue
{% endhighlight %}
  </div>
</div>

Co prowadzi do następującego CSSu:

<div>
{% highlight css %}
.foo {
  color: red;
}

@media (min-width: 800px) {
  .foo {
    color: blue;
  }
}
{% endhighlight %}
</div>

Możesz usłyszeć opinie, że taka konwencja prowadzi do duplikowania media queries w wynikowym CSSie. Jest to niewątpliwie prawdą. Należy jednak zaznaczyć, że [przeprowadzono w tej kwestii testy](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries), które wykazały że nie ma to żadnego znaczenia, w momencie gdy Gzip (lub inna metoda kompresji) został użyty na serwerze:

> … rozstrzygając zagadnienie łączenia bądź rozbijania Media Queries w wielu miejscach i konsekwencji, jakie oba rozwiązania niosą dla kwestii wydajności, doszliśmy do wniosku, że różnica jest conajmniej minimalna, a w zasadzie nieistniejąca.<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), odnośnie [Breakpoint](http://breakpoint-sass.com/)

Jeśli jednak masz obawy co do duplikowania media queries, istnieją takie narzędzia do ich scalania, jak [ten gem](https://github.com/aaronjensen/sass-media_query_combiner). Muszę Cię jednak ostrzec przed możliwymi skutkami ubocznymi przenoszenia z miejsca na miejsce kodu CSS. Należy wszak pamiętać, że w tym wypadku kolejność źródłowa ma kluczowe znaczenie.



### Dalsze informacje

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
