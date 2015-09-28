
/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('user').config(
		[
		'$urlRouterProvider',
		'$stateProvider',
		function($urlProvider,$stateProvider){
		
		   	$stateProvider.state('app.home.manage.user',{
		            url:'/user',
		            templateUrl:'views/user/user.html',
		            controller : 'UserCtrl',
		            data:{
		                displayName: 'user',
		                subMenuList : [{
		                    name : 'Reset',
		                    
		                },{
		                    name : "Export"
		                },{
		                    name : "Delete"
		                },{
		                    name : "Properties"
		                },{
		                    name : "Add",
		                    state : 'app.home.manage.user.add'

		                }]
		            }
		        }).state('app.home.manage.user.add', {
		            url:'/add',
		            templateUrl:'views/user/add.html',
		            controller : 'UserCtrl',
		            data: {
		                 displayName: 'add',
		            }
		        }).state('app.home.manage.user.password', {
		            url:'/password',
		            templateUrl:'views/user/password.html',
		            controller : 'PasswordCtrl',
		            data: {
		                 displayName: 'password',
		            }
		        }).state('app.home.manage.user.roles', {
		            url:'/roles',
		            templateUrl:'views/user/roles.html',
		            controller : 'RolesCtrl',
		            data: {
		                 displayName: 'roles',
		            }
		        });
   
	}]);

})(angular);

