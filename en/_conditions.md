
# Conditional statements

You probably already know that Sass provides conditional statements via the `@if` and `@else` directives. Unless you have some medium to complex logic in your code, there is no need for conditional statements in your everyday stylesheets. Actually, they mainly exist for libraries and frameworks.

Anyway, if you ever find yourself in need of them, please respect the following guidelines:

* No parentheses unless they are necessary;
* Always an empty new line before `@if`;
* Always a line break after the opening brace (`{`);
* `@else` statements on the same line as previous closing brace (`}`).
* Always an empty new line after the last closing brace (`}`) unless the next line is a closing brace (`}`).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if $support-legacy {
  // ...
} @else {
  // ...
}

// Nope
@if ($support-legacy == true) {
  // ...
}
@else {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if $support-legacy
  // ...
@else
  // ...

// Nope
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

When testing for a falsy value, always use the `not` keyword rather than testing against `false` or `null`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if not index($list, $item) {
  // ...
}

// Nope
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if not index($list, $item)
  // ...

// Nope
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

Always put the variable part on the left side of the statement, and the (un)expected result on the right. Reversed conditional statements often are more difficult to read, especially to unexperienced developers.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if $value == 42 {
  // ...
}

// Nope
@if 42 == $value {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if $value == 42
  // ...

// Nope
@if 42 == $value
  // ...
{% endhighlight %}
  </div>
</div>

When using conditional statements within a function to return a different result based on some condition, always make sure the function still has a `@return` statement outside of any conditional block.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// Nope
@function dummy($condition) {
  @if $condition {
    @return true;
  } @else {
    @return false;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// Nope
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>
