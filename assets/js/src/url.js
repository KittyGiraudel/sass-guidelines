/* globals S */

import h from './helpers';

export default (function () {
  'use strict';

  // DOM queries
  var headings = $('.chapter > h1[id]');

  // Internal variables
  var offset = 50;
  var headingsOffset = headings.map(function (el) {
    return [h.getOffset(el), el.id];
  });

  var updateURL = function () {
    var scrollTop = h.getDocumentScrollTop() + offset;

    for (var i = 0; i < headingsOffset.length; i++) {
      var headingPassed = scrollTop >= headingsOffset[i][0] && headingsOffset[i + 1] && scrollTop < headingsOffset[i + 1][0];
      var lastHeading = headingsOffset[i] === headingsOffset[headingsOffset.length - 1] && scrollTop >= headingsOffset[i][0];

      if (headingPassed) {
        setHash(headingsOffset[i][1]);
      } else if (lastHeading) {
        setHash(headingsOffset[headingsOffset.length - 1][1]);
      }
    }
  };

  var setHash = function (id) {
    if (!id && !arguments.length) return;
    window.history.pushState({}, '', '#' + id);
  }

  document.addEventListener('scroll', updateURL, false);

  // Initial exec
  updateURL();
}());
