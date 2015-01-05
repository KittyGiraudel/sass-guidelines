---
layout: default
---

# About the author

My name is [Hugo Giraudel][author_website], I am a front-end developer from France about to move in Germany. I have been writing Sass for over two years now and am the author of Sass related projects such as [SassDoc][sassdoc] and [Sass-Compatibility][sass_compatibility].

I have also written a couple of Sass libraries, mostly for the heck of it: [SassyJSON][sassyjson], [SassyLists][sassylists], [SassySort][sassysort], [SassyCast][sassycast], [SassyMatrix][sassymatrix], [SassyBitwise][sassybitwise], [SassyIteratorsGenerators][sassyiteratorsgenerators], [SassyLogger][sassylogger], [SassyStrings][sassystrings] and [SassyGradients][sassygradients].

<div class="button-wrapper">
  <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="button">Catch me on Twitter</a>
</div>











# Contributing

Sass Guidelines is a free project I maintain in my spare time. Needless to say it is quite a large amount of work to keep everything up-to-date, documented and relevant. Obviously knowing that you liked this styleguide is already much appreciated!

Now, if you feel like contributing, please know that tweeting about it, spreading the word of fixing a tiny typo by opening an issue or a pull-request on the [GitHub repository][repository] would be great! Also, I like beer if you wanna pay me back.

<div class="button-wrapper">
  <a href="https://github.com/{{ site.github_username }}/sass-guidelines" target="_blank" class="button">GitHub repository</a>
  <a href="https://twitter.com/share?text=Sass%20Guidelines%2C%20a%20styleguide%20for%20writing%20sane%2C%20maintainable%20and%20scalable%20Sass%20%E2%80%94%20&url=http://sass-guidelin.es" target="_blank" class="button">Spread the word</a>
</div>











# Table of Contents

* [About The Author](#about-the-author)
* [Contributing](#contributing)
* [About Sass](#about-sass)
  * [Ruby Sass Or LibSass](#ruby-sass-or-libsass)
  * [Sass Or SCSS](#sass-or-scss)
  * [Other Preprocessors](#other-preprocessors)
* [Introduction](#introduction)
  * [Why A Styleguide](#why-a-styleguide)
  * [Disclaimer](#disclaimer)
  * [Key Principles](#key-principles)
* [Syntax & Formatting](#syntax--formatting)
  * [Strings](#strings)
  * [Numbers](#numbers)
  * [Colors](#colors)
  * [Lists](#lists)
  * [Maps](#maps)
  * [CSS Ruleset](#css-ruleset)
  * [Selector Nesting](#selector-nesting)
* [Naming Conventions](#naming-conventions)
* [Commenting](#commenting)
  * [Writing Comments](#writing-comments)
  * [Documentation](#documentation)
* [Architecture](#architecture)
  * [Base Folder](#base-folder)
  * [Components Folder](#components-folder)
  * [Layout Folder](#layout-folder)
  * [Pages Folder](#pages-folder)
  * [Themes Folder](#themes-folder)
  * [Utils Folder](#utils-folder)
  * [Vendors Folder](#vendors-folder)
  * [Main file](#main-file)
* [Variables](#variables)
  * [!default Flag](#default-flag)
  * [!global Flag](#global-flag)
  * [Multiple Variables Or Map](#multiple-variables-or-map)
* [Extend](#extend)
* [Mixins](#mixins)
* [Warnings and errors](#warnings-and-errors)
  * [Warnings](#warnings)
  * [Errors](#errors)











# About Sass

> Sass is an extension of CSS that adds power and elegance to the basic language.

This is how [Sass][sass] describes itself in its [documentation][sass_documentation]. Sass' ultimate objective is to fix CSS flaws. CSS, as we all know, is not the best language in the world. While very simple to learn, it can quickly get quite messy, especially on large projects.

This is where Sass comes in, as a meta-language, to improve CSS syntax in order to provide extra features and handy tools. Meanwhile, Sass wants to be conservative regarding CSS language.

The point is not to turn CSS into a fully-featured programming language; Sass only wants to help where CSS fails. Because of this, getting started with Sass is not any harder than learning CSS: it simply adds a couple of extra features on top of it.

That being said, there are many ways to use these features. Some good, some bad, so unusual. Those guidelines are meant to give you a consistent and documented approach to writing Sass code.

### Further reading

* [Sass official website][sass]
* [Sass official documentation][sass_documentation]






## Ruby Sass or LibSass

[Sass' first commit](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) goes back as far as late 2006, over 8 years ago. Needless to say it has come a long way since then. Initially developed in Ruby Sass, varied ports popped here and there. The most successful one, [LibSass][libsass], written in C is now close to be fully compatible with the original Ruby version.

In 2014, [Ruby Sass and LibSass teams decided to wait for both versions to sync up before moving forward with Sass as a language](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Since then, LibSass has been actively releasing versions to have feature-parity with its older brother.

Last inconsistencies are gathered and listed by myself under the [Sass-Compatibility][sass_compatibility] project. If you are aware of an incompatibility between the two versions that is not listed, please be kind enough to open an issue.

Now when it comes to choosing your compiler, it does not really matter. Actually, it is really up to your project. If it is a Ruby on Rails project, you better use Ruby Sass, which is perfectly suited for such a case.

On the other hand, LibSass is mostly dedicated to being wrapped. So if you want to use anything but Ruby, for instance NodeJS, [node-sass][node_sass] is all chosen. Also the major benefit of using LibSass is its speed: it is blazingly fast compared to Ruby Sass.

### Further reading

* [Sass-Compatibility][sass_compatibility]
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)






## Sass or SCSS

There are quite a lot of confusion regarding the semantic behind the *Sass* appellation. And for good reason: Sass means both the preprocessor and its own syntax. Not very convenient, is it?

You see, Sass initially described a syntax very close to Ruby. Actually, the initial idea was to write CSS in Ruby. Soon enough, Sass maintainers decided to close the gap between Sass and CSS by providing a CSS-friendly syntax called *SCSS* for *Sassy CSS*. The motto is: if it's valid CSS, it's valid SCSS.

Since then, Sass (the preprocessor) provides two different syntaxes: Sass, also known at *the indented syntax* and SCSS. Which one to use is pretty much up to you since both are strictly equivalent in features. It is only a matter of aesthetics at this point.

Sass Ruby-like syntax relies on indentation to get rid off braces, semi-colons and other punctuation symbols, leading to a leaner and shorter syntax. Meanwhile, SCSS is easier to use since it's mostly some tiny extra bits on top of CSS.

I, myself, prefer SCSS over Sass because it is closer to CSS and friendlier to most developers. Because of that, I will use SCSS rather than Sass all along those guidelines.

### Further reading

* [What's the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)






## Other preprocessors

Sass is a preprocessor among others. Its most serious competitor has to be [LESS](), a NodeJS based preprocessor that has gotten quite popular thanks to the famous CSS framework [Bootstrap][bootstrap] using it. There is also Stylus which is kind of the nerdy unrestricting version of LESS where you can do pretty much whatever you want since it almost turns CSS into a programming language.

Now *why choosing Sass over LESS or another preprocessor* is still a valid question as of today. Not so long ago, we use to recommand Sass for Ruby-based projects because it was first made in Ruby and went well with Ruby on Rails. Now that LibSass has caught up (or so) on original Sass, this is no longer a relevant advice.

What I do like with Sass, it is its conservative aspect regarding CSS. Sass is not a preprocessor aiming at pleasing nerdy wannabe programmers like me by adding extra features on top of a language that is not intented to support any logical aspect. It is a software aiming at solving actual issues; helping writing CSS where CSS shows some weakness.

Preprocessors aside, we should also mention postprocessors, which have known quite a good exposure of the last few months especially thanks to [postCSS][postcss] and [CSSNext][cssnext]. Postprocessors are pretty much equivalent to preprocessors except they do not provide anything else than upcoming CSS syntax.

You can think of postprocessors as a polyfill for unsupported CSS features. For instance, you write variables as they are described in the [CSS specifications](http://dev.w3.org/csswg/css-variables/), you compile your stylesheets with a postprocessor, and every variable occurrence gets replaced with its value, as Sass would do.

The idea behind preprocessors is that once browsers support new features (e.g. CSS variables), the postprocessor does not compile them anymore and let browsers take over.

While providing tomorrow's syntax today has something of a noble idea, I have to say I still prefer using Sass for most tasks. Yet, there are some occasions where I believe postprocessors are more suited than Sass and the like, for instance CSS prefixing. But we'll get back to this.

### Further reading

* [LESS official website][less]
* [Stylus official website][stylus]
* [CSSNext official website][cssnext]
* [postCSS repository][postcss]











# Introduction






## Why a styleguide

Styleguides are not just a pleasing document to read picturing an ideal state for your code. It is a key document in a project's life, describing how and why code should be written. It may look overkill for small projects, yet it helps a lot to keep your codebase clean, scalable and easily maintainable.

Needless to say, the more actors involved on a project, the more code guidelines are needed. Along the same lines, the bigger the project, the more a styleguide is a must.

[Harry Roberts][harry_roberts] states it very well in [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>A coding styleguide (note, not a visual styleguide) is a valuable tool for teams who:</p>
  <ul>
    <li>build and maintain products for a reasonable length of time;</li>
    <li>have developers of differing abilities and specialisms;</li>
    <li>have a number of different developers working on a product at any given time;</li>
    <li>on-board new staff regularly;</li>
    <li>have a number of codebases that developers dip in and out of.</li>
  </ul>
</blockquote>






## Disclaimer

Those Sass guidelines are my own and somehow very opinionated. Think of it as a collection of methodologies and advices I have polished and given over the years.

Obviously, they are certainly not the only way of doing and may or may not suit your project. Feel free to pick from it and adapt them to your needs. As we say *your mileage may vary*.






## Key principles

At the end of the day, if there is one thing I'd like you to get from this whole styleguide, it is that **Sass should be kept as simple as it can be**.

Believe me, I know what Sass is capable of. I am the guy who implemented [bitwise operators][sassybitwise], [iterators and generators][sassyiteratorsgenerators] and [a JSON parser][sassyjson] in Sass, so trust me when I say I am well aware of what one can do with this preprocessor.

Meanwhile, CSS is a simple language. Sass being intended to write CSS, it should not get much more complex than regular CSS. The [KISS principle][kiss_principle] (Keep It Simple Stupid) is key here and may even take over the [DRY principle][dry_principle] (Don't Repeat Yourself) in some circumstancies.

Sometimes, it's better repeating a bit to keep the code maintainable rather than building a top-heavy, unwieldy, unnecessarily complicated system that is completely unmaintainable because too complex.











# Syntax & formatting

If you ask me, the very first thing a styleguide should do is describe the usual guidelines to write code. When several actors are involved in writing CSS on the same projects, it is only a matter of time before one of them start doing things his own way. Code guidelines are not only meant to prevent that, but also help reading and updating the code by making it look consistent.

Roughly, we want (shamelessly inspired by [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* two (2) spaces indents, no tabs;
* ideally, 80-characters wide lines;
* properly written multi-lines CSS rules;
* meaningful uses of whitespace.

{% highlight scss %}
// Yep
.element {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// Nope
.element {
    display: block; overflow: hidden;

    padding: 0 1em;
}
{% endhighlight %}

We will not tackle the question of file architecture in this section. It is the object of [another chapter](#architecture).






## Strings

CSS does not require strings to be quoted even those containing spaces. Take font-family names for instance, it doesn't not matter whether you wrap them in quotes for the CSS parser.

Because of that, Sass does not require strings to be quoted as well. Even better, a quoted string is strictly equivalent to this unquoted twin (e.g. `"abc"` is strictly equal to `abc`).

That being said, languages that do not require strings to be quoted are definitely a minority thus **strings should always be wrapped with double quotes** in Sass. Aside of consistency with other languages, including CSS' cousin JavaScript, there are several reasons for this choice:

* most syntax highlights will choke on unquoted strings;
* it helps general readibility;
* there is no reason not to quote strings.

{% highlight scss %}
// Yep
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif;

// Nope
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif;
{% endhighlight %}

<div class="note">
  <p>In the previous example, <code>sans-serif</code> is not being quoted because it is a specific CSS value that needs to be unquoted.</p>
</div>






## Numbers

In Sass, number is a data type englobing everything from unitless numbers to lengths, durations, frequencies, angles and so on. This is intended in order to be able to run calculations on lengths and such.

### Floats

Floats should not display the leading 0.

{% highlight scss %}
// Yep
.element {
  opacity: .5;
}

// Nope
.element {
  opacity: 0.5;
}
{% endhighlight %}

### Casting

When casting a unitless number to a length, an angle or whatever, there are two ways of doing this properly, and an incorrect one. Pick wisely.

{% highlight scss %}
$value: 42;

// Yep
$length: $value * 1px;

// Yep
$length: $value + 0px;

// Nope
$length: $value + px;
{% endhighlight %}

Appending the unit as a string to a number results in a string, preventing any additional operation on the value. This is not what you want.

### Calculations

**Top-level numeric calculations should always be wrapped in parenthesis**. This requirement not only dramatically improves readability, but also prevents some edge cases by forcing Sass to evaluate the content of parenthesis.

{% highlight scss %}
// Yep
.element {
  width: (100% / 3);
}

// Nope
.element {
  width: 100% / 3;
}
{% endhighlight %}

### Further reading

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)







## Colors

Colors occupy an important place of the CSS language. Because of this, Sass ends up being a valuable ally when it comes to manipulating colors, mostly by providing a handful of [powerful functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).

### Color format

In order to make colors as simple as they can be, my advice would be to respec tthe following order of preference for color formats:

1. [CSS color keywords](http://www.w3.org/TR/css3-color/#svg-color);
1. [HSL notation](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB notation](http://en.wikipedia.org/wiki/RGB_color_model);
1. Hexadecimal notation. Preferably lowercase and shortened when possible.

For starter, keywords often speak for themselves. The HSL representation is not only the easiest one for the human brain to comprehend but also makes it easy for stylesheets authors to tweak the color by adjusting the hue, saturation and lightness individually. RGB has still the benefit of showing right away if the color is more of a blue, a green or a red but it does not make it easy to build a color from the three parts. Last, hexadecimal is close to indecipherable for the humain mind.

{% highlight scss %}
// Yep
.element {
  color: red;
}

// Nope
.element {
  color: #FF0000;
}
{% endhighlight %}

When using a color more than once, store it in a variable with a meaninful name so you can reuse it.

{% highlight scss %}
// Yep
$sass-pink: #c69;

// Nope
$pink: #c69;
{% endhighlight %}

### Lightening and darkening colors

To lighten or darken a color, do not use [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) and [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) Sass functions. Instead, use the [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) function to mix your color with either `white` or `black`.

The benefit of using `mix` rather than one of the two forementioned functions is that is will progressively go to black (or white) as you decrease the proportion of the color whereas `darken` and `lighten` will quickly blow out a color all the way to black or white.

<p data-height="400" data-theme-id="0" data-slug-hash="wBopOd" data-default-tab="result" data-user="HugoGiraudel" class='codepen'>See the Pen <a href='http://codepen.io/HugoGiraudel/pen/wBopOd/'>Dadgumit, Blowouts</a> by Hugo Giraudel (<a href='http://codepen.io/HugoGiraudel'>@HugoGiraudel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

If you don't want to write the `mix` function every time, you can create two easy-to-use functions to do the same thing:

{% highlight scss %}
/// Slightly lighten a color
/// @access public
/// @param {Color} $color - color to tint
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function tint($color, $percentage) {
  @return mix($color, white, $percentage);
}

/// Slightly darken a color
/// @access public
/// @param {Color} $color - color to shade
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function shade($color, $percentage) {
  @return mix($color, black, $percentage);
}
{% endhighlight %}

### Further reading

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don't Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)






## Lists

Lists are the Sass equivalent of arrays. It is a flat data structure (unlike [maps](#maps)) intended to store values of any type (including lists, leading to nested lists).

Unless you have a good reason to do so (using a Sass list a CSS list of values for instance), always **use comma as a delimiter**. While making the list slightly longer, it helps distinguishing values from each others and stay consistent with most languages.

{% highlight scss %}
// Yep
$font-stack: "Helvetica", "Arial", sans-serif;

// Nope
$font-stack: "Helvetica" "Arial" sans-serif;
{% endhighlight %}

### Further reading

* [SassyLists][sassylists]






## Maps

Since Sass 3.3, stylesheets authors can now define maps which is the Sass word for associative arrays, hashes or even JavaScript objects. A map is a data structure mapping keys (that can be any data type, including maps althought I wouldn't recommend it) to values of any type.

Maps should be written as follow:

* space after the color (`:`);
* opening brace (`(`) on the same line as the color (`:`);
* **quoted keys** if they are string (which represents 99% of the cases);
* each key/value pair on its own new line;
* comma (`,`) at the end of each key/value except the last;
* closing brace (`)`) on its own new line;
* no space or new line between closing brace (`)`) and semi-colon (`;`).

Illustration:

{% highlight scss %}
// Yep
$breakpoints: (
  "small": 767px,
  "medium": 992px,
  "large": 1200px
);

// Nope
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
{% endhighlight %}

### Further reading

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)






## CSS Ruleset

At this point, this is mostly rehearsing what everybody knows, but here is how a CSS ruleset should be written (at least, according to most guidelines including [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset) and those):

* related selectors on the same line; unrelated selectors on new lines;
* the opening brace (`{`) spaced from the last selector by a single space;
* each declaration on its own new line;
* a space after the colon (`:`);
* a trailing semi-colon (`;`) at the end of all declarations;
* the closing brace (`}`) on its own new line;
* a new line after the closing brace `}`.

Illustration:

{% highlight scss %}
// Yep
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// Nope
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
    margin: 0 auto }
{% endhighlight %}

Adding to those CSS-related guidelines, we want to pay attention to:

* local variables being declared before any declaration, then spaced from declarations by a new line;
* mixin calls with no `@content` coming before any declaration;
* nested selectors always coming after a new line;
* mixin calls with `@content` coming after any nested selectors;
* no new line before a closing brace (`}`).

Illustration:

{% highlight scss %}
.foo, .foo-bar,
.baz {
  $length: 42em;

  @include ellipsis;
  @include size($length);
  display: block;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  @include respond-to("small") {
    overflow: visible;
  }
}
{% endhighlight %}

### Further reading

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)






## Selector Nesting

One particular feature Sass provides that is being overly misused by many developers is *selector nesting*. Selector nesting offers a way for stylesheets authors to compute long selectors by nesting shorter selectors within each others. For instance the following Sass nesting:

{% highlight scss %}
.foo {
  .bar {
    &:hover {
      content: baz;
    }
  }
}
{% endhighlight %}

... will generate this CSS:


{% highlight css %}
.foo .bar:hover {
  content: baz;
}
{% endhighlight %}

Along the same lines, since Sass 3.3 it is possible to use the current selector reference (`&`) to generate advanced selectors. For instance:

{% highlight scss %}
.foo {
  &-bar {
    content: "Howdy! I am `.foo-bar`.";
  }
}
{% endhighlight %}

This method is often used along with [BEM naming conventions](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to generated `.block__element` and `.block--modifier` selectors based on the original one (i.e. `.block` in this case).

<div class="note">
  <p>While it might be anecdotal, generating new selectors from the current selector reference (<code>&</code>) makes those selectors unsearchable in the code base since they do not exist per se.</p>
</div>

The problem with selector nesting is it ultimately makes code more difficult to read. Because one has to mentally compute the resulting selector out of the indentation levels, it is not always quite obvious what the CSS will end up being.

This statement is getting even truer when selectors get longer and references to the current selector (`&`) more frequent. At some point, the risk to lose track and not being able to understand what's going anymore is so high that it is not worth it.

To prevent such a situation to happen, we **avoid selector nesting except for pseudo-classes and pseudo-elements**. These are the only cases where nesting is allowed, and even recommended.

{% highlight scss %}
.foo {
  content: "regular";

  &:hover {
    content: "hovered";
  }

  &::before {
    content: "pseudo-element";
  }
}
{% endhighlight %}

Using selector nesting for pseudo-classes and pseudo-elements not only makes sense because it deals with closely related selectors, but also helps keeping everything about a component at the same place.

### Further reading

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)











# Naming conventions

In this section, we will not deal with what are the best CSS naming conventions for maintainability and scale; this is not only up to you, but also out of the scope of a Sass Styleguide. May I suggest those recommanded by [CSS Guidelines](http://cssguidelin.es/#naming-conventions).

There are a few things you can name in Sass, and it is important to name them well so the whole code base looks both consistent and easy to read:

* variables;
* functions;
* mixins.

Sass placeholders are deliberately omitted from this list since they can be considered as regular CSS selectors, thus following the same naming pattern as classes.

Regarding variables, functions and mixins, we stick to something very *CSSy*: **hyphen-delimited**, no camel-case, and above all meaningful.

{% highlight scss %}
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) { /* ... */ }

@function opposite-direction($direction) { /* ... */ }
{% endhighlight %}

### Further reading

* [CSS Guidelines' Naming Conventions](http://cssguidelin.es/#naming-conventions)











# Commenting

CSS is a tricky language, full of hacks and oddities. Because of this, it should be heavily commented, especially if you or someone else intend to read and update the code 6 months or 1 year from now. Don't let you or anybode else in the position of *I-didn't-write-this-oh-my-god-why*.

As simple as CSS can get, there are still a lot of room for comments. Could it be explaining:

* the structure and/or role of a file;
* the goal of a ruleset;
* the idea behind a magic number;
* the reason of a CSS declaration;
* the order of CSS declarations;
* the thought process behind a way of doing.

And I probably forgot a lot of other various reasons as well. Commenting takes very little time when done seamlessly along with the code so do it at the right time. Coming back at a piece of code to comment it is not only completely unrealistic but also extremely annoying.






## Writing comments

Ideally, *any* CSS ruleset should be preceded by a C-style comment explaining what is the point of the CSS block. This comment also hosts numbered explanations regarding specific parts of the ruleset. For instance:

{% highlight css %}
/**
 * Helper class to truncate and add ellipsis to a string too long for it to fit
 * on a single line.
 * 1. Prevent content from wrapping, forcing it on a single line.
 * 2. Add ellipsis at the end of the line.
 */
.ellipsis {
  white-space: nowrap; /* 1 */
  text-overflow: ellipsis; /* 2 */
  overflow: hidden;
}
{% endhighlight %}

Basically everything that is not obvious from the first glance should be commented. There is no such thing as too much documentation. Remember that you cannot *comment too much*, so get on fire and write comments for everything that is worth it.

When commenting a Sass specific section, use Sass inline comments instead of a C-style block. This makes the comment invisible in the output, even in expanded mode during development process.

{% highlight scss %}
// Add current module to the list of imported modules.
// `!global` flag is required so it actually updates the global variable.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}

### Further reading

* [CSS Guidelines' Commenting section](http://cssguidelin.es/#commenting)






## Documentation

Every variable, function, mixin and placeholder that is intended to be re-used all over the code base should be documented as part of the global API using [SassDoc][sassdoc].

SassDoc provides two different syntaxes for comments: either C-style or inline. For instance both of the following snippets are valid SassDoc comments:

{% highlight scss %}
/**
 * Vertical rhythm baseline used all over the code base.
 * @type Length
 **/
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}

<div class="note">
  <p>Two stars (<code>*</code>) required before the closing slash (<code>/</code>).</p>
</div>

{% highlight scss %}
/// Vertical rhythm baseline used all over the code base.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}

<div class="note">
  <p>Three slashes (<code>/</code>) required.</p>
</div>

SassDoc has two major roles:

* forcing standardized comments using an annotation-based system for everything that is part of a public or private API;
* being able to generate an HTML version of the API documentation by using any of the SassDoc endpoint (CLI tool, Grunt, Gulp, Broccoli, Node...).

<figure>
<img alt="" src="/assets/images/sassdoc-preview.png" />
<figcaption>Documentation generated by SassDoc</figcaption>
</figure>

Here is an example of a mixin extensively documented with SassDoc:

{% highlight scss %}
/// Mixin helping defining both `width` and `height` simultaneously.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - Element's `width`
/// @param {Length} $height ($width) - Element's `height`
///
/// @example scss - Usage
/// .element {
///   @include size(10em);
/// }
///
/// .other-element {
///   @include size(100%, 10em);
/// }
///
/// @example css - CSS output
/// .element {
///   width: 10em;
///   height: 10em;
/// }
///
/// .other-element {
///   width: 100%;
///   height: 10em;
/// }
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}

### Futher reading

* [SassDoc official website][sassdoc]
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
* [New Features and New Look for SassDoc](http://webdesign.tutsplus.com/articles/new-features-and-a-new-look-for-sassdoc--cms-21914)











# Architecture

Architecturing a CSS project is probably one of the most difficult things you will have to do in a project's live. Keeping the architecture consistent and meaningful is even harder.

Fortunately, one of the main benefits of using a CSS preprocessor is having the ability to split the codebase over several files without impacting performance (like the `@import` CSS directive would do).

Thanks to Sass' overload of the `@import` directive, it is perfectly safe (and actually recommended) to use as many files as necessary in development, all compiled into a single stylesheet when going to production.

On top of that, I cannot stress enough the need of folders, even on small scale projects. At home, you don’t drop every sheet of paper into the same box. You use have folders; one for the house/flat, one for the bank, one for bills, and so on.

There is no reason to do otherwise when structuring a CSS project. Split the codebase into meaningful separated folders so it is easy to find stuff later when you have to come back at the code.

There are a lot of popular architectures for CSS projects: [OOCSS](http://oocss.org/), [SMACSS](https://smacss.com/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap][bootstrap]-like, [Foundation](http://foundation.zurb.com/)-like... As far as I am concerned, all of them are too complicated for me. I like to keep things simple. To keep them obvious.

I usually go with what I call the *7-1 pattern*: 7 folders, 1 file. Basically, you have all your partials stuffed into a 7 different folders, and a single file at root level (usually named `main.scss`) that imports them all to be compiled into a CSS stylesheet.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

And of course:

* `main.scss`

<figure>
  <img src="/assets/images/sass-wallpaper.jpg" alt="" />
  <figcaption>Wallpaper by <a href="https://twitter.com/julien_he">Julien He</a></figcaption>
</figure>

Ideally, we can come up with something like this:

<div class="highlight"><pre><code>
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   ...                  # Etc…
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– themes/
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   ...                  # Etc…
|
|– utils/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– main.scss             # primary Sass file
</code></pre></div>






## Base folder

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find the reset (or `Normalize.css` or whatever), probably some stuff dealing with typography, and, depending on the project, maybe some other files.

* `_reset.scss` or `_normalize.scss`
* `_typography.scss`






## Layout folder

The `layout/` folder contains everything that takes part in layouting the site or application. Could it be the stylesheet for the main parts of the site (header, footer, navigation, sidebar...), the grid system or even the CSS styles for all the forms.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>The <code>layout/</code> folder might also be called <code>partials/</code>, depending on what you prefer.</p>
</div>






## Components folder

For smaller components, there is the `components/` folder. While `layout/` is *macro* (defining the global wireframe), `components/` is more *micro*. It can contain all kind of specific modules like a slider, a loader, a widget, or anything along those lines. There are usually a lot of files in `components/` since the whole site/application should be mostly composed of tiny modules.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>The <code>components/</code> folder might also be called <code>modules/</code>, depending on what you prefer.</p>
</div>






## Pages folder

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Depending on your deployment process, those files could be called on their own to avoid merging them with the others in the resulting stylesheet. It is really up to you.</p>
</div>






## Themes folder

On large sites and applications, it is not unusual to have different themes. There are certainly different ways of dealing with themes but I personally like having them all in a `themes/` folder.

* `_theme.scss`
* `_admin.scss`

Note that this is very project specific and is likely to be non-existent on many projects.






## Utils folder

The `utils/` folder gathers all Sass tools and helpers used across the project. Every global variables, functions, mixins and placeholders should be put in there.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. This is nothing but Sass helpers.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequently named `_helpers.scss`)

<div class="note">
  <p>The <code>utils/</code> folder might also be called <code>helpers/</code>, <code>sass-helpers/</code> or <code>sass-utils/</code>, depending on what you prefer.</p>
</div>






## Vendors folder

And last but not least, most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to tell “Hey, this is not from me, not my code, not my responsibility”.

* `bootstrap.scss`
* `jquery-ui.scss`
* `select2.scss`

If you have to override a section of any vendor, I recommand you have a 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite. For instance, `vendors-extensions/_boostrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

## Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Files should be imported according to the folder they live in, one after the other in the following order:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

No new line between two imports of a same folder, a new line after the last import of a folder. File extensions and leading underscores for partials should be omitted.

{% highlight scss %}
@import "vendors/bootstrap";
@import "vendors/jquery-ui";

@import "utils/variables";
@import "utils/functions";
@import "utils/mixins";
@import "utils/placeholders";

@import "base/reset";
@import "base/typography";

@import "layout/navigation";
@import "layout/grid";
@import "layout/header";
@import "layout/footer";
@import "layout/sidebar";
@import "layout/forms";

@import "components/buttons";
@import "components/carousel";
@import "components/cover";
@import "components/dropdown";

@import "pages/home";
@import "pages/contact";

@import "themes/theme";
@import "themes/admin";
{% endhighlight %}

### Further reading

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [FR] [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)











# Variables

Variables are the essence of any programming language. They allow us to reuse values without having to copy them over and over again. Most importantly, they make updating a value very easy. No more find and replace or manual crawling.

However CSS is nothing but a huge basket containing all our eggs. Unlike many languages, there are no real scopes in CSS. Because of this, we have to pay real attention when adding variables at the risk of witnessing conflicts.

My advice would be to only create variables when it makes sense to do so. Don't instanciate new variables for the heck of it, it won't help. A new variable should be created only when all of the following criterias are met:

* the value is repeated at least twice;
* the value is likely to be updated at least once;
* all occurrences of the values are tied to the variable.

Basically, that means it has no point declaring a variable that will never be updated or that is only being used at a single place.






## `!default` flag

When building a library, a framework, a grid system or any piece of Sass that is intended to be distributed and used by external developers, all configuration variables should be defined with the `!default` flag so they can be overwritten.

{% highlight scss %}
$baseline: 1em !default;
{% endhighlight %}

Thanks to this, a developer can define his own `$baseline` variable *before* importing your library without seeing his value redefined.

{% highlight scss %}
// Developer's own variable
$baseline: 2em;

// Your library declaring `$baseline`
@import "your-library";

// $baseline == 2em;
{% endhighlight %}






## `!global` flag

On the opposite, if your Sass code is not intended to be distributed and is likely to be restricted to a single project, global variables should be declared using the `!global` flag.

{% highlight scss %}
$baseline: 1em !global;
{% endhighlight %}

<div class="note">
  <p>The <code>!global</code> flag does nothing in this case but helps understand this is a global variable that is intended to be used all over the code base.</p>
</div>






## Multiple variables or maps

There are advantages of using maps rather than multiple distinct variables. The main one being the ability to loop over a map, which is not possible with distinct variables.

Another pro of using a map is the ability to create a little getter function to provide a friendlier API. For instance, consider the following Sass code:

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
  'below': -1
);

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer's name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
{% endhighlight %}






# Extend

The `@extend` directive has to be one of the features that made Sass that popular a couple of years ago. It has been claimed to be the holy grail of modular CSS many times now, and frankly I still cannot see why.

While this feature might help in some circumstancies, it still presents a lot of drawbacks, possibly introducing more issues than it fixes.

The main problem with `@extend` is that it is completely invisible. When extending a selector, you have absolutely no way to know what is going to answer to those questions without having an in-depth knowledge of the whole code base:

* where is my current selector going to be appended?
* am I likely to be causing undesireed side-effects?
* how large is the CSS generated by this single extend?

For what you know, the result could range from doing nothing to causing disastrous side-effects. And this is a problem. A CSS project is no place for randomness.

Aside of the fact that this feature does not make your stylesheet *obvious*, which should be a priority at all time, it also presents some issues when used inside a media block.

As you may know, Sass is unable to extend an outer selector from within a media query. When doing so, the compiler simple crashes, telling you that you cannot do such a thing. Not great. Especially since media queries is almost all we do know.

{% highlight scss %}
.foo {
  content: "foo";
}

@media print {
  .bar {
    // This doesn't work. Worse: it crashes.
    @extend .foo;
  }
}
{% endhighlight %}

> You may not @extend an outer selector from within @media.<br>
> You may only @extend selectors within the same directive.

Last but not least, `@extend` is very unflexible compared to a mixin. There is no way to catch errors, add parameters or include some extra logic. For little to no benefit.

To sum up, **the `@extend` directive is prohibited.**


### Further reading

* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)

# Mixins

Mixins are one of the most used features from the whole Sass language. They are the key to re-usability and DRY components. And for good reason: mixins allow authors to define styles that cazn be re-used throughout the stylesheet without needing to resort to non-semantic classes such as `.float-left`.

They can contain full CSS rules and pretty much everything that is allowed anywhere in a Sass document. They can even take arguments in just as functions. Needless to say possibilities are endless.

Although I feel like I must warn you against abusing mixins' power. Again, the keyword here is *simplicity*. It might be tempting to build extremely powerful mixins with massive logic. It's called overengineering and most developers suffer from it. Do not overthink your code, and above all keep it simple. If a mixin ends up being longer than 20 lines or so, then it should be either splitted into smaller chunks or completely revisited.

That being said, mixins are extremely useful and you should be using some. The rule of thumb is if you happen to spot a group of CSS properties that always appear together for a reason (i.e. not a coincidence), you can put them in a mixin instead. The [micro-clearfix hack from Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) deserves to be put in a (argumentless) mixin for instance.

{% highlight scss %}
/// Helper to clear inner floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix Hack
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
{% endhighlight %}

A mixin you should probably use at all time on any Sass project, no matter how you've written it, is a breakpoint manager. Now that Responsive Web Design has become a thing™, sites and applications have to support a whole range of devices and screen sizes. Thankfully, we have Media Queries for this.

However, repeating media queries over and over again is far from convenient, not only because the syntax is annoying but essentially because it hurts maintainability. Then, perfect use case for a mixin.

{% highlight scss %}
/// Map of breakpoints for responsive design.
/// @access private
/// @see {mixin} respond-to
/// @type Map
$breakpoints: (
  "small":  (max-width: 800px),
  "medium": (min-width: 801px)
) !global;

/// Responsive manager.
/// @access public
/// @param {String} $breakpoint - Breakpoint
/// @requires $breakpoints
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media #{inspect(map-get($breakpoints, $breakpoint))} {
      @content;
    }
  }

  @else {
    @error "No value found for `#{$breakpoint}`. "
         + "Please make sure it is defined in `$breakpoints` map.";
  }
}
{% endhighlight %}

Usage is both simple and obvious.

{% highlight scss %}
.element {
  color: red;

  @include respond-to("small") {
    color: blue;
  }
}
{% endhighlight %}

# Warnings and Errors

If there is a feature that is often overlooked by Sass developers, it is the ability to dynamically output warnings and errors. Indeed, Sass comes with three custom directives to print content in the standard output system (CLI, compiling app...):

* `@debug`;
* `@warn`;
* `@error`.

Let's put `@debug` aside since it is clearly intended to debug SassScript, which is not our point here. We are then left with `@warn` and `@error` which are noticeably identical except that one does stop the compiler while the other does not. I'll let you guess which does what.

Now, there is a lot of room in a Sass project for warnings and errors. Basically any mixin or function expecting a specific type or argument could throw an error if something went wrong or display a warning when doing an assumption.

## Warnings

Take this function from [Sass-MQ](https://github.com/sass-mq/sass-mq) attempting to convert a `px` value to `em`, for instance:

{% highlight scss %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size) {
    @if unitless($px) {
        @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels.";
        @return mq-px2em($px + 0px);
    } @else if unit($px) == em {
        @return $px;
    }

    @return ($px / $base-font-size) * 1em;
}
{% endhighlight %}

If the value happens to be unitless, the function assumes the value is meant to be expressed in pixels. At this point, an assumption may be risky so the user should be warned that the software did something that could be considered unexpected.

## Errors

Errors, unlike warnings, prevent the compiler from going any further. Basically, they stop the compilation and display a message in the output stream as well as the stack trace, which is handy for debugging. Because of this, errors should be thrown when there is no way for the program to keep running. When possible, try working around the issue and display a warning instead.

As an example, let's say you build a getter function to access values from a specific map. You could throw an error if the requested key does not exist in the map.

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
  'below': -1
);

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer's name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @if not map-has-key($z-index, $layer) {
    @error "There is no layer named `#{$layer}` in $z-indexes."
         + "Layer should be one of #{map-keys($z-indexes)}.";
  }

  @return map-get($z-indexes, $layer);
}
{% endhighlight %}


### Further reading

* [An Introduction To Error Handling](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger][sassylogger]

[sass]: http://sass-lang.com
[sass_documentation]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html
[libsass]: https://github.com/sass/libsass
[node_sass]: https://github.com/sass/node-sass
[repository]: https://github.com/HugoGiraudel/sass-guidelines
[author_website]: http://hugogiraudel.com
[author_twitter]: https://twitter.com/hugogiraudel
[sassdoc]: http://sassdoc.com
[sass_compatibility]: http://sass-compatibility.github.io
[sassyjson]: https://github.com/HugoGiraudel/SassyJSON
[sassylists]: https://github.com/at-import/SassyLists
[sassysort]: https://github.com/HugoGiraudel/SassySort
[sassycast]: https://github.com/HugoGiraudel/SassyCast
[sassymatrix]: https://github.com/HugoGiraudel/SassyMatrix
[sassybitwise]: https://github.com/HugoGiraudel/SassyBitwise
[sassyiteratorsgenerators]: https://github.com/HugoGiraudel/SassyIteratorsGenerators
[sassylogger]: https://github.com/HugoGiraudel/SassyLogger
[Sassystrings]: https://github.com/HugoGiraudel/SassyStrings
[Sassygradients]: https://github.com/HugoGiraudel/SassyGradients
[bootstrap]: http://getbootstrap.com/
[less]: http://lesscss.org/
[harry_roberts]: http://csswizardry.com
[css_guidelines]: http://cssguidelin.es/
[kiss_principle]: http://en.wikipedia.org/wiki/KISS_principle
[dry_principle]: http://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[postcss]: https://github.com/postcss/postcss
[cssnext]: http://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[stylus]: http://learnboost.github.io/stylus/
