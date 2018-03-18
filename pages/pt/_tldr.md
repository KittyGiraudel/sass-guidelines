
# Longo Demais; Não Li

Essas diretrizes são longas e, de vez em quando, é bom tê-las resumidas. Portanto, abaixo segue o resumo.

## Princípios chaves

* Ter um guia de estilo diz a respeito de ter **consistência**. Se você discorda com algumas de nossas regras, está tudo bem, se você é consistente. [↩](#porque-um-guia-de-estilo)
* O Sass deve ser mantido tão simples quanto ele é. Portanto, evite criar sistemas complexos, a não ser que seja absolutamente necessário. [↩](#princpios-chave)
* Mantenha em mente que, às vezes, o princípio *KISS* (Keep It Simple, Stupid) é melhor que o *DRY* (Don’t Repeat Yourself). [↩](#princpios-chave)

## Sintaxe e formatação

* Identação é feita com com dois (2) espaços, sem tabulações. [↩](#formatao-e-sintaxe)
* Linhas devem ser, tanto quanto possível, menores que 80 caracteres. Sinta-se à vontade para dividi-las em várias linhas, quando necessário. [↩](#formatao-e-sintaxe)
* O CSS deve ser bem escrito e, possivelmente, seguindo o [CSS Guidelines](http://cssguidelin.es) de Harry Roberts. [↩](#formatao-e-sintaxe)
* Espaços em branco são de grátis, então, use-o para separar itens, regras e declarações. Portanto, não hesite em deixar linhas em branco, afinal, não machuca ninguém. [↩](#formatao-e-sintaxe)

### Strings

* Declarar a diretiva `@charset` no topo da folha de estilos é altamente recomendado. [↩](#codificao)
* A não ser que aplicadas como identificadores CSS, strings devem ser envoltas em aspas simples. Além disso, URLs também devem ser envoltas em aspas. [↩](#strings-como-valores-CSS)

### Números

* O Sass não faz distinção entre números inteiros e pontos flutuantes, então zeros (0) a direita devem ser omitidos. Contudo, zeros (0) a esquerda ajudam na legibilidade e devem ser adicionados. [↩](#zeros)
* Valores nulos (0) não devem ter unidades de medidas. [↩](#unidades)
* Manipulação de unidades devem ser pensadas como operações aritméticas e, não como operações de strings. [↩](#unidades)
* A fim de melhorar a legibilidade, cálculos complexos devem estar envoltos em parênteses. Além do mais, operações matemáticas complexas devem ser divididas em pedaços menores. [↩](#clculos)
* Números mágicos dificultam a manutenção do código e devem ser evitados ao máximo. Se hesitar, extensivamente explique este valor questionável. [↩](#nmeros-mgicos)

### Colors

* Cores devem ser expressas com valores HSL quando possível, então, RGB e depois valores hexadecimais (minúsculos e encurtados). Além disso, keywords devem ser evitadas. [↩](#formatos-de-cores)
* Prefira `mix(..)`, invés de `darken(..)` e `lighten(..)`, quando clareando ou escurecendo uma cor. [↩](#clarear-e-escurecer-cores)

### Listas

* A menos que usadas como um mapeamento direto para valores CSS separados com espaço, listas devem ser separadas com vírgulas. [↩](#listas)
* Envoltá-las em parênteses deve ser considerado, para melhorar a legibilidade. [↩](#listas)
* Listas em única linha não devem ter vírgula ao final, diferente de listas com múltiplas linhas. [↩](#listas)

### Mapas

* Mapas com mais de um par, devem ser escritos em múltiplas linhas. [↩](#mapas)
* Para ajudar a manutenção, o último par do mapa deve ter vírgula no final. [↩](#mapas)
* Keys que são strings devem ser envoltas em aspas, como qualquer outra string. [↩](#mapas)

### Classificação de declarações

* O sistema usado para classificar declarações (alfabético, por tipo e etc.) não importa, contanto que seja consistente. [↩](#ordenar-as-declaraes)

### Aninhamento de seletores

* Evite aninhamento de seletores quando não é necessário (maioria dos casos). [↩](#seletores-aninhados)
* Use aninhamento de seletores para pseudo-classes e pseudo-elementos. [↩](#seletores-aninhados)
* Media queries também podem ser aninhadas dentro de seus seletores mais importantes. [↩](#seletores-aninhados)

## Convenções de nomeclatura

* É melhor se apegar as convenções de nomeclatura CSS (exceto algumas) que usam letras minúsculas e delimitação com hífen. [↩](#convenes-de-nomenclatura)

## Comentando

* CSS é uma linguagem complicada, então, não hesite em escrever longos comentários sobre coisas que parecem (ou são) esquisitas. [↩](#comentrios)
* Para variáveis, funções, mixins e placeholders usando uma API pública, use comentários do SassDoc. [↩](#documentao)

## Variáveis

* Não use a flag `!default` para variáveis que são parte de uma API pública, as quais podem ser seguramente alteradas. [↩](#flag-default)
* Não use a flag `!global` no escopo raíz, já que isso pode se tornar uma violação da sintaxe Sass, no futuro. [↩](#flag-global)

## Extend

* Prefira extender placeholders e, não seletores CSS. [↩](#extend)
* Extenda placeholders o menos possível, a fim de evitar efeitos colaterais. [↩](#extend)
