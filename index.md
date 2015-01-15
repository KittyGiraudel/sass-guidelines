---
layout: default
---

# About the author

My name is [Hugo Giraudel](http://hugogiraudel.com), I am a front-end developer from France about to move to Berlin, Germany. I have been writing Sass for over two years now and am the author of Sass-related projects such as [SassDoc](http://sassdoc.com) and [Sass-Compatibility](http://sass-compatibility.github.io).

I have also written a couple of Sass libraries, mostly for the heck of it: [SassyJSON](https://github.com/HugoGiraudel/SassyJSON), [SassyLists](http://sassylists.com), [SassySort](https://github.com/HugoGiraudel/SassySort), [SassyCast](https://github.com/HugoGiraudel/SassyCast), [SassyMatrix](https://github.com/HugoGiraudel/SassyMatrix), [SassyBitwise](https://github.com/HugoGiraudel/SassyBitwise), [SassyIteratorsGenerators](https://github.com/HugoGiraudel/SassyIteratorsGenerators), [SassyLogger](https://github.com/HugoGiraudel/SassyLogger), [SassyStrings](https://github.com/HugoGiraudel/SassyStrings) and [SassyGradients](https://github.com/HugoGiraudel/SassyGradients).

<div class="button-wrapper">
  <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="button">Catch me on Twitter</a>
</div>











# Contributing

Sass Guidelines is a free project that I maintain in my spare time. Needless to say, it is quite a large amount of work to keep everything up-to-date, documented and relevant. Obviously, knowing that you liked this styleguide is already much appreciated!

Now if you feel like contributing, please know that tweeting about it, spreading the word, or fixing a tiny typo by opening an issue or a pull-request on the [GitHub repository](https://github.com/HugoGiraudel/sass-guidelines) would be great!

Last but not least before we start: if you enjoyed this document, or if it is useful for you or your team, please consider supporting it!

<div class="button-wrapper">
  <a href="https://gum.co/sass-guildelines" target="_blank" class="button">Support Sass Guidelines</a>
  {% capture tweet %}{{ site.title }}, {{ site.description }} by @{{ site.twitter_username }} –{% endcapture %}
  <a href="https://twitter.com/share?text={{ tweet | cgi_escape }}&url={{ site.url }}" target="_blank" class="button">Spread the word</a>
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
    * [Colors and variables](#colors-and-variables)
    * [Lightening and Darkening Colors](#lightening-and-darkening-colors)
  * [Lists](#lists)
  * [Maps](#maps)
    * [Debugging A Sass Map](#debugging-a-sass-map)
  * [CSS Ruleset](#css-ruleset)
  * [Declaration Sorting](#declaration-sorting)
  * [Selector Nesting](#selector-nesting)
    * [General Rule](#general-rule)
    * [Exceptions](#exceptions)
* [Naming Conventions](#naming-conventions)
  * [Constants](#constants)
  * [Namespace](#namespace)
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
* [Responsive Web Design and Breakpoints](#responsive-web-design-and-breakpoints)
  * [Naming Breakpoints](#naming-breakpoints)
  * [Breakpoint manager](#breakpoint-manager)
  * [Media Queries Usage](#media-queries-usage)
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
* [Conditional statements](#conditional-statements)
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

Sass's ultimate objective is to fix CSS's flaws. CSS, as we all know, is not the best language in the world <sup>[citation needed]</sup>. While very simple to learn, it can quickly get quite messy, especially on large projects.

This is where Sass comes in, as a meta-language, to improve CSS's syntax in order to provide extra features and handy tools. Meanwhile, Sass wants to be conservative regarding the CSS language.

The point is not to turn CSS into a fully-featured programming language; Sass only wants to help where CSS fails. Because of this, getting started with Sass is no harder than learning CSS: it simply adds a couple of extra features on top of it.

That being said, there are many ways to use these features. Some good, some bad, some unusual. These guidelines are meant to give you a consistent and documented approach to writing Sass code.

### Further reading

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)






## Ruby Sass or LibSass

[Sass's first commit](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) goes back as far as late 2006, over 8 years ago. Needless to say it has come a long way since then. Initially developed in Ruby, varied ports popped up here and there. The most successful one, [LibSass](https://github.com/sass/libsass) (written in C) is now close to being fully compatible with the original Ruby version.

In 2014, [Ruby Sass and LibSass teams decided to wait for both versions to sync up before moving forward](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Since then, LibSass has been actively releasing versions to have feature-parity with its older brother. The last remaining inconsistencies are gathered and listed by myself under the [Sass-Compatibility](http://sass-compatibility.github.io) project. If you are aware of an incompatibility between the two versions that is not listed, please be kind enough to open an issue.

Coming back to choosing your compiler. Actually, it all depends on your project. If it is a Ruby on Rails project, you better use Ruby Sass, which is perfectly suited for such a case. Also, be aware that Ruby Sass will always be the reference implementation and will always lead LibSass in features.

On non-Ruby projects that need a workflow integration, LibSass is probably a better idea since it is mostly dedicated to being wrapped. So if you want to use, let's say NodeJS, [node-sass](https://github.com/sass/node-sass) is all chosen.



### Further reading

* [LibSass](https://github.com/sass/libsass)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)






## Sass or SCSS

There is quite a lot of confusion regarding the semantics of the name *Sass*, and for good reason: Sass means both the preprocessor and its own syntax. Not very convenient, is it?

You see, Sass initially described a syntax of which the defining characteristic was its indentation-sensitivity. Soon enough, Sass maintainers decided to close the gap between Sass and CSS by providing a CSS-friendly syntax called *SCSS* for *Sassy CSS*. The motto is: if it's valid CSS, it's valid SCSS.

Since then, Sass (the preprocessor) has been providing two different syntaxes: Sass (not all-caps, [please](http://sassnotsass.com)), also known as *the indented syntax*, and SCSS. Which one to use is pretty much up to you since both are strictly equivalent in features. It's only a matter of aesthetics at this point.

Sass's whitespace-sensitive syntax relies on indentation to get rid of braces, semi-colons and other punctuation symbols, leading to a leaner and shorter syntax. Meanwhile, SCSS is easier to learn since it's mostly some tiny extra bits on top of CSS.

I, myself, prefer SCSS over Sass because it is closer to CSS and friendlier to most developers. Because of that, I will use SCSS rather than Sass throughout these guidelines.



### Further reading

* [What's the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)






## Other preprocessors

Sass is a preprocessor among other things. Its most serious competitor has to be [LESS](http://lesscss.org/), a NodeJS based preprocessor that has gotten quite popular thanks to the famous CSS framework [Bootstrap](http://getbootstrap.com/) using it. There is also [Stylus](http://learnboost.github.io/stylus/) - which is kind of the nerdy, unrestricted version of LESS - where you can do pretty much whatever you want since it almost turns CSS into a programming language.

*Why choose Sass over LESS or another preprocessor?* is still a valid question today. Not so long ago, we used to recommend Sass for Ruby-based projects because it was first made in Ruby and played well with Ruby on Rails. Now that LibSass has caught up (mostly) with original Sass, this is no longer relevant advice.

What I do like with Sass is its conservative approach to CSS. Sass's design is based on strong principles: much of the design approach comes naturally out of the core teams' beliefs that a) adding extra features has a complexity cost that needs to be justified by usefulness and, b) it should be easy to reason about what a given block of styles is doing by looking at that block alone. Also, Sass has a much sharper attention to detail than other preprocessors. As far as I can tell, the core designers care deeply about supporting every corner-case of CSS compatibility and making sure every general behavior is consistent.

In other words, Sass is not a preprocessor aimed at pleasing nerdy wannabe programmers like me by adding extraordinary features on top of a language that is not intended to support any logical use-cases. It is a software aimed at solving actual issues; helping to provide useful functionality to CSS where CSS falls short.

Preprocessors aside, we should also mention postprocessors, which have received significant exposure in the last few months, thanks mainly to [PostCSS](https://github.com/postcss/postcss) and [cssnext](https://cssnext.github.io/). Postprocessors are pretty much equivalent to preprocessors except they do not provide anything else other than upcoming CSS syntax.

You can think of postprocessors as a polyfill for unsupported CSS features. For instance, you would write variables as they are described in the [CSS specifications](http://dev.w3.org/csswg/css-variables/), then compile your stylesheets with a postprocessor only to find every variable occurrence gets replaced with its value, as Sass would do.

The idea behind postprocessors is that once browsers support new features (e.g. CSS variables), the postprocessor does not compile them anymore and lets browsers take over.

While providing tomorrow's syntax today is something of a noble idea, I have to say I still prefer using Sass for most tasks. However, there are some occasions where I believe postprocessors are more suited than Sass and the like - CSS prefixing for instance - but we'll get back to this.



### Further reading

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)











# Introduction





## Why a styleguide

A styleguide is not just a pleasing document to read, picturing an ideal state for your code. It is a key document in a project's life, describing how and why code should be written. It may look like overkill for small projects, but it helps a lot in keeping the codebase clean, scalable and easily maintainable.

Needless to say, the more developers involved on a project, the more code guidelines are needed. Along the same lines, the bigger the project, the more a styleguide is a must.

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

First things first: **this is not a CSS styleguide**. This document will not discuss naming conventions for CSS classes, modular patterns and the question of IDs in the CSS world. These guidelines only aim at dealing with Sass-specific content.

Also, this styleguide is my own and therefore **very opinionated**. Think of it as a collection of methodologies and advice that I have polished and given over the years. It also gives me the opportunity to link to a handful of insightful resources, so be sure to check the *further readings*.

Obviously, this is certainly not the only way of doing things, and it may or may not suit your project. Feel free to pick from it and adapt it to your needs. As we say, *your mileage may vary*.






## Key principles

At the end of the day, if there is one thing I would like you to get from this whole styleguide, it is that **Sass should be kept as simple as it can be**.

Thanks to my silly experiments like [bitwise operators](https://github.com/HugoGiraudel/SassyBitwise), [iterators and generators](https://github.com/HugoGiraudel/SassyIteratorsGenerators) and [a JSON parser](https://github.com/HugoGiraudel/SassyJSON) in Sass, we are all well aware of what one can do with this preprocessor.

Meanwhile, CSS is a simple language. Sass, being intended to write CSS, should not get much more complex than regular CSS. The [KISS principle](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid) is key here and may even take precedence over the [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself) in some circumstances.

Sometimes, it's better to repeat a little to keep the code maintainable, rather than building a top-heavy, unwieldy, unnecessarily complicated system that is completely unmaintainable because it is overly complex.

Also, and let me quote [Harry Roberts](https://csswizardry.com) once again, **pragmatism trumps perfection**. At some point, you will probably find yourself going against the rules described here. If it makes sense, if it feels right, do it. Code is just a means, not an end.



### Further reading

* [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
* [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)











# Syntax & formatting

If you ask me, the very first thing a styleguide should do is describe the way we want our code to look.

When several developers are involved in writing CSS on the same project(s), it is only a matter of time before one of them starts doing things their own way. Code guidelines that promote consistency not only prevent this, but also help when it comes to reading and updating the code.

Roughly, we want (shamelessly inspired by [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* two (2) spaces indents, no tabs;
* ideally, 80-characters wide lines;
* properly written multi-line CSS rules;
* meaningful use of whitespace.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// Nope
.foo {
    display: block; overflow: hidden;

    padding: 0 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Since Sass indented-syntax forces those coding standards
// There is no wrong way of proceeding
.foo
  display: block
  overflow: hidden
  padding: 0 1em
{% endhighlight %}
  </div>
</div>

We will not tackle the question of file organization in this section. It is the object of [another section](#architecture).






## Strings

CSS does not require strings to be quoted, not even those containing spaces. Take font-family names for instance: it doesn't matter whether you wrap them in quotes for the CSS parser.

Because of this, Sass *also* does not require strings to be quoted. Even better (and *luckily*, you'll concede), a quoted string is strictly equivalent to its unquoted twin (e.g. `'abc'` is strictly equal to `abc`).

That being said, languages that do not require strings to be quoted are definitely a minority and so, **strings should always be wrapped with single quotes** in Sass (single being easier to type than double on *qwerty* keyboards). Besides consistency with other languages, including CSS' cousin JavaScript, there are several reasons for this choice:

* color names are treated as colors when unquoted, which can lead to serious issues;
* most syntax highlighters will choke on unquoted strings;
* it helps general readability;
* there is no valid reason not to quote strings.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif;

// Nope
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif

// Nope
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif

// Nope
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>In the previous example, <code>sans-serif</code> is not being quoted because it is a specific CSS value that needs to be unquoted.</p>
</div>

URLs should be quoted as well, for the same reasons as above:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  background-image: url('/images/kittens.jpg');
}

// Nope
.foo {
  background-image: url(/images/kittens.jpg);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  background-image: url('/images/kittens.jpg')

// Nope
.foo
  background-image: url(/images/kittens.jpg)
{% endhighlight %}
  </div>
</div>



### Further Reading

* [All You Ever Need to Know About Sass Interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/HugoGiraudel/SassyStrings)






## Numbers

In Sass, number is a data type including everything from unitless numbers to lengths, durations, frequencies, angles and so on. This allows calculations to be run on such measures.



### Zeros

Numbers should display leading zeros before a decimal value less than one. Never display trailing zeros.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  padding: 2em;
  opacity: 0.5;
}

// Nope
.foo {
  padding: 2.0em;
  opacity: .5;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  padding: 2em
  opacity: 0.5

// Nope
.foo
  padding: 2.0em
  opacity: .5
{% endhighlight %}
  </div>
</div>



### Units

When dealing with lengths, a `0` value should never ever have a unit.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$length: 0;

// Nope
$length: 0em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$length: 0

// Nope
$length: 0em
{% endhighlight %}
  </div>
</div>

The most common mistake I can think of regarding numbers in Sass, is thinking that units are just some strings that can be safely appended to a number. While that sounds true, is is certainly not how units work. Think of units as algebraic symbols. For instance, in the real world, multiplying 5 inches by 5 inches gives you 25 square inches. The same logic applies to Sass.

To add a unit to a number, you have to multiply this number by *1 unit*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42;

// Yep
$length: $value * 1px;

// Nope
$length: $value + px;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42

// Yep
$length: $value * 1px

// Nope
$length: $value + px
{% endhighlight %}
  </div>
</div>

Note that adding *0 member of that unit* also works, but I would rather recommend the aforementioned method since adding *0 unit* can be a bit confusing. Indeed, when trying to convert a number to another compatible unit, adding 0 will not do the trick.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42 + 0px;
// -> 42px

$value: 1in + 0px;
// -> 1in

$value: 0px + 1in;
// -> 96px
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42 + 0px
// -> 42px

$value: 1in + 0px
// -> 1in

$value: 0px + 1in
// -> 96px
{% endhighlight %}
  </div>
</div>

In the end, it really depends on what you are trying to achieve. Just keep in mind that adding the unit as a string is not a good way to proceed.

To remove the unit of a value, you have to divide it by *one unit of its kind*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$length: 42px;

// Yep
$value: $length / 1px;

// Nope
$value: str-slice($length + unquote(''), 1, 2);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$length: 42px

// Yep
$value: $length / 1px

// Nope
$value: str-slice($length + unquote(''), 1, 2)
{% endhighlight %}
  </div>
</div>

Appending a unit as a string to a number results in a string, preventing any additional operation on the value. Slicing the numeric part of a number with a unit also results in a string. This is not what you want.



### Calculations

**Top-level numeric calculations should always be wrapped in parentheses**. Not only does this requirement dramatically improve readability, it also prevents some edge cases by forcing Sass to evaluate the contents of the parentheses.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  width: (100% / 3);
}

// Nope
.foo {
  width: 100% / 3;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  width: (100% / 3)

// Nope
.foo
  width: 100% / 3
{% endhighlight %}
  </div>
</div>



### Magic numbers

"Magic number" is an [old school programming](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) term for *unnamed numerical constant*. Basically, it's just a random number that happens to *just work*™ yet is not tied to any logical explanation.

Needless to say **magic numbers are a plague and should be avoided at all costs**. When you cannot manage to find a reasonable explanation for why a number works, add an extensive comment explaining how you got there and why you think it works. Admitting you don't know why something works is still more helpful to the next developer than them having to figure out what's going on from scratch.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * 1. Magic number. This value is the lowest I could find to align the top of
 * `.foo` with its parent. Ideally, we should fix it properly.
 */
.foo {
  top: 0.327em; /* 1 */
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * 1. Magic number. This value is the lowest I could find to align the top of
 * `.foo` with its parent. Ideally, we should fix it properly.
 */
.foo
  top: 0.327em /* 1 */
{% endhighlight %}
  </div>
</div>



### Further reading

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](http://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)






## Colors

Colors occupy an important place in the CSS language. Naturally, Sass ends up being a valuable ally when it comes to manipulating colors, mostly by providing a handful of [powerful functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).



### Color formats

In order to make colors as simple as they can be, my advice would be to respect the following order of preference for color formats:

1. [CSS color keywords](http://www.w3.org/TR/css3-color/#svg-color);
1. [HSL notation](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB notation](http://en.wikipedia.org/wiki/RGB_color_model);
1. Hexadecimal notation. Preferably lowercase and shortened when possible.

For starters, keywords often speak for themselves. The HSL representation is not only the easiest one for the human brain to comprehend<sup>[citation needed]</sup>, it also makes it easy for stylesheet authors to tweak the color by adjusting the hue, saturation and lightness individually. RGB still has the benefit of showing right away if the color is more of a blue, a green or a red but it does not make it easy to build a color from the three parts. Lastly, hexadecimal is close to indecipherable for the human mind.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  color: red;
}

// Nope
.foo {
  color: #FF0000;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  color: red

// Nope
.foo
  color: #FF0000
{% endhighlight %}
  </div>
</div>

When using HSL or RGB notation, always add a single space after a comma (`,`) and no space between parentheses (`(`, `)`) and content.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  color: rgba(0, 0, 0, 0.1);
  background: hsl(300, 100%, 100%);
}

// Nope
.foo {
  color: rgba(0,0,0,0.1);
  background: hsl( 300, 100%, 100% );
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  color: rgba(0, 0, 0, 0.1)
  background: hsl(300, 100%, 100%)

// Nope
.foo
  color: rgba(0,0,0,0.1)
  background: hsl( 300, 100%, 100% )
{% endhighlight %}
  </div>
</div>



### Colors and variables

When using a color more than once, store it in a variable with a meaningful name representing the color.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$sass-pink: #c69;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$sass-pink: #c69
{% endhighlight %}
  </div>
</div>

Now you are free to use this variable wherever you want. However, if your usage is strongly tied to a theme, I would advise against using the variable as is. Instead, store it in another variable with a name explaining how it should be used.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$main-theme-color: $sass-pink;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$main-theme-color: $sass-pink
{% endhighlight %}
  </div>
</div>

Doing this would prevent a theme change leading to something like `$sass-pink: blue`.

{% include donate.html %}



### Lightening and darkening colors



Both [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) and [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) functions manipulate the lightness of a color in the HSL space by adding to or substracting from the lightness in the HSL space. Basically, they are nothing but aliases for the `$lightness` parameter of the [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) function.

The thing is, those functions often do not provide the expected result. On the other hand, the [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) function is a nice way to lighten or darken a color by mixing it with either `white` or `black`.

The benefit of using `mix` rather than one of the two aforementioned functions is that it will progressively go to black (or white) as you decrease the proportion of the color, whereas `darken` and `lighten` will quickly blow out a color all the way to black or white.

<figure role="group">
  <img src="/assets/images/lighten-darken-mix.png" alt="Illustration of the difference between lighten/darken and mix Sass functions" />
  <figcaption>Illustration of the difference between <code>lighten</code>/<code>darken</code> and <code>mix</code> by <a href="http://codepen.io/KatieK2/pen/tejhz/" target="_blank">KatieK</a></figcaption>
</figure>

If you don't want to write the `mix` function every time, you can create two easy-to-use functions `tint` and `shade` (which are also a part of [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) to do the same thing:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
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
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Slightly lighten a color
/// @access public
/// @param {Color} $color - color to tint
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function tint($color, $percentage)
  @return mix($color, white, $percentage)

/// Slightly darken a color
/// @access public
/// @param {Color} $color - color to shade
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function shade($color, $percentage)
  @return mix($color, black, $percentage)
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>The <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> function is designed to scale properties more fluidly by taking into account how high or low they already are. It should provide results that are as nice as <code>mix</code>'s but with a clearer calling convention. The scaling factor isn't exactly the same though.</p>
</div>



### Further reading

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don't Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)






## Lists

Lists are the Sass equivalent of arrays. A list is a flat data structure (unlike [maps](#maps)) intended to store values of any type (including lists, leading to nested lists).

Lists should respect the following guidelines:

* unless it is too long to fit on a 80-characters line, always display it on a single line;
* unless it is used as is for CSS purposes, always use comma as a delimiter;
* unless it is empty or nested within another list, never write the parenthesis;
* never add a trailing comma.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$font-stack: 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif;

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif;

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif,);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$font-stack: 'Helvetica', 'Arial', sans-serif

// Nope (since it is not supported)
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif)

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif,)
{% endhighlight %}
  </div>
</div>

When adding new items to a list, always use the provided API. Do not attempt to add new items manually.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$shadows: 0 42px 13.37px hotpink;

// Yep
$shadows: append($shadows, $shadow, comma);

// Nope
$shadows: $shadows, $shadow;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$shadows: 0 42px 13.37px hotpink

// Yep
$shadows: append($shadows, $shadow, comma)

// Nope
$shadows: $shadows, $shadow
{% endhighlight %}
  </div>
</div>



### Further reading

* [SassyLists](http://sassylists.com)






## Maps

Since Sass 3.3, stylesheets authors can define maps which is the Sass term for associative arrays, hashes or even JavaScript objects. A map is a data structure mapping keys (that can be any data type, including maps although I wouldn't recommend it) to values of any type.

Maps should be written as follows:

* space after the colon (`:`);
* opening brace (`(`) on the same line as the colon (`:`);
* **quoted keys** if they are strings (which represents 99% of the cases);
* each key/value pair on its own new line;
* comma (`,`) at the end of each key/value;
* **trailing comma** (`,`) on last item to make it easier to add, remove or reorder items;
* closing brace (`)`) on its own new line;
* no space or new line between closing brace (`)`) and semi-colon (`;`).

Illustration:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
);

// Nope
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$breakpoints: ('small': 767px, 'medium': 992px, 'large': 1200px,)

// Nope
$breakpoints: ( 'small': 767px, 'medium': 992px, 'large': 1200px )

// Nope
$breakpoints: (small: 767px, medium: 992px, large: 1200px,)

// Nope (since it is not supported)
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
)
{% endhighlight %}
  </div>
</div>



### Debugging a Sass map

If you ever find yourself lost, wondering what kind of crazy magic is happening in a Sass map, worry not because there is still a way to be saved.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin debug-map($map) {
  @at-root {
    @debug-map {
      __toString__: inspect($map);
      __length__: length($map);
      __depth__: if(function-exists('map-depth'), map-depth($map), null);
      __keys__: map-keys($map);
      __properties__ {
        @each $key, $value in $map {
          #{'(' + type-of($value) + ') ' + $key}: inspect($value);
        }
      }
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=debug-map($map)
  @at-root
    @debug-map
      __toString__: inspect($map)
      __length__: length($map)
      __depth__: if(function-exists('map-depth'), map-depth($map), null)
      __keys__: map-keys($map)
      __properties__
        @each $key, $value in $map
          #{'(' + type-of($value) + ') ' + $key}: inspect($value)
{% endhighlight %}
  </div>
</div>

If you are interested in knowing the depth of the map, add the following function as well. The mixin will display it automatically.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Compute the maximum depth of a map
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map) {
  $level: 1;

  @each $key, $value in $map {
    @if type-of($value) == 'map' {
      $level: max(map-depth($value) + 1, $level);
    }
  }

  @return $level;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Compute the maximum depth of a map
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map)
  $level: 1

  @each $key, $value in $map
    @if type-of($value) == 'map'
      $level: max(map-depth($value) + 1, $level)

  @return $level;
{% endhighlight %}
  </div>
</div>



### Further reading

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](http://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)






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

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
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
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo, .foo-bar,
.baz
  display: block
  overflow: hidden
  margin: 0 auto

// Nope
.foo,
.foo-bar, .baz
    display: block
    overflow: hidden
    margin: 0 auto
{% endhighlight %}
  </div>
</div>

Adding to those CSS-related guidelines, we want to pay attention to:

* local variables being declared before any declarations, then spaced from declarations by a new line;
* mixin calls with no `@content` coming before any declaration;
* nested selectors always coming after a new line;
* mixin calls with `@content` coming after any nested selector;
* no new line before a closing brace (`}`).

Illustration:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
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

  @include respond-to('small') {
    overflow: visible;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo, .foo-bar,
.baz
  $length: 42em

  +ellipsis
  +size($length)
  display: block
  overflow: hidden
  margin: 0 auto

  &:hover
    color: red

  +respond-to('small')
    overflow: visible
{% endhighlight %}
  </div>
</div>



### Further reading

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)






## Declaration Sorting

I cannot think of many topics where opinions are as divided as they are regarding declaration sorting in CSS. Concretely, there are two factions here:

* sticking to the alphabetical order;
* ordering declarations by type (position, display, colors, font, miscellaneous...).

There are pros and cons for both ways. On one hand, alphabetical order is universal (at least for languages using the latin alphabet) so there is no argument about sorting one property before another. However, it seems extremely weird to me to see properties such as `bottom` and `top` not right next to each other. Why animations should appear before the display type? There are a lot of oddities with alphabet ordering.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  background: black;
  bottom: 0;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  height: 100px;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 100px;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  background: black
  bottom: 0
  color: white
  font-weight: bold
  font-size: 1.5em
  height: 100px
  overflow: hidden
  position: absolute
  right: 0
  width: 100px
{% endhighlight %}
  </div>
</div>

On the other hand, ordering properties by type makes perfect sense. Every font-related declarations are gathered, `top` and `bottom` are reunited and reading a ruleset kind of feels like reading a short story. But unless you stick to some conventions like [Idiomatic CSS](https://github.com/necolas/idiomatic-css), there is a lot of room for interpretation in this way of doing. Where would `white-space` go: font or display? Where does belong `overflow` exactly? What is the property order within a group (it could be alphabetically, oh the irony)?

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  height: 100px;
  width: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  height: 100px
  width: 100px
  overflow: hidden
  position: absolute
  bottom: 0
  right: 0
  background: black
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

There is also another interesting subtree of type ordering called [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), that seems to be quite popular as well. Basically, Concentric CSS relies on the box-model to define an order: starts outside, moves inward.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: black;
  overflow: hidden;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  width: 100px
  height: 100px
  position: absolute
  right: 0
  bottom: 0
  background: black
  overflow: hidden
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

I must say I cannot decide myself. A [recent poll on CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) determined that over 45% developers order their declarations by type against 14% alphabetically. Also, there are 39% that go full random, including myself.

<figure role="group">
  <img src="/assets/images/css_order_chart.png" alt="Chart showing how developers order their CSS declarations" />
  <figcaption>Chart showing how developers order their CSS declarations</figcaption>
</figure>

Because of this, I will not impose a choice in this styleguide. Pick the one you prefer, as long as you are consistent throughout your stylesheets.

<div class="note">
  <p>A <a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">recent study</a> shows that using <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (which uses <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">type ordering</a>) for sorting CSS declarations ends up shortening the average file size under Gzip compression by 2.7%, compared to 1.3% when sorting alphabetically.</p>
</div>



### Further reading

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)






## Selector Nesting

One particular feature Sass provides that is being overly misused by many developers is *selector nesting*. Selector nesting offers a way for stylesheet authors to compute long selectors by nesting shorter selectors within each others.

### General rule

For instance, the following Sass nesting:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  .bar
    &:hover
      color: red
{% endhighlight %}
  </div>
</div>

... will generate this CSS:

{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}

Along the same lines, since Sass 3.3 it is possible to use the current selector reference (`&`) to generate advanced selectors. For instance:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  &-bar {
    color: red;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  &-bar
    color: red
{% endhighlight %}
  </div>
</div>

... will generate this CSS:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo-bar {
  color: red;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo-bar
  color: red
{% endhighlight %}
  </div>
</div>

This method is often used along with [BEM naming conventions](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to generate `.block__element` and `.block--modifier` selectors based on the original selector (i.e. `.block` in this case).

<div class="note">
  <p>While it might be anecdotal, generating new selectors from the current selector reference (<code>&</code>) makes those selectors unsearchable in the codebase since they do not exist per se.</p>
</div>

The problem with selector nesting is that it ultimately makes code more difficult to read. One has to mentally compute the resulting selector out of the indentation levels; it is not always quite obvious what the CSS will end up being.

This statement becomes truer as selectors get longer and references to the current selector (`&`) more frequent. At some point, the risk of losing track and not being able to understand what's going on anymore is so high that it is not worth it.

To prevent such a situation, we **avoid selector nesting as much as possible**. However, there are obviously a few exceptions to this rule.

### Exceptions

For starters, it is allowed and even recommended to nest pseudo-classes and pseudo-elements within the initial selector.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: 'pseudo-element';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  &:hover
    color: green

  &::before
    content: 'pseudo-element'
{% endhighlight %}
  </div>
</div>

Using selector nesting for pseudo-classes and pseudo-elements not only makes sense (because it deals with closely related selectors), it also helps keep everything about a component at the same place.

Also, when using component-agnostic state classes such as `.is-active`, it is perfectly fine to nest it under the component's selector to keep things tidy.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  &.is-active {
    font-weight: bold;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  &.is-active
    font-weight: bold
{% endhighlight %}
  </div>
</div>

Last but not least, when styling an element because it happens to be contained within another specific element, it is also fine to use nesting to keep everything about the component at the same place.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  .no-opacity & {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  .no-opacity &
    display: none
{% endhighlight %}
  </div>
</div>

When working with unexperienced developers, a selector such as `.no-opacity &` might look a little weird. To prevent any confusion, you can build a very short mixin that transform this odd syntax into an explicit API.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper mixin to provide simple API to selector nesting
/// @param {String} $selector - Selector
@mixin when-inside($selector) {
  #{$selector} & {
    @content;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Helper mixin to provide simple API to selector nesting
/// @param {String} $selector - Selector
=when-inside($selector) {
  #{$selector} &
    @content
}
{% endhighlight %}
  </div>
</div>

Rewriting our previous example, it would look like this:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  @include when-inside('.no-opacity') {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  +when-inside('.no-opacity')
    display: none
{% endhighlight %}
  </div>
</div>

As with everything, the specifics are somewhat irrelevant, consistency is key. If you feel fully confident with selector nesting, then use selector nesting. Just make sure your whole team is okay with that.






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

Regarding variables, functions and mixins, we stick to something very *CSS-y*: **lowercase hyphen-delimited**, and above all meaningful.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) {
  // ...
}

@function opposite-direction($direction) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$vertical-rhythm-baseline: 1.5rem

=size($width, $height: $width)
  // ...

@function opposite-direction($direction)
  // ...
{% endhighlight %}
  </div>
</div>



### Further reading

* [CSS Guidelines' Naming Conventions](http://cssguidelin.es/#naming-conventions)






## Constants

If you happen to be a framework developer or library writer, you might find yourself dealing with variables that are not meant to be updated in any circumstances: constants. Unfortunately (or fortunately?), Sass does not provide any way to define such entities, so we have to stick to strict naming conventions to make our point.

As for many languages, I suggest all-caps snakerized variables when they are constants. Not only is this a very old convention, but it also constrats well with usual lowercased hyphenated variables.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$CSS_POSITIONS: top, right, bottom, left, center;

// Nope
$css-positions: top, right, bottom, left, center;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$CSS_POSITIONS: top, right, bottom, left, center

// Nope
$css-positions: top, right, bottom, left, center
{% endhighlight %}
  </div>
</div>



### Further Reading

* [Dealing With Constants in Sass](http://www.sitepoint.com/dealing-constants-sass/)






## Namespace

If you intend to distribute your Sass code, in the case of a library, a framework, a grid system or whatever, you might want to consider namespacing all your variables, functions, mixins and placeholders so it does not conflict with anyone else's code.

For instance, if you work on a *Sassy Unicorn* project that is meant to be used by developers all over the world (who wouldn't, right?), you could consider using `su-` as a namespace. It is specific enough to prevent any naming collisions and short enough not to be a pain to write.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$su-configuration: ( ... );

@function su-rainbow($unicorn) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$su-configuration: ( ... )

@function su-rainbow($unicorn)
  // ...
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Note that automatic namespacing is definitely a design goal for the upcoming <code>@import</code> revamp from Sass 4.0. As that comes closer to fruition, it will become less and less useful to do manual namespacing; eventually, manually-namespaced libraries may actually be harder to use.</p>
</div>

### Further reading

* [Please Respect the Global CSS Namespace](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)











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

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
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
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Helper class to truncate and add ellipsis to a string too long for it to fit
 * on a single line.
 * 1. Prevent content from wrapping, forcing it on a single line.
 * 2. Add ellipsis at the end of the line.
 */
.ellipsis
  white-space: nowrap /* 1 */
  text-overflow: ellipsis /* 2 */
  overflow: hidden
{% endhighlight %}
  </div>
</div>

Basically everything that is not obvious at first glance should be commented. There is no such thing as too much documentation. Remember that you cannot *comment too much*, so get on fire and write comments for everything that is worth it.

When commenting a Sass-specific section, use Sass inline comments instead of a C-style block. This makes the comment invisible in the output, even in expanded mode during development.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Add current module to the list of imported modules.
// `!global` flag is required so it actually updates the global variable.
$imported-modules: append($imported-modules, $module) !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Add current module to the list of imported modules.
// `!global` flag is required so it actually updates the global variable.
$imported-modules: append($imported-modules, $module) !global
{% endhighlight %}
  </div>
</div>



### Further reading

* [CSS Guidelines' Commenting section](http://cssguidelin.es/#commenting)

{% include donate.html %}






## Documentation

Every variable, function, mixin and placeholder that is intended to be reused all over the codebase should be documented as part of the global API using [SassDoc](http://sassdoc.com).

SassDoc provides two different syntaxes for comments: either C-style or inline. For instance, both of the following snippets are valid SassDoc comments:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Vertical rhythm baseline used all over the code base.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Vertical rhythm baseline used all over the code base.
 * @type Length
 */
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Vertical rhythm baseline used all over the code base.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Vertical rhythm baseline used all over the code base.
/// @type Length
$vertical-rhythm-baseline: 1.5rem
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Three slashes (<code>/</code>) required.</p>
</div>

There is no benefit in using one over the other, so pick the one you feel the most confident with.

SassDoc has two major roles:

* forcing standardized comments using an annotation-based system for everything that is part of a public or private API;
* being able to generate an HTML version of the API documentation by using any of the SassDoc endpoints (CLI tool, Grunt, Gulp, Broccoli, Node...).

<figure role="group">
<img alt="Documentation generated by SassDoc" src="/assets/images/sassdoc-preview.png" />
<figcaption>Documentation generated by SassDoc</figcaption>
</figure>

Here is an example of a mixin extensively documented with SassDoc:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
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
/// .foo {
///   @include size(10em);
/// }
///
/// .bar {
///   @include size(100%, 10em);
/// }
///
/// @example css - CSS output
/// .foo {
///   width: 10em;
///   height: 10em;
/// }
///
/// .bar {
///   width: 100%;
///   height: 10em;
/// }
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
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
/// .foo
///   +size(10em)
///
/// .bar
///   +size(100%, 10em)
///
/// @example css - CSS output
/// .foo {
///   width: 10em;
///   height: 10em;
/// }
///
/// .bar {
///   width: 100%;
///   height: 10em;
/// }
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Further reading

* [SassDoc](http://sassdoc.com)
* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
* [New Features and New Look for SassDoc](http://webdesign.tutsplus.com/articles/new-features-and-a-new-look-for-sassdoc--cms-21914)











# Architecture

Architecting a CSS project is probably one of the most difficult things you will have to do in a project's life. Keeping the architecture consistent and meaningful is even harder.

Fortunately, one of the main benefits of using a CSS preprocessor is having the ability to split the codebase over several files without impacting performance (like the `@import` CSS directive would do). Thanks to Sass's overload of the `@import` directive, it is perfectly safe (and actually recommended) to use as many files as necessary in development, all compiled into a single stylesheet when going to production.

On top of that, I cannot stress enough the need for folders, even on small scale projects. At home, you don’t drop every sheet of paper into the same box. You use folders; one for the house/flat, one for the bank, one for bills, and so on. There is no reason to do otherwise when structuring a CSS project. Split the codebase into meaningful separated folders so it is easy to find stuff later when you have to come back to the code.

There are a lot of popular architectures for CSS projects: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/)-like, [Foundation](http://foundation.zurb.com/)-like... They all have their merits, pros and cons.

I, myself, use an approach that happens to be quite similar to [SMACSS](https://smacss.com/) from [Jonathan Snook](http://snook.ca/), which focuses on keeping things simple and obvious.

<div class="note">
  <p>I have learnt that architecture is most of the time very specific to the project. Feel free to discard completely or adapt the proposed solution so that you deal with a system that suits your needs.</p>
</div>



### Further reading

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [FR] [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)






## Components

There is a major difference between making it *work*, and making it *good*. Again, CSS is quite a messy language <sup>[citation needed]</sup>. The less CSS we have, the merrier. We don't want to deal with megabytes of CSS code. To keep stylesheets short and efficient&mdash;and this will not be any surprise to you&mdash;it is usually a good idea to think of an interface as a collection of components.

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

<figure role="group">
  <img src="/assets/images/sass-wallpaper.jpg" alt="One file to rule them all, One file to find Them, One file to bring them all, And in the Sass way merge them." />
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

And last but not least, most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.

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

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'utils/variables';
@import 'utils/functions';
@import 'utils/mixins';
@import 'utils/placeholders';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import vendors/bootstrap
@import vendors/jquery-ui

@import utils/variables
@import utils/functions
@import utils/mixins
@import utils/placeholders

@import base/reset
@import base/typography

@import layout/navigation
@import layout/grid
@import layout/header
@import layout/footer
@import layout/sidebar
@import layout/forms

@import components/buttons
@import components/carousel
@import components/cover
@import components/dropdown

@import pages/home
@import pages/contact

@import themes/theme
@import themes/admin
{% endhighlight %}
  </div>
</div>

There is another way of importing partials that I deem valid as well. On the bright side, it makes the file more readable. On the other hand, it makes updating it slightly more painful. Anyway, I'll let you decide which is best, it does not matter much. For this way of doing, the main file should respect these guidelines:

* one `@import` per folder;
* a linebreak after `@import`;
* each file on its own line;
* a new line after the last import from a folder;
* file extensions and leading underscores omitted.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import
  'vendors/bootstrap',
  'vendors/jquery-ui';

@import
  'utils/variables',
  'utils/functions',
  'utils/mixins',
  'utils/placeholders';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/contact';

@import
  'themes/theme',
  'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import
  vendors/bootstrap,
  vendors/jquery-ui

@import
  utils/variables,
  utils/functions,
  utils/mixins,
  utils/placeholders

@import
  base/reset,
  base/typography

@import
  layout/navigation,
  layout/grid,
  layout/header,
  layout/footer,
  layout/sidebar,
  layout/forms

@import
  components/buttons,
  components/carousel,
  components/cover,
  components/dropdown

@import
  pages/home,
  pages/contact

@import
  themes/theme,
  themes/admin
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>In order to not have to import each file manually, there is an extension to Ruby Sass called <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, making it possible to use glob patterns in Sass <code>@import</code> such as <code>@import "components/*"</code>.</p>
  <p>That being said, I would not recommend it because it imports files following the alphabetical order which is usually not what you want, especially when dealing with a source-order dependent language.</p>
</div>






## Shame file

There is an interesting concept that has been made popular by [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) and [Chris Coyier](http://css-tricks.com) that consists of putting all the CSS declarations, hacks and things we are not proud of in a *shame file*. This file, dramatically titled `_shame.scss`, would be imported after any other file, at the very end of the stylesheet.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
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
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a
    color: #BADA55 !important
{% endhighlight %}
  </div>
</div>



### Further reading

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)











# Responsive Web Design and breakpoints

I do not think we still have to introduce Responsive Web Design now that it is everywhere. However you might ask yourself *why is there a section about RWD in a Sass styleguide?* Actually there are quite a few things that can be done to make working with breakpoints easier, so I thought it would not be such a bad idea to list them here.






## Naming breakpoints

I think it is safe to say that media queries should not be tied to specific devices. For instance, this is definitely a bad idea to try targeting iPads or Blackberry phones specifically. Media queries should take care of a range of screen sizes, until the design breaks and the next media query takes over.

For the same reasons, breakpoints should not be named after devices but something more general. Especially since some phones are now bigger than tablets, some tablets bigger than some tiny screen computers, and so on...

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
$breakpoints: ("medium": (min-width: 800px), "large": (min-width: 1000px), "huge": (min-width: 1200px))

// Nope
$breakpoints: ("tablet": (min-width: 800px), "computer": (min-width: 1000px), "tv": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>

At this point, any naming convention that makes crystal clear that a design is not intimately tied to a specific device type will do the trick, as long as it gives a sense of magnitude.

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
$breakpoints: ("seed": (min-width: 800px), "sprout": (min-width: 1000px), "plant": (min-width: 1200px))
{% endhighlight %}
  </div>
</div>




### Further reading

* [Naming Media Queries](http://css-tricks.com/naming-media-queries/)






## Breakpoint manager

Once you have named your breakpoints the way you want, you need a way to use them in actual media queries. There are plenty of ways to do so but I must say I am a big fan of the breakpoint map read by a getter function. This system is both simple and efficient.

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
  }

  @else {
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
  <p>Obviously, this is a fairly simplistic breakpoint manager that will not do the trick when dealing with custom and/or multiple-checks breakpoints.</p>
  <p>If you need a slightly more permissive breakpoint manager, may I recommend you do not reinvent the wheel and use something that has been proven effective such as <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> or <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
</div>



### Further Reading

* [Managing Responsive Breakpoints in Sass](http://www.sitepoint.com/managing-responsive-breakpoints-sass/)
* [Approaches to Media Queries in Sass](http://css-tricks.com/approaches-media-queries-sass/)






## Media Queries Usage

Not so long ago, there has been a quite hot debate about where should be written media queries: should they belong within selectors (as Sass allows it) or strictly dissociated from them? I have to say I am a fervent defender of the *media-queries-within-selectors* system, as I think it plays well with the ideas of *components*.

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

Leading to the following CSS output:

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

You might hear that this convention results in duplicated media queries in the CSS output. That is definitely true. Although, [tests have been made](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) and the final word is that it doesn't matter once Gzip (or any equivalent) has done its thing:

> … we hashed out whether there were performance implications of combining vs scattering Media Queries and came to the conclusion that the difference, while ugly, is minimal at worst, essentially non-existent at best.<br>
> &mdash; [Sam Richards](https://twitter.com/snugug), regarding [Breakpoint](http://breakpoint-sass.com/)

Now, if you really are concerned about duplicated media queries, you can still use a tool to merge them such as [this gem](https://github.com/aaronjensen/sass-media_query_combiner) however I feel like I have to warn you against possible side-effects of moving CSS code around. You are not without knowing that source order is important.



### Further Reading

* [Sass and Media Queries](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)
* [Inline or Combined Media queries? Fight!](http://benfrain.com/inline-or-combined-media-queries-in-sass-fight/)
* [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner)











# Variables

Variables are the essence of any programming language. They allow us to reuse values without having to copy them over and over again. Most importantly, they make updating a value very easy. No more find and replace or manual crawling.

However CSS is nothing but a huge basket containing all our eggs. Unlike many languages, there are no real scopes in CSS. Because of this, we have to pay real attention when adding variables at the risk of witnessing conflicts.

My advice would be to only create variables when it makes sense to do so. Do not initiate new variables for the heck of it, it won't help. A new variable should be created only when all of the following criteria are met:

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
// In this case, the `!global` flag is optional.
$variable: 'initial value' !global;

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Create a local variable that shadows the global one.
  $variable: 'local value';

  // Include the mixin: it overrides the global variable.
  @include global-variable-overriding;

  // Print the variable's value.
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
// In this case, the `!global` flag is optional.
$variable: 'initial value' !global

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
  // Create a local variable that shadows the global one.
  $variable: 'local value'

  // Include the mixin: it overrides the global variable.
  +global-variable-overriding

  // Print the variable's value.
  // It is the **local** one, since it shadows the global one.
  content: $variable

// Print the variable in another selector that does no shadowing.
// It is the **global** one, as expected.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>

{% include donate.html %}






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
// Developer's own variable
$baseline: 2em;

// Your library declaring `$baseline`
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Developer's own variable
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
/// @param {String} $layer - Layer's name
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
/// @prop {String} key - Layer's name
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











# Extend

The `@extend` directive has to be one of the features that made Sass so popular a couple of years ago. As a reminder, it makes it possible to tell Sass to style an element A exactly as though it also matched selector B. Needless to say this can end up being a valuable ally when writing modular CSS.

However I feel like I must warn you against this feature. As clever as it is, `@extend` still is a tricky concept that might do more harm than good, especially when poorly used. The thing is, when extending a selector, you have little to no way to answer these questions without having an in-depth knowledge of the whole codebase:

* where is my current selector going to be appended?
* am I likely to be causing undesired side-effects?
* how large is the CSS generated by this single extend?

For all you know, the result could range from doing nothing to causing disastrous side-effects. Because of this, my first advice would be to avoid the `@extend` directive altogether. It might sound brutal, but at the end of the day it can save you some headaches and troubles.

That being said, you know the saying:

> Never say never.<br>
> &mdash; Apparently, [not Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

There are scenarios where extending selectors might be helpful and worthwhile. Yet, always keep in mind those rules so you don't get yourself into trouble:

* Use extend from within a module, not across different modules.
* Use extend on placeholders exclusively, not on actual selectors.
* Make sure the placeholder you extend is present as little as possible in the stylesheet.

If you are going to use extend, let me also remind you that it does not play well with `@media` blocks. As you may know, Sass is unable to extend an outer selector from within a media query. When doing so, the compiler simply crashes, telling you that you cannot do such a thing. Not great. Especially since media queries are almost all we do know.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // This doesn't work. Worse: it crashes.
    @extend .foo;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  content: 'foo'

@media print
  .bar
    // This doesn't work. Worse: it crashes.
    @extend .foo
{% endhighlight %}
  </div>
</div>

> You may not @extend an outer selector from within @media.<br>
> You may only @extend selectors within the same directive.

<div class="note">
  <p>It is often said that <code>@extend</code> helps with the file size since it combines selectors rather than duplicated properties. That is true, however the difference is negligible once <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a> has done its compression.</p>
  <p>That being said, if you cannot use Gzip (or any equivalent) then switching to a <code>@extend</code> approach might not be that bad as long as you know what you are doing.</p>
</div>

To sum up, I would **advise against using the `@extend` directive**, unless under some specific circumstances, but I would not go as far as to forbid it.



### Further reading

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)











# Mixins

Mixins are one of the most used features from the whole Sass language. They are the key to reusability and DRY components. And for good reason: mixins allow authors to define styles that can be reused throughout the stylesheet without needing to resort to non-semantic classes such as `.float-left`.

They can contain full CSS rules and pretty much everything that is allowed anywhere in a Sass document. They can even take arguments, just like functions. Needless to say, the possibilities are endless.

But I feel I must warn you against abusing the power of mixins. Again, the keyword here is *simplicity*. It might be tempting to build extremely powerful mixins with massive amounts of logic. It's called over-engineering and most developers suffer from it. Don't over think your code, and above all keep it simple. If a mixin ends up being longer than 20 lines or so, then it should be either split into smaller chunks or completely revised.






## Basics

That being said, mixins are extremely useful and you should be using some. The rule of thumb is that if you happen to spot a group of CSS properties that always appear together for a reason (i.e. not a coincidence), you can put them in a mixin instead. The [micro-clearfix hack from Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) deserves to be put in a (argumentless) mixin for instance.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper to clear inner floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Helper to clear inner floats
/// @author Nicolas Gallagher
/// @link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix
  &::after
    content: ''
    display: table
    clear: both
{% endhighlight %}
  </div>
</div>

Another valid example would be a mixin to size an element, defining both `width` and `height` at the same time. Not only would it make the code lighter to type, but also easier to read.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper to size an element
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Helper to size an element
/// @author Hugo Giraudel
/// @param {Length} $width
/// @param {Length} $height
=size($width, $height: $width)
  width: $width
  height: $height
{% endhighlight %}
  </div>
</div>



### Further reading

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)






## Arguments list

When dealing with an unknown number of arguments in a mixin, always use an `arglist` rather than a list. Think of `arglist` as the 8th hidden undocumented data type from Sass that is implicitly used when passing an arbitrary number of arguments to a mixin or a function whose signature contains `...`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin shadows($shadows...) {
  // type-of($shadows) == 'arglist'
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=shadows($shadows...)
  // type-of($shadows) == 'arglist'
  // ...
{% endhighlight %}
  </div>
</div>

Now, when building a mixin that accepts a handful of arguments (understand 3 or more), think twice before merging them out as a list or a map thinking it will be easier than passing them all one by one.

Sass is actually pretty clever with mixins and function declarations, so much so that you can actually pass a list or a map as an arglist to a function/mixin so that it gets parsed as a series of arguments.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin dummy($a, $b, $c) {
  // ...
}

// Yep
@include dummy(true, 42, 'kittens');

// Yep but nope
$params: true, 42, 'kittens';
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3));

// Yep
$params: true, 42, 'kittens';
@include dummy($params...);

// Yep
$params: (
  'c': 'kittens',
  'a': true,
  'b': 42
);
@include dummy($params...);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=dummy($a, $b, $c)
  // ...

// Yep
+dummy(true, 42, 'kittens')

// Yep but nope
$params: true, 42, 'kittens'
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3))

// Yep
$params: true, 42, 'kittens'
+dummy($params...)

// Yep
$params: ( 'c': 'kittens', 'a': true, 'b': 42, )
+dummy($params...)
{% endhighlight %}
  </div>
</div>



### Further reading

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)






## Mixins and vendor prefixes

It might be tempting to define custom mixins to handle vendor prefixes for unsupported or partially supported CSS properties. But we do not want to do this. First, if you can use [Autoprefixer](https://github.com/postcss/autoprefixer), use Autoprefixer. It will remove Sass code from your project, will always be up-to-date and will necessarily do a much better job than you at prefixing stuff.

Unfortunately, Autoprefixer is not always an option. If you use either [Bourbon](http://bourbon.io/) or [Compass](http://compass-style.org/), you may already know that they both provide a collection of mixins that handle vendor prefixes for you. Use those.

If you cannot use Autoprefixer and use neither Bourbon nor Compass, then and only then, you can have your own mixin for prefixing CSS properties. But. Please do not build a mixin per property, manually printing each vendor.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Nope
@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  transform: $value;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Nope
=transform($value)
  -webkit-transform: $value
  -moz-transform: $value
  transform: $value
{% endhighlight %}
  </div>
</div>

Do it the clever way.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Mixin helper to output vendor prefixes
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - Unprefixed CSS property
/// @param {*} $value - Raw CSS value
/// @param {List} $prefixes - List of prefixes to output
@mixin prefix($property, $value, $prefixes: ()) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }

  #{$property}: $value;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Mixin helper to output vendor prefixes
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - Unprefixed CSS property
/// @param {*} $value - Raw CSS value
/// @param {List} $prefixes - List of prefixes to output
=prefix($property, $value, $prefixes: ())
  @each $prefix in $prefixes
    -#{$prefix}-#{$property}: $value

  #{$property}: $value
{% endhighlight %}
  </div>
</div>

Then using this mixin should be very straightforward:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  @include prefix(transform, rotate(90deg), webkit ms);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  +prefix(transform, rotate(90deg), webkit ms)
{% endhighlight %}
  </div>
</div>

Please keep in mind this is a poor solution. For instance, it cannot deal with complex polyfills such as those required for Flexbox. In that sense, using Autoprefixer would be a far better option.



### Further reading

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)











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











# Loops

Because Sass provides complex data structures such as [lists](#lists) and [maps](#maps), it is no surprise that it also gives a way for authors to iterate over those entities.

However, the presence of loops usually implies moderately complex logic that probably does not belong to Sass. Before using a loop, make sure it makes sense and that it actually solves an issue.






## Each

The `@each` loop is definitely the most-used out of the three loops provided by Sass. It provides a clean API to iterate over a list or a map.

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

When iterating on a map, always use `$key` and `$value` as variable names to enforce consistency.

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






## For

The `@for` loop might be useful when combined with CSS' `:nth-*` pseudo-classes. Except for these scenarios, prefer an `@each` loop if you *have to* iterate over something.

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

Always use `$i` as a variable name to stick to the usual convention and unless you have a really good reason to, never use the `to` keyword: always use `through`. Many developers do not even know Sass offers this variation; using it might lead to confusion.

Also be sure to respect those guidelines to preserve readability:

* Always an empty new line before `@each`;
* Always an empty new line after the closing brace (`}`) unless the next line is a closing brace (`}`).






## While

The `@while` loop has absolutely no use case in a real Sass project, especially since there is no way to break a loop from the inside. **Do not use it**.











# Warnings and Errors

If there is a feature that is often overlooked by Sass developers, it is the ability to dynamically output warnings and errors. Indeed, Sass comes with three custom directives to print content in the standard output system (CLI, compiling app...):

* `@debug`;
* `@warn`;
* `@error`.

Let's put `@debug` aside since it is clearly intended to debug SassScript, which is not our point here. We are then left with `@warn` and `@error` which are noticeably identical except that one stops the compiler while the other does not. I'll let you guess which does what.

Now, there is a lot of room in a Sass project for warnings and errors. Basically any mixin or function expecting a specific type or argument could throw an error if something went wrong, or display a warning when doing an assumption.



### Further reading

* [An Introduction To Error Handling](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/HugoGiraudel/SassyLogger)






## Warnings

Take this function from [Sass-MQ](https://github.com/sass-mq/sass-mq) attempting to convert a `px` value to `em`, for instance:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size) {
  @if unitless($px) {
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.';
    @return mq-px2em($px + 0px);
  } @else if unit($px) == em {
    @return $px;
  }

  @return ($px / $base-font-size) * 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size)
  @if unitless($px)
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.'
    @return mq-px2em($px + 0px)
  @else if unit($px) == em
    @return $px

  @return ($px / $base-font-size) * 1em
{% endhighlight %}
  </div>
</div>

If the value happens to be unitless, the function assumes the value is meant to be expressed in pixels. At this point, an assumption may be risky so the user should be warned that the software did something that could be considered unexpected.






## Errors

Errors, unlike warnings, prevent the compiler from going any further. Basically, they stop the compilation and display a message in the output stream as well as the stack trace, which is handy for debugging. Because of this, errors should be thrown when there is no way for the program to keep running. When possible, try to work around the issue and display a warning instead.

As an example, let's say you build a getter function to access values from a specific map. You could throw an error if the requested key does not exist in the map.

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
/// @param {String} $layer - Layer's name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @if not map-has-key($z-indexes, $layer) {
    @error 'There is no layer named `#{$layer}` in $z-indexes. '
         + 'Layer should be one of #{map-keys($z-indexes)}.';
  }

  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer's name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer's name
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @if not map-has-key($z-indexes, $layer)
    @error 'There is no layer named `#{$layer}` in $z-indexes. '
         + 'Layer should be one of #{map-keys($z-indexes)}.'

  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>











# Tools

What's nice about a CSS preprocessor as popular as Sass is that it comes with a whole ecosystem of frameworks, plugins, libraries and tools. After 8 years of existence, we are getting closer and closer to the point where [everything that can be written in Sass has been written in Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

However my advice would to be to lower the number of dependencies to the strict minimum. Managing dependencies is some sort of hell you don't want to be part of. Plus, there is little to no need for external dependencies when it comes to Sass.






## Compass

[Compass](http://compass-style.org/) is the main Sass framework out there. Developed by [Chris Eppstein](https://twitter.com/chriseppstein), one of the two core designers of Sass, I don't see it dramatically losing in popularity for a while, if you want my opinion.

Still, I do not use Compass anymore, the main reason is that it slows Sass down a lot. Ruby Sass is quite slow in itself, so adding more Ruby and more Sass on top of it doesn't really help.

The thing is, we use very little from the whole framework. Compass is huge. Cross-browser compatibility mixins is just the tip of the iceberg. Math functions, image helpers, spriting... There is so much that can be done with this great piece of software.

Unfortunately, this is all sugar and there is no killer feature in there. An exception could be made of the sprite builder which is *really great*, but [Grunticon](https://github.com/filamentgroup/grunticon) and [Grumpicon](http://grumpicon.com/) do the job as well, and have the benefit of being pluggable in the build process.

Anyway, I do not forbid the use of Compass although I would not recommend it either, especially since it is not LibSass-compatible (even if efforts have been made in that direction). If you feel better using it, fair enough, but I don't think you'll get much from it at the end of the day.

<div class="note">
  <p>Ruby Sass is currently going under some outstanding optimizations that are specifically targeted at logic-heavy styles with many functions and mixins. They should dramatically improve performance to the point where Compass and other frameworks might not be slowing Sass anymore.</p>
</div>



### Further reading

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## Grid systems

Not using a grid system is not an option now that Responsive Web Design is all over the place. To make designs look consistent and solid across all sizes, we use some sort of grid to lay out the elements. To avoid having to code this grid work over and over again, some brilliant minds made theirs reusable.

Let me put this straight: I am not a big fan of grid systems. Of course I do see the potential, but I think most of them are completely overkill and are mostly used to draw red columns on a white background in nerdy designers' speaker decks. When is the last time you thought *thank-God-I-have-this-tool-to-build-this-2-5-3.1-π-grid*? That's right, never. Because in most cases, you just want the usual regular 12-columns grid, nothing fancy.

If you are using a CSS framework for your project like [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/), chances are high it includes a grid system already in which case I would recommend to use it to avoid having to deal with yet another dependency.

If you are not tied to a specific grid system, you will be pleased to know there are two top-notch Sass powered grid engines out there: [Susy](http://susy.oddbird.net/) and [Singularity](http://singularity.gs/). Both do much more than you will ever need so you can pick the one you prefer between these two and be sure all your edge cases&mdash;even the most nifty ones&mdash;will be covered. If you ask me, Susy has a slightly better community, but that's my opinion.

Or you can head over to something a bit more casual, like [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). All in all, the choice will not have much of an impact on your coding style, so this is pretty much up to you at this point.



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
# For SCSS-Lint v0.32.0

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
    style: include_zero

  MergeableSelector:
    enabled: false
    force_nesting: false

  NameFormat:
    enabled: true
    convention: hyphenated_lowercase
    allow_leading_underscore: true

  NestingDepth:
    enabled: true
    max_depth: 3

  PlaceholderInExtend:
    enabled: true

  PropertySortOrder:
    enabled: false
    ignore_unspecified: false

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
    style: single_quotes

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
  <p>Also, if you are on the hunt for a neat application that works with SCSS-lint and the like, the guys at <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) are working on <a href="https://houndci.com/">Hound</a>.</p>
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
* Quoted strings (single quotes) & URLs;
* No trailing 0, mandatory leading 0;
* Calculations wrapped in parentheses;
* No magic numbers;
* Colors expressed in keywords > HSL > RGB > hexadecimal;
* Lists separated with commas;
* No trailing comma in lists (since they are inlined);
* Trailing comma in maps;
* No selector nesting except for pseudo-classes and pseudo-elements;
* Hyphen-delimited naming;
* Extensive comments;
* SassDoc-powered API comments;
* Limited usage of `@extend`;
* Simple mixins;
* As few loops as possible, no `@while`;
* Reduced number of dependencies;
* Meaningful use of warnings and errors.

{% include donate.html %}
