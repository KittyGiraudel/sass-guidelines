
## Extend

The `@extend` directive is a powerful feature that is frequently misunderstood. In general, it makes it possible to tell Sass to style a selector A as though it also matched selector B. Needless to say, this can be a valuable ally when writing modular CSS.

However, the true purpose of `@extend` is to maintain the relationships (constraints) within extended selectors between rulesets. What exactly does this mean?

- Selectors have *constraints* (e.g. `.bar` in `.foo > .bar` must have a parent `.foo`);
- These constraints are *carried over* to the extending selector (e.g. `.baz { @extend .bar; }` will produce `.foo > .bar, .foo > .baz`);
- The declarations of the extended selector will be shared with the extending selector.

Given that, it's straightforward to see how extending selectors with lenient constraints can lead to selector explosion. If `.baz .qux` extends `.foo .bar`, the resulting selector can be `.foo .baz .qux` or `.baz .foo .qux`, as both `.foo` and `.baz` are general ancestors. They can be parents, grandparents, etc.

Always try to define relationships via selector placeholders, not actual selectors. This will give you the freedom to use (and change) any naming convention you have for your selectors, and since relationships are only defined once inside the placeholders, you are far less likely to produce unintended selectors.

For inheriting styles, only use `@extend` if the extending `.class` or `%placeholder` selector _is a kind of_ the extended selector. For instance, an `.error` is a kind of `.warning`, so `.error` can `@extend .warning`.

{% include snippets/extend/01/index.html %}

There are many scenarios where extending selectors are helpful and worthwhile. Always keep in mind these rules so you can `@extend` with care:

* Use extend on `%placeholders` primarily, not on actual selectors.
* When extending classes, only extend a class with another class, _never_ a [complex selector](https://www.w3.org/TR/selectors4/#syntax).
* Directly extend a `%placeholder` as few times as possible.
* Avoid extending general ancestor selectors (e.g. `.foo .bar`) or general sibling selectors (e.g. `.foo ~ .bar`). This is what causes selector explosion.

<div class="note">
  <p>It is often said that <code>@extend</code> helps with the file size since it combines selectors rather than duplicating properties. That is true, however the difference is negligible once <a href="https://en.wikipedia.org/wiki/Gzip">Gzip</a> has done its compression.</p>
  <p>That being said, if you cannot use Gzip (or any equivalent) then switching to a <code>@extend</code> approach might be valuable, especially if stylesheet weight is your performance bottleneck.</p>
</div>

### Extend and media queries

You should only extend selectors within the same media scope (`@media` directive). Think of a media query as another constraint.

{% include snippets/extend/02/index.html %}

Opinions seem to be extremely divided regarding the benefits and problems from `@extend` to the point where many developers including myself have been advocating against it, as you can read in the following articles:

* [What Nobody Told you About Sass Extend](https://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](https://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

That being said and to sum up, I would advise to use `@extend` only for maintaining relationships within selectors. If two selectors are characteristically similar, that is the perfect use-case for `@extend`. If they are unrelated but share some rules, a `@mixin` might suit you better. More on how to choose between the two in this [write-up](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/).

<div class="note">
  <p>Thanks to <a href="https://twitter.com/davidkpiano">David Khourshid</a> for his help and expertise on this section.</p>
</div>
