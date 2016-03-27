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
          title: '',
          caption: ''
        },
        {
          src: 'assets/images/flower-lit.JPG',
          title: '',
          caption: ''
        },
        {
          src: 'assets/images/flower2-sm.JPG',
          title: '',
          caption: ''
        },
        {
          src: 'assets/images/flower3-sm.JPG',
          title: '',
          caption: ''
        },
        {
          src: 'assets/images/flower3-sm.JPG',
          title: '',
          caption: ''
        }
      ]
  }
})();