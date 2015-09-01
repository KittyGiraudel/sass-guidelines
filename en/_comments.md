
# Commenting

CSS is a tricky language, full of hacks and oddities. Because of this, it should be heavily commented, especially if you or someone else intend to read and update the code 6 months or 1 year from now. Don’t let you or anybody else be in the position of *I-didn’t-write-this-oh-my-god-why*.

As simple as CSS can get, there is still a lot of room for comments. These could be explaining:

* the structure and/or role of a file;
* the goal of a ruleset;
* the idea behind a magic number;
* the reason for a CSS declaration;
* the order of CSS declarations;
* the thought process behind a way of doing things.

And I probably forgot a lot of other various reasons as well. Commenting takes very little time when done seamlessly along with the code so do it at the right time. Coming back at a piece of code to comment it is not only completely unrealistic but also extremely annoying.

## Writing comments

Ideally, *any* CSS ruleset should be preceded by a C-style comment explaining the point of the CSS block. This comment also hosts numbered explanations regarding specific parts of the ruleset. For instance:

{% include snippets/comments/01/index.html %}

Basically everything that is not obvious at first glance should be commented. There is no such thing as too much documentation. Remember that you cannot *comment too much*, so get on fire and write comments for everything that is worth it.

When commenting a Sass-specific section, use Sass inline comments instead of a C-style block. This makes the comment invisible in the output, even in expanded mode during development.

{% include snippets/comments/02/index.html %}

###### Further reading

* [CSS Guidelines’ Commenting section](http://cssguidelin.es/#commenting)

## Documentation

Every variable, function, mixin and placeholder that is intended to be reused all over the codebase should be documented as part of the global API using [SassDoc](http://sassdoc.com).

{% include snippets/comments/03/index.html %}

<div class="note">
  <p>Three slashes (<code>/</code>) required.</p>
</div>

SassDoc has two major roles:

* forcing standardized comments using an annotation-based system for everything that is part of a public or private API;
* being able to generate an HTML version of the API documentation by using any of the SassDoc endpoints (CLI tool, Grunt, Gulp, Broccoli, Node...).

{% include images/sassdoc.html %}

Here is an example of a mixin extensively documented with SassDoc:

{% include snippets/comments/04/index.html %}

###### Further reading

* [SassDoc: a Documentation Tool for Sass](http://www.sitepoint.com/sassdoc-documentation-tool-sass/)
