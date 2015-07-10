
# Løkker

Fordi Sass giver os komplekse datastrukturer såsom [lister](#lists) og [maps](#maps), så er det ikke nogen overraskelse at det også giver en måde for forfattere at iterere over disse enheder.

Dog, så indebærer tilstedeværelsen af løkker ofte en moderat, kompleks logik der sandsynligvis ikke hører til Sass. Før en løkke anvendes bør man sikre sig at den giver mening, og faktisk løser et problem.

## Each

`@each` løkken er klart et af de mest-anvendte af de tre løkker, som Sass tilbyder. Den tilbyder en ren API til at iterere over en liste eller et map.

{% include snippets/loops/01/index.html %}

Når der itereres over et map, så anvend altid `$key` og `$value` som variabelnavne for at fastholde konsistens.

{% include snippets/loops/02/index.html %}

Sikr dig også, at respektere disse guidelines for at bevare læsbarhed:

* Hav altid en tom, ny linje før `@each`;
* Hav altid en tom, ny linje efter den afsluttende klamme (`}`), medmindre den næste linje er en afsluttende klamme (`}`).

## For

`@for` løkken er brugbar når den kombineres med CSS' `:nth-*` pseudo-klasser. Bortset fra disse scenarier, så foretræk en `@each` løkke hvis du *er nødt til* at iterere over noget.

{% include snippets/loops/03/index.html %}

Anvend altid `$i` som en variabelnavn for at holde dig til den almene konvention, og medmindre du har en virkelig god grund til det, så brug aldrig `to` nøgleordet: brug altid `through`. Mange udviklere ved slet ikke at Sass tilbyder denne variation; at anvende den kan lede til forvirring.

Vær også sikker på, at respektere disse guidelines for at bevare læsbarhed:

* Hav altid en tom, ny linje før `@for`;
* Hav altid en tom, ny linje efter den afsluttende klamme (`}`), medmindre den næste linje er en afsluttende klamme (`}`). 

## While

`@while` løkken har absolut ingen brugssituation i et virkeligt Sass-projekt, især siden der ikke er nogen måde at bryde løkken indefra. **Brug det ikke**.
