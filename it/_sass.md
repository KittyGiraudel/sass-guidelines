
# About Sass

Questo è come [Sass](http://sass-lang.com) descrive se stesso e la propria[documentazione](http://sass-lang.com/documentation/file.SASS_REFERENCE.html):

> Sass è un'estensione di CSS che aggiunge potenzialità ed eleganza al linguaggio base.

L'obiettivo finale di Sass è di sistemare i difetti di CSS. CSS, come molti sappiamo, non è il miglior linguaggio di programmazione nel mondo <sup>[citazione necessaria]</sup>. Molto semplice da imparare, può diventare presto un casino, specialmente nei progetti grandi.

Qui è dove arriva Sass, come un meta linguaggio migliora la sintassi di CSS in modo da fornire funzionalità extra a comodi strumenti. Nel frattempo Sass vuole rimanere conservativo riguardo il linguaggio CSS.

Il punto non è rendere CSS un linguaggio di programmazione pieno di funzionalità: Sass vuole solo aiutare dove CSS fallisce. A causa di questo, iniziare con Sass non è più difficile che imparare CSS: vengono semplicemente aggiunte  in cima un paio di funzionalità extra.

Detto questo, ci sono molti modi per usare queste funzionalità. Alcuni sono buoni, altri sono cattivi, altri sono inusuali. Queste linee guida intendono fornire una approccio consistente e documentato per scrivere Sass.

###### Approfondimenti

* [SitePoint Sass Reference](http://sitepoint.com/sass-reference/)

## Ruby Sass o LibSass

[La prima commit di Sass](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe) è del lontano 2006, più di otto anni fa. Inutile dire che è passato molto tempo. Inizialmente è stato sviluppato in Ruby e sono apparsi qua e là vari _porting_. Quello di più successo, [LibSass](https://github.com/sass/libsass) (scritto in C) è quasi pronto ad essere pienamente compatibile con la versione originale scritta in Ruby.

Nel 2014, [i team di Ruby Sass e LibSasshanno deciso di aspettare che entrambe le versioni fossero sincronizzate prima di andare avanti](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). Da allora LibSass ha rilasciato attivamente molte ersioni ed ha oramai le stesse funzioni del suo fratello maggiore. Le ultime inconsistenze sono raccolte ed elencate da me stesso sul progetto [Sass-Compatibility](http://sass-compatibility.github.io). Se siete a conoscenza di un'incompatibilità non listata tra le due versioni, per piacere siate gentili abbastanza da aprirmi un _issue_.

Torniamo indietro alla scelta del vostro compilatore. Attualmente, tutto dipende dal vostro progetto. Se il vostro progetto è in Ruby on Rails, meglio usare Ruby Sass, che è perfetto per questo caso. Altrimenti, sappiate che Ruby Sass è comunque il riferimento per l'implementazione ed avrà sempre il comando sulle funzionalità di Libsass.

// SONO QUI !!!!!!!!!!!!!!!!

On non-Ruby projects that need a workflow integration, LibSass is probably a better idea since it is mostly dedicated to being wrapped. So if you want to use, let’s say Node.js, [node-sass](https://github.com/sass/node-sass) is all chosen.

###### Further reading

* [Getting to know LibSass](http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)

## Sass or SCSS

There is quite a lot of confusion regarding the semantics of the name *Sass*, and for good reason: Sass means both the preprocessor and its own syntax. Not very convenient, is it?

You see, Sass initially described a syntax of which the defining characteristic was its indentation-sensitivity. Soon enough, Sass maintainers decided to close the gap between Sass and CSS by providing a CSS-friendly syntax called *SCSS* for *Sassy CSS*. The motto is: if it’s valid CSS, it’s valid SCSS.

Since then, Sass (the preprocessor) has been providing two different syntaxes: Sass (not all-caps, [please](http://sassnotsass.com)), also known as *the indented syntax*, and SCSS. Which one to use is pretty much up to you since both are strictly equivalent in features. It’s only a matter of aesthetics at this point.

Sass’s whitespace-sensitive syntax relies on indentation to get rid of braces, semi-colons and other punctuation symbols, leading to a leaner and shorter syntax. Meanwhile, SCSS is easier to learn since it’s mostly some tiny extra bits on top of CSS.

<p>I, myself, prefer SCSS over Sass because it is closer to CSS and friendlier to most developers. Because of that, SCSS is the default syntax throughout these guidelines. You can switch to Sass indented syntax in the <label for="aside-toggle" class="link-like">options panel</label>.</p>

###### Further reading

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)

## Other preprocessors

Sass is a preprocessor among others. Its most serious competitor has to be [LESS](http://lesscss.org/), a Node.js based preprocessor that has gotten quite popular thanks to the famous CSS framework [Bootstrap](http://getbootstrap.com/) using it. There is also [Stylus](http://learnboost.github.io/stylus/) - which is kind of the nerdy, unrestricted version of LESS - where you can do pretty much whatever you want since it almost turns CSS into a programming language.

*Why choose Sass over LESS or another preprocessor?* is still a valid question today. Not so long ago, we used to recommend Sass for Ruby-based projects because it was first made in Ruby and played well with Ruby on Rails. Now that LibSass has caught up (mostly) with original Sass, this is no longer relevant advice.

What I do like with Sass is its conservative approach to CSS. Sass’s design is based on strong principles: much of the design approach comes naturally out of the core teams’ beliefs that a) adding extra features has a complexity cost that needs to be justified by usefulness and, b) it should be easy to reason about what a given block of styles is doing by looking at that block alone. Also, Sass has a much sharper attention to detail than other preprocessors. As far as I can tell, the core designers care deeply about supporting every corner-case of CSS compatibility and making sure every general behavior is consistent.

In other words, Sass is not a preprocessor aimed at pleasing nerdy wannabe programmers like me by adding extraordinary features on top of a language that is not intended to support any logical use-cases. It is a software aimed at solving actual issues; helping to provide useful functionality to CSS where CSS falls short.

Preprocessors aside, we should also mention post-processing tools, which have received significant exposure in the last few months, thanks mainly to [PostCSS](https://github.com/postcss/postcss) and [cssnext](https://cssnext.github.io/). They are often referred to as “postprocessors” as they transpile yet-to-come standard syntax into today’s CSS. Otherwise, they are pretty much equivalent to preprocessors except they do not provide anything else other than upcoming CSS syntax.

You can think of postprocessors as a polyfill for unsupported CSS features. For instance, you would write variables as they are described in the [CSS specifications](http://dev.w3.org/csswg/css-variables/), then compile your stylesheets with a postprocessor only to find every variable occurrence gets replaced with its value, as Sass would do.

The idea behind postprocessors is that once browsers support new features (e.g. CSS variables), the postprocessor does not compile them anymore and lets browsers take over.

While providing tomorrow’s syntax today is something of a noble idea, I have to say I still prefer using Sass for most tasks. However, there are some occasions where I believe postprocessors are more suited than Sass and the like - CSS prefixing for instance - but we’ll get back to this.
