(function () {
    'use strict';

    angular
        .module('chairYg')
        .controller('FaqController', FaqController);

    /** @ngInject */
    function FaqController() {
        var vm = this;

        vm.active = function (i) {
            vm.isActive = i;
        }

    }
})();