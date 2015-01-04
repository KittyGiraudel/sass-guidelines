# About the author

My name is [Hugo Giraudel][author_website], I am a front-end developer from France about to move in Germany. I have been writing Sass for over two years now and am the author of Sass related projects such as [SassDoc][sassdoc] and [Sass-Compatibility][sass_compatibility].

I have also written a couple of Sass libraries, mostly for the heck of it: [SassyJSON][sassyjson], [SassyLists][sassylists], [SassySort][sassysort], [SassyCast][sassycast], [SassyMatrix][sassymatrix], [SassyBitwise][sassybitwise], [SassyIteratorsGenerators][sassyiteratorsgenerators], [SassyLogger][sassylogger], [SassyStrings][sassystrings] and [SassyGradients][sassygradients].

<a href="https://twitter.com/hugogiraudel" target="_blank">Catch me on Twitter</a>

# Contribute

Sass Guidelines is a free project I maintain in my spare time. Needless to say it is quite a large amount of work to keep everything up-to-date, documented and relevant. Obviously knowing that you liked this styleguide is already much appreciated!

Now, if you feel like contributing, please know that tweeting about it, spreading the word of fixing a tiny typo by opening an issue or a pull-request on the [GitHub repository][repository] would be great! Also, I like beer if you wanna pay me back.

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

Sass is a preprocessor among others. Its most serious competitor has to be [LESS][Less], a NodeJS based preprocessor that has gotten quite popular thanks to the famous CSS framework [Bootstrap][bootstrap] using it. There is also Stylus which is kind of the nerdy unrestricting version of LESS where you can do pretty much whatever you want since it almost turns CSS into a programming language.

Now *why choosing Sass over LESS or another preprocessor* is still a valid question as of today. Not so long ago, we use to recommand Sass for Ruby-based projects because it was first made in Ruby and went well with Ruby on Rails. Now that LibSass has caught up (or so) on original Sass, this is no longer a relevant advice.

What I do like with Sass, it is its conservative aspect regarding CSS. Sass is not a preprocessor aiming at pleasing nerdy wannabe programmers like me by adding extra features on top of a language that is not intented to support any logical aspect. It is a software aiming at solving actual issues; helping writing CSS where CSS shows some weakness.

Preprocessors aside, we should also mention postprocessors, which have known quite a good exposure of the last few months especially thanks to [postCSS][postcss] and [CSSNext][cssnext]. Postprocessors are pretty much equivalent to preprocessors except they do not provide anything else than upcoming CSS syntax.

You can think of postprocessors as a polyfill for unsupported CSS features. For instance, you write variables as they are described in the [CSS specifications](http://dev.w3.org/csswg/css-variables/), you compile your stylesheets with a postprocessor, and every variable occurrence gets replaced with its value, as Sass would do.

The idea behind postprocessors is that once browsers support new features (e.g. CSS variables), the postprocessor does not compile them anymore and let browsers take over.

While providing tomorrow's syntax today has something of a noble idea, I have to say I still prefer using Sass for most tasks. Yet, there are some occasions where I believe postprocessors are more suited than Sass and the like, for instance CSS prefixing. But we'll get back to this.

### Further reading

* [LESS official website][less]
* [Stylus official website][stylus]
* [CSSNext official website][cssnext]
* [postCSS repository][postcss]

# Introduction

## The importance of a styleguide

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

At the end of the day, if there is one thing I'd like you to get from this whole styleguide, it is that Sass should be kept as simple as it can be.

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

We will not tackle the question of file architecture in this section. It is the object of [another chapter](#architecture).

## Anatomy of a ruleset

At this point, this is mostly rehearsing what everybody knows, but here is how a CSS ruleset should be written (at least, according to most guidelines including [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset) and those):

* related selectors on the same line; unrelated selectors on new lines;
* the opening brace (`{`) spaced from the last selector by a single space;
* each declaration on its own new line;
* a space after the colon (`:`);
* a trailing semi-colon (`;`) at the end of all declarations;
* the closing brace (`}`) on its own new line;
* a new line after the closing brace `}`.

Illustration:

```scss
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}
```

Adding to those CSS-related guidelines, we want to pay attention to:

* local variables being declared before any declaration, then spaced from declarations by a new line;
* mixin calls with no `@content` coming before any declaration;
* nested selectors always coming after a new line;
* mixin calls with `@content` coming after any nested selectors;
* no new line before a closing brace (`}`).

Illustration:

```scss
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
```

## Selector nesting

One particular feature Sass provides that is being overly misused by many developers is *selector nesting*. Selector nesting offers a way for stylesheets authors to compute long selectors by nesting shorter selectors within each others. For instance the following Sass nesting:

```scss
.foo {
  .bar {
    &:hover {
      content: baz;
    }
  }
}
```

... will generate this CSS:


```css
.foo .bar:hover {
  content: baz;
}
```

Along the same lines, since Sass 3.3 it is possible to use the current selector reference (`&`) to generate advanced selectors. For instance:

```scss
.foo {
  &-bar {
    content: "Howdy! I am `.foo-bar`.";
  }
}
```

This method is often used along with [BEM naming conventions](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to generated `.block__element` and `.block--modifier` selectors based on the original one (i.e. `.block` in this case).

*Note: while it might be anecdotal, generating new selectors from the current selector reference (`&`) makes those selectors unsearchable in the code base since they do not exist per se.*

The problem with selector nesting is it ultimately makes code more difficult to read. Because one has to mentally compute the resulting selector out of the indentation levels, it is not always quite obvious what the CSS will end up being.

This statement is getting even truer when selectors get longer and references to the current selector (`&`) more frequent. At some point, the risk to lose track and not being able to understand what's going anymore is so high that it is not worth it.

To prevent such a situation to happen, we avoid selector nesting except when it comes to pseudo-classes and pseudo-elements. These are the only cases where nesting is allowed, and even recommended.

```scss
.foo {
  content: "regular";

  &:hover {
    content: "hovered";
  }

  &::before {
    content: "pseudo-element";
  }
}
```

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

Regarding variables, functions and mixins, we stick to something very *CSSy*: hyphen-delimited, no camel-case, and above all meaningful.

```scss
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) { /* ... */ }

@function opposite-direction($direction) { /* ... */ }
```

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

```scss
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
```

Basically everything that is not obvious from the first glance should be commented. There is no such thing as too much documentation. Remember that you cannot *comment too much*, so get on fire and write comments for everything that is worth it.

When commenting a Sass specific section, use Sass inline comments instead of a C-style block. This makes the comment invisible in the output, even in expanded mode during development process.

```scss
// Add current module to the list of imported modules.
// `!global` flag is required so it actually updates the global variable.
$imported-modules: append($imported-modules, $module) !global;
```

## Documentation

Every variable, function, mixin and placeholder that is intended to be re-used all over the code base should be documented as part of the global API using [SassDoc][sassdoc].

SassDoc provides two different syntaxes for comments: either C-style or inline. For instance both of the following snippets are valid SassDoc comments:

```scss
/**
 * Vertical rhythm baseline used all over the code base.
 * @type Length
 **/
$vertical-rhythm-baseline: 1.5rem;
```

*Note: two stars (`/`) required before the closing slash (`/`).*

```scss
/// Vertical rhythm baseline used all over the code base.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;
```

*Note: three slashes (`/`) required.*

SassDoc has two major roles:

* forcing standardized comments using an annotation-based system for everything that is part of a public or private API;
* being able to generate an HTML version of the API documentation by using any of the SassDoc endpoint (CLI tool, Grunt, Gulp, Broccoli, Node...).

![SassDoc powered documentation](http://sassdoc.com/assets/images/preview-image.png)

Here is an example of mixin documented with SassDoc:

```scss
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
```

# Architecture

Architecturing a CSS project is probably one of the most difficult things you will have to do in a project's live. Keeping the architecture consistent and meaningful is even harder.

Fortunately, one of the main benefits of using a CSS preprocessor is having the ability to split the codebase over several files without impacting performance (like the `@import` CSS directive would do).

Thanks to Sass' overload of the `@import` directive, it is perfectly safe (and actually recommended) to use as many files as necessary in development, all compiled into a single stylesheet when going to production.

On top of that, I cannot stress enough the need of folders, even on small scale projects. At home, you don’t drop every sheet of paper into the same box. You use have folders; one for the house/flat, one for the bank, one for bills, and so on.

There is no reason to do otherwise when structuring a CSS project. Split the codebase into meaningful separated folders so it is easy to find stuff later when you have to come back at the code.

There are a lot of popular architectures for CSS projects: [OOCSS](http://oocss.org/), [SMACSS](https://smacss.com/), [Bootstrap][bootstrap]-like, [Foundation](http://foundation.zurb.com/)-like... As far as I am concerned, all of them are too complicated for me. I like to keep things simple. To keep them obvious.

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

![Sass by Tolkien](https://dl.dropboxusercontent.com/u/5465537/SASS-poster.jpg)

Ideally, we can come up with something like this:

```
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
```

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

*Note: The `layout/` folder might also be called `partials/`, depending on what you prefer.*

## Components folder

For smaller components, there is the `components/` folder. While `layout/` is *macro* (defining the global wireframe), `components/` is more *micro*. It can contain all kind of specific modules like a slider, a loader, a widget, or anything along those lines. There are usually a lot of files in `components/` since the whole site/application should be mostly composed of tiny modules.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

*Note: the `components/` folder might also be called `modules/`, depending on what you prefer.*

## Pages folder

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.

* `_home.scss`
* `_contact.scss`

*Note: depending on your deployment process, those files could be called on their own to avoid merging them with the others in the resulting stylesheet. It is really up to you.*

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

*Note: the `utils/` folder might also be called `helpers/`, `sass-helpers/` or `sass-utils/`, depending on what you prefer.*

## Vendors folder

And last but not least, most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to tell “Hey, this is not from me, not my code, not my responsibility”.

* `bootstrap.scss`
* `jquery-ui.scss`
* `select2.scss`

If you have to override a section of any vendor, I recommand you have a 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite. For instance, `vendors-extensions/_boostrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

### Further reading

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [FR] [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)

# Sass features

## Variables

## Mixin

## Extend

### Further reading

* [Why You Should Avoid `@extend`](http://www.sitepoint.com/avoid-sass-extend/)
* [When to use @⁠extend; when to use a mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
* [Don’t Over-@extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

## Warnings and errors

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
[cssnext]: https://cssnext.github.io
[stylus]: http://learnboost.github.io/stylus/
