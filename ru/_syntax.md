# Синтаксис и форматирование

Если вы спросите меня, что таблица стилей должна делать в первую очередь – так это показать, как мы хотим преподнести наш код.

Когда несколько разработчиков участвуют в написании CSS проекта(ов), то это только вопрос времени, прежде чем один из них начинает делать вещи по-своему. Руководство стилей способствуют не только в согласованности, но и помогает, когда приходит время читать и обновлять код.

Грубо говоря, мы хотим (бесстыдно вдохновлён [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* двойные (2) отступы пробелом, никаких табов;
* в идеале, 80-символьную ширину строк;
* правильно написанные многострочные CSS правила;
* осмысленное использование пробелов.

{% include snippets/syntax/01/index.html %}

Мы не будем решать вопрос организации файлов в этом разделе. Это объект архитектуры [другого раздела](#architecture).

## Строки

Believe it or not, strings play quite a large role in both CSS and Sass ecosystems. Most CSS values are either lengths or strings (usually unquoted), so it actually is quite crucial to stick to some guidelines when dealing with strings in Sass.

### Кодировка

To avoid any potential issue with character encoding, it is highly recommended to force [UTF-8](http://en.wikipedia.org/wiki/UTF-8) encoding in the [main stylesheet](#main-file) using the `@charset` directive. Make sure it is the very first element of the stylesheet and there is no character of any kind before it.

{% include snippets/syntax/02/index.html %}

### Кавычки

CSS не требует, чтобы строки были помещены в кавычки, даже те, что содержат пробелы. Возьмите названия семейства шрифтов, например: не имеет значения, оборачиваете ли вы их в кавычки для CSS-парсера или нет.

Из-за этого, Sass *также* не требует помещения строк в кавычки. Даже лучше (и, *к счастью,* вы согласитесь), строка в кавычках является точным соответствием её двойника без кавычек (например, строка `'abc'` строго равна `abc`).

Языки, которые не требуют, чтобы строки были в кавычках, определенно, в меньшинстве, так что **строки должны всегда быть обёрнуты в одинарные кавычки** (`'`) в Sass (одну проще набрать, чем двойную, на *QWERTY*-клавиатуре). Кроме того, для согласованности с другими языками, в том числе с двоюродным братом CSS – JavaScript’ом, есть несколько причин для такого выбора:

* названия цветов рассматриваются как цвета, когда без кавычек, что может привести к серьёзным проблемам;
* большинство синтаксических анализаторов будут в шоке от строк без кавычек;
* это помогает общей читаемости;
* нет правильной причины не обворачивать строки в кавычки.

{% include snippets/syntax/03/index.html %}

<!-- TODO translate --><div class="note">
  <p>As per the CSS specifications, the <code>@charset</code> directive should be declared in double quotes <a href="http://www.w3.org/TR/css3-syntax/#charset-rule">to be considered valid</a>. However, Sass takes care of this when compiling to CSS so the authoring has no impact on the final result. You can safely stick to single quotes, even for <code>@charset</code>.</p>
</div>

<!-- TODO translate -->
### Strings as CSS values

Specific CSS values such as `initial` or `sans-serif` require not to be quoted. Indeed, the declaration `font-family: 'sans-serif'` will silently fail because CSS is expecting an identifier, not a quoted string. Because of this, we do not quote those values.

{% include snippets/syntax/04/index.html %}

<!-- TODO translate --> Hence, we can make a distinction between strings intended to be used as CSS values (CSS identifiers) like in the previous example, and strings when sticking to the Sass data type, for instance map keys.

We don't quote the former, but we do wrap the latter in single quotes.

### Строки с кавычками

<!-- TODO: translate --> If a string contains one or several single quotes, one might consider wrapping the string with double quotes (`"`) instead, in order to avoid escaping too many characters within the string.

{% include snippets/syntax/05/index.html %}

### URL'ы

URL тоже должны быть в кавычках, по тем же причинам, что и выше:

{% include snippets/syntax/06/index.html %}

###### Дальнейшее чтение

* [All You Ever Need to Know About Sass Interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/HugoGiraudel/SassyStrings)

## Числа

В Sass число – это тип данных, включая всё, от безразмерных чисел до длин, длительности, частоты, углов и так далее. Это позволяет проводить на них расчёты.

### Нули

Числа должны отображать нули перед десятичным значением меньше единицы. Никогда не пишите без нулей.

{% include snippets/syntax/07/index.html %}

<!-- TODO translate --><div class="note">
  <p>In Sublime Text and other editors providing a regular-expression powered search and replace, it is very easy to add a leading zero to (most if not all) float numbers. Simply replace <code>\s+\.(\d+)</code> with <code> 0.$1</code>. Do not forget the space before the <code>0</code> though.</p>
</div>

### Единицы измерения

При работе с длинами, '0' (ноль) никогда не должен иметь единицу измерения.

{% include snippets/syntax/08.html %}

<!-- TODO translate --><div class="note">
  <p>Beware, this practice should be limited to lengths only. Having a unitless zero for a time property such as <code>transition-delay</code> is not allowed. Theoretically, if a unitless zero is specified for a duration, the declaration is deemed invalid and should be discarded. Not all browsers are that strict, but some are. Long story short: only omit the unit for lenghts.</p>
</div>

Самая распространённая ошибка о числах в Sass, которую можно только представить – это думать, что единицы – лишь строки, которые можно свободно прилагать к числу. Хотя это и звучит как правда, это, конечно же, не то, как единицы работают. Думайте о единицах в контексте алгебраических символов. Например, в реальном мире, умножение 5 дюймов на 5 дюймов даст вам 25 квадратных дюймов. Та же логика применима и к Sass.

Чтобы добавить единицу измерения в число, нужно умножить это число на *1 единицу измерения*.

{% include snippets/syntax/09/index.html %}

Заметим, что добавление *0 единиц этого значения* также работает, но я скорее бы порекомендовал вышеупомянутый метод, так как добавление *0 единиц измерения* может быть немного запутанным. Действительно, при попытке преобразовать число в другую единицу измерения, добавление 0 не будет делать этот трюк.

{% include snippets/syntax/10/index.html %}

В конце концов, это действительно зависит от того, чего вы пытаетесь достичь. Просто имейте в виду, что добавление единицы измерения как строки – не лучшее решение.

Чтобы убрать единицу измерения из значения, нужно разделить его на *одну единицу этой же меры*.

{% include snippets/syntax/11/index.html %}

Добавляя единицу измерения как строку в число превращает всё в строку, предотвращая любую дополнительную операцию. Разделение числа и единицы измерения тоже возвращает строку. Это не то, чего вы хотите.

### Вычисления

**Числовые рассчёты должны всегда быть в круглых скобках**. Мало того, что это требование значительно улучшает читаемость, оно также предотвращает некоторые крайние случаи, заставляя Sass считать содержимое скобок.

{% include snippets/syntax/12/index.html %}

### Магические числа

"Магическое число" - это [термин старой школы программирования](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) для *неименованных числовых констант*. В принципе, это просто случайное число, которое *просто работает*™ и ещё не привязано к какому-либо логическому объяснению.

Излишне говорить, **магические числа — чума, и их следует избегать любой ценой**. Если вы не можете найти разумное объяснение тому, почему число работает, добавьте обширный комментарий, объясняющий, как вы туда попали и почему вы думаете, что это работает. Признание в том, что вы не знаете, почему что-то работает, будет еще более полезным для следующего разработчика, чем исследования происходящего на пустом месте.

{% include snippets/syntax/13/index.html %}

###### Дальнейшее чтение

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
1. Шестнадцатеричное обозначение (в нижнем регистре и сокращённое).

<!-- TODO translate -->CSS color keywords should not be used, unless for rapid prototyping. Indeed, they are English words and some of them do a pretty bad job at describing the color they represent, especially for non-native speakers. On top of that, keywords are not perfectly semantic; for instance `grey` is actually darker than `darkgrey`, and the confusion between `grey` and `gray` can lead to inconsistent usages of this color.

The HSL representation is not only the easiest one for the human brain to comprehend<sup>[citation needed]</sup>, it also makes it easy for stylesheet authors to tweak the color by adjusting the hue, saturation and lightness individually. 

RGB still has the benefit of showing right away if the color is more of a blue, a green or a red. Therefore it might be better than HSL in some situations, especially when describing a pure red, green or blue. Although it does not make it easy to build a color from the three parts.

Lastly, hexadecimal is close to indecipherable for the human mind. Use it only as a last resort if you have to.

{% include snippets/syntax/14/index.html %}

При использовании обозначений HSL или RGB, всегда пишите один пробел после запятой (`,`) и без пробела между скобками (`(`, `)`) и содержанием.

{% include snippets/syntax/15/index.html %}

### Цвета и переменные

При использовании цвета более одного раза, сохраняйте его в переменной с осмысленным названием, описывающим цвет.

{% include snippets/syntax/16/index.html %}

Теперь вы можете использовать эту переменную, когда вы захотите. Однако, если ваше использование сильно привязано к теме, я бы не советовал использовать переменные как есть. Вместо этого, храните их в других переменных с именем, объясняющим, как она должна быть использована.

{% include snippets/syntax/17/index.html %}

Это будет препятствовать изменениям темы, ведущим к чему-то вроде `$sass-pink: blue`.

### Осветление и затемнение цветов

Обе функции [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) и [`darken`](http://sass-lang.com/documentation/Sass/Script/functions.html#darken-instance_method) манипулируют цветами пространства HSL, добавляя или вычитая в пространстве HSL. В принципе, они ни что иное, как алиасы для параметра `$lightness` в функции [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

Дело в том, что эта функция часто не даёт ожидаемого результата. С другой стороны, функция [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) является хорошим способом осветлить или затемнить цвет, смешивая его либо с `white`, либо с ` black`.

Преимуществом использования `mix` перед одной из двух указанных функций выше является то, что она будет постепенно меняться на чёрный (или белый), когда вы уменьшаете долю цвета, в то время как `darken` и `lighten` быстро меняют цвет на чёрный или белый.

{% include images/color-functions.html %}

Если вы не хотите писать функцию `mix` каждый раз, вы можете создать две простых в использовании функции `tint` и `shade` (которые также являются частью [Compass](HTTP://compass- style.org/reference/compass/helpers/colors/#shade)), чтобы сделать то же самое:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>Функция <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> разработана, чтобы изменять свойства более плавно, принимая во внимание, насколько они уже изменены. Результат так же хорош, как и от <code>mix</code>, но с более удобным вызовом. Хотя, множитель масштабирования – не совсем то же самое.</p>
</div>

###### Дальнейшее чтение

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don’t Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)

## Списки

Списки Sass эквиваленты массивам. Список представляет собой плоскую структуру данных (в отличие от [карт](#maps)), предназначенную для хранения значений любого типа (в том числе списков со вложенными списками).

Списки должны соблюдать следующие правила:

* либо строчные, либо многострочные;
* для многострочных обязательно умещаться в 80-знаковый предел;
* если не используется для целей CSS, всегда пользуйтесь запятой в качестве разделителя;
* всегда обёрнуты скобками;
* завершающая запятая для многострочных, для строчных не надо.

{% include snippets/syntax/19/index.html %}

При добавлении новых записей в список, всегда используйте прилагаемый API. Не пытайтесь добавлять новые элементы вручную.

{% include snippets/syntax/20/index.html %}

###### Дальнейшее чтение

* [Understanding Sass lists](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/)
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

{% include snippets/syntax/21/index.html %}

###### Дальнейшее чтение

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Extra Map functions in Sass](http://www.sitepoint.com/extra-map-functions-sass/)
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

{% include snippets/syntax/24/index.html %}

Дополняя те руководства по CSS, мы должны обратить внимание на:

* локальные переменные объявляются перед любыми объявлениями, потом отделяются от деклараций новой строкой;
* вызовы примесей без `@content` идут перед любым объявлением;
* вложенные селекторы всегда идут после новой строки;
* вызовы примесей с `@content` идут после вложенных селекторов;
* без новых строк перед закрывающей фигурной скобкой (`}`).

Пример:

{% include snippets/syntax/25/index.html %}

###### Дальнейшее чтение

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)

## Порядок объявлений

Невозможно удержать в голове все обсуждения, где мнения о сортировке объявлений в CSS настолько разнятся. Вообще, можно выявить два лагеря:

* придерживаться алфавитного порядка;
* упорядочивание по назначению (position, display, colors, font, miscellaneous…).

Есть плюсы и минусы в обоих вариантах. С одной стороны, сортировка в алфавитном порядке является универсальной (по крайней мере, для языков, использующих латинский алфавит), поэтому нет никаких споров о сортировке свойств. Тем не менее, мне весьма странно видеть свойства, такие как `bottom` и `top`, не рядом друг с другом. Почему анимации должны быть перед `display`? Есть много странностей с алфавитным упорядочиванием.

{% include snippets/syntax/26/index.html %}

С другой стороны, сортировка свойств по типу имеет смысл. Каждые объявления, относящиеся к шрифтам, располагаются рядом, как `top` и `bottom`, и чтение набора правил отчасти становится похожим на чтение рассказа. Но если вы не будете придерживаться некоторых соглашений, таких, как [Idiomatic CSS](https://github.com/necolas/idiomatic-css), есть много места для толкования. Где будет `white-space` – рядом со шрифтами или с `display`? Где расположить `overflow`? Что такое порядок свойств в группе? (Это может быть в алфавитном порядке, о ирония.)

{% include snippets/syntax/27/index.html %}

Существует также ещё одно интересное поддерево типа упорядочивания, называется [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), он, кажется, довольно популярен, что хорошо. В основном, Concentric CSS опирается на блочную модель, чтобы определить порядок: начинается за пределами, движется внутрь.

{% include snippets/syntax/28/index.html %}

Я должен сказать, что не могу решить это сам. [Недавний опрос на CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) установил, что более 45% разработчиков упорядочивают свойства по их назначению, против 14% в алфавитном порядке. Кроме того, есть 39%, кто делает это случайно, я в том числе.

{% include images/order-poll.html %}

Поэтому я не буду навязывать вам выбор. Выберите тот, который вы предпочитаете, пока вы последовательны в ваших стилях (то есть не выбирая его *случайно*).

<div class="note">
  <p><a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">Недавние исследования</a> показали, что использование <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (которое использует <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">упорядочивание по типу</a>) помогает уменьшить общий размер файла на 2.7% при сжатии Gzip, в сравнении с 1.3%, когда происходит упорядочение по алфавиту.</p>
</div>

###### Дальнейшее чтение

* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)

## Вкладывание селекторов

Одна особенность Sass, которую не слишком используют многие разработчики – *вложенность селекторов*. Она позволяет автору таблицы стилей вычислять длинные селекторы, вкладывая короткие селекторы друг в друга.

### Общие правила

Например, такая вложенность Sass:

{% include snippets/syntax/29/index.html %}

…создаст такой CSS:

{% include snippets/syntax/30/index.html %}

В Sass 3.3 можно использовать ссылку на текущий селектор, используя `&`, чтобы создать дополнительные селекторы. Например:

{% include snippets/syntax/31/index.html %}

…сгенерирует такой CSS:

{% include snippets/syntax/32/index.html %}

Этот метод часто используется в [методологии BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) для генерации селекторов `.block__element` и `.block--modifier`, основанных на базовом селекторе (т.е. `.block` в данном примере).

<div class="note">
  <p>Выходит анекдотично, что создание новых селекторов из ссылки на текущий селектор (`&`) делает новые селекторы недоступными для поиска в кодовой базе, так как они не существуют как таковые.</p>
</div>

Проблема с вложенностью селекторов в том, что это в конечном итоге делает код более трудным для чтения. Нужно уметь мысленно вычислять, что получится в результате из уровней вложенности; не всегда вполне очевидно, что за CSS будет в конечном итоге.

Это утверждение становится правдивее, когда селекторы становятся длиннее и ссылки на текущий селектор (`&`) более частыми. В какой-то момент риск потерять след и не суметь понять, что происходит, становится настолько высок, что не стоит того.

Чтобы предотвратить такую ситуацию, **избегайте вложенности селекторов, насколько это возможно**. Тем не менее, есть, очевидно, несколько исключений из этого правила.

### Исключения

Во-первых, можно, и я даже рекомендую вкладывать псевдоклассы и псевдоэлементы в родительский селектор.

{% include snippets/syntax/33/index.html %}

Использование вложенности селекторов для псевдоклассов и псевдоэлементов не только имеет смысл (потому что имеет дело с тесно связанными селекторами), но также помогает держать всю информацию о компоненте в одном месте.

Кроме того, при использовании классов, обозначающих состояние, таких как `.is-active`, это прекрасно подходит для того, чтобы вкладывать их под селектор компонента, чтобы всё выглядело аккуратно.

{% include snippets/syntax/34/index.html %}

Последнее, но не менее важное – при оформлении элемента часто случается, что он содержится в другом элементе, и тут также хорошо использовать вложенность, чтобы держать всё о компоненте в том же месте.

{% include snippets/syntax/35/index.html %}

При работе с неопытными разработчиками, селекторы, такие как `.no-opacity &`, могут выглядеть немного странно. Для предотвращения какой-либо путаницы, можно построить очень короткую примесь, которая преобразует этот странный синтаксис в явный API.

{% include snippets/syntax/36/index.html %}

Переписывание нашего предыдущего примера будет выглядеть следующим образом:

{% include snippets/syntax/37/index.html %}

Как и везде, специфика несколько неуместна, последовательность является ключевым фактором.<!-- TODO fix --> Если вы чувствуете, что полностью уверены во вложенности селекторов, тогда используйте её<!-- TODO replace “е” to “ё” when necessary -->. Просто убедитесь, что вся ваша команда справится с этим.

###### Дальнейшее чтение

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)
