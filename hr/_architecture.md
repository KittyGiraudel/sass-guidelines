
# Arhitektura

Odrediti arhitekturu CSS projekta jedan je od najtežih zadataka u životu projekta. Održavati konzistentnost i značaj arhitekture još je teže. 

Na svu sreću, jedna od osnovnih prednosti korištenja CSS preprocesora je mogućnost razdvajanja baze koda na višestruke dokumente bez utjecaja na performancu (putem `@import` direktive). Zahvaljujući Sass-ovoj implementaciji `@import` direktive potpuno je sigurno (i preporučeno) koristiti koliko god je potrebno dokumenata pri razvoju a za produkciju sve skupa kompilirati u jedinstveni stylesheet.

Povrh toga, nemogu dovoljno istaknuti potrebu za korištenjem mapa (foldera), čak i na malim projektima. Kada ste kod kuće ne stavljate svaki komad papira u istu kutiju. Za to koristite različite pretince; jedan za kuću/stan, drugi za banku, treći za račune itd. Nema razloga činiti drugačije pri strukturiranju CSS projekta. Razdvojite bazu koda u značenjem označene mape tako da kasnije lakše možete pronaći stvari u kodu.

Postoji dosta popularnih arhitektura za CSS projekte: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/)-like, [Foundation](http://foundation.zurb.com/)-like...
Svi oni imaju svoje zakonitosti, prednosti i mane. 

Osobno koristim pristup koji je vrlo sličan [SMACSS](https://smacss.com/) autora [Jonathana Snooka](http://snook.ca/), koji je fokusiran na održavanju jednostavnosti i očitosti. 

<div class="note">
  <p>Naučio sam kako je arhitektura većinu puta vrlo specifična ovisno o projektu. Slobodno potpuno odbacite ili prilagodite predložena rješenja kako bi stvorili sustav koji odgovara vašim potrebama.</p>
</div>

###### Further readings

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)

## Komponente

Postoji velika razlika između onoga što *radi* i onoga što *dobro radi*. Ponavljam, CSS je zbrkan jezik <sup>[potreban citat]</sup>. Što manje CSS-a imamo, to bolje. Nije nam u interesu baviti se sa megabajtima CSS koda. Kako bi osigurali da su naši stylesheet-ovi kratki i efikasni&mdash;sigurno vas neću iznenaditi&mdash;uobičajeno je dobra ideja promatrati korisničko sučelje kao kolekciju komponenata.

Sve može biti komponenta dok god:

* radi jednu stvar isključivo;
* je za višekratnu upotrebu i više puta se koristi kroz projekt;
* je neovisna.

Na primjer, forma za pretragu trebala bi se tretirati kao komponenta. Ona mora biti više puta upotrebljiva na raznim pozicijama, na raznim stranicama i u raznim situacijama. Ona ne smije ovisiti o poziciji u DOM-u (footer, sidebar, main content...).  

Većina elemenata sučelja mogu se promatrati kao malene komponente te toplo preporučam da se držite te paradigme. Taj pristup ne samo da će smanjiti količinu potrebnog CSS koda za cijeli projekt, nego će biti puno lakše održavati nego kaotični nered gdje je sve isprepleteno.

## Uzorak 7-1

Vratimo se na arhitekturu. Uobičajeno krećem sa *7-1 uzorkom*: 7 mapa, 1 dokument. U osnovni, svi svi parcijalni dokumenti slažu se u 7 različitih mapa, sa jednim dokumentom u na root razini (obično naziva `main.scss`) koji uvozi sve parcijalne dokumente i kompilira ih u jedinstveni CSS stylesheet. 

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

I naravno:

* `main.scss`

{% include images/wallpaper.html %}

Idealno, mogli bi završiti ovako:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Dokumenti prate istu konvenciju imenovanja opisanu gore: odvojeni su crticom</p>
</div>

### Base mapa

`base/` mapa sadrži ono što bi mogli nazvati boilerplate kod za projekt. U toj mapi najčešće se nalazi reset dokument, određena tipografska pravila te vjerovatno i  stylesheet (koji sam navikao nazivati `_base.scss`), koji definira neke osnovne stilove za učestalo korištene HTML elemente. 

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

### Layout mapa

`layout/` mapa sadrži sve ono što ima ulogu u raspoređivanju stranice ili aplikacije. Mapa bi mogla sadržavati stylesheet-ove za glavne dijelove stranice (header, footer, navigation, sidebar...), mrežu (grid sustav) ili čak CSS stilove za sve forme. 

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p><code>layout/</code> mapa također bi se mogla nazvati <code>partials/</code>, ovisno o preferencama.</p>
</div>

### Components mapa

Za manje komponente služi `components/` mapa. Dok je `layout/` mapa *macro* (definira globalnu mrežu), `components/` je više fokusiran na widgete. Sadrži sve vrste specifičnih modula poput slider-a, loader-a, widget-a, i slične stvari. Obično `components/` mapa sadrži velik broj dokumenata kako se cijela stranica/aplikacije većinom sastoji od sitnih modula. 

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p> <code>components/</code> mapa mogla bi se zvati <code>modules/</code>, ovisno o preferencama.</p>
</div>

### Pages mapa


Ukoliko imate specifične stilove za određene stranice, najbolje ih je spremiti u `pages/` mapu, u dokument koji ima isti naziv kao stranica. Na primjer, nije neobično imati vrlo specifične stilove za početnu stranicu pa je tako potrebno imati `_home.scss/` dokument u `pages/` mapi. 

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Ovisno o deployment procesu, ovi dokumenti mogli bi se pozvati pojedinačno te izbjeći spajanje sa glavnim stylesheetom. Sve ovisi o vama.</p>
</div>

### Themes mapa

Na velikim stranicama i aplikacijama nije neobično imati različite teme. Postoji više načina rada s temama no ja osobno volim sve spremiti u `themes/` mapu. 

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Vrlo je specifično te ovisi o projektu, velika je šansa da na mnogim projetima uopće ne postoji.</p>
</div>

### Utils mapa

`utils/` mapa sadrži sve Sass alate i helpere koji se koriste u projektu. Sve globalne varijable, funkcije, mixini i placeholderi trebali bi biti ovdje. 

Ova mapa u pravilu ne bi trebala proizvoditi niti jednu liniju CSS koda kada se kompilira. Tu nije ništa drugo no Sass helperi.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequently named `_helpers.scss`)

<div class="note">
  <p><code>utils/</code> mapa mogla bi se nazvati <code>helpers/</code>, <code>sass-helpers/</code> ili <code>sass-utils/</code>, ovisno o preferencama.</p>
</div>

### Vendors mapa

Zadnje no ne i nevažno, većina projekata imati će `vendors/` mapu koja sadrži sve CSS dokumente vanjskih biblioteka i framework-a – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered itd. Umetanje tih dokumenata u isti folder dobar je način da se kaže „Ovaj kod nisam ja napisao, nije moja odgovornost”.

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Ukoliko morate nadglasati (overwrite-ati) dio nekog vendor-a, preporučam da stvorite osmi folder naziva `vendors-extensions/` u kojemu su imena dokumenata identična imenima koje nadglasavate. 

Na primjer, `vendors-extensions/_bootstrap.scss` dokument je koji sadrži sva CSS pravila sa svrhom ponovnog deklariranja dijela Bootstrap-ovog predefiniranog CSS-a. Ideja je da se izbjegne uređivanje vendor-ovog dokumenta što generalno nije dobra ideja. 

### Main dokument

Main dokument (obično naziva `main.scss`) trebao bi biti jedini Sass dokument iz cijele baze koda čiji naziv ne počinje sa donjom crtom. Dokument ne bi trebao sadržavati ništa osim `@import`-a i komentara.   

Dokumenti bi trebali biti uvezeni po redosljedu mapa u kojima su smješteni, jedan iza drugog sljedećim poretkom: 

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Kako bi se održava čitljivost, main dokument trebao bi poštovati ove vodilje: 

* jedan dokument po `@import`-u;
* jedan `@import` po liniji;
* izostanak nove linije između dva import-a iz iste mape;
* nova linija nakon zadnjeg import-a iz određene mape;
* ekstenzije dokumenata i donje crte istostavljaju se.

{% include snippets/architecture/02/index.html %}

Postoji još jedan način uvoza parcijalnih dokumenata koji smatram validnim. Dobro je što taj način čini dokument čitljivijim. S druge strane, ažuriranje samog dokumenta malo je teže. Bilo kako bilo, dopuštam Vama da odlučite što je najbolje za Vas, nije toliko velika razlika. Za ovaj način uvoza parcijalnih dokumenata main dokument trebao bi poštovati ove vodilje:

* jedan `@import` po mapi (folderu);
* jedan `@import` po liniji;
* svaki dokument u svoj red;
* nova linija nakon zadnjeg import-a iz određene mape;
* ekstenzije dokumenata i donje crte istostavljaju se.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>Kako ne biste morali uvoziti svaki dokument ručno, postoji ekstenzija za Ruby Sass naziva <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, koja omogućava korištenje glob uzorka u Sass-ovoj <code>@import</code> direktivi na ovaj način: <code>@import "components/*"</code>.</p>
  <p>No taj način ne bih preporučio jer se dokumenti uvoze abecednim putem što obično nije ono što želimo, pogotovo kada se bavimo jezikom koji je ovisan o source order-u (redosljedu).</p>
</div>

## Shame dokument

Postoji interesantan koncept koji su popularizirali [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) i [Chris Coyier](http://css-tricks.com) koji kaže kako bi sve CSS deklaracije, hack-ovi i stvari na koje nismo ponosni trebalo staviti u *shame dokument*. Taj dokument dramatičnog naziva `_shame.scss` uvozi se poslije svih drugih dokumenata, na samom kraju stylesheet-a. 

{% include snippets/architecture/04/index.html %}

###### Further readings

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
