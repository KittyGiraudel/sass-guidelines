
# Too Long; Didn’t read

These guidelines are quite long and sometimes it is good to have them summed up in a shorter version. Below is this summary.

## Key principles

* Having a styleguide is all about **consistency**. If you disagree with some rules from Sass Guidelines, fair enough as long as you are consistent. [↩](#why-a-styleguide)
* Sass should be kept as simple as it can be. Avoid building complex systems unless absolutely necessary. [↩](#key-principles)
* Keep in mind that sometimes *KISS* (Keep It Simple, Stupid) is better than *DRY* (Don’t Repeat Yourself). [↩](#key-principles)

## Syntax & formatting

* An indentation is made of two (2) spaces, no tabs. [↩](#syntax--formatting)
* Lines should be, as much as possible, shorter than 80 characters. Feel free to split them into several lines when necessary. [↩](#syntax--formatting)
* CSS should be properly written, possibly following the [CSS Guidelines](http://cssguidelin.es) from Harry Roberts. [↩](#syntax--formatting)
* Whitespace is free, use it to separate items, rules and declarations. Do not hesitate to leave empty lines, it never hurts. [↩](#syntax--formatting)

### Strings

* Declaring the `@charset` directive on top of the stylesheet is highly recommended. [↩](#encoding)
* Unless applied as CSS identifiers, strings should be quoted using single quotes. URLs should also be quoted. [↩](#strings-as-css-values)

### Numbers

* Sass makes no distinction between numbers, integers, floats so trailing zeros (0) should be omitted. However, leading zeros (0) help readability and should be added. [↩](#zeros)
* A zero (0) length should not have a unit. [↩](#units)
* Units manipulation should be thought as arithmetic operations, not string operations. [↩](#units)
* In order to improve readability, top-level calculations should be wrapped in parentheses. Also, complex math operations might be splitted into smaller chunks. [↩](#calculations)
* Magic numbers dramatically hurt code maintainability and should be avoided at all time. When in doubt, extensively explain the questionable value. [↩](#magic-numbers)

### Colors

* Colors should be expressed in HSL when possible, then RGB, then hexadecimal (in a lowercase and shortened form). Color keywords should be avoided. [↩](#color-formats)
* Prefer `mix(..)` instead of `darken(..)` and `lighten(..)` when lightening or darkening a color. [↩](#lightening-and-darkening-colors)

### Lists

* Unless used as a direct mapping to space-separated CSS values, lists should be separated with commas. [↩](#lists)
* Wrapping parentheses should also be considered to improve readability. [↩](#lists)
* Inlined lists should not have a trailing comma, multi-line lists should have it. [↩](#lists)

### Maps

* Maps containing more than a single pair are written on several lines. [↩](#maps)
* To help maintainability, the last pair of a map should have a trailing comma. [↩](#maps)
* Map keys that happen to be strings should be quoted as any other string. [↩](#maps)

### Declaration sorting

* The system used for declaration sorting (alphabetical, by type, etc.) doesn’t matter as long as it is consistent. [↩](#declaration-sorting)

### Selector nesting

* Avoid selector nesting when it is not needed (which represents most of the cases). [↩](#selector-nesting)
* Use selector nesting for pseudo-classes and pseudo-elements. [↩](#selector-nesting)
* Media queries can also be nested inside their relevant selector. [↩](#selector-nesting)

## Naming conventions

* It is best to stick to CSS naming conventions which are (except a few errors) lowercase and hyphen-delimited. [↩](#naming-conventions)

## Commenting

* CSS is a tricky language; do not hesitate to write very extensive comments about things that look (or are) fishy. [↩](#commenting)
* For variables, functions, mixins and placeholders establishing a public API, use SassDoc comments. [↩](#documentation)

## Variables

* Do use the `!default` flag for any variable part of a public API that can be safely changed. [↩](#default-flag)
* Do not use the `!global` flag at root level as it might constitue a violation of Sass syntax in the future. [↩](#global-flag)

## Extend

* Stick to extending placeholders, not existing CSS selectors. [↩](#extend)
* Extend a placeholder as few times as possible in order to avoid side effects. [↩](#extend)
