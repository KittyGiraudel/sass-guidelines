
# Variables

~~Variables are the essence of any programming language. They allow us to reuse values without having to copy them over and over again. Most importantly, they make updating a value very easy. No more find and replace or manual crawling.~~

~~However CSS is nothing but a huge basket containing all our eggs. Unlike many languages, there are no real scopes in CSS. Because of this, we have to pay real attention when adding variables at the risk of witnessing conflicts.~~

~~My advice would be to only create variables when it makes sense to do so. Do not initiate new variables for the heck of it, it won’t help. A new variable should be created only when all of the following criteria are met:~~

 * the value is repeated at least twice;
 * the value is likely to be updated at least once;
 * all occurrences of the value are tied to the variable (i.e. not by coincidence).

~~Basically, there is no point declaring a variable that will never be updated or that is only being used at a single place.~~

# المتغيرات
المتغيرات هي أحد اللبنات الاساسية في اللغات البرمجية، فهي تمنحنا القدرة على استخدام قيمة معينة بدون إعادة كتابتها مراراً وتكراراً. والأهم من ذلك، أنها تعطينا المقدرة على تغيير قيمة المتغيير الأساسية فتتغير قيمته أينما وجد في انحاء البرنامج ككل.

ومع ذلك، في لغة CSS الأساسية، لا يوجد هنالك متغيرات، ولا يوجد مجال Scope مُحدد للمتغيرات كما في اللغات البرمجية الأخرى، لذلك من الممكن أن يحدث تعارض بين متغيير وآخر اذا كان كلا المتغيرين يحملان نفس الإسم.

النصيحة الوحيدة عند إنشاء المتغيرات، هي ألا تنشئ المتغيير إلا إذا لزم الأمر أو إذا كانت هنالك حاجة حقيقية للمتغيير. فالمتغيير الجديد يجب أن يُنشئ تحت الظروف الآتية:
* إما أن قيمة المتغيير متكررة في أكثر من مكان.
* من الممكن أن تتغير قيمة المتغيير لمرة واحدة على الأقل.

بشكل أساسي، لا جدوى من إنشاء متغيير ستستخدمه مرة واحدة في مشروعك، أو متغيير لن تتغير قيمته إطلاقاً.


## Scoping

~~Variable scoping in Sass has changed over the years. Until fairly recently, variable declarations within rulesets and other scopes were local by default. However when there was already a global variable with the same name, the local assignment would change the global variable. Since version 3.4, Sass now properly tackles the concept of scopes and create a new local variable instead.~~

~~The docs talk about *global variable shadowing*. When declaring a variable that already exists on the global scope in an inner scope (selector, function, mixin...), the local variable is said to be *shadowing* the global one. Basically, it overrides it just for the local scope.~~

~~The following code snippet explains the *variable shadowing* concept.~~

{% include snippets/variables/01/index.html %}

## مجال المتغيرات

المتغييرات لها مجالات محددة، أو ما يسمى بالـ* Scoping*، وتعني أن داخل *مجال* معين يمكنك استخدام هذا المتغير، أما خارج هذا المجال فلا يمكنك ذلك.

تنقسم المجالات بالعادة إلى قسمين:
الأول: Global - عالمي - وهذا يعني أن المتغير يمكن استخدامه في جميع أنحاء البرنامج.
الثاني: Local - محلي - وهذا يعني أن مجال المتغير يقتصر على منطقة محددة (داخل حدود function معين)


حسب وثائق Sass، ذكر مصطلح يسمى Global variable shadowing، ويعني أنه عند انشاء متغير عالمي باسم معين، وعند انشاء متغيير آخر محلي بنفس الإسم، سوف يقوم المتغير المحلي بعمل shadowing للمتغير العالمي، أي بعبارة أخرى يقوم تتغير قيمة المتغير العالمي لتأخذ قيمة المتغير المحلي، وذلك فقط في حدود المتغير المحلي.


~~  ## `!default` flag~~

~~When building a library, a framework, a grid system or any piece of Sass that is intended to be distributed and used by external developers, all configuration variables should be defined with the `!default` flag so they can be overwritten.~~


##ترميز !default
عند انشاء مكتبة او اطار عمل أو نظام Grid .. أو اي نظام مبني على Sass يمكن ان يُستخدم من قبل مطورين آخرين، يمكنك استخدام ترميز !default لوضع قيم افتراضة لمتغيرات رئيسية في النظام، بحيث يمكن لغيرك أن يستبدلها بقيم أخرى؟

هنا مثلا، يمكن للمطور أن يعرّف متغير باسم baseline$ قبل أن يقوم باستيراد المكتبة التي قمت بصنعها بدون مشاهدة قيمة المتغير تم اعادة تعريفها

{% include snippets/variables/02/index.html %}

Thanks to this, a developer can define his own `$baseline` variable *before* importing your library without seeing his value redefined.

{% include snippets/variables/03/index.html %}

~~## `!global` flag~~

~~The `!global` flag should only be used when overriding a global variable from a local scope. When defining a variable at root level, the `!global` flag should be omitted.~~

##ترميز !global
ترميز !global يستدخم فقط عندما نضع	 قيمة جديدة لمتغير موجود في النطاق العالمي ( Global ( من خلال متغير موجود في نطاق داخلي Local 

{% include snippets/variables/04/index.html %}

~~## Multiple variables or maps~~

~~There are advantages of using maps rather than multiple distinct variables. The main one is the ability to loop over a map, which is not possible with distinct variables.~~

~~Another pro of using a map is the ability to create a little getter function to provide a friendlier API. For instance, consider the following Sass code:~~

##استخدام عدة متغيرات أو استخدام الخرائط ( Maps (
ملاحظة: مصطلح خريطة ترجمة حرفية، وما يقصد بها هو استخدام عدة متغيرات داخل مكوّن واحد يسمى خريطة، 

استخدام الخرائط افضل من استخدام متغيرات متعددة لأن الخرائط تمنحك القدرة على عمل Loop على عناصر الخريطة ..


{% include snippets/variables/05/index.html %}
