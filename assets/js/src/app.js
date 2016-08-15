/* globals $ */

(function () {
  'use strict';

  // DOM queries
  var language = document.documentElement.getAttribute('lang');
  var languagePicker = $('#language-picker')[0];
  var editSvg = $('meta[name="svg-pencil-icon"]')[0].getAttribute('content');
  var linkSvg = $('meta[name="svg-link-icon"]')[0].getAttribute('content');
  var chapters = $('.chapter:not(.toc)');
  var syntaxToggle = $('input[name="syntax"]');

  // Internal variables
  var idIndex = 100;

  var sanitizeSVG = function (svg) {
    return svg
      .replace(/title\-\d+/g, ('title-' + idIndex++))
      .replace(/desc\-\d+/g, ('desc-' + idIndex++));
  };

  var getEditLink = function (chapter) {
    var id = chapter.id.split('chapter-')[1];
    var link = document.createElement('a');
    link.href = 'https://github.com/HugoGiraudel/sass-guidelines/blob/master/pages/' + language + '/_' + id + '.md';
    link.innerHTML = sanitizeSVG(editSvg);
    link.setAttribute('class', 'chapter__edit button-ui');
    link.setAttribute('target', '_blank');

    return link;
  };

  var getAnchorLink = function (chapter) {
    var heading = chapter.querySelector('h1[id]');
    var link = document.createElement('a');
    link.href = '#' + heading.id;
    link.innerHTML = sanitizeSVG(linkSvg);
    link.setAttribute('class', 'chapter__link button-ui');

    return link;
  };

  var fixSkipLinks = function () {
    var element = document.getElementById(window.location.hash.substring(1));

    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1;
      }
      element.focus();
    }
  };

  var redirectUrl = function (event) {
    window.location.href = this.value;
  };

  // Bind events
  window.on('hashchange', fixSkipLinks, false);
  languagePicker.on('change', redirectUrl, false);
  syntaxToggle.on('click', function (event) {
    var fn = this.value === 'sass' ? 'add' : 'remove';
    document.body.classList[fn]('sass');
  });

  // Initialise side panel
  document.addEventListener('DOMContentLoaded', function (event) {
    new A11yDialog(document.getElementById('options-panel'), document.getElementById('main-content')); // eslint-disable-line
  });

  // Add chapter buttons
  chapters.forEach(function (chapter) {
    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'button-wrapper chapter__buttons');
    wrapper.appendChild(getAnchorLink(chapter));
    wrapper.appendChild(getEditLink(chapter));
    var heading = chapter.querySelector('h1[id]');
    heading.parentNode.insertBefore(wrapper, heading.nextSibling);
  });
}());
