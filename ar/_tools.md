
# Tools

What’s nice about a CSS preprocessor as popular as Sass is that it comes with a whole ecosystem of frameworks, plugins, libraries and tools. After 8 years of existence, we are getting closer and closer to the point where [everything that can be written in Sass has been written in Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

However my advice would to be to lower the number of dependencies to the strict minimum. Managing dependencies is some sort of hell you don’t want to be part of. Plus, there is little to no need for external dependencies when it comes to Sass.

# الأدوات

الجميل حول معالج CSS مشهور مثل SASS أنه يأتي بنظام كامل من أطر العمل، الإضافات، المكتبات والأدوات. بعد 8 سنوان من وجودها، نحن نقترب أكثر وأكثر للنقطة التي يكون فيها أي شيء مكتوب في SASS تم كتابته في SASS.

على أية حال نصيحتي أن نستخدم اقل عدد ممكن من الاضافات. ادارة الاضافات ليست بالمهمة السهلة التي تريد أن توقع نفسك فيها. بالإضافة لذلك لن تحتاج لإستخدام الاضافات عندما تقوم بإستخدام SASS.

## Compass

[Compass](http://compass-style.org/) is the main Sass framework out there. Developed by [Chris Eppstein](https://twitter.com/chriseppstein), one of the two core designers of Sass, I don’t see it dramatically losing in popularity for a while, if you want my opinion.

## Compass

هي إطار العمل الرئيسي المتوفر ل SASS. تم تطويرها بواسطة كريس إبستين، واحد من المصممين الإساسيين لـ SASS. أنا لا أرى أنها تنقص من حيث الشهرة وناحية الاستخدام هذه الفترة، إذا كنت تحتاج رأيي.

Still, I do not use Compass anymore, the main reason is that it slows Sass down a lot. Ruby Sass is quite slow in itself, so adding more Ruby and more Sass on top of it doesn’t really help.

أيضاً، أنا لا استخدام Compass أبداً، السبب في أنها تسبب في بطىء SASS بشكل كبير. Ruby Sass هي أصلا بطيئة قليلة من الأصل، لذلك إضافتها لن تكون عاملاً مساعداً.

The thing is, we use very little from the whole framework. Compass is huge. Cross-browser compatibility mixins is just the tip of the iceberg. Math functions, image helpers, spriting... There is so much that can be done with this great piece of software.

الفكرة أننا نقوم بإستخدام جزء قليل جدا من الإطار كامل. Compass كبيرة. الدوال المتوافق مع المتصفحات كافة هي إضافة بسيطة من مجموع الإضافة الموجود. يوجد هناك دوال رياضية، دوال للصور وعمل تجميع لها... يوجد الكثير الذي يمكن عمله بهذه الأداة العظيمة.

Unfortunately, this is all sugar and there is no killer feature in there. An exception could be made of the sprite builder which is *really great*, but [Grunticon](https://github.com/filamentgroup/grunticon) and [Grumpicon](http://grumpicon.com/) do the job as well, and have the benefit of being pluggable in the build process.

لسوء الحظ، أغلب هذا الميزات هي كالسكر فقط ولا يوجد تلك الميزات التي فعلاً تكون مميزة للغاية. إستثناء واحد هو فقط أداة بناء الصور والتي هي *فعلا عظيمة*، لكن [Grunticon](https://github.com/filamentgroup/grunticon) و [Grumpicon](http://grumpicon.com/) يقوموا بنفس الوظيفة كذلك، ولديهم الميزة الاضافية في أن يتم اضافتهم في عملية البناء.

Anyway, I do not forbid the use of Compass although I would not recommend it either, especially since it is not LibSass-compatible (even if efforts have been made in that direction). If you feel better using it, fair enough, but I don’t think you’ll get much from it at the end of the day.

على أية حال، أنا لا اقصد التحذير من إستخدام Compass وايضاً لا أفضل ان يتم استخدامها، خصوصاً أنها ليست مثل توافقية LibSass (حتى لو تم بذل الجهود في هذا الاتجاه). إذا كنت تشعر أفضل اثناء استخدامها، لا مشكلة، لكنني لا أظن انك سوف تلقى الكثير من فوائدها في نهاية يوم عملك.

<div class="note">
  <p>Ruby Sass is currently going under some outstanding optimizations that are specifically targeted at logic-heavy styles with many functions and mixins. They should dramatically improve performance to the point where Compass and other frameworks might not be slowing Sass anymore.</p>
</div>

<div class="note">
  <p>حالياً يتم عمل تحسين في أداء Ruby SASS والتي موجهة خصوصاً على الأنماط المنطقية مع الكثير من الدوال. يجب عليهم أن يقوموا بتطوير الأداء حتى يصلوا للدرجة التي Compass وأطر العمل الأخرى لن تقوم بعمل بطيء لـ SASS بداً.</p>
</div>

###### Further reading

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Why I don't use Compass anymore](http://www.sitepoint.com/dont-use-compass-anymore/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)

###### إضافات للإستزادة

* [Compass](http://compass-style.org/)
* [أطر عمل SASS: Compass أو Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [لماذا لا استخدام Compass أبداً](http://www.sitepoint.com/dont-use-compass-anymore/)
* [هل استخدام Compaass مع SASS هو ممثال لإستخدام jQuery مع جافاسكربت؟](http://www.sitepoint.com/compass-sass-jquery-javascript/)

## Grid systems

Not using a grid system is not an option now that Responsive Web Design is all over the place. To make designs look consistent and solid across all sizes, we use some sort of grid to lay out the elements. To avoid having to code this grid work over and over again, some brilliant minds made theirs reusable.

Let me put this straight: I am not a big fan of grid systems. Of course I do see the potential, but I think most of them are completely overkill and are mostly used to draw red columns on a white background in nerdy designers’ speaker decks. When is the last time you thought *thank-God-I-have-this-tool-to-build-this-2-5-3.1-π-grid*? That’s right, never. Because in most cases, you just want the usual regular 12-columns grid, nothing fancy.

If you are using a CSS framework for your project like [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/), chances are high it includes a grid system already in which case I would recommend to use it to avoid having to deal with yet another dependency.

If you are not tied to a specific grid system, you will be pleased to know there are two top-notch Sass powered grid engines out there: [Susy](http://susy.oddbird.net/) and [Singularity](http://singularity.gs/). Both do much more than you will ever need so you can pick the one you prefer between these two and be sure all your edge cases&mdash;even the most nifty ones&mdash;will be covered. If you ask me, Susy has a slightly better community, but that’s my opinion.

Or you can head over to something a bit more casual, like [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). All in all, the choice will not have much of an impact on your coding style, so this is pretty much up to you at this point.

## النظام الشبكي

عدم إستخدام نظام شبكي أصبح خيار غير ممكن مع نمو وزيادة استخدام تصميم الويب التجاوبي. لعمل تصاميم متناسقة وتظهر بشكل جيد بمختلف الاحجام، يجب ان يتم استخدام شبكة لتنظيم عرض العناصر. لتجنب كتابة الكود الخاص بهذه الشبكة مرة تلو والاخرى، بعض الاشخاص الأذكياء جعلواً الانظمة الخاصة بهم قابلة لإعادة الاستخدام من قبل الغير.

دعوني أكون صريحاً: لست ممن يفضلون استخدام الانظمة الشبكةي. بالتأكيد أنا ارى الفائدة منها، لكنني أظن بأن أغلب الأنظمة هي معقدة وتستخدم غالباً لرسم أعمدة حمراء على خلفية بيضاء كما يفعل المصممون الذين يعملون كثيراً. متى كانت اخرى مرة فكرت وقلت لنفسك أنا احمد الله لوجود هذه الأداة التي ساعدني في بناء الشبكة 2-5-2-1-π؟ هذا صحيح، ولا مرة. 
لإنه في أغلب الحالات، سوف تحتاج إلى الشبكة العادية ذات الاثنا عشر عموداً، ببساطة.

إذا كنت تسخدم إطار عمل CSS لمشروعك مثل [Bootstrap](http://getbootstrap.com/) أو [Foundation](http://foundation.zurb.com/)، الاحتمال سيكون قوي بأن تحتوى على نظام شبكي مبني مسبقاً والتي افضل استخدامها لتجنب التعامل مع إضافة أخرى.

لو أنك غير مربوط بنظام شبكي معين، ستكون سعيداً لتعرف أن هناك أنظمة شبكية مبنية على SASS: [Susy](http://susy.oddbird.net/) و [Singularity](http://singularity.gs/). كلاهما يقوم بالكثير من العمل الذي لن تحتاجه أصلاً لذلك سوف تختار واحد منهم وتكون متأكد من جميع الحالات الجنابية. حتى الحالات المعقدة سوف تكون مغطية فيها. لو جئت لي، Susy لها مجتمع أفضل، لكن هذا رأيي.

أو يمكنك استخدام شيء اكثر مثل [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). على كل حال، اختيار اي منهم لن يؤثر كثيراً على الطريقة التي تكتب فيها الكود لذلك هذا أمر يرجع لك انت.

###### إضافات للإستزادة

* [Singularity](http://singularity.gs/)
* [Singularity: Grids Without Limits](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity Grid System](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy](http://susy.oddbird.net/)
* [Build Web Layouts Easily with Susy](http://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](http://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](http://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap’s Grid System vs Susy: a Comparison](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](http://www.sitepoint.com/creative-grid-system-sass-calc/)

###### Further reading

* [Singularity](http://singularity.gs/)
* [Singularity: Grids Without Limits](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity Grid System](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy](http://susy.oddbird.net/)
* [بناء تصاميم الويب بسهولة بإستخدام SASS](http://css-tricks.com/build-web-layouts-easily-susy/)
* [دليل كامل إلى Susy 2](http://www.zell-weekeat.com/susy2-tutorial/)
* [شبكات SASS: من Neat إلى Susy](http://www.sitepoint.com/sass-grids-neat-susy/)
* [مقارنة بين النظام الشبكي الخاص ب Bootstrap و Susy](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [كيف يجب أن تسخدم Susy, شبكات مدعومة من SASS](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [نظام شبكي ابداعي بإستخدام SASS و calc()](http://www.sitepoint.com/creative-grid-system-sass-calc/)

## SCSS-lint

Linting code is very important. Usually, following guidelines from a styleguide helps reducing the amount of code quality mistakes but nobody’s perfect and there are always things to improve. So you could say that linting code is as important as commenting it.

فحص الكود من الأخطاء مهم جدا. عادة، اتباع دليل بشروط معينة سوف يساعد في تقليل احتمالية بأن يحتوى الكود على الأخطاء لكن لا يوجد احد مثالي وهناك دائماً أمور يمكن تحسينها. لذلك تستطيع القول بأن عمل فحص للكود هو بنفس الأهمية التي تكون لإضافة تعليقات عليه.

[SCSS-lint](https://github.com/causes/scss-lint) is a tool to help you keep your SCSS files clean and readable. It is fully customisable and easy to integrate with your own tools.

[SCSS-lint](https://github.com/causes/scss-lint) هي أداة تساعدك في جعل ملفات SCSS نظيفة وسهلة القراءة. تسطتيع تعديلها كما تشاء وهي سهلة الاضافة على مشاريعك.

Fortunately, SCSS-lint recommendations are very similar to those described in this document. In order to configure SCSS-lint according to Sass Guidelines, may I recommend the following setup:

لحسن الحظ، توصيات SCSS-lint هي شبيهة جداً بالمشروح في هذا المستند. لكي تقوم بعمل اعدادات SCSS-lint بناءاً على دليل SASS، أفضل ان تقوم بالتالي:

{% include snippets/tools/01/index.html %}

<div class="note">
  <p>If you want to plug SCSS lint into your Grunt build process, you will be pleased to know there is a Grunt plugin for that called <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Also, if you are on the hunt for a neat application that works with SCSS-lint and the like, the guys at <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) are working on <a href="https://houndci.com/">Hound</a>.</p>
</div>

###### Further reading

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)
