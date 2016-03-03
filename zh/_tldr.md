
# 总结概要

简而言之，本文主要包括以下几个方面的内容:

## 核心原则

* 创建编程规范的目的就是为了保证协作开发的一致性。即使你对本文有不同的意见，也要保证整体开发的一致性。[↩](#why-a-styleguide)
* 尽可能让 Sass 代码保持简洁。除非是绝对需要，否则绝没有必要构建复杂的系统。[↩](#key-principles)
* 请记住，有时候保持简洁（KISS，Keep It Simple, Stupid）比减少重复（Don't Repeat Yourself）更重要。[↩](#key-principles)

## 语法 & 格式

* 使用两个空格代表缩进，而不是使用tab键。[↩](#syntax--formatting)
* 理想上，每行保持为 80 个字符宽度。[↩](#syntax--formatting)
* 根据 [CSS Guidelines](http://cssguidelin.es) 正确书写 CSS 属性。[↩](#syntax--formatting)
* 有意义的使用空格。[↩](#syntax--formatting)

### 字符串

* 强烈建议在样式表顶部使用 `@charset` 指令声明字符集。[↩](#encoding)
* 除非用作 CSS 标识符，否则应该使用单引号包裹字符串和 URL。[↩](#strings-as-css-values)

### 数值

* 数字尾部不使用 0 ，并且强制在小于 1 的数字前使用 0。[↩](#zeros)
* 长度样式属性值为 0 时不要添加单位。[↩](#units)
* 使用括号包裹运算表达式。[↩](#calculations)
* 不使用幻数。[↩](#magic-numbers)

### 颜色

* 颜色表示法的先后顺序：关键字 > HSL > RGB > 十六进制。[↩](#color-formats)
* 当减淡或加深颜色时，最好使用 `mix(..)` 替代 `darken(..)` 和 `lighten(..)`。[↩](#lightening-and-darkening-colors)

### 列表

* 使用逗号分隔列表。[↩](#lists)
* 使用圆括号增加可读性。[↩](#lists)
* 列表尾部不要添加逗号（当它们是内联状态时）。[↩](#lists)

### Maps

* 当 map 内部包含多个键值对时，将它们分成多行。[↩](#maps)
* 为了增加可维护性，map 内部的最后一个键值对应该添加一个逗号。[↩](#maps)
* 如果 map 的键是字符串，应该使用引号包裹起来。[↩](#maps)

### 声明顺序

* 只要保持开发的一致性，无论哪种声明顺序（根据字母表或者类型排序）都是可以接受的。[↩](#declaration-sorting)

### 选择器嵌套

* 减少选择器嵌套。[↩](#selector-nesting)
* 对伪类和伪元素使用选择器嵌套。[↩](#selector-nesting)
* 媒体查询也可以嵌套到相关的选择器当中。[↩](#selector-nesting)

### 命名约定

* 坚持连字符分隔的命名方式。[↩](#naming-conventions)

## 注释

* CSS 中充满了机巧，当你有所疑问的时候，就应该写下相关的注释。[↩](#commenting)
* 对于变量、函数、混合宏和占位符创建的公开 API，使用 SassDoc 来注释。[↩](#documentation)

## 变量

* 在公开 API 中使用 `!default` 标志变量，让后期的修改更安全。[↩](#default-flag)
* 不要在顶层使用 `!global` 标志，应为这可能会在未来和 Sass 语法有冲突。[↩](#global-flag)

## 扩展

* 坚持扩展占位符，而不是扩展既有的 CSS 选择器。[↩](#extend)
* 尽可能少地扩展占位符，避免潜在的副作用。[↩](#extend)

















