
## 注释

CSS 是一个棘手的语言，充满了骇客行为和古怪的事情。因此，应该大量注释，特别是如果有人打算六个月或一年后要继续阅读和更新这些代码。不要让任何人处于如此境地：**这不是我写的，上帝，为什么会这样**。

CSS 的实现很简单，但我们需要为此付出巨大的注释量。解释如下：

- 一个文件的结构或者作用；
- 规则集的目标；
- 使用幻数背后的目的；
- CSS 声明的原因；
- CSS 声明的顺序；
- 方法执行背后的逻辑思维。

在这里，我可能还遗漏了其他各种各样的缘由。在代码完成之时立即注释，往往只需花费一点时间；而过一阵时间再来为一小段代码注释，则是完全不现实和令人恼怒的。

### 标示注释

理想上，**任何** CSS 规则集之前都应该使用 C 风格注释来解释 CSS 块的核心。这个注释也要记录对规则集特定部分编号的解释。比如：

{% include snippets/comments/01/index.html %}

基本上，任何不能明显看出意义的地方都应该注释，但不要随处注释。记住不要**注释太多**，掌握尺度让每一处注释都有意义。

当注释 Sass 的一个特定部分时，应该使用 Sass 单行注释而不是 C 风格的注释块。这么做将不会输出注释，即使是在开发时的扩展模式。

{% include snippets/comments/02/index.html %}

在 CSS 编程指南中的[注释](https://cssguidelin.es/#commenting)一节中也提到，支持这种方式的注释。

### 文档

每一个旨在代码库中复用的变量、函数、混合宏和占位符，都应该使用 [SassDoc](http://sassdoc.com) 记录下来作为全部 API 的一部分。

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>需要三个反斜杠(<code>/</code>)</p>
</div>

SassDoc 主要有两个作用：

- 作为公有或私有 API 的一部分，在所有的地方使用一个注释系统强制标准化注释。
- 通过使用任意的 SassDoc 终端(CLI tool, Grunt, Gulp, Broccoli, Node...)，能够生成 API 文档的 HTML 版本。

{% include images/sassdoc.html %}

这里有一个深入整合 SassDoc 生成文档的例子：

{% include snippets/comments/04/index.html %}
