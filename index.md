# About the author

My name is [Hugo Giraudel][author_website], I am a front-end developer from France about to move in Germany. I have been writing Sass for over two years now and am the author of Sass related projects such as [SassDoc][sassdoc] and [Sass-Compatibility][sass_compatibility].

I have also written a couple of Sass libraries, mostly for the heck of it: [SassyJSON][sassyjson], [SassyLists][sassylists], [SassySort][sassysort], [SassyCast][sassycast], [SassyMatrix][sassymatrix], [SassyBitwise][sassybitwise], [SassyIteratorsGenerators][sassyiteratorsgenerators], [SassyLogger][sassylogger], [SassyStrings][sassystrings] and [SassyGradients][sassygradients].

<a href="https://twitter.com/hugogiraudel" target="_blank">Catch me on Twitter</a>

# Contribute

Sass Guidelines is a free project I maintain in my spare time. Needless to say it is quite a large amount of work to keep everything up-to-date, documented and relevant. It takes me a lot of time and knowing that you liked it is already much appreciated!

Now, if you feel like contributing, please know that tweeting about it, spreading the word of fixing the single typo on the [GitHub repository][repository] would be great! Also, I like beer if you wanna pay me back.

# About Sass

> Sass is an extension of CSS that adds power and elegance to the basic language.

This is how Sass describes itself in its documentation. Sass' ultimate objective is to fix CSS flaws. CSS, as we all know, is not the best language in the world. While very simple to learn, it can quickly get quite messy, especially on large projects.

This is where Sass comes in, as a meta-language, to improve CSS syntax in order to provide extra features and handy tools. Meanwhile, Sass wants to be conservative regarding CSS language.

The point is not to turn CSS into a fully-featured programming language; Sass only wants to help where CSS fails. Because of this, getting started with Sass is not any harder than learning CSS: it simply adds a couple of extra features on top of it.

That being said, there are many ways to use these features. Some good, some bad, so unusual. Those guidelines are meant to give you a consistent and documented approach to writing Sass code.

### Further reading

* [Sass official website][sass]
* [Sass official documentation][sass_documentation]

## Ruby Sass or LibSass

[Sass][sass]' first draft goes back as far as late 2006, over 8 years ago. Needless to say it has come a long way since then. Initially developed in Ruby Sass, varied ports popped here and there. The most successful one, [LibSass][libsass] written in C is now close to be fully compatible with the original Ruby version.

In 2014, Ruby Sass and LibSass teams decided to wait for both versions to sync up before moving forward with Sass as a language. Since then, LibSass has been actively releasing versions to have feature-parity with its older brother.

Last inconsistencies are gathered and listed by myself under the [Sass-Compatibility][sass_compatibility] project. If you are aware of an incompatibility between the two versions that is not listed, please be kind enough to open an issue.

Now when it comes to choosing your compiler, it does not really matter. Actually, it is really up to your project. If it is a Ruby on Rails project, you better use Ruby Sass, which is perfectly suited for such a case.

On the other hand, LibSass is mostly dedicated to being wrapped. So if you want to use anything but Ruby, for instance NodeJS, [node-sass][node_sass] is all chosen. Also the major benefit of using LibSass is its speed: it is blazingly fast compared to Ruby Sass.

### Further reading

* [Sass-Compatibility][sass_compatibility]
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)

## Sass or SCSS

There are quite a lot of confusion regarding the semantic behind *Sass*. And for good reason: Sass means both the preprocessor and its syntax. Not very practical, is it?

You see, Sass initially described a syntax very close to Ruby. Actually, the initial idea was to write CSS in Ruby. Soon enough, Sass maintainers decided to close the gap between Sass and CSS by providing a CSS-friendly syntax called *SCSS* for *Sassy CSS*. The motto is: if it's valid CSS, it's valid SCSS.

Since then, Sass (the preprocessor) provides two different syntaxes: Sass, also known at *the indented syntax* and SCSS. Which one to use is pretty much up to you since both are strictly equivalent in features. It is only a matter of aesthetics at this point.

Sass Ruby-like syntax relies on indentation to get rid off braces, semi-colons and other punctuation symbols, leading to a leaner and shorter syntax. Meanwhile, SCSS is easier to use since it's mostly some tiny extra bits on top of CSS.

I, myself, prefer SCSS over Sass because it is closer to CSS and friendlier to most developers. Because of that, I will use SCSS rather than Sass all along those guidelines.

### Further reading

* [What's the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)

## Other preprocessors

Sass is a preprocessor among others. Its most serious competitor has to be [LESS](), a NodeJS based preprocessor that has gotten quite popular thanks to the famous CSS framework [Bootstrap][bootstrap] using it. There is also Stylus which is kind of the nerdy unrestricting version of LESS where you can do pretty much whatever you want since it almost turns CSS into a programming language.

Now *why choosing Sass over LESS or another preprocessor* is still a valid question as of today. Not so long ago, we use to recommand Sass to Ruby-based project because it was made in Ruby and went well with Ruby on Rails. Now that LibSass has caught up on original Sass, this is no longer a relevant advice.

What I do like with Sass, it is its conservative aspect regarding CSS. Sass is not a preprocessor aiming at pleasing nerdy wannabe programmers like me by adding extra features on top of a language that is not intented to support any logical aspect. It is a software aiming at solving actual issues; helping writing CSS where CSS shows some weakness.

Preprocessors aside, we should also mention postprocessors, which have known quite a good exposure of the last few months especially thanks to [postCSS][postcss] and [CSSNext][cssnext]. Postprocessors are pretty much equivalent to preprocessors except they do not provide anything else than upcoming CSS syntax.

You can think of postprocessors as a polyfill for unsupported CSS features. For instance, you write variables as they are described in the CSS specifications, you compile your stylesheets with a postprocessor, and every variable occurrence gets replaced with its value, as Sass would do.

The idea behind preprocessors is that once browsers support new features (e.g. CSS variables), the postprocessor does not compile them anymore and let browsers take over.

While providing tomorrow's syntax today has something of a noble idea, I have to say I still prefer using Sass for most tasks. Yet, there are some occasions where I believe postprocessors are more suited than Sass and the like, for instance CSS prefixing. But we'll get back to this.

### Further reading

* [LESS official website][less]
* [Stylus official website][stylus]
* [CSSNext official website][cssnext]
* [postCSS repository][postcss]

# Introduction

## The importance of a styleguide

Styleguides are not just a pleasing document to read picturing an ideal state for your code. It is a key document in a project's life, describing how and why code should be written.

It may look overkill for small projects, yet it helps a lot to keep your codebase clean, scalable and easily maintainable.

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

Believe me, I know what Sass is capable of. I am the guy who implemented [bitwise operators][sassybitwise], [iterators and generators][sassyiteratorsgenerators] and [a JSON parser][sassyjson] in Sass, so trust me I am well aware of what one can do with this preprocessor.

Meanwhile, CSS is a simple language. Sass being intended to write CSS, it should not get much more complex than regular CSS. The [KISS principle][kiss_principle] (Keep It Simple Stupid) is key here and takes over the [DRY principle][dry_principle] (Don't Repeat Yourself).

Sometimes, it's better repeating a bit to keep the code maintainable rather than building a top-heavy, unwieldy, unnecessarily complicated system that is completely unmaintainable because too complex.

# Syntax & formatting

If you ask me the very first thing a styleguide should do is describe the usual guidelines to write code. When several actors are involved in writing CSS on the same projects, it is only a matter of time before one of them start doing things his own way. Code guidelines are not only meant to prevent that, but also helps reading and updating the code by making it look consistent.

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
* the closing brace (`}`) on its own new line.

Illustration:

```scss
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}
```

## Nesting

One particular feature Sass provides that is being overly misused by many developers is *selector nesting*.

### Further reading

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more moduler CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)

## Maps

# Naming conventions

# Commenting

## Writing comments

## Documentation

# Architecture

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
[cssnext]: http://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[stylus]: http://learnboost.github.io/stylus/