(function() {
  'use strict';

  angular
    .module('chairYg')
    .controller('GalleryController', GalleryController);

  /** @ngInject */
  function GalleryController() {
    var self = this;
      self.images =[
        {
          src: 'assets/images/test.png'
        }
      ]
  }
})();