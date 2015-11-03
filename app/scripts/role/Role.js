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
		        templateUrl:'views/role/RoleList.html',
		        data: {
		        	 displayName: 'Roles',

		        	  actionBarBtn: [{
                    name : 'Refresh',
                    onClick : 'RELOAD'
                   },{

	                    name : 'Delete',
	                    onClick : 'DELETE_ROLE',
	                    disable :'DELETE_BTN_DISABLE'

	                },{
	                    name : 'Properties',
	                    onClick:'EDIT_ROLE',
	                    state:'app.home.manage.role.edit',
	                    disable:'DELETE_BTN_DISABLE'


	                },{
	                    name : 'Add',
	                    onClick : 'NAVIGATE',
	                    state : 'app.home.manage.role.add'
	                   
	                }]
		        }
		    }).state('app.home.manage.role.add',{
		        url:'/add',
		        template:'<div class="inner_wrapper"><div class="container-fluid"> <div class = "col-md-8"><wc-form elements="elements" form-btns="formBtns" form-data="roles" submit-event="{{submitEvent}}"></wc-form></div></div></div>',
		        data: {
		        	 displayName: 'Add Role',

		        	  actionBarBtn: [{

	                    name : 'Cancel',
	                    onClick: 'NAVIGATE',
                        state : 'app.home.manage.role.list'
	                },{
	                    name : 'Save',
	                    onClick : 'ADD_ROLE',
	                    
	                   
	                }],

	                elements:[
                    {
                        rowClass :'col-lg-6',
                        rowElement:[{
                            name:'roleName',
                            lable:'Role Name',
                            type: 'TEXT',
                            required: true,
                            validate:'roleNameRequired',
                            placeholder:'Role Name',
                            model : 'roleName'
                        },{
                            name:'description',
                            lable:'Role Description',
                            type: 'TEXT_AREA',
                            required: true,
                            validate:'description',
                            placeholder:'Role Description',
                            model : 'description'
                        }]
                    }]
		        }
		    }).state('app.home.manage.role.edit',{
		        url:'/edit',
		        template:'<div class="inner_wrapper"><div class="container-fluid"> <div class = "col-md-8"><wc-form elements="elements" form-btns="formBtns" form-data="roles" submit-event="{{submitEvent}}"></wc-form></div></div></div>',
		        data: {
		        	 displayName: 'EditRole',

		        	  actionBarBtn: [{

	                    name : 'Cancel',
	                    onClick: 'NAVIGATE',
                        state : 'app.home.manage.role.list'
	                },{
	                    name : 'Update',
	                    onClick : 'UPDATE_ROLE',
	                   
	                }],
	                elements:[
                    {
                        rowClass :'col-lg-6',
                        rowElement:[{
                            name:'roleName',
                            lable:'Role Name',
                            type: 'TEXT',
                            required: true,
                            validate:'roleNameRequired',
                            placeholder:'Role Name',
                            model : 'roleName'
                        },{
                            name:'description',
                            lable:'Role Description',
                            type: 'TEXT_AREA',
                            required: true,
                            validate:'description',
                            placeholder:'Role description',
                            model : 'description'
                        }]
                    }]
		        }
		    });
		    
	}]);

})(angular);
