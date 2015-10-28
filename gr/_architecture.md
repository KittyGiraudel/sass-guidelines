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

Υπάρχει μια τεράστια διαφορά μεταξύ του να κάνεις κάτι *να δουλεύει* και να κάνει κάτι *καλά*. Πάλι, η CSS είναι πολύ «ακατάσταση» γλώσσα <sup>[citation needed]</sup>. Όσο λιγότερη CSS έχουμε, τόσο το καλύτερο. Δεν θέλουμε να αντιμετωπίσουμε καταστάσεις στις οποίες θα έχουμε megabytes απο κώδικα CSS. Για να κρατήσουμε τα stylesheets μικρά και αποδοτικά &mdash;&thinsp;και προφανώς δεν θα σας ξαφνιάσει&thinsp;&mdash; είναι καλό να σκεφτόμαστε το interface ως μια συλλογή απο components.

Τα Components μπορεί να είναι οτιδήποτε, αρκεί:

* να κάνουν μόνο ένα πράγμα·
* να είναι επαναχρησιμοποιήσιμα και να επαναχρησιμοποιούνται μέσα στο project·
* να είναι ανεξάρτητα.

Για παράδειγμα, μια φόρμα αναζήτησης θα πρέπει να θεωρείται ως ένα component. Πρέπει να είναι επαναχρησιμοποιήσιμο, σε διαφορετικές τοποθεσίες, σε διαφορετικές σελίδες, σε διαφορετικές καταστάσεις. Δεν πρέπει να εξαρτάται απο την θέση του στο DOM (footer, sidebar, κύριο περιεχόμενο&hellip;).

Σχεδόν όλα τα interface μπορούμε να τα θεωρήσουμε ως components και είναι αυτό που σας συνιστώ. Αυτό θα μικρήνει κατα πολύ την ποσότητα CSS κώδικα που χρειάζεται το project, αλλά τυγχάνει επίσης να είναι και ευκολότερο στην συντήρηση απο ένα χάος όπου όλα είναι ακατάστατα.






## Το 7-1 pattern

Επιστρέφουμε στην αρχιτεκτονική. Συνηθίζω να ακολουθώ το *7-1 pattern*: 7 φακέλους, 1 αρχείο. Ουσιαστικά, έχεις όλα τα partials μέσα σε 7 διαφορετικούς φακέλους, και ένα αρχείο στο πρώτο επίπεδο (συνήθως με την ονομασία `main.scss`) το οποίο κάνει import όλα τα άλλα για να τα κάνει compile σε ένα CSS stylesheet.

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
  <p>Ο <code>layout/</code> φάκελος θα μπορούσε επίσης να ονομαστεί <code>partials/</code>, αναλόγως τι προτιμάτε.</p>
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

Αν έχετε στυλιστικό κώδικα μόνο για συγκεκριμένες σελίδες, είναι προτιμότερο να μπούν στον φάκελο `pages/`, σε ένα αρχείο που παίρνει το ονομά του από την σελίδα. Για παράδειγμα, δεν είναι ασυνήθιστο το να έχεις στυλιστικό κώδικα για την αρχική σελίδα εξού και η ανάγκη για ένα `_home.scss` αρχείο μέσα στον φάκελο `pages/`.

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



### Το αρχείο Main

Το αρχείο main (το οποίο συνήθως ονομάζεται `main.scss`) πρέπει να είναι το μόνο Sass αρχείο απο το ολόκληρο το code base του οποίου το όνομα δεν ξεκινάει απο τον χαρακτήρα της κάτω παύλας. Το αρχείο αυτό δεν πρέπει να περιέχει τίποτα εκτός απο γραμμές `@import` και σχολίων.

Τα αρχεία πρέπει να γίνονται import με βάση τον φάκελο στον οποίο βρίσκονται, το ένα μετά το άλλο με την ακόλουθη σειρά:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

Προκειμένου να διατηρηθεί η αναγνωσιμότητα, το αρχείο main θα πρέπει να ακολουθεί τις παρακάτω κατευθυντήριες γραμμές:

* ένα αρχείο ανα `@import`·
* ενα `@import` ανα γραμμή·
* καμία κενή γραμμή μεταξύ δύο import απο τον ίδιο φάκελο·
* μια κενή γραμμή μετά απο το τελευταίο import ενός φακέλου·
* οι επεκτάσεις των αρχείων και οι χαρακτήρες κάτω παύλας που προηγούνται πρέπει να παραλειφθούν.

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

Υπάρχει ακόμα ένας τρόπος για να κάνεις import partial αρχεία τον οποίο θεωρώ έγκυρο. Στη θετική πλευρά, κάνει τα αρχεία ευανάγνωστα. Απο την άλλη, τα κάνει δυσκολότερα στην ενημέρωση. Εν πάση περιπτώσει, θα αφήσω εσάς να αποφασίσετε ποια είναι η καλύτερη, δεν έχει πολύ σημασία. Για αυτόν τον τρόπο, το αρχείο main θα πρέπει να τηρεί τις ακόλουθες κατευθυντήριες γραμμές:

* ένα `@import` ανά φάκελο·
* ένα linebreak ανά `@import`·
* κάθε αρχεία σε δικιά του γραμμή·
* μια κενή γραμμή μετά το τελευταίο import ενός φακέλου·
* οι επεκτάσεις των αρχείων και οι χαρακτήρες κάτω παύλας που προηγούνται πρέπει να παραλειφθούν.

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
  <p>Προκειμένου να μην χρειάζεται να κάνεις import κάθε αρχείο χειροκίνητα, υπάρχει ένα extension για την Ruby Sass το οποίο ονομάζεται <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>, καθιστώντας δυνατή την χρήση glob patterns στην Sass <code>@import</code> όπως <code>@import "components/*"</code>.</p>
  <p>Κατόπιν αυτού, δεν θα το συνιστούσα επειδή κάνει imports αρχεία ακολουθώντας αλφαβητική σειρά το οποίο συνήθως δεν είναι αυτό που θέλετε, ειδικά όταν έχεις να κάνεις με γλώσσες που βασίζονται στην σειρά του κώδικα.</p>
</div>






## Το αρχείο Shame

Υπάρχει μια ενδιαφέρουσα ιδέα που έχει γίνει δημοφιλή απο τους [Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com) και [Chris Coyier](http://css-tricks.com) that το οποίο συνηστά να βάζεις όλα τα CSS declarations, hacks και πράγματα για τα οποία δεν είμαστε περήφανοι μέσα στο αρχείο *shame*. Αυτό το αρχείο, με τον δραματικό τίτλο `_shame.scss`, θα γινόταν import μετά από όλα τα άλλα αρχεία στο τέλος του stylesheet.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Nav specificity fix.
 *
 * Κάποιος χρησιμοποίησε ID στον κώδικα του header (`#header a {}`) το οποίο υπερέχει τα
 * nav selectors (`.site-nav a {}`). Χρησιμοποιήστε !important για να το παρακάμψετε μέχρι να βρώ
 * χρόνο να το διορθώσω.
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
 * Κάποιος χρησιμοποίησε ID στον κώδικα του header (`#header a {}`) το οποίο υπερέχει τα
 * nav selectors (`.site-nav a {}`). Χρησιμοποιήστε !important για να το παρακάμψετε μέχρι να βρω
 * χρόνο να το διορθώσω.
 */
.site-nav a
    color: #BADA55 !important
{% endhighlight %}
  </div>
</div>



### Περαιτέρω ανάγνωση

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
