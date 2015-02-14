
# 조건문

Sass가 `@if`과 `@else` 지시어를 통해 조건문을 제공한다는 것을 아마 알고 계실 겁니다. 여러분의 코드에 꽤 복잡한 논리를 갖고 있는게 아니라면, 일상적인 스타일시트에선 조건문이 필요하지 않습니다. 사실, 조건문이 존재하는 가장 큰 이유는 라이브러리와 프레임워크입니다.

어쨌든, 조건문을 필요로 하게 된다면, 다음의 가이드라인을 준수하세요:

* 필요한 경우가 아니라면 괄호 없이;
* `@if` 앞에는 빈 새 줄 하나;
* 여는 중괄호(`{`) 뒤에는 줄 바꿈;
* `@else` 문은 이전의 닫는 중괄호(`}`)와 같은 줄에;
* 다음 줄이 닫는 중괄호(`}`)가 아닌 한 마지막 닫는 중괄호(`}`) 뒤에는 빈 새 줄 하나.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if $support-legacy {
  // ...
} @else {
  // ...
}

// Nope
@if ($support-legacy == true) {
  // ...
}
@else {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if $support-legacy
  // ...
@else
  // ...

// Nope
@if ($support-legacy == true)
  // ...
@else
  // ...
{% endhighlight %}
  </div>
</div>

거짓 값을 테스트할 때는, `false`나 `null` 대신 언제나 `not` 키워드를 사용하세요.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@if not index($list, $item) {
  // ...
}

// Nope
@if index($list, $item) == null {
  // ...
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@if not index($list, $item)
  // ...

// Nope
@if index($list, $item) == null
  // ...
{% endhighlight %}
  </div>
</div>

어떤 조건에 따라 다른 결과를 반환하는 펑션 안에서 조건문을 사용할 때는, 반드시 펑션이 조건문 블록 밖에서도 `@return`문을 갖도록 만드세요.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
// Yep
@function dummy($condition) {
  @if $condition {
    @return true;
  }

  @return false;
}

// Nope
@function dummy($condition) {
  @if $condition {
    @return true;
  } @else {
    @return false;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
// Yep
@function dummy($condition)
  @if $condition
    @return true

  @return false;

// Nope
@function dummy($condition)
  @if $condition
    @return true
  @else
    @return false
{% endhighlight %}
  </div>
</div>
