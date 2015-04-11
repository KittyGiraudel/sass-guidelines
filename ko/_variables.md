
# 변수

변수는 모든 프로그래밍 언어의 정수라고 할 수 있습니다. 복사를 반복하지 않고도 값을 재사용할 수 있게 해주죠. 가장 중요한 점은 값 수정을 매우 쉽게 만들어준다는 것입니다. 더이상 찾아서 바꾸기나 하나하나 고칠 필요가 없는 것입니다.

그러나 CSS는 우리의 달걀을 전부 담고 있는 커다란 바구니일 뿐입니다. 많은 언어들과는 다르게, CSS에는 실질적인 유효 범위가 없습니다. 이 때문에, 충돌을 목격할 위험을 무릅쓰고 변수를 추가할 때는 아주 주의를 기울여야 합니다.

타당한 상황에서만 변수를 만들라는 것이 제 조언입니다. 적절한 이유 없이는 변수를 선언하지 마세요. 도움이 되지 않을 것입니다. 새로운 변수는 다음의 기준이 충족될 때에만 생성되어야 합니다.

* 값이 적어도 두 번 반복된다;
* 값이 적어도 한 번은 수정될 가능성이 크다;
* 값의 실현은 모두 변수와 관련되어 있다(즉, 우연에 의한 것이 아니라).

기본적으로, 절대 수정될 일이 없거나 한 군데에서만 사용되는 변수를 선언하는 것에는 아무 의미가 없습니다.






## 스코프

Sass의 변수 스코프는 수년 동안 변화해왔습니다. 아주 최근까지, 규칙과 다른 스코프 내에서의 변수 선언은 기본적으로 지역적이었죠. 하지만 같은 이름의 전역 변수가 이미 존재하는 경우, 지역적 지정은 전역 변수의 값을 바꾸어버렸습니다. 버전 3.4 이후로, Sass는 이제 스코프 개념에 적절하게 대응하며 대신 새로운 지역 변수를 생성합니다.

문서를 보면 *전역 변수 가림shadowing*에 대한 부분이 있습니다. 전역 스코프에 이미 존재하는 변수를 내부 스코프(선택자, 펑션, 믹신...)에서 선언할 때, 지역 변수가 전역 변수를 *가린다*고 말합니다. 기본적으로, 지역 변수가 지역 스코프 내에서는 우선시됩니다.

다음의 코드 스니펫은 *변수 가림* 개념을 설명하고 있다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Initialize a global variable at root level.
$variable: 'initial value';

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // Create a local variable that shadows the global one.
  $variable: 'local value';

  // Include the mixin: it overrides the global variable.
  @include global-variable-overriding;

  // Print the variable’s value.
  // It is the **local** one, since it shadows the global one.
  content: $variable;
}

// Print the variable in another selector that does no shadowing.
// It is the **global** one, as expected.
.other-local-scope::before {
  content: $variable;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Initialize a global variable at root level.
$variable: 'initial value'

// Create a mixin that overrides that global variable.
@mixin global-variable-overriding
  $variable: 'mixin value' !global

.local-scope::before
  // Create a local variable that shadows the global one.
  $variable: 'local value'

  // Include the mixin: it overrides the global variable.
  +global-variable-overriding

  // Print the variable’s value.
  // It is the **local** one, since it shadows the global one.
  content: $variable

// Print the variable in another selector that does no shadowing.
// It is the **global** one, as expected.
.other-local-scope::before
  content: $variable
{% endhighlight %}
  </div>
</div>






## `!default` 플래그

라이브러리나 프레임워크, 그리드 시스템, 혹은 배포되어 외부의 개발자들에 의해 사용될 Sass 소품을 개발할 때는, 덮어쓰일 수 있도록 모든 환경설정 변수들을 `!default` 플래그를 붙여 정의하여야 합니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$baseline: 1em !default;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$baseline: 1em !default
{% endhighlight %}
  </div>
</div>

이 덕분에, 개발자는 여러분의 라이브러리를 import하기 *전에* 재정의될 걱정 없이 자신의 `$baseline` 변수를 정의할 수 있다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Developer’s own variable
$baseline: 2em;

// Your library declaring `$baseline`
@import 'your-library';

// $baseline == 2em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Developer's own variable
$baseline: 2em

// Your library declaring `$baseline`
@import your-library

// $baseline == 2em
{% endhighlight %}
  </div>
</div>






## `!global` 플래그

`!global` 플래그는 로컬 스코프로부터 글로벌 변수를 정의할 때에만 사용되어야 한다.
루트 레벨에서 변수를 정의할 때, `!global` 플래그는 생략되어야 한다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$baseline: 2em;

// Nope
$baseline: 2em !global;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$baseline: 2em

// Nope
$baseline: 2em !global
{% endhighlight %}
  </div>
</div>






## 여러 개의 변수 혹은 맵

여러 개의 다른 변수들 대신 맵을 사용하는 것의 이점이 있습니다. 가장 중요한 것은 맵을 반복해서 순환하는 기능인데, 별개의 변수들로는 이것이 불가능합니다.

맵 사용의 또다른 장점은 사용이 편리한 API를 제공하는 작은 getter 펑션을 만드는 기능입니다. 다음의 Sass 코드를 예로 들 수 있습니다:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer’s name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer’s name
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Z-indexes map, gathering all Z layers of the application
/// @access private
/// @type Map
/// @prop {String} key - Layer’s name
/// @prop {Number} value - Z value mapped to the key
$z-indexes: ('modal': 5000, 'dropdown': 4000, 'default': 1, 'below': -1,)

/// Get a z-index value from a layer name
/// @access public
/// @param {String} $layer - Layer’s name
/// @return {Number}
/// @require $z-indexes
@function z($layer)
  @return map-get($z-indexes, $layer)
{% endhighlight %}
  </div>
</div>
