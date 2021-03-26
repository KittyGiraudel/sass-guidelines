
## Syntax & formatting

If you ask me, the very first thing a styleguide should do is describe the way we want our code to look.

When several developers are involved in writing CSS on the same project(s), it is only a matter of time before one of them starts doing things their own way. Code guidelines that promote consistency not only prevent this, but also help when it comes to reading and updating the code.

Roughly, we want (shamelessly inspired by [CSS Guidelines](https://cssguidelin.es/#syntax-and-formatting)):

* two (2) spaces indents, no tabs;
* ideally, 80-characters wide lines;
* properly written multi-line CSS rules;
* meaningful use of whitespace.

{% include snippets/syntax/01/index.html %}

### Strings

Believe it or not, strings play quite a large role in both CSS and Sass ecosystems. Most CSS values are either lengths or identifiers, so it actually is quite crucial to stick to some guidelines when dealing with strings in Sass.

#### Encoding

To avoid any potential issue with character encoding, it is highly recommended to force [UTF-8](https://en.wikipedia.org/wiki/UTF-8) encoding in the [main stylesheet](#main-file) using the `@charset` directive. Make sure it is the very first element of the stylesheet and there is no character of any kind before it.

{% include snippets/syntax/02/index.html %}

#### Quotes

CSS does not require strings to be quoted, not even those containing spaces. Take font-family names for instance: it doesn’t matter whether you wrap them in quotes for the CSS parser.

Because of this, Sass *also* does not require strings to be quoted. Even better (and *luckily*, you’ll concede), a quoted string is strictly equivalent to its unquoted twin (e.g. `'abc'` is strictly equal to `abc`).

That being said, languages that do not require strings to be quoted are definitely a minority and so, **strings should always be wrapped with single quotes** (`'`) in Sass (single being easier to type than double on *qwerty* keyboards). Besides consistency with other languages, including CSS’ cousin JavaScript, there are several reasons for this choice:

* color names are treated as colors when unquoted, which can lead to serious issues;
* most syntax highlighters will choke on unquoted strings;
* it helps general readability;
* there is no valid reason not to quote strings.

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>As per the CSS specifications, the <code>@charset</code> directive should be declared in double quotes <a href="https://www.w3.org/TR/css3-syntax/#charset-rule">to be considered valid</a>. However, Sass takes care of this when compiling to CSS so the authoring has no impact on the final result. You can safely stick to single quotes, even for <code>@charset</code>.</p>
</div>

#### Strings as CSS values

Specific CSS values (identifiers) such as `initial` or `sans-serif` require not to be quoted. Indeed, the declaration `font-family: 'sans-serif'` will silently fail because CSS is expecting an identifier, not a quoted string. Because of this, we do not quote those values.

{% include snippets/syntax/04/index.html %}

Hence, we can make a distinction between strings intended to be used as CSS values (CSS identifiers) like in the previous example, and strings when sticking to the Sass data type, for instance map keys.

We don't quote the former, but we do wrap the latter in single quotes.

#### Strings containing quotes

If a string contains one or several single quotes, one might consider wrapping the string with double quotes (`"`) instead, in order to avoid escaping characters within the string.

{% include snippets/syntax/05/index.html %}

#### URLs

URLs should be quoted as well, for the same reasons as above:

{% include snippets/syntax/06/index.html %}

### Numbers

In Sass, number is a data type including everything from unitless numbers to lengths, durations, frequencies, angles and so on. This allows calculations to be run on such measures.

#### Zeros

Numbers should display leading zeros before a decimal value less than one. Never display trailing zeros.

{% include snippets/syntax/07/index.html %}

<div class="note">
  <p>In Sublime Text and other editors providing a regular-expression powered search and replace, it is very easy to add a leading zero to (most if not all) float numbers. Simply replace <code>\s+\.(\d+)</code> with <code>\ 0.$1</code>. Do not forget the space before the <code>0</code> though.</p>
</div>

#### Units

When dealing with lengths, a `0` value should never ever have a unit.

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>Beware, this practice should be limited to lengths only. Having a unitless zero for a time property such as <code>transition-delay</code> is not allowed. Theoretically, if a unitless zero is specified for a duration, the declaration is deemed invalid and should be discarded. Not all browsers are that strict, but some are. Long story short: only omit the unit for lengths.</p>
</div>

The most common mistake I can think of regarding numbers in Sass, is thinking that units are just some strings that can be safely appended to a number. While that sounds true, it is certainly not how units work. Think of units as algebraic symbols. For instance, in the real world, multiplying 5 inches by 5 inches gives you 25 square inches. The same logic applies to Sass.

To add a unit to a number, you have to multiply this number by *1 unit*.

{% include snippets/syntax/09/index.html %}

Note that adding *0 member of that unit* also works, but I would rather recommend the aforementioned method since adding *0 unit* can be a bit confusing. Indeed, when trying to convert a number to another compatible unit, adding 0 will not do the trick. More on that [in this article](https://css-tricks.com/snippets/sass/correctly-adding-unit-number/).

{% include snippets/syntax/10/index.html %}

In the end, it really depends on what you are trying to achieve. Just keep in mind that adding the unit as a string is not a good way to proceed.

To remove the unit of a value, you have to divide it by *one unit of its kind*.

{% include snippets/syntax/11/index.html %}

Appending a unit as a string to a number results in a string, preventing any additional operation on the value. Slicing the numeric part of a number with a unit also results in a string. This is not what you want. [Use lengths, not strings](https://kittygiraudel.com/2013/09/03/use-lengths-not-strings/).

#### Calculations

**Top-level numeric calculations should always be wrapped in parentheses**. Not only does this requirement dramatically improve readability, it also prevents some edge cases by forcing Sass to evaluate the contents of the parentheses.

{% include snippets/syntax/12/index.html %}

#### Magic numbers

"Magic number" is an [old school programming](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) term for *unnamed numerical constant*. Basically, it’s just a random number that happens to *just work*™ yet is not tied to any logical explanation.

Needless to say **magic numbers are a plague and should be avoided at all costs**. When you cannot manage to find a reasonable explanation for why a number works, add an extensive comment explaining how you got there and why you think it works. Admitting you don’t know why something works is still more helpful to the next developer than them having to figure out what’s going on from scratch.

{% include snippets/syntax/13/index.html %}

On topic, CSS-Tricks has a [terrific article](https://css-tricks.com/magic-numbers-in-css/) about magic numbers in CSS that I encourage you to read.

### Colors

Colors occupy an important place in the CSS language. Naturally, Sass ends up being a valuable ally when it comes to manipulating colors, mostly by providing a handful of [powerful functions](https://sass-lang.com/documentation/Sass/Script/Functions.html).

Sass is so useful when it comes to manipulating colors that articles have flourished all over the internet about this very topic. May I recommend a few reads:

* [How to Programmatically Go From One Color to Another](https://kittygiraudel.com/2014/01/30/programmatically-go-from-one-color-to-another-with-sass/)
* [Using Sass to Build Color Palettes](https://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](https://www.sitepoint.com/dealing-color-schemes-sass/)

#### Color formats

In order to make colors as simple as they can be, my advice would be to respect the following order of preference for color formats:

1. [HSL notation](https://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB notation](https://en.wikipedia.org/wiki/RGB_color_model);
1. Hexadecimal notation (lowercase and shortened).

CSS color keywords should not be used, unless for rapid prototyping. Indeed, they are English words and some of them do a pretty bad job at describing the color they represent, especially for non-native speakers. On top of that, keywords are not perfectly semantic; for instance `grey` is actually darker than `darkgrey`, and the confusion between `grey` and `gray` can lead to inconsistent usages of this color.

The HSL representation is not only the easiest one for the human brain to comprehend<sup>[citation needed]</sup>, it also makes it easy for stylesheet authors to tweak the color by adjusting the hue, saturation and lightness individually.

RGB still has the benefit of showing right away if the color is more of a blue, a green or a red. Therefore it might be better than HSL in some situations, especially when describing a pure red, green or blue. Although it does not make it easy to build a color from the three parts.

Lastly, hexadecimal is close to indecipherable for the human mind. Use it only as a last resort if you have to.

{% include snippets/syntax/14/index.html %}

When using HSL or RGB notation, always add a single space after a comma (`,`) and no space between parentheses (`(`, `)`) and content.

{% include snippets/syntax/15/index.html %}

#### Colors and variables

When using a color more than once, store it in a variable with a meaningful name representing the color.

{% include snippets/syntax/16/index.html %}

Now you are free to use this variable wherever you want. However, if your usage is strongly tied to a theme, I would advise against using the variable as is. Instead, store it in another variable with a name explaining how it should be used.

{% include snippets/syntax/17/index.html %}

Doing this would prevent a theme change leading to something like `$sass-pink: blue`. [This article](https://davidwalsh.name/sass-color-variables-dont-suck) does a good job at explaining why thinking your color variables through is important.

#### Lightening and darkening colors

Both [`lighten`](https://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) and [`darken`](https://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) functions manipulate the lightness of a color in the HSL space by adding to or subtracting from the lightness in the HSL space. Basically, they are nothing but aliases for the `$lightness` parameter of the [`adjust-color`](https://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) function.

The thing is, those functions often do not provide the expected result. On the other hand, the [`mix`](https://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) function is a nice way to lighten or darken a color by mixing it with either `white` or `black`.

The benefit of using `mix` rather than one of the two aforementioned functions is that it will progressively go to black (or white) as you decrease the proportion of the color, whereas `darken` and `lighten` will quickly blow out a color all the way to black or white.

{% include images/color-functions.html %}

If you don’t want to write the `mix` function every time, you can create two easy-to-use functions `tint` and `shade` (which are also a part of [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) to do the same thing:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>The <a href="https://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> function is designed to scale properties more fluidly by taking into account how high or low they already are. It should provide results that are as nice as <code>mix</code>’s but with a clearer calling convention. The scaling factor isn’t exactly the same though.</p>
</div>

### Lists

Lists are the Sass equivalent of arrays. A list is a flat data structure (unlike [maps](#maps)) intended to store values of any type (including lists, leading to nested lists).

Lists should respect the following guidelines:

* either inlined or multilines;
* necessarily on multilines if too long to fit on an 80-character line;
* unless used as is for CSS purposes, always comma separated;
* always wrapped in parenthesis;
* trailing comma if multilines, not if inlined.

{% include snippets/syntax/19/index.html %}

When adding new items to a list, always use the provided API. Do not attempt to add new items manually.

{% include snippets/syntax/20/index.html %}

In [this article](https://kittygiraudel.com/2013/07/15/understanding-sass-lists/), I go through a lot of tricks and tips to handle and manipulate lists correctly in Sass.

### Maps

With Sass, stylesheet authors can define maps — the Sass term for associative arrays, hashes or even JavaScript objects. A map is a data structure associating keys to values. Both keys and values can be of any data type, including maps although I would not recommend using complex data types as map keys, if only for the sake of sanity.

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

{% include snippets/syntax/21/index.html %}

Write-ups about Sass maps are many given how longed-for this feature was. Here are 3 that I recommend: [Using Sass Maps](https://www.sitepoint.com/using-sass-maps/), [Extra Map functions in Sass](https://www.sitepoint.com/extra-map-functions-sass/), [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/).

### CSS Ruleset

At this point, this is mostly revising what everybody knows, but here is how a CSS ruleset should be written (at least, according to most guidelines, including [CSS Guidelines](https://cssguidelin.es/#anatomy-of-a-ruleset)):

* related selectors on the same line; unrelated selectors on new lines;
* the opening brace (`{`) spaced from the last selector by a single space;
* each declaration on its own new line;
* a space after the colon (`:`);
* a trailing semi-colon (`;`) at the end of all declarations;
* the closing brace (`}`) on its own new line;
* a new line after the closing brace `}`.

Illustration:

{% include snippets/syntax/24/index.html %}

Adding to those CSS-related guidelines, we want to pay attention to:

* local variables being declared before any declarations, then spaced from declarations by a new line;
* mixin calls with no `@content` coming before any declaration;
* nested selectors always coming after a new line;
* mixin calls with `@content` coming after any nested selector;
* no new line before a closing brace (`}`).

Illustration:

{% include snippets/syntax/25/index.html %}

### Declaration Sorting

I cannot think of many topics where opinions are as divided as they are regarding declaration sorting in CSS. Concretely, there are two factions here:

* sticking to the alphabetical order;
* ordering declarations by type (position, display, colors, font, miscellaneous…).

There are pros and cons for both ways. On one hand, alphabetical order is universal (at least for languages using the latin alphabet) so there is no argument about sorting one property before another. However, it seems extremely weird to me to see properties such as `bottom` and `top` not right next to each other. Why should animations appear before the display type? There are a lot of oddities with alphabetical ordering.

{% include snippets/syntax/26/index.html %}

On the other hand, ordering properties by type makes perfect sense. Every font-related declarations are gathered, `top` and `bottom` are reunited and reading a ruleset kind of feels like reading a short story. But unless you stick to some conventions like [Idiomatic CSS](https://github.com/necolas/idiomatic-css), there is a lot of room for interpretation in this way of doing things. Where would `white-space` go: font or display? Where does `overflow` belong exactly? What is the property order within a group (it could be alphabetical, oh the irony)?

{% include snippets/syntax/27/index.html %}

There is also another interesting subtree of type ordering called [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), that seems to be quite popular as well. Basically, Concentric CSS relies on the box-model to define an order: starts outside, moves inward.

{% include snippets/syntax/28/index.html %}

I must say I cannot decide myself. A [recent poll on CSS-Tricks](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) determined that over 45% developers order their declarations by type against 14% alphabetically. Also, there are 39% that go full random, including myself.

{% include images/order-poll.html %}

Because of this, I will not impose a choice in this styleguide. Pick the one you prefer, as long as you are consistent throughout your stylesheets (i.e. not the *random* option).

<div class="note">
  <p>A <a href="https://web.archive.org/web/20190618180712/http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">recent study</a> shows that using <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (which uses <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">type ordering</a>) for sorting CSS declarations ends up shortening the average file size under Gzip compression by 2.7%, compared to 1.3% when sorting alphabetically.</p>
</div>

### Selector Nesting

One particular feature Sass provides that is being overly misused by many developers is *selector nesting*. Selector nesting offers a way for stylesheet authors to compute long selectors by nesting shorter selectors within each others.

#### General rule

For instance, the following Sass nesting:

{% include snippets/syntax/29/index.html %}

… will generate this CSS:

{% include snippets/syntax/30/index.html %}

Along the same lines, since Sass 3.3 it is possible to use the current selector reference (`&`) to generate advanced selectors. For instance:

{% include snippets/syntax/31/index.html %}

… will generate this CSS:

{% include snippets/syntax/32/index.html %}

This method is often used along with [BEM naming conventions](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to generate `.block__element` and `.block--modifier` selectors based on the original selector (i.e. `.block` in this case).

<div class="note">
  <p>While it might be anecdotal, generating new selectors from the current selector reference (<code>&</code>) makes those selectors unsearchable in the codebase since they do not exist per se.</p>
</div>

The problem with selector nesting is that it ultimately makes code more difficult to read. One has to mentally compute the resulting selector out of the indentation levels; it is not always quite obvious what the CSS will end up being.

This statement becomes truer as selectors get longer and references to the current selector (`&`) more frequent. At some point, the risk of losing track and not being able to understand what’s going on anymore is so high that it is not worth it.

To prevent such situations, we talked a lot about [the Inception rule](https://thesassway.herokuapp.com/beginner/the-inception-rule) a few years back. It advised against nesting more than 3 levels deep, as a reference to the movie Inception from Christopher Nolan. I would be more drastic and recommend to **avoid selector nesting as much as possible**. 

While there are obviously a few exceptions to this rule as we’ll see in the next section, this opinion seems to be quite popular. You can read about it more in details in [Beware of Selector Nesting](https://www.sitepoint.com/beware-selector-nesting-sass/) and [Avoid nested selectors for more modular CSS](https://thesassway.herokuapp.com/intermediate/avoid-nested-selectors-for-more-modular-css).

#### Exceptions

For starters, it is allowed and even recommended to nest pseudo-classes and pseudo-elements within the initial selector.

{% include snippets/syntax/33/index.html %}

Using selector nesting for pseudo-classes and pseudo-elements not only makes sense (because it deals with closely related selectors), it also helps keep everything about a component at the same place.

Also, when using component-agnostic state classes such as `.is-active`, it is perfectly fine to nest it under the component’s selector to keep things tidy.

{% include snippets/syntax/34/index.html %}

Last but not least, when styling an element because it happens to be contained within another specific element, it is also fine to use nesting to keep everything about the component at the same place.

{% include snippets/syntax/35/index.html %}

As with everything, the specifics are somewhat irrelevant, consistency is key. If you feel fully confident with selector nesting, then use selector nesting. Just make sure your whole team is okay with that.
