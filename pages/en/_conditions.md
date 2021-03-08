
## Conditional statements

You probably already know that Sass provides conditional statements via the `@if` and `@else` directives. Unless you have some medium to complex logic in your code, there is no need for conditional statements in your everyday stylesheets. Actually, they mainly exist for libraries and frameworks.

Anyway, if you ever find yourself in need of them, please respect the following guidelines:

* No parentheses unless they are necessary;
* Always an empty new line before `@if`;
* Always a line break after the opening brace (`{`);
* `@else` statements on the same line as previous closing brace (`}`).
* Always an empty new line after the last closing brace (`}`) unless the next line is a closing brace (`}`).

{% include snippets/conditions/01/index.html %}

When testing for a falsy value, always use the `not` keyword rather than testing against `false` or `null`.

{% include snippets/conditions/02/index.html %}

Always put the variable part on the left side of the statement, and the (un)expected result on the right. Reversed conditional statements often are more difficult to read, especially to unexperienced developers.

{% include snippets/conditions/03/index.html %}

When using conditional statements within a function to return a different result based on some condition, always make sure the function still has a `@return` statement outside of any conditional block.

{% include snippets/conditions/04/index.html %}
