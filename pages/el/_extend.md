
# Extend

Το `@extend` directive είναι μία ισχυρή δυνατότητα που είναι συχνά παρεξηγημένη. Σε γενικές γραμμές, προσφέρει τη δυνατότητα να πεις στη Sass να σχεδιάσει ένα element A σαν να έχει επιλέξει έναν selector B. Περιττό να πούμε ότι αυτό μπορεί να γίνει πολύτιμος σύμμαχος όταν γράφουμε modular CSS.

Παρ' όλ' αυτά, ο πραγματικός σκοπός του `@extend` είναι να διατηρεί τις σχέσεις (περιορισμούς) εντός επεκταμένων selectors μεταξύ των rulesets. Τι σημαίνει αυτό ακριβώς;

- Οι selectors έχουν *περιορισμούς* (π.χ. ο `.bar` στο `.foo > .bar` πρέπει να έχει έναν γονέα `.foo`);
- Αυτοί οι περιορισμοί *μεταφέρονται* στον επεκταμένο selector (π.χ. ο `.baz { @extend .bar; }` θα παράξει `.foo > .bar, .foo > .baz`);
- Τα declarations του επεκταμένου selector θα μοιραστούν με τον εκτεινόμενο selector.

Με βάση τα παραπάνω, είναι εμφανές πως η επέκταση των selectors με επιεικείς περιορισμούς μπορεί να οδηγήσει σε μια έκρηξη από selectors. Αν ο `.baz .qux` επεκτείνει τον `.foo .bar`, ο παραγόμενος selector μπορεί να είναι `.foo .baz .qux` ή `.baz .foo .qux`, αφού και ο `.foo` και ο `.baz` είναι πρόγονοι. Μπορεί να είναι γονείς, παπούδες, κ.ο.κ.

Πάντα να προσπαθείς να ορίζεις σχέσεις μέσω [selector placeholders](http://www.sitepoint.com/sass-reference/placeholders/), όχι μέσω πραγματικών selectors. Αυτό θα σου δώσει την ελευθερία να χρησιμοποιήσεις (και να αλλάξεις) οποιοδήποτε naming convention έχεις ορίσει για τους selectors σου, και αφού οι σχέσεις ορίζονται μόνο μία φορά μέσα στους placeholders, υπάρχουν πολύ μικρότερες πιθανότητες να παράξεις απροσδόκητους selectors.

Για να κληρονομήσεις styles, χρησιμοποίησε το `@extend` μόνο αν ο εκτεινόμενος `.class` ή `%placeholder` selector _είναι ένα είδος_ επεκταμένου selector. Για παράδειγμα, ένα `.error` είναι ένα είδος `.warning`, οπότε το `.error` μπορεί να κάνει `@extend .warning`.

{% include snippets/extend/01/index.html %}

Υπάρχουν πολλά σενάρια στα οποία η επέκταση βοηθάει και αξίζει τον κόπο. Να θυμάσαι πάντα τους εξής κανόνες για να μπορείς να κάνεις `@extend` με προσοχή:

* Να επεκτείνεις σε `%placeholders` κυρίως, όχι σε κανονικούς selectors.
* Όταν επεκτείνεις κλάσεις, να επεκτείνεις μόνο μία κλάση από μία άλλη κλάση, _ποτέ_ από ένα [σύνθετο selector](http://www.w3.org/TR/selectors4/#syntax).
* Να επεκτείνεις ευθέως έναν `%placeholder` όσο το δυνατόν λιγότερο.
* Απόφυγε να επεκτείνεις γενικούς ancestor selectors (π.χ. `.foo .bar`) ή γενικούς sibling selectors (π.χ. `.foo ~ .bar`). Αυτό είναι που προκαλεί την έκρηξη από selectors.

<div class="note">
  <p>Συχνά λένε ότι το <code>@extend</code> βοηθάει στο μέγεθος των αρχείων επειδή συνδιάζει selectors αντί να επαναλαμβάνει τα properties. Αυτό ισχύει, αν και η διαφορά είναι αμελητέα εφόσον γίνει συμπίεση με <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a>.</p>
  <p>Κατόπιν αυτού, αν δε μπορείς να χρησιμοποιήσεις Gzip (ή κάτι παρόμοιο) τότε η προσέγγιση με το <code>@extend</code> μπορεί να φανεί πολύτιμη, ειδικά αν το βάρος του stylesheet επιβαρύνει το performance.</p>
</div>

## Επέκταση και media queries

Να επεκτείνεις selectors μόνο μέσα στο ίδιο media scope (`@media` directive). Σκέψου το media query ως άλλο ένα εμπόδιο.

{% include snippets/extend/02/index.html %}

Οι απόψεις φαίνεται να είναι άκρως αντιφατικές σχετικά με το `@extend` σε σημείο που πολλοί developers συμπεριλαμβανομένου και του εαυτού μου δεν υποστηρίζουν την χρήση του, όπως μπορείτε να διαβάσετε στα παρακάτω άρθρα:

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)


Κατόπιν αυτού για να συνοψίσουμε, προτείνω την χρήση του `@extend` μόνο για την διατήρηση των σχέσεων εντός κάποιων selectors. Αν δύο selectors έχουν παρόμοια χαρακτηριστικά, τότε είναι η ιδανική περίπτωση για το `@extend`. Αν δεν έχουν κάποια σχέση αλλά μοιράζονται μερικά rules, ένα `@mixin` θα ταίριαζε καλύτερα. Μπορείτε να διαβάσετε περισσότερα σχετικά με το ποιό από τα 2 να διαλέξετε θα βρείτε σε αυτό το [άρθρο](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/).

<div class="note">
  <p>Ευχαριστώ τον <a href="https://twitter.com/davidkpiano">David Khourshid</a> για τη βοήθεια και την πείρα σ' αυτή την ενότητα.</p>
</div>

* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
* [Extending in Sass Without Mess](http://www.smashingmagazine.com/2015/05/04/extending-in-sass-without-mess/)
