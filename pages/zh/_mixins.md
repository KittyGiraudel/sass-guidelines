
## 混合宏

混合宏是整个 Sass 语言中最常用的功能之一。这是重用和减少重复组件的关键。这么做有很棒的原因：混合宏允许开发者在样式表中定义可复用样式，减少了对非语义类的需求，比如`.float-left`。

它们可以包含所有的 CSS 规则，并且在 Sass 文档允许的任何地方都表现良好。它们甚至可以像函数一样接受参数。不用多说，充满了无尽的可能。

不过我有必要提醒你滥用混合宏的破坏力量。再次重申一遍，使用混合宏的关键是**简洁**。建立混入大量逻辑而极具力量的混合宏看上去确实很有诱惑力。这就是所谓的过度开发，大多数开发者常常因此陷入困境。不要过度逻辑化你的代码，尽量保持一切简洁。如果一个混合宏最后超过了 20 行，那么它应该被分离成更小的块甚至是重建。

### 基础

话虽如此，混合宏确实非常有用，你应该学习使用它。经验告诉我们，如果你发现有一组 CSS 属性经常因同一个原因一起出现（非巧合），那么你就可以使用混合宏来代替。比如[Nicolas Gallagher 的清除浮动](http://nicolasgallagher.com/micro-clearfix-hack/)应当放入一个混合宏的实例。

{% include snippets/mixins/01/index.html %}

另一个有效的实例是通过在混合宏中绑定 `width` 和 `height` 属性，可以为元素设置宽高。这样不仅会淡化不同类型代码间的差异，也便于阅读。

{% include snippets/mixins/02/index.html %}

更多复杂示例可以参考：[《使用 Sass 混合宏创建三角形》](https://www.sitepoint.com/sass-mixin-css-triangles/), [《使用混合宏创建长阴影》](https://www.sitepoint.com/ultimate-long-shadow-sass-mixin/) 以及 [《使用混合宏为低版本浏览器创建线性渐变》](https://www.sitepoint.com/building-linear-gradient-mixin-sass/)。

### 无参混合宏

有时候我们使用混合宏只是为了避免重复声明相同的样式，这种情况下，往往不需要传递参数。所以，为了简洁起见，我们可以删除圆括号，使用 `@include` 关键字来表示当前行调用了混合宏。

{% include snippets/mixins/08/index.html %}

### 参数列表

当混合宏需要处理数量不明的参数时，通常使用 `arglist` 而不是列表。可以认为 `arglist` 是 Sass 中隐藏而未被记录的第八个数据类型，通常当需要任意数量参数的时候，被隐式使用到参数中含有 `...` 标志的混合宏和函数中。

{% include snippets/mixins/03/index.html %}

现在，当要建立一个接收多个参数（默认为 3 或者更多）的混合宏时，在将它们合并为列表或者 map 之前，要反复考量这样做是否比一个个的单独存在更易于使用。

Sass 的混合宏和函数声明非常智能，你只需给函数/混合宏一个列表或 map，它会自动解析为一系列的参数。

{% include snippets/mixins/04/index.html %}

更多有关多参数、列表参数的信息请参考这篇文章：[Sass 中的不定参数和参数列表](https://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)。
  
### 混合宏和浏览器前缀

通过使用自定义混合宏来处理 CSS 中未被支持或部分支持的浏览器前缀，是非常有吸引力的一种做法。但我们不希望这么做。首先，如果你可以使用 [Autoprefixer](https://github.com/postcss/autoprefixer)，那就使用它。它会从你的项目中移除Sass代码，会一直更新并一定会进行比你手动添加前缀更棒的处理。

不幸的是，Autoprefixer 并不是总被支持的。如果你使用 [Bourbon](https://bourbon.io/) 或 [Compass](http://compass-style.org/)，你可能就已经知道它们都提供了一个混合宏的集合，用来为你处理浏览器前缀，那就用它们吧。

如果你不能使用 Autoprefixe，甚至也不能使用 Bourbon 和 Compass，那么接下来唯一的方式，就是使用自己的混合宏处理带有前缀的 CSS 属性。但是，请不要为每个属性建立混合宏，更不要无脑输出每个浏览器的前缀（有些根本就不存在）。

{% include snippets/mixins/05/index.html %}

比较好的做法是

{% include snippets/mixins/06/index.html %}

然后就可以非常简单地使用混合宏了：

{% include snippets/mixins/07/index.html %}

请记住，这是一个糟糕的解决方案。例如，他不能处理那些需要复杂的前缀，比如 `flexbox`。在这个意义上说，使用 Autoprefixer 是一个更好地选择。
