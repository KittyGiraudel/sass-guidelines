
# Conventions de nommage

Dans cette section, nous ne traiterons pas des conventions de nommage CSS pour une meilleure maintenabilité et le passage à l’échelle ; non seulement cela dépend de chacun, mais cela sort du cadre d’un guide de style Sass. Je vous suggère de consulter les conventions recommandées par [CSS Guidelines](http://cssguidelin.es/#naming-conventions).

Il existe un certain nombre de choses que l’on peut nommer en Sass, et il est important de bien les nommer de façon à assurer la cohérence et la lisibilité de votre code&nbsp;:

* variables;
* fonctions;
* mixins.

Les placeholders Sass sont délibérément omis, car ils peuvent être considérés comme des sélecteurs CSS normaux, et suivent par conséquent les mêmes modèles de nommage que les classes.

En ce qui concerne les variables, les fonctions et les mixins, nous allons nous tenir à quelque chose de très *CSS*&nbsp;: **bas-de-casse et séparation par un tiret**, et surtout signifiant.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) {
  // ...
}

@function opposite-direction($direction) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$vertical-rhythm-baseline: 1.5rem

=size($width, $height: $width)
  // ...

@function opposite-direction($direction)
  // ...
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

* [CSS Guidelines’ Naming Conventions](http://cssguidelin.es/#naming-conventions)






## Constantes

Si vous êtes un développeur de frameworks ou si vous écrivez des bibliothèques, vous pouvez avoir besoin de variables qui ne sont pas supposées être mises à jour, en aucune circonstance&nbsp;: en d’autres termes des constantes. Malheureusement (ou heureusement&nbsp;?), Sass ne permet pas de définir de telles entités, c’est pourquoi nous devons nous tenir à des conventions strictes si nous voulons que les choses soient claires.

Comme dans de nombreux langages, je suggère d’utiliser des variables tout en majuscules et snake-case pour indiquer qu’il s’agit de constantes. C’est non seulement une convention déjà ancienne, mais elle contraste fortement avec les variables tout en minuscules et séparées par des tirets.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Oui
$CSS_POSITIONS: (top, right, bottom, left, center);

// Non
$css-positions: (top, right, bottom, left, center);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Oui
$CSS_POSITIONS: (top, right, bottom, left, center)

// Non
$css-positions: (top, right, bottom, left, center)
{% endhighlight %}
  </div>
</div>



### Lectures complémentaires

* [Dealing With Constants in Sass](http://www.sitepoint.com/dealing-constants-sass/)






## Namespaces

Si vous avez l’intention de distribuer votre code Sass, sous forme de bibliothèque, de framework, de système de grille ou autre, il peut s’avérer intéressant de donner un *namespace* à vos variables, fonctions, mixins et placeholders de façon à ce qu’ils n’entrent pas en conflit avec le code d’une autre personne.

Par exemple, si vous travaillez sur un projet *Sassy Unicorn* qui est destiné à être utilisé par les développeurs du monde entier (qui ne le ferait pas&nbsp;?) il est important d’utiliser un namespace, tel que `su-`, suffisamment spécifique pour éviter toute collision de noms et suffisamment court pour ne pas devenir pénible à écrire.


<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$su-configuration: ( ... );

@function su-rainbow($unicorn) {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$su-configuration: ( ... )

@function su-rainbow($unicorn)
  // ...
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>Le namespacing automatique est un des objectifs de la redéfinition à venir d’&nbsp;<code>@import</code> à partir de Sass 4.0. Lorsque cela se concrétisera, il sera de moins en moins utile de réaliser manuellement le namespacing, et à terme les bibliothèques conçues de la sorte (avec espaces de noms manuels) pourraient devenir plus difficiles à utiliser.</p>
</div>

### Lectures complémentaires

* [Please Respect the Global CSS Namespace](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
