export default {
  evalClientResolution (size) {
    return matchMedia(`(min-width: ${size}px)`).matches;
  },

  getDocumentHeight () {
    return innerHeight || document.clientHeight || document.body.clientHeight;
  },

  getDocumentScrollTop () {
    return document.documentElement.scrollTop || document.body.scrollTop;
  },

  getOffset (elem) {
    var offset = 0;

    do {
      if (!isNaN(elem.offsetTop)) offset += elem.offsetTop;
    } while(elem = elem.offsetParent);

    return offset;
  }
}
