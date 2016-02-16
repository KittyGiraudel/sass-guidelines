(function (global) {
  'use strict';

  /**
   * The application class.
   * @param {Object} config
   */
  var App = function (config) {
    this.headingsOffset     = [];
    this.addOffsetView      = config.addOffsetView || 0;
    this.headings           = config.headings;
    this.tableOfContents    = config.tableOfContents;
    this.languagePicker     = config.languagePicker;
    this.footer             = config.footer;
    this.isLargerThanMobile = false;
  };

  /**
   * Initializes application by calling all necessary functions.
   */
  App.prototype.initialize = function () {
    this.evalClientResolution();
    this.validateHeadings();

    if (this.isLargerThanMobile) {
      this.evalHeadingsPosition();
    }

    this.bindUI();
    this.adjustTableOfContents();
    this.addEvents();
  };

  /**
   * Adds all required eventListener.
   */
  App.prototype.addEvents = function () {
    document.addEventListener('scroll', this.adjustTableOfContents.bind(this), false);

    window.addEventListener('hashchange', this.fixSkipLinks.bind(this), false);
    window.addEventListener('resize', this.evalClientResolution.bind(this), false);
    window.addEventListener('scroll', this.evalHeadingsPosition.bind(this), false);

    this.languagePicker.addEventListener('change', this.redirectUrl, false);
  };

  /**
   * Evaluates if client has mobile resolution or not.
   */
  App.prototype.evalClientResolution = function () {
    var match = window.matchMedia('(min-width: 975px)').matches;
    this.isLargerThanMobile = match;
  };

  /**
   * Returns the document's height.
   * @returns {Number}
   */
  App.prototype.getDocumentHeight = function () {
    return window.innerHeight || document.clientHeight || document.body.clientHeight;
  };

  /**
   * Returns the current documentElement|body scrollTop.
   * @returns {Number}
   */
  App.prototype.getDocumentScrollTop = function () {
    return document.documentElement.scrollTop || document.body.scrollTop;
  };

  /**
   * Returns the offset of an element.
   * @param {HTMLElement} elem
   * @returns {Number}
   */
  App.prototype.getOffset = function (elem) {
    var offset = 0;

    do {
      if (!isNaN(elem.offsetTop)) offset += elem.offsetTop;
    } while(elem = elem.offsetParent);

    return offset;
  };

  /**
   * Iterates over all headings elements, stores required values and adds anchor element.
   */
  App.prototype.validateHeadings = function () {
    var headingsTop = null;

    for (var i = 0, headings = this.headings.length; i < headings; i++) {
      // Store offsetTop. The check is only required because
      // <h1 id="table-of-contents"> is display: none; and hence returns 0.
      // We don't want <h3>, because it's omitted in the ToC.
      headingsTop = this.getOffset(this.headings[i]);

      if (headingsTop && this.headings[i].nodeName !== 'H3') {
        this.headingsOffset.push([ this.headings[i], headingsTop ]);
      }

      // Create anchor element
      this.createHeadingsAnchor(this.headings[i]);
    }
  };

  /**
   * Evaluates current documentElement|body.scrollTop, compares it to headings offset
   * and calls highlightTableOfContents() to highlight current visible section.
   * @param {Object} [event]
   */
  App.prototype.evalHeadingsPosition = function (event) {
    var scrollTop = this.getDocumentScrollTop() + this.addOffsetView;

    if (this.isLargerThanMobile) {
      // Loop over all headings offsets & compare scrollTop if already passed a value.
      for (var i = 0, offsets = this.headingsOffset.length; i < offsets; i++) {
        if (
          scrollTop >= this.headingsOffset[i][1] &&
          this.headingsOffset[i+1] &&
          !(scrollTop >= this.headingsOffset[i + 1][1])
        ) {
          this.highlightTableOfContents(this.headingsOffset[i]);
        }

        // Last element reached.
        else if (
          this.headingsOffset[i] === this.headingsOffset[offsets-1] &&
          scrollTop >= this.headingsOffset[i][1]
        ) {
          this.highlightTableOfContents(this.headingsOffset[offsets-1]);
        }
      }
    }
  };

  /**
   * Makes this.tableOfContents sticky.
   */
  App.prototype.adjustTableOfContents = function () {
    var top = this.getOffset(this.tableOfContents);
    var bottom = this.getOffset(this.footer);
    var current = this.getDocumentScrollTop();
    var currentBottom = current + this.getDocumentHeight();

    if (current > top) {
      this.tableOfContents.classList.add('sticky');
    } else {
      this.tableOfContents.classList.remove('sticky');
    }

    if (currentBottom > bottom) {
      this.tableOfContents.classList.add('sticky-bottom');
    } else {
      this.tableOfContents.classList.remove('sticky-bottom');
    }
  };

  /**
   * Takes an offset, searches toc headline based on that and toggles '.in-viewport'.
   * @param {Array} heading
   */
  App.prototype.highlightTableOfContents = function (heading) {
    var tocElem = this.tableOfContents.querySelector('a[href="#' + heading[0].id + '"]');
    var inViewportElem = this.tableOfContents.querySelector('.in-viewport');

    if (!!tocElem && !tocElem.classList.contains('in-viewport')) {
      if (inViewportElem) {
        inViewportElem.classList.remove('in-viewport');
      }

      tocElem.classList.add('in-viewport');
    }
  };

  /**
   * Bind's all changes to the UI.
   */
  App.prototype.bindUI = function () {
    var input = document.querySelectorAll('input[name="syntax"]');

    Array.prototype.slice.call(input).forEach(function (element) {
      element.addEventListener('click', function (event) {
        if (element.value === 'sass') {
          document.body.classList.add('sass');
        } else {
          document.body.classList.remove('sass');
        }
      });
    });
  };

  /**
   * Creates anchor and adds it to passed element.
   * @param {HTMLElement} elem
   */
  App.prototype.createHeadingsAnchor = function (elem) {
    var title = elem.innerText || elem.textContent;
    var link = document.createElement('a');
    link.setAttribute('href', '#' + elem.id);
    link.innerHTML = '§';
    link.innerHTML += '<span class="visually-hidden">Link to “' + title + '”</span>';
    link.setAttribute('class', 'anchor-link');

    elem.appendChild(link);
  };

  /**
   * Sets focus on (headline) element when hash in URL changes.
   * Except: <a>, <select>, <button>, <input>, <textarea>
   * @param {Object} [event]
   */
  App.prototype.fixSkipLinks = function (event) {
    var element = document.getElementById(location.hash.substring(1));

    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1;
      }
      element.focus();
    }
  };

  /**
   * Redirects user to new URL, which is defined in elements value.
   * @param {Object} [event]
   */
  App.prototype.redirectUrl = function (event) {
    window.location.href = this.value;
  };

  global.App = App;

}(window));

document.addEventListener('DOMContentLoaded', function (event) {
  var sassGuidelines = new App({
    addOffsetView: 50,
    headings: document.querySelectorAll('#content > h1[id], #content > h2[id], #content > h3[id]'),
    tableOfContents: document.querySelector('.toc'),
    languagePicker: document.getElementById('language-picker'),
    footer: document.querySelector('.footer')
  });

  var aside = new Modal(document.getElementById('options-panel'));

  sassGuidelines.initialize();
});
