import h from './helpers';

var Sidebar = function (config) {
  this.addOffsetView = config.addOffsetView || 0;
  this.headings = config.headings;
  this.tableOfContents = config.tableOfContents;
  this.footer = config.footer;
  this.isLargerThanMobile = h.evalClientResolution(975);

  this.headingsOffset = Array.prototype.slice.call(this.headings)
    .map(function (heading) {
      return [ heading, h.getOffset(heading) ];
    });

  this.initialize();
};
/**
 * Initializes application by calling all necessary functions.
 */
Sidebar.prototype.initialize = function () {
  this.isLargerThanMobile && this.evalHeadingsPosition();
  this.adjustTableOfContents();

  document.addEventListener('scroll', this.adjustTableOfContents.bind(this), false);
  addEventListener('scroll', this.evalHeadingsPosition.bind(this), false);
  addEventListener('resize', h.evalClientResolution.bind(975), false);
};

Sidebar.prototype.evalHeadingsPosition = function () {
  var scrollTop = h.getDocumentScrollTop() + this.addOffsetView;

  if (this.isLargerThanMobile) {
    // Loop over all headings offsets & compare scrollTop if already passed a value.
    for (var i = 0, offsets = this.headingsOffset.length; i < offsets; i++) {
      if (
        scrollTop >= this.headingsOffset[i][1] &&
        this.headingsOffset[i+1] &&
        scrollTop < this.headingsOffset[i + 1][1]
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

Sidebar.prototype.adjustTableOfContents = function () {
  var top = h.getOffset(this.tableOfContents);
  var bottom = h.getOffset(this.footer);
  var current = h.getDocumentScrollTop();
  var currentBottom = current + h.getDocumentHeight();

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

Sidebar.prototype.highlightTableOfContents = function (heading) {
  var tocElem = this.tableOfContents.querySelector('a[href="#' + heading[0].id + '"]');
  var inViewportElem = this.tableOfContents.querySelector('.in-viewport');

  if (!!tocElem && !tocElem.classList.contains('in-viewport')) {
    if (inViewportElem) {
      inViewportElem.classList.remove('in-viewport');
    }

    tocElem.classList.add('in-viewport');
  }
};

export default Sidebar;
