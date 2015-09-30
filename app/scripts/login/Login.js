/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('login').config(
		[
		'$urlRouterProvider',
		'$stateProvider',
		function($urlProvider,$stateProvider){
		   	$stateProvider.state('app.login', {
                url: '/login',
                templateUrl:'views/login/login.html',
                controller:'LoginCtrl',
                data: {
                      displayName: 'login',
                }

            }).state('app.success.',{
		        url:'/success',
		        templateUrl:'views/login/success.html',
		        controller : 'LoginCtrl',
		        data: {
		        	 displayName: 'Success'
		        }
		    });

		    
	}]);

})(angular);