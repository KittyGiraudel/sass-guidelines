
# 循环

因为Sass提供了如[lists](#lists)和[maps](#maps)这样的复杂数据结构，所以对于提供给开发者遍历这些数据结构的能力也无需惊讶。

然而，循环的出现意味着存在本不可能出现在Sass中的复杂逻辑。在使用循环之前，务必确定这么做是有道理的，并且确认这么做可以解决问题。






## Each

`@each`循环绝对是Sass提供的三个循环方式中最常用的。它提供了一个简洁的API来迭代列表或map。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $theme in $themes {
  .section-#{$theme} {
    background-color: map-get($colors, $theme);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $theme in $themes
  .section-#{$theme}
    background-color: map-get($colors, $theme)
{% endhighlight %}
  </div>
</div>

当迭代一个map时，通常使用`$key`和`$value`作为变量名称来确保一致性。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $key, $value in $map
  .section-#{$key}
    background-color: $value
{% endhighlight %}
  </div>
</div>

Also be sure to respect those guidelines to preserve readability:

* Always an empty new line before `@each`;
* Always an empty new line after the closing brace (`}`) unless the next line is a closing brace (`}`).

同时遵守下述规则，确保可读性：

* `each`前添加空行；
* 除非下一行是右闭大括号（`}`），否则在所有右闭大括号（`}`）后面添加新行。



## For

当需要聚合伪类`:nth-*`的时候，使用`@for`循环很有用。除了这些使用场景，如果*必须*迭代最好还是使用`@each`循环。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@for $i from 1 through 10
  .foo:nth-of-type(#{$i})
    border-color: hsl($i * 36, 50%, 50%)
{% endhighlight %}
  </div>
</div>

要坚持一贯的传统，始终使用`$i`作为变量名，除非有非常好的原因，否则永远不要使用`to`关键字：而是始终使用`through`。许多开发者甚至不知道Sass有这个变化；使用它可能会造成混乱。

最后，确保遵循规范以保持可读性：

* `each`前添加空行；
* 除非下一行是右闭大括号（`}`），否则在所有右闭大括号（`}`）后面添加新行。






## While

绝对没有必要在真实的Sass项目中使用`@while`循环——**不要使用它**。
