
# Extendy

Dyrektywa `@extend` jest jedną z tych funkcjonalności Sassa, która sprawiła że Sass stał się tak popularny. Warto w tym miejscu przypomnieć, że dyrektywa ta pozwala na przekazanie Sassowi, żeby potraktował element A tak, jakby pasował także do selektora B. Nie ulega wątpliwości, że może to być pomocne przy pisaniu modułowego CSSa.

Niemniej jednak muszę Cię przestrzec przed tą dyrektywą. Nie ujmując jej zdolności, `@extend` jest wciąż koncepcją która może sprawić więcej szkód, niż korzyści, zwłaszcza jeśli zostanie niewłaściwie użyta. Chodzi mianowicie o to, że rozwijając dany selektor, nie masz możliwości odpowiedzieć na poniższe pytania bez szczegółowej wiedzy na temat całej bazy kodu:

* gdzie zostanie dodany mój obecny selektor?
* czy może to spowodować jakieś niepożądane efekty?
* jak obszerny będzie kod CSS, wygenerowany z tego pojedynczego extendu?

Rezultat tego może być albo znikomy, albo katastrofalny w skutkach. Z tego też powodu, moją pierwszą radą będzie unikanie dyrektywy `@extend`. Może to zabrzmieć brutalnie, ale koniec końców może Ci to zaoszczędzić wiele problemów.

Mimo to, jest takie powiedzenie jak:

> Nigdy nie mów nigdy.<br>
> &mdash; Jak się nagle okazuje, [to wcale nie była Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Są bowiem sytuacje w których rozwijanie selektorów może być pomocne i warte uwagi. Miej jednak w pamięci poniższe zasady, by nie wpakować się w tarapaty:

* Korzystaj z extendów w ramach tego samego modułu.
* Korzystaj z extendów tylko na placeholderach.
* Upewnij się, by placeholder który rozwijasz był użyty w arkuszu tak rzadko, jak to jest możliwe.

Jeśli zamierzasz korzystać z tej dyrektywy, musisz także wiedzieć, że nie współpracuje on dobrze z blokami `@media`. Jak zapewne wiesz, Sass nie potrafi rozwijać zewnętrznych selektorów z wnętrza media query. Kompilator w takich przypadkach po prostu się wysypuje, mówiąc Ci jednocześnie, że tak się nie robi. Nie jest to zbyt przyjemne.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // To nie działa. Co więcej - kompilator się wysypie.
    @extend .foo;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  content: 'foo'

@media print
  .bar
    // To nie działa. Co więcej - kompilator się wysypie.
    @extend .foo
{% endhighlight %}
  </div>
</div>

> Nie można używać @extend na zewnętrznym selektorze, z wnętrza @media.<br>
> Można tylko to robić w ramach tej samej dyrektywy.

<div class="note">
  <p>Często się mówi, że <code>@extend</code> pomaga w zmniejszaniu rozmiaru pliku, z racji tego że łączy selektory zamiast duplikować własności. To prawda, jednak różnica po zastosowaniu kompresji <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a> jest nieistotna.</p>
  <p>Jeśli jednak nie możesz użyć kompresji Gzip (lub jej ekwiwalentu), korzystanie z dyrektywy <code>@extend</code> może nie być wcale takie złe, o ile wiesz co robisz.</p>
</div>

Podsumowując, **przestrzegam przed korzystaniem z dyrektywy `@extend`**, chyba że istnieją do tego specyficzne przesłanki. Nie twierdzę jednak, że `@extend` powinien być absolutnie zakazany.



### Dalsze informacje

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don’t Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
