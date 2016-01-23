
# Variables

Le variabili sono l'essenza di ogni linguaggio di programmazione. Le variabili ci permettono di riutilizzare un valore senza doverlo copiare e incollare ogni volta. Ancora più importante, le variabili ci permettono di aggiornare un valoro molto facilmente. Addio al cerca e sostituisci o alla sostituzione manuale.

Tuttavia CSS non è altro che un enorme cestino che contiene tutte le nostre uova. A differenza di altri linguaggi, CSS non implementa uno _scope_. Because of this, we have to pay real attention when adding variables at the risk of witnessing conflicts.

My advice would be to only create variables when it makes sense to do so. Do not initiate new variables for the heck of it, it won’t help. A new variable should be created only when all of the following criteria are met:

* the value is repeated at least twice;
* the value is likely to be updated at least once;
* all occurrences of the value are tied to the variable (i.e. not by coincidence).

Basically, there is no point declaring a variable that will never be updated or that is only being used at a single place.

## Scoping

Variable scoping in Sass has changed over the years. Until fairly recently, variable declarations within rulesets and other scopes were local by default. However when there was already a global variable with the same name, the local assignment would change the global variable. Since version 3.4, Sass now properly tackles the concept of scopes and create a new local variable instead.

The docs talk about *global variable shadowing*. When declaring a variable that already exists on the global scope in an inner scope (selector, function, mixin...), the local variable is said to be *shadowing* the global one. Basically, it overrides it just for the local scope.

The following code snippet explains the *variable shadowing* concept.

{% include snippets/variables/01/index.html %}

## `!default` flag

When building a library, a framework, a grid system or any piece of Sass that is intended to be distributed and used by external developers, all configuration variables should be defined with the `!default` flag so they can be overwritten.

{% include snippets/variables/02/index.html %}

Thanks to this, a developer can define his own `$baseline` variable *before* importing your library without seeing his value redefined.

{% include snippets/variables/03/index.html %}

## `!global` flag

The `!global` flag should only be used when overriding a global variable from a local scope. When defining a variable at root level, the `!global` flag should be omitted.

{% include snippets/variables/04/index.html %}

## Multiple variables or maps

There are advantages of using maps rather than multiple distinct variables. The main one is the ability to loop over a map, which is not possible with distinct variables.

Another pro of using a map is the ability to create a little getter function to provide a friendlier API. For instance, consider the following Sass code:

{% include snippets/variables/05/index.html %}
