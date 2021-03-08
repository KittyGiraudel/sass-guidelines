
## Podmíněné příkazy

Pravděpodobně již víte, že Sass poskytuje podmíněné příkazy pomocí `@if` a `@else` direktiv. V běžných stylech nejsou podmíněné příkazy potřeba, ledaže máte střední až velmi komplexní řešení. Ve skutečnosti existují hlavně pro knihovny a frameworky.

Každopádně, pokud se někdy ocitnete v situaci, kdy je budete využívat, respektujte, prosím, následující zásady:

* Žádné závorky, pokud nejsou nezbytné;
* Vždy mějte prázdný řádek před `@if`;
* Vždy ukončete řádek po otevírací závorce (`{`);
* `@else` příkaz mějte na stejném řádku, jako předchozí uzavírací závorka (`}`).
* Vždy mějte nový prázdný řádek za poslední uzavírací závorkou (`}`), pokud není na dalším řádku uzavírací závorka (`}`).

{% include snippets/conditions/01/index.html %}

Pokud testujete nepravdivé hodnoty, vždy použijte klíčové slovo `not` spíše než testování oproti `false` nebo `null`.

{% include snippets/conditions/02/index.html %}

Vždy dávejte část s proměnnou na levou stranu příkazu a (ne)očekávaný výsledek na stranu pravou. Obrácené podmíněné příkazy jsou často obtížně čitelné, zvláště pro nezkušené vývojáře.

{% include snippets/conditions/03/index.html %}

Při použití podmíněného příkazu v rámci funkce pro vrácení rozdílného výsledku na základě nějaké podmínky se vždy ujistěte, že funkce obsahuje `@return` také mimo jakýkoliv podmíněný blok.

{% include snippets/conditions/04/index.html %}
