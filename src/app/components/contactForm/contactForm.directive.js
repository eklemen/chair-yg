(function () {
    'use strict';

    angular
        .module('chairYg')
        .directive('contactForm', contactForm);

    /** @ngInject */
    function contactForm() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/contactForm/contactForm.html',
            controller: ContactFormController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function ContactFormController(FormService) {
            var vm = this;

            vm.message = {};
            vm.emailForm;
            vm.alertSuccess = function () {
                swal('Thanks!',
                    'We will get back to you soon.',
                    'success');
            };
            vm.alertError = function () {
                swal('Oops...',
                    'There was a problem sending your email.',
                    'error');
            };

            vm.sendMessage = function() {
                FormService.sendEmail.then(function (data) {

                    if (data.status === 200 && vm.emailForm.$valid) {
                        // if successful, bind success message to message
                        vm.alertSuccess();
                        vm.message = data.message;
                        vm.emailForm.$setPristine();
                        vm.emailForm.$setUntouched();
                    } else {
                        // if not successful, bind errors to error variables
                        vm.alertError()
                        // vm.errorName = data.errors.name;
                        // vm.emailForm.$setPristine();
                        // vm.emailForm.$setUntouched();
                    }
                });
            }

        }
    }

})();
