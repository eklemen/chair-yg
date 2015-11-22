(function() {
  'use strict';

  angular
    .module('chairYg')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var self = this;

    self.message = {};

    
    self.animateElementIn = function($el) {
      $el.removeClass('hidden');
      $el.addClass('animated fadeInUp');
    };

    // self.classAnimation = '';
    // function showToastr() {
    //   self.classAnimation = '';
    // }

  }
})();