(function (scope) {
  scope.evalClientResolution = function evalClientResolution (size) {
    return window.matchMedia('(min-width: ' + size + 'px)').matches;
  };

  scope.getDocumentHeight = function getDocumentHeight () {
    return window.innerHeight || document.clientHeight || document.body.clientHeight;
  };

  scope.getDocumentScrollTop = function getDocumentScrollTop () {
    return document.documentElement.scrollTop || document.body.scrollTop;
  };

  scope.getOffset = function getOffset (elem) {
    var offset = 0;

    do {
      if (!isNaN(elem.offsetTop)) offset += elem.offsetTop;
    } while (elem = elem.offsetParent); // eslint-disable-line

    return offset;
  };
}(window));
