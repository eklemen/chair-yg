(function() {
  'use strict';

  angular
    .module('chairYg')
    .controller('GalleryController', GalleryController);

  /** @ngInject */
  function GalleryController($mdDialog) {
    var self = this;
    self.imgSrc;
    self.showImage = function(src){
      console.log(src);
      self.imgSrc = src;
      // var confirm = $mdDialog.confirm()
      //   .clickOutsideToClose(true)
      //   .content('<img src="' + src + '" />')
      //   .ariaLabel('Image')
      //   return $mdDialog.show(confirm);
      $mdDialog.show({

            locals:{imgData: self.imgSrc},              
            clickOutsideToClose: true,               
            // templateUrl: 'dialogImg.tmpl.html',
            controller: mdDialogCtrl,
            controllerAs:'dialog',
            // bindToController:true,
            parent: angular.element(document.body),
            template:'<md-dialog aria-label="List dialog">' +
                '<img src="' + self.imgSrc + '" />' +
              '</md-dialog>'
          })
      var mdDialogCtrl = function(imgData){
        var self = this;
        self.imgData = imgData;
      }
    }
    
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

// angular
// .module('chairYg')
// .controller('mdDialogCtrl', function ($scope, items) {
//   // items is injected in the controller, not its scope!
//   $scope.items = items;
// });