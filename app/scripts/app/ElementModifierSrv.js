'use strict';

(function(angular){
angular.module('app').service('ElementModifierSrv',
    [
        'Restangular',
        '$state',
        'Global',
        function (Restangular, $state, Global) {
            var self = this;
            self.makeValid = function (el) {
                el.removeClass('bg-red');
                el.addClass('bg-green');
            },

                           
            self.makeInvalid = function (el, errorMsg) {
                el.removeClass('bg-green');
                el.addClass('bg-red');
            },

                            
            self.makeDefault = function (el) {
                el.removeClass('bg-green');
                el.removeClass('bg-red');
            };

            self.key = "ElementModifierKey"

        }
    ]);
})(angular);