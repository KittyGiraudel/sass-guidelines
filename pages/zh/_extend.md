
## 扩展

`@extend` 指令是 Sass 中既强大易于误解的指令。该指令作为一个警示，告知 Sass 对选择器 A 的样式化正好存在与选择器B共通的地方。不用多说，这是书写模块化 CSS 的好助手。

实际上，`@extend` 的实际作用是维护继承前后选择器之间的。这也就是说：

- 选择器是受限的（比如：在 `.foo > .bar` 中 `.bar` 必须有一个父级 `.foo`）;
- 选择器所收到的限制会传递给后续继承的选择器上（比如  `.baz { @extend .bar; }` 会生成 `.foo > .bar, .foo > .baz`）;
- 被继承的选择器会被要继承的选择器匹配。

要理解这些现象，最直接的方式就是看看当没有限制时继承样式所产生的选择器数量剧增的结果。如果 `.baz .qux` 继承了 `.foo .bar`，那么就会生成 `.foo .baz .qux` 或 `.baz .foo .qux`，这是因为 `.foo` 和 `.baz` 是常见的选择器，它们可以成为父级、祖父级等等。

始终使用选择器占位符定义选择器之间的关系，而不是类名，这能让你更加轻松地更换命名约定。此外，因为选择器之间的关系只被定义在了占位符中，所以很少会产生意料之外的选择器。

当继承 `.class` 或 `%placeholder` 时，如果父类和子类是同一类型，那么建议只使用 `@extend` 来实现，比如 `.error` 是 `.warning` 的一种，那么 `.error` 就可以通过 `@extend .warning` 来实现。

{% include snippets/extend/01/index.html %}

扩展选择器在许多情境下是有用和值得的。始终牢记下面这些规则，谨慎使用 `@extend` 指令：

- 优先继承 `%placeholders`，而不是具体的选择器；
- 当继承 `.class` 时，只继承单一的 `.class`，不要使用[复杂选择器][complex selector](https://www.w3.org/TR/selectors4/#syntax)；
- 尽可能少的继承自 `%placeholders`；
- 避免继承常见的父类选择器（比如： `.foo .bar`）或者是常见的相邻选择器（比如：`.foo ~ .bar`），否则会让选择器的数量急速增加。

<div class="note">
  <p>通常来说，<code>@extend</code> 有助于减少文件体积大小，因为它的操作本质上是合并选择器而不是赋值样式。话虽如此，当你使用 <a href="https://en.wikipedia.org/wiki/Gzip">Gzip</a> 压缩文件时，<code>@extend</code> 对于文件压缩的好处几乎是可以忽略的。</p>
  <p>这也就是说，如果你不能使用类似 Gzip 的工具，那么就可以考虑使用 <code>@extend</code> 来减少不必要的重复，特别是当样式文件的大小成为性能瓶颈的时候，这种方式尤为有效。</p>
</div>

### 继承和媒体查询

应该只在同一个媒体查询作用域下继承选择器，将媒体查询视为一种对作用域的限制。

{% include snippets/extend/02/index.html %}

有关 `@extend` 的好与坏，开发者们之间的观点大有不同，你可以阅读以下文章了解其中的利弊：

* [What Nobody Told you About Sass Extend](https://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](https://www.sitepoint.com/avoid-sass-extend/)
* [Don’t Over Extend Yourself](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

总而言之，我建议只将 `@extend` 用于维护选择器之间的关系。如果两个选择器是类似的，那么最好使用 `@extend`；如果它们之间没有关系，只是具有相同的样式，那么使用 `@mixin` 会更好。更多有关两者的用法，请看这篇文章：[When to use extend and when to use a mixin](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/).

<div class="note">
  <p>感谢 <a href="https://twitter.com/davidkpiano">David Khourshid</a> 对本节提供的技术支持。</p>
</div>
