
## About Sass

This is how [Sass](https://sass-lang.com) describes itself in its [documentation](https://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass is an extension of CSS that adds power and elegance to the basic language.

Sass’ ultimate objective is to fix CSS’ flaws. CSS, as we all know, is not the best language in the world <sup>[citation needed]</sup>. While very simple to learn, it can quickly get quite messy, especially on large projects.

This is where Sass comes in, as a meta-language, to improve CSS’ syntax in order to provide extra features and handy tools. Meanwhile, Sass wants to be conservative regarding the CSS language.

The point is not to turn CSS into a fully featured programming language; Sass only wants to help where CSS fails. Because of this, getting started with Sass is no harder than learning CSS: it simply adds a couple of extra features on top of it.

That being said, there are many ways to use these features. Some good, some bad, some unusual. These guidelines are meant to give you a consistent and documented approach to writing Sass code.

### Ruby Sass or LibSass

[Sass’ first commit](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) goes back as far as late 2006, more than 10 years ago. Needless to say it has come a long way since then. Initially developed in Ruby, varied ports popped up here and there. The most successful one, [LibSass](https://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114) (written in C/C++) is now close to being fully compatible with the original Ruby version.

In 2014, [Ruby Sass and LibSass teams decided to wait for both versions to sync up before moving forward](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Since then, LibSass has been actively releasing versions to have feature-parity with its older sibling. The last remaining inconsistencies are gathered and listed by myself under the [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility/) project. If you are aware of an incompatibility between the two versions that is not listed, please be kind enough to open an issue.

Coming back to choosing your compiler. Actually, it all depends on your project. If it is a Ruby on Rails project, you better use Ruby Sass, which is perfectly suited for such a case. Also, be aware that Ruby Sass will always be the reference implementation and will always lead LibSass in features. And if you are looking to [switch from Ruby Sass to LibSass](https://www.sitepoint.com/switching-ruby-sass-libsass/), this article is for you.

On non-Ruby projects that need a workflow integration, LibSass is probably a better idea since it is mostly dedicated to being wrapped. So if you want to use, let’s say Node.js, [node-sass](https://github.com/sass/node-sass) is all chosen.

### Sass or SCSS

There is quite a lot of confusion regarding the semantics of the name *Sass*, and for good reason: Sass means both the preprocessor and its own syntax. Not very convenient, is it?

You see, Sass initially described a syntax of which the defining characteristic was its indentation-sensitivity. Soon enough, Sass maintainers decided to close the gap between Sass and CSS by providing a CSS-friendly syntax called *SCSS* for *Sassy CSS*. The motto is: if it’s valid CSS, it’s valid SCSS.

Since then, Sass (the preprocessor) has been providing [two different syntaxes](https://www.sitepoint.com/whats-difference-sass-scss/): Sass (not all-caps, [please](http://sassnotsass.com)), also known as *the indented syntax*, and SCSS. Which one to use is pretty much up to you since both are strictly equivalent in features. It’s only a matter of aesthetics at this point.

Sass’ whitespace-sensitive syntax relies on indentation to get rid of braces, semi-colons and other punctuation symbols, leading to a leaner and shorter syntax. Meanwhile, SCSS is easier to learn since it’s mostly some tiny extra bits on top of CSS.

I, myself, prefer SCSS over Sass because it is closer to CSS and friendlier to most developers. Because of that, SCSS is the default syntax throughout these guidelines. You can switch to Sass indented syntax in the <button type="button" data-a11y-dialog-show="options-panel" class="link-like">side panel</button>.

### Other preprocessors

Sass is a preprocessor among others. Its most serious competitor has to be [Less](http://lesscss.org/), a Node.js based preprocessor that has gotten quite popular thanks to the famous CSS framework [Bootstrap](https://getbootstrap.com/) using it (until version 4). There is also [Stylus](https://stylus-lang.com/), a very permissive and flexible preprocessor however slightly harder to use and with a smaller community.

*Why choose Sass over any other preprocessor?* is still a valid question today. Not so long ago, we used to recommend Sass for Ruby-based projects because it was first made in Ruby and played well with Ruby on Rails. Now that LibSass has caught up (mostly) with original Sass, this is no longer relevant advice.

What I do like with Sass is its conservative approach to CSS. Sass’ design is based on strong principles: much of the design approach comes naturally out of the core teams’ beliefs that a) adding extra features has a complexity cost that needs to be justified by usefulness and, b) it should be easy to reason about what a given block of styles is doing by looking at that block alone. Also, Sass has a much sharper attention to detail than other preprocessors. As far as I can tell, the core designers care deeply about supporting every corner-case of CSS compatibility and making sure every general behavior is consistent. In other words, Sass is a software aimed at solving actual issues; helping to provide useful functionality to CSS where CSS falls short.

Preprocessors aside, we should also mention tools like [PostCSS](https://github.com/postcss/postcss) and [cssnext](https://cssnext.github.io/) which have received significant exposure these last few months.

PostCSS is commonly (and incorrectly) referred to as a “postprocessor”. The assumption, combined with the unfortunate name, is that PostCSS parses over CSS that has already been processed by a preprocessor. While it can work this way, it is not a requirement so PostCSS is actually just a “processor”.

It lets you access “tokens” of your stylesheets (like selectors, properties and values), process these with JavaScript to perform some operation of any kind and compile the results to CSS. For example, the popular prefixing library [Autoprefixer](https://github.com/postcss/autoprefixer) is built with PostCSS. It parses every rule to see if vendor prefixes are needed by referencing the browser support tool [CanIUse](https://caniuse.com) and then removes and adds vendor prefixes that are needed.

This is incredibly powerful and great for building libraries that work with any preprocessor (as well as vanilla CSS), but PostCSS isn’t particularly easy to use yet. You have to know a bit of JavaScript to build anything with it, and its API can be confusing at times. While Sass only provides a set of features that are useful to write CSS, PostCSS provides direct access to the CSS AST (*abstract syntax tree*) and JavaScript.

In short, Sass is somewhat easy and will solve most of your problems. On the other hand, PostCSS can be difficult to take in hand (if you aren’t great with JavaScript) but turns out to be incredibly powerful. There’s no reason why you can’t and shouldn’t use both. In fact, PostCSS offers an official SCSS parser for just this thing.

<div class="note">
  <p>Thanks to <a href="https://github.com/corysimmons">Cory Simmons</a> for his help and expertise on this section.</p>
</div>
