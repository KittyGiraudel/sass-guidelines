
# Avisos e Erros

Se há uma característica que é muitas vezes esquecida pelos programadores de Sass, é a capacidade de enviar dinamicamente avisos e erros. Por acaso, Sass vem com três diretivas personalizadas para imprimir conteúdo no _standard output system_ (CLI, compilador...):

* `@debug`;
* `@warn`;
* `@error`.

Vamos colocar o `@debug` de lado, uma vez que se destina claramente a fazer _debug_ a SassScript, o que não é o nosso ponto aqui. Ficamos então com `@warn` and `@error` que são visivelmente idênticos, exceto que um para o compilador, enquanto que o outro não. Vocês podem idivinhar qual faz o quê.

Agora, há muito espaço num projecto de Sass para avisos e erros. Basicamente, qualquer _mixin_ ou função à espera de um tipo ou argumento específico poderia lançar um error se algo desse errado, ou mostrar um aviso ao fazer uma suposição.



### Leitura adicional

* [_An Introduction To Error Handling_ (‘Uma Introdução À Manipulação De Erros’)](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [_Building a Logger Mixin_ (‘Construção de um _Logger Mixin_’)](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [_SassyLogger_](https://github.com/HugoGiraudel/SassyLogger)






## Avisos

Considerem esta função de [Sass-MQ](https://github.com/sass-mq/sass-mq) a tentar converter um valor em `px` para `em`, por exemplo:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size) {
  @if unitless($px) {
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.';
    @return mq-px2em($px + 0px);
  } @else if unit($px) == em {
    @return $px;
  }

  @return ($px / $base-font-size) * 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size)
  @if unitless($px)
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.'
    @return mq-px2em($px + 0px)
  @else if unit($px) == em
    @return $px

  @return ($px / $base-font-size) * 1em
{% endhighlight %}
  </div>
</div>

Se o valor fornecido não possuir unidade, a função assume que o valor está expresso em píxeis. Neste ponto, uma suposição poderá ser arriscada, pelo que o utilizador deverá ser avisado que o software fez algo que poderá ser considerado inesperado.






## Erros

Erros, ao contrário de avisos, previnem o compilador de ir mais além. Basicamente, param o compilador e mostram uma mensagem no _output stream_ tal como o _stack trace_, o que é útil para _debugging_. Por causa disto, erros deverão ser lançados quando não há mais forma do programa continuar a correr. Sempre que possível, tentem antes contornar o problema e mostrar um aviso em seu lugar.

Como exemplo, digamos que querem construir uma função _getter_ para aceder a valores de um _map_ específico. Poderiam lançar um erro se a chave pedida não existir no _map_.

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
  @if not map-has-key($z-indexes, $layer) {
    @error 'There is no layer named `#{$layer}` in $z-indexes. '
         + 'Layer should be one of #{map-keys($z-indexes)}.';
  }

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
  @if not map-has-key($z-indexes, $layer)
    @error 'There is no layer named `#{$layer}` in $z-indexes. '
         + 'Layer should be one of #{map-keys($z-indexes)}.'

  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
