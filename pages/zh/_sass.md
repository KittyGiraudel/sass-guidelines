
## 关于Sass

[Sass](https://sass-lang.com) 的[开发文档](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)中如此描述自己：
 
>Sass 是 CSS 的一个扩展,它使 CSS 的使用起来更加优雅和强大。

Sass 的终极目标是解决 CSS 的缺陷。如我们所知，CSS 并不是一个完美的语言。CSS 虽然简单易学，却也能迅速制造严重的混淆，尤其是在工程浩大的项目中。

这就是 Sass 出现的契机，作为一种元语言，通过提供额外的功能和工具可以改善 CSS 的语法。同时，保留了 CSS 的原有特性。

Sass 存在的关键不是将 CSS 变成一种全功能编程语言，它只是想修复缺陷。正因如此，学习 Sass 如同学习 CSS 一样简单：它只在 CSS 的基础上添加了几个额外功能。

话虽如此，使用这些功能的方式却是多种多样的。有一些是好的，有一些是坏的，还有一些令人费解。这份样式指南就是为了给你一个统一的和历经实践的方式来编写 Sass 代码。

### Ruby Sass or LibSass

[Sass 的第一次提交](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe)还要追溯到距今八年之久的 2006 年底——可见它已经走过了一段漫长的道路。最开始是基于 Ruby，随后便各种版本滋生。其中最成功的要属[LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)（使用 C/C++ 语言编写），它与 Ruby 原生版本具有最佳兼容性。

在 2014 年， [Ruby Sass 和 LibSass 团队决定同步推出下一个版本](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan)。从那时起，LibSass 开始积极释放版本以校验与 Ruby Sass 的不同，最后剩下的不一致之处被汇总在[Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/) 项目中。如果你知道两个版本中尚未被发现的不一致之处，请提交一个 issue 使更多开发者了解。

回到选择编译器的问题上来。实际上，这只取决于你。如果是在一个 Ruby on Rails 的项目中，最好使用 Ruby Sass，它在这种情况下是最合适的。当然你也要知道，在未来 Ruby Sass 会一直引领 LibSass 的开发并作为其开发参考。如果你正在查找从 Ruby Sass 切换到 LibSass 的方法，请参考[这篇文章](https://www.sitepoint.com/switching-ruby-sass-libsass/)。

另一方面，LibSass 更关注于自身与项目之间的整合。如果你想在非 Ruby 项目中使用，比如 NodeJS，[node-sass](https://github.com/sass/node-sass) 会是个不错的选择。使用 LibSass 最主要的优势还是因为它的速度，而且比 Ruby Sass 更快。

### Sass Or SCSS

有一个剧烈的争论关于 **Sass** 名字中的含义，并对此有充足的理由：Sass 意味着一个预处理器和它独有的语法。这样很不方便，不是吗？

如你所知，Sass 最初定义的语法，其中决定性的特征是缩进敏感。很快，Sass 的维护者决定提供一个被称为 **SCSS**（**Sassy CSS**）的语法以弱化 Sass 和 CSS 之间的差异。

从那时起，Sass（预处理器）开始提供[两种不同的语法](https://www.sitepoint.com/whats-difference-sass-scss/)：Sass（非全大写，[please](http://sassnotsass.com)），也被称为**缩进语法**，和 SCSS。使用哪一种语法完全取决于你，两者在功能上是完全等同的，只是在审美上有所偏颇。

Sass 的空白敏感语法通过缩进以摆脱大括号、分号和其他符号，从而实现了简洁凝练的语法格式。与之相比，SCSS 则更容易学习，因为它只是在 CSS 上添加了一点点额外的功能。

我自己更喜欢 SCSS，因为它更接近 CSS 的原生面貌，对开发者来说具有友好性。因此，样式指南全文将使用 SCSS 而不是 Sass 语法格式来演示。你可以通过<span data-toggle="aside" class="link-like" role="button" aria-expanded>左侧的可选面板</span>切换到 Sass 的缩进语法。

### 其他预编译器

忽略其他特性，Sass 对自己的定位首先是一个预处理器。其最主要的竞争对手包括 [Less](http://lesscss.org/)，一个基于 NodeJS 的预处理器，因著名 CSS 框架 [Bootstrap](https://getbootstrap.com/)（在 v4 版本之前）的使用而声名鹊起。此外还有 [Stylus](https://stylus-lang.com/)，该预处理器对编写形式无所限制，学习难度稍高。

*为什么选择 Sass 胜过其他预处理器？*，这始终是一个待解决的问题。就在刚刚，我们还建议在 Ruby 项目中使用 Sass，因为 Sass 初创于 Ruby 并且在 Ruby on Rails 中运行良好。现在随着 LibSass 与 Sass 的逐步接近，上述建议显然已经不再绝对和必须。

我之所以喜欢 Sass 源于它最大程度保留了 CSS 的原生特性。Sass 的设计基于非常坚实的设计原则：大部分的设计顺其自然的来源于核心设计师们的信条，比如添加额外的功能会增加语言的复杂度，但以实用性衡量极具价值的话便得以保留；同时，使用 Sass 来美化一个块级元素，那么美化前后的效果应该是可预见和可推理的。同时，Sass 比其他预处理器更加关注细节。据我所知，核心设计者们非常关心 Sass 与 CSS 在细节上的一致性，并确保所有的常用方式具有高度一致的表现。换言之，Sass 的目标是解决开发者遇到的切实问题，提供高效的函数化解 CSS 的短板。

预处理器之外，我们还需要提及一下后处理器工具。得益于 [postCSS](https://github.com/postcss/postcss) 和 [CSSNext](https://github.com/cssnext/cssnext) 项目，它们最近比较受业界瞩目。

PostCSS 常被视为（并不正确）一种“后处理器”工具。从这个名字可以看出，大家认为使用预处理器解析生成 CSS 后，才会让 PostCSS 上场处理 CSS，说实话，做这种工具需要的不是 PostCSS，而只是“处理器”。

PostCSS 可以让开发者访问样式的基本单位，比如选择器、样式和属性值，并使用 JavaScript 处理各种操作，最终生成 CSS。一个典型事例就是基于 PostCSS 创建的 [Autoprefixer](https://github.com/postcss/autoprefixer)，该工具根据 [CanIUse](https://caniuse.com) 提供的浏览器支持度信息给属性添加合理的浏览器前缀。

PostCSS 是一款强大的构建库，可以和任何预处理器（也可以是原生 CSS）共同工作，但是目前 PostCSS 还不易于使用。如果开发者想使用 PostCSS，那么他需要具备一些 JavaScript 的能力来构建项目，此外，PostCSS 的 API 也还处在变化之中。相对来说，Sass 只支持一些用于编写 CSS 的特性，而 PostCSS 则提供了使用 JavaScript 直接访问 CSS 抽象语法树的能力。

简而言之，Sass 简单易学，可以解决大部分的问题，而 PostCSS 上手略难，但威力巨大，所以你应该都去尝试一些这两种工具。实际上，PostCSS 提供了一个官方的 SCSS 解析器来处理 Sass 相关的任务。

<div class="note">
  <p>感谢 <a href="https://github.com/corysimmons">Cory Simmons</a> 对本节所作出的技术支持。</p>
</div>
