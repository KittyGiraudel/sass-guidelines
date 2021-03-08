
## Cykly

Protože Sass umožňuje komplexní datové struktury jako [seznamy](#seznamy) a [mapy](#mapy), není až takové překvapení, že také umožňuje tyto struktury procházet.

Každopádně, přítomnost cyklů obvykle implikuje středně složitou logiku, která do Sassu pravděpodobně nepatří. A tedy proto se před tím, než-li cyklus použijete, ujistěte, že dává smysl a opravdu řeší problém.

### Each

Cyklus `@each` je definitivně nejpoužívanější z Sass cyklů. Poskytuje čisté API pro procházení seznamu nebo mapy.

{% include snippets/loops/01/index.html %}

Pokud procházíte mapu, vždy používejte `$key` a `$value` jako jména proměnných, abyste zachovali konzistentnost.

{% include snippets/loops/02/index.html %}

Také se ujistěte, že dodržujete tyto pokyny, pro zachování čitelnosti:

* Nový řádek vždy před `@each`;
* Nový řádek vždy po ukončující závorce (`}`), tedy pokud další řádek není ukončující závorka (`}`).

### For

Cyklus `@for` může být užitečný, pokud kombinujete CSS pseudo třídu `:nth-*`. Kromě tohoto případu preferujte spíše cyklus `@each`, pokud *musíte* něco procházet.

{% include snippets/loops/03/index.html %}

Vždy používejte `$i` jako jméno proměnné, abyste se drželi obecné konvence, tedy pokud nemáte jiný dobrý důvod proč tak neučinit. Nikdy nepoužívejte klíčové slovo `to`, vždy používejte `through`. Mnoho vývojářů ani neví, že Sass má tuto možnost a používání může vést k záměně.

Také respektujte tyto pokyny pro zachování čitelnosti:

* Nový řádek vždy před `@for`;
* Nový řádek vždy po ukončující závorce (`}`), tedy pokud další řádek není ukončující závorka (`}`).

### While

Cyklus `@while` nemá v Sassu absolutně žádné reálné použití, zvláště když tu není žádná možnost, jak breaknout cyklus zevnitř. **Nepoužívejte ho**.
