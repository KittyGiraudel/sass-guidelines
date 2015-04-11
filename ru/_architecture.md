
# Архитектура

Разработка архитектуры CSS-проекта, вероятно, одна из самых сложных вещей, которые вы должны будете сделать в жизни проекта. Сохранять архитектуру последовательной и значимой – ещё сложнее.

К счастью, одно из главных преимуществ использования CSS-препроцессоров – в возможности разделить кодовую базу на несколько файлов без ущерба для производительности (в отличие от CSS-правила `@import`). Благодаря `@import` в Sass, совершенно безопасно (и на самом деле рекомендуется) использовать столько файлов, сколько необходимо в развитии, все они потом будут собраны в одной таблице стилей и так попадут на production.

Кроме того, я не могу не подчеркнуть потребность в папках, даже на небольших проектах. Дома вы не кладёте каждый лист бумаги в один и тот же ящик. Вы можете использовать папки; одну для дома, другую для банка, третью – для счетов, и так далее. Нет причин поступать иначе при определении структуры CSS-проекта. Разделяйте кодовую базу на папки, чтобы было легко найти материал позже.

Есть много популярных архитектур CSS-проектов: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/) и тому подобные… все они имеют свои достоинства, плюсы и минусы.

Я сам использую подход, который очень похож на [SMACSS](https://smacss.com/) от [Джонатана Снука](http://snook.ca/), который сосредотачивается на сохранении простоты и очевидности.

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

Существует главное отличие между тем, чтобы сделать код *работающим*, или сделать его *хорошим*. Опять таки, CSS – вполне несносный язык <sup>[указать источник]</sup>. Чем меньше CSS мы имеем, тем лучше. Мы не хотим иметь дело с мегабайтами кода. Чтобы держать файлы стилей короткими и эффективными – и это не будет для вас сюрпризом – чаще всего будет хорошей идеей подумать об интерфейсе, как о наборе компонентов.

Компоненты могут быть чем угодно, до тех пор, пока они:

* делают одну и только одну вещь;
* могут быть повторно используемы;
* независимы.

Например, форма поиска должна рассматриваться в качестве компонента. Она должна иметь возможность быть используемой повторно на разных страницах, в различных ситуациях. Она не должна зависеть от положения в DOM (в подвале, в боковой панели, в основном содержимом…).

Большинство интерфейсов можно рассматривать как набор маленьких компонентов, и я настоятельно рекомендую вам придерживаться этой парадигмы. Это позволит не только сократить количество CSS, необходимого для всего проекта, но также упростить его поддержку, и прибрать хаотический беспорядок.

## Шаблон 7-1

Возвратимся к архитектуре? Я обычно использую так называемый *Шаблон 7-1*: 7 папок, 1 файл. Обычно у вас есть все ваши куски в 7 разных папках, и один файл в корневом каталоге (обычно с именем `main.scss`), который импортирует их все.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

И, конечно же:

* `main.scss`

<figure role="group">
  <img alt="Один файл, чтобы управлять ими всеми, один файл, чтобы найти их, один файл, чтобы привести их всех, и отдать их Sass, чтобы объединить."
     sizes="100vw"
     srcset="/assets/images/sass-wallpaper_small.jpg  540w,
             /assets/images/sass-wallpaper_medium.jpg 900w,
             /assets/images/sass-wallpaper_large.jpg 1200w,
             /assets/images/sass-wallpaper_huge.jpg  1590w" />
  <figcaption>Обои от <a href="https://twitter.com/julien_he">Julien He</a></figcaption>
</figure>

В идеале, мы можем закончить с чем-то похожим:

<div class="highlight"><pre><code>
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Типографские правила
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
|   |– _home.scss        # Стили, особые для главной страницы
|   |– _contact.scss     # Стили, особые для страницы контактов
|   ...                  # и т.д.
|
|– themes/
|   |– _theme.scss       # Тема по умолчанию
|   |– _admin.scss       # Тема админа
|   ...                  # и т.д.
|
|– utils/
|   |– _variables.scss   # Переменные Sass
|   |– _functions.scss   # Функции Sass
|   |– _mixins.scss      # Примеси Sass
|   |– _helpers.scss     # Помощники классов & placeholder’ов
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # и т.д.
|
|
`– main.scss             # главный файл Sass
</code></pre></div>

<div class="note">
  <p>Следующие файлы имеют то же соглашение по именованию, что и выше: они отделены нижним подчеркиванием.</p>
</div>

### Папка Base

Папка `base/` содержит то, что мы можем назвать общим шаблоном проекта. Там вы можете найти файл сброса, некоторые типографские правила, и, вероятно, стили (я привык их называть `_base.scss`), определяющие некоторые стандартные стили для часто используемых элементов HTML.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

### Папка Layout

Папка `layout/` содержит всё, что принимает участие в постройке раскладки сайта или приложения. Эта папка может содержать стили для основных частей сайта (шапка, подвал, навигация, боковая панель…), сетка или даже CSS-стили для всех форм.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>Папка <code>layout/</code> может быть названа <code>partials/</code>, на ваше усмотрение.</p>
</div>

### Папка Components

Для маленьких компонентов есть папка `components/`. В то время, как `layout/` –  *основные* (определяют общий каркас), код внутри `components/` больше сфокусирован на виджетах и содержит все модули, вроде слайдера, загрузчика и тому подобных виджетов. Обычно файлов в `components/` много, если приложение или сайт состоит из множества мелких модулей.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>Папка <code>components/</code> может называться <code>modules/</code>, на ваше усмотрение.</p>
</div>

### Папка Pages

Если у вас есть стили, зависящие от страницы, лучше положить их в папку `pages/`, в файл, названный в честь страницы. Например, не редкость – иметь очень конкретные стили для главной страницы, следовательно, существует потребность в `_home.scss` в `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>В зависимости от способа доставки кода, эти файлы можно было бы назвать самостоятельно, чтобы избежать их объединения с другими стилями. На ваше усмотрение.</p>
</div>

### Папка Themes

В больших сайтах и проложениях не редко есть разные темы оформления. Есть разные способы работы с темами, я лично предпочитаю складывать их в папку `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Это очень зависит от проекта и не сильно распространено.</p>
</div>

### Папка Utils

Папка `utils/` собирает все инструменты и помощники Sass в проекте. Каждая глобальная переменная, функция и примесь должна быть помещена сюда.

Правило для этой папки в том, что она не должна создавать CSS при компиляции сама по себе. Это не что иное, как помощники Sass.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (часто называется `_helpers.scss`)

<div class="note">
  <p>Папка <code>utils/</code> может также быть названа <code>helpers/</code>, <code>sass-helpers/</code> или <code>sass-utils/</code>, на ваше усмотрение.</p>
</div>

### Папка Vendors

И последнее, но не менее важное, что большинство проектов будут иметь папку `vendors/`, содержащую все CSS-файлы из внешних библиотек и фреймворков – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered и так далее. Нахождение этих файлов в этой папке – хороший способ сказать: "Эй, это не я писал, не мой код, не моя ответственность".

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Если вы хотите что-то переписать в этих файлах, то я рекомендую вам ввести восьмую папку `vendors-extensions/`, в которой вы будете хранить файлы перезаписи свойств с точно такими же именами.

Например, файл `vendors-extensions/_boostrap.scss`, содержащий все CSS-правила на перезапись CSS-правил Bootstrap. Это для того, чтобы не править сами внешние модули, что на самом деле не очень хорошая идея.

### Файл Main

Главный файл (обычно названный `main.scss`) должен быть единственным файлом Sass, который не начинается с нижнего подчеркивания. Этот файл не должен содержать ничего, кроме `@import` и комментариев.

Файлы должны быть импортированы в соответствии с папкой размещения, один за другим, в соответствуещем порядке:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Чтобы улучшить читаемость, главный файл должен следовать этим рекомендациям:

* один `@import` на строку;
* не вставлять новые строки между файлами из одной папки;
* новая строка после вставки последнего `@import` из одной и той же папки;
* не писать расширения файлов и нижние подчеркивания.

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

Существует ещё один способ импорта, который действует так же. С одной стороны, это делает файл более читаемым. С другой стороны, это делает его обновление немного более болезненным. Во всяком случае, вам решать, что лучше, это не имеет большого значения. Основной файл следует следующим принципам:

* один `@import` на папку;
* снос строки после `@import`;
* каждый файл на своей строке;
* новая строка после последнего импорта файла из папки;
* не писать расширения файлов и нижние подчеркивания.

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
  <p>Для того, чтобы не импортировать каждый файл вручную, есть расширение Ruby Sass, которое называется <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, оно позволяет использовать glob-шаблон в <code>@import</code> Sass, например – <code>@import "components/*"</code>.</p>
  <p>Как было сказано, я не рекомендую это, потому что используется упорядочение по алфавиту, что иногда может быть не тем, что вы хотите, особенно, когда вы имеете дело с языком, в котором важно упорядочение.</p>
</div>

## Файл позора

Это интересная идея, которая стала популярна благодаря [Гарри Робертсу](http://csswizardry.com), [Дэйву Руперту](http://daverupert.com) и [Крису Койеру](http://css-tricks.com) и состоит в том, чтобы складывать все хаки и код, которым вы не гордитесь, в *файл позора*. Поэтому этот файл и имеет такое драматическое название – `_shame.scss`, импортируется в самом конце.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Особое исправление навигации.
 *
 * Кто-то использовал ID в коде шапки (`#header a {}`), который перекрывает
 * селекторы nav (`.site-nav a {}`). Используйте `!important`, чтобы
 * перекрыть их, до тех пор, пока я не перепишу шапку.
 */
.site-nav a {
    color: #BADA55 !important;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Особое исправление навигации.
 *
 * Кто-то использовал ID в коде шапки (`#header a {}`), который перекрывает
 * селекторы nav (`.site-nav a {}`). Используйте `!important`, чтобы
 * перекрыть их, до тех пор, пока я не перепишу шапку.
 */
.site-nav a
    color: #BADA55 !important
{% endhighlight %}
  </div>
</div>

### Дальнейшее чтение

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
