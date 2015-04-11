
# 서론





## 왜 스타일가이드가 필요한가

스타일가이드는 여러분의 코드에 대한 이상적인 상태를 제시하는 그저 읽기에 즐거운 문서가 아닙니다. 어떻게 그리고 왜 코드가 쓰여져야 하는지를 묘사하는, 프로젝트의 일생에서 핵심이 되는 문서입니다. 작은 프로젝트에서는 이것이 지나친 노력으로 보일 수 있습니다. 하지만 코드베이스를 깔끔하고 확장 가능하며 쉽게 관리할 수 있도록 유지하는 데 큰 도움이 됩니다.

말할 것도 없이, 더 많은 개발자들이 프로젝트에 참여할수록, 더 많은 코드 가이드라인이 필요합니다. 같은 맥락으로, 프로젝트가 클수록 스타일가이드는 더욱 필수품이 됩니다.

[Harry Roberts](http://csswizardry.com)는 [CSS Guidelines](http://cssguidelin.es/#the-importance-of-a-styleguide)에서 이에 대해 잘 서술하고 있습니다:

<blockquote>
  <p>코딩 스타일가이드는 (시각적 스타일가이드 아님) 다음과 같은 팀을 위한 소중한 도구이다:</p>
  <ul>
    <li>상당 기간 동안 제품을 제작하고 유지하는 팀;</li>
    <li>다른 능력과 특기를 소유한 개발자들이 있는 팀;</li>
    <li>어느 때나 작업을 진행하고 있는 여러 명의 다른 개발자들이 있는 팀;</li>
    <li>정기적으로 직원을 충원하는 팀;</li>
    <li>개발자들이 들락날락하는 다수의 코드베이스를 가진 팀.</li>
  </ul>
</blockquote>






## 이 글에서 기대하지 말아야 할 것

중요한 것 먼저: **이것은 CSS 스타일가이드가 아닙니다**. 이 문서는 CSS 클래스를 위한 작명 관례, 모듈 패턴과 CSS 세계에서의 ID 문제를 논하지 않을 것입니다. 이 가이드라인은 오직 Sass와 관련된 내용만을 다루는 것을 목표로 합니다.

또한, 이 가이드라인은 제 자신의 것이고 따라서 **매우 치우친 견해를 갖고 있습니다**. 방법론 모음집이나 제가 수년 동안 다듬고 해 온 조언이라고 생각하세요. 이 가이드라인은 몇몇 통찰력 있는 자료를 연결할 기회 또한 제공하니, *참고 자료* 역시 꼭 확인하세요.

누구나 동의하다시피, 이것이 유일한 방법은 아니며, 여러분의 프로젝트에 맞을 수도 맞지 않을 수도 있습니다. 마음대로 골라서 여러분의 필요에 맞게 적용하세요. 우리가 이야기하듯이, *여러분 자동차의 연비는 다를 수 있습니다*(역주: 상황에 따라 다르게 적용될 수 있습니다).






## 핵심 원칙

마지막에 가서, 여러분이 이 스타일가이드 전체로부터 얻기를 바라는 한 가지가 있다면, 그것은 **Sass는 가능한 한 간단하게 유지되어야 한다**는 것입니다.

Sass로 쓰인 [bitwise operators](https://github.com/HugoGiraudel/SassyBitwise), [iterators and generators](https://github.com/HugoGiraudel/SassyIteratorsGenerators), [a JSON parser](https://github.com/HugoGiraudel/SassyJSON) 등 저의 실없는 실험들 덕분에 우리는 이 전처리기를 가지고 어떤 일을 할 수 있는지 잘 알고 있습니다.

한편, CSS는 간단한 언어입니다. Sass는 CSS를 작성하도록 의도되었으므로, 보통의 CSS보다 더 복잡해져선 안 됩니다. [KISS 원칙](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid)이 핵심이며 어떤 상황에선 심지어 [DRY 원칙](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself)보다 우선할 수도 있습니다.

때로는, 코드를 유지가능하도록 만들기 위해 조금 반복하는 편이 더 낫습니다. 무거운 머리를 가진, 통제하기 힘들고, 불필요하게 복잡한 시스템을 제작하면 지나친 복잡성 때문에 유지관리가 완전히 불가능해질 수 있습니다.

또한, 한 번 더 [Harry Roberts](https://csswizardry.com)를 인용하자면, **실용주의가 완벽을 이깁니다**. 어느 순간, 아마도 여러분은 여기에 설명된 규칙을 거스르는 스스로를 발견하실 겁니다. 만약 그것이 타당하다면, 만약 그것이 옳게 느껴진다면, 그렇게 하세요. 코드는 목적이 아니라 수단에 불과합니다.



### 참고

* [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
* [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)
