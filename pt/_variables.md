
# Variáveis

As variáveis são a essência de qualquer linguagem de programação. Elas permitem-nos reutilizar valores sem ter que os copiar constantemente. Mais importante ainda, elas permitem-nos actualizar um valor facilmente. Acabou-se a procura e substituição de valores manualmente.

No entanto o CSS não é mais do que um cesto com todos os vossos ovos. Ao contrário de muitas outras linguagens, não há verdadeiros contextos no CSS. Como tal, temos de prestar atenção aos riscos de adicionar variáveis pois podemos entrar em conflicto com variáveis existentes.

O meu conselho passa por apenas criar variáveis quando estas fazem sentido. Não inicializer variáveis só porque sim, isso não ajudará. Uma nova variável deve ser criada quando acontece os seguintes critérios:

* o seu valor é repetido pelo menos duas vezes;
* o seu valor provavelemnte irá ser actualizado, pelo menos uma vez;
* todas as ocorrências do seu valor, estã directamente ligadas à variável (por exemplo, não ser uma coicidência).

Basicamente, não vale a pena declarar uma variável que nunca irá ser actualizada ou que apenas irá ser usada uma vez.






## Contextos

O contexto das variáveis no Sass mudou ao longo dos anos. Até muito recentemente, as declarações de variáveis dentro de rulesets e  outros contextos eram locais por omissão. No entanto quando já havia uma variável global com o mesmo nome, a declaração local iria alterar o valor da variável global. Desde a versão 3.4, o Sass lida correctamente com o conceito de contextos, e cria uma variável local em vez de substituir a global.

A documentação fala na *ocultação de variáveis globais*. Quando se declara uma variável, que já existe no contexto global, dentro de um contexto local (selector, função, mixin...), diz-se que a variável local está a *ocultar* a variável global. Basicamente substitui o seu valor dentro do contexto local.

O enxerto de código seguinte explica o conceito de *ocultação de variável*

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Initialize a global variable at root level.
// In this case, the `!global` flag is optional.
$variable: 'initial value' !global;

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Create a local variable that shadows the global one.
  $variable: 'local value';

  // Include the mixin: it overrides the global variable.
  @include global-variable-overriding;

  // Print the variable's value.
  // It is the **local** one, since it shadows the global one.
  content: $variable;
}

// Print the variable in another selector that does no shadowing.
// It is the **global** one, as expected.
.other-local-scope::before {
  content: $variable;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Initialize a global variable at root level.
// In this case, the `!global` flag is optional.
$variable: 'initial value' !global

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
  // Create a local variable that shadows the global one.
  $variable: 'local value'

  // Include the mixin: it overrides the global variable.
  +global-variable-overriding

  // Print the variable's value.
  // It is the **local** one, since it shadows the global one.
  content: $variable

// Print the variable in another selector that does no shadowing.
// It is the **global** one, as expected.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>






## `!default` flag

Quando se está a construir uma biblioteca, uma framework, um sistema de grelhas ou qualquer pedaço de código Sass com a intenção de ser distribuido e usado por programadores externos, todas as variáeis de configuração devem ser definidas com o marcador `!default` de forma a que possam ser substituidas.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$baseline: 1em !default;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$baseline: 1em !default
{% endhighlight %}
  </div>
</div>

Graças a isto, um programador pode definir a sua própria varíavel `$baseline` *antes* de importar a vossa biblioteca, sem que esta substitua o valor da vossa variável.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Developer's own variable
$baseline: 2em;

// Your library declaring `$baseline`
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Developer's own variable
$baseline: 2em

// Your library declaring `$baseline`
@import your-library

// $baseline == 2em
{% endhighlight %}
  </div>
</div>






## `!global` flag

O marcador `!global` deve ser usado apenas quando se vai substituir uma variável global a partir de um contexto local. Quando se define uma variável num contexto global, o uso deste marcador deve ser omitido.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$baseline: 2em;

// Nope
$baseline: 2em !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$baseline: 2em

// Nope
$baseline: 2em !global
{% endhighlight %}
  </div>
</div>






## Variáveis multiplas ou mapas

Existem vantagens em usar mapas em vez de multiplas variáveis. A principal é poder iterar um mapa, algo que não é possivel com variáveis distintas.

Outra vantagem de usar um mapa, é a habilidade de criar uma função de leitura para providenciar uma API mais amigável. Por exemplo, considerem o seguinte código Sass:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer's name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer's name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer's name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer's name
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
