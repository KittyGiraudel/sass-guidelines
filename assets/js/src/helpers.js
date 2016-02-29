export default {
  evalClientResolution: function evalClientResolution (size) {
    return window.matchMedia('(min-width: ' + size + 'px)').matches;
  },

  getDocumentHeight: function getDocumentHeight () {
    return window.innerHeight || document.clientHeight || document.body.clientHeight;
  },

  getDocumentScrollTop: function getDocumentScrollTop () {
    return document.documentElement.scrollTop || document.body.scrollTop;
  },

  getOffset: function getOffset (elem) {
    var offset = 0;

    do {
      if (!isNaN(elem.offsetTop)) offset += elem.offsetTop;
    } while (elem = elem.offsetParent); // eslint-disable-line

    return offset;
  }
};