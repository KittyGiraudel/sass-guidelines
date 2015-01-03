# About the author

My name is [Hugo Giraudel](http://hugogiraudel.com), I am a front-end developer from France about to move in Germany. I have been writing Sass for over two years now and am the author of Sass related projects such as [SassDoc](http://sassdoc.com) and [Sass-Compatibility](http://sass-compatibility.github.com).

I have also written a couple of Sass libraries, mostly for the heck of it: [SassyJSON](https://github.com/HugoGiraudel/SassyJSON), [SassyLists](https://github.com/at-import/SassyLists), [SassySort](https://github.com/HugoGiraudel/SassySort), [SassyCast](https://github.com/HugoGiraudel/SassyCast), [SassyMatrix](https://github.com/HugoGiraudel/SassyMatrix), [SassyBitwise](https://github.com/HugoGiraudel/SassyBitwise), [SassyIteratorsGenerators](https://github.com/HugoGiraudel/SassyIteratorsGenerators), [SassyLogger](https://github.com/HugoGiraudel/SassyLogger), [SassyStrings](https://github.com/HugoGiraudel/SassyStrings) and [SassyGradients](https://github.com/HugoGiraudel/SassyGradients).

# About Sass

> Sass is an extension of CSS that adds power and elegance to the basic language.

This is how Sass describes itself in its documentation. Sass' ultimate objective is to fix CSS flaws. CSS, as we all know, is not the best language in the world. While very simple to learn, it can quickly get quite messy, especially on large projects.

This is where Sass comes in, as a meta-language, to improve CSS syntax in order to provide extra features and handy tools. Meanwhile, Sass wants to be conservative regarding CSS language.

The point is not to turn CSS into a fully-featured programming language; Sass only wants to help where CSS fails. Because of this, getting started with Sass is not any harder than learning CSS: it simply adds a couple of extra features on top of it.

That being said, there are many ways to use these features. Some good, some bad, so unusual. Those guidelines are meant to give you a consistent and documented approach to writing Sass code.

## Ruby Sass or LibSass

[Sass](http://sass-lang.com)' first draft goes back as far as late 2006, over 8 years ago. Needless to say it has come a long way since then. Initially developed in Ruby Sass, varied ports popped here and there. The most successful one, [LibSass](https://github.com/sass/libsass/) written in C is now close to be fully compatible with the original Ruby version.

In 2014, Ruby Sass and LibSass teams decided to wait for both versions to sync up before moving forward with Sass as a language. Since then, LibSass has been actively releasing versions to have feature-parity with its older brother.

Last inconsistencies are gathered and listed by myself under the [Sass-Compatibility](http://sass-compatibility.github.io) project. If you are aware of an incompatibility between the two versions that is not listed, please be kind enough to open an issue.

Now when it comes to choosing your compiler, it does not really matter. Actually, it is really up to your project. If it is a Ruby on Rails project, you better use Ruby Sass, which is perfectly suited for such a case.

On the other hand, LibSass is mostly dedicated to being wrapped. So if you want to use anything but Ruby, for instance NodeJS, [node-sass](https://github.com/sass/node-sass) is all chosen. Also the major benefit of using LibSass is its speed: it is blazingly fast compared to Ruby Sass.

## Sass or SCSS

There are quite a lot of confusion regarding the semantic behind *Sass*. And for good reason: Sass means both the preprocessor and its syntax. Not very practical, is it?

You see, Sass initially described a syntax very close to Ruby. Actually, the initial idea was to write CSS in Ruby. Soon enough, Sass maintainers decided to close the gap between Sass and CSS by providing a CSS-friendly syntax called *SCSS* for *Sassy CSS*. The motto is: if it's valid CSS, it's valid SCSS.

Since then, Sass (the preprocessor) provides two different syntaxes: Sass, also known at *the indented syntax* and SCSS. Which one to use is pretty much up to you since both are strictly equivalent in features. It is only a matter of aesthetics at this point.

Sass Ruby-like syntax relies on indentation to get rid off braces, semi-colons and other punctuation symbols, leading to a leaner and shorter syntax. Meanwhile, SCSS is easier to use since it's mostly some tiny extra bits on top of CSS.

I, myself, prefer SCSS over Sass because it is closer to CSS and friendlier to most developers. Because of that, I will use SCSS rather than Sass all along those guidelines.

## Other preprocessors

Sass is a preprocessor among others. Its most serious competitor has to be [LESS](), a NodeJS based preprocessor that has gotten quite popular thanks to the famous CSS framework [Bootstrap](http://getbootstrap.com/) using it. There is also Stylus which is kind of the nerdy unrestricting version of LESS where you can do pretty much whatever you want since it almost turns CSS into a programming language.

Now *why choosing Sass over LESS or another preprocessor* is still a valid question as of today. Not so long ago, we use to recommand Sass to Ruby-based project because it was made in Ruby and went well with Ruby on Rails. Now that LibSass has caught up on original Sass, this is no longer a relevant advice.

What I do like with Sass, it is its conservative aspect regarding CSS. Sass is not a preprocessor aiming at pleasing nerdy wannabe programmers like me by adding extra features on top of a language that is not intented to support any logical aspect. It is a software aiming at solving actual issues; helping writing CSS where CSS shows some weakness.

# Introduction

## The importance of a styleguide

Styleguides are not just a pleasing document to read picturing an ideal state for your code. It is a key document in a project's life, describing how and why code should be written.

It may look overkill for small projects, yet it helps a lot to keep your codebase clean, scalable and easily maintainable.

Needless to say, the more actors involved on a project, the more code guidelines are needed. Along the same lines, the bigger the project, the more a styleguide is a must.

[Harry Roberts](http://csswizardry.com) states it very well in [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

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

