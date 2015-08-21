/**
 * 
 *
 *
 */

'use strict';


(function(angular){

    angular.module('microsite').config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/overview");
    // Now set up the states
    $stateProvider.state('overview', {
        url: "/overview",
        templateUrl:"views/overview/home.html"

    })
}]);

})(angular);