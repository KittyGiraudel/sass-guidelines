/* globals $ */

import h from './helpers';

export default (function () {
  'use strict';

  // DOM queries
  var tableOfContents = $('.toc')[0];
  var footer = $('.footer')[0];
  var headings = $('.chapter:not(.toc) > h1[id]');

  // Internal variables
  var addOffsetView = 50;
  var isLargerThanMobile = h.evalClientResolution(975);
  var headingsOffset = headings.map(function (heading) {
    return [ heading, h.getOffset(heading) ];
  });

  var evalHeadingsPosition = function () {
    var scrollTop = h.getDocumentScrollTop() + addOffsetView;

    if (isLargerThanMobile) {
      // Loop over all headings offsets & compare scrollTop if already passed a value.
      for (var i = 0, offsets = headingsOffset.length; i < offsets; i++) {
        if (
          scrollTop >= headingsOffset[i][1] &&
          headingsOffset[i + 1] &&
          scrollTop < headingsOffset[i + 1][1]
        ) {
          highlightTableOfContents(headingsOffset[i]);
        // Last element reached.
        } else if (
          headingsOffset[i] === headingsOffset[offsets - 1] &&
          scrollTop >= headingsOffset[i][1]
        ) {
          highlightTableOfContents(headingsOffset[offsets - 1]);
        }
      }
    }
  };

  var adjustTableOfContents = function () {
    var top = h.getOffset(tableOfContents);
    var bottom = h.getOffset(footer);
    var current = h.getDocumentScrollTop();
    var topFn = current > top ? 'add' : 'remove';
    var bottomFn = (current + h.getDocumentHeight()) > bottom ? 'add' : 'remove';

    tableOfContents.classList[topFn]('sticky');
    tableOfContents.classList[bottomFn]('sticky-bottom');
  };

  var highlightTableOfContents = function (heading) {
    var tocElem = tableOfContents.querySelector('a[href="#' + heading[0].id + '"]');
    var inViewportElem = tableOfContents.querySelector('.in-viewport');

    if (!!tocElem && !tocElem.classList.contains('in-viewport')) {
      inViewportElem && inViewportElem.classList.remove('in-viewport');
      tocElem.classList.add('in-viewport');
    }
  };

  // Bind listeners
  document.addEventListener('scroll', adjustTableOfContents, false);
  window.addEventListener('scroll', evalHeadingsPosition, false);
  window.addEventListener('resize', h.evalClientResolution.bind(975), false);

  // Initial test
  evalHeadingsPosition();
  adjustTableOfContents();
}());
