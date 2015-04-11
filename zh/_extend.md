
# 扩展

`@extend`指令是几年前使Sass风靡一时的重要特性之一。该指令作为一个警示，告知Sass对元素A的样式化正好存在与选择器B共通的地方。不用多说，这是书写模块化CSS的好助手。

然而我感觉必须提醒你谨慎使用这个特性。正因灵活多变，所以`@extend`还是一个棘手的概念，某些时候可能弊大于利，特别是被滥用时。当扩展一个选择器时，除非你对整个代码库有深入的了解，不然肯定没法回答诸如下面的问题：

- 当前选择器要追加到哪里？
- 我是否会碰上意料之外的副作用？
- 这条简单的扩展将会产生多大的CSS？

如你所知，结果的可能即包括没有任何影响，也包括灾难性副作用。因此，我的第一建议是完全避免使用`@extend`指令。这听起来有些残酷，但最终会拯救你于水火之中。

俗话说的好：

> 永远不要说不可能。<br>
> &mdash; Apparently, [not Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

扩展选择器在有些情境下是有用和值得的。始终牢记这些规则，那样就不会是自己陷入困境：

- 从单一模块扩展，而不是多个不同的模块；
- 只使用占位符扩展，而不使用实际的选择器；
- 确保用来扩展的占位符是样式表中尽可能小的。

如果你要使用扩展，我想提醒你它也不能与`@media`块元素融洽相处。如你所知，Sass不能在一个媒体查询中扩展外部的选择器。当你这么做的时候，编译器轻易就会崩溃，并提醒你不能这么干。这不是好消息，特别是几乎所有人都知道媒体查询功能。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // This doesn’t work. Worse: it crashes.
    @extend .foo;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  content: 'foo'

@media print
  .bar
    // This doesn’t work. Worse: it crashes.
    @extend .foo
{% endhighlight %}
  </div>
</div>

> 无法在`@media`内部`@extend`一个外部选择器。只可以使用相同指令`@extend`选择器。<br>

<div class="note">
  <p>这就是常说的<code>@extend</code>可以通过合并选择器而不是复制属性帮助减小文件大小。这种说法是对的，不过一旦经<a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a>处理后这点差异完全可以忽略不计。</p>
  <p>也就是说，如果你无法使用Gzip（或相同工具），在你足够精通的前提下使用<code>@extend</code>方式也是不错的。</p>
</div>

总而言之，除非在某些特殊情况下，否则我**建议不要使用`@extend`指令**，但我不会禁用它。



### 扩展阅读

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don’t Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
