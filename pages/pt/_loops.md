
## Ciclos

Visto que Sass providencia estruturas de dados complexas, tal como [listas](#listas) e [mapas](#mapas), não é surpresa fornecer também formas de iterar sobre essas entidades.

No entanto, a presença de ciclos normalmente implica lógica moderadamente complexa que provavelmente não pertence a Sass. Antes de usar um ciclo, certifiquem-se que tal faz sentido e que realmente resolve um problema.

### Each

O ciclo `@each` é definitivamente o mais usado dos três ciclos que Sass oferece. Apresenta uma API simples para iterar uma lista ou mapa.

{% include snippets/loops/01/index.html %}

Ao iterar um mapa, usem sempre `$key` e `$value` como nomes de variáveis para manter a consistência.

{% include snippets/loops/02/index.html %}

Façam também questão de respeitar as seguintes diretrizes para preservar a legibilidade:

* Colocar sempre uma linha em branco antes do `@each`;
* Colocar sempre uma linha em branco antes da chaveta de fecho (`}`) a menos que a próxima linha seja uma chaveta de fecho (`}`).

### For

O ciclo `@for` poderá ser útil quando combinado com as pseudo-classes `:nth-*` de CSS. À exceção destes cenários, é preferível um ciclo `@each` se *têm* de iterar sobre algo.

{% include snippets/loops/03/index.html %}

Usem sempre `$i` como nome de variável para manter a convenção comum e a menos que tenham boa razão para tal, nunca usem a palavra-chave `to`: usem sempre `through`. Muitos programadores não sabem que Sass oferece esta variação; usá-la poderá levar a confusão.

Também não se esqueçam de respeitar as seguintes diretrizes para preservar a legibilidade:

* Colocar sempre uma linha em branco antes do `@each`;
* Colocar sempre uma linha em branco antes da chaveta de fecho (`}`) a menos que a próxima linha seja uma chaveta de fecho (`}`).

### While

O ciclo `@while` não possui absolutamente nenhum uso real num projeto de Sass, especialmente porque não é possível quebrar o ciclo por dentro. **Não usar**.
