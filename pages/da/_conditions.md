
## Betingede udsagn

Du kender sikkert allerede til at Sass tilbyder betingede udsagn via `@if` og `@else` direktiverne. Medmindre du har rimelig kompleks logik i din kode, så er der ikke behov for betingede udsagn i dine hverdags-stylesheets. Faktisk, så eksisterer de hovedsageligt for biblioteker og frameworks.

Under alle omstændigheder, hvis du nogensinde finder behovet for dem, så respektér venligst følgende guidelines:

* Ingen paranteser medmindre de er nødvendige;
* Hav altid en ny, tom linje før `@if`;
* Hav altid et linjeskift efter den åbnende klamme (`{`);
* `@else` udsagn skal være på den samme linje som den forrige, lukkende klamme (`}`).
* Hav altid en ny, tom linje efter den sidste, lukkende klamme (`}`), medmindre den næste linje er en lukkende klamme (`}`).

{% include snippets/conditions/01/index.html %}

Når du tester en falsk værdi, skal du altid bruge `not` keywordet i stedet for at teste det imod `false` eller `null`.

{% include snippets/conditions/02/index.html %}

Læg altid variabel-delen på den venstre side af et udsagn, og det (u)forventede resultat på den højre side. Omvendte betingede udsagn er ofte sværere at læse, især for uerfarne udviklere.

{% include snippets/conditions/03/index.html %}

Når du anvender betingede udsagn inden for en funktion, for at returnere et forskelligt resultat baseret på nogle betingelser, så vær altid sikker på at funktionen stadig har et `@return` udsagn uden for enhver betinget blok.

{% include snippets/conditions/04/index.html %}
