# Translating the guidelines

## Getting started

1. Be sure to read the [contributing guidelines](CONTRIBUTING.md) to know how to deal with branching and Git.

2. Copy the `en/` folder and rename it after your language shortcode (e.g. `fr/` for French).

3. Add an `index.md` file in your folder containing strictly (replace `<language_shortcode>` with your language shortcode of course; if your language is right-to-left, replace `ltr` with `rtl`):
  ```
  ---
  layout: default
  language: <language_shortcode>
  direction: ltr
  ---

  {% include chapters.html %}
  ``` 

## Translating

There are 5 things to translate, each one of them described in the following sections:

* [The README](#the-readme)
* [The content](#the-content)
* [The meta-data](#the-meta-data)
* [The UI](#the-ui)
* [The code snippets](#the-code-snippets)

### The README

Each translation should have its own `README.md` file to clarify a few things regarding the translation. Even when a language is being handled by a single author, it is important to maintain this file to ensure present and future consistency.

The original version (`en/` folder) contains a template `README.md` that should be translated and filled when working on a translation.

### The content

Translate all chapters (files starting with an underscore) in your translation folder.

### The meta-data

In `_data/languages.yml`, duplicate the `en` object and rename it after your translation shortcode before filling it. For instance, here is the object for the Polish translation:

```yml
pl:
  # The version of the translation
  version: 1.1.0
  # The name of the language
  label: Polish
  # The route to access it (language short code)
  prefix: /pl/
  # Whether or not the translation is over
  available: true
  # The list of translators
  translators:
      # Your name
    - name: Andrzej Kłapeć
      # Feel free to link wherever you want
      link: https://github.com/klapec
    - name: Mateusz Chabros
      link: http://github.com/matchabros
```

### The UI

In `_data/translations.yml`, duplicate the `en` object and rename it after your translation shortcode before filling it. It contains the translation for most of the UI. For instance, here is the object for the French translation:

```yml
fr:
  donate:
    # The content of the donate section
    content: "Si vous avez apprécié le projet Sass Guidelines, n'hésitez pas à le soutenir."
    # The label of the button in the donate section
    button: "Soutenir Sass Guidelines"
  baseline:
    # The baseline of the project
    content: "Un guide de style engagé pour du code Sass sain, maintenable et extensible."
  footer:
    # The content of the footer
    # Please, add your name in there in order to form a sentence (in your language) such as: “Made with love by [Hugo Giraudel](http://hugogiraudel.com, translated by [Your name](http://link.com))”
    content: "Fait avec amour par [Hugo Giraudel](http://hugogiraudel.com), traduit par [Pierre Choffé](http://la-cascade.ghost.io)"
  # The “note” word that is being prepended to all notes in the document
  note: "Note"
  # The “alt” tag of all images
  images:
    color-functions: "Illustration de la différence entre `lighten`/`darken` et `mix` par [KatieK](http://codepen.io/KatieK2/pen/tejhz/)"
    order-poll: "Tableau montrant comment les développeurs ordonnent leurs déclarations CSS"
    sassdoc: "Documentation générée par SassDoc"
    wallpaper: "Fond d’écran par [Julien He](https://twitter.com/julien_he)"
```

### The code snippets

All code snippets from Sass Guidelines are externalized from the Markdown files to prevent getting in the way of translators and reduce the amount of moving parts. They are stored in `_includes/snippets`, then divided in sub-folders by chapters (e.g. `architecture/`), then finally numbered (e.g. `01/`). Inside these numbered folders, there is always an `index.html` file. This file is the one that is imported in the Markdown documents.

Some code snippets contain comments that should be translated, some don't. When a code snippet should be translated, its numbered folder contains a file per translation named after the language shortcode (e.g. `pt.html`) along with the `index.html` file. In this case, the `index.html` includes the appropriate file for the current translation. If a code snippet has no point in being translated, the `index.html` file is the only one in the folder, and it contains the HTML code directly.

To translate a (to be translated) code snippet, simply copy the `en.html` file from the snippet into a sibling file named after your language shortcode (e.g. `de.html`). In there, translate what needs to be translated; that's it.

## What should I know?

### Liquid file imports

Code snippets and images are externalized so they don't get in your way when working in the Markdown files. Therefore, you will notice Liquid (the templating language in use here) file includes such as:

```
{% include snippets/architecture/01/index.html %}
```

Do not update those includes. They are language-agnostic and should not be modified. Leave them as they are authored.

### Yep / Nope

A lot of code snippets contain only `// Yep` and `// Nope` as comments. These terms should not be translated. Not only would it be tedious to maintain snippet translations only for such minimalistic comments, but these also are clear and broad enough terms so that it's fine keeping them.

### Empty lines

Try to preserve the usage of empty lines in your translation. Not only does it make all translations consistent in the usage of blank lines, it also makes life easier for me when comparing the same files in two different languages.

### “Sass Guidelines” title

The project title, “Sass Guidelines”, is not translated.

### Wikipedia links

There are a few links to Wikipedia articles in the document. When possible, try to link to the version of your language rather than the English one. Most Wikipedia articles are translated in several languages, so chances are high that you can link to your own.
