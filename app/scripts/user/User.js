
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
		            template:'<ui-view></ui-view>',
		            controller: 'UserCtrl',
		            abstract: true,
	              	data:{
		                displayName: 'user',
		                actionBarBtn: [{
		                    name : 'Refresh',
		                    onClickEvent : 'REFRESH',
		                },{
		                    name : "Export"
		                },{
		                    name : "Delete",
		                    onClickEvent : 'DELETE_USER',
		                },{
		                    name : "Properties"
		                },{
		                    name : "Add",
		                    onClickEvent : 'ADD_USER',
		                    state : 'app.home.manage.user.add'
		                }]
		            }
		        }).state('app.home.manage.user.list',{
			        url:'/list',
			        templateUrl:'views/user/user.html',
			        controller : 'UserCtrl',
			        data: {
			        	 displayName: 'Users',
			        }
			    });

			    $stateProvider.state('app.home.manage.user.add', {
		            url:'/add',
		            templateUrl:'views/user/add.html',
		            data:{
		                displayName: 'add',
		                actionBarBtn: [{
		                    name : 'Previous',
		                    onClickEvent : 'PREVIOUS',
		                },{
		                    name : "Next",
		                    onClickEvent : 'NEXT',
		                },{
		                    name : "Ok",
		                    onClickEvent : 'OK',
		                },{
		                    name : "Cancel",
		                    onClickEvent : 'CANCEL',
		                }]
		            }
		        }).state('app.home.manage.user.password', {
		            url:'/password',
		            templateUrl:'views/user/password.html',
		           // controller : 'PasswordCtrl',
		            data: {
		                 displayName: 'password',
		            }
		        }).state('app.home.manage.user.roles', {
		            url:'/roles',
		            templateUrl:'views/user/roles.html',
		            //controller : 'RolesCtrl',
		            data: {
		                 displayName: 'roles',
		            }
		        }); 
	}]);

})(angular);

