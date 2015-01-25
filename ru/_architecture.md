
# Архитектура

Разработка архитектуры CSS проекта, вероятно, одна из самых сложных вещей, которые вы должны будете сделать в жизни проекта. Сохранение архитектуры последовательной и значимой еще сложнее.

К счастью, одно из главных преимуществ использования CSS препроцессоров в возможности разделить кодовую базы на несколько файлов без ущерба для производительности (например,  CSS директива  `@import`). Благодаря Sass `@import`, это совершенно безопасно (и на самом деле рекомендуется) использовать столько файлов, сколько необходимо в развитии, все они потом будут собраны в одном файле стилей в продакшене.

Кроме того, я не могу не подчеркнуть потребность в папках, даже на небольших проектах. Дома вы не кладете каждый лист бумаги в один и тот же ящик. Вы можете использовать папки; одну для дома, другую для банка, третью для счетов, и так далее. Нет причин поступать иначе при структурировании CSS проекта. Разделяйте кодовую базы на папки, чтобы было легко найти материал позже.

Есть много популярных архитектур CSS проектов: [OOCSS](http://oocss.org/), [атомной дизайн](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/) и тому подобные ... все они имеют свои достоинства, плюсы и минусы.

Я сам, использовую подход, который, очень похож на [SMACSS](https://smacss.com/) от [Джонатана Снука](http://snook.ca/), который сосредотачивается на сохранении простоты и очевидности.

<div class="note">
  <p>Я понял, что в основном архитектура зависит от проекта. Используйте или адаптируйте предложенное решение так, чтобы вы имели дело с системой, которая соответствует вашим потребностям.</p>
</div>



### Дальнейшее чтение

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [FR] [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)






## Компоненты

Существует главное отличие между тем, чтобы сделать код *работающим*, или сделать его *хорошим*. Опять таки, CSS вполне несносный язык <sup>[citation needed]</sup>. Чем меньше CSS мы имеем, тем лучше. Мы не хотим иметь дело с мегабайтами кода. Чтобы держать стилевые файлы короткими и эффективными&mdash;и это не будет для вас сюрпризом&mdash;чаще всего будет хорошей идеей подумать об интерфейсе, как о наборе компонентов.

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

Для маленьких компонентов, есть папка `components/`. В то время, как `layout/`  *макро* (определяет глобальную сетку), `components/` больше сфокусирована на виджетах и содержит все модули по типу слайдер, лоудера и т.п. виджетов. Обычно там много файлов в `components/` с тех пор как приложение или сайт состоит из множества мелких модулей.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>Папка <code>components/</code> может быть <code>modules/</code>, на ваше усмотрение.</p>
</div>



### Папка Pages

Если у вас есть стили, зависищие от страницы, лучше положить их в папку `pages/`, в файл, названный в честь страницы. Например, это не редкость иметь очень конкретные стили для главной страницы, следовательно, существует потребность в `_home.scss` в `pages/`.

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

Главный файл (обычно названный `main.scss`) должен быть единственным файлом Sass, который не начинается с нижнего поддчеркивания. Этот файл не должен содержать ничего кроме `@import` и комментариев.

Файлы должны быть импортированы в соответствие с папкой размещения, один за другим, в соответствуещем порядке:

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

Существует еще один способ импорта, который действует также. С одной стороны, это делает файл более читаемым. С другой стороны, это делает его обновления немного более болезненным. Во всяком случае, вам решать, что лучше, это не имеет большого значения. Основной файл следует следующим принципам:

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
