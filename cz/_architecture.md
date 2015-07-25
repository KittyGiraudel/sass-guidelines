
# Architektura

Navrhnout architekturu CSS projektu je pravděpodobně jedna z nejvíce těžkých věcí, kterou budete muset v životě projektu udělat. Udržovat návrh konzistentní a smysluplný je ještě těžší.

Naštěstí, jedna z hlavních výhod používání CSS preprocesoru je schopnost rozdělit codebase do několika souborů bez dopadu na výkon (jako dělá CSS direktiva `@import`). Díky přetížení Sass `@import` direktiv je naprosto bezpečné (a vlastně i doporučované) používat tak mnoho souborů, kolik je ve vývoji nezbytné a všechno kompilovat do jednoho stylu až dojde na produkci.

Nad vším tímhle nemohu dostatečně zdůraznit potřebu složek, dokonce i u malých projektů. Doma také nedáváte každý list papíru do jedné a té samé krabice. Používáte složky; jednu pro dům/byt, jednu pro banku, jednu pro účty, a tak dále. Není tedy žádný důvod dělat to jinak při strukturování CSS projektu. Rozdělte codebase do smyspluplně rozdělených složek tak, ať je jednoduché najít věci později, když příjdete zpátky do kódu.

Je tu hodně populárních architektur pro CSS projekty: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/)-like, [Foundation](http://foundation.zurb.com/)-like... Všechny mají své přednosti, klady a zápory.

Já sám používám přístup shodou okolností docela podobný k [SMACSS](https://smacss.com/) od [Jonathan Snook](http://snook.ca/), který se zaměřuje na udržování věcí jednoduchých a jasných.

<div class="note">
  <p>Naučil jsem se, že architektura je většinou velmi specifická pro daný projekt. Neváhejte jí tedy kompletně zrušit, nebo upravit navrhované řešení tak, aby jste se vypořádali se systémem, který sedí vašim potřebám.</p>
</div>

###### Další četba

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)

## Komponenty

Je tu podstatný rozdíl mezi dělání to *funkční* a dělání to *dobře*. Znovu, CSS je tak trochu nepořádný jazyk <sup>[nutná citace]</sup>. Čím méně CSS máme, tím lépe. Nechceme se zabývat s megybyty CSS kódu. Chcete li zachovat styly krátké a efektivní&mdash;a to pro vás nebude žádné překvápko&mdash;je většinou dobrý nápad přemýšlet o rozhraní jako o kolekci komponent.

Komponenty mohou být cokoliv, tak dlouho dokud:

* dělají pouze jednu věc;
* jsou znovu použitelné napříč projektem;
* jsou nezávislé.


Například vyhledávací formulář by měl být považován za komponentu. Měl by být znovu použitelný, na různých místech, na různých stránkách, v rozdílných situacích. Neměl by záviset na pozici v DOM (patička, postranní panel, hlavní obsah...).

Most of any interface can be thought of as little components and I highly recommend you stick to this paradigm. This will not only shorten the amount of CSS needed for the whole project, but also happens to be much easier to maintain than a chaotic mess where everything is flustered.

## Vzor 7-1

Zpátky k architektuře, můžeme? Obvykle pracuji s tím, čemu říkám *vzor 7-1*: 7 složek, 1 soubor. V podstatě máte všechny své partials nacpané do 7 různých složek a jeden soubor na kořenové úrovni (obvykle pojmenován `main.scss`) je všechny importuje do CSS stylu.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

A samozřejmě:

* `main.scss`

{% include images/wallpaper.html %}

Ideálně můžeme přijít s něčím jako je toto:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Soubory následují stejné jmenné konvence jako je popsáno výše: jsou oddelene-pomlckou.</p>
</div>

### Složka base

Složka `base/` obsahuje to, co bychom mohli nazvat často používaný kód pro projekt. Můžete tam najít resetovací soubor, nějaké pravidla pro typografii a pravděpodobně styl (který nazývám `_base.scss`), který definuje nějaké standardní styly pro obyčejně používané HTML elementy.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

### Složka Layout

Složka `layout/` obsahuje vše, co se podílí na rozvržení stránky nebo aplikace. Tato složka může obsahovat styly pro hlavní části stránky (hlavička, patička, navigace, postranní panel...), grid systém nebo dokonce CSS styly pro všechny formuláře.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>Složka <code>layout/</code> může být také nazývána <code>partials/</code>, záleží co preferujete.</p>
</div>

### Složka components

Pro menší komponenty tu je složka `components/`. Zatímco `layout/` je *makro* (definuje globální wireframe), `components/` je více zaměřený na widgety. Obsahuje všechny druhy specifických modulů jako slider, loader, widget a v podstatě cokoliv v tomto směru. V `components/` je obvykle hodně souborů, protože celá stránka/aplikace by měla být převážně složena z malých modulů.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>Složka <code>components/</code> může být také nazývána <code>modules/</code>, záleží co preferujete.</p>
</div>

### Složka pages

Pokud máte styly specifické pro stránky, je nejlepší je umístit do složky `pages/`, do souboru pojmenovaného po stránce. Například není neobvyklé mít velmi specifické styly pro úvodní stránku, proto je potřeba soubor `_home.scss` ve složce `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>V závislosti na vašem procesu nasazení, tyto soubory mohou být nazývány jak chcete, abyste se vyhnuli jejich sloučení s ostatními ve výsledném stylu. Je to vážně na vás.</p>
</div>

### Složka themes

Na velkých stránkách a aplikacích není neobvyklé mít rozdílné témata. Jsou tu jistě různé způsoby, jak se vyrovnat s tématy, ale já osobně je mám rád všechny ve složce `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Toto je velmi specifické na projektu a je to pravděpodobné, že nebude v mnoha projektech.</p>
</div>

### Složka utils

Složka `utils/` shromažďuje všechny Sass nástroje a helpery použité napříč projektem. Každá globální proměnná, funkce, mixin a placeholder by tu měly být.

Pravidlem pro tuto složku je to, že by se při kompilaci neměl vypsat ani jeden řádek sám o sobě. Nejedná se o nic jiného než o Sass helpery.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (často pojmenované jako `_helpers.scss`)

<div class="note">
  <p>Složka <code>utils/</code> může být také nazývána <code>helpers/</code>, <code>sass-helpers/</code> nebo <code>sass-utils/</code>, záleží co preferujete.</p>
</div>

### Složka vendors

V neposlední řadě mnoho projektů bude mít složku `vendors/` obsahující všechny CSS soubory od externích knihoven a frameworků - Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, a tak dále. Odložení tohoto stranou do stejné složky je dobrá cesta, jak říci „Hej, tohle není ode mne, není to můj kód, není to má zodpovědnost“.

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Pokud musíte přepsat sekci nějakého vendoru, doporučuji mít 8smou složku nazvanou `vendors-extensions/`, ve které můžete mít soubory pojmenované přesně podle těch ve vendorů, které přepisují.

Například `vendors-extensions/_bootstrap.scss` je soubor obsahující všechny CSS pravidla plánované znovu deklarovat nějaké Bootstrap defaultní CSS. A to proto, aby se zabránilo editaci vendor souborů samo o sobě, což obecně nění dobrý nápad.

### Hlavní soubor

Hlavní soubor (obvykle označován `main.scss`) by měl být jediný Sass soubor z celého codebase, který nezačíná na podtržítko. Tento soubor by neměl obsahovat nic více než `@import` a komentáře.

Soubory by měly být importovány podle složky, ve které se nachází a jeden po druhém v následujícím pořadí:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

V zájmu zachování čitelnosti by měl hlavní soubor respektovat tyto pokyny:

* jeden soubor na `@import`;
* jeden `@import` na řádek;
* žádný nový řádek mezi dvěma importy ze stejné složky;
* nový řádek po posledním importu ze složky;
* vynechat přípony souborů a podtžení na začátku.

{% include snippets/architecture/02/index.html %}

Je tu ještě další způsob importování partials, který také považuji za validní. Na jednu stranu to dělá soubor více čitelným, ale na stranu druhou dělá úpravy trochu více bolestné. Každopádně, nechám vás rozhodnout se, který způsob je nejlepší - moc na tom nezáleží. Pro tento způsob by měl hlavní soubor dodržovat tyto pokyny:

* jeden `@import` na složku;
* konec řádku po `@import`;
* každý soubor na svém vlastním řádku;
* nový řádek po posledním importu ze složky;
* vynechat přípony souborů a podtžení na začátku.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>Abyste nemuseli importovat každý soubor ručně, můžete využít Ruby Sass rozšíření zvané <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, díky kterému můžete používat globální vzory v Sass <code>@import</code> jako např. <code>@import "components/*"</code>.</p>
  <p>Jak bylo řečeno, toto řešení bych nedoporučoval, jelikož importujete soubory podle abecedního pořadí, což obvykle není to co chcete, zvláště pokud se musíte vypořádat s pořadím souborů v závislosti na jazyku.</p>
</div>

## Ostudný soubor 

Zajímavý koncept, který zpopularizoval [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) a [Chris Coyier](http://css-tricks.com), který se skládá z uvedení všech CSS deklarací, hacků a věcí, na které nejsme pyšní do *ostudného souboru*. Tento soubor, který je dramaticky pojmenován `_shame.scss`, by měl být importován po ostatních souborech na konci stylu.

{% include snippets/architecture/04/index.html %}

###### Další četba

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)