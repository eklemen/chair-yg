(function() {
  'use strict';

  angular
    .module('chairYg')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $httpParamSerializerJQLike) {
    var self = this;

    self.message = {};

    // function serializeData( data ) { 
    //     // If this is not an object, defer to native stringification.
    //     if ( ! angular.isObject( data ) ) { 
    //         return( ( data == null ) ? "" : data.toString() ); 
    //     }

    //     var buffer = [];

    //     // Serialize each key in the object.
    //     for ( var name in data ) { 
    //         if ( ! data.hasOwnProperty( name ) ) { 
    //             continue; 
    //         }

    //         var value = data[ name ];

    //         buffer.push(
    //             encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
    //         ); 
    //     }

    //     // Serialize the buffer and clean it up for transportation.
    //     var source = buffer.join( "&" ).replace( /%20/g, "+" ); 
    //     return( source ); 
    // }

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
            self.errorName = data.errors.name;
            self.errorSuperhero = data.errors.superheroAlias;
          } else {
            // if successful, bind success message to message
            self.message = data.message;
          }
        });
      console.log('banana');
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