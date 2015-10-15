
/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('register').config(
		[
		'$urlRouterProvider',
		'$stateProvider',
		function($urlProvider,$stateProvider){
		   	$stateProvider.state('app.register',{
                url: '/register',
                template: '<ui-view></ui-view>',
                abstract: true,
            }).state('app.register.user', {
                url: '/user',
                templateUrl:'views/register/registration.html',
                controller:'RegisterCtrl',
                data: {
					displayName: 'New User Registration',
                    submitEvent: 'USER_REGISTER',
                	elements:[
                    {
                        rowClass :'col-lg-4',
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
                            model : 'lastName'
                        },{
                            name:'email',
                            lable:'Email',
                            type: 'TEXT',
                            required: true,
                            validate:'emailisrequired',
                            placeholder:'Email',
                            model : 'email'
                        }]
                	},{
                        rowClass :'col-lg-4',
                		rowElement:[{
                            name:'phone',
                            lable:'Phone',
                            type: 'PATTERN',
                            required: true,
                            validate:'invalidPhoneNo',
                            pattern :'/^[0-9]{10,13}$/',
                            placeholder:'phone',
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
                        rowClass :'col-lg-4',
                        rowElement:[{
                            name:'address1',
                            lable:'Address Line 1',
                            type: 'TEXT',
                            required: false,
                            placeholder:'Address Line 1',
                            model : 'address1',
                        },{
                            name:'city',
                            lable:'City',
                            type: 'TEXT',
                            required: false,
                            placeholder:'City',
                            model : 'city'
                        }]
                    },{
                        rowClass :'col-lg-4',
                        rowElement:[{
                            name:'state',
                            lable:'State',
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
                        },{
                            name:'captcha',
                            lable:'Prove you are not a robot',
                            type: 'CAPTCHA',
                            required: false,
                        }],
                    },{
                        rowClass :'col-lg-4',
                        rowElement:[{
                            name:'I here by agree to  the yavun terms of service and policy',
                            //lable:'',
                            type:'CHECKBOX',
                            required:true
                        },{
                            name:'Submit',
                            type:'BUTTON',
                            btnType:'submit',
                            css:'btn btn-success',
                        }],
                    }
                    ] 
                }
            }).state('app.register.success', {
                url: '/success',
                templateUrl:'views/user/success.html',
                data: {
                      displayName: 'Success',
                }
            }); 
		}]);
})(angular);

