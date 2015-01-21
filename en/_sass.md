
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
