
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

Παράλληλα, η CSS είναι μια απλή γλώσσα. Η Sass που προορίζεται για την εξαγωγή CSS, δεν θα έπρεπε να είναι αρκετά πιο περίπλοκη απο την CSS. Η [αρχή KISS](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid) είναι το κλειδί και μπορεί να πάρει προτεραιότητα έναντι της [DRY αρχής](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself) σε κάποιες περιπτώσεις.

Μερικές φορές, είναι καλύτερο να επαναλάμβανόμαστε λίγο για να κρατήσουμε τον κώδικα συντηρήσιμο, αντι να φτιάξεις κάτι βαρή, δυσμεταχείριστος και αδικαιολόγητα περίπλοκο σύστημα που είναι αδύνατο να συντηρηθεί επειδή είναι υπερβολικά περίπλοκο.

Επίσης, και επιτρέψτε μου να παραθέσω τον [Harry Roberts](https://csswizardry.com) για ακόμη μια φορά, **ο πραγματισμός υπερέχει τις τελειότητας**. Μετά απο κάποιο σημείο, μάλλον θα βρείτε τον εαυτό σας να πηγαίνει ενάντια στα πράγματα που περιγράφονται εδώ. Αν βγάζουν νόημα και πιστεύετε πως είναι ορθά, μην δυστάσετε να το κάνετε. Code is just a means, not an end.

## Extending the guidelines

A large part of this styleguide is strongly opinionated. I have been reading and writing Sass for several years now, to the point where I now have a lot of principles when it comes to writing clean stylesheets. I understand that it might not please nor suit everybody, and this is perfectly normal.

Although, I believe that guidelines are made to be extended. Extending Sass Guidelines could be as simple as having a document stating that the code is following the guidelines from thise styleguide except for a few things; in which case, specific rules would be explained below.

An example of styleguide extension can be found on the [SassDoc repository](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md):

> [This](https://github.com/SassDoc/sassdoc/blob/master/GUIDELINES.md) is an extension to [Node Styleguide](https://github.com/felixge/node-style-guide) by Felix Geisendörfer. Anything from this document overrides what could be said in the Node Styleguide.

###### Περαιτέρω ανάγνωση

* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)
