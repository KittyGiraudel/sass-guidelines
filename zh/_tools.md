
# 工具

和Sass一样受欢迎的CSS预处理器的优秀之处就在于，它提供了包括框架、插件、库和工具在内的整套开发环境。Sass诞生8年以来，其本身的特性和[everything that can be written in Sass has been written in Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/)一文中的观点越来越相近。

不过，我的建议是最小程度的依赖于各种工具。管理依赖可能会是你特别不想面对的事情。此外，在Sass中很少需要外部依赖。






## Compass

[Compass](http://compass-style.org/)是Sass中最主要的框架。其开发者[Chris Eppstein](https://twitter.com/chriseppstein)，是Sass的两位核心开发者之一。如果你想听一下我的看法，我想说这个框架一直很流行。

不过，我已经不再使用Compass了，主要原因是它很大程度上拖慢了Sass。Ruby Sass本身就比较慢，所以在此之上增加更多功能并无益处。

实际上，我们通常只使用了框架本身的一点点功能，而完整的Compass是庞大的。混合宏的跨浏览器兼容功能也只是冰山一角。数学函数、图像辅助、幽灵图……使用这个优秀的工具有太多的好处了。

不幸的是，这就是所有的语法糖而且没有一个是杀手级的特性。精灵图生成器虽然*非常优秀*，但也会报出一两个错误。不过[Grunticon](https://github.com/filamentgroup/grunticon) 和[Grumpicon](http://grumpicon.com/)就运行的很好，而且它们还有可以被插入到构建过程的优势。

虽然我不建议使用Compass，但我也不会禁止使用它，特别是当它不兼容LibSass的时候（即使它正朝这个方向努力）。如果你感觉使用起来还不错，这当然可以，但是我认为最终你也不会从中收获更多。

<div class="note">
  <p>Ruby Sass目前正着手进行一些很棒的优化，目标是通过运用诸多函数和混合宏实现具有深度逻辑的样式。它们应该显著改善性能，而这往往是Compass和其他框架拖慢Sass的原因。</p>
</div>



### 扩展阅读

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## 栅格系统

随着响应式网页设计地遍地开花，栅格系统布局已经成为了一种必然选择。为了固定大小并使设计风格统一，我们通常使用网格来给元素布局。为了避免反复地布局工作，一些非凡的想法认为应该使它们保持可复用性。

还是长话短说吧：我并非栅格系统的拥趸。当然我确实看到了它的潜力，但大多的是矫枉过正，而且主要是被设计师用来绘制红栏白底的原型。你还记得上一次有*thank-God-I-have-this-tool-to-build-this-2-5-3.1-π-grid*如此赞叹的时间吗？那就对了，从来没有过。因为在多数情况下，你只是想使用12列栅格布局，毫不奇特。

如果你正在项目中使用类似[Bootstrap](http://getbootstrap.com/)和[Foundation](http://foundation.zurb.com/)的CSS框架，我建议善用它们来避免额外的依赖，因为此时它们很有可能就包含了一套栅格系统，。

如果你尚未依赖于特定的栅格系统，那么也许会乐意了解这里介绍的两个由Sass支持的栅格引擎：[Susy](http://susy.oddbird.net/)和[Singularity](http://singularity.gs/)。它们都可以满足你的需求，所以只需从中挑选喜欢的一个来用即可并且可以放心即使是你的苛刻需求&mdash;哪怕是最多变的&mdash;也可以被实现。

或者你可以处理地更轻松些，就像使用 [CSSWizardry Grids](https://github.com/csswizardry/csswizardry-grids)的感觉。总而言之，任何选择都不会对你的代码风格有过多影响，所以这一点上一切取决于你。



### 扩展阅读

* [Singularity](http://singularity.gs/)
* [Singularity: Grids Without Limits](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity Grid System](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy](http://susy.oddbird.net/)
* [Build Web Layouts Easily with Susy](http://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](http://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](http://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap’s Grid System vs Susy: a Comparison](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](http://www.sitepoint.com/creative-grid-system-sass-calc/)






## SCSS-lint

审查代码是非常重要的事情。通常来说，遵从一份样式指南的规范可以帮助减少代码质量上的问题，但是没有人的工作是无懈可击的，何况总有些地方需要改善。所以，可以认为，审查代码和注释文档一样重要。

[SCSS-lint](https://github.com/causes/scss-lint)是一个帮你保持SCSS文件简洁而又具有可读性的工具。它是完全可定制化的，并且非常易于和其他工具集成。

幸运的是，本文档的描述非常类似于SCSS-lint的使用建议。为了根据Sass样式指南配置SCSS-lint，建议如下配置：

{% include scss-lint-configuration.html %}

<div class="note">
  <p>如果你想将SCSS-lint插入到Grunt构建过程中，那么Grunt插件<a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>一定会对你有所帮助。</p>
  <p>此外，如果你在寻找一个运行SCSS-lint的简洁工具，那么<a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...)正在开发的<a href="https://houndci.com/">Hound</a>也会对你有所帮助。</p>
</div>



### 扩展阅读

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)
