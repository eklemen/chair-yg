(function() {
  'use strict';

  angular
    .module('chairYg')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($scope) {
    var self = this;
    $scope.$on('menuOpen', true);
  }
})();