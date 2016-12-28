(function () {
    'use strict';

    angular
        .module('chairYg')
        .factory('FormService', FormService);

    /** @ngInject */
    function FormService($http, $httpParamSerializerJQLike) {

        var email = 'dazzlingdecorentals@gmail.com';
        var sendMessage = function () {
            return $http({
                method: 'POST',
                url: '//formspree.io/' + email,
                data: $httpParamSerializerJQLike({}), // pass in data as strings
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                Accept: 'application/json'
            })
        };

        return {
            sendEmail: sendMessage()
        }
    }

})();