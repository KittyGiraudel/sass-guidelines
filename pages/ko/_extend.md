
## Extend

`@extend` 지시어는 몇 년 전 Sass를 아주 유명하게 만든 기능 중 하나임에 틀림이 없습니다. 상기하자면, 이 기능은 마치 선택자 B에도 연결된 것처럼 요소 A를 꾸미라고 Sass에게 말하는 것을 가능하게 합니다. 말할 것도 없이 이는 모듈식 CSS를 작성할 때 가치 있는 협력자가 될 수 있습니다.

그러나, `@extend`의 진정한 목적은 규칙 간에 확장된 선택자 내에서 관계(제약 조건)를 유지하는 것입니다. 이것이 정확히 무슨 뜻일까요?

- 선택자에는 제약이 있다(예: `.foo > .bar`의 `.bar`에는 부모 `.foo`가 있어야 한다);
- 이러한 제약 조건은 확장하는 선택자로 전달된다(예: `.baz { @extend .bar; }`는 `.foo > .bar, .foo > .baz`를 생성한다);
- 확장된 선택자의 선언은 확장하는 선택자와 공유된다.

이를 감안할 때, 관대한 제약 조건으로 선택자를 확장하면 어떻게 선택자가 폭발할 수 있는지 쉽게 알 수 있습니다. `.baz .qux`가 `.foo .bar`를 확장하는 경우 결과 선택자는 `.foo .baz .qux` 또는 `.baz .foo .qux`가 될 수 있습니다. `.foo`와 `.baz`는 모두 일반 조상이기 때문입니다. 이는 부모, 조부모 등일 수도 있습니다.

항상 실제 선택자가 아닌 선택자 플레이스홀더로 관계를 정의하세요. 이렇게 하면 선택자에 대한 작명 관례를 자유롭게 사용(그리고 변경)할 수 있으며, 관계가 플레이스홀더 내에서 한 번만 정의되므로 의도하지 않은 선택자를 생성할 가능성이 훨씬 적어집니다.

스타일을 상속할 때, 확장하는 `.class` 또는 `%placeholder` 선택자가 확장된 선택자의 일종인 경우에만 `@extend`를 사용하십시오. 예를 들어, `.error`는 `.warning`의 일종이기 때문에, `.error`는 `@extend .warning`을 할 수 있습니다.

{% include snippets/extend/01/index.html %}

선택자의 확장이 유익하고 가치 있을 수 있는 상황도 있습니다. 주의하여 `@extend`할 수 있도록 항상 이러한 규칙을 명심하세요:

- 실제 선택자가 아닌, 주로 `%placeholders`에 확장을 사용하세요.
- 클래스를 확장할 때, [복잡한 선택자](https://www.w3.org/TR/selectors-4/#syntax)가 아닌 다른 클래스로만 클래스를 확장하세요.
- 직접적으로 `%placeholder`를 확장하는 것은 가능한 한 적게 하세요.
- 일반 조상 선택자 (예 : `.foo .bar`) 또는 일반 형제 선택자 (예 : `.foo ~ .bar`)를 확장하지 마세요. 이것이 선택자 폭발의 원인입니다.

<div class="note">
<p><code>@extend</code>는 속성을 중복하지 않고 선택자를 합치기 때문에 파일 크기와 관련해서 도움이 된다고들 말합니다. 사실이긴 하지만, <a="https://ko.wikipedia.org/wiki/Gzip">Gzip</a=>으로 압축하게 되면 그 차이는 무시할 만한 정도입니다.</p>
<p>말인즉슨, 만약 Gzip(혹은 그에 상당하는 다른 방법)을 이용할 수 없는 경우, 자신이 뭘 하고 있는지 이해하는 한 <code>@extend</code> 접근법을 선택하는 것도 그렇게 나쁘진 않을 수도 있습니다.</p>
</div>

### Extend 및 미디어 쿼리

동일한 미디어 범위(`@media` 지시문) 내에서만 선택자를 확장해야합니다. 미디어 쿼리를 또 다른 제약으로 생각하세요.

{% include snippets/extend/02/index.html %}

저를 포함한 많은 개발자들이 반대하는 `@extend`의 이점과 문제에 대한 의견은 극도로 갈리는 것 같습니다. 다음 글에서 읽을 수 있습니다:

- [Sass Extend에 대해 아무도 알려주지 않은 내용](https://www.sitepoint.com/sass-extend-nobody-told-you/)
- [Extend를 피해야 하는 이유](https://www.sitepoint.com/avoid-sass-extend/)
- [지나치게 Extend하지 마세요](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

요약하자면, 선택자 내에서 관계를 유지하기 위해서만 `@extend`를 사용하는 것이 좋습니다. 두 개의 선택자가 특징적으로 유사하다면, 그것은 `@extend`의 완벽한 사용 예입니다. 관련이 없지만, 일부 규칙을 공유할 때는 `@mixin`이 더 적합 할 수 있습니다. [이 글](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)에서 둘 중에서 선택하는 방법에 대해 자세히 알아보세요.

<div class="note">
<p>이 섹션에 대한 도움과 전문지식을 주신 <a href="https://twitter.com/davidkpiano">David Khourshid</a>에게 감사드립니다.</p>
</div>
