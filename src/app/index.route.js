(function() {
  'use strict';

  angular
    .module('chairYg')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'con'
      })
      .when('/custom', {
        templateUrl: 'app/custom/custom.html',
        controller: 'CustomController',
        controllerAs: 'custom'
      })

      .otherwise({
        redirectTo: '/'
      });
  }

})();
