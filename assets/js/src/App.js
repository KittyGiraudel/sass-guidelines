import h from './helpers';

var App = function (config) {
  this.languagePicker = config.languagePicker;
  this.language = document.documentElement.getAttribute('lang');
  this.isLargerThanMobile = h.evalClientResolution(680);
  this.chapters = document.querySelectorAll('.chapter:not(.toc)');

  this.editSvg = document.querySelector('meta[name="svg-pencil-icon"]').getAttribute('content');
  this.linkSvg = document.querySelector('meta[name="svg-link-icon"]').getAttribute('content');

  this.addChapterLinks();
  this.bindUI();
  this.addEvents();
};

App.prototype.addEvents = function () {
  addEventListener('hashchange', this.fixSkipLinks.bind(this), false);
  this.languagePicker.addEventListener('change', this.redirectUrl, false);
};

App.prototype.bindUI = function () {
  var input = document.querySelectorAll('input[name="syntax"]');

  Array.prototype.slice.call(input)
    .forEach(function (element) {
      element.addEventListener('click', function (event) {
        var fn = element.value === 'sass' ? 'add' : 'remove';
        document.body.classList[fn]('sass');
      });
    });
};

App.prototype.getEditLink = function (chapter) {
  var id = chapter.id.split('chapter-')[1];
  var link = document.createElement('a');
  link.href = 'https://github.com/HugoGiraudel/sass-guidelines/edit/gh-pages/' + this.language + '/_' + id + '.md';
  link.innerHTML = this.editSvg;
  link.setAttribute('class', 'chapter__edit button-ui');
  link.setAttribute('target', '_blank');

  return link;
};

App.prototype.getAnchorLink = function (chapter) {
  var heading = chapter.querySelector('h1[id]');
  var link = document.createElement('a');
  link.href = '#' + heading.id;
  link.innerHTML = this.linkSvg;
  link.setAttribute('class', 'chapter__link button-ui');

  return link;
};

App.prototype.addChapterLinks = function () {
  var that = this;
  var chapters = Array.prototype.slice.call(that.chapters);

  chapters.forEach(function (chapter) {
    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'button-wrapper chapter__buttons');
    wrapper.appendChild(that.getAnchorLink(chapter));
    wrapper.appendChild(that.getEditLink(chapter));
    var heading = chapter.querySelector('h1[id]');
    heading.parentNode.insertBefore(wrapper, heading.nextSibling);
  });
};

App.prototype.fixSkipLinks = function (event) {
  var element = document.getElementById(location.hash.substring(1));

  if (element) {
    if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
      element.tabIndex = -1;
    }
    element.focus();
  }
};

App.prototype.redirectUrl = function (event) {
  window.location.href = this.value;
};

export default App;
