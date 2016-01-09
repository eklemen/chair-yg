(function() {
  'use strict';

  angular
	.module('chairYg', ['ngAnimate','ngCookies','ngTouch','ngAria','ngResource','ngRoute','ngMaterial','angular-scroll-animate', 'duScroll'])
	.controller('AppCtrl', AppCtrl);

	/** @ngInject */
	function AppCtrl($scope) {
		var vm = this;
		debugger;
		$scope.$on('isOpen', function(event, args){
			args();
		});

		$scope.$on('closeMenu', function(event, args){
			args();
		});
	};

})();