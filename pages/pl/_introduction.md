
## Wprowadzenie

### Czemu służy ten przewodnik

Przewodnik stylu nie stanowi tylko przyjemności do czytania, prezentującej idealny stan kodu. Jest to przede wszystkim kluczowy dokument w życiu danego projektu, opisujący jak i dlaczego powinniśmy pisać określony kod. Może się wydawać, że jest to przesada dla małych projektów, pomaga on jednak w utrzymywaniu kodu czystego, skalowalnego w zależności od rozmiaru projektu i łatwego w utrzymaniu.

Nie wymaga to zatem podkreślenia, że im więcej deweloperów jest zaangażowanych do danego projektu, tym bardziej niezbędny zdaje się być taki przewodnik. I analogicznie - im większy jest projekt, tym istotniejszym jest przewodnik.

[Harry Roberts](https://csswizardry.com) określił to bardzo dobrze w [CSS Guidelines](https://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Przewodnik stylu kodu (zaznaczam, nie chodzi tu o przewodnik po wizualnym stylu) jest cennym narzędziem dla zespołów, które:</p>
  <ul>
    <li>budują i utrzymują produkty przez określony okresu czasu;</li>
    <li>składają się z deweloperów o różnych umiejętnościach i specjalizacjach;</li>
    <li>mają wielu różnych deweloperów pracujących nad danym produktem jednocześnie;</li>
    <li>regularnie wprowadzają nowych pracowników;</li>
    <li>posiadają określoną liczbę baz kodu, z których deweloperzy na bieżąco korzystają.</li>
  </ul>
</blockquote>

### Zastrzeżenie

Przede wszystkim: **to nie jest przewodnik po stylu dla CSSa**. Ten dokument nie będzie dotyczył konwencji nazewnictwa dla klas w CSSie, wzorów modularnych czy kwestii selektorów ID. Przewodnik ten zajmie się tylko i wyłącznie sprawami związanymi z Sassem.

Ponadto, został on napisany przeze mnie i przez to jest on **bardzo subiektywny**. Należy go traktować jako zbiór metodologii i porad, które wykorzystywałem i którymi się dzieliłem przez lata. Pozwala mi on jednocześnie na podlinkowanie wszelakiej maści pożytecznych źródeł, dlatego też sprawdzaj *dalsze informacje* dla każdej z sekcji.

Nie ulega wątpliwości natomiast, że poradnik ten nie jest jedynym źródłem informacji i nie ma on wyłączności na prawdę. Co więcej - może się okazać, że wcale nie będzie odpowiadał konkretnym projektom. Zalecane jest więc korzystanie i adaptowanie go do własnych potrzeb. Jak zawsze, *to może działać inaczej w Twoim przypadku (your mileage may vary)*.

### Kluczowe reguły

Koniec końców, jeżeli miałbym określić jedyną rzecz jaką chciałbym, by została wyniesiona z czytania tego przewodnika, to jest nią to, że **Sass powinien być pisany tak prosto, jak to jest tylko możliwe**.

Dzięki moim zabawnym eksperymentom, takim jak [operator bitowy](https://github.com/KittyGiraudel/SassyBitwise), [iteratory i generatory](https://github.com/KittyGiraudel/SassyIteratorsGenerators) czy [parser JSON](https://github.com/KittyGiraudel/SassyJSON) napisanym w Sassie, możemy się przekonać jak dużo jest możliwe dzięki Sassowi.

Nie zapominajmy jednak, że CSS jest prostym językiem. Sass, którego celem jest pisanie CSSa, nie powinien zwiększać jego stopnia skomplikowania. [Zasada KISS](https://pl.wikipedia.org/wiki/KISS_(reguła)) (Keep It Simple, Stupid) jest tu kluczowa i można nawet stwierdzić, że przysłania ona [zasadę DRY](https://pl.wikipedia.org/wiki/DRY) (Don’t Repeat Yourself) w niektórych przypadkach.

Czasami warto się trochę powtórzyć i dzięki temu sprawić, że nasz kod stanie się łatwiejszy do utrzymania. Jest to zdecydowanie lepsze rozwiązanie niż ciężki, niekontrolowalny i niepotrzebnie skomplikowany kod, którego utrzymanie w dłuższej perspektywie jest wręcz niemożliwe.

Poza tym, zacytuję raz jeszcze [Harry’ego Robertsa](https://csswizardry.com) - **pragmatyzm wygrywa z perfekcjonizmem**. Na jakimś etapie zapewne stwierdzisz, że to co robisz nie jest do końca zgodne z zasadami opisanymi w tym przewodniku. Jeżeli ma to sens, jeżeli wydaje się to prawidłowe - rób to po swojemu. Nie zapominajmy wszak, że kod jest jedynie środkiem, nie celem.

### Rozwijanie przewodnika

Przeważająca część tego przewodnika jest wysoce subiektywna. Czytam i piszę o Sassie już od wielu lat i z tego też powodu mam swoje określone zasady, jeśli chodzi o pisanie przejrzystych arkuszy stylów. Rozumiem jednak, że mogą one nie spodobać się, bądź nie pasować każdemu i jest to zupełnie normalne.

Jestem przekonany, że tego typu przewodniki powinny być tworzone z myślą o ich rozwijaniu. Rozwijanie Sass Guidelines jest tak łatwe, jak umieszczenie w odpowiednim miejscu w projekcie informacji, że zawarty w nim kod pisany jest w zgodzie zasadami przedstawionymi w tym przewodniku, za wyjątkiem kilku reguł - a reguły te powinny być przedstawione poniżej.

Przykład takiego rozwinięcia przewodnika jest dostępny na [repozytorium SassDoc](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md):

> To jest rozwinięciem [Node Styleguide](https://github.com/felixge/node-style-guide), autorstwa Felixa Geisendörfera. Wszystko z tego dokumentu "nadpisuje" to, co znajduje się w Node Styleguide.

**Dalsze informacje:**

* [Keep Sass Simple](https://www.sitepoint.com/keep-sass-simple/)
