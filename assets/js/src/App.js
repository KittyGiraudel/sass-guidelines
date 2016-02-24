import h from './helpers';

var App = function (config) {
  this.languagePicker = config.languagePicker;
  this.language = document.documentElement.getAttribute('lang');
  this.isLargerThanMobile = h.evalClientResolution(680);
  this.chapters = document.querySelectorAll('.chapter:not(.toc)');

  this.initialize();
};

App.prototype.initialize = function () {
  if (this.isLargerThanMobile) {
    this.createEditLinks();
    this.createHeadingsAnchors();
  }

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

App.prototype.createHeadingsAnchors = function (elem, content) {
  var svg = document.querySelector('meta[name="svg-link-icon"]').getAttribute('content');
  var that = this;

  Array.prototype.slice.call(this.chapters).forEach(function (chapter) {
    var heading = chapter.querySelector('h1[id]');
    var label = 'Link to “' + (heading.innerText || heading.textContent) + '”';
    var link = document.createElement('a');
    link.href = '#' + heading.id;
    link.innerHTML = svg + '<span class="visually-hidden">' + label +'</span>';
    link.setAttribute('class', 'anchor-link button-ui');
    link.setAttribute('title', label);

    heading.appendChild(link);
  });
};

App.prototype.createEditLinks = function () {
  var svg = document.querySelector('meta[name="svg-pencil-icon"]').getAttribute('content');
  var that = this;

  Array.prototype.slice.call(this.chapters).forEach(function (chapter) {
    var id = chapter.id.split('chapter-')[1];
    var label = 'Edit this chapter on GitHub';
    var link = document.createElement('a');
    link.href = 'https://github.com/HugoGiraudel/sass-guidelines/edit/gh-pages/' + that.language + '/_' + id + '.md';
    link.innerHTML = svg + '<span class="visually-hidden">' + label + '</span>';
    link.setAttribute('class', 'chapter__edit  button-ui');
    link.setAttribute('title', label);
    link.setAttribute('target', '_blank');

    chapter.appendChild(link);
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
