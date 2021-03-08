
## Instruções condicionais

Provavelmente já sabem que Sass fornece instruções condicionais através das diretivas `@if` e `@else`. A menos que possuam alguma lógica média ou altamente complexa no vosso código, não há necessidade para instruções condicionais nas vossas folhas de estilo do dia a dia. Na verdade, estas instruções existem maioritariamente para bibliotecas e _frameworks_.

De qualquer forma, se alguma vez necessitarem delas, por favor respeitem as seguintes diretrizes:

* Não usar parêntesis exceto quando necessário;
* Colocar sempre uma linha em branco antes de um `@if`;
* Colocar sempre uma linha em branco após abrir chavetas (`{`);
* Colocar a instrução `@else` na mesma linha que o fecho das chavetas anteriores (`}`);
* Colocar sempre uma linha em branco após fechar as últimas chavetas (`}`), a menos que a linha seguinte seja uma chaveta de fecho (`}`).

{% include snippets/conditions/01/index.html %}

Quando se testa um valor falso, usem sempre a palavra-chave `not` ao invés de testar contra `false` ou `null`.

{% include snippets/conditions/02/index.html %}

Quando se usa instruções condicionais dentro de uma função para devolver um resultado diferente baseado nalguma condição, certifiquem-se que a função ainda possui uma instrução `@return` fora de qualquer bloco condicional.

{% include snippets/conditions/03/index.html %}

Quando se utilizam expresões condicionais dentro de uma função para retornar um resultado diferente baseado numa condição, certifiquem-se que a função devolve sempre uma expressão `@return` fora de qualquer bloco condicional.

{% include snippets/conditions/04/index.html %}
