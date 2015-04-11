
# Variables

Variables are the essence of any programming language. They allow us to reuse values without having to copy them over and over again. Most importantly, they make updating a value very easy. No more find and replace or manual crawling.

However CSS is nothing but a huge basket containing all our eggs. Unlike many languages, there are no real scopes in CSS. Because of this, we have to pay real attention when adding variables at the risk of witnessing conflicts.

My advice would be to only create variables when it makes sense to do so. Do not initiate new variables for the heck of it, it won’t help. A new variable should be created only when all of the following criteria are met:

* the value is repeated at least twice;
* the value is likely to be updated at least once;
* all occurrences of the value are tied to the variable (i.e. not by coincidence).

Basically, there is no point declaring a variable that will never be updated or that is only being used at a single place.






## Scoping

Variable scoping in Sass has changed over the years. Until fairly recently, variable declarations within rulesets and other scopes were local by default. However when there was already a global variable with the same name, the local assignment would change the global variable. Since version 3.4, Sass now properly tackles the concept of scopes and create a new local variable instead.

The docs talk about *global variable shadowing*. When declaring a variable that already exists on the global scope in an inner scope (selector, function, mixin...), the local variable is said to be *shadowing* the global one. Basically, it overrides it just for the local scope.

The following code snippet explains the *variable shadowing* concept.

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






## `!default` flag

When building a library, a framework, a grid system or any piece of Sass that is intended to be distributed and used by external developers, all configuration variables should be defined with the `!default` flag so they can be overwritten.

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

Thanks to this, a developer can define his own `$baseline` variable *before* importing your library without seeing his value redefined.

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






## `!global` flag

The `!global` flag should only be used when overriding a global variable from a local scope. When defining a variable at root level, the `!global` flag should be omitted.

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






## Multiple variables or maps

There are advantages of using maps rather than multiple distinct variables. The main one is the ability to loop over a map, which is not possible with distinct variables.

Another pro of using a map is the ability to create a little getter function to provide a friendlier API. For instance, consider the following Sass code:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer's name
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
/// @param {String} $layer - Layer's name
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
