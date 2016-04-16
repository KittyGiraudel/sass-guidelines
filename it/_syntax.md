
# Sintassi e formattazione

Se me lo chiedeste, la prima cosa che una guida di stile dovrebbe fare è descrivere il modo in cui vogliamo che il nostro codice sia scritto.

Quando diversi sviluppatori sono coinvolti nello scrivere CSS sullo stesso progetto, è solo questione di tempo prima che uno di loro cominci a scrivere alla sua maniera. Linee guida sul codice che spingono alla coerenza non servono solo a prevenire ciò, ma aiutano anche quando c'è da leggere e aggiornare il codice.

Vogliamo, in pratica (ispirato da [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting))

* indent due (2) spazi indents, non tabs;
* idealmente, righe di 80-caratteri;
* regole CSS scritte su può righe;
* un uso delle righe bianche ragionato.

{% include snippets/syntax/01/index.html %}

## Stringhe

Che ci crediate o no, le stringhe giocano un ruolo fondamentale in CSS così come in Sass. Molti valori CSS possono essere sia lunghezze che identificatori, percià è molto importante rispettare le linee guida quando si ha a che fare con le stringhe in Sass.

### Encoding

Per evitare possibili guai con l'encoding dei caratteri, è altamente cosigliato di forzare l'enconding [UTF-8](http://en.wikipedia.org/wiki/UTF-8) nel file [main stylesheet](#main-file) usando la direttiva `@charset`. Fate attenzione che sia il primo elemento del foglio di stile  che non ci siano caratteri prima di ciò.

{% include snippets/syntax/02/index.html %}

### apici

CSS non ha bisogni di apici per le stringhe, nemmeno per quelle che contengono spazi. Prendete la dichiarazione font-family: non importa se si usano gli apici per i nomi dei font oppure no.

Per questo motivo, Sass non *richiederebbe* di usare gli apici per le stringe. Meglio ancora (e per fortuna!) una stringa con gli apici è uguale a una senza (`'abc'` è uguale ad `abc`).

That being said, languages that do not require strings to be quoted are definitely a minority and so, **strings should always be wrapped with single quotes** (`'`) in Sass (single being easier to type than double on *qwerty* keyboards). Besides consistency with other languages, including CSS’ cousin JavaScript, there are several reasons for this choice:

Detto questo però, i linguaggi che non richiedono gli apici per gli stringhe sono una minoranza, perciò in Sass **le stringhe vanno sempre messe dentro singoli apici** (`'`) - dovrebbero essere più facili da usare in una tastiera *querty* rispetto agli doppi apici. Oltre che alla coerenza con altri linguaggi, incluso il cugino JavaScript, ci sono diverse ragioni per questa scelta:

* i nomi dei colori sono considerati colori quando non hanno gli apici, il che può portare guai;
* molti degli strumenti di evidenziazione della sintassi non funzionano su stringhe senza apici;
* aiuta la leggibilità;
* non c'è nessuna ragione per non aggiungere gli apici alle stringhe.

{% include snippets/syntax/03/index.html %}

<div class="note">
  <p>Per le specifiche CSS, la direttiva  <code>@charset</code> deve essere dichiarata con doppi apici per <a href="http://www.w3.org/TR/css3-syntax/#charset-rule">poter essere valida</a></p>. Naturalmente, Sass si prende cura di compilare il CSS in maniera corretta. Si può tranquillamente usare il singolo apice, anche per <code>@charset</code>.
</div>

### Stringhe come valori CSS

Valori specifici CSS (identificatori) come `initial` o `sans-serif` non hanno bisogno di apici. Dichiarazioni come `font-family: 'sans-serif'` non verranno applicate, in quanto CSS si aspetta un identificatore, non una stringa tra apici. Per questo motivo, meglio non usarli qui.

{% include snippets/syntax/04/index.html %}

Quindi, possiamo fare una distinzione tra le stringhe intese per essere usate come valor CSS (identificatori CSS) come nell'esempio qui sopra, e stringhe, quando si riferiscono a dati Sass, come le _chiavi_ di una _mappa_.

Non usiamo gli apici nel primo caso, ma usiamo gli apici singoli nel secondo.

### Stringhe che contengono apici / apostrofi

Se una stringa contiene uno o più apici singoli o apostrofi, si può considerare di utilizzare per la stringa il doppio apice (`"`), in modo da evitare di spezzare la stringa.

{% include snippets/syntax/05/index.html %}

### URL

Le URL dovrebbero sempre essere tra apici, per le stesse ragioni:

{% include snippets/syntax/06/index.html %}

## Numeri

In Sass, i numeri sono un tipo di dati che includono tutto da cifre senza unità a lunghezze, durate, frequenze, angoli e così via. Abbiamo così la possibilità di fare calcoli usando queste misure.

### Zero

I numeri dovrebbero avere lo zero prima di un valore decimale inferiore a uno. Non scrivere mai zero alla fine.

{% include snippets/syntax/07/index.html %}

<div class="note">
  <p>Usando Sublime Text o altri editor, si può usare la funzione cerca / rimpiazza con espressioni regolari. È facile allora aggiungere uno zero ai numeri con la virgola. Semplicemente, basta rimpiazzare il codice  <code>\s+\.(\d+)</code> con <code>\ 0.$1</code>. Non dimenticate anche lo spazio prima dello <code>0</code></p>
</div>

### Unità di misura

Quando si hanno a che fare con le lunghezze, un valore `0` non ha mai l'unità di misura.

{% include snippets/syntax/08/index.html %}

<div class="note">
  <p>Attenzione: questa pratica è limitata solo alle lunghezze. Uno zero senza unità di misura per proprietà come <code>transition-delay</code> non è ammesso. In teoria non sarebbe valido e verrebbe scartato. Non tutti i browser però si comportano così.</p>
</div>

L'errore più comune che si può immaginare riguardo i numeri e Sass è pensare che le unità di misura sono solo stringhe che si possono aggiungere ai numeri. Se spesso questo è vero, non è così che le unità di misura lavorano. Le unità di misura dovrebbero essere immaginate come simboli algebrici. Ad esempio, moltiplicare 5 pollici per 5 pollici ci dà 25 pollici quadrati. La stessa logica va applicata a Sass.

Per aggiungere l'unità di misura ad un numero, basta moltiplicare il numero per *1 unità* 

{% include snippets/syntax/09/index.html %}

Note that adding *0 member of that unit* also works, but I would rather recommend the aforementioned method since adding *0 unit* can be a bit confusing. Indeed, when trying to convert a number to another compatible unit, adding 0 will not do the trick. More on that [in this article](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/).

Funziona anche aggiungere *0 di quella unità di misura*, ma consiglierei il metodo precedente, dato che aggiungere *0 unità* può essere confusionario. Quando invece proviamo a convertire un numero in un altra unità di misura compatibile, aggiungere lo zero non risolve niente. Per saperne di più, [questo articolo](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/) aiuta.

{% include snippets/syntax/10/index.html %}

Dipende dunque da cosa si sta tentando di ottenere. C'è da ricordare che aggiungere l'unità come una stringa non è una buona maniera di procedere.

Per rimuovere l'unità di misura di un valore, basta dividere di *una unità del suo genere*

{% include snippets/syntax/11/index.html %}

Aggiugnere l'unità di misura come una stringa ad un numero genera una stringa, impendendo qualsiasi altra operazione sul valore. Prendedno solo la parte numerica con l'unità genera allo stesso modo una stringa. Non è certo quel che volgiamo. [Usiamo misure, not stringhe](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/).

### Calculations

**Top-level numeric calculations should always be wrapped in parentheses**. Not only does this requirement dramatically improve readability, it also prevents some edge cases by forcing Sass to evaluate the contents of the parentheses.

{% include snippets/syntax/12/index.html %}

### Magic numbers

"Magic number" is an [old school programming](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) term for *unnamed numerical constant*. Basically, it’s just a random number that happens to *just work*™ yet is not tied to any logical explanation.

Needless to say **magic numbers are a plague and should be avoided at all costs**. When you cannot manage to find a reasonable explanation for why a number works, add an extensive comment explaining how you got there and why you think it works. Admitting you don’t know why something works is still more helpful to the next developer than them having to figure out what’s going on from scratch.

{% include snippets/syntax/13/index.html %}

On topic, CSS-Tricks has a [terrific article](http://css-tricks.com/magic-numbers-in-css/) about magic numbers in CSS that I encourage you to read.

## Colors

Colors occupy an important place in the CSS language. Naturally, Sass ends up being a valuable ally when it comes to manipulating colors, mostly by providing a handful of [powerful functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).

Sass is so useful when it comes to manipulating colors that articles have flourished all over the internet about this very topic. May I recommend a few reads:

* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)

### Color formats

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

Doing this would prevent a theme change leading to something like `$sass-pink: blue`. [This article](http://davidwalsh.name/sass-color-variables-dont-suck) does a good job at explaining why thinking your color variables through is important.

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

In [this article](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/), I go through a lot of tricks and tips to handle and manipulate lists correctly in Sass.

## Maps

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

Write-ups about Sass maps are many given how longed-for this feature was. Here are 3 that I recommend: [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/), [Extra Map functions in Sass](http://www.sitepoint.com/extra-map-functions-sass/), [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/).

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

## Declaration Sorting

I cannot think of many topics where opinions are as divided as they are regarding declaration sorting in CSS. Concretely, there are two factions here:

* sticking to the alphabetical order;
* ordering declarations by type (position, display, colors, font, miscellaneous…).

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

## Selector Nesting

One particular feature Sass provides that is being overly misused by many developers is *selector nesting*. Selector nesting offers a way for stylesheet authors to compute long selectors by nesting shorter selectors within each others.

### General rule

For instance, the following Sass nesting:

{% include snippets/syntax/29/index.html %}

… will generate this CSS:

{% include snippets/syntax/30/index.html %}

Along the same lines, since Sass 3.3 it is possible to use the current selector reference (`&`) to generate advanced selectors. For instance:

{% include snippets/syntax/31/index.html %}

… will generate this CSS:

{% include snippets/syntax/32/index.html %}

This method is often used along with [BEM naming conventions](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to generate `.block__element` and `.block--modifier` selectors based on the original selector (i.e. `.block` in this case).

<div class="note">
  <p>While it might be anecdotal, generating new selectors from the current selector reference (<code>&</code>) makes those selectors unsearchable in the codebase since they do not exist per se.</p>
</div>

The problem with selector nesting is that it ultimately makes code more difficult to read. One has to mentally compute the resulting selector out of the indentation levels; it is not always quite obvious what the CSS will end up being.

This statement becomes truer as selectors get longer and references to the current selector (`&`) more frequent. At some point, the risk of losing track and not being able to understand what’s going on anymore is so high that it is not worth it.

To prevent such situations, we talked a lot about [the Inception rule](http://thesassway.com/beginner/the-inception-rule) a few years back. It advised against nesting more than 3 levels deep, as a reference to the movie Inception from Christopher Nolan. I would be more drastic and recommend to **avoid selector nesting as much as possible**. 

While there are obviously a few exceptions to this rule as we’ll see in the next section, this opinion seems to be quite popular. You can read about it more in details in [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/) and [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css).

### Exceptions

For starters, it is allowed and even recommended to nest pseudo-classes and pseudo-elements within the initial selector.

{% include snippets/syntax/33/index.html %}

Using selector nesting for pseudo-classes and pseudo-elements not only makes sense (because it deals with closely related selectors), it also helps keep everything about a component at the same place.

Also, when using component-agnostic state classes such as `.is-active`, it is perfectly fine to nest it under the component’s selector to keep things tidy.

{% include snippets/syntax/34/index.html %}

Last but not least, when styling an element because it happens to be contained within another specific element, it is also fine to use nesting to keep everything about the component at the same place.

{% include snippets/syntax/35/index.html %}

As with everything, the specifics are somewhat irrelevant, consistency is key. If you feel fully confident with selector nesting, then use selector nesting. Just make sure your whole team is okay with that.
