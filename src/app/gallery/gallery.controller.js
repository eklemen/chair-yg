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
          title: 'The Standard',
          caption: 'Our standard 4 x 8.'
        },
        {
          src: 'assets/images/flower-lit.JPG',
          title: 'The Standard Plus',
          caption: 'Backlights added to a standard board.'
        },
        {
          src: 'assets/images/flower2-sm.JPG',
          title: 'Close Up 1',
          caption: 'Details of the board.'
        },
        {
          src: 'assets/images/flower3-sm.JPG',
          title: 'Close Up 2',
          caption: 'A more detailed look.'
        },
        {
          src: 'assets/images/flower3-sm.JPG',
          title: 'Flower 4',
          caption: 'Ah a nice flower wall'
        }
      ]
  }
})();