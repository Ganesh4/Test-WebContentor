
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
	            abstract: true,
	            controller: 'UserCtrl',
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
	                    onClick:'EDIT_USER',
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
		        data: {
		        	 displayName: 'Users',
		        }
		    }).state('app.home.manage.user.edit',{
	         	url:'/edit',
		        template:'{{user}}<div class = "col-md-8"><wc-form elements="elements" form-btns="formBtns" form-data="user" submit-event="{{submitEvent}}"></wc-form></div>',
		       	 controller: 'UserEditCtrl',
		       	data: {
		        	displayName: 'Edit',
		        	actionBarBtn: [{
	                    name : 'Cancel',
	                    onClick : 'NAVIGATE',
	                    state : 'app.home.manage.user.list'
	                },{
	                    name : 'Update',
	                     onClick : 'UPDATE_USER',
	                }],
	                elements:[
				    {
				    	rowClass :'col-lg-6',
						rowElement:[{
							name:'firstName',
                			lable:'First Name',
                			type: 'TEXT',
                            required: true,
                            validate:'firstNameRequired',
                            placeholder:'First Name',
                            model : 'firstName'
						},{
							name:'lastName',
                			lable:'Last Name',
                			type: 'TEXT',
                            required: true,
                            validate:'lastNameRequired',
                            placeholder:'Last Name',
                            model : 'lastname'
						}]
				    },{
				    	rowClass :'col-lg-6',
						rowElement:[{
							name:'email',
                			lable:'Email',
                			type: 'TEXT',
                            required: true,
                            validate:'emailisrequired',
                            placeholder:'Email',
                            model : 'email'
						},{
							name:'company',
                			lable:'Company',
                			type: 'TEXT',
                            placeholder:'Company',
                            model : 'organizationName'
						}]
				    },{
				    	rowClass :'col-lg-6',
						rowElement:[{
							name:'address1',
                			lable:'Address 1',
                			type: 'TEXT',
                            placeholder:'Address 1',
                            model : 'address1'
						},{
							name:'address2',
                			lable:'Address 2',
                			type: 'TEXT',
                            placeholder:'Address 2',
                            model : 'address2'
						}]
				    },{
				    	rowClass :'col-lg-6',
						rowElement:[{
							name:'phone',
                			lable:'Phone',
                			type: 'PATTERN',
                            required: true,
                            validate:'invalidPhoneNo',
                            pattern :'/^[0-9]{10,13}$/',
                            placeholder:'Phone',
                            model : 'phone'
						},{
							 name:'mobile',
                            lable:'Mobile',
                            type: 'PATTERN',
                            required: true,
                            validate:'invalidMobile',
                            pattern :'/^[0-9]{10,13}$/',
                            placeholder:'mobile',
                            model : 'mobile'
						}]
				    },{
				    	rowClass :'col-lg-6',
						rowElement:[{
							name:'city',
                			lable:'City',
                			type: 'TEXT',
                            placeholder:'City',
                            model : 'city'
						},{
                            name:'country',
                            lable:'Country',
                            type: 'DROP_DOWN',
                            required: false,
                            placeholder:'Country',
                            model : 'country',
                            onChange : 'updateCountry()',
                            ngOptions: 'country.CountryName for country in countries'
                        }]
				    },{
				    	rowClass :'col-lg-6',
						rowElement:[{
							 name:'state',
                            lable:'state',
                            type: 'DROP_DOWN',
                            required: false,
                            placeholder:'State',
                            model : 'state',
                            ngOptions:'state.StateName for state in states'
						},{
                             name:'zip',
                            lable:'Zip',
                            type: 'TEXT',
                            required: false,
                            placeholder:'Zip',
                            model : 'zip',
                        }]
				    }]
		        	
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
