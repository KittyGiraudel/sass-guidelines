
# سینتکس کد و ساختاردهی به آن

اگر از من بپرسید یک استایل گاید اولین کاری که باید بکنه چیه پاسخ این خواهد بود که یک استایل گاید قراره به ما نشون بده که کد ما به چه شکل نشون داده بشه.

وقتی چندین توسعه دهنده درگیر نوشتن کدهای CSS در یک پروژه مشترک میشن، تنها چیزی که قبل از اینکه هر کسی با سک وسیاق خودش کار رو شروع کنه مسئله زمانه. دستورالعمل های کدی که باعث میشن ثبات و نظم کدها زیاد بشن نه تنها با مسئله زمان مشکلی نداره بلکه در دراز مدت باعث میشه کدهاتون راحتر خونده و آپدیت بشن.

ما می خواهیم این قسمت رو از [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)) الهام بگیریم:

* 2تا فاصله در ابتدای خط کافیه، از تب استفاده نکنید؛
* در حالت ایده آل عرض خط کد کدتون از 80 حرف بیشتر نشه؛
* دستور های چند خطی CSS رو به درستی بنویسید؛
* از فضای سفید بین کدهاتون به اندازه کافی و لازم استفاده کنید.

{% include snippets/syntax/01/index.html %}

ما در این قسمت به چگونگی مدیریت فایل ها کاری نداریم . این موضوع مربوط به[بخش دیگری ](#architecture) است.

## دستور های متنی (strings)

بخواهیم یا نخواهیم دستور های متنی یا همون strings  ها  نقشه مهم و زیادی رو در محیط Sass و CSS ایفا می کنند. بیشر مقادیر CSS هم عدد هستند وهم متن (معمولا هم بدون کوتیشن) ، از این رو دست و پنچه نرم کردن با این قضیه در Sass یک مسئله مهم وحیاتی است.

### انکودینگ (Encoding)

برای اینکه با قضیه انکودینگ حروف به مشکل جدی بر نخوریم ، به شدت توصیه میشه از انکودینگ [UTF-8](http://en.wikipedia.org/wiki/UTF-8)  در [فایل اصلی](#main-file) با استفاده از دایرکتیو `@charset` استفاده کنید. و مطمئن بشید که اولین دستورتون توی فایل همین باشه و قبل از اون چیزی ننویسید.

{% include snippets/syntax/02/index.html %}

### کوتیشن

دستورهای متنی CSS احتیاجی ندارن که داخل کوتیشن نوشته بشن حتی دستورهایی که بینشون فاصله است. برای مثال دستور font-family نیازی نیست که که مقدارشو رو حتما داخل کوتیشن بزارید یا نه.

از همین رو Sass هم احتیاجی به این نداره که دستوراتش رو داخل کوتیشن بزارید و این رو بدونید که یک دستور string با کوتیشن با یک دستور string  بدون کوتیشن کاملا برابرند. (برای مثال دستور `'abc'` با دستور `abc` کاملا برابر است).

گفته میشه که زبان هایی که string ها  احتیاج ندارن که در کوتیشن نوشته بشن در اقلیت هستند ** از این رو بهتره که string ها در Sass داخل سینگل کوتیشن (`'`)  قرار بگیرند ** (سینگل کوتیشن راحتر در کیبردهای *qwerty* تایپ میشن ). علاوه بر اینکه با زبان های دیگر هم مانند جاوااسکریپت همگام می شوند و همچنین دلایل دیگه ای هم هست که باهم مرور میکنیم:

* اسم رنگ ها وقتی بدون کوتیشن نوشته بشن نقش رنگ رو ایفا میکنن که ممکنه مشکلات جدی رو به وجود بیاره؛
* بیشتر syntax highlighter های ویرایشگرها با string  های متنی به مشکل بر می خورند؛
* به خوانایی کلی کد کمک می کنند؛
* دلیل قانونی و معتبری وجود نداره که بگه string  ها رو بدون کوتیشن استفاده کنید؛

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>به عنوان یک اصل در CSS ، دستور <code>@charset</code> باید با دابل کوتیشن نوشته بشه تا کد CSS <a href="http://www.w3.org/TR/css3-syntax/#charset-rule">to معتبر</a> بشه. هر چند Sass حواسش به این قضیه هست و هنگام کمپایل به CSS برای <code>@charset</code> دابل کوتیشن در نظر میگیره.  پس با خیال راحت از سینگل کوتیشن استفاده کنید حتی برای دستور <code>@charset</code>.</p>
</div>

### Strings به عنوان مقادر CSS

یکسری از دستورات خاص CSS مثل `initial`  یا `sans-serif` تعریف شدن که بدون کوتیشن نوشته بشن. در واقع تعریف کردن `font-family: 'sans-serif'` با خطا روبرو خواهد شد چون سی اس اس دنبال یک عبارتی میگرده که بدون کوتیشن باشه. به همین خاطر چنین مواردی رو بدون کوتیشن می نویسیم.

{% include snippets/syntax/04/index.html %}

از این رو می تونیم فرقی قائل بشیم بین string هایی که قرار به عنوان مقادیر CSS (CSS identifiers) مثل موردی که در مثال قبل دیدیم و String  هایی که وقتی به عنوان دیتا تایپ در Sass استفاده میشن مثل دستور map.

ما اولی رو داخل کوتیشن نمیاریم بلکه دومی داخل یک سینگل کوتیشن میارم.

### String هایی که شامل کوتیشن باشن

اگر یک string شامل یک یا چندین سینگل کوتیشن باشه ، در اینجا باید string  مورد نظر در یک دابل کوتیشن قرار بگیره تا نوشته بعد از سینگل کوتیشن نادیده گرفته نشه.

{% include snippets/syntax/05/index.html %}

### URLs

URLs should be quoted as well, for the same reasons as above:
URL ها هم باید به همان دلایلی در بالا گفته شد در کوتیشن  نوشته بشن:

{% include snippets/syntax/06/index.html %}

###### برای مطالعه بیشتر

* [All You Ever Need to Know About Sass Interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/HugoGiraudel/SassyStrings)

## اعداد

در Sass اعداد شامل انواع محتوا مختلفی که از اعداد بدون واحد ساخته شده اند تا نشان دهنده طول ، مدت زمان و تکرارها و زوایا باشند. و همین طور محاسبات هم در همین واحد ها انجام می شود.

### عدد صفر

عدد صفر قبل از رو حتما بنویسید و عدد صفر بعد از اعشار را اصلا ننویسید.

{% include snippets/syntax/07/index.html %}

<div class="note">
  <p>با استفاده از جستجوگر ویرایشگر سابلایم و همینطور ویرایشگراهای دیگر براحتی می تونید عدد صفر رو به قبل از اعداد اعشاری اضافه کنید. به راحتی عبارت <code>\s+\.(\d+)</code> با جستجو کنید و با عبارت <code> 0.$1</code> جایگزین کنید. فاصله قبل از <code>0</code> رو فراموش نکنید.</p>
</div>

### واحد ها

وقتی با طول سرو کار داریم برای عدد `0` هیچگاه هیچ واحدی در نظر نمیگیریم.

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>حواستون باشه این حالت فقط مربوط به مواقعی میشه که با طول سروکار داریم. نمی توان برای خاصیت های زمان از صفر بدون واحد استفاده کنیم مثل دستور <code>transition-delay</code> . از نظر تئوری هم داشتن صفر بدون واحد برای مدت زمان نامعتبر و اشتباه است. بعضی از مرورگرها از این قضیه پشتیبانی میکنند و بعضی هم نمی کنند. خلاصه مطلب اینکه از صفر بدون واحد فقط برای مواقعی که می خواهیم طول را بیان کنیم استفاده می کنیم.</p>
</div>

بیشترین اشتباهی که هنگام کار کردن با Sass ممکن است پیش بیاید این است که واحدها یکسری string ی هستند که براحتی میتوان به اعداد چسباند. با اینکه به نظر درست می آیند اما واحد ها اینطور کار نمی کنند. واحد ها را عبارات جبری در نظر بگیرید برای مثال ضرب 5 اینچ با 5 اینچ می شود 25 اینچ مربع. همین منطق در Sass هم جریان دارد.

برای اضافه کردن یه واحد به یک عدد باید اون عدد رو در  *1 واحد* ضرب کنیم.

{% include snippets/syntax/09/index.html %}

برای اضافه کردن واحد می توان در *0 واحد* هم ضرب کنیم اما پیشنهاد من اینه که از روش قبلی استفاده کنید که اضافه کردن *0 واحد* یه مقدار گیج کننده می تونه باشه. و همینطور اگر زمانی بخواهیم عدد رو به یک واحد سازگار بهش عوض کنیم به مشکل بر خواهیم خورد.

{% include snippets/syntax/10/index.html %}

در آخر اینکه مهم اینکه شما چطور راحتید و با توجه به هدفتون روش تون رو انتخاب کنید. این نکته رو هم در نظر داشته باشید که اضافه کردن واحدها به شکل string روش خیلی مناسبی نیست.

برای حذف کردن واحد از یه مقدار باید اون عدد رو بر * یک قسم از اون واحد* تقسیم کنید.

{% include snippets/syntax/11/index.html %}

حاصل اضافه کردن یه واحد به شکل string به یک عدد ، string  خواهد بود و همینطور جدا کردن قسمت عددی از یک عدد همراه با واحد آن نیز یک عبارت string  به شما خواهد داد.

### محاسبات ریاضی

**اعمال اصلی ریاضی باید در داخل پرانتز نوشته بشن**.
این کار نه تنها باعث میشه خوانایی کدتون بالا بره بلکه Sass رو مجبور میکنه که ابتدا مقدار داخل پرانتز رو بدست بیاره و از بروز مشکلات احتمالی جلوگیری میکنه.

{% include snippets/syntax/12/index.html %}

### اعداد جادویی

"Magic number" is an [old school programming](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) term for *unnamed numerical constant*. Basically, it’s just a random number that happens to *just work*™ yet is not tied to any logical explanation.

Needless to say **magic numbers are a plague and should be avoided at all costs**. When you cannot manage to find a reasonable explanation for why a number works, add an extensive comment explaining how you got there and why you think it works. Admitting you don’t know why something works is still more helpful to the next developer than them having to figure out what’s going on from scratch.

{% include snippets/syntax/13/index.html %}

###### برای مطالعه بیشتر

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](http://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)

## رنگها

Colors occupy an important place in the CSS language. Naturally, Sass ends up being a valuable ally when it comes to manipulating colors, mostly by providing a handful of [powerful functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).

### ساختار رنگها

In order to make colors as simple as they can be, my advice would be to respect the following order of preference for color formats:

1. [HSL notation](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB notation](http://en.wikipedia.org/wiki/RGB_color_model);
1. Hexadecimal notation (lowercase and shortened).

CSS color keywords should not be used, unless for rapid prototyping. Indeed, they are English words and some of them do a pretty bad job at describing the color they represent, especially for non-native speakers. On top of that, keywords are not perfectly semantic; for instance `grey` is actually darker than `darkgrey`, and the confusion between `grey` and `gray` can lead to inconsistent usages of this color.

The HSL representation is not only the easiest one for the human brain to comprehend<sup>[citation needed]</sup>, it also makes it easy for stylesheet authors to tweak the color by adjusting the hue, saturation and lightness individually.

RGB still has the benefit of showing right away if the color is more of a blue, a green or a red. Therefore it might be better than HSL in some situations, especially when describing a pure red, green or blue. Although it does not make it easy to build a color from the three parts.

Lastly, hexadecimal is close to indecipherable for the human mind. Use it only as a last resort if you have to.

{% include snippets/syntax/14/index.html %}

When using HSL or RGB notation, always add a single space after a comma (`,`) and no space between parentheses (`(`, `)`) and content.

{% include snippets/syntax/15/index.html %}

### Colors and variables

When using a color more than once, store it in a variable with a meaningful name representing the color.

{% include snippets/syntax/16/index.html %}

Now you are free to use this variable wherever you want. However, if your usage is strongly tied to a theme, I would advise against using the variable as is. Instead, store it in another variable with a name explaining how it should be used.

{% include snippets/syntax/17/index.html %}

Doing this would prevent a theme change leading to something like `$sass-pink: blue`.

### Lightening and darkening colors

Both [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) and [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) functions manipulate the lightness of a color in the HSL space by adding to or subtracting from the lightness in the HSL space. Basically, they are nothing but aliases for the `$lightness` parameter of the [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) function.

The thing is, those functions often do not provide the expected result. On the other hand, the [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) function is a nice way to lighten or darken a color by mixing it with either `white` or `black`.

The benefit of using `mix` rather than one of the two aforementioned functions is that it will progressively go to black (or white) as you decrease the proportion of the color, whereas `darken` and `lighten` will quickly blow out a color all the way to black or white.

{% include images/color-functions.html %}

If you don’t want to write the `mix` function every time, you can create two easy-to-use functions `tint` and `shade` (which are also a part of [Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)) to do the same thing:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p>The <a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> function is designed to scale properties more fluidly by taking into account how high or low they already are. It should provide results that are as nice as <code>mix</code>’s but with a clearer calling convention. The scaling factor isn’t exactly the same though.</p>
</div>

###### Further reading

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don’t Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)

## Lists

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

###### Further reading

* [Understanding Sass lists](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/)
* [SassyLists](http://sassylists.com)

## Maps

Since Sass 3.3, stylesheet authors can define maps &mdash; the Sass term for associative arrays, hashes or even JavaScript objects. A map is a data structure mapping keys (that can be any data type, including maps although I wouldn’t recommend it) to values of any type.

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

###### Further reading

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Extra Map functions in Sass](http://www.sitepoint.com/extra-map-functions-sass/)
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

{% include snippets/syntax/24/index.html %}

Adding to those CSS-related guidelines, we want to pay attention to:

* local variables being declared before any declarations, then spaced from declarations by a new line;
* mixin calls with no `@content` coming before any declaration;
* nested selectors always coming after a new line;
* mixin calls with `@content` coming after any nested selector;
* no new line before a closing brace (`}`).

Illustration:

{% include snippets/syntax/25/index.html %}

###### Further reading

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)

## Declaration Sorting

I cannot think of many topics where opinions are as divided as they are regarding declaration sorting in CSS. Concretely, there are two factions here:

* sticking to the alphabetical order;
* ordering declarations by type (position, display, colors, font, miscellaneous...).

There are pros and cons for both ways. On one hand, alphabetical order is universal (at least for languages using the latin alphabet) so there is no argument about sorting one property before another. However, it seems extremely weird to me to see properties such as `bottom` and `top` not right next to each other. Why should animations appear before the display type? There are a lot of oddities with alphabetical ordering.

{% include snippets/syntax/26/index.html %}

On the other hand, ordering properties by type makes perfect sense. Every font-related declarations are gathered, `top` and `bottom` are reunited and reading a ruleset kind of feels like reading a short story. But unless you stick to some conventions like [Idiomatic CSS](https://github.com/necolas/idiomatic-css), there is a lot of room for interpretation in this way of doing things. Where would `white-space` go: font or display? Where does `overflow` belong exactly? What is the property order within a group (it could be alphabetical, oh the irony)?

{% include snippets/syntax/27/index.html %}

There is also another interesting subtree of type ordering called [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS), that seems to be quite popular as well. Basically, Concentric CSS relies on the box-model to define an order: starts outside, moves inward.

{% include snippets/syntax/28/index.html %}

I must say I cannot decide myself. A [recent poll on CSS-Tricks](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) determined that over 45% developers order their declarations by type against 14% alphabetically. Also, there are 39% that go full random, including myself.

{% include images/order-poll.html %}

Because of this, I will not impose a choice in this styleguide. Pick the one you prefer, as long as you are consistent throughout your stylesheets (i.e. not the *random* option).

<div class="note">
  <p>A <a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">recent study</a> shows that using <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a> (which uses <a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">type ordering</a>) for sorting CSS declarations ends up shortening the average file size under Gzip compression by 2.7%, compared to 1.3% when sorting alphabetically.</p>
</div>

###### Further reading

* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)

## Selector Nesting

One particular feature Sass provides that is being overly misused by many developers is *selector nesting*. Selector nesting offers a way for stylesheet authors to compute long selectors by nesting shorter selectors within each others.

### General rule

For instance, the following Sass nesting:

{% include snippets/syntax/29/index.html %}

... will generate this CSS:

{% include snippets/syntax/30/index.html %}

Along the same lines, since Sass 3.3 it is possible to use the current selector reference (`&`) to generate advanced selectors. For instance:

{% include snippets/syntax/31/index.html %}

... will generate this CSS:

{% include snippets/syntax/32/index.html %}

This method is often used along with [BEM naming conventions](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to generate `.block__element` and `.block--modifier` selectors based on the original selector (i.e. `.block` in this case).

<div class="note">
  <p>While it might be anecdotal, generating new selectors from the current selector reference (<code>&</code>) makes those selectors unsearchable in the codebase since they do not exist per se.</p>
</div>

The problem with selector nesting is that it ultimately makes code more difficult to read. One has to mentally compute the resulting selector out of the indentation levels; it is not always quite obvious what the CSS will end up being.

This statement becomes truer as selectors get longer and references to the current selector (`&`) more frequent. At some point, the risk of losing track and not being able to understand what’s going on anymore is so high that it is not worth it.

To prevent such a situation, we **avoid selector nesting as much as possible**. However, there are obviously a few exceptions to this rule.

### Exceptions

For starters, it is allowed and even recommended to nest pseudo-classes and pseudo-elements within the initial selector.

{% include snippets/syntax/33/index.html %}

Using selector nesting for pseudo-classes and pseudo-elements not only makes sense (because it deals with closely related selectors), it also helps keep everything about a component at the same place.

Also, when using component-agnostic state classes such as `.is-active`, it is perfectly fine to nest it under the component’s selector to keep things tidy.

{% include snippets/syntax/34/index.html %}

Last but not least, when styling an element because it happens to be contained within another specific element, it is also fine to use nesting to keep everything about the component at the same place.

{% include snippets/syntax/35/index.html %}

When working with unexperienced developers, a selector such as `.no-opacity &` might look a little weird. To prevent any confusion, you can build a very short mixin that transform this odd syntax into an explicit API.

{% include snippets/syntax/36/index.html %}

Rewriting our previous example, it would look like this:

{% include snippets/syntax/37/index.html %}

As with everything, the specifics are somewhat irrelevant, consistency is key. If you feel fully confident with selector nesting, then use selector nesting. Just make sure your whole team is okay with that.

###### Further reading

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)
