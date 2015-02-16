
# 结构

在项目开发周期中，构建一个CSS项目可能会是你遇见的最困难的事情之一。构建完成后，保持整体结构的一致性并使所有设置有意义，则更加困难。

幸运的是，使用CSS预处理器的一个最主要好处就是可以拆分代码库到几个文件中，而又不会影响性能（正像CSS指令`@import`的功能）。感谢Sass重载了`@import`指令，在开发中即使使用大量文件都是安全的（实际上非常推荐），部署时所有文件都会被编译进一个单一样式表。

最重要的是，我无法形容我是多么需要设置大量的文件夹——即使是小项目中。这就像是在家里，你不会将所有的纸片放在同一个盒子中。你可以使用文件夹：一个为房产，一个为银行，一个为账单，等等。没有理由在构架CSS项目时不这么做。拆分代码库到多个有意义的文件夹，当你回头来找东西的时候就会发现是那么容易。

有很多受欢迎的构建CSS项目的体系结构： [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/)式, [Foundation](http://foundation.zurb.com/)式...它们各有优劣，难分伯仲。

我自己使用的方式，与[Jonathan Snook](http://snook.ca/)的[SMACSS](https://smacss.com/) 非常相似，其致力于保持代码简洁易见。

<div class="note">
  <p>我认为，项目之间的结构是极其具体的。你完全可以随意摒弃或调整建议方案，拥有最适合自己需求的体系系统。</p>
</div>



### 扩展阅读

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)






## 组件

首先，在**可以运行**和**运行良好**两种状态之间存在着巨大的差别。其次，CSS是一个相当容易被混淆的语言。使用的CSS越少，工作会越愉快。没人想处理兆字节量的CSS代码。保持样式表简短而高效，就不会有诸多诡异。将接口视为组件的集合来使用往往是非常棒的思维。

组件可以是任意的，前提是遵循以下规范：

- 可以做一件事，只做一件；
- 在整个项目中可以重用，具有可复用性；
- 各自独立。

例如，搜索框就应该被视为一个组件，可以在不同位置、不同页面、多种环境下重复使用。它不应该受限于DOM中的位置（页脚、侧边栏、主内容区...）。

几乎所有的接口都可以被视为小组件，而且强烈建议坚持这种模式。这不仅仅会精简整个项目中CSS的代码量，而且也会比维护一个到处无逻辑的烂摊子容易得多。






## 7-1模式

回到结构这个话题上来，好吗？通常我使用自称为**7-1模式**的结构：7个文件夹，1个文件。基本上，你需要将所有的部件放进7个不同的文件夹和一个位于根目录的文件（通常命名为 `main.scss`）中——这个文件编译时会引用所有文件夹而形成一个CSS样式表。

- `base/`
- `components/`
- `layout/`
- `pages/`
- `themes/`
- `utils/`
- `vendors/`

当然还有它:

- `main.scss`

<figure role="group">
  <img alt="One file to rule them all, One file to find Them, One file to bring them all, And in the Sass way merge them."
     sizes="100vw"
     srcset="/assets/images/sass-wallpaper_small.jpg  540w,
             /assets/images/sass-wallpaper_medium.jpg 900w,
             /assets/images/sass-wallpaper_large.jpg 1200w,
             /assets/images/sass-wallpaper_huge.jpg  1590w" />
  <figcaption>Wallpaper by <a href="https://twitter.com/julien_he">Julien He</a></figcaption>
</figure>

理想情况下，目录层次如下所示：

<div class="highlight"><pre><code>
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   ...                  # Etc…
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– themes/
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   ...                  # Etc…
|
|– utils/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– main.scss             # primary Sass file
</code></pre></div>

<div class="note">
  <p>使用命名约定描述文件，使用连字符分隔。</p>
</div>



### Base文件夹

`base/`文件夹存放项目中的模板文件。在这里，可以找到重置文件、排版规范文件或者一个样式表（我通常命名为`_base.scss`）——定义一些HTML元素公认的标准样式。

* `_base.scss`
* `_reset.scss`
* `_typography.scss`



### Layout文件夹

`layout/`文件夹存放构建网站或者应用程序使用到的布局部分。该文件夹存放网站主体（头部、尾部、导航栏、侧边栏...）的样式表、栅格系统甚至是所有表单的CSS样式。

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p><code>layout/</code>文件夹也会被称为<code>partials/</code>, 具体使用情况取决于个人喜好。</p>
</div>



### Components文件夹

对于小型组件来说，有一个`components/`文件夹来存放。相对于`layout/`的*宏观*（定义全局线框结构），`components/`更专注于局部组件。该文件夹包含各类具体模块，基本上是所有的独立模块，比如一个滑块、一个加载块、一个部件……由于整个网站或应用程序主要由微型模块构成，`components/`中往往有大量文件。

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p><code>components/</code>文件夹也会被称为<code>modules/</code>, 具体使用情况取决于个人喜好。</p>
</div>



### Pages文件夹

如果页面有特定的样式，最好将该样式文件放进`pages/`文件夹并用页面名字。例如，主页通常具有独特的样式，因此可以在`pages/`下包含一个`_home.scss`以实现需求。

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>取决于各自的开发流程，这些文件可以使用你自己的前缀命名，避免在最终样式表中与他人的样式表发生合并。一切完全取决于你。</p>
</div>



### Themes文件夹

在大型网站和应用程序中，往往有多种主题。虽有多种方式管理这些主题，但是我个人更喜欢把它们存放在`themes/`文件夹中。

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>这个文件夹与项目的具体实现有密切关系，并且在许多项目中是并不存在的。</p>
</div>



### Utils文件夹

`utils/`文件夹包含了整个项目中使用到的Sass辅助工具，这里存放着每一个全局变量、函数、混合宏和占位符。

该文件夹的经验法则是，编译后这里不应该输出任何CSS，单纯的只是一些Sass辅助工具。

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequently named `_helpers.scss`)

<div class="note">
  <p><code>utils/</code>文件夹也会被称为<code>helpers/</code>,<code>sass-helpers/</code>或者<code>sass-utils/</code>，具体使用情况取决于个人喜好。</p>
</div>



### Vendors文件夹

最后但并非最终的是，大多数的项目都有一个`vendors/`文件夹，用来存放所有外部库和框架（Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered……）的CSS文件。将这些文件放在同一个文件中是一个很好的说明方式:"嘿，这些不是我的代码，无关我的责任。"

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

如果你重写了任何库或框架的部分，建议设置第8个文件夹`vendors-extensions/`来存放，并使用相同的名字命名。

例如，`vendors-extensions/_boostrap.scss`文件存放所有重写Bootstrap默认CSS之后的CSS规则。这是为了避免在原库或者框架文件中进行二次编辑——显然不是好方法。



### Main文件

主文件（通常写作`main.scss`）应该是整个代码库中唯一开头不用下划线命名的Sass文件。除 `@import`和注释外，该文件不应该包含任何其他代码。

文件应该按照存在的位置顺序依次被引用进来：

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

为了保持可读性，主文件应遵守如下准则：

- 每个 `@import`引用一个文件；
- 每个 `@import`单独一行；
- 从相同文件夹中引入的文件之间不用空行；
- 从不同文件夹中引入的文件之间用空行分隔；
- 忽略文件扩展名和下划线前缀。

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

这里还有另一种引入的有效方式。令人高兴的是，它使文件更具有可读性；令人沮丧的是，更新时会有些麻烦。不管怎么说，由你决定哪一个最好，这没有任何问题。 对于这种方式，主要文件应遵守如下准则：

- 每个文件夹只使用一个`@import`
- 每个`@import`之后都断行
- 每个文件占一行
- 新的文件跟在最后的文件夹后面
- 文件扩展名都可以省略

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
  <p>为了不用亲自引入每一个文件，有一个叫做<a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>的Ruby Sass扩展程序，使在Sass的<code>@import</code>中,使其做为glob模式，就像这样：<code>@import "components/*"</code></p>
  <p>话虽如此，却不推荐它，因为它按照字母顺序引入文件，这往往并不是想要的，特别是处理一个对源文件顺序有所依赖的编程语言的时候。</p>
</div>




## Shame文件

另一个有意思的方面，由业内已流行的[Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) 和 [Chris Coyier](http://css-tricks.com)引起的，那就是将所有的CSS声明、Hack行为和我们不支持的行为放入一个*shame file*。该文件命名为 `_shame.scss`，在所有文件之后被引用，放在所有样式表的最后。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a {
    color: #BADA55 !important;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a
    color: #BADA55 !important
{% endhighlight %}
  </div>
</div>



### 扩展阅读

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
