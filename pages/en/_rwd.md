
## Responsive Web Design and breakpoints

I do not think we still have to introduce Responsive Web Design now that it is everywhere. However you might ask yourself *why is there a section about RWD in a Sass styleguide?* Actually there are quite a few things that can be done to make working with breakpoints easier, so I thought it would not be such a bad idea to list them here.

### Naming breakpoints

I think it is safe to say that media queries should not be tied to specific devices. For instance, this is definitely a bad idea to try targeting iPads or Blackberry phones specifically. Media queries should take care of a range of screen sizes, until the design breaks and the next media query takes over.

For the same reasons, breakpoints should not be named after devices but something more general. Especially since some phones are now bigger than tablets, some tablets bigger than some tiny screen computers, and so on…

{% include snippets/rwd/01/index.html %}

At this point, [any naming convention](https://css-tricks.com/naming-media-queries/) that makes crystal clear that a design is not intimately tied to a specific device type will do the trick, as long as it gives a sense of magnitude.

{% include snippets/rwd/02/index.html %}

<div class="note">
  <p>The previous examples uses nested maps to define breakpoints, however this really depends on what kind of breakpoint manager you use. You could opt for strings rather than inner maps for more flexibility (e.g. <code>'(min-width: 800px)'</code>).</p>
</div>

### Breakpoint manager

Once you have named your breakpoints the way you want, you need a way to use them in actual media queries. There are plenty of ways to do so but I must say I am a big fan of the breakpoint map read by a getter function. This system is both simple and efficient.

{% include snippets/rwd/03/index.html %}

<div class="note">
  <p>Obviously, this is a fairly simplistic breakpoint manager. If you need a slightly more permissive one, may I recommend you do not reinvent the wheel and use something that has been proven effective such as <a href="https://github.com/sass-mq/sass-mq">Sass-MQ</a>, <a href="http://breakpoint-sass.com/">Breakpoint</a> or <a href="https://github.com/eduardoboucas/include-media">include-media</a>.</p>
  <p>If you are looking to read more on how to approach Media Queries in Sass, both <a href="https://www.sitepoint.com/managing-responsive-breakpoints-sass/">SitePoint</a> (from yours, truly) and <a href="https://css-tricks.com/approaches-media-queries-sass/">CSS-Tricks</a> have nice articles on this.</p>
</div>

### Media Queries Usage

Not so long ago, there was quite a hot debate about where media queries should be written: do they belong within selectors (as Sass allows it) or strictly dissociated from them? I have to say I am a fervent defender of the *media-queries-within-selectors* system, as I think it plays well with the ideas of *components*.

{% include snippets/rwd/04/index.html %}

Leading to the following CSS output:

{% include snippets/rwd/05/index.html %}

You might hear that this convention results in duplicated media queries in the CSS output. That is definitely true. Although, tests have been made and the final word is that it doesn’t matter once Gzip (or any equivalent) has done its thing:

> … we hashed out whether there were performance implications of combining vs scattering Media Queries and came to the conclusion that the difference, while ugly, is minimal at worst, essentially non-existent at best.<br>
> &mdash; Sam Richards, regarding Breakpoint

Now, if you really are concerned about duplicated media queries, you can still use a tool to merge them such as [this gem](https://github.com/aaronjensen/sass-media_query_combiner) however I feel like I have to warn you against possible side-effects of moving CSS code around. You are not without knowing that source order is important.
