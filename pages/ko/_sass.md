
## Sass에 대해

[Sass](https://sass-lang.com/)는 [공식 문서](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)에서 스스로를 이렇게 묘사하고 있습니다:

> Sass는 기초 언어에 힘과 우아함을 더해주는 CSS의 확장이다.

Sass의 궁극적인 목적은 CSS의 결함을 보정하는 것입니다. 우리 모두 알듯이, CSS는 세계 최고의 언어는 못 됩니다<sup>[citation needed]</sup>. 배우기엔 매우 간단한 반면, 금세 아주 지저분해질 수 있습니다. 특히 큰 프로젝트에서 더 그렇습니다.

Sass는 이런 상황에서, 메타언어로서, 추가 기능과 유용한 도구를 제공하기 위해 CSS의 구문을 개선하는 역할을 합니다. 한편, Sass는 CSS 언어에 대해 보수적인 입장을 취하려 합니다.

핵심은 CSS를 완전한 기능을 갖춘 프로그래밍 언어로 바꾸지 않는 것입니다; Sass는 단지 CSS에서 부족한 부분만을 돕길 원합니다. 때문에, Sass를 시작하는 것은 CSS를 배우는 것보다 더 어려울 게 없습니다: CSS 위에 몇 가지의 추가 기능을 더할 뿐이니까요.

그렇다고는 하나, 이 기능들을 사용하는 데에는 많은 방법들이 있습니다. 좋은 것도 있고, 나쁜 것도, 예외적인 것도 있죠. 이 가이드라인은 여러분에게 Sass 코드 작성에 대한 일관되고, 기록된 접근법을 제공할 것입니다.

### Ruby Sass 혹은 LibSass

[Sass의 첫 번째 커밋](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe)은 8년 이상이 지난, 2006년 후반까지 거슬러 올라갑니다. 말할 것도 없이 그 이후로 아주 먼 길을 왔습니다. Ruby로 처음에 개발되었고, 여기저기서 다양한 포트들이 튀어나왔죠. 가장 성공적인, (C/C++로 쓰인) [LibSass](https://github.com/sass/libsass)는 현재 원래의 Ruby 버전과의 완전한 호환에 근접해 있습니다.

2014년, [Ruby 사스와 LibSass 팀은 더 나아가기 전에 두 가지 버전의 동기화를 기다리기로 결정했습니다](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). 그 이후로, LibSass는 형제와의 기능 동기화를 위해 활발하게 버전들을 출시하고 있습니다. 남아있는 불일치들은 제가 [Sass-Compatibility](https://kittygiraudel.github.io/sass-compatibility//) 프로젝트로 한데 모아 정리해두었습니다. 열거되지 않은 불일치를 알고 계신다면, 이슈를 여는 친절을 베풀어주시기 바랍니다.

여러분의 컴파일러를 선택하는 것으로 돌아가겠습니다. 사실, 이건 여러분의 프로젝트에 달려있습니다. Ruby on Rails 프로젝트라면, Ruby Sass를 사용하는 게 나을 겁니다. Ruby Sass가 이 경우에 완벽하게 적합하죠. 또한, Ruby Sass가 언제나 참조 구현이 될 것이며 기능에 있어 LibSass를 선도할 것이라는 점을 알아두십시오. 그리고 만약 [Ruby Sass에서 LibSass로 바꾸기](https://www.sitepoint.com/switching-ruby-sass-libsass/)를 원한다면, 이 글은 당신을 위한 것입니다.

작업 흐름의 통합이 필요한 비(非)Ruby 프로젝트의 경우, 주로 감싸는 용도로 만들어져 있으므로 LibSass가 아마도 더 나은 생각일 것입니다. 그러니까 만약 Node.js를 사용하고 싶으시다면, 선택은 [node-sass](https://github.com/sass/node-sass)입니다.

### Sass 혹은 SCSS

*Sass*라는 이름의 의미에 관해 꽤 많은 혼동이 있습니다. 그럴 만한 이유가 있죠: Sass는 전처리기와 그 구문 두 가지를 의미합니다. 좀 불편하죠, 안 그런가요?

Sass는 처음에 들여쓰기의 감지를 그 핵심 특성으로 갖는 구문을 가리켰습니다. 얼마 지나지 않아, Sass를 유지하는 사람들은 *Sassy CSS*를 의미하는 *SCSS*라는 CSS 친화적인 구문을 제공함으로써 Sass와 CSS 사이의 차이를 좁히기로 결정했습니다. 모토는 이렇습니다: 만약 유효한 CSS라면, 유효한 SCSS이다.

그 이후로, Sass(전처리기)는 [두 가지 다른 구문](https://www.sitepoint.com/whats-difference-sass-scss/)을 제공해 오고 있습니다: *들여쓰기 구문*으로도 알려진 Sass(전부 대문자가 아닙니다, [제발](http://sassnotsass.com/)), 그리고 SCSS. 둘은 정확히 동등한 기능을 갖고 있기 때문에 어느 것을 사용할지는 여러분에게 달렸습니다. 지금 시점에서는 이것은 순전히 미관상의 문제입니다.

Sass의 공백에 반응하는 구문은 중괄호, 세미콜론 그리고 다른 구두점 기호들을 없애기 위해 들여쓰기에 의존하며, 이는 간결하고 짧은 구문으로 이어집니다. 한편, SCSS는 주로 CSS에 올려진 작은 추가사항들이므로 배우기에 더 쉽습니다.

저 자신은 CSS와 더 비슷하고 대부분의 개발자들에게 더 친숙하기 때문에 SCSS를 Sass보다 더 선호합니다. 그런 이유로, SCSS가 이 가이드라인의 기본 구문입니다. <button type="button" data-a11y-dialog-show="options-panel" class="link-like">옵션 패널</button>에서 Sass의 들여쓰기 구문으로 바꾸실 수 있습니다.

### 기타 전처리기들

Sass 외에도 여러 전처리기가 있습니다. 가장 만만찮은 경쟁자는 [Less](http://lesscss.org/)일 것입니다. 유명한 CSS 프레임워크인 [Bootstrap](https://getbootstrap.com/)이 (버전 4까지) 사용한 덕분에 널리 알려진 Node.js 기반의 전처리기죠. 또한 [Stylus](https://stylus-lang.com/)라는 매우 관대하고 유연한 전처리가 있지만, 사용하기가 조금 더 어렵고 커뮤니티가 작습니다.

_다른 전처리기를 두고 왜 Sass를 선택하는가?_ 오늘날에도 여전히 합당한 질문입니다. 얼마 전까진, Sass가 애초에 Ruby로 만들어졌고 Ruby on Rails와 함께 잘 작동했기 때문에 Ruby 기반의 프로젝트에 Sass를 추천하곤 했습니다. 이제 LibSass가 오리지널 Sass를 (거의) 따라잡았기 때문에, 이건 더이상 적절한 조언이 아닙니다.

제가 Sass에서 좋아하는 점은 CSS에 대한 보수적인 접근입니다. Sass의 디자인은 강력한 원칙에 기반하고 있습니다: 디자인 접근법의 큰 부분은 다음과 같은 중심 팀의 믿음으로부터 나옵니다. a) 추가 기능을 더하는 것은 유용성에 의해 정당화되어야만 하는 복잡성의 비용을 가진다. b) 따로 떨어져 있는 스타일 블록 하나만을 보는 것으로도 주어진 블록이 무엇을 하고 있는지 추론하는 것이 쉬워야 한다. 또한, Sass는 다른 전처리기에 비해 세부사항에 대한 훨씬 날카로운 관심을 갖고 있습니다. 제가 아는 한, 핵심 디자이너들은 간과하기 쉬운 모든 CSS 호환성에 대한 지원까지 신경 쓰고 전반적인 동작들이 모두 일관성을 유지하도록 합니다. 다시 말해서, Sass는 실제의 문제를 해결하고, CSS가 미흡한 지점에서 CSS에 유용한 기능을 제공하는 것을 돕기 위한 소프트웨어입니다.

전처리기 외에도, 우리는 [PostCSS](https://github.com/postcss/postcss)와 [cssnext](https://cssnext.github.io/) 같은 도구도 언급해야 합니다. 이들은 지난 몇 달 동안 상당한 관심을 받았죠.

PostCSS는 일반적으로 (그리고 잘못) "후처리기"라고 합니다. 가정해보면, 불행한 이름과 결합한 PostCSS는 이미 전처리기에 의해 처리된 CSS를 파싱한다는 것입니다. 이러한 방식으로 작동 할 수도 있지만, 필수 사항은 아니므로 PostCSS는 실제로 "프로세서"일 뿐입니다.

PostCSS는 스타일시트의 "토큰"에 접근할 수 있게 해주고(예 : 선택자, 속성 및 값), JavaScript로 그것들을 처리하여 모든 종류의 조작을 수행하고 그 결과를 CSS에 컴파일합니다. 예를 들어, 유명한 접두사 라이브러리 [Autoprefixer](https://github.com/postcss/autoprefixer)는 PostCSS로 빌드됩니다. 브라우저 지원 도구 [CanIUse](https://caniuse.com/)를 참조하여 벤더 프리픽스가 필요한지 확인하기 위해 모든 규칙을 파싱한 다음 벤더 프리픽스를 제거하고 필요한 것은 추가합니다.

PostCSS는 모든 전 처리기 (바닐라 CSS 포함)와 함께 작동하는 라이브러리를 구축하는 데 매우 강력하고 훌륭하지만, 아직 사용하기가 특별히 쉽지 않습니다. 그것으로 무엇이든 빌드하기 위해서는 JavaScript를 조금 알아야하며, API가 가끔 혼란스러울 수 있습니다. Sass는 CSS를 작성에 유용한 기능만 제공하는 반면, PostCSS는 CSS AST(추상 구문 트리)와 JavaScript에 대한 직접 접근을 제공합니다.

간단히 말해서, Sass는 다소 쉬우며 대부분의 문제를 해결할 것입니다. 반면에, PostCSS는 (JavaScript에 능숙하지 않다면) 손에 넣기 어려울 수 있지만, 믿을 수 없을 정도로 강력합니다. 둘 다 사용하지 않을 이유가 없습니다. 사실, PostCSS는 이를 위해 공식적인 SCSS 파서를 제공합니다.

<div class="note">
<p>이 섹션에 대한 도움과 전문지식을 주신 <a href="https://github.com/corysimmons">Cory Simmons</a>에게 감사드립니다. </p>
</div>
