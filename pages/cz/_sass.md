
## O Sassu

Takto je [Sass](https://sass-lang.com) popisován v jeho [dokumentaci](https://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass je CSS rozšíření, které dodává sílu a eleganci základnímu jazyku.

Hlavním cílem Sassu je opravit nedostatky v CSS. CSS, jak všichni víme, není nejlepší jazyk světa <sup>[nutná citace]</sup>. I když je velmi jednoduchý na naučení, mžiknutím oka se může stát chaotický, zejména pokud jde o velké projekty.

A to je přesně ten moment, kdy se hodí mít po ruce Sass, jako meta-jazyk, který vylepšuje CSS syntaxi za pomoci různých funkcí a šikovných nástrojů, a to vše konzervativně k jazyku CSS.

Nejde ale o to, proměnit CSS do plnohodnotného programovacího jazyka, jelikož Sass chce jenom pomoci tam, kde CSS selhává. A právě proto není začít se Sassem o nic těžšího, než-li se začít učit CSS: jednoduše to přidává několik funkcí navíc.

Jak již bylo řečeno, existuje mnoho způsobů využití těchto funkcí. Některé jsou dobré, některé špatné a některé poměrně neobvyklé. Tenhle manuál si klade za cíl nastínit vám konzistentní zdokumentovaný přístup pro psaní Sassu.

**Další četba:**

* [Sass](https://sass-lang.com)
* [Sass documentation](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

### Ruby Sass nebo LibSass

[První commit Sassu](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) se datuje na konec roku 2006, tedy skoro před 8 lety. Netřeba snad ani dodávat, že od té doby uplynula dlouhá doba. Při počátečním vývoji v Ruby se tu a tam objevil nějaký ten port. Nejúspěšnější z nich, [LibSass](https://github.com/sass/libsass) (napsaný v C/C++) je nyní blízko k plné kompatibilitě s původní Ruby verzí.

V roce 2014 se [Ruby Sass a LibSass týmy se rozhodly počkat a sjednotit obě verze před dalším postupem](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Od té doby LibSass aktivně uvolňuje verze kompatibilní s jeho starším bratrem. Poslední zbývající nesrovnalosti jsem osobně zaznamenal ve svém projektu [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/). Pokud víte o nějakém rozdílu mezi verzemi, který v seznamu není uvedený, budu vám vděčný za otevření příslušné issue.

Vraťme se zpět k volbě kompilátoru. Ono to vlastně záleží na vašem projektu. Pokud je založen na Ruby on Rails, je lepší použít Ruby Sass, který se na takovýto případ perfektně hodí. Také mějte na paměti, že Ruby Sass bude vždy referenční implementací a bude vždy udávat směr funkcí LibSassu.
Na projektech, které Ruby nevyužívají, bude použití LibSassu pravděpodobně lepší nápad, jelikož je pravděpodobně už je wrapper pro daný jazyk vytvořen. Takže pokud chcete použít například Node.js, [node-sass](https://github.com/sass/node-sass) je jasná volba.

**Další četba:**

* [LibSass](https://github.com/sass/libsass)
* [Getting to know LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/)
* [Switching from Ruby Sass to LibSass](https://www.sitepoint.com/switching-ruby-sass-libsass/)

### Sass nebo SCSS

Ohledně sémantiky jména *Sass* je hodně nejasností, a to z dobrého důvodu: Sass označuje jak preprocessor, tak i jeho vlastní syntaxi. To není moc příhodné, co?

No, Sass zpočátku popsal syntaxi, jejímž charakteristickým rysem bylo založení na odsazení. Brzy poté se vývojáři Sass rozhodli uzavřít propast mezi Sassem a CSS poskytnutím CSS-friendly syntaxe nazývané *SCSS* podle *Sassy CSS*. Jejím motem je: pokud to je validní CSS, je to validní SCSS.

Od té doby je Sass (myšleno preprocesor) poskytován ve dvou rozdílných syntaxích: Sass (bez kapitálek, [prosím](http://sassnotsass.com)), také známou jako *odsazovaná syntaxe*, a SCSS. Kterou z nich budete používat je v podstatě jen a jen na vás, jelikož obě jsou striktně ekvivalentní co se funkcí týče. Je to jen otázka osobního vkusu.

Na mezery citlivá syntaxe Sass spoléhá na odsazení, zbavení se závorek, středníků a dalších interpunkčních symbolů, což vede ke štíhlejší a kratší syntaxi. Oproti tomu SCSS je jednoduší na naučení, jelikož je to spíše něco málo navíc oproti CSS.

Já osobně preferuji SCSS nad Sass, protože je blíže k CSS a je přátelštější k většině vývojářů. Proto je také SCSS výchozí syntaxí v tomto manuálu. Můžete přepnout na Sass odsazenou syntaxi v <button data-toggle="aside" class="link-like" role="button" type="button">panelu nastavení</button>.

**Další četba:**

* [What’s the difference between Sass and SCSS](https://www.sitepoint.com/whats-difference-sass-scss/)

### Další preprocesory

Sass je preprocesor jako každý jiný. Jeho největší soupeř je [LESS](http://lesscss.org/). Preprocesor založený na Node.js a který se stal poměrně populárním díky proslulému CSS frameworku [Bootstrap](https://getbootstrap.com/), který jej využívá. Je tu také [Stylus](https://stylus-lang.com/), což je tak trochu hloupá neomezená verze LESS, kde můžete dělat v podstatě co jen chcete, protože skoro dělá z CSS programovací jazyk.

*Proč zvolit Sass nad LESS nebo jiným preprocesorem?* je dnes stále hojně pokládaná otázka. Ne tak dávno jsme doporučovali Sass pro projekty založené na Ruby, protože to byl první vytvořený v Ruby a dobře se používal s Ruby on Rails. Nyní, když LibSass skoro dohnal originální Sass to již není až tak relevantní rada.

To co zbožňuji na Sassu je jeho konzervativní přístup k CSS. Sass je navrhnut na základě silných zásad: mnoho z designového přístupu přichází čistě z víry klíčového týmu, že a) přidávání fuknce navíc má komplexní cenu, která musí být odůvodněna užitečností a b) by mělo být jasné co daný blok stylů dělá pouze při pohledu z tohoto bloku. Sass také klade mnohem větší důraz na detaily než ostatní preprocesory. Pokud je mi známo, klíčoví designéři se hluboce starají o podporu každého koutového případu CSS kompatibility a starají se o to, aby bylo každé obecné chování konzistentní.

Jinými slovy, Sass není preprocesor zaměřen na hloupoučké rádoby programátory, jako mě, přidáním mimořádné funkce na vrcholu jazyka, který není určen na podporu logických případů použití. Je to software zaměřený na řešení aktuálních problémů a pomoci poskytnout užitečné funkce pro CSS kde CSS zaostává.

Preprocesory stranou, měli bychom také zmínit postprocesory, které obdržely v několika posledních měsících významné boom. A to především díky [PostCSS](https://github.com/postcss/postcss) a [cssnext](https://cssnext.github.io/). Postprocesory jsou do značné míry rovnocenné k preprocesorům až na to, že neposkytují nic jiného než CSS syntaxi zítřka.

Můžete je brát jako polyfill pro nepodporované CSS funkce. Například kdybyste psali proměnné tak, jak je popsáno v [CSS specifikaci](https://drafts.csswg.org/css-variables/), poté zkompilovali své styly pouze postprocessorem, abyste našli každou proměnnou a ta byla nahrazena její hodnotou, jako by to udělal Sass.

Nápad za postprocesory je ten, že jednou budou prohlížeče podporovat nové funkce (například CSS proměnné), postprocesory je nezkompilují, nechají je být a nechají prohlížeče ať se starají.

Zatímco poskytování zítřejší syntaxe už dnes je opravdu ušlechtilý nápad, musím říci, že pořád preferuji používání Sassu pro většinu věcí. Každopádně jsou tu některé případy, kde věřím, že je použití postprocesorů více vhodné, než-li Sass a tak podobně, například CSS prefixování, ale k tomu se vrátíme.

**Další četba:**

* [LESS](http://lesscss.org/)
* [Stylus](https://stylus-lang.com/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)
