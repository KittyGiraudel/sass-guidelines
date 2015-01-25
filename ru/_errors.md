
# Ошибки и предупреждения

Если и есть функционал, который часто упускается из виду разработчиками Sass, то это возмодность динамически выводить предупреждения и ошибки. Действильно, Sass идет с тремя директивами для вывода контента в стандартной системе вывода (CLI, compiling app...):

* `@debug`;
* `@warn`;
* `@error`.

Отложим `@debug` в сторону, так как очевидно, что он нацелен на отладку SassScript, которая не является нашкй целью здесь. Нам остаются `@warn` и `@error`, которые с виду одинковые, за исключение того, что один останавливает компилятор, а другой нет. Позволю вам самим додумать какой из них, что делает.

Теперь есть много пространства в ваше Sass проекте для предупреждений и ошибок. Обычно  любая примесь или функция, за исключением специальных типов или аргументов, может выкинуть ошибку, если что-то пойдет не так или вывести предупреждение, когда делает предположение.



### Дальнейшее чтение

* [An Introduction To Error Handling](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/HugoGiraudel/SassyLogger)






## Предупреждения

Возьмём функцию из [Sass-MQ](https://github.com/sass-mq/sass-mq) предполагающую конвертирование из `px` в `em`, например:

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

Если значение отсутствет, то функция предполагает, то значение подразумевает собой измерение в пикселях. С этой точки зрения, предположение может быть рискованным для пользователя и поэтому он должен быть предупрежден, что программа сделает что-то, что может быть неожиданным поведением.






## Ошибки

Ошибки, в отличие от предупреждений, предотвращают компилятор от дальнейшей работы. Обычно они останавливают компиляцю и выводят сообщение в выходной поток, также как и в трассировке стэка, что весьма удобно для отладки. Из-за этого, ошибки должны быть выкинуты, только тогда, когда уже нет пути для выполнения программы. Когда есть возможность, попробуйте обойти эту проблему и вывести предупреждение вместо этого.

Как пример, давайте скажет, что вы хотите сделать геттер фкункцию для доступа к значениям определенной карте переменных. Вы можете выкинуть ошибку, если нужный ключ не существует в карте переменных.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Карта переменных z-index, собирает все Z слои приложения
/// @access private
/// @type Map
/// @prop {String} key - Имя слоя
/// @prop {Number} value - Z значение, отображаемое по ключу
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Получение z-index значение из имени слоя
/// @access public
/// @param {String} $layer - Имя слоя
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
/// Карта переменных z-index, собирает все Z слои приложения
/// @access private
/// @type Map
/// @prop {String} key - Имя слоя
/// @prop {Number} value - Z значение, отображаемое по ключу
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Получение z-index значение из имени слоя
/// @access public
/// @param {String} $layer - Имя слоя
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
