(function () {
    'use strict';

    angular
        .module('chairYg')
        .controller('FaqController', FaqController);

    /** @ngInject */
    function FaqController() {
        var self = this;

        self.active = function (i) {
            self.isActive = i;
        }

    }
})();