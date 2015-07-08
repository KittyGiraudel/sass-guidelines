
# Værktøjer

Det der er rart ved en så populær CSS preprocessor som Sass er, at den kommer med et helt økosystem af frameworks, plugins, biblioteker og værktøjer. Efter 8 års eksistens er vi ved at komme tættere og tættere på et punkt hvor [alt der kan skrives i Sass er blevet skrevet i Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

Mit råd er dog, at sænke antallet af dependencies til det absolut nødvendige. At håndtere dependencies er en form for helvede, du ikke ønsker at være en del af. Plus, der er begrænset til intet behov for eksterne dependencies når det kommer til Sass.

## Compass

[Compass](http://compass-style.org/) er det primære Sass framework derude. Udviklet af [Chris Eppstein](https://twitter.com/chriseppstein), en af hoved-designerne af Sass, og jeg ser det ikke tabe popularitet dramatisk det næste stykke tid, hvis du spørger mig.

Når det er sagt, så bruger jeg ikke Compass mere. Hovedårsagen er, at det gør Sass meget langsomere. Ruby Sass er ret langsomt i sig selv, så ved at tilføje mere Ruby og mere Sass ovenpå hjælper ikke rigtigt.

Sagen er, at vi bruger meget lidt fra hele frameworket. Compass er enormt. Kryds-browser kompatibilitet mixins er bare toppen af isbjerget. Matematik-funktioner, billede-hjælpere, spriting... Der er så meget der kan klares med dette fantastiske stykke software.

Desværre er det hele sukker, og der er ikke nogen overvældende funktioner inde i pakken. En undtagelse kan gøres med sprite-byggeren, som er *virkelig god*, men [Grunticon](https://github.com/filamentgroup/grunticon) og [Grumpicon](http://grumpicon.com/) klarer også jobbet, og har fordelen af at kunne tages ind og ud af build-processen.

Anyway, I do not forbid the use of Compass although I would not recommend it either, especially since it is not LibSass-compatible (even if efforts have been made in that direction). If you feel better using it, fair enough, but I don’t think you’ll get much from it at the end of the day.

<div class="note">
  <p>Ruby Sass is currently going under some outstanding optimizations that are specifically targeted at logic-heavy styles with many functions and mixins. They should dramatically improve performance to the point where Compass and other frameworks might not be slowing Sass anymore.</p>
</div>

###### Videre læsning

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Why I don't use Compass anymore](http://www.sitepoint.com/dont-use-compass-anymore/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)

## Grid systems

Not using a grid system is not an option now that Responsive Web Design is all over the place. To make designs look consistent and solid across all sizes, we use some sort of grid to lay out the elements. To avoid having to code this grid work over and over again, some brilliant minds made theirs reusable.

Let me put this straight: I am not a big fan of grid systems. Of course I do see the potential, but I think most of them are completely overkill and are mostly used to draw red columns on a white background in nerdy designers’ speaker decks. When is the last time you thought *thank-God-I-have-this-tool-to-build-this-2-5-3.1-π-grid*? That’s right, never. Because in most cases, you just want the usual regular 12-columns grid, nothing fancy.

If you are using a CSS framework for your project like [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/), chances are high it includes a grid system already in which case I would recommend to use it to avoid having to deal with yet another dependency.

If you are not tied to a specific grid system, you will be pleased to know there are two top-notch Sass powered grid engines out there: [Susy](http://susy.oddbird.net/) and [Singularity](http://singularity.gs/). Both do much more than you will ever need so you can pick the one you prefer between these two and be sure all your edge cases&mdash;even the most nifty ones&mdash;will be covered. If you ask me, Susy has a slightly better community, but that’s my opinion.

Or you can head over to something a bit more casual, like [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). All in all, the choice will not have much of an impact on your coding style, so this is pretty much up to you at this point.

###### Videre læsning

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

## SCSS-lint

Linting code is very important. Usually, following guidelines from a styleguide helps reducing the amount of code quality mistakes but nobody’s perfect and there are always things to improve. So you could say that linting code is as important as commenting it.

[SCSS-lint](https://github.com/causes/scss-lint) is a tool to help you keep your SCSS files clean and readable. It is fully customisable and easy to integrate with your own tools.

Fortunately, SCSS-lint recommendations are very similar to those described in this document. In order to configure SCSS-lint according to Sass Guidelines, may I recommend the following setup:

{% include snippets/tools/01/index.html %}

<div class="note">
  <p>If you want to plug SCSS lint into your Grunt build process, you will be pleased to know there is a Grunt plugin for that called <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Also, if you are on the hunt for a neat application that works with SCSS-lint and the like, the guys at <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) are working on <a href="https://houndci.com/">Hound</a>.</p>
</div>

###### Videre læsning

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)
