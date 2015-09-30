/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('role').config(
		[
		'$urlRouterProvider',
		'$stateProvider',
		function($urlProvider,$stateProvider){
		   	$stateProvider.state('app.home.manage.role',{
	            url:'/role',
	            template:'<ui-view></ui-view>',
	            controller: 'RoleCtrl',
	            abstract: true

	        }).state('app.home.manage.role.list',{
		        url:'/list',
		        templateUrl:'views/user/RoleList.html',
		        controller : 'RoleCtrl',
		        data: {
		        	 displayName: 'Roles'
		        }
		    });

		    
	}]);

})(angular);
