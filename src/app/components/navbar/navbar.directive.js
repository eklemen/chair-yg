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
		function NavbarController($scope, $mdSidenav, $rootScope, $timeout, $log) {
			var vm = this;
			vm.toggleLeft = buildDelayedToggler('left');

			function debounce(func, wait, context) {
     			var timer;
			    return function debounced() {
			        var context = $scope,
			        args = Array.prototype.slice.call(arguments);
			        $timeout.cancel(timer);
			        timer = $timeout(function() {
			          timer = undefined;
			          func.apply(context, args);
	        		}, wait || 10);
      			};
    		}
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
		    function buildDelayedToggler(navID) {
		      return debounce(function() {
		        $mdSidenav(navID)
		          .toggle()
		          .then(function () {
		            $log.debug("toggle " + navID + " is done");
		          });
		      }, 200);
		    }
		    function buildToggler(navID) {
		      return function() {
		        $mdSidenav(navID)
		          .toggle()
		          .then(function () {
		            $log.debug("toggle " + navID + " is done");
		          });
		      }
		    }
		this.close = function () {
		    $mdSidenav('left').then(function(leftNav) { leftNav.close(); });
		};

		

		$scope.$on('$routeChangeStart', function(next, current) { 
			vm.close();
		});

			
		}
	}

})();
