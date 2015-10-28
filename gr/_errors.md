
# Προειδοποιήσεις και σφάλματα

Αν υπάρχει μια λειτουργία που παραβλέπεται συχνά από αυτούς που γράφουν Sass, αυτή είναι η δυνατότητα να εμφανίζονται δυναμικά προειδοποιήσεις και σφάλματα. Πράγματι, η Sass διαθέτει τρία ειδικά directives για να εμφανίζει περιεχόμενο στο standard output system (CLI, compiling app...):

* `@debug`·
* `@warn`·
* `@error`.

Ας βγάλουμε στην άκρη το `@debug` μιας και προφανώς προορίζεται για το debugging της SassScript, πράγμα που δε μας αφορά εδώ. Οπότε μένουμε με το `@warn` και το `@error` τα οποία είναι εμφανώς ίδια, εκτός του ότι το ένα διακόπτει τον compiler ενώ το άλλο όχι. Σας αφήνω να μαντέψετε ποιο κάνει τί.

Τώρα, υπάρχουν πολλά περιθώρια σε ένα Sass project για προειδοποιήσεις και σφάλματα. Βασικά οποιοδήποτε mixin ή function προσδοκεί ένα συγκεκριμένο τύπο ή argument θα μπορούσε να πετάξει ένα σφάλμα αν κάτι πάει στραβά, ή να εμφανίσει μία προειδοποίηση όταν υποθέτει κάτι.



### Περαιτέρω ανάγνωση

* [An Introduction To Error Handling](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [Building a Logger Mixin](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [SassyLogger](https://github.com/HugoGiraudel/SassyLogger)






## Προειδοποιήσεις

Δείτε αυτό το function του [Sass-MQ](https://github.com/sass-mq/sass-mq) που επιδιώκει να μετατρέψει μια αξία από `px` σε `em`, για παράδειγμα:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size) {
  @if unitless($px) {
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.';
    @return mq-px2em($px + 0px);
  } @else if unit($px) == em {
    @return $px;
  }

  @return ($px / $base-font-size) * 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@function mq-px2em($px, $base-font-size: $mq-base-font-size)
  @if unitless($px)
    @warn 'Assuming #{$px} to be in pixels, attempting to convert it into pixels.'
    @return mq-px2em($px + 0px)
  @else if unit($px) == em
    @return $px

  @return ($px / $base-font-size) * 1em
{% endhighlight %}
  </div>
</div>

Εάν η αξία δεν έχει μονάδα μέτρησης, το function θεωρεί πως η αξία εκφράζεται σε pixels. Σ' αυτό το σημείο, μια υπόθεση ίσως είναι ριψοκίνδυνη, οπότε ο χρήστης θα έπρεπε να προειδοποιηθεί ότι το πρόγραμμα έκανε κάτι που θα μπορούσε να θεωρηθεί απροσδόκητο.






## Σφάλματα

Τα σφάλματα, σε αντίθεση με τις προειδοποιήσεις, αποτρέπουν τον compiler να συνεχίσει παρακάτω. Βασικά διακόπτουν το compilation και εμφανίζουν ένα μήνυμα στο output stream όπως και στο stack trace, πράγμα που βοηθάει στο debugging. Εξαιτίας όλων αυτών, τα σφάλματα πρέπει να πετιούνται όταν δεν υπάρχει τρόπος να συνεχιστεί η εκτέλεση του προγράμματος. Όπου είναι εφικτό, δοκίμασε να διορθώσεις το πρόβλημα και προτίμησε να εμφανίσεις μία προειδοποίηση.

Για παράδειγμα, ας πούμε ότι φτιάχνεις μία βελτιωμένη συνάρτηση για να έχεις πρόσβαση αξίες από ένα συγκεκριμένο map. Θα μπορούσε να πετάξεις ένα σφάλμα αν το ζητούμενο key δεν υπάρχει στο map.

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
  @if not map-has-key($z-indexes, $layer) {
    @error 'There is no layer named `#{$layer}` in $z-indexes. '
         + 'Layer should be one of #{map-keys($z-indexes)}.';
  }

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
  @if not map-has-key($z-indexes, $layer)
    @error 'There is no layer named `#{$layer}` in $z-indexes. '
         + 'Layer should be one of #{map-keys($z-indexes)}.'

  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
