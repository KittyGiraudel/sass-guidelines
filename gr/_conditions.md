
# Conditional statements

Πιθανώς ήδη γνωρίζετε ότι η Sass παρέχει conditional statements μέσω των `@if` και `@else` directives. Εκτός αν έχετε κάποια περίπλωκη λογική στον κώδικα σας, δεν συντρέχει λόγος χρήσης των conditional statements στα stylesheets σας. Στην πραγματικότητα, υπάρχουν κυρίως για την χρήση τους σε libraries και frameworks.

Εν πάση περιπτώσει, αν ποτέ βρεθείτε στην ανάγκη τους, παρακαλώ να σεβαστείτε τα ακόλουθα guidelines:

* αποφεύγεται τις παρενθέσεις εκτός και αν είναι αναγκαίο;
* Πάντα αφήνετε καινούργια γραμμή πριν απο ένα `@if`;
* Πάντα αφήνετε καινούργια γραμμή μετά το χαρακτήρα (`{`);
* `@else` πρέπει να είναι στην ίδια γραμμή με τον χαρακτήρα (`}`) του προηγούμενου `@if`.
* Πάντα αφήνετε καινούργια γραμμή μετά το τελευταίο χαρακτήρα (`}`).

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if $support-legacy {
  // ...
} @else {
  // ...
}

// Nope
@if ($support-legacy == true) {
  // ...
}
@else {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if $support-legacy
  // ...
@else
  // ...

// Nope
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

Όταν ελεγχεται για κάποια μη-αληθή τιμή, να χρησιμοποιείται πάντα την λέξη κλειδή `not` αντί να ελεγχεται για `false` ή `null`.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if not index($list, $item) {
  // ...
}

// Nope
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if not index($list, $item)
  // ...

// Nope
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

Όταν χρησημοποιείται conditional statements μέσα σε κάποιο function το οποίο θα επιστρέφει διαφορετική τιμή ανάλογα με τις προυποθέσεις του conditional statement, βεβαιωθείτε πάντα ότι το function εξακολουθεί να έχει `@return` έξω απο το μπλοκ του conditional statement.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// Nope
@function dummy($condition) {
  @if $condition {
    @return true;
  } @else {
    @return false;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// Nope
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>
