
# Εισαγωγή

## Λόγοι για ένα styleguide

Ένα styleguide δεν είναι ένα έγγραφο απλά ευχάριστο στην ανάγνωση, που απεικονίζει μια ιδανική κατάσταση για τον κώδικά σου. Είναι ένα έγγραφο βασικής σημασίας για τη ζωή ενός project, το οποίο περιγράφει γιατί και πώς πρέπει να γράφεται ο κώδικας. Μπορεί να ακούγεται πλεονασμός για μικρά projects, αλλά βοηθάει πολύ στη διατήρηση ενός καθαρού, επεκτάσιμου και ευκολοσυντήρητου κώδικα.

Περιττό να πούμε πως όσο περισσότεροι developers εμπλέκονται σε ένα project, τόσο περισσότερο χρειάζονται guidelines για τον κώδικα. Στα ίδια πλαίσια, όσο μεγαλύτερο το project, τόσο αναγκαίο καθιστάται ένα styleguide.

Ο [Harry Roberts](http://csswizardry.com) αναφέρει πολύ καλά στο [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide):

<blockquote>
  <p>Ένα code styleguide (σημ., όχι οπτικό styleguide) είναι ένα πολύτιμο εργαλείο για ομάδες οι οποίες:</p>
  <ul>
    <li>αναπτύσσουν και συντηρούν προϊόντα για ένα εύλογο χρονικό διάστημα·</li>
    <li>απασχολούν developers με διαφορετικές ικανότητες και ειδικότητες·</li>
    <li>απασχολούν έναν αριθμό από διαφορετικούς developers οι οποίοι εργάζονται πάνω σε ένα προϊόν ανά πάσα στιγμή·</li>
    <li>προσλαμβάνουν τακτικά νέο προσωπικό·</li>
    <li>έχουν έναν αριθμό από codebases στα οποία οι developers συχνάζουν.</li>
  </ul>
</blockquote>

## Disclaimer

Πρώτα απ' όλα: **δεν πρόκειται για ένα CSS styleguide**. Αυτό το έγγραφο δεν εξετάζει συμβάσεις ονοματοδοσίας για κλάσεις CSS, modular patterns, ούτε το ζήτημα του ID στη σφαίρα της CSS. Αυτά τα guidelines έχουν μοναδικό στόχο να εξετάσουν θέματα ειδικά για τη Sass.

Επίσης, αυτό το styleguide είναι δικό μου και επομένως **ιδιαίτερα δογματικός**. Δες στο σαν μία συλλογή από μεθοδολογίες και συμβουλές τις οποίες έχω τελειοποιήσει και έχω προσφέρει την πάροδο των χρόνων. Μου δίνεται επίσης η ευκαιρία να παραθέσω κάποιες αξιοσημείωτες πηγές, οπότε μην αμελήσετε να διαβάσετε τα *περαιτέρω αναγνώσματα*.

Προφανώς, αυτός δεν είναι ο μοναδικός τρόπος να αντιμετωπίσεις τα πράγματα, οπότε μπορεί να αρμόζει ή να μην αρμόζει στο project σου. Επέλεξε ελεύθερα και οτιδήποτε προσάρμοσέ το στις ανάγκες σου. Όπως λέμε, *your mileage may vary*.

## Βασικές αρχές

Στο τέλος της μέρας, αν μπορείς να συγκρατήσεις ένα πράγμα απ' όλο το styleguide, είναι ότι **η Sass πρέπει να είναι όσο πιο απλή γίνεται**.

Χάρη στα ανόητα πειράματά μου όπως οι [bitwise operators](https://github.com/HugoGiraudel/SassyBitwise), οι [iterators and generators](https://github.com/HugoGiraudel/SassyIteratorsGenerators) και [ένας JSON parser](https://github.com/HugoGiraudel/SassyJSON) σε Sass, ξέρουμε όλοι τι μπορεί να επιτευχθεί με αυτόν τον preprocessor.

Παράλληλα η CSS είναι μια απλή γλώσσα. Η Sass, being intended to write CSS, should not get much more complex than regular CSS. The [KISS principle](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid) is key here and may even take precedence over the [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself) in some circumstances.

Sometimes, it’s better to repeat a little to keep the code maintainable, rather than building a top-heavy, unwieldy, unnecessarily complicated system that is completely unmaintainable because it is overly complex.

Also, and let me quote [Harry Roberts](https://csswizardry.com) once again, **pragmatism trumps perfection**. At some point, you will probably find yourself going against the rules described here. If it makes sense, if it feels right, do it. Code is just a means, not an end.

## Extending the guidelines

A large part of this styleguide is strongly opinionated. I have been reading and writing Sass for several years now, to the point where I now have a lot of principles when it comes to writing clean stylesheets. I understand that it might not please nor suit everybody, and this is perfectly normal.

Although, I believe that guidelines are made to be extended. Extending Sass Guidelines could be as simple as having a document stating that the code is following the guidelines from thise styleguide except for a few things; in which case, specific rules would be explained below.

An example of styleguide extension can be found on the [SassDoc repository](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md): 

> [This](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md) is an extension to [Node Styleguide](https://github.com/felixge/node-style-guide) by Felix Geisendörfer. Anything from this document overrides what could be said in the Node Styleguide.

###### Further reading

* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)