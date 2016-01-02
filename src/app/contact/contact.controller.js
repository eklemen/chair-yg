(function() {
  'use strict';

  angular
    .module('chairYg')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($http, $httpParamSerializerJQLike) {
    var self = this;

    self.message = {};
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
      .success(function(data) {
          console.log(data);

          if (!data.success) {
            // if not successful, bind errors to error variables
            self.alertError()
            self.errorName = data.errors.name;
            self.errorSuperhero = data.errors.superheroAlias;
          } else {
            // if successful, bind success message to message
            self.alertSuccess();
            self.message = data.message;
          }
        });
      console.log('banana');
    }

  }
})();