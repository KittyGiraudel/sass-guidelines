
# Sass에 대해

[Sass](http://sass-lang.com)는 [공식 문서](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)에서 스스로를 이렇게 묘사하고 있습니다:

> 사스는 기초 언어에 힘과 우아함을 더해주는 CSS의 확장이다.

Sass의 궁극적인 목적은 CSS의 결함을 보정하는 것입니다. 우리 모두 알듯이, CSS는 세계 최고의 언어는 못 됩니다<sup>[citation needed]</sup>. 배우기엔 매우 간단한 반면, 금세 아주 지저분해질 수 있습니다. 특히 큰 프로젝트에서 더 그렇습니다.

Sass는 이런 상황에서, 초언어로서, 추가 기능과 유용한 도구를 제공하기 위해 CSS의 구문을 개선하는 역할을 합니다. 한편, Sass는 CSS 언어에 대해 보수적인 입장을 취하려 합니다.

핵심은 CSS를 완전한 기능을 갖춘 프로그래밍 언어로 바꾸지 않는 것입니다; Sass는 단지 CSS에게서 부족한 부분만을 돕길 원합니다. 때문에, Sass를 시작하는 것은 CSS를 배우는 것보다 더 어려울 게 없습니다: CSS 위에 몇 가지의 추가 기능을 더할 뿐이니까요.

그렇다고는 하나, 이 기능들을 사용하는 데에는 많은 방법들이 있습니다. 좋은 것도 있고, 나쁜 것도, 예외적인 것도 있죠. 이 가이드라인은 여러분에게 Sass 코드 작성에 대한 일관되고, 기록된 접근법을 제공할 것입니다.

### 참고

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)






## Ruby Sass 혹은 LibSass

[Sass의 첫 번째 커밋](https://github.com/hcatlin/sass/commit/fa5048ba405619273e474a50400c7243fbff54fe)은 8년 이상이 지난, 2006년 후반까지 거슬러 올라갑니다. 말할 것도 없이 그 이후로 아주 먼 길을 왔습니다. Ruby로 처음에 개발되었고, 여기저기서 다양한 포트들이 튀어나왔죠. 가장 성공적인, (C로 쓰인) [LibSass](https://github.com/sass/libsass)는 현재 원래의 Ruby 버전과의 완전한 호환에 근접해 있습니다.

2014년, [Ruby 사스와 LibSass 팀은 더 나아가기 전에 두 가지 버전의 동기화를 기다리기로 결정했습니다](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan). 그 이후로, LibSass는 형과의 기능 동기화를 위해 활발하게 버전들을 출시하고 있습니다. 남아있는 불일치들은 제가 [Sass-Compatibility](http://sass-compatibility.github.io) 프로젝트로 한데 모아 정리해두었습니다. 열거되지 않은 불일치를 알고 계시다면, 이슈를 여는 친절을 베풀어주시기 바랍니다.

여러분의 컴파일러를 선택하는 것으로 돌아가겠습니다. 사실, 이건 여러분의 프로젝트에 달려있습니다. Ruby on Rails 프로젝트라면, Ruby Sass를 사용하는 게 나을 겁니다.  Ruby Sass가 이 경우에 완벽하게 적합하죠. 또한, Ruby Sass가 언제나 참조 구현이 될 것이며 기능에 있어 LibSass를 선도할 것이라는 점을 알아두십시오.

작업 흐름의 통합이 필요한 비(非)Ruby 프로젝트의 경우, 주로 감싸는 용도로 만들어져 있으므로 LibSass가 아마도 더 나은 생각일 것입니다. 그러니까 만약 NodeJS를 사용하고 싶으시다면, 선택은 [node-sass](https://github.com/sass/node-sass)입니다.



### 참고

* [LibSass](https://github.com/sass/libsass)
* [Sass-Compatibility](http://sass-compatibility.github.io)
* [Switching from Ruby Sass to LibSass](http://www.sitepoint.com/switching-ruby-sass-libsass/)






## Sass 혹은 SCSS

*Sass*라는 이름의 의미에 관해 꽤 많은 혼동이 있습니다. 그럴 만한 이유가 있죠: Sass는 전처리기와 그 구문 두 가지를 의미합니다. 좀 불편하죠, 안 그런가요?

Sass는 처음에 들여쓰기의 감지를 그 핵심 특성으로 갖는 구문을 가리켰습니다. 얼마 지나지 않아, Sass를 유지하는 사람들은 *Sassy CSS*를 의미하는 *SCSS*라는 CSS 친화적인 구문을 제공함으로써 Sass와 CSS 사이의 차이를 좁히기로 결정했습니다. 모토는 이렇습니다: 만약 유효한 CSS라면, 유효한 SCSS이다.

그 이후로, Sass(전처리기)는 두 가지 다른 구문을 제공해 오고 있습니다: *들여쓰기 구문*으로도 알려진 Sass(전부 대문자가 아닙니다, [제발](http://sassnotsass.com)), 그리고 SCSS. 둘은 정확히 동등한 기능을 갖고 있기 때문에 어느 것을 사용할지는 여러분에게 달렸습니다. 지금 시점에서는 이것은 순전히 미관상의 문제입니다.

Sass의 공백에 반응하는 구문은 중괄호, 세미콜론 그리고 다른 구두점 기호들을 없애기 위해 들여쓰기에 의존하며, 이는 간결하고 짧은 구문으로 이어집니다. 한편, SCSS는 주로 CSS에 올려진 작은 추가사항들이므로 배우기에 더 쉽습니다.

저 자신은 CSS에 더 가깝고 대부분의 개발자들에게 더 친숙하기 때문에 SCSS를 Sass보다 더 선호합니다. 때문에, 이 가이드라인에서는 Sass 대신 SCSS를 사용하도록 하겠습니다.



### 참고

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)






## 기타 전처리기들

Sass 외에도 여러 전처리기들이 있습니다. 가장 만만찮은 경쟁자는 [LESS](http://lesscss.org/)일 것입니다. 유명한 CSS 프레임워크인 [Bootstrap](http://getbootstrap.com/)이 사용한 덕분에 널리 알려진 NodeJS 기반의 전처리기죠. 너드스럽고, 제한 없는 버전의 LESS처럼 느껴지는 [Stylus](http://learnboost.github.io/stylus/)도 있습니다. 이것은 CSS를 거의 프로그래밍 언어로 바꿔놓기 때문에 원하는 것 대부분을 할 수 있습니다.



*LESS나 다른 전처리기를 두고 왜 Sass를 선택하는가?* 오늘날에도 여전히 합당한 질문입니다. 얼마 전까진, Sass가 애초에 Ruby로 만들어졌고 Ruby on Rails와 함께 잘 작동했기 때문에 Ruby 기반의 프로젝트에 Sass를 추천하곤 했습니다. 이제 LibSass가 오리지널 Sass를 (거의) 따라잡았기 때문에, 이건 더이상 적절한 조언이 아닙니다.

제가 Sass에서 좋아하는 점은 CSS에 대한 보수적인 접근입니다. Sass의 디자인은 강력한 원칙에 기반하고 있습니다: 디자인 접근법의 큰 부분은 다음과 같은 중심 팀의 믿음으로부터 나옵니다. a) 추가 기능을 더하는 것은 유용성에 의해 정당화되어야만 하는 복잡성의 비용을  가진다. b) 따로 떨어져있는 스타일 블록 하나만을 보는 것으로도 주어진 블록이 무엇을 하고 있는지 추론하는 것이 쉬워야 한다. 또한, Sass는 다른 전처리기에 비해 세부사항에 대한 훨씬 날카로운 관심을 갖고 있습니다. 제가 아는 한, 핵심 디자이너들은 간과하기 쉬운 모든 CSS 호환성에 대한 지원까지 신경 쓰고 전반적인 동작들이 모두 일관성을 유지하도록 합니다.

다시 말해서, Sass는 어떠한 논리적 용도도 지원하도록 의도되지 않은 언어에 엄청난 기능을 추가함으로써 저처럼 프로그래머가 되고 싶은 너드를 만족시키는 것을 겨냥한 전처리기가 아닙니다. Sass는 실제의 문제를 해결하고, CSS가 미흡한 지점에서 CSS에 유용한 기능을 제공하는 것을 돕기 위한 소프트웨어입니다.

전처리기 외에도, 우리는 후처리기 역시 언급해야 합니다. 이들은 주로 [PostCSS](https://github.com/postcss/postcss)와 [cssnext](https://cssnext.github.io/) 덕분에, 지난 몇 달 동안 상당한 노출을 받았죠. 후처리기는 오직 새로 추가될 CSS 구문만을 제공한다는 점을 제외하면 전처리기와 거의 동일합니다.

지원되지 않는 CSS 기능에 대한 폴리필polyfill이라고 후처리기를 생각하시면 됩니다. 예를 들면, [CSS 명세](http://dev.w3.org/csswg/css-variables/)에 나와있는 대로 변수를 작성하고, 후처리기로 컴파일하면 모든 변수를 찾아 그 값으로 대체합니다. Sass가 하는 것처럼요.

후처리기의 배경에 있는 아이디어는 일단 브라우저가 새로운 기능을 지원하게 되면 (예를 들면 CSS 변수), 후처리기가 더이상 그것을 컴파일하지 않고 그 역할을 브라우저가 대체하도록 하는 것입니다.

내일의 문법을 오늘 제공한다는 것은 훌륭한 생각이긴 하나, 전 그래도 대부분의 작업에 Sass를 사용하는 것을 선호합니다. 그러나, 후처리기가 Sass보다 더 적합하다고 믿는 일부의 경우가 있습니다. 예를 들면 CSS 프리픽스 같은 경우입니다. 그러나 이 부분은 나중에 다시 이야기하도록 하겠습니다.



### 참고

* [LESS](http://lesscss.org/)
* [Stylus](http://learnboost.github.io/stylus/)
* [cssnext](https://cssnext.github.io/)
* [PostCSS](https://github.com/postcss/postcss)
