
## Jmenné konvence

V této sekci se nebudeme zabývat nejlepšími jmennými CSS konvencemi pro udržovatelnost a rozsah. Nejen že je to jen a jen na vás, ale je to také mimo oblast Sass manuálu. Navrhuji však ty, které jsou doporučeny v [CSS Guidelines](https://cssguidelin.es/#naming-conventions).

Je tu však pár věcí, které můžete v Sassu pojmenovat a je důležité je pojmenovat dobře, takže celý codebase bude vypadat konzistentní a bude snadno čitelný:

* proměnné;
* funkce;
* mixiny.

Sass placeholdery jsou z tohoto seznamu úmyslně vynechány, jelikož mohou být považovány za běžné CSS selektory a proto na ně platí stejné vzory pro název jako pro třídy.

Pokud jde o proměnné, funce a mixiny, držme se něčeho velmi *ve stylu CSS*: **malé písmo oddělené pomlčkami** a především smysluplného.

{% include snippets/naming/01/index.html %}

**Další četba:**

* [Jmenné konvence z CSS Guidelines](https://cssguidelin.es/#naming-conventions)

### Konstanty

Pokud jste náhodou vývojáři frameworku, nebo píšete knihovnu, pravděpodobně se potýkáte s proměnnými, které nejsou zamýšleny tak, aby se daly upravovat: konstanty. Bohužel (nebo naštěstí?) Sass neumožňuje žádnou cestu pro takovouto věc, takže si musíme vystačit s jmennými konvencemi.

Tak jako pro mnoho jazyků, doporučuji proměnné, pokud jsou konstantami, psát velkým písmem. Nejen že je to velmi stará konvence, ale také snadno poznáte, že je daná proměnná právě konstantou, jelikož je v kontrastu s proměnnými psanými malým písmem a oddělenými pomlčkami.

{% include snippets/naming/02/index.html %}

**Další četba:**

* [Dealing With Constants in Sass](https://www.sitepoint.com/dealing-constants-sass/)

### Namespace

Pokud máte v úmyslu svůj Sass kód rozšířit, v případě knihovny, frameworku, grid systému nebo čehokoli, pravděpodobně zvažujete použít namespace na všechny vaše proměnné, funkce, mixiny a placeholdery, takže nebude moci dojít ke konfliktu s kódem někoho jiného.

Například, pokud pracujete na projektu *Sassy Unicorn*, se kterým budou moci pracovat vývojáři z celého světa (kdo by ne, že ano?), můžete zvážit použít `su-` jako namespace. Je to dost specifické aby se zabránilo jakémukoli kolidování názvu a krátké dost na to, aby to nebolelo psát.

{% include snippets/naming/03/index.html %}

<div class="note">
  <p>Poznámka: automatické namespacy budou definitivně designový cíl pro připravovaný <code>@import</code> od Sassu 4.0. Čím je blíže k uskutečnění, tím je méně a méně užitečné dělat namespace ručně. Případně ručně namespacované knihovny mohou být složitější na použití.</p>
</div>

**Další četba:**

* [Please Respect the Global CSS Namespace](https://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
