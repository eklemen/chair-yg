(function () {
    'use strict';

    angular
        .module('chairYg')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .when('/contact', {
                templateUrl: 'app/contact/contact.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .when('/customOrders', {
                templateUrl: 'app/custom/custom.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .when('/faq', {
                templateUrl: 'app/faq/faq.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: 'app/about/about.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .when('/gallery', {
                templateUrl: 'app/gallery/gallery.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })

            .otherwise({
                redirectTo: '/'
            });
    }

})();
