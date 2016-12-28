(function () {
    'use strict';

    angular
        .module('chairYg')
        .controller('AppController', AppController);

    /** @ngInject */
    function AppController($scope) {
        $scope.$on('isOpen', function (event, args) {
            args();
        });

        $scope.$on('closeMenu', function (event, args) {
            args();
        });

    }
})();