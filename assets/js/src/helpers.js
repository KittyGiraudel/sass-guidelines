export default {
  evalClientResolution: function evalClientResolution (size) {
    return matchMedia('(min-width: ' + size + 'px)').matches;
  },

  getDocumentHeight: function getDocumentHeight () {
    return innerHeight || document.clientHeight || document.body.clientHeight;
  },

  getDocumentScrollTop: function getDocumentScrollTop () {
    return document.documentElement.scrollTop || document.body.scrollTop;
  },

  evalClientResolution: function evalClientResolution () {
    return matchMedia('(min-width: 975px)').matches;
  },

  getOffset: function getOffset (elem) {
    var offset = 0;

    do {
      if (!isNaN(elem.offsetTop)) offset += elem.offsetTop;
    } while(elem = elem.offsetParent);

    return offset;
  }
}
