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
    $urlRouterProvider.otherwise("/home/overview");
    // Now set up the states
    $stateProvider.state('home', {
        url: "/home",
        templateUrl:"views/overview/home.html"

    }).state('home.overview', {
        url: "/overview",
        templateUrl:"views/overview/overview.html"

    });
}]);

})(angular);