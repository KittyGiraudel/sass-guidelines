
# 变量

变量是任何编程语言的精髓。变量让值得以重用，避免了一遍遍地复制副本。最重要的是，使用变量让更新一个值变得很方便。不用查找、替换，更不用手动检索。

然而CSS是一个将所有鸡蛋装在一个大篮子中的语言，不同于其他语言，这里没有真正的作用域。因此，我们需要十分重视由于添加变量而引起的冲突。

我的建议只适用于创建变量并感觉确有必要的情况下。不要为了某些骇客行为而声明新变量，这丝毫没有作用。只有满足所有下述标准时方可创建新变量：

- 该值至少重复出现了两次；
- 该值至少可能会被更新一次；
- 该值所有的表现都与变量有关（非巧合）。

基本上，没有理由声明一个永远不需要更新或者只在单一地方使用变量。






## 作用域

Sass中变量的作用域在过去几年已经发生了一些改变。直到最近，规则集和其他范围内声明变量的作用域才默认为本地。如果已经存在同名的全局变量，则局部变量覆盖全局变量。从3.4版本开始，Sass已经可以正确处理作用域的概念，并通过创建一个新的局部变量来代替。

本部分讨论下**全局变量的影子**。当在局部范围内（选择器内、函数内、混合宏内……）声明一个已经存在于全局范围内的变量时，局部变量就成为了全局变量的*影子*。基本上，局部变量只会在局部范围内覆盖全局变量。

以下代码片可以解析**变量影子**的概念。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Initialize a global variable at root level.
$variable: 'initial value';

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Create a local variable that shadows the global one.
  $variable: 'local value';

  // Include the mixin: it overrides the global variable.
  @include global-variable-overriding;

  // Print the variable’s value.
  // It is the **local** one, since it shadows the global one.
  content: $variable;
}

// Print the variable in another selector that does no shadowing.
// It is the **global** one, as expected.
.other-local-scope::before {
  content: $variable;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Initialize a global variable at root level.
$variable: 'initial value'

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
  // Create a local variable that shadows the global one.
  $variable: 'local value'

  // Include the mixin: it overrides the global variable.
  +global-variable-overriding

  // Print the variable’s value.
  // It is the **local** one, since it shadows the global one.
  content: $variable

// Print the variable in another selector that does no shadowing.
// It is the **global** one, as expected.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>






## `!default`标识符

如果创建一个库、框架、栅格系统甚至任何的Sass片段，是为了分发经验或者被其他开发者使用，那么与之配置的所有变量都应该使用`!default`标志来定义，方便其他开发者重写变量。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$baseline: 1em !default;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$baseline: 1em !default
{% endhighlight %}
  </div>
</div>

多亏如此，开发者才能在引入你的库之前定义自用的`$baseline`，引入后又不必担心自己的值被重定义了。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Developer’s own variable
$baseline: 2em;

// Your library declaring `$baseline`
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Developer’s own variable
$baseline: 2em

// Your library declaring `$baseline`
@import your-library

// $baseline == 2em
{% endhighlight %}
  </div>
</div>






## `!global`标识符

`!global`标志应该只在局部范围的全局变量被覆盖时使用。定义根级别的变量时，`!global`标志应该省略。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$baseline: 2em;

// Nope
$baseline: 2em !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$baseline: 2em

// Nope
$baseline: 2em !global
{% endhighlight %}
  </div>
</div>






## 多变量或maps

使用maps比使用多个不同的变量有明显优势。最重要的优势就是map的遍历功能，这在多个不同变量中是不可能实现的。

另一个支持使用map的原因，是它可以创建`map-get()`函数以提供友好API的功能。比如，思考一下下述Sass代码：

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer’s name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer’s name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer’s name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer’s name
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
