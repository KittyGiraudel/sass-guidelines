
## Proměnné

Proměnné jsou esencí každého programovacího jazyka. Díky nim můžeme znovu použít hodnoty místo jejich kopírování znovu a znovu. Ale hlavně se díky nim dá jednoduše aktualizovat hodnota. Už žádné další find and replace nebo ruční procházení.

Každopádně CSS není nic jiného než velký koš obsahující všechny naše vejce. Oproti většině jazyků, v CSS nenajdete žádné pravé scopy.

Moje rada proto je taková, abyste proměnné vytvářeli jen když to dává smysl. Neberte to na lehkou váhu, protože to vám v ničem nepomůže. Nová proměnná by se měla vytvářet pouze pokud se splňují následující kritéria:

* hodnota se opakuje minimálně dvakrát;
* hodnota by se mohla alespoň jednou aktualizovat;
* všechny shody výskytu hodnoty jsou vázané s proměnnou (tedy nejsou to náhody).

V podstatě deklarovat proměnnou, která se nikdy nebude aktualizovat nebo je použita pouze na jednom místě, nemá žádný význam.

### Scopování

Scopování proměnné v Sassu se během let změnilo. Donedávna byla deklarace proměnné spolu se styly a dalšími skopy lokální již v základu. Každopádně když tu byla již ta samá globální proměnná se stejným názvem, lokální přirovnání mohlo změnit globální proměnnou. Od verze 3.4 Sass řeší koncept scopů správně a vytváří namísto toho novou lokální proměnnou.

V dokumentaci se hovoří o *stínování globální proměnné*. Pokud deklarujete proměnnou, která již existuje, v globálním scopu v vnitřním prostoru (selektor, funkce, mixin…), lokální proměnná *stíňuje* tu globální. V podstatě ji přepíše jen pro daný scope.

Následující útržka kódu vysvětluje koncept *stíňování proměnné*.

{% include snippets/variables/01/index.html %}

### značka `!default`

Pokud vytváříte knihovnu, framework, grid systém nebo jakoukoli jinou část Sassu, která se bude zveřenovat a používat externími vývojáři, všechny konfigurační proměnné by měly být označeny značkou `!default`, takže budou moci být přepsány.

{% include snippets/variables/02/index.html %}

Díky tomu může vývojář definovat vlastní `$baseline` proměnnou *před* importováním vaší knihovny a neuvidí svou proměnnou přepsanou.

{% include snippets/variables/03/index.html %}

### značka `!global`

Značka `!global` by se měla používat pro přepisování globálních proměnných z lokálního scopu. Pokud definujete proměnnou v kořenové úrovni, značka `!global` by se však měla vynechat.

{% include snippets/variables/04/index.html %}

### Více proměnných nebo mapy

Používání map spíše než více proměnných má několik výhod. Největší výhoda je možnost provést smyčku nad mapou, což s rozdílnými proměnnými nelze.

Další plus pro používání map je možnost vytvořit malou getter funkci pro přátelštější API. Zvažte například následující Sass kód:

{% include snippets/variables/05/index.html %}
