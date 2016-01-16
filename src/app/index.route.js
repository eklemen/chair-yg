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
      .when('/customOrders', {
        templateUrl: 'app/custom/custom.html',
        controller: 'CustomController',
        controllerAs: 'custom'
      })
      .when('/faq', {
        templateUrl: 'app/faq/faq.html',
        controller: 'FaqController',
        controllerAs: 'faq'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })

      .otherwise({
        redirectTo: '/'
      });
  }

})();
