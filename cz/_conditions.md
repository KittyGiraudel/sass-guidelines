
# Podmíněné příkazy

Pravděpodobně již víte, že Sass poskytuje podmíněné příkazy pomocí `@if` a `@else` direktiv. V běžných stylech nejsou podmíněné příkazy potřeba, ledaže máte střední až velmi komplexní řešení. Ve skutečnosti existují hlavně pro knihovny a frameworky.

Každopádně, pokud se někdy ocitnete v situaci, kdy je budete využívat, respektujte, prosím, následující zásady:

* Žádné závorky, pokud nejsou nezbytné;
* Vždy mějte prázdný řádek před `@if`;
* Vždy ukončete řádek po otevírací závorce (`{`);
* `@else` příkaz mějte na stejném řádku, jako předchozí uzavírací závorka (`}`).
* Vždy mějte nový prázdný řádek za poslední uzavírací závorkou (`}`), pokud není na dalším řádku uzavírací závorka (`}`).

{% include snippet.html path="conditions/01" file="index" %}

Pokud testujete nepravdivé hodnoty, vždy použijte klíčové slovo `not` spíše než testování oproti `false` nebo `null`.

{% include snippet.html path="conditions/02" file="index" %}

Vždy dávejte část s proměnnou na levou stranu příkazu a (ne)očekávaný výsledek na stranu pravou. Obrácené podmíněné příkazy jsou často obtížně čitelné, zvláště pro nezkušené vývojáře.

{% include snippet.html path="conditions/03" file="index" %}

Při použití podmíněného příkazu v rámci funkce pro vrácení rozdílného výsledku na základě nějaké podmínky se vždy ujistěte, že funkce obsahuje `@return` také mimo jakýkoliv podmíněný blok.

{% include snippet.html path="conditions/04" file="index" %}
