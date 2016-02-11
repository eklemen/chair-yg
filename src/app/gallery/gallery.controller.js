(function() {
  'use strict';

  angular
    .module('chairYg')
    .controller('GalleryController', GalleryController);

  /** @ngInject */
  function GalleryController($mdDialog) {
    var self = this;
      self.images =[
        {
          src: 'assets/images/flower-unlit.JPG',
          title: 'Flower 1',
          caption: 'This is a flower backdrop'
        },
        {
          src: 'assets/images/flower-lit.JPG',
          title: 'Flower 2',
          caption: 'This is also a flower backdrop'
        },
        {
          src: 'assets/images/flower2-sm.JPG',
          title: 'Flower 3',
          caption: 'More stuff for a caption'
        },
        {
          src: 'assets/images/flower3-sm.JPG',
          title: 'Flower 4',
          caption: 'Ah a nice flower wall'
        },
        {
          src: 'assets/images/flower3-sm.JPG',
          title: 'Flower 4',
          caption: 'Ah a nice flower wall'
        }
      ]
  }
})();