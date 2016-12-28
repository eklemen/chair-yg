(function () {
    'use strict';

    angular
        .module('chairYg')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;

        vm.active = function (i) {
            vm.isActive = i;
        };
    }
})();