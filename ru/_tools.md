
# Инструменты

Что приятно, так это что CSS препроцессоры так популярные, как Sass, поставляются с экосистемой фреймворков, плагинов, библиотек и инструментов. После 8 лет существования мы приближаемс к точке, где [все что может быть написано на Sass будет написано yf Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

Тем не менее мой совет будет снизить количество зависимостей к минимальному. Управляя зависимостями чем-то похоже на ад, в котором вы не хотели бы оказаться. Кроме того, нет особой необходимости использовать внешние зависимости, когда работаете с Sass. 






## Compass

[Compass](http://compass-style.org/) главный Sass фреймворк. Разработанный [Chris Eppstein](https://twitter.com/chriseppstein), одним из ключевых разработчиков Sass, и я не вижу снижения его популярности со временем, если вы хотите моё мнение.

Тем не менее, я больше не использую Compass, главная причина в том, что он сильно замедляет Sass. Ruby Sass сам по себе весьма медленный и поэтому добавляя больше Ruby и больше Sass не особо помагает первому. 

Дело в том, что мы используем очень мало из всего фреймворка. Compass огромен. Примеми кроссбраузерной совместимости лишь вершина айсберга. математические функции, помощники изображений, спрайтирование... Есть еще много того, что може быть сделанно с этим фреймворком.

К сожалению, это все сахар и супер функционала в нем нет. Исключение может быть сделанно только для механизма построения спрайтов, который *по-настоящему ххорош*, но [Grunticon](https://github.com/filamentgroup/grunticon) и [Grumpicon](http://grumpicon.com/) тоже отлично справляются и имеют выгоду  в том, что могут быть подключенны в процессе сюорки.

Во всяком случае, я не запрещаю использовать Compass, хотя я бы не рекомендовал его, тем более, что он не LibSass-совместимый (даже если были предприняты усилия в этом направлении). Если вы чувствуете, что вам стоит использовать его, то это достаточно справедливо для ег оиспользования, но я не думаю, что вы получитмного от него в конце дня.

<div class="note">
  <p>Ruby Sass в настоящее время подвергается некоторым выдающимся оптимизациям, которые специально предназначены для тяжелых стилей с множеством функций и примесей. Они должны резко повысить производительность до точки, когда Compass и другие фреймворки не будут больше замедлять Sass..</p>
</div>



### Дальнейшее чтение

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## Сетки

Отказ от использования системы сеток не является вариантом сейчас, когда адаптивный веб-дизайн повсюду. Для того, чтобы дизайн выглядел хорошо на всех размерах мы используем сетку для расположения элементов. Чтобы избежать необходимости писать код этой сетки снова и снова, некоторые блестящие умы сделал сетки многоразового использования.

Позвольте мне сказать это прямо: я не большой поклонник сеток. Конечно, я вижу их потенциал, но я думаю, что большинство из них полностью излишне и в основном используется для рисования красных столбцов на белом фоне для презинтаций дизайнеров. Когда в последний раз вы думали, что *спасибо Богу, что Я использовал этот инструмент, чтобы построить эту 2-5-3.1-π-секту*? Всё верно, никогда. Потому что в большинстве случаев, вы просто хотите обычную 12-колоночную сетку и ничего сложного.

Если вы используете CSS фреймворк для вашего проекта, такой как [Bootstrap](http://getbootstrap.com/) или [Foundation](http://foundation.zurb.com/), велика вероятность того, он включает в себя систему сеток и уже в этом случае я бы рекомендовал использовать его, чтобы избежать необходимости иметь дело с еще одной зависимостью.

Если вы не привязаны к спецефичной сетке, то вам будет приятно знать, что есть два первоклассных Sass движка для сетки: [Susy](http://susy.oddbird.net/) и [Singularity](http://singularity.gs/). Обе делают гораздо больше, чем вам когда-нибудь понадобится, так что вы можете выбрать тот, который вы предпочитаете между этими двумя и убедитесь, что все ваши крайние случаи &mdash;даже самые изящные из них&mdash; будут покрыты.Если вы спросите меня, то Susy имеет немного лучшее сообщество, но это мое мнение.

Или вы можете использовать что-то немного более непренужденное, как [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). В общем, выбор не будет иметь большого влияния на ваш стиль написания кода, так что это в значительной степени зависит от вас.



### Дальнейшее чтение

* [Singularity](http://singularity.gs/)
* [Singularity: Grids Without Limits](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity Grid System](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy](http://susy.oddbird.net/)
* [Build Web Layouts Easily with Susy](http://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](http://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](http://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap's Grid System vs Susy: a Comparison](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](http://www.sitepoint.com/creative-grid-system-sass-calc/)






## SCSS-lint

Проверка качества когда всегда очень важна. Как правило, следующие рекомендации из руководста помогают уменьшить количество ошибок кода, но никто не совершенен и всегда есть вещи, чтобы улучшить. Таким образом, можно сказать, что проверка кода также важна, как и его комментирование.

[SCSS-lint](https://github.com/causes/scss-lint) является инструментом, чтобы помочь вам сохранить ваши файлы CSS чистым и читаемыми. Это инструмент полностью настраиваемый и легко интегрируемый с вашими собственными инструментами.

К счастью, рекомендации SCSS-lint очень похожи на те, что описаны в данном документе. Для того, чтобы настроить SCSS-lint в соответствии с Sass руководством, я рекомендую следующие настройки:

{% highlight yaml %}
# For SCSS-Lint v0.32.0

linters:

  BangFormat:
    enabled: true
    space_before_bang: true
    space_after_bang: false

  BorderZero:
    enabled: true

  ColorKeyword:
    enabled: false

  Comment:
    enabled: false

  DebugStatement:
    enabled: true

  DeclarationOrder:
    enabled: true

  DuplicateProperty:
    enabled: false

  ElsePlacement:
    enabled: true
    style: same_line

  EmptyLineBetweenBlocks:
    enabled: true
    ignore_single_line_blocks: false

  EmptyRule:
    enabled: true

  FinalNewline:
    enabled: true
    present: true

  HexLength:
    enabled: true
    style: short

  HexNotation:
    enabled: true
    style: lowercase

  HexValidation:
    enabled: true

  IdSelector:
    enabled: true

  ImportPath:
    enabled: true
    leading_underscore: false
    filename_extension: false

  Indentation:
    enabled: true
    character: space
    width: 2

  LeadingZero:
    enabled: true
    style: include_zero

  MergeableSelector:
    enabled: false
    force_nesting: false

  NameFormat:
    enabled: true
    convention: hyphenated_lowercase
    allow_leading_underscore: true

  NestingDepth:
    enabled: true
    max_depth: 3

  PlaceholderInExtend:
    enabled: true

  PropertySortOrder:
    enabled: false
    ignore_unspecified: false

  PropertySpelling:
    enabled: true
    extra_properties: []

  QualifyingElement:
    enabled: true
    allow_element_with_attribute: false
    allow_element_with_class: false
    allow_element_with_id: false

  SelectorDepth:
    enabled: true
    max_depth: 3

  SelectorFormat:
    enabled: true
    convention: hyphenated_lowercase
    class_convention: '^(?:u|is|has)\-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:\-[a-z][a-zA-Z0-9]*)?(?:\-\-[a-z][a-zA-Z0-9]*)?$'

  Shorthand:
    enabled: true

  SingleLinePerProperty:
    enabled: true
    allow_single_line_rule_sets: false

  SingleLinePerSelector:
    enabled: true

  SpaceAfterComma:
    enabled: true

  SpaceAfterPropertyColon:
    enabled: true
    style: one_space

  SpaceAfterPropertyName:
    enabled: true

  SpaceBeforeBrace:
    enabled: true
    style: space
    allow_single_line_padding: true

  SpaceBetweenParens:
    enabled: true
    spaces: 0

  StringQuotes:
    enabled: true
    style: single_quotes

  TrailingSemicolon:
    enabled: true

  TrailingZero:
    enabled: true

  UnnecessaryMantissa:
    enabled: true

  UnnecessaryParentReference:
    enabled: true

  UrlFormat:
    enabled: false

  UrlQuotes:
    enabled: true

  VendorPrefixes:
    enabled: true
    identifier_list: base
    include: []
    exclude: []

  ZeroUnit:
    enabled: true
{% endhighlight %}

<div class="note">
  <p>Если вы хотите подключить SCSS-lint в процессе сборки Grunt, вам будет приятно знать, что есть Grunt плагин для этого и называется<a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Кроме того, если вы в погоне за приложением, которое работает с SCSS-lint и т.п., ребята из <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat...) работают над <a href="https://houndci.com/">Hound</a>.</p>
</div>



### Дальнейшее чтение

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)
