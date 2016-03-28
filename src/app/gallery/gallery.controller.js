(function() {
  'use strict';

  angular
    .module('chairYg')
    .controller('GalleryController', GalleryController);

  /** @ngInject */
  function GalleryController($mdDialog) {
    var self = this;
      self.engagement =[
        {
          src: 'assets/images/engagement/engagement1.JPG',
          title: ''
        },
        {
          src: 'assets/images/engagement/engagement2.JPG',
          title: ''
        },
        {
          src: 'assets/images/engagement/engagement3.JPG',
          title: ''
        },
        {
          src: 'assets/images/engagement/engagement4.JPG',
          title: ''
        }
      ];

      self.graduation =[
        {
          src: 'assets/images/graduation/graduation1.jpg',
          title: ''
        },
        {
          src: 'assets/images/graduation/graduation2.jpg',
          title: ''
        }
      ];

      self.panels =[
        {
          src: 'assets/images/panel/panel1.jpg',
          title: ''
        },
        {
          src: 'assets/images/panel/panel2.jpg',
          title: ''
        },
        {
          src: 'assets/images/panel/panel3.jpg',
          title: ''
        }
      ];

      self.letters =[
        {
          src: 'assets/images/letter/letter1.jpg',
          title: ''
        },
        {
          src: 'assets/images/letter/letter2.jpg',
          title: ''
        }
      ];

      self.store =[
        {
          src: 'assets/images/store/store1.JPG',
          title: ''
        },
        {
          src: 'assets/images/store/store2.JPG',
          title: ''
        },
        {
          src: 'assets/images/store/store3.JPG',
          title: ''
        },
        {
          src: 'assets/images/store/store4.JPG',
          title: ''
        }
      ];
  }
})();