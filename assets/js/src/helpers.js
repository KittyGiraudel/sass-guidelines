export default {
<<<<<<< HEAD
  evalClientResolution (size) {
    return matchMedia(`(min-width: ${size}px)`).matches;
  },

  getDocumentHeight () {
    return innerHeight || document.clientHeight || document.body.clientHeight;
=======
  evalClientResolution: function evalClientResolution (size) {
    return window.matchMedia('(min-width: ' + size + 'px)').matches;
  },

  getDocumentHeight: function getDocumentHeight () {
    return window.innerHeight || document.clientHeight || document.body.clientHeight;
>>>>>>> f996f5576cd40d474a6dbfbdf900cf2b1c8bfa2a
  },

  getDocumentScrollTop () {
    return document.documentElement.scrollTop || document.body.scrollTop;
  },

<<<<<<< HEAD
  getOffset (elem) {
=======
  getOffset: function getOffset (elem) {
>>>>>>> f996f5576cd40d474a6dbfbdf900cf2b1c8bfa2a
    var offset = 0;

    do {
      if (!isNaN(elem.offsetTop)) offset += elem.offsetTop;
    } while (elem = elem.offsetParent); // eslint-disable-line

    return offset;
  }
};
