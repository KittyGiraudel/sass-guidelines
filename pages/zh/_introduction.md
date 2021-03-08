
## 简介

### 为什么需要一个样式指南

一个样式指南并不是一份便于阅读并使代码处于理想状态的文档。它在一个项目的生命周期中是一份关键文档，描述了编写代码的方式和采用这样方式的原因。它可能在小项目中显得有些矫枉过正，但却能在保持代码库整洁，提高可扩展性和可维护性上提供诸多便利。

不用多说相信你也可以理解，参与项目的开发者越多，代码样式指南就越显的必要。与之相同，项目的规模越大，代码样式指南也会越加重要。

[Harry Roberts](https://csswizardry.com) 的 [CSS Guidelines](https://cssguidelin.es/#the-importance-of-a-styleguide) 就非常好:

<blockquote>
    <p>样式指南（注意不是视觉风格指南）用于团队是一个很有价值工具：</p>
    <ul>
        <li>长时间内便于创建和维护项目</li>
        <li>便于不同能力的和专业的开发使用</li>
        <li>便于任何时间加入团队的不同开发人员</li>
        <li>便于新员工培训</li>
        <li>便于开发人员创建代码库</li>
    </ul>
</blockquote>

### 免责声明

首先第一件事是：**这不是一份 CSS 样式指南**。本文档不会讨论诸如约定 CSS 类名、模块化开发模式和有关 ID 的疑惑等 CSS 范畴内的问题。本文档中的准则只着眼于处理 Sass 的专有内容。

此外，这份样式指南是我独创的，所以会显得有些**个人主观倾向**。你可以将它看成是我通过多年实践研究出的方法和建议的集合。这也让我有机会接触到少数极具见地的资源，所以一定要浏览一下*扩展阅读*。

显然，这里讲的肯定不是进行 Sass 编程的唯一方式，而且它是否符合你的项目要求还有待检验。

### 核心原则

最后，如果有一件事是我想从整个样式指南中传授的，那就是：**[Sass 以简为美，简约至上](https://www.sitepoint.com/keep-sass-simple/)**。

感谢我过去使用 Sass 时傻傻的尝试，比如 [bitwise operators](https://github.com/KittyGiraudel/SassyBitwise)、[iterators and generators](https://github.com/KittyGiraudel/SassyIteratorsGenerators) 和 [a JSON parser](https://github.com/KittyGiraudel/SassyJSON)，从而认识到了可以用预处理器来做什么。

同时，CSS 是一门简单的语言，那么 Sass 在书写常规 CSS 的时候就不应该更复杂。[KISS principle](https://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid) 在这里是一个核心原则，甚至在有些情况下要优先于[DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself)。

有时候，一点点重复可以更好的保持代码的可维护性，而不是建立一个头重脚轻、臃肿复杂、不可维护的系统。

此外，请允许我再一次引用 [Harry Roberts](https://csswizardry.com) 的观点，**实用胜过完美**。有些时候，你可能会发现自己违背了这里所描述的规则。如果感觉自己的方式有道理，感觉很正确，那就继续做吧。编写代码从来都不是一家之言。

### 扩展本文

本文中的大部分内容都极具实际参考意义。我学习和使用 Sass 已经有好几年了，其中积累了大量的开发经验，所以对于其他人来说某些观点可能会有一些不适应。

尽管如此，我认为有必要做一些事方便大家自由扩展本文。扩展本文非常简单，有专门的文档来制定代码的编写方式，对于其中的特殊规则，会在下面做出解释。

点击这里可以查看位于 [SassDoc repository](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md) 上的一个 Styleguide 扩展：

> 这是一个由 Felix Geisendörfer 开发的 [Node Styleguide](https://github.com/felixge/node-style-guide) 扩展。这份文档全面覆盖了 Node Styleguide 的内容。
