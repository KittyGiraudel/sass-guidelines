
## Mixiny

Mixiny są jedną z tych funkcjonalności Sassa, z których się najczęściej korzysta. Są one kluczowe dla ponownego wykorzystywania komponentów i dla zgodności z zasadą DRY. I słusznie: mixiny pozwalają twórcom na definiowanie stylów które mogą być wykorzystywane wszędzie w arkuszu stylu bez potrzeby korzystania z niesemantycznych klas, takich jak `.float-left`.

Mogą one zawierać pełne reguły CSS i zasadniczo wszystko, co wszędzie indziej w dokumencie Sassa jest dozwolone, może być użyte. Mogą one nawet przyjmować argumenty, zupełnie jak funkcje. Nie trzeba więc dodawać, że ich możliwości są niemal nieograniczone.

Czuję jednak potrzebę by ostrzec przed nadużywaniem mocy mixinów. Należy mieć bowiem ciągle na uwadze pojęcie *prostoty*. Może to się wydawać kuszące, by budować potężne, rozbudowane mixiny. Jest to jedna gruba przesada i, niestety, wielu deweloperów cierpi na tą chorobę. Dobrze napisany kod nie powinien robić wszystkiego na raz. Jeśli dany mixin rozwinie się na więcej niż 20 linii, należy rozważyć wydzielenie z niego części albo po prostu zastanowić się nad nim i przepisać go jeszcze raz.

### Podstawy

Mając to na uwadze, mixiny są niezwykle przydatne i, bez wątpienia, powinno się ich używać. Główną zasadą jest w tym przypadku to, że grupa własności CSS występująca razem z jakiegoś powodu (nie z przypadku) może zostać umieszczona w mixinie. [Micro-clearfix hack od Nicolasa Gallaghera](http://nicolasgallagher.com/micro-clearfix-hack/), na przykład, zasługuje na umieszczenie go w (bezargumentowym) mixinie.

{% include snippets/mixins/01/index.html %}

Innym słusznym przykładem może być mixin do określenia rozmiarów elementu, definiujący zarówno `width` i `height`. Nie tylko sprawi on, że kod będzie łatwiejszy do pisania, ale i przyjemniejszy do czytania.

{% include snippets/mixins/02/index.html %}

**Dalsze informacje:**

* [Sass Mixins to Kickstart your Project](https://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](https://www.sitepoint.com/sass-mixin-css-triangles/)

### Mixiny bezargumentowe

Czasami mixiny używane są jedynie w celu uniknięcia powtarzania tych samych grup deklaracji, bez potrzeby korzystania z parametrów, bądź też mają na tyle rozsądne wartości podstawowe, że nie ma potrzeby podawania im własnych argumentów.

W tych wypadkach, wywołując mixin możemy spokojnie pomijać nawiasy. Słowo kluczowe `@include` (albo `+` dla wciętej składni) w wystarczającym stopniu sygnalizuje, iż mamy do czynienia z wywołaniem mixinu; nie ma więc tu potrzeby dla dodatkowych nawiasów.

{% include snippets/mixins/08/index.html %}

### Listy argumentów

Mając do czynienia z nieokreśloną liczbą argumentów w mixinie, należy używać `arglist`, zamiast listy. `arglist` może być traktowany jako ósmy typ danych w Sassie, który podawany jest jako dowolna liczba argumentów dla mixinu albo funkcji, której sygnatura zawiera `...`.

{% include snippets/mixins/03/index.html %}

Budując mixin, który akceptuje wiele argumentów (3 lub więcej), należy dwa razy pomyśleć zanim wprost poda się je jako listę albo mapę myśląc, że tak będzie łatwiej.

Sass jest dosyć sprytny jeśli chodzi o deklaracje mixinów i funkcji, do tego stopnia że pozwala on na podawanie listy lub mapy jako `arglist` do funkcji/mixinu, które tym samym zostają przeanalizowane jako argumenty.

{% include snippets/mixins/04/index.html %}

**Dalsze informacje:**

* [Sass Multiple Arguments, Lists or Arglist](https://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

### Mixiny a vendor prefixy

Definiowanie własnych mixinów do radzenia sobie z vendor prefixami dla niewspieranych lub częściowo wspieranych własności CSS może być kuszące. My jednak tego nie chcemy. Przede wszystkim, jeśli można użyć [Autoprefixera](https://github.com/postcss/autoprefixer), warto to zrobić. Został on napisany do tego celu i zrobi to bez wątpienia lepiej.

Niestety, zdarzają się przypadki w których z Autoprefixera skorzystać nie możemy. Jeśli natomiast używamy [Bourbona](https://bourbon.io/) albo [Compassu](http://compass-style.org/), oba rozwiązania radzą sobie z vendor prefixami same.

Jeśli jednak nie można skorzystać ani z Autoprefixera, ani z Bourbona czy Compassu, wtedy i tylko wtedy, można tworzyć własne mixiny dla prefixowania własności CSSa. Proszę jednak by nie tworzyć osobnych mixinów dla każdej z własności.

{% include snippets/mixins/05/index.html %}

Zróbmy to mądrzej.

{% include snippets/mixins/06/index.html %}

Użycie takiego mixinu powinno być dosyć jasne:

{% include snippets/mixins/07/index.html %}

Proszę mieć jednak na uwadze, że jest to dosyć kiepskie rozwiązanie. Na przykład, nie rozwiąże to problemu bardziej skomplikowanych składni, takich jak ta wymagana dla Flexboxa. W tych przypadkach, użycie Autoprefixera było by o wiele lepszą opcją.

**Dalsze informacje:**

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](https://www.sitepoint.com/building-linear-gradient-mixin-sass/)
