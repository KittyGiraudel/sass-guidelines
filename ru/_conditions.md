
# Условные операторы

Вы уже, наверное, знаете, что Sass предоставляет условные операторы, такие как `@if` и `@else`.  

Тем не менее, если вам когда-нибудь понадобится использовать их, пожалуйста, следуйте следующим рекоммендациям:

* Никаких скобок, покуда они не обязательны;
* Всегда пустая строка перед `@if`;
* Всегда разрыв строки после открывающей фигурной скобки (`{`);
* `@else` на одной строке с предыдущей закрывающей скобкой (`}`);
* Всегда новая пустая строка после последней закрывающей скобки (`}`), если на следующей строке не стоит закрывающая скобка (`}`).

{% include snippets/conditions/01/index.html %}

При тестировании на отрицающее значение, всегда используйте ключевое слово `not`, а не проверки на `false` или `null`.

{% include snippets/conditions/02/index.html %}

<!-- TODO translate -->Always put the variable part on the left side of the statement, and the (un)expected result on the right. Reversed conditional statements often are more difficult to read, especially to unexperienced developers.

{% include snippets/conditions/03/index.html %}

При использовании условных операторов внутри функции для возврата другого результата, основанного на некоторых условиях, убедитесь, что `@return` находится вне условных операторов.

{% include snippets/conditions/04/index.html %}
