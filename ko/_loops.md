
# 반복문

Sass는 [리스트](#리스트)와 [맵](#맵) 같은 복잡한 데이터 구조를 제공하기 때문에, 작성자에게 그 개체들을 반복할 수 있는 방법 역시 준다는 사실은 놀랍지 않습니다.

하지만, 대체로 반복문의 존재는 아마도 Sass에 속하지 않는 어느 정도 복잡한 논리를 암시합니다. 반복문을 사용하기 전에, 합당한지 그리고 실제로 문제를 해결해 주는지 확인하세요.






## Each

`@each` 반복문은 분명 Sass가 제공하는 세 가지 반복문들 중에서 가장 많이 사용됩니다. 이 반복문은 리스트나 맵을 순환할 수 있는 깔끔한 API를 제공합니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $theme in $themes {
  .section-#{$theme} {
    background-color: map-get($colors, $theme);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $theme in $themes
  .section-#{$theme}
    background-color: map-get($colors, $theme)
{% endhighlight %}
  </div>
</div>

맵에서 반복할 때, 일관성을 강제하기 위해 언제나 `$key`와 `$value`를 변수 이름으로 사용하세요.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@each $key, $value in $map
  .section-#{$key}
    background-color: $value
{% endhighlight %}
  </div>
</div>

또한 가독성을 위해 이 가이드라인을 준수하세요:

* `@each` 앞에 빈 새 줄;
* 다음 줄이 닫는 중괄호(`}`)가 아닌 한 닫는 중괄호(`}`) 뒤에 빈 새 줄.





## For

`@for` 반복문은 CSS의 `:nth-*` 가상 클래스와 결합되었을 때 유용할 수 있습니다. 이 시나리오를 제외하고는, 무언가에 반복문을 *사용해야만 한다면* `@each` 반복문을 선택하세요.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@for $i from 1 through 10
  .foo:nth-of-type(#{$i})
    border-color: hsl($i * 36, 50%, 50%)
{% endhighlight %}
  </div>
</div>

일반적인 관례를 따라 항상 `$i`를 변수 이름으로 사용하고, 정말로 좋은 이유가 있는 게 아니라면 `to` 키워드를 사용하지 마세요: 언제나 `through`를 사용하세요. 많은 개발자들이 Sass가 이 조합을 제공한다는 사실조차 모릅니다; 사용 시 혼란을 초래할 수 있습니다.

또한 가독성을 위해 이 가이드라인을 준수하세요:

* `@for` 앞에 빈 새 줄;
* 다음 줄이 닫는 중괄호(`}`)가 아닌 한 닫는 중괄호(`}`) 뒤에 빈 새 줄.






## While

`@while` 반복문은 실제 Sass 프로젝트에서 전혀 용도가 없습니다. 특히 내부에서 반복문을 중단시킬 방법이 없기 때문입니다. **사용하지 마세요**.
