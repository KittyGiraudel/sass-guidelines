
# Ошибки и предупреждения

Если и есть возможность, которая часто упускается из виду разработчиками, использующих Sass, то это возможность динамически выводить предупреждения и ошибки. Sass поставляется с тремя указаниями для вывода содержимого в стандартной системе вывода (CLI, компилятор…):

* `@debug`;
* `@warn`;
* `@error`.

Отложим `@debug` в сторону, так как очевидно, что он нацелен на отладку SassScript, который не является нашей целью здесь. Нам остаются `@warn` и `@error`, которые с виду одинаковые, за исключением того, что один останавливает компилятор, а другой нет. Позволю вам самим додумать, какой из них что делает.

Теперь есть много пространства в вашем проекте на Sass для предупреждений и ошибок. Обычно любая примесь или функция, за исключением специальных типов или аргументов, может выкинуть ошибку, если произойдёт что-то неожиданное, или вывести предупреждение, когда делает предположение.

### Дальнейшее чтение

* [An Introduction To Error Handling](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/HugoGiraudel/SassyLogger)

## Предупреждения

Возьмём функцию из [Sass-MQ](https://github.com/sass-mq/sass-mq), предполагающую конвертирование из `px` в `em`, например:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size) {
  @if unitless($px) {
    @warn 'Предполагаем, что #{$px} должно быть в пикселях, пытаемся явно преобразовать.';
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
    @warn 'Предполагаем, что #{$px} должно быть в пикселях, пытаемся явно преобразовать.'
    @return mq-px2em($px + 0px)
  @else if unit($px) == em
    @return $px

  @return ($px / $base-font-size) * 1em
{% endhighlight %}
  </div>
</div>

Если значение отсутствет, то функция предполагает, что значение подразумевает собой измерение в пикселях. С этой точки зрения, предположение может быть рискованным для пользователя и поэтому он должен быть предупреждён, что программа сделает что-то, что может быть неожиданным поведением.

## Ошибки

Ошибки, в отличие от предупреждений, предотвращают компилятор от дальнейшей работы. Обычно они останавливают сборку и выводят сообщение в поток вывода, также как и в stack trace, что весьма удобно для отладки. Из-за этого ошибки должны быть выведены только тогда, когда уже нет возможности для выполнения программы. Когда есть возможность, попробуйте обойти эту проблему и вывести вместо этого предупреждение.

Как пример, давайте скажем, что вы хотите сделать функцию получения для доступа к значениям определенной карты. Вы можете вывести ошибку, если нужный ключ не существует в карте переменных.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Карта Z-index’ов, собирает все Z-слои приложения
/// @access private
/// @type Map
/// @prop {String} key - Имя слоя
/// @prop {Number} valye - значение Z, соответствующее ключу
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Получение значения z-index из имени слоя
/// @access public
/// @param {String} $layer - Имя слоя
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @if not map-has-key($z-indexes, $layer) {
    @error 'Нет слоя с именем `#{$layer}` в $z-indexes. '
         + 'Слой должен быть одним из #{map-keys($z-indexes)}.';
  }

  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Карта Z-index’ов, собирает все Z-слои приложения
/// @access private
/// @type Map
/// @prop {String} key - Имя слоя
/// @prop {Number} valye - значение Z, соответствущее ключу
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Получение значения z-index из имени слоя
/// @access public
/// @param {String} $layer - Имя слоя
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @if not map-has-key($z-indexes, $layer)
    @error 'Нет слоя с именем `#{$layer}` в $z-indexes. '
       + 'Слой должен быть одним из #{map-keys($z-indexes)}.';

  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
