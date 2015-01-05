var sgl_toc_list = document.getElementById('table-of-contents').nextElementSibling; // grab ul
var easing = {
  linear: function (t) { return t; },
  easeInQuad: function (t) { return t*t; },
  easeOutQuad: function (t) { return t*(2-t); },
  easeInOutQuad: function (t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; },
  easeInCubic: function (t) { return t*t*t; },
  easeOutCubic: function (t) { return (--t)*t*t+1; },
  easeInOutCubic: function (t) { return t < 0.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; },
  easeInQuart: function (t) { return t*t*t*t; },
  easeOutQuart: function (t) { return 1-(--t)*t*t*t; },
  easeInOutQuart: function (t) { return t < 0.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t; },
  easeInQuint: function (t) { return t*t*t*t*t; },
  easeOutQuint: function (t) { return 1+(--t)*t*t*t*t; },
  easeInOutQuint: function (t) { return t < 0.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; }
};


function scrollTo(Y, duration, easingFunction, callback) {
  var start = Date.now(),
      elem  = document.documentElement.scrollTop ? document.documentElement:document.body,
      from  = elem.scrollTop;

  if(from === Y) {
    callback();
    return;
  }
 
  function min(a,b) {
    return a<b?a:b;
  }

  function scroll(timestamp) {
    var currentTime = Date.now(),
        time        = min(1, ((currentTime - start) / duration)),
        easedT      = easingFunction(time);

    elem.scrollTop = (easedT * (Y - from)) + from;

    if(time < 1) requestAnimationFrame(scroll);
    else
      if(callback) callback();
  }

  requestAnimationFrame(scroll);
}


function sglScrollmation(event) {
  var scroll_speed = 800,
      hash_value   = event.target.attributes.href.value.substring(1),
      hash_section = document.getElementById(hash_value).offsetTop,
      ease_motion  = easing.easeInOutCubic;

  scrollTo(hash_section, scroll_speed, ease_motion);
}


sgl_toc_list.addEventListener('click', sglScrollmation);