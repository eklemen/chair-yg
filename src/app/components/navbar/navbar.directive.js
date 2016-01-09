(function() {
	'use strict';

	angular
		.module('chairYg')
		.directive('acmeNavbar', acmeNavbar);

	/** @ngInject */
	function acmeNavbar() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/navbar/navbar.html',
			controller: NavbarController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		/** @ngInject */
		function NavbarController($scope, $mdSidenav, $rootScope) {
			var vm = this;
			
		vm.openMenu = function(){
			return $mdSidenav('menu').toggle();
		};

		vm.toggle = function () {
			$scope.$emit('isOpen', vm.openMenu)
		};
		vm.close = function() {
			$scope.$emit('closeMenu', function(){$mdSidenav('menu').close()});
		 // $rootScope.isOpen = false;
		};


		$scope.$on('$routeChangeStart', function(next, current) { 
			vm.close();
		});

			
		}
	}

})();
