
# Инструменты

Что приятно, так это, что CSS-препроцессоры, настолько популярные, как Sass, поставляются с экосистемой фреймворков, плагинов, библиотек и инструментов. После 8 лет существования мы приближаемся к точке, где [всё, что может быть написано на Sass, будет написано на Sass](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/).

Тем не менее, я советую снизить количество зависимостей к минимальному. Управление зависимостями чем-то похоже на ад, в котором вы не хотели бы оказаться. Кроме того, нет особой необходимости использовать внешние зависимости, когда работаете с Sass.






## Compass

[Compass](http://compass-style.org/) – основной фреймворк Sass, разработанный [Крисом Эппстейном](https://twitter.com/chriseppstein), одним из ключевых разработчиков Sass, и я не вижу веских причин для снижения его популярности в последнее время, если вам интересно моё мнение.

Тем не менее, я больше не использую Compass, и главная причина в том, что он сильно замедляет Sass. Ruby Sass сам по себе весьма медленный, так что добавить больше Ruby и больше Sass поверх него не сильно помогает.

Дело в том, что мы используем очень малую часть фреймворка. Compass огромен. Кросс-браузерная поддержка – лишь вершина айсберга. Математические функции, помощники изображений, спрайты… Есть ещё много того, что может быть сделанно с этим фреймворком.

К сожалению, это всё – сахар, и каких-либо уникальных возможностей в нём нет. Исключение – лишь механизм построения спрайтов, который *по-настоящему хорош*, но [Grunticon](https://github.com/filamentgroup/grunticon) и [Grumpicon](http://grumpicon.com/) тоже отлично справляются и более выгодны в том, что могут быть подключенны в процессе сборки.

Конечно же, я не отрицаю использование Compass, впрочем, и не рекомендую, тем более, что он не совместим с LibSass (даже если были предприняты усилия для этого). Если вы чувствуете, что вам стоит использовать его, то это достаточно справедливо, но я не думаю, что вы получите много от него в конце дня.

<div class="note">
  <p>Ruby Sass в настоящее время подвергается некоторым выдающимся оптимизациям, которые специально предназначены для тяжёлых стилей со множеством функций и примесей. Они должны резко повысить его производительность до точки, когда Compass и другие фреймворки не будут больше замедлять Sass.</p>
</div>



### Дальнейшее чтение

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## Системы сеток

Отказ от использования системы сеток – не вариант, потому что адаптивный веб-дизайн повсюду. Для того, чтобы дизайн выглядел хорошо на всех размерах, мы используем систему сеток для расположения элементов. Чтобы избежать необходимости писать код этой системы сеток снова и снова, некоторые блестящие умы создали системы сеток многоразового использования.

Позвольте сказать прямо: я не большой поклонник систем сеток. Конечно, я вижу их потенциал, но я думаю, что большинство из них полностью излишни и в основном используются для рисования красных столбцов на белом фоне для презинтаций дизайнеров. Когда в последний раз вы думали, что *слава-Богу-что-я-использовал-этот-инструмент-для-построения-этой-сетки-2-5-3.1-π*? Всё верно, никогда. Потому что в большинстве случаев вы просто хотите обычную 12-колоночную сетку и ничего больше.

Если вы используете CSS-фреймворк для вашего проекта, такой как [Bootstrap](http://getbootstrap.com/) или [Foundation](http://foundation.zurb.com/), скорее всего он включает в себя систему сеток и уже в этом случае я бы рекомендовал использовать именно его, чтобы избежать необходимость иметь дело с ещё одной зависимостью.

Если вы не привязаны к особой системе сеток, то вам будет приятно знать, что есть два первоклассных движка модульных сеток для Sass: [Susy](http://susy.oddbird.net/) и [Singularity](http://singularity.gs/). Обе делают гораздо больше, чем вам когда-нибудь понадобится, так что вы можете выбрать тот, который вы предпочитаете между этими двумя, и убедитесь, что все ваши крайние случаи – даже самые изящные из них – будут покрыты. Если вы спросите меня, то я отвечу: Susy имеет немного лучшее сообщество, но это лишь моё мнение.

Также вы можете использовать что-то немного более непренужденное, как [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids). В общем, ваш выбор не будет иметь большого влияния на стиль написания кода, так что это в значительной степени зависит от вас.



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

Проверка качества когда всегда очень важна. Как правило, следующие рекомендации из руководста помогают уменьшить количество ошибок в коде, но никто не совершенен и всегда есть что улучшить. Таким образом можно сказать, что проверка кода так же важна, как и его комментирование.

[SCSS-lint](https://github.com/causes/scss-lint) инструмент для сохранения читаемости и чистоты вашх файлов CSS. Он настраивается целиком и легко встраивается в ваш существующий набор инструментов.

К счастью, рекомендации SCSS-lint очень похожи на те, что описаны в данном документе. Для того, чтобы настроить SCSS-lint в соответствии с Sass Guidelines, я рекомендую следующее:

{% highlight yaml %}
# Для SCSS-Lint v0.32.0

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
  <p>Если вы хотите подключить SCSS-lint в процесс сборки Grunt, вам будет приятно знать, что есть расширение Grunt для этого – <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>.</p>
  <p>Кроме того, если вы в погоне за приложением, которое работает с SCSS-lint и тому подобным, ребята из <a href="http://thoughtbot.com/">Thoughtbot</a> (Bourbon, Neat…) работают над <a href="https://houndci.com/">Hound</a>.</p>
</div>



### Дальнейшее чтение

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)
