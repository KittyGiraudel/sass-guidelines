(function (global) {
   'use strict';

   function evalClientResolution () {
     return global.matchMedia('(min-width: 975px)').matches;
   }

   var UrlManager = function (config) {
      this.offset = config.offset;
      this.isLargerThanMobile = evalClientResolution();
      this.updateOn = config.updateOn;
      this.updateOffset = Array.prototype.slice.call(this.updateOn)
        .map(function (item) {
          return [ item, global.getOffset(item) ];
        });

      this.initialize();
   };

   UrlManager.prototype.initialize = function () {
      console.log(this);
      this.isLargerThanMobile && this.evalUserPosition();

      global.addEventListener('scroll', this.evalUserPosition.bind(this), false);
      global.addEventListener('resize', evalClientResolution, false);
   };

   UrlManager.prototype.evalUserPosition = function () {
      var scrollTop = global.getDocumentScrollTop() + this.offset;

      if (this.isLargerThanMobile) {
         // Loop over all items offsets & compare scrollTop if already passed a value.
         for (var i = 0, offsets = this.updateOffset.length; i < offsets; i++) {
            if (
               scrollTop >= this.updateOffset[i][1] &&
               this.updateOffset[i+1] &&
               scrollTop < this.updateOffset[i + 1][1]
            ) {
               this.updateUrl(this.updateOffset[i][0].id);
            }

            // Last element reached.
            else if (
               this.updateOffset[i] === this.updateOffset[offsets-1] &&
               scrollTop >= this.updateOffset[i][1]
            ) {
               this.updateUrl(this.updateOffset[offsets-1][0].id);
            }
         }
      }
   };

   UrlManager.prototype.updateUrl = function (id) {
      global.location.hash = id;
   };

   global.UrlManager = UrlManager;
})(window);