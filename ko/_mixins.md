
# Mixins

믹스인은 Sass 언어 전체에서 가장 많이 사용되는 기능 중 하나이며, 재사용성과 DRY 컴퍼넌트의 핵심입니다. 그리고 거기엔 그럴 만한 이유가 있습니다: 믹스인은 작성자가 `.float-left` 같은 시맨틱하지 않은 클래스에 기대지 않고도 스타일시트 내내 재사용할 수 있는 스타일을 정의할 수 있게 해 줍니다.

믹스인은 CSS 규칙과 Sass 문서에서 허용되는 거의 모든 것을 포함할 수 있습니다. 심지어 함수처럼 매개변수를 취할 수도 있습니다. 말할 것도 없이 가능한 일은 끝이 없습니다

하지만 믹스인의 힘을 남용하지 말라고 경고해야만 할 것 같습니다. 다시 한 번 말하지만, 핵심은 *간결성*입니다. 거대한 로직을 가진 엄청나게 강력한 믹스인을 만들고 싶어질 수 있습니다. 이는 과설계over-engineering라고 하며 대부분의 개발자들이 이것 때문에 괴로워합니다. 여러분의 코드에 대해 너무 복잡하게 생각하지 말고, 무엇보다도 간단히 하세요. 만약 믹스인이 20줄을 넘어서게 되었다면, 더 작은 덩어리로 나뉘거나 완전히 수정되어야 합니다.

## 기본

믹스인은 아주 유용하며 아마 여러분도 사용하고 있을 겁니다. 대략적으로 이야기하자면, (우연이 아닌) 어떤 이유로 항상 같이 모습을 보이는 CSS 속성들의 그룹을 발견하게 되면, 그것들을 믹스인에 넣을 수 있습니다. 예를 들면 [Nicolas Gallagher의 마이크로 클리어픽스 핵](http://nicolasgallagher.com/micro-clearfix-hack/)은 (매개변수 없는) 믹스인 안에 들어갈 만합니다.

{% include snippet.html path="mixins/01" %}

다른 타당한 예로는 요소의 크기를 조절하는 믹스인이 있으며, `width`와 `height`를 동시에 정의합니다. 이는 코드 입력을 간단하게 만들 뿐만 아니라 쉽게 읽을 수 있도록 해 줍니다.

{% include snippet.html path="mixins/02" %}

###### 참고

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)

## 매개변수 리스트

믹스인에 들어가는 매개변수의 개수를 알 수 없을 때는, 리스트 대신 항상 `arglist`를 사용하세요. `arglist`는 임의의 수의 매개변수를 믹스인이나 함수에 전달할 때 암묵적으로 사용되는 Sass의 여덟 번째 데이터 유형이라고 생각할 수 있으며, `...`이 그 특징입니다.

{% include snippet.html path="mixins/03" file="index" %}

몇 개의 매개변수(3개 혹은 그 이상)를 취하는 믹스인을 만들 때, 하나하나 넘겨주는 것보다 쉬울 거라는 생각으로 매개변수들을 리스트나 맵으로 병합하기 전에 다시 생각해 보세요.

Sass는 사실 믹스인과 함수 선언에 재주가 있어서, 리스트나 맵을 함수/믹스인에 매개변수 리스트로 전달해 일련의 매개변수들로 읽히도록 할 수 있습니다.

{% include snippet.html path="mixins/04" file="index" %}

###### 참고

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

## 믹스인과 벤더 프리픽스

지원이 미비하거나 부분적으로 지원되는 CSS 속성을 위한 벤더 프리픽스 처리용 믹스인을 정의하는 것은 솔깃한 일일 수 있습니다. 그러나 그건 좋은 생각이 아닙니다. 우선, [Autoprefixer](https://github.com/postcss/autoprefixer)를 사용할 수 있다면 Autoprefixer를 사용하세요. 여러분의 프로젝트에서 Sass 코드를 없애 주고, 항상 최신 정보를 반영하며, 프리픽스를 처리하는 데에는 여러분보다 훨씬 나을 것입니다.

불행하게도, Autoprefixer를 선택할 수 없는 상황도 있을 수 있죠. [Bourbon](http://bourbon.io/)이나 [Compass](http://compass-style.org/)를 사용하신다면, 둘 모두 벤더 프리픽스를 처리하는 믹스인들을 제공한다는 것을 알고 계실 겁니다. 그것들을 사용하세요.

만약 Autoprefixer를 사용할 수 없고 Bourbon이나 Compass도 사용할 수 없다면, 오직 그런 경우에만, 여러분 스스로 CSS 속성에 프리픽스를 붙이는 믹스인을 만들어 사용할 수 있습니다. 하지만. 바라건대 속성마다 하나씩 믹스인을 만들어 각 벤더를 수동으로 출력하진 마세요.

{% include snippet.html path="mixins/05" file="index" %}

영리한 방식으로 하세요.

{% include snippet.html path="mixins/06" %}

이 믹스인을 사용하는 것은 아주 간단합니다:

{% include snippet.html path="mixins/07" file="index" %}

이것은 조악한 해결책이라는 점을 명심하세요. 예를 들면, Flexbox에 필요한 것과 같은 복잡한 폴리필은 처리하지 못합니다. 그런 면에서, Autoprefixer를 사용하는 것이 훨씬 나은 선택입니다.

###### 참고

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)
