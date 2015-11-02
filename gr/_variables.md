
# Μεταβλητές

Οι μεταβλητές είναι η ουσία κάθε προγραμματιστικής γλώσσας. Μας επιτρέπουν να επαναχρησιμοποιούμε τιμές χωρίς να χρειάζεται να τις αντιγράφουμε ξανά και ξανά. Κυρίως, κάνουν την ενημέρωση μιας τιμής πολύ εύκολη. Δε χρειάζεται πλέον να κάνουμε αναζήτηση και αντικατάσταση ή χειροκίνητη σάρωση.

Παρ' όλα αυτά η CCS δεν είναι τίποτα άλλο παρά ένα μεγάλο καλάθι που περιέχει όλα μας τα αβγά. Σε αντίθεση με πολλές γλώσσες, δεν υπάρχουν πραγματικά scopes στη CSS. Εξαιτίας αυτού, πρέπει να προσέχουμε πάρα πολύ όταν προσθέτουμε μεταβλητές διότι υπάρχει ο κίνδυνος να αντιμετωπίσουμε προβλήματα.

Η συμβουλή μου θα ήταν να δημιουργείτε μεταβλητές μόνο όταν έχει νόημα να το κάνετε. Μην αρχικοποιείτε μεταβλητές απλά για να το κάνετε, δεν θα βοηθήσει. Μία νέα μεταβλητή πρέπει να δημιουργείται μόνο όταν ισχύουν όλα τα παρακάτω κριτήρια:

* η τιμή επαναλαμβάνεται τουλάχιστον δύο φορές·
* η τιμή κατά πάσα πιθανότητα θα ανανεωθεί τουλάχιστον μια φορά·
* όλες οι εμφανίσεις της τιμής είναι συνδεδεμένες με τη μεταβλητή (π.χ. όχι από σύμπτωση)

Βασικά, δεν υπάρχει λόγος να δηλώσουμε μια μεταβλητή η οποία δεν θα ανανεωθεί ποτέ ή χρησιμοποιείται σε ένα μόνο μέρος.






## Scoping

Το scoping των μεταβλητών στη Sass έχει αλλάξει με τα χρόνια. Μέχρι αρκετά πρόσφατα, οι δηλώσεις μεταβλητών μέσα σε ένα σετ κανόνων και σε άλλα scopes ήταν τοπικές από προεπιλογή. Παρ' όλα αυτά όταν υπήρχε ήδη μία global μεταβλητή με το ίδιο όνομα, η τοπική ανάθεση άλλαζε την global μεταβλητή. Από την έκδοση 3.4 και μετά, η Sass χειρίζεται σωστά την έννοια των scopes και δημιουργεί μια καινούρια τοπική μεταβλητή.

Τα έγγραφα αναφέρονται στην *επισκίαση global μεταβλητής*. Όταν δηλώνουμε μια μεταβλητή η οποία υπάρχει ήδη στο global scope, σε ένα εσωτερικό scope (selector, συνάρτηση, mixin...), λέμε ότι η τοπική μεταβλητή *επισκιάζει* την global. Βασικά, την παρακάμπτει μόνο για το local scope.

Το ακόλουθο κομμάτι κώδικα εξηγεί την έννοια της *επισκίασης μεταβλητής*.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Αρχικοποίησε μια global μεταβλητή σε επίπεδο root.
$variable: 'initial value';

// Δημιούργησε ένα mixin που παρακάμπτει την global μεταβλητή.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Δημιούργησε μια τοπική μεταβλητή που επισκιάζει την global.
  $variable: 'local value';

  // Κάνε include το mixin: παρακάμπτει την global μεταβλητή.
  @include global-variable-overriding;

  // Τύπωσε την τιμή της μεταβλητής.
  // Είναι η **τοπική** μεταβλητή, εφόσον επισκιάζει την global.
  content: $variable;
}

// Τύπωσε την μεταβλητή σε άλλον selector που δεν κάνει επισκίαση.
// Είναι η **global** μεταβλητή, όπως ήταν αναμενόμενο.
.other-local-scope::before {
  content: $variable;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Αρχικοποίησε μια global μεταβλητή σε επίπεδο root.
$variable: 'initial value'

// Δημιούργησε ένα mixin που παρακάμπτει την global μεταβλητή.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
  // Δημιούργησε μια τοπική μεταβλητή που επισκιάζει την global.
  $variable: 'local value'

  // Κάνε include το mixin: παρακάμπτει την global μεταβλητή.
  +global-variable-overriding

  // Τύπωσε την τιμή της μεταβλητής.
  // Είναι η **τοπική** μεταβλητή, εφόσον επισκιάζει την global.
  content: $variable

// Τύπωσε την μεταβλητή σε άλλον selector που δεν κάνει επισκίαση.
// Είναι η **global** μεταβλητή, όπως ήταν αναμενόμενο.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>






## `!default` flag

Όταν φτιάχνουμε μια βιβλιοθήκη, ένα framework, ένα grid system ή ένα άλλο κομμάτι Sass το οποίο έχουμε σκοπό να το διανείμουμε και να χρησιμοποιηθεί από εξωτερικούς developers, όλες οι μεταβλητές παραμετροποίησης πρέπει να δηλωθούν με το `!default` flag έτσι ώστε να μπορούν να αντικατασταθούν.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$baseline: 1em !default;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$baseline: 1em !default
{% endhighlight %}
  </div>
</div>

Χάρη σε αυτό, ο develoepr μπορεί να ορίσει τη δική του μεταβλητή `$baseline` *προτού* εισάγει την βιλιοθήκη σας χωρίς να επαναοριστεί η τιμή του.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Η μεταβλητή του developer
$baseline: 2em;

// Η δήλωση `$baseline` της βιβλιοθήκης σας
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Η μεταβλητή του developer
$baseline: 2em

// Η δήλωση `$baseline` της βιβλιοθήκης σας
@import your-library

// $baseline == 2em
{% endhighlight %}
  </div>
</div>






## `!global` flag

Το `!global` flag πρέπει μόνο να χρησιμοποιείται όταν παρακάπτουμε μία global μεταβλητή από ένα τοπικό scope. Όταν δηλώνουμε μια μεταβλητή σε επίπεδο root, το `!global` flag πρέπει να παραλείπεται.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$baseline: 2em;

// Nope
$baseline: 2em !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$baseline: 2em

// Nope
$baseline: 2em !global
{% endhighlight %}
  </div>
</div>






## Πολλαπλές μεταβλητές ή maps

Υπάρχουν πλεονεκτήματα στο να χρησιμοποιούμε maps παρά να χρησιμοποιούμε πολλαπλές ξεχωριστές μεταβλητές. Το κυριότερο πλεονέκτημα είναι η δυνατότητα σάρωσης ενός map, πράγμα που δεν είναι δυνατό με ξεχωριστές μεταβλητές.

Ένα ακόμη πλεονέκτημα χρήσης maps είναι η δυνατότητα δημιουργίας μιας μικρής getter συνάρτησης για να παρέχουμε ένα πιο φιλικό API. Για παράδειγμα, δείτε τον παρακάτω κώδικα Sass:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer's name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer's name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer's name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer's name
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
