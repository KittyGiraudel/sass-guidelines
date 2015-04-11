
# 도구

Sass처럼 인기 있는 CSS 전처리기의 좋은 점은 프레임워크, 플러그인, 라이브러리, 도구로 이루어진 완전한 생태계와 동반한다는 것입니다. 시작으로부터 8년이 지난 지금, 우리는 [Sass로 쓰일 수 있는 모든 것은 Sass로 쓰인](http://hugogiraudel.com/2014/10/27/rethinking-atwoods-law/) 지점에 점점 더 가까워지고 있습니다.

하지만 제가 드리는 조언은 의존성의 수를 최소한으로 줄이라는 것입니다. 의존성을 관리하는 것은 여러분이 피해야 할 일종의 지옥입니다. 게다가, Sass의 경우 외부 의존성이 거의 혹은 전혀 필요하지 않습니다.






## Compass

[Compass](http://compass-style.org/)는 주요 Sass 프레임워크입니다. Sass 의 핵심 디자이너 둘 중 한 명인 [Chris Eppstein](https://twitter.com/chriseppstein)에 의해 개발되었죠. 제 생각으로는 한동안은 그 인기가 크게 떨어질 것 같진 않습니다.

그렇지만, 전 더이상 Compass를 추천하지 않습니다. 가장 큰 이유로는 Sass를 매우 느리게 만들기 때문입니다. Ruby Sass는 그 자체로도 꽤 느리기 때문에 그 위에 Ruby와 Sass를 더해서 좋을 게 없습니다.

문제는 우리가 전체 프레임워크에서 아주 적은 일부만을 사용한다는 점입니다. Compass는 거대합니다. 크로스 브라우저 호환 믹신은 빙산의 일각에 불과하죠. 수학 펑션, 이미지 헬퍼, 스프라이트... 이 훌륭한 소프트웨어를 가지고 할 수 있는 일이 너무나도 많습니다.

불행하게도, 이들은 모두 구문상 편의성syntactic sugar이며 킬러 기능이 존재하지 않습니다. *정말로 훌륭한* 스프라이트 빌더는 예외가 될 수 있겠지만, [Grunticon](https://github.com/filamentgroup/grunticon)과 [Grumpicon](http://grumpicon.com/)도 같은 일을 잘 수행하며 빌드 프로세스에 삽입할 수 있다는 장점도 갖고 있습니다.

어쨌든, Compass의 사용을 금하진 않겠지만 추천하지도 않겠습니다. 특히 (그에 대한 노력이 있긴 하지만) LibSass와 호환이 되지 않기 때문입니다. 만약 사용하는 게 낫다 생각되면 사용하셔도 괜찮습니다. 하지만 결국에 거기서 많은 걸 얻지는 못할 것이라 생각합니다.

<div class="note">
  <p>Ruby Sass는 현재 많은 펑션과 믹신을 가진 복잡한 로직의 스타일을 구체적으로 겨냥한 중요한 최적화 작업 중에 있습니다. 이는 Compass와 다른 프레임워크가 더이상 Sass의 속도를 늦추지 않을 수 있을 정도로 성능을 극적으로 향상시킬 것입니다.</p>
</div>



### 참고

* [Compass](http://compass-style.org/)
* [Sass Frameworks: Compass or Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
* [Is Compass to Sass with jQuery is to JavaScript?](http://www.sitepoint.com/compass-sass-jquery-javascript/)






## 그리드 시스템

어디에든 반응형 웹 디자인이 있는 만큼 그리드 시스템을 사용하는 것은 이제 필수가 되었습니다. 일관성 있고 탄탄한 디자인을 만들기 위해 우리는 요소를 배치하는 일종의 그리드를 사용합니다. 이 그리드를 반복해서 코딩하는 것을 피하기 위해, 몇몇 영리한 사람들은 그들의 그리드를 재사용이 가능하도록 만들었습니다.

솔직하게 말씀드릴게요: 전 그리드 시스템의 열렬한 팬은 아닙니다. 물론 그 가능성은 알고 있습니다만, 대부분은 너무 지나치고 주로 너드 디자이너들의 연단에서 흰 배경 위에 빨간 칼럼을 그리는 데 사용됩니다. 마지막으로 *정말-다행이야-2-5-3.1-π-그리드를-제작하는-이-툴이-있어서* 라고 생각한 게 언제입니까? 맞습니다, 한 번도 생각한 적 없죠. 대부분의 경우, 복잡한 것이 아니라 평범하고 규칙적인 12 칼럼 그리드를 원할 뿐이니까요.

프로젝트에 [Bootstrap](http://getbootstrap.com/)이나 [Foundation](http://foundation.zurb.com/) 같은 CSS 프레임워크를 사용한다면 이미 그리드 시스템을 포함하고 있을 확률이 높습니다. 이 경우에는 또다른 의존성을 피하기 위해 그것을 사용할 것을 추천합니다.

만약 여러분이 특정 그리드 시스템에 묶여 있지 않다면, 두 개의 아주 뛰어난 Sass 그리드 엔진이 있다는 사실에 기뻐하실 겁니다: [Susy](http://susy.oddbird.net/), [Singularity](http://singularity.gs/). 둘 모두 여러분에게 필요한 것 이상을 제공하니 이 둘 중 맘에 드는 것을 고르시고 에지 케이스에도 잘 대응하는지 확인하세요. 제게 묻는다면, Susy가 좀 더 좋은 커뮤니티를 갖고 있습니다. 하지만 제 의견일 뿐입니다.

혹은 [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) 같이 좀 더 가벼운 걸로 갈 수도 있습니다. 대부분의 경우, 뭘 선택하든 여러분의 코딩 스타일에 큰 영향을 미치진 않을 것이므로, 선택은 여러분에게 달렸습니다.



### 참고

* [Singularity](http://singularity.gs/)
* [Singularity: Grids Without Limits](http://fourword.fourkitchens.com/article/singularity-grids-without-limits)
* [Singularity Grid System](http://www.mediacurrent.com/blog/singularity-grid-system)
* [Susy](http://susy.oddbird.net/)
* [Build Web Layouts Easily with Susy](http://css-tricks.com/build-web-layouts-easily-susy/)
* [A Complete Tutorial to Susy 2](http://www.zell-weekeat.com/susy2-tutorial/)
* [Sass Grids: From Neat to Susy](http://www.sitepoint.com/sass-grids-neat-susy/)
* [Bootstrap’s Grid System vs Susy: a Comparison](http://www.sitepoint.com/bootstraps-grid-system-vs-susy-comparison/)
* [How to Use Susy: Superpowered Sass Grids](http://webdesign.tutsplus.com/tutorials/how-to-use-susy-superpowered-sass-grids--cms-22744)
* [A Creative Grid System with Sass and calc()](http://www.sitepoint.com/creative-grid-system-sass-calc/)






## SCSS-lint

코드 린트는 매우 중요합니다. 대개 스타일가이드의 가이드라인을 따르는 것이 코드 품질 실수를 줄이도록 도와주지만 누구도 완벽할 순 없고 개선의 여지는 항상 존재합니다. 코드 린트는 주석 만큼 중요하다고 할 수 있습니다.

[SCSS-lint](https://github.com/causes/scss-lint)는 여러분의 SCSS 파일을 깔끔하고 읽기 좋게 유지하도록 돕는 도구입니다. 필요에 꼭 맞게 설정할 수 있고 여러분의 도구들과 쉽게 통합할 수 있습니다.

다행히도, SCSS-lint 권고는 이 문서에서 설명한 것과 유사합니다. Sass Guidelines에 따라 SCSS-lint를 구성하기 위해, 다음의 설정을 추천합니다:

{% include scss-lint-configuration.html %}

<div class="note">
  <p>SCSS lint를 Grunt 빌드 프로세스에 추가하고 싶으시다면, 기쁘게도 <a href="https://github.com/ahmednuaman/grunt-scss-lint">grunt-scss-lint</a>라고 하는 Grunt 플러그인이 있습니다.</p>
  <p>또한, SCSS-lint와 함께 작동하는 깔끔한 어플리케이션을 찾고 계신다면, <a href="http://thoughtbot.com/">Thoughtbot</a>(Bourbon, Neat...)이 <a href="https://houndci.com/">Hound</a>에 공을 들이고 있습니다.</p>
</div>



### 참고

* [SCSS-lint](https://github.com/causes/scss-lint)
* [Clean Up your Sass with SCSS-lint](http://blog.martinhujer.cz/clean-up-your-sass-with-scss-lint/)
* [Improving Sass code quality on theguardian.com](http://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)
