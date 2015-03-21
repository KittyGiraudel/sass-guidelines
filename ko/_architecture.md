
# 설계

CSS 프로젝트를 설계하는 것은 아마도 프로젝트의 일생에서 여러분이 해야 할 가장 어려운 일 중 하나일 것입니다. 구조를 일관되고 의미있게 유지하는 것은 더더욱 어렵습니다.

다행히도, CSS 전처리기를 사용함으로써 얻는 주된 장점 중 하나는 (CSS 지시어 `@import`와 달리) 성능에 영향을 주지 않고 코드베이스를 여러 파일로 분리할 수 있게 된다는 것입니다.
Sass가 `@import` 지시어의 무거운 짐을 짊어진 덕분에 개발 단계에서 필요한 만큼 많은 파일을 사용하는 것이 완벽하게 안전하며, 생산 단계에서 모든 파일들이 하나의 스타일시트로 컴파일됩니다.

무엇보다도, 폴더의 중요성에 대해서는 아무리 강조해도 지나치지 않습니다. 심지어 작은 규모의 프로젝트에서조차 말입니다. 집에서도 모든 서류를 같은 박스에 넣지는 않는 법입니다. 폴더를 사용하겠죠: 집/아파트용, 은행용, 청구서용, 기타 등등. CSS 프로젝트를 구축할 때도 다르게 할 이유가 없습니다. 나중에 코드로 돌아왔을 때 찾아내기 쉽도록 코드베이스를 의미있는 분리된 폴더로 나누세요.

CSS 프로젝트를 위한 잘 알려진 설계 양식들이 많이 있습니다: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/)류, [Foundation](http://foundation.zurb.com/)류... 이들 모두 훌륭하며, 장단점을 갖고 있습니다.

저 스스로는 [Jonathan Snook](http://snook.ca/)의 [SMACSS](https://smacss.com/)와 아주 비슷한 접근법을 사용하는데, 이것은 간단명료함을 유지하는 데 초점을 맞추고 있습니다.

<div class="note">
  <p>저는 설계가 대부분의 경우 프로젝트에 한정되어 있다는 사실을 배웠습니다. 여러분의 필요에 맞는 시스템을 사용할 수 있도록 제시된 해법을 마음대로 폐기하거나 조정하세요.</p>
</div>



### 참고

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)






## 컴퍼넌트

*작동하게* 만드는 것과 *좋게* 만드는 것 사이에는 커다란 차이가 있습니다. 다시 한번 말하자면, CSS는 아주 엉망인 언어입니다<sup>[citation needed]</sup>. 더 적은 CSS를 가질수록, 더 즐거워집니다. 우리는 수메가바이트의 CSS 코드를 다루는 것을 원하지 않습니다. 스타일시트를 짧고 효율적으로 유지하기 위해서는 &mdash; 전혀 놀랍지 않게도 &mdash; 인터페이스를 컴퍼넌트의 모음이라고 여기는 것이 대개 좋은 생각입니다.

다음 요건들을 충족한다면 컴퍼넌트가 될 수 있습니다:

* 단 한 가지 일만 한다;
* 재사용이 가능하고 프로젝트 전체에 걸쳐 재사용된다;
* 독립적이다.

예를 들면, 검색 폼은 컴퍼넌트로 취급되어야 합니다. 그것은 다른 위치, 다른 페이지에서, 다양한 상황에서 재사용이 가능해야 합니다. DOM에서의 위치(footer, sidebar, main content...)에 의존해서는 안 됩니다.

대부분의 인터페이스는 작은 컴퍼넌트들로 생각될 수 있으며 이러한 인식을 고수할 것을 강력히 추천합니다. 이는 전체 프로젝트에 필요한 CSS의 양을 줄일 뿐만 아니라 모든 것이 혼란스러운 난장판보다 유지를 더 쉽게 만들기도 합니다.






## 7-1 패턴

다시 설계로 돌아가볼까요? 저는 보통 제가 *7-1 패턴* 이라고 부르는 것을 사용합니다: 폴더 7개, 파일 1개. 기본적으로, 7개의 다른 폴더에 채워넣은 모든 부분 파일과, 이들을 불러들여 CSS 스타일시트로 컴파일하는 루트 레벨에 있는 하나의 파일(대개 `main.scss`)을 갖게 됩니다.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

그리고 물론:

* `main.scss`

<figure role="group">
  <img alt="One file to rule them all, One file to find Them, One file to bring them all, And in the Sass way merge them."
     sizes="100vw"
     srcset="/assets/images/sass-wallpaper_small.jpg  540w,
             /assets/images/sass-wallpaper_medium.jpg 900w,
             /assets/images/sass-wallpaper_large.jpg 1200w,
             /assets/images/sass-wallpaper_huge.jpg  1590w" />
  <figcaption>Wallpaper by <a href="https://twitter.com/julien_he">Julien He</a></figcaption>
</figure>

이상적으로, 우리는 이런 구조를 만들어 낼 수 있습니다:

<div class="highlight"><pre><code>
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   ...                  # Etc…
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– themes/
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   ...                  # Etc…
|
|– utils/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– main.scss             # primary Sass file
</code></pre></div>

<div class="note">
  <p>파일은 위에서 설명한 작명 관례를 따라 하이픈으로 구분됩니다.</p>
</div>



### Base 폴더

`base/` 폴더는 프로젝트의 보일러플레이트 코드라고 부를 만한 것을 담습니다. 거기에선, 리셋 파일, 타이포그래피 규칙, 그리고 아마도 자주 사용되는 HTML 요소에 대한 표준 스타일을 정의하는 스타일시트(전 `_base.scss`라고 부릅니다)를 찾을 수 있을 것입니다.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`



### Layout 폴더

`layout/` 폴더에는 사이트나 어플리케이션의 레이아웃에 기여하는 모든 것들이 들어갑니다. 이 폴더는 사이트의 주요 부분(header, footer, navigation, sidebar...), 그리드 시스템 혹은 모든 폼의 스타일을 위한 스타일시트를 가질 수도 있습니다.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p><code>layout/</code> 폴더는 <code>partials/</code>라고 불릴 수도 있습니다. 이는 여러분이 선호하는 바에 달렸습니다.</p>
</div>



### Components 폴더

`components/` 폴더에는 더 작은 컴퍼넌트들이 들어갑니다. `layout/`이 (전반적인 뼈대를 정의하는) 거시적인 폴더임에 반해, `components/`는 위젯에 초점을 둡니다. 이 폴더는 슬라이더, 로더, 위젯, 그리고 기본적으로 이들과 비슷한 것을 비롯해 온갖 구체적인 모듈들을 담습니다. 전체 사이트/어플리케이션이 주로 작은 모듈들로 구성되어야 하므로 `components`에는 대개 많은 파일들이 있습니다.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p><code>components/</code> 폴더는 선호에 따라 <code>modules/</code>라고 불릴 수도 있습니다.</p>
</div>



### Pages 폴더

만약 페이지에 한정된 스타일이 있다면, 그것은 `pages/` 폴더 속, 페이지 이름을 딴 파일에 넣는 것이 좋습니다. 예를 들면, 홈페이지에만 한정된 스타일이 있어 `pages/` 폴더 속 `_home.scss` 파일이 필요해지는 것은 드문 일이 아닙니다.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>이 파일들은 배포 과정에 따라, 산출되는 스타일시트에서 다른 파일과 병합되는 것을 피하기 위해 별도로 호출될 수 있습니다. 이것은 여러분이 결정할 문제입니다.</p>
</div>



### Themes 폴더

큰 사이트와 어플리케이션에서 여러 다른 테마들을 갖는 것은 흔히 있는 일입니다. 물론 테마를 다루는 다른 방법들도 있지만, 개인적으로는 `themes/` 폴더에 전부 모아두는 것을 좋아합니다.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>이것은 프로젝트에 달려있는 것으로 많은 프로젝트에서는 존재할지 않을 가능성이 큽니다.</p>
</div>



### Utils 폴더

`utils/` 폴더는 프로젝트에서 사용되는 모든 Sass 도구와 헬퍼를 모읍니다. 모든 전역 변수, 펑션, 믹신, 플레이스홀더는 여기로 들어가야 합니다.

이 폴더에 대한 경험적 법칙은 그 자체만으로는 컴파일되었을 때 한 줄의 CSS도 산출하지 않아야 한다는 것입니다. 이것은 그저 Sass 헬퍼일 뿐입니다.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequently named `_helpers.scss`)

<div class="note">
  <p><code>utils/</code> 폴더는 선호에 따라 <code>helpers/</code>, <code>sass-helpers/</code> 혹은 <code>sass-utils/</code>로 불릴 수도 있습니다.</p>
</div>



### Vendors 폴더

그리고 마지막으로 잊지 말아야 할 것으로, 대부분의 프로젝트는 Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered 등의 외부 라이브러리와 프레임워크에서 나오는 모든 CSS 파일을 담고 있는 `vendors/` 폴더를 가집니다. 이들을 같은 폴더에다 치워두는 것은 “저기요, 이건 내가 한 게 아닙니다. 내 코드가 아니고, 나는 책임이 없습니다”라고 말하는 좋은 방법입니다.

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

만약 어느 벤더의 한 부분을 덮어써야 한다면, 덮어쓰는 벤더의 이름을 그대로 딴 파일들을 담는 여덟 번째 폴더를 만드는 것을 추천합니다.

예를 들면, `vendors-extensions/_boostrap.scss`는 Bootstrap의 기본 CSS 일부를 재선언하는 모든 CSS 규칙을 담고 있는 파일입니다. 이는 벤더 파일 자체를 편집하는 것을 피하기 위함입니다. 그건 대개 좋은 생각이 아니니까요.



### Main 파일

(주로 `main.scss`로 이름이 붙는) 메인 파일은 전체 코드베이스에서 언더스코어로 시작하지 않는 유일한 Sass 파일이어야 합니다. 이 파일은 `@import`와 주석 외에는 아무 것도 포함하지 않아야 합니다.

파일들은 각자 자리 잡은 폴더에 따라 아래의 순서대로 하나하나 불러들여집니다:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

가독성을 유지하기 위해, 메인 파일은 이 가이드라인을 준수해야 합니다:

* `@import` 당 파일 하나;
* 한 줄에 하나의 `@import`;
* 같은 폴더로부터의 두 import 사이는 새 줄로 띄우지 않는다;
* 한 폴더로부터의 마지막 import 다음에는 새 줄 하나로 간격을 둔다.
* 파일 확장자와 앞에 붙는 언더스코어는 생략한다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'utils/variables';
@import 'utils/functions';
@import 'utils/mixins';
@import 'utils/placeholders';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import vendors/bootstrap
@import vendors/jquery-ui

@import utils/variables
@import utils/functions
@import utils/mixins
@import utils/placeholders

@import base/reset
@import base/typography

@import layout/navigation
@import layout/grid
@import layout/header
@import layout/footer
@import layout/sidebar
@import layout/forms

@import components/buttons
@import components/carousel
@import components/cover
@import components/dropdown

@import pages/home
@import pages/contact

@import themes/theme
@import themes/admin
{% endhighlight %}
  </div>
</div>

부분 파일을 불러오는 다른 합당한 방법도 있습니다. 밝은 면을 보자면, 이 방법은 파일을 보다 읽기 좋게 만듭니다. 반면, 수정하는 일은 약간 괴로워집니다. 어쨌든, 어느 것이 최고인지는 여러분이 결정하게 하겠습니다. 이건 별 문제가 안 되니까요. 이 방법으로 하면, 메인 파일은 이 가이드라인을 준수해야 합니다:

* 폴더 당 하나의 `@import`;
* `@import` 뒤에 줄 바꿈;
* 각 파일은 한 줄을 차지한다;
* 한 폴더로부터의 마지막 import 다음에는 새 줄 하나로 간격을 둔다;
* 파일 확장자와 앞에 붙는 언더스코어는 생략한다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
@import
  'vendors/bootstrap',
  'vendors/jquery-ui';

@import
  'utils/variables',
  'utils/functions',
  'utils/mixins',
  'utils/placeholders';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/contact';

@import
  'themes/theme',
  'themes/admin';
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
@import
  vendors/bootstrap,
  vendors/jquery-ui

@import
  utils/variables,
  utils/functions,
  utils/mixins,
  utils/placeholders

@import
  base/reset,
  base/typography

@import
  layout/navigation,
  layout/grid,
  layout/header,
  layout/footer,
  layout/sidebar,
  layout/forms

@import
  components/buttons,
  components/carousel,
  components/cover,
  components/dropdown

@import
  pages/home,
  pages/contact

@import
  themes/theme,
  themes/admin
{% endhighlight %}
  </div>
</div>

<div class="note">
  <p>각 파일을 수동으로 불러오지 않기 위해서는, <code>@import "components/*"</code>와 같이 Sass <code>@import</code>에서 glob 패턴을 사용할 수 있게 해주는 <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>이라는 Ruby Sass의 확장이 있습니다.</p>
  <p>그렇지만 이것은 대개 원치 않는 방식인 알파벳순에 따라 파일을 불러들이기 때문에 전 추천하지 않습니다. 특히 소스의 순서에 의존하는 언어를 다룰 때는 더욱 그렇습니다.</p>
</div>






## Shame 파일

[Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com), [Chris Coyier](http://css-tricks.com)에 의해 알려진 흥미로운 개념이 있습니다. 이는 모든 CSS  선언과 핵, 그리고 우리가 자랑스럽게 여기지 않는 것들을 *수치 파일*에 넣는 것으로 이루어집니다. 이 파일은, 극적이게도 `_shame.scss`라고 불리며, 스타일시트의 맨 끝에서, 다른 모든 파일들 다음으로 불러들여질 것입니다.

<div class="code-block">
  <div class="code-block__wrapper" data-syntax="scss">
{% highlight scss %}
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a {
    color: #BADA55 !important;
}
{% endhighlight %}
  </div>
  <div class="code-block__wrapper" data-syntax="sass">
{% highlight sass %}
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a
    color: #BADA55 !important
{% endhighlight %}
  </div>
</div>



### 참고

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)
