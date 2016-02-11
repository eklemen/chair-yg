(function() {
  'use strict';

  angular
	.module('chairYg', ['ngAnimate','ngCookies', 'ngAria','ngResource','ngRoute','ngSanitize','ngMaterial','angular-scroll-animate', 'duScroll'])

	.directive('mdLightbox', ['$mdDialog', function($mdDialog){
		return {
			link: function($scope, elem, attrs){

				elem.addClass('image-click');

				elem.on('click',function(){     
					var image = attrs.src;
					var title = attrs.mdLightboxTitle;
					showLightboxModal(image, title);
					
				});

				//Lightbox Modal
				function showLightboxModal(image, title) {
					var confirm = $mdDialog.confirm({
						templateUrl: './app/gallery/screenshot.html',
						clickOutsideToClose: true,
						controller: lightboxController,
						// try moving this to GalleryController
						// or maybe $emit/$broadcast this data to the parent controller (more reusable)
						controllerAs: 'lb'
					});

					$mdDialog.show(confirm);

					function lightboxController($mdDialog) {
						this.image = image;
						this.title = title;

						this.cancel = function() {
							$mdDialog.cancel();
						};

					}

				}
			}
		}
	}])
	.controller('AppCtrl', AppCtrl);

	/** @ngInject */
	function AppCtrl($scope) {
		var vm = this;
		$scope.$on('isOpen', function(event, args){
			args();
		});

		$scope.$on('closeMenu', function(event, args){
			args();
		});
	};

})();