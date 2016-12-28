(function () {
    'use strict';

    angular
        .module('chairYg', [
            'ngAnimate',
            'ngCookies',
            'ngAria',
            'ngResource',
            'ngRoute',
            'ui.bootstrap',
            'ngSanitize',
            'angular-scroll-animate',
            'duScroll',
            'bootstrapLightbox'
        ]);

        // .directive('backTop', function ($window) {
        //     return {
        //         link: function (scope, element, attrs) {
        //             angular.element($window).bind("scroll", function () {
        //                 if (this.pageYOffset >= 200) {
        //                     scope.boolChangeClass = true;
        //                 } else {
        //                     scope.boolChangeClass = false;
        //                 }
        //                 scope.$apply();
        //             });
        //         }
        //     };
        // })

})();