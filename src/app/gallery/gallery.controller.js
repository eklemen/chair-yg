// (function () {
//     'use strict';
//
//     angular
//         .module('chairYg')
//         .controller('GalleryController', GalleryController);
//
//     /** @ngInject */
//     function GalleryController($mdDialog, Lightbox) {
//         var self = this;
//         self.imgSrc;
//
//         //THis is what is needed for lightbox directive
//         // self.openLightboxModal = function (index) {
//         //   Lightbox.openModal($scope.images, index);
//         // };
//
//
//         self.showImage = function (src) {
//             console.log(src);
//             self.imgSrc = src;
//             // var confirm = $mdDialog.confirm()
//             //   .clickOutsideToClose(true)
//             //   .content('<img src="' + src + '" />')
//             //   .ariaLabel('Image')
//             //   return $mdDialog.show(confirm);
//             $mdDialog.show({
//
//                 locals: {imgData: self.imgSrc},
//                 clickOutsideToClose: true,
//                 // templateUrl: 'dialogImg.tmpl.html',
//                 controller: mdDialogCtrl,
//                 controllerAs: 'dialog',
//                 // bindToController:true,
//                 parent: angular.element(document.body),
//                 template: '<md-dialog aria-label="List dialog">' +
//                 '<img class="modal-img" src="' + self.imgSrc + '" />' +
//                 '</md-dialog>'
//             })
//             var mdDialogCtrl = function (imgData) {
//                 var self = this;
//                 self.imgData = imgData;
//             }
//         }
//
//         self.engagement = [
//             {
//                 src: 'assets/images/engagement/engagement2.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/engagement/engagement3.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/engagement/engagement4.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/engagement/engagement5.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/engagement/engagement6.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/engagement/engagement7.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/engagement/engagement8.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/engagement/engagement9.JPG',
//                 title: ''
//             }
//         ];
//
//         self.events = [
//             {
//                 src: 'assets/images/events/event1.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/events/event2.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/events/event3.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/events/event4.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/events/event5.jpg',
//                 title: ''
//             }
//         ];
//
//         self.graduation = [
//             {
//                 src: 'assets/images/graduation/graduation1.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/graduation/graduation2.jpg',
//                 title: ''
//             }
//         ];
//
//         self.panels = [
//             {
//                 src: 'assets/images/panel/panel1.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/panel/panel2.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/panel/color4.JPG',
//                 title: ''
//             }
//         ];
//
//         self.letters = [
//             {
//                 src: 'assets/images/letter/letter1.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/letter/letter2.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/letter/letter3.JPG',
//                 title: ''
//             }
//         ];
//
//         self.store = [
//             {
//                 src: 'assets/images/store/store1.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/store/store2.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/store/store3.JPG',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/store/store4.JPG',
//                 title: ''
//             }
//         ];
//
//         self.littleOnes = [
//             {
//                 src: 'assets/images/little-ones/BRE_01.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/little-ones/BRE_02.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/little-ones/BRE_03.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/little-ones/BRE_04.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/little-ones/BRE_05.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/little-ones/BRE_06.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/little-ones/BRE_07.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/little-ones/BRE_08.jpg',
//                 title: ''
//             },
//             {
//                 src: 'assets/images/little-ones/BRE_09.jpg',
//                 title: ''
//             }
//         ]
//     }
// })();
//
// // angular
// // .module('chairYg')
// // .controller('mdDialogCtrl', function ($scope, items) {
// //   // items is injected in the controller, not its scope!
// //   $scope.items = items;
// // });