
## 响应式设计和断点

无需在此对响应式网页设计多做介绍，它已经无所不在了。但是你可能会疑惑：**为什么在 Sass 样式指南中会有关于响应式网页设计的章节？**正因为有诸多降低断点使用难度的方式，所以我认为在这里列出来会是个不错的主意。

### 命名断点

我认为使用媒体查询而不针对特定设备是安全可靠的做法。特别要指出的是，不应该赞成专门针对 iPad 或黑莓手机设计媒体查询。媒体查询应该关注屏幕尺寸，直到当前设计遇到阻断而将所有工作过继给下一个媒体查询。

与之相同的观点是，断点不应该用设备来命名，而应使用更通用的方式。特别是，现在有一些手机比平板更大，而有一些平板比电脑更大……

{% include snippets/rwd/01/index.html %}

就此来说，任何不与特定设备关联而表达清晰的[命名约定](https://css-tricks.com/naming-media-queries/)，都会因其广泛的通用性获得认可。

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>上面的示例使用了嵌套的 map，但这并不是强制或绝对的，你完全可以使用字符串来代替（比如 <code>'(min-width: 800px)'</code>）。</p>
</div>

### 断点管理器

一旦用自己钟意的方式命名完断点，就需要有一种方式在实际的媒体查询中使用它。有太多方法可以做这件事，我自己非常乐意使用 `map-get()` 函数读取断点地图的方法。这套系统简洁而高效。

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>更多有关 Sass 中媒体查询的信息，请参考 <a href="https://www.sitepoint.com/managing-responsive-breakpoints-sass/">SitePoint</a> 和 <a href="https://css-tricks.com/approaches-media-queries-sass/">CSS-Tricks</a> 中优秀的实践文章。</p>
</div>

### 媒体查询用法

就在不久之前，有一个关于应该在哪里书写媒体查询的热门讨论：媒体查询是应该与选择器写在一起（Sass 允许这种方式），还是要彻底地分离开？我想说我是**媒体查询紧贴选择器**方式的狂热捍卫者，并且认为这会和**组件**一样表现得很棒。

{% include snippets/rwd/04/index.html %}

生成结果：

{% include snippets/rwd/05/index.html %}

可能你已经了解到，这种习惯会导致 CSS 输出文件中出现重复的媒体查询语句。不过测试了和下面的话认为一旦 Gzip（或者其他相同软件）完成压缩就不会有什么问题：

>……我们反复测试了贴合与分离两种媒体查询方式对性能的影响，结论是即使在最差情况下也没有明显差异，而在最好情况下差异更是少之又少。<br>
> &mdash; Sam Richards 关于Breakpoint 的看法

如果现在你仍担心媒体查询的副本问题，你可以使用工具来合并它们，比如[这个 gem](https://github.com/aaronjensen/sass-media_query_combiner)，但是我有必要警告你移动相关 CSS 代码可能会有副作用。 是否了解资源顺序是非常重要的。
