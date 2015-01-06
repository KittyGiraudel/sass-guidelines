(function (global) {

  (function (global) {

    var list = document.getElementById('table-of-contents').nextElementSibling;
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

      if (from === Y) {
        if (typeof callback === 'function') {
          callback();
        }

        return;
      }

      function min(a, b) {
        return a < b ? a : b;
      }

      function scroll(timestamp) {
        var currentTime = Date.now(),
            time        = global.Math.min(1, ((currentTime - start) / duration)),
            easedT      = easingFunction(time);

        elem.scrollTop = (easedT * (Y - from)) + from;

        if (time < 1) {
          requestAnimationFrame(scroll);
        } else if (typeof callback === 'function') {
          callback();
        }
      }

      requestAnimationFrame(scroll);
    }

    function sglScrollmation(event) {
      var scrollSpeed = 800,
          hashValue   = event.target.attributes.href.value.substring(1),
          hashSection = document.getElementById(hashValue).offsetTop,
          easeMotion  = easing.easeInOutCubic;

      scrollTo(hashSection, scrollSpeed, easeMotion);
    }

    list.addEventListener('click', sglScrollmation);

  }(global));

  (function (global) {

    var headings = document.querySelectorAll('h1:not(.title), h2:not(.baseline), h3');
    var len = headings.length;
    var link, heading, i;

    for (i = 0; i < len; i++) {
      heading = headings[i];

      link = document.createElement('a');
      link.setAttribute('href', '#' + heading.id);
      link.innerHTML = '§';
      link.setAttribute('class', 'anchor-link')
      heading.appendChild(link);
    }

  }(global));
}(window));

