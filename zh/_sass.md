
# 关于Sass

[Sass](http://sass-lang.com)的[开发文档](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)中如此描述自己：

>Sass是CSS的一个扩展,它使CSS的使用起来更加优雅和强大。

Sass的终极目标是解决CSS的缺陷。如我们所知，CSS并不是一个完美的语言。CSS虽然简单易学，却也能迅速制造严重的混淆，尤其是在工程浩大的项目中。

这就是Sass出现的契机，作为一种元语言，通过提供额外的功能和工具可以改善CSS的语法。同时，保留了CSS的原有特性。

Sass存在的关键不是将CSS变成一种全功能编程语言，它只是想修复缺陷。正因如此，学习Sass如同学习CSS一样简单：它只在CSS的基础上添加了几个额外功能。

话虽如此，使用这些功能的方式却是多种多样的。有一些是好的，有一些是坏的，还有一些令人费解。这份样式指南就是为了给你一个统一的和历经实践的方式来编写Sass代码。

### 扩展阅读

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
* [Sass中文教程](http://www.w3cplus.com/blog/tags/302.html)





## Ruby Sass or LibSass

[Sass的第一次提交](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe)还要追溯到距今八年之久的2006年底——可见它已经走过了一段漫长的道路。最开始是基于Ruby，随后便各种版本滋生。其中最成功的要属[LibSass](https://github.com/sass/libsass)（使用C语言编写），它与Ruby原生版本具有最佳兼容性。

在2014年， [Ruby Sass和LibSass团队决定同步推出下一个版本](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan)。从那时起，LibSass开始积极释放版本以校验与Ruby Sass的不同，最后剩下的不一致之处被汇总在[Sass-Compatibility](http://sass-compatibility.github.io) 项目中。如果你知道两个版本中尚未被发现的不一致之处，请提交一个issue使更多开发者了解。

回到选择编译器的问题上来。实际上，这只取决于你。如果是在一个Ruby on Rails的项目中，最好使用Ruby Sass，它在这种情况下是最合适的。当然你也要知道，在未来Ruby Sass会一直引领LibSass的开发并作为其开发参考。

另一方面，LibSass更关注于自身与项目之间的整合。如果你想在非Ruby项目中使用，比如NodeJS，[node-sass](https://github.com/sass/node-sass) 会是个不错的选择。使用LibSass最主要的优势还是因为它的速度，而且比Ruby Sass更快。


### 扩展阅读

* [LibSass](https://github.com/sass/libsass)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)






## Sass Or SCSS

有一个剧烈的争论关于**Sass**名字中的含义，并对此有充足的理由：Sass意味着一个预处理器和它独有的语法。这样很不方便，不是吗？

如你所知，Sass最初定义的语法，其中决定性的特征是缩进敏感。很快，Sass的维护者决定提供一个被称为**SCSS**（**Sassy CSS**）的语法以弱化Sass和CSS之间的差异。

从那时起，Sass（预处理器）开始提供两种不同的语法：Sass（非全大写，[please](http://sassnotsass.com)），也被称为**缩进语法**，和SCSS。使用哪一种语法完全取决于你，两者在功能上是完全等同的，只是在审美上有所偏颇。

Sass的空白敏感语法通过缩进以摆脱大括号、分号和其他符号，从而实现了简洁凝练的语法格式。与之相比，SCSS则更容易学习，因为它只是在CSS上添加了一点点额外的功能。

我自己更喜欢SCSS，因为它更接近CSS的原生面貌，对开发者来说具有友好性。因此，样式指南全文将使用SCSS而不是Sass语法格式来演示。


### 扩展阅读

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)






## 其他预编译器

忽略其他特性，Sass对自己的定位首先是一个预处理器。其最主要的竞争对手包括[LESS](http://lesscss.org/)，一个基于NodeJS的预处理器，因著名CSS框架[Bootstrap](http://getbootstrap.com/)的使用而声名鹊起。此外还有[Stylus](http://learnboost.github.io/stylus/) ，一种对形式无所限制的LESS版本。它是一种无论你想怎么样使用，大都能顺利转换成CSS的程序语言。

*为什么选择Sass胜过LESS以及其他预处理器？*，这始终是一个待解决的问题。就在刚刚，我们还建议在Ruby项目中使用Sass，因为Sass初创于Ruby并且在Ruby on Rails中运行良好。现在随着LibSass与Sass的逐步接近，上述建议显然已经不再绝对和必须。

我之所以喜欢Sass源于它最大程度保留了CSS的原生特性。Sass的设计基于非常坚实的设计原则：大部分的设计顺其自然的来源于核心设计师们的信条，比如添加额外的功能会增加语言的复杂度，但以实用性衡量极具价值的话便得以保留；同时，使用Sass来美化一个块级元素，那么美化前后的效果应该是可预见和可推理的。同时，Sass比其他预处理器更加关注细节。据我所知，核心设计者们非常关心Sass与CSS在细节上的一致性，并确保所有的常用方式具有高度一致的表现。

换言之，Sass并不想成为一个通过在编程语言顶层添加特殊功能实现有关用户逻辑处理的预处理器，以取悦于像我一样喜欢傻瓜式编程的程序员。它更准确的定位是一款软件，旨在解决实际问题。通过提供实用功能改善CSS的短板。

预处理器之外，我们还需要提及一下后处理器。得益于[postCSS](https://github.com/postcss/postcss)和[CSSNext](https://github.com/cssnext/cssnext)项目，后处理器最近几个月得到了显著曝光。后处理器几乎等同于预处理器，稍有不同的是它并不支持即将发布的CSS语法。

你可以认为预处理器是腻子脚本，用来支持尚未实现的CSS功能。举例来说，你可能会像[CSS 规范](http://dev.w3.org/csswg/css-variables/)中描述的一样使用变量，然后用预处理器编译样式表，在这个过程中后处理器只会找出变量出现的地方并替换成真实值——Sass就是这么做的。

后处理器背后的思维是，一旦浏览器支持了新的特性（比如CSS变量），后处理器就不再做这方面处理，而是让浏览器执行相关处理。

虽然在当下提供对未来语法功能的支持是一件很了不起的事情，但我还是喜欢在大多数的工作中使用Sass。当然，在一些情况下我认为后处理器比Sass更适合，比如CSS前缀。稍后我们会讲到这个问题。


### 扩展阅读

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)
