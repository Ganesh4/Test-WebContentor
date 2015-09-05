'use strict';

(function(angular) {
    angular.module('microsite').config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('active',{
        url : '/ganesh',
        templateUrl : './views/commons/leftnav/leftnav.html',
        controller : 'selectFilter'
    });

    }]);
})(angular);


