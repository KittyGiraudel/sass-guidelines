
# 구문 & 서식

제 생각으로는, 스타일가이드가 가장 먼저 해야 할 일은 우리 코드가 어떻게 보이길 원하는지를 묘사하는 것입니다.

같은 프로젝트에서 여러 명의 개발자들이 CSS 작성에 참여할 때, 그들 중 하나가 자기만의 방식으로 일을 하기 시작하는 것은 시간 문제일 뿐입니다. 일관성을 고취하는 코드 가이드라인은 이것을 방지할 뿐만 아니라, 코드를 읽고 업데이트하는 데에도 도움을 줍니다.

대략, 우리가 원하는 것은 (뻔뻔스럽게도 [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)에서 영감을 얻은) 다음과 같습니다:

* 탭 대신 스페이스 두 칸 (2) 들여쓰기;
* 이상적인 행의 너비는 80 글자;
* 적절하게 쓰인 여러 행의 CSS 규칙;
* 공백의 의미 있는 사용.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// Nope
.foo {
    display: block; overflow: hidden;

    padding: 0 1em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Since Sass indented-syntax forces those coding standards
// There is no wrong way of proceeding
.foo
  display: block
  overflow: hidden
  padding: 0 1em
{% endhighlight %}
  </div>
</div>

이 절에서는 파일 구조에 대한 질문과는 씨름하지 않겠습니다. 그것은 [다른 절](#설계)의 주제입니다.






## 문자열

CSS에서 문자열은 따옴표로 둘러싸일 필요가 없습니다. 심지어 공백을 포함한 경우에도요. 예를 들면 font-family가 있습니다: 따옴표로 감쌌는지 여부는 CSS 파서에게 문제가 되지 않습니다.

이 때문에, Sass *역시* 문자열이 따옴표로 둘러싸일 것을 요구하지 않습니다. 더 나아가 (그리고 여러분도 인정하듯이, 운이 좋게도) 따옴표로 둘러싸인 문자열은 그렇지 않은 쌍둥이와 정확히 동일합니다(예를 들면 `'abc'`는 `abc`와 정확히 동일합니다).

그렇기는 하나, 문자열이 따옴표에 둘러싸일 것을 요구하지 않는 언어들은 분명히 소수이고 따라서, Sass에서 **문자열은 언제나 작은 따옴표로 감싸져야 합니다**(*qwerty* 자판에서 작은 따옴표가 큰 따옴표보다 입력하기 쉬우므로). CSS의 사촌 JavaScript를 포함한 다른 언어와의 일관성 외에도, 이 선택에 대한 몇 가지 이유가 있습니다:

* 색 이름은 따옴표가 없으면 색으로 취급되는데, 이는 심각한 문제로 이어질 수 있다;
* 대부분의 구문 강조기는 따옴표 없는 문자열을 지원하지 못할 것이다;
* 전반적인 가독성에 도움이 된다;
* 문자열을 따옴표로 감싸지 않을 적절한 이유가 없다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif;

// Nope
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$font-stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif

// Nope
$font-stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif

// Nope
$font-stack: Helvetica Neue Light, Helvetica, Arial, sans-serif
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>앞의 예시에서, <code>sans-serif</code>는 따옴표가 없어야 하는 하는 특정  CSS 값이기 때문에 따옴표로 싸이지 않았습니다.</p>
</div>

URL 역시 위와 동일한 이유로 따옴표로 감싸여야 합니다:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  background-image: url('/images/kittens.jpg');
}

// Nope
.foo {
  background-image: url(/images/kittens.jpg);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  background-image: url('/images/kittens.jpg')

// Nope
.foo
  background-image: url(/images/kittens.jpg)
{% endhighlight %}
  </div>
</div>



### 참고

* [All You Ever Need to Know About Sass Interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375)
* [SassyStrings](https://github.com/HugoGiraudel/SassyStrings)






## 숫자

Sass에서 숫자는 단위가 없는 숫자에서부터 길이, 기간, 빈도, 각도 등에 이르기까지 모든 것을 포함하는 데이터 타입입니다. 덕분에 그런 단위들을 가지고 연산을 하는 것이 가능해집니다.



### 영

숫자는 1보다 작은 소수 앞에 앞장서는 영을 표기해야 합니다. 뒤따르는 영은 절대 표기하지 마세요.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  padding: 2em;
  opacity: 0.5;
}

// Nope
.foo {
  padding: 2.0em;
  opacity: .5;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  padding: 2em
  opacity: 0.5

// Nope
.foo
  padding: 2.0em
  opacity: .5
{% endhighlight %}
  </div>
</div>



### 단위

길이를 다룰 때, `0` 값은 절대로 단위를 가져선 안 됩니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$length: 0;

// Nope
$length: 0em;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$length: 0

// Nope
$length: 0em
{% endhighlight %}
  </div>
</div>

Sass에서 숫자와 관련해 제가 생각할 수 있는 가장 흔한 실수는 단위가 숫자에 안전하게 덧붙여질 수 있는 문자열이라고 생각하는 것입니다. 이게 그럴 듯하게 들리긴 하지만, 단위가 작동하는 방식은 분명히 아닙니다. 단위를 대수 기호라고 생각해보세요. 예를 들어 실제 세계에서, 5인치에 5인치를 곱하면 25 제곱 인치가 나옵니다. 똑같은 논리가 Sass에도 적용됩니다.

단위를 숫자에 붙이기 위해서는, 이 숫자에 *1 단위*를 곱해야 합니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42;

// Yep
$length: $value * 1px;

// Nope
$length: $value + px;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42

// Yep
$length: $value * 1px

// Nope
$length: $value + px
{% endhighlight %}
  </div>
</div>

*0 단위*를 더하는 것도 역시 같은 결과를 내긴 하지만, *0 단위*를 더하는 것은 약간 혼란스러울 수 있기 때문에 앞서 언급한 방법을 추천합니다. 사실, 숫자를 다른 호환되는 단위로 변환하려고 할 때, 0을 더하는 것은 효과가 없습니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$value: 42 + 0px;
// -> 42px

$value: 1in + 0px;
// -> 1in

$value: 0px + 1in;
// -> 96px
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$value: 42 + 0px
// -> 42px

$value: 1in + 0px
// -> 1in

$value: 0px + 1in
// -> 96px
{% endhighlight %}
  </div>
</div>

결국에는, 여러분이 달성하려고 하는 것이 무엇인지에 달려있습니다. 단위를 문자열로서 더하는 것은 좋은 방법이 아니라는 점을 명심하세요.

값의 단위를 제거하기 위해서는, *그 종류의 한 단위*로 나누어야 합니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$length: 42px;

// Yep
$value: $length / 1px;

// Nope
$value: str-slice($length + unquote(''), 1, 2);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$length: 42px

// Yep
$value: $length / 1px

// Nope
$value: str-slice($length + unquote(''), 1, 2)
{% endhighlight %}
  </div>
</div>

단위를 문자열로서 숫자에 덧붙이면 결과물은 문자열이 되며, 그 값으로 더이상 연산을 할 수 없습니다. 숫자의 숫자 부분을 단위에서 잘라내면 그 결과 역시 문자열이 됩니다. 이것은 여러분이 원하는 것이 아닙니다.



### 연산

**최상위 숫자 계산은 언제나 괄호로 감싸져야 합니다**. 이 요건은 가독성을 향상시킬 뿐만 아니라, Sass가 괄호 안의 수치를 계산하도록 강제함으로써 일부 예외적인 상황을 방지합니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  width: (100% / 3);
}

// Nope
.foo {
  width: 100% / 3;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  width: (100% / 3)

// Nope
.foo
  width: 100% / 3
{% endhighlight %}
  </div>
</div>



### 매직 넘버

"매직 넘버"는 *익명의 숫자 상수*를 일컫는 [전통적인 프로그래밍 용어](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants)입니다. 기본적으로, 이 숫자는 어쩌다보니 *맞아떨어지지만*™ 어떤 논리적인 설명과도 관련되지 않은 임의의 숫자입니다.

말할 것도 없이 **매직 넘버는 역병 같은 존재이며 무슨 수를 써서라도 피해야 합니다**. 왜 매직넘버가 효과를 내는지에 대한 합리적인 설명을 찾을 수 없을 때는, 어떻게 거기에 도달했고 왜 효과를 낸다고 생각하는지를 설명하는 충분한 주석을 달아놓으세요. 무언가가 제대로 작동하는 이유를 모른다고 인정하는 것이 그래도 아무런 사전 정보 없이 알아내게 하는 것보다 다음 개발자에게 더 도움이 됩니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * 1. Magic number. This value is the lowest I could find to align the top of
 * `.foo` with its parent. Ideally, we should fix it properly.
 */
.foo {
  top: 0.327em; /* 1 */
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * 1. Magic number. This value is the lowest I could find to align the top of
 * `.foo` with its parent. Ideally, we should fix it properly.
 */
.foo
  top: 0.327em /* 1 */
{% endhighlight %}
  </div>
</div>



### 참고

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](http://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)






## 색

색은 CSS 언어에서 중요한 위치를 차지하고 있습니다. 자연스럽게, Sass는 몇 가지의 [강력한 펑션](http://sass-lang.com/documentation/Sass/Script/Functions.html)을 제공함으로써 색 조작에 있어 소중한 동맹이 되었습니다.



### 색 서식

색을 가능한 한 간단하게 만들기 위한 제 조언은 색 서식에 대한 다음의 우선순위를 따르라는 것입니다:

1. [CSS 색 키워드](http://www.w3.org/TR/css3-color/#svg-color);
1. [HSL 표기법](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB 표기법](http://en.wikipedia.org/wiki/RGB_color_model);
1. 16진법 표기법. 가급적 소문자와 가능한 경우 단축형으로.

우선, 키워드는 자명한 서식입니다. HSL 표기는 인간의 두뇌로 이해하기에 가장 쉬울 뿐만 아니라<sup>[citation needed]</sup> 스타일시트 작성자가 색상, 채도, 명도를 조정함으로써 색을 변경하는 일을 쉽게 만듭니다. RGB 역시 색이 청색, 녹색, 적색 중 어느 것에 가까운지 바로 보여주는 이점을 갖고 있지만 세 속성으로부터 색을 제조하는 일을 쉽게 만들어주진 않습니다. 마지막으로, 16진법은 인간의 머리로는 거의 해독이 불가능합니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  color: red;
}

// Nope
.foo {
  color: #FF0000;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  color: red

// Nope
.foo
  color: #FF0000
{% endhighlight %}
  </div>
</div>

HSL이나 RGB 표기를 사용할 때, 쉼표(`,`) 뒤에는 언제나 스페이스 한 칸을 더하고 괄호(`(`, `)`)와 내용 사이에는 스페이스를 넣지 마세요.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo {
  color: rgba(0, 0, 0, 0.1);
  background: hsl(300, 100%, 100%);
}

// Nope
.foo {
  color: rgba(0,0,0,0.1);
  background: hsl( 300, 100%, 100% );
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo
  color: rgba(0, 0, 0, 0.1)
  background: hsl(300, 100%, 100%)

// Nope
.foo
  color: rgba(0,0,0,0.1)
  background: hsl( 300, 100%, 100% )
{% endhighlight %}
  </div>
</div>



### 색과 변수

색을 한 번 이상 사용할 때는 색을 대변하는 의미 있는 이름을 붙여 변수에 저장하세요.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$sass-pink: #c69;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$sass-pink: #c69
{% endhighlight %}
  </div>
</div>

이제 이 변수를 언제든 원할 때마다 자유롭게 사용할 수 있습니다. 하지만, 만약 변수의 용도가 테마와 깊은 관련이 있다면, 변수를 그대로 사용하지 말라고 조언하겠습니다. 대신, 그 변수가 어떻게 사용되어야 하는지 설명하는 이름을 붙여 다른 변수에 저장하세요.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$main-theme-color: $sass-pink;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$main-theme-color: $sass-pink
{% endhighlight %}
  </div>
</div>

이렇게 함으로써 테마 변경이 `$sass-pink: blue` 같은 사태를 초래하는 것을 방지할 수 있습니다.



### 색 명암 조절



[`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method)과 [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) 두 펑션은 HSL 공간에서 색의 명도를 증감하여 조정합니다. 기본적으로, 이들은 [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) 펑션의 `$lightness` 매개 변수의 가명일 뿐입니다.

문제는, 이들 펑션이 가끔 기대되는 결과를 제공하지 않는다는 것입니다. 반면에, [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) 펑션은 색을 `white`나 `black`과 혼합함으로써 명암을 조절하는 좋은 방법입니다.

앞서 언급한 두 펑션보다 `mix`를 사용하는 것의 이점은 색의 비율을 감소시킴에 따라 점진적으로 검은 색(혹은 흰 색)으로 나아간다는 점입니다. 반면 `darken`과 `lighten`은 색을 순식간에 완전한 검은 색이나 흰 색으로 보내버릴 것입니다.

<figure role="group">
  <img alt="Illustration of the difference between lighten/darken and mix Sass functions"
     sizes="100vw"
     srcset="/assets/images/lighten-darken-mix_small.png  540w,
             /assets/images/lighten-darken-mix_medium.png 900w,
             /assets/images/lighten-darken-mix_large.png 1200w,
             /assets/images/lighten-darken-mix_huge.png  1590w" />
  <figcaption>Illustration of the difference between <code>lighten</code>/<code>darken</code> and <code>mix</code> by <a href="http://codepen.io/KatieK2/pen/tejhz/" target="_blank">KatieK</a></figcaption>
</figure>

만약 매번 `mix` 펑션을 쓰는 것을 원치 않으신다면, 두 가지 사용하기 쉬운 ([Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)에 포함되어 있기도 한) `tint`와 `shade` 평션을 만들어 같은 일을 할 수 있습니다:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Slightly lighten a color
/// @access public
/// @param {Color} $color - color to tint
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

/// Slightly darken a color
/// @access public
/// @param {Color} $color - color to shade
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Slightly lighten a color
/// @access public
/// @param {Color} $color - color to tint
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function tint($color, $percentage)
  @return mix($color, white, $percentage)

/// Slightly darken a color
/// @access public
/// @param {Color} $color - color to shade
/// @param {Number} $percentage - percentage of `$color` in returned color
/// @return {Color}
@function shade($color, $percentage)
  @return mix($color, black, $percentage)
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p><a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> 펑션은 속성들이 이미 얼마나 높거나 낮은지를 고려함으로써 그 크기를 보다 유동적으로 변경하도록 디자인되었습니다. 이 펑션은 <code>mix</code> 만큼이나 좋은 결과물과 함께 보다 명확한 호출 관례를 제공합니다. 그렇지만 비례 계수는 정확히 같지 않습니다.</p>
</div>



### 참고

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don’t Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)






## 리스트

리스트는 Sass에서 배열에 상당하는 개념입니다. 리스트는 어떤 타입의 값이든(리스트도 포함. 이 경우 내포 리스트가 된다) 저장할 수 있게 의도된 ([맵](#맵)과 달리) 평면적인 데이터 구조입니다.

리스트는 다음의 가이드라인을 준수해야 합니다:

* 글자 80개 길이를 초과할 정도로 길지 않다면, 언제나 한 줄로 표시한다;
* CSS 용도 그대로 사용하는 게 아니라면, 언제나 쉼표를 구분 문자로 사용한다;
* 비어 있거나 다른 리스트 안에 포개져있지 않다면, 절대 괄호를 사용하지 않는다;
* 뒤따르는 쉼표는 절대 붙이지 않는다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$font-stack: 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif;

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif;

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif,);
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$font-stack: 'Helvetica', 'Arial', sans-serif

// Nope (since it is not supported)
$font-stack:
  'Helvetica',
  'Arial',
  sans-serif

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif)

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif,)
{% endhighlight %}
  </div>
</div>

리스트에 새로운 아이템을 추가할 때는, 언제나 제공된 API를 이용하세요. 수동으로 새로운 아이템을 추가하려고 하지 마세요.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
$shadows: 0 42px 13.37px hotpink;

// Yep
$shadows: append($shadows, $shadow, comma);

// Nope
$shadows: $shadows, $shadow;
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
$shadows: 0 42px 13.37px hotpink

// Yep
$shadows: append($shadows, $shadow, comma)

// Nope
$shadows: $shadows, $shadow
{% endhighlight %}
  </div>
</div>



### 참고

* [SassyLists](http://sassylists.com)






## 맵

Sass 3.3부터, 스타일시트 작성자는 맵을 정의할 수 있는데, 이는 연관 배열, 해쉬 혹은 JavaScript 오브젝트에 해당하는 Sass 용어입니다. 맵은 키를 모든 유형의 값과 연결하는 자료 구조입니다 (키는 어떤 자료 유형도 될 수 있습니다. 추천하지는 않지만 맵도 포함됩니다).

맵은 다음과 같이 작성되어야 합니다:

* 콜론(`:`) 다음에 스페이스;
* 여는 괄호 (`(`)는 콜론(`:`)과 같은 줄에;
* (99%의 경우에 해당하는) 문자열인 **키는 따옴표로 감싼다**;
* 각각의 키/값 쌍은 새 줄을 차지한다;
* 각 키/값 뒤에는 쉼표(`,`);
* 추가, 제거 혹은 순서를 바꾸기 쉽도록 마지막 아이템 **뒤에 따라오는 쉼표**(`,`);
* 닫는 괄호(`)`)는 새 줄을 차지한다;
* 닫는 괄호(`)`)와 세미콜론(`;`) 사이에는 스페이스나 새 줄을 넣지 않는다.

보기:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
);

// Nope
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
$breakpoints: ('small': 767px, 'medium': 992px, 'large': 1200px,)

// Nope
$breakpoints: ( 'small': 767px, 'medium': 992px, 'large': 1200px )

// Nope
$breakpoints: (small: 767px, medium: 992px, large: 1200px,)

// Nope (since it is not supported)
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
)
{% endhighlight %}
  </div>
</div>



### Sass 맵 디버그

어떤 미친 마법이 Sass 맵에서 일어나고 있는 건지 알 수 없어 헤매는 스스로를 발견하게 된다면, 아직 구원받을 수 있는 방법이 있으니 걱정하지 마십시오.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@mixin debug-map($map) {
  @at-root {
    @debug-map {
      __toString__: inspect($map);
      __length__: length($map);
      __depth__: if(function-exists('map-depth'), map-depth($map), null);
      __keys__: map-keys($map);
      __properties__ {
        @each $key, $value in $map {
          #{'(' + type-of($value) + ') ' + $key}: inspect($value);
        }
      }
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
=debug-map($map)
  @at-root
    @debug-map
      __toString__: inspect($map)
      __length__: length($map)
      __depth__: if(function-exists('map-depth'), map-depth($map), null)
      __keys__: map-keys($map)
      __properties__
        @each $key, $value in $map
          #{'(' + type-of($value) + ') ' + $key}: inspect($value)
{% endhighlight %}
  </div>
</div>

맵의 깊이를 알고 싶으시면 아래 펑션을 추가하세요. 위의 믹신이 자동으로 값을 표시할 것입니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Compute the maximum depth of a map
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map) {
  $level: 1;

  @each $key, $value in $map {
    @if type-of($value) == 'map' {
      $level: max(map-depth($value) + 1, $level);
    }
  }

  @return $level;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Compute the maximum depth of a map
/// @param {Map} $map
/// @return {Number} max depth of `$map`
@function map-depth($map)
  $level: 1

  @each $key, $value in $map
    @if type-of($value) == 'map'
      $level: max(map-depth($value) + 1, $level)

  @return $level;
{% endhighlight %}
  </div>
</div>



### 참고

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](http://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)






## CSS 규칙

이 부분은 모두가 알고 있는 내용의 복습이 되겠지만, 여기 CSS 규칙의 작성 방법이 있습니다 (적어도, [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset)을 포함한 대부분의 가이드라인에 따르면 이렇습니다):

* 관련된 선택자는 같은 줄에; 관련 없는 선택자는 새 줄에;
* 여는 중괄호(`{`)는 마지막 선택자와 스페이스 한 칸의 간격을 둔다;
* 각각의 선언은 저마다 새 줄을 차지한다;
* 콜론(`:`) 뒤에는 스페이스 한 칸을 둔다;
* 모든 선언의 끝은 세미콜론(`;`)으로 마무리한다;
* 닫는 중괄호(`}`)는 새 줄을 차지한다;
* 닫는 중괄호(`}`) 뒤에 새 줄.

보기:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// Nope
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
    margin: 0 auto }
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
.foo, .foo-bar,
.baz
  display: block
  overflow: hidden
  margin: 0 auto

// Nope
.foo,
.foo-bar, .baz
    display: block
    overflow: hidden
    margin: 0 auto
{% endhighlight %}
  </div>
</div>

CSS와 관련된 가이드라인에 더해, 우리는 다음 사항들에 관심을 기울여야 합니다:

* 지역 변수는 어떤 선언보다 먼저 선언되어야 하며, 새 줄 하나로 다른 선언들과 간격을 둔다;
* `@content`가 없는 믹신 호출은 다른 선언보다 앞에 위치한다;
* 내포된 선택자는 언제나 새 줄 뒤에 온다;
* `@content`를 가진 믹신 호출은 내포된 선택자보다 뒤에 위치한다;
* 닫는 중괄호(`}`) 앞에는 새 줄이 없어야 한다.

보기:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo, .foo-bar,
.baz {
  $length: 42em;

  @include ellipsis;
  @include size($length);
  display: block;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  @include respond-to('small') {
    overflow: visible;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo, .foo-bar,
.baz
  $length: 42em

  +ellipsis
  +size($length)
  display: block
  overflow: hidden
  margin: 0 auto

  &:hover
    color: red

  +respond-to('small')
    overflow: visible
{% endhighlight %}
  </div>
</div>



### 참고

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)






## 선언 정렬

전 CSS 선언을 정렬하는 문제 만큼 견해가 갈리는 주제를 별로 떠올릴 수가 없습니다. 구체적으로, 여기 두 파가 있습니다:

* 알파벳 순서 고수하기
* 유형 별로 정렬하기(position, display, colors, font, 기타 등등...).

두 가지 방법 모두 장단점이 있습니다. 우선, 알파벳순은 (적어도 로마자를 사용하는 언어에서는) 보편적인 만큼 한 속성을 다른 속성 앞에 정렬하는 문제가 논쟁거리가 못됩니다. 하지만, `bottom`과 `top` 같은 속성들이 서로 붙어있지 않은 모습이 제겐 엄청나게 이상해보입니다. 왜 애니메이션이 디스플레이 유형보다 먼저 나와야 합니까? 알파벳순에는 이상한 점이 많이 있습니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  background: black;
  bottom: 0;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  height: 100px;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 100px;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  background: black
  bottom: 0
  color: white
  font-weight: bold
  font-size: 1.5em
  height: 100px
  overflow: hidden
  position: absolute
  right: 0
  width: 100px
{% endhighlight %}
  </div>
</div>

반면, 유형별로 속성을 정렬하는 것은 아주 타당합니다. 모든 폰트 관련 선언들이 한데 모이고, `top`과 `bottom`은 재결합하며 규칙들을 보면 마치 짧은 이야기를 읽는 느낌입니다. 그러나 [Idiomatic CSS](https://github.com/necolas/idiomatic-css)와 같은 관례를 고수하지 않는 한 이 방식은 여러가지로 해석될 수 있습니다. `white-space`는 어디로 가야 할까요: 폰트 혹은 디스플레이? `overflow`는 정확히 어디에 속할까요? 그룹 내에서 속성들의 순서는 어떻게 되어야 할까요(역설적이게도, 알파벳순으로 정렬할 수도 있겠죠)?

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  height: 100px;
  width: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  height: 100px
  width: 100px
  overflow: hidden
  position: absolute
  bottom: 0
  right: 0
  background: black
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

유형별 정렬의 다른 흥미로운 하위 갈래로 [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)라는 것이 있는데, 이것 역시 꽤 많이 사용되는 듯 합니다. 기본적으로, Concentric CSS는 순서를 정의하기 위해 박스 모델에 의존합니다: 바깥쪽에서 출발해서, 안쪽으로 들어오게 되죠.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: black;
  overflow: hidden;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  width: 100px
  height: 100px
  position: absolute
  right: 0
  bottom: 0
  background: black
  overflow: hidden
  color: white
  font-weight: bold
  font-size: 1.5em
{% endhighlight %}
  </div>
</div>

저 스스로도 결정할 수가 없다는 점을 말씀드려야겠습니다. [CSS Tricks에서의 최근 설문조사](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)에 따르면 45% 이상의 개발자들이 유형별로, 14%가 알파벳순으로 선언을 정렬하는 것으로 나타났습니다. 또한, 완전히 임의로 정렬하는 39%의 개발자들도 있습니다. 저를 포함해서요.

<figure role="group">
  <img src="/assets/images/css-order-chart.png" alt="Chart showing how developers order their CSS declarations" />
  <figcaption>Chart showing how developers order their CSS declarations</figcaption>
</figure>

이 때문에, 이 스타일가이드에서는 선택을 강요하지 않겠습니다. 여러분이 스타일시트 내내 일관성을 유지하기만 한다면, 맘에 드는 걸로 고르시면 됩니다.

<div class="note">
  <p><a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">최근의 연구</a>는 (<a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">유형별 정렬</a>을 이용하는) <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a>를 사용한 CSS 선언 정렬이 Gzip 압축 시 평균 파일 크기를 2.7% 줄인다는 결과를 보여줍니다. 그에 비해, 알파벳순으로 정렬했을 때는 1.3%가 줄었습니다.</p>
</div>



### 참고

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)






## 선택자 내포Nesting

Sass가 제공하는 기능 중 많은 개발자들에 의해 심하게 남용되고 있는 것 하나는 *선택자 내포*입니다. 선택자 내포는 짧은 선택자들을 서로 포개어 넣음으로써 긴 선택자를 산출해 내는 방식을 제안합니다.

### 일반적인 규칙

예로, 아래의 Sass는:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  .bar
    &:hover
      color: red
{% endhighlight %}
  </div>
</div>

... 이런 CSS를 만들어냅니다:

<div>
{% highlight css %}
.foo .bar:hover {
  color: red;
}
{% endhighlight %}
</div>

같은 방식으로, Sass 3.3부터는 현재 선택자 인용(`&`)을 이용해 고급 선택자를 생성하는 것이 가능합니다. 예를 들면:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  &-bar {
    color: red;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  &-bar
    color: red
{% endhighlight %}
  </div>
</div>

... 위의 코드는 이런 CSS를 생성합니다:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo-bar {
  color: red;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo-bar
  color: red
{% endhighlight %}
  </div>
</div>

이 방법은 종종 [BEM 작명 관례](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)와 함께 `.block__element`와 `.block__modifier` 선택자를 원래 선택자(이 경우엔 `.block`)에 기반하여 생성하는 데 사용됩니다.

<div class="note">
  <p>반드시 그런 건 아닐 수도 있지만, 현재 선택자 인용(`&`)으로 새로운 선택자를 생성하면 그 선택자 자체가 코드베이스에 존재하지 않기 때문에 검색을 할 수 없게 됩니다.</p>
</div>

선택자 내포의 문제는 결과적으로 코드를 읽기 어렵게 만든다는 것입니다. 읽기 위해서는 들여쓰기의 단계를 바탕으로 산출되는 선택자를 마음속으로 계산해야 합니다; CSS가 어떤 모습이 될지 항상 명확한 것은 아닙니다.

선택자가 길어지고 현재 선택자(`&`)를 더 자주 인용할수록 더더욱 그러합니다. 어느 순간이 되면, 선택자를 파악하고 무슨 일이 일어나고 있는지 더이상 이해하기가 힘들어질 위험이 너무 커지기 때문에 무릎쓸 만한 가치가 없습니다.

그런 상황을 방지하기 위해, 우리는 **가능한 한 선택자 내포를 피해야 합니다.** 하지만, 이 규칙에는 분명 몇 가지의 예외가 있습니다.

### 예외

우선, 원래의 선택자 안에 가상 클래스와 가상 요소를 내포하는 것은 허용되며 나아가 추천할 만합니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: 'pseudo-element';
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  color: red

  &:hover
    color: green

  &::before
    content: 'pseudo-element'
{% endhighlight %}
  </div>
</div>

가상 클래스와 가상 요소에 선택자 내포를 사용하는 것은 (밀접하게 관련된 선택자를 다루므로) 타당할 뿐만 아니라, 한 컴퍼넌트에 관한 모든 것을 같은 장소에 유지하는 데 도움이 됩니다.

또한, `.is-active` 같은 컴퍼넌트에 독립적인 상태 클래스를 사용할 때, 컴퍼넌트의 선택자 아래에 내포하여 깔끔하게 정리하는 것에는 아무 문제가 없습니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  &.is-active {
    font-weight: bold;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  &.is-active
    font-weight: bold
{% endhighlight %}
  </div>
</div>

마지막으로 짚어야 할 것으로, 요소를 꾸밀 때, 그것이 우연히 다른 특정 요소 안에 들어가있다면 그 컴퍼넌트에 관한 모든 것을 한 곳에 유지하기 위해 내포를 사용하는 것은 문제가 없습니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  .no-opacity & {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  .no-opacity &
    display: none
{% endhighlight %}
  </div>
</div>

경험이 적은 개발자와 함께 일한다면, `.no-opacity &` 같은 선택자는 조금 이상해보일 수 있습니다. 혼란을 방지하기 위해, 이 이상한 구문을 명확한 API로 바꿔놓는 아주 짧은 믹신을 만들 수 있습니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/// Helper mixin to provide simple API to selector nesting
/// @param {String} $selector - Selector
@mixin when-inside($selector) {
  #{$selector} & {
    @content;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/// Helper mixin to provide simple API to selector nesting
/// @param {String} $selector - Selector
=when-inside($selector) {
  #{$selector} &
    @content
}
{% endhighlight %}
  </div>
</div>

앞의 예시를 다시 쓰면 이렇게 됩니다:

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  // ...

  @include when-inside('.no-opacity') {
    display: none;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  // ...

  +when-inside('.no-opacity')
    display: none
{% endhighlight %}
  </div>
</div>

모든 것이 그렇듯이, 세부사항은 크게 상관이 없으며, 일관성이 핵심입니다. 선택자 내포에 충분한 확신이 있다면 선택자 내포를 사용하세요. 단지 여러분의 팀 전체가 그 선택에 동의하는지 확실히 하시면 됩니다.






### 참고

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)



