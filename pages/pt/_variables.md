
## Variáveis

As variáveis são a essência de qualquer linguagem de programação. Elas permitem-nos reutilizar valores sem ter que os copiar constantemente. Mais importante ainda, elas permitem-nos actualizar um valor facilmente. Acabou-se a procura e substituição de valores manualmente.

No entanto o CSS não é mais do que um cesto com todos os vossos ovos. Ao contrário de muitas outras linguagens, não há verdadeiros contextos no CSS. Como tal, temos de prestar atenção aos riscos de adicionar variáveis pois podemos entrar em conflicto com variáveis existentes.

O meu conselho passa por apenas criar variáveis quando estas fazem sentido. Não inicializer variáveis só porque sim, isso não ajudará. Uma nova variável deve ser criada quando acontece os seguintes critérios:

* o seu valor é repetido pelo menos duas vezes;
* o seu valor provavelemnte irá ser atualizado, pelo menos uma vez;
* todas as ocorrências do seu valor, estã diretamente ligadas à variável (por exemplo, não ser uma coicidência).

Basicamente, não vale a pena declarar uma variável que nunca irá ser atualizada ou que apenas irá ser usada uma vez.

### Contextos

O contexto das variáveis no Sass mudou ao longo dos anos. Até muito recentemente, as declarações de variáveis dentro de rulesets e  outros contextos eram locais por omissão. No entanto quando já havia uma variável global com o mesmo nome, a declaração local iria alterar o valor da variável global. Desde a versão 3.4, o Sass lida corretamente com o conceito de contextos, e cria uma variável local em vez de substituir a global.

A documentação fala na *ocultação de variáveis globais*. Quando se declara uma variável, que já existe no contexto global, dentro de um contexto local (selector, função, mixin…), diz-se que a variável local está a *ocultar* a variável global. Basicamente substitui o seu valor dentro do contexto local.

O enxerto de código seguinte explica o conceito de *ocultação de variável*

{% include snippets/variables/01/index.html %}

### Flag `!default`

Quando se está a construir uma biblioteca, uma *framework*, um sistema de grelhas ou qualquer pedaço de código Sass com a intenção de ser distribuido e usado por programadores externos, todas as variáveis de configuração devem ser definidas com o marcador `!default` de forma a que possam ser substituidas.

{% include snippets/variables/02/index.html %}

Graças a isto, um programador pode definir a sua própria variável `$baseline` *antes* de importar a vossa biblioteca, sem que esta substitua o valor da vossa variável.

{% include snippets/variables/03/index.html %}

### Flag `!global`

O marcador `!global` deve ser usado apenas quando se vai substituir uma variável global a partir de um contexto local. Quando se define uma variável num contexto global, o uso deste marcador deve ser omitido.

{% include snippets/variables/04/index.html %}

### Variáveis multiplas ou mapas

Existem vantagens em usar mapas em vez de múltiplas variáveis. A principal é poder iterar um mapa, algo que não é possivel com variáveis distintas.

Outra vantagem de usar um mapa, é a habilidade de criar uma função de leitura para providenciar uma API mais amigável. Por exemplo, considerem o seguinte código Sass:

{% include snippets/variables/05/index.html %}
