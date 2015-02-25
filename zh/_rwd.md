
# 响应式设计和断点

无需在此对响应式网页设计多做介绍，它已经无所不在了。但是你可能会疑惑：**为什么在Sass样式指南中会有关于响应式网页设计的章节？**正因为有诸多降低断点使用难度的方式，所以我认为在这里列出来会是个不错的主意。






## 命名断点

我认为使用媒体查询而不针对特定设备是安全可靠的做法。特别要指出的是，不应该赞成专门针对iPads或黑莓手机设计媒体查询。媒体查询应该关注屏幕尺寸，直到当前设计遇到阻断而将所有工作过继给下一个媒体查询。

与之相同的观点是，断点不应该用设备来命名，而应使用更通用的方式。特别是，现在有一些手机比平板更大，而有一些平板比电脑更大……

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$breakpoints: (
  'medium': (min-width: 800px),
  'large': (min-width: 1000px),
  'huge': (min-width: 1200px),
);

// Nope
$breakpoints: (
  'tablet': (min-width: 800px),
  'computer': (min-width: 1000px),
  'tv': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$breakpoints: ('medium': (min-width: 800px), 'large': (min-width: 1000px), 'huge': (min-width: 1200px))

// Nope
$breakpoints: ('tablet': (min-width: 800px), 'computer': (min-width: 1000px), 'tv': (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

就此来说，任何不与特定设备关联而表达清晰的命名约定，都会因其广泛的通用性获得认可。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$breakpoints: (
  'seed': (min-width: 800px),
  'sprout': (min-width: 1000px),
  'plant': (min-width: 1200px),
);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$breakpoints: ('seed': (min-width: 800px), 'sprout': (min-width: 1000px), 'plant': (min-width: 1200px))
{% endhighlight %}
  </div>
</div>




### 扩展阅读

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)






## 断点管理器
一旦用自己钟意的方式命名完断点，就需要有一种方式在实际的媒体查询中使用它。有太多方法可以做这件事，我自己非常乐意使用`map-get()`函数读取断点地图的方法。这套系统简洁而高效。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Responsive manager.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media #{inspect(map-get($breakpoints, $breakpoint))} {
      @content;
    }
  } @else {
    @error 'No value found for `#{$breakpoint}`. '
         + 'Please make sure it is defined in `$breakpoints` map.';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Responsive manager.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
=respond-to($breakpoint)
  @if map-has-key($breakpoints, $breakpoint)
    @media #{inspect(map-get($breakpoints, $breakpoint))}
      @content

  @else
    @error 'No value found for `#{$breakpoint}`. '
         + 'Please make sure it is defined in `$breakpoints` map.'
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>显然，这样管理断点相当简单，但当需要自定义或使用多个断点会爱到一定的制约。</p>
  <p>如果你希望能更好管理断点，我可以建议你使用类似<a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>、<a href="http://breakpoint-sass.com/">Breakpoint</a>或<a href="https://github.com/eduardoboucas/include-media">，没有必要自己重新去造轮子。</p>
</div>



### 扩展阅读

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)






## 媒体查询用法

就在不久之前，有一个关于应该在哪里书写媒体查询的热门讨论：媒体查询是应该与选择器写在一起（Sass允许这种方式），还是要彻底地分离开？我想说我是**媒体查询紧贴选择器**方式的狂热捍卫者，并且认为这会和**组件**一样表现得很棒。

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  @include respond-to('medium') {
    color: blue;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  +respond-to('medium')
    color: blue
{% endhighlight %}
  </div>
</div>

编译出来的CSS:

<div>
{% highlight css %}
.foo {
  color: red;
}

@media (min-width: 800px) {
  .foo {
    color: blue;
  }
}
{% endhighlight %}
</div>

可能你已经了解到，这种习惯会导致CSS输出文件中出现重复的媒体查询语句。不过[测试了](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)和下面的话认为一旦Gzip（或者其他相同软件）完成压缩就不会有什么问题：

>……我们反复测试了贴合与分离两种媒体查询方式对性能的影响，结论是即使在最差情况下也没有明显差异，而在最好情况下差异更是少之又少。<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), 关于[Breakpoint](http://breakpoint-sass.com/)的看法

如果现在你仍担心媒体查询的副本问题，你可以使用工具来合并它们，比如[这个gem](https://github.com/aaronjensen/sass-media_query_combiner)，但是我有必要警告你移动相关CSS代码可能会有副作用。 是否了解资源顺序是非常重要的。



### 扩展阅读

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)
