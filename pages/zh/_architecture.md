
## 结构

在项目开发周期中，构建一个 CSS 项目可能会是你遇见的最困难的事情之一。构建完成后，保持整体结构的一致性并使所有设置有意义，则更加困难。

幸运的是，使用 CSS 预处理器的一个最主要好处就是可以拆分代码库到几个文件中，而又不会影响性能（正像 CSS 指令 `@import` 的功能）。感谢 Sass 重载了 `@import` 指令，在开发中即使使用大量文件都是安全的（实际上非常推荐），部署时所有文件都会被编译进一个单一样式表。

最重要的是，我无法形容我是多么需要设置大量的文件夹——即使是小项目中。这就像是在家里，你不会将所有的纸片放在同一个盒子中。你可以使用文件夹：一个为房产，一个为银行，一个为账单，等等。没有理由在构架 CSS 项目时不这么做。拆分代码库到多个有意义的文件夹，当你回头来找东西的时候就会发现是那么容易。

有很多[受欢迎的构建 CSS 项目的体系结构](https://www.sitepoint.com/look-different-sass-architectures/)：[OOCSS](https://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](https://getbootstrap.com/) 式, [Foundation](https://get.foundation/) 式...它们各有优劣，难分伯仲。

我自己使用的方式，与 [Jonathan Snook](https://snook.ca/) 的 [SMACSS](http://smacss.com/) 非常相似，其致力于保持代码简洁易见。

<div class="note">
  <p>我认为，项目之间的结构是极其具体的。你完全可以随意摒弃或调整建议方案，拥有最适合自己需求的体系系统。</p>
</div>

### 组件

首先，在**可以运行**和**运行良好**两种状态之间存在着巨大的差别。其次，CSS 是一个相当容易被混淆的语言。使用的 CSS 越少，工作会越愉快。没人想处理兆字节量的 CSS 代码。保持样式表简短而高效，就不会有诸多诡异。将接口视为组件的集合来使用往往是非常棒的思维。

组件可以是任意的，前提是遵循以下规范：

- 可以做一件事，只做一件；
- 在整个项目中可以重用，具有可复用性；
- 各自独立。

例如，搜索框就应该被视为一个组件，可以在不同位置、不同页面、多种环境下重复使用。它不应该受限于 DOM 中的位置（页脚、侧边栏、主内容区...）。

几乎所有的接口都可以被视为小组件，而且强烈建议坚持这种模式。这不仅仅会精简整个项目中 CSS 的代码量，而且也会比维护一个到处无逻辑的烂摊子容易得多。

### 组件结构

理想情况下，每个组件都应该拥有自己的文件夹（存在于 `components` 文件之下，详见[7-1 模式](#section-36)），比如 `components/_button.scss`。每个组件的样式应该包含以下内容：

* 组件本身的样式
* 和组件样式有关的变量、修饰器以及状态
* 如有需要，设置组件的子级样式

如果你希望可以定制组件的主题（主题文件置于 `themes/` 文件夹之内），可以限制样式中可以被修改的种类，比如尺寸、内间距、外间距以及对齐方式等等，可以开放颜色、阴影、字体、背景等方面的样式。

一个组件文件内可以存在与该组件密切相关的变量、占位符、混合宏甚至是函数，但是要牢记，应该避免对其他组件样式的引用，否则将会让项目整体的依赖关系变得难以维护。

下面是一个 Button 组件的示例：

{% include snippets/architecture/06/index.html %}

<div class="note">
  <p>感谢 <a href="https://twitter.com/davidkpiano">David Khourshid</a> 对本节做出的技术支持。</p>
</div>


### 7-1模式

回到结构这个话题上来，好吗？通常我使用自称为 **7-1 模式**的结构：7 个文件夹，1 个文件。基本上，你需要将所有的部件放进 7 个不同的文件夹和一个位于根目录的文件（通常命名为 `main.scss`）中——这个文件编译时会引用所有文件夹而形成一个 CSS 样式表。

- `abstracts/`
- `base/`
- `components/`
- `layout/`
- `pages/`
- `themes/`
- `vendors/`

当然还有它:

- `main.scss`

{% include images/wallpaper.html %}

理想情况下，目录层次如下所示：

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>文件命名要遵循如上统一的命名规则：使用连字符界定。</p>
</div>

#### Base文件夹

`base/`文件夹存放项目中的模板文件。在这里，可以找到重置文件、排版规范文件或者一个样式表——定义一些 HTML 元素公认的标准样式（我喜欢命名为`_base.scss`）。

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

<div class="note">
  <p>如果你的项目中使用了<em>大量的</em> CSS 动画, 那么你有必要考虑添加一个 <code>\_animations.scss</code> 文件来统一管理这些动画。如果只是偶尔使用一些动画，也可以将这些动画融入到调用它们的文件中。</p>
</div>

#### Layout文件夹

`layout/` 文件夹存放构建网站或者应用程序使用到的布局部分。该文件夹存放网站主体（头部、尾部、导航栏、侧边栏...）的样式表、栅格系统甚至是所有表单的 CSS 样式。

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p><code>layout/</code> 文件夹也会被称为 <code>partials/</code>, 具体使用情况取决于个人喜好。</p>
</div>

#### Components文件夹
 
对于小型组件来说，有一个 `components/` 文件夹来存放。相对于 `layout/` 的*宏观*（定义全局线框结构），`components/` 更专注于局部组件。该文件夹包含各类具体模块，基本上是所有的独立模块，比如一个滑块、一个加载块、一个部件……由于整个网站或应用程序主要由微型模块构成，`components/` 中往往有大量文件。

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p><code>components/</code> 文件夹也会被称为 <code>modules/</code>, 具体使用情况取决于个人喜好。</p>
</div>

#### Pages文件夹

如果页面有特定的样式，最好将该样式文件放进 `pages/` 文件夹并用页面名字。例如，主页通常具有独特的样式，因此可以在 `pages/` 下包含一个 `_home.scss` 以实现需求。

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>取决于各自的开发流程，这些文件可以使用你自己的前缀命名，避免在最终样式表中与他人的样式表发生合并。一切完全取决于你。</p>
</div>

#### Themes文件夹

在大型网站和应用程序中，往往有多种主题。虽有多种方式管理这些主题，但是我个人更喜欢把它们存放在 `themes/` 文件夹中。

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>这个文件夹与项目的具体实现有密切关系，并且在许多项目中是并不存在的。</p>
</div>

#### Abstracts 文件夹

`abstracts/` 文件夹包含了整个项目中使用到的 Sass 辅助工具，这里存放着每一个全局变量、函数、混合宏和占位符。

该文件夹的经验法则是，编译后这里不应该输出任何 CSS，单纯的只是一些 Sass 辅助工具。

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss`

当项目体量庞大工具复杂时，通过主题而不是类型分类整理可能更有帮助，比如排版（`_typography.scss`）、主题（`_theming.scss`）等。每一个文件都包含所有的相关信息：变量、函数、混合宏和占位符。这样做可以让维护更加单，特别针对于文件较长的情况。

<div class="note">
  <p><code>abstracts/</code> 文件夹也会被称为 <code>helpers/</code> 或 <code>utilities</code>，具体使用情况取决于个人喜好。</p>
</div>

#### Vendors文件夹

最后但并非最终的是，大多数的项目都有一个 `vendors/` 文件夹，用来存放所有外部库和框架（Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered……）的 CSS 文件。将这些文件放在同一个文件中是一个很好的说明方式:"嘿，这些不是我的代码，无关我的责任。"

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

如果你重写了任何库或框架的部分，建议设置第 8 个文件夹 `vendors-extensions/` 来存放，并使用相同的名字命名。

例如，`vendors-extensions/_boostrap.scss` 文件存放所有重写 Bootstrap 默认 CSS 之后的 CSS 规则。这是为了避免在原库或者框架文件中进行二次编辑——显然不是好方法。

#### 入口文件

主文件（通常写作 `main.scss`）应该是整个代码库中唯一开头不用下划线命名的 Sass 文件。除 `@import` 和注释外，该文件不应该包含任何其他代码。

文件应该按照存在的位置顺序依次被引用进来：

1. `abstracts/`
1. `vendors/`
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

{% include snippets/architecture/02/index.html %}

这里还有另一种引入的有效方式。令人高兴的是，它使文件更具有可读性；令人沮丧的是，更新时会有些麻烦。不管怎么说，由你决定哪一个最好，这没有任何问题。 对于这种方式，主要文件应遵守如下准则：

- 每个文件夹只使用一个`@import`
- 每个`@import`之后都断行
- 每个文件占一行
- 新的文件跟在最后的文件夹后面
- 文件扩展名都可以省略

{% include snippets/architecture/03/index.html %}

### 关于 Globbing

在计算机编程中，通配符扩展模式通常使用通配符来匹配多个文件名，比如 `*.scss`，其工作机制是通过表达式而不是文件名列表来匹配文件组。在 Sass 中，可以在入口文件中通过通配符扩展的形式导入其他文件，导入后的入口文件类似如下所示：

{% include snippets/architecture/05/index.html %}

Sass 并不直接支持通配符扩展的机制，这是因为 CSS 样式是对声明顺序非常敏感的，当我们使用通配符扩展的形式导入文件时，文件通常按照字典序导入，这种方式无法控制文件的导入顺序，继而会引起样式的错乱。

也就是说，在一个严格基于组件构成的架构中，必须十分注意组件之间的样式顺序，避免遗漏和错误覆盖任何样式。所以必须保证文件顺序对样式没有影响，方能使用通配符扩展模式。使用通配符扩展模式最大的好处就是无需再花费时间处理入口文件中文件的增加和删除。

在 Ruby Sass 中有一个 [sass-globbing](https://github.com/chriseppstein/sass-globbing) 包可以用于解析通配符扩展机制。如果使用的是 node-sass，可以使用 Node.js 或者构建工具（Gulp，Grunt等 等）来解析通配符扩展机制。

### Shame 文件

另一个有意思的方面，由业内已流行的 [Harry Roberts](https://csswizardry.com), [Dave Rupert](https://daverupert.com) 和 [Chris Coyier](https://css-tricks.com) 引起的，那就是将所有的CSS声明、Hack行为和我们不支持的行为放入一个 [shame file](https://csswizardry.com/2013/04/shame-css-full-net-interview/)。该文件命名为 `_shame.scss`，在所有文件之后被引用，放在所有样式表的最后。

{% include snippets/architecture/04/index.html %}
