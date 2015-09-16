
# 扩展

`@extend` 指令是 Sass 中既强大易于误解的指令。该指令作为一个警示，告知 Sass 对选择器 A 的样式化正好存在与选择器B共通的地方。不用多说，这是书写模块化 CSS 的好助手。

实际上，`@extend` 的实际作用是维护继承前后选择器之间的。这也就是说：

- 选择器是受限的（比如：在 `.foo > .bar` 中 `.bar` 必须有一个父级 `.foo`）;
- 选择器所收到的限制会传递给后续继承的选择器上（比如  `.baz { @extend .bar; }` 会生成 `.foo > .bar, .foo > .baz`）;
- 被继承的选择器会被要继承的选择器匹配。

要理解这些现象，最直接的方式就是看看当没有限制时继承样式所产生的选择器数量剧增的结果。如果 `.baz .qux` 继承了 `.foo .bar`，那么就会生成 `.foo .baz .qux` 或 `.baz .foo .qux`，这是因为 `.foo` 和 `.baz` 是常见的选择器，它们可以成为父级、祖父级等等。

始终使用[选择器占位符](http://www.sitepoint.com/sass-reference/placeholders/)定义选择器之间的关系，而不是类名，这能让你更加轻松地更换命名约定。此外，因为选择器之间的关系只被定义在了占位符中，所以很少会产生意料之外的选择器。

+{% include snippets/extend/01/index.html %}

扩展选择器在许多情境下是有用和值得的。始终牢记下面这些规则，谨慎使用 `@extend` 指令：

- 只继承自 `%placeholders`，而不是具体的选择器；
- 尽可能少的继承自 `%placeholders`；
- 避免继承常见的父类选择器（比如： `.foo .bar`）或者是常见的相邻选择器（比如：`.foo ~ .bar`），否则会让选择器的数量急速增加。

<div class="note">
    <p>通常来说，<code>@extend</code> 有助于减少文件体积大小，因为它的操作本质上是合并选择器而不是赋值样式。话虽如此，当你使用 <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a> 压缩文件时，<code>@extend</code> 对于文件压缩的好处几乎是可以忽略的。</p>
    <p>这也就是说，如果你不能使用类似 Gzip 的工具，那么就可以考虑使用 <code>@extend</code> 来减少不必要的重复，特别是当样式文件的大小成为性能瓶颈的时候，这种方式尤为有效。</p>
+</div>

### 继承和媒体查询

应该只在同一个媒体查询作用域下继承选择器，将媒体查询视为一种对作用域的限制。

{% include snippets/extend/02/index.html %}

简而言之，建议将 `@extend` 只用于维持选择器之间的关系。如果两个选择器的内容具有典型的相似性和结构性，那么这就是使用 `@extend` 的最佳场景了。如果它们之间没有关联，只是某些样式相似，那么使用 `@mixin` 更合适。

<div class="note">
    <p>非常感谢 <a href="https://twitter.com/davidkpiano">David Khourshid</a> 为本节提供的帮助和经验。</p>
</div>

###### 扩展阅读

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don’t Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
