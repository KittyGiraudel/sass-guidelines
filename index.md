---
layout: default
---

# About the author

My name is [Hugo Giraudel](http://hugogiraudel.com), I am a front-end developer from France about to move to Berlin, Germany. I have been writing Sass for over two years now and am the author of Sass related projects such as [SassDoc](http://sassdoc.com) and [Sass-Compatibility](http://sass-compatibility.github.io).

I have also written a couple of Sass libraries, mostly for the heck of it: [SassyJSON](https://github.com/HugoGiraudel/SassyJSON), [SassyLists](http://sassylists.com), [SassySort](https://github.com/HugoGiraudel/SassySort), [SassyCast](https://github.com/HugoGiraudel/SassyCast), [SassyMatrix](https://github.com/HugoGiraudel/SassyMatrix), [SassyBitwise](https://github.com/HugoGiraudel/SassyBitwise), [SassyIteratorsGenerators](https://github.com/HugoGiraudel/SassyIteratorsGenerators), [SassyLogger](https://github.com/HugoGiraudel/SassyLogger), [SassyStrings](https://github.com/HugoGiraudel/SassyStrings) and [SassyGradients](https://github.com/HugoGiraudel/SassyGradients).

<div class="button-wrapper">
  <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="button">Catch me on Twitter</a>
</div>











# Contributing

Sass Guidelines is a free project that I maintain in my spare time. Needless to say, it is quite a large amount of work to keep everything up-to-date, documented and relevant. Obviously knowing that you liked this styleguide is already much appreciated!

Now if you feel like contributing, please know that tweeting about it, spreading the word, or fixing a tiny typo by opening an issue or a pull-request on the [GitHub repository](https://github.com/HugoGiraudel/sass-guidelines) would be great!

Last but not least before we start: if you enjoyed this document, or if it is useful for you or your team, please consider supporting it!

<div class="button-wrapper">
  <a href="https://gum.co/sass-guildelines" target="_blank" class="button">Support Sass Guidelines</a>
  <a href="https://twitter.com/share?text=Sass%20Guidelines%2C%20a%20styleguide%20for%20writing%20sane%2C%20maintainable%20and%20scalable%20Sass%20by%20%40HugoGiraudel%20%E2%80%94%20&url=http://sass-guidelin.es" target="_blank" class="button">Spread the word</a>
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
    * [Zeros](#zeros)
    * [Units](#units)
    * [Calculations](#calculations)
    * [Magic numbers](#magic-numbers)
  * [Colors](#colors)
    * [Color formats](#color-formats)
    * [Colors and variables](#color-format)
    * [Lightening and Darkening Colors](#lightening-and-darkening-colors)
  * [Lists](#lists)
  * [Maps](#maps)
    * [Debugging A Sass Map](#debugging-a-sass-map)
  * [CSS Ruleset](#css-ruleset)
  * [Selector Nesting](#selector-nesting)
* [Naming Conventions](#naming-conventions)
* [Commenting](#commenting)
  * [Writing Comments](#writing-comments)
  * [Documentation](#documentation)
* [Architecture](#architecture)
  * [Components](#components)
  * [The 7-1 pattern](#the-7-1-pattern)
    * [Base Folder](#base-folder)
    * [Components Folder](#components-folder)
    * [Layout Folder](#layout-folder)
    * [Pages Folder](#pages-folder)
    * [Themes Folder](#themes-folder)
    * [Utils Folder](#utils-folder)
    * [Vendors Folder](#vendors-folder)
    * [Main file](#main-file)
  * [Shame file](#shame-file)
* [Variables](#variables)
  * [Scoping](#scoping)
  * [!default Flag](#default-flag)
  * [!global Flag](#global-flag)
  * [Multiple Variables Or Map](#multiple-variables-or-maps)
* [Extend](#extend)
* [Mixins](#mixins)
  * [Basics](#basics)
  * [Arguments list](#arguments-list)
  * [Mixins and Vendor Prefixes](#mixins-and-vendor-prefixes)
* [Loops](#loops)
  * [Each](#each)
  * [For](#for)
  * [While](#while)
* [Warnings and errors](#warnings-and-errors)
  * [Warnings](#warnings)
  * [Errors](#errors)
* [Tools](#tools)
  * [Compass](#compass)
  * [Grid Systems](#grid-systems)
  * [SCSS-lint](#scss-lint)
* [Too Long; Didn't Read](#too-long-didnt-read)











# About Sass

This is how [Sass](http://sass-lang.com) describes itself in its [documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass is an extension of CSS that adds power and elegance to the basic language.

Sass' ultimate objective is to fix CSS flaws. CSS, as we all know, is not the best language in the world <sup>[citation needed]</sup>. While very simple to learn, it can quickly get quite messy, especially on large projects.

This is where Sass comes in, as a meta-language, to improve CSS syntax in order to provide extra features and handy tools. Meanwhile, Sass wants to be conservative regarding CSS language.

The point is not to turn CSS into a fully-featured programming language; Sass only wants to help where CSS fails. Because of this, getting started with Sass is no harder than learning CSS: it simply adds a couple of extra features on top of it.

That being said, there are many ways to use these features. Some good, some bad, some unusual. These guidelines are meant to give you a consistent and documented approach to writing Sass code.

### Further reading

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)






## Ruby Sass or LibSass

[Sass' first commit](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) goes back as far as late 2006, over 8 years ago. Needless to say it has come a long way since then. Initially developed in Ruby, varied ports popped up here and there. The most successful one, [LibSass](https://github.com/sass/libsass) (written in C) is now close to being fully compatible with the original Ruby version.

In 2014, [Ruby Sass and LibSass teams decided to wait for both versions to sync up before moving forward](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Since then, LibSass has been actively releasing versions to have feature-parity with its older brother.

The last remaining inconsistencies are gathered and listed by myself under the [Sass-Compatibility](http://sass-compatibility.github.io) project. If you are aware of an incompatibility between the two versions that is not listed, please be kind enough to open an issue.

Now when it comes to choosing your compiler, it does not really matter. Actually, it is really up to your project. If it is a Ruby on Rails project, you better use Ruby Sass, which is perfectly suited for such a case.

On the other hand, LibSass is mostly dedicated to being wrapped. So if you want to use anything but Ruby, for instance NodeJS, [node-sass](https://github.com/sass/node-sass) is all chosen. Also the major benefit of using LibSass is its speed: it is blazingly fast compared to Ruby Sass.



### Further reading

* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)






## Sass or SCSS

There is quite a lot of confusion regarding the semantic behind the *Sass* appellation. And for good reason: Sass means both the preprocessor and its own syntax. Not very convenient, is it?

You see, Sass initially described a syntax very close to Ruby. Actually, the initial idea was to write CSS in Ruby. Soon enough, Sass maintainers decided to close the gap between Sass and CSS by providing a CSS-friendly syntax called *SCSS* for *Sassy CSS*. The motto is: if it's valid CSS, it's valid SCSS.

Since then, Sass (the preprocessor) has been providing two different syntaxes: Sass (not uppercase, [please](http://sassnotsass.com)), also known as *the indented syntax* and SCSS. Which one to use is pretty much up to you since both are strictly equivalent in features. It is only a matter of aesthetics at this point.

Sass Ruby-like syntax relies on indentation to get rid of braces, semi-colons and other punctuation symbols, leading to a leaner and shorter syntax. Meanwhile, SCSS is easier to use since it's mostly some tiny extra bits on top of CSS.

I, myself, prefer SCSS over Sass because it is closer to CSS and friendlier to most developers. Because of that, I will use SCSS rather than Sass all along these guidelines.



### Further reading

* [What's the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)






## Other preprocessors

Sass is a preprocessor among other things. Its most serious competitor has to be [LESS](http://lesscss.org/), a NodeJS based preprocessor that has gotten quite popular thanks to the famous CSS framework [Bootstrap](http://getbootstrap.com/) using it. There is also [Stylus](http://learnboost.github.io/stylus/) which is kind of the nerdy unrestricted version of LESS where you can do pretty much whatever you want since it almost turns CSS into a programming language.

*Why choose Sass over LESS or another preprocessor?* is still a valid question as of today. Not so long ago, we used to recommend Sass for Ruby-based projects because it was first made in Ruby and played well with Ruby on Rails. Now that LibSass has caught up (or so) on original Sass, this is no longer relevant advice.

What I do like with Sass is its conservative aspect regarding CSS. Sass is not a preprocessor aiming at pleasing nerdy wannabe programmers like me by adding extraordinary features on top of a language that is not intended to support any logical aspects. It is a software aiming at solving actual issues; helping write CSS where CSS shows some weakness.

Preprocessors aside, we should also mention postprocessors, which have known quite a good exposure over the last few months especially thanks to [postCSS](https://github.com/postcss/postcss) and [CSSNext](https://github.com/cssnext/cssnext). Postprocessors are pretty much equivalent to preprocessors except they do not provide anything else than upcoming CSS syntax.

You can think of postprocessors as a polyfill for unsupported CSS features. For instance, you would write variables as they are described in the [CSS specifications](http://dev.w3.org/csswg/css-variables/), then compile your stylesheets with a postprocessor only to find every variable occurrence gets replaced with its value, as Sass would do.

The idea behind postprocessors is that once browsers support new features (e.g. CSS variables), the postprocessor does not compile them anymore and lets browsers take over.

While providing tomorrow's syntax today is something of a noble idea, I have to say I still prefer using Sass for most tasks. Yet, there are some occasions where I believe postprocessors are more suited than Sass and the like, for instance CSS prefixing. But we'll get back to this.



### Further reading

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [CSSNext](https://github.com/cssnext/cssnext)
* [postCSS](https://github.com/postcss/postcss)











# Introduction





## Why a styleguide

A styleguide is not just a pleasing document to read, picturing an ideal state for your code. It is a key document in a project's life, describing how and why code should be written. It may look overkill for small projects, yet it helps a lot in keeping the codebase clean, scalable and easily maintainable.

Needless to say, the more actors involved on a project, the more code guidelines are needed. Along the same lines, the bigger the project, the more a styleguide is a must.

[Harry Roberts](http://csswizardry.com) states it very well in [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>A coding styleguide (note, not a visual styleguide) is a valuable tool for teams who:</p>
  <ul>
    <li>build and maintain products for a reasonable length of time;</li>
    <li>have developers of differing abilities and specialties;</li>
    <li>have a number of different developers working on a product at any given time;</li>
    <li>on-board new staff regularly;</li>
    <li>have a number of codebases that developers dip in and out of.</li>
  </ul>
</blockquote>






## Disclaimer

First things first: **this is not a CSS styleguide**. This document will not discuss naming conventions for CSS classes, modular patterns and the question of IDs in the CSS world. These guidelines only aim at dealing with Sass specific content.

Also, this styleguide is my own and somehow very opinionated. Think of it as a collection of methodologies and advice that I have polished and given over the years. It also gives me the opportunity to link to a handful of insightful resources, so be sure to check the *further readings*.

Obviously, this is certainly not the only way of doing things, and it may or may not suit your project. Feel free to pick from it and adapt it to your needs. As we say, *your mileage may vary*.






## Key principles

At the end of the day, if there is one thing I would like you to get from this whole styleguide, it is that **Sass should be kept as simple as it can be**.

Thanks to my silly experiments like [bitwise operators](https://github.com/HugoGiraudel/SassyBitwise), [iterators and generators](https://github.com/HugoGiraudel/SassyIteratorsGenerators) and [a JSON parser](https://github.com/HugoGiraudel/SassyJSON) in Sass, we are all well aware of what one can do with this preprocessor.

Meanwhile, CSS is a simple language. Sass, being intended to write CSS, should not get much more complex than regular CSS. The [KISS principle](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid) is key here and may even take over the [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself) in some circumstances.

Sometimes, it's better repeating a bit to keep the code maintainable rather than building a top-heavy, unwieldy, unnecessarily complicated system that is completely unmaintainable because it's too complex.

Also, and let me quote [Harry Roberts](https://csswizardry.com) once again, **pragmatism trumps perfection**. At some point, you will probably find yourself going against the rules described here. If it makes sense, if it feels right, do it. Code is just a way, not an end.



### Further reading

* [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
* [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)











# Syntax & formatting

If you ask me, the very first thing a styleguide should do is describe the usual guidelines to write code.

When several actors are involved in writing CSS on the same project, it is only a matter of time before one of them starts doing things his own way. Code guidelines are not only meant to prevent this, but also to help in the reading and maintenance of code by making it look consistent.

Roughly, we want (shamelessly inspired by [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* two (2) spaces indents, no tabs;
* ideally, 80-characters wide lines;
* properly written multi-line CSS rules;
* meaningful use of whitespaces.

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

We will not tackle the question of file organization in this section. It is the object of [another chapter](#architecture).






## Strings

CSS does not require strings to be quoted, not even those containing spaces. Take font-family names for instance, it doesn't matter whether you wrap them in quotes for the CSS parser.

Because of this, Sass *also* does not require strings to be quoted. Even better (and *luckily*, you'll conceed), a quoted string is strictly equivalent to its unquoted twin (e.g. `"abc"` is strictly equal to `abc`).

That being said, languages that do not require strings to be quoted are definitely a minority and so, **strings should always be wrapped with double quotes** in Sass. Besides consistency with other languages, including CSS' cousin JavaScript, there are several reasons for this choice:

* most syntax highlighters will choke on unquoted strings;
* it helps general readability;
* there is no valid reason not to quote strings.

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

URLs should be quoted as well, for the same reasons as above:

{% highlight scss %}
// Yep
.element {
  background-image: url("/images/kittens.jpg");
}

// Nope
.element {
  background-image: url(/images/kittens.jpg);
}
{% endhighlight %}






## Numbers

In Sass, number is a data type englobing everything from unitless numbers to lengths, durations, frequencies, angles and so on. This is intended in order to be able to run calculations on such measures.



### Zeros

Numbers should display leading zeros before a decimal value less than one. Never display trailing zeros.

{% highlight scss %}
// Yep
.element {
  padding: 2em;
  opacity: 0.5;
}

// Nope
.element {
  padding: 2.0em;
  opacity: .5;
}
{% endhighlight %}



### Units

When dealing with lengths, a `0` value should never ever have a unit.

{% highlight scss %}
// Yep
$length: 0;

// Nope
$length: 0em;
{% endhighlight %}

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

**Top-level numeric calculations should always be wrapped in parentheses**. Not only does this requirement dramatically improve readability, it also prevents some edge cases by forcing Sass to evaluate the contents of the parentheses.

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



### Magic numbers

Magic numbers is an [old school programming](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) term for "unnamed numerical constant". Basically, it's just a random number that happens to *just work*™ yet is not tied to any logical explanation.

Needless to say **magic numbers are a plague and should be avoided at all costs**. When you cannot manage to find a reasonable explanation for a number to work, add an extensive comment explaining how you got there and why you think it works. Admitting you don't know why something works is still more helpful to the next developer than having to figure out what's going on.

{% highlight scss %}
/**
 * 1. Magic number. This value is the lowest I could find to align the top of
 * `.element` with its parent. Ideally, we should fix it properly.
 */
.element {
  top: .327em; /* 1 */
}
{% endhighlight %}



### Further reading

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](http://css-tricks.com/magic-numbers-in-css/)






## Colors

Colors occupy an important place in the CSS language. Naturally, Sass ends up being a valuable ally when it comes to manipulating colors, mostly by providing a handful of [powerful functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).



### Color formats

In order to make colors as simple as they can be, my advice would be to respect the following order of preference for color formats:

1. [CSS color keywords](http://www.w3.org/TR/css3-color/#svg-color);
1. [HSL notation](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB notation](http://en.wikipedia.org/wiki/RGB_color_model);
1. Hexadecimal notation. Preferably lowercase and shortened when possible.

For starters, keywords often speak for themselves. The HSL representation is not only the easiest one for the human brain to comprehend<sup>[citation needed]</sup>, it also makes it easy for stylesheet authors to tweak the color by adjusting the hue, saturation and lightness individually. RGB still has the benefit of showing right away if the color is more of a blue, a green or a red but it does not make it easy to build a color from the three parts. Last, hexadecimal is close to indecipherable for the human mind.

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

When using HSL or RGB notation, always add a single space after commas (`,`) and no space between parentheses (`(`, `)`) and content.

{% highlight scss %}
// Yep
.element {
  color: rgba(0, 0, 0, .1);
  background: hsl(300, 100%, 100%);
}

// Nope
.element {
  color: rgba(0,0,0,.1);
  background: hsl( 300, 100%, 100% );
}
{% endhighlight %}



### Colors and variables

When using a color more than once, store it in a variable with a meaningful name representing the color.

{% highlight scss %}
$sass-pink: #c69;
{% endhighlight %}

At this point, you are free to use this variable wherever you want. However, if your usage is strongly tied to a theme, I would advise against using the variable as is. Instead, store it in another variable with a name explaining how it should be used.

{% highlight scss %}
$main-theme-color: $sass-pink;
{% endhighlight %}

Doing this would prevent a theme change leading to something like `$sass-pink: blue`.



### Lightening and darkening colors

Both [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) and [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) functions manipulate the lightness of a color in the HSL space by adding or substracting lightness to it. Basically, they are nothing but aliases for the `$lightness` parameter of the [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) function.

The thing is, those functions often do not provide the expected result. On the other hand, the [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) function is a nice way to lighten or darken a color by mixing it with either `white` or `black`.

The benefit of using `mix` rather than one of the two aforementioned functions is that it will progressively go to black (or white) as you decrease the proportion of the color, whereas `darken` and `lighten` will quickly blow out a color all the way to black or white.

<p data-height="400" data-theme-id="0" data-slug-hash="wBopOd" data-default-tab="result" data-user="HugoGiraudel" class='codepen'>See the Pen <a href='http://codepen.io/HugoGiraudel/pen/wBopOd/'>Dadgumit, Blowouts</a> by Hugo Giraudel (<a href='http://codepen.io/HugoGiraudel'>@HugoGiraudel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

If you don't want to write the `mix` function every time, you can create two easy-to-use functions `tint` and `shade` (which are also a part of [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) to do the same thing:

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
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)






## Lists

Lists are the Sass equivalent of arrays. It is a flat data structure (unlike [maps](#maps)) intended to store values of any type (including lists, leading to nested lists).

Unless you have a good reason to do so (using a Sass list for a CSS list of values for instance), always **use a comma as a delimiter**. While making the list slightly longer, it helps in distinguishing values from each other and in staying consistent with most languages.

However, **do not wrap a list in parentheses** unless it is empty. Also, **do not add a trailing comma**. It is ugly and it does not help.

{% highlight scss %}
// Yep
$font-stack: "Helvetica", "Arial", sans-serif;

// Nope
$font-stack: "Helvetica" "Arial" sans-serif;

// Nope
$font-stack: ("Helvetica", "Arial", sans-serif);

// Nope
$font-stack: ("Helvetica", "Arial", sans-serif,);
{% endhighlight %}

When adding new items to a list, always use the provided API. Do not attempt to add new items manually.

{% highlight scss %}
$shadows: 0 42px 13.37px hotpink;

// Yep
$shadows: append($shadows, $shadow, comma);

// Nope
$shadows: $shadows, $shadow;
{% endhighlight %}



### Further reading

* [SassyLists](http://sassylists.com)






## Maps

Since Sass 3.3, stylesheets authors can now define maps which is the Sass term for associative arrays, hashes or even JavaScript objects. A map is a data structure mapping keys (that can be any data type, including maps although I wouldn't recommend it) to values of any type.

Maps should be written as follows:

* space after the colon (`:`);
* opening brace (`(`) on the same line as the colon (`:`);
* **quoted keys** if they are strings (which represents 99% of the cases);
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



### Debugging a Sass map

If you ever find yourself lost, wondering what kind of crazy magic is happening in a Sass map, worry not because there is still a way to be saved.

{% highlight scss %}
/// Prints a map as a CSS rule
/// @access private
/// @param {Map} $map
@mixin debug-map($map) {
  @at-root {
    @debug-map {
      __toString__: inspect($map);
      __length__: length($map);
      __depth__: if(function-exists("map-depth"), map-depth($map), null);
      __keys__: map-keys($map);
      __properties__ {
        @each $key, $value in $map {
          #{"(" + type-of($value) + ") " + $key}: inspect($value);
        }
      }
    }
  }
}
{% endhighlight %}

If you are interested in knowing the depth of the map, add the following function as well. The mixin will display it automatically.

{% highlight scss %}
/// Compute the maximum depth of a map
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map) {
  $level: 1;

  @each $key, $value in $map {
    @if type-of($value) == "map" {
      $level: max(map-depth($value) + 1, $level);
    }
  }

  @return $level;
}
{% endhighlight %}



### Further reading

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)






## CSS Ruleset

At this point, this is mostly revising what everybody knows, but here is how a CSS ruleset should be written (at least, according to most guidelines, including [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset)):

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

* local variables being declared before any declarations, then spaced from declarations by a new line;
* mixin calls with no `@content` coming before any declaration;
* nested selectors always coming after a new line;
* mixin calls with `@content` coming after any nested selector;
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

One particular feature Sass provides that is being overly misused by many developers is *selector nesting*. Selector nesting offers a way for stylesheet authors to compute long selectors by nesting shorter selectors within each other. For instance, the following Sass nesting:

{% highlight scss %}
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}
{% endhighlight %}

... will generate this CSS:


{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}

Along the same lines, since Sass 3.3 it is possible to use the current selector reference (`&`) to generate advanced selectors. For instance:

{% highlight scss %}
.foo {
  &-bar {
    color: red;
  }
}
{% endhighlight %}

... will generate this CSS:


{% highlight css %}
.foo-bar {
  color: red;
}
{% endhighlight %}

This method is often used along with [BEM naming conventions](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to generate `.block__element` and `.block--modifier` selectors based on the original selector (i.e. `.block` in this case).

<div class="note">
  <p>While it might be anecdotal, generating new selectors from the current selector reference (<code>&</code>) makes those selectors unsearchable in the codebase since they do not exist per se.</p>
</div>

The problem with selector nesting is it ultimately makes code more difficult to read. Because one has to mentally compute the resulting selector out of the indentation levels, it is not always quite obvious what the CSS will end up being.

This statement becomes truer as selectors get longer and references to the current selector (`&`) more frequent. At some point, the risk of losing track and not being able to understand what's going on anymore is so high that it is not worth it.

To prevent such a situation, we **avoid selector nesting except for pseudo-classes and pseudo-elements**. These are the only cases where nesting is allowed, and even recommended.

{% highlight scss %}
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: "pseudo-element";
  }
}
{% endhighlight %}

Using selector nesting for pseudo-classes and pseudo-elements not only makes sense (because it deals with closely related selectors), it also helps keep everything about a component at the same place.



### Further reading

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)











# Naming conventions

In this section, we will not deal with the best CSS naming conventions for maintainability and scale; not only is that up to you, it's also out of the scope of a Sass styleguide. I suggest those recommended by [CSS Guidelines](http://cssguidelin.es/#naming-conventions).

There are a few things you can name in Sass, and it is important to name them well so the whole code base looks both consistent and easy to read:

* variables;
* functions;
* mixins.

Sass placeholders are deliberately omitted from this list since they can be considered as regular CSS selectors, thus following the same naming pattern as classes.

Regarding variables, functions and mixins, we stick to something very *CSS-y*: **hyphen-delimited**, no camel-case, and above all meaningful.

{% highlight scss %}
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) { /* ... */ }

@function opposite-direction($direction) { /* ... */ }
{% endhighlight %}



### Further reading

* [CSS Guidelines' Naming Conventions](http://cssguidelin.es/#naming-conventions)











# Commenting

CSS is a tricky language, full of hacks and oddities. Because of this, it should be heavily commented, especially if you or someone else intend to read and update the code 6 months or 1 year from now. Don't let you or anybody else be in the position of *I-didn't-write-this-oh-my-god-why*.

As simple as CSS can get, there is still a lot of room for comments. These could be explaining:

* the structure and/or role of a file;
* the goal of a ruleset;
* the idea behind a magic number;
* the reason for a CSS declaration;
* the order of CSS declarations;
* the thought process behind a way of doing things.

And I probably forgot a lot of other various reasons as well. Commenting takes very little time when done seamlessly along with the code so do it at the right time. Coming back at a piece of code to comment it is not only completely unrealistic but also extremely annoying.






## Writing comments

Ideally, *any* CSS ruleset should be preceded by a C-style comment explaining the point of the CSS block. This comment also hosts numbered explanations regarding specific parts of the ruleset. For instance:

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

Basically everything that is not obvious at first glance should be commented. There is no such thing as too much documentation. Remember that you cannot *comment too much*, so get on fire and write comments for everything that is worth it.

When commenting a Sass-specific section, use Sass inline comments instead of a C-style block. This makes the comment invisible in the output, even in expanded mode during development.

{% highlight scss %}
// Add current module to the list of imported modules.
// `!global` flag is required so it actually updates the global variable.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}



### Further reading

* [CSS Guidelines' Commenting section](http://cssguidelin.es/#commenting)






## Documentation

Every variable, function, mixin and placeholder that is intended to be reused all over the codebase should be documented as part of the global API using [SassDoc](http://sassdoc.com).

SassDoc provides two different syntaxes for comments: either C-style or inline. For instance, both of the following snippets are valid SassDoc comments:

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

There is no benefit in using one over the other, so pick the one you feel the most confident with.

SassDoc has two major roles:

* forcing standardized comments using an annotation-based system for everything that is part of a public or private API;
* being able to generate an HTML version of the API documentation by using any of the SassDoc endpoints (CLI tool, Grunt, Gulp, Broccoli, Node...).

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



### Further reading

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
* [New Features and New Look for SassDoc](http://webdesign.tutsplus.com/articles/new-features-and-a-new-look-for-sassdoc--cms-21914)











# Architecture

Architecting a CSS project is probably one of the most difficult things you will have to do in a project's life. Keeping the architecture consistent and meaningful is even harder.

Fortunately, one of the main benefits of using a CSS preprocessor is having the ability to split the codebase over several files without impacting performance (like the `@import` CSS directive would do). Thanks to Sass' overload of the `@import` directive, it is perfectly safe (and actually recommended) to use as many files as necessary in development, all compiled into a single stylesheet when going to production.

On top of that, I cannot stress enough the need for folders, even on small scale projects. At home, you don’t drop every sheet of paper into the same box. You use folders; one for the house/flat, one for the bank, one for bills, and so on. There is no reason to do otherwise when structuring a CSS project. Split the codebase into meaningful separated folders so it is easy to find stuff later when you have to come back to the code.

There are a lot of popular architectures for CSS projects: [OOCSS](http://oocss.org/), [SMACSS](https://smacss.com/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/)-like, [Foundation](http://foundation.zurb.com/)-like... They all have their merits, pros and cons. Nevertheless, none of them suits me correctly. Call me old fashioned, but I find them too complicated for myself. I like to keep things simple, to keep them obvious.






## Components

There is a major difference between making it *work*, and making it *good*. Again, CSS is quite a messy language <sup>[citation needed]</sup>. The less CSS we have, the merrier. We don't want to deal with megabytes of CSS code. To keep stylesheets short and efficient &mdash; and this will not be any surprise to you &mdash; it is usually a good idea to think of an interface as a collection of components.

Components can be anything, as long as they:

* do one thing and one thing only;
* are re-usable and re-used across the project;
* are independent.

For instance, a search form should be treated as a component. It should be reusable, at different positions, on different pages, in various situations. It should not depend on its position in the DOM (footer, sidebar, main content...).

Most of any interface can be thought of as little components and I highly recommend you stick to this paradigm. This will not only shorten the amount of CSS needed for the whole project, but also happens to be much easier to maintain than a chaotic mess where everything is flustered.






## The 7-1 pattern

Back to architecture, shall we? I usually go with what I call the *7-1 pattern*: 7 folders, 1 file. Basically, you have all your partials stuffed into 7 different folders, and a single file at the root level (usually named `main.scss`) which imports them all to be compiled into a CSS stylesheet.

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

<div class="note">
  <p>Files follow the same naming conventions described above: they are hyphen-delimited.</p>
</div>



### Base folder

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet (that I'm used to calling `_base.scss`), defining some standard styles for commonly used HTML elements.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`



### Layout folder

The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar...), the grid system or even CSS styles for all the forms.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>The <code>layout/</code> folder might also be called <code>partials/</code>, depending on what you prefer.</p>
</div>



### Components folder

For smaller components, there is the `components/` folder. While `layout/` is *macro* (defining the global wireframe), `components/` is more focused on widgets. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in `components/` since the whole site/application should be mostly composed of tiny modules.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>The <code>components/</code> folder might also be called <code>modules/</code>, depending on what you prefer.</p>
</div>



### Pages folder

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Depending on your deployment process, these files could be called on their own to avoid merging them with the others in the resulting stylesheet. It is really up to you.</p>
</div>



### Themes folder

On large sites and applications, it is not unusual to have different themes. There are certainly different ways of dealing with themes but I personally like having them all in a `themes/` folder.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>This is very project-specific and is likely to be non-existent on many projects.</p>
</div>



### Utils folder

The `utils/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequently named `_helpers.scss`)

<div class="note">
  <p>The <code>utils/</code> folder might also be called <code>helpers/</code>, <code>sass-helpers/</code> or <code>sass-utils/</code>, depending on what you prefer.</p>
</div>



### Vendors folder

And last but not least, most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to tell “Hey, this is not from me, not my code, not my responsibility”.

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

If you have to override a section of any vendor, I recommend you have an 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite.

For instance, `vendors-extensions/_boostrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap's default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.



### Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Files should be imported according to the folder they live in, one after the other in the following order:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

In order to preserve readability, the main file should respect these guidelines:

* one file per `@import`;
* one `@import` per line;
* no new line between two imports from the same folder;
* a new line after the last import from a folder;
* file extensions and leading underscores omitted.

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

<div class="note">
  <p>In order to not have to import each file manually, there is an extension to Ruby Sass called <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, making it possible to use glob patterns in Sass <code>@import</code> such as <code>@import "components/*"</code>.</p>
  <p>That being said, I would not recommend it because it imports files following the alphabetical order which is usually not what you want, especially when dealing with a source-order dependent language.</p>
</div>



### Further reading

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [FR] [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)






## Shame file

There is an interesting concept that has been made popular by [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) and [Chris Coyier](http://css-tricks.com) that consists of putting all the CSS declarations, hacks and things we are not proud about in a *shame file*. This file, dramatically titled `_shame.scss`, would be imported after any other file, at the very end of the stylesheet.

{% highlight scss %}
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a {
    color: #BADA55 !important;
}
{% endhighlight %}



### Further reading

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)











# Variables

Variables are the essence of any programming language. They allow us to reuse values without having to copy them over and over again. Most importantly, they make updating a value very easy. No more find and replace or manual crawling.

However CSS is nothing but a huge basket containing all our eggs. Unlike many languages, there are no real scopes in CSS. Because of this, we have to pay real attention when adding variables at the risk of witnessing conflicts.

My advice would be to only create variables when it makes sense to do so. Do not initiate new variables for the heck of it, it won't help. A new variable should be created only when all of the following criteria are met:

* the value is repeated at least twice;
* the value is likely to be updated at least once;
* all occurrences of the value are tied to the variable (i.e. not by coincidence).

Basically, there is no point declaring a variable that will never be updated or that is only being used at a single place.






## Scoping

Variable scoping in Sass has changed over the years. Until fairly recently, all variable declarations were global, no matter where. Since version 3.4, Sass now properly tackles the concept of scopes and local variables.

Sass doesn't really have different scopes. Indeed, the docs talk about *global variable shadowing*. When declaring a variable that already exists on the global scope in an inner scope (selector, function, mixin...), the local variable is said to be *shadowing* the global one. Basically, it overrides it just for the local scope.

The following code snippet explains the *variable shadowing* concept.

{% highlight scss %}
// Initialize a global variable at root level.
// In this case, the `!global` flag is optional.
$variable: "initial value" !global;

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding {
  $variable: "mixin value" !global;
}

.local-scope {
  // Create a local variable that shadows the global one.
  $variable: "local value";

  // Include the mixin: it overrides the global variable.
  @include global-variable-overriding;

  // Print the variable's value.
  // It is the **local** one, since it shadows the global one.
  content: $variable;
}

// Print the variable in another selector that does no shadowing.
// It is the **global** one, as expected.
.other-local-scope {
  content: $variable;
}
{% endhighlight %}






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

On the contrary, if your Sass code is not intended to be distributed and is likely to be restricted to a single project, global variables should be declared using the `!global` flag.

{% highlight scss %}
$baseline: 1em !global;
{% endhighlight %}

<div class="note">
  <p>The <code>!global</code> flag does nothing in this case but helps understand this is a global variable that is intended to be used all over the codebase.</p>
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

The `@extend` directive has to be one of the features that made Sass so popular a couple of years ago. It has been claimed to be the holy grail of modular CSS many times now, and frankly I still cannot see why.

While this feature might help in some circumstances, the main problem with `@extend` is that it is completely invisible. When extending a selector, you have absolutely no way to answer these questions without having an in-depth knowledge of the whole codebase:

* where is my current selector going to be appended?
* am I likely to be causing undesired side-effects?
* how large is the CSS generated by this single extend?

For all you know, the result could range from doing nothing to causing disastrous side-effects. And this is a problem. A CSS project is no place for randomness.

Besides the fact that this feature does not make your stylesheet *obvious*, which should be a priority at all times, it also presents some issues when used inside a media block.

As you may know, Sass is unable to extend an outer selector from within a media query. When doing so, the compiler simply crashes, telling you that you cannot do such a thing. Not great. Especially since media queries are almost all we do know.

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

Last but not least, `@extend` is very inflexible compared to a mixin. There is no way to catch errors, add parameters or include some extra logic. For little to no benefit.

To sum up, **the `@extend` directive is prohibited.**



### Further reading

* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)











# Mixins

Mixins are one of the most used features from the whole Sass language. They are the key to re-usability and DRY components. And for good reason: mixins allow authors to define styles that can be re-used throughout the stylesheet without needing to resort to non-semantic classes such as `.float-left`.

They can contain full CSS rules and pretty much everything that is allowed anywhere in a Sass document. They can even take arguments in just as functions. Needless to say, the possibilities are endless.

Though I feel I must warn you against abusing the power of mixins. Again, the keyword here is *simplicity*. It might be tempting to build extremely powerful mixins with massive logic. It's called overengineering and most developers suffer from it. Do not overthink your code, and above all keep it simple. If a mixin ends up being longer than 20 lines or so, then it should be either split into smaller chunks or completely revisited.






## Basics

That being said, mixins are extremely useful and you should be using some. The rule of thumb is that if you happen to spot a group of CSS properties that always appear together for a reason (i.e. not a coincidence), you can put them in a mixin instead. The [micro-clearfix hack from Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) deserves to be put in a (argumentless) mixin for instance.

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

A mixin that you should probably use at all times on any Sass project, no matter how you've written it, is a breakpoint manager. Now that Responsive Web Design has become a thing™, sites and applications have to support a whole range of devices and screen sizes. Thankfully, we have Media Queries for this.

However, repeating media queries over and over again is far from convenient, not only because the syntax is annoying but essentially because it hurts maintainability. The perfect use case for a mixin.

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

Leading to the following CSS output:

{% highlight css %}
.element {
  color: red;
}

@media (max-width: 800px) {
  .element {
    color: blue;
  }
}
{% endhighlight %}



### Further reading

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)






## Arguments list

When dealing with an unknown number of arguments in a mixin, always use an `arglist` rather than a list. Think of `arglist` as the 8th hidden undocumented data type from Sass that is implicitly used when passing an arbitrary number of arguments to a mixin or a function whose signature contains `...`.

{% highlight scss %}
@mixin shadows($shadows...) {
  // type-of($shadows) == "arglist"
  // ...
}
{% endhighlight %}

Now, when building a mixin that accepts a handful of arguments (understand 3 or more), think twice before merging them out as a list or a map thinking it will be easier than passing them all one by one.

Sass is actually pretty clever with mixins and function declarations, so much so that you can actually pass a list or a map as an arglist to a function/mixin so that it gets parsed as a series of arguments.

{% highlight scss %}
@mixin dummy($a, $b, $c) {
  // ...
}

// Yep
@include dummy(true, 42, "kittens");

// Yep but nope
$params: true, 42, "kittens";
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3));

// Yep
$params: true, 42, "kittens";
@include dummy($params...);

// Yep
$params: (
  "c": "kittens",
  "a": true,
  "b": 42
);
@include dummy($params...);
{% endhighlight %}



### Further reading

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)






## Mixins and vendor prefixes

It might be tempting to define custom mixins to handle vendor prefixes for unsupported or partially supported CSS properties. But we do not want to do this. First, if you can use [Autoprefixer](https://github.com/postcss/autoprefixer), use Autoprefixer. It will remove Sass code from your project, will always be up-to-date and will necessarily do a much better job than you at prefixing stuff.

Unfortunately, Autoprefixer is not always an option. If you use either [Bourbon](http://bourbon.io/) or [Compass](http://compass-style.org/), you may already know that they both provide a collection of mixins that handle vendor prefixes for you. Use those.

If you cannot use Autoprefixer and use neither Bourbon nor Compass, then and only then, you can have your own mixin for prefixing CSS properties. But. Please do not build a mixin per property, manually printing each vendor.

{% highlight scss %}
// Nope
@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  transform: $value;
}
{% endhighlight %}


Do it the clever way.

{% highlight scss %}
/// Mixin helper to output vendor prefixes
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - Unprefixed CSS property
/// @param {*} $value - Raw CSS value
/// @param {List} $prefixes - List of prefixes to output
@mixin prefix($property, $value, $prefixes: ()) {
  @each $prefix in $prefixes {
    #{'-' + $prefix + '-' + $property}: $value;
  }

  #{$property}: $value;
}
{% endhighlight %}

Then using this mixin should be very straightforward:

{% highlight scss %}
.element {
  @include prefix(transform, rotate(90deg), webkit ms);
}
{% endhighlight %}

Please keep in mind this is a poor solution. For instance, it cannot deal with complex polyfills such as those required for Flexbox. In that sense, using Autoprefixer would be a far better option.



### Further reading

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)










# Loops

Because Sass provides complex data structures such as [lists](#lists) and [maps](#maps), it is no surprise that it also gives a way for authors to iterate over those entities.

However, the presence of loops usually implies moderately complex logic that probably does not belong to Sass. Before using a loop, make sure it makes sense and that it actually solves an issue.






## Each

The `@each` loop is definitely the most-used out of the three loops provided by Sass. It provides a clean API to iterate over a list or a map.

{% highlight scss %}
@each $theme in $themes {
  .section-#{$theme} {
    background-color: map-get($colors, $theme);
  }
}
{% endhighlight %}

When iterating on a map, always use `$key` and `$value` as variable names to enforce consistency.

{% highlight scss %}
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
{% endhighlight %}






## For

The `@for` loop might be useful when combined with CSS' `:nth-*` pseudo-classes. Except for these scenarios, prefer an `@each` loop if you *do have* to iterate over something.

{% highlight scss %}
@for $i from 1 through 10 {
  .element:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
{% endhighlight %}

Always use `$i` as a variable name to stick to the usual convention and unless you have a really good reason to, never use the `to` keyword: always use `through`. Many developers do not even know Sass offers this variation; using it might lead to confusion.






## While

The `@while` loop has absolutely no use case in a real Sass project. **Do not use it**.











# Warnings and Errors

If there is a feature that is often overlooked by Sass developers, it is the ability to dynamically output warnings and errors. Indeed, Sass comes with three custom directives to print content in the standard output system (CLI, compiling app...):

* `@debug`;
* `@warn`;
* `@error`.

Let's put `@debug` aside since it is clearly intended to debug SassScript, which is not our point here. We are then left with `@warn` and `@error` which are noticeably identical except that one stops the compiler while the other does not. I'll let you guess which does what.

Now, there is a lot of room in a Sass project for warnings and errors. Basically any mixin or function expecting a specific type or argument could throw an error if something went wrong, or display a warning when doing an assumption.






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
  @if not map-has-key($z-indexes, $layer) {
    @error "There is no layer named `#{$layer}` in $z-indexes."
         + "Layer should be one of #{map-keys($z-indexes)}.";
  }

  @return map-get($z-indexes, $layer);
}
{% endhighlight %}



### Further reading

* [An Introduction To Error Handling](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/HugoGiraudel/SassyLogger)











# Tools

What is nice sbout such a popular CSS preprocessor as Sass is that it comes with a whole ecosystem of frameworks, plugins, libraries and tools. After 8 years of existence, we are getting closer and closer to the point where [everything that can be written in Sass has been written in Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

However my advice would to be to lower the number of dependencies to the strict minimum. Managing dependencies is some sort of hell you don't want to be part of. Plus, there is little to no need for external dependencies when it comes to Sass.






## Compass

[Compass](http://compass-style.org/) is the main Sass framework out there. Developed by [Chris Eppstein](https://twitter.com/chriseppstein), one of the two maintainers of Ruby Sass, I don't see it dramatically losing in popularity for a while, if you want my opinion.

Still, I do not use Compass anymore, the main reason is that it slows Sass a lot. Ruby Sass is quite slow in itself, so adding more Ruby and more Sass on top of it is not really here to help.

The thing is, we use very little from the whole framework. Compass is huge. Cross-browser compatibility mixins is just the tip of the iceberg. Math functions, image helpers, spriting... There is so much that can be done with this great piece of software.

Unfortunately, this is all sugar and there is no killer feature in there. An exception could be made of the sprite builder which is *really great*, but [Grunticon](https://github.com/filamentgroup/grunticon) and [Grumpicon](http://grumpicon.com/) do the job as well, and have the benefit of being pluggable in the build process.

Anyway, I do not forbid the use of Compass although I would not recommend it either, especially since it is not LibSass-compatible (even if efforts have been made in that direction). If you feel better using it, fair enough but I don't think you'll get much from it at the end of the day.



### Further reading

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## Grid systems

Not using a grid system is not an option now that Responsive Web Design is all over the place. To make designs look consistent and solid across all sizes, we use some sort of grid to lay out the elements. To avoid having to code this grid work over and over again, some brilliant minds made theirs reusable.

Let me put this straight: I am not a big fan of grid systems. Of course I do see the potential, but I think most of them are completely overkill and are mostly used to draw red columns on a white background in nerdy designers' speaker decks. When is the last time you thought *thank-God-I-have-this-tool-to-build-this-2-5-3.1-π-grid*? That's right, never. Because in most cases, you just want the usual regular 12-columns grid, nothing fancy.

If you are using a CSS framework for your project like [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/), chances are high it includes a grid system already in which case I would recommend to use it to avoid having to deal with yet another dependency.

If you are not tied to a specific grid system, you will be pleased to know there are two top-notch Sass powered grid engines out there: [Susy](http://susy.oddbird.net/) and [Singularity](http://singularity.gs/). Both do much more than you will ever need so you can pick the one you prefer between these two and be sure all your edge cases &mdash;even the most nifty ones&mdash; will be covered. If you ask me, Susy has a slightly better community, but that's my opinion.

Or you can head over to something a bit more casual, like [CSSWizardry Grids](https://github.com/csswizardry/csswizardry-grids). All in all, the choice will not have much of an impact on your coding style, so this is pretty much up to you at this point.



### Further reading

* [Singularity](http://singularity.gs/)
* [Singularity: Grids Without Limits](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity Grid System](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy](http://susy.oddbird.net/)
* [Build Web Layouts Easily with Susy](http://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](http://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](http://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap's Grid System vs Susy: a Comparison](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](http://www.sitepoint.com/creative-grid-system-sass-calc/)






## SCSS-lint

Linting code is very important. Usually, following guidelines from a styleguide helps reducing the amount of code quality mistakes but nobody's perfect and there are always things to improve. So you could say that linting code is as important as commenting it.

[SCSS-lint](https://github.com/causes/scss-lint) is a tool to help you keep your SCSS files clean and readable. It is fully customisable and easy to integrate with your own tools.

Fortunately, SCSS-lint recommendations are very similar to those described in this document. In order to configure SCSS-lint according to Sass Guidelines, may I recommend the following setup:

{% highlight yaml %}
# For SCSS-Lint v0.31.0

linters:

  BangFormat:
    enabled: true
    space_before_bang: true
    space_after_bang: false

  BorderZero:
    enabled: true

  ColorKeyword:
    enabled: false

  Comment:
    enabled: false

  DebugStatement:
    enabled: true

  DeclarationOrder:
    enabled: true

  DuplicateProperty:
    enabled: false

  ElsePlacement:
    enabled: true
    style: same_line

  EmptyLineBetweenBlocks:
    enabled: true
    ignore_single_line_blocks: false

  EmptyRule:
    enabled: true

  FinalNewline:
    enabled: true
    present: true

  HexLength:
    enabled: true
    style: short

  HexNotation:
    enabled: true
    style: lowercase

  HexValidation:
    enabled: true

  IdSelector:
    enabled: true

  ImportPath:
    enabled: true
    leading_underscore: false
    filename_extension: false

  Indentation:
    enabled: true
    character: space
    width: 2

  LeadingZero:
    enabled: true
    style: exclude_zero

  MergeableSelector:
    enabled: false

  NameFormat:
    enabled: true
    convention: hyphenated_lowercase

  NestingDepth:
    enabled: true
    max_depth: 3

  PlaceholderInExtend:
    enabled: true

  PropertySortOrder:
    enabled: false

  PropertySpelling:
    enabled: true
    extra_properties: []

  QualifyingElement:
    enabled: true
    allow_element_with_attribute: false
    allow_element_with_class: false
    allow_element_with_id: false

  SelectorDepth:
    enabled: true
    max_depth: 3

  SelectorFormat:
    enabled: true
    convention: hyphenated_lowercase
    class_convention: '^(?:u|is|has)\-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:\-[a-z][a-zA-Z0-9]*)?(?:\-\-[a-z][a-zA-Z0-9]*)?$'

  Shorthand:
    enabled: true

  SingleLinePerProperty:
    enabled: true
    allow_single_line_rule_sets: false

  SingleLinePerSelector:
    enabled: true

  SpaceAfterComma:
    enabled: true

  SpaceAfterPropertyColon:
    enabled: true
    style: one_space

  SpaceAfterPropertyName:
    enabled: true

  SpaceBeforeBrace:
    enabled: true
    style: space
    allow_single_line_padding: true

  SpaceBetweenParens:
    enabled: true
    spaces: 0

  StringQuotes:
    enabled: true
    style: double_quotes

  TrailingSemicolon:
    enabled: true

  TrailingZero:
    enabled: true

  UnnecessaryMantissa:
    enabled: true

  UnnecessaryParentReference:
    enabled: true

  UrlFormat:
    enabled: false

  UrlQuotes:
    enabled: true

  VendorPrefixes:
    enabled: true
    identifier_list: base
    include: []
    exclude: []

  ZeroUnit:
    enabled: true
{% endhighlight %}

<div class="note">
  <p>If you want to plug SCSS lint into your Grunt build process, you will be pleased to know there is a Grunt plugin for that called <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
</div>



### Further reading

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)









# Too Long; Didn't read

To sum up, we want:

* Two (2) spaces indents, no tabs;
* 80-characters wide lines;
* Properly written multi-line CSS;
* Meaningful use of whitespaces;
* Quoted strings;
* Quoted URLs;
* No leading or trailing 0;
* Calculations wrapped in parentheses;
* No magic numbers;
* Colors expressed in keywords > HSL > RGB > hexadecimal;
* Lists separated with commas;
* No trailing comma in lists and maps;
* No selector nesting expected pseudo-classes and pseudo-elements;
* Hyphen-delimited naming;
* Extensive comments;
* SassDoc-powered API comments;
* 7-1 architecture pattern
* No `@extend`;
* Simple mixins;
* As few loops as possible, no `@while`;
* Reduced number of dependencies;
* Meaningful use of warnings and errors.
