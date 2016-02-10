(function() {
  'use strict';

  angular
    .module('chairYg')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $httpParamSerializerJQLike) {
    var self = this;

    self.message = {};
    self.emailForm;
    self.alertSuccess = function(){
      swal('Thanks!',
        'We will get back to you soon.',
        'success');
    };
    self.alertError = function(){
      swal('Oops...',
        'There was a problem sending your email.',
        'error');
    };

    self.sendMessage = function() {
        $http({
            method  : 'POST',
            url     : '//formspree.io/ejklemen@gmail.com',
            data    : $httpParamSerializerJQLike(self.message), // pass in data as strings
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            Accept: 'application/json'
         })
        .then(function(data) {
                console.log(data);

                if (data.status === 200 && self.emailForm.$valid) {
                     // if successful, bind success message to message
                    debugger;
                    self.alertSuccess();
                    self.message = data.message;
                    self.emailForm.$setPristine();
                    self.emailForm.$setUntouched();
                } else {
                    // if not successful, bind errors to error variables
                    debugger;
                    self.alertError()
                    // self.errorName = data.errors.name;
                    self.emailForm.$setPristine();
                    self.emailForm.$setUntouched();
                }
            });
    }

    
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