
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
	                    onClick : 'RELOAD',
	                },{
	                    name : "Export"
	                },{
	                    name : "Delete",
	                    onClick : 'DELETE_USER',
	                    disable :'DELETE_BTN_DISABLE',
	                },{
	                    name : "Properties",
	                    disable :'EDIT_BTN_DISABLE',
	                },{
	                    name : "Add",
	                    onClick : 'NAVIGATE',
	                    state : 'app.home.manage.user.add.general'
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
	         	template:'<ui-view></ui-view>',
                abstract: true,
	            data:{
	                displayName: 'add',
	                LeftNavList:[
	                    {
	                        icon : 'fa fa-angle-down',
	                        name : 'Steps',
	                        menu : [
			                    {
			                    	icon : 'fa fa-info-circle',
			                        name : 'General',
			                        state: 'app.home.manage.user.add.general',
			                    },{
			                        icon : 'fa fa-lightbulb-o',
			                        name : 'Credentials',
			                        state:'app.home.manage.user.add.credentials',
			                    },{
			                        icon : 'fa fa-users',
			                        name : 'Roles',
			                        state:'app.home.manage.user.add.roles'
			                    }
	                        ]
	                    }
                    ],
                    actionBarBtn: [
	                    {
			            	name : "Cancel",
			                onClick : 'WIZARD_CANCLE',
                            state : 'app.home.manage.user.list'
			            },{
	                    	name : "Ok",
	                        onClick : 'ADD_NEW_USER',
	                        disable : 'OK_BTN_DISABLE',
                            state:'app.home.manage.user.list',
	                    },{
	                        name : "Next",
	                        onClick : 'WIZARD_NEXT',
	                        disable : 'NEXT_BTN_DISABLE'
	                    },{
	                        name : 'Previous',
	                        onClick : 'WIZARD_PREVIOUS',
	                        disable : 'PREVIOUS_BTN_DISABLE'
	                    }
	                ],
	                wizardSteps:[
	                	'app.home.manage.user.add.general',
	                	'app.home.manage.user.add.credentials',
	                	'app.home.manage.user.add.roles'
	                ]
              	}
	        }).state('app.home.manage.user.add.general',{
	        	url:'/general',
	        	templateUrl:'views/user/add.html',
	        	data:{
	        		 displayName: 'General',
	        	}
	        }).state('app.home.manage.user.add.credentials', {
	            url:'/credentials',
	            templateUrl:'views/user/password.html',
	           data:{
	                displayName: 'Credentials',
	            }
	        }).state('app.home.manage.user.add.roles', {
	            url:'/roles',
	            templateUrl:'views/user/roles.html',
	           	data:{
	                displayName: 'Roles',
	            }
	        }); 
	}]);
})(angular);
