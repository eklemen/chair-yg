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

      // vm.toggle = angular.noop;
      //   vm.isOpen = function() { return false };
        
      //   $mdComponentRegistry
      //     .when('left')
      //     .then( function(sideNav){

      //   $rootScope.isOpen = angular.bind( sideNav, sideNav.isOpen );
      //   $rootScope.toggle = angular.bind( sideNav, sideNav.toggle );

      // });
      vm.toggle = function () {
          $mdSidenav('left').toggle();
        };

      vm.close = function() {
        $mdSidenav('left').close();
      };

      $scope.$on('$routeChangeStart', function(next, current) { 
        vm.close();
      });

      
    }
  }

})();
