
## Variabler

Variabler er essencen af ethvert programmeringssprog. De tillader os at genbruge værdier uden at være nødsaget til at kopiere dem igen og igen. Vigtigst er dog at de gør opdateringen af en værdi meget nem. Slut med søg og erstat, eller manuel gennemgang.

Dog er CSS intet andet end en kæmpe kurv, der indeholder alle vores æg. Modsat mange sprog, så er der ikke nogen egentlige scopes i CSS. På grund af det er vi nødt til at holde særligt øje, når vi tilføjer variabler med risiko for at opleve konflikter.

Mit råd vil være, kun at oprette variabler når det giver mening. Lad være med at initialisere nye variabler bare fordi du kan, da det ikke vil hjælpe. En ny variabel bør kun blive skabt når alle følgende kriterier er mødt:

* værdien bliver gentaget mindst to gange;
* værdien vil sandsynligvis blive opdateret mere end én gang;
* alle tilfælde af værdien er forbundet til variablen (f. eks. ikke ved et tilfælde);

Basalt set, er der ikke nogen grund til at deklarere en variabel der aldrig vil blive opdateret eller kun anvendes et enkelt sted.

### Scoping

Variabel-scoping i Sass har ændret sig med årene. Indtil for nylig har variabel-deklarationer inden for regelsæt og andre scopes været lokale, som udgangspunkt. Dog, når der allerede var en global variabel med det samme navn, så ændrede den lokale anvisning den globale variabel. Siden version 3.4, har Sass tacklet konceptet af scopes korrekt, og skaber en ny lokal variabel i stedet.

Dokumentationen taler om *overskygning af globale variabler*. Når en variabel, der allerede eksisterer i det globale scope, deklareres i et indre scope (selektor, funktion, mixin...), så siger man at den lokale variable *overskygger* den globale. Basalt set, så overskriver den kun for det lokale scope.

Følgende kodestykke forklarer konceptet bag *overskygning af variabler*.

{% include snippets/variables/01/index.html %}

### `!default` flaget

Når du bygger et bibliotek, et framework, et gittersystem, eller ethvert andet stykke Sass der er tiltænkt at blive distribueret og anvendt af eksterne udviklere, bør alle konfigurations-variabler være defineret med `!default` flaget, så de kan blive overskrevet.

{% include snippets/variables/02/index.html %}

Takket være dette, så kan en udvikler definere hans egen `$baseline` variabel *før* han importerer dit bibliotek, uden at se hans værdi blive redefineret.

{% include snippets/variables/03/index.html %}

### `!global` flaget

`!global` flaget bør kun anvendes når en global variabel fra et lokalt scope overskrives. Når en variabel på root-niveauet defineres, bør `!global` flaget udelades.

{% include snippets/variables/04/index.html %}

### Flere variabler eller maps

Der er fordele ved at bruge maps frem for flere, særskilte variabler. Den primære er evnen til at iterere over et map, hvilket ikke er muligt med enkeltstående variabler.

En anden fordel ved at bruge et map er evnen til at skabe en lille getter-funktion der giver en lettere tilgængelig API. For eksempel, overvej følgende Sass kode:

{% include snippets/variables/05/index.html %}
