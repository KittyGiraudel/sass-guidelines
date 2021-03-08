
## Naming conventions

In this section, we will not deal with the best CSS naming conventions for maintainability and scale; not only is that up to you, it’s also out of the scope of a Sass styleguide. I suggest those recommended by [CSS Guidelines](https://cssguidelin.es/#naming-conventions).

There are a few things you can name in Sass, and it is important to name them well so the whole code base looks both consistent and easy to read:

* variables;
* functions;
* mixins.

Sass placeholders are deliberately omitted from this list since they can be considered as regular CSS selectors, thus following the same naming pattern as classes.

Regarding variables, functions and mixins, we stick to something very *CSS-y*: **lowercase hyphen-delimited**, and above all meaningful.

{% include snippets/naming/01/index.html %}

### Constants

If you happen to be a framework developer or library writer, you might find yourself dealing with variables that are not meant to be updated in any circumstances: constants. Unfortunately (or fortunately?), Sass does not provide any way to define such entities, so we have to stick to strict naming conventions to make our point.

As for many languages, I suggest all-caps snakerized variables when they are constants. Not only is this a very old convention, but it also contrasts well with usual lowercased hyphenated variables.

{% include snippets/naming/02/index.html %}

If you really want to play with the ideas of constants in Sass, you should read [this dedicated article](https://www.sitepoint.com/dealing-constants-sass/).

### Namespace

If you intend to distribute your Sass code, in the case of a library, a framework, a grid system or whatever, you might want to consider namespacing all your variables, functions, mixins and placeholders so it does not conflict with anyone else’s code.

For instance, if you work on a *Sassy Unicorn* project that is meant to be distributed, you could consider using `su-` as a namespace. It is specific enough to prevent any naming collisions and short enough not to be a pain to write.

{% include snippets/naming/03/index.html %}

[Kaelig](https://kaelig.fr) has [a very insightful article about the global CSS namespace](https://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace), in case this topic is of any interest to you.

<div class="note">
  <p>Note that automatic namespacing is definitely a design goal for the upcoming <code>@import</code> revamp from Sass 4.0. As that comes closer to fruition, it will become less and less useful to do manual namespacing; eventually, manually namespaced libraries may actually be harder to use.</p>
</div>
