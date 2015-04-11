
# 작명 관례

이 절에서는, 유지와 확장을 위한 최고의 CSS 작명 관례를 다루진 않을 것입니다; 그것은 여러분에게 달린 문제일 뿐만 아니라, Sass 스타일가이드의 범위를 벗어나는 것이기도 합니다. 전 [CSS Guidelines](http://cssguidelin.es/#naming-conventions)가 추천하는 방법을 참고하시길 권하겠습니다.

Sass에서 이름을 붙일 수 있는 것들이 몇 가지 있는데, 코드베이스 전체가 일관되며 읽기 쉽도록 이름을 잘 짓는 것이 중요합니다:

* 변수;
* 펑션;
* 믹신.

Sass 플레이스홀더는 이 목록에서 일부러 제외했습니다. 플레이스홀더는 보통의 CSS 선택자로 간주될 수 있고, 따라서 클래스와 똑같은 작명 패턴을 따를 수 있기 때문입니다.

변수, 펑션, 믹신에 관해서, 우리는 매우 *CSS스러운* 것을 고수할 것입니다: **하이픈으로 구분된 소문자**, 그리고 무엇보다도 의미있는 이름이어야 합니다.

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



### 참고

* [CSS Guidelines’ Naming Conventions](http://cssguidelin.es/#naming-conventions)






## 상수

만약 여러분이 프레임워크 개발자나 라이브러리 작가라면, 아마 어떤 상황에서도 갱신되지 않아야 하는 변수를 다루게 될 것입니다: 상수. 불행히도 (혹은 다행히도?), 사스는 그런 개체를 정의할 어떤 방법도 제공하지 않기 때문에, 우리는 목적을 달성하기 위해 엄격한 작명 관례를 고수해야만 합니다.

많은 언어들의 경우처럼, 상수에 대해 저는 모두 대문자로 된 스네이크 케이스 변수를 권합니다. 이것이 매우 오래된 관례일 뿐만 아니라, 보통의 하이픈으로 연결된 소문자 변수와 잘 대비되기 때문입니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$CSS_POSITIONS: top, right, bottom, left, center;

// Nope
$css-positions: top, right, bottom, left, center;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$CSS_POSITIONS: top, right, bottom, left, center

// Nope
$css-positions: top, right, bottom, left, center
{% endhighlight %}
  </div>
</div>



### 참고

* [Dealing With Constants in Sass](http://www.sitepoint.com/dealing-constants-sass/)






## 네임스페이스

라이브러리나 프레임워크, 그리드 시스템 혹은 무엇이 됐든 Sass 코드를 배포할 생각이라면, 다른 사람의 코드와 충돌하지 않도록 모든 변수, 펑션, 믹신, 플레이스홀더를 네임스페이스 안에 넣는 것이 좋을 것입니다.

예를 들면, 세계 전역의 개발자들에 의해 사용될 *Sassy Unicorn* 프로젝트를 작업하고 있다면 (누가 아니겠어요, 그렇죠?), `su-`를 네임스페이스로 붙이는 걸 고려할 수 있을 겁니다. 이 정도면 어떤 명명 충돌도 방지할 수 있을 정도로 충분히 구체적이고 쓰기 괴롭지 않을 정도로 충분히 짧습니다.

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
  <p>자동 네임스페이스는 단연 사스 4.0에서 곧 있을 `@import` 개선의 설계 목표입니다. 그것이 결실을 맺기에 가까워지면서, 수동 네임스페이스는 점점 유용성이 떨어질 것입니다: 결국에는, 수동 네임스페이스를 이용한 라이브러리는 실제로 사용하기가 더 어려워질 수도 있습니다.</p>
</div>

### 참고

* [Please Respect the Global CSS Namespace](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
