
# Responsive Web Design και breakpoints

Δε νομίζω ότι χρειάζεται να κάνω κάποια εισαγωγή για το Responsive Web Design τώρα που βρίσκεται παντού. Πάραυτα μπορεί να αναρωτηθείς *γιατί υπάρχει ενότητα για το RWD στο Sass styleguide;* Βασικά υπάρχουν μερικά πράγματα που μπορούν να γίνουν για να δουλεύουμε πιο εύκολα με τα breakpoints, οπότε σκέφτηκα ότι δε θα ήταν κακή ιδέα να τα παρουσιάσω εδώ.

## Ονομάζοντας τα breakpoints

Νομίζω μπορούμε να πούμε με ασφάλεια ότι τα media queries δεν πρέπει να δεσμεύονται σε συγκεκριμένες συσκευές. Για παράδειγμα, είναι πραγματικά κακή ιδέα να στοχεύουμε iPads ή κινητά Blackberry συγκεκριμένα. Τα media queries πρέπει να μεριμνούν για ένα εύρος μεγέθων οθονών, έως ότου ο σχεδιασμός να διακοπεί και το επόμενο media αναλαμβάνει.

Για τους ίδιους λόγους, τα breakpoints δεν πρέπει να ονομάζονται βάσει συσκευών αλλά με πιο γενικά κριτήρια. Ειδικά δεδομένου ότι μερικά κινητά είναι πλέον μεγαλύτερα από tablets, μερικά tablets μεγαλύτερα από μικρές οθόνες υπολογιστών, και πάει λέγοντας…

{% include snippets/rwd/01/index.html %}

[Σ' αυτό το σημείο](http://css-tricks.com/naming-media-queries/), οποιαδήποτε ονοματολογική σύμβαση ξεκαθαρίζει ότι ένα design δεν είναι άμεσα συνδεδεμένο με ένα συγκεκριμένο είδος συσκευής, μας κάνει, αρκεί να προκύπτει μια τάξη μεγέθους από το όνομα.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>Τα προηγούμενα παραδείγματα χρησιμοποιούν nested maps για να καθορίσουν breakpoints, παρ' όλ' αυτά εξαρτάται από το είδος διαχειριστή των breakpoints που χρησιμοποιείς. Μπορείς να προτιμήσεις strings αντί για inner maps για μεγαλύτερη ευελιξία (π.χ. <code>'(min-width: 800px)'</code>).</p>
</div>

## Διαχειριστής των breakpoints

Αφού έχεις ονομάσει τα breakpoints σου όπως θες, πρέπει να τα χρησιμοποιήσεις σε πραγματικά media queries. Υπάρχουν πολλοί τρόποι να το κάνεις αλλά είμαι μεγάλος υποστηρικτής του breakpoint map το οποίο διαβάζεται από μία getter συνάρτηση. Αυτό το σύστημα είναι απλό και αποτελεσματικό.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Προφανώς, πρόκειται για έναν απλουστευμένο διαχειριστή των breakpoints. Αν χρειάζεστε κάτι πιο ευέλικτο, προτείνω να μην ανακαλύψετε ξανά τον τροχό και να χρησιμοποιήσετε κάτι που έχει αποδειχτεί αποτελεσματικό όπως το <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, το <a href="http://breakpoint-sass.com/">Breakpoint</a> ή το <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
   <p>Αν ψάχνετε περισσότερο υλικό για διάβασμα στο πώς να προσεγγίσετε τα Media Queries στη Sass, τόσο το <a href="http://www.sitepoint.com/managing-responsive-breakpoints-sass/">SitePoint</a> (από τον υποφαινόμενο) όσο και το <a href="http://css-tricks.com/approaches-media-queries-sass/">CSS-Tricks</a> έχουν ωραία άρθρα σχετικά με το θέμα αυτό.</p>
</div>

## Χρήση των media Queries

Μέχρι πρόσφατα υπήρχε μια διαμάχη για το πού πρέπει να γράφονται τα media queries: ανήκουν μέσα στους selectors (η Sass το επιτρέπει) ή πρέπει να είναι αυστηρά εκτός; Μπορώ να πω ότι είμαι θερμός υποστηρικτής του συστήματος *media-queries-μέσα-σε-selectors*, γιατί πιστεύω πως συνδιάζεται καλά με τη λογική των *components*.

{% include snippets/rwd/04/index.html %}

Παράγει το εξής αποτέλεσμα σε CSS:

{% include snippets/rwd/05/index.html %}

Μπορεί να έχετε ακούσει ότι αυτή η σύμβαση οδηγεί σε επαναλαμβανόμενα media queries στη CSS. Πράγμα που ισχύει. Παρ' όλα αυτά, [έχουν γίνει δοκιμές](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) και το πόρισμα είναι ότι δεν έχει σημασία εφόσον το Gzip (ή κάτι ανάλογο) έχει κάνει ό,τι κάνει:

> … we hashed out whether there were performance implications of combining vs scattering Media Queries and came to the conclusion that the difference, while ugly, is minimal at worst, essentially non-existent at best.<br>
> &mdash; [Sam Richards, regarding Breakpoint](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries)

Οπότε, αν πραγματικά σας απασχολούν τα επαναλαμβανόμενα media queries, μπορείτε να χρησιμοποιήσετε ένα εργαλείο για να τα συγχωνεύσετε όπως [αυτό το gem](https://github.com/aaronjensen/sass-media_query_combiner), αν και πρέπει να προειδοποιήσω ότι μπορεί να έχετε παρενέργειες με το να μετακινείτε CSS πάνω-κάτω. Γνωρίζετε πολύ καλά ότι η σειρά του πηγαίου κώδικα είναι σημαντική.
