
## 语法格式

如果你问我一个样式指南首先要描述什么，我会告诉你：编写代码的通用准则。

当几个开发者在同一项目中编写 CSS 时，迟早会陷入各自为政的境地。编码样式指南通过规范统一的样式，不仅防止了这种混乱现象，也减轻了阅读和维护代码的难度。

概括地说，我们希望做到（受 [CSS Guidelines](https://cssguidelin.es/#syntax-and-formatting) 所启发）：

- 使用两个空格代表缩进，而不是使用tab键；
- 理想上，每行保持为80个字符宽度；
- 正确书写多行CSS规则；
- 有意义的使用空格。

{% include snippets/syntax/01/index.html %}

### 字符串

无论你是否相信，字符串在 CSS 和 SCSS 中都占有重要地位。大多数的 CSS 值不是长度就是标识符，所以遵循固定的编程规范处理 Sass 中的字符串是非常重要的一项工作。

#### 编码

为了避免潜在的字符编码问题，强力建议在[入口文件](#section-37)中通过 `@charset` 指令使用 [UTF-8](https://en.wikipedia.org/wiki/UTF-8) 编码格式。请确保该指令是文件的第一条语句，并排除其他字符编码声明。

{% include snippets/syntax/02/index.html %}

#### 引用

CSS 中不要求字符串必须用引号包裹，甚至是字符串中包含空格的。就拿`font-family`属性来说：无论你是否使用引号包裹，CSS 解析器都可以正确解析。

因此，Sass **也不**强制要求字符串必须被引号包裹。更棒的是（你也会如此认为），被引号包裹和没被包裹的一对字符串完全等同（例如，`'abc'` 严格等同于 `abc`）。

话虽如此，不强制要求字符串被引号包裹的毕竟是少数，所以，在 Sass 中**字符串应该始终被单引号(`'`)所包裹**（在 **querty** 键盘中单引号比双引号更容易输入）。即使不考虑与其他语言的一致性，单是考虑 CSS 的近亲 JavaScript，也有数条理由这么做：

- 如果颜色名不被引号包裹，将会被解析为颜色值，显然这会导致严重问题；
- 大多数的语法高亮机制将会因未被引号包裹的字符串而罢工；
- 提高可读性；
- 没有正当理由不去用引号包裹字符串。

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>CSS 规范建议, 将 <code>@charset</code> 指令用双引号包裹起来 <a href="https://www.w3.org/TR/css3-syntax/#charset-rule">才是有效的</a>. 不过，Sass 在编译的时候已经自动修正了相关信息，所以无论何种方式都可以生成正确的代码，即使是只有 <code>@charset</code>。</p>
</div>

#### 作为 CSS 的值

CSS 中类似 `initial` 或 `sans-serif` 的标识符无须引用起来。事实上，`font-family: 'sans-serif'` 该声明是错误的，因为 CSS 希望获得的是一个标识符，而不是一个字符串。因此，我们无须引用这些值。

{% include snippets/syntax/04/index.html %}

就像上例这样，我们就可以区别用于 CSS 值的字符串（CSS 标识符）和 Sass 的字符串类型了（比如 map 的值）。

我们没有引用前者，但却使用单引号包裹了它。

#### 包含引号的字符串

如果字符串内包含了一个或多个单引号，一种解决方案就是使用双引号包裹整个字符串，从而避免使用转义字符。

{% include snippets/syntax/05/index.html %}

#### URLs

URL 最好也用引号包裹起来，原因和上面所描述一样：

{% include snippets/syntax/06/index.html %}

### 数字

在 Sass 中，数字类型包括了长度、持续时间、频率、角度以及无单位数值等等。Sass 允许在运行中计算这些度量值。

#### 零值

当数字小于 `1` 时，应该在小数点前写出 `0.` 永远不要显示小数尾部的 `0`。

{% include snippets/syntax/07/index.html %}

#### 单位

当定义长度时，`0` 后面不需要加单位。

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>注意，该建议只是针对于长度而言，对于类似 <code>transition-delay</code> 的时间属性就是不适合的。理论上，如果持续时间的属性值为无单位的 0，那么该属性值就会被认为是无效的。虽然并不是所有的浏览器都这么严格检查属性值，但确实有一些浏览器会这么做。简而言之：只有长度可以使用无单位的 0 作为属性值。</p>
</div>

在 Sass 中最常见的错误，是简单地认为单位只是字符串，认为它会被安全的添加到数字后面。这虽然听起来不错，但却不是单位正确的解析方式。可以把单位认为是代数符号，例如，在现实世界中，`5` 英寸乘以 `5` 英寸得到 `25` 英寸。Sass 也适用这样的逻辑。

将一个单位添加给数字的时候，实际上是让该数值乘以*`1`个单位*。

{% include snippets/syntax/09/index.html %}

需要注意的是加上一个 *`0unit`* 也可以正确解析，但是这种方式在某种程度上会造成一些混乱，所以我更愿意推荐上面的方式。事实上，将一个数字转换为其他兼容单位时，加 `0` 操作并不会造成错误。更多信息请参考[这篇文章](https://css-tricks.com/snippets/sass/correctly-adding-unit-number/).

{% include snippets/syntax/10/index.html %}

这一切最终取决于你想要达到怎样的效果。只要记住，像添加一个字符串一样添加一个单位并不是一种好的处理方式。

要删除一个值的单位，你需要除以*相同类型的 `1` 单位*。

{% include snippets/syntax/11/index.html %}

给一个数值以字符串形式添加单位的结果是产生一个字符串，同时要防止对数据的额外操作。从一个带有单位的数值中分离数字部分也会产生字符串，但这些都不是你想要的。更多信息请参考这篇文章：[Use lengths, not strings](https://kittygiraudel.com/2013/09/03/use-lengths-not-strings/)。

#### 计算

**最高级运算应该始终被包裹在括号中**。这么做不仅是为了提高可读性，也是为了防止一些 Sass 强制要求对括号内内容计算的极端情况。

{% include snippets/syntax/12/index.html %}

#### Magic numbers

"幻数"，是<a href="https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants" >古老的学校编程</a>给*未命名数值常数*的命名。基本上，它们只是*能工作*™但没有任何逻辑思维的随机数。

相信不用多说你也会理解，**幻数是一场瘟疫，应不惜一切代价以避免**。当你对数值的解析方式无法找到一个合理解释时，你可以对此提交一个内容宽泛的评论，包括你是怎样遇见这个问题以及你认为它应该怎样工作。承认自己不清楚一些机制的解析方式，远比让以后的开发者从零开始弄清它们更有帮助。

{% include snippets/syntax/13/index.html %}

CSS-Tricks 上有一篇[文章](https://css-tricks.com/magic-numbers-in-css/) 讨论了 CSS 中的 magic numbers，建议你阅读一下。

### 颜色

颜色在 CSS 中占有重要地位。当涉及到操纵色彩时，Sass 通过提供少数的[函数功能](https://sass-lang.com/documentation/Sass/Script/Functions.html)，最终成为了极具价值的助手。

Sass 非常善于操纵颜色，以下文章都讨论了在 Sass 中对颜色的操作，建议阅读：

* [How to Programmatically Go From One Color to Another](https://kittygiraudel.com/2014/01/30/programmatically-go-from-one-color-to-another-with-sass/)
* [Using Sass to Build Color Palettes](https://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](https://www.sitepoint.com/dealing-color-schemes-sass/)

#### 颜色格式

为了尽可能简单地使用颜色，我建议颜色格式要按照以下顺序排列：

1. [HSL 值](https://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB 值](https://en.wikipedia.org/wiki/RGB_color_model);
1. 十六进制（使用小写并尽可能简写）

除非是为了快速开发出原型，否则不建议使用 CSS 颜色关键字。这是因为颜色关键字都是英文单词，对于非英语母语者会造成理解困难。此外，颜色关键字的语义化并不准确，比如 `grey` 比 `darkgrey` 的颜色更深一些；`grey` 和 `gray` 之间的差别也会造成一致性的问题。

HSL 表示法不仅仅是最易于理解的颜色表示方法，而且也便于开发者通过调整色调、饱和度和亮度来惊喜地调整颜色。

相比于 HSL 表示法，RGB 表示法的优势在于表示近似红绿蓝的颜色时更加简洁明了，但是表示红绿蓝的混合色时就不如 HSL 表示法更易于理解了。

最后，十六进制对于人类的思维来说是比较难以理解的，除非必要，否则请优先考虑前几种方式。

{% include snippets/syntax/14/index.html %}

使用 HSL 值或者 RGB 值，通常在逗号 (`,`)后面追加一个空格，而不在前后括号 (`(`, `)`) 和值之间添加空格。

{% include snippets/syntax/15/index.html %}

#### 颜色和变量

当一个颜色被多次调用时，最好用一个有意义的变量名来保存它。

{% include snippets/syntax/16/index.html %}

现在，你就可以在任何需要的地方随意使用这个变量了。不过，如果你是在一个主题中使用，我不建议固定的使用这个变量。相反，可以使用另一个标识方式的变量来保存它。

{% include snippets/syntax/17/index.html %}

这样做可以防止一个主题变化而出现此类结果 `$sass-pink: blue`。[这篇文章](https://davidwalsh.name/sass-color-variables-dont-suck) 介绍了为什么妥善处理颜色问题如此重要。

#### 变亮和变暗颜色

[`lighten`](https://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) 和 [`darken`](https://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) 函数都是通过增加或者减小HSL中颜色的亮度来实现调节的。基本上，它们就是 [`adjust-color`](https://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) 函数添加了 `$lightness` 参数的别名。

问题是，这些函数经常并不能实现预期的结果。另一方面，通过混合`白色` 或 `黑色`实现变量或变暗的 [`mix`](https://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) 函数，是一个不错的方法。

和上述两个函数相比，使用 `mix` 的好处是，当你降低颜色的比例时，它会渐进的接近黑色（或者白色），而 `darken` 和 `lighten` 立即变换颜色到黑色或白色。

{% include images/color-functions.html %}

如果你不想每次都写 `mix` 函数，你可以创建两个易用的 `tint` 和 `shade` ([Compass](http://compass-style.org/reference/compass/helpers/colors/#shade) 的一部分)来处理相同的事：

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p><a href="https://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> 函数的设计初衷是为了更流畅地调试属性——以实际的高低为调试基础。它如同<code>mix</code>一样好用，并且提供了更清晰地调用约定。比例因子并不完全相同。</p>
</div>

### 列表

列表就是 Sass 的数组。列表是一个一维的数据结构（不同于 [maps](#maps)），用于保存任意类型的数值（包括列表，从而产生嵌套列表）。

列表需要遵守以下规范：

- 除非列表太长不能写在 80 字符宽度的单行中，否则应该始终单行显示；
- 除非适用于 CSS，否则应该始终使用逗号作为分隔符；
- 要么使用内联形式，要么使用多行形式；
- 始终使用括号包裹；
- 始终不要添加尾部的逗号。

{% include snippets/syntax/19/index.html %}

当需要给列表添加一个新列表项时，请遵守其提供的 API，不要试图手动给列表添加列表项。

{% include snippets/syntax/20/index.html %}

在[这篇文章](https://kittygiraudel.com/2013/07/15/understanding-sass-lists/)中介绍了许多合理使用列表的技巧和注意事项。

### Maps

在 Sass 中，样式开发者可以使用 map 这种数据结构 —— Sass 团队使 map 可以映射关联数组、哈希表甚至是 Javascript 对象。map 是一种映射任何类型的键值对，包括内嵌类型的 map，但是我不建议使用 map 存储复杂数据类型。

map 的使用应该遵循下述规范：

- 冒号(`:`)之后添加空格；
- 左开括号(`(`)要和冒号 (`:`)写在同一行；
- 如果键是字符串（99% 都是字符串），则**使用括号包裹起来**。
- 每一个键值对单独一行；
- 每一个键值对以逗号(`,`)结尾；
- 为最后一个键值对添加**尾部逗号** (`,`)，方便添加新键值对、删除和重排已有键值对；
- 单独一行书写右闭括号 (`)`)；
- 右闭括号 (`)`)和分号(`;`)之间不使用空格和换行。

示例:

{% include snippets/syntax/21/index.html %}

自从 Sass 支持 map 依赖具有很多关于它的文章，我建议你阅读以下三篇：[Using Sass Maps](https://www.sitepoint.com/using-sass-maps/), [Extra Map functions in Sass](https://www.sitepoint.com/extra-map-functions-sass/), [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/).

### CSS规则集

在这里，极有可能颠覆每个人对书写 CSS 规则集的认知（根据众多规范整理而成，包括[CSS Guidelines](https://cssguidelin.es/#anatomy-of-a-ruleset)）：

- 相关联的选择器写在同一行；不相关联选择器分行书写；
- 最后一个选择器和左开大括号(`{`)中间书写一个空格；
- 每个声明单独一行；
- 冒号(`:`)后添加空格；
- 所有声明的尾部都添加一个分号 (`;`)；
- 右闭大括号(`}`)单独一行；
- 右闭大括号(`}`)添加空行。

示例:

{% include snippets/syntax/24/index.html %}

添加与 CSS 相关的规范时，我们需要注意：

- 本地变量在其他任何变量之前声明，并和其他声明用空行分隔开；
- 不需 `@content` 的混合宏在放在其他声明之前；
- 嵌套选择器在新行声明；
- 需要 `@content` 的混合宏在嵌套选择器后声明；
- 右闭大括号(`}`)上一行无需空行；

示例:

{% include snippets/syntax/25/index.html %}

### 声明顺序

难以想象竟有这么多关于划分 CSS 声明顺序的讨论。具体而言，有如下两派：

- 坚持以字母顺序排列；
- 以类型（`position`, `display`, `colors`, `font`, miscellaneous...）顺序排列；

这两种方式各有利弊。一方面，字母排序方式通俗易懂（至少对于语言中使用拉丁字母的人来说），所以排序的过程完全没有争议。但是，这种排序的结果却十分奇怪，如 `bottom` 和 `top` 竟然彼此不相邻。为什么 `animations` 属性出现在 `display` 属性之前？字母排序方式有太多诸如此类的怪相了。

{% include snippets/syntax/26/index.html %}

另一方面，按照类型排序则让属性显得更具有意义。每个和字体相关的属性被声明在一起，`top` 和 `bottom` 也结合在一起，最终审阅CSS规则集感觉就像是在读故事。除非你坚持诸如 [Idiomatic CSS](https://github.com/necolas/idiomatic-css)的规定，不然类型声明顺序可以有更丰富充实的表现。`white-space` 应该放在哪里：font还是dispaly? `overflow` 应该归属何处？如何进行组内排序（如果是字母排序，这岂不成了个笑话）？

{% include snippets/syntax/27/index.html %}

此外也有其他类型排序的分支，比如[Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)，他看起来相当流行。Concentric CSS 的基础是依赖盒模型定义顺序：由外而内。

{% include snippets/syntax/28/index.html %}

我必须说我不能对此下任何判定。一份 [CSS-Tricks 做的统计报告](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)确认，超过 45% 的开发者使用类型顺序声明，而只有 14% 使用字母顺序。此外还有 39% 的开发者随意而为，这其中就包括我。

{% include images/order-poll.html %}

因此，我不会在此强加规范选择怎样的声明顺序。只要你长久的在自己的样式表中保持一致的风格，那么选择喜欢的声明顺序就可以了（也就说不要太随便）。

<div class="note">
  <p><a href="https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">最新研究</a> 表明，使用<a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (按照<a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">类型排序</a>) 对 CSS 进行排序，按类型顺序声明，Gzip 压缩文件大小平均达到 2.7%,而按字母顺序排序压缩的文件大小平均达到 1.3%。</p>
</div>

### 选择器嵌套

Sass 中一个正在被众多开发者滥用的功能，就是**选择器嵌套**。选择器嵌套为样式表作者提供了一个通过局部选择器的相互嵌套实现全局选择的方法。

#### 一般规则

比如下述Sass选择器的嵌套：

{% include snippets/syntax/29/index.html %}
 
生成的 CSS:

{% include snippets/syntax/30/index.html %}

从 Sass3.3 开始，可以在同一行中使用最近选择器引用(`&`)来实现高级选择器，比如：

{% include snippets/syntax/31/index.html %}

生成的 CSS:

{% include snippets/syntax/32/index.html %}

这种方式通常被用来配合 [BEM 全名方式](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)使用，基于原选择器（比如 `.block`）生成 `.block__element` and `.block--modifier` 选择器。

<div class="note">
  <p>传说中，使用 <code>&</code> 能在当前选择器下产生新的选择器，这样代码库中选择器无法控制，因为他们本身不存在</p>
</div>

选择器嵌套最大的问题是将使最终的代码难以阅读。开发者需要花费巨大精力计算不同缩进级别下选择器具体的表现效果。CSS 最终的表现效果往往不是浅显易懂的。

选择器越具体则声明语句越冗长，而且对最近选择器的引用(`&`)也越频繁。在某些时候，出现混淆选择器路径和探索下一级选择器的错误率很高，这非常不值得。

为了防止此类情况，我们今年就 [the Inception rule](https://thesassway.herokuapp.com/beginner/the-inception-rule) 讨论了很多很多。它建议嵌套不要超过三层，我的意见比较激进，**建议尽量避免使用嵌套**。 

虽然我们在下一节看到这条规则有一些例外，但这一观点还是很受欢迎的。更多信息请阅读：[《小心嵌套陷阱》](https://www.sitepoint.com/beware-selector-nesting-sass/) 和 [《避免选择器的过渡嵌套》](https://thesassway.herokuapp.com/intermediate/avoid-nested-selectors-for-more-modular-css).

#### 例外

首先，在最外层选择器中嵌套伪类和伪元素是被允许，也是受推荐的。

{% include snippets/syntax/33/index.html %}

使用选择器嵌套选择伪类和伪元素不仅仅有道理的（因为它的处理功能与选择器紧密相关），而且有助于保持总体的一致性。

当然，如果使用类似 `.is-active` 类名来控制当前选择器状态，也可以这样使用选择器嵌套。

{% include snippets/syntax/34/index.html %}

这并不是最重要的，当一个元素的样式在另一个容器中有其他指定的样式时，可以使用嵌套选择器让他们保持在同一个地方。

{% include snippets/syntax/35/index.html %}

这所有的一切，有些是无关紧要的细节，关键是要保持一致性。如果你觉得完全有信心搞定选择器嵌套，然后你就使用了选择器嵌套。可你还要确保你的整个团队也能搞定选择器的嵌套。
