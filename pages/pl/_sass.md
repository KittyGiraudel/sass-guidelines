
## O Sassie

Zdaniem twórców [Sassa](https://sass-lang.com), zawartym w jego [dokumentacji](https://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass jest rozszerzeniem dla CSSa, które dodaje mu mocy i elegancji.

Głównym zadaniem Sassa jest wyeliminowanie wad CSSa. Jak wszyscy wiemy, CSS nie jest najlepszym językiem świata <sup>[potrzebne źródło]</sup>. Z jednej strony jest on niewątpliwie łatwy do przyswojenia, z drugiej zaś niejednokrotnie zdarza się, że nasza baza kodu CSSa staje się niepotrzebnie skomplikowana i rozbudowana, zwłaszcza przy większych projektach.

W tym miejscu pojawia się Sass, jako tzw. meta-język, by poprawić składnię CSSa. Zapewnia on ponadto szereg dodatkowych cech i użytecznych narzędzi. Jednocześnie, Sass pozostaje dość konserwatywnym uzupełnieniem klasycznego CSSa.

Jego celem nie jest przekształcenie CSSa w pełnoprawny język programowania z prawdziwego zdarzenia. Sass jedynie pomaga tam, gdzie CSS zawodzi. Z tego też powodu, rozpoczynanie przygody z Sassem nie jest wcale trudniejsze od nauki CSSa: jest to bowiem jedynie zestaw dodatków rozwijających podstawową funkcjonalność.

Tym samym, istnieje wiele sposobów na korzystanie z tych dodatkowych rozwiązań. Niektóre są poprawne, niektóre mniej, a niektóre też są niezwykłe. Ten przewodnik ma na celu przedstawienie spójnego i dobrze udokumentowanego podejścia do pisania kodu w Sassie.

### Ruby Sass czy LibSass

[Pierwszy commit Sassa](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) pochodzi z końca 2006 roku, a więc było to ponad 8 lat temu. Nie trzeba więc dodawać, że Sass przebył dość długą drogę. Choć początkowo rozwijany w Ruby, od tego czasu pojawił się szereg różnych portów. Ten najbardziej kompletny, [LibSass](https://github.com/sass/libsass) (napisany w C/C++), jest bliski do pełnej kompatybilności z oryginalną wersją, napisaną w Ruby.

W 2014 roku, [zespoły pracujące nad Ruby Sass i LibSass postanowiły poczekać aby obie wersje się zrównały pod względem kompletności, zanim zaczną pracować nad nowymi udoskonaleniami](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Od tego czasu, LibSass aktywnie wydaje nowe wersje swojego projektu i dąży do wyrównania ze swoim starszym bratem. Ostatnie pozostałe nieścisłości zostały zebrane i skategoryzowane przeze mnie w projekcie [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/). W przypadku znania jakichś innych nieścisłości pomiędzy tymi obiema wersjami kompilatorów Sassa, które nie zostały tam podane – bardzo proszę o utworzenie nowego issue.

Wracając do doboru kompilatora. Tak naprawdę, to wszystko zależy od konkretnego projektu. Jeśli oparty jest on o Ruby on Rails, oczywiście lepiej korzystać z Ruby Sass, który będzie idealnie z nim współgrał. Ponadto, Ruby Sass będzie zawsze tą pierwszorzędną implementacją i zawsze będzie o krok przed LibSassem, jeśli chodzi o dodatkową funkcjonalność.

W przypadku zaś projektów nieopartych o Ruby, a które wymagają integracji z określonym porządkiem pracy, LibSass będzie prawdopodobnie lepszym rozwiązaniem. Jest on bowiem stworzony pod kątem wykorzystania go przez różne wrappery. W przypadku chęci użycia go z Node.js, [node-sass](https://github.com/sass/node-sass) będzie dla Ciebie idealny.

**Dalsze informacje:**

* [Getting to know LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Switching from Ruby Sass to LibSass](https://www.sitepoint.com/switching-ruby-sass-libsass/)

### Sass czy SCSS

Panuje powszechnie dosyć spore zamieszanie, jeśli chodzi o znaczenie nazwy *Sass* i nie jest to bez powodu. Sass bowiem jest zarówno określeniem dla preprocesora, jak i swojej składni. Może to się wydawać nie do końca jasne, prawda?

Prawda jest taka, że Sass początkowo był określeniem dla składni, której cechą charakterystyczną była wrażliwość na indentację. Wkrótce potem, deweloperzy zarządzający Sassem postanowili zacieśnić różnicę między Sassem a CSSem udostępniając przyjazną CSSowi składnię zwaną *SCSS*, czyli *Sassy CSS*. Głównym założeniem temu przyświecającym było to, że jeśli coś jest zgodne z CSSem, jest też zgodne z SCSSem.

Od tego czasu, Sass (preprocesor) obsługuje dwie różne składnie: Sass (tylko nie wielkimi literami, [proszę](http://sassnotsass.com)), znany także jako *wcięta składnia*, i SCSS. Wybór między nimi należy tak naprawdę do autora kodu, bowiem obie są zgodne ze sobą jeśli chodzi o funkcjonalność. Różnica dotyczy tylko i wyłącznie kwestii estetycznych.

Wrażliwa na tzw. znaki niedrukowalne składnia opiera się na indentacji zmiast nawiasach klamrowych, średników czy innych znaków interpunkcyjnych, prowadząc do czystszej i krótszej składni. SCSS tymczasem jest łatwiejszy do nauki, bowiem składa się on tylko z niewielu drobnych dodatków do samego CSSa.

Osobiście preferuję SCSS nad Sassem z powodu większej kompatybilności z CSSem i łatwości przyswojenia go sobie dla większości deweloperów. Z tego też powodu, w poniższym przewodniku posługiwać się będę raczej SCSSem niż Sassem. Można jednak w każdej chwili zmienić składnię przykładów tego przewodnika w <button type="button" data-a11y-dialog-show="options-panel" class="link-like">panelu opcji</button>.

**Dalsze informacje:**

* [What’s the difference between Sass and SCSS](https://www.sitepoint.com/whats-difference-sass-scss/)

### Inne preprocesory

Sass jest jednym z wielu dostępnych preprocesorów. Jego głównym konkurentem zdaje się być [LESS](http://lesscss.org/), który jest oparty o Node.js i który to zyskał popularność dzięki znanemu frameworkowi CSS, [Bootstrapowi](https://getbootstrap.com/). Znany jest także [Stylus](https://stylus-lang.com/) - zdający się być niczym nieskrępowaną wersją LESSa - z użyciem którego możesz zrobić w zasadzie wszystko, bowiem przekształca on właściwie CSS w pełnoprawny język programowania.

*Dlaczego wybrać Sass zamiast LESS czy innego preprocesora?* jest wciąż aktualnym dziś pytaniem. Nie tak dawno temu rekomendowaliśmy Sass dla projektów bazujących dla Ruby właśnie dlatego, że był on pierwszym preprocesorem stworzonym w Ruby i dobrze współgrał z Ruby on Rails. Teraz, gdy LibSass nadgonił (w zasadzie) z oryginalnym Sassem, ten argument nie jest do końca właściwym.

Tym, co lubię w Sassie, jest jego konserwatywne podejście do CSSa. Design Sassa jest oparty na silnych podstawach: większość z rozwiązań składających się na Sass wynika z założenia twórców, że a) implementowanie dodatkowych funkcjonalności, z uwagi na ich kompleksowość, powinno być uzasadnione faktyczną ich użytecznością i b), że nie powinny one stwarzać trudności przy ocenie tego, co dany blok stylów robi. Ponadto, Sass zdaje się mieć znacznie lepsze podejście do detali od innych preprocesorów. Główni deweloperzy Sassa przykładają szczególną wagę do wspierania każdego możliwego wariantu dotyczącego pracy z CSSem i do tego, by wszystko było ze sobą spójne.

Innymi słowy, Sass nie jest tym preprocesorem, który zadowoli takich programistów jak ja poprzez dodawanie nadzwyczajnych funkcjonalności ponad to, co jest zawarte w języku, który od początku nie był do tego stworzony. Jest to oprogramowanie służące do rozwiązywania faktycznych problemów, pomagające w dostarczeniu użytecznych funkcjonalności do CSSa tam, gdzie mu ich brakuje.

Pomijając na chwilę kwestię preprocesorów, powinniśmy tutaj poruszyć też kwestię postprocesorów, które ostatnimi czasy stały się niesamowicie popularne. Stało się to głównie dzięki projektom takim jak [PostCSS](https://github.com/postcss/postcss) i [cssnext](https://cssnext.github.io/). Nazywane są często "postprocesorami", bowiem transpilują składnię ze standardów, które dopiero nadchodzą, do powszechnego dzisiaj CSSa. Są one jednak zasadniczo tym samym co preprocesory, oprócz tego że nie zapewniają one niczego ponad funkcjonalność, która ma się pojawić w nadchodzących specyfikacjach składni CSS.

Można myśleć o postprocesorach jako polyfillach dla niewspieranych funkcjonalności CSSa. Dla przykładu, dają one możliwość pisania zmiennych w sposób, o jakim mówi [specyfikacja CSS](https://drafts.csswg.org/css-variables/). Takie arkusze stylów kompiluje się potem za pomocą postprocesora, w rezultacie czego wszystkie zmienne zastępowane są faktycznymi wartościami, zupełnie jak w przypadku Sassa.

Postprocesorom przyświeca idea dostarczania nowych, projektowanych dopiero funkcjonalności CSSa (takich jak zmienne) tym przeglądarkom, które tego obecnie nie wspierają. Gdy zaś rozwiązania te zaczną być powszechnie obsługiwane, postprocesor przestanie działać na rzecz przeglądarki.

Podczas gdy umożliwianie korzystania z przyszłej składni jest czymś, co zasługuje na pochwałę, nadal preferuję korzystać z Sassa. Są jednak rzeczy, do których postprocesor zdaje się być bardziej odpowiednim narzędziem niż Sass - prefixowanie CSSa dla przykładu - jednak do tego jeszcze tutaj wrócimy.
