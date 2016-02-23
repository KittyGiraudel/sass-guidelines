(function (global) {
	'use strict';

	global.getDocumentHeight = function () {
		return global.innerHeight || document.clientHeight || document.body.clientHeight;
	};

	global.getDocumentScrollTop = function () {
		return document.documentElement.scrollTop || document.body.scrollTop;
	};

	global.getOffset = function (elem) {
		var offset = 0;

		do {
			if (!isNaN(elem.offsetTop)) offset += elem.offsetTop;
		} while(elem = elem.offsetParent);

		return offset;
	};

})(window);