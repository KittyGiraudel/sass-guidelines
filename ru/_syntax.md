# Синтаксис и форматирование

Если вы спросите меня, что таблица стилей должна делать в первую очередь – так это показать, как мы хотим преподнести наш код.

Когда несколько разработчиков участвуют в написании CSS проекта(ов), то это только вопрос времени, прежде чем один из них начинает делать вещи по-своему. Руководство стилей способствуют не только в согласованности, но и помогает, когда приходит время читать и обновлять код.

Грубо говоря, мы хотим (бесстыдно вдохновлён [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* двойные (2) отступы пробелом, никаких табов;
* в идеале, 80-символьную ширину строк;
* правильно написанные многострочные CSS правила;
* осмысленное использование пробелов.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// Nope
.foo {
    display: block; overflow: hidden;

    padding: 0 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Так как Sass-синтаксис заставляет использовать эти стандарты написания
// Не будет способа неправльного подхода к написанию
.foo
  display: block
  overflow: hidden
  padding: 0 1em
{% endhighlight %}
  </div>
</div>

Мы не будем решать вопрос организации файлов в этом разделе. Это объект архитектуры [другого раздела](#architecture).

## Строки

CSS не требует, чтобы строки были помещены в кавычки, даже те, что содержат пробелы. Возьмите названия семейства шрифтов, например: не имеет значения, оборачиваете ли вы их в кавычки для CSS-парсера или нет.

Из-за этого, Sass *также* не требует помещения строк в кавычки. Даже лучше (и, *к счастью,* вы согласитесь), строка в кавычках является точным соответствием её двойника без кавычек (например, строка `'abc'` строго равна `abc`).

Языки, которые не требуют, чтобы строки были в кавычках, определенно, в меньшинстве, так что **строки должны всегда быть обёрнуты в одинарные кавычки** в Sass (одну проще набрать, чем двойную, на *QWERTY*-клавиатуре). Кроме того, для согласованности с другими языками, в том числе с двоюродным братом CSS – JavaScript’ом, есть несколько причин для такого выбора:

* названия цветов рассматриваются как цвета, когда без кавычек, что может привести к серьёзным проблемам;
* большинство синтаксических анализаторов будут в шоке от строк без кавычек;
* это помогает общей читаемости;
* нет правильной причины не обворачивать строки в кавычки.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif;

// Nope
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif

// Nope
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif

// Nope
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>В предыдущем примере <code>sans-serif</code> не был обёрнут в кавычки, потому что это специальное значение CSS, которые должно быть без кавычек.</p>
</div>

URL тоже должны быть в кавычках, по тем же причинам, что и выше:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  background-image: url('/images/kittens.jpg');
}

// Nope
.foo {
  background-image: url(/images/kittens.jpg);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  background-image: url('/images/kittens.jpg')

// Nope
.foo
  background-image: url(/images/kittens.jpg)
{% endhighlight %}
  </div>
</div>

### Дальнейшее чтение

* [All You Ever Need to Know About Sass Interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/HugoGiraudel/SassyStrings)

## Числа

В Sass число – это тип данных, включая всё, от безразмерных чисел до длин, длительности, частоты, углов и так далее. Это позволяет проводить на них расчёты.

### Нули

Числа должны отображать нули перед десятичным значением меньше единицы. Никогда не пишите без нулей.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  padding: 2em;
  opacity: 0.5;
}

// Nope
.foo {
  padding: 2.0em;
  opacity: .5;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  padding: 2em
  opacity: 0.5

// Nope
.foo
  padding: 2.0em
  opacity: .5
{% endhighlight %}
  </div>
</div>

### Единицы измерения

При работе с длинами, '0' (ноль) никогда не должен иметь единицу измерения.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$length: 0;

// Nope
$length: 0em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$length: 0

// Nope
$length: 0em
{% endhighlight %}
  </div>
</div>

Самая распространённая ошибка о числах в Sass, которую можно только представить – это думать, что единицы – лишь строки, которые можно свободно прилагать к числу. Хотя это и звучит как правда, это, конечно же, не то, как единицы работают. Думайте о единицах в контексте алгебраических символов. Например, в реальном мире, умножение 5 дюймов на 5 дюймов даст вам 25 квадратных дюймов. Та же логика применима и к Sass.

Чтобы добавить единицу измерения в число, нужно умножить это число на *1 единицу измерения*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42;

// Yep
$length: $value * 1px;

// Nope
$length: $value + px;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42

// Yep
$length: $value * 1px

// Nope
$length: $value + px
{% endhighlight %}
  </div>
</div>

Заметим, что добавление *0 единиц этого значения* также работает, но я скорее бы порекомендовал вышеупомянутый метод, так как добавление *0 единиц измерения* может быть немного запутанным. Действительно, при попытке преобразовать число в другую единицу измерения, добавление 0 не будет делать этот трюк.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42 + 0px;
// -> 42px

$value: 1in + 0px;
// -> 1in

$value: 0px + 1in;
// -> 96px
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42 + 0px
// -> 42px

$value: 1in + 0px
// -> 1in

$value: 0px + 1in
// -> 96px
{% endhighlight %}
  </div>
</div>

В конце концов, это действительно зависит от того, чего вы пытаетесь достичь. Просто имейте в виду, что добавление единицы измерения как строки – не лучшее решение.

Чтобы убрать единицу измерения из значения, нужно разделить его на *одну единицу этой же меры*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$length: 42px;

// Yep
$value: $length / 1px;

// Nope
$value: str-slice($length + unquote(''), 1, 2);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$length: 42px

// Yep
$value: $length / 1px

// Nope
$value: str-slice($length + unquote(''), 1, 2)
{% endhighlight %}
  </div>
</div>

Добавляя единицу измерения как строку в число превращает всё в строку, предотвращая любую дополнительную операцию. Разделение числа и единицы измерения тоже возвращает строку. Это не то, чего вы хотите.

### Вычисления

**Числовые рассчёты должны всегда быть в круглых скобках**. Мало того, что это требование значительно улучшает читаемость, оно также предотвращает некоторые крайние случаи, заставляя Sass считать содержимое скобок.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  width: (100% / 3);
}

// Nope
.foo {
  width: 100% / 3;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  width: (100% / 3)

// Nope
.foo
  width: 100% / 3
{% endhighlight %}
  </div>
</div>

### Магические числа

"Магическое число" - это [термин старой школы программирования](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) для *неименованных числовых констант*. В принципе, это просто случайное число, которое *просто работает*™ и ещё не привязано к какому-либо логическому объяснению.

Излишне говорить, **магические числа — чума, и их следует избегать любой ценой**. Если вы не можете найти разумное объяснение тому, почему число работает, добавьте обширный комментарий, объясняющий, как вы туда попали и почему вы думаете, что это работает. Признание в том, что вы не знаете, почему что-то работает, будет еще более полезным для следующего разработчика, чем исследования происходящего на пустом месте.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * 1. Магическое число. Это минимальное число, которое я смог найти, чтобы выровнять верх
 * `.foo` с его предком. В идеале мы должны исправить это по-правильному.
 */
.foo {
  top: 0.327em; /* 1 */
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * 1. Магическое число. Это минимальное число, которое я смог найти, чтобы выровнять верх
 * `.foo` с его предком. В идеале мы должны исправить это по-правильному.
 */
.foo
  top: 0.327em /* 1 */
{% endhighlight %}
  </div>
</div>

### Дальнейшее чтение

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](http://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)

## Цвета

Цвета занимают важное место в языке CSS. Естественно, Sass является ценным союзником, когда дело доходит до управления цветами, в основном – путём предоставления [мощных функций](http://sass-lang.com/documentation/Sass/Script/Functions.html).

### Цветовые форматы

Для того, чтобы сделать цвета простыми, насколько возможно, советую соблюдать следующий порядок предпочтения цветовых форматов:

1. [Ключеые слова CSS](http://www.w3.org/TR/css3-color/#svg-color);
1. [Обозначение HSL](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [Обозначение RGB](http://en.wikipedia.org/wiki/RGB_color_model);
1. Шестнадцатеричная нотация. Предпочтительно в нижнем регистре и по возможности укороченная.

Во-первых, ключевые слова часто говорят сами за себя. Представление HSL – не только самое простое для человеческого мозга <SUP>[указать источник]</SUP>, это также делает его лёгким для настройки цвета путём регулировки цветового тона, насыщенности и яркости индивидуально. RGB по-прежнему имеет преимущество, показывая прямо сейчас, если цвет более синий, зелёный или красный, но это не делает его лёгким в построении цвета из трёх частей. Наконец, шестнадцатеричное представление слишком сложно для расшифровки человеческим умом.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  color: red;
}

// Nope
.foo {
  color: #FF0000;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  color: red

// Nope
.foo
  color: #FF0000
{% endhighlight %}
  </div>
</div>

При использовании обозначений HSL или RGB, всегда пишите один пробел после запятой (`,`) и без пробела между скобками (`(`, `)`) и содержанием.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  color: rgba(0, 0, 0, 0.1);
  background: hsl(300, 100%, 100%);
}

// Nope
.foo {
  color: rgba(0,0,0,0.1);
  background: hsl( 300, 100%, 100% );
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  color: rgba(0, 0, 0, 0.1)
  background: hsl(300, 100%, 100%)

// Nope
.foo
  color: rgba(0,0,0,0.1)
  background: hsl( 300, 100%, 100% )
{% endhighlight %}
  </div>
</div>

### Цвета и переменные

При использовании цвета более одного раза, сохраняйте его в переменной с осмысленным названием, описывающим цвет.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$sass-pink: #c69;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$sass-pink: #c69
{% endhighlight %}
  </div>
</div>

Теперь вы можете использовать эту переменную, когда вы захотите. Однако, если ваше использование сильно привязано к теме, я бы не советовал использовать переменные как есть. Вместо этого, храните их в других переменных с именем, объясняющим, как она должна быть использована.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$main-theme-color: $sass-pink;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$main-theme-color: $sass-pink
{% endhighlight %}
  </div>
</div>

Это будет препятствовать изменениям темы, ведущим к чему-то вроде `$sass-pink: blue`.

### Осветление и затемнение цветов

Обе функции [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) и [`darken`](http://sass-lang.com/documentation/Sass/Script/functions.html#darken-instance_method) манипулируют цветами пространства HSL, добавляя или вычитая в пространстве HSL. В принципе, они ни что иное, как алиасы для параметра `$lightness` в функции [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

Дело в том, что эта функция часто не даёт ожидаемого результата. С другой стороны, функция [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) является хорошим способом осветлить или затемнить цвет, смешивая его либо с `white`, либо с ` black`.

Преимуществом использования `mix` перед одной из двух указанных функций выше является то, что она будет постепенно меняться на чёрный (или белый), когда вы уменьшаете долю цвета, в то время как `darken` и `lighten` быстро меняют цвет на чёрный или белый.

<figure role="group">
  <img alt="Иллюстрация разницы между функциями darken/lighten и mix в Sass"
     sizes="100vw"
     srcset="/assets/images/lighten-darken-mix_small.png  540w,
             /assets/images/lighten-darken-mix_medium.png 900w,
             /assets/images/lighten-darken-mix_large.png 1200w,
             /assets/images/lighten-darken-mix_huge.png  1590w" />
  <figcaption>Иллюстрация разницы между функциями <code>lighten</code>/<code>darken</code> и <code>mix</code> в Sass от <a href="http://codepen.io/KatieK2/pen/tejhz/" target="_blank">KatieK</a></figcaption>
</figure>

Если вы не хотите писать функцию `mix` каждый раз, вы можете создать две простых в использовании функции `tint` и `shade` (которые также являются частью [Compass](HTTP://compass- style.org/reference/compass/helpers/colors/#shade)), чтобы сделать то же самое:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Немного осветлить цвет
/// @access public
/// @param {Color} $color - цвет для осветления
/// @param {Number} $percentage - процент от `$color` в возвращаемом цвете
/// @return {Color}
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

/// Немного затемнить цвет
/// @access public
/// @param {Color} $color - цвет для затемнения
/// @param {Number} $percentage - процент от `$color` в возвращаемом цвете
/// @return {Color}
@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Немного осветлить цвет
/// @access public
/// @param {Color} $color - цвет для осветления
/// @param {Number} $percentage - процент от `$color` в возвращаемом цвете
/// @return {Color}
@function tint($color, $percentage)
  @return mix($color, white, $percentage)

/// Немного затемнить цвет
/// @access public
/// @param {Color} $color - цвет для затемнения
/// @param {Number} $percentage - процент от `$color` в возвращаемом цвете
/// @return {Color}
@function shade($color, $percentage)
  @return mix($color, black, $percentage)
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Функция <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> разработана, чтобы изменять свойства более плавно, принимая во внимание, насколько они уже изменены. Результат так же хорош, как и от <code>mix</code>, но с более удобным вызовом. Хотя, множитель масштабирования – не совсем то же самое.</p>
</div>

### Дальнейшее чтение

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don’t Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)

## Списки

Списки Sass эквиваленты массивам. Список представляет собой плоскую структуру данных (в отличие от [карт](#maps)), предназначенную для хранения значений любого типа (в том числе списков со вложенными списками).

Списки должны соблюдать следующие правила:

* если не слишком длинный и помещается на 80-символьную строку, всегда отображать его на одной строке;
* если не используется для целей CSS, всегда пользуйтесь запятой в качестве разделителя;
* если не пустой или вложен в другой список, никогда не пишите скобки;
* никогда не добавляйте точку с запятой.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$font-stack: 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif;

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif;

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif,);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$font-stack: 'Helvetica', 'Arial', sans-serif

// Nope (since it is not supported)
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif)

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif,)
{% endhighlight %}
  </div>
</div>

При добавлении новых записей в список, всегда используйте прилагаемый API. Не пытайтесь добавлять новые элементы вручную.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$shadows: 0 42px 13.37px hotpink;

// Yep
$shadows: append($shadows, $shadow, comma);

// Nope
$shadows: $shadows, $shadow;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$shadows: 0 42px 13.37px hotpink

// Yep
$shadows: append($shadows, $shadow, comma)

// Nope
$shadows: $shadows, $shadow
{% endhighlight %}
  </div>
</div>

### Дальнейшее чтение

* [SassyLists](http://sassylists.com)

## Карты

Начиная с Sass 3.3, авторы таблиц стилей могут создавать карты – термин Sass для связных массивов, хэшей или даже объектов JavaScript. Карта – это структура данных, сопоставляющая ключи (это может быть любой тип данных, включая карты, хотя я это не рекомендую) для значений любого типа.

Карты коды должны быть записаны следующим образом:

* пробел после двоеточия (`:`);
* открывающая скобка (`(`) на той же строке, что и двоеточие (`:`);
* **ключи в кавычках**, если это строки (в 99% случаев);
* каждая пара ключ/значение на своей строке;
* запятая (`,`) на конце каждой пары ключ/значение;
* **закрывающая запятая** (`,`) на последней паре, что было легче добавлять, удалять или переставлять пункты;
* закрывающая скобка (`)`) на своей новой строке;
* без пробела или новой строке между закрывающей скобкой (`)`) и точкой с запятой (`;`).

Пример:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
);

// Nope
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$breakpoints: ('small': 767px, 'medium': 992px, 'large': 1200px,)

// Nope
$breakpoints: ( 'small': 767px, 'medium': 992px, 'large': 1200px )

// Nope
$breakpoints: (small: 767px, medium: 992px, large: 1200px,)

// Nope (since it is not supported)
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
)
{% endhighlight %}
  </div>
</div>

### Отладка карт Sass

Если вы когда-нибудь терялись, не понимая, что за сумасшедшая магия происходит в карте Sass, не волнуйтесь, потому что есть ещё путь к спасению.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin debug-map($map) {
  @at-root {
    @debug-map {
      __toString__: inspect($map);
      __length__: length($map);
      __depth__: if(function-exists('map-depth'), map-depth($map), null);
      __keys__: map-keys($map);
      __properties__ {
        @each $key, $value in $map {
          #{'(' + type-of($value) + ') ' + $key}: inspect($value);
        }
      }
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=debug-map($map)
  @at-root
    @debug-map
      __toString__: inspect($map)
      __length__: length($map)
      __depth__: if(function-exists('map-depth'), map-depth($map), null)
      __keys__: map-keys($map)
      __properties__
        @each $key, $value in $map
          #{'(' + type-of($value) + ') ' + $key}: inspect($value)
{% endhighlight %}
  </div>
</div>

Если вы заинтересованы в глубине карты кода, добавьте следующую функцию. Примесь будет отображать её автоматически.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Вычислить максимальную глубину карты
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map) {
  $level: 1;

  @each $key, $value in $map {
    @if type-of($value) == 'map' {
      $level: max(map-depth($value) + 1, $level);
    }
  }

  @return $level;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Вычислить максимальную глубину карты
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map)
  $level: 1

  @each $key, $value in $map
    @if type-of($value) == 'map'
      $level: max(map-depth($value) + 1, $level)

  @return $level;
{% endhighlight %}
  </div>
</div>

### Дальнейшее чтение

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](http://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)

## Набор правил CSS

На данный момент, это, в основном, пересмотр того, что все и так знают, но вот как набор правил CSS должен быть написан (по крайней мере, по мнению большинства руководств, в том числе [CSS Guidelines](http://cssguidelin.es/#anatomy-of--набор правил)):

* связанные селекторы на одной строке; не связанные селекторы на новой строке;
* открывающая скобка (`{`) отделяется от последнего селектора одним пробелом;
* каждое объявление на собственной новой строке;
* пробел после двоеточия (`:`);
* завершающая точка с запятой (`;`) в конце всех объявлений;
* закрывающая скобка (`}`) на своей новой строке;
* новая строка после закрывающей скобки `}`.

Пример:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// Nope
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
    margin: 0 auto }
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo, .foo-bar,
.baz
  display: block
  overflow: hidden
  margin: 0 auto

// Nope
.foo,
.foo-bar, .baz
    display: block
    overflow: hidden
    margin: 0 auto
{% endhighlight %}
  </div>
</div>

Дополняя те руководства по CSS, мы должны обратить внимание на:

* локальные переменные объявляются перед любыми объявлениями, потом отделяются от деклараций новой строкой;
* вызовы примесей без `@content` идут перед любым объявлением;
* вложенные селекторы всегда идут после новой строки;
* вызовы примесей с `@content` идут после вложенных селекторов;
* без новых строк перед закрывающей фигурной скобкой (`}`).

Пример:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo, .foo-bar,
.baz {
  $length: 42em;

  @include ellipsis;
  @include size($length);
  display: block;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  @include respond-to('small') {
    overflow: visible;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo, .foo-bar,
.baz
  $length: 42em

  +ellipsis
  +size($length)
  display: block
  overflow: hidden
  margin: 0 auto

  &:hover
    color: red

  +respond-to('small')
    overflow: visible
{% endhighlight %}
  </div>
</div>

### Дальнейшее чтение

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)

## Порядок объявлений

Невозможно удержать в голове все обсуждения, где мнения о сортировке объявлений в CSS настолько разнятся. Вообще, можно выявить два лагеря:

* придерживаться алфавитного порядка;
* упорядочивание по назначению (position, display, colors, font, miscellaneous…).

Есть плюсы и минусы в обоих вариантах. С одной стороны, сортировка в алфавитном порядке является универсальной (по крайней мере, для языков, использующих латинский алфавит), поэтому нет никаких споров о сортировке свойств. Тем не менее, мне весьма странно видеть свойства, такие как `bottom` и `top`, не рядом друг с другом. Почему анимации должны быть перед `display`? Есть много странностей с алфавитным упорядочиванием.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  background: black;
  bottom: 0;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  height: 100px;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 100px;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  background: black
  bottom: 0
  color: white
  font-weight: bold
  font-size: 1.5em
  height: 100px
  overflow: hidden
  position: absolute
  right: 0
  width: 100px
{% endhighlight %}
  </div>
</div>

С другой стороны, сортировка свойств по типу имеет смысл. Каждые объявления, относящиеся к шрифтам, располагаются рядом, как `top` и `bottom`, и чтение набора правил отчасти становится похожим на чтение рассказа. Но если вы не будете придерживаться некоторых соглашений, таких, как [Idiomatic CSS](https://github.com/necolas/idiomatic-css), есть много места для толкования. Где будет `white-space` – рядом со шрифтами или с `display`? Где расположить `overflow`? Что такое порядок свойств в группе? (Это может быть в алфавитном порядке, о ирония)

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  height: 100px;
  width: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  height: 100px
  width: 100px
  overflow: hidden
  position: absolute
  bottom: 0
  right: 0
  background: black
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

Существует также ещё одно интересное поддерево типа упорядочивания, называется [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), он, кажется, довольно популярен, что хорошо. В основном, Concentric CSS опирается на блочную модель, чтобы определить порядок: начинается за пределами, движется внутрь.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: black;
  overflow: hidden;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  width: 100px
  height: 100px
  position: absolute
  right: 0
  bottom: 0
  background: black
  overflow: hidden
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

Я должен сказать, что не могу решить это сам. [Недавний опрос на CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) установил, что более 45% разработчиков упорядочивают свойства по их назначению, против 14% в алфавитном порядке. Кроме того, есть 39%, кто делает это случайно, я в том числе.

<figure role="group">
  <img src="/assets/images/css-order-chart.png" alt="График, показывающий, как разработчики упорядочивают свой CSS" />
  <figcaption>График, показывающий, как разработчики упорядочивают свой CSS</figcaption>
</figure>

Поэтому я не буду навязывать вам выбор. Выберите тот, который вы предпочитаете, пока вы последовательны в ваших стилях.

<div class="note">
  <p><a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">Недавние исследования</a> показали, что использование <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (которое использует <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">упорядочивание по типу</a>) помогает уменьшить общий размер файла на 2.7% при сжатии Gzip, в сравнении с 1.3%, когда происходит упорядочение по алфавиту.</p>
</div>

### Дальнейшее чтение

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

## Вкладывание селекторов

Одна особенность Sass, которую не слишком используют многие разработчики – *вложенность селекторов*. Она позволяет автору таблицы стилей вычислять длинные селекторы, вкладывая короткие селекторы друг в друга.

### Общие правила

Например, такая вложенность Sass:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  .bar
    &:hover
      color: red
{% endhighlight %}
  </div>
</div>

…создаст такой CSS:

<div>
{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}
</div>

В Sass 3.3 можно использовать ссылку на текущий селектор, используя `&`, чтобы создать дополнительные селекторы. Например:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  &-bar {
    color: red;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  &-bar
    color: red
{% endhighlight %}
  </div>
</div>

…сгенерирует такой CSS:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo-bar {
  color: red;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo-bar
  color: red
{% endhighlight %}
  </div>
</div>

Этот метод часто используется в [методологии BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) для генерации селекторов `.block__element` и `.block--modifier`, основанных на базовом селекторе (т.е. `.block` в данном примере).

<div class="note">
  <p>Выходит анекдотично, что создание новых селекторов из ссылки на текущий селектор (`&`) делает новые селекторы недоступными для поиска в кодовой базе, так как они не существуют как таковые.</p>
</div>

Проблема с вложенностью селекторов в том, что это в конечном итоге делает код более трудным для чтения. Нужно уметь мысленно вычислять, что получится в результате из уровней вложенности; не всегда вполне очевидно, что за CSS будет в конечном итоге.

Это утверждение становится правдивее, когда селекторы становятся длиннее и ссылки на текущий селектор (`&`) более частыми. В какой-то момент риск потерять след и не суметь понять, что происходит, становится настолько высок, что не стоит того.

Чтобы предотвратить такую ситуацию, **избегайте вложенности селекторов, насколько это возможно**. Тем не менее, есть, очевидно, несколько исключений из этого правила.

### Исключения

Во-первых, можно, и я даже рекомендую вкладывать псевдоклассы и псевдоэлементы в родительский селектор.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: 'псевдоэлемент';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  &:hover
    color: green

  &::before
    content: 'псевдоэлемент'
{% endhighlight %}
  </div>
</div>

Использование вложенности селекторов для псевдоклассов и псевдоэлементов не только имеет смысл (потому что имеет дело с тесно связанными селекторами), но также помогает держать всю информацию о компоненте в одном месте.

Кроме того, при использовании классов, обозначающих состояние, таких как `.is-active`, это прекрасно подходит для того, чтобы вкладывать их под селектор компонента, чтобы всё выглядело аккуратно.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  &.is-active {
    font-weight: bold;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  &.is-active
    font-weight: bold
{% endhighlight %}
  </div>
</div>

Последнее, но не менее важное – при оформлении элемента часто случается, что он содержится в другом элементе, и тут также хорошо использовать вложенность, чтобы держать всё о компоненте в том же месте.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  .no-opacity & {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  .no-opacity &
    display: none
{% endhighlight %}
  </div>
</div>

При работе с неопытными разработчиками, селекторы, такие как `.no-opacity &`, могут выглядеть немного странно. Для предотвращения какой-либо путаницы, можно построить очень короткую примесь, которая преобразует этот странный синтаксис в явный API.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Примесь для предоставления простого API вложенности
/// @param {String} $selector - Selector
@mixin when-inside($selector) {
  #{$selector} & {
    @content;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Примесь для предоставления простого API вложенности
/// @param {String} $selector - Selector
=when-inside($selector) {
  #{$selector} &
    @content
}
{% endhighlight %}
  </div>
</div>

Переписывание нашего предыдущего примера будет выглядеть следующим образом:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  @include when-inside('.no-opacity') {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  +when-inside('.no-opacity')
    display: none
{% endhighlight %}
  </div>
</div>

Как и везде, специфика несколько неуместна, последовательность является ключевым фактором. Если вы чувствуете, что полностью уверены во вложенности селекторов, тогда используйте ее. Просто убедитесь, что вся ваша команда справится с этим.

### Дальнейшее чтение

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)
