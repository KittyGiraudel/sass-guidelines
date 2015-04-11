
# Extend

`@extend` 지시어는 몇 년 전 Sass를 아주 유명하게 만든 기능 중 하나임에 틀림이 없습니다. 상기하자면, 이 기능은 마치 선택자 B에도 연결된 것처럼 요소 A를 꾸미라고 Sass에게 말하는 것을 가능하게 합니다. 말할 것도 없이 이는 모듈식 CSS를 작성할 때 가치 있는 협력자가 될 수 있습니다.

그러나 이 기능을 사용하지 말라고 여러분에게 경고해야 할 것 같습니다. 기발한 만큼, `@extend`는 득보다 실이 더 많을 수 있는 매우 까다로운 개념입니다. 제대로 사용되지 않았을 경우 특히 그렇죠. 문제는, 선택자를 확장할 때, 전체 코드베이스에 정통하지 않고서야 이 질문들에 대답할 방법이 없다는 겁니다:

* 내 현재 선택자가 어디에 첨부될 것인가?
* 원치 않는 부작용이 초래될 수도 있는가?
* 이 한 번의 확장으로 얼마나 큰 CSS가 생성되는가?

이런 점을 고려하면, 그 결과는 무해할 수도 있고 처참한 부작용을 초래할 수도 있습니다. 이 때문에, 제 첫 번째 조언은 `@extend` 지시어를 완전히 피하라는 것입니다. 너무 인정사정없이 들릴 수 있지만, 가장 중요한 것은 덕분에 두통과 골칫거리를 덜 수 있다는 점입니다.

그렇다고는 하나, 이런 말이 있죠:

> 절대 안 된다고 절대 말하지 말라.<br>
> &mdash; 듣자 하니, [비욘세는 아닌 누군가](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

선택자의 확장이 유익하고 가치 있을 수 있는 상황도 있습니다. 그렇지만, 곤란에 처하지 않도록 이 규칙들을 항상 염두에 두세요:

* 다른 모듈들에 걸치지 않게, 한 모듈 안에서 확장을 사용하라.
* 오로지 플레이스홀더에만 확장을 사용하고, 실제 선택자에는 사용하지 말라.
* 확장하는 플레이스홀더가 가능한 한 적게 존재하도록 하라.

확장은 `@media` 블록과는 제대로 작동하지 않는다는 점도 상기시켜 드려야겠군요. 알고 계시듯이, Sass는 미디어 쿼리 안에서 외부의 선택자를 확장할 수 없습니다. 시도할 경우, 컴파일러는 할 수 없는 일이라는 것을 알리며 충돌을 일으킵니다. 좋지 않은 일이죠. 특히 미디어 쿼리가 우리가 아는 거의 전부이기 때문에 더 그렇습니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // This doesn’t work. Worse: it crashes.
    @extend .foo;
  }
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
.foo
  content: 'foo'

@media print
  .bar
    // This doesn’t work. Worse: it crashes.
    @extend .foo
{% endhighlight %}
  </div>
</div>

> @media 안에서 외부의 선택자를 @extend할 수 없다.<br>
> 같은 지시어 안에 있는 선택자만 @extend할 수 있다.

<div class="note">
  <p><code>@extend</code>는 속성을 중복하지 않고 선택자를 합치기 때문에 파일 크기와 관련해서 도움이 된다고들 말합니다. 사실이긴 하지만, <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a>으로 압축하게 되면 그 차이는 무시할 만한 정도입니다.</p>
  <p>말인즉슨, 만약 Gzip(혹은 그에 상당하는 다른 방법)을 이용할 수 없는 경우, 자신이 뭘 하고 있는지 이해하는 한 <code>@extend</code> 접근법을 선택하는 것도 그렇게 나쁘진 않을 수도 있습니다.</p>
</div>

요약하자면, 어떤 특정한 상황 아래가 아니라면 `@extend` 지시어를 사용하지 말라고 조언하겠습니다. 그러나 그것을 완전히 금하라고까진 않겠습니다.



### 참고

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
