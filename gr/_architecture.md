# Αρχιτεκτονική

Η δόμηση ενός CSS project είναι ίσως ένα απο τα δυσκολότερα πράγματα που θα κάνετε κατα την διαρκεια ζωής του project. Το να συντηρήσετε την δόμηση αυτή συνεπή και ουσιώδης είναι ακόμα δυσκολότερο.

Ευτυχώς, ένα απο τα βασικά πλεονεκτήματα της χρήσης ενός CSS preprocessor είναι η παροχή της δυνατότητας τμηματοποίησης του κώδικα σε πολλά αρχεία χωρίς να επηρεάζεται η απόδοση του (όπως με το `@import` CSS directive). Λόγο της υπερφόρτωσης που κάνει η Sass στο `@import` directive, είναι απολύτως ασφαλή (και συνιστάται ανεπιφύλακτα) η χρήση όσο αρχείων χρειάζεται κατα την διάρκεια της ανάπτυξης, αφού όλα τα αρχεία θα συγκεντρωθούν σε ένα αρχείο CSS σε production περιβάλλον.

Πέρα από αυτό, Δεν μπορώ να τονίσω αρκετά την ανάγκη για χρήση φακέλων, ακόμα και σε μικρά projects. Στο σπίτι, δεν πετάς όλα χαρτιά στο ίδιο κουτί. Χρησιμοποιείς φακέλους, ενα για το σπίτι/διαμέρισμα, ένα για την τράπεζα, ένα για τους λογαριασμούς και τα λοιπά. Δεν υπάρχει λόγος να γίνει διαφορετικά και για την δόμηση του CSS project σας. Διαχωρίστε τον κώδικα σε διαφορετικούς φακέλους, ονομασμένους λογικά, ετσι ώστε αργότερα να σας είναι εύκολο να βρίσκετε αυτό που ψάχνετε εύκολα και γρήγορα.

Υπάρχουν πολλές αρχιτεκτονικές/τρόποι δόμησης CSS project όπως: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), projects βασισμένα σε [Bootstrap](http://getbootstrap.com/) ή σε [Foundation](http://foundation.zurb.com/)... Τα οποία έχουν πλεονεκτήματα και μειωνεκτήματα.

Εγώ, προσωπικά, χρησιμοποιώ μια προσέγγιση που μοιάζει πολύ με αυτή του [SMACSS](https://smacss.com/) του [Jonathan Snook](http://snook.ca/),το οποίο επικεντρώνεται στην διατήρηση της κατάστασης όσο πιο απλής και φανερής γίνεται.

<div class="note">
  <p>Έχω μάθει πως η δόμηση του κώδικα τις περισσότερες φορές αλλάζει ανάλογα με το project. Μη διστάσετε να απορρίψετε εντελώς ή να προσαρμόσετε την προτεινόμενη λύση έτσι ώστε να φτάσετε σε ένα αποτέλεσμα που θα ταιριάζει στις ανάγκες σας.</p>
</div>



### Περαιτέρω ανάγνωση

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)






## Components

Υπάρχει μια τεράστια διαφορά μεταξύ του να κάνεις κάτι *να δουλεύει* και να κάνει κάτι *καλά*. Πάλι, η CSS είναι πολύ "ακατάσταση" γλώσσα <sup>[citation needed]</sup>. Όσο λιγότερη CSS έχουμε, τόσο το καλύτερο. Δεν θέλουμε να αντιμετωπίσουμε καταστάσεις στις οποίες θα έχουμε megabytes απο κώδικα CSS. Για να κρατήσουμε τα stylesheets μικρά και αποδοτικά&mdash; και προφανώς δεν θα σας ξαφνιάσει&mdash;είναι καλό να σκεφτόμαστε το interface ως μια συλλογή απο components.

Τα Components μπορεί να είναι οτιδήποτε, αρκεί να:

* κάνου μόνο ένα πράγμα;
* είναι επαναχρησιμοποιήσιμα και να επαναχρησιμοποιούνται μέσα στο project;
* είναι ανεξάρτητα.

Για παράδειγμα, μια φόρμα αναζήτησης θα πρέπει να θεωρείται ως ένα component. Πρέπει να είναι επαναχρησιμοποιήσιμο, σε διαφορετικές τοποθεσίες, σε διαφορετικές σελίδες, σε διαφορετικές καταστάσεις. Δεν πρέπει να εξαρτάται απο την θέση του στο DOM (footer, sidebar, κύριο περιεχόμενο...).

Σχεδόν όλα τα interface μπορούμε να τα θεωρήσουμε ως components και είναι αυτό που σας συνιστώ. Αυτό θα μικρήνει κατα πολύ την ποσότητα CSS κώδικα που χρειάζεται το project, αλλά τυγχάνει επίσης να είναι και ευκολότερο στην συντήρηση απο ένα χάος όπου όλα είναι ακατάστατα.






## Το 7-1 pattern

Επιστρέφουμαι στην αρχιτεκτονική. Συνηθίζω να ακολουθώ το *7-1 pattern*: 7 φακέλους, 1 αρχείο. Ουσιαστικά, έχεις όλα τα partials μέσα σε 7 διαφορετικούς φακέλους, και ένα αρχείο στο πρώτο επίπεδο (συνήθως με την ονομασία `main.scss`) το οποίο κάνει import όλα τα άλλα για να τα κάνει compile σε ένα CSS stylesheet.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

Και φυσικά:

* `main.scss`

<figure role="group">
  <img alt="One file to rule them all, One file to find Them, One file to bring them all, And in the Sass way merge them."
     sizes="100vw"
     srcset="/assets/images/sass-wallpaper_small.jpg  540w,
             /assets/images/sass-wallpaper_medium.jpg 900w,
             /assets/images/sass-wallpaper_large.jpg 1200w,
             /assets/images/sass-wallpaper_huge.jpg  1590w" />
  <figcaption>Wallpaper by <a href="https://twitter.com/julien_he">Julien He</a></figcaption>
</figure>

Ιδανικά, μπορούμε να καταλήξουμε σε κάτι σαν αυτό:

<div class="highlight"><pre><code>
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   ...                  # Etc…
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– themes/
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   ...                  # Etc…
|
|– utils/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– main.scss             # Main Sass file
</code></pre></div>

<div class="note">
  <p>Τα αρχεία ακολουθούν την ίδια ονοματική σύμβαση που περιγράψαμε παραπάνω: είναι οριοθετημένα με κάτω παύλα.</p>
</div>



### Φάκελος Base

O φάκελος `base/` περιέχει αυτό που αποκαλούμε κώδικα boilerplate για το project. Εκεί μπορεί να βρεθεί το reset αρχείο, κάποια τυπογραφικά rules, και πιθανότητα ένα stylesheet (το οποίο συνηθίζω να αποκαλώ `_base.scss`), στο οποίο ορίζω διάφορα standard στύλ για HTML elements που χρησιμοποιούνται συνήθως.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`



### Φάκελος Layout

Ο φάκελος `layout/` περιέχει όλα όσα έχουν να κάνουν με την δομή του site ή την εφαρμογής. Αυτός ο φάκελος μπορεί να περιέχει stylesheets για τα βασικά κομμάτια του site (header, footer, navigation, sidebar...), το grid system ή ακόμα και CSS styles για όλα τα forms.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p>Ο <code>layout/</code> φάκελος θα μπορούσε επίσης να ονομαστεί <code>partials/</code>, αναλόγος τι προτιμάται.</p>
</div>



### Φάκελος Components

Για μικρότερα components, υπάρχει ο φάκελος `components/`. Ενώ ο φάκελος `layout/` είναι *macro* (καθορίζει το γενικό μοντέλο της σελίδας), ο φάκελος `components/` είναι επικεντρωμένος στα widgets. Περιέχει modules ολών των ειδών όπως slider, loader, widget, και οτιδήποτε άλλο προς αυτή την κατεύθυνση. Συνήθως υπάρχουν πολλά αρχεία μέσα στον φάκελο `components/` αφού όλο το site ή η εφαρμογή απαρτίζεται απο μικρά modules.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p>Ο φάκελος <code>components/</code> θα μπορούσε επίσης να ονομαστεί <code>modules/</code>, αναλόγος τι προτιμάται.</p>
</div>



### Φάκελος Pages

Αν έχετε στυλιστικό κώδικα μονο συγκεκριμένα σελίδες, είναι προτιμότερο να μπούν στον φάκελο `pages/`, σε ένα αρχείο που παίρνει το ονομά του απο την σελίδα. Για παράδειγμα, δεν είναι ασυνήθιστο το να έχεις στυλιστικό κώδικα για την αρχική σελίδα εξου και η ανάγκη για ένα `_home.scss` αρχείο μέσα στον φάκελο `pages/`.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>Ανάλογα με τη διαδικασία deployment σας, αυτά τα αρχεία θα μπορούσαν να χρησιμοποιηθούν απο μόνα τους για να να αποφευχθεί η συγχώνευσή τους στο τελικό stylesheet. Είναι πραγματικά στο χέρι σας.</p>
</div>



### Φάκελος Themes

Σε μεγάλα sites και εφαρμογές, δεν είναι ασυνήθιστο το να έχεις διαφορετικά θέματα. Υπάρχουν πάρα πολλοί τρόποι για να αντιμετώπισης το θεμα αυτό αλλά προσωπικά προτιμό να τα έχω όλα μέσα στον φάκελο `themes/`.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>Αυτό είναι πολύ συγκεκριμένο στο project και είναι πολύ σπάνιο να υπάρχει σε άλλα projects αφού τα περισσότερα μεγάλα sites και εφαρμογές έχουν διαφορετικές απαιτήσεις και αρχιτεκτονική.</p>
</div>



### Φάκελος Utils

Ο Φάκελος `utils/` συγκεντρώνει όλα τα Sass tools και helpers που χρησιμοποιούνται σε όλο το project. Κάθε global μεταβλητή, συνάρτηση, mixin και placeholder πρέπει να μπούν εκεί.

O γενικός κανόνας του φακέλου αυτού είναι να μην εξάγη ούυε μια γραμμή CSS όταν γίνει compile από μόνο του γιατί απλά είναι Sass helpers.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (συχνά ονομάζεται `_helpers.scss`)

<div class="note">
  <p>Ο φάκελος <code>utils/</code> θα μπορούσε επίσης να ονομαστεί <code>helpers/</code>, <code>sass-helpers/</code> ή <code>sass-utils/</code>, αναλόγος τι προτιμάται.</p>
</div>



### Φάκελος Vendors

Και τελευταίο αλλά εξίσου σημαντικό, τα περισσότερα projects θα έχουν έναν `vendors/` φάκελο ο οποίος περιέχει όλα τα CSS αρχεία από εξωτερικές βιβλιοθήκες όπως Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, και ούτω καθεξής. Βάζοντας τα σε αυτόν τον φάκελο είναι ένας καλός τρόπος για να πείς “Αυτός δεν είναι δικός μου κώδικας, δεν είναι δικιά μου ευθύνη”.

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

Αν θέλετε να παρακάμψετε τμήμα κάποιου vendor, προτείνω να φτιάξετε έναν όγδοο φάκελο με όνομα `vendors-extensions/` στο οποίο μπορείς να βάλεις αρχεία που έχουν το ίδιο όνομα με το αρχείο που θες να παρακάμψεις απο τον φάκελο vendors.

Για παράδειγμα, `vendors-extensions/_boostrap.scss` είναι ένα αρχείο που περιέχει όλα τα CSS rules που αποσκοπούν στην εκ νέου δηλώση κάποιων απο τις προεπιλεγμένες του Bootstrap. Έτσι δεν χρειάζεται να να πειράξεις απευθείας τα vendor αρχεία, το οποίο γενικά δεν είναι καλή ιδέα.



### Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Files should be imported according to the folder they live in, one after the other in the following order:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

In order to preserve readability, the main file should respect these guidelines:

* one file per `@import`;
* one `@import` per line;
* no new line between two imports from the same folder;
* a new line after the last import from a folder;
* file extensions and leading underscores omitted.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'utils/variables';
@import 'utils/functions';
@import 'utils/mixins';
@import 'utils/placeholders';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import vendors/bootstrap
@import vendors/jquery-ui

@import utils/variables
@import utils/functions
@import utils/mixins
@import utils/placeholders

@import base/reset
@import base/typography

@import layout/navigation
@import layout/grid
@import layout/header
@import layout/footer
@import layout/sidebar
@import layout/forms

@import components/buttons
@import components/carousel
@import components/cover
@import components/dropdown

@import pages/home
@import pages/contact

@import themes/theme
@import themes/admin
{% endhighlight %}
  </div>
</div>

There is another way of importing partials that I deem valid as well. On the bright side, it makes the file more readable. On the other hand, it makes updating it slightly more painful. Anyway, I'll let you decide which is best, it does not matter much. For this way of doing, the main file should respect these guidelines:

* one `@import` per folder;
* a linebreak after `@import`;
* each file on its own line;
* a new line after the last import from a folder;
* file extensions and leading underscores omitted.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import
  'vendors/bootstrap',
  'vendors/jquery-ui';

@import
  'utils/variables',
  'utils/functions',
  'utils/mixins',
  'utils/placeholders';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/contact';

@import
  'themes/theme',
  'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import
  vendors/bootstrap,
  vendors/jquery-ui

@import
  utils/variables,
  utils/functions,
  utils/mixins,
  utils/placeholders

@import
  base/reset,
  base/typography

@import
  layout/navigation,
  layout/grid,
  layout/header,
  layout/footer,
  layout/sidebar,
  layout/forms

@import
  components/buttons,
  components/carousel,
  components/cover,
  components/dropdown

@import
  pages/home,
  pages/contact

@import
  themes/theme,
  themes/admin
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>In order to not have to import each file manually, there is an extension to Ruby Sass called <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, making it possible to use glob patterns in Sass <code>@import</code> such as <code>@import "components/*"</code>.</p>
  <p>That being said, I would not recommend it because it imports files following the alphabetical order which is usually not what you want, especially when dealing with a source-order dependent language.</p>
</div>






## Shame file

There is an interesting concept that has been made popular by [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) and [Chris Coyier](http://css-tricks.com) that consists of putting all the CSS declarations, hacks and things we are not proud of in a *shame file*. This file, dramatically titled `_shame.scss`, would be imported after any other file, at the very end of the stylesheet.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a {
    color: #BADA55 !important;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a
    color: #BADA55 !important
{% endhighlight %}
  </div>
</div>



### Περαιτέρω ανάγνωση

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
