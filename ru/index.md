---
layout: default
---

# Об авторе

Меня зовут [Hugo Giraudel](http://hugogiraudel.com), Я frontend-разработчик из Франции, собираюсь переехать в Германию, в Берлин. Я пишу на Sass больше двух лет и теперь являюсь автором таких Sass-проектов, как [SassDoc](http://sassdoc.com) и [Sass-Compatibility](http://sass-compatibility.github.io).

Я также написал несколько библиотек, в основном ради интереса: [SassyJSON](https://github.com/HugoGiraudel/SassyJSON), [SassyLists](http://sassylists.com), [SassySort](https://github.com/HugoGiraudel/SassySort), [SassyCast](https://github.com/HugoGiraudel/SassyCast), [SassyMatrix](https://github.com/HugoGiraudel/SassyMatrix), [SassyBitwise](https://github.com/HugoGiraudel/SassyBitwise), [SassyIteratorsGenerators](https://github.com/HugoGiraudel/SassyIteratorsGenerators), [SassyLogger](https://github.com/HugoGiraudel/SassyLogger), [SassyStrings](https://github.com/HugoGiraudel/SassyStrings) и [SassyGradients](https://github.com/HugoGiraudel/SassyGradients).

<div class="button-wrapper">
  <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="button">Лови меня в Твиттере</a>
</div>











# Сотрудничество

Руководство Sass – открытый проект, которым я руковожу в свободное время. Излишне говорить, что это довольно большой объем работы, чтобы держать всё задокументированным в последней версии. Знать, что вам понравилось это руководство – уже ценно!

Теперь, если вы чувтствуете, что готовы к сотрудничеству, пожалуйста, знайте, уже будет очень здорово просто твитнуть, рассказав или открыв Pull Request с исправлением ошибок в [репозитории на GitHub](https://github.com/HugoGiraudel/sass-guidelines)!

Прежде, чем мы начнём: если вам понравился этот документ, или он оказался полезен вам или вашей команде, пожалуйста, подумайте о го поддержке!

<div class="button-wrapper">
  <a href="https://gum.co/sass-guildelines" target="_blank" class="button">Поддержите руководство Sass</a>
  {% capture tweet %}{{ site.title }}, {{ site.description }} от @{{ site.twitter_username }} –{% endcapture %}
  <a href="https://twitter.com/share?text={{ tweet | cgi_escape }}&url={{ site.url }}" target="_blank" class="button">Расскажите</a>
</div>











# Содержание

* [Об авторе](#about-the-author)
* [Сотрудничество](#contributing)
* [О Sass](#about-sass)
  * [Ruby Sass или LibSass](#ruby-sass-or-libsass)
  * [Sass или SCSS](#sass-or-scss)
  * [Другие препроцессоры](#other-preprocessors)
* [Введение](#introduction)
  * [Зачем руководство](#why-a-styleguide)
  * [Отказ от ответственности](#disclaimer)
  * [Ключевые принципы](#key-principles)
* [Синтакс и Форматирование](#syntax--formatting)
  * [Строки](#strings)
  * [Числа](#numbers)
    * [Нули](#zeros)
    * [Единицы измерения](#units)
    * [Вычисления](#calculations)
    * [Магические цифры](#magic-numbers)
  * [Цвета](#colors)
    * [Цветовые форматы](#color-formats)
    * [Цвета и переменные](#colors-and-variables)
    * [Освесление и затемнение цветов](#lightening-and-darkening-colors)
  * [Списки](#lists)
  * [Карты](#maps)
    * [Отладка карт Sass](#debugging-a-sass-map)
  * [Набор правил CSS](#css-ruleset)
  * [Порядок объявлений](#declaration-sorting)
  * [Вкладывание селекторов](#selector-nesting)
    * [Общие правила](#general-rule)
    * [Исключения](#exceptions)
* [Соглашения по именованию](#naming-conventions)
  * [Константы](#constants)
  * [Пространство имен](#namespace)
* [Комментирвание](#commenting)
  * [Написание комментариев](#writing-comments)
  * [Документирование](#documentation)
* [Архитектура](#architecture)
  * [Компоненты](#components)
  * [Шаблон 7-1](#the-7-1-pattern)
    * [Папка Base](#base-folder)
    * [Папка Layout](#layout-folder)
    * [Папка Components](#components-folder)
    * [Папка Pages](#pages-folder)
    * [Папка Themes](#themes-folder)
    * [Папка Utils](#utils-folder)
    * [Папка Vendors](#vendors-folder)
    * [Файл Main](#main-file)
  * [Файл позора](#shame-file)
* [Адаптивный веб-дизайн и точки остановки](#responsive-web-design-and-breakpoints)
  * [Именование точек остановки](#naming-breakpoints)
  * [Менеджер точек остановки](#breakpoint-manager)
  * [Использование медиа-запросов](#media-queries-usage)
* [Переменные](#variables)
  * [Контекст](#scoping)
  * [Флаг !default](#default-flag)
  * [Флаг !global](#global-flag)
  * [Много переменных или карты](#multiple-variables-or-maps)
* [Расширение](#extend)
* [Примеси](#mixins)
  * [Основы](#basics)
  * [Список аргументов](#arguments-list)
  * [Примеси и вендорные префиксы](#mixins-and-vendor-prefixes)
* [Условные операторы](#conditional-statements)
* [Циклы](#loops)
  * [Each](#each)
  * [For](#for)
  * [While](#while)
* [Ошибки и предупреждения](#warnings-and-errors)
  * [Предупреждения](#warnings)
  * [Ошибки](#errors)
* [Инструменты](#tools)
  * [Compass](#compass)
  * [Сетки](#grid-systems)
  * [SCSS-lint](#scss-lint)
* [Слишком длинно; Не читал](#too-long-didnt-read)











# О Sass

Вот так [Sass](http://sass-lang.com) описывает сам себя в своей [документации](http://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass — это расширение CSS, которое добавляет силу и элигантность к основному языку.

Основая цель Sass — это исправить недостатки CSS. CSS, как мы все знаем, не самый лучший язык в мире <sup>[указать источник]</sup>. Являясь довольно простым для освоения, он может быстро стать запутанным, особенно на больших проектах.

Вот в это время и вступает в свою роль Sass как язык мета-программирования, чтобы улучшить CSS синтаксис, для того, чтобы обеспечить дополнительные функции и удобные инструменты.
Между тем, Sass остаётся консервативным в отношении языка CSS.

Цель в том, чтобы не превратить CSS в полнофункциональный язык программирования; Sass только хочет помочь там, где CSS не справляется. Поэтому начать использовать Sass не сложнее, чем начать изучать CSS. Он просто добавляет дополнительные возможности поверх CSS.

Есть много способов использовать эти возможности. Какие-то способы хороши, какие-то – не очень, а некоторые вообще необычные. Это руководство предназначено для того, чтобы дать последовательный и документированый подход для написания Sass.

### Дальнейшее чтение

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)






## Ruby Sass или LibSass

[Первый коммит в Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) был сделан в конце 2006, более 8 лет назад. Излишне говорить, что Sass прошёл долгий путь с тех пор. Изначально разработанный на Ruby, он получил множество портов там и тут. Самый популяный – [LibSass](https://github.com/sass/libsass) (написан на Си), сейчас близок к полной совместимости с изначальным исполнением на Ruby.

В 2014 [команды Ruby Sass и LibSass решили подождать синхронизации версий, прежде чем двигаться дальше](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). С тех пор LibSass активно выпускает версии, чтобы иметь контроль над чётностью версий со старшим братом. Последние оставшиеся несоответствия собраны и перечислены мной в проекте [Sass-Compatibility](http://sass-compatibility.github.io). Если вы знаете о несовместимости между этими двумя версиями, которой нет в списке, пожалуйста, создайте соответствующий issue.

Вернёмся к выбору компилятора. На самом деле, всё зависит от вашего проекта. Если это Ruby on Rails, вам лучше использовать Ruby Sass, который идеально подходит для такого случая. Также следует помнить, что Ruby Sass — это всегда эталонная реализация и всегда будет обгонять LibSass.

Не на Ruby-проектах, которые нуждаются в интеграции рабочего процесса, LibSass, вероятно, лучшая идея, поскольку является наиболее популярным. Так что если вы хотите использовать, скажем, NodeJS, [node-sass](https://github.com/sass/node-sass) — ваш выбор.

### Дальнейшее чтение

* [LibSass](https://github.com/sass/libsass)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)






## Sass или SCSS

Существует довольно много путаницы относительно семантики имени *Sass*, и не зря: Sass означает как препроцессор, так и свой собственный синтаксис. Не очень удобно, не так ли?

Как видите, Sass первоначально описал синтаксис, определяющей характеристикой которого является его чувствительность к вложености. Вскоре в Sass решили сократить разрыв между Sass и CSS, обеспечивая дружественный для CSS синтаксис под названием *SCSS* или *Sassy CSS*. Девиз: “если это правильный CSS, то это правильный SCSS”.

С тех пор, Sass (препроцессор) предоставляет два различных синтаксиса: Sass (не все буквы заглавные, [пожалуйста](http://sassnotsass.com)), также известный как *синтаксис с отступом,* и SCSS. Какой из них использовать в значительной степени, зависит от вас, так как оба строго равны по возможностям. Это только вопрос эстетики.

Cинтаксис Sass опирается на отступы, чтобы избавиться от скобок, точки с запятой и других символов пунктуации, что приводит к более компактному и более короткому синтаксису. Между тем, SCSS легче учиться, так как это в основном крошечные дополнительные кусочки на вершине CSS.

Лично я предпочитаю SCSS вместо Sass, потому что он близок к CSS и более дружелюбен для большинства разработчиков. Поэтому я буду использовать SCSS в этом руководстве.



### Дальнейшее чтение

* [What's the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)






## Другие препроцессоры

Sass — это препроцессор, коих много. Самый серьёзный соперник — это [LESS](http://lesscss.org/), основанный на NodeJS, который стал весьма популярен благодаря CSS-фреймворку [Bootstrap](http://getbootstrap.com/). Также есть [Stylus](http://learnboost.github.io/stylus/), который позволяет делать очень многое, так как почти превращает CSS в язык программирования.

*Почему выбирать Sass, а не другой препроцессор?* Это всё еще действующий вопрос сегодня. Не так давно мы рекомендовали использовать Sass для проектов на Ruby, потому что Sass был создан в Ruby и хорошо работает с Ruby On Rails. Теперь, когда LibSass догнал (в основном) оригинальный Sass, это уже не актуальный совет.

То, что мне нравится в Sass, так это его консервативный подход к CSS. Дизайн Sass основан на строгих принципах: большая часть проектного подхода приходит из мнений команды, о том что что: а) добавление возможностей имеет стоимость сложности, которая должна быть оправдана полезностью, и б) должно быть легко понять, что делает определённый блок стилей, глядя только на него. Кроме того, Sass имеет гораздо более четкое внимание к деталям, чем другие препроцессоры. Насколько я могу судить, основные разработчики очень заботятся о поддержке совместимости с CSS, и любое общее поведение является последовательным.

Другими словами, Sass – не препроцессор, который направлен на удовлетворение гиковатых программистов вроде меня, добавляя в язык возможности, которые не предназначены для поддержки любых логических сценариев использования. Это программное обеспечение, направленое на решение действительных вопросов; он помогает обеспечить полезные возможности CSS, где CSS не дотягивает.

Препроцессоры в сторону, мы должны также упомянуть постпроцессоры, которые получили значительные дозы внимания в течение последних нескольких месяцев, главным образом благодаря [PostCSS](https://github.com/postcss/postcss) и [cssnext](HTTPS://cssnext.github.io/). Постпроцессоры довольно во многом похожи на препроцессоры, кроме того что они не обеспечивают ничего, кроме синтаксиса CSS.

Вы можете думать о постпроцессорах как о поли-заполнителе для неподдерживаемых возможностей CSS. Например, можно было бы написать переменные, как они описаны в [спецификации CSS](http://dev.w3.org/csswg/css-variables/), затем скомпилировать таблицы стилей с постпроцессором – только чтобы найти каждую переменную и заменить на соотвествующее значение, как Sass и сделал бы.

Идея постпроцессоров в том, что как только браузеры поддерживают новые возможности (например, переменные CSS), постпроцессор больше не компилирует их, позволяя браузерам взять это на себя.

Предоставление синтаксиса завтрашнего дня является благородной идеей; я должен сказать, что я по-прежнему предпочитаю использовать Sass для большинства задач. Тем не менее, есть некоторые случаи, когда я считаю, что постпроцессоры подходят больше, чем Sass – например, для вендорных префиксов CSS – но мы к этому ещё вернёмся.


### Дальнейшее чтение

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)











# Введение





## Зачем руководство

Руководство по стилям – это не просто приятный документ для чтения, рисующий ваш код идеальным. Это ключевой документ в жизни проекта, рассказывающий, как и почему код должен быть написан. Это может выглядеть как перебор для небольших проектов, но это очень помогает сохранять кодовую базу чистой, масштабируемой и лёгкой в обслуживании.

Излишне говорить, что чем больше разработчиков, участвующих в проекте, тем больше руководств требуется. Так же, чем больше проект, тем больше руководство по стилям, и это обязательно.

[Гарри Робертс](http://csswizardry.com) очень хорошо об этом говорит в [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Руководство по написанию стилей (заметьте, не визуальное) является ценным инструментом для команд, которые:</p>
  <ul>
    <li>создают и поддерживают продукты в разумные сроки;</li>
    <li>имеют ряд разработчиков, различающихся способностями и специальностями;</li>
    <li>имеют ряд различных разработчиков, работающих на продуктом в любой момент времени;</li>
    <li>имеют постоянную текучку кадров;</li>
    <li>имеют много разного кода, в который разработчики погружаются.</li>
  </ul>
</blockquote>






## Отказ от ответственности

Во-первых: **это не руководство по CSS**. Этот документ не будет обсуждать именования классов CSS, модульные шаблоны и вопрос об ID в мире CSS. Это руководство направлено только на работу с Sass.

Кроме того, это мое личное руководство стилей и поэтому **очень субъективное**. Думайте об этом, как о совокупности методологий и советов, которые я улучшал на протяжении многих лет. Это также даёт мне возможность расставить ссылки на полезные и вдохновляющие ресурсы, так что не забудьте проверять разделы *Дальнейшего чтения*.

Очевидно, что это, конечно, не единственный способ делать вещи, и это может или не может удовлетворить ваш проект. Не стесняйтесь брать отсюда код и подстраивать его под свои нужды. Как говорят у нас, *ваш пробег может отличаться* (в том смысле, что в вашей ситуации может быть по-другому).






## Ключевые принципы

В конце концов, есть одна вещь, которую я хочу донести вам в этом руководстве – **Sass должен быть предельно прост, насколько это возможно**.

Спасибо моим глупым эскпирементам, таким как [битовы операции](https://github.com/HugoGiraudel/SassyBitwise), [итераторы и генераторы](https://github.com/HugoGiraudel/SassyIteratorsGenerators) и [парсер JSON](https://github.com/HugoGiraudel/SassyJSON) на Sass, и теперь мы все хорошо знаем, что можно сделать с этим препроцессором.

Между тем, CSS является простым языком. Sass, предназначенный, чтобы написать CSS, не должен получаться гораздо сложнее, чем обычный CSS. [Принцип KISS](https://ru.wikipedia.org/wiki/KISS_(принцип)) (**K**eep **I**t **S**imple **S**tupid, делай это проще, тупица) является ключевым моментом здесь и может даже взять верх над [принципом DRY](https://ru.wikipedia.org/wiki/Don’t_repeat_yourself) (**D**on't **R**epeat **Y**ourself, не повторяйся) в некоторых случаях.

Иногда лучше повторяться немного, чтобы держать код понятным, а не строить тяжелую, громоздкую, сложную систему, которая полностью нечитаема и сложна в поддержке.

Кроме того, и позвольте мне процитировать [Гарри Робертса](https://csswizardry.com) еще раз, **прагматизм – козырь совершенства**. В какой-то момент, вы, вероятно, пойдёте против правил, описанных здесь. Если это имеет смысл — сделайте это. Код – просто средство, а не цель.



### Дальнейшее чтение

* [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
* [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)











# Синтаксис и форматирование

Если вы спросите меня, что таблица стилей должна делать в первую очередь – так это показать, как мы хотим наш код преподнести.

Когда несколько разработчиков участвуют в написании CSS проекта(ов), то это только вопрос времени, прежде чем один из них начинает делать вещи по-своему. Руководство стилей способствуют не только в согласованости, но и помогает, когда приходит время читать и обновлять код.

Грубо говоря, мы хотим (бесстыдно вдохновлён [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* двойные (2) отступы пробелом, никаких табов;
* в идеале, 80-символьную ширину линий;
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

Языки, которые не требуют, чтобы строки были в кавычках, определенно, в меньшинстве, так что **строки должны всегда быть обёрнуты в одинарные кавычки** в Sass (одну проще набрать, чем двойную, на *QWERTY*-клавиатуре). Кроме того, для согласованности с другими языками, в том числе с двоюродным братом CSS – JavaScript'ом, есть несколько причин для такого выбора:

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
  <p>В предыдущем примере, <code>sans-serif</code> не был обёрнут в кавычки, потому что это специальное значение CSS, которые должно быть без кавычек.</p>
</div>

URL тоже дожны быть в кавычках, по тем же причинам, что и выше:

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

В Sass число – это тип данных, включая всё, от безразмерных чисел до длин, длительности, частоты, углов и так далее. Это позволяет проводить на них рассчёты.



### Нули

Числа должны отображать нули перед десятичным значением меньше единицы. Никогда не отображайте без нулей.

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
1. Шестнадцатеричная нотация. Предпочтительно в нижнем ригистре и по возможности укороченная.

Во-первых, ключевые слова часто говорят сами за себя. Представление HSL – не только самое простое для человеческого мозга<SUP>[указать источник]</ SUP>, это также делает его лёгким для настроики цвета путём регулировки цветового тона, насыщенности и яркости индивидуально. RGB по-прежнему имеет преимущество, показывая прямо сейчас, если цвет более синий, зелёный или красный, но это не делает его лёгким в построении цвета из трёх частей. Наконец, шестнадцатеричное представление слишком сложно для расшифровки человеческим умом.

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

{% include donate.html %}



### Осветление и затемнение цветов



Обе функции [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) и [`darken`](http://sass-lang.com/documentation/Sass/Script/functions.html#darken-instance_method) манипулируют цветами пространства HSL, добавляя или вычитая в пространстве HSL. В принципе, они ни что иное, как алиасы для параметра `$lightness` в функции [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method).

Дело в том, что эта функция часто не даёт ожидаемого результата. С другой стороны, функция [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) является хорошим способом осветлить или затемнить цвет, смешивая его либо с `white`, либо с ` black`.

Преимуществом использования `mix` перед одной из двух указанных функций выше является то, что она будет постепенно меняться на чёрный (или белый), когда вы уменьшаете долю цвета, в то время как `darken` и `lighten` быстро меняют цвет на чёрный или белый.

<figure role="group">
  <img src="/assets/images/lighten-darken-mix.png" alt="Иллюстрация разницы между функциями darken/lighten и mix в Sass" />
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
  @return mix($color, white, $percentage);
}

/// Немного затемнить цвет
/// @access public
/// @param {Color} $color - цвет для затемнения
/// @param {Number} $percentage - процент от `$color` в возвращаемом цвете
/// @return {Color}
@function shade($color, $percentage) {
  @return mix($color, black, $percentage);
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
  <p>Функция <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> разработана чтобы изменять свойства более плавно, принимая во внимание, насколько они уже изменены. Результат так же хорош, как и от <code>mix</code>, но с более удобным вызовом. Хотя, множитель масштабирования – не совсем то же самое.</p>
</div>



### Дальнейшее чтение

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don't Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)






## Списки

Списки Sass эквиваленты массивам. Список представляет собой плоскую структуру данных (в отличие от [карт](#maps)), предназначенную для хранения значений любого типа (в том числе списков со вложенными списками).

Списки должны соблюдать следующие правила:

* если не слишком длинный и помещается на 80-символьную строку, всегда отображать его на одной линии;
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
* открывающая скобка (`(`) на той же линии, что и двоеточие (`:`);
* **ключи в кавычках**, если это строки (в 99% случаев);
* каждая пара ключ/значение на своей строке;
* запятая (`,`) на конце каждой пары ключ/значение;
* **точка с запятой** (`,`) на последней паре, что было легче добавлять, удалять или переставлять пункты;
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

Если вы когда-нибудь терялись, не понимая, что за сумасшедшия магия происходит в карте Sass, не волнуйтесь, потому что есть ещё путь к спасению.

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

* локальные переменные объявляются перед объявлениями, потом отделены от деклараций новой строкой;
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

Есть плюсы и минусы в обоих вариантах. С одной стороны, сортировка в алфавитном порядке является универсальной (по крайней мере, для языков, использующих латинский алфавит), поэтому нет никаких споров о сортировке свойств. Тем не менее, мне весьма странно видеть свойства, такие как `bottom` и` top`, не рядом друг с другом. Почему анимации должны быть перед `display`? Есть много странностей с алфавитным упорядочиванием.

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

С другой стороны, сортировка свойств по типу имеет смысл. Каждые объявления, относящиеся к шрифтам, располагаются рядом, как `top` и` bottom`, и чтение набора правил отчасти становится похожим на чтение рассказа. Но если вы не будете придерживаться некоторых соглашений, таких, как [Idiomatic CSS](https://github.com/necolas/idiomatic-css), есть много места для толкования. Где будет `white-space` – рядом со шрифтами или с `display`? Где расположить `overflow`? Что такое порядок свойств в группе? (Это может быть в алфавитном порядке, о ирония)

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
  <img src="/assets/images/css_order_chart.png" alt="График, показывающий, как разработчики упорядочивают свой CSS" />
  <figcaption>График, показывающий, как разработчики упорядочивают свой CSS</figcaption>
</figure>

Поэтому я не буду навязывать вам выбор. Выберите тот, который вы предпочитаете, пока вы последовательны в ваших стилях.

<div class="note">
  <p><a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">Недавние исследования</a> показали, что использование <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (которое использует <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">упорядовачивание по типу</a>) помагает уменьшить общий размер файла на 2.7% при сжатии Gzip, в сравнении с 1.3%, когда происходит упорядочение по алфовиту.</p>
</div>



### Дальнейшее чтение

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)






## Вкладывание селекторов

Одна особенность Sass, которую не слишком используют многие разработчики – *вложенность селекторов*. Она повзволяет автору таблицы стилей вычислять длинные селекторы, вкладывая короткие селекторы друг в друга.

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

{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}

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

Этот метод часто используется в [методологии BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) для генерации селекторов `.block__element` и `.block--modifier`, основанных на базовом селекторе (т.е `.block` в данном примере).

<div class="note">
  <p>Выходит анекдотично, что создание новых селекторов из ссылки на текущий селектор (`&`) делает новые селекторы недоступными для поиска в кодовой базе, так как они не существуют как таковые.
</div>

Проблема с вложенностью селекторов в том, что это в конечном итоге делает код более трудным для чтения. Нужно уметь мысленно вычислять, что получится в результате из уровней вложенности; не всегда вполне очевидно, что за CSS будет в конечном итоге.

Это утверждение становится правдивее, когда селекторы становятся длиннее и ссылки на текущий селектор (`&`) более частыми. В какой-то момент риск потерять след и не суметь понять, что происходит, становится настолько высока, не стоит того.

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
/// Миксин для предоставления простого API вложенности
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
/// Миксин для предоставления простого API вложенности
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











# Соглашения по именованию

В этом разделе мы не будем иметь дело с лучшими конвенциями CSS именования для сопровождения и масштабирования; не только потому, что это остается за вами, это также из области руководства по стилям для Sass. Я предлагаю те, которые рекомендованы [CSS Руководством](http://cssguidelin.es/#naming-conventions).

Есть несколько вещей, которые вы можете называть в Sass, и очень важно, чтобы названия были хорошими, чтобы весь код выглядил последовательным и легко читался:

* переменные;
* функции;
* миксины.

Sass заполнители намеренно исключены из этого списка, так как они могут быть рассмотрены как обычные селекторы CSS и использовать теже принципы именования как и классы.

Что касается переменных, функций и миксинов, мы будем придерживаться чего-то очень *CSS-ого*: **нижние подчеркивание и дефисы**, и, прежде всего смысл.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) {
  // ...
}

@function opposite-direction($direction) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$vertical-rhythm-baseline: 1.5rem

=size($width, $height: $width)
  // ...

@function opposite-direction($direction)
  // ...
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [CSS Guidelines' Naming Conventions](http://cssguidelin.es/#naming-conventions)






## Константы

Если вы разработчик фреймворка или библиотеки, вам бы пришлось иметь дело с переменными, которые не предназначены для обновления при любых обстоятельствах: константами. К сожалению (или к счастью?), Sass не дает какой-либо способ определения таких переменных, поэтому мы должны придерживаться строгих соглашений об именование.

Как и для многих языков, я предлагаю делать константы переменными в верхнем регистре. Это не только очень старое соглашение, но это также хорошо контрастирует с обычными строчными переменными.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$CSS_POSITIONS: top, right, bottom, left, center;

// Nope
$css-positions: top, right, bottom, left, center;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$CSS_POSITIONS: top, right, bottom, left, center

// Nope
$css-positions: top, right, bottom, left, center
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [Dealing With Constants in Sass](http://www.sitepoint.com/dealing-constants-sass/)






## Пространство имен

Если вы собираетесь распространять ваш Sass код, например, как библиотеку, фрейворк, сетку или что угодно, вы, возможно, захотите рассмотреть пространства имен всех своих переменных, функций,  миксинов и заполнителей, так чтобы они не конфликтовали с чьим-либо кодом.

Например, если вы работаете над проектом *Sassy Unicorn*, который предназначен для использования разработчиками по всему миру (кто бы не хотел, не так ли?), Вы можете рассмотреть возможность использования `su-` как пространство имен. Это достаточно конкретно, чтобы предотвратить любые конфликты имен и достаточно коротко, чтобы не быть болью при написание кода.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$su-configuration: ( ... );

@function su-rainbow($unicorn) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$su-configuration: ( ... )

@function su-rainbow($unicorn)
  // ...
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Обратите внимание, что автоматическая генерация пространств имен, безусловно, цель для предстоящего проекта <code>@import</code> Sass 4.0. Так как это становится все ближе и ближе, то использование библиотек с пространством имен написанным вручную может стать сложнее в использование.</p>
</div>

### Дальнейшее чтение

* [Please Respect the Global CSS Namespace](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)











# Комментирование

CSS является сложным языком, полным хаков и курьезов. Из-за этого, он должен быть прокомментирован, особенно, если вы или кто-то еще собирается читать и обновлять код 6 месяцев или 1 год спустя. Не ставьте себя или кого-нибудь другого в положении *Я не писал этого, о боже, почему*.

Есть еще много возможностей для комментариев в CSS. Это могут быть объяснениями:

* Структура и/или роль файла
* цель набора правил;
* объяснение использования магического числа;
* причина объявления CSS;
* порядок объявления в CSS;
* мыслительный процесс.

И я, наверное, забыл много других различных причин. Комментирование занимает очень мало времени, когда делается вместе с написанием кода, так что делайте это в нужное время. Возвращаясь на кусок кода, чтобы комментировать его не только совершенно нереально, но и крайне раздражительно.






## Написание комментариев

В идеале, *любой* набор CSS правил должен предшествовать комментарию в C-стиле, объясняя цель CSS блока. Этот комментарий также принимает пронумерованные объяснения по поводу конкретных частей набора правил. Например:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Вспомогательный класс для усечения и добавления многоточия в слишком длинную строку
 * на одной линии.
 * 1. Предотвращает сворачивание контента, оставляет его на одной линии.
 * 2. Добавляет многоточие на конце линии.
 */
.ellipsis {
  white-space: nowrap; /* 1 */
  text-overflow: ellipsis; /* 2 */
  overflow: hidden;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Вспомогательный класс для усечения и добавления многоточия в слишком длинную строку
 * на одной линии.
 * 1. Предотвращает сворачивание контента, оставляет его на одной линии.
 * 2. Добавляет многоточие на конце линии.
 */
.ellipsis
  white-space: nowrap /* 1 */
  text-overflow: ellipsis /* 2 */
  overflow: hidden
{% endhighlight %}
  </div>
</div>

В основном все, что не является очевидным, на первый взгляд, должны быть прокомментировано. Нет такого понятия, как слишком много документации. Помните, что вы не можете *комментировать слишком много*, так что пишите комментарии ко всему, что стоит их.

Комментируя Sass раздел, используйте Sass встроенные комментарии вместо блока в C-стиле. Это делает комментарий невидимым на выходе, даже в расширенном режиме в процессе разработки.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Добавить текущий модуль в список импортируемых модулей.
// `!global` важный флаг для глобального обновления переменной.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Добавить текущий модуль в список импортируемых модулей.
// `!global` важный флаг для глобального обновления переменной.
$imported-modules: append($imported-modules, $module) !global
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [CSS Guidelines' Commenting section](http://cssguidelin.es/#commenting)

{% include donate.html %}






## Документирование

Каждая переменная, функция, миксин и плейсхолдер, который предназначен для повторного использования во всем коде должен быть задокументирован как часть глобального API с использованием [SassDoc](http://sassdoc.com).

SassDoc обеспечивает два различных синтаксиса для комментариев: или C-стиль или инлайн. Например, оба из следующих фрагментов являются допустимыми комментариями SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Вертикальный ритм, использующийся во всем коде.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Вертикальный ритм, использующийся во всем коде.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Вертикальный ритм, использующийся во всем коде.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Вертикальный ритм, использующийся во всем коде.
/// @type Length
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Необходим тройной слэш (<code>/</code>).</p>
</div>

Нет никакой выгоды в использовании одного над другим, так что выбирайте тот, который в котром чувствуете себя наиболее уверенно.

SassDoc имеет две основные фунцкии:

* обходит стандартные комментарии, используя систему аннотации на основе всего, что является частью публичного или частного API;
* возможность генерировать HTML версию документации API с помощью любого инструмента генерирования SassDoc (CLI tool, Grunt, Gulp, Broccoli, Node...).

<figure role="group">
<img alt="Документация сгенерированная SassDoc" src="/assets/images/sassdoc-preview.png" />
<figcaption>Документация сгенерированная SassDoc</figcaption>
</figure>

Вот пример миксина обширно документированого с SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Миксин позволяет определять `width` и `height` одновременно.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - Element's `width`
/// @param {Length} $height ($width) - Element's `height`
///
/// @example scss - Usage
/// .foo {
///   @include size(10em);
/// }
///
/// .bar {
///   @include size(100%, 10em);
/// }
///
/// @example css - CSS output
/// .foo {
///   width: 10em;
///   height: 10em;
/// }
///
/// .bar {
///   width: 100%;
///   height: 10em;
/// }
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Миксин позволяет определять `width` и `height` одновременно.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - Element's `width`
/// @param {Length} $height ($width) - Element's `height`
///
/// @example scss - Usage
/// .foo
///   +size(10em)
///
/// .bar
///   +size(100%, 10em)
///
/// @example css - CSS output
/// .foo {
///   width: 10em;
///   height: 10em;
/// }
///
/// .bar {
///   width: 100%;
///   height: 10em;
/// }
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
* [New Features and New Look for SassDoc](http://webdesign.tutsplus.com/articles/new-features-and-a-new-look-for-sassdoc--cms-21914)











# Архитектура

Разработка архитектуры CSS проекта, вероятно, один из самых сложных вещей, которые вы должны будете сделать в жизни проекта. Сохранение архитектуры последовательной и значимой еще сложнее.

К счастью, одно из главных преимуществ использования CSS препроцессоров, возможность разделить кодовую базы в несколько файлов без ущерба для производительности (например,  CSS директива  `@import`). Благодаря Sass `@import`, это совершенно безопасно (и на самом деле рекомендуется), использовать столько файлов, сколько необходимо в развитии, все они потом будут собраны в одном файлк стилей в продакшене.

Кроме того, я не могу не подчеркнуть потребность в папках, даже на небольших проектах. Дома вы не кладете каждый лист бумаги в один и тот же ящик. Вы можете использовать папки; одну для дома, другую для банка, третью для счетов, и так далее. Нет причин поступить иначе при структурировании CSS проекта. Разделяйте кодовую базы на папки, чтобы легко найти материал позже.

Есть много популярных архитектур CSS проектов: [OOCSS](http://oocss.org/), [атомной дизайн](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/) и тому подобные ... все они имеют свои достоинства, плюсы и минусы.

Я сам, использовую подход, который, очень похож на [SMACSS](https://smacss.com/) от [Джонатана Снука](http://snook.ca/), который сосредотачивается на сохранении простоты и очевидности.

<div class="note">
  <p>Я понял, что в основном архитектура зависит от проекта. Используйте или адаптируйте предложенное решение, так чтобы вы имели дело с системой, которая соответствует вашим потребностям.</p>
</div>



### Дальнейшее чтение

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [FR] [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)






## Компоненты

Существует главное отличие между тем, чтобы сделать код *работающим*, или сделать его *хорошим*. Опять таки, CSS вполне несносный язык <sup>[citation needed]</sup>. Чем меньше CSS мы имеем, тем лучше. Мы не хотим иметь дело с мегабайтами кода. Чтобы держать стилевые файлы короткими и эффективными&mdash;и это не будет для вас сюрпризом&mdash;чаще всего бедут хорошей идеей подумать об интерфейсе, как о наборе компонентов.

Компоненты могут быть чем угодно, до тех пор пока они:

* делают одну и только одну вещь;
* могут быть повторно используемы;
* независимы.

Например, форма поиска должна рассматриваться в качестве компонента. Она должна иметь возможность быть использована повторно на разных страницах, в различных ситуациях. Она не должна зависеть от положения в DOM(подвале, боковой панели, главного содержания ...).

Большинство интерфейсов можно рассматривать как набор маленьких компонентов, и я настоятельно рекомендую вам придерживаться этой парадигмы. Это позволит не только сократить количество CSS, необходимого для всего проекта, но также, упростить его поддержку, и хаотический беспорядок.






## Шаблон 7-1

Возвратимся к архитектуре? Я обычно использую, что я называю *Шаблон 7-1*: 7 папок, 1 файл. Обычно у вас есть все ваши паршлы в 7 разных папках, и один файл в корневом каталоге (обычно с именем `main.scss`), который импортирует их все.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

И конечно:

* `main.scss`

<figure role="group">
  <img src="/assets/images/sass-wallpaper.jpg" alt="Один файл чтобы управлять ими всеми, один файл, чтобы найти их, один файл, чтобы привести их всех и отдать Sass для объединения их." />
  <figcaption>Обои от <a href="https://twitter.com/julien_he">Julien He</a></figcaption>
</figure>

В идеале, мы может закончить с чем-то похожим:

<div class="highlight"><pre><code>
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Типографисечкие правила
|   ...                  # и т.д.
|
|– components/
|   |– _buttons.scss     # Кнопки
|   |– _carousel.scss    # Карусель
|   |– _cover.scss       # Обложка
|   |– _dropdown.scss    # Выпадающий список
|   ...                  # и т.д.
|
|– layout/
|   |– _navigation.scss  # Навигация
|   |– _grid.scss        # Сетка
|   |– _header.scss      # Шапка
|   |– _footer.scss      # Подвал
|   |– _sidebar.scss     # Боковая панель
|   |– _forms.scss       # Формы
|   ...                  # и т.д.
|
|– pages/
|   |– _home.scss        # Стили, специфичные для главной страницы
|   |– _contact.scss     # Стили, специфичные для страницы контактов
|   ...                  # и т.д.
|
|– themes/
|   |– _theme.scss       # Тема по умолчанию
|   |– _admin.scss       # Тема админа
|   ...                  # и т.д.
|
|– utils/
|   |– _variables.scss   # Sass переменные
|   |– _functions.scss   # Sass функции
|   |– _mixins.scss      # Sass миксины
|   |– _helpers.scss     # Хелперы классов & плейсходеров
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # и т.д.
|
|
`– main.scss             # главный Sass файл
</code></pre></div>

<div class="note">
  <p>Следующие файлы имеют туже конвенцию наименования, что и выше: они отделены нижним подчеркивание.</p>
</div>



### Папка Base

Папка `base/` содержит шаблонный код проекта. Там, вы можете найти файл сброса, некоторые типографские правила, и, вероятно, стили (я привык их называть `_base.scss`), определяющие некоторые стандартные стили для часто используемых элементов HTML.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`



### Папка Layout

Папка `layout/` содержит все, что принимает участие в постройке сайта или приложения. Эта папка может содержать стили для основных частей сайта (шапка, футер, навигация, боковая панель...), сетка или даже CSS стили для всех форм.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>Папка <code>layout/</code> может быть названа <code>partials/</code>, на ваше усморение.</p>
</div>



### Папка Components

Для маленьких компонентов, есть папка `components/`. В то время, как `layout/`  *макро* (определяет глобальную сетку), `components/` больше сфокусирована на виджетах. И содержит все модули по типу слайдер, лоудера и т.п. виджетов. Обычно там много файлов `components/` с тех пор как приложение или сайт состоит из мгножества мелких модулей.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>Папка <code>components/</code> может быть <code>modules/</code>, на ваше усмотрение.</p>
</div>



### Папка Pages

Если у вас есть стили зависищие от страницы, лучше положить их в папку `pages/`, в файл, названный в честь страницы. Например, это не редкость иметь очень конкретные стили для главной страницы, следовательно, существует потребность в `_home.scss` в `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>В зависимости от способа доставки когда, эти файлы можно было бы назвать самостоятельно, чтобы избежать их объединения с другими стилями. На ваше усмотрение.</p>
</div>



### Папка Themes

В больших сайтах и проложения не является необчным наличие разных тем. Есть разные способы работы с темами, я лично предпочитаю складывать их в папку `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Это очень специфично для проектов и не сильно распространено.</p>
</div>



### Папка Utils

Папка `utils/` собирает Sass инструменты и хелперы в проекте. Каждая глобальная переменная, функция, миксин должна быть помещена сюда.

Правило для этой папки в том, что она не должна генерировать CSS при компиляции сама по себе. Это не что иное, как Sass хелперы.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequently named `_helpers.scss`)

<div class="note">
  <p>Папка <code>utils/</code> может также быть названа <code>helpers/</code>, <code>sass-helpers/</code> или <code>sass-utils/</code>, на ваше усмотрение.</p>
</div>



### Папка Vendors

И последнее, но менее важное, что больгинство проектов будут иметь папку `vendors/`, содержащую все CSS файлы из внешних библиотет и фреймворков – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, и так далее. Нахождение этих файлов в этой папке хороший способ сказать: "Эй, это не от меня, а не мой код, не моя обязанность".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Если вы хотите что-то переписать в этих файлах, то я рекомендую вам ввести 8 папку `vendors-extensions/`, в которой вы будете хранить файлы перезаписи свойст точно с такими же именами.

Например, `vendors-extensions/_boostrap.scss` файл, содержащий все CSS парвила на перезапись правил CSS Bootstrap. Это для того, чтобы не править сами вендоры, что на самом деле не очень хорошая идея.



### Файл Main

Главный файл (обычно названный `main.scss`) должен быть единственным файлом Sass, который не начинается с нижнего поддчекивания. Этот файл не должен содержать ничего кроме `@import` и комментариев.

Файлы должны быть импортированы в соответствие с папкой размещения, один за другим в соответствуещем порядке:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Чтобы улучшить читаемость, главный файл должен следовать этим рекомендация:

* один `@import` на линии;
* не вставлять новые линии между файлами из одной папки;
* новая линия после вставки последнего `@import` из одной и той же папки;
* не писать расширения и нижние подчеркивание.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'utils/variables';
@import 'utils/functions';
@import 'utils/mixins';
@import 'utils/placeholders';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import vendors/bootstrap
@import vendors/jquery-ui

@import utils/variables
@import utils/functions
@import utils/mixins
@import utils/placeholders

@import base/reset
@import base/typography

@import layout/navigation
@import layout/grid
@import layout/header
@import layout/footer
@import layout/sidebar
@import layout/forms

@import components/buttons
@import components/carousel
@import components/cover
@import components/dropdown

@import pages/home
@import pages/contact

@import themes/theme
@import themes/admin
{% endhighlight %}
  </div>
</div>

Существует еще один способ импорта, который действует также. На одной стороны, это делает файл более читаемым. С другой стороны, это делает его обновления немного более болезненным. Во всяком случае, вам решать, что лучше, это не имеет большого значения. Основной файл следует следующим принципам:

* один `@import` на папку;
* перенос строки после `@import`;
* каждый файл на своей строке;
* новая строка после последнего импорта файлы из папки;
* расширение файлов и нижние поддчеркивание упускается.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import
  'vendors/bootstrap',
  'vendors/jquery-ui';

@import
  'utils/variables',
  'utils/functions',
  'utils/mixins',
  'utils/placeholders';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/contact';

@import
  'themes/theme',
  'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import
  vendors/bootstrap,
  vendors/jquery-ui

@import
  utils/variables,
  utils/functions,
  utils/mixins,
  utils/placeholders

@import
  base/reset,
  base/typography

@import
  layout/navigation,
  layout/grid,
  layout/header,
  layout/footer,
  layout/sidebar,
  layout/forms

@import
  components/buttons,
  components/carousel,
  components/cover,
  components/dropdown

@import
  pages/home,
  pages/contact

@import
  themes/theme,
  themes/admin
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Для того, чтобы не импортировать каждый файл вручную есть Ruby Sass расширение, которое называется <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, оно позволяет использовать glob шаблон в Sass <code>@import</code>, как, например, <code>@import "components/*"</code>.</p>
  <p>Как было сказано, я бы не стал это рекомендовать, потому что используется упорядочение по алфавиту, что иногда может быть не тем, что вы хотите, особенно, когда вы имеете дело с языком, в котором важно упорядочение.</p>
</div>






## Файл позора

Это интересный концепт, который стал популяреным благодаря [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) и [Chris Coyier](http://css-tricks.com) и состоит в том, чтобы складывать все хаки и код, которым вы не гордитесь в *shame файл*. Поэтому этот файл имеет такое драматическое название `_shame.scss`, импортируется в самом конце.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Специфичный для Nav fix.
 *
 * Кто-то использовал ID в коде шапки (`#header a {}`), который перекрывает
 * nav селекторы (`.site-nav a {}`). Используйте !important, чтобы перекрыть их,
 * до тех пор, пока я не отрефакторю шапку.
 */
.site-nav a {
    color: #BADA55 !important;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Специфичный для Nav fix.
 *
 * Кто-то использовал ID в коде шапки (`#header a {}`), который перекрывает
 * nav селекторы (`.site-nav a {}`). Используйте !important, чтобы перекрыть их,
 * до тех пор, пока я не отрефакторю шапку.
 */
.site-nav a
    color: #BADA55 !important
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)











# Адаптивный веб-дизайн и точки остановки

Я не думаю, что надо еще раз представлять адаптивный веб-дизайн, так как он сейчас везде. Тем не менее, вы можете задаться вопросом *почему раздел об адаптивном веб-дизайне находится в руководсте по Sass?* На самом деле есть немного вещей, чтобы сделать работу с точками остановки легче, поэтому я подумал, что это неплохая идея перечислить их здесь.







## Именование точек остановки

Я думаю, что это нормально, что медиа запросы не должны быть привязаны к специальным устройствам. Например, опрделенно плохая идея специально нацеливаться на iPad или Blackberry устройства. Медиа запросы должны обслуживать диапазон размеров экрана, до тех пор пока не будет перехода к следующему медиа запросу.

По этим же причинам, наименование точек остановки не должно соотвествовать устройствам, а иметь более общие названия. Тем более, что некоторые телефоны теперь больше, чем планшеты, а некоторые планшеты больше экранов маленьких компьютеров и т.п. ...

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$breakpoints: (
  'medium': (min-width: 800px),
  'large': (min-width: 1000px),
  'huge': (min-width: 1200px),
);

// Nope
$breakpoints: (
  'tablet': (min-width: 800px),
  'computer': (min-width: 1000px),
  'tv': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$breakpoints: ("medium": (min-width: 800px), "large": (min-width: 1000px), "huge": (min-width: 1200px))

// Nope
$breakpoints: ("tablet": (min-width: 800px), "computer": (min-width: 1000px), "tv": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

С этой точки зрения, любые именования, которые делают совершенно ясным, что дизайн не привязан к типу устройства будут работать, до тех пор, пока они дают чувство масштаба.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$breakpoints: (
  'seed': (min-width: 800px),
  'sprout': (min-width: 1000px),
  'plant': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$breakpoints: ("seed": (min-width: 800px), "sprout": (min-width: 1000px), "plant": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>




### Дальнейшее чтение

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)






## Менеджер точек остановки

После того, как вы объявили ваши точки остановки, вам нужен способ, чтобы использовать их в медиа запросах. Есть много способов сделать это, но я должен сказать, что я большой поклонник получения точек остановки из карт через геттер функцию. Эта система является одновременно простой и эффективной.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Responsive manager.
/// @access public
/// @param {String} $breakpoint - точка остановки
/// @requires $breakpoints
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media #{inspect(map-get($breakpoints, $breakpoint))} {
      @content;
    }
  }

  @else {
    @error 'Не указано значение для `#{$breakpoint}`. '
         + 'Пожалуйста убедитесь, что точка остановки объявлена в карте `$breakpoints`.';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Responsive manager.
/// @access public
/// @param {String} $breakpoint - точка остановки
/// @requires $breakpoints
=respond-to($breakpoint)
  @if map-has-key($breakpoints, $breakpoint)
    @media #{inspect(map-get($breakpoints, $breakpoint))}
      @content

  @else
    @error 'Не указано значение для `#{$breakpoint}`. '
         + 'Пожалуйста убедитесь, что точка остановки объявлена в карте `$breakpoints`.'
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Очевидно, что это довольно упрощенный менеджер точек остановки, который не будет работать, когда надо обрабатывать пользовательские или несколько точек.</p>
  <p>Если вам нужен менеджер с расширенными настройками, могу порекоммендовать вам не изобретать колесо, а воспользоваться эффективными имеющимися <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> или <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>



### Дальнейшее чтение

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)






## Использование медиа-запросов

Не так давно были довольно жаркие дебаты о том, где должны быть описаны медиа запросы: должны ли они быть в селекторах (как это позволяет Sass) или строго отделены от них? Я должен сказать, что я искренний защитник системы *медиа селекторов вне системы*, я думаю, что это хорошо сочетается с идеей *компонентов*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  @include respond-to('medium') {
    color: blue;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  +respond-to('medium')
    color: blue
{% endhighlight %}
  </div>
</div>

Приводит к следующему CSS:

{% highlight css %}
.foo {
  color: red;
}

@media (min-width: 800px) {
  .foo {
    color: blue;
  }
}
{% endhighlight %}

Вы можете услышать, что это правило приводит к дублированию медиа запросов в результируещем CSS. Это, безусловно, верно. Хотя, [были сделаны тесты](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) и последние говорят о том, что это не имеет значения, как только Gzip (или любой эквивалентный) делает свое дело:

> … мы выяснили были ли влияния на производительность комбинированных и рассеяных медиа запросов и пришли к выводу, что различие является минимальным в худшем случае, а по существу, не существует.<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), regarding [Breakpoint](http://breakpoint-sass.com/)

Теперь, если вы действительно обеспокоены дублированнем медийных запросов, вы все еще можете использовать инструмент, чтобы объединить их, например, [этот gem](https://github.com/aaronjensen/sass-media_query_combiner), однако, я должен вас предупредить о возможных побочных эффектах перемещения CSS кода. Вы остаетесь без представление о порядоке кода, что является важным.



### Дальнейшее чтение

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)











# Переменные

Переменные являются сутью любого языка программирования. Они позволяют нам использовать значения без необходимости копировать их снова и снова. Самое главное, что они делают обновление этого значения очень легким. Не нужен поиска и ручная замена.

Однако CSS не что иное, как огромная корзина, содержащая все наши яйца. В отличие от многих языков, нет никаких реальных областей видимости в CSS. Из-за этого, мы должны уделять много внимания при добавлении переменных из-за риска конфликтов.

Мой совет создавать переменные, когда это имеет смысл. Не инициализировать новые переменные ради инциализации. Новая переменная должна быть создана только тогда, когда выполняются следующие критерии:

* это значение повторяется хотя бы дважды;
* это значение будет обновлено хотя бы один раз;
* все вхождения значения привязаны к переменной (т.е не по стечению обстоятельств).

В принципе, нет никакого смысла объявлять переменную, которая никогда не будет обновлена или которая используется только в одном месте.






## Контекст

Область видимости переменных в Sass изменялась за эти годы. До недавнего времени, объявленые переменные в пределах набора правил и других областей были локальными по умолчанию. Однако, когда была уже глобальная переменная с тем же именем, назначение локального значения изменило бы глобальную переменную. Начиная с версии 3.4, Sass теперь правильно решает концепцию областей видимости и создает новую локальную переменную вместо перезаписи глобальной.

Документация говорит о *затенение глобальной переменной*. При объявлении переменной, которая уже существует в глобальной области во внутренней области (селектор, функции, примесь ...), локальная переменная называется *тенью* глобальный. В основном, она перезаписывается только для локальной области видимости.

Следующий фрагмент кода объясняет концепцию *затенение переменных*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Объявите глобальную переменную на корневом уровне.
// В этом случае используется флаг `!global`.
$variable: 'initial value' !global;

// Создайте примесь, которая перезаписывает глобальные переменные.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Создайте локальную переменную, которая затеняет глобальную.
  $variable: 'local value';

  // Примените примесь: она перезапишет глобальную переменную.
  @include global-variable-overriding;

  // Выведите значение переменной.
  // Теперь значение **локальной**, с тех пор, как она затеняет глобальную.
  content: $variable;
}

// Выведите это переменную в другом селекторе, который не делает затенения.
// Теперь значение **глобальное**, как и ожидалось.
.other-local-scope::before {
  content: $variable;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Объявите глобальную переменную на корневом уровне.
// В этом случае используется флаг `!global`.
$variable: 'initial value' !global

// Создайте примесь, которая перезаписывает глобальные переменные.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
  // Создайте локальную переменную, которая затеняет глобальную.
  $variable: 'local value'

  // Примените примесь: она перезапишет глобальную переменную.
  +global-variable-overriding

  // Выведите значение переменной.
  // Теперь значение **локальной**, с тех пор, как она затеняет глобальную.
  content: $variable

// Выведите это переменную в другом селекторе, который не делает затенения.
// Теперь значение **глобальное**, как и ожидалось.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>

{% include donate.html %}






## Флаг `!default`

При построении библиотеки, фреймворка, сетки или любого Sass кода, который предназначен для использования другими разработчиками, все переменные должны быть определены с флагом `!default`, чтобы они могли быть перезаписаны.

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

Благодаря этому, разработчик может определить свою собственную переменную `$baseline` *перед* импортом вашей библиотеки, при этом она не будет переопределена.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Переменная разработчика
$baseline: 2em;

// Объявление переменной `$baseline` из библиотеки
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Переменная разработчика
$baseline: 2em

// Объявление переменной `$baseline` из библиотеки
@import your-library

// $baseline == 2em
{% endhighlight %}
  </div>
</div>






## Флаг `!global`

Флаг `!global` следует использовать только тогда, когда переопределяете глобальную переменнуюу из локальной области видимости. При определении переменной на корневом уровне, `global` флаг должен быть опущен.

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






## Много переменных или карты

Существуют преимущества использования карт переменных, а не нескольких отдельных переменных. Главным является способность прохода по картам, которое невозможно с отдельными переменными.

Другая выгода, что при использование карт есть способность создать небольшой функции получения значений, чтобы обеспечить дружественный API. Например, рассмотрим следующий Sass код:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Карта Z-indexe'ов, собирает все Z слои приложения
/// @access приватная
/// @type Карта
/// @prop {String} ключ - Имя слоя
/// @prop {Number} значение - Z значение соответствущие ключу
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Получения z-index значения из имени слоя
/// @access публичная
/// @param {String} $layer - Имя слоя
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Карта Z-indexe'ов, собирает все Z слои приложения
/// @access приватная
/// @type Карта
/// @prop {String} ключ - Имя слоя
/// @prop {Number} значение - Z значение соответствущие ключу
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Получения z-index значения из имени слоя
/// @access приватная
/// @param {String} $layer - Имя слоя
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>











# Расширение

Директива `@extend` одна из особенностей, которая сделала Sass таким популярным несколько лет назад. Напомним, что она позволяет Sass разработать элемент A именно так, как будто он также соответствует селектору B. Разумеется, этот функционал является ценным союзником при написании модульного CSS.

Однако, я чувствую, что я должен предостеречь вас от этой директивы. Директива `@extend` до сих пор сложная концепция, которая может принести больше вреда, чем пользы, особенно когда неправильно используется. Дело в том, что при расширении селектора, вы практически не имеете возможности ответить на вопросы, о том, что происходит, не имея глубоких знаний всей кодовой базы:

* где мой текущий селектор будет добавлен?
* я, скорее всего, яляюсь причиной нежелательных побочных эффектов?
* насколько много CSS генерируются одной директивой ?

Чтобы вы знали, результат может варьироваться от никакого до катастрофических побочных эффектов. Из-за этого, мой совет избегать `@extend` директиву. Это может показаться жестким, но в конце концов, это может спасти вас от головной боли и неприятностей.

Как говорится:

> Никогда не говори никогда.<br>
> &mdash; По видимому, [не Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Есть ситуации, в которых расширяющие селекторы могут быть полезны и стоят того, чтобы их использовать. Тем не менее, всегда имейте в виду, эти правила, чтобы не попасть в беду:

* Используйте директиву расширения внутри модуля, но не в разных модулях.
* Используйте директиву расширения исключительно на плейсхолдеры, а не на реальных селекторах.
* Убедитесь, что плейсхолдер, который вы расширияте присутствует как можно реже в таблице стилей.

Если вы собираетесь использовать расширения, позвольте мне также напомнить вам, что это не очень хорошо работает с `@media` блоками. Как вы, возможно, знаете, Sass не в состоянии расширить внешний селктор изнутри медиа запроса. При этом, компилятор просто вылетает, говоря вам, что вы не можете сделать такую вещь. Не очень приятно. Тем более, что медиа, почти всё, что мы знаем.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // Это не работает. Еще хуже: это ломает.
    @extend .foo;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  content: 'foo'

@media print
  .bar
    // Это не работает. Еще хуже: это ломает.
    @extend .foo
{% endhighlight %}
  </div>
</div>

> Вы не можете расширить внешний селектор из медиа запроса с помощью @extend.<br>
> Вы можете делать @extend только селекторов внутри одной и той же директивы.

<div class="note">
  <p>Говорят, что <code>@extend</code> уменьшает размер файла, так как комбинирует селекторы, а не дублирует код. Это правда, однако, разница незначительна <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a>.</p>
  <p>Если вы не можете использовать Gzip (или эквивалент), то использование <code>@extend</code> может быть и не так плохо, до тех пор пока вы знаете, что вы делаете.</p>
</div>

Подводя итог, я бы **не рекомендовал использовать директиву `@extend`**, только если при некоторых конкретных обстоятельствах, но я не буду заходить так далеко, чтобы запрещать её.


### Дальнейшее чтение

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)











# Примеси

Примеси одна из самых важных частьей из всего языка Sass. Они являются ключом к повторному использованю и DRY компонентам. Позволяют авторам определить стили, которые будут повторно использоваться по всей таблице стилей без надобности к использованию таких несемантических классов как `.float-left`.

Они могут содержать полный набор CSS правил и в значительной степени всё, что разрешено в любом месте документа Sass. Они могут принимать аргументы, как функции. Излишне говорить, что их возможности безграничны. 

Но я чувствую, что я должен вас предупредить, о злоупотребление силой примесей. Опять же, ключевое слово здесь это *простота*. Это очень заманчиво строить чрезвычайно мощные примеси с огромным количеством логики. Это называется техническим усложением и большинство разработчиков страдает от этого. Не усложняйте код, и, прежде всего сохраняйте его простым. Если примесь становится больше, чем 20 строк или около того, то она должна быть разбита на более мелкие части или полностью пересмотрена.






## Основы

Как было сказано примеси чрезвычайно полезны, и вы должны их использовать. Правило гласит, что если вам случится встреить набор CSS свойств, которые всегда появляются вместе по причине (т.е. не случайно), то вы можете поместить их в примесь. [Micro-clearfix хак от Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) заслуживает быть помещенным в примесь (без аргументов), например.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper to clear inner floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Helper to clear inner floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix
  &::after
    content: ''
    display: table
    clear: both
{% endhighlight %}
  </div>
</div>

Еще один обоснованный пример примеси будет примесь для определения размера элемепнта, одновременно определяющий и `ширину` и `высоту`. Код станет не только легче набирать, но и легче читать.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Помощник для определения размера
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Помощник для определения размера
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)






## Список аргументов

Когда имеешь дело с неизвестным количеством аргументов в примеси, то всегда используйте `arglist`, а не список. Думайте о `arglist`, как о 8 скрытом недокументированным типе данных Sass, неявность которого позволяет использовать произвольное количество аргументов в примеси или функции, подписи которых содержат `...`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin shadows($shadows...) {
  // type-of($shadows) == 'arglist'
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=shadows($shadows...)
  // type-of($shadows) == 'arglist'
  // ...
{% endhighlight %}
  </div>
</div>

Теперь, когда вы деалете примесь, которая принимает несколько аргументов (3 или более), подумаейте дважды прежде чем создавать один список или может будет легче передавать их по одному.

Sass очень умный в работе с примесями и объявлениями функций, так передавая список или карту в качестве списка аргументов для функции/примеси, это анализируется как ряд аргументов.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin dummy($a, $b, $c) {
  // ...
}

// Yep
@include dummy(true, 42, 'kittens');

// Yep but nope
$params: true, 42, 'kittens';
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3));

// Yep
$params: true, 42, 'kittens';
@include dummy($params...);

// Yep
$params: (
  'c': 'kittens',
  'a': true,
  'b': 42
);
@include dummy($params...);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=dummy($a, $b, $c)
  // ...

// Yep
+dummy(true, 42, 'kittens')

// Yep but nope
$params: true, 42, 'kittens'
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3))

// Yep
$params: true, 42, 'kittens'
+dummy($params...)

// Yep
$params: ( 'c': 'kittens', 'a': true, 'b': 42, )
+dummy($params...)
{% endhighlight %}
  </div>
</div>



### Дальнейшее чтение

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)






## Примеси и вендорные префиксы

Написание пользовательских примесей для обработки префиксов для неподдерживаемых или частично поддерживаемых свойств CSS может быть очень заманчивым. Но мы бы не хотели это делать. Сперва, если вы можете использовать [Autoprefixer](https://github.com/postcss/autoprefixer), используйте Autoprefixer. Это сделает Sass код вашего проекта всегда соотвествующим последним обновлениям и сделает работу лучше, чем ваши код для подстановки префиксов.

К сожалению, Autoprefixer не всегда вариант. Если вы используете [Bourbon](http://bourbon.io/) или [Compass](http://compass-style.org/), вы уже наверника знаете, что они поставляют коллекцию примесей для обработки вендорных префиксов. используйте их.

Если вы не можете использовать Autoprefixer, Bourbon и Compass, то тогда вы должны использовать вашу собственную примесь для подстановки префиска CSS свойствам. Но, пожалуйста, не делайте на свойство по примеси, вручную выводя каждый вендор. 

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Nope
@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  transform: $value;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Nope
=transform($value)
  -webkit-transform: $value
  -moz-transform: $value
  transform: $value
{% endhighlight %}
  </div>
</div>

Do it the clever way.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Примесь, которая выводит вендорные префиксы
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - CSS свойство без префикса
/// @param {*} $value - Сыррое значение CSS свойства
/// @param {List} $prefixes - Список префиксов для вывода
@mixin prefix($property, $value, $prefixes: ()) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }

  #{$property}: $value;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// римесь, которая выводит вендорные префиксы
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - CSS свойство без префикса
/// @param {*} $value - Сыррое значение CSS свойства
/// @param {List} $prefixes - Список префиксов для вывода
=prefix($property, $value, $prefixes: ())
  @each $prefix in $prefixes
    -#{$prefix}-#{$property}: $value

  #{$property}: $value
{% endhighlight %}
  </div>
</div>

Использование этой примеси будет очень простым:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  @include prefix(transform, rotate(90deg), webkit ms);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  +prefix(transform, rotate(90deg), webkit ms)
{% endhighlight %}
  </div>
</div>

Пожалуйста, помните о том, что это слабое применение. Например, это не поможет справиться со сложными полифилами, такими как те, которые нужны для Flexbox. Поэтому использование Autoprefixer будет куда лучшим вариантом.



### Дальнейшее чтение

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)











# Условные операторы

Вы уже, наверное, знаете, что Sass предоставляет условные операторы, такие как `@if` и `@else`.  

Тем не менее, если вам когда-нибудь понадобится использовать их, пожалуйста, следуйте следующим рекоммендациям: 

* Никакх скобок, до тех пор пока они не нужны;
* Всегда пуста строка перед `@if`;
* Всегда разрыв строки после открывающей фигурной скобки (`{`);
* `@else` на одной линии с предыдущией закрывающей скобкой (`}`).
* Всегда новая пустая строка после последней закрывающей скобки (`}`), если следующая строка не закрывающая скобка (`}`).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if $support-legacy {
  // ...
} @else {
  // ...
}

// Nope
@if ($support-legacy == true) {
  // ...
}
@else {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if $support-legacy
  // ...
@else
  // ...

// Nope
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

При тестировании на falsy значения, всегда используйте `not` ключевое слово, а не проверки на` false` или `null`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if not index($list, $item) {
  // ...
}

// Nope
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if not index($list, $item)
  // ...

// Nope
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

При использовании условных операторов внутри функции для того, чтобы вернуть другой результат, основанный на некоторых условиях, всегда убедитесь, что функция по-прежнему имеет `@return` в каких-либо условных блоков.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// Nope
@function dummy($condition) {
  @if $condition {
    @return true;
  } @else {
    @return false;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// Nope
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>











# Циклы

И-за того, что Sass предоставляет комплексные структуры данных, такие как [списки](#lists) and [карты переменных](#maps), не удивительно, что он также дает почву для перебора по в этих объектах.

Тем не менее, наличие циклов, как правило, подразумевает умеренно сложную логику, что, вероятно, не относится к Sass. Перед использованием цикла, убедитесь, что он имеет смысл и что он на самом деле решает проблему.






## Each

Цикл `@each` безусловно, наиболее часто используемый из трех циклов, предусмотренных Sass. Он предоставляет чистый API для перебора списка или карты перменных.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $theme in $themes {
  .section-#{$theme} {
    background-color: map-get($, $theme);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $theme in $themes
  .section-#{$theme}
    background-color: map-get($colors, $theme)
{% endhighlight %}
  </div>
</div>

При итерации по карте переменных, всегда используйте `$key` и` $value` имена переменных для  соблюдения последовательности.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $key, $value in $map
  .section-#{$key}
    background-color: $value
{% endhighlight %}
  </div>
</div>

Также проверьте, чтобы соблюдались эти принципы, чтобы сохранить читаемость:

* Всегда пустая строка перед `@each`;
* Всегда пустая строка после закрывающей скобки (`}`), до тех пор, пока новая линия не закрывающая скобка (`}`).






## For

Цикл `@for` может быть полезным, когда скомибинирован с CSS псевдоклассом `:nth-*` . Исключая сценарии, когда предпочтительнее использовать `@each` цикл, если вам надо пройтись по какому-нибудь объекту.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@for $i from 1 through 10
  .foo:nth-of-type(#{$i})
    border-color: hsl($i * 36, 50%, 50%)
{% endhighlight %}
  </div>
</div>

Всегда используйте `$i` как переменную для соблюдения конвенции, до тех пор пока у вас нет веских причин изменить её, никогда не используйте ключевое слово `to`, используйте  `through`. Многие разработчики даже и не знают, что Sass предоставляет такие варианты; использование может привести к путанице.

Также следуйте этим руководящим принципам, чтобы сохранить читаемость:

* Всегда пустая линия перед `@each`;
* Всегда пустая линия после закрывающей скобки (`}`), до тех пор пока следующая линия не закрывающая скобка (`}`).






## While

Цикл `@while` не имеет абсолютно никакого применения в реальном Sass проекте, особенно с тех пор, как нет способа остановить цикл изнутри. **Не используйте его**.











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
/// Z-indexes карта переменных, собирает все Z слои приложения
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
/// Z-indexes карта переменных, собирает все Z слои приложения
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











# Инструменты

Что приятно, так это что CSS препроцессоры так популярные, как Sass, поставляются с экосистемой фреймворков, плагинов, библиотек и инструментов. После 8 лет существования мы приближаемс к точке, где [все что может быть написано на Sass будет написано yf Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

Тем не менее мой совет будет снизить количество зависимостей к минимальному. Управляя зависимостями чем-то похоже на ад, в котором вы не хотели бы оказаться. Кроме того, нет особой необходимости использовать внешние зависимости, когда работаете с Sass. 






## Compass

[Compass](http://compass-style.org/) главный Sass фреймворк. Разработанный [Chris Eppstein](https://twitter.com/chriseppstein), одним из ключевых разработчиков Sass, и я не вижу снижения его популярности со временем, если вы хотите моё мнение.

Тем не менее, я больше не использую Compass, главная причина в том, что он сильно замедляет Sass. Ruby Sass сам по себе весьма медленный и поэтому добавляя больше Ruby и больше Sass не особо помагает первому. 

Дело в том, что мы используем очень мало из всего фреймворка. Compass огромен. Примеми кроссбраузерной совместимости лишь вершина айсберга. математические функции, помощники изображений, спрайтирование... Есть еще много того, что може быть сделанно с этим фреймворком.

К сожалению, это все сахар и супер функционала в нем нет. Исключение может быть сделанно только для механизма построения спрайтов, который *по-настоящему ххорош*, но [Grunticon](https://github.com/filamentgroup/grunticon) и [Grumpicon](http://grumpicon.com/) тоже отлично справляются и имеют выгоду  в том, что могут быть подключенны в процессе сюорки.

Во всяком случае, я не запрещаю использовать Compass, хотя я бы не рекомендовал его, тем более, что он не LibSass-совместимый (даже если были предприняты усилия в этом направлении). Если вы чувствуете, что вам стоит использовать его, то это достаточно справедливо для ег оиспользования, но я не думаю, что вы получитмного от него в конце дня.

<div class="note">
  <p>Ruby Sass в настоящее время подвергается некоторым выдающимся оптимизациям, которые специально предназначены для тяжелых стилей с множеством функций и примесей. Они должны резко повысить производительность до точки, когда Compass и другие фреймворки не будут больше замедлять Sass..</p>
</div>



### Дальнейшее чтение

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## Сетки

Отказ от использования системы сеток не является вариантом сейчас, когда адаптивный веб-дизайн повсюду. Для того, чтобы дизайн выглядел хорошо на всех размерах мы используем сетку для расположения элементов. Чтобы избежать необходимости писать код этой сетки снова и снова, некоторые блестящие умы сделал сетки многоразового использования.

Позвольте мне сказать это прямо: я не большой поклонник сеток. Конечно, я вижу их потенциал, но я думаю, что большинство из них полностью излишне и в основном используется для рисования красных столбцов на белом фоне для презинтаций дизайнеров. Когда в последний раз вы думали, что *спасибо Богу, что Я использовал этот инструмент, чтобы построить эту 2-5-3.1-π-секту*? Всё верно, никогда. Потому что в большинстве случаев, вы просто хотите обычную 12-колоночную сетку и ничего сложного.

Если вы используете CSS фреймворк для вашего проекта, такой как [Bootstrap](http://getbootstrap.com/) или [Foundation](http://foundation.zurb.com/), велика вероятность того, он включает в себя систему сеток и уже в этом случае я бы рекомендовал использовать его, чтобы избежать необходимости иметь дело с еще одной зависимостью.

Если вы не привязаны к спецефичной сетке, то вам будет приятно знать, что есть два первоклассных Sass движка для сетки: [Susy](http://susy.oddbird.net/) и [Singularity](http://singularity.gs/). Обе делают гораздо больше, чем вам когда-нибудь понадобится, так что вы можете выбрать тот, который вы предпочитаете между этими двумя и убедитесь, что все ваши крайние случаи &mdash;даже самые изящные из них&mdash; будут покрыты.Если вы спросите меня, то Susy имеет немного лучшее сообщество, но это мое мнение.

Или вы можете использовать что-то немного более непренужденное, как [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). В общем, выбор не будет иметь большого влияния на ваш стиль написания кода, так что это в значительной степени зависит от вас.



### Дальнейшее чтение

* [Singularity](http://singularity.gs/)
* [Singularity: Grids Without Limits](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity Grid System](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy](http://susy.oddbird.net/)
* [Build Web Layouts Easily with Susy](http://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](http://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](http://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap's Grid System vs Susy: a Comparison](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](http://www.sitepoint.com/creative-grid-system-sass-calc/)






## SCSS-lint

Проверка когда на качество всегда очень важна. Как правило, следующие рекомендации из руководста помогает уменьшить количество ошибок качества кода , но никто не совершенен и всегда есть вещи, чтобы улучшить. Таким образом, можно сказать, что проверка кода также важна, как и комментирование его.

[SCSS-lint](https://github.com/causes/scss-lint) является инструментом, чтобы помочь вам сохранить ваши файлы CSS чистым и читаемыми. Это инструмент полностью настраиваемый и легко интегрируемый с вашими собственными инструментами.

К счастью, рекомендации SCSS-lint очень похожи на те, что описаны в данном документе. Для того, чтобы настроить SCSS-lint в соответствии с Sass руководством, я рекомендую следующие настройки:

{% highlight yaml %}
# For SCSS-Lint v0.32.0

linters:

  BangFormat:
    enabled: true
    space_before_bang: true
    space_after_bang: false

  BorderZero:
    enabled: true

  ColorKeyword:
    enabled: false

  Comment:
    enabled: false

  DebugStatement:
    enabled: true

  DeclarationOrder:
    enabled: true

  DuplicateProperty:
    enabled: false

  ElsePlacement:
    enabled: true
    style: same_line

  EmptyLineBetweenBlocks:
    enabled: true
    ignore_single_line_blocks: false

  EmptyRule:
    enabled: true

  FinalNewline:
    enabled: true
    present: true

  HexLength:
    enabled: true
    style: short

  HexNotation:
    enabled: true
    style: lowercase

  HexValidation:
    enabled: true

  IdSelector:
    enabled: true

  ImportPath:
    enabled: true
    leading_underscore: false
    filename_extension: false

  Indentation:
    enabled: true
    character: space
    width: 2

  LeadingZero:
    enabled: true
    style: include_zero

  MergeableSelector:
    enabled: false
    force_nesting: false

  NameFormat:
    enabled: true
    convention: hyphenated_lowercase
    allow_leading_underscore: true

  NestingDepth:
    enabled: true
    max_depth: 3

  PlaceholderInExtend:
    enabled: true

  PropertySortOrder:
    enabled: false
    ignore_unspecified: false

  PropertySpelling:
    enabled: true
    extra_properties: []

  QualifyingElement:
    enabled: true
    allow_element_with_attribute: false
    allow_element_with_class: false
    allow_element_with_id: false

  SelectorDepth:
    enabled: true
    max_depth: 3

  SelectorFormat:
    enabled: true
    convention: hyphenated_lowercase
    class_convention: '^(?:u|is|has)\-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:\-[a-z][a-zA-Z0-9]*)?(?:\-\-[a-z][a-zA-Z0-9]*)?$'

  Shorthand:
    enabled: true

  SingleLinePerProperty:
    enabled: true
    allow_single_line_rule_sets: false

  SingleLinePerSelector:
    enabled: true

  SpaceAfterComma:
    enabled: true

  SpaceAfterPropertyColon:
    enabled: true
    style: one_space

  SpaceAfterPropertyName:
    enabled: true

  SpaceBeforeBrace:
    enabled: true
    style: space
    allow_single_line_padding: true

  SpaceBetweenParens:
    enabled: true
    spaces: 0

  StringQuotes:
    enabled: true
    style: single_quotes

  TrailingSemicolon:
    enabled: true

  TrailingZero:
    enabled: true

  UnnecessaryMantissa:
    enabled: true

  UnnecessaryParentReference:
    enabled: true

  UrlFormat:
    enabled: false

  UrlQuotes:
    enabled: true

  VendorPrefixes:
    enabled: true
    identifier_list: base
    include: []
    exclude: []

  ZeroUnit:
    enabled: true
{% endhighlight %}

<div class="note">
  <p>Если вы хотите подключить SCSS-lint в процессе сборки Grunt, вам будет приятно знать, что есть Grunt плагин для этого и называется<a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Кроме того, если вы в погоне за приложением, которое работает с SCSS-lint и т.п., ребята из <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) работают над <a href="https://houndci.com/">Hound</a>.</p>
</div>



### Дальнейшее чтение

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)









# Слишком длинно; Не читал

Подводя итог, мы хотим:

* Отступ двумя (2) пробелами, никаких табов;
* Линии шириной в 80 символов;
* Правильно написанный многострочный CSS;
* Ослысленное использование пробелов;
* Строки в ковычках (одиночные ковычк) & URLs;
* Не использовать значение с точкой;
* Вычисления, завернутые в скобки;
* Никаких магических чисел;
* Цвета, выраженные в ключевых словах  > HSL > RGB > шестнадцатеричные;
* Списки, разделенный запятыми;
* Без запятых в списках (since they are inlined);
* Запятая в картах переменных;
* Не использовать вложенность селекторв, только для псевдоклассов и псевдоэдементов;
* именование через дефис;
* Подробные комментарии;
* SassDoc API комментариев;
* Ограниченное использование `@extend`;
* Простые примеси;
* Намного меньше циклов, на сколько возможно, без`@while`;
* Уменьшите количество зависимостей;
* Осмысленное использование ошибок и предупреждений.

{% include donate.html %}