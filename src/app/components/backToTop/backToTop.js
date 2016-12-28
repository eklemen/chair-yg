(function () {
    'use strict';

    angular
        .module('chairYg')
        .directive('backToTop', BackToTop);

    /** @ngInject */
    function BackToTop($window) {
        return {
            link: function (scope, element, attrs) {
                angular.element($window).bind("scroll", function () {
                    if (this.pageYOffset >= 30) {
                        scope.boolChangeClass = true;
                    } else {
                        scope.boolChangeClass = false;
                    }
                    scope.$apply();
                });
            }
        };
    }

})();
