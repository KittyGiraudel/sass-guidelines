
# O Sassu

Zde najdete jak je [Sass](http://sass-lang.com) popisován v jeho [dokumentaci](http://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass je CSS rozšíření, které dodává sílu a eleganci základnímu jazyku.

Hlavním cílem Sassu je opravit chyby v CSS. CSS, jak všichni víme, není nejlepší jazyk světa <sup>[citace nutná]</sup>. Zatímco je velmi jednoduchý na naučení, rychle se stává dost chaotický, zejména pokud jde o velké projekty.

To je místo, kde přichází na scénu Sass, jako meta-jazyk, který má za úkol vylepšit CSS syntaxi za účelem poskytnutí dalších funkcí a užitečných nástrojů. Sass chce být také konzervativní vůči jazyku CSS.

Nejde o to, proměnit CSS do plnohodnotného programovacího jazyka, jelikož Sass chce jenom pomoci tam, kde CSS selhává. A právě proto začít se Sass není o nic těžšího, než-li se začít učit CSS: jednoduše to přidává několik funkcí navíc.

Jak již bylo řečeno, existuje mnoho způsobů využití těchto funkcí. Některé dobré, některé špatné, některé neobvyklé. Tyto pokyny jsou míněny tak, aby vám poskytly konzistentní a zdokumentovaný přístup pro psaní Sassu.

###### Další četba

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## Ruby Sass nebo LibSass

[První Sass commit](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) sahá tak daleko jako je konec roku 2006, tedy skoro 9 let zpět. Netřeba snad ani dodávat, že od té doby uplynula dlouhá doba. Původně byl vyvíjen v Ruby a objevovali se sem a tam různé porty. Nejúspěšnější z nich, [LibSass](https://github.com/sass/libsass) (napsaný v C) je nyní blízko k tomu být plně kompatibilní s originální Ruby verzí.

V roce 2014, [Ruby Sass a LibSass týmy se rozhodli, že počkají, až budou obě verze synchronizovány před tím, než se pohnou dále](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Od té doby mají LibSass aktivně uvolňované verze funkční shodnost s jeho starším bratrem. Poslení zbývající nesrovnalosti jsou shromaďovány a uvedeny mnou v projektu [Sass-Compatibility](http://sass-compatibility.github.io). Pokud jste si vědomi nekompatibilitou mezi těmi dvěmi verzemi, která není uvedena, prosím budtě tak hodní a otevřete issue.

Vraťme se zpět k volbě kompilátoru. Ono to vlastně záleží na vašem projektu. Pokud je to Ruby on Rails projekt, raději použijte Ruby Sass, který se na takovýto případ perfektně hodí. Také mějte na paměti, že Ruby Sass bude vždy refenční implementace a bude vždy vést oproti LibSass ve funkcích.

Na ne-Ruby projektech, které potřebují integraci pracovního postupu je použití LibSassu pravděpodobně lepší nápad, protože již byl pravděpodobně zabalen. Takže pokud chcete použít například Node.js, [node-sass](https://github.com/sass/node-sass) je to so potřebujete.

###### Další četba

* [LibSass](https://github.com/sass/libsass)
* [Getting to know LibSass](http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)

## Sass nebo SCSS

Poměrně dost nejastností panuje okolo sémantiky jména *Sass*, a to z dobrého důvodu: Sass znamená obojí, jak preprocessor, tak i jeho vlastní syntaxi. To není moc vhodné, co?

No, Sass zpočátku popsal syntaxi jejímž definujícím rysem byla její citlivost na odsazení. Brzy poté se správci Sass rozhodli uzavřít propast mezi Sass a CSS poskytnutím CSS-friendly syntaxe nazývanou *SCSS* podle *Sassy CSS*. Jejím motem je: pokud to je validní CSS, je to validní SCSS.

Od té doby je Sass (preprocesor) poskytován ve dvou rozdílných syntaxích: Sass ([prosím vás](http://sassnotsass.com), všechny znaky nejsou velké), také známou jako *odsazenou syntaxi*, a SCSS. Kterou z nich budete používat je v podstatě jen a jen na vás, jelikož obě jsou striktně ekvivalentní co se funkcí týče. Je to jen otázka osobního vkusu.

Na mezery citlivá syntaxe Sass spoléhá na odsazení, zbavení se závorek, středníků a dalších interpunkčních symbolů, což vede ke štíhlejší a kratší syntaxi. Oproti tomu SCSS je jednoduší na naučení, jelikož je to spíše něco málo navíc oproti CSS.

Já osobně preferuji SCSS nad Sass, protože je blíže k CSS a je přátelštější k většině vývojářů. Proto je také SCSS výchozí syntaxí po celých těchto pokynech. Můžete přepnout na Sass odsazenou syntaxi v <button data-toggle="aside" class="link-like" role="button" type="button">panelu nastavení</button>.

###### Další četba

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)

## Další preprocesory

Sass je preprocesor jako každý jiný. Jeho největší soupeř je [LESS](http://lesscss.org/). Preprocesor založený na Node.js a který se stal poměrně populárním díky slavnému CSS frameworku [Bootstrap](http://getbootstrap.com/), který jej využívá. Je tu také [Stylus](http://learnboost.github.io/stylus/), který je tak trochu hloupá neomezená verze LESS, kde můžete dělat v podstatě co jen chcete, protože skoro mění CSS na programovací jazyk.

*Proč zvolit Sass nad LESS nebo jiným preprocesorem?* je dnes stále hojně využívaná otázka. Ne tak dávno jsme doporučovali Sass pro Ruby-based projekty, protože to byl první vytvoření v Ruby a dobře se používal s Ruby on Rails. Nyní, když LibSass skoro dohnal originální Sass to již není až tak relevantní rada.

To co zbožňuji na Sassu je jeho konzervativní přístup k CSS. Sass je navrhnut na základě silných zásadách: mnoho z designového přístupu přichází čistě z víry klíčového týmu, že a) přidávání funkce navíc má komplexní cenu, která musí být odůvodněna užitečností a b) by mělo být jasné co daný blok stylů dělá pouze při pouze z tohoto bloku. Sass má také mnohem ostřejší pozornost k detailu než ostatní preprocesory. Pokud je mi známo, klíčoví designéři se hluboce starají o podpoře každého koutového případu CSS kompatibility a starají se o to, aby bylo každé obecné chování konzistentní.

Jinými slovy, Sass není preprocesor zaměřen na příjemně hloupé rádoby programátory jako mě přidáním mimořádné funkce na vrcholu jazyka, který není určen na podporu logických případů použití. Je to software zaměřený na řešení aktuálních problémů, pomáhat poskytnout užitečné funkce pro CSS kde CSS zaostává.

Preprocesory stranou, měli bychom také zmínit postprocesory, které obdržely váznamné boom v několika posledních měsících. A to především díky [PostCSS](https://github.com/postcss/postcss) a [cssnext](https://cssnext.github.io/). Postprocesory jsou do značné míry rovnocenné k preprocesorům až na to, že neposkytují nic jeného než CSS syntaxi zítřka.

Můžete je brát jako polyfill pro nepodporované CSS funkce. Například byste psali proměnné jak je popsáno ve [CSS specifikaci](http://dev.w3.org/csswg/css-variables/), poté zkompilovali své styly pouze postprocessorem, abyste našli každou proměnnou a ta byla nahrazena její hodnotou, jako by to udělal Sass.

Nápad za postprocesory je že jednou budou prohlížeče podporovat nové funkce (například CSS proměnné), postprocesory je nezkompilují a nenechají je být, ale nechají prohlížeče ať se starají.

Zatímco poskytování zítřejší syntaxe už dnes je něco opravdu ušlechtilý nápad, musím říci, že pořád preferuji používání Sassu pro většinu věcí. Každopádně jsou tu nějaké případy kde věřím, že jsou postprocesory více vhodné než-li Sass a tak podobně, například CSS prefixování, ale k tomu se vrátíme.

While providing tomorrow’s syntax today is something of a noble idea, I have to say I still prefer using Sass for most tasks. However, there are some occasions where I believe postprocessors are more suited than Sass and the like - CSS prefixing for instance - but we’ll get back to this.

###### Další četba

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)
